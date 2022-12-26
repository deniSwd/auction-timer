import React, {FC} from 'react';
import s from './App.module.scss'
import './App.module.scss';

export const App: FC = () => {
  return (
    <div className={s.app}>
      <p>TIMER</p>
    </div>
  );
}

export default App;
