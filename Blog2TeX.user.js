// ==UserScript==
// @name        ConvertLatex
// @namespace   bombuff@hotmail.com
// @version     1
// @include     https://terrytao.wordpress.com/*
// @grant       none
// ==/UserScript==
allImgs = document.evaluate('//img[@class=\'latex\']', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (i = 0; i < allImgs.snapshotLength; i++)
{
  thisImg = allImgs.snapshotItem(i);
  thisText = document.createTextNode(thisImg.alt);
  temp = thisText.nodeValue;
  thisText.nodeValue = '$'.concat(temp).concat('$');
  thisImg.parentNode.replaceChild(thisText, thisImg);
}
cenTer = document.evaluate('//p[@style=\'text-align:center;\']', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (i = 0; i < cenTer.snapshotLength; i++) {
  var node = document.createTextNode('  \\begin{center}{ ');
  var tail = document.createTextNode(' }\\end{center}');
  var thisCen = cenTer.snapshotItem(i);
  var text = thisCen.textContent;
  var firstChar = text.substring(0,1);
  var s = "$";
  if (firstChar != s) {
    var cenHead = document.createTextNode('\\textbf{');
    var cenTail = document.createTextNode('} ');
    thisCen.insertBefore(cenHead, thisCen.childNodes[0]);
    thisCen.appendChild(cenTail);
  }
  thisCen.insertBefore(node, thisCen.childNodes[0]);
  thisCen.appendChild(tail);
}
listNodes = document.evaluate('//li', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < listNodes.snapshotLength; i++) {
  var bullet = document.createTextNode('\\item ');
  var thisItem = listNodes.snapshotItem(i);
  thisItem.insertBefore(bullet, thisItem.childNodes[0]);
}
enuNodes = document.evaluate('//ol', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < enuNodes.snapshotLength; i++) {
  var enuHead = document.createTextNode('\\begin{enumerate} ');
  var enuTail = document.createTextNode(' \\end{enumerate}');
  var thisEnu = enuNodes.snapshotItem(i);
  thisEnu.insertBefore(enuHead, thisEnu.childNodes[0]);
  thisEnu.appendChild(enuTail);
}
itemNodes = document.evaluate('//ul', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < itemNodes.snapshotLength; i++) {
  var itemHead = document.createTextNode('\\begin{itemize} ');
  var itemTail = document.createTextNode(' \\end{itemize}');
  var thisIt = itemNodes.snapshotItem(i);
  thisIt.insertBefore(itemHead, thisIt.childNodes[0]);
  thisIt.appendChild(itemTail);
}
boldNodes = document.evaluate('//strong', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < boldNodes.snapshotLength; i++) {
  var boldHead = document.createTextNode('\\textbf{');
  var boldTail = document.createTextNode('} ');
  var thisBold = boldNodes.snapshotItem(i);
  thisBold.insertBefore(boldHead, thisBold.childNodes[0]);
  thisBold.appendChild(boldTail);
}
bNodes = document.evaluate('//b', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < bNodes.snapshotLength; i++) {
  var bHead = document.createTextNode('\\textbf{');
  var bTail = document.createTextNode('} ');
  var thisB = bNodes.snapshotItem(i);
  thisB.insertBefore(bHead, thisB.childNodes[0]);
  thisB.appendChild(bTail);
}
emphNodes = document.evaluate('//em', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < emphNodes.snapshotLength; i++) {
  var emphHead = document.createTextNode('\\emph{');
  var emphTail = document.createTextNode('} ');
  var thisEmph = emphNodes.snapshotItem(i);
  thisEmph.insertBefore(emphHead, thisEmph.childNodes[0]);
  thisEmph.appendChild(emphTail);
}

frameNodes = document.evaluate('//blockquote', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < frameNodes.snapshotLength; i++) {
  var frameHead = document.createTextNode('\\begin{framed}');
  var frameTail = document.createTextNode('\\end{framed} ');
  var thisFrame = frameNodes.snapshotItem(i);
  thisFrame.insertBefore(frameHead, thisFrame.childNodes[0]);
  thisFrame.appendChild(frameTail);
}
