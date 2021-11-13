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

  async function Heapify(n, i, delay) {
    var bars = document.querySelectorAll(".bar");
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 
    
    
    if (
      l < n &&
      Number(bars[l].childNodes[0].innerHTML) >
        Number(bars[largest].childNodes[0].innerHTML)
    )
      {
        bars[l].style.backgroundColor = "red";
        bars[largest].style.backgroundColor = "orange";
        var g = largest
        await timeout(delay);
        largest = l;
        bars[l].style.backgroundColor = "rgb(0, 183, 255)";
        bars[g].style.backgroundColor = "rgb(0, 183, 255)";
      }
    
    
    if (
      r < n &&
      Number(bars[r].childNodes[0].innerHTML) >
        Number(bars[largest].childNodes[0].innerHTML)
    )
      {
        bars[r].style.backgroundColor = "red";
        bars[largest].style.backgroundColor = "orange";
        var g = largest
        await timeout(delay);
        largest = r;
        bars[r].style.backgroundColor = "rgb(0, 183, 255)";
        bars[g].style.backgroundColor = "rgb(0, 183, 255)";
      }
    
    
    if (largest != i) {
      bars[largest].style.backgroundColor = "orange";
      bars[i].style.backgroundColor = "red";
      var temp1 = bars[i].style.height;
      var temp2 = bars[i].childNodes[0].innerText;
      bars[i].style.height = bars[largest].style.height;
      bars[largest].style.height = temp1;
      bars[i].childNodes[0].innerText =
      bars[largest].childNodes[0].innerText;
      bars[largest].childNodes[0].innerText = temp2;
      await timeout(delay);
      bars[largest].style.backgroundColor = "rgb(0, 183, 255)";
      bars[i].style.backgroundColor = "rgb(0, 183, 255)";
      
      await timeout(delay);
      
      await Heapify(n, largest, delay);
    }
  }
    
  
  async function HeapSort(n=document.querySelectorAll(".bar").length) {
    var bars = document.querySelectorAll(".bar");

    var tt = document.getElementById("myRange").value;
    var delay = Math.floor(700-tt);
    
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await Heapify(n, i, delay);
    }
    
    
    for (var i = n - 1; i > 0; i--) {
    
      
      var temp1 = bars[i].style.height;
      var temp2 = bars[i].childNodes[0].innerText;
      bars[i].style.height = bars[0].style.height;
      bars[0].style.height = temp1;
      bars[i].childNodes[0].innerText = 
      bars[0].childNodes[0].innerText;
      bars[0].childNodes[0].innerText = temp2;
      bars[i].style.backgroundColor = "#57F287";
      bars[0].style.backgroundColor = "#57F287";
      timeout(delay);
      await Heapify(i, 0, delay);
    }
    enable();
  }