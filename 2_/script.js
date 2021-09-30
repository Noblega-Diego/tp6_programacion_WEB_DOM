let textInH1 = document.getElementsByTagName("H1")[0].childNodes[0]

let num = parseInt( textInH1.nodeValue )
textInH1.nodeValue = num + 1;