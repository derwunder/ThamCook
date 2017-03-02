import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../css/editrecipe.css';
import {Button,FABButton,Icon,IconButton} from 'react-mdl';

import {Dialog, DialogContent,DialogActions,} from 'react-mdl';
import {List, ListItem,ListItemContent,Textfield,Menu,MenuItem,Switch} from 'react-mdl';

import {recipeItemInfo,startImageRecipeUP,startRecipeItemUpdate,startRecipeItemDelete} from '../../actions/actionsRecipeBox';

import Dropzone from 'react-dropzone';


class EditRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      passAdd:false
      ,passDel:false
    };
    this.handleSave=this.handleSave.bind(this);
    this.handleOpenEdition=this.handleOpenEdition.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleDeleteItem=this.handleDeleteItem.bind(this);
    this.handleCancelDeleteItem=this.handleCancelDeleteItem.bind(this);
  }
  componentWillMount(){


  }
  handleOpenEdition(){
    this.setState({passAdd:!this.state.passAdd});
    var {dispatch}=this.props;
    dispatch(recipeItemInfo({titulo:this.props.item.titulo}));
    dispatch(recipeItemInfo({tmp:this.props.item.tmp}));dispatch(recipeItemInfo({tmc:this.props.item.tmc}));
    dispatch(recipeItemInfo({tms:this.props.item.tms}));dispatch(recipeItemInfo({tmt:this.props.item.tmt}));
    dispatch(recipeItemInfo({urlImg:this.props.item.urlImg}));
    dispatch(recipeItemInfo({descr:this.props.item.descr}));
    dispatch(recipeItemInfo({ingr:this.props.item.ingr}));
    dispatch(recipeItemInfo({instr:this.props.item.instr}));
    dispatch(recipeItemInfo({categCol:this.props.item.categCol}));
    dispatch(recipeItemInfo({favorito:this.props.item.favorito}));
    dispatch(recipeItemInfo({urlVid:this.props.item.urlVid}));
  }
  handleSave(){
    var {dispatch, recipeEditorReducer}=this.props;
    var updateItem ={
      titulo:(recipeEditorReducer.hasOwnProperty('titulo'))?recipeEditorReducer.titulo:'',
      urlImg:(recipeEditorReducer.hasOwnProperty('urlImg'))?recipeEditorReducer.urlImg:'',
      tmp:(recipeEditorReducer.hasOwnProperty('tmp'))?recipeEditorReducer.tmp:'',
      tmc:(recipeEditorReducer.hasOwnProperty('tmc'))?recipeEditorReducer.tmc:'',
      tms:(recipeEditorReducer.hasOwnProperty('tms'))?recipeEditorReducer.tms:'',
      tmt:(recipeEditorReducer.hasOwnProperty('tmt'))?recipeEditorReducer.tmt:'',
      descr:(recipeEditorReducer.hasOwnProperty('descr'))?recipeEditorReducer.descr:'',
      ingr:(recipeEditorReducer.hasOwnProperty('ingr'))?recipeEditorReducer.ingr:'',
      instr:(recipeEditorReducer.hasOwnProperty('instr'))?recipeEditorReducer.instr:'',
      categCol:(recipeEditorReducer.hasOwnProperty('categCol'))?recipeEditorReducer.categCol:'',
      favorito:(recipeEditorReducer.hasOwnProperty('favorito'))?recipeEditorReducer.favorito:false,
      urlVid:(recipeEditorReducer.hasOwnProperty('urlVid'))?recipeEditorReducer.urlVid:''
    };
    dispatch(startRecipeItemUpdate(this.props.item.id,updateItem));
  }
  handleDelete(){
    this.setState({passDel:!this.state.passDel});
  }
  handleDeleteItem(){
    var {dispatch} = this.props;
    dispatch(startRecipeItemDelete(this.props.item.id));
  }
  handleCancelDeleteItem(){
    this.setState({passDel:!this.state.passDel});
  }
  render() {  /*overlap  es un prop en Badge*/
    var {dispatch,recipeEditorReducer} =this.props;


    return (
      <div className="editRecipe editor_off">
        <div className="editRecipeBTN">
          <FABButton style={{background: 'rgba(255, 255, 255, 0.7)'}} colored ripple onClick={this.handleOpenEdition}>
            <Icon name="mode_edit" />
          </FABButton>
        </div>
        <Dialog  open={this.state.passAdd===true?true:false} style={{width:'auto'}}>
         <h4>Editor de Recipe</h4>
         <DialogContent>
           <List>
             <ListItem>
               <ListItemContent icon="grade">
                 <div style={{display: 'inline-block'}}>
                  <IconButton ripple raised accent name="assignment" id="demo-menu-lower-left"
                  style={{backgroundColor:recipeEditorReducer.hasOwnProperty('categCol')?recipeEditorReducer.categCol:''}}/>
                  <Menu target="demo-menu-lower-left">
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#6ea106'}));}}>
                        <Icon name="invert_colors" style={{color:'#6ea106'}}/>Aderezo</MenuItem>
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#48ccf8'}));}}>
                        <Icon name="invert_colors" style={{color:'#48ccf8'}}/>Almuerzo</MenuItem>
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#ff7647'}));}}>
                        <Icon name="invert_colors" style={{color:'#ff7647'}}/>Cena</MenuItem>
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#c614ff'}));}}>
                        <Icon name="invert_colors" style={{color:'#c614ff'}}/>Contorno</MenuItem>
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#ffb347'}));}}>
                        <Icon name="invert_colors" style={{color:'#ffb347'}}/>Desayuno</MenuItem>
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#4857f8'}));}}>
                        <Icon name="invert_colors" style={{color:'#4857f8'}}/>Ensalada</MenuItem>
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#a17a06'}));}}>
                        <Icon name="invert_colors" style={{color:'#a17a06'}}/>Sopa</MenuItem>
                      <MenuItem onClick={()=>{ dispatch(recipeItemInfo({categCol:'#ff47a2'}));}}>
                        <Icon name="invert_colors" style={{color:'#ff47a2'}}/>Postre</MenuItem>
                  </Menu>
                </div>
                <div style={{display: 'inline-block',marginLeft:'10px'}}>
                  <Switch ripple id="switch1" onChange={()=>{dispatch(recipeItemInfo({favorito:
                  recipeEditorReducer.hasOwnProperty('favorito')?(!recipeEditorReducer.favorito):false}));}}
                    checked={recipeEditorReducer.hasOwnProperty('favorito')?recipeEditorReducer.favorito:false} >Favorito</Switch>
                </div>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="chat">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({titulo:e.target.value})); }}
                    label="Titulo" floatingLabel
                    value={recipeEditorReducer.hasOwnProperty('titulo')?recipeEditorReducer.titulo:''}
                    style={{width: '200px',marginLeft:'10px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="alarm">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({tmp:e.target.value})); }}
                    label="Tiempo de Preparacion" floatingLabel
                    value={recipeEditorReducer.hasOwnProperty('tmp')?recipeEditorReducer.tmp:''}
                    pattern="-?[0-9]*(\.[0-9]+)?" type="number"
                    style={{width: '200px',marginLeft:'10px'}}/>
                 <Textfield onChange={(e) => { dispatch(recipeItemInfo({tmc:e.target.value}));}}
                   label="Tiempo de Cocina" floatingLabel
                   value={recipeEditorReducer.hasOwnProperty('tmc')?recipeEditorReducer.tmc:''}
                   pattern="-?[0-9]*(\.[0-9]+)?" type="number"
                   style={{width: '200px',marginLeft:'10px'}}/>
                <Textfield onChange={(e) => { dispatch(recipeItemInfo({tms:e.target.value}));}}
                  label="Tiempo para servir" floatingLabel
                  value={recipeEditorReducer.hasOwnProperty('tms')?recipeEditorReducer.tms:''}
                  pattern="-?[0-9]*(\.[0-9]+)?" type="number"
                  style={{width: '200px',marginLeft:'10px'}}/>
                <Textfield onChange={(e) => { dispatch(recipeItemInfo({tmt:e.target.value}));}}
                  label="Tiempo Total" floatingLabel
                  value={recipeEditorReducer.hasOwnProperty('tmt')?recipeEditorReducer.tmt:''}
                  pattern="-?[0-9]*(\.[0-9]+)?" type="number"
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
                   onDrop={(acceptedFiles, rejectedFiles)=>{
                     dispatch(startImageRecipeUP(acceptedFiles[0],'urlImg'));}}>
                   <img alt="Click or Drop Img"  style={{width:'100px',height:'100px'}}
                    src={(recipeEditorReducer.hasOwnProperty('urlImg'))?recipeEditorReducer.urlImg:''}/>
                 </Dropzone>
                 <FABButton mini colored onClick={()=>{dispatch(recipeItemInfo({urlImg:''}));}}>
                   <Icon name="clear" />
               </FABButton>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="comment">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({descr:e.target.value})); }}
                    label="Descripcion" floatingLabel
                    value={recipeEditorReducer.hasOwnProperty('descr')?recipeEditorReducer.descr:''}
                    rows={4} type="text"
                    style={{width: '250px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="storage">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({ingr:e.target.value})); }}
                    label="Ingredientes" floatingLabel
                    value={recipeEditorReducer.hasOwnProperty('ingr')?recipeEditorReducer.ingr:''}
                    rows={4} type="text"
                    style={{width: '250px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="list">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({instr:e.target.value})); }}
                    label="Instrucciones" floatingLabel
                    value={recipeEditorReducer.hasOwnProperty('instr')?recipeEditorReducer.instr:''}
                    rows={4} type="text"
                    style={{width: '250px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="subscriptions">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({urlVid:e.target.value})); }}
                    label="URL Youtube" floatingLabel
                    value={recipeEditorReducer.hasOwnProperty('urlVid')?recipeEditorReducer.urlVid:''}
                    style={{width: '200px',marginLeft:'10px'}}/>
                </ListItemContent>
              </ListItem>
             {/*<ListItem>
               <p>{
                  (recipeEditorReducer.hasOwnProperty('instr'))?
                    recipeEditorReducer.instr.split('\n').map((item,key) => {
                   return <span key={key}>{item}<br/></span> } ):'' }
               </p>
             </ListItem>*/}
           </List>
         </DialogContent>
       <DialogActions >
         <Button raised accent ripple type='button' onClick={this.handleSave}>Gurdar</Button>
         <FABButton mini colored onClick={this.handleDelete}>
           <Icon name="delete" />
       </FABButton>
         <Button raised ripple type='button'
           onClick={()=>{this.setState({passAdd:!this.state.passAdd})}}>Cancelar</Button>
       </DialogActions>
      </Dialog>
      <Dialog  open={this.state.passDel===true?true:false} style={{width:'auto'}}>
        <h4>Item a Eliminar</h4>
        <DialogContent>
          <p>Esta seguro que desea borrar este Recipe?</p>
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
)(EditRecipe);
