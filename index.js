
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    var lineup = katzDeliLine + 1;
    katzDeli.push(name);
    return (`Welcome, ${name}. You are number ${lineup} in line.`)
}
