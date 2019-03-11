import React, { Component } from 'react'
import styles from './index.css'
import SDCLOneElectricSourceWindow from './SDLC_1/SDCLOneElectricSourceWindow';
import SDCLOnePowerWindow from './SDLC_1/SDCLOnePowerWindow';
import SDCLOneStateWindow from './SDLC_1/SDCLOneStateWindow';

import RadarLSingelStateWindow from './Radar_L/RadarLSingelStateWindow'
import RadarXkuSingelState from './Radar_XKu/RadarXkuSingelState'  //ku
import RadarSCSingelStateWindow from './Radar_SC/RadarSCSingelStateWindow'  //sc

import ECM_ElectricSourceWindow from './ECM/ECM_ElectricSourceWindow';
import ECM_PowerWindow from './ECM/ECM_PowerWindow';
import ECM_StateWindow from './ECM/ECM_StateWindow';

import SDCLTwoElectricSourceWindow from './SDLC_2/SDCLTwoElectricSourceWindow';
import SDCLTwoPowerWindow from './SDLC_2/SDCLTwoPowerWindow';
import SDCLTwoStateWindow from './SDLC_2/SDCLTwoStateWindow';

import redLight from '../../assets/png133_099.png'
import whiteLight from '../../assets/2_choice.png'
import greenLight from '../../assets/png133_020.png'
import { connect } from 'dva'
import MillimeterWaveElectricSourceWindow from './MillimeterWave/MillimeterWaveElectricSourceWindow';
import MillimeterWavePowerWindow from './MillimeterWave/MillimeterWavePowerWindow';
import MillimeterWaveStateWindow from './MillimeterWave/MillimeterWaveStateWindow';
import Draggable from 'react-draggable'
import TransmitterXku from './Radar_XKu/TransmitterXku';

@connect(({ socketio }) => ({
  socketio
}))

