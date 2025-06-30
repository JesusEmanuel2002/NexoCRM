import { ContactsRepository } from '../repositories/ContactsRepository';
import { Contact } from '../entities/Contact';

// Caso de uso que obtiene los contactos desde el repositorio
export class GetContactsUseCase {
  constructor(private repository: ContactsRepository) {}

  // Ejecuta el caso de uso que obtiene los contactos
  async execute(): Promise<Contact[]> {
    return await this.repository.getContacts();
  }
}