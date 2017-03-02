import React, { Component } from 'react';
import '../../css/homebox.css';

//import cooker from '../svg/cooker.png';
import $ from 'jquery';

import {Responsive, WidthProvider} from 'react-grid-layout';
var ResponsiveReactGridLayout = WidthProvider(Responsive);


import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';


import HandlerBox from './HandlerBox';
import HandlerBoxEditor from './HandlerBoxEditor';
import TwitterBox from '../TwitterBox';
import AddBox from '../AddBox/AddBox';


import HomeItemTp1 from './HomeItemTp1';
import HomeItemTp2 from './HomeItemTp2';

import {connect} from 'react-redux';
import {setHomeBoxLayouts} from '../../actions/actions';
import {hombeBoxItemInfo} from '../../actions/actionsHomeBoxItems';

class HomeBox extends Component {
  constructor(props) {
      super(props);

      //this.handleTap = this.handleTap.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      //this.homeBoxCombiner = this.homeBoxCombiner.bind(this);
      ///this.homBoxCtoL = this.homBoxCtoL.bind(this);



    }
    componentWillMount(){
      var {dispatch} =this.props;
      dispatch(hombeBoxItemInfo({isOpenDialogAdd: false}));
      dispatch(hombeBoxItemInfo({isOpenDialogEdit: false}));
      dispatch(hombeBoxItemInfo({isOpenDialogDel: false}));
      dispatch(hombeBoxItemInfo({typeBox: 'tpb1'}));
      dispatch(hombeBoxItemInfo({typeIcon: 'tpi1'}));
    }
    componentDidMount(){
      $('.handler-box').addClass('editor_off');
      $('.handler-box-editor').addClass('editor_off');
      $('.react-resizable-handle').addClass('editor_off');
      $('.addBox').addClass('editor_off');

    }
    forceUpdateHandler(){
      //window.open("http://www.w3schools.com");
    //  var d = document.getElementById("root");
      //d.classList.add("body-xxs");
      //this.forceUpdate();
      //location.reload();
      //window.resizeTo(window.screen.width-1,window.screen.height-1);

    }
    /*homeBoxCombiner(layerbox,objectBox,keyName,type){

      var helperSTR="{";
      for(var j=0; j < layerbox[type].length; j++){
        if(j+1< layerbox[type].length){
          helperSTR+="\""+keyName+(j+1)+"\"  : {}, ";
        }else{
          helperSTR+="\""+keyName+(j+1)+"\" : {}}";
        }
      }
      var helperObj= JSON.parse(helperSTR);
      objectBox[type]= helperObj;
      var i=0;
      for( var key in objectBox[type]){
        if(objectBox[type].hasOwnProperty(key)){
          objectBox[type][key] = layerbox[type][i]; i++;
        }
      }
      return objectBox;
    }
    homBoxCtoL(cLayer,toLocLayer,type){
      for(var key in cLayer[type]){
        toLocLayer[type].push({
          ...cLayer[type][key]
        });
      }
      return toLocLayer;
    }*/
    render() {
    //  console.log("Res Provider: "+Responsive);
  /*  var layoutLgMd = [
    {i: '1', x: 0, y: 0, w: 6, h: 6, static:false },
    {i: '2', x: 0, y: 1, w: 6, h: 6, static:false },
    {i: '3', x: 7, y: 1, w: 2, h: 2, static:false },
    {i: '4', x: 7, y: 1, w: 2, h: 9, static:false }

    ];
    var layoutSm = [
    {i: '1', x: 0, y: 0, w: 4, h: 6, static:false },
    {i: '2', x: 0, y: 1, w: 4, h: 6, static:false },
    {i: '3', x: 5, y: 1, w: 2, h: 2, static:false },
    {i: '4', x: 5, y: 1, w: 2, h: 9, static:false }
    ];
    var layoutXs = [
    {i: '1', x: 0, y: 0, w: 3, h: 6, static:false },
    {i: '2', x: 0, y: 1, w: 3, h: 6, static:false },
    {i: '3', x: 4, y: 1, w: 1, h: 2, static:false },
    {i: '4', x: 4, y: 1, w: 1, h: 9, static:false }
    ];
    var layoutXxs = [
    {i: '1', x: 2, y: 0, w: 2, h: 6, static:false },
    {i: '2', x: 2, y: 1, w: 2, h: 6, static:false },
    {i: '3', x: 2, y: 2, w: 1, h: 2, static:false },
    {i: '4', x: 2, y: 3, w: 2, h: 9, static:false }
    ];
    var layoutsPack = { lg:layoutLgMd,md:layoutLgMd,sm:layoutSm, xs:layoutXs, xxs:layoutXxs};
*/
    var heightPX = 38;




    var {dispatch, homeBoxReducer,authReducer,homeBoxItemsReducer} = this.props;
    //console.log("homeBOXProps: "+JSON.stringify(homeBoxReducer));


    /*var cloudLayer = {
      lg:{ lgbox1: {i: 1, x: 33, y: 0, w: 6, h: 6,static: false},
           lgbox2: {i: 2, x: 0, y: 44, w: 6, h: 6,static: false}},
      md:{ mdbox1: {i: 1, x: 0, y: 0, w: 55, h: 6,static: false},
           mdbox2: {i: 2, x: 0, y: 1, w: 6, h: 66,static: false}}
    };
    var localLayer = {
      lg:[{i: 1, x: 33, y: 0, w: 6, h: 6,static: false},
          {i: 2, x: 0, y: 44, w: 6, h: 6,static: false}],
      md:[{i: 1, x: 0, y: 0, w: 55, h: 6,static: false},
          {i: 2, x: 0, y: 1, w: 6, h: 66,static: false}]
    };*/



  //  console.log("TestOb3: "+JSON.stringify(testob3));

  /*  var testBackEnd={};
    testBackEnd=this.homeBoxCombiner(layoutsPack,testBackEnd,"lgbox","lg");
    testBackEnd=this.homeBoxCombiner(layoutsPack,testBackEnd,"mdbox","md");
    testBackEnd=this.homeBoxCombiner(layoutsPack,testBackEnd,"smbox","sm");
    testBackEnd=this.homeBoxCombiner(layoutsPack,testBackEnd,"xsbox","xs");
    testBackEnd=this.homeBoxCombiner(layoutsPack,testBackEnd,"xxsbox","xxs");
    console.log("TestBEup: "+JSON.stringify(testBackEnd));

  var cloudToLocalLayer ={lg:[],md:[],sm:[],xs:[],xxs:[]};
  cloudToLocalLayer = this.homBoxCtoL(testBackEnd,cloudToLocalLayer,"lg");
  cloudToLocalLayer = this.homBoxCtoL(testBackEnd,cloudToLocalLayer,"md");
  cloudToLocalLayer = this.homBoxCtoL(testBackEnd,cloudToLocalLayer,"sm");
  cloudToLocalLayer = this.homBoxCtoL(testBackEnd,cloudToLocalLayer,"xs");
  cloudToLocalLayer = this.homBoxCtoL(testBackEnd,cloudToLocalLayer,"xxs");

  console.log("TestBEdw: "+JSON.stringify(cloudToLocalLayer));*/


    /*var {dispatch} = this.props;
          dispatch(startSetHomeBoxLayouts(testBackEnd,cloudToLocalLayer));*/


    //document.getElementById("viewport").setAttribute("content", "width=524, initial-scale=0, maximum-scale=1.0, minimum-scale=0.25, user-scalable=yes");

    var parsedItemsTpb1 = []; //redux expect to be an Array Object
      //we conver it
      //console.log('HbiReTPB1: '+homeBoxItemsReducer.tpb1);
      if(homeBoxItemsReducer.tpb1){
        Object.keys(homeBoxItemsReducer.tpb1).forEach((id)=>{
          parsedItemsTpb1.push({
              id: id,
              typeBox:'tpb1',
              ...homeBoxItemsReducer.tpb1[id]
          });
        });
        //console.log("parTPB1: "+JSON.stringify(parsedItemsTpb1));
      }
      var parsedItemsTpb2 = []; //redux expect to be an Array Object
        //we conver it
        //console.log('HbiReTPB1: '+homeBoxItemsReducer.tpb1);
        if(homeBoxItemsReducer.tpb2){
          Object.keys(homeBoxItemsReducer.tpb2).forEach((id)=>{
            parsedItemsTpb2.push({
                id: id,
                typeBox:'tpb2',
                ...homeBoxItemsReducer.tpb2[id]
            });
          });
          //console.log("parTPB1: "+JSON.stringify(parsedItemsTpb1));
        }

       var  parsedItems=  parsedItemsTpb1.concat(parsedItemsTpb2);

        var homeItemsLoad = (item,index)=>{
          if(item.typeBox==='tpb1'){
            return <div key={item.id}><div className="testgrid">
                  <HandlerBox/><HandlerBoxEditor  item={item}/><HomeItemTp1  item={item} /></div></div>;
          }else if(item.typeBox==='tpb2'){
            return <div key={item.id}><div className="testgrid">
                  <HandlerBox/><HandlerBoxEditor  item={item}/><HomeItemTp2  item={item} /></div></div>;
          }else{
            return <div/>
          }

        };

  /*  var homeItemsTpb1Load = (item,index)=>{
      return <div key={item.id}><div className="testgrid">
            <HandlerBox/><HandlerBoxEditor  item={item}/><HomeItemTp1  item={item} /></div></div>;
    };

    var homeItemsTpb2Load = (item,index)=>{
      return <div key={item.id}><div className="testgrid">
            <HandlerBox/><HandlerBoxEditor  item={item}/><HomeItemTp2  item={item} /></div></div>;
    };*/
    /*var createLinkItem = function(item,index){
      return <NavItem2 key={item.title + index} href={item.href} svgPath={item.svgPath}/>;
    };


{this.props.navData.map(createLinkItem)} */


      return (<div>
        <ResponsiveReactGridLayout
           className="layout"
           layouts={homeBoxReducer}
           verticalCompact={true}
           autoSize={true}
           isResizable={true}
           rowHeight={heightPX}
           draggableHandle={".handler-box"}
           containerPadding={[1, 1]}
           margin={[5,5]}
           onLayoutChange={(layout,layouts)=>{

             //var { homeBoxReducer} = this.props;
             if(authReducer.pass && authReducer.editorMode){
                //console.log("You can Edit Home Box Bro");
                dispatch(setHomeBoxLayouts(layouts));
              //  console.log("homeBOX: "+JSON.stringify(layouts));
             }
             else{
               //console.log("You Can't Edit Home BOx");
             }
            // console.log("test Layout: "+JSON.stringify(testObject));
             //console.log("Your value after stringify: "+layouts.lg[0].w);


            /* var layoutsUP ={}
             layoutsUP=this.homeBoxCombiner(layouts,layoutsUP,"lgbox","lg");
             layoutsUP=this.homeBoxCombiner(layouts,layoutsUP,"mdbox","md");
             layoutsUP=this.homeBoxCombiner(layouts,layoutsUP,"smbox","sm");
             layoutsUP=this.homeBoxCombiner(layouts,layoutsUP,"xsbox","xs");
             layoutsUP=this.homeBoxCombiner(layouts,layoutsUP,"xxsbox","xxs");*/
                  // console.log("homeBOX: "+JSON.stringify(layoutsUP));
                   //console.log("homeBOX: "+JSON.stringify(layouts));

            }
          }
           breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
           cols={{lg: 8, md: 8, sm: 6, xs: 4, xxs: 2}}>


      <div className="testgrid" key={"4"}>
            <HandlerBox/>
            <TwitterBox/>
      </div>

      {parsedItems.map(homeItemsLoad)}
      {/*parsedItemsTpb1.map(homeItemsTpb1Load)}
      {parsedItemsTpb2.map(homeItemsTpb2Load)*/}

        </ResponsiveReactGridLayout>
        <AddBox/>
      </div>
      );
    }
  }

  export default connect(
    (state) => {
      return state;
    }
  )(HomeBox);
