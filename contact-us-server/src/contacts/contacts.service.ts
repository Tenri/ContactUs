import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(data: Partial<Contact>): Promise<Contact> {
    const contact = this.contactRepository.create(data);
    return this.contactRepository.save(contact);
  }

  async findAll(): Promise<Contact[]> {
    return this.contactRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async update(id: number, data: Partial<Contact>): Promise<Contact | null> {
    await this.contactRepository.update(id, data);
    return this.contactRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }
}