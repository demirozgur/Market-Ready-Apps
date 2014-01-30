function pgFirst_Self_OnShow(e)
{
    SES.Analytics.eventLog("pgFirst",'{\"function\":\"first_page_is_shown\"}');
    /*   if(Device.deviceOS=="Android")
       {
           Pages.pgFirst.btnExit.visible=false;
       }  */
    Pages.pgFirst.Timer1.active=true;
    Pages.pgFirst.Timer10.active=true;
}
function pgFirst_Timer1_OnTimer(e)
{
    Pages.pgFirst.Cnt.xImage1.visible=true;
    Pages.pgFirst.Timer2.active=true;
}
function pgFirst_Timer2_OnTimer(e)
{
    Pages.pgFirst.Timer1.active=false;
    Pages.pgFirst.Cnt.oImage2.visible=true;
    Pages.pgFirst.Timer3.active=true;
}
function pgFirst_Timer3_OnTimer(e)
{
    Pages.pgFirst.Timer2.active=false;
    Pages.pgFirst.Cnt.xImage3.visible=true;
    Pages.pgFirst.Timer4.active=true;
}
function pgFirst_Timer4_OnTimer(e)
{
    Pages.pgFirst.Timer3.active=false;
    Pages.pgFirst.Cnt.oImage6.visible=true;
    Pages.pgFirst.Timer5.active=true;
}
function pgFirst_Timer5_OnTimer(e)
{
    Pages.pgFirst.Timer4.active=false;
    Pages.pgFirst.Cnt.xImage9.visible=true;
    Pages.pgFirst.Timer6.active=true;
}
function pgFirst_Timer6_OnTimer(e)
{
    Pages.pgFirst.Timer5.active=false;
    Pages.pgFirst.Cnt.oImage8.visible=true;
    Pages.pgFirst.Timer7.active=true;
}
function pgFirst_Timer7_OnTimer(e)
{
    Pages.pgFirst.Timer6.active=false;
    Pages.pgFirst.Cnt.xImage7.visible=true;
    Pages.pgFirst.Timer8.active=true;
}
function pgFirst_Timer8_OnTimer(e)
{
    Pages.pgFirst.Timer7.active=false;
    Pages.pgFirst.Cnt.oImage4.visible=true;
    Pages.pgFirst.Timer9.active=true;
}
function pgFirst_Timer9_OnTimer(e)
{
    SES.Analytics.eventLog("pgFirst","xox_application_is_opened");
    Pages.pgFirst.Timer8.active=false;
    Pages.pgFirst.Cnt.xImage5.visible=true;
    Pages.pgFirst.menuact.visible=true;
    Pages.pgFirst.menu.visible=false;
    Pages.pgFirst.Timer9.active=false;

}
function pgFirst_Self_OnKeyPress(e)
{
    if(e.keyCode==4)
    {
        SES.Analytics.eventLog("pgFirst",'{\"function\":\"application_is_closed\"}');
        Application.exit();
    }
}
function pgFirst_btnStartGame_OnPressed(e)
{
    SES.Analytics.eventLog("pgFirst",'{\"function\":\"new_game_is_started\"}');
    Pages.pgGame.show();
}
function pgFirst_btnAbout_OnPressed(e)
{
    SES.Analytics.eventLog("pgFirst",'{\"function\":\"info_button_is_pressed\"}');
    Pages.pgInfo.show();
}
if(Device.deviceOS=="iOS")
{
    if(Device.screenHeight > 500)
    {
// iphone5 icin goruntu duzenleme
        Pages.pgFirst.logo.left="40 dpi";
        Pages.pgFirst.logo.width="245 dpi";
        Pages.pgFirst.CntMenu.top="430 dpi";
        Pages.pgFirst.CntMenu.left="30 dpi";
        Pages.pgFirst.CntMenu.width="260 dpi";
        Pages.pgFirst.CntMenu.height="50 dpi";
        Pages.pgFirst.Cnt.width="260 dpi";
        Pages.pgFirst.Cnt.height="245 dpi";
        Pages.pgFirst.Cnt.left="30 dpi";
        Pages.pgFirst.Cnt.top="145 dpi";
    }
}
function pgFirst_Timer10_OnTimer(e){
    Pages.pgGame.show();
    Pages.pgFirst.Timer10.active=false;
}