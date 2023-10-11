const React = window.React;
const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;

export default class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <p href="http://osm.org/copyright">OpenStreetMap</p> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              p pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

window.ReactDOM.render(<SimpleExample />, document.getElementById("container"));
