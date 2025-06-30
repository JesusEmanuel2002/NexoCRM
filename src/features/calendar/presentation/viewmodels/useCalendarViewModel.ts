import { useEffect, useState } from 'react';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { CalendarRepositoryImpl } from '../../data/repositories/CalendarRepositoryImpl';
import { CalendarDatasource } from '../../data/datasources/CalendarDatasource';
import { GetCalendarEventsUseCase } from '../../domain/usecases/GetCalendarEventsUseCase';

// Hook que gestiona la lógica del estado de eventos del calendario
export const useCalendarViewModel = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Función que obtiene los eventos desde el caso de uso
    const loadEvents = async () => {
        try {
            setLoading(true);

            // Instancia del caso de uso con su repositorio y datasource
            const repository = new CalendarRepositoryImpl(new CalendarDatasource());
            const getCalendarEventsUseCase = new GetCalendarEventsUseCase(repository);
            const result = await getCalendarEventsUseCase.execute();
            setEvents(result);
        } catch (err) {
            setError('Error al cargar eventos');
        } finally {
            setLoading(false);
        }
    };

    // Se ejecuta una sola vez al montar el componente
    useEffect(() => {
        loadEvents();
    }, []);
    
    return {
        events,
        loading,
        error,
    };
};
