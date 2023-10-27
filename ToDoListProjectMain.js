let myinput=document.getElementById("myinput");
let ul=document.getElementById("list");
myinput.addEventListener("keydown",(e)=>{
    if(e.key=="Enter")
    {
        let li=document.createElement("li");  
        let text=document.createTextNode(myinput.value);
        let icon=document.createElement("span");
        icon.innerHTML='<i class="fa-solid fa-trash-can"></i>'
        icon.querySelector("i.fa-trash-can").addEventListener("click",()=>{
            li.remove();
        })
        li.append(text,icon);
        ul.appendChild(li);    
        myinput.value="";  
        console.log(li.innerText);
    }
})
let mysearch=document.getElementById("mysearch")
mysearch.addEventListener("keyup",()=>{
    let str=String(mysearch.value);
    str=str.toLowerCase();
    let arr=document.querySelectorAll("li")
    arr.forEach((item)=>{
        if(!item.innerText.toLowerCase().includes(str))
        item.style.display="none";
        else
        item.style.display="list-item"
    })
})


