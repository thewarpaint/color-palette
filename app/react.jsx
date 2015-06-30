var ColorList,
    Color,
    FormatList,
    clip;

ColorList = React.createClass({
  componentDidMount: function () {
    clip = new ZeroClipboard();
    clip.clip(document.querySelectorAll('.color'));
  },
  render: function () {
    var listNodes = this.props.palette.map(function (color) {
      return (
        <Color data={ color } />
      );
    });

    return (
      <ul className="color-list">
        { listNodes }
      </ul>
    );
  }
});

Color = React.createClass({
  render: function () {
    var style = {
      backgroundColor: this.props.data.hex
    };

    return (
      <li className="color" style={ style } data-clipboard-text={ '$' + this.props.data.variable }>
        { this.props.data.name }</li>
    );
  }
});

FormatList = React.createClass({
  render: function () {
    var options = ColorPalette.formats.map(function (format) {
      return (
        <option value={ format.id }>{ format.label }</option>
      )
    });

    return (
      <select defaultValue="sass">{ options }</select>
    )
  }
});

document.addEventListener("DOMContentLoaded", function () {
  React.render(
    <FormatList/>,
    document.getElementById('format-list')
  );

  React.render(
    <ColorList palette={ ColorPalette.palette } />,
    document.getElementById('palette')
  );
});
