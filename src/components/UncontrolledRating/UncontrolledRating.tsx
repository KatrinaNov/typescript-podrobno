import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingProps = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType) => void
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingProps) {

  const [rating, setRating] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
  return (
    <div>
      <Star selected={rating > 0} setValue={() => {setRating(1); props.onChange(1)}}/>
      <Star selected={rating > 1} setValue={() => {setRating(2); props.onChange(2)}}/>
      <Star selected={rating > 2} setValue={() => {setRating(3); props.onChange(3)}}/>
      <Star selected={rating > 3} setValue={() => {setRating(4); props.onChange(4)}}/>
      <Star selected={rating > 4} setValue={() => {setRating(5); props.onChange(5)}}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

function Star(props: StarPropsType) {
  return <span onClick={() => props.setValue()}>{props.selected ? <b> star </b> : " star"}</span>

}