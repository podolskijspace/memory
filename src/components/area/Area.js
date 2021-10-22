import {useState, useEffect} from "react";
import {setClickData, setStatus, setCounter} from "../../actions";
import {connect} from "react-redux";

import Card from "../card/Card";

const Area = ({data, clickData, setClickData, setStatus, setCounter, counter, isWin}) => {
  const [result, setResult] = useState([])
  const [clickId, setClickId] = useState(null)
  const [timer, setTimer] = useState(null)

  const cardHandler = () => {
    if (clickId !== null && !clickData.length) {//Проверяем, что клик получил id и это было 1 карточка
      setTimer(setTimeout(() => {
        setClickData([]);
        setStatus({id: clickId, status: 'closed'});
      }, 5000)) //Если в течение 5 секунд не выберешь карточку, то закроется
      setClickData([clickId]);
      setStatus({id: clickId, status: 'opened'});
    } else if (clickId !== null && clickData.length === 1) { //Проверяем, что клик получил id и это 2 карточка
      clearTimeout(timer)//Сбрасываем таймер закрытия 1 карточки
      setClickData([clickData[0], clickId]);
      setStatus({id: clickId, status: 'opened'});

      setClickData([]);//Забываем старые id, чтобы можно было снова кликать, не дождавшись результата
      setCounter(counter + 1);
      setTimeout(()=> { //Даем понять результат и в зависимости от результата делаем вещи
        if (data[clickId].text === data[clickData[0]].text) { //Карточки одинаковые
          setStatus({id: clickId, status: 'deleted'});
          setStatus({id: clickData[0], status: 'deleted'});
         } else { //Карточки разные
          setStatus({id: clickId, status: 'closed'});
          setStatus({id: clickData[0], status: 'closed'});
        }
      }, 1000)
    }

    setClickId(null);
  }

  useEffect(cardHandler, [clickId])

  const mapData = () => {
    setResult(data.map((item, i) => {
      const onBtn = () => {
        if (item.status === "closed") {
          setClickId(i)
        } else {
          console.log('Не нажимается')
        }
      }

      return(
        <li className="area__item" key={i}>
          <Card onClick={onBtn} text={item.text} status={item.status}/>
        </li>
      )
    }))
  }

  useEffect(mapData,[data])

  return (
    <div className="area">
      <ul className="area__list">
        {result}
      </ul>
    </div>
  )
}

const mstp = ({clickData, data, counter, isWin}) => {
  return {
    clickData,
    data,
    counter,
    isWin
  }
}

const mdtp =  {
  setClickData,
  setStatus,
  setCounter
}


export default connect(mstp, mdtp)(Area);
