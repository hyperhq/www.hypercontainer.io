var tPosition = {line: 0, column: 0};
terminal = function(option){
  option = option || {data: []};
  option.data = option.data || [];
  option.timeout = option.timeout || 3000;
  var allString = 0;
  option.data.forEach(function(value){
    allString += value.command.length;
  });
  option.delay = option.timeout / allString;
  insertTerminal(option);
};

function insertTerminal(option){
  var terminalDom = "";
  option.data.forEach(function(value, index){
    if( tPosition.line > index ){
      terminalDom += "<span class='line'><span class='prefix'>" + value.prefix + "</span>";
      terminalDom += "<span class='command'>" + value.command + "</span></span>";
      if(value.result){
        terminalDom += "<span class='result'>" + value.result + "</span>";
      }
    }else if (tPosition.line == index){
      var cursor = (value.result && value.command.length == tPosition.column) ? "" : "<span class='cursor'>|</span>";
      terminalDom += "<span class='line'><span class='prefix'>" + value.prefix + "</span>";
      terminalDom += "<span class='command'>" + value.command.slice(0, tPosition.column) + cursor + "</span></span>";
    }
  });
  var isEnd = !option.data[tPosition.line] || (option.data[tPosition.line].command.slice(tPosition.column, tPosition.column + 1) == "");
  if(isEnd){
    tPosition.line += 1;
    tPosition.column = 0;
  }else{
    tPosition.column += 1;
  }
  $(option.dom).get(0).innerHTML = terminalDom;
  var isAllEnded = (option.data.length == tPosition.line) && isEnd;
  if(isAllEnded){
    window.setTimeout(function(){
      var value = option.data[option.data.length - 1];
      if(value.result ){
        terminalDom += "<span class='result'>" + value.result + "</span>";
        $(option.dom).get(0).innerHTML = terminalDom;
      }
    }, option.delay)
  }else{
    var delay = option.delay;
    if(tPosition.column == 1){
      delay += 1000;
    }
    window.setTimeout(function(){
      insertTerminal(option)
    }, delay)
  }
  if(isEnd){
    window.setTimeout(function(){
      $(".terminal-player").scrollTop(10000);
    }, option.delay + 1)
  }
}

window.sr = new scrollReveal();

$(function() {
  if (!document.querySelector(".terminal-player pre code")){
    return false
  }
  terminal({
    data  : [
      {
        prefix: "[root@user ~:]#",
        command: "docker pull ubuntu:latest"
      }, {
        prefix: "[root@user ~:]#",
        command: "hyper run ubuntu:latest",
        result: "i-12345678 is created..."
      },{
        prefix: "[root@user ~:]#",
        command: "docker ps",
        result: ""
      },{
        prefix: "[root@user ~:]#",
        command: "",
        result: ""
      },{
        prefix: "[root@user ~:]#",
        command: "hyper list",
        result: "................<br/>Done"
      },{
        prefix: "[root@user ~:]#",
        command: ""
      }
    ],
    dom: ".terminal-player pre code",
    timeout: 5000
  });
  $(".install pre").click(function(){
    $(".install input").select();
  })
});

