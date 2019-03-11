import React, { Component, Fragment } from 'react'
import Draggable from 'react-draggable'
import styles from '../index.css'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import { connect } from 'dva'
@connect(({ socketio }) => ({
  socketio
}))


export default class MillimeterWaveElectricSourceWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
  }

  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  }

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  }

  handleDrag = (e, ui) => {
    const { deltaPosition } = this.state;
    const { x, y } = deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  }


  //调用父组件关闭按钮方法
  handleBtnCloseClicke = (e) => {
    this.props.closeWinodow();
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    let lights = [
      'light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7', 'light8', 'light9', 'light10', 'light11', 'light12', 'light13', 'light14', 'light15', 'light16',
      'light17', 'light18', 'light19', 'light20', 'light21', 'light22', 'light23', 'light24', 'light25', 'light26', 'light27', 'light28', 'light29', 'light30', 'light31', 'light32', 'light33',
      'light34', 'light35', 'light36', 'light37', 'light38', 'light39', 'light40', 'light41', 'light42', 'light43', 'light44', 'light45', 'light46', 'light47', 'light48', 'light49',
      'light50', 'light51', 'light52', 'light53', 'light54', 'light55', 'light56', 'light57', 'light58', 'light59', 'light60', 'light61', 'light62', 'light63', 'light64',
    ];
    for (let i = 0; i < lights.length; i++)
      lights[i] = whiteLight;

    if (this.props.socketio.data != null) {
      if (this.props.socketio.data[0].powerSupply_Millimeter01 === 1) {
        lights[0] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter01 === 0) {
        lights[0] = greenLight;
      }

      if (this.props.socketio.data[0].powerSupply_Millimeter02 === 1) {
        lights[1] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter02 === 0) {
        lights[1] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter03 === 1) {
        lights[2] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter03 === 0) {
        lights[2] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter04 === 1) {
        lights[3] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter04 === 0) {
        lights[3] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter05 === 1) {
        lights[4] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter05 === 0) {
        lights[4] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter06 === 1) {
        lights[5] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter06 === 0) {
        lights[5] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter07 === 1) {
        lights[6] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter07 === 0) {
        lights[6] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter08 === 1) {
        lights[7] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter08 === 0) {
        lights[7] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter09 === 1) {
        lights[8] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter09 === 0) {
        lights[8] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter10 === 1) {
        lights[9] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter10 === 0) {
        lights[9] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter11 === 1) {
        lights[10] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter11 === 0) {
        lights[10] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter12 === 1) {
        lights[11] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter12 === 0) {
        lights[11] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter13 === 1) {
        lights[12] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter13 === 0) {
        lights[12] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter14 === 1) {
        lights[13] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter14 === 0) {
        lights[13] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter15 === 1) {
        lights[14] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter15 === 0) {
        lights[14] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter16 === 1) {
        lights[15] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter16 === 0) {
        lights[15] = greenLight;
      }

      if (this.props.socketio.data[0].powerSupply_Millimeter17 === 1) {
        lights[16] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter17 === 0) {
        lights[16] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter18 === 1) {
        lights[17] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter18 === 0) {
        lights[17] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter19 === 1) {
        lights[18] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter19 === 0) {
        lights[18] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter20 === 1) {
        lights[19] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter20 === 0) {
        lights[19] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter21 === 1) {
        lights[20] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter21 === 0) {
        lights[20] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter22 === 1) {
        lights[21] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter22 === 0) {
        lights[21] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter23 === 1) {
        lights[22] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter23 === 0) {
        lights[22] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter24 === 1) {
        lights[23] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter24 === 0) {
        lights[23] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter25 === 1) {
        lights[24] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter25 === 0) {
        lights[24] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter26 === 1) {
        lights[25] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter26 === 0) {
        lights[25] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter27 === 1) {
        lights[26] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter27 === 0) {
        lights[26] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter28 === 1) {
        lights[27] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter28 === 0) {
        lights[27] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter29 === 1) {
        lights[28] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter29 === 0) {
        lights[28] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_Millimeter30 === 1) {
        lights[29] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_Millimeter30 === 0) {
        lights[29] = greenLight;
      } 
    if (this.props.socketio.data[0].powerSupply_Millimeter31 === 1) {
      lights[30] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter31 === 0) {
      lights[30] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter32 === 1) {
      lights[31] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter32 === 0) {
      lights[31] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter33 === 1) {
      lights[32] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter33 === 0) {
      lights[32] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter34 === 1) {
      lights[33] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter34 === 0) {
      lights[33] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter35 === 1) {
      lights[34] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter35 === 0) {
      lights[34] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter36 === 1) {
      lights[35] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter36 === 0) {
      lights[35] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter37 === 1) {
      lights[36] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter37 === 0) {
      lights[36] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter38 === 1) {
      lights[37] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter38 === 0) {
      lights[37] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter39 === 1) {
      lights[38] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter39 === 0) {
      lights[38] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter40 === 1) {
      lights[39] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter40 === 0) {
      lights[39] = greenLight;
    } if (this.props.socketio.data[0].powerSupply_Millimeter41 === 1) {
      lights[40] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter41 === 0) {
      lights[40] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter42 === 1) {
      lights[41] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter42 === 0) {
      lights[41] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter43 === 1) {
      lights[42] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter43 === 0) {
      lights[42] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter44 === 1) {
      lights[43] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter44 === 0) {
      lights[43] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter45 === 1) {
      lights[44] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter45 === 0) {
      lights[44] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter46 === 1) {
      lights[45] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter46 === 0) {
      lights[45] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter47 === 1) {
      lights[46] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter47 === 0) {
      lights[46] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter48 === 1) {
      lights[47] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter48 === 0) {
      lights[47] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter49 === 1) {
      lights[48] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter49 === 0) {
      lights[48] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter50 === 1) {
      lights[49] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter50 === 0) {
      lights[49] = greenLight;
    }

    if (this.props.socketio.data[0].powerSupply_Millimeter51 === 1) {
      lights[50] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter51 === 0) {
      lights[50] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter52 === 1) {
      lights[51] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter52 === 0) {
      lights[51] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter53 === 1) {
      lights[52] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter53 === 0) {
      lights[52] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter54 === 1) {
      lights[53] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter54 === 0) {
      lights[53] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter55 === 1) {
      lights[54] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter55 === 0) {
      lights[54] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter56 === 1) {
      lights[55] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter56 === 0) {
      lights[55] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter57 === 1) {
      lights[56] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter57 === 0) {
      lights[56] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter58 === 1) {
      lights[57] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter58 === 0) {
      lights[57] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter59 === 1) {
      lights[58] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter59 === 0) {
      lights[58] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter60 === 1) {
      lights[59] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter60 === 0) {
      lights[59] = greenLight;
    }

    if (this.props.socketio.data[0].powerSupply_Millimeter61 === 1) {
      lights[60] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter61 === 0) {
      lights[60] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter62 === 1) {
      lights[61] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter62 === 0) {
      lights[61] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter63 === 1) {
      lights[62] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter63 === 0) {
      lights[62] = greenLight;
    }
    if (this.props.socketio.data[0].powerSupply_Millimeter64 === 1) {
      lights[63] = redLight;
    }
    else if (this.props.socketio.data[0].powerSupply_Millimeter64 === 0) {
      lights[63] = greenLight;
    }
  }
    if (this.props.socketio.default === 'default') {
      for (let i = 0; i < lights.length; i++)
        lights[i] = whiteLight;
    }

    return (
      // 电源 
      <Fragment>
        <Draggable handle="strong" {...dragHandlers}>
          <div hidden={this.props.hidden} className='light'>
            <strong >
              <div className='PopUpWindow_title'>
                <span>电源</span>
                < img src={require('../../../assets/close.png')} alt='图片' className={styles.Close_Window} onClick={this.handleBtnCloseClicke} />
              </div>
            </strong >
            <br />
            <img src={lights[0]} className={styles.LightImage} alt='图片' />
            <img src={lights[1]} className={styles.LightImage} alt='图片' />
            <img src={lights[2]} className={styles.LightImage} alt='图片' />
            <img src={lights[3]} className={styles.LightImage} alt='图片' />
            <img src={lights[4]} className={styles.LightImage} alt='图片' />
            <img src={lights[5]} className={styles.LightImage} alt='图片' />
            <img src={lights[6]} className={styles.LightImage} alt='图片' />
            <img src={lights[7]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.LightSpan}>电源1</span><span className={styles.LightSpan}>电源2</span>
            <span className={styles.LightSpan}>电源3</span><span className={styles.LightSpan}>电源4</span>
            <span className={styles.LightSpan}>电源5</span><span className={styles.LightSpan}>电源6</span>
            <span className={styles.LightSpan}>电源7</span><span className={styles.LightSpan}>电源8</span>
            <br />
            <img src={lights[8]} className={styles.LightImage} alt='图片' />
            <img src={lights[9]} className={styles.LightImage} alt='图片' />
            <img src={lights[10]} className={styles.LightImage} alt='图片' />
            <img src={lights[11]} className={styles.LightImage} alt='图片' />
            <img src={lights[12]} className={styles.LightImage} alt='图片' />
            <img src={lights[13]} className={styles.LightImage} alt='图片' />
            <img src={lights[14]} className={styles.LightImage} alt='图片' />
            <img src={lights[15]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.LightSpan}>电源9</span><span className={styles.Light_Span}>电源10</span><span className={styles.Light_Span}>电源11</span>
            <span className={styles.Light_Span}>电源12</span><span className={styles.Light_Span}>电源13</span><span className={styles.Light_Span}>电源14</span>
            <span className={styles.Light_Span}>电源15</span><span className={styles.Light_Span}>电源16</span>
            <br />
            <img src={lights[16]} className={styles.LightImage} alt='图片' />
            <img src={lights[17]} className={styles.LightImage} alt='图片' />
            <img src={lights[18]} className={styles.LightImage} alt='图片' />
            <img src={lights[19]} className={styles.LightImage} alt='图片' />
            <img src={lights[20]} className={styles.LightImage} alt='图片' />
            <img src={lights[21]} className={styles.LightImage} alt='图片' />
            <img src={lights[22]} className={styles.LightImage} alt='图片' />
            <img src={lights[23]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.Light_Span}>电源17</span><span className={styles.Light_Span}>电源18</span>
            <span className={styles.Light_Span}>电源19</span><span className={styles.Light_Span}>电源20</span>
            <span className={styles.Light_Span}>电源21</span><span className={styles.Light_Span}>电源22</span>
            <span className={styles.Light_Span}>电源23</span><span className={styles.Light_Span}>电源24</span>
            <br />
            <img src={lights[24]} className={styles.LightImage} alt='图片' />
            <img src={lights[25]} className={styles.LightImage} alt='图片' />
            <img src={lights[26]} className={styles.LightImage} alt='图片' />
            <img src={lights[27]} className={styles.LightImage} alt='图片' />
            <img src={lights[28]} className={styles.LightImage} alt='图片' />
            <img src={lights[29]} className={styles.LightImage} alt='图片' />
            <img src={lights[30]} className={styles.LightImage} alt='图片' />
            <img src={lights[31]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.Light_Span}>电源25</span><span className={styles.Light_Span}>电源26</span>
            <span className={styles.Light_Span}>电源27</span><span className={styles.Light_Span}>电源28</span>
            <span className={styles.Light_Span}>电源29</span><span className={styles.Light_Span}>电源30</span>
            <span className={styles.Light_Span}>电源31</span><span className={styles.Light_Span}>电源32</span>
            <br />
            <img src={lights[32]} className={styles.LightImage} alt='图片' />
            <img src={lights[33]} className={styles.LightImage} alt='图片' />
            <img src={lights[34]} className={styles.LightImage} alt='图片' />
            <img src={lights[35]} className={styles.LightImage} alt='图片' />
            <img src={lights[36]} className={styles.LightImage} alt='图片' />
            <img src={lights[37]} className={styles.LightImage} alt='图片' />
            <img src={lights[38]} className={styles.LightImage} alt='图片' />
            <img src={lights[39]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.Light_Span}>电源33</span><span className={styles.Light_Span}>电源34</span>
            <span className={styles.Light_Span}>电源35</span><span className={styles.Light_Span}>电源36</span>
            <span className={styles.Light_Span}>电源37</span><span className={styles.Light_Span}>电源38</span>
            <span className={styles.Light_Span}>电源39</span><span className={styles.Light_Span}>电源40</span>
            <br />
            <img src={lights[40]} className={styles.LightImage} alt='图片' />
            <img src={lights[41]} className={styles.LightImage} alt='图片' />
            <img src={lights[42]} className={styles.LightImage} alt='图片' />
            <img src={lights[43]} className={styles.LightImage} alt='图片' />
            <img src={lights[44]} className={styles.LightImage} alt='图片' />
            <img src={lights[45]} className={styles.LightImage} alt='图片' />
            <img src={lights[46]} className={styles.LightImage} alt='图片' />
            <img src={lights[47]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.Light_Span}>电源41</span>
            <span className={styles.Light_Span}>电源42</span><span className={styles.Light_Span}>电源43</span>
            <span className={styles.Light_Span}>电源44</span><span className={styles.Light_Span}>电源45</span>
            <span className={styles.Light_Span}>电源46</span><span className={styles.Light_Span}>电源47</span>
            <span className={styles.Light_Span}>电源48</span>
            <br />
            <img src={lights[48]} className={styles.LightImage} alt='图片' />
            <img src={lights[49]} className={styles.LightImage} alt='图片' />
            <img src={lights[50]} className={styles.LightImage} alt='图片' />
            <img src={lights[51]} className={styles.LightImage} alt='图片' />
            <img src={lights[52]} className={styles.LightImage} alt='图片' />
            <img src={lights[53]} className={styles.LightImage} alt='图片' />
            <img src={lights[54]} className={styles.LightImage} alt='图片' />
            <img src={lights[55]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.Light_Span}>电源49</span><span className={styles.Light_Span}>电源50</span>
            <span className={styles.Light_Span}>电源51</span><span className={styles.Light_Span}>电源52</span>
            <span className={styles.Light_Span}>电源53</span><span className={styles.Light_Span}>电源54</span>
            <span className={styles.Light_Span}>电源55</span><span className={styles.Light_Span}>电源56</span>
            <br />
            <img src={lights[56]} className={styles.LightImage} alt='图片' />
            <img src={lights[57]} className={styles.LightImage} alt='图片' />
            <img src={lights[58]} className={styles.LightImage} alt='图片' />
            <img src={lights[59]} className={styles.LightImage} alt='图片' />
            <img src={lights[60]} className={styles.LightImage} alt='图片' />
            <img src={lights[61]} className={styles.LightImage} alt='图片' />
            <img src={lights[62]} className={styles.LightImage} alt='图片' />
            <img src={lights[63]} className={styles.LightImage} alt='图片' />
            <br />
            <span className={styles.Light_Span}>电源57</span>
            <span className={styles.Light_Span}>电源58</span>
            <span className={styles.Light_Span}>电源59</span>
            <span className={styles.Light_Span}>电源60</span>
            <span className={styles.Light_Span}>电源61</span>
            <span className={styles.Light_Span}>电源62</span>
            <span className={styles.Light_Span}>电源63</span>
            <span className={styles.Light_Span}>电源64</span>
          </div>
        </Draggable>
      </Fragment>
    )
  }
}
