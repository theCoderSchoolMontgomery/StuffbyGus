

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

const database = firebase.firestore(app)

function getusers() {
  console.log("geting users....")
  database.collection("users").get().then((group) => {
    group.forEach((item) => {
      const info = item.data()
      console.log(info)

      const table = document.getElementById("table")
      let person = document.createElement("tr")

      let Name = document.createElement("td")
      Name.textContent = info.name
      Name.className="Apple"


      let password = document.createElement("td")
      password.textContent = info.password
      password.className="Apple"

      let points = document.createElement("td")
      points.textContent = info.points
      points.className="Apple"

//action.className="Apple"


      
      person.appendChild(Name)
      person.appendChild(password)
      person.appendChild(points)

      table.appendChild(person)



    })
  })
}
getusers()