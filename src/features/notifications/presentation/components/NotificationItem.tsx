import { View, Text, StyleSheet } from 'react-native';
import { Notification } from '../../domain/entities/Notification';
import { useTheme } from '@/theme';

interface Props {
    notification: Notification;
}

// Componente para mostrar una notificación individual
export const NotificationItem = ({ notification }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{notification.title}</Text>
            <Text style={[styles.body, { color: theme.colors.text }]}>{notification.body}</Text>
            <Text style={{ color: theme.colors.text }}>{notification.date.toLocaleString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
     },
    body: {
        fontSize: 14,
        marginBottom: 4,
    },
});