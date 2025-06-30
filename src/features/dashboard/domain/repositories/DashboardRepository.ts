import { DashboardData } from '../entities/DashboardData';

// Interfaz del repositorio para obtener los datos del dashboard
export interface DashboardRepository {
    getDashboardData(): Promise<DashboardData>; // Método para obtener datos del dashboard
}