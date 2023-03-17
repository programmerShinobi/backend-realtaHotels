import { Controller, Get } from '@nestjs/common';
import { RestoMenusJoinToAllService } from 'src/service/Resto/resto-menus-join-to-all/resto-menus-join-to-all.service';

@Controller('restoMenus')
export class RestoMenusJoinToAllController {
  constructor(private restoMenusJoinToAllService: RestoMenusJoinToAllService) {}

  @Get()
  findAllJoinResto() {
    return this.restoMenusJoinToAllService.findAllJoinResto();
  }
}
