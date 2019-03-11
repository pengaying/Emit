import React, { Component } from 'react'
import Draggable from 'react-draggable'
import styles from '../index.css'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import style from '../../../routes/Extension.css'
import styless from '../../../routes/styles.less'

import { connect } from 'dva'
import ThreeSDCLOneStateWindow from './ThreeSDCLOneStateWindow'

@connect(({ socketio }) => ({
    socketio
}))


export default class SDCLOneStateWindow extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            childSide: null,
            hidden: false

            // display_name: 'block', //此状态机为display的取值
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
        console.log('id:', childSide);
        let component = null;
        let lights = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7', 'light8', 'light9', 'light10', 'light11', 'light12', 'light13', 'light14', 'light15', 'light16',
            'light17', 'light18', 'light19', 'light20', 'light21', 'light22', 'light23', 'light24', 'light25', 'light26', 'light27', 'light28', 'light29', 'light30', 'light31', 'light32', 'light33',
            'light34', 'light35', 'light36', 'light37', 'light38', 'light39', 'light40', 'light41', 'light42', 'light43', 'light44', 'light45', 'light46', 'light47', 'light48', 'light49',
            'light50', 'light51', 'light52', 'light53', 'light54', 'light55', 'light56', 'light57', 'light58', 'light59', 'light60', 'light61', 'light62', 'light63', 'light64', 'light65',
            'light66', 'light67', 'light68', 'light69', 'light70', 'light71', 'light72', 'light73', 'light74', 'light75', 'light76', 'light77', 'light78', 'light79', 'light80',
            'light81', 'light82', 'light83', 'light84', 'light85', 'light86', 'light87', 'light88', 'light89', 'light90', 'light91', 'light92', 'light93', 'light94', 'light95', 'light96', 'light97', 'light98', 'light99', 'light100',
            'light101', 'light102', 'light103', 'light104', 'light105', 'light106', 'light107', 'light108', 'light109', 'light110', 'light111', 'light112', 'light113', 'light114', 'light115', 'light116', 'light117', 'light118', 'light119', 'light120',
            'light121', 'light122', 'light123', 'light124', 'light125', 'light126', 'light127', 'light128', 'light129', 'light130', 'light131', 'light132'];

        for (let i = 0; i < lights.length; i++)
            lights[i] = whiteLight;

        if (this.props.socketio.data != null && this.props.socketio.data.length > 0) {
            console.log('web:', this.props.socketio.data[1].length)
            for (let i = 0; i < this.props.socketio.data[1].length; i++) {
                if (this.props.socketio.data[1][i].powerAmplifierStatus === 1) {
                    lights[i + 4] = redLight;
                }
                else if (this.props.socketio.data[1][i].powerAmplifierStatus === 0)
                    lights[i + 4] = greenLight;
            }
            for (let i = 0; i < 4; i++) {
                if (this.props.socketio.data[4].pre_amplifierState01 === 1) {
                    lights[i] = redLight;
                }
                else if (this.props.socketio.data[4].pre_amplifierState01 === 0)
                    lights[i] = greenLight;
            }
        }

        if (this.props.socketio.default === 'default'){
            for (let i = 0; i < lights.length; i++)
                lights[i] = whiteLight;
        }
        let nSize = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
            , '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'
            , '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70'
            , '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'
            , '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'
            , '119', '120', '121', '122', '123', '124', '125', '126', '127', '128'];
        console.log('object', nSize.length)
        for (let i = 0; i < nSize.length; i++) {
            while (nSize[i] === childSide) {
                console.log(nSize[i])
                component = <ThreeSDCLOneStateWindow popUp={childSide} closeWinodow={this.closeWinodow} hidden={this.state.hidden} />;
                break; 
            }
        }
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <div className={styles.Light_Hundrend_State}>
                <Draggable handle="strong" {...dragHandlers}>
                    {/* // 功放 */}
                    <div className={styles.Light_Hundrend_Power}
                        hidden={this.props.hidden}
                    >
                        <strong >
                            
                        <div className={styless.PopUpWindow_title}>
                                <span>功放</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../../../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.connect}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={lights[0]} className={styles.LightImage} alt='图片' />
                            <img src={lights[1]} className={styles.LightImage} alt='图片' />
                            <img src={lights[2]} className={styles.LightImage} alt='图片' />
                            <img src={lights[3]} className={styles.LightImage} alt='图片' />
                            <br />
                            <span className={styles.LightSpan}>功放1</span><span className={styles.LightSpan}>功放2</span>
                            <span className={styles.LightSpan}>功放3</span><span className={styles.LightSpan}>功放4</span>
                        </div>
                        <img src={lights[4]} className={styles.LightImage} onDoubleClick={this.handleClick} id='1' alt='图片' />
                        <img src={lights[5]} className={styles.LightImage} onDoubleClick={this.handleClick} id='2' alt='图片' />
                        <img src={lights[6]} className={styles.LightImage} onDoubleClick={this.handleClick} id='3' alt='图片' />
                        <img src={lights[7]} className={styles.LightImage} onDoubleClick={this.handleClick} id='4' alt='图片' />
                        <img src={lights[8]} className={styles.LightImage} onDoubleClick={this.handleClick} id='5' alt='图片' />
                        <img src={lights[9]} className={styles.LightImage} onDoubleClick={this.handleClick} id='6' alt='图片' />
                        <img src={lights[10]} className={styles.LightImage} onDoubleClick={this.handleClick} id='7' alt='图片' />
                        <img src={lights[11]} className={styles.LightImage} onDoubleClick={this.handleClick} id='8' alt='图片' />
                        <br />
                        <span className={styles.LightSpan}>功放1</span><span className={styles.LightSpan}>功放2</span>
                        <span className={styles.LightSpan}>功放3</span><span className={styles.LightSpan}>功放4</span>
                        <span className={styles.LightSpan}>功放5</span><span className={styles.LightSpan}>功放6</span>
                        <span className={styles.LightSpan}>功放7</span><span className={styles.LightSpan}>功放8</span>
                        <br />
                        <img src={lights[12]} className={styles.LightImage} onDoubleClick={this.handleClick} id='9' alt='图片' />
                        <img src={lights[13]} className={styles.LightImage} onDoubleClick={this.handleClick} id='10' alt='图片' />
                        <img src={lights[14]} className={styles.LightImage} onDoubleClick={this.handleClick} id='11' alt='图片' />
                        <img src={lights[15]} className={styles.LightImage} onDoubleClick={this.handleClick} id='12' alt='图片' />
                        <img src={lights[16]} className={styles.LightImage} onDoubleClick={this.handleClick} id='13' alt='图片' />
                        <img src={lights[17]} className={styles.LightImage} onDoubleClick={this.handleClick} id='14' alt='图片' />
                        <img src={lights[18]} className={styles.LightImage} onDoubleClick={this.handleClick} id='15' alt='图片' />
                        <img src={lights[19]} className={styles.LightImage} onDoubleClick={this.handleClick} id='16' alt='图片' />
                        <br />
                        <span className={styles.LightSpan}>功放9</span><span className={styles.Light_Span}>功放10</span><span className={styles.Light_Span}>功放11</span>
                        <span className={styles.Light_Span}>功放12</span><span className={styles.Light_Span}>功放13</span><span className={styles.Light_Span}>功放14</span>
                        <span className={styles.Light_Span}>功放15</span><span className={styles.Light_Span}>功放16</span>
                        <br />
                        <img src={lights[20]} className={styles.LightImage} onDoubleClick={this.handleClick} id='17' alt='图片' />
                        <img src={lights[21]} className={styles.LightImage} onDoubleClick={this.handleClick} id='18' alt='图片' />
                        <img src={lights[22]} className={styles.LightImage} onDoubleClick={this.handleClick} id='19' alt='图片' />
                        <img src={lights[23]} className={styles.LightImage} onDoubleClick={this.handleClick} id='20' alt='图片' />
                        <img src={lights[24]} className={styles.LightImage} onDoubleClick={this.handleClick} id='21' alt='图片' />
                        <img src={lights[25]} className={styles.LightImage} onDoubleClick={this.handleClick} id='22' alt='图片' />
                        <img src={lights[26]} className={styles.LightImage} onDoubleClick={this.handleClick} id='23' alt='图片' />
                        <img src={lights[27]} className={styles.LightImage} onDoubleClick={this.handleClick} id='24' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放17</span><span className={styles.Light_Span}>功放18</span>
                        <span className={styles.Light_Span}>功放19</span><span className={styles.Light_Span}>功放20</span>
                        <span className={styles.Light_Span}>功放21</span><span className={styles.Light_Span}>功放22</span>
                        <span className={styles.Light_Span}>功放23</span><span className={styles.Light_Span}>功放24</span>
                        <br />
                        <img src={lights[28]} className={styles.LightImage} onDoubleClick={this.handleClick} id='25' alt='图片' />
                        <img src={lights[29]} className={styles.LightImage} onDoubleClick={this.handleClick} id='26' alt='图片' />
                        <img src={lights[30]} className={styles.LightImage} onDoubleClick={this.handleClick} id='27' alt='图片' />
                        <img src={lights[31]} className={styles.LightImage} onDoubleClick={this.handleClick} id='28' alt='图片' />
                        <img src={lights[32]} className={styles.LightImage} onDoubleClick={this.handleClick} id='29' alt='图片' />
                        <img src={lights[33]} className={styles.LightImage} onDoubleClick={this.handleClick} id='30' alt='图片' />
                        <img src={lights[34]} className={styles.LightImage} onDoubleClick={this.handleClick} id='31' alt='图片' />
                        <img src={lights[35]} className={styles.LightImage} onDoubleClick={this.handleClick} id='32' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放25</span><span className={styles.Light_Span}>功放26</span>
                        <span className={styles.Light_Span}>功放27</span><span className={styles.Light_Span}>功放28</span>
                        <span className={styles.Light_Span}>功放29</span><span className={styles.Light_Span}>功放30</span>
                        <span className={styles.Light_Span}>功放31</span><span className={styles.Light_Span}>功放32</span>
                        <br />
                        <img src={lights[36]} className={styles.LightImage} onDoubleClick={this.handleClick} id='33' alt='图片' />
                        <img src={lights[37]} className={styles.LightImage} onDoubleClick={this.handleClick} id='34' alt='图片' />
                        <img src={lights[38]} className={styles.LightImage} onDoubleClick={this.handleClick} id='35' alt='图片' />
                        <img src={lights[39]} className={styles.LightImage} onDoubleClick={this.handleClick} id='36' alt='图片' />
                        <img src={lights[40]} className={styles.LightImage} onDoubleClick={this.handleClick} id='37' alt='图片' />
                        <img src={lights[41]} className={styles.LightImage} onDoubleClick={this.handleClick} id='38' alt='图片' />
                        <img src={lights[42]} className={styles.LightImage} onDoubleClick={this.handleClick} id='39' alt='图片' />
                        <img src={lights[43]} className={styles.LightImage} onDoubleClick={this.handleClick} id='40' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放33</span><span className={styles.Light_Span}>功放34</span>
                        <span className={styles.Light_Span}>功放35</span><span className={styles.Light_Span}>功放36</span>
                        <span className={styles.Light_Span}>功放37</span><span className={styles.Light_Span}>功放38</span>
                        <span className={styles.Light_Span}>功放39</span><span className={styles.Light_Span}>功放40</span>
                        <br />
                        <img src={lights[44]} className={styles.LightImage} onDoubleClick={this.handleClick} id='41' alt='图片' />
                        <img src={lights[45]} className={styles.LightImage} onDoubleClick={this.handleClick} id='42' alt='图片' />
                        <img src={lights[46]} className={styles.LightImage} onDoubleClick={this.handleClick} id='43' alt='图片' />
                        <img src={lights[47]} className={styles.LightImage} onDoubleClick={this.handleClick} id='44' alt='图片' />
                        <img src={lights[48]} className={styles.LightImage} onDoubleClick={this.handleClick} id='45' alt='图片' />
                        <img src={lights[49]} className={styles.LightImage} onDoubleClick={this.handleClick} id='46' alt='图片' />
                        <img src={lights[50]} className={styles.LightImage} onDoubleClick={this.handleClick} id='47' alt='图片' />
                        <img src={lights[51]} className={styles.LightImage} onDoubleClick={this.handleClick} id='48' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放41</span>
                        <span className={styles.Light_Span}>功放42</span><span className={styles.Light_Span}>功放43</span>
                        <span className={styles.Light_Span}>功放44</span><span className={styles.Light_Span}>功放45</span>
                        <span className={styles.Light_Span}>功放46</span><span className={styles.Light_Span}>功放47</span>
                        <span className={styles.Light_Span}>功放48</span>
                        <br />
                        <img src={lights[52]} className={styles.LightImage} onDoubleClick={this.handleClick} id='49' alt='图片' />
                        <img src={lights[53]} className={styles.LightImage} onDoubleClick={this.handleClick} id='50' alt='图片' />
                        <img src={lights[54]} className={styles.LightImage} onDoubleClick={this.handleClick} id='51' alt='图片' />
                        <img src={lights[55]} className={styles.LightImage} onDoubleClick={this.handleClick} id='52' alt='图片' />
                        <img src={lights[56]} className={styles.LightImage} onDoubleClick={this.handleClick} id='53' alt='图片' />
                        <img src={lights[57]} className={styles.LightImage} onDoubleClick={this.handleClick} id='54' alt='图片' />
                        <img src={lights[58]} className={styles.LightImage} onDoubleClick={this.handleClick} id='55' alt='图片' />
                        <img src={lights[59]} className={styles.LightImage} onDoubleClick={this.handleClick} id='56' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放49</span><span className={styles.Light_Span}>功放50</span>
                        <span className={styles.Light_Span}>功放51</span><span className={styles.Light_Span}>功放52</span>
                        <span className={styles.Light_Span}>功放53</span><span className={styles.Light_Span}>功放54</span>
                        <span className={styles.Light_Span}>功放55</span><span className={styles.Light_Span}>功放56</span>
                        <br />
                        <img src={lights[60]} className={styles.LightImage} onDoubleClick={this.handleClick} id='57' alt='图片' />
                        <img src={lights[61]} className={styles.LightImage} onDoubleClick={this.handleClick} id='58' alt='图片' />
                        <img src={lights[62]} className={styles.LightImage} onDoubleClick={this.handleClick} id='59' alt='图片' />
                        <img src={lights[63]} className={styles.LightImage} onDoubleClick={this.handleClick} id='60' alt='图片' />
                        <img src={lights[64]} className={styles.LightImage} onDoubleClick={this.handleClick} id='61' alt='图片' />
                        <img src={lights[65]} className={styles.LightImage} onDoubleClick={this.handleClick} id='62' alt='图片' />
                        <img src={lights[66]} className={styles.LightImage} onDoubleClick={this.handleClick} id='63' alt='图片' />
                        <img src={lights[67]} className={styles.LightImage} onDoubleClick={this.handleClick} id='64' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放57</span>
                        <span className={styles.Light_Span}>功放58</span>
                        <span className={styles.Light_Span}>功放59</span>
                        <span className={styles.Light_Span}>功放60</span>
                        <span className={styles.Light_Span}>功放61</span>
                        <span className={styles.Light_Span}>功放62</span>
                        <span className={styles.Light_Span}>功放63</span>
                        <span className={styles.Light_Span}>功放64</span>
                        <br />
                        <img src={lights[68]} className={styles.LightImage} onDoubleClick={this.handleClick} id='65' alt='图片' />
                        <img src={lights[69]} className={styles.LightImage} onDoubleClick={this.handleClick} id='66' alt='图片' />
                        <img src={lights[70]} className={styles.LightImage} onDoubleClick={this.handleClick} id='67' alt='图片' />
                        <img src={lights[71]} className={styles.LightImage} onDoubleClick={this.handleClick} id='68' alt='图片' />
                        <img src={lights[72]} className={styles.LightImage} onDoubleClick={this.handleClick} id='69' alt='图片' />
                        <img src={lights[73]} className={styles.LightImage} onDoubleClick={this.handleClick} id='70' alt='图片' />
                        <img src={lights[74]} className={styles.LightImage} onDoubleClick={this.handleClick} id='71' alt='图片' />
                        <img src={lights[75]} className={styles.LightImage} onDoubleClick={this.handleClick} id='72' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放65</span>
                        <span className={styles.Light_Span}>功放66</span>
                        <span className={styles.Light_Span}>功放67</span>
                        <span className={styles.Light_Span}>功放68</span>
                        <span className={styles.Light_Span}>功放69</span>
                        <span className={styles.Light_Span}>功放70</span>
                        <span className={styles.Light_Span}>功放71</span>
                        <span className={styles.Light_Span}>功放72</span>
                        <br />
                        <img src={lights[76]} className={styles.LightImage} onDoubleClick={this.handleClick} id='73' alt='图片' />
                        <img src={lights[77]} className={styles.LightImage} onDoubleClick={this.handleClick} id='74' alt='图片' />
                        <img src={lights[78]} className={styles.LightImage} onDoubleClick={this.handleClick} id='75' alt='图片' />
                        <img src={lights[79]} className={styles.LightImage} onDoubleClick={this.handleClick} id='76' alt='图片' />
                        <img src={lights[80]} className={styles.LightImage} onDoubleClick={this.handleClick} id='77' alt='图片' />
                        <img src={lights[81]} className={styles.LightImage} onDoubleClick={this.handleClick} id='78' alt='图片' />
                        <img src={lights[82]} className={styles.LightImage} onDoubleClick={this.handleClick} id='79' alt='图片' />
                        <img src={lights[83]} className={styles.LightImage} onDoubleClick={this.handleClick} id='80' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放73</span>
                        <span className={styles.Light_Span}>功放74</span>
                        <span className={styles.Light_Span}>功放75</span>
                        <span className={styles.Light_Span}>功放76</span>
                        <span className={styles.Light_Span}>功放77</span>
                        <span className={styles.Light_Span}>功放78</span>
                        <span className={styles.Light_Span}>功放79</span>
                        <span className={styles.Light_Span}>功放80</span>
                        <br />
                        <img src={lights[84]} className={styles.LightImage} onDoubleClick={this.handleClick} id='81' alt='图片' />
                        <img src={lights[85]} className={styles.LightImage} onDoubleClick={this.handleClick} id='82' alt='图片' />
                        <img src={lights[86]} className={styles.LightImage} onDoubleClick={this.handleClick} id='83' alt='图片' />
                        <img src={lights[87]} className={styles.LightImage} onDoubleClick={this.handleClick} id='84' alt='图片' />
                        <img src={lights[88]} className={styles.LightImage} onDoubleClick={this.handleClick} id='85' alt='图片' />
                        <img src={lights[89]} className={styles.LightImage} onDoubleClick={this.handleClick} id='86' alt='图片' />
                        <img src={lights[90]} className={styles.LightImage} onDoubleClick={this.handleClick} id='87' alt='图片' />
                        <img src={lights[91]} className={styles.LightImage} onDoubleClick={this.handleClick} id='88' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放81</span>
                        <span className={styles.Light_Span}>功放82</span>
                        <span className={styles.Light_Span}>功放83</span>
                        <span className={styles.Light_Span}>功放84</span>
                        <span className={styles.Light_Span}>功放85</span>
                        <span className={styles.Light_Span}>功放86</span>
                        <span className={styles.Light_Span}>功放87</span>
                        <span className={styles.Light_Span}>功放88</span>
                        <br />
                        <img src={lights[92]} className={styles.LightImage} onDoubleClick={this.handleClick} id='89' alt='图片' />
                        <img src={lights[93]} className={styles.LightImage} onDoubleClick={this.handleClick} id='90' alt='图片' />
                        <img src={lights[94]} className={styles.LightImage} onDoubleClick={this.handleClick} id='91' alt='图片' />
                        <img src={lights[95]} className={styles.LightImage} onDoubleClick={this.handleClick} id='92' alt='图片' />
                        <img src={lights[96]} className={styles.LightImage} onDoubleClick={this.handleClick} id='93' alt='图片' />
                        <img src={lights[97]} className={styles.LightImage} onDoubleClick={this.handleClick} id='94' alt='图片' />
                        <img src={lights[98]} className={styles.LightImage} onDoubleClick={this.handleClick} id='95' alt='图片' />
                        <img src={lights[99]} className={styles.LightImage} onDoubleClick={this.handleClick} id='96' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放89</span>
                        <span className={styles.Light_Span}>功放90</span>
                        <span className={styles.Light_Span}>功放91</span>
                        <span className={styles.Light_Span}>功放92</span>
                        <span className={styles.Light_Span}>功放93</span>
                        <span className={styles.Light_Span}>功放94</span>
                        <span className={styles.Light_Span}>功放95</span>
                        <span className={styles.Light_Span}>功放96</span>
                        <br />
                        <img src={lights[100]} className={styles.LightImage} onDoubleClick={this.handleClick} id='97' alt='图片' />
                        <img src={lights[101]} className={styles.LightImage} onDoubleClick={this.handleClick} id='98' alt='图片' />
                        <img src={lights[102]} className={styles.LightImage} onDoubleClick={this.handleClick} id='99' alt='图片' />
                        <img src={lights[103]} className={styles.LightImage} onDoubleClick={this.handleClick} id='100' alt='图片' />
                        <img src={lights[104]} className={styles.LightImage} onDoubleClick={this.handleClick} id='101' alt='图片' />
                        <img src={lights[105]} className={styles.LightImage} onDoubleClick={this.handleClick} id='102' alt='图片' />
                        <img src={lights[106]} className={styles.LightImage} onDoubleClick={this.handleClick} id='103' alt='图片' />
                        <img src={lights[107]} className={styles.LightImage} onDoubleClick={this.handleClick} id='104' alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功放97</span>
                        <span className={styles.Light_Span}>功放98</span>
                        <span className={styles.Light_Span}>功放99</span>
                        <span className={styles.Hundred_Light_Span}>功放100</span>
                        <span className={styles.Hundred_Light_Span}>功放101</span>
                        <span className={styles.Hundred_Light_Span}>功放102</span>
                        <span className={styles.Hundred_Light_Span}>功放103</span>
                        <span className={styles.Hundred_Light_Span}>功放104</span>
                        <br />
                        <img src={lights[108]} className={styles.LightImage} onDoubleClick={this.handleClick} id='105' alt='图片' />
                        <img src={lights[109]} className={styles.LightImage} onDoubleClick={this.handleClick} id='106' alt='图片' />
                        <img src={lights[110]} className={styles.LightImage} onDoubleClick={this.handleClick} id='107' alt='图片' />
                        <img src={lights[111]} className={styles.LightImage} onDoubleClick={this.handleClick} id='108' alt='图片' />
                        <img src={lights[112]} className={styles.LightImage} onDoubleClick={this.handleClick} id='109' alt='图片' />
                        <img src={lights[113]} className={styles.LightImage} onDoubleClick={this.handleClick} id='110' alt='图片' />
                        <img src={lights[114]} className={styles.LightImage} onDoubleClick={this.handleClick} id='111' alt='图片' />
                        <img src={lights[115]} className={styles.LightImage} onDoubleClick={this.handleClick} id='112' alt='图片' />
                        <br />
                        <span className={styles.Hundred_Light_Span}>功放105</span>
                        <span className={styles.Hundred_Light_Span}>功放106</span>
                        <span className={styles.Hundred_Light_Span}>功放107</span>
                        <span className={styles.Hundred_Light_Span}>功放108</span>
                        <span className={styles.Hundred_Light_Span}>功放109</span>
                        <span className={styles.Hundred_Light_Span}>功放110</span>
                        <span className={styles.Hundred_Light_Span}>功放111</span>
                        <span className={styles.Hundred_Light_Span}>功放112</span>
                        <br />
                        <img src={lights[116]} className={styles.LightImage} onDoubleClick={this.handleClick} id='113' alt='图片' />
                        <img src={lights[117]} className={styles.LightImage} onDoubleClick={this.handleClick} id='114' alt='图片' />
                        <img src={lights[118]} className={styles.LightImage} onDoubleClick={this.handleClick} id='115' alt='图片' />
                        <img src={lights[119]} className={styles.LightImage} onDoubleClick={this.handleClick} id='116' alt='图片' />
                        <img src={lights[120]} className={styles.LightImage} onDoubleClick={this.handleClick} id='117' alt='图片' />
                        <img src={lights[121]} className={styles.LightImage} onDoubleClick={this.handleClick} id='118' alt='图片' />
                        <img src={lights[122]} className={styles.LightImage} onDoubleClick={this.handleClick} id='119' alt='图片' />
                        <img src={lights[123]} className={styles.LightImage} onDoubleClick={this.handleClick} id='120' alt='图片' />
                        <br />
                        <span className={styles.Hundred_Light_Span}>功放113</span>
                        <span className={styles.Hundred_Light_Span}>功放114</span>
                        <span className={styles.Hundred_Light_Span}>功放115</span>
                        <span className={styles.Hundred_Light_Span}>功放116</span>
                        <span className={styles.Hundred_Light_Span}>功放117</span>
                        <span className={styles.Hundred_Light_Span}>功放118</span>
                        <span className={styles.Hundred_Light_Span}>功放119</span>
                        <span className={styles.Hundred_Light_Span}>功放120</span>
                        <br />
                        <img src={lights[124]} className={styles.LightImage} onDoubleClick={this.handleClick} id='121' alt='图片' />
                        <img src={lights[125]} className={styles.LightImage} onDoubleClick={this.handleClick} id='122' alt='图片' />
                        <img src={lights[126]} className={styles.LightImage} onDoubleClick={this.handleClick} id='123' alt='图片' />
                        <img src={lights[127]} className={styles.LightImage} onDoubleClick={this.handleClick} id='124' alt='图片' />
                        <img src={lights[128]} className={styles.LightImage} onDoubleClick={this.handleClick} id='125' alt='图片' />
                        <img src={lights[129]} className={styles.LightImage} onDoubleClick={this.handleClick} id='126' alt='图片' />
                        <img src={lights[130]} className={styles.LightImage} onDoubleClick={this.handleClick} id='127' alt='图片' />
                        <img src={lights[131]} className={styles.LightImage} onDoubleClick={this.handleClick} id='128' alt='图片' />
                        <br />
                        <span className={styles.Hundred_Light_Span}>功放121</span>
                        <span className={styles.Hundred_Light_Span}>功放122</span>
                        <span className={styles.Hundred_Light_Span}>功放123</span>
                        <span className={styles.Hundred_Light_Span}>功放124</span>
                        <span className={styles.Hundred_Light_Span}>功放125</span>
                        <span className={styles.Hundred_Light_Span}>功放126</span>
                        <span className={styles.Hundred_Light_Span}>功放127</span>
                        <span className={styles.Hundred_Light_Span}>功放128</span>
</div>
                    </div>
                </Draggable>

                <div className={styles.Three_PopUp_Window}>
                    {component}
                </div>
            </div>
        )
    }
}

