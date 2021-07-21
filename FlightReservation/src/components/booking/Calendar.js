import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import style from '../../consts/style';
import color from '../../consts/colors';
import Span from '../../consts/i18n/en';
import ArrowBack from '../../components/booking/ArrowBack';
import ButtonForm from '../../components/form/ButtonForm';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2022, 6, 6);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <SafeAreaView>
        <View>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor={color.orange}
            selectedDayColor={color.orange}
            selectedDayTextColor={color.white}
            onDateChange={this.onDateChange}
          />
          <View>
            <Text>
              <Span text="startDate" />
              {startDate}
            </Text>
            <Text>
              <Span text="endDate" />
              {endDate}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Calendar;
