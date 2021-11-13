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

async function SelectionSort() {
    var tt = document.getElementById("myRange").value;
    var tot = Math.floor(700-tt);
    var delay = tot;
    bars = document.querySelectorAll(".bar");
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) {

        
        min_idx = i;

        
        bars[i].style.backgroundColor = "orange";
        for (var j = i + 1; j < bars.length; j += 1) {

        bars[j].style.backgroundColor = "red";
            
        
        await timeout(delay);

        
        var val1 = parseInt(bars[j].childNodes[0].innerHTML);

        
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
            
        
        if (val1 < val2) {
            if (min_idx !== i) {

            
            bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
            }
            min_idx = j;
        } else {

            
            bars[j].style.backgroundColor = " rgb(24, 190, 255)";
        }
        }

        
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        
        
        await timeout(delay);

        
        bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

        
        bars[i].style.backgroundColor = " #57F287";
    }
    enable();
}