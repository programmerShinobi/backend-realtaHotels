"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Address_1 = require("../../entities/Address");
const Bank_1 = require("../../entities/Bank");
const BookingOrderDetail_1 = require("../../entities/BookingOrderDetail");
const BookingOrderDetailExtra_1 = require("../../entities/BookingOrderDetailExtra");
const BookingOrders_1 = require("../../entities/BookingOrders");
const CategoryGroup_1 = require("../../entities/CategoryGroup");
const Country_1 = require("../../entities/Country");
const Department_1 = require("../../entities/Department");
const Employee_1 = require("../../entities/Employee");
const EmployeeDepartmentHistory_1 = require("../../entities/EmployeeDepartmentHistory");
const EmployeePayHistory_1 = require("../../entities/EmployeePayHistory");
const Facilities_1 = require("../../entities/Facilities");
const FacilityPhotos_1 = require("../../entities/FacilityPhotos");
const FacilityPriceHistory_1 = require("../../entities/FacilityPriceHistory");
const HotelReviews_1 = require("../../entities/HotelReviews");
const Hotels_1 = require("../../entities/Hotels");
const JobRole_1 = require("../../entities/JobRole");
const Members_1 = require("../../entities/Members");
const OrderMenuDetail_1 = require("../../entities/OrderMenuDetail");
const OrderMenus_1 = require("../../entities/OrderMenus");
const PaymentGateaway_1 = require("../../entities/PaymentGateaway");
const PaymentTransaction_1 = require("../../entities/PaymentTransaction");
const Policy_1 = require("../../entities/Policy");
const PolicyCategoryGroup_1 = require("../../entities/PolicyCategoryGroup");
const PriceItems_1 = require("../../entities/PriceItems");
const Provinces_1 = require("../../entities/Provinces");
const PurchaseOrderDetail_1 = require("../../entities/PurchaseOrderDetail");
const PurchaseOrderHeader_1 = require("../../entities/PurchaseOrderHeader");
const Regions_1 = require("../../entities/Regions");
const RestoMenuPhotos_1 = require("../../entities/RestoMenuPhotos");
const RestoMenus_1 = require("../../entities/RestoMenus");
const Roles_1 = require("../../entities/Roles");
const ServiceTask_1 = require("../../entities/ServiceTask");
const Shift_1 = require("../../entities/Shift");
const SpecialOfferCoupons_1 = require("../../entities/SpecialOfferCoupons");
const SpecialOffers_1 = require("../../entities/SpecialOffers");
const StockDetail_1 = require("../../entities/StockDetail");
const StockPhoto_1 = require("../../entities/StockPhoto");
const Stocks_1 = require("../../entities/Stocks");
const UserAccounts_1 = require("../../entities/UserAccounts");
const UserBonusPoints_1 = require("../../entities/UserBonusPoints");
const UserBreakfeast_1 = require("../../entities/UserBreakfeast");
const UserMembers_1 = require("../../entities/UserMembers");
const UserPassword_1 = require("../../entities/UserPassword");
const UserProfiles_1 = require("../../entities/UserProfiles");
const UserRoles_1 = require("../../entities/UserRoles");
const Users_1 = require("../../entities/Users");
const Vendor_1 = require("../../entities/Vendor");
const WorkOrderDetail_1 = require("../../entities/WorkOrderDetail");
const WorkOrders_1 = require("../../entities/WorkOrders");
const department_controller_1 = require("../controller/humanresource/department/department.controller");
const employee_controller_1 = require("../controller/humanresource/employee/employee.controller");
const employee_department_history_controller_1 = require("../controller/humanresource/employee_department_history/employee_department_history.controller");
const employee_pay_history_controller_1 = require("../controller/humanresource/employee_pay_history/employee_pay_history.controller");
const job_role_controller_1 = require("../controller/humanresource/job_role/job_role.controller");
const shift_controller_1 = require("../controller/humanresource/shift/shift.controller");
const upload_controller_1 = require("../controller/humanresource/upload/upload.controller");
const work_order_detail_controller_1 = require("../controller/humanresource/work_order_detail/work_order_detail.controller");
const work_orders_controller_1 = require("../controller/humanresource/work_orders/work_orders.controller");
const auth_controller_1 = require("../controller/payment/auth/auth.controller");
const bank_controller_1 = require("../controller/payment/bank/bank.controller");
const payment_gateaway_controller_1 = require("../controller/payment/payment_gateaway/payment_gateaway.controller");
const transaction_controller_1 = require("../controller/payment/transaction/transaction.controller");
const user_accounts_controller_1 = require("../controller/payment/user_accounts/user_accounts.controller");
const auth_controller_2 = require("../controller/users/auth/auth.controller");
const roles_controller_1 = require("../controller/users/roles/roles.controller");
const userbonuspoints_controller_1 = require("../controller/users/userbonuspoints/userbonuspoints.controller");
const usermembers_controller_1 = require("../controller/users/usermembers/usermembers.controller");
const userpassword_controller_1 = require("../controller/users/userpassword/userpassword.controller");
const userprofiles_controller_1 = require("../controller/users/userprofiles/userprofiles.controller");
const userroles_controller_1 = require("../controller/users/userroles/userroles.controller");
const users_controller_1 = require("../controller/users/users/users.controller");
const department_service_1 = require("../service/humanresource/department/department.service");
const employee_service_1 = require("../service/humanresource/employee/employee.service");
const employee_department_history_service_1 = require("../service/humanresource/employee_department_history/employee_department_history.service");
const employee_pay_history_service_1 = require("../service/humanresource/employee_pay_history/employee_pay_history.service");
const job_role_service_1 = require("../service/humanresource/job_role/job_role.service");
const shift_service_1 = require("../service/humanresource/shift/shift.service");
const upload_service_1 = require("../service/humanresource/upload/upload.service");
const work_order_detail_service_1 = require("../service/humanresource/work_order_detail/work_order_detail.service");
const work_orders_service_1 = require("../service/humanresource/work_orders/work_orders.service");
const auth_service_1 = require("../service/payment/auth/auth.service");
const bank_service_1 = require("../service/payment/bank/bank.service");
const payment_gateaway_service_1 = require("../service/payment/payment_gateaway/payment_gateaway.service");
const transaction_service_1 = require("../service/payment/transaction/transaction.service");
const user_accounts_service_1 = require("../service/payment/user_accounts/user_accounts.service");
const auth_service_2 = require("../service/users/auth/auth.service");
const roles_service_1 = require("../service/users/roles/roles.service");
const userbonuspoints_service_1 = require("../service/users/userbonuspoints/userbonuspoints.service");
const usermembers_service_1 = require("../service/users/usermembers/usermembers.service");
const userpassword_service_1 = require("../service/users/userpassword/userpassword.service");
const userprofiles_service_1 = require("../service/users/userprofiles/userprofiles.service");
const userroles_service_1 = require("../service/users/userroles/userroles.service");
const users_service_1 = require("../service/users/users/users.service");
const address_controller_1 = require("../controller/master/address/address.controller");
const category_group_controller_1 = require("../controller/master/category_group/category_group.controller");
const countries_controller_1 = require("../controller/master/countries/countries.controller");
const members_controller_1 = require("../controller/master/members/members.controller");
const policy_controller_1 = require("../controller/master/policy/policy.controller");
const policy_category_group_controller_1 = require("../controller/master/policy_category_group/policy_category_group.controller");
const price_items_controller_1 = require("../controller/master/price_items/price_items.controller");
const provinces_controller_1 = require("../controller/master/provinces/provinces.controller");
const region_controller_1 = require("../controller/master/region/region.controller");
const service_task_controller_1 = require("../controller/master/service_task/service_task.controller");
const address_service_1 = require("../service/master/address/address.service");
const category_group_service_1 = require("../service/master/category_group/category_group.service");
const countries_service_1 = require("../service/master/countries/countries.service");
const members_service_1 = require("../service/master/members/members.service");
const policy_service_1 = require("../service/master/policy/policy.service");
const policy_category_group_service_1 = require("../service/master/policy_category_group/policy_category_group.service");
const price_items_service_1 = require("../service/master/price_items/price_items.service");
const provinces_service_1 = require("../service/master/provinces/provinces.service");
const region_service_1 = require("../service/master/region/region.service");
const service_task_service_1 = require("../service/master/service_task/service_task.service");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([
                Address_1.Address,
                Bank_1.Bank,
                BookingOrderDetail_1.BookingOrderDetail,
                BookingOrderDetailExtra_1.BookingOrderDetailExtra,
                BookingOrders_1.BookingOrders,
                CategoryGroup_1.CategoryGroup,
                Country_1.Country,
                Department_1.Department,
                Employee_1.Employee,
                EmployeeDepartmentHistory_1.EmployeeDepartmentHistory,
                EmployeePayHistory_1.EmployeePayHistory,
                Facilities_1.Facilities,
                FacilityPhotos_1.FacilityPhotos,
                FacilityPriceHistory_1.FacilityPriceHistory,
                HotelReviews_1.HotelReviews,
                Hotels_1.Hotels,
                JobRole_1.JobRole,
                Members_1.Members,
                OrderMenuDetail_1.OrderMenuDetail,
                OrderMenus_1.OrderMenus,
                PaymentGateaway_1.PaymentGateaway,
                PaymentTransaction_1.PaymentTransaction,
                Policy_1.Policy,
                PolicyCategoryGroup_1.PolicyCategoryGroup,
                PriceItems_1.PriceItems,
                Provinces_1.Provinces,
                PurchaseOrderDetail_1.PurchaseOrderDetail,
                PurchaseOrderHeader_1.PurchaseOrderHeader,
                Regions_1.Regions,
                RestoMenuPhotos_1.RestoMenuPhotos,
                RestoMenus_1.RestoMenus,
                Roles_1.Roles,
                ServiceTask_1.ServiceTask,
                Shift_1.Shift,
                SpecialOfferCoupons_1.SpecialOfferCoupons,
                SpecialOffers_1.SpecialOffers,
                StockDetail_1.StockDetail,
                StockPhoto_1.StockPhoto,
                Stocks_1.Stocks,
                UserAccounts_1.UserAccounts,
                UserBonusPoints_1.UserBonusPoints,
                UserBreakfeast_1.UserBreakfeast,
                UserMembers_1.UserMembers,
                UserPassword_1.UserPassword,
                UserProfiles_1.UserProfiles,
                UserRoles_1.UserRoles,
                Users_1.Users,
                Vendor_1.Vendor,
                WorkOrderDetail_1.WorkOrderDetail,
                WorkOrders_1.WorkOrders,
            ]),
        ],
        controllers: [
            department_controller_1.DepartmentController,
            shift_controller_1.ShiftController,
            job_role_controller_1.JobroleController,
            employee_controller_1.EmployeeController,
            employee_department_history_controller_1.EmployeeDepartmentHistoryController,
            employee_pay_history_controller_1.EmployeePayHistoryController,
            work_order_detail_controller_1.WorkOrderDetailController,
            work_orders_controller_1.WorkOrdersController,
            upload_controller_1.UploadController,
            users_controller_1.UsersController,
            roles_controller_1.RolesController,
            userroles_controller_1.UserrolesController,
            userpassword_controller_1.UserpasswordController,
            auth_controller_2.AuthController,
            userbonuspoints_controller_1.UserbonuspointsController,
            usermembers_controller_1.UsermembersController,
            userprofiles_controller_1.UserprofilesController,
            bank_controller_1.BankController,
            payment_gateaway_controller_1.PaymentGateawayController,
            user_accounts_controller_1.UserAccountsController,
            transaction_controller_1.TransactionController,
            auth_controller_1.UserAccountAuthController,
            region_controller_1.RegionController,
            countries_controller_1.CountriesController,
            provinces_controller_1.ProvincesController,
            address_controller_1.AddressController,
            category_group_controller_1.CategoryGroupController,
            policy_controller_1.PolicyController,
            policy_category_group_controller_1.PolicyCategoryGroupController,
            price_items_controller_1.PriceItemsController,
            service_task_controller_1.ServiceTaskController,
            members_controller_1.MembersController,
        ],
        providers: [
            department_service_1.DepartmentService,
            shift_service_1.ShiftService,
            job_role_service_1.JobRoleService,
            employee_service_1.EmployeeService,
            employee_pay_history_service_1.EmployeePayHistoryService,
            work_order_detail_service_1.WorkOrderDetailService,
            employee_department_history_service_1.EmployeeDepartmentHistoryService,
            work_orders_service_1.WorkOrdersService,
            upload_service_1.UploadService,
            users_service_1.UsersService,
            roles_service_1.RolesService,
            userroles_service_1.UserrolesService,
            userpassword_service_1.UserpasswordService,
            auth_service_2.AuthService,
            userbonuspoints_service_1.UserbonuspointsService,
            usermembers_service_1.UsermembersService,
            userprofiles_service_1.UserprofilesService,
            bank_service_1.BankService,
            payment_gateaway_service_1.PaymentGateawayService,
            user_accounts_service_1.UserAccountsService,
            transaction_service_1.TransactionService,
            auth_service_1.UserAccountAuthService,
            region_service_1.RegionService,
            countries_service_1.CountriesService,
            members_service_1.MembersService,
            policy_service_1.PolicyService,
            policy_category_group_service_1.PolicyCategoryGroupService,
            price_items_service_1.PriceItemsService,
            provinces_service_1.ProvincesService,
            address_service_1.AddressService,
            category_group_service_1.CategoryGroupService,
            provinces_service_1.ProvincesService,
            service_task_service_1.ServiceTaskService
        ],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map