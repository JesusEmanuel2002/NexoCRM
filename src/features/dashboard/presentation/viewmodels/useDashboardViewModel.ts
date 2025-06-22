import { useEffect, useState } from 'react';
import { GetDashboardDataUseCase } from '../../domain/usecases/GetDashboardDataUseCase';
import { DashboardRepositoryImpl } from '../../data/repositories/DashboardRepositoryImpl';
import { DashboardDatasource } from '../../data/datasources/DashboardDatasource';
import { DashboardData } from '../../domain/entities/DashboardData';

export const useDashboardViewModel = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const useCase = new GetDashboardDataUseCase(
                new DashboardRepositoryImpl(new DashboardDatasource())
            );
            const result = await useCase.execute();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, []);
    
    return { data, loading };
};