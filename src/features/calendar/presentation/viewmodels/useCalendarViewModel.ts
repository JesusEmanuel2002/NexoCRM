import { useEffect, useState } from 'react';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { GetCalendarEventsUseCase } from '../../domain/usecases/GetCalendarEventsUseCase';
import { CalendarRepositoryImpl } from '../../data/repositories/CalendarRepositoryImpl';
import { CalendarDatasource } from '../../data/datasources/CalendarDatasource';

export const useCalendarViewModel = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadEvents = async () => {
        setLoading(true);
        try {
            const repository = new CalendarRepositoryImpl(new CalendarDatasource());
            const useCase = new GetCalendarEventsUseCase(repository);
            const data = await useCase.execute();
            setEvents(data);
        } catch (err) {
            setError('Ocurrió un error al cargar los eventos');
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
        error 
    };
};