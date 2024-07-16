

var scores,roundScore,activePlayer,gameplaying,lastDice;

init();
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){
        var dice=Math.floor(Math.random()*6) +1;
        var diceDom=document.querySelector('.dice');
        diceDom.style.display='block';
        diceDom.src="dice-" + dice +".png";
        if(lastDice === 6 && dice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
        }
        //updating score
       else if(dice !== 1){
            roundScore += dice;
            
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
            //document.querySelector('#score-' + activePlayer).textContent=roundScore;
        }
        else{
            //NEXT PLAYER
        nextPlayer();
        }
        lastDice=dice;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
        scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent='winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.dice').style.display='none';
        gameplaying=false;
    }
    else{
        nextPlayer();
    }
    }
    

});

// changing the score

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    // document.getElementById('score-0').textContent='0';
    // document.getElementById('score-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gameplaying=true;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 0';
    document.getElementById('name-1').textContent = 'Player 1';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}


