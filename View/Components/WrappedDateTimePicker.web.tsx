import React from 'react';

export type WrappedDateTimePickerProps = {
  selectedDate: Date;
};

const WrappedDateTimePicker = () => {
  const [internalSelectedDate, setInternalSelectedDate] = React.useState<string>('');
  const handleDateChange = (e: any) => {
    console.log(e.target.value);
    setInternalSelectedDate(e.target.value);
  };

  return (
    <div>
      <input onChange={handleDateChange} type='date' id='start' name='trip-start' value={internalSelectedDate} />
    </div>
  );
};

export default WrappedDateTimePicker;
