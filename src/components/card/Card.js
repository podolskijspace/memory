const Card = ({text, status, onClick}) => {
  return (
    <div onClick={onClick} className={`card ${status}`}>
      <span className="card__text">
        {text}
      </span>
    </div>
  )
}

export default Card;