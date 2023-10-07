import firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyA_Z0gxgrw84h9gzKMP_sLZSgvEm1M1cc4",
    authDomain: "selangkahtilljannah.firebaseapp.com",
    databaseURL: "https://selangkahtilljannah-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "selangkahtilljannah",
    storageBucket: "selangkahtilljannah.appspot.com",
    messagingSenderId: "507531732486",
    appId: "1:507531732486:web:a2100b01635dbca9cfc587",
    measurementId: "G-PFXD2PE9RC"
};

firebase.initializeApp(config);

export default firebase.database();