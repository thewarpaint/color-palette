var ColorPalette = {
  palette: [
    {
      "name": "Turquoise",
      "variable": "palette-turquoise",
      "hex": "#1abc9c"
    },
    {
      "name": "Green Sea",
      "variable": "palette-green-sea",
      "hex": "#16a085"
    },
    {
      "name": "Emerald",
      "variable": "palette-emerald",
      "hex": "#2ecc71"
    },
    {
      "name": "Nephritis",
      "variable": "palette-nephritis",
      "hex": "#27ae60"
    },
    {
      "name": "Peter River",
      "variable": "palette-peter-river",
      "hex": "#3498db"
    },
    {
      "name": "Belize Hole",
      "variable": "palette-belize-hole",
      "hex": "#2980b9"
    },
    {
      "name": "Amethyst",
      "variable": "palette-amethyst",
      "hex": "#9b59b6"
    },
    {
      "name": "Wisteria",
      "variable": "palette-wisteria",
      "hex": "#8e44ad"
    },
    {
      "name": "Wet Asphalt",
      "variable": "palette-wet-asphalt",
      "hex": "#34495e"
    },
    {
      "name": "Midnight Blue",
      "variable": "palette-midnight-blue",
      "hex": "#2c3e50"
    },
    {
      "name": "Sun Flower",
      "variable": "palette-sun-flower",
      "hex": "#f1c40f"
    },
    {
      "name": "Orange",
      "variable": "palette-orange",
      "hex": "#f39c12"
    },
    {
      "name": "Carrot",
      "variable": "palette-carrot",
      "hex": "#e67e22"
    },
    {
      "name": "Pumpkin",
      "variable": "palette-pumpkin",
      "hex": "#d35400"
    },
    {
      "name": "Alizarin",
      "variable": "palette-alizarin",
      "hex": "#e74c3c"
    },
    {
      "name": "Pomegranate",
      "variable": "palette-pomegranate",
      "hex": "#c0392b"
    },
    {
      "name": "Clouds",
      "variable": "palette-clouds",
      "hex": "#ecf0f1"
    },
    {
      "name": "Silver",
      "variable": "palette-silver",
      "hex": "#bdc3c7"
    },
    {
      "name": "Concrete",
      "variable": "palette-concrete",
      "hex": "#95a5a6"
    },
    {
      "name": "Asbestos",
      "variable": "palette-asbestos",
      "hex": "#7f8c8d"
    }
  ],
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
