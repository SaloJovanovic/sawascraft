import React, {useState} from "react";
import './Updates.css';
import Update from '../Update/Update';
import img1 from '../images/shubham-dhage-fQL1DKNUQZw-unsplash.jpg';
import img2 from '../images/steve-johnson-YJGq5H9ofy0-unsplash.jpg';
import img1_17_01_2022 from '../images/17.1.2022/17.1.2022._1.png';
import img2_17_01_2022 from '../images/17.1.2022/17.1.2022._2.png';

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

  class text {
    constructor(content, isBolded, haveBrake) {
      this.content = content;
      this.isBolded = isBolded;
      this.haveBrake = haveBrake;
    }
  }

  const[updates, setUpdates] = useState([
    new update("Sawascraft rebirth", new Date(2022, 1, 17),
      <>
        <p className={''}>
          The server was launched on 16.1.2022. around 7pm CET. A maximum of <p className={'noBrake bolded'}>80 people</p> were on the server <p className={'noBrake bolded'}>at the same time</p>, while <p className={'noBrake bolded'}>171 people registered</p> on the server.
        </p>
        <br/>
        <p>We hope that you, who were there, had a good time, and for those of you who still haven't played on Sawascraft, what are you waiting for? Join us in this unforgettable adventure.</p>
        <br/>
        <p>#ForOmnia</p>
      </>,
      null, [img1_17_01_2022, img2_17_01_2022]),
    new update("Sawascraft launch!", new Date(2022, 1, 16),
      <>
        <p>Sawascraft launches today, at 7 p.m. Central European Time.</p>
        <br/>
        <p>We are expecting you.</p>
        <br/>
        <p>#ForOmnia</p>
      </>, null, []),
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