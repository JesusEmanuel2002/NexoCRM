import ContactsRepository from '../../domain/repositories/ContactsRepository';
import { Contact } from 'expo-contacts';
import ContactsService from '../services/ContactsService';

class ContactsRepositoryImpl implements ContactsRepository {
  async getContacts(): Promise<Contact[]> {
    return await ContactsService.fetchContacts();
  }
}

export default ContactsRepositoryImpl;