export function exportCanvasAsPNG(id, fileName) {
  var canvasElement = document.getElementById(id).firstElementChild;
  var MIME_TYPE = "image/png";
  console.log(canvasElement)
  var imgURL = canvasElement.toDataURL(MIME_TYPE);

  var dlLink = document.createElement('a');
  dlLink.download = fileName;
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
}