import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants';
export const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: COLORS.lightGreen, fontSize: SIZES.h1 }}>
        HomeScreen!!
      </Text>
      <Icon name="star-outline" size={30} color={COLORS.primary} />
    </View>
  );
};
