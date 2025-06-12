import { View, Text, Image } from 'react-native'
import { Contact } from '../../domain/entities/Contact'

type Props = {
    contact: Contact
}

export const ContactCard = ({ contact }: Props) => {
    return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
        {contact.image ? (
            <Image source={{ uri: contact.image }} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }} />
        ) : (
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#ccc', marginRight: 12 }} />
        )}
        <View>
            <Text style={{ fontWeight: '600' }}>{contact.name}</Text>
            {contact.phoneNumbers.map((phone, idx) => (
                <Text key={idx} style={{ fontSize: 12 }}>{phone}</Text>
            ))}
            {contact.emails.map((email, idx) => (
                <Text key={idx} style={{ fontSize: 12 }}>{email}</Text>
            ))}
        </View>
    </View>
    )
}