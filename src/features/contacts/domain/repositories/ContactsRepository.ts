import { Contact } from '../entities/Contact'

export interface ContactsRepository {
  getContacts(): Promise<Contact[]>
}