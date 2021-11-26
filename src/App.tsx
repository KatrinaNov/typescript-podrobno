import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UnControlledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  let [on, setOn] = useState<boolean>(true);
  return (
    <div className="App">
      <Accordion titleValue = {'Menu'} collapsed = {accordionCollapsed} toggleAccordion={() => setAccordionCollapsed(!accordionCollapsed)}/>
      <UncontrolledAccordion titleValue = {'Users'}/>

      <Rating value={ratingValue} onClick={setRatingValue}/>
      <UncontrolledRating/>

      <UncontrolledOnOff onChange={setOn}/>
      <OnOff on={on} onChange = {setOn}/>
    </div>
  );
}
type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}



export default App;
