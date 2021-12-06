const DEFAULT_MAP_OPTIONS = { center: { lat: 0, lng: 0 }, zoom: 2 };

class GoogleMap {
  mapInstance = null;
  mapDOM = null;

  initMapInstance = (options) => {
    this.mapDOM = document.createElement('div');
    this.mapDOM.style.width = '100%';
    this.mapDOM.style.height = '100%';
    this.mapInstance = new google.maps.Map(this.mapDOM, options);
  };

  init = (domElement, options = DEFAULT_MAP_OPTIONS) => {
    if (!this.mapInstance) {
      this.initMapInstance(options);
    } else {
      this.updateOptions(options);
    }

    domElement.appendChild(this.mapDOM);

    return this.mapInstance;
  };

  getMapInstance = () => ({
    googleMap: this.mapInstance,
    mapDOM: this.mapDOM,
  });

  updateOptions = (options) => {
    this.mapInstance.setOptions(options);
  };
}

const googleMapInstance = new GoogleMap();
export default GoogleMap;
export { googleMapInstance };