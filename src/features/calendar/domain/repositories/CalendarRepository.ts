import { CalendarEvent } from '../entities/CalendarEvent';

export interface CalendarRepository {
    getEvents(): Promise<CalendarEvent[]>;
}