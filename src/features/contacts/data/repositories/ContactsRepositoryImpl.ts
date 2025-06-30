import { Contact } from '../../domain/entities/Contact';
import { ContactsRepository } from '../../domain/repositories/ContactsRepository';
import { ContactsDatasource } from '../datasources/ContactsDatasource';

// Implementación del repositorio que se comunica con el datasource
export class ContactsRepositoryImpl implements ContactsRepository {
  private datasource: ContactsDatasource;

  constructor(datasource: ContactsDatasource) {
    this.datasource = datasource;
  }

  // Llama al método fetchContacts del datasource
  async getContacts(): Promise<Contact[]> {
    return await this.datasource.fetchContacts();
  }
}