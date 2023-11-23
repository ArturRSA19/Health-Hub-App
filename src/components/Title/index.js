import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function Title() {
    return (
        <View style={styles.boxTittle}>
            <Text style={styles.textTittle}>HEALTH-HUB</Text>
        </View>
    )
}