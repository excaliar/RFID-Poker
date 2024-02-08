import PlayersEven from "./components/PlayersEven"
import PlayersOdd from "./components/PlayersOdd"
import PlayersLeft from "./components/PlayerLeft"
import TableDisplay from "./components/TableDisplay"
import TableBotRight from "./components/TableRight"

const App = (props) => {
  const { players, table } = props

  const arrs = []
    const limit = Object.keys(players).length
  
    for (let i = 1; i < limit + 1; i++) {
      arrs.push(players[i])
    }

    let lefts = arrs.filter(arr => {
      const condition2 = arr.inHand === true;

      return condition2
    })

    const playerNumber = Object.keys(lefts).length


  return (
    <div>
      <div className="overlayTop">
      </div>
      {playerNumber > 5 ? (
          <div>
            <div className="middle">
              <PlayersOdd players = {players}></PlayersOdd>
              <div className="stream"></div>
              <PlayersEven players={players}></PlayersEven>
            </div>
            <TableDisplay table={table}/>
          </div>
      ) : (
          <div>  
            <div className="middle">
              <PlayersLeft players = {players}></PlayersLeft>
              <div className="stream"></div>
              <div className="overlayMid midLeft"></div>
            </div>
            <TableBotRight table={table}/>
          </div>
          )}
    </div>
  )
}

export default App