import React, { Component } from 'react';
import './style/index.less';
/**
 * Clock component
 */
class Clock extends Component {
  constructor(props) {
    super(props);
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    this.dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    this.state = this.formatClock(false);
  }

  componentDidMount() {
    this.timer = setInterval(this.formatClock, 1000);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  formatClock = (render = true) => {
    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const state = {
      date: `${now.getFullYear()} ${this.monthNames[now.getMonth()]} ${now.getDate()} ${this.dayNames[now.getDay()]}`,
      hours: hours < 10 ? `0${hours}` : hours,
      min: min < 10 ? `0${min}` : min,
      sec: sec < 10 ? `0${sec}` : sec,
    };

    if (render) this.setState(state);
    return state;
  };

  render() {
    const {date, hours, min, sec} = this.state;
    return (
      <div className="antui-clock">
        <div className="date">{date}</div>
        <ul>
          <li className="hours">{hours}</li>
          <li className="point">:</li>
          <li className="min">{min}</li>
          <li className="point">:</li>
          <li className="sec">{sec}</li>
        </ul>
      </div>
    );
  }
}

export default Clock;
