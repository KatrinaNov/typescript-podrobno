import React, {useEffect, useMemo, useState} from 'react';

export default {
  title: 'useEffect demo'
}

export const Example1 = () => {
  console.log('Example1')
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString();
  })

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount')
    document.title = counter.toString();
  }, [])

  useEffect(() => {
    console.log('useEffect first render and every COUNTER change')
    document.title = counter.toString();
  }, [counter])

  return <>
    Hello, {counter} {fake}
    <button onClick={() => setCounter(counter  + 1)}>counter +</button>
    <button onClick={() => setFake(fake  + 1)}>fake +</button>
  </>
}

export const SetTimeOutExample = () => {
  console.log('Example1')
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log('useEffect every render')
    setInterval(() => {
      setCounter((state) => state + 1);
    }, 1000)
  }, [])


  return <>
    Hello, {counter} {fake}
    {/*<button onClick={() => setCounter(counter  + 1)}>counter +</button>*/}
    {/*<button onClick={() => setFake(fake  + 1)}>fake +</button>*/}
  </>
}
export const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('useEffect every render')
    setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000)
  }, [])


  return <>
    Hello, {date}
    {/*<button onClick={() => setCounter(counter  + 1)}>counter +</button>*/}
    {/*<button onClick={() => setFake(fake  + 1)}>fake +</button>*/}
  </>
}

