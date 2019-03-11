import React, { Component } from 'react'
import styles from '../../../routes/Extension.css'
class Setting extends Component {
  render() {
    return (
      <div className={styles.Sending}>
        <img src={require('../images/intomain_48.png')} alt='tupian' className={styles.Sending_Image} />
        <br />
        <span>设置</span>
      </div>
    )
  }
}

export default class SDLCTwoWork extends Component {
  render() {
    return (
      <div className={styles.ECM_Mode_Decision}>
        <div className={styles.Singel_Beam}>
          <input type="radio" value="宽波束" name='mode' style={{ marginTop: '10px',marginRight: '5px',marginBottom: '10px',marginLeft:'10px', verticalAlign: 'middle' }} />
          <span className={styles.ECM_ModeSelect_Font}>宽波束</span>
          <input type="radio" value="窄波束" name='mode' style={{marginTop: '5px',marginRight: '5px',marginBottom: '10px',marginLeft:'10px', verticalAlign: 'middle' }} />
          <span className={styles.ECM_ModeSelect_Font}>窄波束</span>
        </div>

        <Setting />
        <div className={styles.ModeSelect_Child_Title}>
          <span className={styles.ECM_ModeSelect_Font}>模式选择</span>
        </div>
      </div>
    )
  }
}
