import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactsScreen } from '../features/contacts/presentation/screens/ContactsScreen';
import { CalendarScreen } from '../features/calendar/presentation/screens/CalendarScreen';
import { HomeScreen } from '../features/dashboard/presentation/screens/HomeScreen';
import { NotificationsScreen } from '../features/notifications/presentation/screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};