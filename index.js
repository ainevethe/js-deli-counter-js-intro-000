
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    var position = katzDeli.length + 1;
    katzDeli.push(name);
    return ("Welcome, " + name + ". You are number " + position + " in line.")
}
