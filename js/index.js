//this is the initialization of the Firebase database
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBSKh80cY311vAGqqqx8wQ8LpGTK1nNFps",
    authDomain: "antonytestlaunch001.firebaseapp.com",
    databaseURL: "https://antonytestlaunch001.firebaseio.com",
    projectId: "antonytestlaunch001",
    storageBucket: "antonytestlaunch001.appspot.com",
    messagingSenderId: "1064080719766",
    appId: "1:1064080719766:web:31ac9acb2fa527f0"
   };
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


//this will push the new "Employee Rcord to Firebase"
// Capture Button Click
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name =  "Test Name 2" ;//$("#name-input").val().trim();
    role =  "test role 2"; //$("#email-input").val().trim();
    startDate =  "01/01/2015"; //$("#age-input").val().trim();
    monthlyRate = 1000;

    // Code for handling the push
    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

//this event fires on any new employees added
database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    debugger;
    var sv = snapshot.val();

    //update the employee table and add any new rows
    var recordName = sv.name;
    var recordRole = sv.role;
    var recordStartDate = sv.startDate;
    var recordMonthsWorked = currentDate

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
