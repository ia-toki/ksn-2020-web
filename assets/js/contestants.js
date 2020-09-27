var data = [];
var table_el = document.getElementById("contestants");

function h(parent, tag) {
  var el = document.createElement(tag);
  parent.append(el);
  return el;
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}

function processTSV(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var lines = [];

  for (var i = 0; i < allTextLines.length; i++) {
    var data = allTextLines[i].split("\t");
    lines.push(data);
  }

  return lines;
}

function populateTable(table, data) {
  table.innerHTML = "";
  var thead = h(table, "thead");
  var thead_tr = h(thead, "tr");
  for (var j = 0; j < data[0].length; j++) {
    var th = h(thead_tr, "th");
    th.textContent = data[0][j];
  }
  var tbody = h(table, "tbody");
  for (var i = 1; i < data.length; i++) {
    var tbody_tr = h(tbody, "tr");
    for (var j = 0; j < data[i].length; j++) {
      var td = h(tbody_tr, "td");
      td.textContent = data[i][j];
    }
  }
}

httpGetAsync("/peserta.tsv", function (allText) {
  data = processTSV(allText);
  populateTable(table_el, data);
});
