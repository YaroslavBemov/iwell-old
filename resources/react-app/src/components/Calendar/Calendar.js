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
  const [viewButton, setViewButton] = useState(false);

  const handleDateSelect = (selectInfo) => {
    let selectTime = selectInfo.startStr;
    let currentEventTime = currentEvents.map((item) => item.start);

    if (currentEventTime.includes(selectTime)) {
      setActiveButton(false); 
      setViewButton(true);
    } else { 
      setActiveButton(true);
      setViewButton(false); 
    }
  }

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <span>{eventInfo.timeText}</span>
      </>
    )
  }

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
      />
      {activeButton ? (
        <div className="flex justify-between items-center mt-40">
          <span className="dark-grey-text">Не больше 1 заказа</span>
          <Link to="/choice">
            <button className="button">Продолжить</button>
          </Link>
        </div>
      ) : viewButton ? (
        <div className="flex justify-end items-center mt-40">
          <Link to="/view_event"> 
            <button className="button">Просмотр</button>
          </Link>
        </div>
      ) : null }
    </div>
  );
};

export default Calendar;
