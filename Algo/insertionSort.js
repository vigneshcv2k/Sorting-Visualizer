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

async function InsertionSort() {
    let bars = document.querySelectorAll(".bar");
    var tt = document.getElementById("myRange").value;
    var delay = Math.floor(700-tt);
    
    bars[0].style.backgroundColor = " rgb(49, 226, 13)";
    for (var i = 1; i < bars.length; i += 1) {
    
      
      var j = i - 1;
    
      
      var key = 
      parseInt(bars[i].childNodes[0].innerHTML);
    
      
      var height = bars[i].style.height;

      
      bars[i].style.backgroundColor = "#582812";
        
      
      await timeout(delay);
    
      
      while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
        var tempH = bars[j+1].style.height;
        
        var tempV = parseInt(bars[j+1].childNodes[0].innerHTML);
        
        bars[j + 1].style.height = bars[j].style.height;
        
        bars[j + 1].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
        
        bars[j].style.height = tempH;
        
        bars[j].childNodes[0].innerHTML = tempV;
        
        bars[j].style.backgroundColor = "#582812";
        
        j = j - 1;
    
        
        await timeout(delay);
          
        
        for(var k=i;k>=0;k--){
          bars[k].style.backgroundColor = "#57F287";
        }
      }
    
      
      bars[j + 1].style.height = height;
      bars[j + 1].childNodes[0].innerHTML = key;
         
      
      await timeout(delay);
        
      
      bars[i].style.backgroundColor = "#57F287";
    }
    enable();
  }