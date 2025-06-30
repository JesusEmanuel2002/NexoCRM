import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

// Muestra un mensaje de error específico para el dashboard
export const DashboardErrorState = () => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { color: theme.colors.error }]}>
                Ocurrió un error al cargar el dashboard.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
});
