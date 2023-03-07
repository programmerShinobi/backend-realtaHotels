import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'entities/Address';
import { Bank } from 'entities/Bank';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';
import { BookingOrders } from 'entities/BookingOrders';
import { CategoryGroup } from 'entities/CategoryGroup';
import { Country } from 'entities/Country';
import { Department } from 'entities/Department';
import { Employee } from 'entities/Employee';
import { EmployeeDepartmentHistory } from 'entities/EmployeeDepartmentHistory';
import { EmployeePayHistory } from 'entities/EmployeePayHistory';
import { Facilities } from 'entities/Facilities';
import { FacilityPhotos } from 'entities/FacilityPhotos';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';
import { HotelReviews } from 'entities/HotelReviews';
import { Hotels } from 'entities/Hotels';
import { JobRole } from 'entities/JobRole';
import { Members } from 'entities/Members';
import { OrderMenuDetail } from 'entities/OrderMenuDetail';
import { OrderMenus } from 'entities/OrderMenus';
import { PaymentGateaway } from 'entities/PaymentGateaway';
import { PaymentTransaction } from 'entities/PaymentTransaction';
import { Policy } from 'entities/Policy';
import { PolicyCategoryGroup } from 'entities/PolicyCategoryGroup';
import { PriceItems } from 'entities/PriceItems';
import { Provinces } from 'entities/Provinces';
import { PurchaseOrderDetail } from 'entities/PurchaseOrderDetail';
import { PurchaseOrderHeader } from 'entities/PurchaseOrderHeader';
import { Regions } from 'entities/Regions';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { RestoMenus } from 'entities/RestoMenus';
import { Roles } from 'entities/Roles';
import { ServiceTask } from 'entities/ServiceTask';
import { Shift } from 'entities/Shift';
import { SpecialOfferCoupons } from 'entities/SpecialOfferCoupons';
import { SpecialOffers } from 'entities/SpecialOffers';
import { StockDetail } from 'entities/StockDetail';
import { StockPhoto } from 'entities/StockPhoto';
import { Stocks } from 'entities/Stocks';
import { UserAccounts } from 'entities/UserAccounts';
import { UserBonusPoints } from 'entities/UserBonusPoints';
import { UserBreakfeast } from 'entities/UserBreakfeast';
import { UserMembers } from 'entities/UserMembers';
import { UserPassword } from 'entities/UserPassword';
import { UserProfiles } from 'entities/UserProfiles';
import { UserRoles } from 'entities/UserRoles';
import { Users } from 'entities/Users';
import { Vendor } from 'entities/Vendor';
import { WorkOrderDetail } from 'entities/WorkOrderDetail';
import { WorkOrders } from 'entities/WorkOrders';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { EmployeeController } from 'src/controller/humanresource/employee/employee.controller';
import { EmployeeDepartmentHistoryController } from 'src/controller/humanresource/employee_department_history/employee_department_history.controller';
import { EmployeePayHistoryController } from 'src/controller/humanresource/employee_pay_history/employee_pay_history.controller';
import { JobroleController } from 'src/controller/humanresource/job_role/job_role.controller';
import { ShiftController } from 'src/controller/humanresource/shift/shift.controller';
import { UploadController } from 'src/controller/humanresource/upload/upload.controller';
import { WorkOrderDetailController } from 'src/controller/humanresource/work_order_detail/work_order_detail.controller';
import { WorkOrdersController } from 'src/controller/humanresource/work_orders/work_orders.controller';
import { UserAccountAuthController } from 'src/controller/payment/auth/auth.controller';
import { BankController } from 'src/controller/payment/bank/bank.controller';
import { PaymentGateawayController } from 'src/controller/payment/payment_gateaway/payment_gateaway.controller';
import { TransactionController } from 'src/controller/payment/transaction/transaction.controller';
import { UserAccountsController } from 'src/controller/payment/user_accounts/user_accounts.controller';
import { AuthController } from 'src/controller/users/auth/auth.controller';
import { RolesController } from 'src/controller/users/roles/roles.controller';
import { UserbonuspointsController } from 'src/controller/users/userbonuspoints/userbonuspoints.controller';
import { UsermembersController } from 'src/controller/users/usermembers/usermembers.controller';
import { UserpasswordController } from 'src/controller/users/userpassword/userpassword.controller';
import { UserprofilesController } from 'src/controller/users/userprofiles/userprofiles.controller';
import { UserrolesController } from 'src/controller/users/userroles/userroles.controller';
import { UsersController } from 'src/controller/users/users/users.controller';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { EmployeeService } from 'src/service/humanresource/employee/employee.service';
import { EmployeeDepartmentHistoryService } from 'src/service/humanresource/employee_department_history/employee_department_history.service';
import { EmployeePayHistoryService } from 'src/service/humanresource/employee_pay_history/employee_pay_history.service';
import { JobRoleService } from 'src/service/humanresource/job_role/job_role.service';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
import { UploadService } from 'src/service/humanresource/upload/upload.service';
import { WorkOrderDetailService } from 'src/service/humanresource/work_order_detail/work_order_detail.service';
import { WorkOrdersService } from 'src/service/humanresource/work_orders/work_orders.service';
import { UserAccountAuthService } from 'src/service/payment/auth/auth.service';
import { BankService } from 'src/service/payment/bank/bank.service';
import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';
import { TransactionService } from 'src/service/payment/transaction/transaction.service';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';
import { AuthService } from 'src/service/users/auth/auth.service';
import { RolesService } from 'src/service/users/roles/roles.service';
import { UserbonuspointsService } from 'src/service/users/userbonuspoints/userbonuspoints.service';
import { UsermembersService } from 'src/service/users/usermembers/usermembers.service';
import { UserpasswordService } from 'src/service/users/userpassword/userpassword.service';
import { UserprofilesService } from 'src/service/users/userprofiles/userprofiles.service';
import { UserrolesService } from 'src/service/users/userroles/userroles.service';
import { UsersService } from 'src/service/users/users/users.service';
import { AddressController } from 'src/controller/master/address/address.controller';
import { CategoryGroupController } from 'src/controller/master/category_group/category_group.controller';
import { CountriesController } from 'src/controller/master/countries/countries.controller';
import { MembersController } from 'src/controller/master/members/members.controller';
import { PolicyController } from 'src/controller/master/policy/policy.controller';
import { PolicyCategoryGroupController } from 'src/controller/master/policy_category_group/policy_category_group.controller';
import { PriceItemsController } from 'src/controller/master/price_items/price_items.controller';
import { ProvincesController } from 'src/controller/master/provinces/provinces.controller';
import { RegionController } from 'src/controller/master/region/region.controller';
import { ServiceTaskController } from 'src/controller/master/service_task/service_task.controller';
import { AddressService } from 'src/service/master/address/address.service';
import { CategoryGroupService } from 'src/service/master/category_group/category_group.service';
import { CountriesService } from 'src/service/master/countries/countries.service';
import { MembersService } from 'src/service/master/members/members.service';
import { PolicyService } from 'src/service/master/policy/policy.service';
import { PolicyCategoryGroupService } from 'src/service/master/policy_category_group/policy_category_group.service';
import { PriceItemsService } from 'src/service/master/price_items/price_items.service';
import { ProvincesService } from 'src/service/master/provinces/provinces.service';
import { RegionService } from 'src/service/master/region/region.service';
import { ServiceTaskService } from 'src/service/master/service_task/service_task.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      Address,
      Bank,
      BookingOrderDetail,
      BookingOrderDetailExtra,
      BookingOrders,
      CategoryGroup,
      Country,
      Department,
      Employee,
      EmployeeDepartmentHistory,
      EmployeePayHistory,
      Facilities,
      FacilityPhotos,
      FacilityPriceHistory,
      HotelReviews,
      Hotels,
      JobRole,
      Members,
      OrderMenuDetail,
      OrderMenus,
      PaymentGateaway,
      PaymentTransaction,
      Policy,
      PolicyCategoryGroup,
      PriceItems,
      Provinces,
      PurchaseOrderDetail,
      PurchaseOrderHeader,
      Regions,
      RestoMenuPhotos,
      RestoMenus,
      Roles,
      ServiceTask,
      Shift,
      SpecialOfferCoupons,
      SpecialOffers,
      StockDetail,
      StockPhoto,
      Stocks,
      UserAccounts,
      UserBonusPoints,
      UserBreakfeast,
      UserMembers,
      UserPassword,
      UserProfiles,
      UserRoles,
      Users,
      Vendor,
      WorkOrderDetail,
      WorkOrders,
    ]),
  ],

  controllers: [
    /* HR */
    DepartmentController,
    ShiftController,
    JobroleController,
    EmployeeController,
    EmployeeDepartmentHistoryController,
    EmployeePayHistoryController,
    WorkOrderDetailController,
    WorkOrdersController,
    UploadController,

    /* HOTEL */

    /* USERS */
    UsersController,
    RolesController,
    UserrolesController,
    UserpasswordController,
    AuthController,
    UserbonuspointsController,
    UsermembersController,
    UserprofilesController,
    /* BOOKING */
    /* RESTO */

    /* PAYMENT */
    BankController,
    PaymentGateawayController,
    UserAccountsController,
    TransactionController,
    UserAccountAuthController,
    
    /* PURCHASING */
    /* MASTER */
    RegionController,
    CountriesController,
    ProvincesController,
    AddressController,
    CategoryGroupController,
    PolicyController,
    PolicyCategoryGroupController,
    PriceItemsController,
    ServiceTaskController,
    MembersController,
  ],
  providers: [
    /* HUMANRESOURCE */
    DepartmentService,
    ShiftService,
    JobRoleService,
    EmployeeService,
    EmployeePayHistoryService,
    WorkOrderDetailService,
    EmployeeDepartmentHistoryService,
    WorkOrdersService,
    UploadService,

    /* HOTEL */

    /* USERS */
    UsersService,
    RolesService,
    UserrolesService,
    UserpasswordService,
    AuthService,
    UserbonuspointsService,
    UsermembersService,
    UserprofilesService,
    /* BOOKING */
    /* RESTO */
  
    /* PAYMENT */
    BankService,
    PaymentGateawayService,
    UserAccountsService,
    TransactionService,
    UserAccountAuthService,

    /* PURCHASING */
    /* MASTER */
    
    RegionService,
    CountriesService,
    MembersService,
    PolicyService,
    PolicyCategoryGroupService,
    PriceItemsService,
    ProvincesService,
    AddressService,
    CategoryGroupService,
    ProvincesService,
    ServiceTaskService

  ],
})
export class GlobalModule {}