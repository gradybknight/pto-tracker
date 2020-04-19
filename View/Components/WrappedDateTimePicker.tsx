import React from 'react';
import { Platform, View } from 'react-native';
import DatePicker from 'react-datepicker';

const WrappedDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const domPicker = (
    <>
      <View>
        <DatePicker selected={selectedDate} onChange={setSelectedDate} />
      </View>
    </>
  );

  return Platform.OS === 'web' ? domPicker : null;
};

export default WrappedDateTimePicker;
