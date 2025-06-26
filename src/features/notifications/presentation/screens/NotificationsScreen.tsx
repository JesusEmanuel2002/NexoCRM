import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useNotificationsViewModel } from '../viewmodels/useNotificationsViewModel';
import { NotificationItem } from '../components/NotificationItem';
import { ErrorState } from '@/shared/components/molecules/ErrorState';
import { EmptyState } from '@/shared/components/molecules/EmptyState';
import { useTheme } from '@/theme';

export const NotificationsScreen = () => {
    const { notifications, loading, error } = useNotificationsViewModel();
    const theme = useTheme();

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    if (error) {
        return <ErrorState message={error} />;
    }

    if (notifications.length === 0) {
        return <EmptyState message="No hay notificaciones disponibles." />;
    }

    return (
        <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NotificationItem notification={item} />}
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
