import { FC } from 'react'
import s from './Timer.module.scss'

type TimerProps = {
  valueTimer: number
  userName: string
  id: number
  currentId: number
}

export const Timer: FC<TimerProps> = ({ valueTimer, userName, id, currentId }) => {

  const min = Math.floor(valueTimer / 60)
  const sec = valueTimer % 60

  return (
    <div className={s.timerWrap}>
      <div className={s.timer}>
        {currentId === id &&
          valueTimer > 0 &&
          `Timer: ${min}:${sec.toString().padStart(2, '0')}`}
      </div>
      <div className={s.propertiesBox}>
        {userName}
      </div>
    </div>
  )
}