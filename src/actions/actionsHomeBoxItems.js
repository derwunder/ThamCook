import  {fireStorageRef,firebaseRef} from '../FireBaseA';


export var startHomeBoxItemUp = (newItem,typeBox)=>{
  return (dispatch, getState)=>{

    var homeBoxItemsRef = firebaseRef
    .child(`homeBoxItems/${typeBox}`).push(newItem);

    return homeBoxItemsRef.then(()=>{
      location.reload();
    });

  };
};
export var hombeBoxItemInfo = (itemInfo)=>{
  return {
    type:'ADD_HOMEBOX_ITEM_INFO',
    itemInfo
  };
};
export var startImageUP = (img,itemInfo) =>{
  return (dispatch, getState)=>{
    var uploadTask = fireStorageRef.child('images/homeBox/' + img.name).put(img);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // See below for more detail
    }, function(error) {//HANDLE ERROR
    }, function() { //HANDLE SUCCESS
      var downloadURL = uploadTask.snapshot.downloadURL;
      dispatch(hombeBoxItemInfo({[itemInfo]:downloadURL}));
    });
  };
};
export var startHomeBoxItemUpdate = (id,typeBox, itemUpdates)=>{
  return (dispatch, getState)=>{
    //var uid = getState().authReducer.uid;
    var homeBoxItemRef = firebaseRef.child(`homeBoxItems/${typeBox}/${id}`); //what is in child()can be write like `todos/${id}` ES6

    return homeBoxItemRef.update(itemUpdates).then(()=>{
      location.reload();  //dispatch(updateTodo(id,updates));
    });

  };
};
/*********** HOME GALL ITEMS ACTIONS *******/
export var startGallBoxUpdate = (gallItems)=>{
  return(dispatch,getState)=>{
    var gallBoxItemRef =firebaseRef.child(`homeGall`).set(gallItems);

    return gallBoxItemRef.then(()=>{
      location.reload();
    });
  };
};
export var setHomeGall = (gallBox)=>{
  return{
    type:'SET_HOME_GALL',
    gallBox
  };
};
export var updateHomeGallItem = (gallBoxItem,ni)=>{
  return{
    type:'UPDATE_HOME_GALL_ITEM',
    gallBoxItem,
    ni
  };
};
export var startGallImageUP = (img,ni) =>{
  return (dispatch, getState)=>{
    var uploadTask = fireStorageRef.child('images/homeBox/' + img.name).put(img);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // See below for more detail
    }, function(error) {//HANDLE ERROR
    }, function() { //HANDLE SUCCESS
      var downloadURL = uploadTask.snapshot.downloadURL;
      dispatch(updateHomeGallItem({original:downloadURL},ni));
    });
  };
};
export var downloadGallBox = ()=>{
  return (dispatch, getState)=>{
    var gallBoxRef = firebaseRef.child('homeGall');

    return gallBoxRef.once('value').then((snapshot)=>{
      var gallItems = snapshot.val() || {}; //firebase prop to get data

      var gallBox =[], i=0;
      Object.keys(gallItems).forEach((key)=>{
        if(key==='urlEmb'){
          gallBox.push({
              ni:i,
              urlEmb: gallItems[key]  });
        }else{
          gallBox.push({
              ni:i,
              original: gallItems[key]  });
        }i++;

        });

      //var gallBox={edit:gallItems,load:gallItemsLoad};

      dispatch(setHomeGall(gallBox));
    });

  };
};
/*********** END HOME GALL ITEMS ACTIONS *******/

export var startHomeBoxItemDelete = (id,typeBox )=>{
  return (dispatch, getState)=>{
    //var uid = getState().authReducer.uid;
    var homeBoxItemRef = firebaseRef.child(`homeBoxItems/${typeBox}/${id}`); //what is in child()can be write like `todos/${id}` ES6

    return homeBoxItemRef.remove().then(()=>{
      location.reload();  //dispatch(updateTodo(id,updates));
    });

  };
};


export var homeboxItemDialogDel = ()=>{
  return {type:'DIALOG_HOMEBOX_ITEM_INFO_DEL'};
};
export var homeboxItemDialogEdit = ()=>{
  return {type:'DIALOG_HOMEBOX_ITEM_INFO_EDIT'};
};
export var homeboxItemInfoClose = ()=>{
  return {type:'CLOSE_HOMEBOX_ITEM_INFO_ADD'};
};

export var homeGallDialogEdit = ()=>{
  return {type:'DIALOG_GALL_EDIT'};
};
