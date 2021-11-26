import React, {useState} from "react";

type OnOffPropsType = {
  // on: boolean;
  onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: OnOffPropsType) {

  let [on, setOn] = useState(false);

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }
  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  const onStyle = {
    border: "1px solid #000",
    display: "inline-block",
    padding: "8px",
    background: on ? "darkgreen" : "#eee"
  };
  const offStyle = {
    border: "1px solid #000",
    display: "inline-block",
    marginLeft: "5px",
    padding: "8px",
    background: on ? "#eee" : "red"
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius : "50%",
    border: "1px solid #000",
    display: "inline-block",
    marginLeft: "5px",
    background: on ? "darkgreen" : "red"
  };

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>On</div>
      <div style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default UncontrolledOnOff;