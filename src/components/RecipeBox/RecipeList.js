import React, { Component } from 'react';
import {connect} from 'react-redux';

import RecipeItem from './RecipeItem';
import recipeAPI from '../../api/recipeAPI';

class RecipeList extends Component {

  componentWillMount(){

  }
  render() {  /*overlap  es un prop en Badge*/

    var {recipeBoxReducer, searchRecipeReducer}=this.props;

  /*  var renderTodos = () => {
    return TodoAPI.filterRecipes(todos, showCompleted, searchText).map((todo) =>{
      return (<Todo key={todo.id} {...todo}/>);
    });
  };*/

  var recipeItemsLoad = ()=>{
    return recipeAPI.filterRecipes(recipeBoxReducer,
      searchRecipeReducer.searchText,
      searchRecipeReducer.searchCategoria,
      searchRecipeReducer.searchFavorito).reverse().map((item) =>{
      return <RecipeItem key={item.id} item={item}/>;
    });
  };

    /*var recipeItemsLoad = (item,index)=>{
        return <RecipeItem key={item.id} item={item}/>;
    };*/

    return (
      <div style={{textAlign:'center'}}>
        {recipeItemsLoad()}
      {/*recipeBoxReducer.map(recipeItemsLoad)*/}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(RecipeList);
