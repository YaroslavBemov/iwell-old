import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.scss";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

const Calendar = () => {

  const [currentEvents, setCurrentEvents] = useState(INITIAL_EVENTS);
  const [activeButton, setActiveButton] = useState(false);
  const [currentTime, setCurrentTime] = useState(currentTime);

  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar
    console.log(calendarApi)

    setCurrentTime(selectInfo.startStr);
    currentTime === selectInfo.startStr ? setActiveButton(!activeButton) : setActiveButton(true);

    let currentEventTime = currentEvents.map((item) => item.start);
    //console.log(currentEventTime.includes(currentTime));

    if (currentEventTime.includes(currentTime)) {
      console.log("+++")
      calendarApi.unselect()

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
        <span>{eventInfo.timeText}</span>
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

  return (
    <div className="calendar">
      <h1>Календарь</h1>
      <p>Выберите свободное время</p>
      <FullCalendar
        plugins={[ timeGridPlugin, interactionPlugin ]}
        initialView="timeGridWeek"
        headerToolbar={{ start: "today prev,next", center: "title", end: "" }}
        locale="ru"
        timeZone="UTC"
        firstDay="1"
        allDaySlot={false}
        slotMinTime="09:00:00"
        slotMaxTime="23:00:00"
        slotDuration="00:60:00"
        expandRows={true}
        height="700"
        buttonText={{ today: "Сегодня" }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        //eventsSet={handleEvents} // called after events are initialized/added/changed/removed
      />
      <div className={`${activeButton ? "visible" : "invisible"} flex justify-between items-center mt-40`}>
        <span className="dark-grey-text">Не больше 1 заказа</span>
        <Link to="/choice">
          <button className="button" >Продолжить</button>
        </Link>
      </div>
    </div>
  );
};

export default Calendar;
