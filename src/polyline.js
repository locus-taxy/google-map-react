import React, {
    Component
} from 'react';


class Polyline extends Component {
    constructor(props) {
        super(props);
        var polyline = new google.maps.Polyline({
            path: this.props.path,
            strokeColor: this.props.color,
            strokeOpacity: this.props.strokeOpacity || 1.0,
            strokeWeight: this.props.strokeWeight || 3,
            geodesic: this.props.geodesic,
            icons: this.props.icons
        });
        this.state = {
            polyline: polyline
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.path !== this.props.path)
            return true;
        return false;
    }

    componentWillReceiveProps(nextProps){
        this.state.polyline.setPath(nextProps.path);
    }

    componentWillMount() {
        this.state.polyline.setMap(this.props.mapHelper.map);
    }
    componentWillUnmount() {
        this.state.polyline.setMap(null);
    }
    render() {
        return (<script></script>)
    }
}

export default Polyline;