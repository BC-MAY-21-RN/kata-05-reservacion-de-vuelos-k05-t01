import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import color from '../../consts/colors';
import style from '../../consts/style';

const Calendar = ({dateSelected, setSelectedDate}) => {
  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedDate({...dateSelected, endDate: date});
    } else {
      setSelectedDate({startDate: date, endDate: null});
    }
  };

  const minDate = new Date(); // Today
  const maxDate = new Date(2022, 6, 6);
  const startDate = dateSelected.startDate
    ? dateSelected.startDate.toString()
    : '';
  const endDate = dateSelected.endDate ? dateSelected.endDate.toString() : '';

  return (
    <SafeAreaView>
      <View style={style.calendarWidget}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor={color.green}
          selectedDayColor={color.green}
          selectedDayTextColor={color.white}
          onDateChange={onDateChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default Calendar;
