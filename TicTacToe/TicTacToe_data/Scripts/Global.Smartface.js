function Global_Events_OnStart(e)
{
    SES.Configuration.useAnalytics = true;
    Device.setGPSStatus(1);
}