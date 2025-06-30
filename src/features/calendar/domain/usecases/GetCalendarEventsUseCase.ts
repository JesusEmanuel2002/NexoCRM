import { CalendarRepository } from '../repositories/CalendarRepository';
import { CalendarEvent } from '../entities/CalendarEvent';

// Caso de uso que recupera los eventos del calendario usando el repositorio
export class GetCalendarEventsUseCase {
    constructor(private repository: CalendarRepository) {}

    async execute(): Promise<CalendarEvent[]> {
        return await this.repository.getEvents();
    }
}