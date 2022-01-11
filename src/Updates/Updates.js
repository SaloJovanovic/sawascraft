import React, {useState} from "react";
import './Updates.css';
import Update from '../Update/Update';
import img1 from '../images/shubham-dhage-fQL1DKNUQZw-unsplash.jpg';
import img2 from '../images/steve-johnson-YJGq5H9ofy0-unsplash.jpg';

const Updates = ({navbarLightMode}) => {
  class update {
    constructor(title, date, description, images) {
      this.title = title;
      this.date = date;
      this.description = description;
      this.images = images;
    }
  }

  const[updates, setUpdates] = useState([
    new update("First update", new Date(2021, 12, 27), "This is our first update.", [img1]),
    new update("Second update", new Date(2021, 12, 27), "This is our second update.", [img1, img2]),
    new update("Second update", new Date(2021, 12, 27), "This is our second update.", [img1, img2]),
  ]);

  return (
    <>
      <div className={navbarLightMode ? 'updates-container lightMode' : 'updates-container'}>
      {updates.map((update) => (
        <>
          <Update navbarLightMode={navbarLightMode} update={update}></Update>
        </>
      ))}
      </div>
    </>
  )
}

export default Updates;