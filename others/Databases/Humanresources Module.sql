-- MODULE HUMANRESOURCES
CREATE SCHEMA humanresources;
CREATE TABLE humanresources.job_role(
	joro_id serial primary key,
	joro_name varchar(55) unique,
	joro_modified_date timestamp
);

CREATE TABLE humanresources.employee(
	emp_id serial primary key,
	emp_national_id varchar(25) unique,
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
	foreign key (emp_emp_id) references humanresources.employee(emp_id) on delete cascade on update cascade,
	foreign key (emp_joro_id) references humanresources.job_role(joro_id) on delete cascade on update cascade
);

CREATE TABLE humanresources.shift(
	shift_id serial primary key,
	shift_name varchar(25) unique,
	shift_start_time timestamp unique,
	shift_end_time timestamp unique
);

CREATE TABLE humanresources.employee_department_history(
	edhi_id serial,
	edhi_emp_id integer,
	edhi_start_date timestamp,
	edhi_end_date timestamp,
	edhi_modified_date timestamp,
	edhi_dept_id integer,
	edhi_shift_id integer,
	primary key(edhi_id, edhi_emp_id),
	foreign key (edhi_emp_id) references humanresources.employee (emp_id)
	on delete cascade on update cascade,
	foreign key (edhi_dept_id) references humanresources.department (dept_id)
	on delete cascade on update cascade,
	foreign key (edhi_shift_id) references humanresources.shift (shift_id)
	on delete cascade on update cascade
);

CREATE TABLE humanresources.department(
	dept_id serial primary key,
	dept_name varchar(50),
	dept_modified_date timestamp	
);

CREATE TABLE humanresources.employee_pay_history(
	ephi_emp_id integer,
	ephi_rate_change_date date,
	ephi_rate_salary money,
	ephi_pay_frequence smallint,
	ephi_modified_date timestamp,
	primary key(ephi_emp_id, ephi_rate_change_date),
	foreign key (ephi_emp_id) references humanresources.employee(emp_id)
	on delete cascade on update cascade
);

CREATE TABLE humanresources.work_orders(
	woro_id serial primary key,
	woro_start_date timestamp,
	woro_status varchar(15),
	woro_user_id integer,
	foreign key (woro_user_id) references users.users(user_id) on delete cascade on update cascade
);

CREATE TABLE humanresources.work_order_detail(
	wode_id serial primary key,
	wode_task_name varchar(255),
	wode_status varchar(15),
	wode_start_date timestamp,
	wode_end_date timestamp,
	wode_notes varchar(255),
	wode_emp_id integer,
	wode_seta_id integer,
	wode_faci_id integer,
	wode_woro_id integer,
	foreign key (wode_emp_id) references humanresources.employee(emp_id) on delete cascade on update cascade,
	foreign key (wode_seta_id) references master.service_task(seta_id) on delete cascade on update cascade,
	foreign key (wode_faci_id) references hotel.facilities(faci_id) on delete cascade on update cascade,
	foreign key (wode_woro_id) references humanresources.work_orders(woro_id) on delete cascade on update cascade
);