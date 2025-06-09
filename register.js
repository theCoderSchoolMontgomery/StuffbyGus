
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEk-1BpldC5EUpF_uIh2bf8MZLG6HV5v8",
  authDomain: "stuff-by-gus.firebaseapp.com",
  projectId: "stuff-by-gus",
  storageBucket: "stuff-by-gus.firebasestorage.app",
  messagingSenderId: "122087226908",
  appId: "1:122087226908:web:b6eb036029e6bfcdcb29d9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database=firebase.firestore(app)




console.log ("hello")

 function createUsers(){
 console.log("creating a new user")  
  //database.collection("users").add({
    //name:"SussyGus",
   // password:"QndgDGDd{}P648#$|j",
    //points:35
  //})

   const textbox=document.getElementById("textbox")
   const passwordbox=document.getElementById("passwordbox")
   database.collection("users").add({
     name:textbox.value,
     password:passwordbox.value,
     points:0
   })
 }

