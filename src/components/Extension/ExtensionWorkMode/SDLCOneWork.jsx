import React, { Component } from 'react'
import styles from '../../../routes/Extension.css'
class Setting extends Component {
  render() {
    return (
      <div className={styles.Sending}>
        <img src={require('../../../assets/intomain_48.png')} alt='tupian' className={styles.Sending_Image} />
        <br />
        <span>发送</span>
      </div>
    )
  }
}

export default class SDLCOneWork extends Component {
  render() {
    return (
      <div className={styles.ECM_Mode_Decision}>
        <div className={styles.Singel_Beam}>
          <input type="radio" value="单波束" name='mode' defaultChecked style={{ marginTop: '10px',marginRight: '5px',marginBottom: '10px',marginLeft:'10px', verticalAlign: 'middle' }} />
          <span className={styles.ECM_ModeSelect_Font}>单波束</span>
          <input type="radio" value="三波束" name='mode' style={{marginTop: '5px',marginRight: '5px',marginBottom: '10px',marginLeft:'10px', verticalAlign: 'middle' }} />
          <span className={styles.ECM_ModeSelect_Font}>三波束</span>
        </div>

        <Setting />
        <div className={styles.ModeSelect_Child_Title}>
          <span className={styles.ECM_ModeSelect_Font}>工作模式</span>
        </div>
      </div>
    )
  }
}
