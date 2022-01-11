import React, {useEffect, useState} from "react";
import './Update.css';

const Update = ({navbarLightMode, update}) => {
  const[date, setDate] = useState("random");
  const dateStr = () => {
    let date1 = update.date.getDate().toString() + ".";
    if (update.date.getMonth().toString() === "0")
      date1 += "12.";
    else
      date1 += update.date.getMonth().toString();
    date1 += update.date.getFullYear().toString() + ".";
    setDate(date1);
  }

  useEffect(() => dateStr())

  return (
    <div className={navbarLightMode ? 'update-container lightMode' : 'update-container'}>
      <div className={'update-header'}>
        <h3>{update.title}</h3>
        <p>{date}</p>
      </div>
      <div className={'update-description'}>
        <p>{update.description}</p>
      </div>
      <div className={'img-container'}>
        {update.images.map((image) => (
          <img src={image}/>
        ))}
      </div>
    </div>
  )
}

export default Update;