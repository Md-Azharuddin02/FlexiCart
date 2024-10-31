import React from "react";

import BagSummery from "./BagSummery";
import BagItemContainer from "./BagItemContainer";

function Bag() {
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItemContainer/>
          </div>
          <div className="bag-summary">
            <BagSummery/>
          </div>
        </div>
      </main>
    </>
  );
}

export default Bag;
