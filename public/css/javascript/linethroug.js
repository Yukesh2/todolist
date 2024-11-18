function toggleLineThrough(element) {
    if (element.checked) {
      document.querySelectord('.paragraph').style.textDecoration = "line-through";
    }
    else {
      document.querySelector('.paragraph').style.textDecoration = "none";
    }
    
  }