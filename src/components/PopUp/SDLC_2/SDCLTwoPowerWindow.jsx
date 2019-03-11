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


export default class SDCLTwoPowerWindow extends Component {
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
          for(let i=0;i<this.props.socketio.data[1].length;i++){
            if(this.props.socketio.data[1][i].outputPowerIndication ===1){
              lights[i] = redLight;
            }
            else if(this.props.socketio.data[1][i].outputPowerIndication ===0)
            lights[i] =greenLight;
          }
        }
        if (this.props.socketio.default === 'default') {
          // console.log('[LayoutSide.jsx][render][3]');
          for(let i=0;i<lights.length;i++ )
          lights[i] = whiteLight;
        }
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            //功率 
            <Fragment>
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.hidden} className={styles.light}>
                        <strong >
                        <div className={styless.PopUpWindow_title}>
                                <span>功率</span>
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
                        <span className={styles.LightSpan}>功率1</span><span className={styles.LightSpan}>功率2</span>
                        <span className={styles.LightSpan}>功率3</span><span className={styles.LightSpan}>功率4</span>
                        <span className={styles.LightSpan}>功率5</span><span className={styles.LightSpan}>功率6</span>
                        <span className={styles.LightSpan}>功率7</span><span className={styles.LightSpan}>功率8</span>
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
                        <span className={styles.LightSpan}>功率9</span><span className={styles.Light_Span}>功率10</span><span className={styles.Light_Span}>功率11</span>
                        <span className={styles.Light_Span}>功率12</span><span className={styles.Light_Span}>功率13</span><span className={styles.Light_Span}>功率14</span>
                        <span className={styles.Light_Span}>功率15</span><span className={styles.Light_Span}>功率16</span>
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
                        <span className={styles.Light_Span}>功率17</span><span className={styles.Light_Span}>功率18</span>
                        <span className={styles.Light_Span}>功率19</span><span className={styles.Light_Span}>功率20</span>
                        <span className={styles.Light_Span}>功率21</span><span className={styles.Light_Span}>功率22</span>
                        <span className={styles.Light_Span}>功率23</span><span className={styles.Light_Span}>功率24</span>
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
                        <span className={styles.Light_Span}>功率25</span><span className={styles.Light_Span}>功率26</span>
                        <span className={styles.Light_Span}>功率27</span><span className={styles.Light_Span}>功率28</span>
                        <span className={styles.Light_Span}>功率29</span><span className={styles.Light_Span}>功率30</span>
                        <span className={styles.Light_Span}>功率31</span><span className={styles.Light_Span}>功率32</span>
                         </div>
                    </div>
                </Draggable>
            </Fragment>
        )
    }
}
