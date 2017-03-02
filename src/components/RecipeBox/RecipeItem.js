import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


import {List,ListItem,Tooltip,Badge,Icon} from 'react-mdl';

import EditRecipe from './EditRecipe';


class RecipeItem extends Component {

  componentWillMount(){

  }
  render() {  /*overlap  es un prop en Badge*/
    return (
      <div className="recipeItemBox">
        <EditRecipe item={this.props.item}/>
        <div className="recipeItem">
          <div className="repIfa">{this.props.item.favorito?<Icon  name="grade"/>:''}</div>
          <div><Link to={"/Recipes/"+this.props.item.id}>
            <img alt="item img" src={this.props.item.urlImg}/>
            <h5 style={{backgroundColor:this.props.item.categCol}}>{this.props.item.titulo}</h5></Link>
          </div>
          <div>
            <List>
              <ListItem>
                <Tooltip   label={this.props.item.tmp+" min - preparacion"}>
                  <Badge text={this.props.item.tmp} noBackground >
                    <Icon  name="timelapse"/>
                  </Badge>
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip   label={this.props.item.tmc+" min - cocina"}>
                  <Badge text={this.props.item.tmc} noBackground>
                    <Icon  name="alarm"/>
                  </Badge>
                </Tooltip>
              </ListItem>
              <ListItem>
                <Tooltip   label={this.props.item.urlVid!==''?'Video Disponible':'Video no Disponible'}>
                  <Badge text={this.props.item.urlVid!==''?'Si':'No'} noBackground>
                    <Icon  name="subscriptions"/>
                  </Badge>
                </Tooltip>
              </ListItem>
            </List>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(RecipeItem);
