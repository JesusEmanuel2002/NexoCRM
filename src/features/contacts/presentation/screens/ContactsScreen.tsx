import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useContactsViewModel from '../viewmodels/useContactsViewModel';

const ContactsScreen = () => {
  const { contacts, loadContacts } = useContactsViewModel();

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => item.id ?? index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default ContactsScreen;