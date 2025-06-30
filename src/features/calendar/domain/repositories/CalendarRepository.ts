import { CalendarEvent } from '../entities/CalendarEvent';

// Contrato que define las operaciones disponibles para eventos de calendario
export interface CalendarRepository {
    getEvents(): Promise<CalendarEvent[]>;
}