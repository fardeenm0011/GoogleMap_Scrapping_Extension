var a = [
  "val",  //0
  "data", //1 
  "Start Process",  //2 
  "website",  //3 
  '<td width="200px"> ',  //4 
  "getSettings",  //5 
  "#start-search-form", //6 
  "addListener",  //7 
  "number_of_photos", //8 
  "<tr>", //9 
  "phone_number", //10 
  "gps",  //11 
  '" target="_blank"> URL </a>', //12
  "Inprogress", //13
  "removeClass",  //14 
  "hide", //15 
  "Finished", //16 
  "Are you sure you want to clear data!", //17 
  "#loading_section", //18 
  "Stop & Download CSV",  //19 
  "yes",  //20 
  "review_text",  //21 
  "click",  //22 
  "sendMessage",  //23 
  "FileReader", //24 
  "manual_stop",  //25 
  "review_pic", //26 
  "downloadCSV",  //27 
  "saveUISettings", //28 
  "review_scrape_limit",  //29 
  "command",  //30 
  "#totalScrappedItems",  //31 
  "#currentProcessedCount", //32 
  "addClass", //33 
  "#authResSection",  //34 
  "uiSettings", //35 
  ".export-data-btn", //36 
  "updateScrapeState",  //37 
  "stopAutoBotProcess", //38 
  "^((http|https)://|(mailto:)|(//))[a-z0-9]",  //39 
  "find", //40 
  "show", //41 
  "text", //42 
  "setSettingsValues",  //43 
  "You need to Enter valid keywords", //44 
  "tabs", //45 
  '<td width="200px">', //46 
  "business_name",  //47 
  "undefined",  //48 
  "length", //49 
  "total_scrapped_count", //50 
  "startSearchProcess", //51 
  "runtime",  //52 
  "plus_code",  //53 
  "scrape_status",  //54 
  "#review_scrape_limit", //55 
  "callback", //56 
  "</tr>",  //57 
  '<a href="',  //58 
  "You need to Enter review scrape limit",  //59 
  ".clear-data-btn",  //60 
  ".close-popup", //61 
  "query",  //62 
  "Blob", //63 
  "FileList", //64 
  "stop-proccess-btn",  //65 
  "html", //66 
  "current_processed_count",  //67 
  "start-proccess-btn", //68 
  "</td>",  //69 
  "close",  //70 
  "#upload_error_msg",  //71 
  "File", //72 
  "preventDefault", //73 
  "load", //74 
  "onMessage",  //75 
  "last_item_index",  //76 
  ".clear-data-btn,.export-data-btn", //77 
  "ready" //78, total:79
];

