import { DashboardRepository } from '../repositories/DashboardRepository';
import { DashboardData } from '../entities/DashboardData';

// Caso de uso para obtener los datos del dashboard desde el repositorio
export class GetDashboardDataUseCase {
    constructor(private repository: DashboardRepository) {}

    // Ejecuta la lógica para recuperar los datos del dashboard
    async execute(): Promise<DashboardData> {
        return await this.repository.getDashboardData();
    }
}