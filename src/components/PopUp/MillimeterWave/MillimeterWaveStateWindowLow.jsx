import React, { Component, Fragment } from 'react'
import Draggable from 'react-draggable'
import styles from '../index.css'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import { connect } from 'dva'
import styless from '../../../routes/styles.less'

import ThreeMillimeterOneStateWindow from './ThreeMillimeterOneStateWindow';


@connect(({ socketio }) => ({
    socketio
}))
class MillimeterWaveSingleExtension extends Component {
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
        return (
            //单路功放           
            <Fragment>
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.hidden} className={styles.Single_Extension}>
                        <strong >
                        <div className={styless.PopUpWindow_title}>
                                <span>功放 ({this.props.loworheight =='low' ? '低频' : '高频'})</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.connect}>
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>工作状态</span>
                        </div>
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>输入激励</span>
                        </div>
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>输出功放</span>
                        </div>
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>过流</span>
                        </div>
                        <br />
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>过压</span>
                        </div>
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>过热</span>
                        </div>
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>驻波保护</span>
                        </div>
                        <div className='Three_State'>
                            <img src={require('../../../assets/2_choice.png')} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className='Three_State_LightSpan'>通信状态</span>
                        </div>
                    </div>
                    </div>
                </Draggable>
            </Fragment>
        )
    }
}
@connect(({ socketio }) => ({
    socketio
}))
export default class MillimeterWaveStateWindowLow extends Component {
    constructor(props) {
        super(props);
        this.state = {
         childhidden:true

        };
    }
    handleClick=(e)=>{
        console.log(1111)
        this.setState({
            childhidden:false
        });
    }
    closeWinodow=()=>{
        this.setState({
            childhidden:false

        })
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
        this.props.lowStatecloseWinodow();
    }
    closeWinodow=()=>{
         this.setState({
             childhidden:true
         })
    }
    render() {
        let component=null;
        component = <ThreeMillimeterOneStateWindow popUp={this.state.childSide} closeWinodow={this.closeWinodow} hidden={this.state.childhidden} />;

        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        let lights = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7',
            'light8', 'light9', 'light10', 'light11', 'light12', 'light13', 'light14', 'light15', 'light16',
            'light17', 'light18', 'light19', 'light20', 'light21', 'light22', 'light23', 'light24',
            'light25', 'light26', 'light27', 'light28', 'light29', 'light30', 'light31', 'light32', 'light33',
            'light34', 'light35', 'light36', 'light37', 'light38', 'light39', 'light40', 'light41', 'light42',
            'light43', 'light44', 'light45', 'light46', 'light47', 'light48', 'light49',
            'light50', 'light51', 'light52', 'light53', 'light54', 'light55', 'light56', 'light57',
            'light58', 'light59', 'light60', 'light61', 'light62', 'light63', 'light64' ];
        for (let i = 0; i < lights.length; i++)
            lights[i] = whiteLight;
        if (this.props.socketio.data != null) {
            console.log('web:', this.props.socketio.data[1].length)
            for (let i = 0; i < this.props.socketio.data[1].length; i++) {
                if (this.props.socketio.data[1][i].powerAmplifierStatus === 1) {
                    lights[i] = redLight;
                }
                else if (this.props.socketio.data[1][i].powerAmplifierStatus === 0)
                    lights[i] = greenLight;
            }
        }
        return (
            //功放           
            <Fragment>
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.lowState} className={styles.Light_Hundred}>
                        <strong >
                        <div className={styless.PopUpWindow_title}>
                                <span>功放 (低频)</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.connect}>
                        <img src={lights[0]} className={styles.LightImage} alt='图片' onDoubleClick={this.handleClick} />
                        <img src={lights[1]} className={styles.LightImage} alt='图片' onDoubleClick={this.handleClick} />
                        <img src={lights[2]} className={styles.LightImage} alt='图片' />
                        <img src={lights[3]} className={styles.LightImage} alt='图片' />
                        <img src={lights[4]} className={styles.LightImage} alt='图片' />
                        <img src={lights[5]} className={styles.LightImage} alt='图片' />
                        <img src={lights[6]} className={styles.LightImage} alt='图片' />
                        <img src={lights[7]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.LightSpan} onDoubleClick={this.handleClick}>功放1</span><span className={styles.LightSpan}>功放2</span>
                        <span className={styles.LightSpan}>功放3</span><span className={styles.LightSpan}>功放4</span>
                        <span className={styles.LightSpan}>功放5</span><span className={styles.LightSpan}>功放6</span>
                        <span className={styles.LightSpan}>功放7</span><span className={styles.LightSpan}>功放8</span>
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
                        <span className={styles.LightSpan}>功放9</span><span className={styles.Light_Span}>功放10</span><span className={styles.Light_Span}>功放11</span>
                        <span className={styles.Light_Span}>功放12</span><span className={styles.Light_Span}>功放13</span><span className={styles.Light_Span}>功放14</span>
                        <span className={styles.Light_Span}>功放15</span><span className={styles.Light_Span}>功放16</span>
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
                        <span className={styles.Light_Span}>功放17</span><span className={styles.Light_Span}>功放18</span>
                        <span className={styles.Light_Span}>功放19</span><span className={styles.Light_Span}>功放20</span>
                        <span className={styles.Light_Span}>功放21</span><span className={styles.Light_Span}>功放22</span>
                        <span className={styles.Light_Span}>功放23</span><span className={styles.Light_Span}>功放24</span>
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
                        <span className={styles.Light_Span}>功放25</span><span className={styles.Light_Span}>功放26</span>
                        <span className={styles.Light_Span}>功放27</span><span className={styles.Light_Span}>功放28</span>
                        <span className={styles.Light_Span}>功放29</span><span className={styles.Light_Span}>功放30</span>
                        <span className={styles.Light_Span}>功放31</span><span className={styles.Light_Span}>功放32</span>
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
                        <span className={styles.Light_Span}>功放33</span><span className={styles.Light_Span}>功放34</span>
                        <span className={styles.Light_Span}>功放35</span><span className={styles.Light_Span}>功放36</span>
                        <span className={styles.Light_Span}>功放37</span><span className={styles.Light_Span}>功放38</span>
                        <span className={styles.Light_Span}>功放39</span><span className={styles.Light_Span}>功放40</span>
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
                        <span className={styles.Light_Span}>功放41</span>
                        <span className={styles.Light_Span}>功放42</span><span className={styles.Light_Span}>功放43</span>
                        <span className={styles.Light_Span}>功放44</span><span className={styles.Light_Span}>功放45</span>
                        <span className={styles.Light_Span}>功放46</span><span className={styles.Light_Span}>功放47</span>
                        <span className={styles.Light_Span}>功放48</span>
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
                        <span className={styles.Light_Span}>功放49</span><span className={styles.Light_Span}>功放50</span>
                        <span className={styles.Light_Span}>功放51</span><span className={styles.Light_Span}>功放52</span>
                        <span className={styles.Light_Span}>功放53</span><span className={styles.Light_Span}>功放54</span>
                        <span className={styles.Light_Span}>功放55</span><span className={styles.Light_Span}>功放56</span>
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
                        <span className={styles.Light_Span}>功放57</span>
                        <span className={styles.Light_Span}>功放58</span>
                        <span className={styles.Light_Span}>功放59</span>
                        <span className={styles.Light_Span}>功放60</span>
                        <span className={styles.Light_Span}>功放61</span>
                        <span className={styles.Light_Span}>功放62</span>
                        <span className={styles.Light_Span}>功放63</span>
                        <span className={styles.Light_Span}>功放64</span>
                        </div>
                    </div>
                </Draggable>
                <div className={styles.Three_PopUp_Window} style={{top:'505px'}}>
                    {component}
                </div>
            </Fragment>


        )
    }
}

