/**
 * GET /
 * Event calendar
 */
// exports.getCalendar = ( res ) => {
  
//   const Calendar = require('@fullcalendar/core');
//   const dayGridPlugin = require('@fullcalendar/daygrid');

//   document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
  
//     var calendar = new Calendar(calendarEl, {
//       plugins: [ dayGridPlugin ]
//     });
  
//     // return res.calendar.render('calendar', {
//     //   title: 'Calendar'
//     // });

//     return res.calendar.render();

//   })
//   .catch((err) => {
//     console.log('ERROR: calendar', err)
//   });
// };