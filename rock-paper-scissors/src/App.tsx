import { useState } from 'react';
import HeaderConatiner from './containers/HeaderContainer/HeaderConatiner'
import MainGameContainer from './containers/MainGameContainter/MainGameContainer'

function App() {
  const [score, setScore] = useState<number>(0);
  return (
    <>
      <HeaderConatiner score={score} />
      <MainGameContainer score={score} setScore={setScore} />
    </>
  )
}

export default App
