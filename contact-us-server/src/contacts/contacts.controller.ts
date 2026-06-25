import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() data: Partial<Contact>) {
    return this.contactsService.create(data);
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<Contact>) {
    return this.contactsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.contactsService.delete(id);
  }
}