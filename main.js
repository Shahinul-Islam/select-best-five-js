const players=[]
document.getElementById('players').addEventListener('click', function(event){
    

        if(event.target.classList[0]=='select-player'){
            const nameValue = (event.target.parentNode.children[1].innerText);
            if(players.length<5){
            players.push(nameValue)
            const ol = document.createElement("ol");
            ol.classList.add('list-disc')
            const li = document.createElement('li')
            li.innerText= nameValue
            ol.appendChild(li)
            document.getElementById('selected-players').appendChild(ol)
            event.target.disabled=true
            event.target.classList.add('bg-slate-100')
            }
            else if(players.length==5){
                alert('five players added')
                console.log(players)
            }
        }
        
        else{
            event.target.disabled=false;
            event.target.classList.add('bg-slate-300')
    
        }

    
    
})