function myFunction() { var input, filter, ul, li, a, i; input = document.getElementById("mySearch"); filter = input.value.toUpperCase(); ul = document.getElementById("myMenu"); li = ul.getElementsByTagName("li"); for (i = 0; i < li.length; i++) { a = li[i].getElementsByTagName("a")[0]; if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { li[i].style.display = ""; } else { li[i].style.display = "none"; } } } 

/* selection */
function Plan(evt, planName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(planName).style.display = "block";
  evt.currentTarget.className += " active";
}
