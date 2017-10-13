
var katzDeli = [];
var i = 0;

function takeANumber(katzDeliLine, name) {
  for (i = 0; i < katzDeliLine.length; i++) {
    katzDeli.push("Welcome, " + name + ". You are number " + katzDeliLine[i] + " in line.")
  }
  return takeANumber;
}
