import { useEffect, useState } from 'react';
import { Contact } from '../../domain/entities/Contact';
import { ContactsRepositoryImpl } from '../../data/repositories/ContactsRepositoryImpl';
import { ContactsDatasource } from '../../data/datasources/ContactsDatasource';
import { GetContactsUseCase } from '../../domain/usecases/GetContactsUseCase';

// Gestiona el estado de la UI en pantalla de contactos
export const useContactsViewModel = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadContacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const repository = new ContactsRepositoryImpl(new ContactsDatasource());
      const useCase = new GetContactsUseCase(repository);
      const result = await useCase.execute();
      setContacts(result);
    } catch (e) {
      setError('No se pudieron cargar los contactos');
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