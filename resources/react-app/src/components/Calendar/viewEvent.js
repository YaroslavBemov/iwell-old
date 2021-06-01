import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./calendar.scss";
import ArrowBack from "../Header/icons/ArrowBack";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

const ViewEvent = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [currentEvents, setCurrentEvents] = useState(INITIAL_EVENTS);

  const onSubmit = (data) => {
    console.log(data);
    // data.event.remove()  // const handleEventClick = (clickInfo) => {}
  }

  console.log(currentEvents);
  
  return (
    <div className="calendar">
      <button
        className="btn-back"
        onClick={() => { history.goBack() }}
      >
        <ArrowBack />
      </button>
      <div className="flex justify-between items-center mt-40">
        <h1>Бронь 000152684/45</h1>
        <button type="submit" className="button btn-red"
                onClick={() => { history.goBack() }}>
          Отменить
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-60">
        <label>Клиент</label>
        <input 
          type="text" 
          className="calendar__input noline"
          value="Абонемент 000152684 (Анастасия Осипова)" 
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
          className="calendar__input noline"
          value="Подготовить рацион питания" 
          {...register("Comment", {})} 
        />    
      </form>   
    </div>
  );
};

export default ViewEvent;
