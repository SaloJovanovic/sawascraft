import React, {useState} from "react";
import './Shop.css';
// import ShopItem from '../ShopItem/ShopItem';
// import img1 from '../images/shubham-dhage-fQL1DKNUQZw-unsplash.jpg';
// import img2 from '../images/steve-johnson-YJGq5H9ofy0-unsplash.jpg';

const Shop = ({navbarLightMode}) => {
  // class shopItem {
  //   constructor(title, description, image, price) {
  //     this.title = title;
  //     this.description = description;
  //     this.image = image;
  //     this.price = price;
  //   }
  // }
  //
  // const[shopItems, setShopItems] = useState([
  //   new shopItem("First item", "Description of the first item", img1, 5),
  //   new shopItem("Second item", "Description of the second item", img2, 7),
  // ]);

  return (
    <>
      <div className={navbarLightMode ? 'shop-container lightMode' : 'shop-container'}>
        <h2>Coming soon</h2>

        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/*{shopItems.map((shopItem) => (*/}
        {/*  <>*/}
        {/*    <ShopItem navbarLightMode={navbarLightMode} shopItem={shopItem}></ShopItem>*/}
        {/*  </>*/}
        {/*))}*/}
      </div>
    </>
  )
}

export default Shop;