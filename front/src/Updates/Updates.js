import React, {useState} from "react";
import './Updates.css';
import Update from '../Update/Update';
import img1 from '../images/shubham-dhage-fQL1DKNUQZw-unsplash.jpg';
import img2 from '../images/steve-johnson-YJGq5H9ofy0-unsplash.jpg';

const Updates = ({navbarLightMode}) => {
  class update {
    constructor(title, date, description, embed, images) {
      this.title = title;
      this.date = date;
      this.description = description;
      this.embed = embed;
      this.images = images;
    }
  }

  const[updates, setUpdates] = useState([
    new update("Sawascraft launch!", new Date(2022, 1, 16), "Sawascraft launches today, at 7 p.m. Central European Time. \n" +
      "We are expecting you. #ForOmnia", null, []),
    new update("Trailer launch!", new Date(2022, 1, 12), "", <iframe width="560" height="315"
                                                                     src="https://www.youtube.com/embed/5KUZHLP4HRA"
                                                                     title="YouTube video player" frameBorder="0"
                                                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                     allowFullScreen></iframe>, []),
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