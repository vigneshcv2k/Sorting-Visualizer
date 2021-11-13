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

function swap(el1, el2, delay) {
    return new Promise((resolve) => {
          var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, delay);
        });
    });
}

async function BubbleSort() {

    var tt = document.getElementById("myRange").value;
    var delay = Math.floor(700-tt);

    var bars = document.querySelectorAll(".bar");

    for (var i = 0; i < bars.length; i += 1) {
        swapped = false;
        for (var j = 0; j < bars.length - i - 1; j += 1) {

            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";
  
            
            await timeout(delay);
  
            console.log("run");
            var value1 = Number(bars[j].childNodes[0].innerHTML);
            var value2 = Number(bars[j + 1]
                        .childNodes[0].innerHTML);
  
            
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1], delay);
                bars = document.querySelectorAll(".bar");
                swapped = true;
            }
  
            
            bars[j].style.backgroundColor = "rgb(0, 183, 255)";
            bars[j + 1].style.backgroundColor = "#rgb(0, 183, 255)";
        }
  
        
        
        bars[bars.length - i - 1]
                .style.backgroundColor = "#57F287";
        if(swapped==false)
            {
                for(var k=0;k<bars.length;++k)
                    bars[k].style.backgroundColor = "#57F287";
                break;
            }
    }
    enable();
}