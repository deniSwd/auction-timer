import { FC } from 'react'
import s from './Timer.module.scss'
import { Participant } from '../../MainTypes'
import { Button } from '../micro/EditButton'
import { Property } from '../micro/Property'

type TimerProps = {
  valueTimer: number
  userData: Participant
  currentId: number
}

export const Timer: FC<TimerProps> = ({
                                        valueTimer,
                                        userData,
                                        currentId
                                      }) => {

  const min = Math.floor(valueTimer / 60)
  const sec = valueTimer % 60
  const isDisplay = currentId === userData.id && valueTimer > 0

  return (
    <div className={s.timerWrap}>
      <div className={s.timer}>
        {isDisplay && `Timer: ${min}:${sec.toString().padStart(2, '0')}`}
      </div>
      <div className={s.propertiesBox}>
        <div>
          <div>{userData.name}</div>
          <div></div>
        </div>
        <Property isDisplay={isDisplay} userDataProperty={userData.leadTime}/>
        <Property isDisplay={isDisplay} userDataProperty={userData.paymentTerms}/>
      </div>
    </div>
  )
}