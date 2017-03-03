import React, { Component } from 'react';
import '../../css/addbox.css';
import {connect} from 'react-redux';
import {hombeBoxItemInfo,homeboxItemDialogEdit,
  homeboxItemDialogDel,startHomeBoxItemDelete,
  startImageUP,startHomeBoxItemUpdate} from '../../actions/actionsHomeBoxItems';

import {Dialog, DialogContent,DialogActions, Button} from 'react-mdl';
import {RadioGroup, Radio} from 'react-mdl';
import {List,ListItem,ListItemContent,Textfield,FABButton,Icon} from 'react-mdl';


import BookSvg from '../../svg/book-cover.svg';
import CupCake from '../../svg/cupcake.svg';
import ChefFam from '../../svg/female-chef.svg';
import AddSvg from '../../svg/add.svg';
import HourGlass from '../../svg/hourglass.svg';


import Dropzone from 'react-dropzone';


var tmpImg1,tmpImg2,tmpImg3;

class EditBoxType1 extends Component {

    componentWillMount(){
      //var {dispatch} = this.props;
      //var item = this.props.item;
      //console.log('Dialog EItem: '+JSON.stringify(item));
      //this.handleOpen = this.handleOpen.bind(this);
      //this.handleTypeBox = this.handleTypeBox.bind(this);
      this.handleTypeIcon = this.handleTypeIcon.bind(this);
      this.onDrop1 = this.onDrop1.bind(this);
      this.onDrop2 = this.onDrop2.bind(this);
      this.onDrop3 = this.onDrop3.bind(this);
      this.clearTmpImg= this.clearTmpImg.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleDeleteItem=this.handleDeleteItem.bind(this);
      this.handleCancelDeleteItem=this.handleCancelDeleteItem.bind(this);
    }

    handleClose(){
      var {dispatch} = this.props;
      dispatch(homeboxItemDialogEdit());

    }
    handleTypeIcon(event){
      var {dispatch} = this.props;
      dispatch(hombeBoxItemInfo({typeIcon: event.target.value}));
    }
    onDrop1(acceptedFiles, rejectedFiles) {
      tmpImg1=acceptedFiles[0];
      var {dispatch}=this.props;
      dispatch(startImageUP(tmpImg1,'urlImg1'));
    }
    onDrop2(acceptedFiles, rejectedFiles) {
      tmpImg2=acceptedFiles[0];
      var {dispatch}=this.props;
      dispatch(startImageUP(tmpImg2,'urlImg2'));
    }
    onDrop3(acceptedFiles, rejectedFiles) {
      tmpImg3=acceptedFiles[0];
      var {dispatch}=this.props;
      dispatch(startImageUP(tmpImg3,'urlImg3'));
    }
    clearTmpImg(){
        var {dispatch}=this.props;
        dispatch(hombeBoxItemInfo({urlImg1:''}));
        dispatch(hombeBoxItemInfo({urlImg2:''}));
        dispatch(hombeBoxItemInfo({urlImg3:''}));
        //console.log('Your key count: '+Object.keys(homeBoxItemEditorReducer).length);
    }
    handleSave(){
      var {dispatch,homeBoxItemEditorReducer}=this.props;
      var itemUpdates ={
        typeIcon:homeBoxItemEditorReducer.typeIcon,
        urlImg1:(homeBoxItemEditorReducer.urlImg1!=='')?homeBoxItemEditorReducer.urlImg1:null,
        urlImg2:(homeBoxItemEditorReducer.urlImg2!=='')?homeBoxItemEditorReducer.urlImg2:null,
        urlImg3:(homeBoxItemEditorReducer.urlImg3!=='')?homeBoxItemEditorReducer.urlImg3:null,
        titulo:homeBoxItemEditorReducer.titulo,
        subtitulo:homeBoxItemEditorReducer.subtitulo,
        texto:homeBoxItemEditorReducer.texto
      };
      dispatch(startHomeBoxItemUpdate(
        homeBoxItemEditorReducer.idEdition,
        homeBoxItemEditorReducer.typeBox,itemUpdates));

      //var {dispatch} = this.props;
      //dispatch(homeboxItemDialogEdit());
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
                    <ListItemContent icon="grade">
                      <RadioGroup name="icon-set" value={homeBoxItemEditorReducer.typeIcon} onChange={this.handleTypeIcon}>
                        <Radio value="tpi1" ripple ><img alt="Click or Drop Img" src={BookSvg} style={{width:'40px',height:'40px'}} /></Radio>
                        <Radio value="tpi2" ripple ><img alt="Click or Drop Img" src={CupCake} style={{width:'40px',height:'40px'}} /></Radio>
                        <Radio value="tpi3" ripple ><img alt="Click or Drop Img" src={ChefFam} style={{width:'40px',height:'40px'}} /></Radio>
                        <Radio value="tpi4" ripple ><img alt="Click or Drop Img" src={AddSvg} style={{width:'40px',height:'40px'}} /></Radio>
                        <Radio value="tpi5" ripple ><img alt="Click or Drop Img" src={HourGlass} style={{width:'40px',height:'40px'}} /></Radio>
                      </RadioGroup>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent icon="chat">
                      <Textfield onChange={(e) => {dispatch(hombeBoxItemInfo({titulo:e.target.value})); }}
                         label="Titulo" floatingLabel
                         value={homeBoxItemEditorReducer.titulo}
                         style={{width: '200px',marginLeft:'10px'}}/>
                      <Textfield onChange={(e) => {dispatch(hombeBoxItemInfo({subtitulo:e.target.value})); }}
                        label="Sub Titulo" floatingLabel
                        value={homeBoxItemEditorReducer.subtitulo}
                        style={{width: '200px',marginLeft:'10px'}}/>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent icon="textsms">
                      <Textfield
                        onChange={(e) => {dispatch(hombeBoxItemInfo({texto:e.target.value})); }}
                        label="Texto corto..." floatingLabel
                        value={homeBoxItemEditorReducer.texto}
                        rows={3}
                        style={{width: '260px'}} />
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
                        <img alt="Click or Drop Img" src={homeBoxItemEditorReducer.urlImg1} style={{width:'100px',height:'100px'}}/>
                      </Dropzone>
                      <Dropzone
                        style={{margin:'5px',display: 'inline-block',
                          height: '100px',
                           width: '100px',
                           borderRadius: '5%',
                           borderColor: 'rgba(187, 55, 125, 1)',
                           borderStyle: 'dotted'}}
                        multiple={false}
                        accept={'image/*'}
                        onDrop={this.onDrop2}>
                        <img alt="Click or Drop Img" src={homeBoxItemEditorReducer.urlImg2} style={{width:'100px',height:'100px'}}/>
                      </Dropzone>
                      <Dropzone
                        style={{margin:'5px',display: 'inline-block',
                          height: '100px',
                           width: '100px',
                           borderRadius: '5%',
                           borderColor: 'rgba(187, 55, 125, 1)',
                           borderStyle: 'dotted'}}
                        multiple={false}
                        accept={'image/*'}
                        onDrop={this.onDrop3}>
                        <img alt="Click or Drop Img" src={homeBoxItemEditorReducer.urlImg3} style={{width:'100px',height:'100px'}}/>
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
                   homeBoxItemEditorReducer.typeBox==='tpb1') ? true : false


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
)(EditBoxType1);
