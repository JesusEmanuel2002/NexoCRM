import { View, Text, StyleSheet, Image } from 'react-native';
import { Contact } from '../../domain/entities/Contact';
import { useTheme } from '@/theme';

type Props = {
  contact: Contact;
};

export const ContactItem = ({ contact }: Props) => {
  const theme = useTheme();
  
  // Renderiza un contacto individual con su nombre y datos disponibles
  return (
    <View style={[styles.container, { borderColor: theme.colors.border }]}>
      {contact.image ? (
        <Image source={{ uri: contact.image }} style={styles.image} />
      ) : (
        <View style={[styles.placeholder, { backgroundColor: theme.colors.border }]} />
      )}

      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.colors.text }]}>{contact.name}</Text>

        {contact.phoneNumbers.map((phone, index) => (
          <Text key={index} style={{ color: theme.colors.text }}>
            📞 {phone}
          </Text>
        ))}

        {contact.emails.map((email, index) => (
          <Text key={index} style={{ color: theme.colors.text }}>
            ✉️ {email}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  placeholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
