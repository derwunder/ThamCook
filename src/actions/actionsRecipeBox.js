import  {firebaseRef,fireStorageRef} from '../FireBaseA';


export var startRecipeItemUp = (newItem)=>{
  return (dispatch, getState)=>{

    var recipeItemRef = firebaseRef
    .child(`recipeItems/`).push(newItem);

    return recipeItemRef.then(()=>{
      location.reload();
    });

  };
};
export var recipeItemInfo = (recipeInfo)=>{
  return {
    type:'RECIPE_EDITOR_INFO',
    recipeInfo
  };
};

export var startImageRecipeUP = (img,recipeInfo) =>{
  return (dispatch, getState)=>{
    var uploadTask = fireStorageRef.child('images/recipes/' + img.name).put(img);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // See below for more detail
    }, function(error) {//HANDLE ERROR
    }, function() { //HANDLE SUCCESS
      var downloadURL = uploadTask.snapshot.downloadURL;
      dispatch(recipeItemInfo({[recipeInfo]:downloadURL}));
    });
  };
};

export var setRecipeItems = (recipeItems)=>{
  return{
    type:'ADD_RECIPES',
    recipeItems
  };
};
export var startDownloadRecipeItems = ()=>{
  return (dispatch, getState)=>{

    /**** el Fume aca ****/
    //var uid = getState().authReducer.uid;/// No necesario para leer data publica
    var recipeItemsRef = firebaseRef.child('recipeItems');

    return recipeItemsRef.once('value').then((snapshot)=>{
      var recipeItems = snapshot.val() || {};

      var parsedRecipeItems = []; //redux expect to be an Array Object
      //we conver it
      Object.keys(recipeItems).forEach((recipeItemId)=>{
        parsedRecipeItems.push({
            id: recipeItemId,
            ...recipeItems[recipeItemId]
        });
      });

      dispatch(setRecipeItems(parsedRecipeItems));
    });

    /****Fin del Fume aca ****/
  };
};

export var startCheckIfRecipeExist = (id) =>{
  return (dispatch,getState) =>{
    var recipeItemRef =firebaseRef.child(`recipeItems/${id}`);
    return recipeItemRef.once('value').then((snapshot) =>{
      var recipeItem= snapshot.val()||{};
      if(recipeItem.hasOwnProperty('titulo')){
        //console.log("You r able to");
      }else{
        //location.href = "localhost:3000/#/Recipes";
        //location.reload();
        //console.log("You r NOT able to");
        window.location.href='http://thamcook.dernv.com/#/Recipes';
        //location.reload('http://localhost:3000/#/Recipes');
      }
    });
  };
}

export var setRecipeSearchText = (searchText)=>{
  return {
    type:'SET_SEARCH_TEXT',
    searchText
  };
};
export var setRecipeSearchFavorito = ()=>{
  return {
    type:'SET_SEARCH_FAVORITO'
  };
};
export var setRecipeSearchCategoria = (searchCategoria)=>{
  return {
    type:'SET_SEARCH_CATEGORIA',
    searchCategoria
  };
};

export var startRecipeItemUpdate = (id, itemUpdates)=>{
  return (dispatch, getState)=>{
    //var uid = getState().authReducer.uid;
    var recipeItemRef = firebaseRef.child(`recipeItems/${id}`); //what is in child()can be write like `todos/${id}` ES6

    return recipeItemRef.update(itemUpdates).then(()=>{
      location.reload();  //dispatch(updateTodo(id,updates));
    });

  };
};
export var startRecipeItemDelete = (id)=>{
  return (dispatch, getState)=>{
    //var uid = getState().authReducer.uid;
    var recipeItemRef = firebaseRef.child(`recipeItems/${id}`); //what is in child()can be write like `todos/${id}` ES6

    return recipeItemRef.remove().then(()=>{
      location.reload();  //dispatch(updateTodo(id,updates));
    });

  };
};
