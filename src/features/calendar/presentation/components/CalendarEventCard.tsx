import { View, Text, StyleSheet } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { useTheme } from '@/theme';

interface Props {
    event: CalendarEvent;
}

export const CalendarEventCard = ({ event }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{event.title}</Text>
            <Text style={{ color: theme.colors.text }}>{event.startDate.toLocaleString()}</Text>
            <Text style={{ color: theme.colors.text }}>{event.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 12,
        marginVertical: 6,
        borderRadius: 10,
        borderWidth: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
});
