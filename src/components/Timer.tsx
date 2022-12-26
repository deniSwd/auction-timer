import { FC, useEffect, useState } from 'react'
import s from './Timer.module.scss'

export const Timer: FC = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const time = setTimeout(() => {
      setValue(value > 0 ? value - 1000 : 0)
      return () => clearTimeout(time)
    }, 1000)
  }, [value])

  const min = Math.floor(value / 60000)
  const sec = value % 60000 / 1000
  const onStartTimer = () => {
    setValue(value + 120000)
  }
  return (
    <div className={s.timerWrap}>
      Timer: {min}:{sec < 10 ? '0' + sec : sec}
      <button onClick={() => onStartTimer()} disabled={value > 0}>start</button>
    </div>
  )
}