export default class RaderXkuLayoutSide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      side: null,
      hidden: true,
      lowhidden:true,
      heightHidden:true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  heightHandleClick=()=>{
    this.setState({
   
      heightHidden: ! this.state.heightHidden
    });  
  }
  handleClick = (e) => {
    this.setState({
      side: e.target.id,
      hidden: ! this.state.hidden
    });
  }
  lowhandleClick=()=>{
    this.setState({
   
      lowhidden: ! this.state.lowhidden
    });   
  }
  //关闭弹窗事件
  closeWinodow = (e) => {
    this.setState({
      hidden: true
    });
  }
  render() {
    let { side } = this.state;
    let component = null;
    console.log(side)
      console.log(this.props.socketio.data)
    let light = whiteLight;
    let light1 = whiteLight;
    let light2 = whiteLight;
    // console.log(`this.props.socketio.data != null: ${this.props.socketio.data != null}   |   this.props.socketio.default ==='default': ${this.props.socketio.default ==='default'}`)
    if (this.props.socketio.data != null && this.props.socketio.data.length > 0) {
      if (this.props.socketio.data[0].powerSupply_SDLC_1_00 === 1) {
        // console.log('[LayoutSide.jsx][render][1]');
        light = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_1_00 === 0) {
        light = greenLight;
      }
      else if (this.props.socketio.data[0].powerSupply_ECM_00 === 1) {
        light = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_ECM_00 === 0) {
        light = greenLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_2_00 === 1) {
        light = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_SDLC_2_00 === 0) {
        light = greenLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_L_00 === 1) {
        light = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_L_00 === 0) {
        light = greenLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_S_00 === 1) {
        light = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_S_00 === 0) {
        light = greenLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_XKU_00 === 1) {
        light = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_XKU_00 === 0) {
        light = greenLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_C_00 === 1) {
        light = redLight;
      }
      else if (this.props.socketio.data[0].powerSupply_RADAR_C_00 === 0) {
        light = greenLight;
      }

      if (this.props.socketio.data[2] === 1) {
        // console.log('[LayoutSide.jsx][render][1]');
        light2 = redLight;
      }
      else if (this.props.socketio.data[2] === 0) {
        // console.log('[LayoutSide.jsx][render][2]');
        light2 = greenLight
      }
      if (this.props.socketio.data[3] === 1) {
        // console.log('[LayoutSide.jsx][render][1]');
        light1 = redLight;
      }
      else if (this.props.socketio.data[3] === 0) {
        // console.log('[LayoutSide.jsx][render][2]');
        light1 = greenLight
      }
    }
    if (this.props.socketio.default === 'default') {
      light = whiteLight;
      light1 = whiteLight;
      light2 = whiteLight;
    }
    switch (side) {
      case 'State':
        component = <RadarXkuSingelState closeWinodow={this.closeWinodow} hidden={this.state.hidden} />;
        break;
      default:
        break;
    }
    const field = {
      height: 'auto',
      width: 'auto',
      position: 'relative',
      border: '1px solid #bdcddc',
      padding: '10px 10px',
      borderRadius: '2px',
      float: 'left',
      margin: '20px 10px',
    }
    const fields = {
      height: 'auto',
      width: '297px',
      position: 'relative',
      border: '1px solid #bdcddc',
      padding: '10px 8px',
      borderRadius: '2px',
      float: 'left',
      margin: '20px 10px',
    }
    const fieldTitle = {
      padding:'0 5px 0 5px',
      position: 'absolute',
      top: '-12px',
      fontSize: '14px',
      height: '21px',
      background: '#E3EAF4 100%',
    }
    const fieldTitleFs = {
      width: '60px',
      position: 'absolute',
      top: '-12px',
      fontSize: '14px',
      height: '21px',
      background: '#E3EAF4 100%',
    }
    const fieldContent = {
      // height: '20px',
      marginTop: '5px',
      display: 'inline-block'
    }
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className={styles.Layout_Content}>
       <Draggable handle="strong" {...dragHandlers}>
        <div className={styles.LayoutSide}>
        <strong>
              <div style={{ float: 'left', width: '330px' }}>
                &nbsp;
                                </div>
            </strong>
            <div style={field}>
              {/* 系统状态 */}
              <div style={fieldTitle}>系统状态</div>
            {/* <SystemState /> */}

            <div style={fieldContent}>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>测频</span>
              </div>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>测向</span>
              </div>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>干扰</span>
              </div>
              <br />
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>伺服</span>
              </div>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>脉内</span>
              </div>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>液冷</span>
              </div>
              <br />
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>电源</span>
              </div>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>功率</span>
              </div>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>功放</span>
              </div>
              <br />
              <div className={styles.ButtonImages_interface}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section_interface}>接口/电源1</span>
              </div>
              <div className={styles.ButtonImages}>
                <img src={require('../../assets/2_choice.png')} className={styles.Image} alt='图片' />
                <span className={styles.span_section}>接口/电源2</span>
              </div>
            </div>

          </div>

          <div style={fields}>
              {/* 发射机 */}
              <div style={fieldTitle}>发射机</div>
              <div style={fieldContent}>
              <div className={styles.ButtonImages} style={{marginRight:'6px'}}>
                <img src={light} onDoubleClick={this.heightHandleClick} id='Electric' className={styles.Image} alt='图片' />
                <span className={styles.span_section}>低压</span>
              </div>
              <div className={styles.ButtonImages} style={{marginRight:'6px'}} >
                <img src={light} onDoubleClick={this.heightHandleClick} id='Electric' className={styles.Image} alt='图片' />
                <span className={styles.span_section}>准备好</span>
              </div>
              <div className={styles.ButtonImages} style={{marginRight:'6px'}}>
                <img src={light} onDoubleClick={this.heightHandleClick} id='Electric' className={styles.Image} alt='图片' />
                <span className={styles.span_section}>高压</span>
              </div>
              <div className={styles.ButtonImages}  style={{marginRight:'6px'}}>
                <img src={light2} onDoubleClick={this.handleClick} id='Power' className={styles.Image} alt='图片' />
                <span className={styles.span_section}>功率</span>
              </div>

              <div className={styles.ButtonImages} style={{marginRight:'6px'}}>
                <img src={light1} onDoubleClick={this.handleClick} id='State' className={styles.Image} alt='图片' />
                <span className={styles.span_section}>功放</span>
              </div>
                            
              <div className={styles.Life} style={{paddingTop:'10px'}}>
             <span className={styles.span_section}>发射机寿命：<input readOnly value={this.props.socketio.data}></input> &nbsp;小时</span>
             
            </div>  
          </div>
            </div>   
             {/* 点击电源显示 */} 
        </div>
        </Draggable>
        {/* 二级状态 */}
        <div className={styles.Layout_PopUp} id='SelectMode_Placement'>
           <TransmitterXku transmitterLife={this.props.transmitterLife} closeWinodowTransmitter={this.props.closeWinodowTransmitter}/>
          {component}
        </div>

      </div>
    )
  }
}

