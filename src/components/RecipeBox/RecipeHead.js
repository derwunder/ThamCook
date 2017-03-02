import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {setSearchText, toggleShowCompleted} from '../actions/actions';
import '../../css/recipehead.css';
import {setRecipeSearchText,setRecipeSearchFavorito,setRecipeSearchCategoria}from '../../actions/actionsRecipeBox';

import {Textfield,Menu,MenuItem,Switch,Icon,IconButton} from 'react-mdl';


class RecipeHead extends Component {
  
  componentWillMount(){

  }

  render() {
    var {dispatch, searchRecipeReducer} = this.props;
    return (
      <div className="recipeHead">
        <h3>Tham Recipes </h3>
        <Textfield style={{display: 'inline-block',color:'rgba(187, 55, 125, 1)'}}
            onChange={(e) => {dispatch(setRecipeSearchText({searchText:e.target.value}))}}
            label="Expandable Input"
            expandable
            expandableIcon="search"
        />
        <div style={{display: 'inline-block'}}>
         <IconButton ripple raised accent name="assignment" id="searchCategoria"
         style={{backgroundColor:searchRecipeReducer.hasOwnProperty('searchCategoria')?
         ((searchRecipeReducer.searchCategoria!=='')?searchRecipeReducer.searchCategoria:'rgba(187, 55, 125, 1)'):''}/**/}/>
         <Menu target="searchCategoria">
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:''}));}}>
               <Icon name="invert_colors" style={{color:'rgba(187, 55, 125, 1)'}}/>Todos...</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#6ea106'}));}}>
               <Icon name="invert_colors" style={{color:'#6ea106'}}/>Aderezo</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#48ccf8'}));}}>
               <Icon name="invert_colors" style={{color:'#48ccf8'}}/>Almuerzo</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#ff7647'}));}}>
               <Icon name="invert_colors" style={{color:'#ff7647'}}/>Cena</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#c614ff'}));}}>
               <Icon name="invert_colors" style={{color:'#c614ff'}}/>Contorno</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#ffb347'}));}}>
               <Icon name="invert_colors" style={{color:'#ffb347'}}/>Desayuno</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#4857f8'}));}}>
               <Icon name="invert_colors" style={{color:'#4857f8'}}/>Ensalada</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#a17a06'}));}}>
               <Icon name="invert_colors" style={{color:'#a17a06'}}/>Sopa</MenuItem>
             <MenuItem onClick={()=>{ dispatch(setRecipeSearchCategoria({searchCategoria:'#ff47a2'}));}}>
               <Icon name="invert_colors" style={{color:'#ff47a2'}}/>Postre</MenuItem>
         </Menu>
       </div>

       <div style={{display: 'inline-block',marginLeft:'10px'}}>
         <Switch ripple id="switch1" onChange={()=>{dispatch(setRecipeSearchFavorito({searchFavorito:
         searchRecipeReducer.hasOwnProperty('searchFavorito')?(!searchRecipeReducer.searchFavorito):false}));}}
           checked={searchRecipeReducer.hasOwnProperty('searchFavorito')?searchRecipeReducer.searchFavorito:false} >
           <Icon name="grade" style={{color:'rgba(187, 55, 125, 1)'}} /></Switch>
       </div>
      </div>
    );
  }
}

export default connect(
  (state)=>{
    return state;
  }
)(RecipeHead);
