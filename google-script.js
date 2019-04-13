function doPost(e) {
  var rawData = e.postData.contents;
  var cloudData = JSON.parse(rawData);

  var data = {};

  for (var i = 0; i < cloudData.values.length; i++) {
    data[cloudData.values[i].name] = cloudData.values[i].value;
  }

  console.log(data);


  var message = ""
  if(data.temperatura || data.moisture || data.luce){
    if(parseInt(data.temperatura) > (35))
      message = "che caldo!"
      
     if(parseInt(data.luce) > 600)
      message = "che luce! ☀️"
      
     if(parseInt(data.moisture) < 240)
      message = "che sete!"
  }
  
    var url =
    "https://maker.ifttt.com/trigger/[applet_name]/with/key/[key]";
  var options = {
    method: "post",
    payload: {
      value1: message
    }
  };

  if(data.shouldUpdate === true)
    UrlFetchApp.fetch(url, options);
}
