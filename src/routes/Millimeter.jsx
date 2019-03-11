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
import { Button } from 'antd';
import ECMLayoutSide from '../components/PopUp/ECMLayoutSide';
import Radar_LlayoutSide from '../components/PopUp/Radar_LlayoutSide';
import RadarSCSingelStateWindow from '../components/PopUp/Radar_SC/RadarSCSingelStateWindow';
import Radar_SCLayoutSide from '../components/PopUp/Radar_SCLayoutSide';

export default class Millimeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            ToggleOnElectric: "1",//电源开为1，电源关为0
            ToggleOnExtension: "2", //发射开为2，发射关为4
            Ebgcolor: '',
            Pbgcolor: '',
            Tbgcolor: '',
            SupplyfontColor: '#BBC4DA',
            launchfontColor: '#BBC4DA',
            powerfontColor: '#BBC4DA',
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
            SupplyfontColor: '#56AFFF'

        })
    }
    handlemoveEMouse = () => {
        this.setState({
            Ebgcolor: '',
            SupplyfontColor: '#BBC4DA'
        })
    }
    handleenterTMouse = () => {
        this.setState({
            Tbgcolor: '#141f3e',
            launchfontColor: '#56AFFF'
        })
    }
    handlemoveTMouse = () => {
        this.setState({
            Tbgcolor: '',
            launchfontColor: '#BBC4DA'

        })
    }
    handleenterPMouse = () => {
        this.setState({
            Pbgcolor: '#141f3e',
            powerfontColor: '#56AFFF'
        })
    }
    handlemovePMouse = () => {
        this.setState({
            Pbgcolor: '',
            powerfontColor: '#BBC4DA'

        })
    }

    render() {
        console.log(this.state.ToggleOnExtension)
        return (
            <Fragment>
                <div className={styles.ToolCol}>
                    <div className={styles.ToolButton} >
                        {/* 开电源 */}
                        {/* <div
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
                        </div> */}
                        {/* 开发射 */}
                        <div
                            className={styles.FodderButton}
                            onClick={this.handleToggleClickExtension}
                            onMouseEnter={this.handleenterEMouse}
                            onMouseLeave={this.handlemoveEMouse}

                            style={{
                                color: this.state.SupplyfontColor
                            }}
                        >
                            <div className={styles.menuImag} style={{ background: this.state.Ebgcolor }}>
                                <div className={styles.Image_Area} >
                                    <img src={require('../assets//071.png')} className={styles.ElecImage} alt='图片' />
                                </div>
                                <div className={styles.Image_Power} style={{ background: this.state.Ebgcolor }}>
                                    <span className={styles.Power}>{this.state.ToggleOnExtension === '2' ? '低频开' : '低频关'}</span>
                                </div>
                            </div>
                        </div>
                        {/* 高频 */}
                        <div
                            className={styles.FodderButton}
                            onClick={this.handleToggleClickExtension}
                            onMouseEnter={this.handleenterTMouse}
                            onMouseLeave={this.handlemoveTMouse}
                            style={{
                                color: this.state.launchfontColor
                            }}
                        >
                            <div className={styles.menuImag} style={{ background: this.state.Tbgcolor }}>
                                <div className={styles.Image_Area} >
                                    <img src={require('../assets//071.png')} className={styles.ElecImage} alt='图片' />
                                </div>
                                <div className={styles.Image_Power} style={{ background: this.state.Tbgcolor }}>
                                    <span className={styles.Power}>{this.state.ToggleOnExtension === '2' ? '高频开' : '高频关'}</span>
                                </div>
                            </div>
                        </div>
                        {/* 功率调整 */}
                        <div
                            className={styles.FodderButton}
                            onClick={this.handleClick}
                            onMouseEnter={this.handleenterPMouse}
                            onMouseLeave={this.handlemovePMouse}
                            style={{
                                color: this.state.powerfontColor
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

                        </div>
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
                    <MillimeterWaveLayoutSide />
                    {/* 31号站（雷达干扰站X/Ku）     <RaderXkuLayoutSide/>  */}

                    {/* <ScLayoutSide/> */}
                    {/* <ECMLayoutSide/> */}
                    {/* <Radar_LlayoutSide/> */}
                    {/* <Radar_SCLayoutSide/> */}
                    <div className={styles.Layout_PowerAdjustmentWindow} style={{ height: '760px' }}>
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
            customzdylow: '',
          
            checkbox1: '0',
            checkbox2: '0',
            checkbox3: '0',
            checkbox4: '0',
            checkbox5: '0',
            checkbox6: '0',
            checkbox7: '0',
            checkbox8: '0',
            checkbox9: '0',
            checkbox10: '0',
            checkbox11: '0',
            checkbox12: '0',
            checkbox13: '0',
            checkbox14: '0',
            checkbox15: '0',
            checkbox16: '0',
            show1:true,     show2:true,     show3:true,     show4:true,     show5:true,     show6:true,     show7:true,    show8:true,      
            show9:true,     show10:true,     show11:true,     show12:true,     show13:true,     show14:true,     show15:true,    show16:true,     
            show17:true,     show18:true,     show19:true,     show20:true,     show21:true,     show22:true,     show23:true,    show24:true,        
            show25:true,     show26:true,     show27:true,     show28:true,     show29:true,     show30:true,     show31:true,    show32:true,  
            show33:true,     show34:true,     show35:true,     show36:true,     show37:true,     show38:true,     show39:true,    show40:true,   
            show41:true,     show42:true,     show43:true,     show44:true,     show45:true,     show46:true,     show47:true,    show48:true, 
            show49:true,     show50:true,     show51:true,     show52:true,     show53:true,     show54:true,     show55:true,    show56:true,     
            show57:true,     show58:true,     show59:true,     show60:true,     show61:true,     show62:true,     show63:true,    show64:true,
            showheight1:true,     showheight2:true,     showheight3:true,     showheight4:true,     showheight5:true,     showheight6:true,     showheight7:true,    showheight8:true,      
            showheight9:true,     showheight10:true,     showheight11:true,     showheight12:true,     showheight13:true,     showheight14:true,     showheight15:true,    showheight16:true,     
            showheight17:true,     showheight18:true,     showheight19:true,     showheight20:true,     showheight21:true,     showheight22:true,     showheight23:true,    showheight24:true,        
            showheight25:true,     showheight26:true,     showheight27:true,     showheight28:true,     showheight29:true,     showheight30:true,     showheight31:true,    showheight32:true,  
            showheight33:true,     showheight34:true,     showheight35:true,     showheight36:true,     showheight37:true,     showheight38:true,     showheight39:true,    showheight40:true,   
            showheight41:true,     showheight42:true,     showheight43:true,     showheight44:true,     showheight45:true,     showheight46:true,     showheight47:true,    showheight48:true, 
            showheight49:true,     showheight50:true,     showheight51:true,     showheight52:true,     showheight53:true,     showheight54:true,     showheight55:true,    showheight56:true,     
            showheight57:true,     showheight58:true,     showheight59:true,     showheight60:true,     showheight61:true,     showheight62:true,     showheight63:true,    showheight64:true,      
            arrtuple: false,//默认隐藏阵元组
            arrtuplelow: false //默认隐藏阵元组

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
            arrtuple: false
        })
    }
    //选择自定义模式，显示多组阵元组
    handleCustomChange = (e) => {
        this.setState({
            customzdy: e.target.value,
            arrtuple: true,
            arrtuplelow: false,
            show1:true,     show2:true,     show3:true,     show4:true,     show5:true,     show6:true,     show7:true,    show8:true,      
            show9:true,     show10:true,     show11:true,     show12:true,     show13:true,     show14:true,     show15:true,    show16:true,     
            show17:true,     show18:true,     show19:true,     show20:true,     show21:true,     show22:true,     show23:true,    show24:true,        
            show25:true,     show26:true,     show27:true,     show28:true,     show29:true,     show30:true,     show31:true,    show32:true,  
            show33:true,     show34:true,     show35:true,     show36:true,     show37:true,     show38:true,     show39:true,    show40:true,   
            show41:true,     show42:true,     show43:true,     show44:true,     show45:true,     show46:true,     show47:true,    show48:true, 
            show49:true,     show50:true,     show51:true,     show52:true,     show53:true,     show54:true,     show55:true,    show56:true,     
            show57:true,     show58:true,     show59:true,     show60:true,     show61:true,     show62:true,     show63:true,    show64:true,  

        })
    }
   
    handleCustomChangelow = (e) => {
        this.setState({
            customzdy: e.target.value,
            arrtuple: false,
            arrtuplelow: true,
            show1:true,     show2:true,     show3:true,     show4:true,     show5:true,     show6:true,     show7:true,    show8:true,      
            show9:true,     show10:true,     show11:true,     show12:true,     show13:true,     show14:true,     show15:true,    show16:true,     
            show17:true,     show18:true,     show19:true,     show20:true,     show21:true,     show22:true,     show23:true,    show24:true,        
            show25:true,     show26:true,     show27:true,     show28:true,     show29:true,     show30:true,     show31:true,    show32:true,  
            show33:true,     show34:true,     show35:true,     show36:true,     show37:true,     show38:true,     show39:true,    show40:true,   
            show41:true,     show42:true,     show43:true,     show44:true,     show45:true,     show46:true,     show47:true,    show48:true, 
            show49:true,     show50:true,     show51:true,     show52:true,     show53:true,     show54:true,     show55:true,    show56:true,     
            show57:true,     show58:true,     show59:true,     show60:true,     show61:true,     show62:true,     show63:true,    show64:true,  

        })
    }
    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
   
        return (
            //功率
            <div>
                <Draggable handle="strong" {...dragHandlers}>
                    <div hidden={this.props.hidden} className={styles.PowerAdjustmentWindow} style={{ width: '715px', maxHeight: '719px', color:'#666666'}}>
                        <strong >
                            <div className={styless.PopUpWindow_title}>
                                <span>功率调整</span>
                                {/* <div style={{ diaplay: 'inline-block', float: 'right', margin: '0px 10px' }} onClick={this.handleBtnCloseClicke}> */}
                                <img src={require('../assets/closeWindow.png')} alt='图片' onClick={this.handleBtnCloseClicke} className={styless.Close_Window} />
                            </div>
                        </strong >
                        <div className={styles.content} style={{width:'644px',height:'310px',paddingTop:'10px'}} >
                            {/* <div className={style.custom} style={{ width: '156px', maxHeight: '578px', margin: "30px 0px 20px 30px" }}>
                                <input type='radio' name="radiobutton" onClick={this.handleCustomChangelow} value="4" />低频
                                {this.state.arrtuplelow ?this.renderArrayTuple() : null}
                            </div>

                            <div className={style.custom} style={{ width: '127px', maxHeight: '578px', margin: "30px 30px 20px 0px" }}>
                                <input type='radio' name="radiobutton" onClick={this.handleCustomChange} value="0" />高频
 
                                {this.state.arrtuple ? this.renderArrayTuple() : null}

                            </div> */}
                            <div>
                            <div style={{
                                borderRadius: "2px",width:'312px', border: '1px solid #bdcddc',
                                padding: '10px 10px', position: 'relative',float:'left'
                            }}>
                            <div style={{       padding:'0 5px 0 5px', top: '-12px', fontSize: '12px', height: '21px', position: 'absolute', background: '100%  ,center ,#FFFFFF' }}>频率(18Hz-28Hz)</div>
                            
                            <div style={{ marginTop: '5px', display: 'inline-block' }}>
                <input id='checkbox1' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show1} />阵元组01 &nbsp;
                <input id='checkbox17' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show17}/>阵元组17 &nbsp;
                <input id='checkbox33' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show33}/>阵元组33 &nbsp;
                <input id='checkbox49' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show49}/>阵元组49 &nbsp;<br />
                <input id='checkbox2' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show2}/>阵元组02 &nbsp;
                <input id='checkbox18' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show18}/>阵元组18 &nbsp;
                <input id='checkbox34' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show34}/>阵元组34 &nbsp;
                <input id='checkbox50' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show50}/>阵元组50 &nbsp;<br />
                <input id='checkbox3' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show3}/>阵元组03 &nbsp;
                <input id='checkbox19' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show19}/>阵元组19 &nbsp;
                <input id='checkbox35' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show35}/>阵元组35 &nbsp;
                <input id='checkbox51' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show51}/>阵元组51 &nbsp;<br />
                <input id='checkbox4' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show4}/>阵元组04 &nbsp;
                <input id='checkbox20' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show20}/>阵元组20 &nbsp;
                <input id='checkbox36' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show36}/>阵元组36 &nbsp;
                <input id='checkbox52' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show52}/>阵元组52 &nbsp;<br />
                <input id='checkbox5' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show5}/>阵元组05 &nbsp;
                <input id='checkbox21' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show21} />阵元组21 &nbsp;
                <input id='checkbox37' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show37}/>阵元组37 &nbsp;
                <input id='checkbox53' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show53}/>阵元组53 &nbsp;<br />
                <input id='checkbox6' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show6}/>阵元组06 &nbsp;
                <input id='checkbox22' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show22}/>阵元组22 &nbsp;
                <input id='checkbox38' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show38}/>阵元组38 &nbsp;
                <input id='checkbox54' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show54}/>阵元组54 &nbsp;<br />
                <input id='checkbox7' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show7}/>阵元组07 &nbsp;
                <input id='checkbox23' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show23}/>阵元组23 &nbsp;
                <input id='checkbox39' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show39}/>阵元组39 &nbsp;
                <input id='checkbox55' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show55}/>阵元组55 &nbsp;<br />
                <input id='checkbox8' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show8}/>阵元组08 &nbsp;
                <input id='checkbox24' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show24}/>阵元组24 &nbsp;
                <input id='checkbox40' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show40}/>阵元组40 &nbsp;
                <input id='checkbox56' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show56}/>阵元组56 &nbsp;<br />
                <input id='checkbox9' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show9} />阵元组09 &nbsp;
                <input id='checkbox25' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show25}/>阵元组25 &nbsp;
                <input id='checkbox41' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show41}/>阵元组41 &nbsp;
                <input id='checkbox57' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show57}/>阵元组57 &nbsp;<br />
                <input id='checkbox10' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show10} />阵元组10 &nbsp;
                <input id='checkbox26' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show26}/>阵元组26 &nbsp;
                <input id='checkbox42' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show42}/>阵元组42 &nbsp;
                <input id='checkbox58' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show58}/>阵元组58 &nbsp;<br />

                <input id='checkbox11' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show11}/>阵元组11 &nbsp;
                <input id='checkbox27' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show27}/>阵元组27 &nbsp;
                <input id='checkbox43' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show43}/>阵元组43 &nbsp;
                <input id='checkbox59' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTuple} checked={this.state.show59}/>阵元组59 &nbsp;<br />
                <input id='checkbox12' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show12}/>阵元组12 &nbsp;
                <input id='checkbox28' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show28}/>阵元组28 &nbsp;
                <input id='checkbox44' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTuple} checked={this.state.show44}/>阵元组44 &nbsp;
                <input id='checkbox60' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTuple}  checked={this.state.show60}/>阵元组60 &nbsp;<br /> 
                <input id='checkbox13' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTuple} checked={this.state.show13}/>阵元组13 &nbsp;
                <input id='checkbox29' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTuple} checked={this.state.show29}/>阵元组29 &nbsp;
                <input id='checkbox45' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTuple} checked={this.state.show45}/>阵元组45 &nbsp;
                <input id='checkbox61' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTuple} checked={this.state.show61} />阵元组61 &nbsp;<br />           
                <input id='checkbox14' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTuple} checked={this.state.show14}/>阵元组14 &nbsp;
                <input id='checkbox30' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTuple} checked={this.state.show30}/>阵元组30 &nbsp;
                <input id='checkbox46' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTuple} checked={this.state.show46}/>阵元组46 &nbsp;
                <input id='checkbox62' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTuple} checked={this.state.show62}/>阵元组62 &nbsp;<br />
                 <input id='checkbox15' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTuple} checked={this.state.show15}/>阵元组15 &nbsp;
                <input id='checkbox31' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTuple} checked={this.state.show31}/>阵元组31 &nbsp;             
                 <input id='checkbox47' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show47}/>阵元组47 &nbsp; 
                 <input id='checkbox63' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTuple} checked={this.state.show63}/>阵元组63 &nbsp;<br />
                <input id='checkbox16' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTuple} checked={this.state.show16}/>阵元组16  &nbsp;
