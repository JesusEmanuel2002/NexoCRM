import { GetContactsUseCase } from '../../../contacts/domain/usecases/GetContactsUseCase';
import { GetCalendarEventsUseCase } from '../../../calendar/domain/usecases/GetCalendarEventsUseCase';

import { ContactsRepositoryImpl } from '../../../contacts/data/repositories/ContactsRepositoryImpl';
import { CalendarRepositoryImpl } from '../../../calendar/data/repositories/CalendarRepositoryImpl';

import { ContactsDatasource } from '../../../contacts/data/datasources/ContactsDatasource';
import { CalendarDatasource } from '../../../calendar/data/datasources/CalendarDatasource';

import { DashboardData } from '../../domain/entities/DashboardData';

export const DashboardDatasource = {
    async fetchDashboardData(): Promise<DashboardData> {
        const contactsRepository = new ContactsRepositoryImpl(new ContactsDatasource());
        const calendarRepository = new CalendarRepositoryImpl(new CalendarDatasource());

        const getContactsUseCase = new GetContactsUseCase(contactsRepository);
        const getCalendarEventsUseCase = new GetCalendarEventsUseCase(calendarRepository);

        const contacts = await getContactsUseCase.execute();
        const events = await getCalendarEventsUseCase.execute();

        return {
            totalContacts: contacts.length,
            upcomingEvents: events.length,
            recentNotifications: 0, // temporal por la futura implementacion de las notificaciones
        };
    },
};