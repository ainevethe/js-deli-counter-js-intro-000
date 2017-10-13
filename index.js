
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    katzDeli.push(name);
    var line = katzDeliLine.length + 1;
    return (`Welcome, ${name}. You are number ${line} in line.`)
}
