// Clubs
import one from './../assets/2_of_clubs.svg'
import two from './../assets/3_of_clubs.svg'
import three from './../assets/4_of_clubs.svg'
import four from './../assets/5_of_clubs.svg'
import five from './../assets/6_of_clubs.svg'
import six from './../assets/7_of_clubs.svg'
import seven from './../assets/8_of_clubs.svg'
import eight from './../assets/9_of_clubs.svg'
import nine from './../assets/10_of_clubs.svg'
import ten from './../assets/jack_of_clubs.svg'
import eleven from './../assets/queen_of_clubs.svg'
import twelve from './../assets/king_of_clubs.svg'
import thirteen from './../assets/ace_of_clubs.svg'

// Diamonds
import fourteen from './../assets/2_of_diamonds.svg'
import fifteen from './../assets/3_of_diamonds.svg'
import sixteen from './../assets/4_of_diamonds.svg'
import seventeen from './../assets/5_of_diamonds.svg'
import eighteen from './../assets/6_of_diamonds.svg'
import nineteen from './../assets/7_of_diamonds.svg'
import twenty from './../assets/8_of_diamonds.svg'
import twentyone from './../assets/9_of_diamonds.svg'
import twentytwo from './../assets/10_of_diamonds.svg'
import twentythree from './../assets/jack_of_diamonds.svg'
import twentyfour from './../assets/queen_of_diamonds.svg'
import twentyfive from './../assets/king_of_diamonds.svg'
import twentysix from './../assets/ace_of_diamonds.svg'

// Hearts
import twentyseven from './../assets/2_of_hearts.svg'
import twentyeight from './../assets/3_of_hearts.svg'
import twentynine from './../assets/4_of_hearts.svg'
import thirty from './../assets/5_of_hearts.svg'
import thirtyone from './../assets/6_of_hearts.svg'
import thirtytwo from './../assets/7_of_hearts.svg'
import thirtythree from './../assets/8_of_hearts.svg'
import thirtyfour from './../assets/9_of_hearts.svg'
import thirtyfive from './../assets/10_of_hearts.svg'
import thirtysix from './../assets/jack_of_hearts.svg'
import thirtyseven from './../assets/queen_of_hearts.svg'
import thirtyeight from './../assets/king_of_hearts.svg'
import thirtynine from './../assets/ace_of_hearts.svg'

// Spades
import fourty from './../assets/2_of_spades.svg'
import fourtyone from './../assets/3_of_spades.svg'
import fourtytwo from './../assets/4_of_spades.svg'
import fourtythree from './../assets/5_of_spades.svg'
import fourtyfour from './../assets/6_of_spades.svg'
import fourtyfive from './../assets/7_of_spades.svg'
import fourtysix from './../assets/8_of_spades.svg'
import fourtyseven from './../assets/9_of_spades.svg'
import fourtyeight from './../assets/10_of_spades.svg'
import fourtynine from './../assets/jack_of_spades.svg'
import fifty from './../assets/queen_of_spades.svg'
import fiftyone from './../assets/king_of_spades.svg'
import fiftytwo from './../assets/ace_of_spades.svg'

const cards = [null, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, 
nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo,
thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, fourty, fourtyone, fourtytwo, fourtythree, fourtyfour, fourtyfive,
fourtysix, fourtyseven, fourtyeight, fourtynine, fifty, fiftyone, fiftytwo]

const TableDisplay = (props) => {
    const {table} = props
    const {pot, community_cards} = table

        return (
        <div className="overlayBot">
            <div className="tableContainer">
                <div className="communityCards">
                    {community_cards.map((community_card) => 
                        <img className="bucketCards" src={cards[community_card]} key={community_card} />
                    )}
                </div>
                <div className="pot">Pot: ${pot}</div>
            </div>
        </div>
    )
}

export default TableDisplay