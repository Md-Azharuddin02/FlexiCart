import React from "react";
import {items} from "../data/items";
function Item() {
  return (
    <>
      {items.map(item  => {
        return (
          <div className="item-container" key={item.id}>
            <img className="item-image" src={item.image} alt="item image"  />
            <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            <button className="btn-add-bag" onClick={()=>console.log('add to cart is working '+item.id)}>
              Add to Bag
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Item;
