"use strict";

var user_Name;
var user_Email;
var user_Phon;
var data_array = [];
function DataValue() {
  user_Name = document.querySelector(".user-Name").value;
  user_Email = document.querySelector(".user-Email").value;
  user_Phon = document.querySelector(".user-Phon").value;
}
var handelData = function handelData(e) {
  e.preventDefault();
  data_array.push({
    user_Name: user_Name,
    user_Email: user_Email,
    user_Phon: user_Phon
  });
  console.log(data_array);
  e.target.elements[0].value = "";
  e.target.elements[1].value = "";
  e.target.elements[2].value = "";
  updateData();
};
function updateData() {
  var content_form = /*#__PURE__*/React.createElement("div", {
    className: "form-content"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handelData
  }, /*#__PURE__*/React.createElement("input", {
    className: "user-Name",
    type: "text",
    placeholder: "Your name",
    onChange: DataValue
  }), /*#__PURE__*/React.createElement("input", {
    className: "user-Email",
    type: "text",
    placeholder: "Your Email",
    onChange: DataValue
  }), /*#__PURE__*/React.createElement("input", {
    className: "user-Phon",
    type: "text",
    placeholder: "Your phon",
    onChange: DataValue
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit"
  })), /*#__PURE__*/React.createElement("ul", null, data_array.length ? data_array.map(function (ele) {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, ele.user_Name, " "), /*#__PURE__*/React.createElement("td", null, ele.user_Email, " "), /*#__PURE__*/React.createElement("td", null, " ", ele.user_Phon));
  }) : ""));
  ReactDOM.render(content_form, document.querySelector("#App"));
}
updateData();
