import { Controller, Get, Put,Param, Body } from '@nestjs/common';
import { UserprofilesService } from 'src/service/users/userprofiles/userprofiles.service';

@Controller('userprofiles')
export class UserprofilesController {
    constructor(
        private userProfilesService: UserprofilesService
    ) { }
    
    @Get()
    findAllUserProfiles() {
        return this.userProfilesService.findAllUserProfiles();
    }

    @Put('/userPhotoProfiles/:id')
    updateUserPhotoProfiles(@Param() params, @Body() body ) {
        return this.userProfilesService.updateUserPhotoProfiles(params.id, body);
    }
}
