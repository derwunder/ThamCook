import React, { Component } from 'react';
import '../../css/addbox.css';
import {connect} from 'react-redux';
import {hombeBoxItemInfo} from '../../actions/actionsHomeBoxItems';

import {Dialog, DialogContent} from 'react-mdl';
import {RadioGroup, Radio} from 'react-mdl';
import {FABButton,Icon} from 'react-mdl';


//import HomeItem1 from '../HomeItem1';

import AddBoxType1 from './AddBoxType1';
import AddBoxType2 from './AddBoxType2';



class AddBox extends Component {
  constructor(props) {
      super(props);
      /*this.state = {
      };*/
      this.handleOpen = this.handleOpen.bind(this);
      this.handleTypeBox = this.handleTypeBox.bind(this);
    }
    handleOpen(){
      console.log("New Box");
      var {dispatch} = this.props;
      dispatch(hombeBoxItemInfo({isOpenDialogAdd: true}));
      dispatch(hombeBoxItemInfo({typeIcon: 'tpi1'}));
      dispatch(hombeBoxItemInfo({urlImg: ''}));
      dispatch(hombeBoxItemInfo({urlImg1: ''}));
      dispatch(hombeBoxItemInfo({urlImg2: ''}));
      dispatch(hombeBoxItemInfo({urlImg3: ''}));
      dispatch(hombeBoxItemInfo({titulo:''}));
      dispatch(hombeBoxItemInfo({subtitulo:''}));
      dispatch(hombeBoxItemInfo({texto:''}));
    }

    handleTypeBox(event){
      var {dispatch} = this.props;
      dispatch(hombeBoxItemInfo({typeBox: event.target.value}));

    }


    componentDidMount(){

    }

  render(){
    var {homeBoxItemEditorReducer}= this.props

    return(
      <div className="addBox" >
        <div style={{position: 'fixed',  bottom: '10px', right: '20px'}}>
          <FABButton colored ripple onClick={this.handleOpen}>
            <Icon name="add" />
          </FABButton>
        </div>

          <Dialog  open={homeBoxItemEditorReducer.isOpenDialogAdd} style={{width:'auto'}}>
         <h4>Nuevo Contenedor</h4>
         <DialogContent>
           <RadioGroup name="type-con" value={homeBoxItemEditorReducer.typeBox} onChange={this.handleTypeBox}>
              <Radio value="tpb1" ripple >(Tipo 1 )</Radio>
              <Radio value="tpb2" ripple >(Tipo 2 )</Radio>
          </RadioGroup>

            {(homeBoxItemEditorReducer.typeBox==="tpb1")
            ? <AddBoxType1/> :<div/>}
            {(homeBoxItemEditorReducer.typeBox==="tpb2") ?<AddBoxType2/> :<div/>}


         </DialogContent>

       </Dialog>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)(AddBox);
