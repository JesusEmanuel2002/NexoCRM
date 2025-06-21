import { DashboardData } from '../../domain/entities/DashboardData';

import { GetContactsUseCase } from '../../../contacts/domain/usecases/GetContactsUseCase';
import { ContactsRepositoryImpl } from '../../../contacts/data/repositories/ContactsRepositoryImpl';
import { ContactsDatasource } from '../../../contacts/data/datasources/ContactsDatasource';

import { GetCalendarEventsUseCase } from '../../../calendar/domain/usecases/GetCalendarEventsUseCase';
import { CalendarRepositoryImpl } from '../../../calendar/data/repositories/CalendarRepositoryImpl';
import { CalendarDatasource } from '../../../calendar/data/datasources/CalendarDatasource';

export class DashboardDatasource {
    async fetchDashboardData(): Promise<DashboardData> {
        const contactsUseCase = new GetContactsUseCase(
            new ContactsRepositoryImpl(new ContactsDatasource())
        );
        const calendarUseCase = new GetCalendarEventsUseCase(
            new CalendarRepositoryImpl(new CalendarDatasource())
        );

        const contacts = await contactsUseCase.execute();
        const events = await calendarUseCase.execute();

        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);

        const upcomingEvents = events.filter(event =>
            new Date(event.startDate) >= today && new Date(event.startDate) <= nextWeek
        ).length;

        return {
            totalContacts: contacts.length,
            upcomingEvents,
            recentNotifications: 0 // temporal por la futura implementacion de las notificaciones 
        };
    }
}