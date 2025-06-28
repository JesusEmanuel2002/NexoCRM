import { View, Text, StyleSheet } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { useTheme } from '@/theme';

interface Props {
    event: CalendarEvent;
}

export const CalendarEventItem = ({ event }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{event.title}</Text>
            {event.description && (
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    {event.description}
                </Text>
            )}
            <Text style={{ color: theme.colors.text }}>
                {event.allDay
                ? 'Todo el día'
                : `${event.startDate.toLocaleString()} - ${event.endDate.toLocaleString()}`}
            </Text>
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
    description: {
        fontSize: 14,
        marginBottom: 4,
    },
});