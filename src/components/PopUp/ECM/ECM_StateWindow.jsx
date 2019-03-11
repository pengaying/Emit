import React, { Component, Fragment } from 'react'
import Draggable from 'react-draggable'
import styles from '../index.css'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import { connect } from 'dva'
import ThreeECM_StateWindow from './ThreeECM_StateWindow'
import styless from '../../../routes/styles.less'

@connect(({ socketio }) => ({
    socketio
}))

export default class ECM_StateWindow extends Component {
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
    //关闭弹窗事件
    closeWinodow = (e) => {
        this.setState({
            hidden: true
        });
    }


    handleClick = (e) => {
        this.setState({
            childSide: e.target.id,
            hidden: false
        });
    }
    render() {
        let { childSide } = this.state;
        let component = null;

        let lights = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7', 'light8', 'light9', 'light10', 'light11', 'light12', 'light13', 'light14', 'light15', 'light16',
            'light17', 'light18', 'light19', 'light20', 'light21', 'light22', 'light23', 'light24', 'light25', 'light26', 'light27', 'light28', 'light29', 'light30', 'light31', 'light32'];
        for (let i = 0; i < lights.length; i++)
            lights[i] = whiteLight;

        if (this.props.socketio.data != null &&this.props.socketio.data.length>0) {
            for (let i = 0; i < this.props.socketio.data[1].length; i++) {
                if (this.props.socketio.data[1][i].powerAmplifierStatus === 1) {
                    lights[i] = redLight;
                }
                else if (this.props.socketio.data[1][i].powerAmplifierStatus === 0)
                    lights[i] = greenLight;
            }
            if (this.props.socketio.default === 'default') {
                // console.log('[LayoutSide.jsx][render][3]');
                for (let i = 0; i < lights.length; i++)
                    lights[i] = whiteLight;
            }
        }
        let nSize = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
            , '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'];
        for (let i = 0; i < nSize.length; i++) {

            while (nSize[i] === childSide) {
                component = <ThreeECM_StateWindow popUp={childSide} closeWinodow={this.closeWinodow} hidden={this.state.hidden} />;
                break;
            }
        }
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            //功放           
            <Fragment>
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.hidden} className={styles.light}>
                        <strong >
                        <div className={styless.PopUpWindow_title}>
                                <span>功放</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.connect}>
                        <img src={lights[0]} className={styles.LightImage} onDoubleClick={this.handleClick} id='1' alt='图片' />
                        <img src={lights[1]} className={styles.LightImage} onDoubleClick={this.handleClick} id='2' alt='图片' />
                        <img src={lights[2]} className={styles.LightImage} onDoubleClick={this.handleClick} id='3' alt='图片' />
                        <img src={lights[3]} className={styles.LightImage} onDoubleClick={this.handleClick} id='4' alt='图片' />
                        <img src={lights[4]} className={styles.LightImage} onDoubleClick={this.handleClick} id='5' alt='图片' />
                        <img src={lights[5]} className={styles.LightImage} onDoubleClick={this.handleClick} id='6' alt='图片' />
                        <img src={lights[6]} className={styles.LightImage} onDoubleClick={this.handleClick} id='7' alt='图片' />
                        <img src={lights[7]} className={styles.LightImage} onDoubleClick={this.handleClick} id='8' alt='图片' />
                        <br />
                        <span className={styles.LightSpan}>功放1</span><span className={styles.LightSpan}>功放2</span>
                        <span className={styles.LightSpan}>功放3</span><span className={styles.LightSpan}>功放4</span>
                        <span className={styles.LightSpan}>功放5</span><span className={styles.LightSpan}>功放6</span>
                        <span className={styles.LightSpan}>功放7</span><span className={styles.LightSpan}>功放8</span>
                        <br />
                        <img src={lights[8]} className={styles.LightImage} onDoubleClick={this.handleClick} id='9' alt='图片' />
                        <img src={lights[9]} className={styles.LightImage} onDoubleClick={this.handleClick} id='10' alt='图片' />
                        <img src={lights[10]} className={styles.LightImage} onDoubleClick={this.handleClick} id='11' alt='图片' />
                        <img src={lights[11]} className={styles.LightImage} onDoubleClick={this.handleClick} id='12' alt='图片' />
                        <img src={lights[12]} className={styles.LightImage} onDoubleClick={this.handleClick} id='13' alt='图片' />
                        <img src={lights[13]} className={styles.LightImage} onDoubleClick={this.handleClick} id='14' alt='图片' />
                        <img src={lights[14]} className={styles.LightImage} onDoubleClick={this.handleClick} id='15' alt='图片' />
                        <img src={lights[15]} className={styles.LightImage} onDoubleClick={this.handleClick} id='16' alt='图片' />
                        <br />
                        <span className={styles.LightSpan}>功放9</span><span className={styles.Light_Span}>功放10</span><span className={styles.Light_Span}>功放11</span>
                        <span className={styles.Light_Span}>功放12</span><span className={styles.Light_Span}>功放13</span><span className={styles.Light_Span}>功放14</span>
                        <span className={styles.Light_Span}>功放15</span><span className={styles.Light_Span}>功放16</span>
                        <br />
                        <img src={lights[16]} className={styles.LightImage} onDoubleClick={this.handleClick} id='17' alt='图片' />
                        <img src={lights[17]} className={styles.LightImage} onDoubleClick={this.handleClick} id='18' alt='图片' />
                        <img src={lights[18]} className={styles.LightImage} onDoubleClick={this.handleClick} id='19' alt='图片' />
                        <img src={lights[19]} className={styles.LightImage} onDoubleClick={this.handleClick} id='20' alt='图片' />
                        <img src={lights[20]} className={styles.LightImage} onDoubleClick={this.handleClick} id='21' alt='图片' />
                        <img src={lights[21]} className={styles.LightImage} onDoubleClick={this.handleClick} id='22' alt='图片' />
                        <img src={lights[22]} className={styles.LightImage} onDoubleClick={this.handleClick} id='23' alt='图片' />
                        <img src={lights[23]} className={styles.LightImage} onDoubleClick={this.handleClick} id='24' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放17</span><span className={styles.Light_Span}>功放18</span>
                        <span className={styles.Light_Span}>功放19</span><span className={styles.Light_Span}>功放20</span>
                        <span className={styles.Light_Span}>功放21</span><span className={styles.Light_Span}>功放22</span>
                        <span className={styles.Light_Span}>功放23</span><span className={styles.Light_Span}>功放24</span>
                        <br />
                        <img src={lights[24]} className={styles.LightImage} onDoubleClick={this.handleClick} id='25' alt='图片' />
                        <img src={lights[25]} className={styles.LightImage} onDoubleClick={this.handleClick} id='26' alt='图片' />
                        <img src={lights[26]} className={styles.LightImage} onDoubleClick={this.handleClick} id='27' alt='图片' />
                        <img src={lights[27]} className={styles.LightImage} onDoubleClick={this.handleClick} id='28' alt='图片' />
                        <img src={lights[28]} className={styles.LightImage} onDoubleClick={this.handleClick} id='29' alt='图片' />
                        <img src={lights[29]} className={styles.LightImage} onDoubleClick={this.handleClick} id='30' alt='图片' />
                        <img src={lights[30]} className={styles.LightImage} onDoubleClick={this.handleClick} id='31' alt='图片' />
                        <img src={lights[31]} className={styles.LightImage} onDoubleClick={this.handleClick} id='32' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放25</span><span className={styles.Light_Span}>功放26</span>
                        <span className={styles.Light_Span}>功放27</span><span className={styles.Light_Span}>功放28</span>
                        <span className={styles.Light_Span}>功放29</span><span className={styles.Light_Span}>功放30</span>
                        <span className={styles.Light_Span}>功放31</span><span className={styles.Light_Span}>功放32</span>
                    </div>
                    </div>
                </Draggable>
                <div className={styles.Three_PopUp_Window}>
                    {component}
                </div>
            </Fragment>
        )
    }
}

