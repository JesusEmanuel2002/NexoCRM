import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useCalendarViewModel } from '../viewmodels/useCalendarViewModel';
import CalendarEventList from '../components/CalendarEventList';
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
        return <ErrorState message={error} />;
    }

    if (events.length === 0) {
        return <EmptyState message="No hay eventos disponibles." />;
    }

    return <CalendarEventList events={events} />;
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});