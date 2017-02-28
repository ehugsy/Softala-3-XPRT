import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';

const styles = {
  link: {
    ':hover': {
      cursor:'pointer'
    }
  }
}
@Radium
export default class TermsModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <a style={styles.link} label="Dialog" onTouchTap={this.handleOpen}>TERMS OF SERVICE</a>
        <Dialog
          title="TERMS OF SERVICE"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Bacon ipsum dolor amet fatback shank beef ribs boudin landjaeger.
          Pig alcatra swine pancetta doner frankfurter. Tongue hamburger pork belly filet mignon tenderloin landjaeger turkey.
          Shoulder cupim shank, shankle ribeye venison ham hock strip steak t-bone tenderloin boudin filet mignon.
          Porchetta fatback shankle cow salami corned beef beef bacon frankfurter sirloin ground round.
          Flank tail ribeye fatback bresaola short ribs meatloaf swine.
          <br /><br />
          Pastrami beef ribs beef, filet mignon bresaola pork loin pork chop pork drumstick boudin flank short ribs venison
          spare ribs picanha. Kevin flank tail, sirloin hamburger doner tongue frankfurter ground round biltong kielbasa bacon.
          Pork chop cupim bacon doner, filet mignon meatball pork loin biltong t-bone tail tenderloin.
          Short ribs porchetta ground round andouille bacon chicken turkey t-bone kevin shank leberkas beef landjaeger pancetta kielbasa.
          Pork chop turkey pancetta rump hamburger sausage. Kevin picanha tongue cow doner pork chop ham hock pork belly spare ribs chicken.
          <br /><br />
          Corned beef fatback capicola sirloin turducken short ribs. Cupim shoulder bresaola landjaeger ham flank.
          Flank kielbasa doner andouille ham hock beef ribs. Short loin chuck hamburger shankle pig, pork chop meatloaf.
        </Dialog>
      </div>
    );
  }
}
