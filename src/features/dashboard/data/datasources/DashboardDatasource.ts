// Importamos los casos de uso y las implementaciones necesarias
import { GetContactsUseCase } from '../../../contacts/domain/usecases/GetContactsUseCase';
import { GetCalendarEventsUseCase } from '../../../calendar/domain/usecases/GetCalendarEventsUseCase';
import { GetNotificationsUseCase } from '../../../notifications/domain/usecases/GetNotificationsUseCase';

import { ContactsRepositoryImpl } from '../../../contacts/data/repositories/ContactsRepositoryImpl';
import { CalendarRepositoryImpl } from '../../../calendar/data/repositories/CalendarRepositoryImpl';
import { NotificationsRepositoryImpl } from '../../../notifications/data/repositories/NotificationsRepositoryImpl';

import { ContactsDatasource } from '../../../contacts/data/datasources/ContactsDatasource';
import { CalendarDatasource } from '../../../calendar/data/datasources/CalendarDatasource';
import { NotificationsDatasource } from '../../../notifications/data/datasources/NotificationsDatasource';

import { DashboardData } from '../../domain/entities/DashboardData';

// Fuente de datos principal del dashboard
export const DashboardDatasource = {
    
    async fetchDashboardData(): Promise<DashboardData> {
        // Se crean los repositorios con sus respectivas fuentes de datos
        const contactsRepository = new ContactsRepositoryImpl(new ContactsDatasource());
        const calendarRepository = new CalendarRepositoryImpl(new CalendarDatasource());
        const notificationsRepository = new NotificationsRepositoryImpl(new NotificationsDatasource());

        // Se instancian los casos de uso para acceder a los datos
        const getContactsUseCase = new GetContactsUseCase(contactsRepository);
        const getCalendarEventsUseCase = new GetCalendarEventsUseCase(calendarRepository);
        const getNotificationsUseCase = new GetNotificationsUseCase(notificationsRepository);

        // Se ejecutan los casos de uso
        const contacts = await getContactsUseCase.execute();
        const events = await getCalendarEventsUseCase.execute();
        const notifications = await getNotificationsUseCase.execute();

        // Retornamos los datos agregados
        return {
            totalContacts: contacts.length,
            upcomingEvents: events.length,
            recentNotifications: notifications.length,
        };
    },
};