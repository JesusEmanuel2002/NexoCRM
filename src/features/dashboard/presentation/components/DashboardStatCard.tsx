import React from 'react';
import { View, Text } from 'react-native';

interface DashboardStatCardProps {
    label: string;
    value: number;
}

export const DashboardStatCard: React.FC<DashboardStatCardProps> = ({ label, value }) => {
    return (
        <View style={{ padding: 16, backgroundColor: '#f2f2f2', borderRadius: 12, marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{label}</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2e86de' }}>{value}</Text>
        </View>
    );
};