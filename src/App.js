import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';


import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
  reactDates: {
    ...DefaultTheme.reactDates,
    color: {
      ...DefaultTheme.reactDates.color,
      highlighted: {
        backgroundColor: '#00a1e0',
        backgroundColor_active: '#02b383',
        backgroundColor_hover: '#02b383',
        color: '#fff',
        color_active: '#FFF',
        color_hover: '#FFF',
      },
    },
  },
});

// const datesList = [
//   moment(),
//   moment().add(1, 'days'),

// ];


const Sunday = 0
const Monday = 1
const Saturday = 6
function onlyFridays(date) {
  // if(date.day() !== Tuesday) debugger
  return !(date.day() !== Saturday && date.day() !== Sunday)
}
const TestCustomCloseIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >'X'</span>
);
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      end_disabled: 'endDate'
    };
  }

  render() {

    return (
      <div className="App">
      {/* {console.log(moment())} */}
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          // disabled= {this.state.end_disabled}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          showClearDates={true}
          // withPortal
          showDefaultInputIcon
          // inputIconPosition="after"
          // customInputIcon = {"C"}
          customCloseIcon={<TestCustomCloseIcon />}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({end_disabled: false });
            console.log("Before",this.state);
            endDate = startDate > 0 ? moment(startDate).add(1, 'days') : null;
            this.setState({ startDate, endDate, focusedInput:null, end_disabled:true})
          }}
          focusedInput={this.state.focusedInput}
          hideKeyboardShortcutsPanel= {true}
          isDayBlocked={onlyFridays}
          isDayHighlighted={day => ( day.day() == 1 ?true:false)}
          //isOutsideRange={(day) => day.isBefore(moment())} //  || day.isBefore(moment().subtract(30, 'days'))
          // initialVisibleMonth={() => moment().locale('some-monday-based-locale')}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}

        }
        />
      </div>
    );
  }
}

export default App;
