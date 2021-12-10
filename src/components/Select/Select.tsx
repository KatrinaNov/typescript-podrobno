import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
  title: string
  value: any
}
export type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}

const Select = (props: SelectPropsType) => {
  let [collapsed, setCollapsed] = useState(true); //открыт или закрыт
  let [hoveredElementValue, setHoveredElementValue] = useState(props.value); // выделение выбранного элемента

  const selectedItem = props.items.find(i => i.value === props.value) // выбраный элемент
  const hoveredElement = props.items.find(i => i.value === hoveredElementValue)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  // реакция на кнопки вверх, вниз, enter, esc
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretenderElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
          if (pretenderElement) {
            props.onChange(pretenderElement.value);
            return;
          } else {

          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }
    if (e.key === "Enter" || e.key === "Escape") {
      setCollapsed(true)
    }

  }
  // рендер элементов внутреннего списка.
  const renderSelectItem = () => {
    return props.items.map((item) => {
      const changeTitle = () => {
        props.onChange(item.value);
        toggleCollapsed()
      }
      return <div
        onMouseEnter={() => setHoveredElementValue(item.value)}
        key={item.value}
        onClick={changeTitle}
        className={styles.item + " " + (hoveredElement === item ? styles.selected : "")}
      >{item.title}</div>
    })
  }
  // скрывать либо показывать
  const toggleCollapsed = () => setCollapsed(!collapsed)
  // добавление активного класса, если открыт
  const finalSelectTitleClass = `${styles.selectTitle} ${!collapsed && styles.active}`
  return (
    <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
      <div onClick={toggleCollapsed} className={finalSelectTitleClass}>{selectedItem && selectedItem.title}</div>
      <div className={styles.selectBody}>{!collapsed && renderSelectItem()} </div>
    </div>
  )
}

export default Select;