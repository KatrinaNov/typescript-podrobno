import React, {useState} from 'react';
import './App.css';
// import {Accordion} from "./components/Accordion/Accordion";
// import {Rating, RatingValueType} from "./components/Rating/Rating";
// import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
// import {OnOff} from "./components/OnOff/OnOff";
// import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
// import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncontrolledAccordion";
import Select from "./components/Select/Select";


function App() {

  // let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  // let [on, setOn] = useState<boolean>(true);
  // let [count, setCount] = useState<number>(0)
  const [selectValue, setSelectValue] = useState<string | undefined>("Выбрать юзера")

  const onClickCallback = (value: any) => {
    console.log(value)
  }
  const OnChangeSelectValue = (value: any) => {
    setSelectValue(value);
  }
  const items = [
    {title: "Kate", value: "1"},
    {title: "Maks", value: "2"},
    {title: "Vanya", value: "3"}
  ]
  return (
    <div className="App">
      <Select value={selectValue} onChange={OnChangeSelectValue} items={items}/>
      {/*    <Accordion
        titleValue={'Menu'}
        collapsed={accordionCollapsed}
        toggleAccordion={() => setAccordionCollapsed(!accordionCollapsed)}
        items={[
          {title: "Kate", value: "1"},
          {title: "Maks", value: "2"},
          {title: "Vanya", value: "3"}]}
        onClick={onClickCallback}
      />*/}
      {/*<UncontrolledAccordion titleValue={'Users'}/>*/}

      {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
      {/*<UncontrolledRating/>*/}

      {/*<UncontrolledOnOff onChange={setOn}/>*/}
      {/*<OnOff on={on} onChange={setOn}/>*/}

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
