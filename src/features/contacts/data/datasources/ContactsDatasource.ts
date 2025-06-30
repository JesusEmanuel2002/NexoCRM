import * as ExpoContacts from 'expo-contacts';
import { Contact } from '../../domain/entities/Contact';

// Fuente de datos que obtiene los contactos desde el dispositivo usando expo-contacts
export class ContactsDatasource {
    // Método para obtener y transformar los contactos
    async fetchContacts(): Promise<Contact[]> {
    
        // Solicita permiso para acceder a los contactos
        const { status } = await ExpoContacts.requestPermissionsAsync();
        if (status !== 'granted') return [];

        // Obtiene los datos de contactos con campos adicionales
        const { data } = await ExpoContacts.getContactsAsync({
            fields: [
                ExpoContacts.Fields.Name,
                ExpoContacts.Fields.PhoneNumbers,
                ExpoContacts.Fields.Emails,
                ExpoContacts.Fields.ImageAvailable,
                ExpoContacts.Fields.Image,
            ],
        });

        // Filtra y transforma los contactos al modelo definido en la entidad
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