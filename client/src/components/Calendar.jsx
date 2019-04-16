import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      date: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }


  render() {
    const { focused, date } = this.state;
    return (
      <div className="reservationCalendar">
        <form>
          <SingleDatePicker
            id="date_input"
            date={date}
            focused={focused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            transitionDuration={0}
            verticalSpacing={-8}
            enableOutsideDays
            noBorder
            displayFormat="ddd, MM/DD"
            weekDayFormat="ddd"
            hideKeyboardShortcutsPanel
            placeholder="Today"
            daySize={36}
          />
        </form>
      </div>
    );
  }
}

export default Calendar;
