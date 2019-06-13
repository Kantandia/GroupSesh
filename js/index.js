<<<<<<< HEAD
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
=======
var number_of_rows = 3;
var total_hours = 0;
var total_cost = 0;

function re_compute()
{
    var hour_cost = document.getElementById("hour_cost").value;
    var extra_cost = document.getElementById("extra_hour_cost").value;
    if(hour_cost && hour_cost)
    {
        // Move across available rows
        for(i = 1 ; i <= number_of_rows; i++)
        {
            if(document.getElementById("start_" + i).value != undefined && document.getElementById("end_" + i).value != undefined)
            var hour_1 = document.getElementById("start_" + i).value;
            var hour_2 = document.getElementById("end_" + i).value;


            if(hour_2 < hour_1)
            {
                // Only calculate if the times are correct
                //alert("Hours in row " + i + " are not correct.");
            }
            else
            {
                // Raw-Basic hour calculation, no minutes involved
                var hours = hour_2.split(':')[0] - hour_1.split(':')[0];
                document.getElementById("hours_" + i).value = hours;
                // Keep the total hours
                total_hours += hours;
                document.getElementById("total_hours").innerHTML = "$" + total_hours;
                if(document.getElementById("type_" + i).value == "Normal")
                {
                    // Compute normal hours
                    document.getElementById("cost_" + i).innerHTML = "$" + hour_cost;
                    document.getElementById("total_" + i).innerHTML = "$" + (hour_cost*hours);
                    total_cost += hour_cost*hours;
                }
                else
                {
                    // Compute extra hours
                    document.getElementById("cost_" + i).innerHTML = "$" + extra_cost;
                    document.getElementById("total_" + i).innerHTML = "$" + (extra_cost*hours);
                    total_cost += extra_cost*hours;
                }
                document.getElementById("total_cost").innerHTML = "$" + total_cost;
            }
        }
    }
    else
    {
        alert("Please type the cost of the normal and extra hours.");
    }
}
>>>>>>> master
