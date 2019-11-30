// import Calendar from 'tui-calendar';
// import "tui-calendar/dist/tui-calendar.css";

// // To use the default popups, use this.
// import 'tui-date-picker/dist/tui-date-picker.css';
// import 'tui-time-picker/dist/tui-time-picker.css';

var Calendar = require('tui-calendar');
require("tui-calendar/dist/tui-calendar.css");

// TO use the default popups, use this.
require("tui-date-picker/dist/tui-date-picker.css");
require("tui-time-picker/dist/tui-time-picker.css");

/**
 * GET /
 * Event calendar
 */
exports.index = (req, res) => {
  res.render('calendar', {
    title: 'Calendar'
  });
};

let calendar = new Calendar('#calendar', {
  defaultView: 'month',
  taskView: true,
  template: {
    monthDayname: function(dayname) {
      return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
    }
  }
});
