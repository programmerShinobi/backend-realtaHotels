"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Employee_1 = require("../../../../entities/Employee");
const typeorm_2 = require("typeorm");
const axios_1 = require("@nestjs/axios");
require("dotenv/config");
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
let EmployeeService = class EmployeeService {
    constructor(employeeRepository, httpService) {
        this.employeeRepository = employeeRepository;
        this.httpService = httpService;
    }
    async findAllEmployee() {
        return await this.employeeRepository.query('select * from getAllEmployee()');
    }
    async findOneEmployee(id) {
        return await this.employeeRepository.findOne({
            where: id
        });
    }
    async createEmployee(data) {
        return await this.employeeRepository.query('CALL humanresource.insertemployee($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18, $19)', [
            data.emp_national_id,
            data.emp_birth_date,
            data.emp_marital_status,
            data.emp_gender,
            data.emp_hire_date,
            data.emp_salaried_flag,
            data.emp_vacation_hours,
            data.emp_sickleave_hours,
            data.emp_current_flag,
            data.emp_photo,
            1,
            data.emp_joro_id,
            data.ephi_rate_salary,
            data.ephi_pay_frequence,
            data.edhi_start_date,
            data.edhi_end_date,
            data.dept_id,
            data.shift_id,
            data.user_id,
        ]);
    }
    async updateEmployee(empId, data) {
        return await this.employeeRepository.query('CALL humanresource.updateemployee($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)', [
            data.emp_birth_date,
            data.emp_marital_status,
            data.emp_gender,
            data.emp_hire_date,
            data.emp_salaried_flag,
            data.emp_vacation_hours,
            data.emp_sickleave_hours,
            data.emp_current_flag,
            data.emp_photo,
            1,
            data.emp_joro_id,
            data.emp_user_id,
            empId,
        ]);
    }
    async deleteEmployee(empId) {
        return await this.employeeRepository.delete({
            empId: empId,
        });
    }
    async uploadImage(file) {
        const firebaseConfig = {
            apiKey: 'AIzaSyBjVOpJ9AURYiYJewt3OPg0IJs3vc6rgco',
            authDomain: 'hotel-realta.firebaseapp.com',
            projectId: 'hotel-realta',
            storageBucket: 'hotel-realta.appspot.com',
            messagingSenderId: '1034304538174',
            appId: '1:1034304538174:web:8a7da6a85152bc93d0b36f',
            measurementId: 'G-95CZN3EK2S',
        };
        const app = (0, app_1.initializeApp)(firebaseConfig);
        let urlImage = "";
        const storage = (0, storage_1.getStorage)(app);
        const path = require('path');
        const extension = path.parse(file.originalname).ext;
        var timestamp = new Date().toISOString().replace(/[-:.]/g, '');
        var random = ('' + Math.random()).substring(2, 8);
        var originalname = timestamp + random + extension;
        const storageRef = (0, storage_1.ref)(storage, `images/${originalname}`);
        const metatype = {
            contentType: file.mimetype,
            name: file.originalname,
        };
        const result = await (0, storage_1.uploadBytes)(storageRef, file.buffer, metatype);
        if (result) {
            return await (0, storage_1.getDownloadURL)(storageRef);
        }
        else {
            throw new Error("error uploading file");
        }
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Employee_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        axios_1.HttpService])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map