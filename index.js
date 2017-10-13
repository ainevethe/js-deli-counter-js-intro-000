
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    katzDeli.push(name);
    return (`Welcome, ${name}. You are number ` + katzDeliLine.length + ` in line.`)
}
