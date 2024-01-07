import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const players = [
  {
      "seat_number": 1,
      "name": "test1",
      "inHand": false,
      "button": false,
      "position": "UTG",
      "hand": [
          1,
          2
      ]
  },
  {
      "seat_number": 2,
      "name": "test2",
      "inHand": false,
      "button": false,
      "position": "UTG+1",
      "hand": [
          3,
          4
      ]
  },
  {
      "seat_number": 3,
      "name": "test3",
      "inHand": false,
      "button": false,
      "position": "UTG+2",
      "hand": [
          5,
          6
      ]
  },
  {
      "seat_number": 4,
      "name": "test4",
      "inHand": false,
      "button": false,
      "position": "LJ",
      "hand": [
          7,
          8
      ]
  },
  {
      "seat_number": 5,
      "name": "test5",
      "inHand": false,
      "button": false,
      "position": "HJ",
      "hand": [
          9,
          10
      ]
  },
  {
      "seat_number": 6,
      "name": "test6",
      "inHand": false,
      "button": false,
      "position": "CO",
      "hand": [
          11,
          12
      ]
  },
  {
      "seat_number": 7,
      "name": "test7",
      "inHand": false,
      "button": true,
      "position": "D",
      "hand": [
          13,
          14
      ]
  },
  {
      "seat_number": 8,
      "name": "test8",
      "inHand": false,
      "button": false,
      "position": "SB",
      "hand": [
          15,
          16
      ]
  },
  {
      "seat_number": 9,
      "name": "test9",
      "inHand": false,
      "button": false,
      "position": "BB",
      "hand": [
          17,
          18
      ]
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App players={players}/>
  </React.StrictMode>,
)
