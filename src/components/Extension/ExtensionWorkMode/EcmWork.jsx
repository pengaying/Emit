import React, { Component } from 'react'
import '../index.css'
class Setting extends Component {
  render() {
    return (
      <div className='Sending'>
        <img src={require('../images/intomain_48.png')} alt='tupian' className='Sending_Image' />
        <br />
        <span>设置</span>
      </div>
    )
  }
}

export default class EcmWork extends Component {
  render() {
    return (
      <div className='ECM_Mode_Decision'>
        <div className='Singel_Beam'>
          <input type="radio" value="单波束" name='mode' style={{ marginTop: '10px',marginRight: '5px',marginBottom: '10px',marginLeft:'10px', verticalAlign: 'middle' }} />
          <span className='ECM_ModeSelect_Font'>单波束</span>
          <input type="radio" value="三波束" name='mode' style={{marginTop: '5px',marginRight: '5px',marginBottom: '10px',marginLeft:'10px', verticalAlign: 'middle' }} />
          <span className='ECM_ModeSelect_Font'>三波束</span>
        </div>

        <Setting />
        <div className='ModeSelect_Child_Title'>
          <span className='ECM_ModeSelect_Font'>模式选择</span>
        </div>
      </div>
    )
  }
}
