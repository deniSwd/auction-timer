import { FC, useEffect, useState } from 'react'
import s from '../macro/Timer.module.scss'
import { Button } from './EditButton'

type PropertyProps = {
  isDisplay: boolean
  userDataProperty: string | number
}

export const Property: FC<PropertyProps> = ({ isDisplay, userDataProperty }) => {

  const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    if (!isDisplay)
      setEditMode(false)
  }, [isDisplay])

  return (
    <div className={s.propertyValue}>
      {isDisplay && editMode ? <input value={userDataProperty} /> : userDataProperty}
      <div className={s.editModeButton}>
        {isDisplay && <Button editMode={editMode} setEditMode={setEditMode} />}
      </div>
    </div>
  )
}