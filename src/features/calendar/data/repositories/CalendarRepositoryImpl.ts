import { CalendarRepository } from '../../domain/repositories/CalendarRepository';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { CalendarDatasource } from '../datasources/CalendarDatasource';

export class CalendarRepositoryImpl implements CalendarRepository {
    constructor(private datasource: CalendarDatasource) {}
    
    async getEvents(): Promise<CalendarEvent[]> {
        return await this.datasource.fetchEvents();
    }
}
