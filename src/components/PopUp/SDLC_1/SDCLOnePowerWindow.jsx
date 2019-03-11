import React, { Component, Fragment } from 'react'
import Draggable from 'react-draggable'
import styles from '../index.css'
import redLight from '../../../assets/png133_099.png'
import whiteLight from '../../../assets/2_choice.png'
import greenLight from '../../../assets/png133_020.png'
import { connect } from 'dva'
import styless from '../../../routes/styles.less'

@connect(({ socketio }) => ({
    socketio
  }))
export default class SDCLOnePowerWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // display_name: 'block', //此状态机为display的取值
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

    //调用父组件关闭按钮方法
    handleBtnCloseClicke = (e) => {
        this.props.closeWinodow();
    }

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        let lights = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7', 'light8', 'light9', 'light10', 'light11', 'light12', 'light13', 'light14', 'light15', 'light16',
        'light17', 'light18', 'light19', 'light20', 'light21', 'light22', 'light23', 'light24', 'light25', 'light26', 'light27', 'light28', 'light29', 'light30', 'light31', 'light32', 'light33',
        'light34', 'light35', 'light36', 'light37', 'light38', 'light39', 'light40', 'light41', 'light42', 'light43', 'light44', 'light45', 'light46', 'light47', 'light48', 'light49',
        'light50', 'light51', 'light52', 'light53', 'light54', 'light55', 'light56', 'light57', 'light58', 'light59', 'light60', 'light61', 'light62', 'light63', 'light64', 'light65',
        'light66', 'light67', 'light68', 'light69', 'light70', 'light71', 'light72', 'light73', 'light74', 'light75', 'light76', 'light77', 'light78', 'light79', 'light80',
        'light81', 'light82', 'light83', 'light84', 'light85', 'light86', 'light87', 'light88', 'light89', 'light90', 'light91', 'light92', 'light93', 'light94', 'light95', 'light96', 'light97', 'light98', 'light99', 'light100',
        'light101', 'light102', 'light103', 'light104', 'light105', 'light106', 'light107', 'light108', 'light109', 'light110', 'light111', 'light112', 'light113', 'light114', 'light115', 'light116', 'light117', 'light118', 'light119', 'light120',
        'light121', 'light122', 'light123', 'light124', 'light125', 'light126', 'light127', 'light128'];
  
        for(let i=0;i<lights.length;i++ )
        lights[i] = whiteLight;
        
      if (this.props.socketio.data != null&&this.props.socketio.data.length>0) {
          for(let i=0;i<this.props.socketio.data[1].length;i++){
            if(this.props.socketio.data[1][i].outputPowerIndication ===1){
              lights[i] = redLight;
            }
            else if(this.props.socketio.data[1][i].outputPowerIndication ===0)
            lights[i] =greenLight;
          }
        }
        return (
            // 功率
            <Fragment>
                <Draggable handle="strong" {...dragHandlers}>
                    <div className={styles.Light_Hundred}
                        hidden={this.props.hidden}
                    >
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
                        <span className={styles.Light_Span}>功率33</span><span className={styles.Light_Span}>功率34</span>
                        <span className={styles.Light_Span}>功率35</span><span className={styles.Light_Span}>功率36</span>
                        <span className={styles.Light_Span}>功率37</span><span className={styles.Light_Span}>功率38</span>
                        <span className={styles.Light_Span}>功率39</span><span className={styles.Light_Span}>功率40</span>
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
                        <span className={styles.Light_Span}>功率41</span>
                        <span className={styles.Light_Span}>功率42</span><span className={styles.Light_Span}>功率43</span>
                        <span className={styles.Light_Span}>功率44</span><span className={styles.Light_Span}>功率45</span>
                        <span className={styles.Light_Span}>功率46</span><span className={styles.Light_Span}>功率47</span>
                        <span className={styles.Light_Span}>功率48</span>
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
                        <span className={styles.Light_Span}>功率49</span><span className={styles.Light_Span}>功率50</span>
                        <span className={styles.Light_Span}>功率51</span><span className={styles.Light_Span}>功率52</span>
                        <span className={styles.Light_Span}>功率53</span><span className={styles.Light_Span}>功率54</span>
                        <span className={styles.Light_Span}>功率55</span><span className={styles.Light_Span}>功率56</span>
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
                        <span className={styles.Light_Span}>功率57</span>
                        <span className={styles.Light_Span}>功率58</span>
                        <span className={styles.Light_Span}>功率59</span>
                        <span className={styles.Light_Span}>功率60</span>
                        <span className={styles.Light_Span}>功率61</span>
                        <span className={styles.Light_Span}>功率62</span>
                        <span className={styles.Light_Span}>功率63</span>
                        <span className={styles.Light_Span}>功率64</span>
                        <br />
                        <img src={lights[64]} className={styles.LightImage} alt='图片' />
                        <img src={lights[65]} className={styles.LightImage} alt='图片' />
                        <img src={lights[66]} className={styles.LightImage} alt='图片' />
                        <img src={lights[67]} className={styles.LightImage} alt='图片' />
                        <img src={lights[68]} className={styles.LightImage} alt='图片' />
                        <img src={lights[69]} className={styles.LightImage} alt='图片' />
                        <img src={lights[70]} className={styles.LightImage} alt='图片' />
                        <img src={lights[71]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功率65</span>
                        <span className={styles.Light_Span}>功率66</span>
                        <span className={styles.Light_Span}>功率67</span>
                        <span className={styles.Light_Span}>功率68</span>
                        <span className={styles.Light_Span}>功率69</span>
                        <span className={styles.Light_Span}>功率70</span>
                        <span className={styles.Light_Span}>功率71</span>
                        <span className={styles.Light_Span}>功率72</span>
                        <br />
                        <img src={lights[72]} className={styles.LightImage} alt='图片' />
                        <img src={lights[73]} className={styles.LightImage} alt='图片' />
                        <img src={lights[74]} className={styles.LightImage} alt='图片' />
                        <img src={lights[75]} className={styles.LightImage} alt='图片' />
                        <img src={lights[76]} className={styles.LightImage} alt='图片' />
                        <img src={lights[77]} className={styles.LightImage} alt='图片' />
                        <img src={lights[78]} className={styles.LightImage} alt='图片' />
                        <img src={lights[79]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功率73</span>
                        <span className={styles.Light_Span}>功率74</span>
                        <span className={styles.Light_Span}>功率75</span>
                        <span className={styles.Light_Span}>功率76</span>
                        <span className={styles.Light_Span}>功率77</span>
                        <span className={styles.Light_Span}>功率78</span>
                        <span className={styles.Light_Span}>功率79</span>
                        <span className={styles.Light_Span}>功率80</span>
                        <br />
                        <img src={lights[80]} className={styles.LightImage} alt='图片' />
                        <img src={lights[81]} className={styles.LightImage} alt='图片' />
                        <img src={lights[82]} className={styles.LightImage} alt='图片' />
                        <img src={lights[83]} className={styles.LightImage} alt='图片' />
                        <img src={lights[84]} className={styles.LightImage} alt='图片' />
                        <img src={lights[85]} className={styles.LightImage} alt='图片' />
                        <img src={lights[86]} className={styles.LightImage} alt='图片' />
                        <img src={lights[87]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功率81</span>
                        <span className={styles.Light_Span}>功率82</span>
                        <span className={styles.Light_Span}>功率83</span>
                        <span className={styles.Light_Span}>功率84</span>
                        <span className={styles.Light_Span}>功率85</span>
                        <span className={styles.Light_Span}>功率86</span>
                        <span className={styles.Light_Span}>功率87</span>
                        <span className={styles.Light_Span}>功率88</span>
                        <br />
                        <img src={lights[88]} className={styles.LightImage} alt='图片' />
                        <img src={lights[89]} className={styles.LightImage} alt='图片' />
                        <img src={lights[90]} className={styles.LightImage} alt='图片' />
                        <img src={lights[91]} className={styles.LightImage} alt='图片' />
                        <img src={lights[92]} className={styles.LightImage} alt='图片' />
                        <img src={lights[93]} className={styles.LightImage} alt='图片' />
                        <img src={lights[94]} className={styles.LightImage} alt='图片' />
                        <img src={lights[95]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功率89</span>
                        <span className={styles.Light_Span}>功率90</span>
                        <span className={styles.Light_Span}>功率91</span>
                        <span className={styles.Light_Span}>功率92</span>
                        <span className={styles.Light_Span}>功率93</span>
                        <span className={styles.Light_Span}>功率94</span>
                        <span className={styles.Light_Span}>功率95</span>
                        <span className={styles.Light_Span}>功率96</span>
                        <br />
                        <img src={lights[96]} className={styles.LightImage} alt='图片' />
                        <img src={lights[97]} className={styles.LightImage} alt='图片' />
                        <img src={lights[98]} className={styles.LightImage} alt='图片' />
                        <img src={lights[99]} className={styles.LightImage} alt='图片' />
                        <img src={lights[100]} className={styles.LightImage} alt='图片' />
                        <img src={lights[101]} className={styles.LightImage} alt='图片' />
                        <img src={lights[102]} className={styles.LightImage} alt='图片' />
                        <img src={lights[103]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Light_Span}>功率97</span>
                        <span className={styles.Light_Span}>功率98</span>
                        <span className={styles.Light_Span}>功率99</span>
                        <span className={styles.Hundred_Light_Span}>功率100</span>
                        <span className={styles.Hundred_Light_Span}>功率101</span>
                        <span className={styles.Hundred_Light_Span}>功率102</span>
                        <span className={styles.Hundred_Light_Span}>功率103</span>
                        <span className={styles.Hundred_Light_Span}>功率104</span>
                        <br />
                        <img src={lights[104]} className={styles.LightImage} alt='图片' />
                        <img src={lights[105]} className={styles.LightImage} alt='图片' />
                        <img src={lights[106]} className={styles.LightImage} alt='图片' />
                        <img src={lights[107]} className={styles.LightImage} alt='图片' />
                        <img src={lights[108]} className={styles.LightImage} alt='图片' />
                        <img src={lights[109]} className={styles.LightImage} alt='图片' />
                        <img src={lights[110]} className={styles.LightImage} alt='图片' />
                        <img src={lights[111]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Hundred_Light_Span}>功率105</span>
                        <span className={styles.Hundred_Light_Span}>功率106</span>
                        <span className={styles.Hundred_Light_Span}>功率107</span>
                        <span className={styles.Hundred_Light_Span}>功率108</span>
                        <span className={styles.Hundred_Light_Span}>功率109</span>
                        <span className={styles.Hundred_Light_Span}>功率110</span>
                        <span className={styles.Hundred_Light_Span}>功率111</span>
                        <span className={styles.Hundred_Light_Span}>功率112</span>
                        <br />
                        <img src={lights[112]} className={styles.LightImage} alt='图片' />
                        <img src={lights[113]} className={styles.LightImage} alt='图片' />
                        <img src={lights[114]} className={styles.LightImage} alt='图片' />
                        <img src={lights[115]} className={styles.LightImage} alt='图片' />
                        <img src={lights[116]} className={styles.LightImage} alt='图片' />
                        <img src={lights[117]} className={styles.LightImage} alt='图片' />
                        <img src={lights[118]} className={styles.LightImage} alt='图片' />
                        <img src={lights[119]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Hundred_Light_Span}>功率113</span>
                        <span className={styles.Hundred_Light_Span}>功率114</span>
                        <span className={styles.Hundred_Light_Span}>功率115</span>
                        <span className={styles.Hundred_Light_Span}>功率116</span>
                        <span className={styles.Hundred_Light_Span}>功率117</span>
                        <span className={styles.Hundred_Light_Span}>功率118</span>
                        <span className={styles.Hundred_Light_Span}>功率119</span>
                        <span className={styles.Hundred_Light_Span}>功率120</span>
                        <br />
                        <img src={lights[120]} className={styles.LightImage} alt='图片' />
                        <img src={lights[121]} className={styles.LightImage} alt='图片' />
                        <img src={lights[122]} className={styles.LightImage} alt='图片' />
                        <img src={lights[123]} className={styles.LightImage} alt='图片' />
                        <img src={lights[124]} className={styles.LightImage} alt='图片' />
                        <img src={lights[125]} className={styles.LightImage} alt='图片' />
                        <img src={lights[126]} className={styles.LightImage} alt='图片' />
                        <img src={lights[127]} className={styles.LightImage} alt='图片' />
                        <br />
                        <span className={styles.Hundred_Light_Span}>功率121</span>
                        <span className={styles.Hundred_Light_Span}>功率122</span>
                        <span className={styles.Hundred_Light_Span}>功率123</span>
                        <span className={styles.Hundred_Light_Span}>功率124</span>
                        <span className={styles.Hundred_Light_Span}>功率125</span>
                        <span className={styles.Hundred_Light_Span}>功率126</span>
                        <span className={styles.Hundred_Light_Span}>功率127</span>
                        <span className={styles.Hundred_Light_Span}>功率128</span>
                        </div>
                    </div>
                </Draggable>
            </Fragment >
        )
    }
}
