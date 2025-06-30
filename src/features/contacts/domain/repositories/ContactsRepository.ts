import { Contact } from '../entities/Contact';

// Contrato que define las operaciones del repositorio de contactos
export interface ContactsRepository {
  getContacts(): Promise<Contact[]>; // Método para obtener los contactos
}