function pgGame_Self_OnShow(e)
{
    SES.Analytics.eventLog("pgGame",'{\"function\":\"game_page_is_shown\"}');
    Pages.pgGame.CntScoreBoard.LblX.text=i;
    Pages.pgGame.CntScoreBoard.LblO.text=j;
   /* if(Device.deviceOS=="Android")
    {
        Pages.pgGame.btnBack.visible=false;
    } */

        Pages.pgGame.gameButton1.alpha=0.1;
        Pages.pgGame.gameButton2.alpha=0.1;
        Pages.pgGame.gameButton3.alpha=0.1;
        Pages.pgGame.gameButton4.alpha=0.1;
        Pages.pgGame.gameButton5.alpha=0.1;
        Pages.pgGame.gameButton6.alpha=0.1;
        Pages.pgGame.gameButton7.alpha=0.1;
        Pages.pgGame.gameButton8.alpha=0.1;
        Pages.pgGame.gameButton9.alpha=0.1;

    Pages.pgGame.Rectangle1.visible=false;
    reset();
    roundCnt=0;
}
function pgGame_Self_OnKeyPress(e)
{
    if(e.keyCode==4)
    {
        SES.Analytics.eventLog("pgGame",'{\"function\":\"back_button_is_pressed\"}');
        Application.exit();
    }
}
//Let the game begin!!!
var isPressed1=0;
var isPressed2=0;
var isPressed3=0;
var isPressed4=0;
var isPressed5=0;
var isPressed6=0;
var isPressed7=0;
var isPressed8=0;
var isPressed9=0;
var sqr1="";
var sqr2="";
var sqr3="";
var sqr4="";
var sqr5="";
var sqr6="";
var sqr7="";
var sqr8="";
var sqr9="";
var turn=0;    //0->X, 1->O
var moveCount=0;
var isGameOver=0;
var roundCnt=0;
var i=0;
var j=0;
function checkX()
{
    if(sqr1=="X" && sqr2=="X" && sqr3=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr4=="X" && sqr5=="X" && sqr6=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr7=="X" && sqr8=="X" && sqr9=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr1=="X" && sqr5=="X" && sqr9=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr1=="X" && sqr4=="X" && sqr7=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr2=="X" && sqr5=="X" && sqr8=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr3=="X" && sqr6=="X" && sqr9=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr1=="X" && sqr5=="X" && sqr9=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr3=="X" && sqr5=="X" && sqr7=="X")
    {
        alert("X Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"X\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        i++;
        Pages.pgGame.CntScoreBoard.LblX.text=i;
        Pages.pgGame.Rectangle1.visible=true;
    }
}
function checkO()
{
    if(sqr1=="O" && sqr2=="O" && sqr3=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr4=="O" && sqr5=="O" && sqr6=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr7=="O" && sqr8=="O" && sqr9=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr1=="O" && sqr5=="O" && sqr9=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr1=="O" && sqr4=="O" && sqr7=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr2=="O" && sqr5=="O" && sqr8=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr3=="O" && sqr6=="O" && sqr9=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr1=="O" && sqr5=="O" && sqr9=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
    else if(sqr3=="O" && sqr5=="O" && sqr7=="O")
    {
        alert("O Wins!");
        SES.Analytics.eventLog("pgGame",'{\"winner\":\"O\"}');
        Pages.pgGame.resetTimer.active=true;
        isGameOver=1;
        roundCnt++;
        j++;
        Pages.pgGame.CntScoreBoard.LblO.text=j;
        Pages.pgGame.Rectangle1.visible=true;
    }
}
function drawCheck()
{
    if(isGameOver==0)
    {
        moveCount = isPressed1 + isPressed2 + isPressed3 + isPressed4 + isPressed5 + isPressed6 + isPressed7 + isPressed8 + isPressed9;
        if(moveCount == 9)
        {
            alert("Draw!");
            SES.Analytics.eventLog("pgGame",'{\"winner\":\"Draw\"}');
            Pages.pgGame.resetTimer.active=true;
            isGameOver=1;
            roundCnt++;
            Pages.pgGame.Rectangle1.visible=true;
        }
    }
}
function reset()
{
    Pages.pgGame.CntGameBoard.gameButton1.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton2.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton3.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton4.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton5.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton6.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton7.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton8.defaultImage="resources://b.png";
    Pages.pgGame.CntGameBoard.gameButton9.defaultImage="resources://b.png";
    Pages.pgGame.Rectangle1.visible=false;
    if(roundCnt % 2 == 0)
    {
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
        turn=0;
    }
    else
    {
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
        turn=1;
    }
    sqr1 = "";
    sqr2 = "";
    sqr3 = "";
    sqr4 = "";
    sqr5 = "";
    sqr6 = "";
    sqr7 = "";
    sqr8 = "";
    sqr9 = "";
    isPressed1=0;
    isPressed2=0;
    isPressed3=0;
    isPressed4=0;
    isPressed5=0;
    isPressed6=0;
    isPressed7=0;
    isPressed8=0;
    isPressed9=0;
    moveCount =0;
    isGameOver=0;
}
function pgGame_gameButton1_OnPressed(e)
{
    if(turn==0 && isPressed1==0)
    {
        Pages.pgGame.CntGameBoard.gameButton1.defaultImage="resources://x.png";
        sqr1="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed1==0)
    {
        Pages.pgGame.CntGameBoard.gameButton1.defaultImage="resources://o.png";
        sqr1="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed1=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton2_OnPressed(e)
{
    if(turn==0 && isPressed2==0)
    {
        Pages.pgGame.CntGameBoard.gameButton2.defaultImage="resources://x.png";
        sqr2="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed2==0)
    {
        Pages.pgGame.CntGameBoard.gameButton2.defaultImage="resources://o.png";
        sqr2="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed2=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton3_OnPressed(e)
{
    if(turn==0 && isPressed3==0)
    {
        Pages.pgGame.CntGameBoard.gameButton3.defaultImage="resources://x.png";
        sqr3="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed3==0)
    {
        Pages.pgGame.CntGameBoard.gameButton3.defaultImage="resources://o.png";
        sqr3="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed3=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton4_OnPressed(e)
{
    if(turn==0 && isPressed4==0)
    {
        Pages.pgGame.CntGameBoard.gameButton4.defaultImage="resources://x.png";
        sqr4="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed4==0)
    {
        Pages.pgGame.CntGameBoard.gameButton4.defaultImage="resources://o.png";
        sqr4="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed4=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton5_OnPressed(e)
{
    if(turn==0 && isPressed5==0)
    {
        Pages.pgGame.CntGameBoard.gameButton5.defaultImage="resources://x.png";
        sqr5="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed5==0)
    {
        Pages.pgGame.CntGameBoard.gameButton5.defaultImage="resources://o.png";
        sqr5="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed5=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton6_OnPressed(e)
{
    if(turn==0 && isPressed6==0)
    {
        Pages.pgGame.CntGameBoard.gameButton6.defaultImage="resources://x.png";
        sqr6="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed6==0)
    {
        Pages.pgGame.CntGameBoard.gameButton6.defaultImage="resources://o.png";
        sqr6="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed6=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton7_OnPressed(e)
{
    if(turn==0 && isPressed7==0)
    {
        Pages.pgGame.CntGameBoard.gameButton7.defaultImage="resources://x.png";
        sqr7="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed7==0)
    {
        Pages.pgGame.CntGameBoard.gameButton7.defaultImage="resources://o.png";
        sqr7="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed7=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton8_OnPressed(e)
{
    if(turn==0 && isPressed8==0)
    {
        Pages.pgGame.CntGameBoard.gameButton8.defaultImage="resources://x.png";
        sqr8="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed8==0)
    {
        Pages.pgGame.CntGameBoard.gameButton8.defaultImage="resources://o.png";
        sqr8="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed8=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_gameButton9_OnPressed(e)
{
    if(turn==0 && isPressed9==0)
    {
        Pages.pgGame.CntGameBoard.gameButton9.defaultImage="resources://x.png";
        sqr9="X";
        turn=1;
        Pages.pgGame.CntScoreBoard.turnLabel.text="O can go";
    }
    else if(turn==1 && isPressed9==0)
    {
        Pages.pgGame.CntGameBoard.gameButton9.defaultImage="resources://o.png";
        sqr9="O";
        turn=0;
        Pages.pgGame.CntScoreBoard.turnLabel.text="X can go";
    }
    isPressed9=1;
    checkX();
    checkO();
    drawCheck();
}
function pgGame_resetTimer_OnTimer(e)
{
    reset();
    Pages.pgGame.CntGameBoard.ActivityIndicator1.visible=false;
    Pages.pgGame.Rectangle1.visible=false;
    Pages.pgGame.resetTimer.active=false;
}

if(Device.deviceOS=="iOS")
{
if(Device.screenHeight > 500)
{

// iphone5 icin goruntu duzenleme
Pages.pgGame.logo.left="40 dpi";
Pages.pgGame.logo.width="245 dpi";

Pages.pgGame.CntMenu.top="430 dpi";
Pages.pgGame.CntMenu.left="30 dpi";
Pages.pgGame.CntMenu.width="260 dpi";
Pages.pgGame.CntMenu.height="50 dpi";

Pages.pgGame.CntGameBoard.width="260 dpi";
Pages.pgGame.CntGameBoard.height="245 dpi";
Pages.pgGame.CntGameBoard.left="30 dpi";
Pages.pgGame.CntGameBoard.top="145 dpi";

}
}
function pgGame_ImgBtnInfo_OnPressed(e){
    SES.Analytics.eventLog("pgGame",'{\"function\":\"info_button_is_pressed\"}');
    Pages.pgInfo.show();
}
function pgGame_LblStart_OnTouch(e){
    Pages.pgGame.ConMenu.LblStrtPre.visible = true;
    Pages.pgGame.CntGameBoard.ActivityIndicator1.visible=true;
    Pages.pgGame.Rectangle1.visible=true;
    Pages.pgGame.resetTimer.active=true;
    i=0;
    j=0;
    Pages.pgGame.CntScoreBoard.LblX.text=i;
    Pages.pgGame.CntScoreBoard.LblO.text=j;
}
function pgGame_LblStart_OnTouchEnded(e){
    Pages.pgGame.ConMenu.LblStrtPre.visible = false;
}
function pgGame_LblRe_OnTouch(e){
    Pages.pgGame.ConMenu.LblRePre.visible = true;
    Pages.pgGame.CntGameBoard.ActivityIndicator1.visible=true;
    Pages.pgGame.Rectangle1.visible=true;
    Pages.pgGame.resetTimer.active=true;
}
function pgGame_LblRe_OnTouchEnded(e){
    Pages.pgGame.ConMenu.LblRePre.visible = false;
}