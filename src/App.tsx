import React, { FC, useEffect, useState } from 'react'
import s from './App.module.scss'
import './App.module.scss'
import { Timer } from './components/Timer'
import { getUsers } from './API/api'
import { Participants } from './MainTypes'

export const App: FC = () => {

  const [value, setValue] = useState(-1)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [editMode, setEditMode] = useState(false)
  const [data, setData] = useState<Participants>({ participants: [] })

  useEffect(() => {
    getUsers().then(setData)
  }, [])

  useEffect(() => {
    if (value === -1) return
    if (value === 0) {
      setCurrentIndex(idx => idx + 1)
      setValue(value + 10)
      setEditMode(false)
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
  const currentId = data.participants[currentIndex % data.participants.length]?.id

  return (
    <div className={s.app}>
      <div className={s.timersWrap}>
        {data.participants.map(p => <Timer valueTimer={value}
                                           userName={p.name}
                                           id={p.id}
                                           currentId={currentId}
                                           setEditMode={setEditMode}
                                           editMode={editMode} />)}
      </div>
      <button onClick={() => onStartTimer()} disabled={value > 0}>start auction</button>
    </div>
  )
}
