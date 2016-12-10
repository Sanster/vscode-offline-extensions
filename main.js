function download() {
  var itemName = $('#itemName').val()
  var version = $('#version').val()
  var publisher = itemName.split('.')[0]
  var extensionName = itemName.split('.')[1]
  console.log(publisher)
  console.log(extensionName)
  var requestUrl = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extensionName}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`
  console.log(requestUrl)
  window.location.href = requestUrl
}
