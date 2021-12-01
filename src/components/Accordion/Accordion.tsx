import React from "react";

type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean
  toggleAccordion: () => void
}
export function Accordion(props: AccordionPropsType) {
    return (
      <div>
        <AccordionTitle title={props.titleValue} toggleAccordion={props.toggleAccordion}/>
        { !props.collapsed && <AccordionBody/>}
      </div>
    )
}

type AccordionTitlePropsType = {
  title: string
  toggleAccordion: () => void
}
function AccordionTitle(props: AccordionTitlePropsType){
  return (
    <h3 onClick={(e) => props.toggleAccordion()}>{props.title}</h3>
  )
}function AccordionBody(){
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

