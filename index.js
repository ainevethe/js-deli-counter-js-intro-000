
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {

  if (katzDeliLine < 1) {
    return ("There is nobody waiting to be served!");
} else {
    return ("Currently serving " + katzDeliLine.shift() + ".");
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine < 1) {
    return("The line is currently empty.")
  } else {

  }
}
