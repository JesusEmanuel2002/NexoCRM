import { Contact } from '../entities/Contact';
import { ContactsRepository } from '../repositories/ContactsRepository';

export class GetContactsUseCase {
  constructor(private repository: ContactsRepository) {}

  async execute(): Promise<Contact[]> {
    return this.repository.getContacts();
  }
}