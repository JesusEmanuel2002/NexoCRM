import * as Calendar from 'expo-calendar';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';

// Fuente de datos que interactúa con la API nativa de Expo Calendar
export class CalendarDatasource {
    async getEvents(): Promise<CalendarEvent[]> {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        const defaultCalendar = calendars[0];

        if (!defaultCalendar) return [];

        const now = new Date();
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());

        const events = await Calendar.getEventsAsync(
            [defaultCalendar.id],
            now,
            nextMonth
        );

        // Se transforma el formato original al formato definido por la entidad
        return events.map((event) => ({
            id: event.id,
            title: event.title,
            description: event.notes || '',
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate),
            allDay: !!event.allDay,
        }));
    }
}