import { FC } from 'react'
import s from './UserBox.module.scss'
import { Participant } from '../../MainTypes'
import { Property } from '../micro/Property'

type UserBoxProps = {
  valueTimer: number
  userData: Participant
  currentId: number
}

export const UserBox: FC<UserBoxProps> = ({
                                            valueTimer,
                                            userData,
                                            currentId,
                                          }) => {

  const min = Math.floor(valueTimer / 60)
  const sec = valueTimer % 60
  const isDisplay = currentId === userData.id && valueTimer > 0

  return (
    <div className={s.userBoxWrap}>
      <div className={s.timer}>
        {isDisplay && `${min}:${sec.toString().padStart(2, '0')}`}
      </div>
      <div className={s.propertiesBox}>
        <div>{userData.name}</div>
        <div className={userData.online ? s.online : s.offline}></div>
        <Property isDisplay={isDisplay} userDataProperty={userData.leadTime} />
        <Property isDisplay={isDisplay} userDataProperty={userData.paymentTerms} />
      </div>
    </div>
  )
}