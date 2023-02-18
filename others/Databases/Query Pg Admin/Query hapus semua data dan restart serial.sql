truncate humanresource.job_role, humanresource.employee, humanresource.shift, humanresource.department, 
humanresource.employee_department_history, humanresource.work_orders restart identity cascade;

truncate master.regions, master.country, master.provinces, master.address, master.category_group, master.policy, master.policy_category_group, master.price_items, master.members, master.service_task restart identity cascade;

truncate users.roles, users.users, users.user_members, users.user_profiles, users.user_roles, users.user_password, users.user_bonus_points restart identity cascade;

truncate hotel.hotels, hotel.facilities, hotel.facility_photos, hotel.facility_price_history, hotel.hotel_reviews restart identity cascade;

truncate resto.order_menus, resto.resto_menus, resto.order_menu_detail, resto.resto_menu_photos restart identity cascade;

truncate humanresource.job_role, humanresource.employee, humanresource.shift, humanresource.department, humanresource.employee_department_history, humanresource.employee_pay_history, humanresource.work_orders, humanresource.work_order_detail restart identity cascade;

truncate purchasing.vendor, purchasing.stocks, purchasing.stock_photo, purchasing.purchase_order_header, purchasing.purchase_order_detail, purchasing.stock_detail restart identity cascade;

truncate booking.special_offers, booking.booking_orders, booking.booking_order_detail, booking.user_breakfeast, booking.booking_order_detail_extra, booking.special_offer_coupons restart identity cascade;

truncate payment.entities, payment.bank, payment.payment_gateaway, payment.user_accounts, payment.payment_transaction restart identity cascade;