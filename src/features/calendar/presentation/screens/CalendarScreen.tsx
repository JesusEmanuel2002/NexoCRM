import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useCalendarViewModel } from '../viewmodels/useCalendarViewModel';
import { CalendarEventItem } from '../components/CalendarEventItem';
import { ErrorState } from '@/shared/components/molecules/ErrorState';
import { EmptyState } from '@/shared/components/molecules/EmptyState';
import { useTheme } from '@/theme';

export const CalendarScreen = () => {
    const { events, loading, error } = useCalendarViewModel();
    const theme = useTheme();

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    if (error) {
        return <ErrorState message="Error al cargar los eventos del calendario." />;
    }

    if (events.length === 0) {
        return <EmptyState message="No hay eventos disponibles." />;
    }

    return (
        <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CalendarEventItem event={item} />}
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