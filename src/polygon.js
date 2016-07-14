import React, {
    Component
} from 'react';


class Polygon extends Component {
    constructor(props) {
        super(props);
        var polygon = new google.maps.Polygon({
                paths: this.props.latLngs || [],
                strokeColor: this.props.strokeColor,
                strokeOpacity: this.props.strokeOpacity || 0.8,
                strokeWeight: this.props.strokeWeight || 2,
                fillColor: this.props.fillColor,
                fillOpacity: this.props.fillOpacity || 0.35
            });
        this.state = {
            polygon: polygon
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.latLngs !== this.props.latLngs)
            return true;
        return false;
    }

    componentWillReceiveProps(nextProps){
        this.state.polygon.setPaths(nextProps.latLngs);
    }

    componentWillMount() {
        this.state.polygon.setMap(this.props.mapHelper.map);
    }
    componentWillUnmount() {
        this.state.polygon.setMap(null);
    }
    render() {
        return (<script></script>)
    }
}

export default Polygon;