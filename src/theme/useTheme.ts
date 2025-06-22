import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './themes';

export const useTheme = () => {
    const colorScheme = useColorScheme();
    return colorScheme === 'dark' ? darkTheme : lightTheme;
};