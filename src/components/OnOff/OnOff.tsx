import React from "react";
import styles from './OnOff.module.css'

type OnOffPropsType = {
  turned: boolean;
}

function OnOff(props: OnOffPropsType) {
  return (
    <div className={`${styles.onOff} ${props.turned && styles.Off}`}>
      <button className={styles.turnOn}>On</button>
      <button className={styles.turnOff}>Off</button>
      <div className={styles.circle}></div>
    </div>
  )
}
export default OnOff;