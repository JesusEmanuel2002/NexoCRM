import { useEffect, useState } from 'react';
import { GetCalendarEventsUseCase } from '../../domain/usecases/GetCalendarEventsUseCase';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { CalendarRepositoryImpl } from '../../data/repositories/CalendarRepositoryImpl';
import { CalendarDatasource } from '../../data/datasources/CalendarDatasource';

export const useCalendarViewModel = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadEvents = async () => {
        try {
            setLoading(true);
            const datasource = new CalendarDatasource();
            const repository = new CalendarRepositoryImpl(datasource);
            const data = await new GetCalendarEventsUseCase(repository).execute();
            setEvents(data);
        } catch (err) {
            setError('Error al cargar eventos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEvents();
    }, []);

    return {
        events,
        loading,
        error,
        loadEvents,
    };
};