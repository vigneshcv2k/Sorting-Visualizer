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

async function Partition(l, r, delay) {
    var blocks = document.querySelectorAll(".bar");
    
    
    var pivot = 
    Number(blocks[r].childNodes[0].innerHTML);
    var i = l - 1;
    blocks[r].style.backgroundColor = "red";
    
    for (var j = l; j <= r - 1; j++) {
      
      
      blocks[j].style.backgroundColor = "yellow";
      
      await timeout(delay);
      var value = 
      Number(blocks[j].childNodes[0].innerHTML);
    
      
      if (value < pivot) {
        i++;
        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = temp1;
        blocks[i].childNodes[0].innerText =
        blocks[j].childNodes[0].innerText;
        blocks[j].childNodes[0].innerText = temp2;
        blocks[i].style.backgroundColor = "orange";
        if (i != j) blocks[j].style.backgroundColor = "pink";
        
        await timeout(delay);
      } else blocks[j].style.backgroundColor = "pink";
    }
    
    i++;
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[r].style.height;
    blocks[r].style.height = temp1;
    blocks[i].childNodes[0].innerText =
    blocks[r].childNodes[0].innerText;
    blocks[r].childNodes[0].innerText = temp2;
    blocks[r].style.backgroundColor = "pink";
    blocks[i].style.backgroundColor = "green";
    
    
    await timeout(delay);

    for (var k = 0; k < blocks.length; k++) 
    blocks[k].style.backgroundColor = "#6b5b95";
    return i;
  }

async function QuickSort(l, r, delay)
{
    if(l < r)
    {
        var pivot_index = await Partition(l, r, delay);
        await QuickSort(l, pivot_index-1, delay);
        await QuickSort(pivot_index+1, r, delay);
    }
    var bars = document.querySelectorAll(".bar");
    for(var k=0;k<=r;++k)
      bars[k].style.backgroundColor = "#57F287";
      
}

async function RunQS(){
  var tt = document.getElementById("myRange").value;
  var tot = Math.floor(700-tt);
  var delay = tot;
  await QuickSort(0, document.querySelectorAll(".bar").length-1, delay);
  enable();
}