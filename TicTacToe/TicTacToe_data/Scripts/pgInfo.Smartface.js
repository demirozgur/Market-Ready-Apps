function pgInfo_Self_OnKeyPress(e)
{
    if(e.keyCode==4)
    {
        SES.Analytics.eventLog("pgInfo",'{\"function\":\"back_button_is_pressed\"}');
        Pages.back();
        Pages.pgInfo.ConMenu.CopyofLblnew.visible = false;
        Pages.pgInfo.ConMenu.CopyofLblCon.visible = false;
    }
}

function pgInfo_Self_OnShow(e)
{
    SES.Analytics.eventLog("pgInfo",'{\"function\":\"info_page_is_shown\"}');
    Pages.pgInfo.Label5.text = "©Copyright 2013 Mobinex";
    Pages.pgInfo.ConMenu.CopyofLblnew.visible = false;
    Pages.pgInfo.ConMenu.CopyofLblCon.visible = false;
}
if(Device.deviceOS=="iOS")
{
    if(Device.screenHeight > 500)
    {
// iphone5 icin goruntu duzenleme
        Pages.pgInfo.logo.left="40 dpi";
        Pages.pgInfo.logo.width="245 dpi";
        Pages.pgInfo.CntMenu.top="430 dpi";
        Pages.pgInfo.CntMenu.left="30 dpi";
        Pages.pgInfo.CntMenu.width="260 dpi";
        Pages.pgInfo.CntMenu.height="50 dpi";
    }
}
function pgInfo_Label3_OnTouch(e){
    SMF.Net.browseOut("http://www.mobinex.biz/");
}
function pgInfo_Label4_OnTouch(e){
    SMF.Net.browseOut("http://www.mobinex.biz/sas");
}

function pgInfo_LblCon_OnTouch(e){
    Pages.pgInfo.ConMenu.CopyofLblCon.visible = true;
}

function pgInfo_LblCon_OnTouchEnded(e){
Pages.pgInfo.ConMenu.CopyofLblCon.visible = false;
    SES.Analytics.eventLog("pgInfo",'{\"function\":\"game_is_continued\"}');
    Pages.pgGame.show();
}