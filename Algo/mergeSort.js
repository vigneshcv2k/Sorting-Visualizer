function enable(){
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    arr = document.getElementsByClassName("btn2")
    for(var i=0; i<arr.length; ++i)
    {
        arr[i].disabled = false;
        arr[i].style.backgroundColor = "#7289DA"
        document.getElementById("myRange").disabled = false;
    document.getElementById("myRange").style.backgroundColor = "#2294d6";
    }
  }
  
async function timeout(delay){
    return new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, delay)
        );
}

async function MergeArray(l,m,r, delay)
{
    var bars = document.querySelectorAll(".bar");
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var LH = new Array(n1);
    var R = new Array(n2);
    var RH = new Array(n2);

    for(var i=0;i<n1;++i)
    {
        L[i] = parseInt(bars[l+i].childNodes[0].innerHTML);
        LH[i] = bars[l+i].style.height;
    }
    for(var j=0;j<n2;++j)
    {
        R[j] = parseInt(bars[m+j+1].childNodes[0].innerHTML);
        RH[j] = bars[m+j+1].style.height;
    }

    var i = 0
    var j =0
    var k = l;
    while(i < n1 && j < n2)
    {
        if(L[i] <= R[j])
        {
            bars[k].style.backgroundColor = "red";
            bars[k].childNodes[0].innerHTML = L[i];
            bars[k].style.height = LH[i];
            
            ++i;
            await timeout(delay);
            bars[k].style.backgroundColor = "rgb(0, 183, 255)";
        }
        else
        {
            bars[k].style.backgroundColor = "red";
            bars[k].childNodes[0].innerHTML = R[j];
            bars[k].style.height = RH[j];
            ++j;
            await timeout(delay);
            bars[k].style.backgroundColor = "rgb(0, 183, 255)";
        }
        ++k;
    }
    while(i < n1)
    {
        bars[k].childNodes[0].innerHTML = L[i];
        bars[k].style.height = LH[i];
        await timeout(delay);
        bars[k].style.backgroundColor = "rgb(0, 183, 255)";
        ++k;
        ++i;
        
    }
    while(j < n2)
    {
        bars[k].childNodes[0].innerHTML = R[j];
        bars[k].style.height = RH[j];
        await timeout(delay);
        bars[k].style.backgroundColor = "rgb(0, 183, 255)";
        ++k;
        ++j;
    }
    for(var h=0;h<k;++h)
        bars[h].style.backgroundColor = "#57F287";
}


async function MergeSort(l=0, r=document.querySelectorAll(".bar").length-1, delay)
{
    if(l < r)
    {
    var m =l+ parseInt((r-l)/2);
    await MergeSort(l, m, delay);
    await MergeSort(m+1, r, delay);
    await MergeArray(l, m, r, delay);
    await timeout(delay);
    }
}

async function RunMS(){

    var tt = document.getElementById("myRange").value;
    var tot = Math.floor(700-tt);
    console.log(tot);
    await MergeSort(0, document.querySelectorAll(".bar").length-1, tot);
    enable();
}