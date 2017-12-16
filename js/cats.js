const $catElement = document.createElement("img"),
      catImage = chrome.extension.getURL(`../images/cat-${Math.round(Math.random() * (5 - 1)) + 1}.png`);

$catElement.src = catImage;
$catElement.className = "cat";

document.body.appendChild($catElement);