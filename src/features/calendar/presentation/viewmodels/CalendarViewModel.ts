import { useEffect, useState } from 'react';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { CalendarRepositoryImpl } from '../../data/repositories/CalendarRepositoryImpl';
import { CalendarDatasource } from '../../data/datasources/CalendarDatasource';
import { GetCalendarEventsUseCase } from '../../domain/usecases/GetCalendarEventsUseCase';

export const useCalendarViewModel = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const datasource = new CalendarDatasource();
                const repository = new CalendarRepositoryImpl(datasource);
                const useCase = new GetCalendarEventsUseCase(repository);

                const result = await useCase.execute();
                 setEvents(result);
            } catch (e) {
                setError('Error cargando eventos');
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, []);
    
    return { events, loading, error };
};