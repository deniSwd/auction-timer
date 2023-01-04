import yesButtonImg from '../../assets/yes.png'
import editModeButtonImg from '../../assets/editModeButtonImg.png'
import { FC } from 'react'

type ButtonProps = {
  editMode:boolean
  setEditMode: (ediMode: boolean) =>void
}

export const Button:FC<ButtonProps> = ({editMode,setEditMode}) => {
  return (
    <button
      onClick={() => setEditMode(!editMode)}>
      {editMode ?
        <img src={yesButtonImg} alt={'V'} /> :
        <img src={editModeButtonImg} alt={'!'} />}
    </button>
  )
}
