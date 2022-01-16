import React, {useEffect, useState} from "react";
import './ShopItem.css';

const ShopItem = ({navbarLightMode, shopItem}) => {
  return (
    <div className={navbarLightMode ? 'shop-item-container lightMode' : 'shop-item-container'}>
      <div className={'shop-item-header'}>
        <h3>{shopItem.title}</h3>
      </div>
      <div className={'shop-item-description'}>
        <div className={'img-container'}>
          <img src={shopItem.image}/>
        </div>
        <h3>${shopItem.price}</h3>
        <p>{shopItem.description}</p>
      </div>
    </div>
  )
}

export default ShopItem;