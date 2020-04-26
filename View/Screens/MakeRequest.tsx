import React from 'react';
import { View, StyleSheet, Text, Platform, SafeAreaView, Picker } from 'react-native';
import WrappedDateTimePicker from '../Components/WrappedDateTimePicker.web';

const MakeRequest = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.column, styles.leftPanel]}>
          <Text>Submit a Request</Text>
          <Text>Select Date</Text>
          <WrappedDateTimePicker />
          <Text>Select Category</Text>
          <Picker>
            <Picker.Item label={'more'} value={'more'} />
            <Picker.Item label={'cow'} value={'cow'} />
            <Picker.Item label={'bell'} value={'bell'} />
          </Picker>
        </View>
        <View style={[styles.column, styles.rightPanel]}>
          <Text>What's Available</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    margin: Platform.OS === 'web' ? 20 : 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  leftPanel: {
    flex: 1,
  },
  rightPanel: {
    flex: 3,
  },
});

export default MakeRequest;
