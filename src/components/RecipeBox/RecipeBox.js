import React, { Component } from 'react';
import {connect} from 'react-redux';

import '../../css/recipebox.css';

import RecipeHead from './RecipeHead';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';


class RecipeBox extends Component {

  componentWillMount(){

  }
  render() {  /*overlap  es un prop en Badge*/
    return (
      <div>
        <RecipeHead/>
      <RecipeList/>
      <AddRecipe/>
    </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(RecipeBox);
