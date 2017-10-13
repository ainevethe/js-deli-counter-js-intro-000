
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine, name) {

  if (katzDeliLine !=== 0) {
    return ("Currently serving " + katzDeli.shift() + ".");
  } else {
    return ("There is nobocy waiting to be served!");
  }
}
