function addUser(){
    player1_name=document.getElementById("play1").value;
     player2_name=document.getElementById("play2").value;
    
    localStorage.setItem("play1",player1_name);
     localStorage.setItem("play2",player2_name);
    window.location="game_page.html"
    
}