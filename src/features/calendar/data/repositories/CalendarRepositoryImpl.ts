import { CalendarRepository } from '../../domain/repositories/CalendarRepository';
import { CalendarDatasource } from '../datasources/CalendarDatasource';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';

// Implementación del repositorio que delega la obtención de eventos a la fuente de datos
export class CalendarRepositoryImpl implements CalendarRepository {
    constructor(private datasource: CalendarDatasource) {}

    async getEvents(): Promise<CalendarEvent[]> {
        return await this.datasource.getEvents();
    }
}