import { DashboardRepository } from '../repositories/DashboardRepository';
import { DashboardData } from '../entities/DashboardData';

export class GetDashboardDataUseCase {
    constructor(private repository: DashboardRepository) {}
    
    async execute(): Promise<DashboardData> {
        return this.repository.getDashboardData();
    }
}