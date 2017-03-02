import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../css/addRecipe.css';
import {Button,FABButton,Icon,IconButton} from 'react-mdl';

import {Dialog, DialogContent,DialogActions,} from 'react-mdl';
import {List, ListItem,ListItemContent,Textfield,Menu,MenuItem,Switch} from 'react-mdl';

import {recipeItemInfo,startImageRecipeUP,startRecipeItemUp} from '../../actions/actionsRecipeBox';

import Dropzone from 'react-dropzone';

class AddRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      passAdd:false
    };
    this.handleSave=this.handleSave.bind(this);
  }
  componentWillMount(){
    var {dispatch}=this.props;
    dispatch(recipeItemInfo({titulo:''}));
    dispatch(recipeItemInfo({tmp:''}));dispatch(recipeItemInfo({tmc:''}));
    dispatch(recipeItemInfo({tms:''}));dispatch(recipeItemInfo({tmt:''}));
    dispatch(recipeItemInfo({urlImg:''}));
    dispatch(recipeItemInfo({descr:''}));
    dispatch(recipeItemInfo({ingr:''}));
    dispatch(recipeItemInfo({instr:''}));
    dispatch(recipeItemInfo({categCol:''}));
    dispatch(recipeItemInfo({favorito:false}));
    dispatch(recipeItemInfo({urlVid:''}));

  }
  handleSave(){
    var {dispatch, recipeEditorReducer}=this.props;
    var newItem ={
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
    dispatch(startRecipeItemUp(newItem));
  }
  render() {  /*overlap  es un prop en Badge*/
    var {dispatch,recipeEditorReducer} =this.props;


    return (
      <div className="addRecipe editor_off">
        <div className="addRecipeBTN">
          <FABButton colored ripple onClick={()=>{this.setState({passAdd:!this.state.passAdd})}}>
            <Icon name="add" />
          </FABButton>
        </div>
        <Dialog  open={this.state.passAdd===true?true:false} style={{width:'auto'}}>
         <h4>Nuevo Recipe</h4>
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
                    style={{width: '200px',marginLeft:'10px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="alarm">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({tmp:e.target.value})); }}
                    label="Tiempo de Preparacion" floatingLabel
                    pattern="-?[0-9]*(\.[0-9]+)?" type="number"
                    style={{width: '200px',marginLeft:'10px'}}/>
                 <Textfield onChange={(e) => { dispatch(recipeItemInfo({tmc:e.target.value}));}}
                   label="Tiempo de Cocina" floatingLabel
                   pattern="-?[0-9]*(\.[0-9]+)?" type="number"
                   style={{width: '200px',marginLeft:'10px'}}/>
                <Textfield onChange={(e) => { dispatch(recipeItemInfo({tms:e.target.value}));}}
                  label="Tiempo para servir" floatingLabel
                  pattern="-?[0-9]*(\.[0-9]+)?" type="number"
                  style={{width: '200px',marginLeft:'10px'}}/>
                <Textfield onChange={(e) => { dispatch(recipeItemInfo({tmt:e.target.value}));}}
                  label="Tiempo Total" floatingLabel
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
                    rows={4} type="text"
                    style={{width: '250px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="storage">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({ingr:e.target.value})); }}
                    label="Ingredientes" floatingLabel
                    rows={4} type="text"
                    style={{width: '250px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="list">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({instr:e.target.value})); }}
                    label="Instrucciones" floatingLabel
                    rows={4} type="text"
                    style={{width: '250px'}}/>
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent icon="subscriptions">
                 <Textfield onChange={(e) => {dispatch(recipeItemInfo({urlVid:e.target.value})); }}
                    label="URL Youtube" floatingLabel
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
         <Button raised ripple type='button'
           onClick={()=>{this.setState({passAdd:!this.state.passAdd})}}>Cancelar</Button>
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
)(AddRecipe);