<input id='checkbox32' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show32}/>阵元组32 &nbsp;  
                <input id='checkbox48' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show48}/>阵元组48  &nbsp;
                <input id='checkbox64' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTuple} checked={this.state.show64} />阵元组64 &nbsp;<br />

               
</div>
                        </div>
                        <div style={{
                                borderRadius: "2px",width:'312px', border: '1px solid #bdcddc',
                                padding: '10px 10px', position: 'relative',float:'left',marginLeft:'20px'
                            }}>
                            <div style={{       padding:'0 5px 0 5px', top: '-12px', fontSize: '12px', height: '21px', position: 'absolute', background: '100%  ,center ,#FFFFFF' }}>频率(28Hz-40Hz)</div>
                            
                            <div style={{ marginTop: '5px', display: 'inline-block' }}>
                            <input id='checkbox1' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight1} />阵元组01 &nbsp;
                <input id='checkbox17' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight17}/>阵元组17 &nbsp;
                <input id='checkbox33' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight33}/>阵元组33 &nbsp;
                <input id='checkbox49' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight49}/>阵元组49 &nbsp;<br />
                <input id='checkbox2' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight2}/>阵元组02 &nbsp;
                <input id='checkbox18' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight18}/>阵元组18 &nbsp;
                <input id='checkbox34' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight34}/>阵元组34 &nbsp;
                <input id='checkbox50' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight50}/>阵元组50 &nbsp;<br />
                <input id='checkbox3' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight3}/>阵元组03 &nbsp;
                <input id='checkbox19' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight19}/>阵元组19 &nbsp;
                <input id='checkbox35' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight35}/>阵元组35 &nbsp;
                <input id='checkbox51' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight51}/>阵元组51 &nbsp;<br />
                <input id='checkbox4' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight4}/>阵元组04 &nbsp;
                <input id='checkbox20' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight20}/>阵元组20 &nbsp;
                <input id='checkbox36' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight36}/>阵元组36 &nbsp;
                <input id='checkbox52' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight52}/>阵元组52 &nbsp;<br />
                <input id='checkbox5' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight5}/>阵元组05 &nbsp;
                <input id='checkbox21' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight21} />阵元组21 &nbsp;
                <input id='checkbox37' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight37}/>阵元组37 &nbsp;
                <input id='checkbox53' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight53}/>阵元组53 &nbsp;<br />
                <input id='checkbox6' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight6}/>阵元组06 &nbsp;
                <input id='checkbox22' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight22}/>阵元组22 &nbsp;
                <input id='checkbox38' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight38}/>阵元组38 &nbsp;
                <input id='checkbox54' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight54}/>阵元组54 &nbsp;<br />
                <input id='checkbox7' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight7}/>阵元组07 &nbsp;
                <input id='checkbox23' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight23}/>阵元组23 &nbsp;
                <input id='checkbox39' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight39}/>阵元组39 &nbsp;
                <input id='checkbox55' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight55}/>阵元组55 &nbsp;<br />
                <input id='checkbox8' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight8}/>阵元组08 &nbsp;
                <input id='checkbox24' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight24}/>阵元组24 &nbsp;
                <input id='checkbox40' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight40}/>阵元组40 &nbsp;
                <input id='checkbox56' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight56}/>阵元组56 &nbsp;<br />
                <input id='checkbox9' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight9} />阵元组09 &nbsp;
                <input id='checkbox25' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight25}/>阵元组25 &nbsp;
                <input id='checkbox41' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight41}/>阵元组41 &nbsp;
                <input id='checkbox57' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight57}/>阵元组57 &nbsp;<br />
                <input id='checkbox10' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight10} />阵元组10 &nbsp;
                <input id='checkbox26' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight26}/>阵元组26 &nbsp;
                <input id='checkbox42' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight42}/>阵元组42 &nbsp;
                <input id='checkbox58' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight58}/>阵元组58 &nbsp;<br />

                <input id='checkbox11' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight11}/>阵元组11 &nbsp;
                <input id='checkbox27' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight27}/>阵元组27 &nbsp;
                <input id='checkbox43' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight43}/>阵元组43 &nbsp;
                <input id='checkbox59' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight59}/>阵元组59 &nbsp;<br />
                <input id='checkbox12' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight12}/>阵元组12 &nbsp;
                <input id='checkbox28' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight28}/>阵元组28 &nbsp;
                <input id='checkbox44' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight44}/>阵元组44 &nbsp;
                <input id='checkbox60' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTupleheight}  checked={this.state.showheight60}/>阵元组60 &nbsp;<br /> 
                <input id='checkbox13' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight13}/>阵元组13 &nbsp;
                <input id='checkbox29' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight29}/>阵元组29 &nbsp;
                <input id='checkbox45' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight45}/>阵元组45 &nbsp;
                <input id='checkbox61' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight61} />阵元组61 &nbsp;<br />           
                <input id='checkbox14' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight14}/>阵元组14 &nbsp;
                <input id='checkbox30' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight30}/>阵元组30 &nbsp;
                <input id='checkbox46' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight46}/>阵元组46 &nbsp;
                <input id='checkbox62' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight62}/>阵元组62 &nbsp;<br />
                 <input id='checkbox15' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight15}/>阵元组15 &nbsp;
                <input id='checkbox31' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight31}/>阵元组31 &nbsp;             
                 <input id='checkbox47' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight47}/>阵元组47 &nbsp; 
                 <input id='checkbox63' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight63}/>阵元组63 &nbsp;<br />
                <input id='checkbox16' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight16}/>阵元组16  &nbsp;
