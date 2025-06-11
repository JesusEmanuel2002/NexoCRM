import { Contact } from 'expo-contacts';

export default interface ContactsRepository {
  getContacts(): Promise<Contact[]>;
}