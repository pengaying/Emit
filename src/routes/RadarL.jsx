import React, { Component, Fragment } from 'react'
import styles from './Extension.css'
import style from '../components/PopUp/index.css'
import LayoutSide from '../components/PopUp/SDLC_1LayoutSide';
import SDLCOneWork from '../components/Extension/ExtensionWorkMode/SDLCOneWork';
import Draggable from 'react-draggable'
import axios from 'axios'
import MillimeterWaveLayoutSide from '../components/PopUp/MillimeterWaveLayoutSide';
import RadarXkuSingelState from '../components/PopUp/Radar_XKu/RadarXkuSingelState';
import RaderXkuLayoutSide from '../components/PopUp/RaderXkuLayoutSide';
import ScLayoutSide from '../components/PopUp/ScLayoutSide';
import styless from './styles.less'

import { Link } from 'dva/router';
import SDLC_1LayoutSide from '../components/PopUp/SDLC_1LayoutSide';
import SDLC_2LayoutSide from '../components/PopUp/SDLC_2LayputSide';
import ECMLayoutSide from '../components/PopUp/ECMLayoutSide';
import Radar_LlayoutSide from '../components/PopUp/Radar_LlayoutSide';
import RadarSCSingelStateWindow from '../components/PopUp/Radar_SC/RadarSCSingelStateWindow';
import Radar_SCLayoutSide from '../components/PopUp/Radar_SCLayoutSide';
import { Button } from 'antd';


