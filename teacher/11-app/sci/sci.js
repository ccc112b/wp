var code = document.querySelector(".code")
var out = document.querySelector(".out")

function log() {
  console.log.apply(console, arguments);
}

function str(o) {
  return JSON.stringify(o)
}

function dump(o) {
  return log(str(o))
}

function init() {
    console.defaultLog = console.log.bind(console);
    console.logs = [];
    console.log = function(){
        // default &  console.log()
        console.defaultLog.apply(console, arguments);
        // new & array data
        // console.logs.push(Array.from(arguments));
        console.logs.push(Array.from(arguments).join(''));
    }    
}

function run() {
  console.logs = [];
  let text = code.value
  eval(text)
  out.innerHTML = `<pre>${console.logs.join('\n')}</pre>`
}

init()

