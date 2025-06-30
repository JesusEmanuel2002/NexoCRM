import { FlatList, StyleSheet } from 'react-native';
import { Contact } from '../../domain/entities/Contact';
import { ContactItem } from './ContactItem';

// Lista reutilizable para mostrar todos los contactos del sistema
interface Props {
    contacts: Contact[];
}

export const ContactsList = ({ contacts }: Props) => {
    return (
        <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ContactItem contact={item} />}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 16,
    },
});