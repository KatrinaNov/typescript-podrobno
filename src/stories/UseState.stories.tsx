import React, {useMemo, useState} from 'react';

export default {
  title: 'useState demo'
}

// difficult counting
function generateData() {
  console.log('generateData')
  return 3333456566634;
}

export const Example1 = () => {
  console.log('Example1')
  const [counter, setCounter] = useState(generateData);
  // функция-изменитель
  const changer = (state: number) => state + 1

  return <>
    <button onClick={() => setCounter(changer)}>+</button>
    {counter}
  </>
}

