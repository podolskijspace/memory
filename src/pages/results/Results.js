import {useState, useEffect} from "react";
import {connect} from "react-redux";

import {Link} from "react-router-dom";

const Results = ({failResults, winResults}) => {
  const [resultF, setResultF] = useState([])
  const [resultW, setResultW] = useState([])

  const mapResults = () => {
    setResultF(failResults.map((item, i) => {
      return (
        <div className="results__row" key={i + winResults.length}>
          <div className="results__column">
            {i + resultW.length + 1}
          </div>
          <div className="results__column">
            {item.time}
          </div>
          <div className="results__column">
            {item.counter}
          </div>
          <div className="results__column">
            Сдался
          </div>
        </div>
      )
    }))
    setResultW(winResults.map((item, i) => {
      return (
        <div className="results__row" key={i + resultW.length}>
          <div className="results__column">
            {i + 1}
          </div>
          <div className="results__column">
            {item.time}
          </div>
          <div className="results__column">
            {item.counter}
          </div>
          <div className="results__column">
            Выйграл
          </div>
        </div>
      )
    }))
  }

  useEffect(mapResults, [failResults])
  return (
    <div className="results">
      <h2 className="results__title">
        Результаты
      </h2>
      <div className="results__table">
        <div className="results__row">
          <div className="results__column">
            Номер
          </div>
          <div className="results__column">
            Время
          </div>
          <div className="results__column">
            Количество попыток
          </div>
          <div className="results__column">
            Результат
          </div>
        </div>
        {resultW}
        {resultF}
      </div>
      <Link className="results__back" to="/">
        Вернуться
      </Link>
    </div>
  )

}

const mstp = ({failResults, winResults}) => {
  return {
    failResults,
    winResults
  }
}

const mdtp =  {

}

export default connect(mstp, mdtp)(Results);