import { View, Text, StyleSheet } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { useTheme } from '@/theme';

interface Props {
    event: CalendarEvent;
}

export const CalendarEventItem = ({ event }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
            {event.title}
        </Text>
        <Text style={[styles.description, { color: theme.colors.text }]}>
            {event.description || 'Sin descripción'}
        </Text>
        <Text style={[styles.date, { color: theme.colors.textSecondary }]}>
            {event.startDate.toLocaleString()} - {event.endDate.toLocaleString()}
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
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        marginBottom: 4,
    },
    date: {
        fontSize: 12,
    },
});