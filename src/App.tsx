import React, { FC, useEffect, useState } from 'react'
import s from './App.module.scss'
import './App.module.scss'
import { Timer } from './components/Timer'

const idList = [11, 22, 33, 44, 55]

export const App: FC = () => {

  const [value, setValue] = useState(-1)
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    if (value === -1) return
    if (value === 0) {
      setCurrentIndex(idx => idx + 1)
      setValue(value + 5)
    }
    const time = setTimeout(() => {
      setValue(value > 0 ? value - 1 : 0)
    }, 1000)
    return () => {
      clearTimeout(time)
    }
  }, [value, currentIndex])
  const onStartTimer = () => {
    setValue(0)
  }
  return (
    <div className={s.app}>
      <div className={s.timersWrap}>
        <Timer valueTimer={value} userName={'aaa'} id={idList[0]} currentId={idList[currentIndex % idList.length]} />
        <Timer valueTimer={value} userName={'bbb'} id={idList[1]} currentId={idList[currentIndex % idList.length]} />
        <Timer valueTimer={value} userName={'ccc'} id={idList[2]} currentId={idList[currentIndex % idList.length]} />
        <Timer valueTimer={value} userName={'ddd'} id={idList[3]} currentId={idList[currentIndex % idList.length]} />
        <Timer valueTimer={value} userName={'eee'} id={idList[4]} currentId={idList[currentIndex % idList.length]} />
      </div>
      <button onClick={() => onStartTimer()} disabled={value > 0}>start auction</button>
    </div>
  )
}
