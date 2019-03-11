import React, { Component } from 'react'
import styles from '../index.css'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import { connect } from 'dva'
import Draggable from 'react-draggable'
import styless from '../../../routes/styles.less'

@connect(({ socketio }) => ({
    socketio
}))

export default class ThreeSDCLTwoStateWindow extends Component {
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
        let popName = this.props.popUp-1;
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        let lights = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7', 'light8', 'light9'];
        for (let i = 0; i < lights.length; i++)
            lights[i] = whiteLight;
        if (this.props.socketio.data != null) {

            if (this.props.socketio.data[1][popName].workingCondition === 1) {  //工作状态
                lights[0] = redLight;
            }
            else if (this.props.socketio.data[1][popName].workingCondition === 0) {
                lights[0] = greenLight;
            }
            // if (this.props.socketio.data[1][popName].inputIncentiveInstructions === 1) {//输入激励指示
            //     lights[1] = redLight;
            // }
            // else if (this.props.socketio.data[1][popName].inputIncentiveInstructions === 0) {
            //     lights[1] = greenLight;
            // }
            if (this.props.socketio.data[1][popName].overvoltage === 1) {//过压
                lights[2] = redLight;
            }
            else if (this.props.socketio.data[1][popName].overvoltage === 0) {
                lights[2] = greenLight;
            }
            if (this.props.socketio.data[1][popName].overCurrent === 1) { //过流
                lights[3] = redLight;
            }
            else if (this.props.socketio.data[1][popName].overCurrent === 0) {
                lights[3] = greenLight;
            }
            if (this.props.socketio.data[1][popName].overheated === 1) {//过热
                lights[4] = redLight;
            }
            else if (this.props.socketio.data[1][popName].overheated === 0) {
                lights[4] = greenLight;
            }
            if (this.props.socketio.data[1][popName].standingWaveProtection === 1) {//驻波保护
                lights[5] = redLight;
            }
            else if (this.props.socketio.data[1][popName].standingWaveProtection === 0) {
                lights[5] = greenLight;
            }
            if (this.props.socketio.data[1][popName].outputPowerIndication === 1) {//输出功率
                lights[6] = redLight;
            }
            else if (this.props.socketio.data[1][popName].outputPowerIndication === 0) {
                lights[6] = greenLight;
            }
            if (this.props.socketio.data[1][popName].communicationState === 1) {//通信状态
                lights[7] = redLight;
            }
            else if (this.props.socketio.data[1][popName].communicationState === 0) {
                lights[7] = greenLight;
            }

        }
        if (this.props.socketio.default === 'default') {
            for (let i = 0; i < lights.length; i++)
                lights[i] = whiteLight;
        }
        return (
            //单路功放  
            <>
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.hidden} className={styles.Single_Extension}>
                        <strong >
                            <div className={styless.PopUpWindow_title}>
                                <span>发射机单路功放详细状态</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.connectThree}>
                        <div className={styles.Three_State}>
                            <img src={lights[0]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.Three_State_LightSpan}>工作状态</span>
                        </div>
                    
                        <div className={styles.Three_State}>
                            <img src={lights[2]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.Three_State_LightSpan}>输出功率</span>
                        </div>
                        <div className={styles.Three_State}>
                            <img src={lights[3]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.Three_State_LightSpan}>过流</span>
                        </div>
                        <div className={styles.Three_State}>
                            <img src={lights[4]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.Three_State_LightSpan}>过压</span>
                        </div>
                        <br />
                        
                        <div className={styles.Three_State}>
                            <img src={lights[5]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.Three_State_LightSpan}>过热</span>
                        </div>
                        <div className={styles.Three_State}>
                            <img src={lights[6]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.Three_State_LightSpan}>驻波保护</span>
                        </div>
                        <div className={styles.Three_State}>
                            <img src={lights[7]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.Three_State_LightSpan}>通信状态</span>
                        </div>
                        </div>
                    </div>
                </Draggable>
            </>
        )
    }
}
