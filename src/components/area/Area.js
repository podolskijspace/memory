import Card from "../card/Card";
import {useState, useEffect} from "react";

const Area = ({data}) => {
  const [result, setResult] = useState([])

  const mapData = () => {
    setResult(data.map(item => {
      return(
        <li className="area__item">
          <Card/>
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

export default Area;