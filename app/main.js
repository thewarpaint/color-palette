var ColorPalette = {
  palette: [],
  formats: [
    {
      id: "hex",
      label: "Hex: #123abc",
      formatter: function (color) {
        return color.hex;
      }
    },
    {
      id: "hex-without-hash",
      label: "Hex: 123abc",
      formatter: function (color) {
        return color.hex.replace('#', '');
      }
    },
    {
      id: "sass",
      label: "SASS: $palette-color",
      formatter: function (color) {
        return '$' + color.variable;
      }
    },
    {
      id: "less",
      label: "LESS: @palette-color",
      formatter: function (color) {
        return '@' + color.variable;
      }
    },
    {
      id: "rgb",
      label: "RGB: (255, 127, 63)",
      formatter: function (color) {
        return '(' + ColorPalette.hexToRgb(color.hex).join(', ') + ')';
      }
    },
    {
      id: "rgba",
      label: "RGBA: (255, 127, 63, 1)",
      formatter: function (color) {
        return '(' + ColorPalette.hexToRgb(color.hex).concat([1]).join(', ') + ')';
      }
    }
  ],
  hexToRgb: function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
  }
};

document.addEventListener("DOMContentLoaded", function () {
  ZeroClipboard.config({
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.swf"
  });
});

var url = 'https://gist.githubusercontent.com/thewarpaint/801bb9139e4e4064ed9b/raw/7f916b34e2fcd10c00107c6c4be48045747d5411/flat-ui.json';
var xhr = new XMLHttpRequest();
xhr.open('get', url, true);
xhr.onreadystatechange = function () {
  var data;

  if(xhr.readyState === 4) { // Done
    if(xhr.status === 200) {
      data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  }
};

xhr.send();
