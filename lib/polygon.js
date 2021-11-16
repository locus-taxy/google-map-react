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

var Polygon = function (_Component) {
    _inherits(Polygon, _Component);

    function Polygon(props) {
        _classCallCheck(this, Polygon);

        var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, props));

        var polygon = new google.maps.Polygon({
            paths: _this.props.latLngs || [],
            strokeColor: _this.props.strokeColor,
            strokeOpacity: _this.props.strokeOpacity || 0.8,
            strokeWeight: _this.props.strokeWeight || 2,
            fillColor: _this.props.fillColor,
            fillOpacity: _this.props.fillOpacity || 0.35
        });
        _this.state = {
            polygon: polygon
        };
        return _this;
    }

    _createClass(Polygon, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.latLngs !== this.props.latLngs) return true;
            return false;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.state.polygon.setPaths(nextProps.latLngs);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.state.polygon.setMap(this.props.mapHelper.map);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.state.polygon.setMap(null);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('script', null);
        }
    }]);

    return Polygon;
}(_react.Component);

exports.default = Polygon;