function enable(){
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    arr = document.getElementsByClassName("btn2")
    for(var i=0; i<arr.length; ++i)
    {
        arr[i].disabled = false;
        arr[i].style.backgroundColor = "#7289DA"
    }
    document.getElementById("myRange").disabled = false;
    document.getElementById("myRange").style.backgroundColor = "#2294d6";
}

async function timeout(delay){
    return new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, delay)
        );
}

async function GnomeSort() {
    let bars = document.querySelectorAll(".bar");
    var tt = document.getElementById("myRange").value;
    var delay = Math.floor(700-tt);
    
    var pos = 0;
    
    while (pos < bars.length) {
      if (pos == 0) {
        pos++;
      }
    
      
      var value1 = parseInt(bars[pos].childNodes[0].innerHTML);
      var value2 = parseInt(bars[pos - 1].childNodes[0].innerHTML);

      
      if (value1 >= value2) {
        bars[pos].style.backgroundColor = "orange";
        bars[pos - 1].style.backgroundColor = "orange";
        await timeout(delay);
        pos++;
      } else {
        
        
        bars[pos].style.backgroundColor = "red";
        bars[pos - 1].style.backgroundColor = "red";
    
        var temp1 = bars[pos].style.height;
        var temp2 = bars[pos].childNodes[0].innerText;
        await timeout(delay);
        bars[pos].style.height = bars[pos - 1].style.height;
        bars[pos].childNodes[0].innerText = 
              bars[pos - 1].childNodes[0].innerText;
        bars[pos - 1].style.height = temp1;
        bars[pos - 1].childNodes[0].innerText = temp2;

        pos--;
      }
      
      for (var x = 0; x < bars.length; x++) {
        bars[x].style.backgroundColor = "rgb(0, 183, 255)";
      }
    }
    
    
    for (var x = 0; x < bars.length; x++) {
      bars[x].style.backgroundColor = "#57F287";
    }
    
    enable();
  }