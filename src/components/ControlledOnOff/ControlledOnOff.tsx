import React from "react";

type OnOffPropsType = {
  on: boolean
  setOn: (on: boolean) => void
}

function ControlledOnOff(props: OnOffPropsType) {
  const onStyle = {
    border: "1px solid #000",
    display: "inline-block",
    padding: "8px",
    background: props.on ? "darkgreen" : "#eee"
  };
  const offStyle = {
    border: "1px solid #000",
    display: "inline-block",
    marginLeft: "5px",
    padding: "8px",
    background: props.on ? "#eee" : "red"
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius : "50%",
    border: "1px solid #000",
    display: "inline-block",
    marginLeft: "5px",
    background: props.on ? "darkgreen" : "red"
  };

  return (
    <div>
      <div style={onStyle} onClick={() => props.setOn(true)}>On</div>
      <div style={offStyle} onClick={() => props.setOn(false)}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default ControlledOnOff;