var a = [
  "callback", //0 
  "downloads",  //1
  "Auto bot process has been stopped and downloading CSV file has been started. You are not registered or your account is not approved for more scrape data.",  //2 
  "startSearchProcess", //3
  "startAutoBotProcess", //4
  "download", //5
  "random", //6
  "onRemoved", //7
  "Google_Map_Business_Scrapper/", //8
  "onUpdated", //9
  "getFullYear", //10
  "set_delay_in_bg", //11
  "parse", //12
  "Category", //13
  "addListener", //14
  "stringify", //15
  "create_notifications", //16
  ".csv", //17
  "scrapped_items_arr", //18
  "location", //19
  "log", //20
  "Google Map Reviews Scrapper", //21
  "images/default_icon_16.png", //22
  "toString", //23
  "Successfully Data scrapped and downloading CSV file has been started.", //24
  "Review Pic", //25
  "data:text/csv;charset=utf-8,", //26
  "getSettings", //27
  "UUID", //28
  "console_logs_myApp", //29
  "match", //30
  "https://www.google.com/maps/search/", //31
  "Reviews", //32
  "status", //33
  "tabs", //34
  "Inprogress", //35
  "version", //36
  "set", //37
  "Whoops.. ", //38
  "review_scrape_limit", //39
  "sendMessage", //40
  "notifications", //41
  "color:#ce3e3e", //42
  "City", //43
  "Auto bot process has been stopped and downloading CSV file has been started. You need to register for more scrape data.", //44
  "length", //45
  "title", //46
  "Link", //47
  "user_not_approved", //48
  "items_data_", //49
  "Area", //50
  "getDate", //51
  "([?&])", //52
  "(=([^&#]*)|&|#|$)", //53
  "Address", //54
  "State", //55
  "tab", //56
  "next_profile_not_found", //57
  "msg", //58
  "onMessage", //59
  "getMonth", //60
  "register_required", //61
  "url", //62
  "yes", //63
  "manual_stop", //64
  "complete", //65
  "downloadCSV", //66
  "data", //67
  "initStorage", //68
  "load", //69
  "warn", //70
  "current_processed_count", //71
  "Auto bot process has been stopped and downloading CSV file has been started.", //72
  "Invalid data", //73
  "stopAutoBotProcess", //74
  "now", //75
  "create", //76
  "saveUISettings", //77
  "%c ", //78
  "Plus Code", //79
  "uiSettings", //80
  "runtime", //81
  "replace", //82
  "Pic", //83
  "Is Claimed", //84
  "Auto bot proccess has been started", //85
  "hours of operations", //86
  "storage", //87
  "V2JSONToCSVConvertor", //88
  "onExtMessage", //89
  "href", //90
  "scrape_status",  //91
  "[?&]", //92
  "GPS", //93
  "reason", //94
  "message", //95
  "active_search_tab_id", //96
  "local", //97
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", //98
  "exec", //99
  "floor", //100
  "Keywords_input", //101
  "Review Text", //102
  "font-weight: bold", //103
  "Name", //104
  "object", //105
  "Email", //106
  "function", //107
  "getKeyFromMap", //108
  "getTime", //109
  "No data found! Auto bot process has been stopped.", //110
  "Zip", //111
  "command", //112
  "=.*?(&|$)", //113
  "\\$&", //114
  "get"  //115, total: 116
];
(function (b, e) {
  var f = function (g) {
    while (--g) {
      b.push(b.shift());
    }
  };
  f(++e);
}(a, 439));
var b = function (c, d) {
  c = c - 0;
  var e = a[c];
  return e;
};
var version = chrome.runtime.getManifest()[b("0x3d")];  //b(61) : register_required
var uiSettings = {scrape_status: "Finished", scrapped_items_arr: [], total_scrapped_page: 0, total_scrapped_count: 0, current_processed_count: 0, active_search_tab_id: 0, review_scrape_limit: 50};
var myAppObj = {search_change: false, onExtMessage: function (c, d, e) {
  myAppObj.message = c;
  switch (c[b("0x15")]) { //b(21) : Google Map Reviews Scrapper
    case b("0x66"): //b(102) :  Review Text
      uiSettings = c[b("0x5c")];  //b(92) : [?&]
      myAppObj[b("0x66")](c[b("0x5c")], d, e);  //b(102) :  Review Text, b(92) : [?&]
      break;
    case b("0x36"): //b(54) : Address
      console_logs_myApp(c[b("0x47")], c[b("0x53")]); //b(71) : current_processed_count, b(83) : Pic
      break;
    case "stopAutoBotProcess":
      myAppObj[b("0x63")](c[b("0x3")]); //b(99) : exec, b(3) : startSearchProcess
      break;
    case b("0x1c"): //b(28) : UUID
      myAppObj[b("0x1c")](c[b("0x5c")], d, e);  //b(28) : UUID, b(92) : [?&]
      break;
    case "downloadCSV":
      myAppObj[b("0x5b")](c[b("0x5c")], d, e);  //b(91) : scrape_status, b(92) : [?&]
      break;
    case "checkSearchStatus":
      var f = false;
      if (d && d[b("0x51")] && d[b("0x51")].id && parseInt(d[b("0x51")].id) == parseInt(uiSettings[b("0x5")])) {
        f = true; //b(81) : runtime, b(81) : runtime, b(81) : runtime, b(5) = download
      }
      e({is_search: f});
      break;
    case b("0x1d"): //b(29) : console_logs_myApp
      var g = {title: b("0x2e"), msg: b("0x6e")}; //b(46) : title, b(110) : No data found! Auto bot process has been stopped.
      myAppObj[b("0x29")](g); //b(41) : notifications
      break;
    case b("0x24"): //b(36) : version
      setTimeout(function () {
        e();
      }, c.timeout);
      break;
    case b("0x34"): //b(52) : ([?&])
      if (c[b("0x19")] == b("0x58")) {  //b(25) : Review Pic, b(88) : V2JSONToCSVConvertor
        e({uiSettings: uiSettings});
      } else {
        sendMessage(d, {command: "rec_getSettings", data: {uiSettings: uiSettings}});
      }
      break;
  }
  return true;
}, load: function () {
  myAppObj[b("0x5d")]();  //b(93) : GPS
}, initStorage: function (c) {
  chrome[b("0x70")][b("0x6")][b("0x18")](b("0x3d"), d => {  //b(112) : command, b(6) : random, b(24) : Successfully Data scrapped and downloading CSV file has been started., b(61) : register_required
    const e = d[b("0x3d")]; //b(61) : register_required
    if (e != version) {
      chrome[b("0x70")][b("0x6")][b("0x3e")]({uiSettings: JSON.stringify(uiSettings)}, function () {}); //b(112) : command, b(6) : random, b(62) : url
      chrome.storage[b("0x6")][b("0x3e")]({version: version}, function () {});  //b(6) : random, b(62) : url
    }
    chrome[b("0x70")][b("0x6")][b("0x18")](b("0x69"), f => {  //b(112) :command, b(6) : random, b(24) : Successfully Data scrapped and downloading CSV file has been started., b(105) : object
      uiSettings = JSON.parse(f[b("0x69")]);  //b(105) : object
    });
  });
  chrome[b("0x70")].local[b("0x18")](b("0x35"), d => {  //b(112) : command, b(24) : Successfully Data scrapped and downloading CSV file has been started., b(53) : (=([^&#]*)|&|#|$)
    const e = d[b("0x35")]; //b(53) : (=([^&#]*)|&|#|$)
    if (e == undefined || e == "") {
      chrome[b("0x70")].local.set({UUID: generateUUID()}, function () {});  //b(112) : command
    }
  });
}, saveUISettings: function (c, d, e) {
  chrome[b("0x70")][b("0x6")][b("0x3e")]({uiSettings: JSON[b("0x28")](uiSettings)}, function () {});  //b(112) : command, b(6) : random, b(62) : url, b(40) : sendMessage
  if (typeof e == b("0x10")) { //b(16) : create_notifications
    e({uiSettings: uiSettings});
  }
}, create_notifications: function (c) {
  chrome[b("0x42")][b("0x65")]({type: "basic", iconUrl: b("0x2f"), title: c[b("0x47")], message: c[b("0x53")]}, function () {
    if (chrome.runtime.lastError) { //b(66) : downloadCSV, b(101) : Keywords_input, b(47) : Link, b(71) : current_processed_count , b(83) : Pic
      console[b("0x5f")](b("0x3f") + chrome[b("0x6a")].lastError[b("0x4")]);  //b(95) : message, b(63) : yes, b(106) : Email, b(4) : startAutoBotProcess
    }
  });
}, startSearchProcess: function (c, d, e) {
  uiSettings[b("0x5")] = 0; //b(5) : download
  uiSettings[b("0x60")] = 0;  //b(96) : active_search_tab_id
  uiSettings[b("0x0")] = "Finished"; //b(0) : callback
  uiSettings[b("0x2b")] = []; //b(43) : City
  myAppObj[b("0x66")]();  //b(102) :Review Text
  var f = b("0x38") + encodeURIComponent(c[b("0xa")]);  //b(56) : tab, b(10) : getFullYear
  chrome.tabs[b("0x65")]({url: f}, function (g) { //b(101) : Keywords_input
    uiSettings[b("0x0")] = b("0x3c"); //b(0) : callback, b(60) : getMonth
    uiSettings.current_processed_count = 0;
    uiSettings[b("0x5")] = g.id;  //b(5) : download
    uiSettings[b("0x40")] = c[b("0x40")]; //b(64) : manual_stop
    myAppObj.saveUISettings();
  });
}, stopAutoBotProcess: function (c) {
  if (uiSettings[b("0x2b")].length > 0) { //b(43) : City
    myAppObj.downloadCSV();
    if (c == b("0x52")) { //b(82) : replace
      var d = {title: b("0x2e"), msg: b("0x31")}; //b(46) : title, b(49) : items_data_
      myAppObj[b("0x29")](d); //b(41) : notifications
    } else if (c == b("0x56")) {  //b(86) : hours of operations
      var d = {title: b("0x2e"), msg: b("0x45")}; //b(46) : title, b(69) : load
      myAppObj.create_notifications(d);
    } else if (c == b("0x49")) {  //b(73) : Invalid data
      var d = {title: b("0x2e"), msg: b("0x1b")}; //b(46) : title, b(27) : getSettings
      myAppObj[b("0x29")](d); //b(41) : notifications
    } else if (c == b("0x59")) {  //b(89) : onExtMessage
      var d = {title: b("0x2e"), msg: b("0x61")}; //b(46) : title, b(97) : local
      myAppObj.create_notifications(d);
    }
  } else {
    var d = {title: b("0x2e"), msg: b("0x13")}; //b(46) : title, b(19) : location
    myAppObj[b("0x29")](d); //b(41) : notifications
  }
  uiSettings[b("0x0")] = "Finished";  //b(0) : callback
  uiSettings[b("0x5")] = 0; //b(5) : download
  myAppObj[b("0x66")]();  //b(102) : Review Text
  sendMessage("", {command: "updateScrapeState"}, function (e) {});
}, downloadCSV: function () {
  var c = new Date;
  var d = c[b("0x4c")]() + "-" + (c[b("0x55")]() + 1) + " " + c[b("0x23")](); //b(76) : create, b(85) : Auto bot proccess has been started, b(35) : Inprogress
  myAppObj[b("0x71")](uiSettings[b("0x2b")], b("0x4a") + d, true);  //b(113) : =.*?(&|$), b(43) : City, b(74) : stopAutoBotProcess
}, V2JSONToCSVConvertor: function (c, d, e) {
  var f = typeof c != "object" ? JSON[b("0x25")](c) : c;  //b(37) : set
  var g = "";
  if (e) {
    var h = "";
    for (var j in f[0]) {
      var k = myAppObj[b("0x11")](j); //b(17) : .csv
      h += k + ",";
    }
    h = h.slice(0, -1);
    g += h + "\r\n";
  }
  for (var l = 0; l < f[b("0x46")]; l++) {  //b(70) : warn
    var h = "";
    for (var j in f[l]) {
      var m = f[l][j];
      var n;
      if (f[l][j] === undefined) {
        n = "";
      } else {
        n = (f[l][j] + "")[b("0x30")]();  //b(48) : user_not_approved
        n = n[b("0x6b")](/["]/gi, "'"); //b(107) : function
      }
      h += '"' + n + '",';
    }
    h.slice(0, h[b("0x46")] - 1); //b(70) : warn
    g += h + "\r\n";
  }
  if (g == "") {
    alert(b("0x62")); //b(98) : xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    return;
  }
  var o = "";
  o += d[b("0x6b")](/ /g, "_"); //b(107) : function
  var p = b("0x33") + escape(g);  //b(51) : getDate
  chrome[b("0x1a")][b("0x1e")]({url: p, filename: b("0x21") + o + b("0x2a")});  //b(26) : data:text/csv;charset=utf-8, b(30) : match, b(33) : status, b(42) : color:#ce3e3e
}, getKeyFromMap: function (c) {
  var d = {business_name: b("0xd"), full_dddress: b("0x4f"), street_address: b("0x4b"), city: b("0x44"), state: b("0x50"), zip: b("0x14"), plus_code: b("0x68"), category: b("0x26"), phone_number: "Phone Number", is_claimed: b("0x6d"), website: "Website", email: b("0xf"), rating_score: "Rating", reviews_count: b("0x39"), number_of_photos: b("0x6c"), gps: b("0x2"), review_text: b("0xb"), review_pic: b("0x32"), open_hours: b("0x6f"), review_summary: "Review Summary", link: b("0x48")};
  return d[c] || c; //b(13) : Category, b(79) : Plus Code, b(75) : now, b(68) : initStorage, b(80) : uiSettings, b(20) :log, b(104) : Name, b(38) : Whoops.., b(109) : getTime, b(15) : stringify, b(57) : next_profile_not_found, b(108) : getKeyFromMap, b(2) : Auto bot process has been stopped and downloading CSV file has been started. You are not registered or your account is not approved for more scrape data., b(11) : \\$&, b(50) : Area, b(111) : Zip, b(72) : Auto bot process has been stopped and downloading CSV file has been started.
}, getParameterByName: function (c, d) {
  if (!d) d = window[b("0x2c")][b("0x73")]; //b(44) : Auto bot process has been stopped and downloading CSV file has been started. You need to register for more scrape data., b(115) : get
  c = c[b("0x6b")](/[\[\]]/g, b("0x17")); //b(107) : function, b(23) : toString
  var e = new RegExp(b("0x1") + c + b("0x4e")), f = e[b("0x8")](d); //b(1) downloads:, b(78) : %c, b(8) : Google_Map_Business_Scrapper/,
  if (!f) return null;
  if (!f[2]) return ""; 
  return decodeURIComponent(f[2][b("0x6b")](/\+/g, " ")); //b(107) : function,
}, updateQueryStringParameter: function (c, d, e) {
  var f = new RegExp(b("0x4d") + d + b("0x16"), "i"); //b(77) : saveUISettings, b(22) : images/default_icon_16.png,
  var g = c.indexOf("?") !== -1 ? "&" : "?";
  if (c[b("0x37")](f)) {  //b(55) : State,
    return c[b("0x6b")](f, "$1" + d + "=" + e + "$2");  //b(107) : function
  } else {
    return c + g + d + "=" + e;
  }
}};
chrome[b("0x6a")][b("0x54")][b("0x27")](myAppObj[b("0x72")]); //b(106) : Email, b(84) : Is Claimed, b(39) : review_scrape_limit,
myAppObj[b("0x5e")]();  //b(94) : reason,
function sendMessage(c, d) {
  if (c) chrome.tabs[b("0x41")](c, d); else chrome[b("0x6a")][b("0x41")](d);  //b(65) : complete, b(106) : Email, b(65) : complete,
}
var console_logs_myApp = function (c, d) {
  console[b("0x2d")](b("0x67") + c, b("0xc"));  //b(45) : length, b(103) : font-weight: bold, b(12) : parse
  if (typeof d == b("0xe")) { //b(14) : addListener
    console.log(b("0x67") + JSON[b("0x28")](d), b("0x43")); //b(103) : font-weight: bold, b(40) : sendMessage, b(67) : data
  } else {
    console[b("0x2d")](b("0x67") + d, b("0x43")); //b(45) : length, b(103) :, b(67) : data
  }
};
chrome[b("0x3b")][b("0x22")][b("0x27")](function (c, d, e) {  //b(59) : onMessage, b(34) : tabs, b(39) : review_scrape_limit,
  if (d[b("0x3a")] == b("0x5a") && e[b("0x3a")] == b("0x5a") && e[b("0x57")] != undefined) {}
}); //b(58) : msg, b(90) : href, b(58) : msg, b(90) : href, b(87) : storage
chrome[b("0x3b")][b("0x20")][b("0x27")](function (c, d) { //b(59) : onMessage, b(32) : Reviews, b(39) : review_scrape_limit
  if (uiSettings[b("0x5")] == c) {  //b(5) : download
    myAppObj[b("0x63")](b("0x59")); //b(99) : exec, b(89) : onExtMessage
    sendMessage("", {command: "updateScrapeState"}, function (e) {});
  }
});
function generateUUID() {
  var c = (new Date)[b("0x12")]();  //b(18) : scrapped_items_arr
  var e = performance && performance[b("0x64")] && performance[b("0x64")]() * 1e3 || 0; //b(100) : floor, b(100) : floor
  return b("0x7")[b("0x6b")](/[xy]/g, function (f) {  //b(7) : onRemoved, b(107) : function
    var g = Math[b("0x1f")]() * 16; //b(31) : https://www.google.com/maps/search/
    if (c > 0) {
      g = (c + g) % 16 | 0;
      c = Math[b("0x9")](c / 16); //b(9) : onUpdated
    } else {
      g = (e + g) % 16 | 0;
      e = Math.floor(e / 16);
    }
    return (f === "x" ? g : g & 3 | 8)[b("0x30")](16);  //b(48) : user_not_approved
  });
}
