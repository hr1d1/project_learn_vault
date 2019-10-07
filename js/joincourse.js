

function courseForm(){
  document.getElementById("joinform").style.display = "block";
  document.getElementById("courelist").style.display = "none";

}
function AddCourseForm(){
  document.getElementById("addform").style.display = "block";
  document.getElementById("courelist").style.display = "none";

}

function genCourseKey(){
    document.getElementById("coursecode").value = Math.random().toString(36).slice(2);
}

function joinCourse(){


  document.getElementById("joinform").style.display = "none";
  document.getElementById("courelist").style.display = "block";

  setTimeout(function(){
  document.location.href="courses.html";
},100);


}
function addCourse(){


  document.getElementById("addform").style.display = "none";
  document.getElementById("courelist").style.display = "block";

  setTimeout(function(){
  document.location.href="courses.html";
},100);


}
