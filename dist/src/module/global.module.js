"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Department_1 = require("../../entities/Department");
const Roles_1 = require("../../entities/Roles");
const UserBonusPoints_1 = require("../../entities/UserBonusPoints");
const UserMembers_1 = require("../../entities/UserMembers");
const UserPassword_1 = require("../../entities/UserPassword");
const UserProfiles_1 = require("../../entities/UserProfiles");
const UserRoles_1 = require("../../entities/UserRoles");
const Users_1 = require("../../entities/Users");
const department_controller_1 = require("../controller/humanresource/department/department.controller");
const auth_controller_1 = require("../controller/users/auth/auth.controller");
const roles_controller_1 = require("../controller/users/roles/roles.controller");
const userbonuspoints_controller_1 = require("../controller/users/userbonuspoints/userbonuspoints.controller");
const usermembers_controller_1 = require("../controller/users/usermembers/usermembers.controller");
const userpassword_controller_1 = require("../controller/users/userpassword/userpassword.controller");
const userprofiles_controller_1 = require("../controller/users/userprofiles/userprofiles.controller");
const userroles_controller_1 = require("../controller/users/userroles/userroles.controller");
const users_controller_1 = require("../controller/users/users/users.controller");
const department_service_1 = require("../service/humanresource/department/department.service");
const auth_service_1 = require("../service/users/auth/auth.service");
const roles_service_1 = require("../service/users/roles/roles.service");
const userbonuspoints_service_1 = require("../service/users/userbonuspoints/userbonuspoints.service");
const usermembers_service_1 = require("../service/users/usermembers/usermembers.service");
const userpassword_service_1 = require("../service/users/userpassword/userpassword.service");
const userprofiles_service_1 = require("../service/users/userprofiles/userprofiles.service");
const userroles_service_1 = require("../service/users/userroles/userroles.service");
const users_service_1 = require("../service/users/users/users.service");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Department_1.Department, Users_1.Users, Roles_1.Roles, UserRoles_1.UserRoles, UserPassword_1.UserPassword, UserBonusPoints_1.UserBonusPoints, UserMembers_1.UserMembers, UserProfiles_1.UserProfiles])],
        controllers: [department_controller_1.DepartmentController, users_controller_1.UsersController, roles_controller_1.RolesController, userroles_controller_1.UserrolesController, userpassword_controller_1.UserpasswordController, auth_controller_1.AuthController, userbonuspoints_controller_1.UserbonuspointsController, usermembers_controller_1.UsermembersController, userprofiles_controller_1.UserprofilesController],
        providers: [department_service_1.DepartmentService, users_service_1.UsersService, roles_service_1.RolesService, userroles_service_1.UserrolesService, userpassword_service_1.UserpasswordService, auth_service_1.AuthService, userbonuspoints_service_1.UserbonuspointsService, usermembers_service_1.UsermembersService, userprofiles_service_1.UserprofilesService],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map