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

export const DashboardDatasource = {
    async fetchDashboardData(): Promise<DashboardData> {
        const contactsRepository = new ContactsRepositoryImpl(new ContactsDatasource());
        const calendarRepository = new CalendarRepositoryImpl(new CalendarDatasource());
        const notificationsRepository = new NotificationsRepositoryImpl(new NotificationsDatasource());

        const getContactsUseCase = new GetContactsUseCase(contactsRepository);
        const getCalendarEventsUseCase = new GetCalendarEventsUseCase(calendarRepository);
        const getNotificationsUseCase = new GetNotificationsUseCase(notificationsRepository);

        const contacts = await getContactsUseCase.execute();
        const events = await getCalendarEventsUseCase.execute();
        const notifications = await getNotificationsUseCase.execute();

        return {
            totalContacts: contacts.length,
            upcomingEvents: events.length,
            recentNotifications: notifications.length,
        };
    },
};