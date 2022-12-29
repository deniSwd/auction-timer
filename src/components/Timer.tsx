import { FC, useEffect, useState } from 'react'
import s from './Timer.module.scss'
import editModeButtonImg from '../assets/editModeButtonImg.png'
import yesButtonImg from '../assets/yes.png'
type TimerProps = {
  valueTimer: number
  userName: string
  id: number
  currentId: number
  editMode: boolean
  setEditMode: (editMode: boolean) => void
}

export const Timer: FC<TimerProps> = ({
                                        valueTimer,
                                        userName,
                                        id,
                                        currentId,
                                        setEditMode,
                                        editMode,
                                      }) => {


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
        <div className={s.propertyValue}>
          {currentId === id &&
          valueTimer > 0 &&
          editMode ? <input value={userName} /> : userName}
        </div>
        <div className={s.editModeButton}> {currentId === id &&
          valueTimer > 0 &&
          <button
            onClick={() => setEditMode(!editMode)}>
            {editMode ?
              <img src={yesButtonImg} alt={'V'}/>:
              <img src={editModeButtonImg} alt={'!'}/>}
          </button>}</div>
      </div>
    </div>
  )
}