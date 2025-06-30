import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@/theme';

interface Props {
    title: string;
    children: React.ReactNode;
    containerStyle?: ViewStyle;
}

// Componente contenedor con título para secciones del dashboard
export const DashboardSection = ({ title, children, containerStyle }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
            <View style={styles.content}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    content: {
        gap: 12,
    },
});
