// This function shows or hides an HTML element
function ShowHide(item) {
  var element = document.getElementById(item);
  var current_state = element.style.visibility;
  if( current_state == 'visible') {
        var new_state = 'hidden';
        var label = 'Show';
  } else {
        var new_state = 'visible';
        var label = 'Hide';
  }
  element.style.visibility = new_state;
  document.getElementById("ShowHide").innerHTML = label + ' goose';
}

// Resize the goose picture, as percentage of original image size
function ResizeGoose(){
  var size = document.getElementById("goose_size").value;
  var goose = document.getElementById("goose_img");
  goose.style.height = size + "%";
  goose.style.width = size + "%";
  document.getElementById("slider_size").innerHTML = size;
}

// Set the goose DIV element left and top property based on the current value of the Range input objects
function MoveGoose(){
  var left = document.getElementById("goose_horizontal").value;
  var top =  document.getElementById("goose_vertical").value;
  var goose = document.getElementById("goose");
  goose.style.left = left + "%";
  goose.style.top = top + "%";
  document.getElementById("slider_left").innerHTML = left;
  document.getElementById("slider_top").innerHTML = top;
}
