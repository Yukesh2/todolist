function toggleLineThrough(element) {
    if (element.checked) {
      document.getElementById("text").style.textDecoration = "line-through";
    }
    else {
      document.getElementById("text").style.textDecoration = "none";
    }
    
  }