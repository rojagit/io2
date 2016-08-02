import {Injectable} from '@angular/core';
// if you've gone with the local installation approach, you'd use the following:
//import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
    public db: any;
    constructor() {
        const fbConf = {
        apiKey: "AIzaSyBUDq8SO-XuH_nkcHicKt6lce5-Jg7xbs0",
        authDomain: "tstrr01.firebaseapp.com",
        databaseURL: "https://tstrr01.firebaseio.com",
        storageBucket: "tstrr01.appspot.com",
    };
    firebase.initializeApp(fbConf);
     //   this.db = firebase.database().ref('/');
    }
}

// // Reference
// var key = ref.key;
// var rootRef = ref.root;
// var parentRef = ref.parent;

// // Query
// var queryRef = query.ref;

// // DataSnapshot
// ref.on("value", function(snapshot) {
//   var dataRef = snapshot.ref;
//   var dataKey = snapshot.key;
// });