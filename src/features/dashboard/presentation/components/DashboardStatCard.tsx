import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

interface Props {
    label: string;
    value: number;
}

// Componente visual para mostrar un resumen estadístico
export const DashboardStatCard = ({ label, value }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
            <Text style={[styles.value, { color: theme.colors.primary }]}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
    },
    value: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 4,
    },
});