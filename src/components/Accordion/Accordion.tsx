import React from "react";

type ItemType = {
  title: string
  value: any
}

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
  color?: string
  items: ItemType[]
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} toggleAccordion={props.toggleAccordion} color={props.color}/>
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  toggleAccordion: () => void
  color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3
      style={{color: props.color ? props.color : "black"}}
      onClick={(e) => props.toggleAccordion()}>{props.title}</h3>
  )
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((item, index) => <li key={index} onClick={() => {
        props.onClick(item.value)
      }}>{item.title}</li>)}
    </ul>
  )
}

