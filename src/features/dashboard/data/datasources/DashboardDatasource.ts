import { DashboardData } from '../../domain/entities/DashboardData';

export class DashboardDatasource {
    async fetchDashboardData(): Promise<DashboardData> {
        return {
            totalContacts: 42,
            upcomingEvents: 5,
            recentNotifications: 3,
        };
    }
}