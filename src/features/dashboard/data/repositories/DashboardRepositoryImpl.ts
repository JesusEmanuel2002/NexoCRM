import { DashboardRepository } from '../../domain/repositories/DashboardRepository';
import { DashboardData } from '../../domain/entities/DashboardData';
import { DashboardDatasource } from '../datasources/DashboardDatasource';

export class DashboardRepositoryImpl implements DashboardRepository {
    constructor(private readonly datasource: DashboardDatasource) {}
    
    async getDashboardData(): Promise<DashboardData> {
        return this.datasource.fetchDashboardData();
    }
}