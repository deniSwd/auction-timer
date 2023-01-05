import yesButtonImg from '../../assets/yes.png'
import editModeButtonImg from '../../assets/editModeButtonImg.png'
import s from './editButton.module.scss'
import { FC } from 'react'

type ButtonProps = {
  editMode:boolean
  setEditMode: (ediMode: boolean) =>void
}

export const Button:FC<ButtonProps> = ({editMode,setEditMode}) => {
  return (
    <div className={s.editButton}
      onClick={() => setEditMode(!editMode)}>
      {editMode ?
        <img src={yesButtonImg} alt={'V'} /> :
        <img src={editModeButtonImg} alt={'!'} />}
    </div>
  )
}
