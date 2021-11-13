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

function calculate_gap(gap) {
  
    gap = parseInt((gap * 10) / 13, 10);
    if (gap < 1) 
        return 1;
    return gap;
  }
    
  
  async function CombSort() {
    let bars = document.querySelectorAll(".bar");
    var tt = document.getElementById("myRange").value;
    var delay = Math.floor(700-tt);
    
    var gap = bars.length;
    
    let swapped = true;
    
    while (gap != 1 || swapped == true) {
      
      
      gap = calculate_gap(gap);
    
      
      swapped = false;
    
      for (var i = 0; i < bars.length - gap; i++) {
        
        
        var value1 = parseInt(bars[i].childNodes[0].innerHTML);
        var value2 = parseInt(bars[i + gap].childNodes[0].innerHTML);
        bars[i].style.backgroundColor = "orange";
        bars[i + gap].style.backgroundColor = "orange";
        await timeout(delay);
        if (value1 > value2) {
          
          
          bars[i].style.backgroundColor = "red";
          bars[i + gap].style.backgroundColor = "red";

          var temp1 = bars[i].style.height;
          var temp2 = bars[i].childNodes[0].innerText;

          bars[i].style.height = bars[i + gap].style.height;
          bars[i].childNodes[0].innerText = bars[i + gap].childNodes[0].innerText;
          bars[i + gap].style.height = temp1;
          bars[i + gap].childNodes[0].innerText = temp2;

          swapped = true;
          await timeout(delay);
        }
        
        bars[i].style.backgroundColor = "rgb(0, 183, 255)";
    
        
        bars[i + gap].style.backgroundColor = "rgb(0, 183, 255)";
      }
    }
    for (var x = 0; x < bars.length; x++) {
      bars[x].style.backgroundColor = "#57F287";
    }
    
    enable();
  }