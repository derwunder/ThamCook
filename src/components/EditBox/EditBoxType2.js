import React, { Component } from 'react';
import '../../css/addbox.css';
import {connect} from 'react-redux';
import {hombeBoxItemInfo,homeboxItemDialogEdit,
homeboxItemDialogDel,startImageUP,startHomeBoxItemDelete,
startHomeBoxItemUpdate} from '../../actions/actionsHomeBoxItems';

import {Dialog, DialogContent,DialogActions, Button} from 'react-mdl';
import {List,ListItem,ListItemContent,Textfield,FABButton,Icon} from 'react-mdl';



import Dropzone from 'react-dropzone';



class EditBoxType2 extends Component {

    componentWillMount(){
      //var {dispatch} = this.props;
      //this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      //this.handleTypeBox = this.handleTypeBox.bind(this);
      this.onDrop1 = this.onDrop1.bind(this);
      this.clearTmpImg= this.clearTmpImg.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleDeleteItem = this.handleDeleteItem.bind(this);
      this.handleCancelDeleteItem = this.handleCancelDeleteItem.bind(this);
    }

    handleClose(){
      var {dispatch} = this.props;
      dispatch(homeboxItemDialogEdit());

    }
    onDrop1(acceptedFiles, rejectedFiles) {
      var tmpImg=acceptedFiles[0];
      var {dispatch}=this.props;
      dispatch(startImageUP(tmpImg,'urlImg'));
    }
    clearTmpImg(){
        var {dispatch}=this.props;
        dispatch(hombeBoxItemInfo({urlImg:''}));
        //console.log('Your key count: '+Object.keys(homeBoxItemEditorReducer).length);
    }
    handleSave(){
      var {dispatch,homeBoxItemEditorReducer}=this.props;
      var itemUpdates ={
        urlImg:(homeBoxItemEditorReducer.urlImg!=='')?homeBoxItemEditorReducer.urlImg:null,
        titulo:homeBoxItemEditorReducer.titulo
      };
      //console.log("tpb2");
      dispatch(startHomeBoxItemUpdate(
        homeBoxItemEditorReducer.idEdition,
        homeBoxItemEditorReducer.typeBox, itemUpdates));
    }
    handleDelete(){

        var {dispatch} = this.props;
        dispatch(homeboxItemDialogDel());
    }
    handleDeleteItem(){
      var {dispatch,homeBoxItemEditorReducer} = this.props;
      dispatch(startHomeBoxItemDelete(
        homeBoxItemEditorReducer.idEdition,
        homeBoxItemEditorReducer.typeBox));
    }
    handleCancelDeleteItem(){
      var {dispatch} = this.props;
      dispatch(homeboxItemDialogDel());
    }

    componentDidMount(){

    }

  render(){
    var {dispatch,homeBoxItemEditorReducer}= this.props

    return(
              <div>
                <List>
                  <ListItem>
                    <ListItemContent icon="chat">
                      <Textfield onChange={(e) => {dispatch(hombeBoxItemInfo({titulo:e.target.value})); }}
                         label="Frase" floatingLabel
                         value={homeBoxItemEditorReducer.titulo}
                         style={{width: '200px',marginLeft:'10px'}}/>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent icon="mms">
                      <Dropzone
                        style={{    margin:'5px',
                          display: 'inline-block',
                          height: '100px',
                           width: '100px',
                           borderRadius: '5%',
                           borderColor: 'rgba(187, 55, 125, 1)',
                           borderStyle: 'dotted'}}
                        multiple={false}
                        accept={'image/*'}
                        onDrop={this.onDrop1}>
                        <img alt="Click or Drop Img" src={homeBoxItemEditorReducer.urlImg} style={{width:'100px',height:'100px'}}/>
                      </Dropzone>
                      <FABButton mini colored onClick={this.clearTmpImg}>
                        <Icon name="clear" />
                    </FABButton>
                    </ListItemContent>
                  </ListItem>
                </List>
                <DialogActions >
                  <Button raised accent ripple type='button' onClick={this.handleSave}>Gurdar</Button>
                  <FABButton mini colored onClick={this.handleDelete}>
                    <Icon name="delete" />
                </FABButton>
                  <Button raised ripple type='button' onClick={this.handleClose}>Cancelar</Button>
                </DialogActions>
                <Dialog  open={

                  (homeBoxItemEditorReducer.isOpenDialogDel &&
                   homeBoxItemEditorReducer.typeBox==='tpb2') ? true : false


                } style={{width:'auto'}}>
                  <h4>Item a Eliminar</h4>
                  <DialogContent>
                    <p>Esta seguro que desea borrar este Objeto/Item?</p>
                  </DialogContent>
                  <DialogActions >
                    <Button raised accent ripple type='button' onClick={this.handleDeleteItem}>Borrar</Button>
                    <Button raised ripple type='button' onClick={this.handleCancelDeleteItem}>Cancelar</Button>
                  </DialogActions>
                </Dialog>
              </div>

    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)(EditBoxType2);
