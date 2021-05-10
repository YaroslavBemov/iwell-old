import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
//import "./calendar.scss";

const Calendar = () => {
  const headerToolbar = {start: 'today prev,next', center: 'title', end: ''};
  const buttonText = {today: 'Сегодня'}
  return (
    <div>
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        locale="ru"
        firstDay="1"
        slotMinTime="09:00:00"
        slotMaxTime="23:00:00"
        slotDuration='00:60:00'
        expandRows="true"
        height="700"
        headerToolbar={headerToolbar}
        buttonText={buttonText}
        events={[
          { title: 'event 1', date: '2021-05-11' },
          { title: 'event 2', date: '2021-05-12' }
        ]}
      />  
    </div>
  );
};

export default Calendar;
