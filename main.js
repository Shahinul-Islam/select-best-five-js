const players=[]
document.getElementById('players').addEventListener('click', function(event){
        if(event.target.classList[0]=='select-player'){
            const nameValue = (event.target.parentNode.children[1].innerText);
            if(players.length<5){
            players.push(nameValue);
            const li = document.createElement('li');
            li.innerText= nameValue;
            document.getElementById('player-list').appendChild(li);
            event.target.disabled=true;
            event.target.classList.add('bg-slate-100');
            }
            else if(players.length==5){
                alert('five players added')
            }
        }
        
        else{
            event.target.disabled=false;
            event.target.classList.add('bg-slate-300')
        }
})


//function to get the input value
function getInputValue(inputId){
        return (parseFloat(document.getElementById(inputId).value))
}

//calculate button functionality

document.getElementById('calculate').addEventListener('click', function (){
    const perPlayerBudget = getInputValue('per-player-budget');
    if(isNaN(perPlayerBudget)){
        alert('input any positive value')
    }
    const playersBudget = perPlayerBudget*(players.length)
    document.getElementById('expenses').innerText = playersBudget;
})

//total calculate button functionality
document.getElementById('total-btn').addEventListener('click', function(){
   const mangerCoast = getInputValue('manager-cost');
   if(isNaN(mangerCoast)){
    alert('input any positive value')
}
   const coachCoast = getInputValue('coach-coast');
   if(isNaN(coachCoast)){
    alert('input any positive value')
}
   const playerExpString = document.getElementById('expenses').innerText;
   const playerExpense = parseFloat(playerExpString);
   const totalCoast =playerExpense + mangerCoast + coachCoast;
   document.getElementById('total').innerText = totalCoast;
})

