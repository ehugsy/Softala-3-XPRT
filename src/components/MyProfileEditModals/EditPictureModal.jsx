import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import MyTextField from '../MyTextField';
import Radium from 'radium';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import styles from './editModalStyles';



const required = value => value ? undefined : 'Required'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MyTextField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)



@Radium
export default class EditPictureModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }
  state = {
    open: false,
  };

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={styles.editProfilePicture} src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select a profile picture</div>);
    }

    return (




      <div>
        <a style={styles.link} label="Dialog" onTouchTap={this.handleOpen}><img src={'../../img/edit.png'} style={styles.editPenLeft}/></a>
        <Dialog
          modal={false}
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={styles.noborder}
          actionsContainerStyle={styles.noborder}
        >
          <div style={{...styles.contentCard, ...styles.editPictureWindow}}>
            <form onSubmit={this.props.handleSubmit}>


                    <form onSubmit={(e)=>this._handleSubmit(e)}>

                      <input className="fileInput"
                        type="file"
                        onChange={(e)=>this._handleImageChange(e)} />
                      <button className="submitButton"
                        type="submit"
                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                    </form>
                    <div className="imgPreview">
                      {$imagePreview}
                    </div>



              {/* <FlatButton
                className="fileInput"
                type="file"
                onChange={(e)=>this._handleImageChange(e)}
                label="Browse..."
                primary={true}
                onTouchTap={this.handleClose}
                style={styles.button}
              />
              <FlatButton
                className="submitButton"
                type="submit"
                onClick={(e)=>this._handleSubmit(e)}
                label="Upload"
                primary={true}
                onTouchTap={this.handleClose}
                style={styles.button}
              /> */}

            </form>
          </div>

        </Dialog>

      </div>
    )
  }
}
