import { View, FlatList, Text, StyleSheet } from 'react-native'
import { useContactsViewModel } from '../viewmodels/useContactsViewModel'
import { ContactCard } from '../components/ContactCard'

export const ContactsScreen = () => {
  const { contacts, isLoading, error } = useContactsViewModel()

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>Error al cargar los contactos</Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>Cargando contactos...</Text>
      </View>
    )
  }

  if (contacts.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>No se encontraron contactos o no se otorgaron permisos.</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ContactCard contact={item} />}
    />
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
})