const GameCard = ({data}) => {
    return (
      <div>
        <article className="card__countainer">
          <h1>Galleta de la Fortuna</h1>
          <div className="phrase__container">
            <p className="phrase">{data.phrase}</p>
          </div>
        </article>
        <div className="author__countainer">
          <article className="card__author">
            <p>{data.author}</p>
          </article>
        </div>
      </div>
    );
  };
  
  export default GameCard;
  