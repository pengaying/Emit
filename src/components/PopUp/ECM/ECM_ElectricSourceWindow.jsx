import React, { Component ,Fragment } from 'react'
import Draggable from 'react-draggable'
import styles from '../index.css'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import {connect} from 'dva'
import styless from '../../../routes/styles.less'

@connect(({ socketio }) => ({
  socketio
}))


export default class ECM_ElectricSourceWindow extends Component {
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
    let lights = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7', 'light8', 'light9', 'light10', 'light11', 'light12', 'light13', 'light14', 'light15', 'light16',
    'light17', 'light18', 'light19', 'light20', 'light21', 'light22', 'light23', 'light24', 'light25', 'light26', 'light27', 'light28', 'light29', 'light30', 'light31', 'light32'];
    for(let i=0;i<lights.length;i++ )
      lights[i] = whiteLight;

      if (this.props.socketio.data != null &&this.props.socketio.data.length>0) {
        if (this.props.socketio.data[0].powerSupply_ECM_01 === 1) {
          lights[0] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_01 === 0) {
          lights[0] = greenLight;
        }
        
        if (this.props.socketio.data[0].powerSupply_ECM_02 === 1) {
          lights[1] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_02 === 0) {
          lights[1] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_03 === 1) {
          lights[2] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_03 === 0) {
          lights[2] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_04 === 1) {
          lights[3] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_04 === 0) {
          lights[3] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_05 === 1) {
          lights[4] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_05 === 0) {
          lights[4] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_06 === 1) {
          lights[5] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_06 === 0) {
          lights[5] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_07 === 1) {
          lights[6] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_07 === 0) {
          lights[6] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_08 === 1) {
          lights[7] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_08 === 0) {
          lights[7] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_09 === 1) {
          lights[8] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_09 === 0) {
          lights[8] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_10 === 1) {
          lights[9] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_10 === 0) {
          lights[9] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_11 === 1) {
          lights[10] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_11 === 0) {
          lights[10] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_12 === 1) {
          lights[11] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_12 === 0) {
          lights[11] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_13 === 1) {
          lights[12] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_13 === 0) {
          lights[12] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_14 === 1) {
          lights[13] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_14 === 0) {
          lights[13] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_15 === 1) {
          lights[14] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_15 === 0) {
          lights[14] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_16 === 1) {
          lights[15] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_16 === 0) {
          lights[15] = greenLight;
        }
  
        if (this.props.socketio.data[0].powerSupply_ECM_17 === 1) {
          lights[16] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_17=== 0) {
          lights[16] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_18 === 1) {
          lights[17] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_18 === 0) {
          lights[17] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_19 === 1) {
          lights[18] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_19 === 0) {
          lights[18] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_20 === 1) {
          lights[19] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_20 === 0) {
          lights[19] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_21 === 1) {
          lights[20] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_21 === 0) {
          lights[20] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_22 === 1) {
          lights[21] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_22 === 0) {
          lights[21] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_23 === 1) {
          lights[22] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_23 === 0) {
          lights[22] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_24 === 1) {
          lights[23] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_24 === 0) {
          lights[23] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_25 === 1) {
          lights[24] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_25 === 0) {
          lights[24] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_26 === 1) {
          lights[25] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_26 === 0) {
          lights[25] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_27 === 1) {
          lights[26] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_27 === 0) {
          lights[26] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_28 === 1) {
          lights[27] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_28 === 0) {
          lights[27] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_29 === 1) {
          lights[28] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_29 === 0) {
          lights[28] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_30 === 1) {
          lights[29] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_30 === 0) {
          lights[29] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_31 === 1) {
          lights[30] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_31 === 0) {
          lights[30] = greenLight;
        }
        if (this.props.socketio.data[0].powerSupply_ECM_32 === 1) {
          lights[31] = redLight;
        }
        else if (this.props.socketio.data[0].powerSupply_ECM_32 === 0) {
          lights[31] = greenLight;
        }
      }
      if (this.props.socketio.default === 'default') {
        // console.log('[LayoutSide.jsx][render][3]');\\]
        for(let i=0;i<lights.length;i++ )
        lights[i] = whiteLight;
      }
   
   
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      // 电源 
      <Fragment>
        <Draggable handle="strong" {...dragHandlers}>
          <div hidden={this.props.hidden} className={styles.light}>
            <strong >
            <div className={styless.PopUpWindow_title}>
                                <span>电源</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
            </strong >
            <div className={styles.connect}>
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
          </div>
          </div>
        </Draggable>
      </Fragment>
    )
  }
}
