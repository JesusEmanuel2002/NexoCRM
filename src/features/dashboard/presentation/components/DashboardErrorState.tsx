import React from 'react';
import { View, Text } from 'react-native';

interface DashboardErrorStateProps {
    message: string;
}

export const DashboardErrorState: React.FC<DashboardErrorStateProps> = ({ message }) => {
    return (
        <View style={{ padding: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'red', fontSize: 16 }}>{message}</Text>
        </View>
    );
};