import { useEffect, useState } from 'react';
import { GetContactsUseCase } from '../../domain/usecases/GetContactsUseCase';
import { ContactsRepositoryImpl } from '../../data/repositories/ContactsRepositoryImpl';
import { ContactsDatasource } from '../../data/datasources/ContactsDatasource';
import { Contact } from '../../domain/entities/Contact';

export const useContactsViewModel = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const datasource = new ContactsDatasource();
      const repository = new ContactsRepositoryImpl(datasource);
      const useCase = new GetContactsUseCase(repository);
      const data = await useCase.execute();
      setContacts(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los contactos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return {
    contacts,
    loading,
    error,
  };
};