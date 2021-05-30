import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./calendar.scss";
import ArrowBack from "../Header/icons/ArrowBack";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

const ChoiceAbonement = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [currentEvents, setCurrentEvents] = useState(INITIAL_EVENTS);
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    // const newEvent = [...currentEvents, data.id];
    // setCurrentEvents(newEvent);

    // console.log(newEvent);

    // // clickInfo.event.remove()  // const handleEventClick = (clickInfo) => {}

    // let calendarApi = data.view.calendar
    // console.log(calendarApi);
    // calendarApi.addEvent({
    //   id: createEventId(),
    //   title: "222",
    //   start: data.startStr,
    //   end: data.endStr,
    //   allDay: false,
    //   //display: "background",
    // })
  }

  const [choice, setChoice] = useState(true);
  
  return (
    <div className="calendar">
      <button
        className="btn-back"
        onClick={() => { history.goBack() }}
      >
        <ArrowBack />
      </button>
      <h1 className="mt-40">Календарь</h1>

      {choice ? (
        <div>
          <p>Введите номер абонемента клиента</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="tel"
              className="calendar__input"
              placeholder="Номер абонемента"
              {...register("abonementNumber", { required: true, maxLength: 30 })}
            />
            <div className="flex justify-end items-center mt-40">
              <button type="submit" className="button"
                      onClick={() => { setChoice(false) }}>
                Продолжить
              </button>
            </div>
          </form> 
        </div>
      ) : (
        <div>
          <p>Подтвердите данные</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-60">
            <label>Клиент</label>
            <input 
              type="text" 
              className="calendar__input noline"
              value="Абонемент 000152684" 
              label="First Name"
              {...register("Client", { required: true })} 
            />
            <label>Дата и время</label>
            <input 
              type="datetime" 
              className="calendar__input noline"
              value="Суббота, 6 марта 15:00 - 16:00" 
              {...register("DateTime", { required: true })} 
            />
            <label>Комментарий</label>
            <input 
              type="text" 
              className="calendar__input noline underline"
              placeholder="Подготовить рацион питания" 
              {...register("Comment", {})} 
            />
            <div className="flex justify-end items-center mt-40">
              <button type="submit" className="button"
                      onClick={() => { history.goBack() }}>
                Забронировать
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChoiceAbonement;
