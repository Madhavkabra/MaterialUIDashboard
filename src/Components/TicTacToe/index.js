import React from "react";
import styles from "./index.module.css";

const Square = ({ handleSquareClick, config, winner }) => {
  return (
    <button
      disabled={config.player || winner}
      onClick={() => handleSquareClick(config.box)}
      className={styles.square}>
      {config.player || ' '}
    </button>
  )
};

const Row = ({ winner, rowItems, handleSquareClick }) => {
  return <div className={styles.row}>
    {rowItems.map(rowItem =>
      (
        <Square winner={winner} config={rowItem} handleSquareClick={handleSquareClick} />
      )
    )}
  </div>
}

const players = ['X', 'O']

const initialBoard = {
  playerOneBoxes: [],
  playerTwoBoxes: [],
  currentPlayer: players[0],
  currentBoard: [],
  winner: null,
}

class Board extends React.Component {
  constructor(props) {
    super();
    this.totalSize = props.size * props.size;
    this.boxes = [...Array(this.totalSize).keys()]
    this.winningBoxes = getWinningBoxes(this.boxes, props.size)
    this.players = players
    this.state = {
      playerOneBoxes: [],
      playerTwoBoxes: [],
      currentPlayer: this.players[0],
      currentBoard: [],
      winner: null,
    }
  }

  componentDidMount() {
    this.refreshBoard();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.playerOneBoxes !== this.state.playerOneBoxes || previousState.playerTwoBoxes !== this.state.playerTwoBoxes) {
      const { playerOneBoxes, playerTwoBoxes } = this.state
      const won = this.checkWin(playerOneBoxes, playerTwoBoxes)
      if (won) {
        const board = getCurrentBoard(playerOneBoxes, playerTwoBoxes, this.boxes, this.players)
        const winner = this.state.currentPlayer === this.players[0] ? this.players[1] : this.players[0]
        this.setState({ ...this.state, winner, currentBoard: board })
      } else {
        const board = getCurrentBoard(playerOneBoxes, playerTwoBoxes, this.boxes, this.players)
        this.setState({ ...this.state, currentBoard: board })
      }
    }
  }

  refreshBoard = () => {
    const { playerOneBoxes, playerTwoBoxes } = this.state
    const board = getCurrentBoard(playerOneBoxes, playerTwoBoxes, this.boxes, this.players)
    this.setState({ ...this.state, currentBoard: board })
  }


  resetGame = () => {
    this.setState({
      ...initialBoard
    }, () => {
      this.refreshBoard()
    })
  }

  handleSquareClick = (box) => {
    if (this.state.currentPlayer === this.players[0]) {
      const newBoxes = [box, ...this.state.playerOneBoxes]
      this.setState({
        ...this.state,
        playerOneBoxes: newBoxes,
        currentPlayer: this.players[1]
      });
    }
    else {
      const newBoxes = [box, ...this.state.playerTwoBoxes]
      this.setState({
        ...this.state,
        playerTwoBoxes: newBoxes,
        currentPlayer: this.players[0]
      });
    }
  }

  checkWin = (playerOneBoxes, playerTwoBoxes) => {
    let currentPlayerWon = false

    // We check moves for opposite palyer since current player has been toggled
    const currentBox = this.state.currentPlayer === this.players[0] ? playerTwoBoxes : playerOneBoxes
    if (currentBox.length) {
      this.winningBoxes.forEach(winningBox => {
        if (winningBox.every(winIndex => currentBox.includes(winIndex))) {
          currentPlayerWon = true
        }
      })
    }
    return currentPlayerWon
  }

  render() {
    const { currentPlayer, currentBoard, winner } = this.state
    return (
      <div className={styles.container}>
        <div>Next Player: {winner ? '-' : currentPlayer}</div>
        <div>Winner: {winner ? winner : 'None'}</div>
        <button onClick={this.resetGame}>Reset Game</button>
        <div className={styles.squareGrid}>
          {
            [...Array(this.props.size).keys()].map(item => {
              const startIndex = item * this.props.size;
              const endIndex = startIndex + this.props.size;
              return (<Row winner={winner} handleSquareClick={this.handleSquareClick} rowItems={currentBoard.slice(startIndex, endIndex)} />)
            })
          }
        </div>
      </div>
    );
  }
}

const getCurrentBoard = (playerOneBoxes, playerTwoBoxes, boxes, players) => {
  return boxes.map(box => {
    if (playerOneBoxes.includes(box)) {
      return ({
        player: players[0],
        box
      })
    }
    if (playerTwoBoxes.includes(box)) {
      return ({
        player: players[1],
        box
      })
    }
    else {
      return ({
        player: null,
        box
      })
    }
  })
}

const getWinningBoxes = (array, parts) => {
  let verticalBoxes = [];
  let horizontalBoxes = [];
  let rightDiagonal = [];
  let leftDiagonal = [];

  for (let i = 0; i < parts; i++) {
    let verticalChunks = [];
    let horizontalChunks = [];
    for (let j = 0; j < array.length; j = j + parts) {
      verticalChunks.push(array[i + j]);
      horizontalChunks.push(array[(j / parts) + (i * parts)])
      if (j / parts === i) {
        rightDiagonal.push(i + j)
      }
      if (((array.length - parts) - (i * parts)) === j) {
        leftDiagonal.push(i + j)
      }
    }
    verticalBoxes.push(verticalChunks);
    horizontalBoxes.push(horizontalChunks);
  }

  return [...verticalBoxes, ...horizontalBoxes, rightDiagonal, leftDiagonal];
}


const App = ({ size = 3 }) => {

  return (
    <div className={styles.app}>
      <h1>Welcome to Tic Tac Toe!</h1>
      <Board size={size} />
    </div>
  );
};

export default App;
