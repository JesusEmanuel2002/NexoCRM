import { Contact } from '../entities/Contact'
import { ContactsRepository } from '../repositories/ContactsRepository'

const GetContactsUseCase = async (
  repository: ContactsRepository
): Promise<Contact[]> => {
  return await repository.getContacts()
}

export default GetContactsUseCase