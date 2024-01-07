import PlayersEven from "./components/PlayersEven"
import PlayersOdd from "./components/PlayersOdd"

const App = (props) => {
  const { players } = props
  return (
    <div>
      <div className="overlayTop">
        <h1>Poker Night</h1>
      </div>
      <div className="middle">
        <PlayersOdd players = {players}></PlayersOdd>
        <div className="stream">
          <div className="streamCon">stream</div>
        </div>
        <PlayersEven players={players}></PlayersEven>
      </div>
      <div className="overlayBot"></div>
    </div>
  )
}

export default App