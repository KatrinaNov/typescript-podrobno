import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UnControlledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
  return (
    <div className="App">
      {/*<Accordion titleValue = {'Menu'} collapsed = {true}/>*/}
      {/*<Accordion titleValue = {'Users'} collapsed = {false}/>*/}
      <UncontrolledAccordion titleValue = {'Menu'}/>
      <UncontrolledAccordion titleValue = {'Users'}/>

      <Rating value={3}/>
      <UncontrolledRating/>

      <OnOff/>
      <OnOff/>
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
