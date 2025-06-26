import { View, Text, StyleSheet } from 'react-native';
import { Notification } from '../../domain/entities/Notification';
import { useTheme } from '@/theme';

type Props = {
    notification: Notification;
};

export const NotificationItem = ({ notification }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.container, !notification.read && styles.unread]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{notification.title}</Text>
            <Text style={{ color: theme.colors.text }}>{notification.body}</Text>
            <Text style={styles.date}>
                {notification.date.toLocaleDateString()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
    },
    unread: {
        backgroundColor: '#e6f7ff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        fontSize: 12,
        marginTop: 4,
        color: '#888',
    },
});