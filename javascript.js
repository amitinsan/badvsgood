/************ Bad (Code 1) *************/
// lengthy switch case to object

switch(id) {
    case '2':
    case 2:
    case '2012':
    case 2012:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.dailyNewsletter);
        break;
    case '7':
    case 7:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.WatchNewsletter);
        break;
    case '66':
    case 66:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.slideshowNewsletter);
        break;
    case '1169':
    case 1169:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.MorningNewsletter);
        break;
    case '28':
    case 28:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.wealthNewsletter);
        break;
    case '1':
    case 1:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.defaultListNewsletter);
        break;
    case '108':
    case 108:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.nioNewsletter);
        break;
    case '1722':
    case 1722:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.defenceNewsletter);
        break;
    case '2071':
    case 2071:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.techNewsletter);
        break;
    case '2070':
    case 2070:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.politicsNationNewsletter);
        break;
    default:
        objNewsletter.checkShowHook(objNewsletter.showHookArray.defaultListNewsletter);
    break;
    }
}



/************************ Good (Code 1) *************************/

var current = 'defaultListNewsletter';
var lsList = {
    2 : 'dailyNewsletter',
    2012 : 'dailyNewsletter',
    7 : 'WatchNewsletter',
    66: 'slideshowNewsletter',
    1169: 'MorningNewsletter',
    28: 'wealthNewsletter',
    1: 'defaultListNewsletter',
    108: 'nioNewsletter',
    1722: 'defenceNewsletter',
    2071: 'techNewsletter',
    2070: 'politicsNationNewsletter'
}
if(typeof lsList[id] != 'undefined') {
    current = lsList[id];
}

objNewsletter.checkShowHook(objNewsletter.showHookArray[current]);

/******************** End (Code 1) **************************/

/******************** Start (Code 2) **************************/

if($.inArray(2, ssoUserData.newsletter_subscribed) != -1){
   // console.log('You have allready subscribe for daily Newsletter');
    if($.inArray(7, ssoUserData.newsletter_subscribed) != -1){
     //   console.log('You have allreay subscribe for market Newsletter');
        if($.inArray(66, ssoUserData.newsletter_subscribed) != -1){
        //    console.log('You have allreay subscribe for SlideShow Newsletter');
            if($.inArray(1169, ssoUserData.newsletter_subscribed) != -1){
        //        console.log('You have allreay subscribe for Market Morning');
                if($.inArray(110, ssoUserData.newsletter_subscribed) != -1){
                //    console.log('You have allreay subscribe for Panache');
                    if($.inArray(28, ssoUserData.newsletter_subscribed) != -1){
                    //    console.log('You have allreay subscribe for wealth Edition');
                        if($.inArray(97, ssoUserData.newsletter_subscribed) != -1){
                        //    console.log('You have allreay subscribe for Mutual Fund');
                            if($.inArray(96, ssoUserData.newsletter_subscribed) != -1){
                            //    console.log('You have allreay subscribe for Sunday Wrap');
                                if($.inArray(1, ssoUserData.newsletter_subscribed) != -1){
                                //    console.log('You have allreay subscribe for Executive Wrap');
                                    if($.inArray(108, ssoUserData.newsletter_subscribed) != -1){
                                    //    console.log('You have allreay subscribe for inverstment opportunities');
                                        $('#newsWidgetSection > .newsBandSec').hide();
                                    }else{
                                        $('#newsWidgetSection > .newsBandSec').hide();
                                        $('#newsWidgetSection > .newsBandSec.newsletterWidget-108').show();
                                    }
                                }else{
                                    $('#newsWidgetSection > .newsBandSec').hide();
                                    $('#newsWidgetSection > .newsBandSec.newsletterWidget-1').show();
                                }
                            }else{
                                $('#newsWidgetSection > .newsBandSec').hide();
                                $('#newsWidgetSection > .newsBandSec.newsletterWidget-96').show();
                            }
                        }else{
                            $('#newsWidgetSection > .newsBandSec').hide();
                            $('#newsWidgetSection > .newsBandSec.newsletterWidget-97').show();
                        }
                    }else{
                        $('#newsWidgetSection > .newsBandSec').hide();
                        $('#newsWidgetSection > .newsBandSec.newsletterWidget-28').show();
                    }
                }else{
                    $('#newsWidgetSection > .newsBandSec').hide();
                    $('#newsWidgetSection > .newsBandSec.newsletterWidget-110').show();
                }
            }else{
                $('#newsWidgetSection > .newsBandSec').hide();
                $('#newsWidgetSection > .newsBandSec.newsletterWidget-1169').show();
            }
        }else{
            $('#newsWidgetSection > .newsBandSec').hide();
            $('#newsWidgetSection > .newsBandSec.newsletterWidget-66').show();
        }
    }else{
        $('#newsWidgetSection > .newsBandSec').hide();
        $('#newsWidgetSection > .newsBandSec.newsletterWidget-7').show();
    }
}else{
    $('#newsWidgetSection > .newsBandSec').hide();
    $('#newsWidgetSection > .newsBandSec.newsletterWidget-2').show();
}




var idArray = [2, 7, 66, 1169, 110, 28, 97, 96, 1, 108];
$.each(idArray, function (i, j) {
    if ($.inArray(j, ssoUserData.newsletter_subscribed) == -1) {
        $('#newsWidgetSection > .newsBandSec').hide();
        $('#newsWidgetSection > .newsBandSec.newsletterWidget-' + j).show();
        return false;
    }
})


/******************** End (Code 2) **************************/



