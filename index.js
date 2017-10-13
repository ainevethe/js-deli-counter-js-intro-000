
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    katzDeli.push(name);
    var lineup = katzDeliLine.length + 1;
    return (`Welcome, ${name}. You are number ` + katzDeliLine.length + ` in line.`)
}
