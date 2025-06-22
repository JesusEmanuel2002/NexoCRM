import { useEffect, useState } from 'react';
import { DashboardData } from '../../domain/entities/DashboardData';
import { DashboardRepositoryImpl } from '../../data/repositories/DashboardRepositoryImpl';
import { DashboardDatasource } from '../../data/datasources/DashboardDatasource';
import { GetDashboardDataUseCase } from '../../domain/usecases/GetDashboardDataUseCase';

export const useDashboardViewModel = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadDashboardData = async () => {
        setLoading(true);
        try {
            const repository = new DashboardRepositoryImpl(DashboardDatasource);
            const useCase = new GetDashboardDataUseCase(repository);
            const result = await useCase.execute();
            setData(result);
            setError(null);
        } catch (err) {
            setError('Error al cargar el dashboard');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadDashboardData();
    }, []);

    return {
        data,
        loading,
        error,
  } ;
};