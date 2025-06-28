import { View, Text, StyleSheet } from 'react-native';
import { Notification } from '../../domain/entities/Notification';
import { useTheme } from '@/theme';

interface Props {
    notification: Notification;
}

export const NotificationItem = ({ notification }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                {notification.title}
            </Text>
            <Text style={[styles.message, { color: theme.colors.text }]}>
                {notification.body}
            </Text>
            <Text style={[styles.date, { color: theme.colors.text }]}>
                {new Date(notification.date).toLocaleString()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    message: {
        fontSize: 14,
        marginTop: 4,
    },
    date: {
        fontSize: 12,
        marginTop: 8,
        opacity: 0.6,
    },
});