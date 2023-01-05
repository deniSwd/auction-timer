import React, { FC, useEffect, useState } from 'react'
import s from './App.module.scss'
import './App.module.scss'
import { UserBox } from './components/macro/UserBox'
import { getUsers } from './API/api'
import { Participants } from './MainTypes'
import { PropertiesList } from './components/macro/PropertiesList'

export const App: FC = () => {

  const [value, setValue] = useState(-1)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [data, setData] = useState<Participants>({ participants: [] })

  useEffect(() => {
    getUsers().then(setData)
  }, [])

  useEffect(() => {
    if (value === -1) return
    if (value === 0) {
      setCurrentIndex(idx => idx + 1)
      setValue(value + 120)
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
      <div className={s.usersBoxWrap}>
        <PropertiesList />
        {data.participants.map(p => <UserBox valueTimer={value}
                                             userData={p}
                                             currentId={currentId} />)}
      </div>
      <button onClick={() => onStartTimer()} disabled={value > 0}>start auction</button>
    </div>
  )
}
