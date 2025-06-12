import { View, Text, Image } from 'react-native'
import React from 'react'
import { Contact } from '../../domain/entities/Contact'

interface Props {
    contact: Contact
}

const ContactListItem: React.FC<Props> = ({ contact }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            {contact.imageAvailable && contact.image ? (
                <Image
                source={{ uri: contact.image }}
                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                />
            ) : (
            <View
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#ccc',
                marginRight: 10,
            }}
            />
            )}
            <View>
                <Text style={{ fontWeight: 'bold' }}>{contact.name}</Text>
                <Text>{contact.phoneNumbers[0] || 'Sin número'}</Text>
            </View>
        </View>
  )
}

export default ContactListItem