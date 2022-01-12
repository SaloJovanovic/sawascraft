import {useState, React} from "react";
import './AboutUs.css';
import savapfp from '../images/pfps/sava.png';
import mattispfp from '../images/pfps/mattis.png';
import salepfp from '../images/pfps/sale.png';
import alexpfp from '../images/pfps/alex.png';
import majorpfp from '../images/pfps/major.jpg';

const AboutUs = ({navbarLightMode}) => {
  class worker {
    constructor(name, pfp, job, description, link) {
      this.title = name;
      this.pfp = pfp;
      this.jov = job;
      this.description = description;
      this.link = link;
    }
  }

  const[wokrers, setWorkers] = useState([
    new worker("Sava", savapfp, "CEO", "", 'https://www.instagram.com/sawabozovic/'),
    new worker("Mattis", mattispfp, "Organization and community menagment", "", 'https://www.instagram.com/mattis_1243/'),
    new worker("Sale", salepfp, "Web developer", "", 'https://www.instagram.com/mattis_1243/'),
  ])

  return (
    <>
      <div className={navbarLightMode ? 'nations-container lightMode' : 'nations-container'}>
        {nations.map((nation) => (
          <>
            <Nation navbarLightMode={navbarLightMode} nation={nation}></Nation>
          </>
        ))}
      </div>
    </>
  )
}

export default AboutUs;