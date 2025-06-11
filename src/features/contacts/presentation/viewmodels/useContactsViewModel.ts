import { useState } from 'react';
import * as Contacts from 'expo-contacts';
import GetContactsUseCase from '../../domain/usecases/GetContactsUseCase';

const useContactsViewModel = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  const loadContacts = async () => {
    const useCase = new GetContactsUseCase();
    const result = await useCase.execute();
    setContacts(result);
  };

  return {
    contacts,
    loadContacts,
  };
};

export default useContactsViewModel;