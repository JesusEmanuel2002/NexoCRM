import { CalendarEvent } from '../../domain/entities/CalendarEvent';

export class CalendarDatasource {
    async fetchEvents(): Promise<CalendarEvent[]> {
        return [
            {
                id: '1',
                title: 'Reunión importante',
                description: 'Revisión con el equipo',
                startDate: new Date(),
                endDate: new Date(),
                allDay: false,
            },
        ];
    }
}