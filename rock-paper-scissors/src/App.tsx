import { useState } from 'react';
import HeaderConatiner from './containers/HeaderContainer/HeaderConatiner'
import MainGameContainer from './containers/MainGameContainter/MainGameContainer'

import css from './App.module.css';

function App() {
  const [score, setScore] = useState<number>(0);
  return (
    <div className={css.app}>
      <HeaderConatiner score={score} />
      <MainGameContainer setScore={setScore} />
    </div>
  )
}

export default App
