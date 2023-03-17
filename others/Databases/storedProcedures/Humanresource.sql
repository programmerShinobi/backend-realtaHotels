
CREATE OR REPLACE FUNCTION humanresource.getAllEmployee () 
    RETURNS TABLE (
        user_full_name VARCHAR,
        emp_id integer,
		emp_national_id varchar(25),
		emp_birth_date timestamp,
		emp_marital_status char(1),
		emp_gender char(1),
		emp_hire_date timestamp,
		emp_salaried_flag char(1),
		emp_vacation_hours smallint,
		emp_sickleave_hours smallint,
		emp_current_flag smallint,
		emp_photo varchar(225),
		emp_modified_date timestamp,
		emp_emp_id integer,
		emp_joro_id integer,
		emp_user_id integer
		
)
AS $$
BEGIN
    RETURN QUERY SELECT u.user_full_name, e.* FROM humanresource.employee e
	JOIN users.users u ON e.emp_user_id = u.user_id
	ORDER BY e.emp_id ASC
	;

END; $$ 
LANGUAGE 'plpgsql';

-- INSERT EMPLOYEE
CREATE EXTENSION pgcrypto;
CREATE OR REPLACE PROCEDURE humanresource.insertemployee(
	in emp_national_id varchar(25), 
	in emp_birth_date timestamp,
	in emp_marital_status varchar(1),
	in emp_gender varchar(1),
	in emp_hire_date timestamp,
	in emp_salaried_flag varchar(1),
	in emp_vacation_hours integer,
	in emp_sickleave_hours integer,
	in emp_current_flag integer,
	in emp_photo varchar(225),
	in emp_emp_id integer,
	in emp_joro_id integer,
	in ephi_rate_salary integer,
	in ephi_pay_frequence integer,
	in edhi_start_date timestamp,
	in edhi_end_date timestamp,
	in edhi_dept_id integer,
	in edhi_shift_id integer,
	in user_id integer
)
LANGUAGE plpgsql
AS $$
DECLARE
  emp_id integer;
  woro_id integer;
	
BEGIN

	INSERT INTO humanresource.employee 
	(emp_national_id, emp_birth_date, emp_marital_status, emp_salaried_flag,
	emp_vacation_hours, emp_joro_id, emp_hire_date, emp_gender,
	emp_current_flag, emp_sickleave_hours, emp_photo, emp_modified_date, emp_emp_id, emp_user_id) VALUES 
	(emp_national_id, emp_birth_date, emp_marital_status, emp_salaried_flag,
	emp_vacation_hours, emp_joro_id, emp_hire_date, emp_gender,
	emp_current_flag, emp_sickleave_hours, emp_photo, now(), 1, user_id)  
	RETURNING humanresource.employee.emp_id INTO emp_id;
	
	INSERT INTO humanresource.work_orders( woro_start_date, woro_user_id) 
	VALUES (now(), user_id) RETURNING humanresource.work_orders.woro_id INTO woro_id;
	
	INSERT INTO humanresource.work_order_detail( wode_emp_id, wode_woro_id)
	VALUES (emp_id, woro_id );
	
	INSERT INTO humanresource.employee_pay_history(ephi_emp_id,	ephi_rate_change_date ,ephi_rate_salary, ephi_pay_frequence)
	VALUES(emp_id, now(), ephi_rate_salary, ephi_pay_frequence);
	
	INSERT INTO humanresource.employee_department_history(edhi_emp_id, edhi_start_date, edhi_end_date, edhi_dept_id, edhi_shift_id)
	VALUES(emp_id, edhi_start_date, edhi_end_date, edhi_dept_id, edhi_shift_id);
END;
$$;

-- UPDATE EMPLOYEE
CREATE OR REPLACE PROCEDURE humanresource.updateemployee(
	in input_emp_birth_date timestamp,
	in input_emp_marital_status varchar(1),
	in input_emp_gender varchar(1),
	in input_emp_hire_date timestamp,
	in input_emp_salaried_flag varchar(1),
	in input_emp_vacation_hours integer,
	in input_emp_sickleave_hours integer,
	in input_emp_current_flag integer,
	in input_emp_photo varchar(225),
	in input_emp_emp_id integer,
	in input_emp_joro_id integer,
	in input_emp_user_id integer,
	in input_emp_id integer
)
LANGUAGE plpgsql
AS $$
DECLARE

BEGIN

	UPDATE humanresource.employee SET 
	emp_birth_date = input_emp_birth_date, 
	emp_marital_status = input_emp_marital_status, 
	emp_gender = input_emp_gender,
	emp_hire_date = input_emp_hire_date, 
	emp_salaried_flag = input_emp_salaried_flag,
	emp_vacation_hours = input_emp_vacation_hours,
	emp_sickleave_hours = input_emp_sickleave_hours, 
	emp_current_flag = input_emp_current_flag, 
	emp_photo = input_emp_photo, 
	emp_emp_id = input_emp_emp_id,
	emp_joro_id = input_emp_joro_id, 
	emp_user_id = input_emp_user_id,
	emp_modified_date = now()
	WHERE humanresource.employee.emp_id = input_emp_id;
END;
$$;

-- GET EMPLOYEE PAY HISTORY
CREATE OR REPLACE FUNCTION humanresource.getAllEmployeePayHistory (in input_emp_id integer) 
    RETURNS TABLE (
    ephi_emp_id integer,
	ephi_rate_change_date timestamp,
	ephi_rate_salary money,
	ephi_pay_frequence smallint,
	ephi_modified_date timestamp
		
)
AS $$
BEGIN
    RETURN QUERY SELECT eph.* FROM humanresource.employee_pay_history eph
	JOIN humanresource.employee e ON e.emp_id = eph.ephi_emp_id
	WHERE eph.ephi_emp_id = input_emp_id
	;

END; $$ 
LANGUAGE 'plpgsql';

-- GET EMPLOYEE DEPARTMENT HISTORY
CREATE OR REPLACE FUNCTION humanresource.getAllEmployeeDepartmentHistory (in input_emp_id integer) 
    RETURNS TABLE (
    edhi_start_date timestamp,
	edhi_end_date timestamp,   
	dept_name varchar(50),
	
)
AS $$
BEGIN
    RETURN QUERY SELECT edh.edhi_start_date, edh.edhi_end_date, d.dept_name 
	FROM humanresource.employee_department_history edh 
	JOIN humanresource.department d ON edh.edhi_dept_id = d.dept_id
	WHERE edh.edhi_emp_id = input_emp_id
	;

END; $$ 
LANGUAGE 'plpgsql';
