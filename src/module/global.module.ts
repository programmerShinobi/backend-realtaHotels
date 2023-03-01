import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { Roles } from 'entities/Roles';
import { UserBonusPoints } from 'entities/UserBonusPoints';
import { UserMembers } from 'entities/UserMembers';
import { UserPassword } from 'entities/UserPassword';
import { UserProfiles } from 'entities/UserProfiles';
import { UserRoles } from 'entities/UserRoles';
import { Users } from 'entities/Users';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { AuthController } from 'src/controller/users/auth/auth.controller';
import { RolesController } from 'src/controller/users/roles/roles.controller';
import { UserbonuspointsController } from 'src/controller/users/userbonuspoints/userbonuspoints.controller';
import { UsermembersController } from 'src/controller/users/usermembers/usermembers.controller';
import { UserpasswordController } from 'src/controller/users/userpassword/userpassword.controller';
import { UserprofilesController } from 'src/controller/users/userprofiles/userprofiles.controller';
import { UserrolesController } from 'src/controller/users/userroles/userroles.controller';
import { UsersController } from 'src/controller/users/users/users.controller';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { AuthService } from 'src/service/users/auth/auth.service';
import { RolesService } from 'src/service/users/roles/roles.service';
import { UserbonuspointsService } from 'src/service/users/userbonuspoints/userbonuspoints.service';
import { UsermembersService } from 'src/service/users/usermembers/usermembers.service';
import { UserpasswordService } from 'src/service/users/userpassword/userpassword.service';
import { UserprofilesService } from 'src/service/users/userprofiles/userprofiles.service';
import { UserrolesService } from 'src/service/users/userroles/userroles.service';
import { UsersService } from 'src/service/users/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Users, Roles, UserRoles, UserPassword, UserBonusPoints, UserMembers, UserProfiles])],
  controllers: [DepartmentController, UsersController, RolesController, UserrolesController, UserpasswordController, AuthController, UserbonuspointsController, UsermembersController, UserprofilesController],
  providers: [DepartmentService, UsersService, RolesService, UserrolesService, UserpasswordService, AuthService, UserbonuspointsService, UsermembersService, UserprofilesService],
})
export class GlobalModule {}