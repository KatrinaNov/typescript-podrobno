import React, {useState} from "react";

type RatingProps = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingProps) {

  const [rating, setRating] = useState(0)
  return (
    <div>
      <Star selected={rating > 0}/><button onClick={() => setRating(1)}>1</button>
      <Star selected={rating > 1}/><button onClick={() => setRating(2)}>2</button>
      <Star selected={rating > 2}/><button onClick={() => setRating(3)}>3</button>
      <Star selected={rating > 3}/><button onClick={() => setRating(4)}>4</button>
      <Star selected={rating > 4}/><button onClick={() => setRating(5)}>5</button>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  if (props.selected) {
    return <span><b>star</b> </span>
  } else {
    return <span>star </span>
  }
}