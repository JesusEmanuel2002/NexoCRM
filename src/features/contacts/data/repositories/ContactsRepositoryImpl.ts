import { Contact } from '../../domain/entities/Contact';
import { ContactsRepository } from '../../domain/repositories/ContactsRepository';
import { ContactsDatasource } from '../datasources/ContactsDatasource';

export class ContactsRepositoryImpl implements ContactsRepository {
  private datasource: ContactsDatasource;

  constructor(datasource: ContactsDatasource) {
    this.datasource = datasource;
  }

  async getContacts(): Promise<Contact[]> {
    return await this.datasource.fetchContacts();
  }
}