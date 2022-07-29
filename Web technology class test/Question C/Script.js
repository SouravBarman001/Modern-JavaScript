
function Student(name, email, likes, interest, comment) {
    this.name = name;
    this.email = email;
    this.likes = likes;
    this.interest = interest;
    this.comment = comment;

     this.show = function(){
        // console.log(name);
        // console.log(email);
        // console.log(likes);
        // console.log(interest);
        // console.log(comment);

        alert(name);
        alert(email);
        alert(likes);
        alert(interest);
        alert(comment);
    }
}

function showDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var likes = new Array();
    
    if (document.getElementById("campus").checked) {
        likes.push("Campus");
    }
    
    if (document.getElementById("students").checked) {
        likes.push("Students");
    }

    if (document.getElementById("location").checked) {
        likes.push("Locations");
    }

    if (document.getElementById("atmosphere").checked) {
        likes.push("Atmosphere");
    }

    if (document.getElementById("dorm").checked) {
        likes.push("Dorm Rooms");
    }

    if (document.getElementById("sports").checked) {
        likes.push("Sports");
    }
     
    var interest ;
     
    if (document.getElementById("friends").checked) {
         interest = "Friends";
    } else if (document.getElementById("tv").checked) {
         interest = "Telivision";
    } else if (document.getElementById("net").checked) {
         interest = "Internet";
    } else if (document.getElementById("other").checked) {
         interest = "Others";
    }

    var comment =  document.getElementById("comment").value;

    var student = new Student(name, email, likes, interest, comment);
    student.show();
}



function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("campus").checked = false;
    document.getElementById("students").checked = false;
    document.getElementById("location").checked = false;
    document.getElementById("atmosphere").checked = false;
    document.getElementById("dorm").checked = false;
    document.getElementById("sports").checked = false;
    document.getElementById("friends").checked = false;
    document.getElementById("tv").checked = false;
    document.getElementById("net").checked = false;
    document.getElementById("other").checked = false;
    document.getElementById("comment").value = "";
}




