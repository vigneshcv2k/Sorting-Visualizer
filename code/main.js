var value;
const container = document.querySelector(".data-container");
async function randomgeneratebars(num = 20) {
    for (let i = 0; i < num; i += 1) 
    {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}
async function generate()
{
window.location.reload();
}

function disable()
{
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
arr = document.getElementsByClassName("btn2")
    for(var i=0; i<arr.length; ++i)
    {
        arr[i].disabled = true;
        arr[i].style.backgroundColor = "#d8b6ff"
    }
document.getElementById("myRange").disabled = true;
document.getElementById("myRange").style.backgroundColor = "#d8b6ff";
}

async function generatebars(){
    const val = document.getElementById("txt");
    if(val.value)
        {
            const ws = val.value.trim();
            console.log(ws);
            const value = ws.split(" ");
            while(value.length < 3)
                value.push(parseInt(Math.floor(Math.random() * 100) + 1));
                const p = value.slice(0,20);
            var myobj = document.querySelectorAll(".bar");
            for(f of myobj)
                f.remove();
            for(var i=0;i<p.length;++i)
            {
                if(p[i]!=100)
                    var point = p[i]%100;
                else 
                    var point = 100;
                const bar = document.createElement("div");
                bar.classList.add("bar");
                bar.style.height = `${point * 3}px`;
                bar.style.transform = `translateX(${i * 30}px)`;
                const barLabel = document.createElement("label");
                barLabel.classList.add("bar_id");
                barLabel.innerHTML = point;
                bar.appendChild(barLabel);
                container.appendChild(bar);
            }
            return;
        }
}   

async function redo()
{
    var myobj = document.querySelectorAll(".bar");
            for(f of myobj)
                f.remove();
    for(var i=0;i<redoVal.length; ++i)
    {
        var point = parseInt(redoVal[i].childNodes[0].innerHTML);
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${point * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = point;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

randomgeneratebars()
var redoVal = Array.from(document.querySelectorAll(".bar"));
redo()