import EventEmitter from 'eventemitter3';

export default class MarkerDispatcher extends EventEmitter {
  constructor(gmapInstance) {
    super();
    this.gmapInstance = gmapInstance;
  }

  getChildren() {
    // If no lat lng => They are not marker
    return _.flatten(this.gmapInstance.props.children).filter(function (child) {
        return !!child.props.lat
      });
  }

  getMousePosition() {
    return this.gmapInstance.mouse_;
  }

  getUpdateCounter() {
    return this.gmapInstance.updateCounter_;
  }

  dispose() {
    this.gmapInstance = null;
    this.removeAllListeners();
  }
}
