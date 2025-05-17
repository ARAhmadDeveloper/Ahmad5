import React from "react";


function Card(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.image,
    alt: "Avatar",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("b", null, props.name), " "), /*#__PURE__*/React.createElement("p", null, props.title)));
}

export default Card;







