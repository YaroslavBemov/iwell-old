import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./calendar.scss";
import ArrowBack from "../Header/icons/ArrowBack";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

const BookEvent = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [choice, setChoice] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(INITIAL_EVENTS);

  const onSubmit = (data) => {
    const newEvent = [...currentEvents, 
      {
        id: createEventId(),
        title: data.Client,
        // start: data.startStr,
        // end: data.endStr,
        display: "background",
        Comment: data.Comment,
        DateTime: data.DateTime,
        abonementNumber: data.abonementNumber,
      }
    ];
    setCurrentEvents(newEvent);
    console.log(data);
  }
  //console.log(JSON.stringify(currentEvents));
  console.log(currentEvents);

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
              <button className="button" onClick={() => { setChoice(false) }}>
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

export default BookEvent;
