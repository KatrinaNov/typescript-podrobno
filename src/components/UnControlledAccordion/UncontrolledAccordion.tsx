import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
  titleValue: string,
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});
    // const toggleCollapsed = () => setCollapsed(!collapsed)
    const toggleCollapsed = () => dispatch({type: TOGGLE_COLLAPSED})
    return (
      <div>
        <AccordionTitle title={props.titleValue} toggleCollapsed={toggleCollapsed}/>
        {!state.collapsed && <AccordionBody/>}
      </div>
    )
  }

  type AccordionTitlePropsType = {
    title: string
    toggleCollapsed: () => void
  }

  function AccordionTitle(props: AccordionTitlePropsType) {
    return (
      <h3 onClick={props.toggleCollapsed}>{props.title}</h3>
    )
  }

  function AccordionBody() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }

