/* eslint-disable no-console */
import React from 'react'

class Puzzle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      abc: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '']
    }
    this.initAbc();
  }

  initAbc(){
    var arraya = this.state.abc.sort(() => Math.random() - 0.5);
    this.setState({
      abc:arraya
    })
  }

  replaceData(index, value) {
    console.info('asdad')
    var x = this.state.abc;
    x[index] = value;
    this.setState({
        abc: x
      }
    )
  }

  logTextarea(index) {
    console.info('click me' + index)
    let curNum = this.state.abc[index],
      leftNum = this.state.abc[index - 1],
      rightNum = this.state.abc[index + 1],
      topNum = this.state.abc[index - 4],
      bottomNum = this.state.abc[index + 4]


    console.info('cur:' + curNum + ',left:' + leftNum + ',right:' + rightNum)
    // 和为空的位置交换数值
    if (leftNum === '' && index % 4) {
      this.replaceData(index - 1, curNum)
      this.replaceData(index, '')
    } else if (rightNum === '' && 3 !== index % 4) {
      this.replaceData(index + 1, curNum)
      this.replaceData(index, '')
    } else if (topNum === '') {
      this.replaceData(index - 4, curNum)
      this.replaceData(index, '')
    } else if (bottomNum === '') {
      this.replaceData(index + 4, curNum)
      this.replaceData(index, '')
    }
    this.passFn()
  }

  // 校验是否过关
  passFn() {
    if (this.state.abc[15] === '') {
      const newPuzzles = this.state.abc.slice(0, 13)

      const isPass = newPuzzles.every((e, i) => e === i + 1)

      if (isPass) {
        alert('恭喜，闯关成功！')
      }
    }
  }


  render() {
    return (
      <div className="box">
        <ul className="puzzle-wrap">
          {
            this.state.abc.map((item, i) => {
              return <li className="puzzle" key={i} onClick={() => this.logTextarea(i)}>{item}</li>
            })
          }
        </ul>
        <button className="btn-reset"
                onClick={() => this.logTextarea(5)}>重置游戏
        </button>
        <div>{this.state.abc}</div>
        <div>{this.state.abc.length}</div>
      </div>
    )
  }
}

export default Puzzle
