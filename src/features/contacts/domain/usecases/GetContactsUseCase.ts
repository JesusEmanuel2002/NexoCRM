import ContactsRepository from '../repositories/ContactsRepository';
import ContactsRepositoryImpl from '../../data/repositories/ContactsRepositoryImpl';
import { Contact } from 'expo-contacts';

class GetContactsUseCase {
  private repository: ContactsRepository;

  constructor() {
    this.repository = new ContactsRepositoryImpl();
  }

  async execute(): Promise<Contact[]> {
    return await this.repository.getContacts();
  }
}

export default GetContactsUseCase;