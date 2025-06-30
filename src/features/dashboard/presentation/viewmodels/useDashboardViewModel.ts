import { useEffect, useState } from 'react';
import { DashboardData } from '../../domain/entities/DashboardData';
import { DashboardRepositoryImpl } from '../../data/repositories/DashboardRepositoryImpl';
import { DashboardDatasource } from '../../data/datasources/DashboardDatasource';

// Hook personalizado para gestionar el estado del dashboard
export const useDashboardViewModel = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Función para cargar los datos del dashboard
    const loadDashboardData = async () => {
        try {
        const repository = new DashboardRepositoryImpl(DashboardDatasource);
        const result = await repository.getDashboardData();
        setData(result);
        } catch (e) {
            setError('Ocurrió un error al cargar el dashboard.');
        } finally {
            setLoading(false);
        }
    };

    // Carga los datos al montar el componente
    useEffect(() => {
        loadDashboardData();
    }, []);

    return { 
        data, 
        loading, 
        error 
    };
};