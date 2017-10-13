
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
  for (i = 0; i < katzDeliLine.length; i++) {
    katzDeli.push(name[i]);
    return ("Welcome, " + katzDeli[i] + ". You are number " +  + " in line.")
  }
  return takeANumber;
}
