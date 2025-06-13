import { View, Text } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { format } from 'date-fns';
import { useTheme } from '@/theme/useTheme';

interface Props {
    event: CalendarEvent;
}

export function CalendarEventCard({ event }: Props) {
    const { colors, typography } = useTheme();

    return (
        <View style={{
            backgroundColor: colors.card,
            padding: 12,
            marginVertical: 6,
            borderRadius: 16,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 6,
            }}>
            <Text style={{ color: colors.text, fontSize: typography.title, fontWeight: '600' }}>
                {event.title}
            </Text>
            {event.description && (
                <Text style={{ color: colors.muted, fontSize: typography.body }}>
                    {event.description}
                </Text>
            )}
            <Text style={{ color: colors.primary, fontSize: typography.caption, marginTop: 6 }}>
                {event.allDay
                ? 'Todo el día'
                : `${format(new Date(event.startDate), 'p')} - ${format(new Date(event.endDate), 'p')}`}
            </Text>
        </View>
    );
}