export default class RadarL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            ToggleOnElectric: "1",//电源开为1，电源关为0
            ToggleOnExtension: "2", //发射开为2，发射关为4
            reset:'',
            Ebgcolor: '',
            Pbgcolor: '',
            Rgcolor: '',
            SupplyfontColor:'#BBC4DA',
            launchfontColor:'#BBC4DA',
            resetfontColor:'#BBC4DA',
            
        }
    }

    //功率调整弹窗的显示与隐藏
    handleClick = (e) => {
        this.setState({
            hidden: false,
            Pbgcolor: '#141f3e'
        });
    }

    //开/关  发射或电源1.
    handleToggleClickElectric = (e) => {
        //电源开关状态请求数据
        axios({
            method: 'post',
            url: "http://localhost:8080/gTControlCode",
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            params: { pSwitch: this.state.ToggleOnElectric }
        }
        ).then((res) => {
            let electric = this.state.ToggleOnElectric;
            if (res.data === "0") {
                (electric === "1") ? this.setState({
                    ToggleOnElectric: "0",
                    Ebgcolor: '#141f3e'
                }) : this.setState({
                    ToggleOnElectric: "1",
                    Ebgcolor: ''
                });
                console.log('ToggleOnElectric is', electric, this.state.ToggleOnElectric)
            }

            // if (a == '1') {
            //     this.setState({
            //         ToggleOnExtension: '4'
            //     });
            // } 
        }).catch(error => console.log('error is', error));
        console.log('pSwitch is', this.state.ToggleOnElectric)
    }
    //复位
    resetHandleCLick=(e)=>{
        this.setState({
            reset:'40'
        })
        console.log(this.state.reset);
        axios({
            method: 'post',
            url: "http://localhost:8080/gTControlCode",
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            params: { pSwitch: this.state.reset }
        }
        ).then((res) => {
            let extension = this.state.reset;
            if (res.data === "0") {
                (extension === "2") ? this.setState({
                    reset: "40",
                    Tbgcolor: '#141f3e'
                }) : this.setState({
                    ToggleOnExtension: "2",
                    Tbgcolor: ''
                });
                console.log('extension is', this.state.reset, res.data)
            }
            // if (a == '1') {
            //     this.setState({
            //         ToggleOnExtension: '4'
            //     });
            // }
        }).catch(error => console.log('error is', error));
        console.log('pSwitch is', this.state.ToggleOnElectric)
    }
    

    //2.
    handleToggleClickExtension = (e) => {
        //发射开关状态请求数据
        // axios({
        //     method: 'post',
        //     url: "http://192.168.43.222:8080/GTControl",
        //     // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //     params: { nStep: "0.10" }
        // }).then(data => console.log('data this', data)).catch(error => console.log('error is', error));
        //发射开关状态请求数据
        axios({
            method: 'post',
            url: "http://localhost:8080/gTControlCode",
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            params: { pSwitch: this.state.ToggleOnExtension }
        }
        ).then((res) => {
            let extension = this.state.ToggleOnExtension;
            if (res.data === "0") {
                (extension === "2") ? this.setState({
                    ToggleOnExtension: "4",
                    Tbgcolor: '#141f3e'
                }) : this.setState({
                    ToggleOnExtension: "2",
                    Tbgcolor: ''
                });
                console.log('extension is', this.state.ToggleOnExtension, res.data)
            }
            // if (a == '1') {
            //     this.setState({
            //         ToggleOnExtension: '4'
            //     });
            // }
        }).catch(error => console.log('error is', error));
        console.log('pSwitch is', this.state.ToggleOnElectric)
    }

    //关闭弹窗事件
    closeWinodow = (e) => {
        this.setState({
            hidden: true,
            Pbgcolor: ''
        });
    }

    handleenterEMouse = () => {
        this.setState({
            Ebgcolor: '#141f3e',
            SupplyfontColor:'#56AFFF'

        })
    }
    handlemoveEMouse = () => {
        this.setState({
            Ebgcolor: '',
            SupplyfontColor:'#BBC4DA'
        })
    }
    handleenterTMouse = () => {
        this.setState({
            Tbgcolor: '#141f3e',
           launchfontColor:'#56AFFF'
        })
    }
    handlemoveTMouse = () => {
        this.setState({
            Tbgcolor: '',
            launchfontColor:'#BBC4DA'

        })
    }
    handleenterPMouse = () => {
        this.setState({
            Pbgcolor: '#141f3e',
            powerfontColor:'#56AFFF'
        })
    }
    handlemovePMouse = () => {
        this.setState({
            Pbgcolor: '',
            powerfontColor:'#BBC4DA'

        })
    }
    handleenterRMouse=()=>{
        this.setState({
            Rgcolor: '#141f3e',
            resetfontColor:'#56AFFF'
        })
    }
    handlemoveRMouse=()=>{
        this.setState({
            Rgcolor: '',
            resetfontColor:'#BBC4DA'
        })
    }
    render() {
        console.log(this.state.ToggleOnExtension)
        return (
            <Fragment>
                <div className={styles.ToolCol}>
                    <div className={styles.ToolButton} >
                        {/* 开电源 */}
                        <div
                            className={styles.FodderButton}
                            style={{  color:this.state.SupplyfontColor
                            }}
                            onClick={this.handleToggleClickElectric}//点击事件
                            onMouseEnter={this.handleenterEMouse}
                            onMouseLeave={this.handlemoveEMouse}
                        >
                            <div className={styles.menuImag} style={{ background: this.state.Ebgcolor }}>

                                <div className={styles.Image_Area} >
                                    <img src={require('../assets//071.png')} className={styles.ElecImage} alt='图片' />

                                </div>
                                <div className={styles.Image_Power} >
                                    <span className={styles.Power}> {this.state.ToggleOnElectric === '1' ? '电源开' : '电源关'}</span>
                                </div>

                            </div>
                        </div>
                        {/* 开发射 */}
                        <div
                            className={styles.FodderButton}
                            onClick={this.handleToggleClickExtension}
                            onMouseEnter={this.handleenterTMouse}
                            onMouseLeave={this.handlemoveTMouse}
                            style={{  color:this.state.launchfontColor
                            }}
                        >
                            <div className={styles.menuImag} style={{ background: this.state.Tbgcolor }}>
                                <div className={styles.Image_Area} >
                                    <img src={require('../assets//071.png')} className={styles.ElecImage} alt='图片' />
                                </div>
                                <div className={styles.Image_Power} style={{ background: this.state.Tbgcolor }}>
                                    <span className={styles.Power}>{this.state.ToggleOnExtension === '2' ? '发射开' : '发射关'}</span>
                                </div>
                            </div>
                        </div>
                       {/* 复位 */}
                       <div
                            className={styles.FodderButton}
                            onClick={this.resetHandleCLick}
                            onMouseEnter={this.handleenterRMouse}
                            onMouseLeave={this.handlemoveRMouse}
                            style={{  color:this.state.resetfontColor
                            }}
                        >
                            <div className={styles.menuImag} style={{ background: this.state.Rgcolor }}>
                                <div className={styles.Image_Area} >
                                    <img src={require('../assets//071.png')} className={styles.ElecImage} alt='图片' />
                                </div>
                                <div className={styles.Image_Power} style={{ background: this.state.Rgcolor }}>
                                    <span className={styles.Power}>复位</span>
                                </div>
                            </div>
                        </div>

                        {/* 功率调整
                        <div
                            className={styles.FodderButton}
                            onClick={this.handleClick}
                            onMouseEnter={this.handleenterPMouse}
                            onMouseLeave={this.handlemovePMouse}
                            style={{  color:this.state.powerfontColor
                            }}
                        >
                            <div className={styles.menuImag} style={{ background: this.state.Pbgcolor }}
                            >

                                <div className={styles.Image_Area} >
                                    <img src={require('../assets//071.png')} className={styles.ElecImage} alt='图片' />
                                </div>
                                <div className={styles.Image_Power} style={{ background: this.state.Pbgcolor }}>
                                    <span className={styles.Power_Adjustment}>功率调整</span>
                                </div>
                            </div>

                        </div> */}
                    </div>
                    {/* 发射机工作模式 */}
                    {/* <SDLCOneWork /> */}
                    <div className={styles.ToolButton_Title}>
                        <div className={styles.ToolButtonChildTitle}>
                            <span style={{ fontFamily: 'PingFangSC-Regular', color: '#909cb9', fontSize: '12px' }}>发射机</span>
                        </div>
                    </div>
                </div>
                {/* </div> */}

                {/* 侧边栏 */}

                <div className={style.Layout_Content}>
                     {/* <SDLC_1LayoutSide /> */}
                {/* <SDLC_2LayoutSide/> */}
                    {/* <MillimeterWaveLayoutSide /> */}
                         {/* 31号站（雷达干扰站X/Ku）<RaderXkuLayoutSide/>  */}
                    {/* <RaderXkuLayoutSide/> */}
                    {/* <ScLayoutSide/> */}
                    {/* <ECMLayoutSide/> */}
                 <Radar_LlayoutSide/>
                    <div className={styles.Layout_PowerAdjustmentWindow}>
                        <PowerAdjustmentWindow closeWinodow={this.closeWinodow} hidden={this.state.hidden} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

// 功率调整弹窗
class PowerAdjustmentWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custom: '',
            customzdy: '',

            checkbox1: '0',
            checkbox2: '0',
            checkbox3: '0',
            checkbox4: '0',
            checkbox5: '0',
            checkbox6: '0',
            checkbox7: '0',
            checkbox8: '0',
            // checkbox9: '0',
            // checkbox10: '0',
            // checkbox11: '0',
            // checkbox12: '0',
            // checkbox13: '0',
            // checkbox14: '0',
            // checkbox15: '0',
            // checkbox16: '0',
            arrtuple: false //默认隐藏阵元组
        }
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

    //功率调整弹窗的显示与隐藏
    handleClick = (e) => {
        this.setState({
            hidden: false,
        });
    }
    onCanlehandleClick
    //调用父组件关闭按钮方法
    handleBtnCloseClicke = (e) => {
        this.props.closeWinodow();
    }

    //获取选中功率调整方式
    SelectTupleChange = (e) => {
        this.setState({
            custom: e.target.value,
            arrtuple: false,
            customzdy: "0",

        })
    }
    //选择自定义模式，显示多组阵元组
    handleCustomChange = (e) => {
        this.setState({
            customzdy: e.target.value,
            arrtuple: true
        })
        console.log('arrtuple:', this.state.arrtuple)
    }

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            //功率 
            <div>
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.hidden} className={styles.PowerAdjustmentWindow}>
                        <strong >
                            <div className={styless.PopUpWindow_title}>
                                <span>功率调整</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.content} style={{height:'65px'}}>
                            <div className={style.radiobutton_position}>
                                <input type='radio' name="radiobutton" onClick={this.SelectTupleChange} value="4" />全阵<br />
                                <input type='radio' name="radiobutton" onClick={this.SelectTupleChange} value="2" />半阵<br />
                                <input type='radio' name="radiobutton" onClick={this.SelectTupleChange} value="1" />三阵<br />
                            </div>

                            <div className={style.custom}>
                                <input type='radio' name="radiobutton" onClick={this.handleCustomChange} value="0" />自定义
    {/* 显示16组阵元组 */}
                                {this.state.arrtuple ? this.renderArrayTuple() : null}

                            </div>
                        </div>
                        <div className={styless.FreqSheet}>
                            <div className={styless.bottom_content}>
                    <Button onClick={ this.handleBtnCloseClicke}>取消</Button>
                        <Button type="primary" style={{marginLeft:'10px'}} onClick={this.handleClickPost}>确定</Button>          
                            </div>
                        </div>

                    </div>
                </Draggable>
            </div>
        )
    }

    //阵元组
    renderArrayTuple() {
        return (
            <div className={style.ArrayTuple}>
                {/* <input id='checkbox16' type="checkbox" name="checkbox" value="16" onClick={this.handleClickSelectTuple16} />阵元组16<br />
                <input id='checkbox15' type="checkbox" name="checkbox" value="15" onClick={this.handleClickSelectTuple15} />阵元组15<br />
                <input id='checkbox14' type="checkbox" name="checkbox" value="14" onClick={this.handleClickSelectTuple14} />阵元组14<br />
                <input id='checkbox13' type="checkbox" name="checkbox" value="13" onClick={this.handleClickSelectTuple13} />阵元组13<br />
                <input id='checkbox12' type="checkbox" name="checkbox" value="12" onClick={this.handleClickSelectTuple12} />阵元组12<br />
                <input id='checkbox11' type="checkbox" name="checkbox" value="11" onClick={this.handleClickSelectTuple11} />阵元组11<br />
                <input id='checkbox10' type="checkbox" name="checkbox" value="10" onClick={this.handleClickSelectTuple10} />阵元组10<br />
                <input id='checkbox9' type="checkbox" name="checkbox" value="9" onClick={this.handleClickSelectTuple9} />阵元组9<br /> */}
                <input id='checkbox8' type="checkbox" name="checkbox" value="8" onClick={this.handleClickSelectTuple8} />阵元组8<br />
                <input id='checkbox7' type="checkbox" name="checkbox" value="7" onClick={this.handleClickSelectTuple7} />阵元组7<br />
                <input id='checkbox6' type="checkbox" name="checkbox" value="6" onClick={this.handleClickSelectTuple6} />阵元组6<br />
                <input id='checkbox5' type="checkbox" name="checkbox" value="5" onClick={this.handleClickSelectTuple5} />阵元组5<br />
                <input id='checkbox4' type="checkbox" name="checkbox" value="4" onClick={this.handleClickSelectTuple4} />阵元组4<br />
                <input id='checkbox3' type="checkbox" name="checkbox" value="3" onClick={this.handleClickSelectTuple3} />阵元组3<br />
                <input id='checkbox2' type="checkbox" name="checkbox" value="2" onClick={this.handleClickSelectTuple2} />阵元组2<br />
                <input id='checkbox1' type="checkbox" name="checkbox" value="1" onClick={this.handleClickSelectTuple1} />阵元组1<br />
            </div>
        )
    }
    handleClickSelectTuple1 = (e) => {
        const flag = document.getElementById('checkbox1').checked;
        const val = e.target.value;
        const cks = document.getElementsByName('checkbox');

        if (flag) {
            this.setState({
                 checkbox1: val,
                // checkbox13: document.getElementById("checkbox13").value,
                // checkbox14: document.getElementById("checkbox14").value,
                // checkbox15: document.getElementById("checkbox15").value,
                // checkbox16: document.getElementById("checkbox16").value,
                // checkbox12: document.getElementById("checkbox12").value,
                // checkbox11: document.getElementById("checkbox11").value,
                // checkbox10: document.getElementById("checkbox10").value,
                // checkbox9: document.getElementById("checkbox9").value,
                checkbox8: document.getElementById("checkbox8").value,
                checkbox7: document.getElementById("checkbox7").value,
                checkbox6: document.getElementById("checkbox6").value,
                checkbox5: document.getElementById("checkbox5").value,
                checkbox4: document.getElementById("checkbox4").value,
                checkbox3: document.getElementById("checkbox3").value,
                checkbox2: document.getElementById("checkbox2").value,

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 7) {
                    cks[i].checked = false
                } else if (i < 7 && i != 7) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox9: '0',
                // checkbox10: '0',
                checkbox8: '0',
                checkbox7: '0',
                checkbox6: '0',
                checkbox5: '0',
                checkbox4: '0',
                checkbox3: '0',
                checkbox2: '0',
                checkbox1: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 7) {
                    cks[i].checked = false;
                }
                if (i > 7) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple2 = (e) => {
        const flag = document.getElementById('checkbox2').checked;
        const val = e.target.value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox2: val,
                // checkbox13: document.getElementById("checkbox13").value,
                // checkbox14: document.getElementById("checkbox14").value,
                // checkbox15: document.getElementById("checkbox15").value,
                // checkbox16: document.getElementById("checkbox16").value,
                // checkbox12: document.getElementById("checkbox12").value,
                // checkbox11: document.getElementById("checkbox11").value,
                // checkbox10: document.getElementById("checkbox10").value,
                // checkbox9: document.getElementById("checkbox9").value,
                checkbox8: document.getElementById("checkbox8").value,
                checkbox7: document.getElementById("checkbox7").value,
                checkbox6: document.getElementById("checkbox6").value,
                checkbox5: document.getElementById("checkbox5").value,
                checkbox4: document.getElementById("checkbox4").value,
                checkbox3: document.getElementById("checkbox3").value,
                checkbox2: document.getElementById("checkbox2").value,
                checkbox1: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 6) {
                    cks[i].checked = false
                } else if (i < 6 && i != 6) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox9: '0',
                // checkbox10: '0',
                checkbox8: '0',
                checkbox7: '0',
                checkbox6: '0',
                checkbox5: '0',
                checkbox4: '0',
                checkbox3: '0',
                checkbox2: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 6) {
                    cks[i].checked = false;
                }
                if (i > 6) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple3 = (e) => {
        const flag = document.getElementById('checkbox3').checked;
        const val = document.getElementById('checkbox3').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox3: val,
                // checkbox13: document.getElementById("checkbox13").value,
                // checkbox14: document.getElementById("checkbox14").value,
                // checkbox15: document.getElementById("checkbox15").value,
                // checkbox16: document.getElementById("checkbox16").value,
                // checkbox12: document.getElementById("checkbox12").value,
                // checkbox11: document.getElementById("checkbox11").value,
                // checkbox10: document.getElementById("checkbox10").value,
                // checkbox9: document.getElementById("checkbox9").value,
                checkbox8: document.getElementById("checkbox8").value,
                checkbox7: document.getElementById("checkbox7").value,
                checkbox6: document.getElementById("checkbox6").value,
                checkbox5: document.getElementById("checkbox5").value,
                checkbox4: document.getElementById("checkbox4").value,
                checkbox2: '0',
                checkbox1: '0'

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 5) {
                    cks[i].checked = false
                } else if (i < 5 && i != 5) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox9: '0',
                // checkbox10: '0',
                checkbox8: '0',
                checkbox7: '0',
                checkbox6: '0',
                checkbox5: '0',
                checkbox4: '0',
                checkbox3: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 5) {
                    cks[i].checked = false;
                }
                if (i > 5) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple4 = (e) => {
        const flag = document.getElementById('checkbox4').checked;
        const val = document.getElementById('checkbox4').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox4: val,
                // checkbox13: document.getElementById("checkbox13").value,
                // checkbox14: document.getElementById("checkbox14").value,
                // checkbox15: document.getElementById("checkbox15").value,
                // checkbox16: document.getElementById("checkbox16").value,
                // checkbox12: document.getElementById("checkbox12").value,
                // checkbox11: document.getElementById("checkbox11").value,
                // checkbox10: document.getElementById("checkbox10").value,
                // checkbox9: document.getElementById("checkbox9").value,
                checkbox8: document.getElementById("checkbox8").value,
                checkbox7: document.getElementById("checkbox7").value,
                checkbox6: document.getElementById("checkbox6").value,
                checkbox5: document.getElementById("checkbox5").value,
                checkbox2: '0',
                checkbox1: '0',
                checkbox3: '0',

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 4) {
                    cks[i].checked = false
                } else if (i < 4 && i != 4) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox9: '0',
                // checkbox10: '0',
                checkbox8: '0',
                checkbox7: '0',
                checkbox6: '0',
                checkbox5: '0',
                checkbox4: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 4) {
                    cks[i].checked = false;
                }
                if (i > 4) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple5 = (e) => {
        const flag = document.getElementById('checkbox5').checked;
        const val = document.getElementById('checkbox5').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox5: val,
                // checkbox13: document.getElementById("checkbox13").value,
                // checkbox14: document.getElementById("checkbox14").value,
                // checkbox15: document.getElementById("checkbox15").value,
                // checkbox16: document.getElementById("checkbox16").value,
                // checkbox12: document.getElementById("checkbox12").value,
                // checkbox11: document.getElementById("checkbox11").value,
                // checkbox10: document.getElementById("checkbox10").value,
                // checkbox9: document.getElementById("checkbox9").value,
                checkbox8: document.getElementById("checkbox8").value,
                checkbox7: document.getElementById("checkbox7").value,
                checkbox6: document.getElementById("checkbox6").value,
                checkbox2: '0',
                checkbox1: '0',
                checkbox3: '0',
                checkbox4: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 3) {
                    cks[i].checked = false
                } else if (i < 3&& i != 3) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox9: '0',
                // checkbox10: '0',
                checkbox8: '0',
                checkbox7: '0',
                checkbox6: '0',
                checkbox5: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 3) {
                    cks[i].checked = false;
                }
                if (i > 3) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple6 = (e) => {
        const flag = document.getElementById('checkbox6').checked;
        const val = document.getElementById('checkbox6').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox6: val,
                
                checkbox8: document.getElementById("checkbox8").value,
                checkbox7: document.getElementById("checkbox7").value,
                checkbox2: '0',
                checkbox1: '0',
                checkbox3: '0',
                checkbox4: '0', checkbox5: '0',


            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 2) {
                    cks[i].checked = false
                } else if (i < 2 && i != 2) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox9: '0',
                // checkbox10: '0',
                checkbox8: '0',
                checkbox7: '0',
                checkbox6: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 2) {
                    cks[i].checked = false;
                }
                if (i > 2) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple7 = (e) => {
        const flag = document.getElementById('checkbox7').checked;
        const val = document.getElementById('checkbox7').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox7: val,
                // checkbox13: document.getElementById("checkbox13").value,
                // checkbox14: document.getElementById("checkbox14").value,
                // checkbox15: document.getElementById("checkbox15").value,
                // checkbox16: document.getElementById("checkbox16").value,
                // checkbox12: document.getElementById("checkbox12").value,
                // checkbox11: document.getElementById("checkbox11").value,
                // checkbox10: document.getElementById("checkbox10").value,
                // checkbox9: document.getElementById("checkbox9").value,
                // checkbox8: document.getElementById("checkbox8").value,
                checkbox2: '0',
                checkbox1: '0',
                checkbox3: '0',
                checkbox4: '0',
                checkbox5: '0',
                checkbox6: '0',

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 1) {
                    cks[i].checked = false
                } else if (i < 1 && i != 1) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox10: '0',
                // checkbox9: '0',
                checkbox8: '0',
                checkbox7: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 1) {
                    cks[i].checked = false;
                }
                if (i > 1) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple8 = (e) => {
        const flag = document.getElementById('checkbox8').checked;
        const val = document.getElementById('checkbox8').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox8: val,
                // checkbox13: document.getElementById("checkbox13").value,
                // checkbox14: document.getElementById("checkbox14").value,
                // checkbox15: document.getElementById("checkbox15").value,
                // checkbox16: document.getElementById("checkbox16").value,
                // checkbox12: document.getElementById("checkbox12").value,
                // checkbox11: document.getElementById("checkbox11").value,
                // checkbox10: document.getElementById("checkbox10").value,
                // checkbox9: document.getElementById("checkbox9").value,
                checkbox2: '0',
                checkbox1: '0',
                checkbox3: '0',
                checkbox4: '0',
                checkbox5: '0',
                checkbox6: '0',
                checkbox7: '0',
            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 0) {
                    cks[i].checked = false
                } else if (i < 0 && i != 0) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                // checkbox15: '0',
                // checkbox16: '0',
                // checkbox14: '0',
                // checkbox13: '0',
                // checkbox12: '0',
                // checkbox11: '0',
                // checkbox9: '0',
                // checkbox10: '0',
                checkbox8: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 8) {
                    cks[i].checked = false;
                }
                if (i > 8) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple9 = (e) => {
        const flag = document.getElementById('checkbox9').checked;
        const val = document.getElementById('checkbox9').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox9: val,
                checkbox13: document.getElementById("checkbox13").value,
                checkbox14: document.getElementById("checkbox14").value,
                checkbox15: document.getElementById("checkbox15").value,
                checkbox16: document.getElementById("checkbox16").value,
                checkbox12: document.getElementById("checkbox12").value,
                checkbox11: document.getElementById("checkbox11").value,
                checkbox10: document.getElementById("checkbox10").value,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0',

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 7) {
                    cks[i].checked = false
                } else if (i < 7 && i != 7) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                checkbox15: '0',
                checkbox16: '0',
                checkbox14: '0',
                checkbox13: '0',
                checkbox12: '0',
                checkbox11: '0',
                checkbox9: '0',
                checkbox10: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 7) {
                    cks[i].checked = false;
                }
                if (i > 7) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple10 = (e) => {
        const flag = document.getElementById('checkbox10').checked;
        const val = document.getElementById('checkbox10').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox10: val,
                checkbox13: document.getElementById("checkbox13").value,
                checkbox14: document.getElementById("checkbox14").value,
                checkbox15: document.getElementById("checkbox15").value,
                checkbox16: document.getElementById("checkbox16").value,
                checkbox12: document.getElementById("checkbox12").value,
                checkbox11: document.getElementById("checkbox11").value,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0', checkbox9: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 6) {
                    cks[i].checked = false
                } else if (i < 6 && i != 6) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                checkbox15: '0',
                checkbox16: '0',
                checkbox14: '0',
                checkbox13: '0',
                checkbox12: '0',
                checkbox11: '0',
                checkbox10: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 6) {
                    cks[i].checked = false;
                }
                if (i > 6) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple11 = (e) => {
        const flag = document.getElementById('checkbox11').checked;
        const val = document.getElementById('checkbox11').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox11: val,
                checkbox13: document.getElementById("checkbox13").value,
                checkbox14: document.getElementById("checkbox14").value,
                checkbox15: document.getElementById("checkbox15").value,
                checkbox16: document.getElementById("checkbox16").value,
                checkbox12: document.getElementById("checkbox12").value,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0', checkbox9: '0', checkbox10: '0'

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 5) {
                    cks[i].checked = false
                } else if (i < 5 && i != 5) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                checkbox15: '0',
                checkbox16: '0',
                checkbox14: '0',
                checkbox13: '0',
                checkbox12: '0',
                checkbox11: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 5) {
                    cks[i].checked = false;
                }
                if (i > 5) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple12 = (e) => {
        const flag = document.getElementById('checkbox12').checked;
        const val = document.getElementById('checkbox12').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox12: val,
                checkbox13: document.getElementById("checkbox13").value,
                checkbox14: document.getElementById("checkbox14").value,
                checkbox15: document.getElementById("checkbox15").value,
                checkbox16: document.getElementById("checkbox16").value,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0', checkbox9: '0', checkbox10: '0', checkbox11: '0'

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 4) {
                    cks[i].checked = false
                } else if (i < 4 && i != 4) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                checkbox15: '0',
                checkbox16: '0',
                checkbox14: '0',
                checkbox13: '0',
                checkbox12: '0',
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 4) {
                    cks[i].checked = false;
                }
                if (i > 4) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple13 = (e) => {
        const flag = document.getElementById('checkbox13').checked;
        const val = document.getElementById('checkbox13').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox13: val,
                checkbox14: document.getElementById("checkbox14").value,
                checkbox15: document.getElementById("checkbox15").value,
                checkbox16: document.getElementById("checkbox16").value,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0', checkbox9: '0', checkbox10: '0', checkbox11: '0', checkbox12: '0'

            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 3) {
                    cks[i].checked = false
                } else if (i < 3 && i != 3) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                checkbox15: '0',
                checkbox16: '0',
                checkbox14: '0',
                checkbox13: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 3) {
                    cks[i].checked = false;
                }
                if (i > 3) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple14 = (e) => {
        const flag = document.getElementById('checkbox14').checked;
        const val = document.getElementById('checkbox14').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox14: val,


                checkbox15: document.getElementById("checkbox13").value,
                checkbox16: document.getElementById("checkbox13").value,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0', checkbox9: '0', checkbox10: '0', checkbox11: '0', checkbox12: '0', checkbox13: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 2) {
                    cks[i].checked = false
                } else if (i < 2 && i != 2) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                checkbox15: '0',
                checkbox16: '0',
                checkbox14: '0',
            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 2) {
                    cks[i].checked = false;
                }
                if (i > 2) {
                    cks[i].checked = false;
                }
            }
        }
    }
    handleClickSelectTuple15 = (e) => {
        const flag = document.getElementById('checkbox15').checked;
        const val = document.getElementById('checkbox15').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox15: val, checkbox1: document.getElementById("checkbox1").value,
                checkbox16: document.getElementById("checkbox16").value,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0', checkbox9: '0', checkbox10: '0', checkbox11: '0', checkbox12: '0', checkbox13: '0',
                checkbox14: '0'
            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 1) {
                    cks[i].checked = false
                } else if (i < 1 && i != 1) {
                    cks[i].checked = true
                }
            }
        } else {
            this.setState({
                checkbox15: '0',
                checkbox16: "0",


            })
            for (let i = 0; i < cks.length; i++) {
                if (i < 1) {
                    cks[i].checked = false
                    this.setState({
                        checkbox16: '0'
                    })
                }
                if (i > 1) {
                    cks[i].checked = false
                }
            }
        }
    }

    handleClickSelectTuple16 = (e) => {
        const flag = document.getElementById('checkbox16').checked;
        const val = document.getElementById('checkbox16').value;
        const cks = document.getElementsByName('checkbox');
        if (flag) {
            this.setState({
                checkbox16: val,
                checkbox8: '0', checkbox7: '0', checkbox6: '0', checkbox5: '0', checkbox4: '0', checkbox3: '0',
                checkbox2: '0', checkbox1: '0', checkbox9: '0', checkbox10: '0', checkbox11: '0', checkbox12: '0', checkbox13: '0',
                checkbox14: '0', checkbox15: '0'

            })
            for (let i = 0; i < val.length; i++) {
                if (i > 0) {
                    cks[i].checked = false
                }
            }
        } else {
            this.setState({
                checkbox16: '0',
            })
            for (let i = 0; i < cks.length; i++) {
                if (i > 0) {
                    cks[i].checked = false
                }
            }
        }
    }

    //提交选取的参数
    handleClickPost = (e) => {
        const { customzdy, custom, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7, checkbox8,
            checkbox9, checkbox10, checkbox11, checkbox12, checkbox13, checkbox14, checkbox15, checkbox16 } = this.state;
        // console.log('pAdjustment:', custom);
        var ninValue = {
            checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7, checkbox8,
            checkbox9, checkbox10, checkbox11, checkbox12, checkbox13, checkbox14, checkbox15, checkbox16
        }
        console.log(ninValue);
        // console.log('checkbox:', checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7, checkbox8,
        //     checkbox9, checkbox10, checkbox11, checkbox12, checkbox13, checkbox14, checkbox15, checkbox16);
        // console.log('ninValue:', ninValue)
        ///选择自定义模式
        if (customzdy == 0) {
            if ((checkbox1 | checkbox2 | checkbox3 | checkbox4 | checkbox5 | checkbox6 | checkbox7 | checkbox8 | checkbox9 | checkbox10 | checkbox11 | checkbox12 | checkbox13 | checkbox14 | checkbox15 | checkbox16) != 0) {
                axios({
                    method: 'post',
                    url: "http://localhost:8080/gTControlSDLC1",
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    params: {
                        pAdjustment: custom,
                        ninValue: ninValue,

                    }
                }).then((res) => {
                    let a = res.data;
                    console.log('data this', a, res.data)
                }).catch(error => console.log('error is', error));
            }

            else {
                alert('自定义模式下必须选中阵远组！')
            }
        }

        ///其他模式
        else {
            axios({
                method: 'post',
                url: "http://localhost:8080/gTControlSDLC1",
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                params: {
                    pAdjustment: custom,
                }
            }).then((res) => {
                let a = res.data;
                console.log('data this', a, res.data)
                // console.log('444444444', a, res.data)
            }).catch(error => console.log('error is', error));
        }

    }

}

