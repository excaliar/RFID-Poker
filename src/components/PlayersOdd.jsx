import one from './../assets/2_of_clubs.svg'
import two from './../assets/2_of_diamonds.svg'
import three from './../assets/2_of_hearts.svg'
import four from './../assets/2_of_spades.svg'
import five from './../assets/3_of_clubs.svg'
import six from './../assets/3_of_diamonds.svg'
import seven from './../assets/3_of_hearts.svg'
import eight from './../assets/3_of_spades.svg'
import nine from './../assets/4_of_clubs.svg'
import ten from './../assets/4_of_diamonds.svg'
import eleven from './../assets/4_of_hearts.svg'
import twelve from './../assets/4_of_spades.svg'
import thirteen from './../assets/5_of_clubs.svg'
import fourteen from './../assets/5_of_diamonds.svg'
import fifteen from './../assets/5_of_hearts.svg'
import sixteen from './../assets/5_of_spades.svg'
import seventeen from './../assets/6_of_clubs.svg'
import eighteen from './../assets/6_of_diamonds.svg'
import nineteen from './../assets/6_of_hearts.svg'
import twenty from './../assets/6_of_spades.svg'
import twentyone from './../assets/7_of_clubs.svg'
import twentytwo from './../assets/7_of_diamonds.svg'
import twentythree from './../assets/7_of_hearts.svg'
import twentyfour from './../assets/7_of_spades.svg'
import twentyfive from './../assets/8_of_clubs.svg'
import twentysix from './../assets/8_of_diamonds.svg'
import twentyseven from './../assets/8_of_hearts.svg'
import twentyeight from './../assets/8_of_spades.svg'
import twentynine from './../assets/9_of_clubs.svg'
import thirty from './../assets/9_of_diamonds.svg'
import thirtyone from './../assets/9_of_hearts.svg'
import thirtytwo from './../assets/9_of_spades.svg'
import thirtythree from './../assets/10_of_clubs.svg'
import thirtyfour from './../assets/10_of_diamonds.svg'
import thirtyfive from './../assets/10_of_hearts.svg'
import thirtysix from './../assets/10_of_spades.svg'
import thirtyseven from './../assets/jack_of_clubs.svg'
import thirtyeight from './../assets/jack_of_diamonds.svg'
import thirtynine from './../assets/jack_of_hearts.svg'
import fourty from './../assets/jack_of_spades.svg'
import fourtyone from './../assets/queen_of_clubs.svg'
import fourtytwo from './../assets/queen_of_diamonds.svg'
import fourtythree from './../assets/queen_of_hearts.svg'
import fourtyfour from './../assets/queen_of_spades.svg'
import fourtyfive from './../assets/king_of_clubs.svg'
import fourtysix from './../assets/king_of_diamonds.svg'
import fourtyseven from './../assets/king_of_hearts.svg'
import fourtyeight from './../assets/king_of_spades.svg'
import fourtynine from './../assets/ace_of_clubs.svg'
import fifty from './../assets/ace_of_diamonds.svg'
import fiftyone from './../assets/ace_of_hearts.svg'
import fiftytwo from './../assets/ace_of_spades.svg'

const cards = [null, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, 
nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo,
thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, fourty, fourtyone, fourtytwo, fourtythree, fourtyfour, fourtyfive,
fourtysix, fourtyseven, fourtyeight, fourtynine, fifty, fiftyone, fiftytwo]

const PlayersOdd = (props) => {
    const {players} = props
    let odds = players.filter(player => player.seat_number%2)
  
    return (
      <div className = "overlayMid midLeft">
        {odds.map((odd) =>
          <div className="playerBox" key={odd.seat_number}>
            <div className='name'>{odd.name}</div>
            <div className="hand">
              <img  className="cards" src={cards[odd.hand[0]]} alt="" />
              <img className="cards" src={cards[odd.hand[1]]} alt="" />
            </div>
          </div>
        )}
      </div>
    )
  
  }

  export default PlayersOdd