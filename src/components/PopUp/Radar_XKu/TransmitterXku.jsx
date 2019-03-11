import React, { Component } from 'react'
import style from '../index.css'
import Draggable from 'react-draggable'
import { connect } from 'dva'
import styles from '../../../routes/Extension.css'
import styless from '../../../routes/styles.less'
import { Button } from 'antd';
import Axios from 'axios';

@connect(({ socketio }) => ({
    socketio
}))

export default class TransmitterXku extends Component {
    constructor(props) {
        super(props)
         this.state={
             lifeTime:null
         }
    }
    
    handleBtnCloseClicke = () => {
        this.props.closeWinodowTransmitter()
    }
    changeTime=(e)=>{
              this.setState({
                  lifeTime:e.target.value
              })
    }
    handleClickPost=(e)=>{
        console.log(this.state.lifeTime)
          Axios({
              method:'post',
              url:"http://localhost:8080/gTControlCode",
              params:{ time: this.state.lifeTime}
          })
    }
    render() {

        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

        return (
            <div className={styles.transmitter} hidden={this.props.transmitterLife} >
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.hidden} className={styles.PowerAdjustmentWindow} style={{ width: '400px', color: '#666666' }}>
                        <strong >
                            <div className={styless.PopUpWindow_title}>
                                <span>发射分机显示控制模块调式界面</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.content} style={{ height: "200px" }}>

                            <div style={{
                                borderRadius: "2px", height: "199px", width: '336px', border: '1px solid #bdcddc',
                                padding: '10px 10px', position: 'relative'
                            }}>
                                <div style={{ padding:'0px 5px' , top: '-12px', fontSize: '14px', height: '21px', position: 'absolute', background: '100%  ,center ,#FFFFFF' }}> 发射机寿命改写</div>
                                <div style={{ marginTop: '5px', display: 'inline-block' }}>
                                    <div className={style.Life} style={{ marginLeft: '45px', marginTop: "70px" }}>
                                        <span className={style.span_section}>发射机寿命：<input id="time" onChange={this.changeTime} value={this.state.lifeTime}></input> &nbsp;小时</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styless.FreqSheet}>
                            <div className={styless.bottom_content}  style={{ marginLeft: '150px' }}>

                                <Button type="primary" onClick={this.handleClickPost}>确定</Button>
                            </div>
                        </div>

                    </div>
                </Draggable>
            </div>
        )
    }
}