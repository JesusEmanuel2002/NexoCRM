import * as ExpoContacts from 'expo-contacts';
import { Contact } from '../../domain/entities/Contact';

export class ContactsDatasource {
    async fetchContacts(): Promise<Contact[]> {
        const { status } = await ExpoContacts.requestPermissionsAsync();
        if (status !== 'granted') return [];
        
        const { data } = await ExpoContacts.getContactsAsync({
            fields: [
                ExpoContacts.Fields.Name,
                ExpoContacts.Fields.PhoneNumbers,
                ExpoContacts.Fields.Emails,
                ExpoContacts.Fields.ImageAvailable,
                ExpoContacts.Fields.Image,
            ],
        });
        
        return data
        .filter(contact => contact.id && contact.name)
        .map((contact): Contact => ({
            id: contact.id ?? '',
            name: contact.name ?? '',
            phoneNumbers: (contact.phoneNumbers ?? [])
            .map(p => p.number)
            .filter((p): p is string => !!p),
            emails: (contact.emails ?? [])
            .map(e => e.email)
            .filter((e): e is string => !!e),
            imageAvailable: contact.imageAvailable ?? false,
            image: contact.image?.uri ?? '',
        }));
    }
}