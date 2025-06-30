import { DashboardRepository } from '../../domain/repositories/DashboardRepository';
import { DashboardDatasource } from '../datasources/DashboardDatasource';
import { DashboardData } from '../../domain/entities/DashboardData';

// Implementación del repositorio que delega en la fuente de datos
export class DashboardRepositoryImpl implements DashboardRepository {
    private datasource = DashboardDatasource;

    // Método que obtiene todos los datos del dashboard
    async getDashboardData(): Promise<DashboardData> {
        return await this.datasource.fetchDashboardData();
    }
}