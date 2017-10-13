
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    katzDeli.push(name);
    var line = katzDeliLine.length;
    return (`Welcome, ${name}. You are number ${line+1} in line.`)
}
