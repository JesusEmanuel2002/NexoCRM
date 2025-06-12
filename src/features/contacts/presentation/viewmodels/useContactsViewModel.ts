import { useEffect, useState } from 'react'
import { Contact } from '../../domain/entities/Contact'
import { ContactsRepositoryImpl } from '../../data/repositories/ContactsRepositoryImpl'
import { ContactsDatasource } from '../../data/datasources/ContactsDatasource'
import GetContactsUseCase from '../../domain/usecases/GetContactsUseCase'

const useContactsViewModel = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const loadContacts = async () => {
    setLoading(true)
    setError(null)

    const repository = new ContactsRepositoryImpl(new ContactsDatasource())

    try {
      const data = await GetContactsUseCase(repository)
      setContacts(data)
    } catch (err) {
      setError('Hubo un error al obtener los contactos.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadContacts()
  }, [])

  return {
    contacts,
    loading,
    error,
  }
}

export default useContactsViewModel