<input id='checkbox32' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight32}/>阵元组32 &nbsp;  
                <input id='checkbox48' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight48}/>阵元组48  &nbsp;
                <input id='checkbox64' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTupleheight} checked={this.state.showheight64} />阵元组64 &nbsp;<br />

</div> </div>
                        </div>
                        </div>
                        <div className={styless.FreqSheet}>
                            <div className={styless.bottom_content} style={{ marginLeft: '320px' }}>


                                <Button type="primary"  onClick={this.handleClickPost}>确定</Button>

                            </div>
                        </div>

                    </div>
                </Draggable>
            </div>
        )
    }
    renderArrayTuple() {
       let showheight64= this.state.showheight64
        return (
            <div className={style.ArrayTupleMillimeter}>
                {/* <input id='checkbox64' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTupleheight} checked={show64} />阵元组64 */}
                <input id='checkbox63' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTupleheight} checked={this.state.show63}/>阵元组63<br />
                <input id='checkbox62' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTupleheight} checked={this.state.show62}/>阵元组62
                <input id='checkbox61' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTupleheight} checked={this.state.show61} />阵元组61<br />
                <input id='checkbox60' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTupleheight}  checked={this.state.show60}/>阵元组60
                <input id='checkbox59' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTupleheight} checked={this.state.show59}/>阵元组59<br />
                <input id='checkbox58' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show58}/>阵元组58
                <input id='checkbox57' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show57}/>阵元组57<br />
                <input id='checkbox56' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show56}/>阵元组56
                <input id='checkbox55' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show55}/>阵元组55<br />
                <input id='checkbox54' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show54}/>阵元组54
                <input id='checkbox53' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show53}/>阵元组53<br />
                <input id='checkbox52' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show52}/>阵元组52
                <input id='checkbox51' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show51}/>阵元组51<br />
                <input id='checkbox50' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show50}/>阵元组50
                <input id='checkbox49' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show49}/>阵元组49<br />
                <input id='checkbox48' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show48}/>阵元组48
                <input id='checkbox47' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show47}/>阵元组47<br />
                <input id='checkbox46' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTuple} checked={this.state.show46}/>阵元组46
                <input id='checkbox45' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTuple} checked={this.state.show45}/>阵元组45<br />
                <input id='checkbox44' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTuple} checked={this.state.show44}/>阵元组44
                <input id='checkbox43' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show43}/>阵元组43<br />
                <input id='checkbox42' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show42}/>阵元组42
                <input id='checkbox41' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show41}/>阵元组41<br />
                <input id='checkbox40' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show40}/>阵元组40
                <input id='checkbox39' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show39}/>阵元组39<br />
                <input id='checkbox38' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show38}/>阵元组38
                <input id='checkbox37' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show37}/>阵元组37<br />
                <input id='checkbox36' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show36}/>阵元组36
                <input id='checkbox35' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show35}/>阵元组35<br />
                <input id='checkbox34' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show34}/>阵元组34
                <input id='checkbox33' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show33}/>阵元组33<br />
                <input id='checkbox32' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show32}/>阵元组32
                <input id='checkbox31' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTuple} checked={this.state.show31}/>阵元组31<br />
                <input id='checkbox30' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTuple} checked={this.state.show30}/>阵元组30
                <input id='checkbox29' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTuple} checked={this.state.show29}/>阵元组29<br />
                <input id='checkbox28' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show28}/>阵元组28
                <input id='checkbox27' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show27}/>阵元组27<br />
                <input id='checkbox26' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show26}/>阵元组26
                <input id='checkbox25' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show25}/>阵元组25<br />
                <input id='checkbox24' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show24}/>阵元组24
                <input id='checkbox23' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show23}/>阵元组23<br />
                <input id='checkbox22' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show22}/>阵元组22
                <input id='checkbox21' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show21} />阵元组21<br />
                <input id='checkbox20' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show20}/>阵元组20
                <input id='checkbox19' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show19}/>阵元组19<br />
                <input id='checkbox18' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show18}/>阵元组18
                <input id='checkbox17' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show17}/>阵元组17<br />
                <input id='checkbox16' type="checkbox" name="checkbox" value="16" onChange={this.handleClickSelectTuple} checked={this.state.show16}/>阵元组16
                <input id='checkbox15' type="checkbox" name="checkbox" value="15" onChange={this.handleClickSelectTuple} checked={this.state.show15}/>阵元组15<br />
                <input id='checkbox14' type="checkbox" name="checkbox" value="14" onChange={this.handleClickSelectTuple} checked={this.state.show14}/>阵元组14
                <input id='checkbox13' type="checkbox" name="checkbox" value="13" onChange={this.handleClickSelectTuple} checked={this.state.show13}/>阵元组13<br />
                <input id='checkbox12' type="checkbox" name="checkbox" value="12" onChange={this.handleClickSelectTuple} checked={this.state.show12}/>阵元组12
                <input id='checkbox11' type="checkbox" name="checkbox" value="11" onChange={this.handleClickSelectTuple} checked={this.state.show11}/>阵元组11<br />
                <input id='checkbox10' type="checkbox" name="checkbox" value="10" onChange={this.handleClickSelectTuple} checked={this.state.show10} />阵元组10
                <input id='checkbox9' type="checkbox" name="checkbox" value="9" onChange={this.handleClickSelectTuple} checked={this.state.show9} />阵元组9<br />
                <input id='checkbox8' type="checkbox" name="checkbox" value="8" onChange={this.handleClickSelectTuple} checked={this.state.show8}/>阵元组8
                <input id='checkbox7' type="checkbox" name="checkbox" value="7" onChange={this.handleClickSelectTuple} checked={this.state.show7}/>阵元组7<br />
                <input id='checkbox6' type="checkbox" name="checkbox" value="6" onChange={this.handleClickSelectTuple} checked={this.state.show6}/>阵元组6
                <input id='checkbox5' type="checkbox" name="checkbox" value="5" onChange={this.handleClickSelectTuple} checked={this.state.show5}/>阵元组5<br />
                <input id='checkbox4' type="checkbox" name="checkbox" value="4" onChange={this.handleClickSelectTuple} checked={this.state.show4}/>阵元组4
                <input id='checkbox3' type="checkbox" name="checkbox" value="3" onChange={this.handleClickSelectTuple} checked={this.state.show3}/>阵元组3<br />
                <input id='checkbox2' type="checkbox" name="checkbox" value="2" onChange={this.handleClickSelectTuple} checked={this.state.show2}/>阵元组2
                <input id='checkbox1' type="checkbox" name="checkbox" value="1" onChange={this.handleClickSelectTuple} checked={this.state.show1} />阵元组1
            </div>

        )
        }
   
    //         </div>

    //     )

    // }
    handleClickSelectTupleheight=(e)=>{
        console.log(e.target.id)
        const checkId=e.target.id
         if(checkId=='checkbox1'){
             this.setState({
                showheight1:! this.state.showheight1
             })
         }else if(checkId=='checkbox2'){
          this.setState({
              showheight2:! this.state.showheight2
          })  
         }else if(checkId=='checkbox3'){
          this.setState({
              showheight3:! this.state.showheight3
          })  
         }else if(checkId=='checkbox4'){
          this.setState({
              showheight4:! this.state.showheight4
          })  
         }else if(checkId=='checkbox5'){
          this.setState({
              showheight5:! this.state.showheight5
          })  
         }else if(checkId=='checkbox6'){
          this.setState({
              showheight6:! this.state.showheight6
          })  
         }else if(checkId=='checkbox7'){
          this.setState({
              showheight7:! this.state.showheight7
          })  
         }else if(checkId=='checkbox8'){
          this.setState({
              showheight8:! this.state.showheight8
          })  
         }else if(checkId=='checkbox9'){
          this.setState({
              showheight9:! this.state.showheight9
          })  
         }else if(checkId=='checkbox10'){
          this.setState({
              showheight10:! this.state.showheight10
          })  
         }else if(checkId=='checkbox11'){
          this.setState({
              showheight11:! this.state.showheight11
          })  
         }else if(checkId=='checkbox12'){
          this.setState({
              showheight12:! this.state.showheight12
          })  
         }else if(checkId=='checkbox13'){
          this.setState({
              showheight13:! this.state.showheight13
          })  
         }else if(checkId=='checkbox14'){
          this.setState({
              showheight14:! this.state.showheight14
          })  
         }else if(checkId=='checkbox15'){
          this.setState({
              showheight15:! this.state.showheight15
          })  
         }else if(checkId=='checkbox16'){
          this.setState({
              showheight16:! this.state.showheight16
          })  
         }else if(checkId=='checkbox17'){
          this.setState({
              showheight17:! this.state.showheight17
          })  
         }else if(checkId=='checkbox18'){
          this.setState({
              showheight18:! this.state.showheight18
          })  
         }else if(checkId=='checkbox19'){
          this.setState({
              showheight19:! this.state.showheight19
          })  
         }else if(checkId=='checkbox20'){
          this.setState({
              showheight20:! this.state.showheight20
          })  
         }else if(checkId=='checkbox21'){
          this.setState({
              showheight21:! this.state.showheight21
          })  
         }else if(checkId=='checkbox22'){
          this.setState({
              showheight22:! this.state.showheight22
          })  
         }else if(checkId=='checkbox23'){
          this.setState({
              showheight23:! this.state.showheight23
          })  
         }else if(checkId=='checkbox24'){
          this.setState({
              showheight24:! this.state.showheight24
          })  
         }else if(checkId=='checkbox25'){
          this.setState({
              showheight25:! this.state.showheight25
          })  
         }else if(checkId=='checkbox26'){
          this.setState({
              showheight26:! this.state.showheight26
          })  
         }else if(checkId=='checkbox27'){
          this.setState({
              showheight27:! this.state.showheight27
          })  
         }else if(checkId=='checkbox28'){
          this.setState({
              showheight28:! this.state.showheight28
          })  
         }else if(checkId=='checkbox29'){
          this.setState({
              showheight29:! this.state.showheight29
          })  
         }else if(checkId=='checkbox30'){
          this.setState({
              showheight30:! this.state.showheight30
          })  
         }else if(checkId=='checkbox31'){
          this.setState({
              showheight31:! this.state.showheight31
          })  
         }else if(checkId=='checkbox32'){
          this.setState({
              showheight32:! this.state.showheight32
          })  
         }else if(checkId=='checkbox33'){
          this.setState({
              showheight33:! this.state.showheight33
          })  
         }else if(checkId=='checkbox34'){
          this.setState({
              showheight34:! this.state.showheight34
          })  
         }else if(checkId=='checkbox35'){
          this.setState({
              showheight35:! this.state.showheight35
          })  
         }else if(checkId=='checkbox36'){
          this.setState({
              showheight36:! this.state.showheight36
          })  
         }else if(checkId=='checkbox37'){
          this.setState({
              showheight37:! this.state.showheight37
          })  
         }else if(checkId=='checkbox38'){
          this.setState({
              showheight38:! this.state.showheight38
          })  
         }else if(checkId=='checkbox39'){
          this.setState({
              showheight39:! this.state.showheight39
          })  
         }else if(checkId=='checkbox40'){
          this.setState({
              showheight40:! this.state.showheight40
          })  
         }else if(checkId=='checkbox41'){
          this.setState({
              showheight41:! this.state.showheight41
          })  
         }else if(checkId=='checkbox42'){
          this.setState({
              showheight42:! this.state.showheight42
          })  
         }else if(checkId=='checkbox43'){
          this.setState({
              showheight43:! this.state.showheight43
          })  
         }else if(checkId=='checkbox44'){
          this.setState({
              showheight44:! this.state.showheight44
          })  
         }else if(checkId=='checkbox45'){
          this.setState({
              showheight45:! this.state.showheight45
          })  
         }else if(checkId=='checkbox46'){
          this.setState({
              showheight46:! this.state.showheight46
          })  
         }else if(checkId=='checkbox47'){
          this.setState({
              showheight47:! this.state.showheight47
          })  
         }else if(checkId=='checkbox48'){
          this.setState({
              showheight48:! this.state.showheight48
          })  
         }else if(checkId=='checkbox49'){
          this.setState({
              showheight49:! this.state.showheight49
          })  
         }else if(checkId=='checkbox50'){
          this.setState({
              showheight50:! this.state.showheight50
          })  
         }else if(checkId=='checkbox51'){
          this.setState({
              showheight51:! this.state.showheight51
          })  
         }else if(checkId=='checkbox52'){
          this.setState({
              showheight52:! this.state.showheight52
          })  
         }else if(checkId=='checkbox53'){
          this.setState({
              showheight53:! this.state.showheight53
          })  
         }else if(checkId=='checkbox54'){
          this.setState({
              showheight54:! this.state.showheight54
          })  
         }else if(checkId=='checkbox55'){
          this.setState({
              showheight55:! this.state.showheight55
          })  
         }else if(checkId=='checkbox56'){
          this.setState({
              showheight56:! this.state.showheight56
          })  
         }else if(checkId=='checkbox57'){
          this.setState({
              showheight57:! this.state.showheight57
          })  
         }else if(checkId=='checkbox58'){
          this.setState({
              showheight58:! this.state.showheight58
          })  
         }else if(checkId=='checkbox59'){
          this.setState({
              showheight59:! this.state.showheight59
          })  
         }else if(checkId=='checkbox60'){
          this.setState({
              showheight60:! this.state.showheight60
          })  
         }else if(checkId=='checkbox61'){
          this.setState({
              showheight61:! this.state.showheight61
          })  
         }else if(checkId=='checkbox62'){
          this.setState({
              showheight62:! this.state.showheight62
          })  
         }else if(checkId=='checkbox63'){
          this.setState({
              showheight63:! this.state.showheight63
          })  
         }else if(checkId=='checkbox64'){
          this.setState({
              showheight64:! this.state.showheight64
          })  
         }
    }
     handleClickSelectTuple = (e) => {
        console.log(e.target.id)
          const checkId=e.target.id
           if(checkId=='checkbox1'){
               this.setState({
                   show1:! this.state.show1
               })
           }else if(checkId=='checkbox2'){
            this.setState({
                show2:! this.state.show2
            })  
           }else if(checkId=='checkbox3'){
            this.setState({
                show3:! this.state.show3
            })  
           }else if(checkId=='checkbox4'){
            this.setState({
                show4:! this.state.show4
            })  
           }else if(checkId=='checkbox5'){
            this.setState({
                show5:! this.state.show5
            })  
           }else if(checkId=='checkbox6'){
            this.setState({
                show6:! this.state.show6
            })  
           }else if(checkId=='checkbox7'){
            this.setState({
                show7:! this.state.show7
            })  
           }else if(checkId=='checkbox8'){
            this.setState({
                show8:! this.state.show8
            })  
           }else if(checkId=='checkbox9'){
            this.setState({
                show9:! this.state.show9
            })  
           }else if(checkId=='checkbox10'){
            this.setState({
                show10:! this.state.show10
            })  
           }else if(checkId=='checkbox11'){
            this.setState({
                show11:! this.state.show11
            })  
           }else if(checkId=='checkbox12'){
            this.setState({
                show12:! this.state.show12
            })  
           }else if(checkId=='checkbox13'){
            this.setState({
                show13:! this.state.show13
            })  
           }else if(checkId=='checkbox14'){
            this.setState({
                show14:! this.state.show14
            })  
           }else if(checkId=='checkbox15'){
            this.setState({
                show15:! this.state.show15
            })  
           }else if(checkId=='checkbox16'){
            this.setState({
                show16:! this.state.show16
            })  
           }else if(checkId=='checkbox17'){
            this.setState({
                show17:! this.state.show17
            })  
           }else if(checkId=='checkbox18'){
            this.setState({
                show18:! this.state.show18
            })  
           }else if(checkId=='checkbox19'){
            this.setState({
                show19:! this.state.show19
            })  
           }else if(checkId=='checkbox20'){
            this.setState({
                show20:! this.state.show20
            })  
           }else if(checkId=='checkbox21'){
            this.setState({
                show21:! this.state.show21
            })  
           }else if(checkId=='checkbox22'){
            this.setState({
                show22:! this.state.show22
            })  
           }else if(checkId=='checkbox23'){
            this.setState({
                show23:! this.state.show23
            })  
           }else if(checkId=='checkbox24'){
            this.setState({
                show24:! this.state.show24
            })  
           }else if(checkId=='checkbox25'){
            this.setState({
                show25:! this.state.show25
            })  
           }else if(checkId=='checkbox26'){
            this.setState({
                show26:! this.state.show26
            })  
           }else if(checkId=='checkbox27'){
            this.setState({
                show27:! this.state.show27
            })  
           }else if(checkId=='checkbox28'){
            this.setState({
                show28:! this.state.show28
            })  
           }else if(checkId=='checkbox29'){
            this.setState({
                show29:! this.state.show29
            })  
           }else if(checkId=='checkbox30'){
            this.setState({
                show30:! this.state.show30
            })  
           }else if(checkId=='checkbox31'){
            this.setState({
                show31:! this.state.show31
            })  
           }else if(checkId=='checkbox32'){
            this.setState({
                show32:! this.state.show32
            })  
           }else if(checkId=='checkbox33'){
            this.setState({
                show33:! this.state.show33
            })  
           }else if(checkId=='checkbox34'){
            this.setState({
                show34:! this.state.show34
            })  
           }else if(checkId=='checkbox35'){
            this.setState({
                show35:! this.state.show35
            })  
           }else if(checkId=='checkbox36'){
            this.setState({
                show36:! this.state.show36
            })  
           }else if(checkId=='checkbox37'){
            this.setState({
                show37:! this.state.show37
            })  
           }else if(checkId=='checkbox38'){
            this.setState({
                show38:! this.state.show38
            })  
           }else if(checkId=='checkbox39'){
            this.setState({
                show39:! this.state.show39
            })  
           }else if(checkId=='checkbox40'){
            this.setState({
                show40:! this.state.show40
            })  
           }else if(checkId=='checkbox41'){
            this.setState({
                show41:! this.state.show41
            })  
           }else if(checkId=='checkbox42'){
            this.setState({
                show42:! this.state.show42
            })  
           }else if(checkId=='checkbox43'){
            this.setState({
                show43:! this.state.show43
            })  
           }else if(checkId=='checkbox44'){
            this.setState({
                show44:! this.state.show44
            })  
           }else if(checkId=='checkbox45'){
            this.setState({
                show45:! this.state.show45
            })  
           }else if(checkId=='checkbox46'){
            this.setState({
                show46:! this.state.show46
            })  
           }else if(checkId=='checkbox47'){
            this.setState({
                show47:! this.state.show47
            })  
           }else if(checkId=='checkbox48'){
            this.setState({
                show48:! this.state.show48
            })  
           }else if(checkId=='checkbox49'){
            this.setState({
                show49:! this.state.show49
            })  
           }else if(checkId=='checkbox50'){
            this.setState({
                show50:! this.state.show50
            })  
           }else if(checkId=='checkbox51'){
            this.setState({
                show51:! this.state.show51
            })  
           }else if(checkId=='checkbox52'){
            this.setState({
                show52:! this.state.show52
            })  
           }else if(checkId=='checkbox53'){
            this.setState({
                show53:! this.state.show53
            })  
           }else if(checkId=='checkbox54'){
            this.setState({
                show54:! this.state.show54
            })  
           }else if(checkId=='checkbox55'){
            this.setState({
                show55:! this.state.show55
            })  
           }else if(checkId=='checkbox56'){
            this.setState({
                show56:! this.state.show56
            })  
           }else if(checkId=='checkbox57'){
            this.setState({
                show57:! this.state.show57
            })  
           }else if(checkId=='checkbox58'){
            this.setState({
                show58:! this.state.show58
            })  
           }else if(checkId=='checkbox59'){
            this.setState({
                show59:! this.state.show59
            })  
           }else if(checkId=='checkbox60'){
            this.setState({
                show60:! this.state.show60
            })  
           }else if(checkId=='checkbox61'){
            this.setState({
                show61:! this.state.show61
            })  
           }else if(checkId=='checkbox62'){
            this.setState({
                show62:! this.state.show62
            })  
           }else if(checkId=='checkbox63'){
            this.setState({
                show63:! this.state.show63
            })  
           }else if(checkId=='checkbox64'){
            this.setState({
                show64:! this.state.show64
            })  
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
        if (customzdy ==0) {
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

