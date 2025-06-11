import * as Contacts from 'expo-contacts';

const ContactsService = {
  async fetchContacts(): Promise<Contacts.Contact[]> {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== 'granted') {
      return [];
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });

    return data || [];
  },
};

export default ContactsService;