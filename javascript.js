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
