import React, {useState} from 'react';
import './Select.css'

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
  let [collapsed, setCollapsed] = useState(true);

  const renderSelectItem = () => {
    return props.items.map((item, i) => {
      const changeTitle = () => {
        props.onChange(item.title);
        toggleCollapsed()
      }
      return <div key={i} onClick={changeTitle}>{item.title}</div>
    })
  }

  const toggleCollapsed = () => setCollapsed(!collapsed)
  const finalSelectTitleClass = `select-title ${!collapsed && "active"}`
  return (
    <div className={"select"}>
      <div onClick={toggleCollapsed} className={finalSelectTitleClass}>{props.value}</div>
      <div className={"select-body"}>
        {!collapsed && renderSelectItem()}
      </div>
    </div>
  )
}

export default Select;