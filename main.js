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
            ol.classList.add('p-2')
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


//function to get the input value
function getInputValue(inputId){
    if((parseFloat(document.getElementById(inputId).value))!=='number'){
        console.log('Enter any positive amount')
    }
    return (parseFloat(document.getElementById(inputId).value))
}

//calculate button functionality

document.getElementById('calculate').addEventListener('click', function (){
    const perPlayerBudget = getInputValue('per-player-budget');
    const playersBudget = perPlayerBudget*(players.length)
    document.getElementById('expenses').innerText = playersBudget;
})

