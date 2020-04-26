import React from 'react';
import { View, Text } from 'react-native';
import { WrappedDateTimePickerProps } from './WrappedDateTimePicker.web';

const WrappedDateTimePicker: React.FC<WrappedDateTimePickerProps> = ({ selectedDate }) => {
  return (
    <View>
      <Text>This is wrapped</Text>
    </View>
  );
};
