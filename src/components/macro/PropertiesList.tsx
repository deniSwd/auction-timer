import React, { FC } from 'react'
import s from './PropertiesList.module.scss'

export const PropertiesList: FC = () => {
  return (
    <div className={s.propertiesList}>
      <div className={s.propertyTimer}>Таймер:</div>
      <div className={s.properties}>
        <div>Имя пользователя:</div>
        <div>Пользователь онлайн:</div>
        <div>Срок выполнения(дн):</div>
        <div>Условия оплаты:</div>
      </div>
    </div>
  )
}