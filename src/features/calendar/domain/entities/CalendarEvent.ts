// Entidad que representa un evento del calendario
export interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    allDay?: boolean;
}