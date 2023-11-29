import Button from "../Button/Button";
import "./CoverScreen.css";

const CoverScreen = ({ score, onStartGame, duration }) => (
  <div className="intro">
    <h1 className="title">{score > -1 ? "Game over! My bb did well!" : "Tailor-made shooting game! 🎈"}</h1>
    {score > -1 ? (
      <p className="description">
        {`You scored ${
          score === 0 ? "nothing" : `${score} ${score > 1 ? "hits" : "hit"}`
        }`}
      </p>
    ) : (
      <p className="description">
        Marrying you was the best thing that’s ever happened to me! <br/> 
        Happy 1st wedding anniversary, Ian! 🎉 <br/>
        I wrote a little {duration}-second balloon shooting game for you. Enjoy it! 😘
      </p>
    )}
    <div className="action">
      <Button onClick={onStartGame} width={"wide"}>
        {score > -1 ? "Play again" : "Start Game"}
      </Button>
    </div>
  </div>
);

export default CoverScreen;
