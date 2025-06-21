import React from 'react';
import { View, Text } from 'react-native';

interface DashboardSectionProps {
    title: string;
    children: React.ReactNode;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ title, children }) => {
    return (
        <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>
            <View>{children}</View>
        </View>
    );
};
