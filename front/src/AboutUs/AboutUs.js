import {useState, React} from "react";
import './AboutUs.css';
import savapfp from '../images/pfps/sava.png';
import mattispfp from '../images/pfps/mattis.png';
import salepfp from '../images/pfps/sale.png';
import alexpfp from '../images/pfps/alex.png';
import majorpfp from '../images/pfps/default.jpg';
import Worker from "../Worker/Worker";

const AboutUs = ({navbarLightMode}) => {
  class worker {
    constructor(name, pfp, job, description, link) {
      this.name = name;
      this.pfp = pfp;
      this.job = job;
      this.description = description;
      this.link = link;
    }
  }

  const[workes, setWorkers] = useState([
    new worker("Sava", savapfp, "CEO", "", '//www.instagram.com/sawabozovic/'),
    new worker("Mattis", mattispfp, "Organization and community menagment", "", '//www.instagram.com/mattis_1243/'),
    new worker("Sale", salepfp, "Web developer", "", '//www.instagram.com/notkomunjara/'),
    new worker("Alex", alexpfp, "Developer", "", '//www.instagram.com/simquixx/'),
    new worker("Major", majorpfp, "Developer", "", '//www.instagram.com/major.flv/'),
  ])

  console.log(workes);

  return (
    <div className={navbarLightMode ? 'about-us-big-container lightMode' : 'about-us-big-container'}>
      <h1>About Us</h1>
      <p>We are a group of people who decided to connect people by creating a Minecraft server, which will be free for all those who have Minecraft installed.
      </p>
      {/*<h1 className={'possible'}>The people who made this possible</h1>*/}
      <div className={navbarLightMode ? 'about-us-small-container lightMode' : 'about-us-small-container'}>
        <h1 className={'possible'}>The people who made this possible</h1>
        <div className={navbarLightMode ? 'nations-container lightMode' : 'nations-container'}>
          {workes.map((worker) => (
            <>
              <Worker navbarLightMode={navbarLightMode} worker={worker}></Worker>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs;