import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction'
import "./calendar.scss";

import { INITIAL_EVENTS, createEventId } from './event-utils'

const Calendar = () => {

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateSelect = (selectInfo) => {
    //let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    console.log(calendarApi)
    
    //calendarApi.unselect() // clear date selection


    if (calendarApi) {
      console.log("+++")
      // calendarApi.addEvent({
      //   id: createEventId(),
      //   title,
      //   start: selectInfo.startStr,
      //   end: selectInfo.endStr,
      //   allDay: false,
      //   //display: "background",
      //   url: '/classes',  //event.id
      // })
    }
  }

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      //clickInfo.event.remove()
      console.log("click");
    }
  }

  // const handleEvents = (event) => {
  //   const newEvent = [...currentEvents, event.id];
  //   setCurrentEvents(newEvent);
  // }

  let events = [
    { title: "event 1", date: "2021-05-13T17:00:00", display: "background" },
    { title: "event 2", date: "2021-05-12T15:00:00", display: "background" },
  ];

  return (
    <div>
      <FullCalendar
        plugins={[ timeGridPlugin, interactionPlugin ]}
        initialView="timeGridWeek"
        headerToolbar={{ start: "today prev,next", center: "title", end: "" }}
        locale="ru"
        firstDay="1"
        allDaySlot={false}
        slotMinTime="09:00:00"
        slotMaxTime="23:00:00"
        slotDuration="00:60:00"
        expandRows={true}
        height="600"
        buttonText={{ today: "Сегодня" }}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        //eventsSet={handleEvents} // called after events are initialized/added/changed/removed

      
      />
      <div className="flex justify-end mt-40">
        <span>Не больше 1 заказа</span>
        <button className="button">Продолжить</button>
      </div>
    </div>
  );
};

export default Calendar;
