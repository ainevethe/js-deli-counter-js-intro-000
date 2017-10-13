
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    var line = katzDeliLine.length + 1;
    katzDeli.push(name);
    return (`Welcome, ${name}. You are number ${line} in line.`)
}
