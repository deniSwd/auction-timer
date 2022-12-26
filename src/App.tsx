import React, { FC } from 'react'
import s from './App.module.scss'
import './App.module.scss'
import { Timer } from './components/Timer'

export const App: FC = () => {
  return (
    <div className={s.app}>
      <Timer/>
    </div>
  )
}
