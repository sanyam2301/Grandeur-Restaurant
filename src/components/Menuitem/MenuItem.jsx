import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="gr__menuitem">
    <div className="gr__menuitem-head">
      <div className="gr__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="gr__menuitem-dash" />
      <div className="gr__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="gr__menuitem-sub">
      <p className="p__cormorant" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
