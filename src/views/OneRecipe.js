import React, { Component } from 'react';
import OneRecipeBox from '../components/RecipeBox/OneRecipeBox'
class OneRecipe extends Component {
  render() {
    return (
      <div>
        <OneRecipeBox repId={this.props.params.repId}/>
      </div>
    );
  }
}
export default OneRecipe;
