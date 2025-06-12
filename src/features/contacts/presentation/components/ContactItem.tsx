import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Contact } from '../../domain/entities/Contact'

interface Props {
  contact: Contact
}

export const ContactItem: React.FC<Props> = ({ contact }) => {
  return (
    <View style={styles.container}>
      {contact.image ? (
        <Image source={{ uri: contact.image }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        {contact.phoneNumbers.map((phone, index) => (
          <Text key={index} style={styles.phone}>
            {phone}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  placeholderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  textContainer: {
    marginLeft: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  phone: {
    color: '#555',
  },
})