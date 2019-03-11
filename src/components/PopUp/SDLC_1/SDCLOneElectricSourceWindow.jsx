import React, { Component, Fragment } from 'react'
import Draggable from 'react-draggable'
import styles from '../index.css'
import { connect } from 'dva'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import styless from '../../../routes/styles.less'
@connect(({ socketio }) => ({
  socketio
}))
export default class SDCLOneElectricSourceWindow extends Component {
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
    let lights =['light1','light2','light3','light4','light5','light6','light7','light8','light9','light10','light11','light12','light13','light14','light15','light16'];
    // let light = whiteLight;
    lights[0] = whiteLight;
    lights[1] =whiteLight;
    lights[2] =whiteLight;
    lights[3] = whiteLight;
    lights[4] =whiteLight;
    lights[5] =whiteLight;
    lights[6] = whiteLight;
    lights[7] =whiteLight;
    lights[8] =whiteLight;
    lights[9] = whiteLight;
    lights[10] =whiteLight;
    lights[11] =whiteLight;
    lights[12] = whiteLight;
    lights[13] =whiteLight;
    lights[14] =whiteLight;
    lights[15] = whiteLight;
 
    if (this.props.socketio.data != null&&this.props.socketio.data.length>0) {
      if (this.props.socketio.data[0].powerSupply_SDLC_1_01 === 1) {
        lights[0] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_01 === 0) {
        lights[0] = greenLight;
      }
      
      if (this.props.socketio.data[0].powerSupply_SDLC_1_02 === 1) {
        lights[1] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_02 === 0) {
        lights[1] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_03 === 1) {
        lights[2] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_03 === 0) {
        lights[2] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_04 === 1) {
        lights[3] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_04 === 0) {
        lights[3] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_05 === 1) {
        lights[4] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_05 === 0) {
        lights[4] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_06 === 1) {
        lights[5] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_06 === 0) {
        lights[5] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_07 === 1) {
        lights[6] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_07 === 0) {
        lights[6] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_08 === 1) {
        lights[7] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_08 === 0) {
        lights[7] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_09 === 1) {
        lights[8] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_09 === 0) {
        lights[8] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_10 === 1) {
        lights[9] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_10 === 0) {
        lights[9] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_11 === 1) {
        lights[10] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_11 === 0) {
        lights[10] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_12 === 1) {
        lights[11] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_12 === 0) {
        lights[11] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_13 === 1) {
        lights[12] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_13 === 0) {
        lights[12] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_14 === 1) {
        lights[13] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_14 === 0) {
        lights[13] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_15 === 1) {
        lights[14] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_15 === 0) {
        lights[14] = greenLight;
      }
      if (this.props.socketio.data[0].powerSupply_SDLC_1_16 === 1) {
        lights[15] = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_16 === 0) {
        lights[15] = greenLight;
      }
    }
    if (this.props.socketio.default === 'default') {

      lights[0] =whiteLight;
      lights[1] =whiteLight;
      lights[2] =whiteLight;
      lights[3] =whiteLight;
      lights[4] =whiteLight;
      lights[5] =whiteLight;
      lights[6] =whiteLight;
      lights[7] =whiteLight;
      lights[8] =whiteLight;
      lights[9] =whiteLight;
      lights[10] =whiteLight;
      lights[11] =whiteLight;
      lights[12] =whiteLight;
      lights[13] =whiteLight;
      lights[14] =whiteLight;
      lights[15] = whiteLight;
    }
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      //电源 
      <Fragment>
        <Draggable handle="strong" {...dragHandlers}>
          <div hidden={this.props.hidden} className={styles.light}>
            <strong >
          
                            <div className={styless.PopUpWindow_title}>
                                <span>电源</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window}  />
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
            <span className={styles.LightSpan}>电源1</span><span className={styles.LightSpan}>电源2</span><span className={styles.LightSpan}>电源3</span>
            <span className={styles.LightSpan}>电源4</span><span className={styles.LightSpan}>电源5</span><span className={styles.LightSpan}>电源6</span>
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
            <span className={styles.Light_Span}>电源9</span>
            <span className={styles.Light_Span}>电源10</span>
            <span className={styles.Light_Span}>电源11</span>
            <span className={styles.Light_Span}>电源12</span>
            <span className={styles.Light_Span}>电源13</span>
            <span className={styles.Light_Span}>电源14</span>
            <span className={styles.Light_Span}>电源15</span>
            <span className={styles.Light_Span}>电源16</span>
            </div>
          </div>
        </Draggable>
      </Fragment>
    )
  }
}