let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


let formValidation = function() {
    let dateData = document.forms["akanEntry"]["data"].value
    let genderData = document.forms["akanEntry"]["gender"].value

    if (dateData == "" || genderData == "") {
        alert("Make sure all inputs are entered correctly to get your Akan name")
        return false;
    } else {

        getUserDetails();
    }
}

let getUserDetails = function() {
    let data = document.getElementById("data").value;
    let gender = document.getElementById("gender").value
    let genDate = new Date(data);
    genDate = genDate.getDay();
    alert(genDate);
    getAkanName(genDate, gender)
}

let display = document.getElementById("display")

let getAkanName = function(day, gender) {
    if (gender === "Male") {
        alert(maleAkanNames[day])
        alert(daysArray[day])
            // display.innerHTML = "Hello" + maleAkanNames[day]
        display.innerHTML = `Your Akan name is <strong> ${maleAkanNames[day]}</strong>  becuase you are a ${gender} born on ${daysArray[day]}`

    } else if (gender == "Female") {
        display.innerHTML = `Your Akan name is <strong> ${femaleAkanNames[day]} </strong>  becuase you are a ${gender} born on ${daysArray[day]}`
    }
}


let unhideElement = function() {

    var x = document.getElementById("hidden-display");
    x.style.display = "none";

}
