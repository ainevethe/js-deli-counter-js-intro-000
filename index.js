
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    var katzDeliLine = katzDeliLine + 1;
    katzDeli.push(name);
    return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
