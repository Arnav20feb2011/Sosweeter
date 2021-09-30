// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCm0u6fdZBpngIh2F7hHTqQQUriAIjsmw4",
      authDomain: "sosweeter-9158f.firebaseapp.com",
      projectId: "sosweeter-9158f",
      storageBucket: "sosweeter-9158f.appspot.com",
      messagingSenderId: "999008722961",
      appId: "1:999008722961:web:da8ae1ef0263ac8f0991b0",
      measurementId: "G-RYE4VG26WH"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = kidKey;
      //Start code

      //End code
      });});}
getData();
