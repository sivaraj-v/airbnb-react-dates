import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';
const Monday = 1
function onlyFridays(date) {
  return date.day() != Monday
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="App">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          isDayBlocked={onlyFridays}
          hideKeyboardShortcutsPanel
          // isOutsideRange={(day) => day.isAfter(moment()) || day.isBefore(moment().subtract(30, 'days'))} Past Date selection

          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
      </div>
    );
  }
}

export default App;
