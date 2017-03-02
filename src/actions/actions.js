import firebase, {firebaseRef,githubProvider} from '../FireBaseA';



function homeBoxCombiner(layerbox,objectBox,keyName,type){

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
      objectBox[type][key]["h"] = layerbox[type][i]["h"];
      objectBox[type][key]["i"] = layerbox[type][i]["i"];
      objectBox[type][key]["static"] = layerbox[type][i]["static"];
      objectBox[type][key]["w"] = layerbox[type][i]["w"];
      objectBox[type][key]["x"] = layerbox[type][i]["x"];
      objectBox[type][key]["y"] = layerbox[type][i]["y"];
      i++;
    }
  }
  return objectBox;
}

export var uploadBoxLayout = ()=>{
  return (dispatch, getState)=>{
    /*var todo ={
        text,
        completed:false,
        createdAt:moment().unix(),
        completedAt:null
      };*/
      //var uid = getState().authReducer.uid;
      var homeBoxLayouts = getState().homeBoxReducer;
      var layoutUP= {};
      layoutUP = homeBoxCombiner(homeBoxLayouts,layoutUP,"lgbox","lg");
      layoutUP = homeBoxCombiner(homeBoxLayouts,layoutUP,"mdbox","md");
      layoutUP = homeBoxCombiner(homeBoxLayouts,layoutUP,"smbox","sm");
      layoutUP = homeBoxCombiner(homeBoxLayouts,layoutUP,"xsbox","xs");
      layoutUP = homeBoxCombiner(homeBoxLayouts,layoutUP,"xxsbox","xxs");

    var homeBoxRef = firebaseRef.child(`homeBox`).set(layoutUP);


    return homeBoxRef.then(()=>{
      console.log("enviado");
    });

  };
};

export var setResetHomeBoxLayouts = ()=>{
  return{
    type:'SET_RESET_HOMEBOX_LAYOUTS'
  };
};
export var setHomeBoxLayouts = (layouts)=>{
  return{
    type:'SET_HOMEBOX_LAYOUTS',
    layouts
  };
};

function homBoxCtoL(cLayer,toLocLayer,type){
  for(var key in cLayer[type]){
    if(cLayer[type].hasOwnProperty(key)){
      toLocLayer[type].push({
        ...cLayer[type][key]
      });
    }
  }
  return toLocLayer;
}

export var downloadBoxLayout = ()=>{
  return (dispatch, getState)=>{

    /**** el Fume aca ****/
    //var uid = getState().authReducer.uid;/// No necesario para leer data publica
    var layoutsRef = firebaseRef.child('homeBox');

    return layoutsRef.once('value').then((snapshot)=>{
      var layoutsDW = snapshot.val() || {}; //firebase prop to get data
      var cToL = {lg:[],md:[],sm:[],xs:[],xxs:[]};
      //redux expect to be an Array Object
      //we conver it
      cToL = homBoxCtoL(layoutsDW,cToL,"lg"); cToL = homBoxCtoL(layoutsDW,cToL,"md");
      cToL = homBoxCtoL(layoutsDW,cToL,"sm"); cToL = homBoxCtoL(layoutsDW,cToL,"xs");
      cToL = homBoxCtoL(layoutsDW,cToL,"xxs");

      dispatch(setHomeBoxLayouts(cToL));
    });

    /****Fin del Fume aca ****/
  };
};


/********* CONTENIDO DE HOMEBOX *******/

export var setHomeBoxItems = (homBoxItems) =>{
  return{
    type:'SET_HOMEBOX_ITEMS',
    homBoxItems
  };
};
export var startSetHomBoxItems = () =>{
  return (dispatch,getState)=>{
    var homBoxItemsRef = firebaseRef.child(`homeBoxItems`);
    return homBoxItemsRef.once('value').then((snapshot)=>{
      var homBoxItems = snapshot.val() || {}; //firebase prop to get data
      dispatch(setHomeBoxItems(homBoxItems));
    });
  };
};
/********* FIN CONTENIDO DE HOMEBOX *******/



export var editorMode = ()=>{
  return{
    type:'EDITOR_MODE'
  };
}

export var login = (userData)=>{
  return{
    type:'LOGIN',
    userData
  };
};

export var startLogin = ()=>{
  return (dispatch, getState)=>{
      return firebase.auth().signInWithPopup(githubProvider)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
          }
      );
    };
};

export var logout = ()=>{
  return{
    type:'LOGOUT',
  };
};

export var startLogout = ()=>{
  return (dispatch, getState)=>{
    return firebase.auth().signOut().then(
      ()=> {
        console.log('Logout Worked: ');
      }
    );
  };
};
