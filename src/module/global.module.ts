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
import { FacilityController } from 'src/controller/hotel/facility.controller';
import { FacilityPhotosController } from 'src/controller/hotel/facility_photos.controller';
import { FacilityPriceHistoryController } from 'src/controller/hotel/facility_price_history.controller';
import { HotelController } from 'src/controller/hotel/hotel.controller';
import { HotelReviewController } from 'src/controller/hotel/hotel_review.controller';
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
import { FacilityService } from 'src/service/hotel/facility.service';
import { FacilityPhotosService } from 'src/service/hotel/facility_photos.service';
import { FacilityPriceHistoryService } from 'src/service/hotel/facility_price_history.service';
import { HotelService } from 'src/service/hotel/hotel.service';
import { HotelReviewService } from 'src/service/hotel/hotel_review.service';
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
import { Vendor } from 'entities/Vendor';
import { WorkOrderDetail } from 'entities/WorkOrderDetail';
import { WorkOrders } from 'entities/WorkOrders';
import { Entities } from 'entities/Entities';
import { SpecialOffersController } from 'src/controller/booking/special_offers.controller';
import { BookingOrderDetailController } from 'src/controller/booking/booking-order-detail.controller';
import { BookingOrderDetailExtraController } from 'src/controller/booking/booking-order-detail-extra.controller';
import { SpecialOfferCouponController } from 'src/controller/booking/special-offer-coupon.controller';
import { UserBreakfeastController } from 'src/controller/booking/user-breakfeast.controller';
import { BookingOrdersController } from 'src/controller/booking/booking-orders.controller';
import { SpecialOffersService } from 'src/service/booking/special_offers.service';
import { SpecialOfferCouponsService } from 'src/service/booking/special-offer-coupons.service';
import { BookingOrdersService } from 'src/service/booking/booking-orders.service';
import { BookingOrderDetailService } from 'src/service/booking/booking-order-detail.service';
import { BookingOrderDetailExtraService } from 'src/service/booking/booking-order-detail-extra.service';
import { UserBreakfeastService } from 'src/service/booking/user-breakfeast.service';
import { StocksController } from 'src/controller/Purchasing/stocks/stocks.controller';
import { StockPhotoController } from 'src/controller/Purchasing/stock-photo/stock-photo.controller';
import { StockDetailController } from 'src/controller/Purchasing/stock-detail/stock-detail.controller';
import { PurchaseOrderDetailController } from 'src/controller/Purchasing/purchase-order-detail/purchase-order-detail.controller';
import { PurchaseOrderHeaderController } from 'src/controller/Purchasing/purchase-order-header/purchase-order-header.controller';
import { VendorController } from 'src/controller/Purchasing/vendor/vendor.controller';
import { VendorProductController } from 'src/controller/Purchasing/vendor-product/vendor-product.controller';
import { VendorProduct } from 'entities/VendorProduct';
import { PurchaseOrderDetailService } from 'src/service/purchasing/purchase-order-detail/purchase-order-detail.service';
import { PurchaseOrderHeaderService } from 'src/service/purchasing/purchase-order-header/purchase-order-header.service';
import { StockDetailService } from 'src/service/purchasing/stock-detail/stock-detail.service';
import { StocksService } from 'src/service/purchasing/stocks/stocks.service';
import { VendorService } from 'src/service/purchasing/vendor/vendor.service';
import { VendorProductService } from 'src/service/purchasing/vendor-product/vendor-product.service';
import { StockPhotoService } from 'src/service/purchasing/stock-photo/stock-photo.service';
import { RestoMenusService } from 'src/service/Resto/resto-menus/resto-menus.service';
import { OrderMenuDetailService } from 'src/service/Resto/order-menu-detail/order-menu-detail.service';
import { RestoMenusPhotosService } from 'src/service/Resto/resto-menus-photos/resto-menus-photos.service';
import { OrderMenusService } from 'src/service/Resto/order-menus/order-menus.service';
import { RestoMenusJoinToAllService } from 'src/service/Resto/resto-menus-join-to-all/resto-menus-join-to-all.service';
import { RestoMenuPhotosService } from 'src/service/Resto/resto-menu-photos/resto-menu-photos.service';
import { RestoMenusController } from 'src/controller/Resto/resto-menus/resto-menus.controller';
import { OrderMenuDetailController } from 'src/controller/Resto/order-menu-detail/order-menu-detail.controller';
import { RestoMenuPhotosController } from 'src/controller/Resto/resto-menu-photos/resto-menu-photos.controller';
import { OrderMenusController } from 'src/controller/Resto/order-menus/order-menus.controller';
import { RestoMenusJoinToAllController } from 'src/controller/Resto/resto-menus-join-to-all/resto-menus-join-to-all.controller';
import { RestoMenusPhotosController } from 'src/controller/Resto/resto-menus-photos/resto-menus-photos.controller';

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
      Entities,
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
      StockDetail,
      UserAccounts,
      UserBonusPoints,
      UserBreakfeast,
      UserMembers,
      UserPassword,
      UserProfiles,
      UserRoles,
      Users,
      Vendor,
      VendorProduct,
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
    HotelController,
    HotelReviewController,
    FacilityPriceHistoryController,
    FacilityController,
    FacilityPhotosController,

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
    SpecialOffersController,
    BookingOrderDetailController,
    BookingOrderDetailExtraController,
    SpecialOfferCouponController,
    UserBreakfeastController,
    BookingOrdersController,

    /* RESTO */
    RestoMenusController,
    OrderMenuDetailController,
    RestoMenuPhotosController,
    OrderMenusController,
    RestoMenusJoinToAllController,
    RestoMenusPhotosController,

    /* PAYMENT */
    BankController,
    PaymentGateawayController,
    UserAccountsController,
    TransactionController,
    UserAccountAuthController,

    /* PURCHASING */
    StocksController,
    StockPhotoController,
    StockDetailController,
    VendorController,
    VendorProductController,
    PurchaseOrderDetailController,
    PurchaseOrderHeaderController,

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
    HotelService,
    HotelReviewService,
    FacilityPriceHistoryService,
    FacilityService,
    FacilityPhotosService,

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
    SpecialOffersService,
    SpecialOfferCouponsService,
    BookingOrdersService,
    BookingOrderDetailService,
    BookingOrderDetailExtraService,
    UserBreakfeastService,

    /* RESTO */
    RestoMenusService,
    OrderMenuDetailService,
    RestoMenusPhotosService,
    OrderMenusService,
    RestoMenusJoinToAllService,
    RestoMenuPhotosService,

    /* PAYMENT */
    BankService,
    PaymentGateawayService,
    UserAccountsService,
    TransactionService,
    UserAccountAuthService,

    /* PURCHASING */
    PurchaseOrderDetailService,
    PurchaseOrderHeaderService,
    StockDetailService,
    StocksService,
    StockPhotoService,
    VendorService,
    VendorProductService,

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
    ServiceTaskService,
  ],
})
export class GlobalModule {}
