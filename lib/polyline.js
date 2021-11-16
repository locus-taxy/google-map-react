'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polyline = function (_Component) {
    _inherits(Polyline, _Component);

    function Polyline(props) {
        _classCallCheck(this, Polyline);

        var _this = _possibleConstructorReturn(this, (Polyline.__proto__ || Object.getPrototypeOf(Polyline)).call(this, props));

        var polyline = new google.maps.Polyline({
            path: _this.props.path || [],
            strokeColor: _this.props.color,
            strokeOpacity: _this.props.strokeOpacity || 1.0,
            strokeWeight: _this.props.strokeWeight || 3,
            geodesic: _this.props.geodesic,
            icons: _this.props.icons
        });
        _this.state = {
            polyline: polyline
        };
        return _this;
    }

    _createClass(Polyline, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.path !== this.props.path) return true;
            return false;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.state.polyline.setPath(nextProps.path);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.state.polyline.setMap(this.props.mapHelper.map);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.state.polyline.setMap(null);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('script', null);
        }
    }]);

    return Polyline;
}(_react.Component);

exports.default = Polyline;