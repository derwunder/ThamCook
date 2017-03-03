import React, { Component } from 'react';
import {connect} from 'react-redux';

import FacebookProvider, { Comments } from 'react-facebook';

import '../../css/onerecipebox.css';
import {List,ListItem,Icon} from 'react-mdl';

import {startCheckIfRecipeExist} from '../../actions/actionsRecipeBox';


class OneRecipeBox extends Component {
  constructor(props){
    super(props);

    this.renderVideo=this.renderVideo.bind(this);

    var {dispatch}=this.props;
    dispatch(startCheckIfRecipeExist(this.props.repId));
  }
  componentWillMount(){

  }
  renderVideo(embedUrl) {
    return (<div style={{display:'block',marginTop:'15px' ,marginBottom:'25px' }}>
      <iframe style={{width:'85%', height:'410px'}}
        //width='560'
        //height='315'
        src={embedUrl}  //"https://www.youtube.com/embed/ErDkRerNKvQ?autoplay=0&showinfo=0"
        frameBorder='0'
        allowFullScreen
      />
    </div>);
  }
  render() {  /*overlap  es un prop en Badge*/

    var{recipeBoxReducer} =this.props;

  /*  if(recipeBoxReducer.hasOwnProperty(this.props.repId)){
      console.log("RecipeITEM: "+JSON.stringify(recipeBoxReducer[this.props.repId]));
    }*/

    var itemData={};
    recipeBoxReducer.map((item)=>{
        if(item.id=== this.props.repId){
          return itemData=item; //console.log("Recipe Found: "+JSON.stringify(item));
        }
        else{ return{};}
      });
      //ob=[];
      //console.log(ob+"");

      var youtube_parser = (url) =>{
          var match = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
          return match[1];
      }
      var embedUrl="";
  if(itemData.hasOwnProperty('urlVid')){
      if(itemData.urlVid!=='')
          embedUrl= "https://www.youtube.com/embed/"+youtube_parser(itemData.urlVid)+"?autoplay=0&showinfo=0";
      else
           embedUrl=""
  }

//console.log("item data: "+JSON.stringify(itemData));


    return (
      <div className="onerecipe">
        <h3>Tham Recipe</h3>
        <div style={{display:'block'}}>
          <div style={{display:'inline-block'}}>
            <img src={itemData.hasOwnProperty('urlImg')? itemData.urlImg :''}  alt="Picc recipe"/>
            <h5 style={{backgroundColor:itemData.hasOwnProperty('categCol')? itemData.categCol :'#777'}}>{itemData.hasOwnProperty('titulo')? itemData.titulo :''}</h5>
          </div>
        <div style={{display:'inline-block',verticalAlign:'top', textAlign:'left'}}>
        <List>
          <ListItem>
            <Icon name="timelapse"/> {itemData.hasOwnProperty('tmp')? itemData.tmp+" Min de Preparacion" :''}
          </ListItem>
          <ListItem>
            <Icon name="alarm"/> {itemData.hasOwnProperty('tmc')? itemData.tmc+" Min de Cocia" :''}
          </ListItem>
          <ListItem>
          <Icon name="restaurant"/> {itemData.hasOwnProperty('tms')? itemData.tms+" Min para Servir" :''}
          </ListItem>
          <ListItem>
            <Icon name="alarm_on"/> {itemData.hasOwnProperty('tmt')? itemData.tmt+" Min en total" :''}
          </ListItem>
        </List>
      </div>
      <div style={{display:'block',textAlign:'center' }}>
        <div style={{display:'block'}}>
        <div style={{display:'inline-block', verticalAlign: 'top', textAlign:'justify', maxWidth:'640px'}}>
        <List>
          <ListItem>
             {itemData.hasOwnProperty('descr')? itemData.descr:''}
          </ListItem>
        </List>
      </div></div>
        <div style={{display:'inline-block', verticalAlign: 'top',textAlign:'justify', maxWidth:'480px'}}>
          <h5 style={{backgroundColor:itemData.hasOwnProperty('categCol')? itemData.categCol :'#777'}}>Ingredientes</h5>
          <List>
            {itemData.hasOwnProperty('ingr')?
            itemData.ingr.split('\n').map((item,key) => {
           return <ListItem key={key}><Icon name="done"/>{item}</ListItem>
         }) :'' }
         </List>
        </div>
        <div style={{display:'inline-block', verticalAlign: 'top',textAlign:'justify', maxWidth:'480px'}}>
          <h5 style={{backgroundColor:itemData.hasOwnProperty('categCol')? itemData.categCol :'#777'}}>Instrucciones</h5>
          <List>
            {itemData.hasOwnProperty('instr')?
            itemData.instr.split('\n').map((item,key) => {
           return <ListItem key={key}><Icon name={"filter_"+((key+1)<10?key+1:'9_plus')}/>{item}</ListItem>
         }) :'' }
         </List>
        </div>
        </div>

        {embedUrl!==''?this.renderVideo(embedUrl):<div/>}
    </div>

    {/*recipeEditorReducer.hasOwnProperty('instr'))?
      recipeEditorReducer.instr.split('\n').map((item,key) => {
     return <span key={key}>{item}<br/></span> } ):''

        {/*}<div style={{width:'100%'}}>
      <FBComments appId="1427254193961203"
        href={"https://192.168.0.14:3000/#/Recipes/"+this.props.repId}
        width={750}
        numPosts={5}
        locale="fr_CA"/>
    </div>*/}

        <div style={{width:'100%'}}>
        <FacebookProvider appID="1427254193961203">
                <Comments href={"https://192.168.0.14:3000/#/Recipes/"+this.props.repId} />
              </FacebookProvider></div>

        {/*}<div className="fb-comments"
          data-href={"https://192.168.0.14:3000/#/Recipes/"+this.props.repId} //"https://developers.facebook.com/docs/plugins/comments#configurator"
           data-width="100%" data-numposts="5"></div>*/}
    </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(OneRecipeBox);
