import {useState, React} from "react";
import './Nations.css';
import Nation from '../Nation/Nation';
import noramFlag from '../images/flags/noram.png';
import astrellaFlag from '../images/flags/astella.png';
import gladiaFlag from '../images/flags/gladia.png';
import principalityOfHerbertiaFlag from '../images/flags/Michaelia.png';
import tridraliumFlag from '../images/flags/tridralium.png';
import konunsgardFlag from '../images/flags/konunsgard.png';
import soldiumFlag from '../images/flags/theRepublicOfSoldium.png';
import regnumAeternumFlag from '../images/flags/regnumAeternum.png';
import jundullahCaliphateFlag from '../images/flags/jundullahCaliphate.png';
import chizekstanFlag from '../images/flags/chezikstan.png';

const Nations = ({navbarLightMode}) => {
  class nation {
    constructor(title, leader, flag, system, description) {
      this.title = title;
      this.leader = leader;
      this.flag = flag;
      this.system = system;
      this.description = description;
    }
  }

  const[nations, setNations] = useState([
    new nation("Noram", "sawabozovic", noramFlag, "Monarchy", "Noramians believe in a single God- Azor. According to their belief system, Azor is the one true creator of Omnia, and King Sawa is his messenger, the chosen one to lead Omnia according to Azor's will. Only under King Sawa's leadership, one of the first High Kings to awaken in Omnia, could Omnia be saved. People that follow this belief system are called Sawanists. Sawanists pray to Azor under their holy trees- the Ahai. According to the prophecy, Sawa will lead his people to the promised land, to \"Azor's Isle\" (Island of Azor), where they shall remain and prosper, for eternity, with the island never falling into enemy hands. The red colour on Noram's banner symbolises power, the blue symbolises wisdom, harmony and the great sea, surrounding the Island of Azor, while the yellow Sun in the middle, symbolises Azor's Sun, the gift that he bestowed upon Omnia, that gave it light, and life."),
    new nation("Astrella", "Solid Loli", astrellaFlag, "Monarchy", "Coming soon..."),
    new nation("Gladia", "Relja & Ralevic", gladiaFlag, "Monarchy", "Gladia is a Monarchy who is neutral and wants to prosper and trade with it's neighbours. In Gladia, organization is important, where everyone has their role and importance to the kingdom. Speaking against the kings, not following orders from higher ranking people etc.  will get you fined or even even imprisoned. This is a country that's for everyone who's willing to have fun and prosper, living peacefully in the great Kingdom of Gladia. You will be welcomed with open arms, and we hope to see you in our Kingdom!" +
      "\n" +
      "HISTORY:\n" +
      "Gladia was formed by the uniting of 2 tribes, who lived in the far away lands from Omnia. After centuries of war between them, the 2 leaders of the tribes, Relja and Ralevic, decided to stop fighting and united the people of the tribes. Together they  decided to leave their war ravaged land, and settle in Omnia, where they formed  the great country Gladia, and the royal houses of Relja and Rale, while believing in Mattism (Worshipping the Almighty Mattis). Mattis came down from the skies, to give guidance to the kings and show them the path to Omnia, which the people of Gladia believe is Holy Land, where they will settle once and for all and live peaceful lives, under the protection of Mattis. Mattis blessed the kings and their lines with long lives, so they can lead the people longer and teach their young the ways of Mattism."),
    new nation("Principality of Herbertia", "prxima", principalityOfHerbertiaFlag, "Monarchy", "The Nation was founded long time ago by the great Scientist herbert. Herbert was a great man and was very fond of the idea of neutrality. Together with his long time friend Michael he got working but soon conflicts arose in the quick growing and prospering nation. After a long civil war Herbert dissapeared into a long exile, before leaving though Herbert casted a spell that would make sure the nation was still known as herbertia and kept his flag forever. Which works until today and ever, making herbertias flag the oldest in omnia. Not long time ago rumours said that herbert was back, gathering monks to overthrow the long reigning michael, which might cause a 2nd civil war."),
    new nation("Tridralium", "stepbroluka & LoligeGurke", tridraliumFlag, "Constitutional Dual-Monarchy", "Once in the world of Omnia, there were two farmer boys, LoligeGurke and stepbroluka, who were best friends. Both of them saw the destruction of the Anarchy they lived in and how the people lived there. People fought over food, harassed the weak, the children, the women and generally speaking there was no moral whatsoever in this cruel world. They knew they had to change something. They always dreamed about a state with morals, order and equality. While successfully suppressing the oppressors and gangs, they gained the faith of the people. They were elected leaders of the country, were crowned by the Church of Thidralium and thus became Kings." +
      "Nowadays, Thidralium is a country located in the mountains of Threbalia. With a flourishing economy, the country tries to give it's citizens their best life they can get. Both Kings don't want to experience the anarchical state they once lived in again, so they have to provide only the best for the people, the country and the Church. Thidralium is a neutral country, but is not afraid to fight back and bring justice to the aggressors."),
    new nation("Konunsgard", "atago", konunsgardFlag, "Monarchy", "Living in the mountains is our way of life and is ever needed for natural protection of our great nation. We are a proud dwarven kingdom that founded the church of Thighosopy and are also allied with Astrella. We hope we can welcome more citizens to our humble yet wonderful kingdom."),
    new nation("The Republic of Soldium", "skyrex", soldiumFlag, "Republic", "Originally a merchant outpost, the Republic of Slodium quickly grew to a size of a city. Thus it's no wonder that merchant values translate into the way of governance. Therefor Team work, organization and respect of the contract and merchant law are the core values we stand on. To our republic everyone with a will to work and grow is invited!"),
    new nation("Regnum Aeternum", "unknown", regnumAeternumFlag, "Monarchy", "Coming soon..."),
    new nation("Jundullah Caliphate", "bjkai", jundullahCaliphateFlag, "Monarchy", "We are the Jundullah Caliphate. We rose up from the ashes of a failed state, and emerged as an irreplaceable force, one that notifies everyone of its presence. We fight for what we think is right, we fight the ones who have dared to oppose us. This world has no place for non believers, and it is evident. We will do what we see fit, and we must cleanse this world from its filth. Glorly to the Jundullah Caliphate."),
    new nation("Chizekstan", "drakula", chizekstanFlag, "Monarchy", "Chizekstan is a moranchy with a leader named Marin Cizek. Marin Cizek was a son of Borislav II Cizek, who was the king since last year, he died. Marin took the lead, and now he rule the country .People in Chizekstan see Marin as their God, and they would do anything to help him. Marin has 3 sons: Andrej the oldest, Nikola, and Djordje the youngest. Marin want his people to live in peace and happines. But there is one and only important rule. If you dont serve Marin well you'ill be locked in the underground prison."),
  ]);

  console.log(nations);

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

export default Nations;