(function (b, e) 
  {
  var f = function (g) {
      while (--g) {
      b.push(b.shift());
      }
  };
  f(++e);
  }
  (a, 196)
);
var b = function (c, d) {
c = c - 0;
var e = a[c];
return e;
};
var errorSection = b("0x21"); //b(33) : addClass
var loadingSection = b("0x3b"); //b(59) : You need to Enter review scrape limit
var regexCSV = /.csv$/;
var urlRegex = new RegExp(b("0x1"), "i"); //b(1) : data
var myIndexObj = {
uiSettings: {}, 
load: function () {
  myIndexObj.addEvents();
  myIndexObj.setSettingsValues();
  myIndexObj[b("0x4e")]();  //b(78) : ready
}, 
addEvents: function () {
  $(document).on("click", b("0x17"), function (c) { //b(23) : sendMessage
    self[b("0x20")]();  //b(32) : #currentProcessedCount  //close popup operation
  });
  $(document).on("click", b("0x4d"), function (c) { //b(77) : .clear-data-btn,.export-data-btn
    c[b("0x23")](); //b(35) : uiSettings
    sendMessage({command: b("0x44"), data: {}}, function (d) {}); //b(68): start-proccess-btn
  });
///////////////*** Scraping start ***////////////////////////////

  $(document).on("click", "#scarping-start", function (c) { //b(77) : .clear-data-btn,.export-data-btn
      
    var search_URL = 'https://www.google.com/maps/search/';
    //  var search_URL_business_name = document.getElementById("Keywords_input").value;
    search_URL = search_URL.contact(search_URL_business_name); 
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   var currentTab = tabs[1];
    //   search_URL = currentTab.url;
    // });
    // fetch("http://127.0.0.1:5000", {
    // method: "POST",
    // headers: {
    //   "Content-Type": "application/json"
    // },
    // body: JSON.stringify({
    //     "message": "Scraping start",
    //     "Search_count" : document.getElementById("review_scrape_limit").value,
    //     "Search_URL" : search_URL
    //   })
    // })
    // .then(response => response.json())
    // .then(function(response) {
      
    // });
    return this.http.post<any>("http://127.0.0.1:5000" + '/scaping', search_URL);
  });

////////////////////////////////////////////////////////////////////
  $(document).on(b("0x3f"), b("0x16"), function (c) { //b(63) : Blob, b(22) : click
    if (confirm(b("0x3a"))) { //b(58) : <a href=
      c.preventDefault();
      sendMessage({command: b("0x2e")}, function (d) {  //b(46) : <td width="200px">
        myIndexObj[b("0x4c")] = d[b("0x4c")]; //b(76) : last_item_index
        myIndexObj[b("0x4c")][b("0x26")] = 0; //b(76) : last_item_index, b(38) : stopAutoBotProcess
        myIndexObj[b("0x4c")][b("0x1d")] = 0; //b(76) : last_item_index, b(29) : review_scrape_limit
        myIndexObj.uiSettings.scrapped_items_arr = [];
        sendMessage({command: b("0x45"), data: myIndexObj[b("0x4c")]}, function (f) { //b(69) : </td>, b(76) : last_item_index
          location.reload();
        });
      });
    }
  });
  $(document).on("submit", b("0x2f"), function (c) {  //b(47) : business_name
    c[b("0x23")](); //b(35) : uiSettings
    var d = $(this);
    var f = false;
    var g = $(this)[b("0x2")]("#Keywords_input")[b("0x29")](); //b(2) : Start Process, b(41) : show
    var h = $(this).find(b("0x11"))[b("0x29")](); //b(17) : "Are you sure you want to clear data!, b(41) : show
    $(errorSection)[b("0x38")](); //b(56) : callback
    $(b("0x4b"))[b("0x38")]();  //b(75) : onMessage, b(56) : callback
    var i = $(this)[b("0x2")]('[type="submit"]'); //b(2) : Start Process
    if (i[b("0x4")]() == b("0x2b")) { //b(4) : <td width="200px">, b(43) : setSettingsValues
      if (g != "") {
        if (String(g)[b("0xb")] < 2) { //b(11) : gps
          $(errorSection)[b("0x4")](b("0x6"));  //b(4) : <td width="200px">, b(6) : #start-search-form
          $(errorSection)[b("0x3")]();  //b(3) : website
          return false;
        }
      } 
      else {
        f = true;
      }
      if (String(h)[b("0xb")] == 0) { //b(11) : gps
        $(errorSection)[b("0x4")](b("0x15")); //b(4) : <td width="200px">, b(21) : review_text
        $(errorSection)[b("0x3")]();  //b(3) : website
        return false;
      }
      if (f == true) {
        $(errorSection)[b("0x4")]("You need to Enter keywords");  //b(4) : <td width="200px">
        $(errorSection)[b("0x3")]();  //b(3) : website
        return false;
      } 
      else {
        i[b("0x4")](b("0x3c")); //b(4) : <td width="200px">, b(60) : .clear-data-btn
        i[b("0x37")](b("0x1e"));  //b(55) : #review_scrape_limit, b(30) : command
        i[b("0x4a")](b("0x1b"));  //b(74) : load, b(27) : downloadCSV
        $(b("0x27"))[b("0x3")](); //b(39) : ^((http|https)://|(mailto:)|(//))[a-z0-9], b(3) : website
        $(b("0x49"))[b("0x4")](0);  //b(73) : preventDefault, b(4) : <td width="200px">
        sendMessage({command: b("0xd"), data: {Keywords_input: g, review_scrape_limit: h}}, function (j) {}); //b(13) : Inprogress
      }
    } 
    else {
      i[b("0x4")]("Start Process"); //b(4) : <td width="200px"></td>
      i[b("0x37")](b("0x1b"));  //b(55) : #review_scrape_limit, b(27) : downloadCSV
      i.addClass(b("0x1e"));  //b(30) : command
      sendMessage({command: b("0x0"), reason: b("0x42")}, function (j) {}); //b(0) : val, b(66) : html
    }
  });
}, 
setSettingsValues: function () {
  sendMessage({command: b("0x2e")}, function (c) {  //b(46) : <td width="200px">
    myIndexObj[b("0x4c")] = c[b("0x4c")]; //b(76) : last_item_index
    var d = myIndexObj[b("0x4c")][b("0x10")]; //b(76) : last_item_index, b(16) : Finished
    var e = myIndexObj[b("0x4c")][b("0x46")]; //b(76) : last_item_index, b(70) : close
    $("#review_scrape_limit")[b("0x29")](e);  //b(41) : show
    var f = $(b("0x2f"))[b("0x2")]('[type="submit"]');  //b(47) : business_name, b(2) : Start Process
    if (d == b("0x39")) { //b(57) : </tr>
      f.text(b("0x2b"));  //b(43) : setSettingsValues
      f.removeClass(b("0x1b")); //b(27) : downloadCSV
      f[b("0x4a")]("start-proccess-btn");  //b(74) : load
    } else if (d == b("0x36")) {  //b(54) : scrape_status
      f.text("Stop & Download CSV");
      f[b("0x37")](b("0x1e"));  //b(55) : #review_scrape_limit, b(30) : command 
      f.addClass("stop-proccess-btn");
    } else {
      f.text(b("0x2b"));  ////b(43) : setSettingsValues
      f[b("0x37")](b("0x1b"));  //b(55) : #review_scrape_limit, b(27) : downloadCSV
      f[b("0x4a")](b("0x1e"));  //b(74) : load, b(30) : command 
    }
  });
}, 
browserSupportFileUpload: function () {
  var c = false;
  if (window[b("0x22")] && window[b("0x41")] && window[b("0x1a")] && window[b("0x19")]) { //b(34) : #authResSection, b(65) : stop-proccess-btn, b(26) : review_pic, b(25) : manual_stop
    c = true;
  }
  return c;
}, 
updateScrapeState: function () {
  sendMessage({command: b("0x2e")}, function (c) {  //b(46) : <td width="200px">
    myIndexObj.uiSettings = c[b("0x4c")]; //b(76) : last_item_index
    var d = myIndexObj[b("0x4c")][b("0xc")];  //b(76) : last_item_index, b(12) = " target="_blank"> URL </a>
    var e = myIndexObj.uiSettings[b("0x1d")]; //b(29) : review_scrape_limit
    $("#currentProcessedCount")[b("0x4")](e); //b(4) : <td width="200px">
    $(b("0x48")).text(d); //b(72) : File
    myIndexObj[b("0x5")](); //b(5) : getSettings
    myIndexObj.showScrapeItemsList();
  });
}, 
showScrapeItemsList: function () {
  sendMessage({command: b("0x2e")}, function (c) {  //b(46) : <td width="200px">
    myIndexObj[b("0x4c")] = c[b("0x4c")]; //b(76) : last_item_index
    var d = myIndexObj[b("0x4c")].scrapped_items_arr; //b(76) : last_item_index
    var e = "";
    for (var f = 0; f < d[b("0xb")]; f++) { //b(11) : gps
      e += b("0x32") + //b(50) : total_scrapped_count, 
          b("0x8") + (f + 1) +  //b(8) : number_of_photos, 
          b("0x1f") + '<td width="200px">' +  //b(31) : #totalScrappedItems,  
          d[f][b("0x9")] +  //b(9) : <tr>, 
          b("0x1f") + //b(31) : #totalScrappedItems,   
          b("0x8") +  //b(8) : number_of_photos, 
          d[f][b("0xf")] + //b(15) : hide
          b("0x1f") +  //b(31) : #totalScrappedItems,
          b("0x8") +  //b(8) : number_of_photos, 
          d[f][b("0x2c")] + //b(44) : You need to Enter valid keywords
          b("0x1f") + //b(31) : #totalScrappedItems, 
          b("0x8") +  //b(8) : number_of_photos, 
          d[f][b("0x33")] + //b(51) : startSearchProcess
          b("0x1f") + //b(31) : #totalScrappedItems,  
          b("0x8") +  //b(8) : number_of_photos,  
          d[f][b("0x34")] + //b(52) : runtime 
          b("0x1f") + //b(31) : #totalScrappedItems, 
          b("0x2d") + //b(45) : tabs
          (d[f][b("0x31")] != "" ? b("0x14") + d[f].number_of_photos + b("0x35") : "") +  //b(49) :  length, b(20) : yes, b(53) : plus_code
          b("0x1f") + //b(31) : #totalScrappedItems,   
          b("0x8") +  //b(8) : number_of_photos, 
          d[f][b("0x3e")] + //b(62) :  query
          b("0x1f") + //b(31) : #totalScrappedItems,  
          b("0x2d") + //b(45) :  tabs
          (d[f][b("0x43")] != "" ? b("0x14") + d[f][b("0x43")] + b("0x35") : "") +  //b(67) : current_processed_count,  b(20) : yes, b(67) : current_processed_count, b(53) : plus_code
          b("0x1f") + b("0x13");  //b(31) : #totalScrappedItems,  b(19) : Stop & Download CSV
    } 
    $("#tbl_items_list")[b("0x1c")](e); //b(28) : saveUISettings
    var g = myIndexObj[b("0x4c")][b("0x10")]; //b(76) : last_item_index
    if (g == b("0x39") && d[b("0xb")] > 0) {  //b(57) : </tr>
      $(".clear-data-btn,.export-data-btn")[b("0x3")]();  //b(3) : website
    } else {
      $(b("0x27"))[b("0x38")]();  //b(39) : ^((http|https)://|(mailto:)|(//))[a-z0-9], b(56) : callback
    }
  });
}
};
$(document)[b("0x28")](function () {  //b(40) : find
chrome[b("0xe")][b("0x25")][b("0x30")](handleMessage);  //b(14) : removeClass, b(37) : updateScrapeState, b(48) : undefined
});
myIndexObj[b("0x24")]();  //b(36) : .export-data-btn
function sendMessage(c, d) {
if (d != null) {
  c[b("0x12")] = b("0x3d"); //b(18) : #loading_section, b(61) : .close-popup
}
chrome[b("0xe")][b("0x40")](c, d);  //b(14) : removeClass, b(64) : FileList
}
function sendMessageActiveTab(c, d) {
chrome[b("0x7")][b("0x18")]({active: true, currentWindow: true}, function (e) { //b(7) : addListener, b(24) : FileReader
  chrome[b("0x7")][b("0x40")](e[0].id, c, d); //b(7) : addListener, b(64) : FileList
});
}
function handleMessage(c, d) {
switch (c[b("0x47")]) { //b(71) : #upload_error_msg
  case "rec_getSettings":
    myIndexObj[b("0x4c")] = c.data[b("0x4c")];  //b(76) : last_item_index
    break;
  case b("0x4e"): //b(78) : ready
    myIndexObj[b("0x4e")]();  //b(78) : readys
    break;
}
if (typeof c[b("0x2a")] != b("0xa")) {  //b(42) : text, b(10) : phone_number
  if (typeof c[b("0x2a")][b("0x12")] != b("0xa") && c[b("0x2a")][b("0x12")] == b("0x3d")) {
    callback(); //b(42) : text, b(18) : #loading_section, b(10) : phone_number, b(42) : text, b(18) : #loading_section, b(61) : .close-popup
    callback = null;
  }
}
}
