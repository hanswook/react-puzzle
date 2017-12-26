import React from 'react'

class Puzzle extends React.Component {

  constructor(state) {
    super(state)
    this.state = {
      abc: []
    }
    this.addData();
  }

  addData() {
    for (var j=0; j < 10; j++) {
      this.setState(
        this.state.abc.push('a' + j)
      )
    }


  }

  render() {
    return (
      <div class="box">
        <ul class="puzzle-wrap">
          <li
          ></li>
        </ul>
        <button class="btn-reset">重置游戏</button>
        <div>{this.state.abc}</div>
        <div>{this.state.abc.length}</div>
      </div>
    )
  }
}

export default Puzzle
