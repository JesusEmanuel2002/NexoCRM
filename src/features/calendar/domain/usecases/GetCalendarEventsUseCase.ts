import { CalendarRepository } from '../repositories/CalendarRepository';
import { CalendarEvent } from '../entities/CalendarEvent';

export class GetCalendarEventsUseCase {
    constructor(private repository: CalendarRepository) {}

    async execute(): Promise<CalendarEvent[]> {
        return this.repository.getEvents();
    }
}