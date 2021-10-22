import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {createData, setTime, setNewResult
, setCounter, setWin} from "../../actions"

import {Link} from "react-router-dom";

const Header = ({setCounter, createData, counter, setTime, time, setNewResult
, failResults, isWin, setWin}) => {
  const [isGoing, setIsGoing] = useState(false)
  const [timer, setTimer] = useState(null) // Хранит setInterval

  const makeData = () => {
    const result = new Array(32);
    for (let i = 1; i < 19; i++) {
      let rnd = -1;
      let j = 0;
      do {
        rnd = Math.floor(Math.random() * Math.floor(36)) ;
        if (!result[rnd]) {
          result[rnd] = {
            text: i,
            status: 'closed',
          }
          j += 1
        }
      } while (j < 2)
    }
    setTimer(setInterval(setTime, 1000))
    createData(result)
    setIsGoing(true)
  }

  const onFail = () => {
    setIsGoing(false)
    createData([])
    clearInterval(timer)
    setNewResult()
    setTime(false)
    setCounter(0)
  }

  const makeWinResult = () => {
    if (isWin) {
      setIsGoing(false)
      createData([])
      clearInterval(timer)
      setNewResult(true)
      setTime(false)
      setCounter(0)
      setWin()
    }
  }

  useEffect(makeWinResult, [isWin])

  return (
    <header className="header">
      <div className="header__timer">
        Прошло времени: {time}
      </div>
      <div className="header__counter">
        Количество попыток: {counter}
      </div>
      {
        isGoing ?
        <button onClick={onFail} className="header__button">
          Сдаться
        </button>:
        < >
          <button onClick={makeData} className="header__button">
            Старт
          </button>
          <Link to="/results" className="header__button">
            Посмотреть результаты
          </Link>
        </>
      }



    </header>
  )
}

const mstp = ({counter, time, failResults, isWin}) => {
  return {
    counter,
    time,
    failResults,
    isWin
  }
}

const mdtp =  {
  createData,
  setTime,
  setNewResult,
  setCounter,
  setWin
}


export default connect(mstp, mdtp)(Header);
