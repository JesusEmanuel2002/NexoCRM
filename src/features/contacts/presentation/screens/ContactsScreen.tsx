import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useContactsViewModel } from '../viewmodels/useContactsViewModel';
import { ContactItem } from '../components/ContactItem';
import { ErrorState } from '@/shared/components/molecules/ErrorState';
import { EmptyState } from '@/shared/components/molecules/EmptyState';
import { useTheme } from '@/theme';

export const ContactsScreen = () => {
  const { contacts, loading, error } = useContactsViewModel();
  const theme = useTheme();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <ErrorState message="Ocurrió un error al cargar los contactos." />
    );
  }

  if (contacts.length === 0) {
    return (
      <EmptyState message="No hay contactos disponibles." />
    );
  }

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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});