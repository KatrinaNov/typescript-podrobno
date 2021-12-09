import React from "react";

type AccordionPropsType = {
  /**
   * Title of accordion
   */
  titleValue: string
  collapsed: boolean
  toggleAccordion: () => void
 /**
 * optional color of header text
 */
 color? : string
}
export function Accordion(props: AccordionPropsType) {
    return (
      <div>
        <AccordionTitle title={props.titleValue} toggleAccordion={props.toggleAccordion} color={props.color}/>
        { !props.collapsed && <AccordionBody/>}
      </div>
    )
}

type AccordionTitlePropsType = {
  title: string
  toggleAccordion: () => void
  color? : string
}
function AccordionTitle(props: AccordionTitlePropsType){
  return (
    <h3
      style={{color: props.color ? props.color : "black"}}
      onClick={(e) => props.toggleAccordion()}>{props.title}</h3>
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

