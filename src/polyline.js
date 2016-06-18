import React, {
    Component
} from 'react';


export default class Polyline extends Component {
    constructor(props) {
        super(props);
        var polyline = new google.maps.Polyline({
            path: this.props.path,
            strokeColor: this.props.color,
            strokeOpacity: 1.0,
            strokeWeight: 3
        });
        this.state = {
            polyline: polyline
        }
    }

    shouldComponentUpdate() {
        return false;
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