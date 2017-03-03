import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDd6HTYE-nitOvXhiGCj6rs9YJJYMHGzgQ",
    authDomain: "thamcook.firebaseapp.com",
    databaseURL: "https://thamcook.firebaseio.com",
    storageBucket: "thamcook.appspot.com",
    messagingSenderId: "583777225998"
  };
  firebase.initializeApp(config);
}catch(e){

}
export var githubProvider = new firebase.auth.GithubAuthProvider();
export var faceBookProvider = new firebase.auth.FacebookAuthProvider();
export var firebaseRef =   firebase.database().ref();
export var fireStorageRef = firebase.storage().ref();
export default firebase;


/*  fbRef.set({
    app:{
      name: 'TodoKeep',
      version:'1.0.0'
    },
    isRunnig: true,
    user:{
      name: 'Der',
      age: 25
    }
  });

  fbRef.child('user').set({
    name:'Pepe'
  });

  fbRef.update({
    isRunnig:false,
    'app/name': 'TodoKeeper'
  });

  fbRef.child('app').update({
    name:'TodoKEEP'
  });

  fbRef.once('value').then(
    (snapshot)=>{console.log('The Whole DB: ',snapshot.val());},
    (e)=>{console.log('Error fetching DB: ',e);}
  );
  */
