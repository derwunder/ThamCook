export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.userData
      };
    case 'LOGOUT':
      return {};
    case 'EDITOR_MODE':
      return {
        ...state,
        editorMode: !state.editorMode
      };
    default:
      return state;
  }
};

export var homeBoxReducer = (state={}, action) =>{
  switch (action.type) {
      case 'SET_HOMEBOX_LAYOUTS':
        return{
          ...action.layouts
          };
      case 'SET_RESET_HOMEBOX_LAYOUTS':
        return {};
    default:
      return state;
  }
};

export var homeBoxItemsReducer = (state={}, action) =>{
  switch (action.type) {
    case 'SET_HOMEBOX_ITEMS':
      return{
        ...state,
        ...action.homBoxItems
      };
    default:
      return state;
  }
};

export var homeGallReducer = (state=[],action)=>{
  switch (action.type) {
    case 'SET_HOME_GALL':
      return[
        ...state,
          ...action.gallBox
        ];
    case 'UPDATE_HOME_GALL_ITEM':
      return state.map((gallItem)=>{
        if(gallItem.ni=== action.ni){
          return {
            ...gallItem,
            ...action.gallBoxItem
          }
        }else {
          return gallItem;
        }
      });
    default:
      return state;

  }
}

export var homeBoxItemEditorReducer = (state={}, action)=>{
  switch (action.type) {
    case 'ADD_HOMEBOX_ITEM_INFO':
      return{
        ...state,
        ...action.itemInfo
      };
      case 'CLOSE_HOMEBOX_ITEM_INFO_ADD':
      return{
        ...state,
        isOpenDialogAdd:!state.isOpenDialogAdd
      };
      case 'DIALOG_HOMEBOX_ITEM_INFO_EDIT':
      return {
        ...state, isOpenDialogEdit:!state.isOpenDialogEdit, idEdition:''
      };
      case 'DIALOG_HOMEBOX_ITEM_INFO_DEL':
      return {
        ...state, isOpenDialogDel:!state.isOpenDialogDel
      };
      case 'DIALOG_GALL_EDIT':
      return {
        ...state, isOpenDialogGallEdit:!state.isOpenDialogGallEdit
      };
    default:
    return state;

  }
};
