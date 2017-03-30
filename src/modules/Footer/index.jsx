import { Component } from 'react';
import TermsModal from '../../components/TermsModal';
import PrivacyModal from '../../components/PrivacyModal';
import XprtLogoSmall from '../../components/XprtLogoSmall';
import Radium from 'radium';
import styles from './footerStyles';

@Radium
export default class Footer extends Component {
  render (){
    return(
      <div style={styles.footerWrapper}>
        <div style={styles.footerLeft}>
          <XprtLogoSmall />
        </div>
        <div style={styles.footerRight}>
          <TermsModal />
          <PrivacyModal />
        </div>
      </div>
    )
  }
}
