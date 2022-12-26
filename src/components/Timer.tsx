import { FC, useEffect, useState } from 'react'
import s from './Timer.module.scss'

export const Timer: FC = () => {
  const [value, setValue] = useState(120000)
  useEffect(() => {
    setTimeout(() => {
      setValue(value > 0 ? value - 1000 : 0)
    }, 1000)
  }, [value])
  const min = Math.floor(value / 60000)
  const sec = value % 60000 / 1000
  return (
    <div className={s.timerWrap}>
      Timer: {min}:{sec < 10 ? '0' + sec : sec}
    </div>
  )
}