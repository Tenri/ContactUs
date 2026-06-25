import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post('createContact')
  createContact() {
    return 'created contact'
  }

  @Get()
  listContacts() {
    return 'listed contact'
  }

  @Patch('updateContact')
  updateContact() {
    return 'updated contact'
  }

  @Delete('deleteContact')
  deleteContact() {
    return 'deleted contact'
  }


}
