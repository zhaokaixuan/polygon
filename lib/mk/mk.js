(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mk"] = factory();
	else
		root["mk"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "<%=baseUrl%>/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(1);
	
	var _counter = __webpack_require__(2);
	
	var _counter2 = _interopRequireDefault(_counter);
	
	var _helpers = __webpack_require__(3);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _obj = __webpack_require__(4);
	
	var _obj2 = _interopRequireDefault(_obj);
	
	var _math = __webpack_require__(5);
	
	var _coordinate = __webpack_require__(6);
	
	var _canvas = __webpack_require__(7);
	
	var _geometryutil = __webpack_require__(8);
	
	var _geometryutil2 = _interopRequireDefault(_geometryutil);
	
	var _extentutil = __webpack_require__(13);
	
	var _eventtype = __webpack_require__(12);
	
	var _style = __webpack_require__(15);
	
	var _event = __webpack_require__(11);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _eventmanager = __webpack_require__(21);
	
	var _eventmanager2 = _interopRequireDefault(_eventmanager);
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _point = __webpack_require__(23);
	
	var _point2 = _interopRequireDefault(_point);
	
	var _line = __webpack_require__(24);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	var _mutilpolygon = __webpack_require__(29);
	
	var _mutilpolygon2 = _interopRequireDefault(_mutilpolygon);
	
	var _parallelogram = __webpack_require__(30);
	
	var _parallelogram2 = _interopRequireDefault(_parallelogram);
	
	var _rotatableextent = __webpack_require__(31);
	
	var _rotatableextent2 = _interopRequireDefault(_rotatableextent);
	
	var _imagestate = __webpack_require__(33);
	
	var _imageevent = __webpack_require__(34);
	
	var _singleimage = __webpack_require__(36);
	
	var _singleimage2 = _interopRequireDefault(_singleimage);
	
	var _pointstyle = __webpack_require__(20);
	
	var _pointstyle2 = _interopRequireDefault(_pointstyle);
	
	var _linestyle = __webpack_require__(19);
	
	var _linestyle2 = _interopRequireDefault(_linestyle);
	
	var _fillstyle = __webpack_require__(16);
	
	var _fillstyle2 = _interopRequireDefault(_fillstyle);
	
	var _textstyle = __webpack_require__(18);
	
	var _textstyle2 = _interopRequireDefault(_textstyle);
	
	var _featurelayer = __webpack_require__(38);
	
	var _featurelayer2 = _interopRequireDefault(_featurelayer);
	
	var _singleimagelayer = __webpack_require__(41);
	
	var _singleimagelayer2 = _interopRequireDefault(_singleimagelayer);
	
	var _draw = __webpack_require__(43);
	
	var _draw2 = _interopRequireDefault(_draw);
	
	var _drawevent = __webpack_require__(47);
	
	var _drawevent2 = _interopRequireDefault(_drawevent);
	
	var _select = __webpack_require__(49);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _modify = __webpack_require__(51);
	
	var _modify2 = _interopRequireDefault(_modify);
	
	var _dragpan = __webpack_require__(54);
	
	var _dragpan2 = _interopRequireDefault(_dragpan);
	
	var _mousewheelzoom = __webpack_require__(55);
	
	var _mousewheelzoom2 = _interopRequireDefault(_mousewheelzoom);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _selectevent = __webpack_require__(50);
	
	var _selectevent2 = _interopRequireDefault(_selectevent);
	
	var _featureevent = __webpack_require__(40);
	
	var _featureevent2 = _interopRequireDefault(_featureevent);
	
	var _modifyevent = __webpack_require__(52);
	
	var _modifyevent2 = _interopRequireDefault(_modifyevent);
	
	var _control = __webpack_require__(56);
	
	var _control2 = _interopRequireDefault(_control);
	
	var _zoom = __webpack_require__(57);
	
	var _zoom2 = _interopRequireDefault(_zoom);
	
	var _feature = __webpack_require__(46);
	
	var _feature2 = _interopRequireDefault(_feature);
	
	var _map = __webpack_require__(58);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _view = __webpack_require__(73);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _overlay = __webpack_require__(82);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _geojson = __webpack_require__(83);
	
	var _geojson2 = _interopRequireDefault(_geojson);
	
	var _intersects = __webpack_require__(84);
	
	var _intersects2 = _interopRequireDefault(_intersects);
	
	var _splitpolygon = __webpack_require__(85);
	
	var _splitpolygon2 = _interopRequireDefault(_splitpolygon);
	
	var _contains = __webpack_require__(86);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _polygonwithhole = __webpack_require__(87);
	
	var _polygonwithhole2 = _interopRequireDefault(_polygonwithhole);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var version = ("2.3.0");
	
	exports.default = {
	  Config: _config.Config,
	  Coordinate: _coordinate.Coordinate,
	  Canvas: _canvas.Canvas,
	  Event: _event2.default,
	  SelectEvent: _selectevent2.default,
	  FeatureEvent: _featureevent2.default,
	  ModifyEvent: _modifyevent2.default,
	  EventManager: _eventmanager2.default,
	  Counter: _counter2.default,
	  Helpers: _helpers2.default,
	  ImageState: _imagestate.ImageState,
	  ImageEvent: _imageevent.ImageEvent,
	  SingleImage: _singleimage2.default,
	  Geometry: _geometry2.default,
	  Extent: _extent2.default,
	  Point: _point2.default,
	  Line: _line2.default,
	  Polygon: _polygon2.default,
	  MutilPolygon: _mutilpolygon2.default,
	  Parallelogram: _parallelogram2.default,
	  RotatabelExtent: _rotatableextent2.default,
	  Style: _style.Style,
	  PointStyle: _pointstyle2.default,
	  LineStyle: _linestyle2.default,
	  FillStyle: _fillstyle2.default,
	  TextStyle: _textstyle2.default,
	  FeatureLayer: _featurelayer2.default,
	  SingleImageLayer: _singleimagelayer2.default,
	  Draw: _draw2.default,
	  DrawEvent: _drawevent2.default,
	  BrowserEvent: _browserevent2.default,
	  EventType: _eventtype.EventType,
	  Feature: _feature2.default,
	  Map: _map2.default,
	  View: _view2.default,
	  Overlay: _overlay2.default,
	  GeometryUtil: _geometryutil2.default,
	  ExtentUtil: _extentutil.ExtentUtil,
	  Select: _select2.default,
	  Modify: _modify2.default,
	  DragPan: _dragpan2.default,
	  Control: _control2.default,
	  Zoom: _zoom2.default,
	  Obj: _obj2.default,
	  Math: _math.Math,
	  MouseWheelZoom: _mousewheelzoom2.default,
	  GeoJSON: _geojson2.default,
	  version: version,
	  intersects: _intersects2.default,
	  splitPolygonByPolyline: _splitpolygon2.default,
	  contains: _contains2.default,
	  polygonWithHole: _polygonwithhole2.default
	};
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Constants defined width the define tag connot be changed in application code,
	 * but can be set at compile time.
	 *
	 * @type {{}}
	 */
	var Config = exports.Config = {};
	
	/**
	 * Enable debug mode ,Default is 'true'
	 *
	 * 配置DEBUG
	 *
	 * @property DEBUG
	 * @static
	 * @type {Boolean}
	 */
	Config.DEBUG = true;
	
	/**
	 * Default max zomm factor
	 *
	 * @property DEFAULT_ZOOM_FACTOR
	 * @static
	 * @type {Number}
	 */
	Config.DEFAULT_ZOOM_FACTOR = 2;
	
	/**
	 * Default max zoom level for map view.
	 * Defaylt is '10'
	 *
	 * @property DEFAULT_MAX_ZOOM
	 * @static
	 * @type {Number}
	 */
	Config.DEFAULT_MAX_ZOOM = 10;
	
	/**
	 * Default min zoom level for map view.
	 * Default is '0'
	 *
	 * @property DEFAULT_MIN_ZOOM
	 * @static
	 * @type {Number}
	 */
	Config.DEFAULT_MIN_ZOOM = 0;
	
	/**
	 * Maxinum mouse wheel delta.
	 *
	 * @property MOUSE_WHEEL_ZOOM_MAXDELTA
	 * @static
	 * @type {Number}
	 */
	Config.MOUSE_WHEEL_ZOOM_MAXDELTA = 1;
	
	/**
	 * Default tile size
	 *
	 * @property DEFAULT_TILE_SIZE
	 * @static
	 * @type {Number}
	 */
	Config.DEFAULT_TILE_SIZE = 256;
	
	exports.default = {
	  Config: Config
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUid = getUid;
	
	var uid = 0;
	
	function getUid() {
	  return uid++;
	}
	
	exports.default = {
	  getUid: getUid
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.colorToString = colorToString;
	/**
	 * 将rbg数组装换成rgba的字符串格式
	 * @param color rgb数组
	 * @param alpha 透明度
	 * @returns {string} 返回rgba格式字符串
	 */
	function colorToString(color) {
	  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	  var r = color[0];
	  if (r != (r | 0)) {
	    r = r + 0.5 | 0;
	  }
	
	  var g = color[1];
	  if (g != (g | 0)) {
	    g = g + 0.5 | 0;
	  }
	
	  var b = color[2];
	  if (b != (b | 0)) {
	    b = b + 0.5 | 0;
	  }
	
	  return "rgba(" + r + ", " + g + " , " + b + " , " + alpha + " )";
	}
	
	exports.default = {
	  colorToString: colorToString
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Obj = function () {
	  function Obj() {
	    _classCallCheck(this, Obj);
	  }
	
	  Obj.deepClone = function deepClone(obj) {
	    if (obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	      return obj;
	    }
	
	    var cpObj = obj instanceof Array ? [] : {};
	
	    for (var key in obj) {
	      cpObj[key] = Obj.deepClone(obj[key]);
	    }
	
	    return cpObj;
	  };
	
	  /**
	   * Get a collection from object
	   * @param object
	   * @returns {Array}
	   */
	
	
	  Obj.getValues = function getValues(object) {
	    var values = [];
	    for (var property in object) {
	      values.push(object[property]);
	    }
	    return values;
	  };
	
	  /**
	   * Clear all properties in object
	   * @param object
	   */
	
	
	  Obj.clear = function clear(object) {
	    for (var property in object) {
	      Reflect.deleteProperty(object, property);
	    }
	  };
	
	  /**
	   * Convert an object to a map instance
	   * @param obj
	   * @returns {Map}
	   */
	
	
	  Obj.objectToMap = function objectToMap(obj) {
	    var map = new Map();
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var ke = _step.value;
	
	        map.set(ke, obj[ke]);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    return map;
	  };
	
	  /**
	   *
	   * Convert a map object to object
	   *
	   * @static
	   * @method mapToObject
	   * @param map {Map} 传入的 Map 的对象
	   * @returns {Object} 装换成后的 Object 的对象
	   */
	
	
	  Obj.mapToObject = function mapToObject(map) {
	    // 合法性判断
	    if (map === undefined || map === null) {
	      return {};
	    }
	
	    var object = {};
	    map.forEach(function (value, key) {
	      object[key] = value;
	    });
	
	    return object;
	  };
	
	  return Obj;
	}();
	
	exports.default = Obj;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clamp = clamp;
	exports.lerp = lerp;
	function clamp(value, min, max) {
	  return Math.min(Math.max(value, min), max);
	}
	
	function lerp(a, b, x) {
	  return a + x * (b - a);
	}
	
	exports.default = {
	  clamp: clamp,
	  lerp: lerp
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Coordinate = exports.Coordinate = {};
	
	Coordinate.add = function (coordinate, delta) {
	  coordinate[0] += delta[0];
	  coordinate[1] += delta[1];
	  return coordinate;
	};
	
	Coordinate.rotate = function (coordinate, angle) {
	  var cosAngle = Math.cos(angle);
	  var sinAngle = Math.sin(angle);
	  var x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
	  var y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
	  coordinate[0] = x;
	  coordinate[1] = y;
	  return coordinate;
	};
	
	Coordinate.scale = function (coordinate, scale) {
	  coordinate[0] *= scale;
	  coordinate[1] *= scale;
	  return coordinate;
	};
	
	Coordinate.equal = function (coordinate1, coordinate2) {
	  return coordinate1[0] === coordinate2[0] && coordinate1[1] === coordinate2[1];
	};
	
	exports.default = {
	  Coordinate: Coordinate
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Canvas = exports.Canvas = {};
	
	/**
	 *
	 * @param context
	 * @param rotation
	 * @param offsetX
	 * @param offsetY
	 */
	Canvas.rotateAtOffset = function (context, rotation, offsetX, offsetY) {
	  if (rotation !== 0) {
	    context.translate(offsetX, offsetY);
	    context.rotate(rotation);
	    context.translate(-offsetX, -offsetY);
	  }
	};
	
	exports.default = {
	  Canvas: Canvas
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pointIntersectPoint = pointIntersectPoint;
	exports.pointIntersectLine = pointIntersectLine;
	exports.squaredSegmentDistance = squaredSegmentDistance;
	exports.squaredDistanceToSegment = squaredDistanceToSegment;
	exports.equals = equals;
	exports.squaredDistance = squaredDistance;
	exports.distance = distance;
	exports.closestOnSegment = closestOnSegment;
	exports.linearRingsContainsXY = linearRingsContainsXY;
	exports.linearRingContainsXY = linearRingContainsXY;
	exports.getPointInExtendedLineByDistanceFromAB = getPointInExtendedLineByDistanceFromAB;
	exports.getProjectivePoint = getProjectivePoint;
	exports.getAngleBetweenTwoVectors = getAngleBetweenTwoVectors;
	exports.simplify = simplify;
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// -------------------------------------------------
	// geometryUtil：
	// 底层数学计算方法集，如直线距离计算、投影点计算、向量计算等
	// -------------------------------------------------
	
	/**
	 * 判断两个点是否相交
	 *
	 * @method pointIntersectPoint
	 * @param pointA
	 * @param pointB
	 * @param tolerance {Number}
	 * @returns {Boolean}
	 */
	function pointIntersectPoint(pointA, pointB, tolerance) {
	  var toleranceDistance = tolerance ? tolerance : 2;
	
	  var distance = squaredDistance(pointA.x, pointA.y, pointB.x, pointB.y);
	  if (distance <= toleranceDistance) {
	    return true;
	  }
	
	  return false;
	}
	
	/**
	 * 判断点是否与线相交
	 *
	 * @method pointIntersectLine
	 * @param pointA
	 * @param line
	 * @param tolerance {Number}
	 * @returns {Boolean}
	 */
	function pointIntersectLine(pointA, line, tolerance) {
	  var path = line.path;
	  var squaredSegmentDistanceFn = squaredSegmentDistance;
	  var x = pointA.x;
	  var y = pointA.y;
	
	  var find = false;
	  for (var i = 0, ii = path.length - 1; i < ii; i++) {
	    var nowP = path[i];
	    var nextP = path[i + 1];
	    var _distance = squaredSegmentDistanceFn(x, y, nowP.x, nowP.y, nextP.x, nextP.y);
	    _distance = Math.sqrt(_distance);
	    if (_distance <= tolerance) {
	      find = true;
	      break;
	    }
	  }
	
	  return find;
	}
	
	/**
	 * Return the square of the closest distance between the point
	 * and the line segment.
	 * @param x
	 * @param y
	 * @param x1
	 * @param y1
	 * @param x2
	 * @param y2
	 * @returns {number}
	 */
	function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
	  var dx = x2 - x1;
	  var dy = y2 - y1;
	  if (dx !== 0 || dy !== 0) {
	    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
	    if (t > 1) {
	      x1 = x2;
	      y1 = y2;
	    } else if (t > 0) {
	      x1 += dx * t;
	      y1 += dy * t;
	    }
	  }
	
	  return squaredDistance(x, y, x1, y1);
	}
	
	/**
	 *
	 * @param coordinate
	 * @param segment
	 * @returns {number}
	 */
	function squaredDistanceToSegment(coordinate, segment) {
	  var closestCoordinate = closestOnSegment(coordinate, segment);
	  return squaredDistance(coordinate[0], coordinate[1], closestCoordinate[0], closestCoordinate[1]);
	}
	
	/**
	 * 判断两个坐标是否相等
	 *
	 * @method equals
	 * @param coordinate1
	 * @param coordinate2
	 * @returns {Boolean}
	 */
	function equals(coordinate1, coordinate2) {
	  var equals = true;
	  for (var i = coordinate1.length - 1; i >= 0; --i) {
	    if (coordinate1[i] != coordinate2[i]) {
	      equals = false;
	      break;
	    }
	  }
	
	  return equals;
	}
	
	/**
	 * 计算两点之间的距离的平方
	 *
	 * @method squaredDistance
	 * @param x1
	 * @param y1
	 * @param x2
	 * @param y2
	 * @returns {Number} squared distance
	 */
	function squaredDistance(x1, y1, x2, y2) {
	  var dx = x2 - x1;
	  var dy = y2 - y1;
	  return dx * dx + dy * dy;
	}
	
	/**
	 * 计算两点之间的距离
	 *
	 * @method distance
	 * @param coord1
	 * @param coord2
	 * @returns {Number}
	 */
	function distance(coord1, coord2) {
	  return Math.sqrt(squaredDistance(coord1[0], coord1[1], coord2[0], coord2[1]));
	}
	
	/**
	 *
	 * @param coordinate {Array}
	 * @param segment
	 * @returns {Array}
	 */
	function closestOnSegment(coordinate, segment) {
	  var x0 = coordinate[0];
	  var y0 = coordinate[1];
	  var start = segment[0];
	  var end = segment[1];
	  var x1 = start[0];
	  var y1 = start[1];
	  var x2 = end[0];
	  var y2 = end[1];
	  var dx = x2 - x1;
	  var dy = y2 - y1;
	
	  var along = dx === 0 && dy === 0 ? 0 : (dx * (x0 - x1) + dy * (y0 - y1)) / (dx * dx + dy * dy || 0);
	
	  var x = void 0,
	      y = void 0;
	  if (along <= 0) {
	    x = x1;
	    y = y1;
	  } else if (along >= 1) {
	    x = x2;
	    y = y2;
	  } else {
	    x = x1 + along * dx;
	    y = y1 + along * dy;
	  }
	
	  return [x, y];
	}
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param ends
	 * @param stride
	 * @param x
	 * @param y
	 * @returns {oolean}
	 */
	function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
	  if (ends.length === 0) {
	    return false;
	  }
	
	  if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
	    return false;
	  }
	
	  var i = void 0,
	      ii = void 0;
	  for (i = 1, ii = ends.length; i < ii; ++i) {
	    if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param end
	 * @param stride
	 * @param x
	 * @param y
	 * @returns {boolean}
	 */
	function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
	  // http://geomalgorithms.com/a03-_inclusion.html
	  // Copyright 2000 softSurfer, 2012 Dan Sunday
	  // This code may be freely used and modified for any purpose
	  // providing that this copyright notice is included with it.
	  // SoftSurfer makes no warranty for this code, and cannot be held
	  // liable for any real or imagined damage resulting from its use.
	  // Users of this code must verify correctness for their application.
	  var wn = 0;
	  var x1 = flatCoordinates[end - stride];
	  var y1 = flatCoordinates[end - stride + 1];
	  for (; offset < end; offset += stride) {
	    var x2 = flatCoordinates[offset];
	    var y2 = flatCoordinates[offset + 1];
	
	    if (y1 <= y) {
	      if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
	        wn++;
	      }
	    } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
	      wn--;
	    }
	
	    x1 = x2;
	    y1 = y2;
	  }
	
	  return wn !== 0;
	}
	
	/**
	 * 计算在 AB 延长线上的距离点 B d 距离的点
	 * @param xa A 点的 X
	 * @param ya A 点的 Y
	 * @param xb B 点的 X
	 * @param yb B 点的 Y
	 * @param d 距离 B 点 d 距离
	 * @returns {Array} 返回延长线上的点
	 */
	function getPointInExtendedLineByDistanceFromAB(xa, ya, xb, yb, d) {
	  var xab = void 0,
	      yab = void 0;
	  var xbd = void 0;
	  var xd = void 0,
	      yd = void 0;
	
	  xab = xb - xa;
	  yab = yb - ya;
	
	  if (xab === 0) {
	    if (yab < 0) {
	      return [xb, yb - d];
	    } else {
	      return [xb, yb + d];
	    }
	  }
	
	  if (yab === 0) {
	    if (xab < 0) {
	      return [xb - d, yb];
	    } else {
	      return [xb + d, yb];
	    }
	  }
	
	  xbd = Math.sqrt(d * d / (yab / xab * (yab / xab) + 1));
	
	  if (xab > 0) {
	    xbd = Math.sqrt(d * d / (yab / xab * (yab / xab) + 1));
	  } else {
	    xbd = -Math.sqrt(d * d / (yab / xab * (yab / xab) + 1));
	  }
	
	  xd = xb + xbd;
	  yd = yb + yab / xab * xbd;
	
	  return [xd, yd];
	}
	
	function getProjectivePoint(pLine, k, pOut) {
	  var projectX = null,
	      projectY = null;
	
	  //垂线斜率不存在情况
	
	  if (k == 0) {
	    projectX = pOut[0];
	    projectY = pLine[1];
	  } else {
	    projectX = (k * pLine[0] + pOut[0] / k + pOut[1] - pLine[1]) / (1 / k + k);
	    projectY = -1 / k * (projectX - pOut[0]) + pOut[1];
	  }
	
	  return [projectX, projectY];
	}
	
	function getAngleBetweenTwoVectors(x1, y1, x2, y2) {
	  var a = Math.atan2(y1, x1);
	  var b = Math.atan2(y2, x2);
	  var angle = b - a;
	  return angle;
	}
	
	function simplify(geometry) {
	  if (!geometry) {
	    return geometry;
	  }
	
	  var coordinates = void 0;
	  var geoType = geometry.geometryType;
	  if (geoType === _geometry2.default.POLYGON) {
	    coordinates = geometry.getCoordinates()[0];
	  } else if (geoType === _geometry2.default.LINE) {
	    coordinates = geometry.getCoordinates();
	
	    var sliceCoords = coordinates.slice(1, coordinates.length - 2);
	    var newCoords = [coordinates[0]];
	
	    for (var i = 0, len = sliceCoords.length; i < len; i += 2) {
	      newCoords.push(sliceCoords[i]);
	    }
	
	    newCoords.push(coordinates[coordinates.length - 1]);
	    geometry.setCoordinates(newCoords);
	  }
	}
	
	exports.default = {
	  linearRingContainsXY: linearRingContainsXY,
	  linearRingsContainsXY: linearRingsContainsXY,
	  pointIntersectPoint: pointIntersectPoint,
	  squaredDistance: squaredDistance,
	  closestOnSegment: closestOnSegment,
	  getPointInExtendedLineByDistanceFromAB: getPointInExtendedLineByDistanceFromAB,
	  equals: equals,
	  simplify: simplify,
	  distance: distance
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _extentutil = __webpack_require__(13);
	
	var _functions = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 图形基础类，不能直接实例化改类，只能继承和扩展，并实现该类定义的接口
	 *
	 * @class Geometry
	 * @extends BaseObject
	 * @module geometry
	 * @constructor
	 */
	var Geometry = function (_BaseObject) {
	  _inherits(Geometry, _BaseObject);
	
	  /**
	   * @constructor
	   */
	  function Geometry() {
	    _classCallCheck(this, Geometry);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._extent = null;
	
	    /**
	     * @type {number}
	     */
	    _this.stride = 2;
	
	    /**
	     * 图形是否可以旋转
	     * @type {boolean}
	     */
	    _this.rotable = false;
	
	    /**
	     * 图形是否可以被平移
	     * @type {boolean}
	     */
	    _this.moveable = false;
	
	    /**
	     * 图形是否可以被缩放
	     * @type {boolean}
	     */
	    _this.scaleable = false;
	    return _this;
	  }
	
	  /**
	   * 获取图形的类型
	   *
	   * @property geometryType
	   * @type {String}
	   */
	
	
	  /**
	   * 判断传入的点坐标是否在图形内
	   *
	   * @method pointInExtent
	   * @param coordinate {Array} 包含x, y的点数组
	   * @return {Boolean} ture returned if success, false otherwise.
	   */
	  Geometry.prototype.pointInExtent = function pointInExtent(coordinate) {
	    return _extentutil.ExtentUtil.containsPoint(this.extent, coordinate);
	  };
	
	  /**
	   * 判断是否相交
	   *
	   * intersect
	   * @param geomtry {Geometry}
	   * @returns {Boolean}
	   */
	
	
	  Geometry.prototype.intersect = function intersect(geomtry) {
	    // eslint-disable-line no-unused-vars
	    return false;
	  };
	
	  /**
	   * @TODO 使用getter、setter的读取器优化
	   * 获取图形的坐标信息
	   * @abstract
	   * @method getCoordinates
	   * @return {Array} 返回坐标数组
	   */
	
	
	  Geometry.prototype.getCoordinates = function getCoordinates() {
	    return [];
	  };
	
	  /**
	   * 计算表单显示的坐标
	   *
	   *  @method getFormShowPosition
	   *  @param {Number} offsetX 表单显示的 x 偏移量, 默认为 0
	   *  @param {Number} offsetY 表单显示的 y 偏移量, 默认为 0
	   *  @return {Array} 返回点坐标的数组表达方式
	   *  @example
	   *
	   *      var point = geometry.getFormShowPosition(10, 10)
	   *      Form.position = point
	   */
	
	
	  Geometry.prototype.getFormShowPosition = function getFormShowPosition() {
	    var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return [];
	  }; // eslint-disable-line no-unused-vars
	
	  /**
	   * 计算线的平面内点
	   *
	   * @method getFlatInteriorPoint
	   * @returns { Array }
	   */
	
	
	  Geometry.prototype.getFlatInteriorPoint = function getFlatInteriorPoint() {
	    return [];
	  };
	
	  /**
	   * 判断当前图形是否包含一个点
	   *
	   * @abstract
	   * @method containsXY
	   * @param x {Number} x 坐标信息
	   * @param y {Number} y 坐标信息
	   * @return {Boolean} ture returned if contains, false otherwise
	   */
	
	
	  Geometry.prototype.containsXY = function containsXY(x, y) {
	    return true;
	  }; // eslint-disable-line no-unused-vars
	
	  /**
	   * 移动改图形，移动图形，需要传递x，y的移动量
	   *
	   * @method move
	   * @abstract
	   * @param x {Number} x 坐标信息
	   * @param y {Number} y 坐标信息
	   */
	
	
	  Geometry.prototype.move = function move() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var opts = arguments[2];
	  }; // eslint-disable-line no-unused-vars
	
	  /**
	   * 定义对图形本身的缩放方法
	   *
	   * @method scale
	   * @abstract
	   * @param scale {Number} 缩放比率
	   * @param origin {Array} 缩放参考点
	   */
	
	
	  Geometry.prototype.scale = function scale() {
	    var _scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	    var origin = arguments[1];
	  }; // eslint-disable-line no-unused-vars
	
	  Geometry.prototype.getRotatedCoordinates = function getRotatedCoordinates(angle, anchor) {
	    var coordinates = this.getCoordinates()[0];
	    var newCoordinates = [];
	
	    var rotateXYFn = this.rotateXY;
	    for (var i = 0, len = coordinates.length; i < len; i++) {
	      var coor = coordinates[i];
	      coor = rotateXYFn(coor[0], coor[1], anchor, angle);
	      newCoordinates.push(coor);
	    }
	
	    return newCoordinates;
	  };
	
	  /**
	   * 旋转图形
	   * @method rotate
	   * @abstract
	   * @param angle {Number} 旋转的角度
	    * @param anchor {Object} 旋转的中心点
	   */
	
	
	  Geometry.prototype.rotate = function rotate() {
	    var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
	    var opts = arguments[2];
	
	    var newCoordinates = this.getRotatedCoordinates(angle, anchor);
	    this.setCoordinates([newCoordinates]);
	    this.changed();
	  };
	
	  Geometry.prototype.rotateXY = function rotateXY(x, y, anchor, angle) {
	    var _anchor = _slicedToArray(anchor, 2),
	        rx = _anchor[0],
	        ry = _anchor[1];
	
	    var dx = (x - rx) * Math.cos(angle) - (y - ry) * Math.sin(angle) + rx;
	    var dy = (x - rx) * Math.sin(angle) + (y - ry) * Math.cos(angle) + ry;
	    return [dx, dy];
	  };
	
	  /**
	   * 获取旋转图形的旋转锚点
	   */
	
	
	  Geometry.prototype.getAnchorForRotating = function getAnchorForRotating() {}; // eslint-disable-line no-unused-vars
	
	  /**
	   * 创建一个简化后的图形副本
	   *
	   * @method simplify
	   * @abstract
	   * @param tolerance {Number} 阈值
	   */
	
	
	  Geometry.prototype.simplify = function simplify() {
	    var tolerance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	  }; // eslint-disable-line no-unused-vars
	
	  /**
	   * 将图形转换成json格式
	   *
	   * @method toJSON
	   * @abstrct
	   */
	
	
	  Geometry.prototype.toJSON = function toJSON() {};
	
	  /**
	   * 克隆一个图形副本
	   *
	   * @method clone
	   * @abstract
	   */
	
	
	  Geometry.prototype.clone = function clone() {};
	
	  _createClass(Geometry, [{
	    key: 'geometryType',
	    get: function get() {
	      return Geometry.UNDEFINED;
	    }
	
	    /**
	     * 获取图形的最小外接矩形(MBR-Minimum Bounding Rectangle)
	     * 除去点意外，任何图形都有最小外接矩形
	     *
	     * @property extent
	     * @type {mk.Extent}
	     */
	
	  }, {
	    key: 'extent',
	    get: function get() {
	      return this._extent;
	    }
	
	    /**
	     * 获取图形是否是逆时针
	     *
	     * @property anticlockwise
	     * @type {Boolean}
	     */
	
	  }, {
	    key: 'anticlockwise',
	    get: function get() {
	      var geometryType = this.geometryType;
	      var coordinates = this.getCoordinates();
	
	      var fp = void 0,
	          sp = void 0,
	          f1 = void 0,
	          f2 = void 0,
	          f3 = void 0;
	
	      if (geometryType === Geometry.LINE) {
	        f1 = [0, 0];
	        f2 = coordinates[0];
	        f3 = coordinates[1];
	      } else if (geometryType === Geometry.POLYGON || geometryType === Geometry.EXTENT) {
	        f1 = coordinates[0];
	        f2 = coordinates[1];
	        f3 = coordinates[2];
	      }
	
	      fp = [f2[0] - f1[0], f2[1] - f1[1]];
	      sp = [f3[0] - f2[0], f3[1] - f2[1]];
	
	      return fp[0] * sp[1] - sp[0] * fp[1] < 0;
	    }
	  }]);
	
	  return Geometry;
	}(_baseobject2.default);
	
	/**
	 * 点类型
	 *
	 * @property POINT
	 * @static
	 * @final
	 * @type {String}
	 */
	
	
	exports.default = Geometry;
	Geometry.POINT = 'point';
	
	/**
	 * 多点类型
	 *
	 * @property MULTI_POINT
	 * @static
	 * @final
	 * @type {String}
	 */
	Geometry.MULTI_POINT = 'multi_point';
	
	/**
	 * 线类型
	 *
	 * @property LINE
	 * @static
	 * @final
	 * @type {String}
	 */
	Geometry.LINE = 'line';
	
	/**
	 * 多线类型
	 *
	 * @property MULTI_LINE
	 * @static
	 * @final
	 * @type {String}
	 */
	Geometry.MULTI_LINE = 'multi_line';
	
	/**
	 * 多边形类型
	 *
	 * @property POLYGON
	 * @static
	 * @final
	 * @type {String}
	 */
	Geometry.POLYGON = 'polygon';
	
	/**
	 * 多个多边形类型
	 *
	 * @property MULTI_POLYGON
	 * @static
	 * @final
	 * @type {String}
	 */
	Geometry.MULTI_POLYGON = 'multi_polygon';
	
	/**
	 * 矩形类型
	 *
	 * @property EXTENT
	 * @static
	 * @final
	 * @type {String}
	 */
	Geometry.EXTENT = 'extent';
	
	/**
	 * 圆类型
	 *
	 * @property CIRCLE
	 * @static
	 * @final
	 * @type {String}
	 */
	Geometry.CIRCLE = 'circle';
	
	/**
	 * 定义平行四边形图形
	 * @type {string}
	 */
	Geometry.PARALLELOGRAM = 'parallelogram';
	
	/**
	 * 定义可旋转矩形
	 */
	Geometry.ROTATABLE_EXTENT = 'rotatable_extent';
	
	/**
	 * 未定义
	 *
	 * @property UNDEFINED
	  * @static
	 * @final
	 * @type {String}
	 */
	Geometry.UNDEFINED = 'undefined';
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _event = __webpack_require__(11);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _counter = __webpack_require__(2);
	
	var _eventtype = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // The BaseObject is a base class that only can be inherited, not be instanced.
	
	
	/**
	 * 对象基类，所有子类原则上要继承该类。
	 *
	 * 该类提供一个 id 和一个 revision,id 作为类的唯一标示
	 *
	 * @class BaseObject
	 * @extends Event
	 * @constructor
	 * @module core
	 */
	var BaseObject = function (_Event) {
	  _inherits(BaseObject, _Event);
	
	  /**
	   * Create a BaseObject
	   *
	   * 构造函数
	   *
	   * @consructor
	   */
	  function BaseObject() {
	    _classCallCheck(this, BaseObject);
	
	    /**
	     * ID
	     *
	     * @property id
	     * @type {Number}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _Event.call(this));
	
	    _this._id = (0, _counter.getUid)();
	
	    /**
	     * 版本号
	     *
	     * @property revision
	     * @type {Number}
	     * @private
	     */
	    _this._revision = 0;
	    return _this;
	  }
	
	  /**
	   * @TODO 需要加入渲染队列，采取延时手段，批量渲染，提高性能
	   * 可以借鉴vue的队列方式
	   * 
	   * 此方法用于派发map渲染事件
	   *
	   * @example this.changed() | super.changed()
	   *
	   * @method changed
	   */
	
	
	  BaseObject.prototype.changed = function changed() {
	    ++this._revision;
	    this.dispatchEvent(_eventtype.EventType.CHANGE);
	  };
	
	  /**
	   *
	   * ID属性，用于获取该对象的ID编号
	   *
	   * @property id
	   * @type {Number}
	   */
	
	
	  _createClass(BaseObject, [{
	    key: 'id',
	    get: function get() {
	      return this._id;
	    }
	
	    /**
	     *
	     * 地图渲染的版本号
	     *
	     * @property revision
	     * @type {Number}
	     * @returns {Number} the revision id
	     */
	
	  }, {
	    key: 'revision',
	    get: function get() {
	      return this._revision;
	    }
	  }]);
	
	  return BaseObject;
	}(_event2.default);
	
	exports.default = BaseObject;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// The event processor for all subclasss, which can allow subclass
	// to handle event dispatching and listening.This is the top level class
	/**
	 * 顶层事件处理器类,让子类具备事件的监听和派发
	 *
	 * @class Event
	 * @module core
	 * @constructor new Event()
	 *
	 */
	var Event = function () {
	
	  /**
	   * Event's constructor
	   * @constructor constructor
	   */
	  function Event() {
	    _classCallCheck(this, Event);
	
	    this._pendingRemovals = {};
	
	    this._listeners = {};
	    this._dispatching = {};
	
	    this.nullFunction = function () {};
	  }
	
	  /**
	   * 根据事件标识获取对应标识的方法列表
	   *
	   * @method getListeners
	   * @param type {String} event type 事件标识
	   * @return {Array} 返回对应事件标示的函数数组
	   */
	
	
	  Event.prototype.getListeners = function getListeners(type) {
	    return this._listeners[type];
	  };
	
	  /**
	   * 判断是否含有对应事件标识的监听
	   *
	   * @method hasListener
	   * @param optType {Boolean}
	   * @returns {Boolean} ture if exsit ,false otherwise
	   */
	
	
	  Event.prototype.hasListener = function hasListener(optType) {
	    return optType ? Reflect.has(this._listeners, optType) : Object.keys(this._listeners).length > 0;
	  };
	
	  /**
	   * 移除事件监听
	   *
	   * @method removeEventListener
	   * @param type {String} event type
	   * @param listener {Array} listeners for event type
	   */
	
	
	  Event.prototype.removeEventListener = function removeEventListener(type, listener) {
	    var listeners = this._listeners[type];
	    if (listeners) {
	      var index = listeners.indexOf(listener);
	
	      if (Reflect.has(this._pendingRemovals, type)) {
	        listeners[index] = this.nullFunction;
	        ++this._pendingRemovals[type];
	      } else {
	        listeners.splice(index, 1);
	
	        if (listeners.length === 0) {
	          Reflect.deleteProperty(this._listeners, type);
	        }
	      }
	    }
	  };
	
	  /**
	   * 添加事件监听,需要指定事件标示和处理方法
	   *
	   * @example
	   *    map.addEventListener('singleclick', function(event) {})
	   *
	   * @method addEventListener
	   * @param type {String} event type
	   * @param listener {Array} listeners for event type
	   */
	
	
	  Event.prototype.addEventListener = function addEventListener(type, listener) {
	    var listeners = this._listeners[type];
	    if (!listeners) {
	      listeners = this._listeners[type] = [];
	    }
	
	    if (listeners.indexOf(listener) === -1) {
	      listeners.push(listener);
	    }
	  };
	
	  /**
	   * 事件派发
	   *
	   * @example
	   * this.dispatchEvent(EventType.CHANGE)
	   *
	   * @method dispatchEvent
	   * @param event {String} event type string
	   * @returns {Boolean} ture if success ,false otherwise.
	   */
	
	
	  Event.prototype.dispatchEvent = function dispatchEvent(event) {
	    var evt = typeof event === 'string' ? { type: event } : event;
	    var type = evt.type;
	    evt.target = this;
	    var listeners = this._listeners[type];
	    var propagate = void 0;
	
	    if (listeners) {
	      if (!Reflect.has(this._dispatching, type)) {
	        this._dispatching[type] = 0;
	        this._pendingRemovals[type] = 0;
	      }
	
	      ++this._dispatching[type];
	
	      for (var i = 0, ii = listeners.length; i < ii; ++i) {
	        if (listeners[i].call(this, evt) === false || evt.propagationStopped) {
	          propagate = false;
	          break;
	        }
	      }
	
	      --this._dispatching[type];
	
	      if (this._dispatching[type] === 0) {
	        var pendingRemovals = this._pendingRemovals[type];
	        Reflect.deleteProperty(this._pendingRemovals, type);
	
	        while (pendingRemovals--) {
	          this.removeEventListener(type, this.nullFunction);
	        }
	
	        Reflect.deleteProperty(this._dispatching, type);
	      }
	
	      return propagate;
	    }
	  };
	
	  return Event;
	}();
	
	exports.default = Event;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventType = exports.EventType = {};
	
	/**
	 * Triggered when map is needed to render
	 *
	 * @property CHANGE
	 * @static
	 * @final
	 * @type {String}
	 */
	EventType.CHANGE = 'change';
	
	/**
	 * Triggered when view has been changed
	 *
	 * 当地图视图发生变化时将会派发改事件
	 *
	 * @property VIEW_CHANGED
	 * @static
	 * @final
	 * @type {String}
	 */
	EventType.VIEW_CHANGED = 'viewchanged';
	
	/**
	 * Triggered when a image download error
	 *
	 * @property ERROR
	 * @static
	 * @final
	 * @type {String}
	 */
	EventType.ERROR = 'error';
	
	/**
	 * Triggered when a image finish load
	 *
	 * @property LOAD
	 * @static
	 * @final
	 * @type {String}
	 */
	EventType.LOAD = 'load';
	
	/**
	 * 当浏览器窗口的尺寸发生变化时派发
	 *
	 * @property RESIZE
	 * @static
	 * @final
	 * @type {string}
	 */
	EventType.RESIZE = 'resize';
	
	exports.default = {
	  EventType: EventType
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ExtentUtil = exports.ExtentUtil = {};
	
	// -------------------------------------------------
	// extentUtil:
	// extent辅助方法集，如extent类转换、计算中心点、计算长宽、构建
	// 缓冲extent等作用
	// -------------------------------------------------
	
	/**
	 * 创建一个空矩形
	 *
	 * @method createEmpty
	 * @returns {[*,*,*,*]}
	 */
	ExtentUtil.createEmpty = function () {
	  return [Infinity, Infinity, -Infinity, -Infinity];
	};
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param end
	 * @param stride
	 * @param opt_extent
	 */
	ExtentUtil.createOrUpdateFromFlatCoordinates = function (flatCoordinates, offset, end, stride, opt_extent) {
	  var extent = ExtentUtil.createOrUpdateEmpty(opt_extent);
	  return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
	};
	
	var extendXY = function extendXY(extent, x, y) {
	  extent[0] = Math.min(extent[0], x);
	  extent[1] = Math.min(extent[1], y);
	  extent[2] = Math.max(extent[2], x);
	  extent[3] = Math.max(extent[3], y);
	};
	
	var extendFlatCoordinates = function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
	  for (; offset < end; offset += stride) {
	    extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
	  }
	
	  return extent;
	};
	
	/**
	 *
	 * @param opt_extent
	 * @returns {*}
	 */
	ExtentUtil.createOrUpdateEmpty = function (opt_extent) {
	  return ExtentUtil.createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, opt_extent);
	};
	
	/**
	 * 创建或更新矩形
	 *
	 * @method createOrUpdate
	 * @param minX {Number}
	 * @param minY {Number}
	 * @param maxX {Number}
	 * @param maxY {Number}
	 * @param opt_extent {Array}
	 * @returns {*}
	 */
	ExtentUtil.createOrUpdate = function (minX, minY, maxX, maxY, opt_extent) {
	  if (opt_extent) {
	    opt_extent[0] = minX;
	    opt_extent[1] = minY;
	    opt_extent[2] = maxX;
	    opt_extent[3] = maxY;
	    return opt_extent;
	  } else {
	    return [minX, minY, maxX, maxY];
	  }
	};
	
	/**
	 * 获取矩形的中心点
	 *
	 * @method getCenter
	 * @param extent
	 * @returns {[*,*]}
	 */
	ExtentUtil.getCenter = function (extent) {
	  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
	};
	
	/**
	 * Create an empty extent.
	 * @returns {[*,*,*,*]}
	 */
	ExtentUtil.createScaleExtent = function (center, value) {
	  return [center.x - value, center.y - value, center.x + value, center.y + value];
	};
	
	/**
	 *
	 * @param point1
	 * @param point2
	 * @returns {[*,*,*,*]}
	 */
	ExtentUtil.boundingExtentFromTwoPoints = function (point1, point2) {
	  var xmin = 0,
	      ymin = 0,
	      xmax = 0,
	      ymax = 0;
	
	  if (point1[0] > point2[0]) {
	    xmin = point2[0];
	    xmax = point1[0];
	  } else {
	    xmin = point1[0];
	    xmax = point2[0];
	  }
	
	  if (point1[1] > point2[1]) {
	    ymin = point2[1];
	    ymax = point1[1];
	  } else {
	    ymin = point1[1];
	    ymax = point2[1];
	  }
	
	  return [xmin, ymin, xmax, ymax];
	};
	
	/**
	 * 通过坐标数据构建矩形
	 *
	 * @method boundingExtent
	 * @param extent
	 * @param coordinate
	 */
	ExtentUtil.boundingExtent = function (coordinates) {
	  var extent = ExtentUtil.createEmpty();
	
	  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
	    ExtentUtil.extendCoordinate(extent, coordinates[i]);
	  }
	
	  return [ExtentUtil.getBottomLeft(extent), ExtentUtil.getBottomRight(extent), ExtentUtil.getTopRight(extent), ExtentUtil.getTopLeft(extent), ExtentUtil.getBottomLeft(extent)];
	};
	
	/**
	 * Build an extent that includes all given coordinates.
	 * @param extent
	 * @param coordinate
	 */
	ExtentUtil.boundingSimpleExtent = function (coordinates) {
	  var extent = ExtentUtil.createEmpty();
	
	  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
	    ExtentUtil.extendCoordinate(extent, coordinates[i]);
	  }
	
	  return extent;
	};
	
	/**
	 * 通过坐标更新矩形
	 *
	 * @method extendCoordinate
	 * @param extent {Geometry}
	 * @param coordinate {Array}
	 */
	ExtentUtil.extendCoordinate = function (extent, coordinate) {
	  if (coordinate[0] < extent[0]) {
	    extent[0] = coordinate[0];
	  }
	
	  if (coordinate[0] > extent[2]) {
	    extent[2] = coordinate[0];
	  }
	
	  if (coordinate[1] < extent[1]) {
	    extent[1] = coordinate[1];
	  }
	
	  if (coordinate[1] > extent[3]) {
	    extent[3] = coordinate[1];
	  }
	};
	
	/**
	 * 获取矩形右侧线段坐标
	 *
	 * getBottomRight
	 * @param extent {Geometry}
	 * @returns {[*,*]}
	 */
	ExtentUtil.getBottomRight = function (extent) {
	  return [extent[2], extent[1]];
	};
	
	/**
	 * 获取矩形左侧线段坐标
	 *
	 * getBottomLef
	 * @param extent {Geometry}
	 * @returns {[*,*]}
	 */
	ExtentUtil.getBottomLeft = function (extent) {
	  return [extent[0], extent[1]];
	};
	
	/**
	 * Get the top right coordinate of an extent
	 * extent
	 * @returns {[*,*]}
	 */
	ExtentUtil.getTopRight = function (extent) {
	  return [extent[2], extent[3]];
	};
	
	/**
	 * Get the top left coordinate of an extent
	 *  extent
	 * @returns {[*,*]}
	 */
	ExtentUtil.getTopLeft = function (extent) {
	  return [extent[0], extent[3]];
	};
	
	/**
	 * 判断点是否在矩形上
	 *
	 * @method containsPoint
	 * @param extent {Geometry}
	 * @param point {Array}
	 * @returns {Boolean}
	 */
	ExtentUtil.containsPoint = function (extent, point) {
	  var x = point[0];
	  var y = point[1];
	
	  if (Array.isArray(extent)) {
	    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
	  } else {
	    return extent.xmin - 1 <= x && x <= extent.xmax + 1 && extent.ymin - 1 <= y && y <= extent.ymax + 1;
	  }
	};
	
	/**
	 * Return extent increased by the provided value.
	 * @param extent
	 * @param value
	 * @param optExtent
	 * @returns {*}
	 */
	ExtentUtil.buffer = function (extent, value, optExtent) {
	  if (optExtent) {
	    optExtent[0] = extent[0] - value;
	    optExtent[1] = extent[1] - value;
	    optExtent[2] = extent[2] + value;
	    optExtent[3] = extent[3] + value;
	    return optExtent;
	  } else {
	    return [extent[0] - value, extent[1] - value, extent[2] + value, extent[3] + value];
	  }
	};
	
	/**
	 * Convert xmin, ymin, xmax, ymax of an extent to a ring array
	 * @param xmin
	 * @param ymin
	 * @param xmax
	 * @param ymax
	 * @returns {[*,*,*,*,*]}
	 */
	ExtentUtil.minMaxToRing = function (xmin, ymin, xmax, ymax) {
	  var ring = [[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]];
	
	  return ring;
	};
	
	/**
	 * 获取图形的高
	 *
	 * @method getHeight
	 * @param extent {Geometry}
	 * @returns {Number}
	 */
	ExtentUtil.getHeight = function (extent) {
	  return extent[3] - extent[1];
	};
	
	/**
	 * 获取图形的宽
	 *
	 * @method getWidth
	 * @param extent {Geometry}
	 * @returns {Number}
	 */
	ExtentUtil.getWidth = function (extent) {
	  return extent[2] - extent[0];
	};
	
	/**
	 * 矩形坐标点更新
	 *
	 * @method updateExtent
	 * @param geometry {Geometry}
	 * @param newCoordinates {Array}
	 * @param dragSegments
	 * @returns {Array}
	 */
	ExtentUtil.updateExtent = function (geometry, newCoordinates, dragSegments) {
	  var dragSegment = dragSegments[0];
	  var index = dragSegment.index;
	  var extentCoordinates = geometry.getCoordinates();
	  var segment1 = extentCoordinates[index];
	  var segment2 = extentCoordinates[index + 1];
	
	  var isVertex = dragSegment.isVertex;
	  if (isVertex) {
	    if (index === 0 || index === 4) {
	      extentCoordinates[0] = newCoordinates;
	      extentCoordinates[4] = newCoordinates;
	      extentCoordinates[1][1] = newCoordinates[1];
	      extentCoordinates[3][0] = newCoordinates[0];
	    } else if (index === 1) {
	      extentCoordinates[1] = newCoordinates;
	
	      extentCoordinates[2][0] = newCoordinates[0];
	      extentCoordinates[0][1] = newCoordinates[1];
	      extentCoordinates[4] = extentCoordinates[0];
	    } else if (index === 2) {
	      extentCoordinates[2] = newCoordinates;
	      extentCoordinates[1][0] = newCoordinates[0];
	      extentCoordinates[3][1] = newCoordinates[1];
	    } else if (index === 3) {
	      extentCoordinates[3] = newCoordinates;
	      extentCoordinates[2][1] = newCoordinates[1];
	      extentCoordinates[0][0] = newCoordinates[0];
	      extentCoordinates[4] = extentCoordinates[0];
	    }
	  } else {
	    if (segment1[0] === segment2[0]) {
	      extentCoordinates[index][0] = newCoordinates[0];
	      extentCoordinates[index + 1][0] = newCoordinates[0];
	    }
	
	    if (segment1[1] === segment2[1]) {
	      extentCoordinates[index][1] = newCoordinates[1];
	      extentCoordinates[index + 1][1] = newCoordinates[1];
	    }
	
	    if (index === 3) {
	      extentCoordinates[0] = extentCoordinates[4];
	    }
	    if (index === 0) {
	      extentCoordinates[4] = extentCoordinates[0];
	    }
	  }
	
	  return extentCoordinates;
	};
	
	/**
	 *
	 * @param extent1
	 * @param extent2
	 * @param opt_extent
	 * @returns {(*|*|*|*)[]}
	 */
	ExtentUtil.getIntersection = function (extent1, extent2, opt_extent) {
	  var intersection = opt_extent ? opt_extent : ExtentUtil.createEmpty();
	  if (ExtentUtil.intersects(extent1, extent2)) {
	    if (extent1[0] > extent2[0]) {
	      intersection[0] = extent1[0];
	    } else {
	      intersection[0] = extent2[0];
	    }
	
	    if (extent1[1] > extent2[1]) {
	      intersection[1] = extent1[1];
	    } else {
	      intersection[1] = extent2[1];
	    }
	
	    if (extent1[2] < extent2[2]) {
	      intersection[2] = extent1[2];
	    } else {
	      intersection[2] = extent2[2];
	    }
	
	    if (extent1[3] < extent2[3]) {
	      intersection[3] = extent1[3];
	    } else {
	      intersection[3] = extent2[3];
	    }
	  }
	
	  return intersection;
	};
	
	/**
	 * 判断两个矩形是否相交
	 *
	 * @method intersects
	 * @param extent1 {Geometry}
	 * @param extent2 {Geometry}
	 * @returns {Boolean}
	 */
	ExtentUtil.intersects = function (extent1, extent2) {
	  return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
	};
	
	/**
	 * 判断矩形是否包含在另一个矩形中
	 *
	 * @method containsExtent
	 * @param extent1
	 * @param extent2
	 * @returns {Boolean}
	 */
	ExtentUtil.containsExtent = function (extent1, extent2) {
	  return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
	};
	
	/**
	 *
	 * @param extent
	 * @returns {boolean}
	 */
	ExtentUtil.isEmpty = function (extent) {
	  return extent[2] < extent[0] || extent[3] < extent[1];
	};
	
	/**
	 *
	 * @param center
	 * @param resolution
	 * @param rotation
	 * @param size
	 * @param opt_extent
	 * @returns {*}
	 */
	ExtentUtil.getForViewAndSize = function (center, resolution, rotation, size, opt_extent) {
	  var dx = resolution * size[0] / 2;
	  var dy = resolution * size[1] / 2;
	  var cosRotation = Math.cos(rotation);
	  var sinRotation = Math.sin(rotation);
	  var xCos = dx * cosRotation;
	  var xSin = dx * sinRotation;
	  var yCos = dy * cosRotation;
	  var ySin = dy * sinRotation;
	  var x = center[0];
	  var y = center[1];
	  var x0 = x - xCos + ySin;
	  var x1 = x - xCos - ySin;
	  var x2 = x + xCos - ySin;
	  var x3 = x + xCos + ySin;
	  var y0 = y - xSin - yCos;
	  var y1 = y - xSin + yCos;
	  var y2 = y + xSin + yCos;
	  var y3 = y + xSin - yCos;
	
	  return ExtentUtil.createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), opt_extent);
	};
	
	exports.default = {
	  ExtentUtil: ExtentUtil
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var functions = exports.functions = {};
	
	/**
	 * 默认条件函数执行
	 * @returns {boolean}
	 * @constructor
	 */
	functions.TURE = function () {
	  return true;
	};
	
	/**
	 * 默认条件函数不执行
	 * @returns {boolean}
	 * @constructor
	 */
	functions.FALSE = function () {
	  return false;
	};
	
	exports.default = {
	  functions: functions
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Style = undefined;
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _fillstyle = __webpack_require__(16);
	
	var _fillstyle2 = _interopRequireDefault(_fillstyle);
	
	var _linestyle = __webpack_require__(19);
	
	var _linestyle2 = _interopRequireDefault(_linestyle);
	
	var _pointstyle = __webpack_require__(20);
	
	var _pointstyle2 = _interopRequireDefault(_pointstyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by zhangyong on 2017/3/17.
	 */
	
	var Style = exports.Style = {};
	
	/**
	 * 设置缺省图形style
	 *
	 * Create a defaut style for feature layer
	 * @returns {null|Array|[*]}
	 */
	Style.defaultFunction = function () {
	  if (!Style._default) {
	    var white = [255, 255, 255];
	    var blue = [0, 153, 255];
	    var width = 1.5;
	
	    Style._default = {};
	
	    // 面样式 polygon style
	    Style._default[_geometry2.default.POLYGON] = [new _fillstyle2.default(white, new _linestyle2.default(blue, 1, 1.25), 0.2)];
	    Style._default[_geometry2.default.MULTI_POLYGON] = Style._default[_geometry2.default.POLYGON];
	    Style._default[_geometry2.default.PARALLELOGRAM] = Style._default[_geometry2.default.POLYGON];
	    Style._default[_geometry2.default.ROTATABLE_EXTENT] = Style._default[_geometry2.default.POLYGON];
	
	    // same as polygon style
	    Style._default[_geometry2.default.EXTENT] = Style._default[_geometry2.default.POLYGON];
	
	    // 线样式 line style
	    Style._default[_geometry2.default.LINE] = [new _linestyle2.default(blue, 1, width) // 内框
	    ];
	
	    // 点样式 point style
	    Style._default[_geometry2.default.POINT] = [new _pointstyle2.default(10, white, 1, new _linestyle2.default(blue, 1, width))];
	  }
	
	  return Style._default;
	};
	
	/**
	 * Create a default style while drawing
	 * @returns {{}}
	 */
	Style.createDefaultEditing = function () {
	  var styles = {};
	  var white = [255, 255, 255];
	  var blue = [0, 153, 255];
	  var width = 1.5;
	
	  // 面样式
	  styles[_geometry2.default.POLYGON] = [new _fillstyle2.default(white, // 填充
	  new _linestyle2.default(blue, 1, 1) // 边框
	  , 0.2)];
	
	  styles[_geometry2.default.MULTI_POLYGON] = styles[_geometry2.default.POLYGON];
	  styles[_geometry2.default.EXTENT] = styles[_geometry2.default.POLYGON];
	  styles[_geometry2.default.PARALLELOGRAM] = styles[_geometry2.default.POLYGON];
	  styles[_geometry2.default.ROTATABLE_EXTENT] = styles[_geometry2.default.POLYGON];
	
	  // 线样式
	  styles[_geometry2.default.LINE] = [new _linestyle2.default(white, 1, width + 1, _linestyle2.default.LineCap.ROUND, _linestyle2.default.LineJion.ROUND), // 外框
	  new _linestyle2.default(blue, 1, width, _linestyle2.default.LineCap.ROUND, _linestyle2.default.LineJion.ROUND) // 内框
	  ];
	  styles[_geometry2.default.MULTI_LINE] = styles[_geometry2.default.LINE];
	
	  // 点样式
	  styles[_geometry2.default.POINT] = [new _pointstyle2.default(10, white, 0.1, new _linestyle2.default(blue, 1, 2))];
	  styles[_geometry2.default.MULTI_POINT] = styles[_geometry2.default.POINT];
	
	  return styles;
	};
	
	/**
	 *
	 * @returns {{}}
	 */
	Style.createDefaultSelecting = function () {
	  var styles = {};
	  var white = [255, 255, 255];
	  var blue = [0, 153, 255];
	  var width = 3;
	  var outsideLine = new _linestyle2.default(white, 1, width + 2, _linestyle2.default.LineCap.ROUND, _linestyle2.default.LineJion.ROUND); // 外框
	  var insideLine = new _linestyle2.default(blue, 1, width, _linestyle2.default.LineCap.ROUND, _linestyle2.default.LineJion.ROUND);
	  // 面样式
	  styles[_geometry2.default.POLYGON] = [new _fillstyle2.default(white, outsideLine, 0.5), new _fillstyle2.default(white, insideLine, 0)];
	  styles[_geometry2.default.MULTI_POLYGON] = styles[_geometry2.default.POLYGON];
	  styles[_geometry2.default.EXTENT] = styles[_geometry2.default.POLYGON];
	
	  // 线样式
	  styles[_geometry2.default.LINE] = [outsideLine, // 外框
	  insideLine // 内框
	  ];
	  styles[_geometry2.default.MULTI_LINE] = styles[_geometry2.default.LINE];
	
	  // 点样式
	  styles[_geometry2.default.POINT] = [new _pointstyle2.default(12, blue, 1, new _linestyle2.default(blue, 1, 1))];
	  styles[_geometry2.default.MULTI_POINT] = styles[_geometry2.default.POINT];
	
	  return styles;
	};
	
	/**
	 * Convert the passed obj into a style function.
	 *
	 * @param obj
	 * @returns {*}
	 */
	Style.createFunction = function (obj) {
	  var styleFunction = void 0;
	
	  if (typeof obj === 'function') {
	    styleFunction = obj;
	  } else {
	    var styles = void 0;
	
	    if (Array.isArray(obj)) {
	      styles = obj;
	    } else {
	      styles = [obj];
	    }
	
	    styleFunction = function styleFunction(feature) {
	      return styles[0][feature.geometry.geometryType];
	    };
	  }
	
	  return styleFunction;
	};
	
	exports.default = {
	  Style: Style
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _basestyle = __webpack_require__(17);
	
	var _basestyle2 = _interopRequireDefault(_basestyle);
	
	var _textstyle = __webpack_require__(18);
	
	var _textstyle2 = _interopRequireDefault(_textstyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 *
	 * 定义多边形样式，多边形样式包括<b>填充样式</b>和<b>边框样式</b>，
	 * 需要分别设置
	 *
	 * @class FillStyle
	 * @extends BaseStyle
	 * @module style
	 * @constructor
	 * @example
	 *
	 *     var fillStyle = new mk.FillStyle([255,255,255],
	 *         new mk.LineStyle([0,0,255],1,1.25),0.5)
	 *
	 */
	var FillStyle = function (_BaseStyle) {
	  _inherits(FillStyle, _BaseStyle);
	
	  /**
	   * 构建一个面样式
	   * 面样式由填充样式和边框样式组成
	   *
	   * @constructor
	   * @param style 备有接口，以后扩充面的填充样式
	   * @param color 面的填充颜色
	   * @param alpha 免得填充透明度
	   * @param borderStyle LineStyle对象，指定面样式的边框对象属性
	   */
	  function FillStyle() {
	    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [255, 255, 255];
	    var borderStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : FillStyle.SOLID;
	
	    _classCallCheck(this, FillStyle);
	
	    var _this = _possibleConstructorReturn(this, _BaseStyle.call(this, color, style, alpha));
	
	    _this._borderStyle = borderStyle;
	    _this.textStyle = new _textstyle2.default();
	    return _this;
	  }
	
	  /**
	   * 边框样式对象
	   *
	   * @property borderStyle
	   * @type {mk.LineStyle}
	   */
	
	
	  /**
	   * 克隆面样式
	   *
	   * @method clone
	   * @returns {FillStyle}
	   */
	  FillStyle.prototype.clone = function clone() {
	    var newStyle = new FillStyle(this.color, this.borderStyle.clone(), this.alpha, this.style);
	
	    if (this.textStyle) {
	      newStyle.textStyle = this.textStyle;
	    }
	
	    return newStyle;
	  };
	
	  _createClass(FillStyle, [{
	    key: 'borderStyle',
	    get: function get() {
	      return this._borderStyle;
	    },
	    set: function set(value) {
	      return this._borderStyle = value;
	    }
	  }]);
	
	  return FillStyle;
	}(_basestyle2.default);
	
	/**
	 * 实体填充
	 * @static
	 * @final
	 * @property SOLID
	 * @type {string}
	 */
	
	
	exports.default = FillStyle;
	FillStyle.SOLID = 'solid';
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/6/13.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * 定义基础样式类，包括了一些基础的属性，如颜色、对象样式、透明度
	 *
	 * @class BaseStyle
	 * @extends BaseObject
	 * @module style
	 */
	var BaseStyle = function (_BaseObject) {
	  _inherits(BaseStyle, _BaseObject);
	
	  /**
	   *
	   * @constructor
	   * @param color {Array}
	   * @param style {Object}
	   * @param alpha {Number}
	   */
	  function BaseStyle(color, style) {
	    var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	
	    _classCallCheck(this, BaseStyle);
	
	    /**
	     * The color to fill or stroke geometry
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this.color = color;
	
	    /**
	     * Which style to style geometry
	     */
	    _this.style = style;
	
	    /**
	     *
	     */
	    _this.alpha = alpha;
	
	    /**
	     * The text displayed with geometry
	     * @type {null}
	     */
	    _this.textStyle = null;
	    return _this;
	  }
	
	  /**
	   * 颜色
	   *
	   * @property color
	   * @type {Array}
	   */
	
	
	  /**
	   * 克隆一个样式对象
	   *
	   * @method clone
	   * @abstract
	   */
	  BaseStyle.prototype.clone = function clone() {};
	
	  _createClass(BaseStyle, [{
	    key: 'color',
	    get: function get() {
	      return this._color;
	    },
	    set: function set(value) {
	      this._color = value;
	    }
	
	    /**
	     * 样式对象
	     *
	     * @property style
	     * @type {mk.Style}
	     */
	
	  }, {
	    key: 'style',
	    get: function get() {
	      return this._style;
	    },
	    set: function set(value) {
	      this._style = value;
	    }
	
	    /**
	     * 透明度
	     *
	     * @property alpha
	     * @default 1
	     * @type {Number}
	     */
	
	  }, {
	    key: 'alpha',
	    get: function get() {
	      return this._alpha;
	    },
	    set: function set(value) {
	      return this._alpha = value;
	    }
	
	    /**
	     * 文本样式对象
	     *
	     * @property textStyle
	     */
	
	  }, {
	    key: 'textStyle',
	    get: function get() {
	      return this._textStyle;
	    },
	    set: function set(value) {
	      this._textStyle = value;
	    }
	  }]);
	
	  return BaseStyle;
	}(_baseobject2.default);
	
	exports.default = BaseStyle;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/6/12.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 *
	 * 定义文本样式
	 *
	 * @class TextStyle
	 * @extends BaseStyle
	 * @module style
	 * @constructor
	 * @example
	 *
	 *     new mk.TextStyle({
	 *       textAlign: 'center',
	 *       textBaseline: 'middle',
	 *       font: 'Arial',
	 *       text: '标注示例',
	 *       fill: [255, 0, 0],
	 *       stroke: new mk.LineStyle([255, 255, 255],1,3,
	 *          mk.LineStyle.LineCap.ROUND,
	 *          mk.LineStyle.LineJion.ROUND),
	 *       offsetX: 0,
	 *       offsetY: 0,
	 *       rotation: 0
	 *     });
	 *
	 */
	var TextStyle = function (_BaseObject) {
	  _inherits(TextStyle, _BaseObject);
	
	  /**
	   *
	   * @constructor
	   * @param optOptions
	   */
	  function TextStyle(optOptions) {
	    _classCallCheck(this, TextStyle);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    var options = optOptions || {};
	
	    /**
	     *
	     */
	    _this.text = options.text || '';
	
	    /**
	     * @private
	     * @type {string|undefined}
	     */
	    _this.font = options.font || TextStyle.DEFAULT_FONT;
	
	    /**
	     * @private
	     * @type {number|undefined}
	     */
	    _this.rotation = options.rotation || 0;
	
	    /**
	     * @private
	     * @type {boolean|undefined}
	     */
	    _this.rotateWithView = options.rotateWithView;
	
	    /**
	     * @private
	     * @type {number|undefined}
	     */
	    _this.scale = options.scale || TextStyle.DEFAULT_SCALE;
	
	    /**
	     * @private
	     * @type {string|undefined}
	     */
	    _this.textAlign = options.textAlign || TextStyle.DEFAULT_TEXT_START;
	
	    /**
	     * @private
	     * @type {string|undefined}
	     */
	    _this.textBaseline = options.textBaseline || TextStyle.DEFAULT_BASE_LINE;
	
	    /**
	     * @private
	     * @type {ol.style.Fill}
	     */
	    _this.fill = options.fill !== undefined ? options.fill : TextStyle.DEFAULT_FILL_COLOR;
	
	    /**
	     * @private
	     * @type {ol.style.Stroke}
	     */
	    _this.stroke = options.stroke !== undefined ? options.stroke : TextStyle.DEFAULT_STROKE;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this.offsetX = options.offsetX !== undefined ? options.offsetX : 0;
	
	    /**
	     * @property offsetY
	     * @type {number}
	     */
	    _this.offsetY = options.offsetY !== undefined ? options.offsetY : 0;
	
	    return _this;
	  }
	
	  /**
	   * 要显示的文本
	   *
	   * @property text
	   * @type {Stirng}
	   */
	
	
	  /**
	   * 克隆字体样式
	   *
	   * @method clone
	   * @returns {TextStyle}
	   */
	  TextStyle.prototype.clone = function clone() {
	    return new TextStyle({
	      font: this.font,
	      rotation: this.rotation,
	      rotateWithView: this.rotateWithView,
	      scale: this.scale,
	      text: this.text,
	      textAlign: this.textAlign,
	      textBaseline: this.textBaseline,
	      fill: this.fill ? this.fill.clone : undefined,
	      stroke: this.stroke ? this.stroke.clone : undefined,
	      offsetX: this.offsetX,
	      offsetY: this.offsetY
	    });
	  };
	
	  _createClass(TextStyle, [{
	    key: 'text',
	    get: function get() {
	      return this._text;
	    },
	    set: function set(value) {
	      this._text = value;
	    }
	
	    /**
	     * 显示的字体
	     *
	     * @property font
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'font',
	    get: function get() {
	      return this._font;
	    },
	    set: function set(value) {
	      this._font = value;
	    }
	
	    /**
	     * 旋转的角度
	     *
	     * @property rotation
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'rotation',
	    get: function get() {
	      return this._rotation;
	    },
	    set: function set(value) {
	      this._rotation = value;
	    }
	
	    /**
	     * 旋转视图
	     *
	     * @property rotateWithView
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'rotateWithView',
	    get: function get() {
	      return this._rotateWithView;
	    },
	    set: function set(value) {
	      this._rotateWithView = value;
	    }
	
	    /**
	     * 缩放比例
	     *
	     * @property scale
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'scale',
	    get: function get() {
	      return this._scale;
	    },
	    set: function set(value) {
	      this._scale = value;
	    }
	
	    /**
	     * 字体
	     *
	     * @property textAlign
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'textAlign',
	    get: function get() {
	      return this._textAlign;
	    },
	    set: function set(value) {
	      this._textAlign = value;
	    }
	
	    /**
	     * 字体线
	     *
	     * @property textBaseline
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'textBaseline',
	    get: function get() {
	      return this._textBaseline;
	    },
	    set: function set(value) {
	      this._textBaseline = value;
	    }
	
	    /**
	     * 字体颜色
	     *
	     * @property fill
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'fill',
	    get: function get() {
	      return this._fill;
	    },
	    set: function set(value) {
	      this._fill = value;
	    }
	
	    /**
	     * 字体线的样式
	     *
	     * property stroke
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'stroke',
	    get: function get() {
	      return this._stroke;
	    },
	    set: function set(value) {
	      this._stroke = value;
	    }
	
	    /**
	     * 字体x轴偏移
	     *
	     * @property offsetX
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'offsetX',
	    get: function get() {
	      return this._offsetX;
	    },
	    set: function set(value) {
	      this._offsetX = value;
	    }
	
	    /**
	     * 字体y轴偏移
	     *
	     * @property offsetY
	     * @type {Stirng}
	     */
	
	  }, {
	    key: 'offsetY',
	    get: function get() {
	      return this._offsetY;
	    },
	    set: function set(value) {
	      this._offsetY = value;
	    }
	  }]);
	
	  return TextStyle;
	}(_baseobject2.default);
	
	/**
	 *
	 * 默认字体边框样式
	 * @type {String} DEFAULT_STROKE
	 * @static
	 * @final
	 *
	 */
	
	
	exports.default = TextStyle;
	TextStyle.DEFAULT_STROKE = {
	  color: [255, 255, 255],
	  width: 2,
	  lineCap: 'round',
	  lineJion: 'round'
	
	  /**
	   *
	   * 默认字体颜色
	   * @type {String} DEFAULT_FILL_COLOR
	   * @static
	   * @final
	   *
	   */
	};TextStyle.DEFAULT_FILL_COLOR = [0, 0, 255];
	
	/**
	 * 默认字体样式
	 * @type {String} DEFAULT_FONT
	 * @static
	 * @final
	 *
	 */
	TextStyle.DEFAULT_FONT = 'normal 12px Arial';
	
	/**
	 * 默认字体显示位置
	 * @type {String} DEFAULT_TEXT_ALIGN
	 * @static
	 * @final
	 *
	 */
	TextStyle.DEFAULT_TEXT_ALIGN = 'center';
	
	/**
	 * 字体显示从左边开始计算
	 */
	TextStyle.DEFAULT_TEXT_START = 'start';
	
	/**
	 * 默认字体显示位置
	 * @type {String} DEFAULT_BASE_LINE
	 * @static
	 * @final
	 *
	 */
	TextStyle.DEFAULT_BASE_LINE = 'bottom';
	
	/**
	 * 默认字体缩放初始值
	 * @type {String} DEFAULT_BASE_LINE
	 * @static
	 * @final
	 *
	 */
	TextStyle.DEFAULT_SCALE = 10;
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _basestyle = __webpack_require__(17);
	
	var _basestyle2 = _interopRequireDefault(_basestyle);
	
	var _textstyle = __webpack_require__(18);
	
	var _textstyle2 = _interopRequireDefault(_textstyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 定义一个线图形的样式
	 *
	 * @class LineStyle
	 * @extends BaseStyle
	 * @module style
	 * @constructor
	 * @example
	 *
	 *     var lineStye = new mk.LineStyle([0, 0, 255],1,3,
	 *        mk.LineStyle.LineCap.ROUND,
	 *        mk.LineStyle.LineJion.ROUND)
	 */
	var LineStyle = function (_BaseStyle) {
	  _inherits(LineStyle, _BaseStyle);
	
	  /**
	   * @constructor
	   * @param color
	   * @param alpha
	   * @param width
	   * @param style
	   * @param lineCap
	   * @param lineJion
	   * @param miterLimit
	   */
	  function LineStyle() {
	    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [255, 255, 255];
	    var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : LineStyle.SOLID;
	    var lineCap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : LineStyle.LineCap.BUTT;
	    var lineJion = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : LineStyle.LineJion.MITER;
	    var miterLimit = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 10;
	
	    _classCallCheck(this, LineStyle);
	
	    var _this = _possibleConstructorReturn(this, _BaseStyle.call(this, color, style, alpha));
	
	    _this.width = width;
	    _this.lineCap = lineCap;
	    _this.lineJion = lineJion;
	    _this.miterLimit = miterLimit;
	    _this.textStyle = new _textstyle2.default();
	    return _this;
	  }
	
	  /**
	   * 线宽
	   *
	   * @property width
	   * @type {Number}
	   */
	
	
	  /**
	   * 克隆线样式
	   *
	   * @method clone
	   * @returns {LineStyle}
	   */
	  LineStyle.prototype.clone = function clone() {
	    var newStyle = new LineStyle(this.color, this.alpha, this.width, this.style, this.lineCap, this.lineJion, this.miterLimit);
	
	    if (this.textStyle) {
	      newStyle.textStyle = this.textStyle;
	    }
	
	    return newStyle;
	  };
	
	  _createClass(LineStyle, [{
	    key: 'width',
	    get: function get() {
	      return this._width;
	    },
	    set: function set(value) {
	      this._width = value;
	    }
	
	    /**
	     * 线的末端样式
	     *
	     * @property lineCap
	     * @type {Number}
	     */
	
	  }, {
	    key: 'lineCap',
	    set: function set(value) {
	      this._lineCap = value;
	    },
	    get: function get() {
	      return this._lineCap;
	    }
	
	    /**
	     * 交叉线时的样式
	     *
	     * @property lineJion
	     * @type {Number}
	     */
	
	  }, {
	    key: 'lineJion',
	    set: function set(value) {
	      this._lineJion = value;
	    },
	    get: function get() {
	      return this._lineJion;
	    }
	
	    /**
	     * 斜角缝限制
	     *
	     * @property miterLimit
	     * @type {Number}
	     */
	
	  }, {
	    key: 'miterLimit',
	    set: function set(value) {
	      this._miterLimit = value;
	    },
	    get: function get() {
	      return this._miterLimit;
	    }
	  }]);
	
	  return LineStyle;
	}(_basestyle2.default);
	
	/**
	 * 定义线的样式
	 * @type {string}
	 */
	
	
	exports.default = LineStyle;
	LineStyle.SOLID = 'solid';
	
	/**
	 * TODO 由郭靖来处理，参考 PointStyle
	 * @type {string}
	 */
	LineStyle.DASH = 'dash';
	
	LineStyle.DOT = 'dot';
	
	LineStyle.DASHDOT = 'dashdot';
	
	LineStyle.DASHDOTDOT = 'dashdotdot';
	
	LineStyle.NULL = 'none';
	
	LineStyle.LineCap = {
	  BUTT: 'butt',
	  ROUND: 'round',
	  SQUARE: 'square'
	
	  // visit http://www.w3school.com.cn/tags/canvas_linejoin.asp for more infomation
	};LineStyle.LineJion = {
	  MITER: 'miter', // 默认，创建尖角
	  BEVEL: 'bevel',
	  ROUND: 'round'
	};
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _basestyle = __webpack_require__(17);
	
	var _basestyle2 = _interopRequireDefault(_basestyle);
	
	var _textstyle = __webpack_require__(18);
	
	var _textstyle2 = _interopRequireDefault(_textstyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 定义一个点图形的样式
	 *
	 * @class PointStyle
	 * @extends BaseStyle
	 * @module style
	 * @constructor
	 * @example
	 *
	 *  // 定义一个点，包括外边框的样式
	 *
	 *  var pointStyle = new mk.PointStyle(10,[255, 255, 255],1,new mk.LineStyle([0, 0, 255],1,1))
	 *
	 */
	var PointStyle = function (_BaseStyle) {
	  _inherits(PointStyle, _BaseStyle);
	
	  /**
	   * 构建一个点样式对象
	   *
	   * @constructor
	   * @param style 点样式，{circle|square|cross|x|triangle}其中的一种
	   * @param size 点的大小，默认15
	   * @param color
	   * @param alpha
	   * @param xoffset
	   * @param yoffset
	   * @param angle
	   */
	  function PointStyle() {
	    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
	    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [255, 0, 0];
	    var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	    var borderStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	    var xoffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	    var yoffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	    var angle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
	    var style = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : PointStyle.CIRCLE;
	
	    _classCallCheck(this, PointStyle);
	
	    var _this = _possibleConstructorReturn(this, _BaseStyle.call(this, color, style, alpha));
	
	    _this._size = size;
	    _this._xoffset = xoffset;
	    _this._yoffset = yoffset;
	    _this._angle = angle;
	    _this._borderStyle = borderStyle;
	    _this.textStyle = new _textstyle2.default();
	    return _this;
	  }
	
	  /**
	   * 克隆点的样式
	   *
	   * @method clone
	   * @returns {PointStyle}
	   */
	
	
	  PointStyle.prototype.clone = function clone() {
	    var newStyle = new PointStyle(this.size, this.color, this.alpha, this.borderStyle.clone(), this.xoffset, this.yoffset, this.angle, this.style);
	
	    if (this.textStyle) {
	      newStyle.textStyle = this.textStyle;
	    }
	
	    return newStyle;
	  };
	
	  /**
	   * 大小
	   *
	   * @property size
	   * @type {Number}
	   */
	
	
	  _createClass(PointStyle, [{
	    key: 'size',
	    get: function get() {
	      return this._size;
	    },
	    set: function set(value) {
	      this._size = value;
	    }
	
	    /**
	     * X 轴偏移量
	     *
	     * @property xoffset
	     * @type {Number}
	     */
	
	  }, {
	    key: 'xoffset',
	    get: function get() {
	      return this._xoffset;
	    },
	    set: function set(value) {
	      this._xoffset = value;
	    }
	
	    /**
	     * Y 轴偏移量
	     *
	     * @property yoffset
	     * @type {Number}
	     */
	
	  }, {
	    key: 'yoffset',
	    get: function get() {
	      return this._yoffset;
	    },
	    set: function set(value) {
	      this._yoffset = value;
	    }
	
	    /**
	     * 样式显示的角度
	     *
	     * @property angle
	     * @type {Number}
	     */
	
	  }, {
	    key: 'angle',
	    get: function get() {
	      return this._angle;
	    },
	    set: function set(value) {
	      this._angle = value;
	    }
	
	    /**
	     * 边框样式
	     *
	     * @property borderStyle
	     * @type {LineStyle}
	     */
	
	  }, {
	    key: 'borderStyle',
	    get: function get() {
	      return this._borderStyle;
	    },
	    set: function set(value) {
	      this._borderStyle = value;
	    }
	  }]);
	
	  return PointStyle;
	}(_basestyle2.default);
	
	/**
	 * 圆形样式
	 *
	 * @static
	 * @final
	 * @property CIRCLE
	 * @type {String}
	 */
	
	
	exports.default = PointStyle;
	PointStyle.CIRCLE = 'circle';
	
	/**
	 * 方形样式
	 *
	 * @static
	 * @final
	 * @property SQUARE
	 * @type {String}
	 */
	PointStyle.SQUARE = 'square';
	
	/**
	 * 十字样式
	 *
	 * @static
	 * @final
	 * @property CROSS
	 * @type {string}
	 */
	PointStyle.CROSS = 'cross';
	
	/**
	 * X样式
	 *
	 * @static
	 * @final
	 * @property X
	 * @type {string}
	 */
	PointStyle.X = 'x';
	
	/**
	 * 三角形样式
	 *
	 * @static
	 * @final
	 * @property TRIANGLE
	 * @type {string}
	 */
	PointStyle.TRIANGLE = 'triangle';
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getListeners = getListeners;
	exports.unlistenByKey = unlistenByKey;
	exports.listen = listen;
	exports.listenOnce = listenOnce;
	
	var _obj = __webpack_require__(4);
	
	var _obj2 = _interopRequireDefault(_obj);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 根据事件标识和监听对象获取该对象上的事件监听函数列表
	 *
	 * @method getListeners
	 * @param target
	 * @param type
	 * @returns {Undefined}
	 */
	function getListeners(target, type) {
	  var listenerMap = target.lm;
	  return listenerMap ? listenerMap[type] : undefined;
	}
	
	/**
	 * 根据事件标示和事件对象，移除全部事件监听
	 *
	 * @param target
	 * @param type
	 */
	var removeListeners = function removeListeners(target, type) {
	  var listeners = getListeners(target, type);
	  if (listeners) {
	    for (var i = 0, ii = listeners.length; i < ii; ++i) {
	      target.removeEventListener(type, listeners[i].boundListener);
	      _obj2.default.clear(listeners[i]);
	    }
	    listeners.length = 0;
	    var listenerMap = target.lm;
	    if (listenerMap) {
	      Reflect.deleteProperty(listenerMap, type);
	      if (Object.keys(listenerMap).length === 0) {
	        // Reflect.deleteProperty(target, lm)
	      }
	    }
	  }
	};
	
	/**
	 * 移除该事件标识下全部事件监听
	 *
	 * @method unlistenByKey
	 * @param key {String} 事件标示
	 */
	function unlistenByKey(key) {
	  if (key && key.target) {
	    key.target.removeEventListener(key.type, key.boundListener);
	    var listeners = getListeners(key.target, key.type);
	    if (listeners) {
	      var i = 'deleteIndex' in key ? key.deleteIndex : listeners.indexOf(key);
	      if (i !== -1) {
	        listeners.splice(i, 1);
	      }
	      if (listeners.length === 0) {
	        removeListeners(key.target, key.type);
	      }
	    }
	
	    _obj2.default.clear(key);
	  }
	}
	
	/**
	 * @param listenerObj
	 * @returns {boundListener}
	 */
	var bindListener = function bindListener(listenerObj) {
	  var boundListener = function boundListener(evt) {
	    var listener = listenerObj.listener;
	    var bindTo = listenerObj.bindTo || listenerObj.target;
	    if (listenerObj.callOnce) {
	      unlistenByKey(listenerObj);
	    }
	    return listener.call(bindTo, evt);
	  };
	
	  listenerObj.boundListener = boundListener;
	  return boundListener;
	};
	
	/**
	 *
	 * @param listeners
	 * @param listener
	 * @param optThis
	 * @param optSetDeleteIndex
	 * @returns {*}
	 */
	var findListener = function findListener(listeners, listener, optThis, optSetDeleteIndex) {
	  var listenerObj = void 0;
	  for (var i = 0, ii = listeners.length; i < ii; ++i) {
	    listenerObj = listeners[i];
	    if (listenerObj.listener === listener && listenerObj.bindTo === optThis) {
	      if (optSetDeleteIndex) {
	        listenerObj.deleteIndex = i;
	      }
	      return listenerObj;
	    }
	  }
	  return undefined;
	};
	
	/**
	 *
	 * @param target
	 * @returns {{}|*}
	 */
	var getListenerMap = function getListenerMap(target) {
	  var listenerMap = target.lm;
	  if (!listenerMap) {
	    listenerMap = target.lm = {};
	  }
	  return listenerMap;
	};
	
	/**
	 * 监听事件
	 *
	 * @method listen
	 * @param target {Object} 监听对象
	 * @param type {String} 事件标识
	 * @param listener {Array} 事件响应函数列表
	 * @param optThis {This} 可选
	 * @param optOnce
	 * @returns {Array}
	 */
	function listen(target, type, listener, optThis, optOnce) {
	  var listenerMap = getListenerMap(target);
	  var listeners = listenerMap[type];
	  if (!listeners) {
	    listeners = listenerMap[type] = [];
	  }
	
	  var listenerObj = findListener(listeners, listener, optThis, false);
	
	  if (listenerObj) {
	    if (!optOnce) {
	      listenerObj.callOnce = false; // Turn one-off listener into a permanent one.
	    }
	  } else {
	    listenerObj = {
	      bindTo: optThis,
	      callOnce: !!optOnce,
	      listener: listener,
	      target: target,
	      type: type
	    };
	
	    target.addEventListener(type, bindListener(listenerObj));
	    listeners.push(listenerObj);
	  }
	
	  return listenerObj;
	}
	
	/**
	 * 对事件只是监听一次
	 *
	 * @method listenOnce
	 * @param target
	 * @param type
	 * @param listener
	 * @param opt_this
	 * @returns {*}
	 */
	function listenOnce(target, type, listener, opt_this) {
	  return listen(target, type, listener, opt_this, true);
	}
	
	/**
	 * 定义关于事件的注册、注销、派发、监听的通用工具模块
	 *
	 * @module core
	 * @class EventManager
	 */
	exports.default = {
	  getListeners: getListeners,
	  listen: listen,
	  listenOnce: listenOnce,
	  unlistenByKey: unlistenByKey
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _extentutil = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 矩形类和数据结构
	 *
	 * @class Extent
	 * @extends Geometry
	 * @module geometry
	 * @constructor
	 * @example
	 *
	 *  var rect = new mk.Extent(10, 10, 500, 500)
	 */
	var Extent = function (_Geometry) {
	  _inherits(Extent, _Geometry);
	
	  /**
	   * 构造函数，构建一个extent对象
	   *
	   * @param xmin {Number}
	   * @param ymin {Number}
	   * @param xmax {Number}
	   * @param ymax {Number}
	   *
	   */
	  function Extent() {
	    var xmin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var ymin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var xmax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var ymax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	    _classCallCheck(this, Extent);
	
	    var _this = _possibleConstructorReturn(this, _Geometry.call(this));
	
	    _this._xmin = xmin;
	    _this._ymin = ymin;
	    _this._xmax = xmax;
	    _this._ymax = ymax;
	
	    _this._rings = [];
	
	    /**
	     * 记录内点更新的次数
	     * @type {number}
	     * @private
	     */
	    _this._flatInteriorPointRevision = -1;
	
	    /**
	     * 缓存当前内点
	     * @type {null}
	     * @private
	     */
	    _this._flatInteriorPoint = null;
	
	    _this.moveable = true;
	    return _this;
	  }
	
	  /**
	   * 获取Geometry的类型
	   *
	   * @property geometryType
	   * @returns {String}
	   */
	
	
	  /**
	   * 判断点是否在矩形内
	   *
	   * @method containsXY
	   * @param x {Number}
	   * @param y {Number}
	   */
	  Extent.prototype.containsXY = function containsXY(x, y) {
	    return _extentutil.ExtentUtil.containsPoint(this, [x, y]);
	  };
	
	  /**
	   * getFlatInteriorPoint
	   * @returns {[*,*]}
	   */
	
	
	  Extent.prototype.getFlatInteriorPoint = function getFlatInteriorPoint() {
	    if (this._flatInteriorPointRevision !== this.revision) {
	      this._flatInteriorPointRevision = this.revision;
	      // this._flatInteriorPoint = [this.centerX, this.centerY]
	      this._flatInteriorPoint = [this.xmin, this.ymin];
	    }
	
	    return this._flatInteriorPoint;
	  };
	
	  /**
	   * 移动矩形通过x，y值
	   *
	   * @method move
	   * @param x {Number}
	   * @param y {Number}
	   */
	
	
	  Extent.prototype.move = function move() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var opts = arguments[2];
	
	    var beyond = void 0;
	    if (opts) {
	      if (opts.beyond) {
	        beyond = opts.beyond;
	      }
	    }
	
	    var minPoint = [this.xmin, this.ymin];
	    var width = this.width;
	    var height = this.height;
	
	    var newMinPoint = new Array(2);
	
	    newMinPoint[0] = minPoint[0] + x;
	    newMinPoint[1] = minPoint[1] + y;
	
	    if (beyond) {
	      if (minPoint[0] < beyond.xmin) {
	        minPoint[0] = beyond.xmin;
	        newMinPoint[0] = minPoint[0];
	      }
	
	      if (minPoint[0] + width + x >= beyond.xmax) {
	        newMinPoint[0] = minPoint[0];
	      }
	
	      if (minPoint[1] < beyond.ymin) {
	        minPoint[1] = beyond.ymin;
	        newMinPoint[1] = minPoint[1];
	      }
	
	      if (minPoint[1] + height + y >= beyond.ymax) {
	        newMinPoint[1] = minPoint[1];
	      }
	    }
	
	    var newCoordiante = [newMinPoint, [newMinPoint[0] + width, newMinPoint[1]], [newMinPoint[0] + width, newMinPoint[1] + height], [newMinPoint[0], newMinPoint[1] + height], newMinPoint];
	
	    this.setCoordinates(newCoordiante);
	  };
	
	  /**
	   * 设置多边形的边，如果设置了边，则需要重新计算
	   * 外接矩形
	   *
	   * @method rings
	   * @returns {Array}
	   */
	
	
	  /**
	   * 获取图形的坐标数据
	   *
	   * @method getCoordinates
	   * @returns {[*,*]}
	   */
	  Extent.prototype.getCoordinates = function getCoordinates() {
	    if (this._rings.length === 0) {
	      // if (this.xmin !== 0 && this.ymin !== 0 && 
	      //     this.xmax !== 0 && this.ymax !== 0) {
	      this._rings = _extentutil.ExtentUtil.minMaxToRing(this.xmin, this.ymin, this.xmax, this.ymax);
	      // }
	    }
	
	    return this._rings;
	  };
	
	  /**
	   * 根据得到的坐标点，计算出表单显示的位置
	   *
	   * @param {Number} offsetX x的偏移量
	   * @param {Number} offsetY y的偏移量
	   * @returns {[*,*]}
	   */
	
	
	  Extent.prototype.getFormShowPosition1 = function getFormShowPosition1() {
	    var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    return [(this.xmin + this.xmax) / 2 - offsetX, this.ymin - offsetY];
	  };
	
	  /**
	   * 根据得到的坐标点，计算出表单显示的位置
	   *
	   * @param {Number} offsetX x的偏移量
	   * @param {Number} offsetY y的偏移量
	   * @returns {[*,*]}
	   */
	
	
	  Extent.prototype.getFormShowPosition = function getFormShowPosition() {
	    var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    return [this.xmin - offsetX, this.ymin - offsetY];
	  };
	
	  /**
	   * 设置坐标数据
	   *
	   * @method setCoordinates
	   * @param coordinates
	   */
	
	
	  Extent.prototype.setCoordinates = function setCoordinates(coordinates) {
	    this.rings = coordinates;
	
	    var extentArr = _extentutil.ExtentUtil.boundingSimpleExtent(coordinates);
	    this.xmin = extentArr[0];
	    this.ymin = extentArr[1];
	    this.xmax = extentArr[2];
	    this.ymax = extentArr[3];
	
	    this.changed();
	  };
	
	  /**
	   * 获取点位于图形坐标点的下标
	   *
	   * @method getCoordinateIndex
	   * @param coord {Array}
	   * @returns {Number}
	   */
	
	
	  Extent.prototype.getCoordinateIndex = function getCoordinateIndex(coord) {
	    return this.getCoordinates().findIndex(function (points) {
	      return points[0] === coord[0] && points[1] === coord[1];
	    });
	  };
	
	  /**
	   * 克隆矩形框
	   *
	   * @method clone
	   * @returns {Extent}
	   */
	
	
	  Extent.prototype.clone = function clone() {
	    return new Extent(this.xmin, this.ymin, this.xmax, this.ymax);
	  };
	
	  _createClass(Extent, [{
	    key: 'geometryType',
	    get: function get() {
	      return _geometry2.default.EXTENT;
	    }
	
	    /**
	     * 计算x轴的中心坐标
	     *
	     * @property centerX
	     * @type {Number}
	     */
	
	  }, {
	    key: 'centerX',
	    get: function get() {
	      return (this.xmax + this.xmin) / 2;
	    }
	
	    /**
	     * 计算Y轴的中心坐标
	     *
	     * @property centerY
	     * @type {Number}
	     */
	
	  }, {
	    key: 'centerY',
	    get: function get() {
	      return (this.ymax + this.ymin) / 2;
	    }
	
	    /**
	     * 计算最小外接矩形的宽
	     *
	     * @property width
	     * @returns {Number}
	     */
	
	  }, {
	    key: 'width',
	    get: function get() {
	      return Math.abs(this.xmax - this.xmin);
	    }
	
	    /**
	     * 计算最小外接矩形的高
	     *
	     * @property height
	     * @returns {Number}
	     */
	
	  }, {
	    key: 'height',
	    get: function get() {
	      return Math.abs(this.ymax - this.ymin);
	    }
	
	    /**
	     * 获取最小外接矩形本对象
	     *
	     * @property extent
	     * @returns {Object} extent
	     */
	
	  }, {
	    key: 'extent',
	    get: function get() {
	      return this;
	    }
	
	    /**
	     * X 轴最小值
	     *
	     * @property xmin
	     * @type {Number}
	     */
	
	  }, {
	    key: 'xmin',
	    get: function get() {
	      return this._xmin;
	    },
	    set: function set(value) {
	      this._xmin = value;
	      this.changed();
	    }
	
	    /**
	     * Y 轴最小值
	     *
	     * @property ymin
	     * @type {Number}
	     */
	
	  }, {
	    key: 'ymin',
	    get: function get() {
	      return this._ymin;
	    },
	    set: function set(value) {
	      this._ymin = value;
	      this.changed();
	    }
	
	    /**
	     * X 轴最大值
	     *
	     * @property xmax
	     * @type {Number}
	     */
	
	  }, {
	    key: 'xmax',
	    get: function get() {
	      return this._xmax;
	    },
	    set: function set(value) {
	      this._xmax = value;
	      this.changed();
	    }
	
	    /**
	     * X 轴最大值
	     *
	     * @property ymax
	     * @type {Number}
	     */
	
	  }, {
	    key: 'ymax',
	    get: function get() {
	      return this._ymax;
	    },
	    set: function set(value) {
	      this._ymax = value;
	      this.changed();
	    }
	  }, {
	    key: 'rings',
	    get: function get() {
	      if (this._rings.length === 0) {
	        if (this.xmin !== 0 && this.ymin !== 0 && this.xmax !== 0 && this.ymax !== 0) {
	          this._rings = _extentutil.ExtentUtil.minMaxToRing(this.xmin, this.ymin, this.xmax, this.ymax);
	        }
	      }
	
	      return this._rings;
	    },
	    set: function set(value) {
	      this._rings = value;
	      var extentArr = _extentutil.ExtentUtil.boundingSimpleExtent(value);
	      this.xmin = extentArr[0];
	      this.ymin = extentArr[1];
	      this.xmax = extentArr[2];
	      this.ymax = extentArr[3];
	    }
	  }]);
	
	  return Extent;
	}(_geometry2.default);
	
	exports.default = Extent;
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _extentutil = __webpack_require__(13);
	
	var _geometryutil = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 定义点类和数据结构
	 *
	 * @class Point
	 * @extends Geometry
	 * @module geometry
	 * @constructor
	 * @example
	 *
	 *    var point = new mk.Point(100, 100)
	 */
	var Point = function (_Geometry) {
	  _inherits(Point, _Geometry);
	
	  /**
	   * 根据x和y构建一个点对象
	   * @param x 默认值为0
	   * @param y 默认值为0
	   * @constructor
	   */
	  function Point(xValue, yValue) {
	    _classCallCheck(this, Point);
	
	    var _this = _possibleConstructorReturn(this, _Geometry.call(this));
	
	    _this.x = xValue;
	    _this.y = yValue;
	
	    _this.moveable = true;
	    return _this;
	  }
	
	  /**
	   * 获取对象的几何类型
	   *
	   * @protected
	   */
	
	
	  /**
	   * 根据x,y的偏移量得到点
	   *
	   * @method offset
	   * @param nx x轴偏移量
	   * @param ny y轴偏移量
	   * @returns {mk.Point} 返回偏移以后的点对象
	   */
	  Point.prototype.offset = function offset(nx, ny) {
	    return new Point(this.x + nx, this.y + ny);
	  };
	
	  /**
	   * containsXY
	   * @param x
	   * @param y
	   * @param opt
	   * @returns {boolean}
	   */
	
	
	  Point.prototype.containsXY = function containsXY(x, y) {
	    var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    var tolerance = opt.tolerance ? opt.tolerance : 2;
	    var pointA = this;
	
	    var distance = (0, _geometryutil.squaredDistance)(pointA.x, pointA.y, x, y);
	    if (Math.sqrt(distance / 2) <= tolerance) {
	      return true;
	    }
	
	    return false;
	  };
	
	  /**
	   * 更新x,y坐标值
	   *
	   * @method update
	   * @param nx x新值
	   * @param ny y新值
	   */
	
	
	  Point.prototype.update = function update(nx, ny) {
	    this.x = nx;
	    this.y = ny;
	
	    this._extent = null;
	  };
	
	  /**
	   *
	   *
	   * getFlatInteriorPoint
	   * @returns {[]}
	   */
	
	
	  Point.prototype.getFlatInteriorPoint = function getFlatInteriorPoint() {
	    return this.getCoordinates();
	  };
	
	  /**
	   * 获取点的坐标
	   *
	   * @method getCoordinates
	   * @returns {Array}
	   */
	
	
	  Point.prototype.getCoordinates = function getCoordinates() {
	    return [this.x, this.y];
	  };
	
	  /**
	   * 点的位置就是坐标点的位置减去偏移量的位置
	   *
	   * @method getFormShowPosition
	   * @param {Number} offsetX x的偏移量
	   * @param {Number} offsetY y的偏移量
	   * @return {[]}
	   */
	
	
	  Point.prototype.getFormShowPosition = function getFormShowPosition() {
	    var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	
	    return [this.x - offsetX, this.y - offsetY];
	  };
	
	  /**
	   * 设置点的坐标
	   *
	   * @method setCoordinates
	   * @param coordinates
	   */
	
	
	  Point.prototype.setCoordinates = function setCoordinates(coordinates) {
	    this.update(coordinates[0], coordinates[1]);
	    this.changed();
	  };
	
	  /**
	   * getCoordinateIndex
	   * @returns {number}
	   */
	
	
	  Point.prototype.getCoordinateIndex = function getCoordinateIndex() {
	    return 0;
	  };
	
	  /**
	   * 判断两个图形对象是否相等
	   *
	   * 判断标准：该图形的所有顶点值是否一致
	   *
	   * @method equal
	   * @param geometry
	   * @return {Boolean}
	   */
	
	
	  Point.prototype.equal = function equal(geom) {
	    var equals = false;
	    if (geom !== null) {
	      equals = this.x === geom.x && this.y === geom.x || Number.isNaN(this.x) && Number.isNaN(this.y) && Number.isNaN(geom.x) && Number.isNaN(geom.y);
	    }
	    return equals;
	  };
	
	  /**
	  * 整体移动多边形，
	  */
	
	
	  Point.prototype.move = function move() {
	    var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (dx == 0 && dy == 0) {
	      return;
	    }
	
	    var beyond = opts.beyond || null;
	    var coordinates = this.getCoordinates();
	
	    // 越界检查
	    var isBeyond = function isBeyond(point) {
	      if (beyond == null) {
	        return false;
	      }
	
	      var x = point[0] + dx;
	      var y = point[1] + dy;
	
	      if (beyond.xmin <= x && beyond.xmax >= x && beyond.ymin <= y && beyond.ymax >= y) {
	        return false;
	      }
	
	      return true;
	    };
	
	    // 检查是否有一个点超出了边界，如果有，则停止move
	    var existBeyondPoint = isBeyond(coordinates);
	    if (existBeyondPoint) {
	      return;
	    }
	
	    var newCoord = new Array(2);
	    newCoord[0] = coordinates[0] + dx;
	    newCoord[1] = coordinates[1] + dy;
	
	    this.setCoordinates(newCoord);
	  };
	
	  /**
	   * 克隆点
	   *
	   * @method clone
	   * @returns {Point}
	   */
	
	
	  Point.prototype.clone = function clone() {
	    return new Point(this.x, this.y);
	  };
	
	  _createClass(Point, [{
	    key: 'geometryType',
	    get: function get() {
	      return _geometry2.default.POINT;
	    }
	
	    /**
	     * 获取点的最小外接矩形
	     *
	     * @note 点是没有最小外接矩形
	     * @returns {null}
	     */
	
	  }, {
	    key: 'extent',
	    get: function get() {
	      if (!this._extent) {
	        var extentObj = _extentutil.ExtentUtil.createScaleExtent(this, 8);
	        this._extent = new _extent2.default(extentObj[0], extentObj[1], extentObj[2], extentObj[3]);
	      }
	
	      return this._extent;
	    }
	
	    /**
	     * 获取 X 坐标值
	     *
	     * @property x
	     * @type x {number}
	     */
	
	  }, {
	    key: 'x',
	    get: function get() {
	      return this._x;
	    },
	    set: function set(value) {
	      this._x = value;
	      this._extent = null;
	    }
	
	    /**
	     * 获取 Y 坐标值
	     *
	     * @property y
	     * @type {number}
	     */
	
	  }, {
	    key: 'y',
	    get: function get() {
	      return this._y;
	    },
	    set: function set(value) {
	      this._y = value;
	      this._extent = null;
	    }
	  }]);
	
	  return Point;
	}(_geometry2.default);
	
	exports.default = Point;
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _geometryutil = __webpack_require__(8);
	
	var _interpolate = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 定义线类和数据结构
	 *
	 * @class Line
	 * @extends Geometry
	 * @module geometry
	 * @constructor
	 * @example
	 *
	 *  var line = new mk.Line()
	 *
	 *  line.setCoordinates([100, 100], [200, 200], [400, 500])
	 */
	var Line = function (_Geometry) {
	  _inherits(Line, _Geometry);
	
	  /**
	   * Create a line geometry
	   * @constructor
	   * @param path
	   */
	  function Line(path) {
	    _classCallCheck(this, Line);
	
	    /**
	     * 记录内点更新的次数
	     * @type {number}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _Geometry.call(this));
	
	    _this._flatInteriorPointRevision = -1;
	
	    /**
	     * 缓存当前内点
	     * @type {null}
	     * @private
	     */
	    _this._flatInteriorPoint = null;
	
	    /**
	     *
	     * @type {Array}
	     * @private
	     */
	    _this._path = [];
	
	    _this.addPath(path);
	    return _this;
	  }
	
	  /**
	   * 添加线段
	   *
	   * @method addPath
	   * @deprecated
	   * @param coordinates {Array}
	   */
	  Line.prototype.addPath = function addPath(coordinates) {
	    this.path.push(coordinates);
	    this._extent = null;
	    this.changed();
	  };
	
	  /**
	   * 多段线的长度
	   *
	   * @property length
	   * @type {Number}
	   */
	
	
	  /**
	   * 遍历每一条边
	   *
	   * @method forEachSegment
	   * @param callback {callback}
	   * @param opt
	   */
	  Line.prototype.forEachSegment = function forEachSegment(callback, opt) {
	    this.path.forEach(callback, opt);
	  };
	
	  /**
	   * @param x
	   * @param y
	   * @param opt
	   * @returns {boolean}
	   */
	
	
	  Line.prototype.containsXY = function containsXY(x, y) {
	    var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    var tolerance = opt.tolerance ? opt.tolerance : 2;
	    var path = this.path;
	    var squaredSegmentDistanceFn = _geometryutil.squaredSegmentDistance;
	
	    var find = false;
	    for (var i = 0, ii = path.length - 1; i < ii; i++) {
	      var nowP = path[i];
	      var nextP = path[i + 1];
	      var _distance = squaredSegmentDistanceFn(x, y, nowP[0], nowP[1], nextP[0], nextP[1]);
	      _distance = Math.sqrt(_distance);
	      if (_distance <= tolerance) {
	        find = true;
	        break;
	      }
	    }
	
	    return find;
	  };
	
	  /**
	   * 计算线的平面内点
	   *
	   * @method getFlatInteriorPoint
	   * @returns {Array}
	   */
	
	
	  Line.prototype.getFlatInteriorPoint = function getFlatInteriorPoint() {
	    if (this._flatInteriorPointRevision !== this.revision) {
	      var interiorPoint = null;
	      var fraction = 0.5;
	      var flatCoordinates = [];
	      var coordinates = this.getCoordinates();
	
	      coordinates.forEach(function (point) {
	        flatCoordinates.push(point[0], point[1]);
	      });
	
	      this._flatInteriorPoint = (0, _interpolate.lineString)(flatCoordinates, 0, flatCoordinates.length, this.stride, fraction, interiorPoint);
	
	      this._flatInteriorPointRevision = this.revision;
	    }
	
	    return this._flatInteriorPoint;
	  };
	
	  Line.prototype.getCoordinates = function getCoordinates() {
	    return this.path;
	  };
	
	  /**
	   * 得到最后一个点的坐标，显示表单
	   *
	   * @param {Number} offsetX x的偏移量
	   * @param {Number} offsetY y的偏移量
	   * @returns {[*,*]}
	   */
	
	
	  Line.prototype.getFormShowPosition = function getFormShowPosition() {
	    var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    var coordinates = this.getCoordinates();
	    if (coordinates.length === 0) {
	      return null;
	    }
	
	    var lastPoint = coordinates[coordinates.length - 1];
	
	    return [lastPoint[0] - offsetX, lastPoint[1] - offsetY];
	  };
	
	  /**
	   * 设置坐标数据
	   *
	   * @method setCoordinates
	   * @param coords {Array}
	   */
	
	
	  Line.prototype.setCoordinates = function setCoordinates(coords) {
	    this.path = coords;
	    this._extent = null;
	    this.changed();
	  };
	
	  /**
	   * 根据坐标点，计算改点的下标
	   *
	   * @method getCoordinateIndex
	   * @param coord
	   * @returns {*|number}
	   */
	
	
	  Line.prototype.getCoordinateIndex = function getCoordinateIndex(coord) {
	    return this.getCoordinates().findIndex(function (points) {
	      return points[0] === coord[0] && points[1] === coord[1];
	    });
	  };
	
	  /**
	   * 克隆线段
	   *
	   * @method clone
	   * @returns {Line} new line
	   */
	
	
	  Line.prototype.clone = function clone() {
	    var newCoordinates = [];
	    this.getCoordinates().forEach(function (coords) {
	      newCoordinates.push([coords[0], coords[1]]);
	    });
	
	    var newLine = new Line();
	    newLine.setCoordinates(newCoordinates);
	
	    return newLine;
	  };
	
	  _createClass(Line, [{
	    key: 'geometryType',
	    get: function get() {
	      return _geometry2.default.LINE;
	    }
	
	    /**
	     * 获取图形的最小外接矩形(MBR-Minimum Bounding Rectangle)
	     *
	     * @returns {Object} 返回对象的最小外接矩形
	     *
	     */
	
	  }, {
	    key: 'extent',
	    get: function get() {
	      var me = this;
	      if (me._extent === null) {
	        var xmin = Number.POSITIVE_INFINITY;
	        var ymin = Number.POSITIVE_INFINITY;
	        var xmax = Number.NEGATIVE_INFINITY;
	        var ymax = Number.NEGATIVE_INFINITY;
	
	        var coors = me.getCoordinates();
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = coors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var p = _step.value;
	
	            xmin = Math.min(xmin, p[0]);
	            ymin = Math.min(ymin, p[1]);
	            xmax = Math.max(xmax, p[0]);
	            ymax = Math.max(ymax, p[1]);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        me._extent = new _extent2.default(xmin, ymin, xmax, ymax);
	      }
	
	      return me._extent;
	    }
	
	    /**
	     * 线段读写器
	     *
	     * @property path
	     * @returns
	     */
	
	  }, {
	    key: 'path',
	    get: function get() {
	      return this._path;
	    },
	    set: function set(value) {
	      this._path = value;
	      this._extent = null;
	    }
	  }, {
	    key: 'length',
	    get: function get() {
	      var coordinates = this.getCoordinates();
	      var len = 0;
	      for (var i = 0, ii = coordinates.length; i < ii - 1; i++) {
	        var fp = coordinates[i];
	        var np = coordinates[i + 1];
	        len += (0, _geometryutil.distance)(fp, np);
	      }
	
	      return len;
	    }
	  }]);
	
	  return Line;
	}(_geometry2.default);
	
	exports.default = Line;
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lineString = lineString;
	exports.linearRings = linearRings;
	exports.linearRingss = linearRingss;
	exports.centerLinearRingss = centerLinearRingss;
	
	var _array = __webpack_require__(26);
	
	var _geometryutil = __webpack_require__(8);
	
	var _math = __webpack_require__(5);
	
	var _extentutil = __webpack_require__(13);
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param end
	 * @param stride
	 * @param fraction
	 * @param opt_dest
	 * @returns {*}
	 */
	function lineString(flatCoordinates, offset, end, stride, fraction, opt_dest) {
	  var pointX = NaN;
	  var pointY = NaN;
	  var n = (end - offset) / stride;
	
	  if (n === 1) {
	    pointX = flatCoordinates[offset];
	    pointY = flatCoordinates[offset + 1];
	  } else if (n == 2) {
	    pointX = (1 - fraction) * flatCoordinates[offset] + fraction * flatCoordinates[offset + stride];
	    pointY = (1 - fraction) * flatCoordinates[offset + 1] + fraction * flatCoordinates[offset + stride + 1];
	  } else if (n !== 0) {
	    var x1 = flatCoordinates[offset];
	    var y1 = flatCoordinates[offset + 1];
	    var length = 0;
	    var cumulativeLengths = [0];
	    var i = void 0;
	    for (i = offset + stride; i < end; i += stride) {
	      var x2 = flatCoordinates[i];
	      var y2 = flatCoordinates[i + 1];
	      length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
	      cumulativeLengths.push(length);
	      x1 = x2;
	      y1 = y2;
	    }
	
	    var target = fraction * length;
	    var index = (0, _array.binarySearch)(cumulativeLengths, target);
	
	    if (index < 0) {
	      var t = (target - cumulativeLengths[-index - 2]) / (cumulativeLengths[-index - 1] - cumulativeLengths[-index - 2]);
	      var o = offset + (-index - 2) * stride;
	      pointX = (0, _math.lerp)(flatCoordinates[o], flatCoordinates[o + stride], t);
	      pointY = (0, _math.lerp)(flatCoordinates[o + 1], flatCoordinates[o + stride + 1], t);
	    } else {
	      pointX = flatCoordinates[offset + index * stride];
	      pointY = flatCoordinates[offset + index * stride + 1];
	    }
	  }
	
	  if (opt_dest) {
	    opt_dest[0] = pointX;
	    opt_dest[1] = pointY;
	    return opt_dest;
	  } else {
	    return [pointX, pointY];
	  }
	}
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param ends
	 * @param stride
	 * @param flatCenters
	 * @param flatCentersOffset
	 * @param opt_dest
	 * @returns {*}
	 */
	function linearRings(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, opt_dest) {
	  var i = void 0,
	      ii = void 0,
	      x = void 0,
	      x1 = void 0,
	      x2 = void 0,
	      y1 = void 0,
	      y2 = void 0;
	  var y = flatCenters[flatCentersOffset + 1];
	  var intersections = [];
	  // Calculate intersections with the horizontal line
	  var end = ends[0];
	  x1 = flatCoordinates[end - stride];
	  y1 = flatCoordinates[end - stride + 1];
	
	  for (i = offset; i < end; i += stride) {
	    x2 = flatCoordinates[i];
	    y2 = flatCoordinates[i + 1];
	    if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
	      x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
	      intersections.push(x);
	    }
	    x1 = x2;
	    y1 = y2;
	  }
	
	  // Find the longest segment of the horizontal line that has its center point
	  // inside the linear ring.
	  var pointX = NaN;
	  var maxSegmentLength = -Infinity;
	  intersections.sort(_array.numberSafeCompareFunction);
	  x1 = intersections[0];
	  for (i = 1, ii = intersections.length; i < ii; ++i) {
	    x2 = intersections[i];
	    var segmentLength = Math.abs(x2 - x1);
	    if (segmentLength > maxSegmentLength) {
	      x = (x1 + x2) / 2;
	      if ((0, _geometryutil.linearRingsContainsXY)(flatCoordinates, offset, ends, stride, x, y)) {
	        pointX = x;
	        maxSegmentLength = segmentLength;
	      }
	    }
	    x1 = x2;
	  }
	
	  if (isNaN(pointX)) {
	    // There is no horizontal line that has its center point inside the linear
	    // ring.  Use the center of the the linear ring's extent.
	    pointX = flatCenters[flatCentersOffset];
	  }
	
	  if (opt_dest) {
	    opt_dest.push(pointX, y);
	    return opt_dest;
	  } else {
	    return [pointX, y];
	  }
	}
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param endss
	 * @param stride
	 * @param flatCenters
	 * @returns {Array}
	 */
	function linearRingss(flatCoordinates, offset, endss, stride, flatCenters) {
	  var interiorPoints = [];
	  var i = void 0,
	      ii = void 0;
	  for (i = 0, ii = endss.length; i < ii; ++i) {
	    var ends = endss[i];
	    interiorPoints = linearRings(flatCoordinates, offset, ends, stride, flatCenters, 2 * i, interiorPoints);
	    offset = ends[ends.length - 1];
	  }
	
	  return interiorPoints;
	}
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param endss
	 * @param stride
	 * @returns {Array}
	 */
	function centerLinearRingss(flatCoordinates, offset, endss, stride) {
	  var flatCenters = [];
	  var i = void 0,
	      ii = void 0;
	  var extent = _extentutil.ExtentUtil.createEmpty();
	  for (i = 0, ii = endss.length; i < ii; ++i) {
	    var ends = endss[i];
	    extent = _extentutil.ExtentUtil.createOrUpdateFromFlatCoordinates(flatCoordinates, offset, ends[0], stride);
	    flatCenters.push((extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2);
	    offset = ends[ends.length - 1];
	  }
	  return flatCenters;
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linearFindNearest = linearFindNearest;
	exports.stableSort = stableSort;
	exports.binarySearch = binarySearch;
	exports.equals = equals;
	exports.numberSafeCompareFunction = numberSafeCompareFunction;
	/**
	 *
	 * @param arr
	 * @param target
	 * @param direction
	 * @returns {number}
	 */
	function linearFindNearest(arr, target, direction) {
	  var n = arr.length;
	  if (arr[0] <= target) {
	    return 0;
	  } else if (target <= arr[n - 1]) {
	    return n - 1;
	  } else {
	    var i = void 0;
	    if (direction > 0) {
	      for (i = 1; i < n; ++i) {
	        if (arr[i] < target) {
	          return i - 1;
	        }
	      }
	    } else if (direction < 0) {
	      for (i = 1; i < n; ++i) {
	        if (arr[i] <= target) {
	          return i;
	        }
	      }
	    } else {
	      for (i = 1; i < n; ++i) {
	        if (arr[i] == target) {
	          return i;
	        } else if (arr[i] < target) {
	          if (arr[i - 1] - target < target - arr[i]) {
	            return i - 1;
	          } else {
	            return i;
	          }
	        }
	      }
	    }
	    return n - 1;
	  }
	}
	
	/**
	 *
	 * @param arr
	 * @param compareFnc
	 */
	function stableSort(arr, compareFnc) {
	  var length = arr.length;
	  var tmp = Array(arr.length);
	  var i = void 0;
	
	  for (i = 0; i < length; i++) {
	    tmp[i] = { index: i, value: arr[i] };
	  }
	
	  tmp.sort(function (a, b) {
	    return compareFnc(a.value, b.value) || a.index - b.index;
	  });
	
	  for (i = 0; i < arr.length; i++) {
	    arr[i] = tmp[i].value;
	  }
	}
	
	/**
	 *
	 * @param haystack
	 * @param needle
	 * @param opt_comparator
	 * @returns {number}
	 */
	function binarySearch(haystack, needle, opt_comparator) {
	  var mid = void 0,
	      cmp = void 0;
	  var comparator = opt_comparator || numberSafeCompareFunction;
	  var low = 0;
	  var high = haystack.length;
	  var found = false;
	
	  while (low < high) {
	    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
	     * to double (which gives the wrong results). */
	    mid = low + (high - low >> 1);
	    cmp = +comparator(haystack[mid], needle);
	
	    if (cmp < 0.0) {
	      /* Too low. */
	      low = mid + 1;
	    } else {
	      /* Key found or too high */
	      high = mid;
	      found = !cmp;
	    }
	  }
	
	  /* Key not found. */
	  return found ? low : ~low;
	}
	
	/**
	 * Determine if two arrays get equal to each other
	 * @param arr1
	 * @param arr2
	 * @returns {boolean}
	 */
	function equals(arr1, arr2) {
	  var len1 = arr1.length;
	  if (len1 !== arr2.length) {
	    return false;
	  }
	
	  for (var i = 0; i < len1; i++) {
	    if (arr1[i] !== arr2[i]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	/**
	 *
	 * @param a
	 * @param b
	 * @returns {number}
	 */
	function numberSafeCompareFunction(a, b) {
	  return a > b ? 1 : a < b ? -1 : 0;
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _interpolate = __webpack_require__(25);
	
	var _orient = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 面类和数据结构
	 *
	 * 多边形是<b>闭合数据结构</b>，所有首尾点必须相同。
	 *
	 * 多边形顶点存储是一个二维数组，数组中第一条闭合点串表示多边形
	 * 的最外层，第二条及其以后表示多边形的内部洞环。
	 *
	 * @class Polygon
	 * @extends Geometry
	 * @module geometry
	 * @constructor
	 * @example
	 *
	 *  var polygon = new mk.Polygon([[100, 100], [120, 130],[50, 50],[100, 100]])
	 *
	 */
	var Polygon = function (_Geometry) {
	  _inherits(Polygon, _Geometry);
	
	  /**
	   * 创建一个Polygon实例
	   * @constructor
	   * @param rings
	   */
	  function Polygon() {
	    var rings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    _classCallCheck(this, Polygon);
	
	    var _this = _possibleConstructorReturn(this, _Geometry.call(this));
	
	    _this._rings = [];
	
	    /**
	     * 记录当前多边形内点更新的次数
	     * @type {number}
	     * @private
	     */
	    _this._flatInteriorPointRevision = -1;
	
	    /**
	     * 缓存当前多边形内点
	     * @type {null}
	     * @private
	     */
	    _this._flatInteriorPoint = null;
	
	    /**
	     * 更新多边形的坐标
	     */
	    _this.setCoordinates(rings);
	    return _this;
	  }
	
	  /**
	   * 获取图形的最小外接矩形(MBR-Minimum Bounding Rectangle)
	   * 可用来对图形进行拖动、旋转、缩放
	   *
	   * @method extent
	   * @abstrct function
	   * @returns {Extent}
	   */
	
	
	  /**
	   * 多边形添加线段
	   *
	   * @method addRing
	   * @param ring {Array}
	   *
	   */
	  Polygon.prototype.addRing = function addRing(ring) {
	    this.rings.push(ring);
	    this._extent = null;
	  };
	
	  /**
	   * 判断点是否在多边形上
	   *
	   * @method containsXY
	   * @param x {Number}
	   * @param y {Number}
	   * @returns {Boolean}
	   */
	
	
	  Polygon.prototype.containsXY = function containsXY(x, y) {
	    var _this2 = this;
	
	    var coords = this.getCoordinates();
	    var outRing = coords[0];
	
	    var contains = false;
	    if (this._inOneRing(x, y, outRing)) {
	      contains = true;
	    }
	
	    if (coords.length > 1 && contains) {
	      var coordsTemp = coords.slice(1);
	
	      var inHole = coordsTemp.some(function (ring) {
	        return _this2._inOneRing(x, y, ring);
	      });
	
	      if (inHole) {
	        contains = false;
	      }
	    }
	
	    return contains;
	  };
	
	  /**
	   * 判断 x 和 y 的值是否在环内
	   *
	   * @param x {Number}
	   * @param y {Number}
	   * @param ring {Array}
	   * @returns {Boolean}
	   * @private
	   */
	
	
	  Polygon.prototype._inOneRing = function _inOneRing(x, y, ring) {
	    var px = x;
	    var py = y;
	    var flag = false;
	
	    for (var i = 0, l = ring.length, j = l - 1; i < l; j = i, i++) {
	      var sx = ring[i][0];
	      var sy = ring[i][1];
	      var tx = ring[j][0];
	      var ty = ring[j][1];
	
	      // 点与多边形顶点重合
	      if (sx === px && sy === py || tx === px && ty === py) {
	        return true;
	      }
	
	      // 判断线段两端点是否在射线两侧
	      if (sy < py && ty >= py || sy >= py && ty < py) {
	        // 线段上与射线 Y 坐标相同的点的 X 坐标
	        var _x2 = sx + (py - sy) * (tx - sx) / (ty - sy);
	
	        // 点在多边形的边上
	        if (_x2 === px) {
	          return true;
	        }
	
	        // 射线穿过多边形的边界
	        if (_x2 > px) {
	          flag = !flag;
	        }
	      }
	    }
	
	    // 射线穿过多边形边界的次数为奇数时点在多边形内
	    return flag;
	  };
	
	  /**
	   * 计算多边形的内点
	   *
	   * @method getFlatInteriorPoint
	   * @returns {Array} 返回内点，格式 [x, y]
	   */
	
	
	  Polygon.prototype.getFlatInteriorPoint = function getFlatInteriorPoint() {
	    // 缓存限制
	    if (this._flatInteriorPointRevision !== this.revision) {
	      var flatCenter = [this.extent.centerX, this.extent.centerY];
	      var coorLen = this.getCoordinates()[0].length;
	      var ends = [coorLen * 2];
	
	      var orientedFlatCoordinates = this.getOrientedFlatCoordinates();
	      this._flatInteriorPoint = (0, _interpolate.linearRings)(orientedFlatCoordinates, 0, ends, this.stride, flatCenter, 0);
	
	      this._flatInteriorPointRevision = this.revision;
	    }
	
	    return this._flatInteriorPoint;
	  };
	
	  /**
	   * 对多边形的边进行顺序化
	   * getOrientedFlatCoordinates
	   * @returns {*}
	   */
	
	
	  Polygon.prototype.getOrientedFlatCoordinates = function getOrientedFlatCoordinates() {
	    var orientedFlatCoordinates = void 0;
	
	    var flatCoordinates = [];
	    var coordinates = this.getCoordinates()[0];
	
	    coordinates.forEach(function (point) {
	      flatCoordinates.push(point[0], point[1]);
	    });
	
	    var ends = [flatCoordinates.length];
	
	    if ((0, _orient.linearRingsAreOriented)(flatCoordinates, 0, ends, this.stride)) {
	      orientedFlatCoordinates = flatCoordinates;
	    } else {
	      orientedFlatCoordinates = flatCoordinates.slice();
	      orientedFlatCoordinates.length = (0, _orient.orientLinearRings)(orientedFlatCoordinates, 0, ends, this.stride);
	    }
	
	    return orientedFlatCoordinates;
	  };
	
	  /**
	   * 判断当前多边形是否有洞
	   *
	   * @method hasHoles
	   * @returns {boolean}
	   */
	
	
	  Polygon.prototype.hasHoles = function hasHoles() {
	    return this.getCoordinates().length > 1;
	  };
	
	  /**
	   * 获取多边形坐标
	   *
	   * @method getCoordinates
	   * @returns {[*,*]}
	   */
	
	
	  Polygon.prototype.getCoordinates = function getCoordinates() {
	    return this.rings;
	  };
	
	  /**
	   * 得到最后一个点的坐标，显示表单
	   *
	   * @param {Number} offsetX x的偏移量
	   * @param {Number} offsetY y的偏移量
	   * @returns {[*,*]}
	   */
	
	
	  Polygon.prototype.getFormShowPosition = function getFormShowPosition() {
	    var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    var coordinates = this.getCoordinates()[0];
	    if (coordinates.length === 0) {
	      return;
	    }
	
	    var lastPoint = coordinates[coordinates.length - 2];
	    return [lastPoint[0] - offsetX, lastPoint[1] - offsetY];
	  };
	
	  /**
	   * 设置多边形的坐标
	   *
	   * @method setCoordinates
	   * @param coords
	   */
	
	
	  Polygon.prototype.setCoordinates = function setCoordinates(coords) {
	    this.rings = coords;
	    this._extent = null;
	    this.stride = 2;
	    this.changed();
	  };
	
	  /**
	   * getCoordinateIndex
	   * @param coord
	   * @returns {*|number}
	   */
	
	
	  Polygon.prototype.getCoordinateIndex = function getCoordinateIndex(coord) {
	    var coords = this.getCoordinates();
	    for (var i = 0, len = coords.length; i < len; i++) {
	      var rings = coords[i];
	      for (var j = 0, jLen = rings.length; j < jLen; j++) {
	        var point = rings[j];
	        if (point[0] === coord[0] && point[1] === coord[1]) {
	          return {
	            ringIndex: i,
	            index: j
	          };
	        }
	      }
	    }
	
	    return {
	      ringIndex: -1,
	      index: -1
	    };
	  };
	
	  /**
	   * 整体移动多边形，
	   */
	
	
	  Polygon.prototype.move = function move() {
	    var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (dx == 0 && dy == 0) {
	      return;
	    }
	
	    var beyond = opts.beyond || null;
	    var coordinates = this.getCoordinates();
	
	    // @TODO 需要增加对内环的处理
	    var outRings = coordinates[0];
	    outRings = [].concat(_toConsumableArray(outRings));
	
	    // 越界检查
	    var idBeyond = function idBeyond(point) {
	      if (beyond == null) {
	        return false;
	      }
	
	      var x = point[0] + dx;
	      var y = point[1] + dy;
	
	      if (beyond.xmin <= x && beyond.xmax >= x && beyond.ymin <= y && beyond.ymax >= y) {
	        return false;
	      }
	
	      return true;
	    };
	
	    // 检查是否有一个点超出了边界，如果有，则停止move
	    var existBeyondPoint = outRings.find(function (coor) {
	      return idBeyond(coor);
	    });
	    if (existBeyondPoint) {
	      return;
	    }
	
	    for (var i = 0, len = outRings.length; i < len; i++) {
	      var coor = outRings[i];
	      coor[0] = coor[0] + dx;
	      coor[1] = coor[1] + dy;
	    }
	
	    this.setCoordinates([outRings]);
	  };
	
	  /**
	   * 克隆多边形
	   *
	   * @method clone
	   * @returns {Polygon}
	   */
	
	
	  Polygon.prototype.clone = function clone() {
	    var coords = this.getCoordinates();
	
	    var newCoordinates = [];
	    var outRings = [];
	    coords.forEach(function (ring) {
	      ring.forEach(function (points) {
	        outRings.push([points[0], points[1]]);
	      });
	
	      newCoordinates.push(outRings);
	      outRings = [];
	    });
	
	    var newPolygon = new Polygon();
	    newPolygon.setCoordinates(newCoordinates);
	
	    return newPolygon;
	  };
	
	  _createClass(Polygon, [{
	    key: 'extent',
	    get: function get() {
	      if (this._extent === null) {
	        var coords = this.getCoordinates();
	
	        // 计算最小外界矩形，只考虑外围环
	        if (coords.length > 0) {
	          var rings = coords[0];
	
	          var xmin = Number.POSITIVE_INFINITY;
	          var ymin = Number.POSITIVE_INFINITY;
	          var xmax = Number.NEGATIVE_INFINITY;
	          var ymax = Number.NEGATIVE_INFINITY;
	
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = rings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var ring = _step.value;
	
	              xmin = Math.min(xmin, ring[0]);
	              ymin = Math.min(ymin, ring[1]);
	              xmax = Math.max(xmax, ring[0]);
	              ymax = Math.max(ymax, ring[1]);
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	
	          this._extent = new _extent2.default(xmin, ymin, xmax, ymax);
	        }
	      }
	
	      return this._extent;
	    }
	
	    /**
	     * 获取对象的几何类型
	     *
	     * @method geometryType
	     * @abstrct function
	     * @returns {String}
	     */
	
	  }, {
	    key: 'geometryType',
	    get: function get() {
	      return _geometry2.default.POLYGON;
	    }
	
	    /**
	     * 设置多边形的边，如果设置了边，则需要重新计算
	     * 外接矩形
	     *
	     * @property rings
	     */
	
	  }, {
	    key: 'rings',
	    get: function get() {
	      return this._rings;
	    },
	    set: function set(value) {
	      this._rings = value;
	      this._extent = null;
	    }
	  }]);
	
	  return Polygon;
	}(_geometry2.default);
	
	exports.default = Polygon;
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.orientLinearRingss = orientLinearRingss;
	exports.orientLinearRings = orientLinearRings;
	exports.linearRingssAreOriented = linearRingssAreOriented;
	exports.linearRingsAreOriented = linearRingsAreOriented;
	exports.linearRingIsClockwise = linearRingIsClockwise;
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param endss
	 * @param stride
	 * @param opt_right
	 * @returns {*}
	 */
	function orientLinearRingss(flatCoordinates, offset, endss, stride, opt_right) {
	  var i = void 0,
	      ii = void 0;
	  for (i = 0, ii = endss.length; i < ii; ++i) {
	    offset = orientLinearRings(flatCoordinates, offset, endss[i], stride, opt_right);
	  }
	
	  return offset;
	}
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param ends
	 * @param stride
	 * @param opt_right
	 * @returns {*}
	 */
	function orientLinearRings(flatCoordinates, offset, ends, stride, opt_right) {
	  var right = opt_right !== undefined ? opt_right : false;
	  var i = void 0,
	      ii = void 0;
	
	  for (i = 0, ii = ends.length; i < ii; ++i) {
	    var end = ends[i];
	    var isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
	
	    var reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;
	
	    if (reverse) {
	      reverseCoordinates(flatCoordinates, offset, end, stride);
	      // 反转
	      // flatCoordinates = flatCoordinates.reverse()
	    }
	    offset = end;
	  }
	
	  return offset;
	}
	
	function reverseCoordinates(flatCoordinates, offset, end, stride) {
	  while (offset < end - stride) {
	    for (var i = 0; i < stride; ++i) {
	      var tmp = flatCoordinates[offset + i];
	      flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
	      flatCoordinates[end - stride + i] = tmp;
	    }
	    offset += stride;
	    end -= stride;
	  }
	}
	
	/**
	 *
	 * @param flatCoordinates
	 * @param offset
	 * @param endss
	 * @param stride
	 * @param opt_right
	 * @returns {boolean}
	 */
	function linearRingssAreOriented(flatCoordinates, offset, endss, stride, opt_right) {
	  var i = void 0,
	      ii = void 0;
	  for (i = 0, ii = endss.length; i < ii; ++i) {
	    if (!linearRingsAreOriented(flatCoordinates, offset, endss[i], stride, opt_right)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * 判断线串的方向
	 * @param flatCoordinates
	 * @param offset
	 * @param ends
	 * @param stride
	 * @param opt_right
	 * @returns {boolean}
	 */
	function linearRingsAreOriented(flatCoordinates, offset, ends, stride, opt_right) {
	  var right = opt_right !== undefined ? opt_right : false;
	  var i = void 0,
	      ii = void 0;
	
	  for (i = 0, ii = ends.length; i < ii; ++i) {
	    var end = ends[i];
	    // 判断坐标串是否是顺时针
	    var isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
	
	    if (i === 0) {
	      if (right && isClockwise || !right && !isClockwise) {
	        return false;
	      }
	    } else {
	      if (right && !isClockwise || !right && isClockwise) {
	        return false;
	      }
	    }
	
	    offset = end;
	  }
	
	  return true;
	}
	
	/**
	 * 判断坐标串是否是顺时针方向
	 * @param flatCoordinates
	 * @param offset
	 * @param end
	 * @param stride
	 * @returns {boolean}
	 */
	function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
	  // http://tinyurl.com/clockwise-method
	  // https://github.com/OSGeo/gdal/blob/trunk/gdal/ogr/ogrlinearring.cpp
	  var edge = 0;
	  var x1 = flatCoordinates[end - stride];
	  var y1 = flatCoordinates[end - stride + 1];
	
	  for (; offset < end; offset += stride) {
	    var x2 = flatCoordinates[offset];
	    var y2 = flatCoordinates[offset + 1];
	    edge += (x2 - x1) * (y2 + y1);
	    x1 = x2;
	    y1 = y2;
	  }
	
	  return edge > 0;
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _interpolate = __webpack_require__(25);
	
	var _orient = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 定义复合多边形对象和数据结构
	 *
	 *
	 * @class MutilPolygon
	 * @module geometry
	 * @constructor
	 *
	 */
	var MutilPolygon = function (_Geometry) {
	  _inherits(MutilPolygon, _Geometry);
	
	  function MutilPolygon(coordinates) {
	    _classCallCheck(this, MutilPolygon);
	
	    var _this = _possibleConstructorReturn(this, _Geometry.call(this));
	
	    _this._polygons = [];
	
	    _this.stride = 2;
	
	    /**
	     * 记录当前多边形内点更新的次数
	     * @type {number}
	     * @private
	     */
	    _this._flatInteriorPointRevision = -1;
	
	    /**
	     * 缓存当前多边形内点
	     * @type {null}
	     * @private
	     */
	    _this._flatInteriorPoint = null;
	
	    _this.setCoordinates(coordinates);
	    return _this;
	  }
	
	  /**
	   *
	   * @returns {String}
	   */
	
	
	  /**
	   * 获得复合多边形的坐标
	   * @returns {Array|*}
	   */
	  MutilPolygon.prototype.getCoordinates = function getCoordinates() {
	    return this._polygons;
	  };
	
	  /**
	   * 设置复合多边形的坐标
	   * @param coordinates
	   */
	
	
	  MutilPolygon.prototype.setCoordinates = function setCoordinates(coordinates) {
	    this._polygons = coordinates;
	    this._extent = null;
	    this.changed();
	  };
	
	  /**
	   * 获得一个多边形对象
	   * @method getPolygon
	   * @param index 多边形的下标
	   * @returns {mk.Polygon} 返回一个新的多边形对象
	   */
	
	
	  MutilPolygon.prototype.getPolygon = function getPolygon(index) {
	    if (index < 0 && this._polygons.length < index) {
	      return null;
	    }
	
	    var coords = this._polygons[index];
	    var outRing = [];
	    var innerRing = [];
	    coords.forEach(function (rings) {
	      rings.forEach(function (points) {
	        innerRing.push([points[0], points[1]]);
	      });
	
	      outRing.push(innerRing);
	      innerRing = [];
	    });
	
	    var polygon = new _polygon2.default(outRing);
	    return polygon;
	  };
	
	  MutilPolygon.prototype.getFormShowPosition = function getFormShowPosition() {
	    var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    var polygon = this.getPolygon(0);
	    var coordinates = polygon.getCoordinates()[0];
	    if (coordinates.length === 0) {
	      return;
	    }
	
	    var lastPoint = coordinates[coordinates.length - 2];
	    return [lastPoint[0] - offsetX, lastPoint[1] - offsetY];
	  };
	
	  /**
	   * 判断集合多边形是否包括指定 x 和 y
	   * @param x
	   * @param y
	   * @returns {boolean}
	   */
	
	
	  MutilPolygon.prototype.containsXY = function containsXY(x, y) {
	    var polygons = this._polygons;
	    for (var i = 0, len = polygons.length; i < len; i++) {
	      var onePolygon = this.getPolygon(i);
	      if (onePolygon.containsXY(x, y)) {
	        return true;
	      }
	    }
	
	    return false;
	  };
	
	  /**
	   * 获取标签显示的内点
	   * 注意：复合多边形，标签显示的位置，只显示在第一个图形上
	   * @returns {*}
	   */
	
	
	  MutilPolygon.prototype.getFlatInteriorPoint = function getFlatInteriorPoint() {
	    if (this._flatInteriorPointRevision !== this.revision) {
	      this._flatInteriorPointRevision = this.revision;
	
	      var polygons = this._polygons;
	      var flatCoordinates = [];
	      var endss = [];
	
	      var orderArray = [];
	
	      polygons.forEach(function (polygon) {
	        var outRings = polygon[0];
	        orderArray.push(outRings);
	      });
	
	      orderArray.sort(function (arr1, arr2) {
	        return arr1.length - arr2.length;
	      });
	
	      var lastLen = 0;
	      orderArray.forEach(function (arr) {
	        var currLen = arr.length * 2 + lastLen;
	        endss.push([currLen]);
	        lastLen = currLen;
	
	        arr.forEach(function (points) {
	          flatCoordinates.push(points[0], points[1]);
	        });
	      });
	
	      var flatCenters = (0, _interpolate.centerLinearRingss)(flatCoordinates, 0, endss, this.stride);
	      this._flatInteriorPoint = (0, _interpolate.linearRingss)(this.getOrientedFlatCoordinates(flatCoordinates, endss), 0, endss, this.stride, flatCenters);
	    }
	
	    return this._flatInteriorPoint;
	  };
	
	  /**
	   * 计算复合多边形顺时针坐标
	   * @param flatCoordinates
	   * @param endss
	   * @returns {*}
	   */
	
	
	  MutilPolygon.prototype.getOrientedFlatCoordinates = function getOrientedFlatCoordinates(flatCoordinates, endss) {
	    var orientedFlatCoordinates = void 0;
	
	    if ((0, _orient.linearRingssAreOriented)(flatCoordinates, 0, endss, this.stride)) {
	      orientedFlatCoordinates = flatCoordinates;
	    } else {
	      orientedFlatCoordinates = [].concat(_toConsumableArray(flatCoordinates));
	      orientedFlatCoordinates.length = (0, _orient.orientLinearRingss)(orientedFlatCoordinates, 0, endss, this.stride);
	    }
	
	    return orientedFlatCoordinates;
	  };
	
	  /**
	   * 根据坐标值计算复合多边形的点下标
	   *
	   * @method getCoordinateIndex
	   * @param coord 坐标值，[x, y]结构
	   * @returns {
	   *    {
	   *      polygonIndex: number 位于第几个多边形上 ,
	   *      ringIndex: number 位于多边形第几个环上,
	   *      index: number 位于环上第几个顶点上
	   *     }
	   *   }
	   */
	
	
	  MutilPolygon.prototype.getCoordinateIndex = function getCoordinateIndex(coord) {
	    var polygonCoods = this.getCoordinates();
	
	    for (var ii = 0, iiLen = polygonCoods.length; ii < iiLen; ii++) {
	      var coords = polygonCoods[ii];
	
	      for (var i = 0, len = coords.length; i < len; i++) {
	        var rings = coords[i];
	        for (var j = 0, jLen = rings.length; j < jLen; j++) {
	          var point = rings[j];
	          if (point[0] === coord[0] && point[1] === coord[1]) {
	            return {
	              polygonIndex: ii,
	              ringIndex: i,
	              index: j
	            };
	          }
	        }
	      }
	    }
	
	    return {
	      polygonIndex: -1,
	      ringIndex: -1,
	      index: -1
	    };
	  };
	
	  /**
	   * 克隆一个 Mutilpolygon
	   * @returns {MutilPolygon}
	   */
	
	
	  MutilPolygon.prototype.clone = function clone() {
	    var allCoords = [];
	
	    this._polygons.forEach(function (coords) {
	      var outRing = [];
	      var innerRing = [];
	      coords.forEach(function (rings) {
	        rings.forEach(function (points) {
	          innerRing.push([points[0], points[1]]);
	        });
	
	        outRing.push(innerRing);
	      });
	
	      allCoords.push(outRing);
	      outRing = [];
	    });
	
	    var newMutilPolygon = new MutilPolygon(allCoords);
	    return newMutilPolygon;
	  };
	
	  /**
	   * 将一个复合多边形，转换成多边形集合
	   */
	
	
	  MutilPolygon.prototype.convertToPolygons = function convertToPolygons() {
	    var _this2 = this;
	
	    var polygons = [];
	    this._polygons.forEach(function (p, index) {
	      polygons.push(_this2.getPolygon(index));
	    });
	
	    return polygons;
	  };
	
	  _createClass(MutilPolygon, [{
	    key: 'geometryType',
	    get: function get() {
	      return _geometry2.default.MULTI_POLYGON;
	    }
	
	    /**
	     * 计算复合多边形的最小外界矩形
	     * 注意：这里所求出来的是多个多边形的最小外界矩形，既一个能包裹所有
	     * 多边形的矩形
	     *
	     * @returns {Extent|null}
	     */
	
	  }, {
	    key: 'extent',
	    get: function get() {
	      if (this._extent === null) {
	        var allPolygonCoords = this.getCoordinates();
	
	        // 计算最小外界矩形，只考虑外围环
	        if (allPolygonCoords.length > 0) {
	          var xmin = Number.POSITIVE_INFINITY;
	          var ymin = Number.POSITIVE_INFINITY;
	          var xmax = Number.NEGATIVE_INFINITY;
	          var ymax = Number.NEGATIVE_INFINITY;
	
	          allPolygonCoords.forEach(function (polyCoods) {
	            var rings = polyCoods[0];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	              for (var _iterator = rings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var ring = _step.value;
	
	                xmin = Math.min(xmin, ring[0]);
	                ymin = Math.min(ymin, ring[1]);
	                xmax = Math.max(xmax, ring[0]);
	                ymax = Math.max(ymax, ring[1]);
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }
	          });
	
	          this._extent = new _extent2.default(xmin, ymin, xmax, ymax);
	        }
	      }
	
	      return this._extent;
	    }
	  }]);
	
	  return MutilPolygon;
	}(_geometry2.default);
	
	exports.default = MutilPolygon;
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	var _geometryutil = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Parallelogram = function (_Polygon) {
	  _inherits(Parallelogram, _Polygon);
	
	  function Parallelogram(coordinates) {
	    _classCallCheck(this, Parallelogram);
	
	    return _possibleConstructorReturn(this, _Polygon.call(this, coordinates));
	  }
	
	  Parallelogram.prototype.getCoordinateIndex = function getCoordinateIndex(coord) {
	    return this.getCoordinates()[0].findIndex(function (points) {
	      return points[0] === coord[0] && points[1] === coord[1];
	    });
	  };
	
	  Parallelogram.prototype.clone = function clone() {
	    return new Parallelogram(this.getCoordinates());
	  };
	
	  /**
	   *
	   * @param coordinates
	   * @returns {Array}
	   */
	
	
	  Parallelogram.getTheLastPoint = function getTheLastPoint(coordinates) {
	    var firstPoint = coordinates[0];
	    var secondPoint = coordinates[1];
	    var thirdPoint = coordinates[2];
	
	    var dx = thirdPoint[0] - secondPoint[0];
	    var dy = thirdPoint[1] - secondPoint[1];
	
	    return [firstPoint[0] + dx, firstPoint[1] + dy];
	  };
	
	  /**
	   * 用于计算和更新平行四边形的顶点
	   *
	   * @param p 平行四边形对象
	   * @param vertex 新移动的点
	   * @param oldVertex 上次移动的点
	   * @param dragSegment 数据对象
	   * @returns {*} 返回新的点集合（3维数组）
	   */
	
	
	  Parallelogram.updateCoordinatesForModification = function updateCoordinatesForModification(p, vertex, oldVertex, dragSegment) {
	    var dis = 0;
	    if (oldVertex) {
	      dis = (0, _geometryutil.distance)(oldVertex, vertex);
	    }
	
	    var oldRingsCoordinates = p.getCoordinates();
	    if (dis === 0) {
	      return oldRingsCoordinates;
	    }
	
	    var oldCoordinates = oldRingsCoordinates[0];
	    var segement = dragSegment[0];
	    var edgeIndex = segement.index;
	
	    var firstCoord = void 0;
	    var nowCood = void 0;
	    var otherCood = void 0;
	
	    if (edgeIndex === 0 || edgeIndex === 4) {
	      firstCoord = oldCoordinates[3];
	      nowCood = oldCoordinates[0];
	      otherCood = oldCoordinates[1];
	    } else {
	      firstCoord = oldCoordinates[edgeIndex - 1];
	      nowCood = oldCoordinates[edgeIndex];
	      otherCood = oldCoordinates[edgeIndex + 1];
	    }
	
	    // 计算延长线上的一点
	    var newCood1 = (0, _geometryutil.getPointInExtendedLineByDistanceFromAB)(firstCoord[0], firstCoord[1], nowCood[0], nowCood[1], dis);
	
	    // 计算向量
	    var tempXX = nowCood[0] - firstCoord[0];
	    var tempYY = nowCood[1] - firstCoord[1];
	    var tempX2 = vertex[0] - oldVertex[0];
	    var tempY2 = vertex[1] - oldVertex[1];
	
	    // 使用向量的点积，来计算两个向量的方向是否一致
	    // 如果 <0 则表示异向
	    var direction = tempX2 * tempXX + tempY2 * tempYY;
	
	    var dx = newCood1[0] - nowCood[0];
	    var dy = newCood1[1] - nowCood[1];
	    var newCood2 = void 0;
	
	    // 不同方向
	    if (direction < 0) {
	      newCood1[0] = nowCood[0] - dx;
	      newCood1[1] = nowCood[1] - dy;
	
	      newCood2 = [otherCood[0] - dx, otherCood[1] - dy];
	    } else {
	      newCood2 = [otherCood[0] + dx, otherCood[1] + dy];
	    }
	
	    oldCoordinates[edgeIndex] = newCood1;
	    oldCoordinates[edgeIndex + 1] = newCood2;
	
	    if (edgeIndex === 0) {
	      oldCoordinates[4] = oldCoordinates[0];
	    } else if (edgeIndex === 4 || edgeIndex === 3) {
	      oldCoordinates[0] = oldCoordinates[4];
	    }
	
	    return [oldCoordinates];
	  };
	
	  _createClass(Parallelogram, [{
	    key: 'geometryType',
	    get: function get() {
	      return _geometry2.default.PARALLELOGRAM;
	    }
	  }]);
	
	  return Parallelogram;
	}(_polygon2.default);
	
	exports.default = Parallelogram;
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	var _geometryutil = __webpack_require__(8);
	
	var _extentutil = __webpack_require__(13);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _log = __webpack_require__(32);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RotatableExtent = function (_Polygon) {
	  _inherits(RotatableExtent, _Polygon);
	
	  function RotatableExtent(coordinates) {
	    _classCallCheck(this, RotatableExtent);
	
	    var _this = _possibleConstructorReturn(this, _Polygon.call(this, coordinates));
	
	    _this.rotable = true;
	    _this._anchorSide = null;
	    _this._width = 0;
	    _this._height = 0;
	    return _this;
	  }
	
	  RotatableExtent.prototype.setCoordinates = function setCoordinates(coords) {
	    _Polygon.prototype.setCoordinates.call(this, coords);
	
	    if (coords.length === 0) {
	      return;
	    }
	
	    var coordinates = coords[0];
	
	    if (coordinates.length < 3) {
	      return;
	    }
	
	    var _coordinates = _slicedToArray(coordinates, 3),
	        p1 = _coordinates[0],
	        p2 = _coordinates[1],
	        p3 = _coordinates[2];
	
	    var d1 = (0, _geometryutil.distance)(p1, p2);
	    var d2 = (0, _geometryutil.distance)(p2, p3);
	
	    if (Number.isNaN(d1) || Number.isNaN(d2)) {
	      return;
	    }
	
	    if (d1 > d2) {
	      this._height = d2;
	      this._width = d1;
	    } else {
	      this._height = d1;
	      this._width = d2;
	    }
	  };
	
	  /**
	   * 旋转计算
	   * @param {Number} angle 
	   * @param {Array} anchor 
	   */
	
	
	  RotatableExtent.prototype.rotate = function rotate(angle, anchor) {
	    // 旋转锚点
	    if (this._anchor) {
	      var _anchor = _slicedToArray(this._anchor, 2),
	          x = _anchor[0],
	          y = _anchor[1];
	
	      this._anchor = _Polygon.prototype.rotateXY.call(this, x, y, anchor, angle);
	    }
	
	    // 坐标旋转
	    _Polygon.prototype.rotate.call(this, angle, anchor);
	  };
	
	  /**
	   * 找到锚点的依靠边，改方法初始化的时候一次计算
	   */
	
	
	  RotatableExtent.prototype._findAnchorEdge = function _findAnchorEdge() {
	    var coordinates = this.getCoordinates();
	    coordinates = coordinates[0];
	
	    // 取前三个点
	
	    var _coordinates2 = coordinates,
	        _coordinates3 = _slicedToArray(_coordinates2, 3),
	        p1 = _coordinates3[0],
	        p2 = _coordinates3[1],
	        p3 = _coordinates3[2];
	
	    var d1 = (0, _geometryutil.distance)(p1, p2);
	    var d2 = (0, _geometryutil.distance)(p2, p3);
	
	    var idx1 = 0,
	        idx2 = 0;
	
	    // 确定最长边
	
	    if (d1 > d2) {
	      idx1 = 0;
	      idx2 = 1;
	    } else {
	      idx1 = 1;
	      idx2 = 2;
	    }
	
	    var idx3 = idx1 + 2,
	        idx4 = idx2 + 2;
	    var _ref = [coordinates[idx1], coordinates[idx2], coordinates[idx3], coordinates[idx4]],
	        c1 = _ref[0],
	        c2 = _ref[1],
	        c3 = _ref[2],
	        c4 = _ref[3];
	
	    // 确定最上边
	
	    var center1 = [(c1[0] + c2[0]) / 2, (c1[1] + c2[1]) / 2];
	    var center2 = [(c3[0] + c4[0]) / 2, (c3[1] + c4[1]) / 2];
	
	    var uponEdge = null,
	        belowEdge = null;
	
	    // 计算上边
	
	    if (center1[1] > center2[1]) {
	      uponEdge = [idx1, idx2];
	      belowEdge = [idx3, idx4];
	    } else {
	      uponEdge = [idx3, idx4];
	      belowEdge = [idx1, idx2];
	    }
	
	    return { uponEdge: uponEdge, belowEdge: belowEdge };
	  };
	
	  /**
	   * 计算旋转锚点的位置
	   */
	
	
	  RotatableExtent.prototype.getAnchorForRotating = function getAnchorForRotating(map) {
	    if (this._anchorSide === null) {
	      this._anchorSide = this._findAnchorEdge();
	    }
	
	    var _anchorSide = this._anchorSide,
	        uponEdge = _anchorSide.uponEdge,
	        belowEdge = _anchorSide.belowEdge;
	
	
	    var coordinates = this.getCoordinates();
	    coordinates = coordinates[0];
	
	    var _ref2 = [coordinates[uponEdge[0]], coordinates[uponEdge[1]], coordinates[belowEdge[0]], coordinates[belowEdge[1]]],
	        c1 = _ref2[0],
	        c2 = _ref2[1],
	        c3 = _ref2[2],
	        c4 = _ref2[3];
	
	    // 取两条长边的中心点
	
	    var center1 = [(c1[0] + c2[0]) / 2, (c1[1] + c2[1]) / 2];
	    var center2 = [(c3[0] + c4[0]) / 2, (c3[1] + c4[1]) / 2];
	
	    // 计算上边
	    var xa = center1[0];
	    var ya = center1[1];
	
	    var xb = center2[0];
	    var yb = center2[1];
	
	    var resolution = map.view.resolution;
	
	    // 计算AB延长距离的点
	    var anchor = (0, _geometryutil.getPointInExtendedLineByDistanceFromAB)(xa, ya, xb, yb, 25 * resolution);
	
	    this._anchor = anchor;
	    return this._anchor;
	  };
	
	  RotatableExtent.prototype.clone = function clone() {
	    return new RotatableExtent(this.getCoordinates());
	  };
	
	  /**
	   * 根据已知边，计算斜矩形的另外两个顶点
	   * @param coordinates
	   * @returns {Array}
	   */
	
	
	  RotatableExtent.getTheLastTwoPoint = function getTheLastTwoPoint(coordinates) {
	    var _coordinates4 = _slicedToArray(coordinates, 3),
	        pointA = _coordinates4[0],
	        pointB = _coordinates4[1],
	        pointC = _coordinates4[2];
	
	    var pointD = null,
	        pointE = null;
	
	    // 斜率为0的计算方法
	
	    if (pointA[1] === pointB[1]) {
	      pointD = [pointB[0], pointC[1]];
	      pointE = [pointA[0], pointC[1]];
	
	      return [pointD, pointE];
	    }
	
	    if (pointA[0] === pointB[0]) {
	      pointD = [pointC[0], pointB[1]];
	      pointE = [pointC[0], pointA[1]];
	
	      return [pointD, pointE];
	    }
	
	    var kAB = (pointA[1] - pointB[1]) / (pointA[0] - pointB[0]);
	    var k = -1 / kAB;
	
	    // 计算投影点
	    pointD = (0, _geometryutil.getProjectivePoint)(pointB, k, pointC);
	    var dBD = (0, _geometryutil.distance)(pointD, pointB);
	
	    var _pointA = _slicedToArray(pointA, 2),
	        x2 = _pointA[0],
	        y2 = _pointA[1];
	
	    var x1 = 0,
	        y1 = 0;
	
	    // 根据距离方程和斜率方程解出点公式
	
	    var dx = Math.sqrt(dBD * dBD / (k * k + 1));
	    var dy = k * Math.sqrt(dBD * dBD / (k * k + 1));
	
	    x1 = x2 - dx;
	    y1 = y2 - dy;
	
	    var dk = (pointD[1] - y1) / (pointD[0] - x1);
	
	    // 同向判断
	    if (dk.toFixed(2) != kAB.toFixed(2)) {
	      x1 = x2 + dx;
	      y1 = y2 + dy;
	    }
	
	    pointE = [x1, y1];
	
	    return [pointD, pointE];
	  };
	
	  RotatableExtent.handleRect = function handleRect(oldCoordinates, dragSegment, vertex) {
	    var _oldCoordinates = _slicedToArray(oldCoordinates, 4),
	        p1 = _oldCoordinates[0],
	        p2 = _oldCoordinates[1],
	        p3 = _oldCoordinates[2],
	        p4 = _oldCoordinates[3];
	
	    if (p1[0] === p4[0] && p2[0] === p3[0] && p1[1] === p2[1] && p3[1] === p4[1]) {
	
	      console.log('旋转矩形');
	
	      var xmin = Number.POSITIVE_INFINITY;
	      var ymin = Number.POSITIVE_INFINITY;
	      var xmax = Number.NEGATIVE_INFINITY;
	      var ymax = Number.NEGATIVE_INFINITY;
	
	      oldCoordinates.forEach(function (ring) {
	        xmin = Math.min(xmin, ring[0]);
	        ymin = Math.min(ymin, ring[1]);
	        xmax = Math.max(xmax, ring[0]);
	        ymax = Math.max(ymax, ring[1]);
	      });
	
	      var coords = [[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]];
	
	      var newCoordinates = _extentutil.ExtentUtil.updateExtent({
	        getCoordinates: function getCoordinates() {
	          return coords;
	        }
	      }, vertex, dragSegment);
	      // Log.coordinates(newCoordinates)
	      return newCoordinates;
	    }
	
	    return null;
	  };
	
	  /**
	   * 用于计算和更新平行四边形的顶点
	   *
	   * @param p 平行四边形对象
	   * @param vertex 新移动的点
	   * @param oldVertex 上次移动的点
	   * @param dragSegment 数据对象
	   * @returns {*} 返回新的点集合（3维数组）
	   */
	
	
	  RotatableExtent.updateCoordinatesForModification = function updateCoordinatesForModification(p, vertex, oldVertex, dragSegment) {
	    var dis = 0;
	    if (oldVertex) {
	      dis = (0, _geometryutil.distance)(oldVertex, vertex);
	    }
	
	    var oldRingsCoordinates = p.getCoordinates();
	    if (dis === 0) {
	      return oldRingsCoordinates;
	    }
	
	    var oldCoordinates = [].concat(_toConsumableArray(oldRingsCoordinates[0]));
	    var segement = dragSegment[0];
	    var edgeIndex = segement.index;
	
	    // const rectCoordinates = RotatableExtent.handleRect(
	    //   oldCoordinates, dragSegment, vertex)
	
	    // if (rectCoordinates) {
	    //   return rectCoordinates
	    // }
	
	    var firstCoord = null;
	    var nowCood = null;
	    var otherCood = null;
	
	    // 1、如果是顶点，则临近两点做调整
	    if (edgeIndex === 0 || edgeIndex === 4) {
	      firstCoord = oldCoordinates[3];
	      nowCood = oldCoordinates[0];
	      otherCood = oldCoordinates[1];
	    } else {
	      firstCoord = oldCoordinates[edgeIndex - 1];
	      nowCood = oldCoordinates[edgeIndex];
	      otherCood = oldCoordinates[edgeIndex + 1];
	    }
	
	    // 计算延长线上的一点
	    var newCood1 = (0, _geometryutil.getPointInExtendedLineByDistanceFromAB)(firstCoord[0], firstCoord[1], nowCood[0], nowCood[1], dis);
	
	    // 计算向量
	    var tempXX = nowCood[0] - firstCoord[0];
	    var tempYY = nowCood[1] - firstCoord[1];
	    var tempX2 = vertex[0] - oldVertex[0];
	    var tempY2 = vertex[1] - oldVertex[1];
	
	    // 使用向量的点积，来计算两个向量的方向是否一致
	    // 如果 <0 则表示异向
	    var direction = tempX2 * tempXX + tempY2 * tempYY;
	
	    var dx = newCood1[0] - nowCood[0];
	    var dy = newCood1[1] - nowCood[1];
	    var newCood2 = void 0;
	
	    // 不同方向
	    if (direction < 0) {
	      newCood1[0] = nowCood[0] - dx;
	      newCood1[1] = nowCood[1] - dy;
	
	      newCood2 = [otherCood[0] - dx, otherCood[1] - dy];
	    } else {
	      newCood2 = [otherCood[0] + dx, otherCood[1] + dy];
	    }
	
	    oldCoordinates[edgeIndex] = newCood1;
	    oldCoordinates[edgeIndex + 1] = newCood2;
	
	    if (edgeIndex === 0) {
	      oldCoordinates[4] = oldCoordinates[0].slice();
	    } else if (edgeIndex === 4 || edgeIndex === 3) {
	      oldCoordinates[0] = oldCoordinates[4].slice();
	    }
	
	    return [oldCoordinates];
	  };
	
	  _createClass(RotatableExtent, [{
	    key: 'geometryType',
	    get: function get() {
	      return _geometry2.default.ROTATABLE_EXTENT;
	    }
	  }, {
	    key: 'width',
	    get: function get() {
	      return this._width;
	    }
	  }, {
	    key: 'height',
	    get: function get() {
	      return this._height;
	    }
	  }]);
	
	  return RotatableExtent;
	}(_polygon2.default);
	
	exports.default = RotatableExtent;
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Log = function () {
	  function Log() {
	    _classCallCheck(this, Log);
	  }
	
	  Log.coordinates = function coordinates() {
	    var _coordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	    if (Array.isArray(_coordinates)) {
	      var str = message;
	      _coordinates.forEach(function (coord) {
	        str += '\u3010' + coord[0] + ', ' + coord[1] + '\u3011 ';
	      });
	
	      console.log(str);
	    } else {
	      console.warn('不是Array类型');
	    }
	  };
	
	  return Log;
	}();
	
	exports.default = Log;
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ImageState = exports.ImageState = {};
	
	/**
	 * On IDLE
	 * @type {number}
	 */
	ImageState.IDLE = 0;
	
	/**
	 * On loading
	 * @type {number}
	 */
	ImageState.LOADING = 1;
	
	/**
	 * Already loaded
	 * @type {number}
	 */
	ImageState.LOADED = 2;
	
	/**
	 * Error occurred
	 * @type {number}
	 */
	ImageState.ERROR = 3;
	
	exports.default = {
	  ImageState: ImageState
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseevent = __webpack_require__(35);
	
	var _baseevent2 = _interopRequireDefault(_baseevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImageEvent = function (_BaseEvent) {
	  _inherits(ImageEvent, _BaseEvent);
	
	  function ImageEvent(type, image) {
	    _classCallCheck(this, ImageEvent);
	
	    var _this = _possibleConstructorReturn(this, _BaseEvent.call(this, type));
	
	    _this.image = image;
	    return _this;
	  }
	
	  return ImageEvent;
	}(_baseevent2.default);
	
	exports.default = ImageEvent;
	
	
	ImageEvent.Type = {
	
	  /**
	   * Triggered when an image starts loading.
	   * @api
	   */
	  IMAGELOADSTART: 'imageloadstart',
	
	  /**
	   * Triggered when an image finishes loading.
	   * @api
	   */
	  IMAGELOADEND: 'imageloadend',
	
	  /**
	   * Triggered if image loading results in an error.
	   * @api
	   */
	  IMAGELOADERROR: 'imageloaderror'
	
	};
	module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//  The BaseEvent is a base class, all event dinfined in library should inherit this.
	//
	// The sub event class can define it's own property ,
	//
	//  which can be passed to other event Listener via event dispatch.
	/**
	 * 定义事件模型基类，自定义事件必须继承该类。
	 *
	 * 事件类及其继承者用于事件传递、数据传送和信息通告。
	 *
	 * @class BaseEvent
	 * @constructor
	 * @module core
	 *
	 */
	var BaseEvent =
	
	/**
	 * 构造函数
	 *
	 * @constructor
	 * @param type
	 */
	function BaseEvent(type) {
	  _classCallCheck(this, BaseEvent);
	
	  /**
	   * 是否停止事件的冒泡
	   *
	   * @type {Boolean}
	   * @property propagatinoStopped
	   */
	  this.propagatinoStopped = false;
	
	  /**
	   * 事件标示
	   *
	   * @example'mousedown' | 'mousemove' | 'click'
	   *
	   * @type {String}
	   * @property type
	   */
	  this.type = type;
	
	  /**
	   * 事件源
	   *
	   * @type {Object}
	   * @property target
	   */
	  this.target = null;
	};
	
	/**
	 *
	 * 用于阻止事件的冒泡
	 *
	 * @param evt {Object} evt DOM event model
	 * @static
	 * @method stopPropagation
	 */
	
	
	exports.default = BaseEvent;
	BaseEvent.stopPropagation = function (evt) {
	  return evt.stopPropagation();
	};
	
	/**
	 *
	 * 用于阻止浏览器的默认行为
	 *
	 * @static
	 * @method preventDefault
	 * @param evt {Object} evt DOM event model
	 */
	BaseEvent.preventDefault = function (evt) {
	  return evt.preventDefault();
	};
	module.exports = exports["default"];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseimage = __webpack_require__(37);
	
	var _baseimage2 = _interopRequireDefault(_baseimage);
	
	var _imagestate = __webpack_require__(33);
	
	var _obj = __webpack_require__(4);
	
	var _obj2 = _interopRequireDefault(_obj);
	
	var _extentutil = __webpack_require__(13);
	
	var _eventtype = __webpack_require__(12);
	
	var _eventmanager = __webpack_require__(21);
	
	var _counter = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SingleImage = function (_BaseImage) {
	  _inherits(SingleImage, _BaseImage);
	
	  function SingleImage(extent, resolution, pixelRatio, attributions, src, crossOrigin, imageLoadFunction) {
	    _classCallCheck(this, SingleImage);
	
	    /**
	     * @private
	     * @type {string}
	     */
	    var _this = _possibleConstructorReturn(this, _BaseImage.call(this, extent, resolution, pixelRatio, _imagestate.ImageState.IDLE, attributions));
	
	    _this._src = src;
	
	    /**
	     * @private
	     * @type {HTMLCanvasElement|Image|HTMLVideoElement}
	     */
	    _this.domImage = new Image();
	    if (crossOrigin !== null) {
	      _this.getDomImage().crossOrigin = crossOrigin;
	    }
	
	    /**
	     * @private
	     * @type {Object.<number, (HTMLCanvasElement|Image|HTMLVideoElement)>}
	     */
	    _this._imageByContext = {};
	
	    /**
	     * @private
	     * @type {Array.<EventsKey>}
	     */
	    _this._imageListenerKeys = null;
	
	    /**
	     * @protected
	     * @type {ImageState}
	     */
	    _this.state = _imagestate.ImageState.IDLE;
	
	    /**
	     * @private
	     * @type {ImageLoadFunctionType}
	     */
	    _this._imageLoadFunction = imageLoadFunction;
	    return _this;
	  }
	
	  /**
	   * @inheritDoc
	   * @api
	   */
	
	
	  SingleImage.prototype.getDomImage = function getDomImage(opt_context) {
	    if (opt_context !== undefined) {
	      var image = void 0;
	      var key = (0, _counter.getUid)(opt_context);
	
	      if (key in this._imageByContext) {
	        return this._imageByContext[key];
	      } else if (_obj2.default.isEmpty(this._imageByContext)) {
	        image = this._domImage;
	      } else {
	        image = this._domImage.cloneNode(false);
	      }
	
	      this._imageByContext[key] = image;
	      return image;
	    } else {
	      return this._domImage;
	    }
	  };
	
	  /**
	   * Tracks loading or read errors.
	   *
	   * @private
	   */
	
	
	  SingleImage.prototype._handleImageError = function _handleImageError() {
	    this.state = _imagestate.ImageState.ERROR;
	    this._unlistenImage();
	    this.changed();
	  };
	
	  /**
	   * Tracks successful image load.
	   *
	   * @private
	   */
	
	
	  SingleImage.prototype._handleImageLoad = function _handleImageLoad() {
	    if (this.resolution === undefined) {
	      this.resolution = _extentutil.ExtentUtil.getHeight(this.extent) / this.getDomImage().height;
	    }
	
	    this.state = _imagestate.ImageState.LOADED;
	    this._unlistenImage();
	    this.changed();
	  };
	
	  /**
	   * Load the image or retry if loading previously failed.
	   * Loading is taken care of by the tile queue, and calling this method is
	   * only needed for preloading or for reloading in case of an error.
	   * @override
	   * @api
	   */
	
	
	  SingleImage.prototype.load = function load() {
	    if (this.state === _imagestate.ImageState.IDLE || this.state === _imagestate.ImageState.ERROR) {
	      this.state = _imagestate.ImageState.LOADING;
	      this.changed();
	      this._imageListenerKeys = [(0, _eventmanager.listenOnce)(this.getDomImage(), _eventtype.EventType.ERROR, this._handleImageError, this), (0, _eventmanager.listenOnce)(this.getDomImage(), _eventtype.EventType.LOAD, this._handleImageLoad, this)];
	
	      this._imageLoadFunction(this, this._src);
	    }
	  };
	
	  /**
	   * @param {HTMLCanvasElement|Image|HTMLVideoElement} image Image.
	   */
	
	
	  /**
	   * Discards event handlers which listen for load completion or errors.
	   *
	   * @private
	   */
	  SingleImage.prototype._unlistenImage = function _unlistenImage() {
	    if (this._imageListenerKeys) {
	      this._imageListenerKeys.forEach(_eventmanager.unlistenByKey);
	    }
	
	    this._imageListenerKeys = null;
	  };
	
	  _createClass(SingleImage, [{
	    key: 'domImage',
	    set: function set(value) {
	      this._domImage = value;
	    }
	  }]);
	
	  return SingleImage;
	}(_baseimage2.default);
	
	exports.default = SingleImage;
	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The base class to represent a generic layer image,it has some basic properties.
	 * such as extent,resolution,state<br/>
	 *
	 * 基础图片图层类，定义了一些用于加载图片的必要信息
	 *
	 * @class BaseImage
	 * @extends BaseObject
	 * @module core
	 * @constructor
	 */
	var BaseImage = function (_BaseObject) {
	  _inherits(BaseImage, _BaseObject);
	
	  /**
	   * Create a BaseImage
	   * @param extent the extent of layer
	   * @param resolution the resolution of layer
	   * @param pixelRatio the pixel ratio
	   * @param state the image loading status
	   * @param attributions
	   */
	  function BaseImage(extent, resolution, pixelRatio, state, attributions) {
	    _classCallCheck(this, BaseImage);
	
	    /**
	     * @type {Object}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._attributions = attributions;
	
	    /**
	     * @type {Object}
	     * @private
	     */
	    _this._extent = extent;
	
	    /**
	     * @type {Number}
	     * @private
	     */
	    _this._pixelRatio = pixelRatio;
	
	    /**
	     * @type {Number}
	     * @private
	     */
	    _this._resolution = resolution;
	
	    /**
	     * @type {Number}
	     * @private
	     */
	    _this._state = state;
	    return _this;
	  }
	
	  /**
	   * return the attributions of layer <br/>
	   * 返回图层的属性
	   * @property attributions
	   * @type Object
	   */
	
	
	  /**
	   * return the DOM image<br/>
	   * 返回DOM对象
	   * @param optContext options
	   * @method getDomImage
	   * @abstract
	   */
	  BaseImage.prototype.getDomImage = function getDomImage(optContext) {
	    return optContext;
	  };
	
	  /**
	   * return the pixel ratio<br/>
	   * 返回像素因数
	   * @property pixelRatio
	   * @type Number
	   */
	
	
	  /**
	   * Load not yet loaded URI. <br/>
	   * 抽象方法，下载图片
	   * @abstract
	   * @method load
	   */
	  BaseImage.prototype.load = function load() {};
	
	  _createClass(BaseImage, [{
	    key: 'attributions',
	    get: function get() {
	      return this._attributions;
	    }
	
	    /**
	     * return the extent of layer<br/>
	     * 返回图层的视图范围
	     * @property extent
	     * @type Object
	     */
	
	  }, {
	    key: 'extent',
	    get: function get() {
	      return this._extent;
	    }
	  }, {
	    key: 'pixelRatio',
	    get: function get() {
	      return this._pixelRatio;
	    }
	
	    /**
	     * return the resolution of layer<br/>
	     * 返回图层的分辨率
	     * @property resolution
	     * @type Number
	     */
	
	  }, {
	    key: 'resolution',
	    get: function get() {
	      return this._resolution;
	    },
	    set: function set(value) {
	      if (this._resolution !== value) {
	        this._resolution = value;
	      }
	    }
	
	    /**
	     * return the state of layer loading <br/>
	     * 获取图片下载状态
	     * @property state
	     * @type Number
	     */
	
	  }, {
	    key: 'state',
	    get: function get() {
	      return this._state;
	    },
	    set: function set(value) {
	      if (this.state !== value) {
	        this._state = value;
	      }
	    }
	  }]);
	
	  return BaseImage;
	}(_baseobject2.default);
	
	exports.default = BaseImage;
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baselayer = __webpack_require__(39);
	
	var _baselayer2 = _interopRequireDefault(_baselayer);
	
	var _style = __webpack_require__(15);
	
	var _extentutil = __webpack_require__(13);
	
	var _featureevent = __webpack_require__(40);
	
	var _featureevent2 = _interopRequireDefault(_featureevent);
	
	var _eventtype = __webpack_require__(12);
	
	var _eventmanager = __webpack_require__(21);
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * FeatureLayer
	 *
	 * class FeatureLayer
	 * @extends BaseObject
	 * @module layer
	 * @constructor
	 */
	var FeatureLayer = function (_BaseLayer) {
	  _inherits(FeatureLayer, _BaseLayer);
	
	  function FeatureLayer() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, FeatureLayer);
	
	    /**
	     *
	     * @type {Array}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _BaseLayer.call(this, options));
	
	    _this._features = [];
	
	    /**
	     *
	     * @type {null}
	     * @private
	     */
	    _this._style = null;
	
	    /**
	     *
	     * @type {null}
	     * @private
	     */
	    _this._styleFunction = null;
	
	    /**
	     *
	     * @type {Map}
	     * @private
	     */
	    _this._featureChangeKeys = new Map();
	
	    /**
	     *
	     */
	    _this.style = options.style;
	
	    // add features if passed by options
	    if (options.features) {
	      _this.addFeatures(options.features);
	    }
	
	    /**
	     * zIndex
	     *
	     * @property zIndex
	     * @type {Number}
	     */
	    _this.zIndex = options.zIndex || 2;
	
	    /**
	     * The rendering buffer will be used for building an extent that
	     * limit geometries rendering
	     * @type {number}
	     * @private
	     */
	    _this._renderBuffer = options.renderBufferValue !== undefined ? options.renderBufferValue : 100;
	
	    return _this;
	  }
	
	  /**
	   * 清除所有features
	   *
	   * @method clear
	   */
	
	
	  FeatureLayer.prototype.clear = function clear() {
	    if (this._features.length !== 0) {
	      this._features = [];
	
	      // remove the event listener from feature
	      var unlistenByKeyFn = _eventmanager.unlistenByKey;
	
	      this._featureChangeKeys.forEach(function (value) {
	        unlistenByKeyFn(value);
	      });
	
	      this._featureChangeKeys.clear();
	
	      this.dispatchEvent(new _featureevent2.default(_featureevent2.default.EventType.CLEAR));
	      this.dispatchEvent(_featureevent2.default.EventType.FEATURE_COLLECTION_CHANGED);
	      this.changed();
	    }
	  };
	
	  /**
	   * 获取features
	   *
	   * @returns {Array}
	   */
	
	
	  /**
	   * 通过id查找feature
	   *
	   * @param id
	   * @returns {Boolean}
	   */
	  FeatureLayer.prototype.findFeature = function findFeature(id) {
	    var features = this.features;
	    return features.find(function (f) {
	      return f.id === id;
	    });
	  };
	
	  /**
	   * 向layer中添加features
	   *
	   * @method addFeatures
	   * @param {Object} features
	   * @returns {Boolean}
	   */
	
	
	  FeatureLayer.prototype.addFeatures = function addFeatures(features) {
	    if (!Array.isArray(features)) {
	      return false;
	    }
	
	    this._addFeaturesInner(features);
	    this.dispatchEvent(_featureevent2.default.EventType.FEATURE_COLLECTION_CHANGED);
	    this.changed();
	  };
	
	  /**
	   * 判断feature是否存在
	   *
	   * @param feature
	   * @returns {Boolean}
	   */
	
	
	  FeatureLayer.prototype.hasFeature = function hasFeature(feature) {
	    if (feature === null || feature === undefined) {
	      return false;
	    }
	
	    var featureId = feature.id;
	    var features = this.features;
	    var findIndex = features.findIndex(function (f) {
	      return f.id === featureId;
	    });
	
	    return findIndex > -1;
	  };
	
	  /**
	   * 添加feature到layer的集合中，并派发feature事件
	   *
	   * addFeaturesInner
	   * @param features
	   * @private
	   */
	
	
	  FeatureLayer.prototype._addFeaturesInner = function _addFeaturesInner(features) {
	    var _this2 = this;
	
	    features.forEach(function (feature) {
	      if (!_this2.hasFeature(feature)) {
	        _this2.features.push(feature);
	
	        _this2._setupChangeEvents(feature.id, feature);
	        _this2.dispatchEvent(new _featureevent2.default(_featureevent2.default.EventType.ADD_FEATURE, feature));
	      }
	    });
	  };
	
	  /**
	   * 添加feature到layer的集合中
	   *
	   * @method addFeature
	   * @param feature
	   * @returns {Boolean}
	   */
	
	
	  FeatureLayer.prototype.addFeature = function addFeature(feature) {
	    if (!feature) {
	      return false;
	    }
	
	    this._addFeaturesInner([feature]);
	    this.dispatchEvent(_featureevent2.default.EventType.FEATURE_COLLECTION_CHANGED);
	    this.changed();
	  };
	
	  /**
	   * 获取当前鼠标点的所有feature
	   *
	   * @method forEachFeatureAtPiexl
	   * @param frameState
	   * @param piexl {Array}
	   * @param callback
	   * @param tolerance {Number}
	   * @returns {*}
	   */
	
	
	  FeatureLayer.prototype.forEachFeatureAtPiexl = function forEachFeatureAtPiexl(frameState, piexl, callback, tolerance) {
	    // frameState 携带 view 信息
	
	    // 1、计算当前屏幕内的feature
	    var features = this._getCurrentExtentFeatures();
	
	    // extentFeatures = extentFeatures.filter(feature => feature.display)
	
	    // calculate features that their extent has intersected with a given point
	    var extentFeatures = this._getIntersectedFeatures(piexl, features);
	
	    var piexlX = piexl[0];
	    var piexlY = piexl[1];
	    var options = {
	      tolerance: tolerance * frameState.viewState.resolution
	    };
	
	    var result = extentFeatures.filter(function (feature) {
	      return feature.geometry.containsXY(piexlX, piexlY, options);
	    });
	
	    return result;
	  };
	
	  /**
	   *
	   * @param point
	   * @param features
	   * @private
	   */
	
	
	  FeatureLayer.prototype._getIntersectedFeatures = function _getIntersectedFeatures(point, features) {
	    return features.filter(function (feature) {
	      return feature.geometry.pointInExtent(point);
	    });
	  };
	
	  /**
	   *
	   * @returns {*}
	   * @private
	   */
	
	
	  FeatureLayer.prototype._getCurrentExtentFeatures = function _getCurrentExtentFeatures() {
	    return this.features.filter(function (feature) {
	      return feature.display;
	    });
	  };
	
	  /**
	   * 从集合中移除feature
	   *
	   * @param feature
	   * @returns {Boolean}
	   */
	
	
	  FeatureLayer.prototype.removeFeature = function removeFeature(feature) {
	    var features = this.features;
	    if (features.length === 0) {
	      return false;
	    }
	
	    var featureId = feature.id;
	    var index = features.findIndex(function (f) {
	      return f.id === featureId;
	    });
	
	    if (index > -1) {
	      features.splice(index, 1);
	
	      this._featureChangeKeys.delete(featureId);
	
	      this.dispatchEvent(new _featureevent2.default(_featureevent2.default.EventType.REMOVE_FEATURE, feature));
	      this.dispatchEvent(_featureevent2.default.EventType.FEATURE_COLLECTION_CHANGED);
	      this.changed();
	    }
	  };
	
	  /**
	   *
	   * @param featureKey
	   * @param feature
	   * @private
	   */
	
	
	  FeatureLayer.prototype._setupChangeEvents = function _setupChangeEvents(featureKey, feature) {
	    this._featureChangeKeys.set(featureKey, (0, _eventmanager.listen)(feature, _eventtype.EventType.CHANGE, this._handleFeatureChange, this));
	  };
	
	  /**
	   *
	   * @private
	   */
	
	
	  FeatureLayer.prototype._handleFeatureChange = function _handleFeatureChange() {
	    this.changed();
	  };
	
	  /**
	   * 样式读写器
	   *
	   * @property style
	   * @param value
	   */
	
	
	  /**
	   * 加载当前屏幕的 features
	   *
	   * 默认会把点、线放在队列尾部
	   *
	   * @method loadFeature
	   * @param extent {Geometry}
	   * @returns {feature}
	   */
	  FeatureLayer.prototype.loadFeature = function loadFeature(extent) {
	    var features = this.features;
	    var intersects = _extentutil.ExtentUtil.intersects;
	    var createOrUpdate = _extentutil.ExtentUtil.createOrUpdate;
	    var newFeatures = [];
	    var pointFeatures = [];
	    var lineFeatures = [];
	
	    features.forEach(function (feature) {
	      // 判断图形是否显示
	      if (feature.display) {
	        var geometry = feature.geometry;
	        var geometryExtent = geometry.extent;
	        var extentArr = createOrUpdate(geometryExtent.xmin, geometryExtent.ymin, geometryExtent.xmax, geometryExtent.ymax);
	
	        if (intersects(extentArr, extent)) {
	          var geometryType = geometry.geometryType;
	          if (geometryType === _geometry2.default.POINT || geometryType === _geometry2.default.MULTI_POINT) {
	            pointFeatures.push(feature);
	          } else if (geometryType === _geometry2.default.LINE || geometryType === _geometry2.default.MULTI_LINE) {
	            lineFeatures.push(feature);
	          } else {
	            newFeatures.push(feature);
	          }
	        }
	      }
	    });
	
	    return [].concat(newFeatures, lineFeatures, pointFeatures);
	  };
	
	  /**
	   * 获取样式
	   *
	   * @method styleFunction
	   * @returns {null|undefined|*}
	   */
	
	
	  _createClass(FeatureLayer, [{
	    key: 'features',
	    get: function get() {
	      return this._features;
	    }
	  }, {
	    key: 'style',
	    set: function set(value) {
	      this._style = value !== undefined ? value : _style.Style.defaultFunction();
	
	      this._styleFunction = value === null ? undefined : _style.Style.createFunction(this._style);
	    },
	    get: function get() {
	      if (this._style === null) {
	        this._style = _style.Style.defaultFunction();
	      }
	
	      return this._style;
	    }
	
	    /**
	     * renderBuffer读写器
	     *
	     */
	
	  }, {
	    key: 'renderBuffer',
	    get: function get() {
	      return this._renderBuffer;
	    },
	    set: function set(renderBufferValue) {
	      if (this._renderBuffer !== renderBufferValue) {
	        this._renderBuffer = renderBufferValue;
	      }
	    }
	  }, {
	    key: 'styleFunction',
	    get: function get() {
	      return this._styleFunction;
	    }
	  }]);
	
	  return FeatureLayer;
	}(_baselayer2.default);
	
	exports.default = FeatureLayer;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _eventmanager = __webpack_require__(21);
	
	var _eventtype = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Layer基础类
	 *
	 * @class BaseLayer
	 * @extends BaseObject
	 * @module layer
	 * @constructor
	 */
	var BaseLayer = function (_BaseObject) {
	  _inherits(BaseLayer, _BaseObject);
	
	  function BaseLayer(options) {
	    _classCallCheck(this, BaseLayer);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    var baseOptions = Object.assign({}, options);
	
	    _this.name = baseOptions.name || '';
	    _this.visible = true;
	    _this.datasource = [];
	    _this.opacity = baseOptions.opacity !== undefined ? options.opacity : 1;
	    _this.dataExtent = null;
	    _this.maxResolution = 0;
	    _this.minResolution = 0;
	    _this.zIndex = baseOptions.zIndex || 0;
	
	    _this._mapRenderKey = null;
	
	    return _this;
	  }
	
	  /**
	   * map读写器, 读取设置当前map
	   *
	   * @type {Function}
	   * @property map
	   * @param mapValue {Object} mk.map
	   */
	
	
	  /**
	   * 加载Feature
	   *
	   * @method loadFeature
	   * @returns {Object} features
	   */
	  BaseLayer.prototype.loadFeature = function loadFeature() {
	    return this.features;
	  };
	
	  _createClass(BaseLayer, [{
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(value) {
	      if (this._mapRenderKey) {
	        (0, _eventmanager.unlistenByKey)(this._mapRenderKey);
	        this._mapRenderKey = null;
	      }
	
	      if (value) {
	        this._map = value;
	        this._mapRenderKey = (0, _eventmanager.listen)(this, _eventtype.EventType.CHANGE, value.render, value);
	        this.changed();
	      }
	    }
	
	    /**
	     * 设置图层是否显示(将会触发的重绘事件)
	     *
	     * @property visible
	     * @param value
	     */
	
	  }, {
	    key: 'visible',
	    get: function get() {
	      return this._visible;
	    },
	    set: function set(value) {
	      if (this._visible !== value) {
	        this._visible = value;
	        this.changed();
	      }
	    }
	
	    /**
	     * 设置图层的透明度(将会触发map的重绘事件)
	     *
	     * @property opacity
	     * @param value
	     */
	
	  }, {
	    key: 'opacity',
	    get: function get() {
	      return this._opacity;
	    },
	    set: function set(value) {
	      this._opacity = value;
	    }
	
	    /**
	     * 设置图层的最小分辨率
	     *
	     * @property minResolution
	     * @returns {*}
	     */
	
	  }, {
	    key: 'minResolution',
	    get: function get() {
	      return this._minResolution;
	    },
	    set: function set(value) {
	      this._minResolution = value;
	    }
	
	    /**
	     * 设置图层的最大分辨率
	     *
	     * @property maxResolution
	     * @returns {*}
	     */
	
	  }, {
	    key: 'maxResolution',
	    get: function get() {
	      return this._maxResolution;
	    },
	    set: function set(value) {
	      this._maxResolution = value;
	    }
	
	    /**
	     * dataExtent读取器
	     *
	     * @property dataExtent
	     * @returns {*}
	     */
	
	  }, {
	    key: 'dataExtent',
	    get: function get() {},
	    set: function set(value) {
	      this._dataExtent = value;
	    }
	
	    /**
	     * datasouce 读取器
	     *
	     * @property datasouce
	     * @returns {*}
	     */
	
	  }, {
	    key: 'datasouce',
	    get: function get() {
	      return this._datasource;
	    }
	  }, {
	    key: 'datasource',
	    set: function set(value) {
	      this._datasource = value;
	    }
	
	    /**
	     * zIndex读取器
	     *
	     * @property maxResolution
	     * @returns {*}
	     */
	
	  }, {
	    key: 'zIndex',
	    get: function get() {
	      return this._zIndex;
	    },
	    set: function set(value) {
	      if (this._zIndex !== value) {
	        this._zIndex = value;
	      }
	    }
	  }]);
	
	  return BaseLayer;
	}(_baseobject2.default);
	
	exports.default = BaseLayer;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseevent = __webpack_require__(35);
	
	var _baseevent2 = _interopRequireDefault(_baseevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * FeatureEvent类
	 *
	 * @class FeatureEvent
	 * @extends baseevent
	 * @module meek
	 */
	var FeatureEvent = function (_BaseEvent) {
	  _inherits(FeatureEvent, _BaseEvent);
	
	  function FeatureEvent(type, feature) {
	    _classCallCheck(this, FeatureEvent);
	
	    var _this = _possibleConstructorReturn(this, _BaseEvent.call(this, type));
	
	    _this.feature = feature;
	    return _this;
	  }
	
	  return FeatureEvent;
	}(_baseevent2.default);
	
	/**
	 * Feature event definition
	 * @type {{ADD_FEATURE: string, REMOVE_FEATURE: string, CLEAR: string}}
	 */
	
	
	exports.default = FeatureEvent;
	FeatureEvent.EventType = {
	
	  /**
	   * Triggered when a feature is added.
	   */
	  ADD_FEATURE: 'addfeature',
	
	  /**
	   * Triggered when a feature is removed.
	   */
	  REMOVE_FEATURE: 'removefeature',
	
	  /**
	   * Triggered when all features are removed.
	   */
	  CLEAR: 'clear',
	
	  /**
	     * Triggered when a feature visible has been changed.
	     */
	  FEATURE_VISIBLE_CHANGED: 'featurevisiblechanged',
	
	  /**
	   * Triggered when the feature collection has been changed.
	   */
	  FEATURE_COLLECTION_CHANGED: 'featurecollectionchanged'
	
	};
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baselayer = __webpack_require__(39);
	
	var _baselayer2 = _interopRequireDefault(_baselayer);
	
	var _singleimage = __webpack_require__(36);
	
	var _singleimage2 = _interopRequireDefault(_singleimage);
	
	var _eventmanager = __webpack_require__(21);
	
	var _domutil = __webpack_require__(42);
	
	var _imageevent = __webpack_require__(34);
	
	var _imageevent2 = _interopRequireDefault(_imageevent);
	
	var _eventtype = __webpack_require__(12);
	
	var _imagestate = __webpack_require__(33);
	
	var _extentutil = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * SingleImageLayer
	 *
	 * @class SingleImageLayer
	 * @extends BaseObject
	 * @module layer
	 * @constructor
	 */
	var SingleImageLayer = function (_BaseLayer) {
	  _inherits(SingleImageLayer, _BaseLayer);
	
	  /**
	   * @constructor
	   * @param options
	   */
	  function SingleImageLayer() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, SingleImageLayer);
	
	    var _this = _possibleConstructorReturn(this, _BaseLayer.call(this, options));
	
	    var imageExtent = options.imageExtent;
	    _this.dataExtent = imageExtent;
	
	    var crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : null;
	
	    var imageLoadFunction = options.imageLoadFunction !== undefined ? options.imageLoadFunction : _this.defaultImageLoadFunction;
	
	    _this.attributions = options.attributions;
	
	    /**
	     * @private
	     */
	    _this._singleImage = new _singleimage2.default(imageExtent, undefined, 1, _this.attributions, options.url, crossOrigin, imageLoadFunction);
	
	    /**
	     * @private
	     * @type {ol.Size}
	     */
	    _this._imageSize = options.imageSize ? options.imageSize : null;
	
	    /**
	     * Listen the change event for SingleImage
	     */
	    (0, _eventmanager.listen)(_this.singleImage, _eventtype.EventType.CHANGE, _this.handleImageChange, _this);
	
	    /**
	     *
	     * @type {number}
	     */
	    _this.zIndex = 0;
	    return _this;
	  }
	
	  /**
	   * 设置图片链接
	   *
	   * @method imageSrc
	   * @param url {String}
	   *
	   */
	
	
	  /**
	   *
	   * @param image
	   * @param src
	   */
	  SingleImageLayer.prototype.defaultImageLoadFunction = function defaultImageLoadFunction(image, src) {
	    image.getDomImage().src = src;
	  };
	
	  /**
	   * 获取图片的Dom
	   * @inheritDoc
	   */
	
	
	  SingleImageLayer.prototype.getImageInternal = function getImageInternal(extent) {
	    if (_extentutil.ExtentUtil.intersects(extent, this.singleImage.extent)) {
	      return this.singleImage;
	    }
	
	    return null;
	  };
	
	  /**
	   * Handle the image change event
	   * @param evt
	   */
	
	
	  SingleImageLayer.prototype.handleImageChange = function handleImageChange(evt) {
	    if (this.singleImage.state === _imagestate.ImageState.LOADED) {
	      var imageExtent = this.singleImage.extent;
	      var image = this.singleImage.getDomImage();
	      var imageWidth = void 0,
	          imageHeight = void 0;
	      if (this._imageSize) {
	        imageWidth = this._imageSize[0];
	        imageHeight = this._imageSize[1];
	      } else {
	        imageWidth = image.width;
	        imageHeight = image.height;
	      }
	
	      var resolution = _extentutil.ExtentUtil.getHeight(imageExtent) / imageHeight;
	      var targetWidth = Math.ceil(_extentutil.ExtentUtil.getWidth(imageExtent) / resolution);
	
	      if (targetWidth !== imageWidth) {
	        var context = (0, _domutil.createCanvasContext2D)(targetWidth, imageHeight);
	        var canvas = context.canvas;
	        context.drawImage(image, 0, 0, imageWidth, imageHeight, 0, 0, canvas.width, canvas.height);
	        // Pre-load image
	        this.singleImage.domImage = canvas;
	      }
	    }
	
	    this._dispatchImageEvent(evt);
	  };
	
	  /**
	   *
	   * @param event
	   * @private
	   */
	
	
	  SingleImageLayer.prototype._dispatchImageEvent = function _dispatchImageEvent(event) {
	    var image = event.target;
	    switch (image.state) {
	      case _imagestate.ImageState.LOADING:
	        this.dispatchEvent(new _imageevent2.default(_imageevent2.default.Type.IMAGELOADSTART, image));
	        break;
	      case _imagestate.ImageState.LOADED:
	        this.dispatchEvent(new _imageevent2.default(_imageevent2.default.Type.IMAGELOADEND, image));
	        break;
	      case _imagestate.ImageState.ERROR:
	        this.dispatchEvent(new _imageevent2.default(_imageevent2.default.Type.IMAGELOADERROR, image));
	        break;
	      default:
	      // pass
	    }
	  };
	
	  _createClass(SingleImageLayer, [{
	    key: 'imageSrc',
	    set: function set(url) {
	      this._singleImage._src = url;
	      this._singleImage.domImage = new Image();
	      this._singleImage.state = _imagestate.ImageState.IDLE;
	    }
	
	    /**
	     * 获取singleImage
	     *
	     * @property singleImage
	     * @returns {SingleImage}
	     */
	
	  }, {
	    key: 'singleImage',
	    get: function get() {
	      return this._singleImage;
	    }
	
	    /**
	     * 属性读写器
	     *
	     * @property attributions
	     * @param value
	     */
	
	  }, {
	    key: 'attributions',
	    set: function set(value) {
	      this._attributes = value;
	    },
	    get: function get() {
	      return this._attributes || null;
	    }
	  }]);
	
	  return SingleImageLayer;
	}(_baselayer2.default);
	
	exports.default = SingleImageLayer;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createCanvasContext2D = createCanvasContext2D;
	exports.outerWidth = outerWidth;
	exports.outerHeight = outerHeight;
	exports.removeNode = removeNode;
	exports.removeChildren = removeChildren;
	/**
	 *
	 * @param optWidth
	 * @param optHeight
	 * @returns {CanvasRenderingContext2D|WebGLRenderingContext}
	 */
	function createCanvasContext2D(optWidth, optHeight) {
	  var canvas = document.createElement('CANVAS');
	  if (optWidth) {
	    canvas.width = optWidth;
	  }
	
	  if (optHeight) {
	    canvas.height = optHeight;
	  }
	
	  return canvas.getContext('2d');
	}
	
	/**
	 *
	 * @param element
	 * @returns {number}
	 */
	function outerWidth(element) {
	  var width = element.offsetWidth;
	  var style = getComputedStyle(element);
	  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
	
	  return width;
	}
	
	/**
	 *
	 * @param element
	 * @returns {number}
	 */
	function outerHeight(element) {
	  var height = element.offsetHeight;
	  var style = getComputedStyle(element);
	  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
	
	  return height;
	}
	
	function removeNode(node) {
	  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
	}
	
	/**
	 *
	 * @param node
	 */
	function removeChildren(node) {
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	}
	
	exports.default = {
	  createCanvasContext2D: createCanvasContext2D,
	  outerWidth: outerWidth,
	  outerHeight: outerHeight,
	  removeChildren: removeChildren,
	  removeNode: removeNode
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _featurelayer = __webpack_require__(38);
	
	var _featurelayer2 = _interopRequireDefault(_featurelayer);
	
	var _feature = __webpack_require__(46);
	
	var _feature2 = _interopRequireDefault(_feature);
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _point = __webpack_require__(23);
	
	var _point2 = _interopRequireDefault(_point);
	
	var _line = __webpack_require__(24);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	var _mutilpolygon = __webpack_require__(29);
	
	var _mutilpolygon2 = _interopRequireDefault(_mutilpolygon);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _drawevent = __webpack_require__(47);
	
	var _drawevent2 = _interopRequireDefault(_drawevent);
	
	var _parallelogram = __webpack_require__(30);
	
	var _parallelogram2 = _interopRequireDefault(_parallelogram);
	
	var _rotatableextent = __webpack_require__(31);
	
	var _rotatableextent2 = _interopRequireDefault(_rotatableextent);
	
	var _extentutil = __webpack_require__(13);
	
	var _geometryutil = __webpack_require__(8);
	
	var _eventmanager = __webpack_require__(21);
	
	var _style = __webpack_require__(15);
	
	var _functions = __webpack_require__(14);
	
	var _feature3 = __webpack_require__(48);
	
	var _coordinate = __webpack_require__(6);
	
	var _log = __webpack_require__(32);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 图形绘制工具基础类
	 *
	 * @class Draw
	 * @extends Component
	 * @module component
	 * @constructor
	 * @example
	 *
	 *      // 实例化绘图工具
	 *      var drawTool = new mk.Draw({
	 *        type: 'point',
	 *        drawLayer: new mk.FeatureLayer()
	 *      })
	 *
	 */
	var Draw = function (_Component) {
	  _inherits(Draw, _Component);
	
	  /**
	   * 构造函数
	   *
	   * @constructor constructor
	   * @param options
	   */
	  function Draw() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Draw);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this.applyHandleEventOption({
	      handleDownEvent: _this._handleDownEvent,
	      handleMouseEvent: _this.handleMouseEvent,
	      handleUpEvent: _this._handleUpEvent
	    });
	
	    /**
	     * mapRenderKey
	     * @type {null}
	     * @private
	     */
	    _this._mapRenderKey = null;
	
	    /**
	     * 绘制作用图层;
	     * 需要给绘制工具一个绘制的图层
	     *
	     * @property drawLayer
	     * @type {null}
	     * @private
	     */
	    _this._drawLayer = options.drawLayer ? options.drawLayer : null;
	
	    /**
	     * 鼠标按下时的坐标点
	     *
	     * @property downPointPx
	     * @type {null}
	     * @private
	     */
	    _this._downPointPx = null;
	
	    /**
	     * 图形绘制结束条件
	     *
	     * @property finishCoordinate
	     * @type {null}
	     * @private
	     */
	    _this._finishCoordinate = null;
	
	    /**
	     * 当前的绘图模式(点、线、多边形、矩形)
	     *
	     * @property drawMode
	     * @type {*}
	     */
	    _this.drawMode = Draw.getDrawMode(options.type);
	
	    /**
	     * 绘制多边形、线段时的临时坐标数据
	     *
	     * @property sketchCoords
	     * @type
	     * @private
	     */
	    _this._sketchCoords = null;
	
	    /**
	     * 绘制多边的临时线段
	     *
	     * @property sketchLine
	     * @type {null}
	     * @private
	     */
	    _this._sketchLine = null;
	
	    /**
	     * 绘制完成时的结束条件
	     *
	     * @property finishCondition
	     * @type {null}
	     * @private
	     *
	     */
	    _this._finishCondition = options.finishCondition ? options.finishCondition : _functions.functions.TURE;
	
	    /**
	     * 是否有绘制完毕的执行条件配置，用于控制绘制完毕的键盘事件
	     */
	    _this._hasFinishConditionOptions = options.finishCondition ? true : false;
	
	    /**
	     * 撤销条件
	     *
	     * @property undoCondition
	     * @type {Function}
	     * @private
	     */
	    _this._undoCondition = options.undoCondition !== undefined ? options.undoCondition : _functions.functions.TURE;
	
	    /**
	     * 是否有绘制完毕的执行条件配置，用于控制绘制完毕的键盘事件
	     */
	    _this._hasUndoConditionOptions = options.undoCondition ? true : false;
	
	    /**
	     * 设置默认回退的顶点数，默认1
	     * @TODO 需要完善
	     * @type {number}
	     * @private
	     */
	    _this._undoStep = options.freehandUndoStep ? options.freehandUndoStep : 2;
	
	    // add keyboard events
	    if (options.undoCondition || options.finishCondition) {
	      (0, _eventmanager.listen)(document, 'keyup', _this._handleKeyboardEvent, _this);
	    }
	
	    /**
	     * 初始化草稿图层，用于临时显示绘制的图形
	     *
	     * @property sketchLayer
	     * @type {Object} featurelayer
	     * @private
	     */
	    _this._sketchLayer = new _featurelayer2.default({ name: 'sketch layer for draw component' });
	
	    /**
	     * 获取默认绘制渲染样式
	     *
	     * @property sketchLayer
	     * @private
	     * @type {Function}
	     */
	    _this._sketchLayer.style = _this.getDefaultStyleFunction();
	
	    /**
	     * 临时点
	     *
	     * @property sketchPoint
	     * @type {null}
	     * @private
	     */
	    _this._sketchPoint = null;
	
	    /**
	     * 绘制时，是否允许鼠标参考点
	     * @type {boolean}
	     * @private
	     */
	    _this._enableSketchPoint = options.enableSketchPoint ? options.enableSketchPoint : false;
	
	    /**
	     * 临时Feature
	     *
	     * @property sketchFeature
	     * @type {null}
	     * @private
	     */
	    _this._sketchFeature = null;
	
	    /**
	     * 通过geometry的类型去构建一个geometry
	     *
	     * @property eometryFunction
	     * @type {null}
	     * @private
	     */
	    // The function that can build a geometry by the passed geometry type.
	    _this._geometryFunction = null;
	
	    /**
	     * 临时的线段坐标数据
	     *
	     * @property sketchLineCoords
	     * @type {null}
	     * @private
	     */
	    _this._sketchLineCoords = null;
	
	    /**
	     * freehand drawing
	     * @type {Boolean}
	     * @private
	     */
	    _this._freehand = options.freehand ? options.freehand : false;
	
	    /**
	     * 公差像素距离
	     *
	     * @property snapTolerance
	     * @type {Number}
	     * @private
	     */
	    _this._snapTolerance = options.snapTolerance ? options.snapTolerance : 2;
	
	    // 绘制捕捉配置
	    var snapOptions = options.snapOptions ? options.snapOptions : {};
	
	    _this._snapToOthers = snapOptions.snapToOthers ? snapOptions.snapToOthers : false;
	
	    _this._snapToOthersTolerance = snapOptions.tolerance ? snapOptions.tolerance : 8;
	
	    /**
	     * 绘制线段时的最多点限制，默认没有限制
	     *
	     * @property maxLinePoints
	     * @type {Number}
	     * @private
	     */
	    _this._maxLinePoints = options.maxLinePoints ? options.maxLinePoints : Infinity;
	
	    /**
	     * 绘制多边形时的顶点限制，默认没有限制
	     *
	     * @property maxPolygonPoints
	     * @type {Number}
	     * @private
	     */
	    _this._maxPolygonPoints = options.maxPolygonPoints ? options.maxPolygonPoints : Infinity;
	
	    /**
	     * 绘制线段的最少点为2，多边形为3
	     *
	     * @property minPoints
	     * @type {Number}
	     * @private
	     */
	    _this._minPoints = options.minPoints ? options.minPoints : _this.drawMode === Draw.DrawMode.POLYGON ? 3 : 2;
	
	    /**
	     *
	     * @type {condition}
	     * @private
	     */
	    _this._condition = options.condition ? options.condition : _functions.functions.TURE;
	
	    /**
	     *
	     * @type {boolean}
	     * @private
	     */
	    _this._shouldHandle = false;
	
	    /**
	     *
	     * @type {number}
	     * @private
	     */
	    _this._squaredClickTolerance = options.clickUpTolerance ? options.clickUpTolerance * options.clickUpTolerance : 36;
	
	    return _this;
	  }
	
	  Draw.prototype._finishCheck = function _finishCheck() {
	    // 判断多边形的顶点是否小于4个（正常多边形3个顶点，首尾相接多一个顶点），
	    // 小于4个不是多边形，return
	    var pcoordinates = void 0;
	    var mode = this.drawMode;
	    switch (mode) {
	      case Draw.DrawMode.POLYGON:
	        if (this._sketchFeature === null) {
	          return false;
	        }
	
	        pcoordinates = this._sketchFeature.geometry.getCoordinates();
	        if (pcoordinates[0].length < 4) {
	          return false;
	        }
	        break;
	      // 判断线的顶点是否小于2个，小于2个不是线段，return
	      case Draw.DrawMode.LINE:
	        if (this._sketchFeature === null) {
	          return false;
	        }
	
	        pcoordinates = this._sketchFeature.geometry.getCoordinates();
	        if (pcoordinates.length <= 2) {
	          return false;
	        }
	        break;
	      case Draw.DrawMode.ROTATABLE_EXTENT:
	        if (this._sketchFeature === null) {
	          return false;
	        }
	
	        pcoordinates = this._sketchFeature.geometry.getCoordinates()[0];
	        if (pcoordinates.length <= 3) {
	          return false;
	        }
	        break;
	      default:
	        break;
	    }
	
	    return true;
	  };
	
	  /**
	   * 处理绘制结束事件
	   *
	   * handleKeyboardEvent
	   * @type {Function}
	   * @param event {event}
	   * @private
	   */
	
	
	  Draw.prototype._handleKeyboardEvent = function _handleKeyboardEvent(event) {
	    // If finish drawing
	    if (this._hasFinishConditionOptions && this._finishCondition(event)) {
	      if (this._finishCheck()) {
	        this._finishDrawing();
	      }
	    }
	
	    // If undo drawing
	    if (this._hasUndoConditionOptions) {
	      if (this._undoCondition(event)) {
	        this.undoDrawing();
	      }
	    }
	  };
	
	  /**
	   * 获取图形创建、修改的工厂方法
	   *
	   * @property geometryFunction
	   * @type {Function}
	   * @retruns geometryFunction {Function}
	   */
	
	
	  /**
	   * 判断传入的绘制类型是否在绘制列表中
	   *
	   * @method existInDrawMode
	   * @param value {String}
	   * @returns {Boolean}
	   * @private
	   */
	  Draw.prototype._existInDrawMode = function _existInDrawMode(value) {
	    if (typeof value === 'string' && value.constructor === String) {
	      var drawMode = Draw.DrawMode;
	      var modeValue = value.toUpperCase();
	
	      if (modeValue === Draw.DrawMode.UNDEFINED.toUpperCase()) {
	        return false;
	      }
	
	      for (var val in drawMode) {
	        if (modeValue === drawMode[val].toUpperCase()) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  };
	
	  /**
	   * 图形生产工厂方法
	   *
	   * @method geometryFactory
	   * @returns {Object} 返回一个geometry对象
	   * @private
	   */
	
	
	  Draw.prototype._geometryFactory = function _geometryFactory() {
	    var Constructor = void 0;
	    var mode = this.drawMode;
	
	    switch (mode) {
	      case Draw.DrawMode.POINT:
	        Constructor = _point2.default;
	        break;
	      case Draw.DrawMode.LINE:
	        Constructor = _line2.default;
	        break;
	      case Draw.DrawMode.POLYGON:
	        Constructor = _polygon2.default;
	        break;
	      case Draw.DrawMode.EXTENT:
	        Constructor = _extent2.default;
	        break;
	      case Draw.DrawMode.PARALLELOGRAM:
	        Constructor = _parallelogram2.default;
	        break;
	      case Draw.DrawMode.ROTATABLE_EXTENT:
	        Constructor = _rotatableextent2.default;
	        break;
	    }
	
	    return Constructor;
	  };
	
	  /**
	   * 设置缺省 geometryfunction
	   *
	   * @method initGeometryFunction
	   * @returns {Function} Geometry
	   * @private
	   */
	
	
	  Draw.prototype._initGeometryFunction = function _initGeometryFunction() {
	    var _this2 = this;
	
	    var geometryFunction = function geometryFunction(coordinates, opt_geometry) {
	      var mode = _this2.drawMode;
	      var geometry = opt_geometry;
	
	      if (geometry) {
	        if (mode === Draw.DrawMode.POLYGON || mode === Draw.DrawMode.PARALLELOGRAM || mode === Draw.DrawMode.ROTATABLE_EXTENT || mode === Draw.DrawMode.LINE) {
	          geometry.setCoordinates(coordinates);
	        } else if (mode === Draw.DrawMode.EXTENT) {
	          geometry.setCoordinates(_extentutil.ExtentUtil.boundingExtent(coordinates));
	        }
	      } else {
	        var Constructor = _this2._geometryFactory();
	        geometry = new Constructor(coordinates[0], coordinates[1]);
	      }
	
	      return geometry;
	    };
	
	    return geometryFunction;
	  };
	
	  /**
	   * 或者 freehand draw 的执行条件
	   *
	   * @param event
	   * @returns {boolean|*}
	   * @private
	   */
	
	
	  Draw.prototype._freehandEnable = function _freehandEnable() {
	    var drawMode = this.drawMode;
	    return (drawMode === Draw.DrawMode.POLYGON || drawMode === Draw.DrawMode.LINE) && this._freehand;
	  };
	
	  /**
	   * 处理鼠标事件
	   *
	   * handleMouseEvent
	   * @param event {event}
	   * @returns {*|Boolean}
	   */
	
	
	  Draw.prototype.handleMouseEvent = function handleMouseEvent(event) {
	    // 排除右键
	    var buttons = event.originalEvent.buttons;
	    if (buttons === 2) {
	      return false;
	    }
	
	    // 越界限制
	    event.coordinate = this.coordinateBeyond(event.coordinate);
	
	    var freehand = this._freehandEnable();
	    // this._freehand = this._freehandEnable()
	    // let pass = !this._freehand
	    var pass = true;
	    var eventType = event.type;
	    if (freehand && eventType === _browserevent2.default.MOUSE_DRAG && this._sketchFeature !== null) {
	      this._addToDrawing(event);
	      // pass = false
	    } else if (eventType === _browserevent2.default.MOUSE_MOVE) {
	      pass = this._handleMove(event);
	    } else if (eventType === _browserevent2.default.DBLCLICK) {
	      pass = false;
	    }
	
	    return _Component.prototype.handleMouseEvent.call(this, event) && pass;
	  };
	
	  /**
	   * 处理移动事件
	   *
	   * handleMove
	   * @param {BrowserEvent} event A move event.
	   * @return {boolean} Pass the event to other compoments.
	   * @private
	   */
	
	
	  Draw.prototype._handleMove = function _handleMove(event) {
	    if (this._downPointPx && (!this._freehand && this._shouldHandle || this._freehand && !this._shouldHandle)) {
	      var downPx = this._downPointPx;
	      var clickPx = event.pixel;
	      var dx = downPx[0] - clickPx[0];
	      var dy = downPx[1] - clickPx[1];
	      var _squaredDistance = dx * dx + dy * dy;
	      this._shouldHandle = this._freehand ? _squaredDistance > this._squaredClickTolerance : _squaredDistance <= this._squaredClickTolerance;
	    }
	
	    if (this._finishCoordinate) {
	      this._modifyDrawing(event);
	      // this._autoPan(event)
	    } else {
	      this._updateSketchPoint(event);
	    }
	
	    return true;
	  };
	
	  /**
	   * 鼠标按下时，获取当前坐标点
	   *
	   * handleDownEvent
	   * @param event {BrowserEvent} event A up event.
	   * @returns {Boolean}
	   * @private
	   */
	
	
	  Draw.prototype._handleDownEvent = function _handleDownEvent(event) {
	    this._shouldHandle = !this._freehand;
	
	    if (this._freehand) {
	      this._downPointPx = event.pixel;
	      if (!this._finishCoordinate) {
	        this._startDrawing(event);
	      }
	
	      return false;
	    } else if (this._condition(event)) {
	      this._downPointPx = event.pixel;
	      return true;
	    } else {
	      return false;
	    }
	  };
	
	  /**
	   * 处理鼠标弹起事件
	   *
	   * handleUpEvent
	   * @param event {BrowserEvent} event
	   * @private
	   */
	
	
	  Draw.prototype._handleUpEvent = function _handleUpEvent(event) {
	    if (this.drawMode === Draw.DrawMode.UNDEFINED) {
	      return;
	    }
	
	    var pass = true;
	    var mode = this.drawMode;
	
	    this._handleMove(event);
	
	    if (this._shouldHandle) {
	      if (!this._finishCoordinate) {
	        this._startDrawing(event);
	
	        // 点绘制在up的时候结束
	        if (this.drawMode === Draw.DrawMode.POINT) {
	          this._finishDrawing();
	        }
	      } else if (mode === Draw.DrawMode.CIRCLE) {
	        //
	        //
	      } else if (mode === Draw.DrawMode.EXTENT) {
	        this._finishDrawing();
	      } else if (this._atFinish(event)) {
	        if (this._finishCondition(event)) {
	          this._finishDrawing();
	        }
	      } else {
	        this._addToDrawing(event);
	      }
	    } else if (this._freehand && !this._finishCondition) {
	      this._finishCoordinate = null;
	      this._abortDrawing();
	    }
	
	    return pass;
	  };
	
	  /**
	   * 启动绘制，生成feature
	   *
	   * @method startDrawing
	   * @param event {Event}
	   * @private
	   */
	
	
	  Draw.prototype._startDrawing = function _startDrawing(event) {
	    var startPoint = event.coordinate;
	    this._finishCoordinate = startPoint;
	
	    var _drawMode = this.drawMode;
	
	    switch (this.drawMode) {
	      case Draw.DrawMode.POINT:
	        this._sketchCoords = startPoint.slice(); // 缓存up的点
	        break;
	      case Draw.DrawMode.POLYGON:
	      case Draw.DrawMode.PARALLELOGRAM:
	      case Draw.DrawMode.ROTATABLE_EXTENT:
	        this._sketchCoords = [[startPoint.slice(), startPoint.slice()]];
	        this._sketchLineCoords = this._sketchCoords[0]; // temp line
	        break;
	      default:
	        this._sketchCoords = [startPoint.slice(), startPoint.slice()];
	
	        // 缓存up的点，最后一个值，用于move的替换
	        if (_drawMode === Draw.DrawMode.EXTENT) {
	          this._sketchLineCoords = this._sketchCoords;
	        }
	    }
	
	    if (this._sketchLineCoords) {
	      this._sketchLine = new _feature2.default(new _line2.default(this._sketchLineCoords));
	    }
	
	    // Build a geometry uesed sketchCorrdds
	    var geometry = this.geometryFunction(this._sketchCoords);
	
	    this._sketchFeature = new _feature2.default();
	    this._sketchFeature.geometry = geometry;
	
	    // Redraw the sketch features
	    this._updateSketchFeatures();
	
	    // 派发绘制开始事件
	    // Trigger the draw-strat event
	    var evt = new _drawevent2.default(_drawevent2.default.EventType.DRAW_START, this._sketchFeature);
	    this.dispatchEvent(evt);
	  };
	
	  /**
	   * Modify the drawing
	   *
	   * @param event {Event}
	   * @private
	   */
	
	
	  Draw.prototype._modifyDrawing = function _modifyDrawing(event) {
	    var coordinate = event.coordinate;
	
	    // snap点检测，如果有则使用snap点
	    var closeToVertex = this._calculateCloseToVertexOfOhters(event.pixel);
	    if (closeToVertex != null) {
	      coordinate = closeToVertex;
	    }
	
	    var geometry = this._sketchFeature.geometry;
	    var coordinates = null;
	    var lastSecondPoint = null;
	    var last = [];
	    var mode = this.drawMode;
	
	    switch (mode) {
	      case Draw.DrawMode.POINT:
	        last = this._sketchCoords;
	        last[0] = coordinate[0];
	        last[1] = coordinate[1];
	        break;
	      case Draw.DrawMode.POLYGON:
	        coordinates = this._sketchCoords[0];
	        last = coordinates[coordinates.length - 1];
	        if (this._atFinish(event)) {
	          coordinate = this._finishCoordinate.slice();
	        }
	
	        // 在鼠标移动的时候，将最后一个点替换成当前的鼠标点
	        last[0] = coordinate[0];
	        last[1] = coordinate[1];
	        break;
	      case Draw.DrawMode.PARALLELOGRAM:
	        coordinates = this._sketchCoords[0];
	        last = coordinates[coordinates.length - 1];
	
	        // 需要清理，第三个点应该为鼠标点
	        if (coordinates.length > 3) {
	          coordinates = coordinates.slice(0, 2);
	          coordinates.push(coordinate);
	        } else {
	          last[0] = coordinate[0];
	          last[1] = coordinate[1];
	        }
	
	        lastSecondPoint = coordinates[coordinates.length - 2];
	
	        // 平行四边形，如果有3个点，则直接生成平行四边形
	        if (lastSecondPoint[0] !== last[0] && lastSecondPoint[1] !== last[1] && coordinates.length === 3) {
	          var lstPoint = _parallelogram2.default.getTheLastPoint(coordinates);
	          coordinates.push(lstPoint, coordinates[0]);
	          this._sketchCoords = [coordinates];
	
	          // 辅助效果线
	          this._sketchLineCoords = coordinates;
	        }
	        break;
	      case Draw.DrawMode.ROTATABLE_EXTENT:
	        coordinates = this._sketchCoords[0];
	        var coordinateLen = coordinates.length;
	        last = coordinates[coordinateLen - 1];
	
	        // 需要清理，第三个点应该为鼠标点
	        if (coordinateLen > 3) {
	          coordinates = coordinates.slice(0, 2);
	          coordinates.push(coordinate);
	        } else {
	          last[0] = coordinate[0];
	          last[1] = coordinate[1];
	        }
	
	        if (coordinates.length >= 3) {
	          var lstTwoPoint = _rotatableextent2.default.getTheLastTwoPoint(coordinates);
	
	          // 越界检查
	          var firstPoint = lstTwoPoint[0];
	          if (!_Component.prototype.checkIfCoordinateWithInMapView.call(this, firstPoint)) {
	            return;
	          }
	
	          var secondPoint = lstTwoPoint[1];
	          if (!_Component.prototype.checkIfCoordinateWithInMapView.call(this, secondPoint)) {
	            return;
	          }
	
	          coordinates = [coordinates[0].slice(), coordinates[1].slice()].concat(_toConsumableArray(lstTwoPoint), [coordinates[0].slice()]);
	
	          this._sketchCoords = [coordinates];
	          this._sketchLineCoords = coordinates; // 辅助效果线
	        }
	        break;
	      default:
	        coordinates = this._sketchCoords; // 获取up的点
	        // 替换为当前MOve的点，形成一条path
	        last = coordinates[coordinates.length - 1];
	
	        last[0] = coordinate[0];
	        last[1] = coordinate[1];
	    }
	
	    if (this._freehand) {
	      var tempLastRing = this._sketchCoords[0];
	      if (tempLastRing.length > 2) {
	        var lastPoint = tempLastRing[tempLastRing.length - 1];
	        var lastPoint2 = tempLastRing[tempLastRing.length - 2];
	
	        if (lastPoint[0] === lastPoint2[0] && lastPoint[1] === lastPoint2[1]) {
	          tempLastRing.pop();
	        }
	      }
	    }
	
	    // 给 geometry 赋值
	    this.geometryFunction(this._sketchCoords, geometry);
	
	    // 更新点坐标
	    if (this._sketchPoint) {
	      var sketchPointGeom = this._sketchPoint.geometry;
	      sketchPointGeom.update(coordinate[0], coordinate[1]);
	    }
	
	    var sketchLineGeom = void 0;
	    if (mode === Draw.DrawMode.EXTENT) {
	      if (!this._sketchLine) {
	        this._sketchLine = new _feature2.default(new _line2.default(null));
	      }
	
	      var rings = geometry.getCoordinates();
	      sketchLineGeom = this._sketchLine.geometry;
	      sketchLineGeom.path = rings;
	    } else if (this._sketchLineCoords) {
	      sketchLineGeom = this._sketchLine.geometry;
	      sketchLineGeom.path = this._sketchLineCoords;
	    }
	
	    this._updateSketchFeatures();
	    this.dispatchEvent(new _drawevent2.default(_drawevent2.default.EventType.DRAWING, this._sketchFeature));
	  };
	
	  /**
	   * Add a new coordinate to the drawing
	   *
	   * @param event
	   * @private
	   */
	
	
	  Draw.prototype._addToDrawing = function _addToDrawing(event) {
	    var coordinate = event.coordinate;
	    var geometry = this._sketchFeature.geometry;
	    var coordinates = void 0,
	        done = void 0;
	    var mode = this.drawMode;
	
	    switch (mode) {
	      case Draw.DrawMode.LINE:
	        this._finishCoordinate = coordinate.slice();
	        coordinates = this._sketchCoords;
	
	        if (coordinates.length > this._maxLinePoints) {
	          if (this._freehand) {
	            coordinates.pop();
	          } else {
	            done = true;
	          }
	        }
	
	        if (this._freehand) {
	          if (coordinates.length > 1) {
	            var lastPoint = coordinates[coordinates.length - 1];
	            if (lastPoint[0] === coordinate[0] && lastPoint[1] === coordinate[1]) {
	              coordinates.pop();
	            }
	          }
	        }
	
	        coordinates.push(coordinate.slice());
	        this.geometryFunction(coordinates, geometry);
	        break;
	      case Draw.DrawMode.POLYGON:
	        coordinates = this._sketchCoords[0];
	
	        if (coordinates.length > this._maxPolygonPoints) {
	          if (this._freehand) {
	            coordinates.pop();
	          } else {
	            done = true;
	          }
	        }
	
	        coordinates.push(coordinate.slice());
	
	        if (done) {
	          this._finishCoordinate = coordinates[0];
	        }
	
	        this.geometryFunction(this._sketchCoords, geometry);
	        break;
	      case Draw.DrawMode.PARALLELOGRAM:
	      case Draw.DrawMode.ROTATABLE_EXTENT:
	        coordinates = this._sketchCoords[0];
	
	        // 当前坐标数组添加新点数组
	        coordinates.push(coordinate.slice());
	        done = coordinates.length > this._maxPolygonPoints;
	
	        if (done) {
	          this._finishCoordinate = coordinates[0];
	        }
	
	        this.geometryFunction(this._sketchCoords, geometry);
	        break;
	      default:
	        break;
	    }
	
	    this._updateSketchFeatures();
	
	    if (done) {
	      this._finishDrawing();
	    }
	  };
	
	  /**
	   * 终止绘制，不会添加临时feature
	   *
	   * @method abortDrawing
	   * @returns {Feature|null|_Feature2.default}
	   * @private
	   */
	
	
	  Draw.prototype._abortDrawing = function _abortDrawing() {
	    this._finishCoordinate = null;
	    var sketchFeature = this._sketchFeature;
	    if (sketchFeature) {
	      this._sketchFeature = null;
	      this._sketchPoint = null;
	      this._sketchLine = null;
	      this._sketchLayer.clear();
	    }
	
	    return sketchFeature;
	  };
	
	  Draw.prototype.finishDrawing = function finishDrawing() {
	    if (this._finishCheck()) {
	      this._finishDrawing();
	    }
	  };
	
	  /**
	   * 绘制完成，形成正式feature
	   *
	   * @method finishDrawing
	   * @private
	   */
	
	
	  Draw.prototype._finishDrawing = function _finishDrawing() {
	    if (this._sketchFeature === null) {
	      this.dispatchEvent(new _drawevent2.default(_drawevent2.default.EventType.DRAW_END));
	      return;
	    }
	
	    var sketchFeature = this._abortDrawing(); // 中止绘制，
	    var coordinates = this._sketchCoords;
	    var geometry = sketchFeature.geometry;
	
	    var drawMode = this.drawMode;
	
	    if (drawMode === Draw.DrawMode.LINE) {
	      // remove the redundant last point
	      coordinates.pop();
	      this.geometryFunction(coordinates, geometry);
	    } else if (drawMode === Draw.DrawMode.POLYGON) {
	      // When we finish drawing a polygon on the last point,
	      // the last coordinate is duplicated as for LineString
	      // we force the replacement by the first point
	      coordinates[0].pop();
	      coordinates[0].push(coordinates[0][0]);
	      this.geometryFunction(coordinates, geometry);
	    }
	
	    // 处理复合图形
	    if (drawMode === _geometry2.default.MULTI_POINT) {
	      // sketchFeature.geometry = new MultiPoint([coordinates]))
	    } else if (drawMode === _geometry2.default.MULTI_LINE) {
	      // sketchFeature.geometry = new MultiLineString([coordinates])
	    } else if (drawMode === _geometry2.default.MULTI_POLYGON) {
	      sketchFeature.geometry = new _mutilpolygon2.default([coordinates]);
	    }
	
	    if (this._freehand) {
	      (0, _geometryutil.simplify)(sketchFeature.geometry);
	    }
	
	    // 最终放到shource中，形成正式feature
	    if (this._drawLayer) {
	      sketchFeature.style = undefined;
	      this._drawLayer.addFeatures([sketchFeature]);
	    }
	
	    // First dispatch event to allow full set up of feature
	    this.dispatchEvent(new _drawevent2.default(_drawevent2.default.EventType.DRAW_END, sketchFeature));
	  };
	
	  /**
	   * Determine if an event is within the snapping tolerance of the start coord.
	   *
	   * @param event
	   * @returns {Boolean}
	   * @private
	   */
	
	
	  Draw.prototype._atFinish = function _atFinish(event) {
	    var at = false;
	    if (this._sketchFeature) {
	
	      if (this._freehand && this._finishCondition) {
	        return false;
	      }
	
	      var potentiallyDone = false;
	      var potentiallyFinishCoordinates = [this._finishCoordinate];
	
	      var drawMode = this.drawMode;
	      switch (drawMode) {
	        case Draw.DrawMode.LINE:
	          potentiallyDone = this._sketchCoords.length > this._minPoints;
	          break;
	        case Draw.DrawMode.POLYGON:
	          potentiallyDone = this._sketchCoords[0].length > this._minPoints;
	          potentiallyFinishCoordinates = [this._sketchCoords[0][0], this._sketchCoords[0][this._sketchCoords[0].length - 2]];
	          break;
	        case Draw.DrawMode.PARALLELOGRAM:
	        case Draw.DrawMode.ROTATABLE_EXTENT:
	          at = this._sketchCoords[0].length === 5 ? true : false;
	          break;
	      }
	
	      if (potentiallyDone) {
	        var map = this.map;
	        for (var i = 0, ii = potentiallyFinishCoordinates.length; i < ii; i++) {
	          var finishCoordinate = potentiallyFinishCoordinates[i];
	          var finishPixel = map.getPixelFromCoordinate(finishCoordinate);
	          var pixel = event.pixel;
	          var dx = pixel[0] - finishPixel[0];
	          var dy = pixel[1] - finishPixel[1];
	          var freehand = this._freehand;
	          var snapTolerance = freehand ? 1 : this._snapTolerance;
	          at = Math.sqrt(dx * dx + dy * dy) <= snapTolerance;
	          if (at) {
	            this._finishCoordinate = finishCoordinate;
	            break;
	          }
	        }
	      }
	    }
	
	    return at;
	  };
	
	  /**
	   * Create or update the sketch point
	   *
	   * updateSketchPoint
	   * @param event {BrowserEvent} event
	   * @private
	   */
	
	
	  Draw.prototype._updateSketchPoint = function _updateSketchPoint(event) {
	    var coordinates = event.coordinate;
	
	    if (!this._enableSketchPoint) {
	      return;
	    }
	
	    if (this._sketchPoint === null) {
	      var geom = new _point2.default(coordinates[0], coordinates[1]);
	      this._sketchPoint = new _feature2.default(geom);
	      this._updateSketchFeatures();
	    } else {
	      var sketchPointgeom = this._sketchPoint.geometry;
	      sketchPointgeom.setCoordinates(coordinates);
	    }
	  };
	
	  Draw.prototype._autoPan = function _autoPan(event) {
	    var pixel = event.pixel;
	    var size = this.map.size;
	    var x = pixel[0];
	    var y = pixel[1];
	
	    if (x <= 2 || y <= 2) {
	      return;
	    }
	
	    if (x >= size[0] - 5 || y >= size[1] - 5) {
	      return;
	    }
	  };
	
	  /**
	   * Redraw the sketch featrues.
	   * updateSketchFeatures
	   * @private
	   */
	
	
	  Draw.prototype._updateSketchFeatures = function _updateSketchFeatures() {
	    var features = [];
	
	    if (this._sketchFeature) {
	      features.push(this._sketchFeature);
	    }
	
	    if (this._sketchLine) {
	      features.push(this._sketchLine);
	    }
	
	    if (this._sketchPoint) {
	      features.push(this._sketchPoint);
	    }
	
	    // 出发map的render
	    this._sketchLayer.clear();
	    this._sketchLayer.addFeatures(features);
	  };
	
	  /**
	   * 执行撤销
	   *
	   * @method undoDrawing
	   * @private
	   */
	
	
	  Draw.prototype.undoDrawing = function undoDrawing() {
	    var drawMode = this.drawMode;
	    var undoStep = 1;
	    var polygonDeleteStep = 2;
	    if (this._freehand) {
	      undoStep = this._undoStep;
	      polygonDeleteStep = 3;
	    }
	
	    if (drawMode === Draw.DrawMode.LINE) {
	      if (this._sketchFeature) {
	        var coordinates = this._sketchFeature.geometry.getCoordinates();
	        if (coordinates.length + undoStep > 2) {
	          coordinates.splice(coordinates.length - 2, undoStep);
	          if (coordinates.length === 1) {
	            this._abortDrawing();
	            this._finishDrawing();
	          } else {
	            this._sketchFeature.changed();
	          }
	        } else {
	          this._abortDrawing();
	          this._finishDrawing();
	        }
	      }
	    } else if (drawMode === Draw.DrawMode.POLYGON) {
	      if (this._sketchFeature) {
	        var pcoordinates = this._sketchFeature.geometry.getCoordinates()[0];
	
	        if (pcoordinates.length + undoStep > polygonDeleteStep) {
	          pcoordinates.splice(pcoordinates.length - polygonDeleteStep, undoStep);
	          if (pcoordinates.length === 1) {
	            this._abortDrawing();
	            this._finishDrawing();
	          } else {
	            this._sketchFeature.changed();
	          }
	        } else {
	          this._abortDrawing();
	          this._finishDrawing();
	        }
	      }
	    }
	  };
	
	  /**
	   * 计算鼠标点离最近图形上的一点
	   */
	
	
	  Draw.prototype._calculateCloseToVertexOfOhters = function _calculateCloseToVertexOfOhters(pixel) {
	    if (!this.snapToOthers) {
	      return null;
	    }
	
	    var features = this.drawLayer.features;
	
	    var closeToVertex = null;
	    var map = this.map;
	
	    var pixelCoordinate = map.getCoordinateFromPixel(pixel);
	
	    // 获取碰撞阈值内的feature列表
	    var nodes = (0, _feature3.getCollisionFeaturesByPoint)(features, pixelCoordinate, this.snapToOthersTolerance);
	
	    if (nodes.length === 0) {
	      return null;
	    }
	
	    var sortByDistance = function sortByDistance(s1, s2) {
	      var d1 = (0, _geometryutil.squaredDistanceToSegment)(pixelCoordinate, s1.segment);
	      var d2 = (0, _geometryutil.squaredDistanceToSegment)(pixelCoordinate, s2.segment);
	      return d1 - d2;
	    };
	
	    // 取最近的
	    nodes.sort(sortByDistance);
	    var node = nodes[0];
	
	    var geometry = node.geometry;
	    // const geometryType = geometry.geometryType
	    var closestSegment = node.segment;
	
	    // 计算鼠标点在线段上的投影点，即是最近点
	    var vertex = (0, _geometryutil.closestOnSegment)(pixelCoordinate, node.segment);
	    var vertexPixel = map.getPixelFromCoordinate(vertex);
	
	    // 判断当前是否选中了边
	    var dist = (0, _geometryutil.distance)(pixel, vertexPixel);
	    if (dist <= this.snapToOthersTolerance) {
	      closeToVertex = vertex;
	
	      // 顶点优先被选择
	      var pixel1 = map.getPixelFromCoordinate(closestSegment[0]);
	      var pixel2 = map.getPixelFromCoordinate(closestSegment[1]);
	
	      var squaredDist1 = (0, _geometryutil.squaredDistance)(vertexPixel[0], vertexPixel[1], pixel1[0], pixel1[1]);
	      var squaredDist2 = (0, _geometryutil.squaredDistance)(vertexPixel[0], vertexPixel[1], pixel2[0], pixel2[1]);
	
	      dist = Math.sqrt(Math.min(squaredDist1, squaredDist2));
	
	      // 计算最靠近的顶点
	      this._snappedToVertex = dist <= this._pixelTolerance;
	      if (this._snappedToVertex) {
	        closeToVertex = squaredDist1 > squaredDist2 ? closestSegment[1] : closestSegment[0];
	      }
	    }
	
	    return closeToVertex;
	  };
	
	  /**
	   * map读写器, 读取设置当前map
	   *
	   * @type {Function}
	   * @property map
	   * @param mapValue {Object} mk.map
	   */
	
	
	  /**
	   * 更新绘制状态
	   *
	   * @method updateState
	   * @private
	   */
	  Draw.prototype._updateState = function _updateState() {
	    var map = this.map;
	    var active = this.active;
	    if (!map || !active) {
	      this._abortDrawing();
	    }
	
	    this._sketchLayer.map = map;
	  };
	
	  /**
	   * 获取默认绘制样式
	   *
	   * @method getDefaultStyleFunction
	   * @returns {Function}
	   */
	
	
	  Draw.prototype.getDefaultStyleFunction = function getDefaultStyleFunction() {
	    var styles = _style.Style.createDefaultEditing();
	    return function (feature) {
	      return styles[feature.geometry.geometryType];
	    };
	  };
	
	  /**
	   *
	   * @returns {boolean}
	   */
	
	
	  Draw.prototype.shouldStopEvent = function shouldStopEvent() {
	    if (this._freehand) {
	      return true;
	    }
	
	    return false;
	  };
	
	  /**
	   * 获取当前的Layer
	   *
	   * @method drawLayer
	   * @return {null}
	   */
	
	
	  _createClass(Draw, [{
	    key: 'geometryFunction',
	    get: function get() {
	      if (!this._geometryFunction) {
	        this._geometryFunction = this._initGeometryFunction();
	      }
	
	      return this._geometryFunction;
	    }
	
	    /**
	     * drawMode读写器，
	     * 设置当前绘图的模式，重新赋值将会启动新图形类型的绘制
	     *
	     * @type {Function}
	     * @property drawMode
	     * @type {mk.Draw.DrawMode}
	     */
	
	  }, {
	    key: 'drawMode',
	    get: function get() {
	      return this._drawMode;
	    },
	    set: function set(value) {
	      var isIn = this._existInDrawMode(value);
	
	      this.active = isIn ? true : false;
	      this._drawMode = isIn ? value : Draw.DrawMode.UNDEFINED;
	
	      this._sketchLineCoords = null;
	      this._abortDrawing();
	
	      this._minPoints = this._drawMode === Draw.DrawMode.POLYGON ? 3 : 2;
	    }
	  }, {
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(mapValue) {
	      if (this._mapRenderKey) {
	        (0, _eventmanager.unlistenByKey)(this._mapRenderKey);
	        this._mapRenderKey = null;
	      }
	
	      if (mapValue) {
	        this._map = mapValue;
	        mapValue.addLayer(this._sketchLayer);
	      }
	
	      this._updateState();
	    }
	  }, {
	    key: 'drawLayer',
	    get: function get() {
	      return this._drawLayer;
	    },
	    set: function set(layer) {
	      this._drawLayer = layer;
	    }
	
	    /**
	     * 设置当前自由、绘制模式
	     * @property freehand
	     * @type {Boolean}
	     */
	
	  }, {
	    key: 'freehand',
	    get: function get() {
	      return this._freehand;
	    },
	    set: function set(value) {
	      this._freehand = value;
	    }
	
	    /**
	     * active读写器, 读取设置当前active非自由
	     *
	     * @type {Function}
	     * @property active
	     * @type {Boolean}
	     */
	
	  }, {
	    key: 'active',
	    get: function get() {
	      return this._active;
	    },
	    set: function set(value) {
	      this._active = value;
	      if (this._active === false) {
	        if (this._sketchLayer) {
	          this._sketchLayer.clear();
	        }
	
	        this._sketchPoint = null;
	      }
	    }
	  }, {
	    key: 'snapToOthers',
	    get: function get() {
	      return this._snapToOthers;
	    },
	    set: function set(value) {
	      if (this._snapToOthers != value) {
	        this._snapToOthers = value;
	      }
	    }
	  }, {
	    key: 'snapToOthersTolerance',
	    get: function get() {
	      return this._snapToOthersTolerance;
	    },
	    set: function set(value) {
	      if (this._snapToOthersTolerance != value) {
	        this._snapToOthersTolerance = value;
	      }
	    }
	  }]);
	
	  return Draw;
	}(_component2.default);
	
	/**
	 * 获取当前绘制模式的静态方法
	 *
	 * @method getDrawMode
	 * @param type {String}
	 * @returns {Object}
	 */
	
	
	exports.default = Draw;
	Draw.getDrawMode = function (type) {
	  var drawMode = Draw.DrawMode.UNDEFINED;
	
	  switch (type) {
	    case _geometry2.default.POINT:
	    case _geometry2.default.MULTI_POINT:
	      drawMode = Draw.DrawMode.POINT;
	      break;
	    case _geometry2.default.LINE:
	    case _geometry2.default.MULTI_LINE:
	      drawMode = Draw.DrawMode.LINE;
	      break;
	    case _geometry2.default.POLYGON:
	    case _geometry2.default.MULTI_POLYGON:
	      drawMode = Draw.DrawMode.POLYGON;
	      break;
	    case _geometry2.default.EXTENT:
	      drawMode = Draw.DrawMode.EXTENT;
	      break;
	    case _geometry2.default.PARALLELOGRAM:
	      drawMode = Draw.DrawMode.PARALLELOGRAM;
	      break;
	    case _geometry2.default.ROTATABLE_EXTENT:
	      drawMode = Draw.DrawMode.ROTATABLE_EXTENT;
	      break;
	    default:
	      drawMode = Draw.DrawMode.UNDEFINED;
	      break;
	  }
	
	  return drawMode;
	};
	
	/**
	 * Draw mode.  This collapses multi-part geometry types with their single-part
	 * cousins.
	 *
	 * 绘制模式：点、线、面、矩形(circle暂时不支持)
	 * @enum {string}
	 */
	Draw.DrawMode = {
	  POINT: 'Point',
	  LINE: 'Line',
	  POLYGON: 'Polygon',
	  CIRCLE: 'Circle',
	  EXTENT: 'Extent',
	  PARALLELOGRAM: 'Parallelogram',
	  ROTATABLE_EXTENT: 'rotatable_extent',
	  UNDEFINED: 'undefined'
	};
	module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _obj = __webpack_require__(4);
	
	var _obj2 = _interopRequireDefault(_obj);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 *
	 * 定义组件基础类
	 *
	 * @class Component
	 * @extends BaseObject
	 * @module component
	 *
	 */
	
	// Abstract base class,represent a base componnet whcih should be inhrited
	var Component = function (_BaseObject) {
	  _inherits(Component, _BaseObject);
	
	  /**
	   * 构造函数
	   *
	   * @constructor
	   */
	  function Component() {
	    _classCallCheck(this, Component);
	
	    /**
	     * 当前组件开关，默认为ture，设置为false时，则关闭当前组件的功能
	     *
	     * @property active
	     * @type {Boolean}
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this.active = true;
	
	    /**
	     * @property mapRenderKey
	     * @type {null}
	     * @private
	     */
	    _this._mapRenderKey = null;
	
	    /**
	     * @property targetPointers
	     * @type {null}
	     */
	    _this.targetPointers = null;
	
	    /**
	     * @property trackedPointers
	     * @type {{}}
	     * @private
	     */
	    _this._trackedPointers = {};
	
	    /**
	     * handlingDownUpSequence
	     * @type {boolean}
	     */
	    _this.handlingDownUpSequence = false;
	
	    return _this;
	  }
	
	  /**
	   * applyHandleEventOption
	   * @param options
	   */
	
	
	  Component.prototype.applyHandleEventOption = function applyHandleEventOption(options) {
	
	    /**
	     *
	     */
	    this.handleMouseEvent = options.handleMouseEvent ? options.handleMouseEvent : this.handleMouseEvent;
	
	    /**
	     *
	     * @private
	     */
	    this._handleDownEvent = options.handleDownEvent ? options.handleDownEvent : function () {
	      return false;
	    };
	
	    /**
	     *
	     * @private
	     */
	    this._handleDragEvent = options.handleDragEvent ? options.handleDragEvent : function () {};
	
	    /**
	     * @private
	     */
	    this._handleMoveEvent = options.handleMoveEvent ? options.handleMoveEvent : function () {};
	
	    /**
	     * @private
	     */
	    this._handleUpEvent = options.handleUpEvent ? options.handleUpEvent : function () {
	      return false;
	    };
	  };
	
	  /**
	   * 处理鼠标事件
	   *
	   * handleMouseEvent
	   * @param browserEvent {browserEvent}
	   *
	   * @returns {Boolean}
	   */
	
	
	  Component.prototype.handleMouseEvent = function handleMouseEvent(browserEvent) {
	    var stopEvent = false;
	    this._updateTrackedPointers(browserEvent);
	
	    if (this.handlingDownUpSequence) {
	
	      if (browserEvent.type === _browserevent2.default.MOUSE_DRAG) {
	        this._handleDragEvent(browserEvent);
	      } else if (browserEvent.type === _browserevent2.default.MOUSE_UP) {
	
	        var handledUp = this._handleUpEvent(browserEvent);
	        this.handlingDownUpSequence = handledUp && this.targetPointers.length > 0;
	      }
	    } else {
	      if (browserEvent.type === _browserevent2.default.MOUSE_DOWN) {
	
	        var handled = this._handleDownEvent(browserEvent);
	        this.handlingDownUpSequence = handled;
	        stopEvent = this.shouldStopEvent(handled);
	      } else if (browserEvent.type === _browserevent2.default.MOUSE_MOVE) {
	        this._handleMoveEvent(browserEvent);
	      }
	    }
	
	    return !stopEvent;
	  };
	
	  /**
	   *
	   * 根据浏览器鼠标操作事件的类型返回true或false
	   *
	   * isPointerDraggingEvent
	   * @param browserEvent {browserEvent}
	   *
	   * @returns {Boolean}
	   * @private
	   */
	
	
	  Component.prototype._isPointerDraggingEvent = function _isPointerDraggingEvent(browserEvent) {
	    var type = browserEvent.type;
	    return type === _browserevent2.default.MOUSE_DOWN || type === _browserevent2.default.MOUSE_DRAG || type === _browserevent2.default.MOUSE_UP;
	  };
	
	  /**
	   *
	   * 处理浏览器鼠标操作事件
	   *
	   * updateTrackedPointers
	   *
	   * @param browserEvent {browserEvent}
	   * @private
	   */
	
	
	  Component.prototype._updateTrackedPointers = function _updateTrackedPointers(browserEvent) {
	    if (this._isPointerDraggingEvent(browserEvent)) {
	      var event = browserEvent;
	
	      if (browserEvent.type == _browserevent2.default.MOUSE_UP) {
	        delete this._trackedPointers[event.pointerId];
	      } else if (browserEvent.type == _browserevent2.default.MOUSE_DOWN) {
	        this._trackedPointers[event.pointerId] = event;
	      } else if (event.pointerId in this._trackedPointers) {
	        this._trackedPointers[event.pointerId] = event;
	      }
	      this.targetPointers = _obj2.default.getValues(this._trackedPointers);
	    }
	  };
	
	  /**
	   *
	   * @param view
	   * @param delta
	   * @param opt_duration
	   */
	
	
	  Component.prototype.pan = function pan(view, delta) {
	    var currentCenter = view.center;
	    if (currentCenter) {
	      view.center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
	    }
	  };
	
	  /**
	   *
	   * 根据Delta值进行视图缩放，Delta等于1时固定放大，等于-1时固定缩小
	   *
	   * @method zoomByDelta
	   *
	   * @param view {Object}
	   * @param delta {Number}
	   * @param opt_anchor {Number}
	   * @param opt_duration {Number}
	   *
	   */
	
	
	  Component.prototype.zoomByDelta = function zoomByDelta(view, delta, opt_anchor, opt_duration) {
	    var currentResolution = view.resolution;
	    var resolution = view.constrainResolution(currentResolution, delta, 0);
	
	    if (opt_anchor && resolution !== undefined && resolution !== currentResolution) {
	      var currentCenter = view.center;
	      var center = view.calculateCenterZoom(resolution, opt_anchor);
	      center = view.constrainCenter(center);
	
	      opt_anchor = [(resolution * currentCenter[0] - currentResolution * center[0]) / (resolution - currentResolution), (resolution * currentCenter[1] - currentResolution * center[1]) / (resolution - currentResolution)];
	    }
	
	    this.zoomWithoutConstraints(view, resolution, opt_anchor, opt_duration);
	  };
	
	  /**
	   *
	   * 根据resolution进行缩放
	   *
	   * @method zoomWithoutConstraints
	   *
	   * @param view {Object}
	   * @param resolution {Number}
	   * @param opt_anchor {Number}
	   * @param opt_duration {Number}
	   */
	
	
	  Component.prototype.zoomWithoutConstraints = function zoomWithoutConstraints(view, resolution, opt_anchor, opt_duration) {
	    if (resolution) {
	      var currentResolution = view.resolution;
	      var currentCenter = view.center;
	
	      if (currentResolution !== undefined && currentCenter && resolution !== currentResolution && opt_duration) {
	        view.resolution = resolution;
	      } else {
	        if (opt_anchor) {
	          var center = view.calculateCenterZoom(resolution, opt_anchor);
	          view.center = center;
	        }
	        view.resolution = resolution;
	      }
	    }
	  };
	
	  /**
	   * 获取当前标注视图的坐标范围(标注的图片的像素)
	   *
	   * @method getViewDataExtent
	   *
	   * @returns {*|null}
	   */
	
	
	  Component.prototype.getViewDataExtent = function getViewDataExtent() {
	    if (!this._dataExtent) {
	      this._dataExtent = this.map.view.dataExtent;
	    }
	
	    return this._dataExtent;
	  };
	
	  /**
	   *
	   * 坐标自检测，如果有小于0的坐标，修正为0，如果有大于最大值的坐标，修正为最大值
	   *
	   * @method coordinateBeyond
	   * @param coordinate {Array} 坐标点{x,y}
	   * @returns {Array} new Coordinate
	   */
	
	
	  Component.prototype.coordinateBeyond = function coordinateBeyond(coordinate) {
	    // 如果允许坐标可超出图片的边界
	    if (this.map.allowCoordinatesBeyondImage) {
	      return coordinate;
	    }
	
	    if (coordinate === undefined) {
	      return coordinate;
	    }
	
	    var newCoordinate = new Array(2);
	
	    var x = void 0,
	        y = void 0;
	
	    try {
	      x = coordinate[0];
	      y = coordinate[1];
	    } catch (e) {
	      // console.log(coordinate)
	    }
	
	    newCoordinate[0] = x;
	    newCoordinate[1] = y;
	
	    if (x <= 0) {
	      newCoordinate[0] = 0;
	    }
	
	    if (y <= 0) {
	      newCoordinate[1] = 0;
	    }
	
	    var extent = this.getViewDataExtent();
	
	    if (extent) {
	      if (x >= extent[2]) {
	        newCoordinate[0] = extent[2];
	      }
	
	      if (y >= extent[3]) {
	        newCoordinate[1] = extent[3];
	      }
	    }
	
	    return newCoordinate;
	  };
	
	  Component.prototype.checkIfCoordinateWithInMapView = function checkIfCoordinateWithInMapView(coordinate) {
	    if (coordinate === null || coordinate === undefined) {
	      return false;
	    }
	
	    if (!Array.isArray(coordinate)) {
	      return false;
	    }
	
	    var _coordinate = _slicedToArray(coordinate, 2),
	        x = _coordinate[0],
	        y = _coordinate[1];
	
	    if (x < 0 || y < 0) {
	      return false;
	    }
	
	    var extent = this.getViewDataExtent();
	    if (x > extent[2] || y > extent[3]) {
	      return false;
	    }
	
	    return true;
	  };
	
	  /**
	   * shouldStopEvent
	   * @param handled
	   * @returns {*}
	   *
	   */
	
	
	  Component.prototype.shouldStopEvent = function shouldStopEvent(handled) {
	    return handled;
	  };
	
	  /**
	   * map读写器, 读取设置当前map
	   *
	   * @type {Function}
	   * @property map
	   * @type {mk.map}
	   */
	
	
	  _createClass(Component, [{
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(value) {
	      this._map = value;
	    }
	
	    /**
	     * active读写器, 读取设置active
	     *
	     * @type {Function}
	     * @property active
	     */
	
	  }, {
	    key: 'active',
	    get: function get() {
	      return this._active;
	    },
	    set: function set(value) {
	      this._active = value;
	    }
	  }]);
	
	  return Component;
	}(_baseobject2.default);
	
	exports.default = Component;
	module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * BrowserEvent
	 *
	 * @class BrowserEvent
	 * @extends BaseObject
	 * @module meek
	 * @constructor
	 */
	var BrowserEvent = function (_BaseObject) {
	  _inherits(BrowserEvent, _BaseObject);
	
	  /**
	   * @constructor
	   * @param map
	   * @param oriEvent
	   * @param eventTyle
	   */
	  function BrowserEvent(map, oriEvent, eventTyle) {
	    _classCallCheck(this, BrowserEvent);
	
	    /**
	     * 标示事件类型
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this.type = eventTyle;
	
	    /**
	     *
	     */
	    _this.map = map;
	
	    /**
	     * 记录事件源对象
	     */
	    _this.originalEvent = oriEvent;
	
	    /**
	     * 将浏览器坐标转换成canvas屏幕坐标
	     * The pixel of the original browser event.
	     * @type {ol.Pixel}
	     * @api stable
	     */
	    _this.pixel = map.getEventPixel(oriEvent);
	
	    /**
	     * 将canvas左边转换成地图坐标
	     */
	    _this.coordinate = map.getCoordinateFromPixel(_this.pixel);
	
	    /**
	     * @type {number}
	     */
	    _this.pointerId = 0;
	    return _this;
	  }
	
	  /**
	   * 取消事件的默认动作
	   *
	   * @method preventDefault
	   */
	
	
	  BrowserEvent.prototype.preventDefault = function preventDefault() {
	    this.originalEvent.preventDefault();
	  };
	
	  /**
	   * 阻止当前事件在DOM树上冒泡
	   *
	   * @method stopPropagation
	   */
	
	
	  BrowserEvent.prototype.stopPropagation = function stopPropagation() {
	    this.originalEvent.stopPropagation();
	  };
	
	  return BrowserEvent;
	}(_baseobject2.default);
	// The single click is different form double click,which
	// consider as two click heppen during 250ms.
	/**
	 * 鼠标在一段时间内单击标识
	 *
	 * @property SINGLE_CLICK
	 * @static
	 * @final
	 * @type {String}
	 */
	
	
	exports.default = BrowserEvent;
	BrowserEvent.SINGLE_CLICK = 'singleclick';
	
	/**
	 *
	 * 鼠标单击事件标识
	 *
	 * @property CLICK
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.CLICK = 'click';
	
	/**
	 *
	 * 鼠标双击事件标识
	 *
	 * @property DBLCLICK
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.DBLCLICK = 'dblclick';
	
	/**
	 * 鼠标拖拽事件标识
	 *
	 * @property MOUSE_DRAG
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.MOUSE_DRAG = 'mousedrag';
	
	/**
	 * 鼠标按下事件标识
	 *
	 * @property MOUSE_DOWN
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.MOUSE_DOWN = 'mousedown';
	
	/**
	 * 鼠标移动事件标识
	 *
	 * @property MOUSE_MOVE
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.MOUSE_MOVE = 'mousemove';
	
	/**
	 * 鼠标抬起事件标识
	 *
	 * @property MOUSE_UP
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.MOUSE_UP = 'mouseup';
	
	/**
	 * 鼠标移入事件标识
	 *
	 * @property MOUSE_OVER
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.MOUSE_OVER = 'mouseover';
	
	/**
	 * 鼠标移开事件标识
	 *
	 * @property MOUSE_OUT
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.MOUSE_OUT = 'mouseout';
	
	/**
	 * 滚轮事件标识
	 *
	 * @property WHEEL
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.WHEEL = 'wheel';
	
	/**
	 * 鼠标滚轮事件标识
	 *
	 * @property MOUSE_WHEEL
	 * @static
	 * @final
	 * @type {String}
	 */
	BrowserEvent.MOUSE_WHEEL = 'mousewheel';
	
	/**
	 *
	 * @type {string}
	 */
	BrowserEvent.KEYDOWN = 'keydown';
	
	/**
	 *
	 * @type {string}
	 */
	BrowserEvent.KEYPRESS = 'keypress';
	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _obj = __webpack_require__(4);
	
	var _obj2 = _interopRequireDefault(_obj);
	
	var _eventmanager = __webpack_require__(21);
	
	var _eventtype = __webpack_require__(12);
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _featureevent = __webpack_require__(40);
	
	var _featureevent2 = _interopRequireDefault(_featureevent);
	
	var _linestyle = __webpack_require__(19);
	
	var _linestyle2 = _interopRequireDefault(_linestyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The feature class is intent to represent geographic features,
	 * with a geometry ,a style and other attrubutes properties.
	 * Feature provides a function named style that can be seted a style you want,
	 * otherwise will use the style of feature layer.
	 *
	 * @class Feature
	 * @extends BaseObject
	 * @module meek
	 * @constructor
	 */
	var Feature = function (_BaseObject) {
	  _inherits(Feature, _BaseObject);
	
	  function Feature(geometry) {
	    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var displayText = arguments[2];
	    var style = arguments[3];
	
	    _classCallCheck(this, Feature);
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._styleFunction = undefined;
	
	    /**
	     *
	     * @type {null}
	     * @private
	     */
	    _this._geometryChangeKey = null;
	
	    /**
	     *
	     */
	    _this.geometry = geometry;
	
	    /**
	     * 设置feature属性
	     */
	    _this.initArribute(attributes);
	
	    /**
	     * 设置feature样式
	     *
	     */
	    _this.style = style;
	
	    /**
	     * 设置feature文本
	     *
	     */
	    _this.displayText = displayText;
	
	    /**
	     * 设置feature是否显示
	     *
	     * @type {Boolean}
	     * @private
	     */
	    _this.display = true;
	
	    /**
	     * 设置feature的标签是否显示
	     * @type {Boolean}
	     * @private
	     */
	    _this.textDisplay = true;
	
	    /**
	     * 设置feature的样式是否高亮
	     * @type {Boolean}
	     * @private
	     */
	    _this.styleHighLight = false;
	
	    return _this;
	  }
	
	  /**
	   *
	   * @private
	   */
	
	
	  Feature.prototype._handleGeometryChanged = function _handleGeometryChanged() {
	    this.changed();
	  };
	
	  /**
	   * 设置feature属性
	   *
	   * @method initArribute
	   * @param attributes
	   */
	
	
	  Feature.prototype.initArribute = function initArribute(attributes) {
	    if (attributes instanceof Map) {
	      this._attributesMap = attributes;
	      return;
	    }
	
	    if (!(attributes instanceof Object)) {
	      attributes = {};
	    }
	
	    this._attributesMap = _obj2.default.objectToMap(attributes);
	  };
	
	  /**
	   * 获取feature属性
	   *
	   * @method get
	   * @param property
	   * @return {*}
	   */
	
	
	  Feature.prototype.get = function get(property) {
	    if (this._attributesMap.has(property)) {
	      return this._attributesMap.get(property);
	    }
	
	    return undefined;
	  };
	
	  /**
	   * 设置属性的值
	   *
	   * @method set
	   * @param property
	   * @param value
	   * @return {Map.<K, V>}
	   */
	
	
	  Feature.prototype.set = function set(property, value) {
	    return this._attributesMap.set(property, value);
	  };
	
	  /**
	   * 删除属性
	   *
	   * @method delete
	   * @param property
	   * @return {boolean}
	   */
	
	
	  Feature.prototype.delete = function _delete(property) {
	    return this._attributesMap.delete(property);
	  };
	
	  /**
	   * 遍历属性
	   *
	   * @method forEachAttribute
	   * @param callback
	   */
	
	
	  Feature.prototype.forEachAttribute = function forEachAttribute(callback) {
	    this._attributesMap.forEach(callback);
	  };
	
	  /**
	   * 判断属性是否存在
	   *
	   * @method has
	   * @param property
	   * @return {Boolean}
	   */
	
	
	  Feature.prototype.has = function has(property) {
	    return this._attributesMap.has(property);
	  };
	
	  /**
	   * Geometry 读写器
	   *
	   * @property geometry
	   * @return {*}
	   */
	
	
	  /**
	   * 克隆map属性
	   *
	   * @method cloneAttributesMap
	   * @returns {Map}
	   */
	  Feature.prototype.cloneAttributesMap = function cloneAttributesMap() {
	    var newMap = new Map();
	    if (this._attributesMap.size !== 0) {
	      var entries = this._attributesMap.entries();
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _step$value = _slicedToArray(_step.value, 2),
	              key = _step$value[0],
	              value = _step$value[1];
	
	          if (key != '_originStyle') {
	            newMap.set(key, _obj2.default.deepClone(value));
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	
	    return newMap;
	  };
	
	  /**
	   * features 克隆方法
	   *
	   * @method clone
	   * @returns {Feature}
	   */
	
	
	  Feature.prototype.clone = function clone() {
	    var renderStyleArr = void 0;
	    if (this.style) {
	      var style = void 0;
	      if (Array.isArray(this.style)) {
	        // 不复制高亮的图形样式
	        if (this.style.length > 1) {
	          style = this.style[1].clone();
	        } else {
	          style = this.style[0].clone();
	        }
	      } else {
	        style = this.style.clone();
	      }
	
	      renderStyleArr = [style];
	    }
	
	    var newFeature = new Feature(this.geometry.clone(), this.cloneAttributesMap(), this.displayText, renderStyleArr);
	
	    return newFeature;
	  };
	
	  _createClass(Feature, [{
	    key: 'geometry',
	    get: function get() {
	      return this._geometry;
	    },
	    set: function set(value) {
	      if (value) {
	        this._geometry = value;
	
	        if (this._geometryChangeKey) {
	          (0, _eventmanager.unlistenByKey)(this._geometryChangeKey);
	        }
	
	        this._geometryChangeKey = (0, _eventmanager.listen)(value, _eventtype.EventType.CHANGE, this._handleGeometryChanged, this);
	      }
	    }
	
	    /**
	     * 缺省样式读写器
	     *
	     * @property styleFunction
	     * @return {*}
	     */
	
	  }, {
	    key: 'styleFunction',
	    get: function get() {
	      return this._styleFunction;
	    },
	    set: function set(value) {
	      this._styleFunction = value;
	    }
	
	    /**
	     * 样式读写器
	     *
	     * @property style
	     * @return {*}
	     */
	
	  }, {
	    key: 'style',
	    get: function get() {
	      return this._style;
	    },
	    set: function set(value) {
	      this._style = value;
	    }
	
	    /**
	     * feature标题读写器
	     *
	     * @property text
	     * @return {*}
	     */
	
	  }, {
	    key: 'displayText',
	    get: function get() {
	      return this._displayText;
	    },
	    set: function set(value) {
	      this._displayText = value;
	      this.changed();
	    }
	
	    /**
	     * 样式高亮读写器
	     *
	     * @property styleHighLight
	     * @returns {*}
	     */
	
	  }, {
	    key: 'styleHighLight',
	    get: function get() {
	      return this._styleHighLight;
	    },
	    set: function set(value) {
	      if (this._styleHighLight === value) {
	        return;
	      }
	
	      this._styleHighLight = value;
	
	      if (this.style === undefined) {
	        return;
	      }
	
	      var white = [255, 255, 255];
	      var newStyles = [];
	
	      for (var i = 0, len = this.style.length; i < len; i++) {
	        var s = this.style[i];
	        newStyles.push(s.clone());
	      }
	
	      // @TODO 
	      /**
	       * 1._originStyle缺省字段的旧样式缓存方式，带来了很多的负面影响，
	       * 代码耦合依赖较强
	       * 
	       * 2.样式定义方式应该脱离图形类型，分为stroke和fill样式，这点可
	       * 借鉴openlayer方式，需要重新定义样式数据结构
	       * 
	       */
	      if (this._styleHighLight) {
	        this.set('_originStyle', this.style);
	        var firstStyle = null;
	        var cloneStyle = null;
	
	        var geometryType = this.geometry.geometryType;
	        switch (geometryType) {
	          case _geometry2.default.LINE:
	            firstStyle = newStyles[0];
	            firstStyle.width = firstStyle.width + 1;
	
	            cloneStyle = firstStyle.clone();
	            cloneStyle.width = cloneStyle.width + 1;
	            cloneStyle.color = white;
	
	            newStyles.unshift(cloneStyle);
	            break;
	          case _geometry2.default.EXTENT:
	          case _geometry2.default.POLYGON:
	          case _geometry2.default.MULTI_POLYGON:
	          case _geometry2.default.PARALLELOGRAM:
	          case _geometry2.default.ROTATABLE_EXTENT:
	            firstStyle = newStyles[0];
	            firstStyle.borderStyle.width = firstStyle.borderStyle.width + 1;
	
	            cloneStyle = firstStyle.clone();
	            cloneStyle.alpha = 0;
	            cloneStyle.borderStyle.width = firstStyle.borderStyle.width + 1;
	            cloneStyle.borderStyle.color = white;
	            cloneStyle.borderStyle.lineCap = _linestyle2.default.LineCap.ROUND;
	            cloneStyle.borderStyle.lineJion = _linestyle2.default.LineJion.ROUND;
	
	            newStyles.unshift(cloneStyle);
	            break;
	          case _geometry2.default.POINT:
	            firstStyle = newStyles[0];
	            firstStyle.size = firstStyle.size + 3;
	            firstStyle.borderStyle.width = firstStyle.borderStyle.width + 1;
	            break;
	        }
	
	        var textStyle = newStyles[0].textStyle.clone();
	        // textStyle.font = 'bold 12px Arial'
	        var oriFont = textStyle.font;
	        var boldFont = 'bold ' + oriFont.split(' ')[1] + ' Arial';
	        textStyle.font = boldFont;
	
	        newStyles[0].textStyle = textStyle;
	
	        this.style = newStyles;
	      } else {
	        if (this.get('_originStyle')) {
	          this.style = this.get('_originStyle');
	          this.delete('_originStyle');
	        }
	      }
	
	      this.changed();
	    }
	
	    /**
	     * 设置图层的透明度
	     *
	     * 将会触发map的重绘事件
	     *
	     * @method display
	     * @param value
	     */
	
	  }, {
	    key: 'display',
	    get: function get() {
	      return this._display;
	    },
	    set: function set(value) {
	      if (this._display !== value) {
	        this._display = value;
	        // 需要触动绘制事件派发
	        this.changed();
	
	        // 可视化发生改变，引起事件派发
	        this.dispatchEvent(new _featureevent2.default(_featureevent2.default.EventType.FEATURE_VISIBLE_CHANGED, this));
	      }
	    }
	
	    /**
	     * 设置标签是否显示
	     *
	     * 将会触发map的重绘事件
	     *
	     * @method textDisplay
	     * @param value
	     */
	
	  }, {
	    key: 'textDisplay',
	    get: function get() {
	      return this._textDisplay;
	    },
	    set: function set(value) {
	      if (this._textDisplay !== value) {
	        this._textDisplay = value;
	        // 需要触动绘制事件派发
	        this.changed();
	      }
	    }
	  }]);
	
	  return Feature;
	}(_baseobject2.default);
	
	exports.default = Feature;
	module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseevent = __webpack_require__(35);
	
	var _baseevent2 = _interopRequireDefault(_baseevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The DrawEvent will emitted while geometrys on drawing end.
	 *
	 * 绘制结束时，DrawEvent将会被派发
	 *
	 *
	 * @class drawevent
	 * @extends BaseObject
	 * @module component
	 *
	 *
	 */
	var DrawEvent = function (_BaseEvent) {
	  _inherits(DrawEvent, _BaseEvent);
	
	  /**
	   * @constructor
	   * @param type
	   * @param feature
	   */
	  function DrawEvent(type, feature) {
	    _classCallCheck(this, DrawEvent);
	
	    /**
	     * The feature being drawn
	     */
	    var _this = _possibleConstructorReturn(this, _BaseEvent.call(this, type));
	
	    _this.feature = feature;
	    return _this;
	  }
	
	  return DrawEvent;
	}(_baseevent2.default);
	
	/**
	 * 定义绘制工具的事件类型
	 *
	 * @type {{DRAW_START: string, DRAW_END: string}}
	 */
	
	
	exports.default = DrawEvent;
	DrawEvent.EventType = {
	  /**
	   * Triggered upon feature draw start
	   */
	  DRAW_START: 'drawstart',
	
	  /**
	   * Triggered upon feature on drawing
	   * @type {String}
	   */
	  DRAWING: 'drawing',
	
	  /**
	   * Triggered upon feature draw end
	   */
	  DRAW_END: 'drawend'
	};
	module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCollisionFeaturesByPoint = getCollisionFeaturesByPoint;
	
	var _extentutil = __webpack_require__(13);
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	   * get collision features by given point
	   * TODO 将来需要优化计算视图范围内的图形
	   *
	   * getCollisionFeaturesByPoint
	   * @param geometry {Array}
	   * @param pixelCoordinate {Array}
	   * @param tolarance {Number}
	   * @returns {Array}
	   * @private
	   */
	function getCollisionFeaturesByPoint(features, pixelCoordinate, tolarance) {
	  var result = [];
	  var _ExtentUtil = _extentutil.ExtentUtil;
	
	  // 可视图形
	  features = features.filter(function (f) {
	    return f.display;
	  });
	
	  // loop the passed features
	  features.forEach(function (feature) {
	    var geometry = feature.geometry;
	
	    // build an extent from the passed geometry with tolarance
	    var gometryExtent = geometry.extent;
	    var bufferExtent = _ExtentUtil.buffer([gometryExtent.xmin, gometryExtent.ymin, gometryExtent.xmax, gometryExtent.ymax], tolarance);
	
	    // Exclude the moved point
	    if (_ExtentUtil.containsPoint(bufferExtent, pixelCoordinate)) {
	      // Calculte if the moved point has insected a geometry
	      var geometryType = geometry.geometryType;
	      switch (geometryType) {
	        case _geometry2.default.POINT:
	          var points = geometry.getCoordinates();
	          var dist = distance(points, pixelCoordinate);
	          if (dist <= tolarance) {
	            result.push({
	              feature: feature,
	              geometry: geometry,
	              segment: [points, points],
	              index: 0
	            });
	          }
	          break;
	        case _geometry2.default.POLYGON:
	        case _geometry2.default.PARALLELOGRAM:
	        case _geometry2.default.ROTATABLE_EXTENT:
	          var coords = geometry.getCoordinates();
	          coords.forEach(function (coordinates, ringIndex) {
	            for (var j = 0, jj = coordinates.length - 1; j < jj; j++) {
	              var _points = coordinates[j];
	              var nextPoints = coordinates[j + 1];
	
	              var pathExtent = _ExtentUtil.boundingExtentFromTwoPoints(_points, nextPoints);
	              var pathBufferExtent = _ExtentUtil.buffer(pathExtent, tolarance);
	
	              if (_extentutil.ExtentUtil.containsPoint(pathBufferExtent, pixelCoordinate)) {
	                var segment = [_points, nextPoints];
	                result.push({
	                  feature: feature,
	                  geometry: geometry,
	                  segment: segment,
	                  index: j,
	                  ringIndex: ringIndex
	                });
	              }
	            }
	          });
	          break;
	        case _geometry2.default.MULTI_POLYGON:
	          var allCoords = geometry.getCoordinates();
	          allCoords.forEach(function (coords, polygonIndex) {
	            coords.forEach(function (coordinates, ringIndex) {
	              for (var j = 0, jj = coordinates.length - 1; j < jj; j++) {
	                var _points2 = coordinates[j];
	                var nextPoints = coordinates[j + 1];
	
	                var pathExtent = _ExtentUtil.boundingExtentFromTwoPoints(_points2, nextPoints);
	                var pathBufferExtent = _ExtentUtil.buffer(pathExtent, tolarance);
	
	                if (_extentutil.ExtentUtil.containsPoint(pathBufferExtent, pixelCoordinate)) {
	                  var segment = [_points2, nextPoints];
	                  result.push({
	                    feature: feature,
	                    geometry: geometry,
	                    segment: segment,
	                    polygonIndex: polygonIndex,
	                    index: j,
	                    ringIndex: ringIndex
	                  });
	                }
	              }
	            });
	          });
	          break;
	        case _geometry2.default.EXTENT:
	        case _geometry2.default.LINE:
	          var coordinates = geometry.getCoordinates();
	
	          for (var j = 0, jj = coordinates.length - 1; j < jj; j++) {
	            var _points3 = coordinates[j];
	            var nextPoints = coordinates[j + 1];
	
	            var pathExtent = _ExtentUtil.boundingExtentFromTwoPoints(_points3, nextPoints);
	            var pathBufferExtent = _ExtentUtil.buffer(pathExtent, tolarance);
	
	            if (_extentutil.ExtentUtil.containsPoint(pathBufferExtent, pixelCoordinate)) {
	              var segment = [_points3, nextPoints];
	              result.push({
	                feature: feature,
	                geometry: geometry,
	                segment: segment,
	                index: j
	              });
	            }
	          }
	          break;
	        default:
	          break;
	      }
	    }
	  });
	
	  return result;
	}
	
	exports.default = {
	  getCollisionFeaturesByPoint: getCollisionFeaturesByPoint
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _featurelayer = __webpack_require__(38);
	
	var _featurelayer2 = _interopRequireDefault(_featurelayer);
	
	var _eventmanager = __webpack_require__(21);
	
	var _eventtype = __webpack_require__(12);
	
	var _style = __webpack_require__(15);
	
	var _selectevent = __webpack_require__(50);
	
	var _selectevent2 = _interopRequireDefault(_selectevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var hasMutilSelectedSymbol = Symbol('hasmutilselected');
	
	/**
	 * 图形选择模式
	 *
	 * @class Select
	 * @extends Component
	 * @module component
	 * @constructor
	 * @example
	 *
	 *      // 实例化选择工具
	 *      selectTool = new mk.Select({
	 *       selectMode: mk.BrowserEvent.CLICK,
	 *       selectMultiMode: selectMultiMode
	 *      });
	 *
	 *
	 */
	
	var Select = function (_Component) {
	  _inherits(Select, _Component);
	
	  /**
	   * 构造函数
	   *
	   * @constructor constructor
	   * @param options
	   */
	
	  function Select() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Select);
	
	    /**
	     * 当前鼠标点与图形之间的公差距离，小于该值则可已选中图形
	     *
	     * @property hitTolerance
	     * @type {number}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this._hitTolerance = options.hitTolerance ? options.hitTolerance : 8;
	
	    /**
	     * 选择图层是否配置了样式
	     *
	     * @type {boolean}
	     * @private
	       */
	    _this._hasSelectedStyle = false;
	
	    /**
	     * 多选模式，默认为false
	     *
	     * @property multiSelectMode
	     * @type {boolean}
	     * @private
	     */
	    _this._multiSelectMode = false;
	
	    /**
	     * 初始化草稿图层，用于临时高亮显示选中的图形
	     *
	     * @property selectLayer
	     * @type {FeatureLayer}
	     * @private
	     */
	    _this._selectLayer = new _featurelayer2.default();
	
	    if (options.style) {
	      _this._selectLayer.style = options.style;
	      _this._hasSelectedStyle = true;
	    } else {
	      _this._hasSelectedStyle = false;
	    }
	    /**
	     * 选中图形的feature集合
	     *
	     * @property selectFeatures
	     * @type {Array}
	     * @private
	     */
	    _this._selectFeatures = [];
	
	    /**
	     * 选中的模式，默认为单击选中
	     *
	     * @property selectMode
	     * @type {string}
	     */
	    _this.selectMode = options.selectMode ? options.selectMode : _browserevent2.default.CLICK;
	
	    _this._selectMultiMode = options.selectMultiMode ? options.selectMultiMode : function () {
	      return true;
	    };
	
	    /**
	     * listen Ctrl key envet
	     */
	    if (options.selectMultiMode) {
	      (0, _eventmanager.listen)(document, 'keydown', _this._handleCtrlKeyDwon, _this);
	    }
	    if (options.selectMultiMode) {
	      (0, _eventmanager.listen)(document, 'keyup', _this._handleCtrlKeyUp, _this);
	    }
	
	    return _this;
	  }
	
	  Select.prototype._condition = function _condition(event) {
	    return this.selectMode === event.type;
	  };
	
	  Select.prototype._keyPress = function _keyPress() {};
	
	  /**
	   * handle Ctrl key down event
	   *
	   * 处理Ctrt键按下事件
	   *
	   * handleCtrlKeyDwon
	   * @param event
	   * @private
	   */
	
	
	  Select.prototype._handleCtrlKeyDwon = function _handleCtrlKeyDwon(event) {
	    if (this._selectMultiMode(event)) {
	      this._multiSelectMode = true;
	    }
	  };
	
	  /**
	   * handle Ctrl key up event
	   *
	   * 处理Ctrl键弹起事件
	   *
	   * @param event
	   * @private
	   */
	
	
	  Select.prototype._handleCtrlKeyUp = function _handleCtrlKeyUp(event) {
	    // Ctrl button down
	    if (this._selectMultiMode(event)) {
	      this._multiSelectMode = false;
	    }
	  };
	
	  /**
	   * Handler mouse event
	   *
	   * 处理鼠标事件
	   * handleMouseEvent
	   * @method
	   * @param browserEvent {browserEvent}
	   */
	
	
	  Select.prototype.handleMouseEvent = function handleMouseEvent(browserEvent) {
	    var _this2 = this;
	
	    if (!this._condition(browserEvent)) {
	      return true;
	    }
	
	    var map = browserEvent.map;
	    var pixel = browserEvent.pixel;
	    var hitTolerance = this._hitTolerance;
	
	    if (!this._multiSelectMode) {
	      this.clear();
	    }
	
	    map.forEachFeatureAtPiexl(pixel, function (features) {
	      if (features.length > 0) {
	        // 赋值并填充到selectFeatures中
	        _this2.selectFeatures = features;
	      }
	    }, hitTolerance);
	
	    if (this.selectFeatures.length > 0) {
	      this._forEachStyle();
	      // this._watchFeatures()
	      this._selectLayer.addFeatures(this.selectFeatures);
	    }
	
	    // 派发要素的选择事件
	    this.dispatchEvent(new _selectevent2.default(_selectevent2.default.EventType.SELECT, this.selectFeatures, browserEvent));
	  };
	
	  /**
	   * 清空选择的集合
	   *
	   * @method clear
	   */
	
	
	  Select.prototype.clear = function clear() {
	    this._selectLayer.clear();
	
	    this.selectFeatures.forEach(function (feature) {
	      feature.styleHighLight = false;
	      feature.delete(hasMutilSelectedSymbol);
	    });
	
	    this.selectFeatures = [];
	  };
	
	  /**
	   * 当前选中feature的集合的读写器
	   *
	   * @property selectFeatures
	   * @type {Array}
	   */
	
	
	  /**
	   * 判断当前选中的集合中是否包含指定的feature
	   *
	   * @param feature
	   * @returns {Boolean}
	   * @private
	   */
	  Select.prototype._isInSelectFeatures = function _isInSelectFeatures(feature) {
	    var features = this.selectFeatures;
	    var result = features.find(function (f) {
	      return f.id === feature.id;
	    });
	
	    return result === undefined ? false : true;
	  };
	
	  /**
	   * Update the drawing state for aborting drawing if active is false
	   *
	   * updateState
	   * @private
	   */
	
	
	  Select.prototype._updateState = function _updateState() {
	    var map = this.map;
	    var active = this.active;
	    if (!map || !active) {
	      // this._abortDrawing()
	    }
	
	    map.addLayer(this._selectLayer);
	  };
	
	  Select.prototype._watchFeatures = function _watchFeatures() {}
	  // const features = this.selectFeatures
	
	
	  /**
	   * 高亮显示选中图形
	   *
	   * @method forEachStyle
	   * @private
	   */
	  ;
	
	  Select.prototype._forEachStyle = function _forEachStyle() {
	    if (this._hasSelectedStyle) {
	      return;
	    }
	
	    var features = this.selectFeatures;
	    features.forEach(function (feature) {
	      if (!feature.get(hasMutilSelectedSymbol)) {
	        feature.styleHighLight = true;
	        feature.set(hasMutilSelectedSymbol, true);
	      }
	    });
	  };
	
	  /**
	   * map读写器, 读取设置当前map
	   *
	   * @type {Function}
	   * @property map
	   * @param map {Object} mk.map
	   */
	
	
	  /**
	   * 获取默认编辑样式
	   *
	   * @method getDefaultStyleFunction
	   * @returns {Function}
	   */
	  Select.prototype.getDefaultStyleFunction = function getDefaultStyleFunction() {
	    var styles = _style.Style.createDefaultEditing();
	    return function (feature) {
	      return styles[feature.geometry.geometryType];
	    };
	  };
	
	  _createClass(Select, [{
	    key: 'selectFeatures',
	    get: function get() {
	      return this._selectFeatures;
	    },
	    set: function set(features) {
	      var _this3 = this;
	
	      if (features.length === 0) {
	        this._selectFeatures = [];
	      } else {
	        features.forEach(function (feature) {
	          // 去掉重复的
	          if (!_this3._isInSelectFeatures(feature)) {
	            _this3._selectFeatures.push(feature);
	          }
	        });
	      }
	    }
	  }, {
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(map) {
	      if (this._mapRenderKey) {
	        (0, _eventmanager.unlistenByKey)(this._mapRenderKey);
	        this._mapRenderKey = null;
	      }
	
	      if (map) {
	        this._map = map;
	        this._mapRenderKey = (0, _eventmanager.listen)(this, _eventtype.EventType.CHANGE, map.render, map);
	      }
	
	      this._updateState();
	    }
	
	    /**
	     * 选择方式读写器
	     *
	     * @property selectMode
	     * @type {Object} mk.BrowserEvent.CLICK
	     * @return {*}
	     */
	
	  }, {
	    key: 'selectMode',
	    get: function get() {
	      return this._selectMode;
	    },
	    set: function set(value) {
	      if (this._selectMode !== value) {
	        this._selectMode = value;
	        this.clear();
	      }
	    }
	  }]);
	
	  return Select;
	}(_component2.default);
	
	exports.default = Select;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseevent = __webpack_require__(35);
	
	var _baseevent2 = _interopRequireDefault(_baseevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 选择结束时，SelectEvent将会被派发
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class selectevent
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends BaseObject
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module component
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var SelectEvent = function (_BaseEvent) {
	  _inherits(SelectEvent, _BaseEvent);
	
	  function SelectEvent(type, features, event) {
	    _classCallCheck(this, SelectEvent);
	
	    /**
	     * The feature being selected
	     */
	    var _this = _possibleConstructorReturn(this, _BaseEvent.call(this, type));
	
	    _this.selectedFeatures = features;
	
	    /**
	     *
	     */
	    _this.browserEvent = event;
	    return _this;
	  }
	
	  return SelectEvent;
	}(_baseevent2.default);
	
	/**
	 * The select event
	 * @type {{SELECT: string}}
	 */
	
	
	exports.default = SelectEvent;
	SelectEvent.EventType = {
	  /**
	   * Triggered upon features select
	   * @api stable
	   */
	  SELECT: 'select'
	
	};
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _point = __webpack_require__(23);
	
	var _point2 = _interopRequireDefault(_point);
	
	var _line = __webpack_require__(24);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _parallelogram = __webpack_require__(30);
	
	var _parallelogram2 = _interopRequireDefault(_parallelogram);
	
	var _rotatableextent = __webpack_require__(31);
	
	var _rotatableextent2 = _interopRequireDefault(_rotatableextent);
	
	var _modifyevent = __webpack_require__(52);
	
	var _modifyevent2 = _interopRequireDefault(_modifyevent);
	
	var _feature = __webpack_require__(46);
	
	var _feature2 = _interopRequireDefault(_feature);
	
	var _featureevent = __webpack_require__(40);
	
	var _featureevent2 = _interopRequireDefault(_featureevent);
	
	var _featurelayer = __webpack_require__(38);
	
	var _featurelayer2 = _interopRequireDefault(_featurelayer);
	
	var _linestyle = __webpack_require__(19);
	
	var _linestyle2 = _interopRequireDefault(_linestyle);
	
	var _pointstyle = __webpack_require__(20);
	
	var _pointstyle2 = _interopRequireDefault(_pointstyle);
	
	var _style = __webpack_require__(15);
	
	var _eventtype = __webpack_require__(12);
	
	var _extentutil = __webpack_require__(13);
	
	var _eventmanager = __webpack_require__(21);
	
	var _geometryutil = __webpack_require__(8);
	
	var _feature3 = __webpack_require__(48);
	
	var _mousekey = __webpack_require__(53);
	
	var _functions = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 编辑模式，启动后可以编辑图形
	 *
	 * @class Modify
	 * @extends Component
	 * @module component
	 * @constructor
	 * @example
	 *
	 *      // 实例化编辑工具
	 *      var modifyTool = new mk.Modify({
	 *        features: selectedFeaturs
	 *      })
	 */
	var Modify = function (_Component) {
	  _inherits(Modify, _Component);
	
	  /**
	   * 构造函数
	   *
	   * @constructor constructor
	   * @param options
	   */
	  function Modify() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Modify);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, options));
	
	    _this.applyHandleEventOption({
	      handleDownEvent: _this._handleDownEvent,
	      handleDragEvent: _this._handleDragEvent,
	      handleUpEvent: _this._handleUpEvent
	    });
	
	    /**
	     * 可以编辑的feature集合
	     *
	     * @property features
	     * @type {Array}
	     * @private
	     */
	    _this._features = [];
	
	    /**
	     * 当前鼠标点与图形之间的公差距离，小于该值后立即捕捉标注数据
	     *
	     * @property pixelTolerance
	     * @type {number}
	     * @private
	     */
	    _this._pixelTolerance = options.pixelTolerance ? options.pixelTolerance : 8;
	
	    /**
	     * 指定可以允许平移的图形，默认‘矩形框’
	     *
	     * @property movableGeometrys
	     * @type {[*]}
	     * @private
	     */
	    _this._movableGeometrys = options.movableGeometrys ? options.movableGeometrys : [_geometry2.default.EXTENT, _geometry2.default.ROTATABLE_EXTENT, _geometry2.default.POINT];
	
	    /**
	     * 记录当前是否有可允许平移的图形开关
	     * hasMoveableGeometrys
	     * @type {boolean}
	     * @private
	     */
	    _this._hasMoveableGeometrys = true;
	
	    var movableGeometrys = _this._movableGeometrys;
	    if (movableGeometrys === null || movableGeometrys === undefined) {
	      _this._hasMoveableGeometrys = false;
	    }
	
	    if (Array.isArray(movableGeometrys)) {
	      if (movableGeometrys.length === 0) {
	        _this._hasMoveableGeometrys = false;
	      }
	    }
	
	    /**
	     *
	     * @type {Set}
	     * @private
	     */
	    _this.movableGeometrySet;
	
	    if (_this._hasMoveableGeometrys) {
	      _this.movableGeometrySet = new Set(_this._movableGeometrys);
	    }
	
	    /**
	     * @private
	     */
	    _this._deleteCondition = options.deleteCondition ? options.deleteCondition : _this._defaultDeleteCondition;
	
	    /**
	     * 允许顶点编辑的条件方法，默认可编辑
	     * @private
	     */
	    _this._vertexEditableCondition = options.vertexEditableCondition ? options.vertexEditableCondition : _functions.functions.TURE;
	
	    /**
	     * 允许边编辑的条件方法，默认可编辑
	     * @private
	     */
	    _this._edgeEditableCondition = options.edgeEditableCondition ? options.edgeEditableCondition : _functions.functions.TURE;
	
	    /**
	     * Determine if should snap to vertexs of gemetry
	     *
	     * snappedToVertex
	     * @type {boolean}
	     * @private
	     */
	    _this._snappedToVertex = false;
	
	    // snap配置解析
	    var snapOptions = options.snapOptions || {};
	
	    /**
	     * Detemene if should snap to other geometry
	     * @type {boolean}
	     * @provate
	     */
	    _this._snapToOthers = snapOptions.snapToOthers ? snapOptions.snapToOthers : false;
	
	    /**
	     * 持有features图层
	     */
	    _this._featureLayer = snapOptions.featureLayer ? snapOptions.featureLayer : null;
	
	    /**
	     * 存储待编辑的数据
	     * @snapSegments
	     * @type {null}
	     * @private
	     */
	    _this._snapSegments = null;
	
	    /**
	     * @vertexFeature
	     * @type {null}
	     * @private
	     */
	    _this._vertexFeature = null;
	
	    /**
	     * 旋转编辑的锚点
	     */
	    _this._anchorFeature = null;
	
	    /**
	     * 旋转锚点的样式
	     */
	    _this._anchorPointStyle = new _pointstyle2.default(14, [255, 255, 255], 0.9, new _linestyle2.default([255, 0, 0], 1, 2));
	
	    /**
	     * 旋转编辑的图形对象
	     */
	    _this._rotatableFeature = null;
	
	    /**
	     * 记录当前一次正在旋转的图形对象
	     */
	    _this._rotatingFeature = null;
	
	    /**
	     * 旋转编辑辅助线（中心点-鼠标点）
	     */
	    _this._rotatableLine = null;
	
	    /**
	     * 辅助线样式，红色
	     */
	    _this._rotatableLineStyle = new _linestyle2.default([255, 0, 0], 1, 1);
	
	    /**
	     * 记录上次旋转的点
	     */
	    _this._lastRotatablePoint = null;
	
	    /**
	     * The editable features
	     *
	     * 设置需要编辑图形的集合，
	     * 如果图形不允许编辑，请从该集合移除
	     *
	     * @property features
	     * @type {[]}
	     */
	    _this.features = options.features || [];
	
	    /**
	     *
	     * @type {[*]}
	     * @private
	     */
	    _this._lastPixel = [0, 0];
	
	    /**
	     * 初始化草稿图层，用于临时高亮显示编辑的图形
	     *
	     * @property overLayer
	     * @type {FeatureLayer}
	     * @private
	     */
	    _this._overLayer = new _featurelayer2.default({
	      style: options.style ? options.style : _this.getDefaultStyleFunction(),
	      zIndex: 1000
	    });
	
	    _this.active = true;
	
	    _this._dragSegments = [];
	
	    /**
	     * 图形是否修改过，默认为false
	     *
	     * modified
	     * @type {boolean}
	     * @private
	     */
	    _this._modified = false;
	
	    /**
	     * changingFeature
	     * @type {boolean}
	     * @private
	     */
	    _this._changingFeature = true;
	
	    /**
	     * Tracks if the next `singleclick` event should be ignored to prevent
	     * accidental deletion right after vertex creation.
	     *
	     * ignoreNextSingleClick
	     * @type {boolean}
	     * @private
	     */
	    _this._ignoreNextSingleClick = false;
	
	    /**
	     * shouldAddToVertexs
	     * @type {boolean}
	     * @private
	     */
	    _this._shouldAddToVertexs = false;
	
	    /**
	     * insertVertices
	     * @type {Array}
	     * @private
	     */
	    _this._insertVertices = [];
	
	    /**
	     * Keep the mouse-down point
	     *
	     * downPoint
	     * @type {null}
	     * @private
	     */
	    _this._downPoint = null;
	
	    /**
	     * Keep the current moved geometry
	     *
	     * currentMovedGeometry
	     * @type {null}
	     * @private
	     */
	    _this._currentMovedFeature = null;
	
	    /**
	     * 记录上一次被编辑的点
	     * 一般指的是在边上的捕捉点或者顶点本身
	     * 只是用于平行四边形的编辑使用
	     * @type {null}
	     * @private
	     */
	    _this._oldEditedVertex = null;
	
	    _this._mapViewChangedKey = null;
	    _this._mapRenderKey = null;
	
	    _this._featuresEventKeys = [];
	    return _this;
	  }
	
	  /**
	   * feature的读写器，读取设置当前的feature
	   *
	   * @property features
	   * @returns {Object} feature
	   */
	
	
	  Modify.prototype._initAnthorPointForRotatableGeometry = function _initAnthorPointForRotatableGeometry(features) {
	    if (features === null || features === undefined) {
	      return;
	    }
	
	    if (!Array.isArray(features)) {
	      return;
	    }
	
	    if (features.length === 0) {
	      return;
	    }
	
	    var feature = features[0];
	    var geometry = feature.geometry;
	
	    if (!geometry.rotable) {
	      return;
	    }
	
	    this._rotatableFeature = feature;
	
	    var anthor = geometry.getAnchorForRotating(this.map);
	    this._anchorFeature = new _feature2.default(new _point2.default(anthor[0], anthor[1]));
	    this._anchorFeature.style = [this._anchorPointStyle];
	
	    this._overLayer.addFeature(this._anchorFeature);
	  };
	
	  /**
	   * Handle the mouse events emitted from map.
	   *
	   * 处理鼠标事件
	   *
	   * handleMouseEvent
	   * @param browserEvent
	   * @returns {boolean}
	   */
	
	
	  Modify.prototype.handleMouseEvent = function handleMouseEvent(browserEvent) {
	    if (!(browserEvent instanceof _browserevent2.default)) {
	      return true;
	    }
	
	    browserEvent.coordinate = this.coordinateBeyond(browserEvent.coordinate);
	    this.lastPointerEvent_ = browserEvent;
	
	    var handled = false;
	    if (browserEvent.type == _browserevent2.default.MOUSE_MOVE && !this.handlingDownUpSequence) {
	      this._handlePointerMove(browserEvent);
	    }
	
	    if (this._vertexFeature && this._deleteCondition(browserEvent)) {
	      if (browserEvent.type !== _browserevent2.default.SINGLE_CLICK || !this._ignoreNextSingleClick) {
	        handled = this.removePoint();
	      } else {
	        handled = true;
	      }
	    }
	
	    if (browserEvent.type == _browserevent2.default.SINGLE_CLICK) {
	      this._ignoreNextSingleClick = false;
	    }
	
	    return _Component.prototype.handleMouseEvent.call(this, browserEvent) && !handled;
	  };
	
	  /**
	   * Removes the vertex currently being pointed.
	   *
	   * removePoint
	   * @return {boolean} True when a vertex was removed.
	   * @api
	   */
	
	
	  Modify.prototype.removePoint = function removePoint() {
	    if (this._lastPointerEvent && this._lastPointerEvent.type != _browserevent2.default.MOUSE_DRAG) {
	      var evt = this.lastPointerEvent_;
	      this.willModifyFeatures_(evt);
	      this._removeVertex();
	
	      this.dispatchEvent(new _modifyevent2.default(_modifyevent2.default.EventType.MODIFY_END, this.features, evt));
	      this._modified = false;
	      return true;
	    }
	
	    return false;
	  };
	
	  /**
	   * compareIndexes
	   * @param a
	   * @param b
	   * @returns {number}
	   * @private
	   */
	
	
	  Modify.prototype._compareIndexes = function _compareIndexes(a, b) {
	    return a.index - b.index;
	  };
	
	  /**
	   * willModifyFeatures
	   * @param event
	   * @private
	   */
	
	
	  Modify.prototype._willModifyFeatures = function _willModifyFeatures(event) {
	    if (!this._modified) {
	      this._modified = true;
	      this.dispatchEvent(new _modifyevent2.default(_modifyevent2.default.EventType.MODIFY_START, this.features, event));
	    }
	  };
	
	  /**
	   * Handle poiner mouse down event
	   *
	   * handleDownEvent
	   * @param evt {Event}
	   * @private
	   */
	
	
	  Modify.prototype._handleDownEvent = function _handleDownEvent(evt) {
	    var _this2 = this;
	
	    this._downPoint = evt.coordinate;
	    this._dragSegments.length = 0;
	    this._modified = false;
	    var coordinate = evt.coordinate;
	
	    var rotatingFeature = this._rotatingFeature;
	    if (rotatingFeature) {
	      return !!rotatingFeature;
	    }
	
	    var vertexFeature = this._vertexFeature;
	    if (vertexFeature) {
	      var insertVertices = [this._snapSegments];
	      this._shouldAddToVertexs = true;
	      this._insertVertices = insertVertices;
	
	      return !!this._vertexFeature;
	    }
	    // Move the selected geometry
	    else {
	        if (!this._hasMoveableGeometrys) {
	          return;
	        }
	
	        var filters = this.features.filter(function (feature) {
	          var geometry = feature.geometry;
	          return feature.display && _this2.movableGeometrySet.has(geometry.geometryType) && geometry.containsXY(coordinate[0], coordinate[1]);
	        });
	
	        // We get the first filter geometry to move
	        // Otherwise, you should reselect
	        if (filters.length > 0) {
	          this._currentMovedFeature = filters[0];
	          return true;
	        }
	
	        return false;
	      }
	  };
	
	  /**
	   * Handle pointer move event
	   *
	   * 处理点移动事件
	   *
	   * handlePointerMove
	   * @param evt {Event}
	   * @private
	   */
	
	
	  Modify.prototype._handlePointerMove = function _handlePointerMove(evt) {
	    this._lastPixel = evt.pixel;
	    this._handlePointerAtPixel(evt.pixel, evt.map);
	  };
	
	  /**
	   * @param pixel {Array}
	   * @param map {map}
	   * @private
	   */
	
	
	  Modify.prototype._handlePointerAtPixel = function _handlePointerAtPixel(pixel, map) {
	    var _this3 = this;
	
	    this._snapSegments = null;
	    if (this.features.length === 0) {
	      return;
	    }
	
	    var pixelCoordinate = map.getCoordinateFromPixel(pixel);
	
	    // 是否选中了旋转图形的锚点
	    var rotatableGeometry = this._getRotatableGeometry(this.features, pixelCoordinate, 7);
	    if (rotatableGeometry) {
	      return;
	    }
	
	    // 与当前屏幕内图形做碰撞检测
	    var nodes = (0, _feature3.getCollisionFeaturesByPoint)(this.features, pixelCoordinate, this._pixelTolerance);
	
	    if (nodes.length > 0) {
	      var sortByDistance = function sortByDistance(s1, s2) {
	        var d1 = _this3._pointDistanceToSegment(pixelCoordinate, s1);
	        var d2 = _this3._pointDistanceToSegment(pixelCoordinate, s2);
	        return d1 - d2;
	      };
	
	      // 取最近的
	      nodes.sort(sortByDistance);
	      var node = nodes[0];
	
	      var geometry = node.geometry;
	      var geometryType = geometry.geometryType;
	      var closestSegment = node.segment;
	
	      // 计算鼠标点在线段上的投影点
	      var vertex = this._closestOnSegment(pixelCoordinate, node);
	      var vertexPixel = map.getPixelFromCoordinate(vertex);
	
	      // 判断当前是否选中了边
	      var dist = (0, _geometryutil.distance)(pixel, vertexPixel);
	      if (dist <= this._pixelTolerance) {
	        /**
	         *  已经选中了边
	         */
	        this._snapSegments = node;
	
	        var vertexEditable = false;
	
	        if (geometryType === _geometry2.default.CIRCLE && node.index === Modify.MODIFY_SEGMENT_CIRCLE_CIRCUMFERENCE_INDEX) {
	          this._snappedToVertex = true;
	        } else {
	
	          /**
	           * 再计算是否选中了线段的两个顶点
	           */
	
	          // 判断是否允许顶点可编辑
	          if (this._vertexEditableCondition(node)) {
	            var pixel1 = map.getPixelFromCoordinate(closestSegment[0]);
	            var pixel2 = map.getPixelFromCoordinate(closestSegment[1]);
	
	            var squaredDist1 = (0, _geometryutil.squaredDistance)(vertexPixel[0], vertexPixel[1], pixel1[0], pixel1[1]);
	            var squaredDist2 = (0, _geometryutil.squaredDistance)(vertexPixel[0], vertexPixel[1], pixel2[0], pixel2[1]);
	
	            dist = Math.sqrt(Math.min(squaredDist1, squaredDist2));
	
	            // 判断当前是否选中了顶点
	            this._snappedToVertex = dist <= this._pixelTolerance;
	            if (this._snappedToVertex) {
	              vertex = squaredDist1 > squaredDist2 ? closestSegment[1] : closestSegment[0];
	
	              var coordinateIndex = geometry.getCoordinateIndex(vertex);
	
	              switch (geometryType) {
	                case _geometry2.default.POLYGON:
	                case _geometry2.default.PARALLELOGRAM:
	                case _geometry2.default.ROTATABLE_EXTENT:
	                  this._snapSegments.index = coordinateIndex.index;
	                  this._snapSegments.ringIndex = coordinateIndex.ringIndex;
	                  break;
	                case _geometry2.default.MULTI_POLYGON:
	                  this._snapSegments.index = coordinateIndex.index;
	                  this._snapSegments.ringIndex = coordinateIndex.ringIndex;
	                  this._snapSegments.polygonIndex = coordinateIndex.polygonIndex;
	                  break;
	                default:
	                  this._snapSegments.index = coordinateIndex;
	                  break;
	              }
	
	              this._snapSegments.isVertex = true;
	              vertexEditable = true;
	            }
	          }
	
	          if (geometryType === _geometry2.default.PARALLELOGRAM) {
	            this._snapSegments.index = node.index;
	            this._snapSegments.ringIndex = node.ringIndex;
	          }
	        }
	
	        // 边可编辑，或者顶点可编辑
	        if (this._edgeEditableCondition(node) || vertexEditable) {
	          // draw the snapping point
	          this._createOrUpdateVertexFeature(vertex);
	        } else {
	          this._snapSegments = null;
	        }
	
	        return;
	      }
	    }
	
	    if (this._vertexFeature) {
	      this._overLayer.removeFeature(this._vertexFeature);
	      this._vertexFeature = null;
	    }
	  };
	
	  /**
	   * Handle mouse drag event.
	   *
	   * handleDragEvent
	   * @param evt {Event}
	   * @private
	   */
	
	
	  Modify.prototype._handleDragEvent = function _handleDragEvent(evt) {
	    var _this4 = this;
	
	    this._ignoreNextSingleClick = false;
	    var vertex = evt.coordinate; // 拖拽点
	
	    // 处理图形旋转
	    if (this._rotatingFeature) {
	      this._handleRotating(evt);
	      return;
	    }
	
	    // 插入顶点
	    if (this._shouldAddToVertexs) {
	      var vertexFeature = this._vertexFeature;
	      var vertexTemp = vertexFeature.geometry.getCoordinates();
	
	      var insertVertices = this._insertVertices;
	      for (var j = insertVertices.length - 1; j >= 0; --j) {
	        this._insertVertex(insertVertices[j], vertexTemp);
	      }
	
	      this._shouldAddToVertexs = false;
	    }
	
	    var dragSegments = this._dragSegments;
	    var len = dragSegments.length;
	    var geometry = null;
	
	    // snap点检测，如果有则使用snap点
	    var closeToVertex = this._calculateCloseToVertexOfOhters(evt.pixel);
	    if (closeToVertex != null) {
	      vertex = closeToVertex;
	    }
	
	    /**
	     * 1、顶点、边移动
	     * 2、图形整体平移
	     */
	
	    // 顶点/边移动 move the edge of selected geometry
	    if (len !== 0) {
	      this._willModifyFeatures(evt);
	
	      for (var i = 0; i < len; ++i) {
	        var dragSegment = dragSegments[i];
	        var segmentData = dragSegment[0];
	        var index = dragSegment.index;
	
	        var depth = segmentData.depth,
	            segment = segmentData.segment;
	
	        var coordinates = null;
	        geometry = segmentData.geometry;
	
	        switch (geometry.geometryType) {
	          case _geometry2.default.POINT:
	            coordinates = vertex;
	            segment[0] = segment[1] = vertex;
	            break;
	          case _geometry2.default.MULTI_POINT:
	            coordinates = geometry.getCoordinates();
	            coordinates[segmentData.index] = vertex;
	            segment[0] = segment[1] = vertex;
	            break;
	          case _geometry2.default.LINE:
	            coordinates = geometry.getCoordinates();
	            coordinates[segmentData.index] = vertex;
	            break;
	          case _geometry2.default.MULTI_LINE:
	            coordinates = geometry.getCoordinates();
	            coordinates[depth[0]][segmentData.index + index] = vertex;
	            segment[index] = vertex;
	            break;
	          case _geometry2.default.POLYGON:
	            coordinates = geometry.getCoordinates();
	            coordinates[segmentData.ringIndex][segmentData.index] = vertex;
	            if (segmentData.index === 0) {
	              coordinates[segmentData.ringIndex][coordinates[segmentData.ringIndex].length - 1] = vertex;
	            }
	            break;
	          case _geometry2.default.PARALLELOGRAM:
	            // 重新计算平行四边的各个顶点
	            coordinates = _parallelogram2.default.updateCoordinatesForModification(geometry, vertex, this._oldEditedVertex, dragSegment);
	            this._oldEditedVertex = vertex;
	            break;
	          case _geometry2.default.ROTATABLE_EXTENT:
	            // 计算顶点移动后，各个顶点的坐标值
	            coordinates = _rotatableextent2.default.updateCoordinatesForModification(geometry, vertex, this._oldEditedVertex, dragSegment);
	
	            var withoutView = coordinates[0].find(function (coor) {
	              return !_Component.prototype.checkIfCoordinateWithInMapView.call(_this4, coor);
	            });
	
	            if (withoutView) {
	              return;
	            }
	
	            this._oldEditedVertex = vertex;
	            break;
	          case _geometry2.default.EXTENT:
	            coordinates = _extentutil.ExtentUtil.updateExtent(geometry, vertex, dragSegment);
	            break;
	          case _geometry2.default.MULTI_POLYGON:
	            coordinates = geometry.getCoordinates();
	            coordinates[segmentData.polygonIndex][segmentData.ringIndex][segmentData.index] = vertex;
	
	            if (segmentData.index === 0) {
	              coordinates[segmentData.polygonIndex][segmentData.ringIndex][coordinates[segmentData.polygonIndex][segmentData.ringIndex].length - 1] = vertex;
	            }
	            break;
	          case _geometry2.default.CIRCLE:
	            segment[0] = segment[1] = vertex;
	            if (segmentData.index === Modify.MODIFY_SEGMENT_CIRCLE_CENTER_INDEX) {
	              this._changingFeature = true;
	              geometry.setCenter(vertex);
	              this._changingFeature = false;
	            } else {
	              // We're dragging the circle's circumference:
	              this._changingFeature = true;
	              geometry.setRadius((0, _geometryutil.distance)(geometry.getCenter(), vertex));
	              this._changingFeature = false;
	            }
	            break;
	          default:
	          // pass
	        }
	
	        if (coordinates) {
	          this._setGeometryCoordinates(geometry, coordinates);
	        }
	      }
	
	      this._createOrUpdateVertexFeature(vertex);
	    }
	    // 平移图形 move the whole selected geometry
	    else if (this._currentMovedFeature) {
	        var downPoint = this._downPoint;
	        var dx = vertex[0] - downPoint[0];
	        var dy = vertex[1] - downPoint[1];
	
	        geometry = this._currentMovedFeature.geometry;
	        geometry.move(dx, dy, {
	          beyond: {
	            xmin: 0,
	            ymin: 0,
	            xmax: this.map.view.dataExtent[2],
	            ymax: this.map.view.dataExtent[3]
	          }
	        });
	
	        // this.dispatchEvent(
	        //   new ModifyEvent( 
	        //     ModifyEvent.EventType.MODIFY_END, 
	        //     this._currentMovedFeature.clone(), 
	        //     evt
	        //   )
	        // )
	
	        this._modified = true;
	
	        this.changed();
	        this._downPoint = vertex;
	      }
	
	    // 顶点移动需要隐藏旋转锚点
	    this._hideAnchorFeature(geometry);
	  };
	
	  /**
	   * handleUpEvent
	   * @param evt {Event}
	   * @returns {boolean}
	   * @private
	   */
	
	
	  Modify.prototype._handleUpEvent = function _handleUpEvent(evt) {
	    var modifiedFeature = null;
	    if (this._dragSegments.length > 0) {
	      modifiedFeature = this._dragSegments[0][0].feature.clone();
	    }
	
	    this._dragSegments.length = 0;
	    this._shouldAddToVertexs = false;
	    this._insertVertices = [];
	
	    // 顶点或边编辑清除
	    if (this._vertexFeature) {
	      this._overLayer.removeFeature(this._vertexFeature);
	      this._vertexFeature = null;
	    }
	
	    // 一次旋转编辑结束清空状态
	    if (this._rotatingFeature) {
	      // 正在旋转的图形重置，下次重新计算
	      this._rotatingFeature = null;
	      // 重置上次旋转的点
	      this._lastRotatablePoint = null;
	    }
	
	    // 旋转矩形和旋转参考线清空
	    if (this._rotatableLine) {
	      this._overLayer.removeFeature(this._rotatableLine);
	      this._rotatableLine = null;
	    }
	
	    // 鼠标抬起后，重新显示并更新旋转锚点的位置
	    if (this._anchorFeature) {
	      if (!this._anchorFeature.display) {
	        this._anchorFeature.display = true;
	
	        var anthor = this._rotatableFeature.geometry.getAnchorForRotating(this.map);
	        this._anchorFeature.geometry.setCoordinates(anthor);
	      }
	    }
	
	    if (this._modified) {
	      this._modified = false;
	
	      if (modifiedFeature === null) {
	        modifiedFeature = this._currentMovedFeature.clone();
	      }
	
	      this.dispatchEvent(new _modifyevent2.default(_modifyevent2.default.EventType.MODIFY_END, modifiedFeature, evt));
	    }
	
	    this._oldEditedVertex = null;
	    this._downPoint = null;
	    this._currentMovedFeature = null;
	
	    return false;
	  };
	
	  /**
	   * 插入新顶点
	   * segmentData
	   * @param vertex
	   * @private
	   */
	
	
	  Modify.prototype._insertVertex = function _insertVertex(segmentData, vertex) {
	    var segment = segmentData.segment,
	        feature = segmentData.feature,
	        geometry = segmentData.geometry,
	        depth = segmentData.depth,
	        isVertex = segmentData.isVertex,
	        index = segmentData.index;
	
	
	    var coordinates = null;
	
	    switch (geometry.geometryType) {
	      case _geometry2.default.MULTI_LINE:
	        coordinates = geometry.getCoordinates();
	        coordinates[depth[0]].splice(index + 1, 0, vertex);
	        break;
	      case _geometry2.default.POLYGON:
	        coordinates = geometry.getCoordinates();
	        if (!isVertex) {
	          coordinates[segmentData.ringIndex].splice(index + 1, 0, vertex);
	          index = index + 1;
	        } else {
	          // dragIndex = index
	        }
	        break;
	      case _geometry2.default.MULTI_POLYGON:
	        coordinates = geometry.getCoordinates();
	        if (!isVertex) {
	          coordinates[segmentData.polygonIndex][segmentData.ringIndex].splice(index + 1, 0, vertex);
	          index = index + 1;
	        } else {
	          // dragIndex = index
	        }
	        break;
	      case _geometry2.default.LINE:
	        coordinates = geometry.getCoordinates();
	        if (!isVertex) {
	          coordinates.splice(index + 1, 0, vertex);
	          index = index + 1;
	        } else {
	          // dragIndex = index
	        }
	        break;
	      case _geometry2.default.POINT:
	        coordinates = geometry.getCoordinates();
	        coordinates = vertex;
	        break;
	      case _geometry2.default.EXTENT:
	        coordinates = geometry.getCoordinates();
	        break;
	      default:
	        break;
	    }
	
	    if (coordinates != null) {
	      this._setGeometryCoordinates(geometry, coordinates);
	    }
	
	    var newSegmentData = {
	      segment: [segment[0], vertex],
	      feature: feature,
	      geometry: geometry,
	      depth: depth,
	      index: index,
	      ringIndex: segmentData.ringIndex,
	      polygonIndex: segmentData.polygonIndex,
	      isVertex: isVertex
	    };
	
	    this._dragSegments.push([newSegmentData, 1]);
	    this._ignoreNextSingleClick = true;
	  };
	
	  Modify.prototype._getRotatableGeometry = function _getRotatableGeometry(features, pixelCoordinate, tolarance) {
	    var rotatableFeatures = features.filter(function (f) {
	      return f.geometry.rotable && f.display;
	    });
	
	    if (rotatableFeatures.length === 0) {
	      return null;
	    }
	
	    if (this._anchorFeature == null) {
	      return null;
	    }
	
	    // 隐藏则不参与计算
	    if (!this._anchorFeature.display) {
	      return null;
	    }
	
	    var anchor = this._anchorFeature.geometry;
	    var d = (0, _geometryutil.distance)([anchor.x, anchor.y], pixelCoordinate);
	    if (d <= tolarance) {
	      this._rotatingFeature = rotatableFeatures[0];
	      return this._rotatingFeature;
	    }
	
	    this._rotatingFeature = null;
	    return null;
	  };
	
	  /**
	   * 计算鼠标点离最近图形上的一点
	   */
	
	
	  Modify.prototype._calculateCloseToVertexOfOhters = function _calculateCloseToVertexOfOhters(pixel) {
	    var _this5 = this;
	
	    if (!this.snapToOthers) {
	      return null;
	    }
	
	    // 需要设置featureLayer
	    if (!this.featureLayer) {
	      return null;
	    }
	
	    // 排除正在编辑的feature
	    var modifiedFeatures = this.features;
	    var features = this.featureLayer.features.filter(function (feature) {
	      return !modifiedFeatures.find(function (mf) {
	        return mf.id === feature.id;
	      });
	    });
	
	    var closeToVertex = null;
	    var map = this.map;
	
	    var pixelCoordinate = map.getCoordinateFromPixel(pixel);
	
	    // 获取碰撞阈值内的feature列表
	    var nodes = (0, _feature3.getCollisionFeaturesByPoint)(features, pixelCoordinate, this._pixelTolerance);
	
	    if (nodes.length === 0) {
	      return null;
	    }
	
	    var sortByDistance = function sortByDistance(s1, s2) {
	      var d1 = _this5._pointDistanceToSegment(pixelCoordinate, s1);
	      var d2 = _this5._pointDistanceToSegment(pixelCoordinate, s2);
	      return d1 - d2;
	    };
	
	    // 取最近的
	    nodes.sort(sortByDistance);
	    var node = nodes[0];
	
	    var geometry = node.geometry;
	    // const geometryType = geometry.geometryType
	    var closestSegment = node.segment;
	
	    // 计算鼠标点在线段上的投影点，即是最近点
	    var vertex = this._closestOnSegment(pixelCoordinate, node);
	    var vertexPixel = map.getPixelFromCoordinate(vertex);
	
	    // 判断当前是否选中了边
	    var dist = (0, _geometryutil.distance)(pixel, vertexPixel);
	    if (dist <= this._pixelTolerance) {
	      closeToVertex = vertex;
	
	      // 顶点优先被选择
	      var pixel1 = map.getPixelFromCoordinate(closestSegment[0]);
	      var pixel2 = map.getPixelFromCoordinate(closestSegment[1]);
	
	      var squaredDist1 = (0, _geometryutil.squaredDistance)(vertexPixel[0], vertexPixel[1], pixel1[0], pixel1[1]);
	      var squaredDist2 = (0, _geometryutil.squaredDistance)(vertexPixel[0], vertexPixel[1], pixel2[0], pixel2[1]);
	
	      dist = Math.sqrt(Math.min(squaredDist1, squaredDist2));
	
	      // 计算最靠近的顶点
	      this._snappedToVertex = dist <= this._pixelTolerance;
	      if (this._snappedToVertex) {
	        closeToVertex = squaredDist1 > squaredDist2 ? closestSegment[1] : closestSegment[0];
	      }
	    }
	
	    return closeToVertex;
	  };
	
	  Modify.prototype._handleRotating = function _handleRotating(evt) {
	    var _this6 = this;
	
	    if (!this._rotatingFeature) {
	      return;
	    }
	
	    if (this._lastRotatablePoint == null) {
	      this._lastRotatablePoint = this._downPoint;
	    }
	
	    if (this._anchorFeature.display) {
	      this._anchorFeature.display = false;
	    }
	
	    // 编辑捕捉点
	    if (this._vertexFeature) {
	      this._overLayer.removeFeature(this._vertexFeature);
	      this._vertexFeature = null;
	    }
	
	    var dragPoint = evt.coordinate;
	    var downPoint = this._lastRotatablePoint;
	
	    var rotatableGeometry = this._rotatingFeature.geometry;
	    var flatInteriorPoint = rotatableGeometry.getFlatInteriorPoint();
	
	    var lineCoordinates = [dragPoint, flatInteriorPoint];
	    if (this._rotatableLine === null) {
	      this._rotatableLine = new _feature2.default(new _line2.default(lineCoordinates));
	      this._rotatableLine.style = [this._rotatableLineStyle];
	      this._overLayer.addFeature(this._rotatableLine);
	    } else {
	      this._rotatableLine.geometry.setCoordinates(lineCoordinates);
	    }
	
	    var V1 = [downPoint[0] - flatInteriorPoint[0], downPoint[1] - flatInteriorPoint[1]];
	    var V2 = [dragPoint[0] - flatInteriorPoint[0], dragPoint[1] - flatInteriorPoint[1]];
	
	    var angle = (0, _geometryutil.getAngleBetweenTwoVectors)(V1[0], V1[1], V2[0], V2[1]);
	    if (angle !== 0) {
	      var rotatedGeometry = this._rotatingFeature.geometry;
	      // 获取旋转的坐标
	      var rotatedCoordinates = rotatedGeometry.getRotatedCoordinates(angle, flatInteriorPoint);
	
	      // 越界检查
	      var withoutView = rotatedCoordinates.find(function (coor) {
	        return !_Component.prototype.checkIfCoordinateWithInMapView.call(_this6, coor);
	      });
	
	      // 更新坐标
	      if (!withoutView) {
	        rotatedGeometry.setCoordinates([rotatedCoordinates]);
	      }
	    }
	
	    this._lastRotatablePoint = evt.coordinate;
	  };
	
	  Modify.prototype._hideAnchorFeature = function _hideAnchorFeature(geometry) {
	    if (!geometry) {
	      return;
	    }
	
	    // 如果是旋转图形，则需要隐藏旋转锚点
	    if (geometry.rotable) {
	      if (this._anchorFeature) {
	        if (this._anchorFeature.display) {
	          this._anchorFeature.display = false;
	        }
	      }
	    }
	  };
	
	  /**
	   * 视图发生改变时，重新计算旋转矩形的锚点位置
	   */
	
	
	  Modify.prototype._mapViewChanged = function _mapViewChanged() {
	    if (this._anchorFeature) {
	      if (this._anchorFeature.display) {
	        var geometry = this._rotatableFeature.geometry;
	        var anthor = geometry.getAnchorForRotating(this.map);
	        this._anchorFeature.geometry.setCoordinates(anthor);
	      }
	    }
	  };
	
	  /**
	   * feature在显示与隐藏时，需要处理旋转图形
	   * @param {*} featureEvent 
	   */
	
	
	  Modify.prototype._handleFeatureVisibleChanged = function _handleFeatureVisibleChanged(featureEvent) {
	    var feature = featureEvent.feature;
	    if (this._rotatableFeature === null) {
	      return;
	    }
	
	    if (this._rotatableFeature.id !== feature.id) {
	      return;
	    }
	
	    if (feature.display === false) {
	      if (this._anchorFeature) {
	        if (this._anchorFeature.display) {
	          this._anchorFeature.display = false;
	        }
	      }
	
	      if (this._rotatableLine) {
	        if (this._rotatableLine.display) {
	          this._rotatableLine.display = false;
	        }
	      }
	    } else {
	      if (this._anchorFeature) {
	        if (!this._anchorFeature.display) {
	          this._anchorFeature.display = true;
	        }
	      }
	    }
	  };
	
	  /**
	   * 设置Ceometry的坐标数据
	   *
	   * @method setGeometryCoordinates
	   * @param geometry {Object}
	   * @param coordinates {Array}
	   * @private
	   */
	
	
	  Modify.prototype._setGeometryCoordinates = function _setGeometryCoordinates(geometry, coordinates) {
	    if (coordinates) {
	      this._changingFeature = true;
	      geometry.setCoordinates(coordinates);
	      this._changingFeature = false;
	    }
	  };
	
	  /**
	   * @method pointDistanceToSegment
	   *
	   * coordinates {Array}
	   * @param segmentData
	   * @returns {number}
	   * @private
	   */
	
	
	  Modify.prototype._pointDistanceToSegment = function _pointDistanceToSegment(coordinates, segmentData) {
	    var geometry = segmentData.geometry;
	
	    if (geometry.geometryType === _geometry2.default.CIRCLE) {
	      var circleGeometry = geometry;
	
	      if (segmentData.index === Modify.MODIFY_SEGMENT_CIRCLE_CIRCUMFERENCE_INDEX) {
	        var distanceToCenterSquared = (0, _geometryutil.squaredDistance)(circleGeometry.getCenter(), coordinates);
	        var distanceToCircumference = Math.sqrt(distanceToCenterSquared) - circleGeometry.getRadius();
	        return distanceToCircumference * distanceToCircumference;
	      }
	    }
	
	    return (0, _geometryutil.squaredDistanceToSegment)(coordinates, segmentData.segment);
	  };
	
	  /**
	   * closestOnSegment
	   * @param coordinate
	   * @param segmentData
	   * @returns {*}
	   * @private
	   */
	
	
	  Modify.prototype._closestOnSegment = function _closestOnSegment(coordinate, segmentData) {
	    return (0, _geometryutil.closestOnSegment)(coordinate, segmentData.segment);
	  };
	
	  /**
	   * Create or update the vertex feature while snapping a point
	   * on the edge of geometry
	   *
	   * createOrUpdateVertexFeature
	   * @param point {Array}
	   * @private
	   */
	
	
	  Modify.prototype._createOrUpdateVertexFeature = function _createOrUpdateVertexFeature(point) {
	    var vertexFeature = this._vertexFeature;
	    if (!vertexFeature) {
	      vertexFeature = new _feature2.default(new _point2.default(point[0], point[1]));
	      this._vertexFeature = vertexFeature;
	      this._overLayer.addFeature(vertexFeature);
	    } else {
	      var geom = vertexFeature.geometry;
	      geom.update(point[0], point[1]);
	      this._overLayer.changed();
	    }
	  };
	
	  /**
	   * 获取默认的图形编辑样式
	   *
	   * @method getDefaultStyleFunction
	   * @returns {Function}
	   */
	
	
	  Modify.prototype.getDefaultStyleFunction = function getDefaultStyleFunction() {
	    var style = _style.Style.createDefaultEditing();
	    return function (feature) {
	      return style[feature.geometry.geometryType];
	    };
	  };
	
	  /**
	   *
	   * mapBrowserEvent
	   * @returns {*}
	   * @private
	   */
	
	
	  Modify.prototype._defaultDeleteCondition = function _defaultDeleteCondition(mapBrowserEvent) {
	    return (0, _mousekey.noModifierKeys)(mapBrowserEvent) && (0, _mousekey.singleClick)(mapBrowserEvent);
	  };
	
	  /**
	   * active读写器，读取设置当前的active状态
	   *
	   * @property active
	   * @type {Function}
	   * @returns {*}
	   */
	
	
	  _createClass(Modify, [{
	    key: 'features',
	    get: function get() {
	      return this._features;
	    },
	    set: function set() {
	      var _this7 = this;
	
	      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	      this._features = value;
	
	      this._snapSegments = null;
	      this._rotatableFeature = null;
	      this._rotatingFeature = null;
	
	      if (this._vertexFeature) {
	        this._overLayer.removeFeature(this._vertexFeature);
	        this._vertexFeature = null;
	      }
	
	      if (this._anchorFeature) {
	        this._overLayer.removeFeature(this._anchorFeature);
	        this._anchorFeature = null;
	      }
	
	      this._hasMoveableGeometrys = value.length === 0 ? false : true;
	
	      this._dragSegments = [];
	      this._snappedToVertex = false;
	
	      this._featuresEventKeys = [];
	
	      this._features.forEach(function (f) {
	        _this7._featuresEventKeys.push((0, _eventmanager.listen)(f, _featureevent2.default.EventType.FEATURE_VISIBLE_CHANGED, _this7._handleFeatureVisibleChanged, _this7));
	      });
	
	      this._initAnthorPointForRotatableGeometry(value);
	    }
	  }, {
	    key: 'active',
	    get: function get() {
	      return this._active;
	    },
	    set: function set(isActive) {
	      if (!isActive) {
	        if (this._vertexFeature) {
	          this._overLayer.removeFeature(this._vertexFeature);
	          this._vertexFeature = null;
	        }
	
	        if (this._anchorFeature) {
	          this._overLayer.removeFeature(this._anchorFeature);
	          this._anchorFeature = null;
	        }
	
	        if (this._rotatableLine) {
	          this._overLayer.removeFeature(this._rotatableLine);
	          this._rotatableLine = null;
	        }
	
	        this._featuresEventKeys.forEach(function (key) {
	          return (0, _eventmanager.unlistenByKey)(key);
	        });
	      }
	
	      this._active = isActive;
	    }
	
	    /**
	     * map读写器, 读取设置当前map
	     *
	     * @type {Function}
	     * @property map
	     * @param map {Object} mk.map
	     */
	
	  }, {
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(map) {
	      if (this._mapRenderKey) {
	        (0, _eventmanager.unlistenByKey)(this._mapRenderKey);
	        this._mapRenderKey = null;
	      }
	
	      if (this._mapViewChangedKey) {
	        (0, _eventmanager.unlistenByKey)(this._mapViewChangedKey);
	        this._mapViewChangedKey = null;
	      }
	
	      if (map) {
	        this._map = map;
	        this._mapRenderKey = (0, _eventmanager.listen)(this, _eventtype.EventType.CHANGE, map.render, map);
	        this._mapViewChangedKey = (0, _eventmanager.listen)(map, _eventtype.EventType.VIEW_CHANGED, this._mapViewChanged, this);
	
	        map.addLayer(this._overLayer);
	      }
	    }
	
	    /**
	     * snapToOthers读写器
	     */
	
	  }, {
	    key: 'snapToOthers',
	    get: function get() {
	      return this._snapToOthers;
	    },
	    set: function set(value) {
	      if (this._snapToOthers !== value) {
	        this._snapToOthers = value;
	      }
	    }
	  }, {
	    key: 'featureLayer',
	    get: function get() {
	      return this._featureLayer;
	    },
	    set: function set(value) {
	      this._featureLayer = value;
	    }
	  }]);
	
	  return Modify;
	}(_component2.default);
	
	/**
	 * @type {number}
	 */
	
	
	exports.default = Modify;
	Modify.MODIFY_SEGMENT_CIRCLE_CIRCUMFERENCE_INDEX = 1;
	
	/**
	 * @type {number}
	 */
	Modify.MODIFY_SEGMENT_CIRCLE_CENTER_INDEX = 0;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseevent = __webpack_require__(35);
	
	var _baseevent2 = _interopRequireDefault(_baseevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 修改结束时，ModifyEvent将会被派发
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class modifyevent
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends BaseObject
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module component
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ModifyEvent = function (_BaseEvent) {
	  _inherits(ModifyEvent, _BaseEvent);
	
	  function ModifyEvent(type, features, event) {
	    _classCallCheck(this, ModifyEvent);
	
	    /**
	     * features being modified.
	     */
	    var _this = _possibleConstructorReturn(this, _BaseEvent.call(this, type));
	
	    _this.features = features;
	
	    /**
	     * BrowserEvent
	     */
	    _this.browserEvent = event;
	    return _this;
	  }
	
	  return ModifyEvent;
	}(_baseevent2.default);
	
	exports.default = ModifyEvent;
	
	
	ModifyEvent.EventType = {
	
	  /**
	   * Triggered on features modification start.
	   */
	  MODIFY_START: 'modifystart',
	
	  /**
	   * Triggered on features modification end
	   */
	  MODIFY_END: 'modifyend'
	
	};
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.singleClick = singleClick;
	exports.mouseWheel = mouseWheel;
	exports.noModifierKeys = noModifierKeys;
	exports.targetNotEditable = targetNotEditable;
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function singleClick(browserEvent) {
	  return browserEvent.type === _browserevent2.default.SINGLE_CLICK;
	}
	
	function mouseWheel(browserEvent) {
	  return browserEvent.type === _browserevent2.default.MOUSE_WHEEL || browserEvent.type === _browserevent2.default.WHEEL;
	}
	
	function noModifierKeys(browserEvent) {
	  var originalEvent = browserEvent.originalEvent;
	  return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
	}
	
	function targetNotEditable(mapBrowserEvent) {
	  var target = mapBrowserEvent.originalEvent.target;
	  var tagName = target.tagName;
	  return tagName !== 'INPUT' && tagName !== 'SELECT' && tagName !== 'TEXTAREA';
	}
	
	exports.default = {
	  singleClick: singleClick,
	  mouseWheel: mouseWheel,
	  noModifierKeys: noModifierKeys,
	  targetNotEditable: targetNotEditable
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _mousekey = __webpack_require__(53);
	
	var _coordinate = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 拖动事件基础类
	 *
	 * @class DragPan
	 * @extends Component
	 * @module component
	 * @constructor
	 */
	var DragPan = function (_Component) {
	  _inherits(DragPan, _Component);
	
	  /**
	   * 构造函数
	   *
	   * @constructor
	   * @param options
	   */
	  function DragPan() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, DragPan);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this.applyHandleEventOption({
	      handleDownEvent: _this._handleDownEvent,
	      handleDragEvent: _this._handleDragEvent
	    });
	
	    /**
	     * @property tragetPointers
	     * @type {Array}
	     */
	    _this.targetPointers = [];
	
	    /**
	     * @property lastCentroid
	     * @type {null}
	     */
	    _this.lastCentroid = null;
	
	    /**
	     * kinetic
	     * @private
	     * @type {ol.Kinetic|undefined}
	     */
	    _this._kinetic = options.kinetic;
	
	    /**
	     * @property lastCentroid
	     * @type {ol.Pixel}
	     */
	    _this.lastCentroid = null;
	
	    /**
	     * @property lastPointersCount
	     * @private
	     * @type {number}
	     */
	    _this._lastPointersCount = null;
	
	    /**
	     * @property conidtion
	     * @private
	     * @type {ol.EventsConditionType}
	     */
	    _this._condition = options.condition ? options.condition : _mousekey.noModifierKeys;
	
	    /**
	     * @property noKinetic
	     * @private
	     * @type {boolean}
	     */
	    _this._noKinetic = false;
	
	    return _this;
	  }
	
	  /**
	   * 处理browserEvent
	   *
	   * @param browserEvent {BrowserPointerEvent} mapBrowserEvent Event.
	   * @return {boolean} Start drag sequence?
	   * @this {DragPan}
	   * @private
	   */
	
	
	  DragPan.prototype._handleDownEvent = function _handleDownEvent(browserEvent) {
	    if (this.targetPointers.length > 0 && this._condition(browserEvent)) {
	      this.lastCentroid = null;
	
	      if (this._kinetic) {
	        this._kinetic.begin();
	      }
	
	      // No kinetic as soon as more than one pointer on the screen is
	      // detected. This is to prevent nasty pans after pinch.
	      this._noKinetic = this.targetPointers.length > 1;
	      return true;
	    } else {
	      return false;
	    }
	  };
	
	  /**
	   * handleDragEvent
	   * @param browserEvent {browserEvent}
	   * @private
	   */
	
	
	  DragPan.prototype._handleDragEvent = function _handleDragEvent(browserEvent) {
	    var targetPointers = this.targetPointers;
	    var centroid = this.centroid(targetPointers);
	
	    if (targetPointers.length === this._lastPointersCount) {
	      if (this._kinetic) {
	        this._kinetic.update(centroid[0], centroid[1]);
	      }
	
	      if (this.lastCentroid) {
	        var deltaX = this.lastCentroid[0] - centroid[0];
	        var deltaY = this.lastCentroid[1] - centroid[1];
	        var map = browserEvent.map;
	        var view = map.view;
	        var viewState = view.getViewState();
	        var center = [deltaX, deltaY];
	        _coordinate.Coordinate.scale(center, viewState.resolution);
	        _coordinate.Coordinate.rotate(center, viewState.rotation);
	        _coordinate.Coordinate.add(center, viewState.center);
	        // center = view.constrainCenter(center)
	        view.center = center;
	      }
	    } else if (this._kinetic) {
	      this._kinetic.begin();
	    }
	
	    this.lastCentroid = centroid;
	    this._lastPointersCount = targetPointers.length;
	  };
	
	  /**
	   * 计算视图的中心点
	   *
	   * @method centroid
	   * @param pointerEvents {pointerEvents}
	   * @returns {[*,*]}
	   */
	
	
	  DragPan.prototype.centroid = function centroid(pointerEvents) {
	    var length = pointerEvents.length;
	    var clientX = 0;
	    var clientY = 0;
	
	    for (var i = 0; i < length; i++) {
	      clientX += pointerEvents[i].originalEvent.clientX;
	      clientY += pointerEvents[i].originalEvent.clientY;
	    }
	
	    return [clientX / length, clientY / length];
	  };
	
	  return DragPan;
	}(_component2.default);
	
	exports.default = DragPan;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _config = __webpack_require__(1);
	
	var _mousekey = __webpack_require__(53);
	
	var _math = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 鼠标滚轮缩放基类
	 *
	 *
	 * @class MouseWheelZoom
	 * @extends Component
	 * @module component
	 * @constructor
	 */
	var MouseWheelZoom = function (_Component) {
	  _inherits(MouseWheelZoom, _Component);
	
	  /**
	   * 构造函数
	   *
	   * @constructor
	   * @param options
	   */
	  function MouseWheelZoom() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, MouseWheelZoom);
	
	    /**
	     * 私有属性Delta，默认为0
	     *
	     * @property delta
	     * @type {Number}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this._delta = 0;
	
	    /**
	     * 私有属性useAnchor
	     *
	     * @property useAnchor
	     * @type {Boolean}
	     * @private
	     */
	    _this._useAnchor = options.useAnchor !== undefined ? options.useAnchor : true;
	
	    /**
	     * 私有属性duration
	     *
	     * @property duration
	     * @type {Boolean}
	     * @private
	     */
	    _this._duration = options.duration !== undefined ? options.duration : 250;
	
	    /**
	     * 私有属性lastAnchor
	     *
	     * @property lastAnchor
	     * @type {null}
	     * @private
	     */
	    _this._lastAnchor = null;
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    _this._startTime = undefined;
	
	    /**
	     *
	     * @type {number}
	     * @private
	     */
	    _this._timeout = options.timeout !== undefined ? options.timeout : 80;
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    _this._timeoutId = undefined;
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    _this._mode = undefined;
	    return _this;
	  }
	
	  /**
	   *
	   * @param mapBrowserEvent
	   * @returns {boolean}
	   */
	
	
	  MouseWheelZoom.prototype.handleMouseEvent = function handleMouseEvent(mapBrowserEvent) {
	    var _this2 = this;
	
	    if (!(0, _mousekey.mouseWheel)(mapBrowserEvent)) {
	      return true;
	    }
	
	    mapBrowserEvent.preventDefault();
	
	    var map = mapBrowserEvent.map;
	    var wheelEvent = mapBrowserEvent.originalEvent;
	
	    if (this._useAnchor) {
	      this._lastAnchor = mapBrowserEvent.coordinate;
	    }
	
	    // Delta normalisation inspired by
	    // https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
	    var delta = void 0;
	    if (mapBrowserEvent.type == _browserevent2.default.WHEEL) {
	      delta = wheelEvent.deltaY;
	    } else if (mapBrowserEvent.type == _browserevent2.default.MOUSE_WHEEL) {
	      delta = -wheelEvent.wheelDeltaY;
	    }
	
	    if (delta === 0) {
	      return false;
	    }
	
	    var now = Date.now();
	
	    if (this._startTime === undefined) {
	      this._startTime = now;
	    }
	
	    this._delta += delta;
	
	    var timeLeft = Math.max(this._timeout - (now - this._startTime), 0);
	
	    clearTimeout(this._timeoutId);
	    this._timeoutId = setTimeout(function () {
	      return _this2._handleWheelZoom(map);
	    }, timeLeft);
	
	    return false;
	  };
	
	  /**
	   * Zoom to the map
	   *
	   * handleWheelZoom
	   * @param map
	   * @private
	   */
	
	
	  MouseWheelZoom.prototype._handleWheelZoom = function _handleWheelZoom(map) {
	    var view = map.view;
	    // if (view.getAnimating()) {
	    //   view.cancelAnimations()
	    // }
	
	    var maxDelta = _config.Config.MOUSE_WHEEL_ZOOM_MAXDELTA;
	    var delta = (0, _math.clamp)(this._delta, -maxDelta, maxDelta);
	
	    this.zoomByDelta(view, -delta, this._lastAnchor, this._duration);
	
	    this._mode = undefined;
	    this._delta = 0;
	    this._lastAnchor = null;
	    this._startTime = undefined;
	    this._timeoutId = undefined;
	  };
	
	  return MouseWheelZoom;
	}(_component2.default);
	
	exports.default = MouseWheelZoom;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _domutil = __webpack_require__(42);
	
	var _eventmanager = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Control = function (_BaseObject) {
	  _inherits(Control, _BaseObject);
	
	  function Control() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Control);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._element = options.element ? options.element : null;
	
	    _this._target = null;
	
	    _this._map = null;
	
	    _this._listenerKeys = [];
	
	    if (options.target) {
	      _this.target = options.target;
	    }
	    return _this;
	  }
	
	  _createClass(Control, [{
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(value) {
	      if (this.map) {
	        (0, _domutil.removeNode)(this._element);
	      }
	
	      this._listenerKeys.forEach(function (listener) {
	        return (0, _eventmanager.unlistenByKey)(listener);
	      });
	
	      this._listenerKeys.length = 0;
	      this._map = value;
	
	      if (this._map) {
	        var target = this._target ? this._target : value.overlayContainerStopEvent;
	        target.appendChild(this._element);
	
	        value.render();
	      }
	    }
	  }, {
	    key: 'target',
	    set: function set(value) {
	      this._target = typeof value === 'string' ? document.getElementById(value) : value;
	    }
	  }]);
	
	  return Control;
	}(_baseobject2.default);
	
	exports.default = Control;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _control = __webpack_require__(56);
	
	var _control2 = _interopRequireDefault(_control);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _eventmanager = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Zoom = function (_Control) {
	  _inherits(Zoom, _Control);
	
	  function Zoom() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Zoom);
	
	    var className = options.className !== undefined ? options.className : 'dt-zoom';
	
	    var delta = options.delta !== undefined ? options.delta : 1;
	
	    var zoomInLabel = options.zoomInLabel !== undefined ? options.zoomInLabel : '+';
	    var zoomOutLabel = options.zoomOutLabel !== undefined ? options.zoomOutLabel : '\u2212';
	
	    var zoomInTipLabel = options.zoomInTipLabel !== undefined ? options.zoomInTipLabel : '放大';
	
	    var zoomOutTipLabel = options.zoomOutTipLabel !== undefined ? options.zoomOutTipLabel : '缩小';
	
	    var inElement = document.createElement('button');
	    inElement.className = className + '-in';
	    inElement.setAttribute('type', 'button');
	    inElement.title = zoomInTipLabel;
	    inElement.appendChild(typeof zoomInLabel === 'string' ? document.createTextNode(zoomInLabel) : zoomInLabel);
	
	    var outElement = document.createElement('button');
	    outElement.className = className + '-out';
	    outElement.setAttribute('type', 'button');
	    outElement.title = zoomOutTipLabel;
	    outElement.appendChild(typeof zoomOutLabel === 'string' ? document.createTextNode(zoomOutLabel) : zoomOutLabel);
	
	    var cssClasses = className + ' dt-unselectable dt-control';
	    var element = document.createElement('div');
	    element.className = cssClasses;
	    element.appendChild(inElement);
	    element.appendChild(outElement);
	
	    var _this = _possibleConstructorReturn(this, _Control.call(this, {
	      element: element,
	      target: options.target
	    }));
	
	    _this._delta = delta;
	
	    (0, _eventmanager.listen)(inElement, _browserevent2.default.CLICK, _this._handleClick, _this);
	    (0, _eventmanager.listen)(outElement, _browserevent2.default.CLICK, _this._handleClickIn, _this);
	    return _this;
	  }
	
	  Zoom.prototype._handleClickIn = function _handleClickIn(event) {
	    event.preventDefault();
	    this._zoomByDelta(-this._delta);
	  };
	
	  /**
	   * @param {number} delta Zoom delta.
	   * @param {Event} event The event to handle
	   * @private
	   */
	
	
	  Zoom.prototype._handleClick = function _handleClick(event) {
	    event.preventDefault();
	    this._zoomByDelta(this._delta);
	  };
	
	  /**
	   * @param {number} delta Zoom delta.
	   * @private
	   */
	
	
	  Zoom.prototype._zoomByDelta = function _zoomByDelta(delta) {
	    var map = this.map;
	    var view = map.view;
	    if (!view) {
	      return;
	    }
	
	    var currentResolution = view.resolution;
	    if (currentResolution) {
	      var newResolution = view.constrainResolution(currentResolution, delta);
	      view.resolution = newResolution;
	    }
	  };
	
	  return Zoom;
	}(_control2.default);
	
	exports.default = Zoom;
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _canvasrenderer = __webpack_require__(59);
	
	var _canvasrenderer2 = _interopRequireDefault(_canvasrenderer);
	
	var _browsereventhandler = __webpack_require__(72);
	
	var _browsereventhandler2 = _interopRequireDefault(_browsereventhandler);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _view = __webpack_require__(73);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _featurelayer = __webpack_require__(38);
	
	var _featurelayer2 = _interopRequireDefault(_featurelayer);
	
	var _eventmanager = __webpack_require__(21);
	
	var _transform = __webpack_require__(63);
	
	var _eventtype = __webpack_require__(12);
	
	var _extentutil = __webpack_require__(13);
	
	var _componentdefaults = __webpack_require__(74);
	
	var _controldefaults = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Map类
	 *
	 * @class Map
	 * @extends BaseObject
	 * @module meek
	 * @constructor
	 */
	var Map = function (_BaseObject) {
	  _inherits(Map, _BaseObject);
	
	  /**
	   * @constructor
	   *
	   * @param options
	   */
	  function Map(options) {
	    _classCallCheck(this, Map);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._frameState = null;
	
	    /**
	     * 添加到map中的layers集合
	     * @private
	     */
	    _this._layers = [];
	
	    /**
	     * 初始化矩阵转换器
	     * @type {*}
	     * @private
	     */
	    _this._toPixelTransform = _transform.Transform.create();
	    _this._toCoordinateTransform = _transform.Transform.create();
	
	    /**
	     *
	     * @private
	     */
	    _this._animationDelayKey = undefined;
	
	    /**
	     * The collection of components
	     * @private
	     */
	    _this._components = [];
	
	    /**
	     * The collection of controls
	     * @type {Array}
	     * @private
	     */
	    _this._controls = [];
	
	    /**
	     * 默认比例
	     * @type {Number}
	     */
	    _this._delta = 1;
	
	    // Create the viewport for map container
	    _this._createViewport();
	
	    _this._overlayContainer = document.createElement('DIV');
	    _this._overlayContainer.className = 'dt-overlaycontainer';
	    _this.viewport.appendChild(_this._overlayContainer);
	
	    _this._overlayContainerStopEvent = document.createElement('DIV');
	    _this._overlayContainerStopEvent.className = 'dt-overlaycontainer-stopevent';
	
	    // prevent event propagation from overlay
	    var overlayEvents = [_browserevent2.default.CLICK, _browserevent2.default.DBLCLICK, _browserevent2.default.MOUSE_DOWN, _browserevent2.default.MOUSE_UP, _browserevent2.default.MOUSE_WHEEL, _browserevent2.default.WHEEL];
	    overlayEvents.forEach(function (overlayEvent) {
	      (0, _eventmanager.listen)(_this._overlayContainerStopEvent, overlayEvent, function (evt) {
	        evt.stopPropagation();
	      });
	    });
	
	    _this.viewport.appendChild(_this._overlayContainerStopEvent);
	
	    // Get the options inner
	    var optionsInner = Map.parseOptionsInner(options);
	
	    // 是否允许图片坐标超出图片范围
	    _this.allowCoordinatesBeyondImage = options.allowCoordinatesBeyondImage || false;
	
	    // Create the renderer
	    _this._renderer = new optionsInner.rendererClass(_this.viewport, _this);
	
	    // Create the browser events handler
	    _this._createBrowserEventHandler();
	
	    _this._animationDelay = function () {
	      _this._animationDelayKey = undefined;
	      _this._renderFrame(Date.now());
	    };
	
	    // Set up the properties for map
	    _this.layers = optionsInner.values['layers'];
	    _this.target = optionsInner.values['target'];
	    _this.view = optionsInner.values['view'];
	
	    // add default components to map
	    optionsInner.components.forEach(function (component) {
	      return _this.addComponents(component);
	    });
	
	    // add default controls to map
	    optionsInner.controls.forEach(function (control) {
	      return _this.addControl(control);
	    });
	
	    _this._overlayIdIndex = {};
	    _this._overlays = optionsInner.overlays;
	    _this._overlays.forEach(function (overlay) {
	      return _this._addOverlayInternal(overlay);
	    });
	
	    // 监听view视图缩放事件
	    (0, _eventmanager.listen)(_this.view, _eventtype.EventType.CHANGE, _this._handleViewChange, _this);
	    _this.dispatchEvent(_eventtype.EventType.VIEW_CHANGED);
	
	    // add mouse wheel events listener
	    (0, _eventmanager.listen)(_this.viewport, _browserevent2.default.MOUSE_WHEEL, _this._handleMouseWheelEvent, _this);
	    (0, _eventmanager.listen)(_this.viewport, _browserevent2.default.WHEEL, _this._handleMouseWheelEvent, _this);
	    return _this;
	  }
	
	  /**
	   * 设置map的父容器,
	   * 所有的图层对象、组件对象的父容器
	   *
	   * @method createViewport
	   * @private
	   */
	
	
	  Map.prototype._createViewport = function _createViewport() {
	    var viewport = document.createElement('DIV');
	    viewport.className = 'dt-viewport';
	    viewport.style.position = 'relative';
	    viewport.style.overflow = 'hidden';
	    viewport.style.width = '100%';
	    viewport.style.height = '100%';
	
	    this._viewport = viewport;
	  };
	
	  /**
	   * 获取overlay的容器
	   *
	   * @property overlayContainer
	   * @returns {Element|*}
	   */
	
	
	  /**
	   * 地图渲染器对象;默认渲染方式为canvas方式
	   *
	   * @method createRenderer
	   * @private
	   */
	  Map.prototype._createRenderer = function _createRenderer() {
	    this._renderer = new _canvasrenderer2.default(this.viewport, this);
	  };
	
	  /**
	   * 创建浏览器事件的监听器
	   *
	   * 浏览器事件包括{mousedown|mousemove|mouseup|mouseover|mouseup}
	   *
	   * @method createBrowserEventHandler
	   * @private
	   */
	
	
	  Map.prototype._createBrowserEventHandler = function _createBrowserEventHandler() {
	    this._browserEventHandler = new _browsereventhandler2.default(this, this.viewport);
	
	    /**
	     * 监听浏览器上的鼠标事件 mousemove,mouseup,mousedown
	     * 并处理浏览器事件
	     */
	    for (var key in _browserevent2.default) {
	      (0, _eventmanager.listen)(this._browserEventHandler, _browserevent2.default[key], this._handleBrowserEvent, this);
	    }
	  };
	
	  /**
	   * Handle the mouse wheel event
	   * @param wheelEvent
	   * @private
	   */
	
	
	  Map.prototype._handleMouseWheelEvent = function _handleMouseWheelEvent(wheelEvent) {
	    var type = wheelEvent.type;
	    var browserEvent = new _browserevent2.default(this, wheelEvent, type);
	    this._handleBrowserEvent(browserEvent);
	  };
	
	  /**
	   *
	   * @param keyboardEvent
	   * @private
	   */
	
	
	  Map.prototype._handleKeyboardEvent = function _handleKeyboardEvent(keyboardEvent) {
	    var type = keyboardEvent.type;
	    var browserEvent = new _browserevent2.default(this, keyboardEvent, type);
	    this._handleBrowserEvent(browserEvent);
	  };
	
	  /**
	   * Handle browser events
	   * @param browserEvent
	   * @private
	   */
	
	
	  Map.prototype._handleBrowserEvent = function _handleBrowserEvent(browserEvent) {
	    var cpts = this.components;
	    var i = void 0;
	
	    if (this.dispatchEvent(browserEvent) !== false) {
	      for (i = cpts.length - 1; i >= 0; i--) {
	        var cpt = cpts[i];
	
	        if (!cpt.active) {
	          continue;
	        }
	
	        var cont = cpt.handleMouseEvent(browserEvent);
	
	        if (!cont) {
	          break;
	        }
	      }
	    }
	  };
	
	  /**
	   * 渲染map
	   *
	   * @method renderFrame
	   * @private
	   */
	
	
	  Map.prototype._renderFrame = function _renderFrame() {
	    var size = this.size;
	    var view = this.view;
	    var frameState = null;
	
	    var extent = _extentutil.ExtentUtil.createEmpty();
	    var viewState = view.getViewState();
	    frameState = {
	      size: size,
	      viewState: viewState,
	      pixelRatio: 1,
	      extent: extent,
	      toPixelTransform: this._toPixelTransform,
	      toCoordinateTransform: this._toCoordinateTransform
	    };
	
	    if (frameState) {
	      frameState.extent = _extentutil.ExtentUtil.getForViewAndSize(viewState.center, viewState.resolution, viewState.rotation, frameState.size, extent);
	    }
	
	    this._frameState = frameState;
	    this._renderer.renderFrame(frameState);
	  };
	
	  /**
	   * 执行渲染
	   *
	   * @method render
	   */
	
	
	  Map.prototype.render = function render() {
	    if (this._animationDelayKey === undefined) {
	      this._animationDelayKey = window.requestAnimationFrame(this._animationDelay);
	    }
	  };
	
	  /**
	   * Render map while the view has been changed
	   * @private
	   */
	
	
	  Map.prototype._handleViewChange = function _handleViewChange() {
	    this.render();
	    this.dispatchEvent(_eventtype.EventType.VIEW_CHANGED);
	  };
	
	  /**
	   * 是否渲染
	   *
	   * @method isRendered
	   * @returns {Boolean}
	   */
	
	
	  Map.prototype.isRendered = function isRendered() {
	    return !!this._frameState;
	  };
	
	  /**
	   * Size读写器,当前地图的大小
	   *
	   * @property size
	   * @returns {Number}
	   */
	
	
	  /**
	   * 用于添加一个Component的方法接口
	   *
	   * @method addComponents
	   * @param cpt {Component} Componnet的一个子类
	   */
	  Map.prototype.addComponents = function addComponents(cpt) {
	    this.components.push(cpt);
	    cpt.map = this;
	  };
	
	  /**
	   * 添加一个控件到地图中
	   * @method addControl
	   * @param control
	   */
	
	
	  Map.prototype.addControl = function addControl(control) {
	    this.controls.push(control);
	    control.map = this;
	  };
	
	  /**
	   * 添加layer
	   *
	   * @method addLayer
	   * @param layer
	   */
	
	
	  Map.prototype.addLayer = function addLayer(layer) {
	    this.layers.push(layer);
	    layer.map = this;
	  };
	
	  /**
	   * 获取当前地图中的矢量图层
	   *
	   * @method getFeaturesLayer
	   * @return {Array}
	   */
	
	
	  Map.prototype.getFeaturesLayer = function getFeaturesLayer() {
	    return this.layers.filter(function (layer) {
	      return layer instanceof _featurelayer2.default;
	    });
	  };
	
	  /**
	   *
	   * @param overlay
	   * @private
	   */
	
	
	  Map.prototype._addOverlayInternal = function _addOverlayInternal(overlay) {
	    var id = overlay.overlayId;
	    if (id !== undefined) {
	      this._overlayIdIndex[id.toString()] = overlay;
	    }
	
	    overlay.map = this;
	  };
	
	  /**
	   *
	   * getTargetElement
	   * @returns {Object}
	   */
	
	
	  Map.prototype.getTargetElement = function getTargetElement() {
	    var target = this.target;
	    if (target !== undefined) {
	      return typeof target === 'string' ? document.getElementById(target) : target;
	    } else {
	      return null;
	    }
	  };
	
	  /**
	   * 遍历鼠标点位置的所有feature
	   *
	   * @method forEachFeatureAtPiexl
	   * @param piexl {Array}
	   * @param callback
	   * @param tolerance
	   * @returns {eature}
	   */
	
	
	  Map.prototype.forEachFeatureAtPiexl = function forEachFeatureAtPiexl(piexl, callback, tolerance) {
	    if (!this._frameState) {
	      return;
	    }
	
	    var coordinate = this.getCoordinateFromPixel(piexl);
	    var hitTolerance = tolerance;
	
	    var layers = this.getFeaturesLayer();
	    var result = null;
	    for (var i = 0, ii = layers.length; i < ii; i++) {
	      var layer = layers[i];
	      if (layer.visible) {
	        result = layer.forEachFeatureAtPiexl(this._frameState, coordinate, callback, hitTolerance);
	        if (result) {
	          return callback(result, layer);
	        }
	      }
	    }
	
	    return result;
	  };
	
	  /**
	   * 更新map viewport的大小
	   *
	   * @method updateSize
	   */
	
	
	  Map.prototype.updateSize = function updateSize() {
	    var targetElement = this.getTargetElement();
	    if (!targetElement) {
	      this.size = undefined;
	    } else {
	      var computedStyle = getComputedStyle(targetElement);
	      this.size = [targetElement.offsetWidth - Number.parseFloat(computedStyle['borderLeftWidth']) - Number.parseFloat(computedStyle['paddingLeft']) - Number.parseFloat(computedStyle['paddingRight']) - Number.parseFloat(computedStyle['borderRightWidth']), targetElement.offsetHeight - Number.parseFloat(computedStyle['borderTopWidth']) - Number.parseFloat(computedStyle['paddingTop']) - Number.parseFloat(computedStyle['paddingBottom']) - Number.parseFloat(computedStyle['borderBottomWidth'])];
	    }
	  };
	
	  /**
	   * 获取当前视图鼠标的坐标
	   *
	   * @method getEventPixel
	   * @param {Event} event Event.
	   * @return {Array}
	   * @api stable
	   */
	
	
	  Map.prototype.getEventPixel = function getEventPixel(event) {
	    // 获取viewport元素在浏览器视图窗口总的位置(left,top,bottom,right)
	    var viewportPosition = this.viewport.getBoundingClientRect();
	    // const eventPosition = event.changedTouches ? event.changedTouches[0] : event
	    var eventPosition = event;
	    return [eventPosition.clientX - viewportPosition.left, eventPosition.clientY - viewportPosition.top];
	  };
	
	  /**
	   * 把坐标数据转换到标准坐标系中
	   *
	   * @method getCoordinateFromPixel
	   * @param pixelPoint {Array}
	   * @returns {Array}
	   */
	
	
	  Map.prototype.getCoordinateFromPixel = function getCoordinateFromPixel(pixelPoint) {
	    // console.log('转换到标准坐标')
	    var frameState = this._frameState;
	    if (!frameState) {
	      return null;
	    } else {
	      return _transform.Transform.apply(frameState.toCoordinateTransform, pixelPoint.slice());
	    }
	  };
	
	  /**
	   * Get the pixel for a coordinate.  This takes a coordinate in the map view
	   * projection and returns the corresponding pixel.
	   *
	   * getPixelFromCoordinate
	   * @param coordinate
	   * @returns {Array}
	   */
	
	
	  Map.prototype.getPixelFromCoordinate = function getPixelFromCoordinate(coordinate) {
	    var frameState = this._frameState;
	    if (!frameState) {
	      return null;
	    } else {
	      return _transform.Transform.apply(frameState.toPixelTransform, coordinate.slice(0, 2));
	    }
	  };
	
	  /**
	   * 以地图中心点放大
	   * @return {[type]} [description]
	   */
	
	
	  Map.prototype.zoomIn = function zoomIn() {
	    this._zoomByDelta(this._delta);
	  };
	
	  /**
	   * 以地图中心点缩小
	   * @return {[type]} [description]
	   */
	
	
	  Map.prototype.zoomOut = function zoomOut() {
	    this._zoomByDelta(-this._delta);
	  };
	
	  /**
	   * @param {number} delta Zoom delta.
	   * @private
	   */
	
	
	  Map.prototype._zoomByDelta = function _zoomByDelta(delta) {
	    var view = this.view;
	    if (!view) {
	      return;
	    }
	
	    var currentResolution = view.resolution;
	    if (currentResolution) {
	      var newResolution = view.constrainResolution(currentResolution, delta);
	      view.resolution = newResolution;
	    }
	  };
	
	  Map.prototype.switchToOverview = function switchToOverview() {
	    var view = this.view;
	    if (view) {
	      var orignalCenter = view.originalCenter;
	      var originalResolution = view.originalResolution;
	
	      view.center = orignalCenter;
	      view.resolution = originalResolution;
	    }
	  };
	
	  /**
	   * Parse the options passed inner
	   * parseOptionsInner
	   * @param options
	   * @static
	   * @returns {{rendererClass: CanvasRenderer, components: *, values: Map}}
	   */
	
	
	  Map.parseOptionsInner = function parseOptionsInner() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	
	    var rendererClass = _canvasrenderer2.default;
	
	    var values = {};
	
	    values['view'] = options.view !== undefined ? options.view : new _view2.default();
	    values['target'] = options.target;
	    values['layers'] = options.layers !== undefined ? options.layers : [];
	
	    var components = void 0;
	    if (options.components) {
	      components = options.components;
	    } else {
	      components = (0, _componentdefaults.componentsDefaults)();
	    }
	
	    var controls = void 0;
	    if (options.controls) {
	      controls = options.controls;
	    } else {
	      controls = (0, _controldefaults.controlDefaults)();
	    }
	
	    var overlays = void 0;
	    if (options.overlays !== undefined) {
	      if (Array.isArray(options.overlays)) {
	        overlays = [].concat(_toConsumableArray(options.overlays));
	      }
	    } else {
	      overlays = [];
	    }
	
	    return {
	      rendererClass: rendererClass,
	      components: components,
	      controls: controls,
	      values: values,
	      overlays: overlays
	    };
	  };
	
	  _createClass(Map, [{
	    key: 'overlayContainer',
	    get: function get() {
	      return this._overlayContainer;
	    }
	
	    /**
	     * 获取overlay容器的结束事件
	     *
	     * @property overlayContainerStopEvent
	     * @returns {Element|*}
	     */
	
	  }, {
	    key: 'overlayContainerStopEvent',
	    get: function get() {
	      return this._overlayContainerStopEvent;
	    }
	
	    /**
	     * 获取viewport
	     *
	     * @property viewport
	     * @returns {Element|*}
	     */
	
	  }, {
	    key: 'viewport',
	    get: function get() {
	      return this._viewport;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
	    },
	    set: function set(value) {
	      this._size = value;
	    }
	
	    /**
	     * 获取组件
	     *
	     * @method components
	     * @returns {Array}
	     */
	
	  }, {
	    key: 'components',
	    get: function get() {
	      return this._components;
	    }
	
	    /**
	     * map中控件集合
	     * @property controls
	     * @type {[]}
	     */
	
	  }, {
	    key: 'controls',
	    get: function get() {
	      return this._controls;
	    }
	
	    /**
	     * 当前存储在Map中的图层集合
	     *
	     * @property layers
	     * @type {Array}
	     */
	
	  }, {
	    key: 'layers',
	    get: function get() {
	      return this._layers;
	    },
	    set: function set(value) {
	      var _this2 = this;
	
	      if (Array.isArray(value)) {
	        value.forEach(function (layer) {
	          _this2.addLayer(layer);
	        });
	      }
	    }
	
	    /**
	     * target 读写器
	     *
	     * @property target
	     * @type
	     */
	
	  }, {
	    key: 'target',
	    get: function get() {
	      return this._target;
	    },
	    set: function set(value) {
	      this._target = value;
	      var targetElement = document.getElementById(this._target);
	      targetElement.appendChild(this.viewport);
	
	      // 监听键盘点击和抬起事件
	      (0, _eventmanager.listen)(document, _browserevent2.default.KEYDOWN, this._handleKeyboardEvent, this), (0, _eventmanager.listen)(document, _browserevent2.default.KEYPRESS, this._handleKeyboardEvent, this);
	
	      // 监听浏览器窗口变化，并做自适应
	      var handleRize = this.updateSize.bind(this);
	      window.addEventListener(_eventtype.EventType.RESIZE, handleRize, false);
	
	      this.updateSize();
	      this.render();
	    }
	  }]);
	
	  return Map;
	}(_baseobject2.default);
	
	exports.default = Map;
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _singleimagelayer = __webpack_require__(41);
	
	var _singleimagelayer2 = _interopRequireDefault(_singleimagelayer);
	
	var _featurelayer = __webpack_require__(38);
	
	var _featurelayer2 = _interopRequireDefault(_featurelayer);
	
	var _renderer = __webpack_require__(60);
	
	var _renderer2 = _interopRequireDefault(_renderer);
	
	var _featurelayerrenderer = __webpack_require__(61);
	
	var _featurelayerrenderer2 = _interopRequireDefault(_featurelayerrenderer);
	
	var _imagelayerrenderer = __webpack_require__(69);
	
	var _imagelayerrenderer2 = _interopRequireDefault(_imagelayerrenderer);
	
	var _domutil = __webpack_require__(42);
	
	var _transform = __webpack_require__(63);
	
	var _rendereventtype = __webpack_require__(70);
	
	var _array = __webpack_require__(26);
	
	var _renderevent = __webpack_require__(71);
	
	var _renderevent2 = _interopRequireDefault(_renderevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 图形渲染调度器
	 *
	 */
	var CanvasRenderer = function (_Renderer) {
	  _inherits(CanvasRenderer, _Renderer);
	
	  function CanvasRenderer(container, map) {
	    _classCallCheck(this, CanvasRenderer);
	
	    var _this = _possibleConstructorReturn(this, _Renderer.call(this, container, map));
	
	    _this._context = null;
	    _this._canvas = null;
	
	    _this._rendererVisible = true;
	    _this._layerRenderers = [];
	    _this._transform = _transform.Transform.create();
	
	    _this._addToContainer(container);
	    return _this;
	  }
	
	  /**
	   * Add the canvas dom to the container
	   * @param container
	   * @private
	   */
	
	
	  CanvasRenderer.prototype._addToContainer = function _addToContainer(container) {
	    /**
	     * 创建CANVAS元素，并将其添加到container中
	     * 该canvas层作为图形绘制层
	     */
	    var _context = this.context;
	    this._canvas = _context.canvas;
	    this._canvas.style.width = '100%';
	    this._canvas.style.height = '100%';
	    this._canvas.className = 'dt-unselectable';
	    container.insertBefore(this._canvas, container.childNodes[0] || null);
	  };
	
	  /**
	   * Render frame
	   * @param frameState
	   */
	
	
	  CanvasRenderer.prototype.renderFrame = function renderFrame(frameState) {
	    var _this2 = this;
	
	    if (this.map === null) {
	      return;
	    }
	
	    if (!frameState) {
	      if (this._rendererVisible) {
	        this._canvas.style.display = 'none';
	        this._rendererVisible = false;
	
	        return;
	      }
	    }
	
	    var context = this.context;
	
	    var canvasWidth = frameState.size[0];
	    var canvasHeight = frameState.size[1];
	
	    if (this._canvas.width !== canvasWidth || this._canvas.height !== canvasHeight) {
	      this._canvas.width = canvasWidth;
	      this._canvas.height = canvasHeight;
	    } else {
	      // context.clearRect(0,0,canvasWidth,canvasHeight)
	
	      this._canvas.width = canvasWidth;
	      this._canvas.height = canvasHeight;
	    }
	
	    // context.translate(0.5, 0.5)
	
	    var layers = this.map.layers;
	
	    // layers rendered in order
	    (0, _array.stableSort)(layers, this.sortByZIndex);
	
	    // 更新转化运算矩阵
	    this.updateTransform(frameState);
	
	    this._dispatchComposeEvent(_rendereventtype.RenderEventType.PRERENDER, frameState);
	
	    layers.forEach(function (layer) {
	      if (layer.visible) {
	        var layerRender = _this2.getLayerRenderer(layer);
	
	        if (layerRender.prepareFrame(frameState)) {
	          layerRender.composeFrame(frameState, context);
	        }
	      }
	    });
	
	    this._dispatchComposeEvent(_rendereventtype.RenderEventType.POSTRENDER, frameState);
	  };
	
	  /**
	   * Get the layer renderer by the params layer object
	   * @param layer
	   * @returns {*}
	   */
	
	
	  CanvasRenderer.prototype.getLayerRenderer = function getLayerRenderer(layer) {
	    var layerKey = layer.id.toString();
	    // 应用层缓存
	    if (layerKey in this._layerRenderers) {
	      return this._layerRenderers[layerKey];
	    } else {
	      var layerRenderer = this.createLayerRenderer(layer);
	      this._layerRenderers[layerKey] = layerRenderer;
	      return layerRenderer;
	    }
	  };
	
	  /**
	   * Create the layer renderer
	   * @param layer
	   * @returns {*}
	   */
	
	
	  CanvasRenderer.prototype.createLayerRenderer = function createLayerRenderer(layer) {
	    if (layer instanceof _singleimagelayer2.default) {
	      return new _imagelayerrenderer2.default(layer, this.context);
	    } else if (layer instanceof _featurelayer2.default) {
	      return new _featurelayerrenderer2.default(layer, this.context, this.map);
	    } else {
	      return null;
	    }
	  };
	
	  /**
	   * Update the transform
	   * @param frameState
	   */
	
	
	  CanvasRenderer.prototype.updateTransform = function updateTransform(frameState) {
	    var viewState = frameState.viewState;
	    var coordinateToPixelTransform = frameState.toPixelTransform;
	    var pixelToCoordinateTransform = frameState.toCoordinateTransform;
	    var size = frameState.size;
	    var resolution = viewState.resolution;
	    var center = viewState.center;
	    var rotation = viewState.rotation;
	
	    _transform.Transform.compose(coordinateToPixelTransform, size[0] / 2, size[1] / 2, 1 / resolution, 1 / resolution, -rotation, -center[0], -center[1]);
	
	    _transform.Transform.invert(_transform.Transform.setFromArray(pixelToCoordinateTransform, coordinateToPixelTransform));
	  };
	
	  /**
	   *
	   * @param state1
	   * @param state2
	   * @returns {number}
	   */
	
	
	  CanvasRenderer.prototype.sortByZIndex = function sortByZIndex(state1, state2) {
	    return state1.zIndex - state2.zIndex;
	  };
	
	  /**
	   * 
	   * @private
	   */
	  CanvasRenderer.prototype._dispatchComposeEvent = function _dispatchComposeEvent(type, frameState) {
	    var map = this.map;
	    var context = this.context;
	    if (map.hasListener(type)) {
	
	      // const transform = this.getTransform(frameState)
	
	      var composeEvent = new _renderevent2.default(type, frameState, context, null);
	
	      map.dispatchEvent(composeEvent);
	    }
	  };
	
	  _createClass(CanvasRenderer, [{
	    key: 'canvas',
	    get: function get() {
	      return this._canvas;
	    }
	  }, {
	    key: 'context',
	    get: function get() {
	      if (!this._context) {
	        this._context = (0, _domutil.createCanvasContext2D)();
	      }
	
	      return this._context;
	    }
	  }]);
	
	  return CanvasRenderer;
	}(_renderer2.default);
	
	exports.default = CanvasRenderer;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 地图渲染器基类，
	 * @class Renderer
	 * @extends BaseObject
	 * @module renderer
	 */
	var Renderer = function (_BaseObject) {
	  _inherits(Renderer, _BaseObject);
	
	  function Renderer(contianer, map) {
	    _classCallCheck(this, Renderer);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._map = map;
	    return _this;
	  }
	
	  /**
	   * @property map
	   * @type {mk.Map}
	   */
	
	
	  /**
	   *
	   * @method renderFrame
	   * @abstract
	   * @param frameState {Object}
	   */
	  Renderer.prototype.renderFrame = function renderFrame(frameState) {}; // eslint-disable-line no-unused-vars
	
	  /**
	   * @method clear
	   * @abstract
	   */
	
	
	  Renderer.prototype.clear = function clear() {};
	
	  _createClass(Renderer, [{
	    key: 'map',
	    get: function get() {
	      return this._map;
	    }
	  }]);
	
	  return Renderer;
	}(_baseobject2.default);
	
	exports.default = Renderer;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _layerrenderer = __webpack_require__(62);
	
	var _layerrenderer2 = _interopRequireDefault(_layerrenderer);
	
	var _pointrender = __webpack_require__(64);
	
	var _pointrender2 = _interopRequireDefault(_pointrender);
	
	var _linerender = __webpack_require__(66);
	
	var _linerender2 = _interopRequireDefault(_linerender);
	
	var _polygonrender = __webpack_require__(67);
	
	var _polygonrender2 = _interopRequireDefault(_polygonrender);
	
	var _textrender = __webpack_require__(68);
	
	var _textrender2 = _interopRequireDefault(_textrender);
	
	var _transform = __webpack_require__(63);
	
	var _extentutil = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FeatureLayerRenderer = function (_LayerRenderer) {
	  _inherits(FeatureLayerRenderer, _LayerRenderer);
	
	  function FeatureLayerRenderer(layer, context, map) {
	    _classCallCheck(this, FeatureLayerRenderer);
	
	    var _this = _possibleConstructorReturn(this, _LayerRenderer.call(this, layer, context));
	
	    _this._map = map;
	
	    /**
	     *
	     * @type {Map}
	     * @private
	     */
	    _this._geometryRenderGroup = new Map();
	
	    /**
	     *
	     * @type {TextRender}
	     * @private
	     */
	    _this._textRender = new _textrender2.default(_this.context);
	
	    /**
	     *
	     * @type {null}
	     * @private
	     */
	    _this._maxExtent = null;
	
	    /**
	     *
	     * @type {Array}
	     * @private
	     */
	    _this._renderFeatures = [];
	
	    /**
	     *
	     * @type {NaN}
	     * @private
	     */
	    _this._renderResolution = Number.NaN;
	
	    /**
	     *
	     * @type {[*]}
	     * @private
	     */
	    _this._renderExtent = [Infinity, Infinity, -Infinity, -Infinity];
	
	    /**
	     *
	     * @type {NaN}
	     * @private
	     */
	    _this._renderRevision = NaN;
	
	    /**
	     *
	     * @type {boolean}
	     * @private
	     */
	    _this._cacheableThisTime = true;
	
	    return _this;
	  }
	
	  /**
	   *  Get a renderer by geometry type
	   * @param geometry
	   * @returns {*}
	   * @private
	   */
	
	
	  FeatureLayerRenderer.prototype._getGeometryRender = function _getGeometryRender(geometry) {
	    var type = geometry.geometryType;
	
	    if (!this._geometryRenderGroup.has(type)) {
	      this._geometryRenderGroup.set(type, new FeatureLayerRenderer.GeometryRender[type](this.context));
	    }
	
	    return this._geometryRenderGroup.get(type);
	  };
	
	  FeatureLayerRenderer.prototype._renderFeaturesInOrder = function _renderFeaturesInOrder(features) {
	    if (features === null || features === undefined) {
	      return features;
	    }
	
	    if (features.length === 0) {
	      return features;
	    }
	  };
	
	  FeatureLayerRenderer.prototype._calculaterFeaturesFontSize = function _calculaterFeaturesFontSize(features) {
	    var view = this._map.view;
	    var originResolution = view._originalResolution;
	    var resolutions = view._resolutions;
	    var resolution = view._resolution;
	
	    if (!resolutions) {
	      return;
	    }
	
	    var oriIndex = resolutions.findIndex(function (r) {
	      return r == originResolution;
	    });
	    var curIndex = resolutions.findIndex(function (r) {
	      return r == resolution;
	    });
	
	    var deep = curIndex - oriIndex;
	    if (deep <= 0) {
	      deep = 0;
	    }
	
	    var font = 12 + deep * 2;
	    if (font >= 24) {
	      font = 24;
	    }
	
	    // const fontStr = `normal ${font}px Arial`
	
	    features.forEach(function (feature) {
	      var style = feature.style[0];
	      var fontStr = style.textStyle.font;
	
	      var boldFont = fontStr.split(' ')[0] + ' ' + font + 'px Arial';
	
	      style.textStyle.font = boldFont;
	    });
	  };
	
	  /**
	   * 1、对渲染对象需要做切割 （当前范围内）
	   */
	
	
	  FeatureLayerRenderer.prototype.prepareFrame = function prepareFrame(frameState) {
	    var layer = this.layer;
	    var frameExtent = frameState.extent;
	    var viewState = frameState.viewState;
	    var resolution = viewState.resolution;
	    var layerRevision = layer.revision;
	    var featureLayerRenderBuffer = layer.renderBuffer;
	
	    var renderExtent = _extentutil.ExtentUtil.buffer(frameExtent, featureLayerRenderBuffer * resolution);
	
	    if (this._renderResolution === resolution && this._renderRevision === layerRevision && _extentutil.ExtentUtil.containsExtent(this._renderExtent, renderExtent)) {
	      this._cacheableThisTime = true;
	
	      // return true
	    }
	
	    // 加载当前屏的图形
	    var features = this.layer.loadFeature(renderExtent);
	
	    this._cacheableThisTime = false;
	    this._renderFeatures = features;
	    this._maxExtent = renderExtent;
	    this._renderResolution = resolution;
	    this._renderExtent = renderExtent;
	    this._renderRevision = layerRevision;
	
	    if (features.length === 0) {
	      return false;
	    }
	
	    return true;
	  };
	
	  /**
	   *
	   */
	
	
	  FeatureLayerRenderer.prototype.composeFrame = function composeFrame(frameStateOpt, context) {
	    var _this2 = this;
	
	    var frameState = frameStateOpt;
	    var viewState = frameState.viewState;
	    var layer = this.layer;
	    var features = this._renderFeatures;
	    var resolution = viewState.resolution;
	
	    var transform = this.getTransform(frameState, 0);
	
	    this.preCompose(context, frameState, transform);
	
	    // Clip the current extent so that the parts of geometries
	    // will not be rendered
	    this._clipExtent(transform, context);
	
	    features.forEach(function (feature) {
	      var renderStyle = void 0;
	
	      if (feature.style) {
	        renderStyle = feature.style;
	      } else {
	        var styleFunction = layer.styleFunction;
	        if (styleFunction) {
	          renderStyle = styleFunction(feature, resolution);
	
	          // 应用图层样式
	          feature.style = _this2._cloneRenderStyle(renderStyle);
	        }
	      }
	
	      var geomertyRender = _this2._getGeometryRender(feature.geometry);
	      _this2._resetRender(geomertyRender);
	      geomertyRender.render(feature, renderStyle, transform);
	
	      /**
	       * Render text
	       */
	      if (feature.textDisplay) {
	        _this2._calculaterFeaturesFontSize([feature]);
	        _this2._textRender.render(feature, feature.style, transform);
	      }
	    });
	
	    context.restore();
	
	    this.postCompose(context, frameState, transform);
	
	    return true;
	  };
	
	  /**
	   *
	   * @param renderStyle
	   * @returns {*}
	   * @private
	   */
	
	
	  FeatureLayerRenderer.prototype._cloneRenderStyle = function _cloneRenderStyle(renderStyle) {
	    if (renderStyle) {
	      var newStyle = [];
	      renderStyle.forEach(function (rs) {
	        newStyle.push(rs.clone());
	      });
	
	      return newStyle;
	    }
	
	    return null;
	  };
	
	  /**
	   * Clip the context
	   * @param transform
	   * @private
	   */
	
	
	  FeatureLayerRenderer.prototype._clipExtent = function _clipExtent(transform, context) {
	    var flatClipCoords = this.getClipCoords(transform);
	
	    context.save();
	    context.beginPath();
	    context.moveTo(flatClipCoords[0], flatClipCoords[1]);
	    context.lineTo(flatClipCoords[2], flatClipCoords[3]);
	    context.lineTo(flatClipCoords[4], flatClipCoords[5]);
	    context.lineTo(flatClipCoords[6], flatClipCoords[7]);
	    context.clip();
	  };
	
	  /**
	   * Get clip coordinates
	   * @param transform
	   * @returns {[*,*,*,*,*,*,*,*]}
	   */
	
	
	  FeatureLayerRenderer.prototype.getClipCoords = function getClipCoords(transform) {
	    var maxExtent = this._maxExtent;
	    var minX = maxExtent[0];
	    var minY = maxExtent[1];
	    var maxX = maxExtent[2];
	    var maxY = maxExtent[3];
	    var flatClipCoords = [minX, minY, minX, maxY, maxX, maxY, maxX, minY];
	    _transform.Transform.transform2D(flatClipCoords, 0, 8, 2, transform, flatClipCoords);
	    return flatClipCoords;
	  };
	
	  /**
	   *
	   * @param geomertyRender
	   * @private
	   */
	
	
	  FeatureLayerRenderer.prototype._resetRender = function _resetRender(geomertyRender) {
	    if (!this._cacheableThisTime) {
	      geomertyRender.resetRenderOption();
	    }
	  };
	
	  FeatureLayerRenderer.prototype.preCompose = function preCompose() {};
	
	  FeatureLayerRenderer.prototype.postCompose = function postCompose() {};
	
	  return FeatureLayerRenderer;
	}(_layerrenderer2.default);
	
	exports.default = FeatureLayerRenderer;
	
	
	FeatureLayerRenderer.GeometryRender = {};
	
	FeatureLayerRenderer.GeometryRender['point'] = _pointrender2.default;
	FeatureLayerRenderer.GeometryRender['line'] = _linerender2.default;
	FeatureLayerRenderer.GeometryRender['polygon'] = _polygonrender2.default;
	FeatureLayerRenderer.GeometryRender['multi_polygon'] = _polygonrender2.default;
	FeatureLayerRenderer.GeometryRender['extent'] = _polygonrender2.default;
	FeatureLayerRenderer.GeometryRender['parallelogram'] = _polygonrender2.default;
	FeatureLayerRenderer.GeometryRender['rotatable_extent'] = _polygonrender2.default;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _transform = __webpack_require__(63);
	
	var _extentutil = __webpack_require__(13);
	
	var _imagestate = __webpack_require__(33);
	
	var _eventtype = __webpack_require__(12);
	
	var _canvas = __webpack_require__(7);
	
	var _eventmanager = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LayerRenderer = function (_BaseObject) {
	  _inherits(LayerRenderer, _BaseObject);
	
	  function LayerRenderer(layer, context) {
	    _classCallCheck(this, LayerRenderer);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._context = context;
	    _this._layer = layer;
	
	    _this.renderedResolution = undefined;
	
	    _this._transform = _extentutil.ExtentUtil.createEmpty();
	    return _this;
	  }
	
	  /**
	   *
	   * @param frameState
	   * @param offsetX
	   * @returns {*|!Transform}
	   */
	
	
	  LayerRenderer.prototype.getTransform = function getTransform(frameState, offsetX) {
	    var viewState = frameState.viewState;
	    var pixelRatio = 1;
	    var dx1 = pixelRatio * frameState.size[0] / 2;
	    var dy1 = pixelRatio * frameState.size[1] / 2;
	    var sx = pixelRatio / viewState.resolution;
	    var sy = sx;
	    var angle = -viewState.rotation;
	    var dx2 = -viewState.center[0] + offsetX;
	    var dy2 = -viewState.center[1];
	    return _transform.Transform.compose(this._transform, dx1, dy1, sx, sy, angle, dx2, dy2);
	  };
	
	  /**
	   * Load the image
	   * @param image
	   * @returns {boolean}
	   */
	
	
	  LayerRenderer.prototype.loadImage = function loadImage(image) {
	    var imageState = image.state;
	    if (imageState !== _imagestate.ImageState.LOADED && imageState !== _imagestate.ImageState.ERROR) {
	      (0, _eventmanager.listen)(image, _eventtype.EventType.CHANGE, this._handleImageChange, this);
	    }
	
	    if (imageState === _imagestate.ImageState.IDLE) {
	      image.load();
	      imageState = image.state;
	    }
	
	    return imageState === _imagestate.ImageState.LOADED;
	  };
	
	  /**
	   *
	   * @param event
	   * @private
	   */
	
	
	  LayerRenderer.prototype._handleImageChange = function _handleImageChange(event) {
	    var image = event.target;
	    if (image.state === _imagestate.ImageState.LOADED) {
	      this.renderIfReadyAndVisible();
	    }
	  };
	
	  /**
	   *
	   */
	
	
	  LayerRenderer.prototype.renderIfReadyAndVisible = function renderIfReadyAndVisible() {
	    var layer = this.layer;
	    // if (layer.visible && layer.getSourceState() == State.READY) {
	    if (layer.visible) {
	      layer.changed();
	      // this.changed()
	    }
	  };
	
	  /**
	   *
	   * @param context
	   * @param frameState
	   * @param extent
	   */
	
	
	  LayerRenderer.prototype.clip = function clip(context, frameState, extent) {
	    var pixelRatio = frameState.pixelRatio;
	    var width = frameState.size[0] * pixelRatio;
	    var height = frameState.size[1] * pixelRatio;
	    var rotation = frameState.viewState.rotation;
	    var topLeft = _extentutil.ExtentUtil.getTopLeft(extent);
	    var topRight = _extentutil.ExtentUtil.getTopRight(extent);
	    var bottomRight = _extentutil.ExtentUtil.getBottomRight(extent);
	    var bottomLeft = _extentutil.ExtentUtil.getBottomLeft(extent);
	
	    _transform.Transform.apply(frameState.toPixelTransform, topLeft);
	    _transform.Transform.apply(frameState.toPixelTransform, topRight);
	    _transform.Transform.apply(frameState.toPixelTransform, bottomRight);
	    _transform.Transform.apply(frameState.toPixelTransform, bottomLeft);
	
	    context.save();
	    _canvas.Canvas.rotateAtOffset(context, -rotation, width / 2, height / 2);
	    context.beginPath();
	    context.moveTo(topLeft[0] * pixelRatio, topLeft[1] * pixelRatio);
	    context.lineTo(topRight[0] * pixelRatio, topRight[1] * pixelRatio);
	    context.lineTo(bottomRight[0] * pixelRatio, bottomRight[1] * pixelRatio);
	    context.lineTo(bottomLeft[0] * pixelRatio, bottomLeft[1] * pixelRatio);
	    context.clip();
	    _canvas.Canvas.rotateAtOffset(context, rotation, width / 2, height / 2);
	  };
	
	  /**
	   *
	   * @returns {*}
	   */
	
	
	  /**
	   *
	   * @param frameStateOpt
	   */
	  LayerRenderer.prototype.prepareFrame = function prepareFrame(frameStateOpt) {}; // eslint-disable-line no-unused-vars
	
	  /**
	   *
	   * @param frameStateOpt
	   * @param context
	   */
	
	
	  LayerRenderer.prototype.composeFrame = function composeFrame(frameStateOpt, context) {}; // eslint-disable-line no-unused-vars
	
	  /**
	   *
	   * @param context
	   * @param frameState
	   * @param optTransform
	   */
	
	
	  LayerRenderer.prototype.postCompose = function postCompose(context, frameState, optTransform) {}; // eslint-disable-line no-unused-vars
	
	  /**
	   *
	   * @param context
	   * @param frameState
	   * @param optTransform
	   */
	
	
	  LayerRenderer.prototype.preCompose = function preCompose(context, frameState, optTransform) {}; // eslint-disable-line no-unused-vars
	
	
	  _createClass(LayerRenderer, [{
	    key: 'layer',
	    get: function get() {
	      return this._layer;
	    }
	  }, {
	    key: 'context',
	    get: function get() {
	      return this._context;
	    }
	  }]);
	
	  return LayerRenderer;
	}(_baseobject2.default);
	
	exports.default = LayerRenderer;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Collection of affine 2d transformation functions. The functions work on an
	 * array of 6 elements. The element order is compatible with the [SVGMatrix
	 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
	 * a subset (elements a to f) of a 3x3 martrix:
	 * ```
	 * [ a c e ]
	 * [ b d f ]
	 * [ 0 0 1 ]
	 * ```
	 */
	
	var Transform = exports.Transform = {
	
	  /**
	   * @private
	   * @type {ol.Transform}
	   */
	  tmp_: new Array(6),
	
	  /**
	   * 恒等矩阵
	   *
	   * Create an identity（恒等） transform.
	   * @return {!Transform} Identity transform.
	   */
	  create: function create() {
	    return [1, 0, 0, 1, 0, 0];
	  },
	
	  /**
	   * Resets the given transform to an identity（恒等） transform.
	   *
	   * @param {!Transform} transform Transform.
	   * @return {!Transform} Transform.
	   */
	  reset: function reset(transform) {
	    return transform.set(transform, 1, 0, 0, 1, 0, 0);
	  },
	
	  /**
	   *
	   * @param flatCoordinates
	   * @param offset
	   * @param end
	   * @param stride
	   * @param transform
	   * @param opt_dest
	   * @returns {Array}
	   */
	  transform2D: function transform2D(flatCoordinates, offset, end, stride, transform, opt_dest) {
	    var dest = opt_dest ? opt_dest : [];
	    var i = 0;
	    var j = void 0;
	
	    for (j = offset; j < end; j += stride) {
	      var x = flatCoordinates[j];
	      var y = flatCoordinates[j + 1];
	      dest[i++] = transform[0] * x + transform[2] * y + transform[4];
	      dest[i++] = transform[1] * x + transform[3] * y + transform[5];
	    }
	
	    if (opt_dest && dest.length != i) {
	      dest.length = i;
	    }
	
	    return dest;
	  },
	
	  /**
	   * 矩阵相乘
	   *
	   * Multiply（相乘） the underlying matrices of two transforms and return the result in
	   * the first transform.
	   *
	   * @param {!Transform} transform1 Transform parameters of matrix 1.
	   * @param {!Transform} transform2 Transform parameters of matrix 2.
	   * @return {!Transform} transform1 multiplied with transform2.
	   */
	  multiply: function multiply(transform1, transform2) {
	    var a1 = transform1[0];
	    var b1 = transform1[1];
	    var c1 = transform1[2];
	    var d1 = transform1[3];
	    var e1 = transform1[4];
	    var f1 = transform1[5];
	    var a2 = transform2[0];
	    var b2 = transform2[1];
	    var c2 = transform2[2];
	    var d2 = transform2[3];
	    var e2 = transform2[4];
	    var f2 = transform2[5];
	
	    transform1[0] = a1 * a2 + c1 * b2;
	    transform1[1] = b1 * a2 + d1 * b2;
	    transform1[2] = a1 * c2 + c1 * d2;
	    transform1[3] = b1 * c2 + d1 * d2;
	    transform1[4] = a1 * e2 + c1 * f2 + e1;
	    transform1[5] = b1 * e2 + d1 * f2 + f1;
	
	    return transform1;
	  },
	
	  /**
	   * Set the transform components a-f on a given transform.
	   *
	   * @param {!Transform} transform Transform.
	   * @param {number} a The a component of the transform.
	   * @param {number} b The b component of the transform.
	   * @param {number} c The c component of the transform.
	   * @param {number} d The d component of the transform.
	   * @param {number} e The e component of the transform.
	   * @param {number} f The f component of the transform.
	   * @return {!Transform} Matrix with transform applied.
	   */
	  set: function set(transform, a, b, c, d, e, f) {
	    transform[0] = a;
	    transform[1] = b;
	    transform[2] = c;
	    transform[3] = d;
	    transform[4] = e;
	    transform[5] = f;
	    return transform;
	  },
	
	  /**
	   * Set transform on one matrix from another matrix.
	   *
	   * @param {!Transform} transform1 Matrix to set transform to.
	   * @param {!Transform} transform2 Matrix to set transform from.
	   * @return {!Transform} transform1 with transform from transform2 applied.
	   */
	  setFromArray: function setFromArray(transform1, transform2) {
	    transform1[0] = transform2[0];
	    transform1[1] = transform2[1];
	    transform1[2] = transform2[2];
	    transform1[3] = transform2[3];
	    transform1[4] = transform2[4];
	    transform1[5] = transform2[5];
	    return transform1;
	  },
	
	  /**
	   * 矩阵运算
	   * 将坐标值矩阵运算
	   *
	   * Transforms the given coordinate with the given transform returning the
	   * resulting, transformed coordinate. The coordinate will be modified in-place.
	   *
	   * @param {Transform} transform The transformation.
	   * @param {Coordinate|Pixel} coordinate The coordinate to transform.
	   * @return {Coordinate|Pixel} return coordinate so that operations can be
	   *     chained together.
	   */
	  apply: function apply(transform, coordinate) {
	    var x = coordinate[0];
	    var y = coordinate[1];
	    coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
	    coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
	    return coordinate;
	  },
	
	  /**
	   * Applies rotation to the given transform.
	   *
	   * 矩阵旋转
	   *
	   * @param {!Transform} transform Transform.
	   * @param {number} angle Angle in radians.
	   * @return {!Transform} The rotated transform.
	   */
	  rotate: function rotate(transform, angle) {
	    var cos = Math.cos(angle);
	    var sin = Math.sin(angle);
	    return transform.multiply(transform, transform.set(transform.tmp_, cos, sin, -sin, cos, 0, 0));
	  },
	
	  /**
	   *  Applies scale to a given transform.
	   *
	   * 矩阵缩放
	   *
	   * @param {!Transform} transform Transform.
	   * @param {number} x Scale factor x.
	   * @param {number} y Scale factor y.
	   * @return {!Transform} The scaled transform.
	   */
	  scale: function scale(transform, x, y) {
	    return transform.multiply(transform, transform.set(transform.tmp_, x, 0, 0, y, 0, 0));
	  },
	
	  /**
	   * Applies translation to the given transform.
	   *
	   * 矩阵转换
	   *
	   * @param {!Transform} transform Transform.
	   * @param {number} dx Translation x.
	   * @param {number} dy Translation y.
	   * @return {!Transform} The translated transform.
	   */
	  translate: function translate(transform, dx, dy) {
	    return transform.multiply(transform, transform.set(transform.tmp_, 1, 0, 0, 1, dx, dy));
	  },
	
	  /**
	   * Creates a composite transform given an initial translation, scale, rotation, and
	   * final translation (in that order only, not commutative).
	   *
	   * 复杂矩形运算
	   *
	   * @param {!Transform} transform The transform (will be modified in place).
	   * @param {number} dx1 Initial translation x.
	   * @param {number} dy1 Initial translation y.
	   * @param {number} sx Scale factor x.
	   * @param {number} sy Scale factor y.
	   * @param {number} angle Rotation (in counter-clockwise radians).
	   * @param {number} dx2 Final translation x.
	   * @param {number} dy2 Final translation y.
	   * @return {!Transform} The composite transform.
	   */
	  compose: function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
	    var sin = Math.sin(angle);
	    var cos = Math.cos(angle);
	    transform[0] = sx * cos;
	    transform[1] = sy * sin;
	    transform[2] = -sx * sin;
	    transform[3] = sy * cos;
	    transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
	    transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
	    return transform;
	  },
	
	  /**
	   * Invert the given transform.
	   *
	   * @param {!Transform} transform Transform.
	   * @return {!Transform} Inverse of the transform.
	   */
	  invert: function invert(transform) {
	    var det = Transform.determinant(transform);
	
	    var a = transform[0];
	    var b = transform[1];
	    var c = transform[2];
	    var d = transform[3];
	    var e = transform[4];
	    var f = transform[5];
	
	    transform[0] = d / det;
	    transform[1] = -b / det;
	    transform[2] = -c / det;
	    transform[3] = a / det;
	    transform[4] = (c * f - d * e) / det;
	    transform[5] = -(a * f - b * e) / det;
	
	    return transform;
	  },
	
	  /**
	   * Returns the determinant of the given matrix.
	   *
	   * 行列式
	   *
	   * @param {!Transform} mat Matrix.
	   * @return {number} Determinant.
	   */
	  determinant: function determinant(mat) {
	    return mat[0] * mat[3] - mat[1] * mat[2];
	  }
	};
	
	exports.default = {
	  Transform: Transform
	};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _geomertyrender = __webpack_require__(65);
	
	var _geomertyrender2 = _interopRequireDefault(_geomertyrender);
	
	var _helpers = __webpack_require__(3);
	
	var _transform = __webpack_require__(63);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/3/20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var PointRender = function (_GeometryRender) {
	  _inherits(PointRender, _GeometryRender);
	
	  function PointRender(context) {
	    _classCallCheck(this, PointRender);
	
	    var _this = _possibleConstructorReturn(this, _GeometryRender.call(this, context));
	
	    _this._pixelCoordinates = [];
	    return _this;
	  }
	
	  /**
	   * Render a point
	   * @param feature
	   * @param transform
	   */
	
	
	  PointRender.prototype.render = function render(feature, renderStyle, transform) {
	    if (!feature) {
	      return;
	    }
	
	    var ctx = this.context;
	    var styleArray = renderStyle;
	    var geomerty = feature.geometry;
	
	    var coordinates = [geomerty.x, geomerty.y];
	
	    // TODO  Should be cached
	    var pixelCoordinates = _transform.Transform.transform2D(coordinates, 0, coordinates.length, 2, transform, this._pixelCoordinates);
	
	    var x = pixelCoordinates[0];
	    var y = pixelCoordinates[1];
	
	    var len = styleArray.length;
	    for (var i = 0; i < len; i++) {
	      var styleObj = styleArray[i];
	
	      var renderOptions = {
	        centerX: x + 0.5 | 0,
	        centerY: y + 0.5 | 0,
	        radius: styleObj.size / 2 || styleObj.borderStyle.width / 2,
	        fillStyle: (0, _helpers.colorToString)(styleObj.color, styleObj.alpha),
	        borderStyle: styleObj.borderStyle
	      };
	
	      this.drawCircle(ctx, renderOptions);
	    }
	  };
	
	  PointRender.prototype.drawCircle = function drawCircle(ctx, renderOptions) {
	    // console.log('类型为圆，开始绘制圆')
	    ctx.save();
	    ctx.beginPath();
	    ctx.arc(renderOptions.centerX, renderOptions.centerY, renderOptions.radius, 0, 2 * Math.PI, true);
	
	    if (renderOptions.fillStyle) {
	      ctx.fillStyle = renderOptions.fillStyle;
	      ctx.fill();
	    }
	
	    var borderStyle = renderOptions.borderStyle;
	    if (borderStyle) {
	      ctx.strokeStyle = (0, _helpers.colorToString)(borderStyle.color, borderStyle.alpha);
	      ctx.lineWidth = borderStyle.width;
	
	      if (borderStyle.lineDash) {
	        ctx.setLineDash(borderStyle.lineDash);
	      }
	
	      ctx.stroke();
	    }
	
	    ctx.closePath();
	    ctx.restore();
	  };
	
	  return PointRender;
	}(_geomertyrender2.default);
	
	exports.default = PointRender;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _array = __webpack_require__(26);
	
	var _transform = __webpack_require__(63);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/3/20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var GeomertyRender = function (_BaseObject) {
	  _inherits(GeomertyRender, _BaseObject);
	
	  function GeomertyRender(context) {
	    _classCallCheck(this, GeomertyRender);
	
	    /**
	     *
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._context = context;
	
	    /**
	     *
	     * @type {Array}
	     * @private
	     */
	    _this._pixelCoordinates = null;
	
	    /**
	     *
	     * @type {*}
	     */
	    _this.renderedTransform = _transform.Transform.create();
	    return _this;
	  }
	
	  /**
	   *
	   */
	
	
	  GeomertyRender.prototype.resetRenderOption = function resetRenderOption() {
	    this._pixelCoordinates = null;
	    this.renderedTransform = _transform.Transform.create();
	  };
	
	  /**
	   *
	   * @param transform1
	   * @param transform2
	   */
	
	
	  GeomertyRender.prototype.equalsTransform = function equalsTransform(transform1, transform2) {
	    return (0, _array.equals)(transform1, transform2);
	  };
	
	  /**
	   * context getter
	   * @returns {*}
	   */
	
	
	  /**
	   * abstract function
	   * @param feature
	   * @param renderStyle
	   * @param transform
	   */
	  GeomertyRender.prototype.render = function render(feature, renderStyle, transform) {}; // eslint-disable-line no-unused-vars
	
	
	  _createClass(GeomertyRender, [{
	    key: 'context',
	    get: function get() {
	      return this._context;
	    }
	  }]);
	
	  return GeomertyRender;
	}(_baseobject2.default);
	
	exports.default = GeomertyRender;
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _geomertyrender = __webpack_require__(65);
	
	var _geomertyrender2 = _interopRequireDefault(_geomertyrender);
	
	var _linestyle = __webpack_require__(19);
	
	var _linestyle2 = _interopRequireDefault(_linestyle);
	
	var _helpers = __webpack_require__(3);
	
	var _transform = __webpack_require__(63);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/3/20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var LineRender = function (_GeometryRender) {
	  _inherits(LineRender, _GeometryRender);
	
	  function LineRender(context) {
	    _classCallCheck(this, LineRender);
	
	    return _possibleConstructorReturn(this, _GeometryRender.call(this, context));
	  }
	
	  /**
	   *
	   * @param feature
	   * @param renderStyle
	   * @param transform
	   */
	
	
	  LineRender.prototype.render = function render(feature, renderStyle, transform) {
	    if (!feature) {
	      return;
	    }
	
	    var ctx = this.context;
	    var styleArray = renderStyle;
	    var geometry = feature.geometry;
	
	    var transform2D = _transform.Transform.transform2D;
	    var coordinates = [];
	    // TODO find a way to cache the rendered data
	    if (this._pixelCoordinates && this.equalsTransform(transform, this.renderedTransform)) {
	      coordinates = this._pixelCoordinates;
	      // console.log('get the rendered data from chche for line')
	    } else {
	      var geometryCoordinates = geometry.getCoordinates();
	
	      geometryCoordinates.forEach(function (points) {
	        var coordinate = transform2D(points, 0, points.length, 2, transform);
	
	        coordinate[0] = coordinate[0] + 0.5 | 0;
	        coordinate[1] = coordinate[1] + 0.5 | 0;
	
	        coordinates.push(coordinate);
	      });
	
	      this._pixelCoordinates = coordinates;
	      _transform.Transform.setFromArray(this.renderedTransform, transform);
	      // console.log('caclulate the rendered data for line')
	    }
	
	    var len = styleArray.length;
	    for (var i = 0; i < len; i++) {
	      var styleObj = styleArray[i];
	
	      var renderOptions = {
	        coordinates: coordinates,
	        width: styleObj.width,
	        strokeStyle: (0, _helpers.colorToString)(styleObj.color, styleObj.alpha),
	        lineCap: styleObj.lineCap,
	        lineJion: styleObj.lineJion,
	        miterLimit: styleObj.miterLimit,
	        hasDash: styleObj.style === _linestyle2.default.DASH ? true : false
	      };
	
	      this.drawLine(ctx, renderOptions);
	    }
	  };
	
	  LineRender.prototype.drawLine = function drawLine(ctx, renderOpt) {
	    ctx.save();
	    ctx.strokeStyle = renderOpt.strokeStyle;
	    ctx.lineWidth = renderOpt.width;
	
	    ctx.lineCap = renderOpt.lineCap;
	    ctx.lineJoin = renderOpt.lineJion;
	    ctx.miterLimit = renderOpt.miterLimit;
	
	    ctx.beginPath();
	    var coordinates = renderOpt.coordinates;
	    ctx.moveTo(coordinates[0][0], coordinates[0][1]);
	    for (var i = 0, ii = coordinates.length; i < ii - 1; i++) {
	      ctx.lineTo(coordinates[i + 1][0], coordinates[i + 1][1]);
	    }
	
	    if (renderOpt.hasDash) {
	      ctx.setLineDash([5, 5]);
	    }
	
	    ctx.stroke();
	
	    ctx.closePath();
	    ctx.restore();
	  };
	
	  return LineRender;
	}(_geomertyrender2.default);
	
	exports.default = LineRender;
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _geomertyrender = __webpack_require__(65);
	
	var _geomertyrender2 = _interopRequireDefault(_geomertyrender);
	
	var _linestyle = __webpack_require__(19);
	
	var _linestyle2 = _interopRequireDefault(_linestyle);
	
	var _transform = __webpack_require__(63);
	
	var _helpers = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/3/20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var PolygonRender = function (_GeometryRender) {
	  _inherits(PolygonRender, _GeometryRender);
	
	  function PolygonRender(context) {
	    _classCallCheck(this, PolygonRender);
	
	    return _possibleConstructorReturn(this, _GeometryRender.call(this, context));
	  }
	
	  /**
	   * Render a polygon
	   * @param feature
	   * @param transform
	   * @returns {boolean}
	   */
	
	
	  PolygonRender.prototype.render = function render(feature, renderStyle, transform) {
	    if (!feature) {
	      return;
	    }
	
	    var ctx = this.context;
	    var styleArray = renderStyle;
	    var geometry = feature.geometry;
	
	    var transform2D = _transform.Transform.transform2D;
	    var geometryCoordinages = geometry.getCoordinates();
	    if (geometry.geometryType === _geometry2.default.EXTENT) {
	      geometryCoordinages = [geometryCoordinages];
	    }
	
	    if (!geometryCoordinages) {
	      return false;
	    }
	
	    if (geometryCoordinages.length === 0) {
	      return false;
	    }
	
	    // TODO find a way to cache the rendered data
	    var coordinates = [];
	    var renderCoords = [];
	
	    if (this._pixelCoordinates && this.equalsTransform(transform, this.renderedTransform)) {
	      renderCoords = this._pixelCoordinates;
	    } else {
	      if (geometry.geometryType === _geometry2.default.MULTI_POLYGON) {
	        var polygonCoords = [];
	        // 遍历各个多边形
	        geometryCoordinages.forEach(function (polygon) {
	          polygon.forEach(function (rings) {
	            rings.forEach(function (points) {
	              var coordinate = transform2D(points, 0, points.length, 2, transform);
	
	              coordinate[0] = coordinate[0] + 0.5 | 0;
	              coordinate[1] = coordinate[1] + 0.5 | 0;
	
	              coordinates.push(coordinate);
	            });
	
	            polygonCoords.push(coordinates);
	            coordinates = [];
	          });
	
	          renderCoords.push(polygonCoords);
	          polygonCoords = [];
	        });
	
	        this.renderMutilPolygon(ctx, styleArray, renderCoords);
	      } else {
	        // 遍历多边形各个环
	        geometryCoordinages.forEach(function (rings) {
	          rings.forEach(function (points) {
	            var coordinate = transform2D(points, 0, points.length, 2, transform);
	
	            coordinate[0] = coordinate[0] + 0.5 | 0;
	            coordinate[1] = coordinate[1] + 0.5 | 0;
	
	            coordinates.push(coordinate);
	          });
	
	          renderCoords.push(coordinates);
	          coordinates = [];
	        });
	      }
	
	      this.renderPolygon(ctx, styleArray, renderCoords);
	    }
	
	    this._pixelCoordinates = renderCoords;
	    _transform.Transform.setFromArray(this.renderedTransform, transform);
	
	    return true;
	  };
	
	  /**
	   *
	   * @param ctx
	   * @param styleArray
	   * @param renderCoords
	   */
	
	
	  PolygonRender.prototype.renderMutilPolygon = function renderMutilPolygon(ctx, styleArray, renderCoords) {
	    var _this2 = this;
	
	    renderCoords.forEach(function (polygon) {
	      _this2.renderPolygon(ctx, styleArray, polygon);
	    });
	  };
	
	  /**
	   *
	   * @param ctx
	   * @param styleArray
	   * @param renderCoords
	   */
	
	
	  PolygonRender.prototype.renderPolygon = function renderPolygon(ctx, styleArray, renderCoords) {
	    var len = styleArray.length;
	    for (var i = 0; i < len; i++) {
	      var styleObj = styleArray[i];
	
	      var renderOptions = {
	        coordinates: renderCoords,
	        fillStyle: (0, _helpers.colorToString)(styleObj.color, styleObj.alpha),
	        borderStyle: styleObj.borderStyle
	      };
	
	      this.drawStylePolygon(ctx, renderOptions);
	    }
	  };
	
	  /**
	   * 绘制多边形，需要注意多边形各个环的绘制
	   * @param ctx
	   * @param renderOpt
	   */
	
	
	  PolygonRender.prototype.drawStylePolygon = function drawStylePolygon(ctx, renderOpt) {
	    ctx.save();
	
	    if (renderOpt.fillStyle) {
	      ctx.fillStyle = renderOpt.fillStyle;
	    }
	
	    var borderStyle = renderOpt.borderStyle;
	    if (borderStyle) {
	      ctx.strokeStyle = (0, _helpers.colorToString)(borderStyle.color, borderStyle.alpha);
	      ctx.lineWidth = borderStyle.width;
	
	      if (borderStyle.style === _linestyle2.default.DASH) {
	        ctx.setLineDash([5, 5]);
	      }
	    }
	
	    var coords = renderOpt.coordinates;
	    coords.forEach(function (coordinates, index) {
	      if (index === 0) {
	        ctx.beginPath();
	      }
	
	      ctx.moveTo(coordinates[0][0], coordinates[0][1]);
	      for (var k = 1, kk = coordinates.length; k < kk; k++) {
	        var cd = coordinates[k];
	        ctx.lineTo(cd[0], cd[1]);
	      }
	
	      ctx.closePath();
	    });
	
	    ctx.fill();
	    ctx.stroke();
	    ctx.restore();
	  };
	
	  return PolygonRender;
	}(_geomertyrender2.default);
	
	exports.default = PolygonRender;
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _geomertyrender = __webpack_require__(65);
	
	var _geomertyrender2 = _interopRequireDefault(_geomertyrender);
	
	var _transform = __webpack_require__(63);
	
	var _helpers = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/3/24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// import TextStyle from '../../style/textstyle'
	// import LineStyle from '../../style/linestyle'
	
	var TextRender = function (_GeometryRender) {
	  _inherits(TextRender, _GeometryRender);
	
	  function TextRender(context) {
	    _classCallCheck(this, TextRender);
	
	    var _this = _possibleConstructorReturn(this, _GeometryRender.call(this, context));
	
	    _this._pixelCoordinates = [];
	    return _this;
	  }
	
	  /**
	   *
	   * @param feature
	   * @param transform
	   */
	
	
	  TextRender.prototype.render = function render(feature, renderStyle, transform) {
	    var textStyle = renderStyle[0].textStyle;
	    if (!feature.displayText || !textStyle) {
	      return;
	    }
	
	    var displayText = String(feature.displayText);
	    textStyle.text = displayText;
	
	    var ctx = this.context;
	    ctx.save();
	
	    var geometry = feature.geometry;
	    var coordinates = geometry.getFlatInteriorPoint();
	
	    this._pixelCoordinates = [];
	    var pixelCoordinates = _transform.Transform.transform2D(coordinates, 0, coordinates.length, 2, transform, this._pixelCoordinates);
	
	    for (var i = 0, len = pixelCoordinates.length; i < len; i += 2) {
	      var xValue = pixelCoordinates[i];
	      var yValue = pixelCoordinates[i + 1];
	
	      // set the context text style
	      this._setTextStyle(ctx, textStyle);
	
	      // const offsetX = textStyle.offsetX + 10
	      var offsetX = textStyle.offsetX;
	      // const offsetY = textStyle.offsetY + 10
	      var offsetY = textStyle.offsetY - 3;
	
	      var stroke = textStyle.stroke ? true : false;
	      var fill = textStyle.fill ? true : false;
	      var text = textStyle.text;
	
	      var x = xValue + offsetX;
	      var y = yValue + offsetY;
	
	      var lines = text.split('\n');
	      var numLines = lines.length;
	      var fontSize = void 0,
	          lineY = void 0;
	      if (numLines > 1) {
	        fontSize = Math.round(ctx.measureText('M').width * 1.5);
	        lineY = y - (numLines - 1) / 2 * fontSize;
	      } else {
	        fontSize = 0;
	        lineY = y;
	      }
	
	      for (var lineIndex = 0; lineIndex < numLines; lineIndex++) {
	        var lineText = lines[lineIndex];
	        if (stroke) {
	          ctx.strokeText(lineText, x, lineY);
	        }
	
	        if (fill) {
	          ctx.fillText(lineText, x, lineY);
	        }
	
	        lineY = lineY + fontSize;
	      }
	    }
	
	    ctx.restore();
	  };
	
	  /**
	   *
	   * @param ctx
	   * @param textStyle
	   * @private
	   */
	
	
	  TextRender.prototype._setTextStyle = function _setTextStyle(ctx, textStyle) {
	    var borderStyle = textStyle.stroke;
	
	    ctx.font = textStyle.font;
	    ctx.strokeStyle = (0, _helpers.colorToString)(borderStyle.color, 1);
	    ctx.fillStyle = (0, _helpers.colorToString)(textStyle.fill, 1);
	    ctx.textBaseline = textStyle.textBaseline;
	    ctx.textAlign = textStyle.textAlign;
	    ctx.lineWidth = borderStyle.width;
	    ctx.lineCap = borderStyle.lineCap;
	    ctx.lineJoin = borderStyle.lineJion;
	  };
	
	  return TextRender;
	}(_geomertyrender2.default);
	
	exports.default = TextRender;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _layerrenderer = __webpack_require__(62);
	
	var _layerrenderer2 = _interopRequireDefault(_layerrenderer);
	
	var _transform = __webpack_require__(63);
	
	var _extentutil = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImageLayerRenderer = function (_LayerRenderer) {
	  _inherits(ImageLayerRenderer, _LayerRenderer);
	
	  function ImageLayerRenderer(layer) {
	    _classCallCheck(this, ImageLayerRenderer);
	
	    var _this = _possibleConstructorReturn(this, _LayerRenderer.call(this, layer));
	
	    _this._image = null;
	
	    _this._imageTransform = _transform.Transform.create();
	
	    _this.coordinateToCanvasPixelTransform = _transform.Transform.create();
	    return _this;
	  }
	
	  /**
	   * @inheritDoc
	   */
	
	
	  /**
	   *
	   * @param frameState
	   * @param layerState
	   * @returns {boolean}
	   */
	  ImageLayerRenderer.prototype.prepareFrame = function prepareFrame(frameState) {
	    var pixelRatio = frameState.pixelRatio;
	    var size = frameState.size;
	    var viewState = frameState.viewState;
	    var viewCenter = viewState.center;
	    var viewResolution = viewState.resolution;
	
	    var image = void 0;
	    var imageLayer = this.layer;
	    var renderedExtent = frameState.extent;
	
	    if (!_extentutil.ExtentUtil.isEmpty(renderedExtent)) {
	      var projection = viewState.projection;
	
	      image = imageLayer.getImageInternal(renderedExtent, viewResolution, pixelRatio, projection);
	
	      // Load the image
	      if (image) {
	        var loaded = this.loadImage(image);
	        if (loaded) {
	          this._image = image;
	        }
	      }
	    }
	
	    if (this._image) {
	      image = this._image;
	      var imageExtent = image.extent;
	      var imageResolution = image.resolution;
	      var imagePixelRatio = image.pixelRatio;
	      var scale = pixelRatio * imageResolution / (viewResolution * imagePixelRatio);
	
	      var transform = _transform.Transform.compose(this.imageTransform, pixelRatio * size[0] / 2, pixelRatio * size[1] / 2, scale, -scale, 0, imagePixelRatio * (imageExtent[0] - viewCenter[0]) / imageResolution, imagePixelRatio * (viewCenter[1] - imageExtent[3]) / imageResolution);
	
	      _transform.Transform.compose(this.coordinateToCanvasPixelTransform, pixelRatio * size[0] / 2 - transform[4], pixelRatio * size[1] / 2 - transform[5], pixelRatio / viewResolution, -pixelRatio / viewResolution, 0, -viewCenter[0], -viewCenter[1]);
	    }
	
	    return !!this.image;
	  };
	
	  /**
	   *
	   * @param frameState
	   * @param layerState
	   * @param context
	   */
	
	
	  ImageLayerRenderer.prototype.composeFrame = function composeFrame(frameState, context) {
	    this.preCompose(context, frameState);
	    var image = this.image;
	    if (image) {
	      // clipped rendering if layer extent is set
	      var extent = undefined;
	      var clipped = extent !== undefined && !_extentutil.ExtentUtil.containsExtent(extent, frameState.extent) && _extentutil.ExtentUtil.intersects(extent, frameState.extent);
	
	      if (clipped) {
	        this.clip(context, frameState, extent);
	      }
	
	      var imageLayer = this.layer;
	      var imageTransform = this.imageTransform;
	      var alpha = context.globalAlpha;
	      context.globalAlpha = imageLayer.opacity;
	
	      var dx = imageTransform[4];
	      var dy = imageTransform[5];
	      var dw = image.width * imageTransform[0];
	      var dh = image.height * imageTransform[3];
	      context.imageSmoothingEnabled = false;
	      context.drawImage(image, 0, 0, +image.width, +image.height, Math.round(dx), Math.round(dy), Math.round(dw), Math.round(dh));
	
	      context.globalAlpha = alpha;
	
	      if (clipped) {
	        context.restore();
	      }
	    }
	
	    this.postCompose(context, frameState);
	  };
	
	  _createClass(ImageLayerRenderer, [{
	    key: 'image',
	    get: function get() {
	      return !this._image ? null : this._image.getDomImage();
	    }
	
	    /**
	     * @inheritDoc
	     */
	
	  }, {
	    key: 'imageTransform',
	    get: function get() {
	      return this._imageTransform;
	    }
	  }]);
	
	  return ImageLayerRenderer;
	}(_layerrenderer2.default);
	
	exports.default = ImageLayerRenderer;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by zhangyong on 2017/5/15.
	 */
	
	var RenderEventType = exports.RenderEventType = {};
	
	/**
	 *
	 * @type {string}
	 */
	RenderEventType.PRERENDER = 'prerender';
	
	/**
	 *
	 * @type {string}
	 */
	RenderEventType.POSTRENDER = 'postrender';
	
	/**
	 *
	 * @type {string}
	 */
	RenderEventType.RENDER = 'render';

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseevent = __webpack_require__(35);
	
	var _baseevent2 = _interopRequireDefault(_baseevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhangyong on 2017/6/27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * @class RenderEvent
	 * @extends BaseEvent
	 * @module renderer
	 * @constructor
	 */
	var RenderEvent = function (_BaseEvent) {
	  _inherits(RenderEvent, _BaseEvent);
	
	  function RenderEvent(type, frameState, context, trasform) {
	    _classCallCheck(this, RenderEvent);
	
	    /**
	     * @property frameState
	     * @type {Object}
	     */
	    var _this = _possibleConstructorReturn(this, _BaseEvent.call(this, type));
	
	    _this.frameState = frameState;
	
	    /**
	     * @property trasform
	     * @type {Object}
	     */
	    _this.trasform = trasform;
	
	    /**
	     *@property context
	     *@type {HTML5.}
	     */
	    _this.context = context;
	    return _this;
	  }
	
	  return RenderEvent;
	}(_baseevent2.default);
	
	exports.default = RenderEvent;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _eventmanager = __webpack_require__(21);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BrowserEventHandler = function (_BaseObject) {
	  _inherits(BrowserEventHandler, _BaseObject);
	
	  function BrowserEventHandler(map, element) {
	    _classCallCheck(this, BrowserEventHandler);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this.map = map;
	
	    /**
	     *
	     * @private
	     */
	    _this._element = element;
	
	    /**
	     *
	     * @type {boolean}
	     * @private
	     */
	    _this._dragging = false;
	
	    /**
	     * The most recent "down" type event (or null if none have occurred).
	     * @private
	     */
	    _this._down = null;
	
	    /**
	     *
	     * @type {Array}
	     * @private
	     */
	    _this._dragListenerKeys = [];
	
	    /**
	     *
	     * @type {number}
	     * @private
	     */
	    _this._clickTimeoutId = 0;
	
	    // 事件和对应的处理方法
	    // 映射关系
	    _this._mapping = {
	      'mousedown': _this._mousedown,
	      'mousemove': _this._mousemove,
	      'mouseup': _this._mouseup,
	      'mouseover': _this._mouseover,
	      'mouseout': _this._mouseout
	    };
	
	    _this._registerSource();
	    return _this;
	  }
	
	  /**
	   *
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._registerSource = function _registerSource() {
	    var _this2 = this;
	
	    // console.log('注册鼠标事件')
	    var events = this.getEvents();
	    events.forEach(function (eventName) {
	      return (0, _eventmanager.listen)(_this2._element, eventName, _this2._mapping[eventName], _this2);
	    });
	  };
	
	  /**
	   * 得到事件
	   *
	   * @method getEvents
	   * @return {Array}
	   */
	
	
	  BrowserEventHandler.prototype.getEvents = function getEvents() {
	    return Object.keys(this._mapping);
	  };
	
	  /**
	   *
	   * @param e
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._mousedown = function _mousedown(e) {
	    var event = new _browserevent2.default(this.map, e, _browserevent2.default.MOUSE_DOWN);
	    this.dispatchEvent(event);
	
	    this._dragging = false;
	    this._down = e;
	
	    if (this._dragListenerKeys.length === 0) {
	      var documentDom = document;
	
	      this._dragListenerKeys.push((0, _eventmanager.listen)(documentDom, _browserevent2.default.MOUSE_MOVE, this._mousemove, this), (0, _eventmanager.listen)(documentDom, _browserevent2.default.MOUSE_UP, this._mouseup, this));
	    }
	  };
	
	  /**
	   *
	   * @param e
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._mousemove = function _mousemove(e) {
	
	    var event = new _browserevent2.default(this.map, e, _browserevent2.default.MOUSE_MOVE);
	
	    if (event.coordinate === null) {
	      return;
	    }
	
	    this.dispatchEvent(event);
	
	    if (this._isMoving(e)) {
	      this._dragging = true;
	
	      var newEvent = new _browserevent2.default(this.map, e, _browserevent2.default.MOUSE_DRAG, this._dragging);
	      this.dispatchEvent(newEvent);
	    }
	  };
	
	  /**
	   *
	   * @param e
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._mouseup = function _mouseup(e) {
	    var event = new _browserevent2.default(this.map, e, _browserevent2.default.MOUSE_UP);
	    this.dispatchEvent(event);
	
	    if (!this._dragging && this._down) {
	      this._emulateClick(this._down);
	    }
	
	    this._dragListenerKeys.forEach(_eventmanager.unlistenByKey);
	    this._dragListenerKeys.length = 0;
	    this._dragging = false;
	    this._down = null;
	  };
	
	  /**
	   *
	   * @param e
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._mouseover = function _mouseover(e) {
	    var event = new _browserevent2.default(this.map, e, _browserevent2.default.MOUSE_OVER);
	    this.dispatchEvent(event);
	  };
	
	  /**
	   *
	   * @param e
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._mouseout = function _mouseout(e) {
	    var event = new _browserevent2.default(this.map, e, _browserevent2.default.MOUSE_OUT);
	    this.dispatchEvent(event);
	  };
	
	  /**
	   *
	   * @param event
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._emulateClick = function _emulateClick(event) {
	    var newEvent = new _browserevent2.default(this.map, event, _browserevent2.default.CLICK);
	    this.dispatchEvent(newEvent);
	
	    // double click
	    if (this._clickTimeoutId !== 0) {
	      clearTimeout(this._clickTimeoutId);
	      this._clickTimeoutId = 0;
	      newEvent = new _browserevent2.default(this.map, event, _browserevent2.default.DBLCLICK);
	      this.dispatchEvent(newEvent);
	    } else {
	      // single click
	      this._clickTimeoutId = setTimeout(function () {
	        this._clickTimeoutId = 0;
	        var newEvent = new _browserevent2.default(this.map, event, _browserevent2.default.SINGLE_CLICK);
	        this.dispatchEvent(newEvent);
	      }.bind(this), 250);
	    }
	  };
	
	  /**
	   *
	   * @param event
	   * @return {boolean}
	   * @private
	   */
	
	
	  BrowserEventHandler.prototype._isMoving = function _isMoving(event) {
	    if (this._down === null) {
	      return false;
	    }
	
	    return event.clientX !== this._down.clientX || event.clientY !== this._down.clientY;
	  };
	
	  return BrowserEventHandler;
	}(_baseobject2.default);
	
	exports.default = BrowserEventHandler;
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _extentutil = __webpack_require__(13);
	
	var _config = __webpack_require__(1);
	
	var _array = __webpack_require__(26);
	
	var _math = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * View 视图类
	 *
	 * @class View
	 * @extends BaseObject
	 * @module meek
	 * @constructor
	 */
	var View = function (_BaseObject) {
	  _inherits(View, _BaseObject);
	
	  /**
	   * @constructor
	   * @param options
	   */
	  function View(options) {
	    _classCallCheck(this, View);
	
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    var _innerOptions = Object.assign({}, options);
	
	    _this._applyOptions(_innerOptions);
	    return _this;
	  }
	
	  /**
	   * Parse options and apply to view
	   * @param options
	   * @private
	   */
	
	
	  View.prototype._applyOptions = function _applyOptions(options) {
	
	    var resolutionConstraint = this._createResolutionConstraint(options);
	
	    /**
	     * @private
	     * @type {number}
	     */
	    this._maxResolution = resolutionConstraint.maxResolution;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    this._minResolution = resolutionConstraint.minResolution;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    this._zoomFactor = resolutionConstraint.zoomFactor;
	
	    /**
	     * @private
	     * @type {Array.<number>|undefined}
	     */
	    this._resolutions = options.resolutions;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    this._minZoom = resolutionConstraint.minZoom;
	
	    var centerConstraint = this._createCenterConstraint(options);
	    var constraint = resolutionConstraint.constraint;
	    var rotationConstraint = this._createRotationConstraint(options);
	
	    /**
	     * center、resolution、ratation
	     * @private
	     */
	    this._constraints = {
	      center: centerConstraint,
	      resolution: constraint,
	      rotation: rotationConstraint
	    };
	
	    this.center = options.center !== undefined ? options.center : this._calculateCenter();
	
	    this.resolution = options.resolution !== undefined ? options.resolution : this.constrainResolution(this._maxResolution, options.zoom - this._minZoom);
	
	    // 记录原始 view 参数
	    this._originalCenter = this.center;
	    this._originalResolution = this.resolution;
	
	    this.rotation = 0;
	
	    this.dataExtent = resolutionConstraint.extent;
	
	    this._options = options;
	  };
	
	  View.prototype._createRotationConstraint = function _createRotationConstraint() {
	    return 0;
	  };
	
	  /**
	   * 创建视图中心限制条件
	   *
	   * @method createCenterConstraint
	   * @param options
	   * @returns {Function}
	   * @private
	   */
	
	
	  View.prototype._createCenterConstraint = function _createCenterConstraint() {
	    return function (center) {
	      return center;
	    };
	  };
	
	  /**
	   * 创建分辨率限制条件
	   *
	   * @method createResolutionConstraint
	   * @param options
	   * @returns {{constraint: *, maxResolution: *, minResolution: *, minZoom: *, zoomFactor: number}}
	   * @private
	   */
	
	
	  View.prototype._createResolutionConstraint = function _createResolutionConstraint(options) {
	    var resolutionConstraint = void 0;
	    var maxResolution = void 0;
	    var minResolution = void 0;
	    var extent = void 0;
	
	    var defaultMaxZoom = _config.Config.DEFAULT_MAX_ZOOM;
	    var defaultZoomFactor = _config.Config.DEFAULT_ZOOM_FACTOR;
	    var defaultMinZoom = _config.Config.DEFAULT_MIN_ZOOM;
	    var defaultTileSize = _config.Config.DEFAULT_TILE_SIZE;
	
	    var minZoom = options.minZoom !== undefined ? options.minZoom : defaultMinZoom;
	
	    var maxZoom = options.maxZoom !== undefined ? options.maxZoom : defaultMaxZoom;
	
	    var zoomFactor = options.zoomFactor !== undefined ? options.zoomFactor : defaultZoomFactor;
	
	    var projection = options.projection;
	    extent = projection.extent;
	
	    if (options.resolutions !== undefined) {
	      var resolutions = options.resolutions;
	      maxResolution = resolutions[0];
	      minResolution = resolutions[resolutions.length - 1];
	      resolutionConstraint = this.createSnapToResolutions(resolutions);
	    } else {
	      // calculate the default min and max resolution
	      var size = Math.max(_extentutil.ExtentUtil.getWidth(extent), _extentutil.ExtentUtil.getHeight(extent));
	      var defaultMaxResolution = size / defaultTileSize / Math.pow(defaultZoomFactor, defaultMinZoom);
	
	      var defaultMinResolution = defaultMaxResolution / Math.pow(defaultZoomFactor, defaultMaxZoom - defaultMinZoom);
	
	      // user provided maxResolution takes precedence
	      maxResolution = options.maxResolution;
	      if (maxResolution !== undefined) {
	        minZoom = 0;
	      } else {
	        maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
	      }
	
	      // user provided minResolution takes precedence
	      minResolution = options.minResolution;
	      if (minResolution === undefined) {
	        if (options.maxZoom !== undefined) {
	          if (options.maxResolution !== undefined) {
	            minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
	          } else {
	            minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
	          }
	        } else {
	          minResolution = defaultMinResolution;
	        }
	      }
	
	      // given discrete zoom levels, minResolution may be different than provided
	      maxZoom = minZoom + Math.floor(Math.log(maxResolution / minResolution) / Math.log(zoomFactor));
	      minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
	
	      resolutionConstraint = this.createSnapToPower(zoomFactor, maxResolution, maxZoom - minZoom);
	    }
	
	    return {
	      constraint: resolutionConstraint,
	      maxResolution: maxResolution,
	      minResolution: minResolution,
	      minZoom: minZoom,
	      zoomFactor: zoomFactor,
	      extent: extent
	    };
	  };
	
	  /**
	   *
	   * @param power
	   * @param maxResolution
	   * @param opt_maxLevel
	   * @returns {Function}
	   */
	
	
	  View.prototype.createSnapToPower = function createSnapToPower(power, maxResolution, opt_maxLevel) {
	    return function (resolution, delta, direction) {
	      if (resolution !== undefined) {
	        var offset = -direction / 2 + 0.5;
	        var oldLevel = Math.floor(Math.log(maxResolution / resolution) / Math.log(power) + offset);
	        var newLevel = Math.max(oldLevel + delta, 0);
	        if (opt_maxLevel !== undefined) {
	          newLevel = Math.min(newLevel, opt_maxLevel);
	        }
	
	        var reso = maxResolution / Math.pow(power, newLevel);
	        return reso;
	      } else {
	        return undefined;
	      }
	    };
	  };
	
	  /**
	   *
	   * @param resolutions
	   * @returns {Function}
	   */
	
	
	  View.prototype.createSnapToResolutions = function createSnapToResolutions(resolutions) {
	    return function (resolution, delta, direction) {
	      if (resolution !== undefined) {
	        var z = (0, _array.linearFindNearest)(resolutions, resolution, direction);
	        z = (0, _math.clamp)(z + delta, 0, resolutions.length - 1);
	        var index = Math.floor(z);
	        if (z != index && index < resolutions.length - 1) {
	          var power = resolutions[index] / resolutions[index + 1];
	          return resolutions[index] / Math.pow(power, z - index);
	        } else {
	          return resolutions[index];
	        }
	      } else {
	        return undefined;
	      }
	    };
	  };
	
	  View.prototype._calculateCenter = function _calculateCenter() {
	    return [500, 500];
	  };
	
	  /**
	   * 获取视图状态
	   *
	   * @method getViewState
	   * @returns {{center: (ArrayBuffer|*|Array.<T>|Blob|string), resolution: *, rotation: *}}
	   */
	
	
	  View.prototype.getViewState = function getViewState() {
	    var center = this.center;
	    var resolution = this.resolution;
	    var rotation = this.rotation;
	
	    return {
	      center: center.slice(),
	      resolution: resolution,
	      rotation: rotation
	    };
	  };
	
	  /**
	   * 分辨率限制
	   *
	   * @method constrainResolution
	   * @param resolution
	   * @param opt_delta
	   * @param opt_direction
	   * @returns {*}
	   */
	
	
	  View.prototype.constrainResolution = function constrainResolution(resolution, opt_delta, opt_direction) {
	    var delta = opt_delta || 0;
	    var direction = opt_direction || 0;
	    return this._constraints.resolution(resolution, delta, direction);
	  };
	
	  /**
	   * 计算缩放中心点
	   *
	   * @method calculateCenterZoom
	   * @param resolution {Number}
	   * @param anchor {Number}
	   * @returns {Array}
	   */
	
	
	  View.prototype.calculateCenterZoom = function calculateCenterZoom(resolution, anchor) {
	    var center = void 0;
	    var currentCenter = this.center;
	    var currentResolution = this.resolution;
	    if (currentCenter !== undefined && currentResolution !== undefined) {
	      var x = anchor[0] - resolution * (anchor[0] - currentCenter[0]) / currentResolution;
	      var y = anchor[1] - resolution * (anchor[1] - currentCenter[1]) / currentResolution;
	      center = [x, y];
	    }
	
	    return center;
	  };
	
	  /**
	   * 是否限制视图中心
	   *
	   * @method constrainCenter
	   * @param center
	   * @returns {Boolean}
	   */
	
	
	  View.prototype.constrainCenter = function constrainCenter(center) {
	    this._constraints.center = center;
	    this._center = center;
	    return true;
	  };
	
	  /**
	   * 视图中心点读写器
	   *
	   * @property center
	   * @return {*}
	   */
	
	
	  _createClass(View, [{
	    key: 'center',
	    get: function get() {
	      return this._center;
	    },
	    set: function set(value) {
	      this.constrainCenter(value);
	      this.changed();
	    }
	
	    /**
	     * 分辨率读写器
	     *
	     * @property resolution
	     * @return {*}
	     */
	
	  }, {
	    key: 'resolution',
	    get: function get() {
	      return this._resolution;
	    },
	    set: function set(value) {
	      this._resolution = value;
	
	      this.changed();
	    }
	
	    /**
	     * 旋转率读写器
	     *
	     * @property rotation
	     * @return {*}
	     */
	
	  }, {
	    key: 'rotation',
	    get: function get() {
	      return this._rotation;
	    },
	    set: function set(value) {
	      this._rotation = value;
	    }
	
	    /**
	     * dataExtent读写器
	     *
	     * @property dataExtent
	     * @return {*}
	     */
	
	  }, {
	    key: 'dataExtent',
	    get: function get() {
	      return this._dataExtent;
	    },
	    set: function set(value) {
	      this._dataExtent = value;
	    }
	
	    /**
	     * 获取最小分辨率
	     *
	     * @property minResolution
	     * @return {Number}
	     */
	
	  }, {
	    key: 'minResolution',
	    get: function get() {
	      return this._minResolution;
	    }
	
	    /**
	     * 获取最大分辨率
	     *
	     * @property maxResolution
	     * @returns {Number}
	     */
	
	  }, {
	    key: 'maxResolution',
	    get: function get() {
	      return this._maxResolution;
	    }
	
	    /**
	     * 获取初始设置的地图中心点
	     *
	     * @property originalCenter
	     * @type {Array}
	     */
	
	  }, {
	    key: 'originalCenter',
	    get: function get() {
	      return this._originalCenter;
	    }
	
	    /**
	     * 获取初始设置的地图级别
	     *
	     * @property originalResolution
	     * @type {Number}
	     */
	
	  }, {
	    key: 'originalResolution',
	    get: function get() {
	      return this._originalResolution;
	    }
	  }]);
	
	  return View;
	}(_baseobject2.default);
	
	exports.default = View;
	module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.componentsDefaults = componentsDefaults;
	
	var _kinetic = __webpack_require__(75);
	
	var _kinetic2 = _interopRequireDefault(_kinetic);
	
	var _dragpan = __webpack_require__(54);
	
	var _dragpan2 = _interopRequireDefault(_dragpan);
	
	var _mousewheelzoom = __webpack_require__(55);
	
	var _mousewheelzoom2 = _interopRequireDefault(_mousewheelzoom);
	
	var _keyboardhome = __webpack_require__(76);
	
	var _keyboardhome2 = _interopRequireDefault(_keyboardhome);
	
	var _keyboardzoom = __webpack_require__(77);
	
	var _keyboardzoom2 = _interopRequireDefault(_keyboardzoom);
	
	var _keyboardpan = __webpack_require__(78);
	
	var _keyboardpan2 = _interopRequireDefault(_keyboardpan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *
	 * @param options
	 * @returns {Set}
	 */
	function componentsDefaults() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var components = new Set();
	
	  var kinetic = new _kinetic2.default(-0.005, 0.05, 100);
	
	  var dragPan = options.dragPan !== undefined ? options.dragPan : true;
	  if (dragPan) {
	    components.add(new _dragpan2.default({
	      kinetic: kinetic
	    }));
	  }
	
	  var mouseWheelZoom = options.mouseWheelZoom !== undefined ? options.mouseWheelZoom : true;
	  if (mouseWheelZoom) {
	    components.add(new _mousewheelzoom2.default({
	      constrainResolution: options.constrainResolution,
	      duration: options.zoomDuration
	    }));
	  }
	
	  var keyboard = options.keyboard !== undefined ? options.keyborad : true;
	  if (keyboard) {
	    components.add(new _keyboardhome2.default(options));
	    components.add(new _keyboardpan2.default(options));
	    components.add(new _keyboardzoom2.default({
	      delta: options.zoomDelta
	    }));
	  }
	
	  return components;
	}
	
	exports.default = {
	  componentsDefaults: componentsDefaults
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Kinetic = function (_BaseObject) {
	  _inherits(Kinetic, _BaseObject);
	
	  function Kinetic(decay, minVelocity, delay) {
	    _classCallCheck(this, Kinetic);
	
	    /**
	     * @private
	     * @type {number}
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._decay = decay;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._minVelocity = minVelocity;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._delay = delay;
	
	    /**
	     * @private
	     * @type {Array.<number>}
	     */
	    _this._points = [];
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._angle = 0;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._initialVelocity = 0;
	    return _this;
	  }
	
	  /**
	   */
	
	
	  Kinetic.prototype.begin = function begin() {
	    this._points.length = 0;
	    this._angle = 0;
	    this._initialVelocity = 0;
	  };
	
	  /**
	   * @param {number} x X.
	   * @param {number} y Y.
	   */
	
	
	  Kinetic.prototype.update = function update(x, y) {
	    this._points.push(x, y, Date.now());
	  };
	
	  /**
	   * @return {boolean} Whether we should do kinetic animation.
	   */
	
	
	  Kinetic.prototype.end = function end() {
	    if (this._points.length < 6) {
	      // at least 2 points are required (i.e. there must be at least 6 elements
	      // in the array)
	      return false;
	    }
	    var delay = Date.now() - this._delay;
	    var lastIndex = this._points.length - 3;
	    if (this._points[lastIndex + 2] < delay) {
	      // the last tracked point is too old, which means that the user stopped
	      // panning before releasing the map
	      return false;
	    }
	
	    // get the first point which still falls into the delay time
	    var firstIndex = lastIndex - 3;
	    while (firstIndex > 0 && this._points[firstIndex + 2] > delay) {
	      firstIndex -= 3;
	    }
	
	    var duration = this._points[lastIndex + 2] - this._points[firstIndex + 2];
	    var dx = this._points[lastIndex] - this._points[firstIndex];
	    var dy = this._points[lastIndex + 1] - this._points[firstIndex + 1];
	    this._angle = Math.atan2(dy, dx);
	    this._initialVelocity = Math.sqrt(dx * dx + dy * dy) / duration;
	    return this._initialVelocity > this._minVelocity;
	  };
	
	  /**
	   * @return {number} Total distance travelled (pixels).
	   */
	
	
	  Kinetic.prototype.getDistance = function getDistance() {
	    return (this._minVelocity - this._initialVelocity) / this._decay;
	  };
	
	  /**
	   * @return {number} Angle of the kinetic panning animation (radians).
	   */
	
	
	  Kinetic.prototype.angle = function angle() {
	    return this._angle;
	  };
	
	  return Kinetic;
	}(_baseobject2.default);
	
	exports.default = Kinetic;
	module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _mousekey = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 *
	 */
	var KeyboardHome = function (_Component) {
	  _inherits(KeyboardHome, _Component);
	
	  function KeyboardHome() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, KeyboardHome);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this._defaultCondition = function (mapBrowserEvent) {
	      var keyCode = mapBrowserEvent.originalEvent.keyCode;
	      return (0, _mousekey.noModifierKeys)(mapBrowserEvent) && (0, _mousekey.targetNotEditable)(mapBrowserEvent) && keyCode === 36;
	    };
	
	    /**
	     * @private
	     * @type {ol.EventsConditionType}
	     */
	    _this._condition = options.condition ? options.condition : _this._defaultCondition;
	    return _this;
	  }
	
	  /**
	   *
	   * @param mapBrowserEvent
	   */
	
	
	  KeyboardHome.prototype.handleMouseEvent = function handleMouseEvent(mapBrowserEvent) {
	    var stopEvent = false;
	    if (this._condition(mapBrowserEvent)) {
	      this._goToHome();
	    }
	
	    return !stopEvent;
	  };
	
	  /**
	   * 将视图还原到最初
	   * @private
	   */
	
	
	  KeyboardHome.prototype._goToHome = function _goToHome() {
	    var view = this.map.view;
	    if (view) {
	      var orignalCenter = view.originalCenter;
	      var originalResolution = view.originalResolution;
	
	      view.center = orignalCenter;
	      view.resolution = originalResolution;
	    }
	  };
	
	  return KeyboardHome;
	}(_component2.default);
	
	exports.default = KeyboardHome;
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _mousekey = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KeyboardZoom = function (_Component) {
	  _inherits(KeyboardZoom, _Component);
	
	  function KeyboardZoom() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, KeyboardZoom);
	
	    /**
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this._condition = options.condition ? options.condition : _mousekey.targetNotEditable;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._delta = options.delta ? options.delta : 1;
	
	    return _this;
	  }
	
	  /**
	   *
	   * @param mapBrowserEvent
	   * @returns {boolean}
	   */
	
	
	  KeyboardZoom.prototype.handleMouseEvent = function handleMouseEvent(mapBrowserEvent) {
	    var stopEvent = false;
	    if (mapBrowserEvent.type == _browserevent2.default.KEYDOWN || mapBrowserEvent.type == _browserevent2.default.KEYPRESS) {
	      var keyEvent = mapBrowserEvent.originalEvent;
	      var charCode = keyEvent.charCode;
	      if (this._condition(mapBrowserEvent) && (charCode == '+'.charCodeAt(0) || charCode == '-'.charCodeAt(0))) {
	        var map = mapBrowserEvent.map;
	        var delta = charCode == '+'.charCodeAt(0) ? this._delta : -this._delta;
	        var view = map.view;
	        _Component.prototype.zoomByDelta.call(this, view, delta, undefined, null);
	        mapBrowserEvent.preventDefault();
	        stopEvent = true;
	      }
	    }
	
	    return !stopEvent;
	  };
	
	  return KeyboardZoom;
	}(_component2.default);
	
	exports.default = KeyboardZoom;
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _component = __webpack_require__(44);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _mousekey = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KeyboardPan = function (_Component) {
	  _inherits(KeyboardPan, _Component);
	
	  function KeyboardPan() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, KeyboardPan);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this._defaultCondition = function (mapBrowserEvent) {
	      var keyCode = mapBrowserEvent.originalEvent.keyCode;
	      return (0, _mousekey.noModifierKeys)(mapBrowserEvent) && (0, _mousekey.targetNotEditable)(mapBrowserEvent) && (keyCode === 40 || keyCode === 37 || keyCode === 39 || keyCode === 38);
	    };
	
	    /**
	     * @private
	     */
	    _this._condition = options.condition !== undefined ? options.condition : _this._defaultCondition;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._duration = options.duration !== undefined ? options.duration : 100;
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._pixelDelta = options.pixelDelta !== undefined ? options.pixelDelta : 128;
	    return _this;
	  }
	
	  /**
	   * 
	   * @param event
	   * @returns {boolean}
	   */
	
	
	  KeyboardPan.prototype.handleMouseEvent = function handleMouseEvent(mapBrowserEvent) {
	    var stopEvent = false;
	    if (mapBrowserEvent.type === _browserevent2.default.KEYDOWN) {
	      var keyEvent = mapBrowserEvent.originalEvent;
	      var keyCode = keyEvent.keyCode;
	      if (this._condition(mapBrowserEvent)) {
	        var map = mapBrowserEvent.map;
	        var view = map.view;
	        var mapUnitsDelta = view.resolution * this._pixelDelta;
	        var deltaX = 0,
	            deltaY = 0;
	
	        if (keyCode === 40) {
	          deltaY = mapUnitsDelta;
	        } else if (keyCode === 37) {
	          deltaX = -mapUnitsDelta;
	        } else if (keyCode === 39) {
	          deltaX = mapUnitsDelta;
	        } else {
	          deltaY = -mapUnitsDelta;
	        }
	
	        var delta = [deltaX, deltaY];
	        _Component.prototype.pan.call(this, view, delta, null);
	        mapBrowserEvent.preventDefault();
	        stopEvent = true;
	      }
	    }
	    return !stopEvent;
	  };
	
	  return KeyboardPan;
	}(_component2.default);
	
	exports.default = KeyboardPan;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.controlDefaults = controlDefaults;
	
	var _zoom = __webpack_require__(57);
	
	var _zoom2 = _interopRequireDefault(_zoom);
	
	var _home = __webpack_require__(80);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _zoompercentage = __webpack_require__(81);
	
	var _zoompercentage2 = _interopRequireDefault(_zoompercentage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function controlDefaults() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	
	  var controls = [];
	
	  var zoomControl = options.zoom !== undefined ? options.zoom : true;
	  if (zoomControl) {
	    controls.push(new _zoom2.default(options.zoomOptions));
	  }
	
	  var homeControl = options.home !== undefined ? options.home : true;
	  if (homeControl) {
	    controls.push(new _home2.default(options.homeOptions));
	  }
	
	  var zoomPercentageControl = options.zoomPercentage !== undefined ? options.zoomPercentage : true;
	  if (zoomPercentageControl) {
	    controls.push(new _zoompercentage2.default(options.zoomPercentageOptions));
	  }
	
	  return controls;
	}
	
	exports.default = {
	  controlDefaults: controlDefaults
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _control = __webpack_require__(56);
	
	var _control2 = _interopRequireDefault(_control);
	
	var _browserevent = __webpack_require__(45);
	
	var _browserevent2 = _interopRequireDefault(_browserevent);
	
	var _eventmanager = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 *
	 */
	var Home = function (_Control) {
	  _inherits(Home, _Control);
	
	  function Home() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Home);
	
	    var className = options.className ? options.className : 'dt-zoom-extent';
	    var homeLabel = options.homeLabel ? options.homeLabel : 'H';
	    var homeLabelTip = options.homeLabelTip ? options.homeLabelTip : '全图';
	
	    var homeElement = document.createElement('button');
	    homeElement.setAttribute('type', 'button');
	    homeElement.title = homeLabelTip;
	    homeElement.appendChild(typeof homeLabel === 'string' ? document.createTextNode(homeLabel) : homeLabel);
	
	    var cssClasses = className + ' dt-unselectable dt-control';
	    var element = document.createElement('div');
	    element.className = cssClasses;
	    element.appendChild(homeElement);
	
	    var _this = _possibleConstructorReturn(this, _Control.call(this, {
	      element: element,
	      target: options.target
	    }));
	
	    (0, _eventmanager.listen)(homeElement, _browserevent2.default.CLICK, _this._handleClick, _this);
	    return _this;
	  }
	
	  /**
	   * 处理按钮点击事件
	   * @param event
	   * @private
	   */
	
	
	  Home.prototype._handleClick = function _handleClick(event) {
	    event.preventDefault();
	    this._goToHome();
	  };
	
	  /**
	   * 将视图还原到最初
	   * @private
	   */
	
	
	  Home.prototype._goToHome = function _goToHome() {
	    var view = this.map.view;
	    if (view) {
	      var orignalCenter = view.originalCenter;
	      var originalResolution = view.originalResolution;
	
	      view.center = orignalCenter;
	      view.resolution = originalResolution;
	    }
	  };
	
	  return Home;
	}(_control2.default);
	
	exports.default = Home;
	module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _control = __webpack_require__(56);
	
	var _control2 = _interopRequireDefault(_control);
	
	var _domutil = __webpack_require__(42);
	
	var _eventmanager = __webpack_require__(21);
	
	var _eventtype = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ZoomPercentage = function (_Control) {
	  _inherits(ZoomPercentage, _Control);
	
	  function ZoomPercentage() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ZoomPercentage);
	
	    var _this = _possibleConstructorReturn(this, _Control.call(this));
	
	    _this._map = undefined;
	
	    var className = options.className ? options.className : 'dt-scale-line';
	
	    _this._innerElement = document.createElement('DIV');
	    _this._innerElement.className = className + '-inner';
	
	    _this._element = document.createElement('DIV');
	    _this._element.className = className + ' dt-unselectable';
	    _this._element.appendChild(_this._innerElement);
	    return _this;
	  }
	
	  ZoomPercentage.prototype.render = function render() {
	    var view = this.map.view;
	    var resolution = (1 / view.resolution).toFixed(2);
	    var html = '&#8195;\u7F29\u653E\u6BD4' + resolution * 100 + '% &#8195;';
	    this._innerElement.innerHTML = html;
	  };
	
	  _createClass(ZoomPercentage, [{
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(value) {
	      if (this.map) {
	        (0, _domutil.removeNode)(this._element);
	      }
	
	      this._listenerKeys.forEach(function (listener) {
	        return (0, _eventmanager.unlistenByKey)(listener);
	      });
	
	      this._listenerKeys.length = 0;
	      this._map = value;
	
	      if (this._map) {
	        var target = this._target ? this._target : value.overlayContainerStopEvent;
	        target.appendChild(this._element);
	
	        this._listenerKeys.push((0, _eventmanager.listen)(value, _eventtype.EventType.VIEW_CHANGED, this.render, this));
	
	        this.render();
	      }
	    }
	  }]);
	
	  return ZoomPercentage;
	}(_control2.default);
	
	exports.default = ZoomPercentage;
	module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseobject = __webpack_require__(10);
	
	var _baseobject2 = _interopRequireDefault(_baseobject);
	
	var _eventmanager = __webpack_require__(21);
	
	var _rendereventtype = __webpack_require__(70);
	
	var _extentutil = __webpack_require__(13);
	
	var _domutil = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Overlay类提供一个可以漂浮在map上的容器，
	 * 凡是需要有和地图交互的表单，必须使用该容器承载
	 *
	 * @class Overlay
	 * @extends BaseObject
	 * @module meek
	 * @constructor
	 */
	var Overlay = function (_BaseObject) {
	  _inherits(Overlay, _BaseObject);
	
	  /**
	   * @constructor
	   * @param options
	   */
	  function Overlay() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Overlay);
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, _BaseObject.call(this));
	
	    _this._element = undefined;
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    _this._map = undefined;
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    _this._offset = undefined;
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    _this._position = undefined;
	
	    /**
	     *
	     * @type {undefined}
	     * @private
	     */
	    _this._positioning = undefined;
	
	    /**
	     * @private
	     * @type {number|string|undefined}
	     */
	    _this._overlay = options.id;
	
	    /**
	     * @private
	     * @type {boolean}
	     */
	    _this._insertFirst = options.insertFirst !== undefined ? options.insertFirst : true;
	
	    /**
	     * @private
	     * @type {boolean}
	     */
	    _this._stopEvent = options.stopEvent !== undefined ? options.stopEvent : true;
	
	    /**
	     * @private
	     * @type {Element}
	     */
	    _this._element = document.createElement('DIV');
	    _this._element.className = 'dt-overlay-container dt-selectable';
	    _this._element.style.position = 'absolute';
	
	    /**
	     * @protected
	     * @type {boolean}
	     */
	    _this.autoPan = options.autoPan !== undefined ? options.autoPan : false;
	
	    /**
	     * @private
	     */
	    _this._autoPanAnimation = options.autoPanAnimation || {};
	
	    /**
	     * @private
	     * @type {number}
	     */
	    _this._autoPanMargin = options.autoPanMargin !== undefined ? options.autoPanMargin : 20;
	
	    /**
	     * @private
	     * @type {{bottom_: string,
	    *         left_: string,
	    *         right_: string,
	    *         top_: string,
	    *         visible: boolean}}
	     */
	    _this._rendered = {
	      _bottom: '',
	      _left: '',
	      _right: '',
	      _top: '',
	      _visible: true
	
	      /**
	       * @private
	       * @type {EventsKey}
	       */
	    };_this._mapPostrenderListenerKey = null;
	
	    if (options.element !== undefined) {
	      _this.popupEelement = options.element;
	    }
	
	    _this.offset = options.offset !== undefined ? options.offset : [0, 0];
	
	    _this.positioning = options.positioning !== undefined ? options.positioning : OverlayPositioning.TOP_LEFT;
	
	    if (options.position !== undefined) {
	      _this.position = options.position;
	    }
	    return _this;
	  }
	
	  /**
	   * 执行渲染
	   *
	   * @method render
	   */
	
	
	  Overlay.prototype.render = function render() {
	    this.updatePixelPosition();
	  };
	
	  /**
	   * 更新鼠标点的位置信息
	   *
	   * @method updatePixelPosition
	   */
	
	
	  Overlay.prototype.updatePixelPosition = function updatePixelPosition() {
	    var map = this.map;
	    if (map) {
	      var position = this.position;
	      if (!map || !map.isRendered() || !position) {
	        this.setVisible(false);
	        return;
	      }
	
	      var pixel = map.getPixelFromCoordinate(position);
	      var mapSize = map.size;
	      this.updateRenderedPosition(pixel, mapSize);
	    }
	  };
	
	  /**
	   * 更新渲染视图位置
	   *
	   * @param pixel {Array}
	   * @param mapSize {Number}
	   */
	
	
	  Overlay.prototype.updateRenderedPosition = function updateRenderedPosition(pixel, mapSize) {
	    var style = this._element.style;
	    var offset = this.offset;
	    var positioning = this.positioning;
	
	    this.setVisible(true);
	
	    var offsetX = offset[0];
	    var offsetY = offset[1];
	    if (positioning == OverlayPositioning.BOTTOM_RIGHT || positioning == OverlayPositioning.CENTER_RIGHT || positioning == OverlayPositioning.TOP_RIGHT) {
	      if (this._rendered.left_ !== '') {
	        this._rendered.left_ = style.left = '';
	      }
	
	      var right = Math.round(mapSize[0] - pixel[0] - offsetX) + 'px';
	      if (this._rendered.right_ != right) {
	        this._rendered.right_ = style.right = right;
	      }
	    } else {
	      if (this._rendered.right_ !== '') {
	        this._rendered.right_ = style.right = '';
	      }
	
	      if (positioning == OverlayPositioning.BOTTOM_CENTER || positioning == OverlayPositioning.CENTER_CENTER || positioning == OverlayPositioning.TOP_CENTER) {
	        offsetX -= this._element.offsetWidth / 2;
	      }
	
	      var left = Math.round(pixel[0] + offsetX) + 'px';
	      if (this._rendered.left_ != left) {
	        this._rendered.left_ = style.left = left;
	      }
	    }
	    if (positioning == OverlayPositioning.BOTTOM_LEFT || positioning == OverlayPositioning.BOTTOM_CENTER || positioning == OverlayPositioning.BOTTOM_RIGHT) {
	      if (this._rendered.top_ !== '') {
	        this._rendered.top_ = style.top = '';
	      }
	
	      var bottom = Math.round(mapSize[1] - pixel[1] - offsetY) + 'px';
	      if (this._rendered.bottom_ != bottom) {
	        this._rendered.bottom_ = style.bottom = bottom;
	      }
	    } else {
	      if (this._rendered.bottom_ !== '') {
	        this._rendered.bottom_ = style.bottom = '';
	      }
	
	      if (positioning == OverlayPositioning.CENTER_LEFT || positioning == OverlayPositioning.CENTER_CENTER || positioning == OverlayPositioning.CENTER_RIGHT) {
	        offsetY -= this._element.offsetHeight / 2;
	      }
	
	      var top = Math.round(pixel[1] + offsetY) + 'px';
	      if (this._rendered.top_ != top) {
	        this._rendered.top_ = style.top = top;
	      }
	    }
	  };
	
	  /**
	   * 设置浮云框是否可见
	   *
	   * @method setVisible
	   * @param visible
	   */
	
	
	  Overlay.prototype.setVisible = function setVisible(visible) {
	    if (this._rendered.visible !== visible) {
	      this._element.style.display = visible ? '' : 'none';
	      this._rendered.visible = visible;
	    }
	  };
	
	  /**
	   * 表单自动适应视图范围
	   * 如果当前表单出现的位置不全在地图中，则会平移至地图
	   * 可视范围内
	   *
	   * @private
	   */
	
	
	  Overlay.prototype._panIntoView = function _panIntoView() {
	    var map = this.map;
	
	    if (!map || !map.getTargetElement()) {
	      return;
	    }
	
	    var mapRect = this._getRect(map.getTargetElement(), map.size);
	    var element = this.popupEelement;
	
	    if (element.clientHeight === 0 && element.clientWidth === 0) {
	      return;
	    }
	    var overlayRect = this._getRect(element, [(0, _domutil.outerWidth)(element), (0, _domutil.outerHeight)(element)]);
	
	    var margin = this._autoPanMargin;
	    if (!_extentutil.ExtentUtil.containsExtent(mapRect, overlayRect)) {
	      // the overlay is not completely inside the viewport, so pan the map
	      var offsetLeft = overlayRect[0] - mapRect[0];
	      var offsetRight = mapRect[2] - overlayRect[2];
	      var offsetTop = overlayRect[1] - mapRect[1];
	      var offsetBottom = mapRect[3] - overlayRect[3];
	
	      var delta = [0, 0];
	      if (offsetLeft < 0) {
	        // move map to the left
	        delta[0] = offsetLeft - margin;
	      } else if (offsetRight < 0) {
	        // move map to the right
	        delta[0] = Math.abs(offsetRight) + margin;
	      }
	
	      if (offsetTop < 0) {
	        // move map up
	        delta[1] = offsetTop - margin;
	      } else if (offsetBottom < 0) {
	        // move map down
	        delta[1] = Math.abs(offsetBottom) + margin;
	      }
	
	      if (delta[0] !== 0 || delta[1] !== 0) {
	        var center = map.view.center;
	        var centerPx = map.getPixelFromCoordinate(center);
	        var newCenterPx = [centerPx[0] + delta[0], centerPx[1] + delta[1]];
	
	        map.view.center = map.getCoordinateFromPixel(newCenterPx);
	      }
	    }
	  };
	
	  /**
	   *
	   * @param element
	   * @param size
	   * @return {*[]}
	   * @private
	   */
	
	
	  Overlay.prototype._getRect = function _getRect(element, size) {
	    var box = element.getBoundingClientRect();
	    var offsetX = box.left + window.pageXOffset;
	    var offsetY = box.top + window.pageYOffset;
	    return [offsetX, offsetY, offsetX + size[0], offsetY + size[1]];
	  };
	
	  /**
	   * 获取当前浮云框对象的 ID
	   *
	   * @property overlayId
	   * @type {number|string|undefined}
	   */
	
	
	  /**
	   *
	   * @private
	   */
	  Overlay.prototype._setElement = function _setElement() {
	    (0, _domutil.removeChildren)(this._element);
	    var pelement = this.popupEelement;
	    if (pelement) {
	      this._element.appendChild(pelement);
	    }
	  };
	
	  /**
	   * map读写器, 读取设置当前map
	   *
	   * @property map
	   * @type {mk.map}
	   */
	
	
	  _createClass(Overlay, [{
	    key: 'overlayId',
	    get: function get() {
	      return this._overlayId;
	    }
	
	    /**
	     * 获取表单元素
	     *
	     * @property popupEelement
	     * @type {DOM}
	     */
	
	  }, {
	    key: 'popupEelement',
	    get: function get() {
	      return this._popupEelement;
	    },
	    set: function set(value) {
	      this._popupEelement = value;
	
	      this._setElement();
	    }
	  }, {
	    key: 'map',
	    get: function get() {
	      return this._map;
	    },
	    set: function set(value) {
	      this._map = value;
	      if (this._map) {
	        var map = this._map;
	        this._mapPostrenderListenerKey = (0, _eventmanager.listen)(map, _rendereventtype.RenderEventType.POSTRENDER, this.render, this);
	        this.updatePixelPosition();
	        var container = this._stopEvent ? map.overlayContainerStopEvent : map.overlayContainer;
	        if (this._insertFirst) {
	          container.insertBefore(this._element, container.childNodes[0] || null);
	        } else {
	          container.appendChild(this._element);
	        }
	      }
	    }
	
	    /**
	     * 偏移量读写器
	     *
	     * @property offset
	     * @return {*|undefined}
	     */
	
	  }, {
	    key: 'offset',
	    get: function get() {
	      return this._offset;
	    },
	    set: function set(value) {
	      this._offset = value;
	      this.updatePixelPosition();
	    }
	
	    /**
	     * 鼠标点位置读写器
	     *
	     * @property position
	     * @return {undefined|*}
	     */
	
	  }, {
	    key: 'position',
	    get: function get() {
	      return this._position;
	    },
	    set: function set(value) {
	      this._position = value;
	
	      this.updatePixelPosition();
	
	      if (this._position && this.autoPan) {
	        this._panIntoView();
	      }
	    }
	
	    /**
	     *
	     *
	     * positioning
	     * @return {undefined|*}
	     */
	
	  }, {
	    key: 'positioning',
	    get: function get() {
	      return this._positioning;
	    },
	    set: function set(value) {
	      this._positioning = value;
	      this.updatePixelPosition();
	    }
	  }]);
	
	  return Overlay;
	}(_baseobject2.default);
	
	exports.default = Overlay;
	
	
	var OverlayPositioning = {
	  BOTTOM_LEFT: 'bottom-left',
	  BOTTOM_CENTER: 'bottom-center',
	  BOTTOM_RIGHT: 'bottom-right',
	  CENTER_LEFT: 'center-left',
	  CENTER_CENTER: 'center-center',
	  CENTER_RIGHT: 'center-right',
	  TOP_LEFT: 'top-left',
	  TOP_CENTER: 'top-center',
	  TOP_RIGHT: 'top-right'
	};
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _point = __webpack_require__(23);
	
	var _point2 = _interopRequireDefault(_point);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	var _mutilpolygon = __webpack_require__(29);
	
	var _mutilpolygon2 = _interopRequireDefault(_mutilpolygon);
	
	var _line = __webpack_require__(24);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _extent = __webpack_require__(22);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _parallelogram = __webpack_require__(30);
	
	var _parallelogram2 = _interopRequireDefault(_parallelogram);
	
	var _rotatableextent = __webpack_require__(31);
	
	var _rotatableextent2 = _interopRequireDefault(_rotatableextent);
	
	var _feature = __webpack_require__(46);
	
	var _feature2 = _interopRequireDefault(_feature);
	
	var _obj = __webpack_require__(4);
	
	var _obj2 = _interopRequireDefault(_obj);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 *
	 */
	var GeoJSON = function () {
	  function GeoJSON() {
	    _classCallCheck(this, GeoJSON);
	  }
	
	  /**
	   * 解析 GeoJSON 并返回 Feature 的集合
	   *
	   * @static
	   * @method read
	   * @param json geojson格式的数据
	   * @returns {Array} 返回 features 的集合
	   */
	  GeoJSON.read = function read(json) {
	    var features = [];
	
	    if (!json) {
	      return;
	    }
	    var featuresObj = json.features;
	    featuresObj.forEach(function (featureObj) {
	      if (featureObj.type === 'Feature') {
	        if (featureObj.geometry) {
	          var _constructor = undefined;
	          var geometryObj = featureObj.geometry;
	          var geometryType = geometryObj.type;
	          if (geometryType === 'Point') {
	            _constructor = _point2.default;
	          } else if (geometryType === 'LineString') {
	            _constructor = _line2.default;
	          } else if (geometryType === 'Polygon') {
	            _constructor = _polygon2.default;
	          } else if (geometryType === 'ExtentPolygon') {
	            _constructor = _extent2.default;
	          } else if (geometryType === 'MutilPolygon') {
	            _constructor = _mutilpolygon2.default;
	          } else if (geometryType === 'ParallelogramPolygon') {
	            _constructor = _parallelogram2.default;
	          } else if (geometryType === 'RotatableExtent') {
	            _constructor = _rotatableextent2.default;
	          }
	
	          if (_constructor === undefined) {
	            throw new Error('包含未定义的 Geometry 类型');
	          } else {
	            var coordinates = geometryObj.coordinates;
	            var geometry = new _constructor();
	            geometry.setCoordinates(coordinates);
	
	            var propertiesObj = void 0;
	            if (featureObj.properties) {
	              propertiesObj = featureObj.properties;
	            }
	
	            var title = featureObj.title;
	            var feature = new _feature2.default(geometry, propertiesObj, title);
	            features.push(feature);
	          }
	        }
	      }
	    });
	
	    return features;
	  };
	
	  /**
	   *
	   * 将 Feature 集合写入到 GeoJSON 的格式对象中
	   *
	   * @static
	   * @method write
	   * @param features Feature 集合
	   * @returns {Object} 返回 GeoJSON 格式的数据
	   */
	
	
	  GeoJSON.write = function write(features) {
	    var featuresArr = [];
	
	    features.forEach(function (feature) {
	      var properties = _obj2.default.mapToObject(feature._attributesMap);
	      Reflect.deleteProperty(properties, '_originStyle');
	      Reflect.deleteProperty(properties, 'Symbol(hasmutilselected)');
	
	      featuresArr.push({
	        type: 'Feature',
	        geometry: {
	          type: GeoJSON.getGeoJSONGeometryType(feature.geometry),
	          coordinates: feature.geometry.getCoordinates()
	        },
	        properties: properties,
	        title: feature.displayText
	      });
	    });
	
	    return {
	      type: 'FeatureCollection',
	      features: featuresArr
	    };
	  };
	
	  /**
	   * 获取Geometry的类型
	   *
	   * @static
	   * @method getGeoJSONGeometryType
	   * @param geometry
	   * @returns {*}
	   */
	
	
	  GeoJSON.getGeoJSONGeometryType = function getGeoJSONGeometryType(geometry) {
	    var type = geometry.geometryType;
	    var jsonType = void 0;
	    switch (type) {
	      case _geometry2.default.POINT:
	        jsonType = 'Point';
	        break;
	      case _geometry2.default.LINE:
	        jsonType = 'LineString';
	        break;
	      case _geometry2.default.POLYGON:
	        jsonType = 'Polygon';
	        break;
	      case _geometry2.default.MULTI_POLYGON:
	        jsonType = 'MutilPolygon';
	        break;
	      case _geometry2.default.EXTENT:
	        jsonType = 'ExtentPolygon';
	        break;
	      case _geometry2.default.PARALLELOGRAM:
	        jsonType = 'ParallelogramPolygon';
	        break;
	      case _geometry2.default.ROTATABLE_EXTENT:
	        jsonType = 'RotatableExtent';
	        break;
	    }
	
	    return jsonType;
	  };
	
	  return GeoJSON;
	}();
	
	exports.default = GeoJSON;
	module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = intersects;
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _extentutil = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 判断任意图形是否相交
	 * @TODO 算法返回的结果修改为：找到碰撞的图形或部分，而不是返回布尔值，
	 * 这样可以避免二次寻找
	 *
	 * @method intersects
	 * @param geometry1
	 * @param geometry2
	 * @returns {Boolean}
	 */
	function intersects(geometry1, geometry2) {
	  if (geometry1 === null || geometry1 === undefined || geometry2 === null || geometry2 === undefined) {
	    return false;
	  }
	
	  var extent1 = geometry1.extent;
	  var extent2 = geometry2.extent;
	  var ext1Arr = [extent1.xmin, extent1.ymin, extent1.xmax, extent1.ymax];
	  var ext2Arr = [extent2.xmin, extent2.ymin, extent2.xmax, extent2.ymax];
	
	  // 如果两个图形的外界矩形不相交，则跳出判断
	  if (!_extentutil.ExtentUtil.intersects(ext1Arr, ext2Arr)) {
	    return false;
	  }
	
	  var geometryType = geometry1.geometryType;
	
	  var result = false;
	  switch (geometryType) {
	    case _geometry2.default.POINT:
	      result = pointIntersectsGeometry(geometry1, geometry2);
	      break;
	    case _geometry2.default.LINE:
	      result = lineIntersectsGeometry(geometry1, geometry2);
	      break;
	    case _geometry2.default.POLYGON:
	    case _geometry2.default.EXTENT:
	      if (geometry2.geometryType === _geometry2.default.MULTI_POLYGON) {
	        result = mutilPolygonIntersectsGeometry(geometry2, geometry1);
	      } else {
	        result = polygonIntersectsGeometry(geometry1, geometry2);
	      }
	      break;
	    case _geometry2.default.MULTI_POLYGON:
	      result = mutilPolygonIntersectsGeometry(geometry1, geometry2);
	      break;
	  }
	
	  return result;
	}
	
	/**
	 * 点和图形相交判断
	 * @param point
	 * @param geometry
	 * @returns {*}
	 */
	var pointIntersectsGeometry = function pointIntersectsGeometry(point, geometry) {
	  var geometryType = geometry.geometryType;
	
	  switch (geometryType) {
	    case _geometry2.default.POINT:
	    case _geometry2.default.LINE:
	    case _geometry2.default.POLYGON:
	    case _geometry2.default.MULTI_POLYGON:
	    case _geometry2.default.EXTENT:
	      return geometry.containsXY(point.x, point.y);
	  }
	
	  return false;
	};
	
	/**
	 * 线和图形相交判断
	 * @param line
	 * @param geometry
	 * @returns {Boolean|boolean|*}
	 */
	var lineIntersectsGeometry = function lineIntersectsGeometry(line, geometry) {
	  var geometryType = geometry.geometryType;
	  switch (geometryType) {
	    case _geometry2.default.POINT:
	      return line.containsXY(geometry.x, geometry.y);
	    case _geometry2.default.LINE:
	      return lineIntersectsLine(line, geometry);
	    case _geometry2.default.POLYGON:
	    case _geometry2.default.EXTENT:
	      return lineIntersectsPolygon(line, geometry);
	  }
	};
	
	/**
	 * 线与线相交判断
	 * @param line1
	 * @param line2
	 */
	var lineIntersectsLine = function lineIntersectsLine(line1, line2) {
	  var lineLinearRings1 = line1.getCoordinates();
	  var lineLinearRings2 = line2.getCoordinates();
	
	  return intersectsByLinearRings(lineLinearRings1, lineLinearRings2);
	};
	
	/**
	 * 多边形和图形相交判断
	 * @param poly
	 * @param geometry
	 * @returns {Boolean|boolean|*}
	 */
	var polygonIntersectsGeometry = function polygonIntersectsGeometry(poly, geometry) {
	  var geometryType = geometry.geometryType;
	  switch (geometryType) {
	    case _geometry2.default.POINT:
	      return poly.containsXY(geometry.x, geometry.y);
	    case _geometry2.default.LINE:
	      return lineIntersectsPolygon(geometry, poly);
	    case _geometry2.default.POLYGON:
	    case _geometry2.default.MUTIL_POLYGON:
	    case _geometry2.default.EXTENT:
	      return polygonIntersectsPolygon(poly, geometry);
	  }
	};
	
	var mutilPolygonIntersectsGeometry = function mutilPolygonIntersectsGeometry(mutilPoly, geometry) {
	  var geometryType = geometry.geometryType;
	  switch (geometryType) {
	    case _geometry2.default.POINT:
	      return mutilPoly.containsXY(geometry.x, geometry.y);
	    // case Geometry.LINE:
	    // return lineIntersectsPolygon(geometry, poly);
	    case _geometry2.default.POLYGON:
	    case _geometry2.default.MULTI_POLYGON:
	    case _geometry2.default.EXTENT:
	      return mutilPolygonIntersectsPolygon(mutilPoly, geometry);
	  }
	};
	
	/**
	 * 线和多边形相交判断
	 * @param line
	 * @param polygon
	 */
	var lineIntersectsPolygon = function lineIntersectsPolygon(line, polygon) {
	  var lineLinearRings = line.getCoordinates();
	  var polygon2LinearRings = polygon.getCoordinates();
	
	  if (polygon.geometryType === _geometry2.default.POLYGON || polygon.geometry === _geometry2.default.MULTI_POLYGON) {
	    polygon2LinearRings = polygon2LinearRings[0]; // 只获得外环
	  }
	
	  var intersect = intersectsByLinearRings(lineLinearRings, polygon2LinearRings);
	
	  if (!intersect) {
	    // check if this poly contains points of the ring/linestring
	    for (var i = 0, len = lineLinearRings.length; i < len; ++i) {
	      var point = lineLinearRings[i];
	      intersect = polygon.containsXY(point[0], point[1]);
	      if (intersect) {
	        break;
	      }
	    }
	  }
	
	  return intersect;
	};
	
	/**
	 * 多边形和多边形相交判断
	 * @param poly
	 * @param polygon
	 */
	var polygonIntersectsPolygon = function polygonIntersectsPolygon(poly, polygon) {
	  var lineLinearRings = poly.getCoordinates();
	  var polygon2LinearRings = polygon.getCoordinates(); // 只获得外环
	
	  if (poly.geometryType === _geometry2.default.POLYGON) {
	    lineLinearRings = lineLinearRings[0];
	  }
	
	  if (polygon.geometryType === _geometry2.default.POLYGON) {
	    polygon2LinearRings = polygon2LinearRings[0];
	  }
	
	  var intersect = intersectsByLinearRings(lineLinearRings, polygon2LinearRings);
	
	  // 两个多边形要做相互内含关系的判断
	
	  // 正向检查
	  if (!intersect) {
	    for (var i = 0, len = lineLinearRings.length; i < len; ++i) {
	      var point = lineLinearRings[i];
	      intersect = polygon.containsXY(point[0], point[1]);
	      if (intersect) {
	        break;
	      }
	    }
	  }
	
	  // 反向检查
	  if (!intersect) {
	    for (var _i = 0, _len = polygon2LinearRings.length; _i < _len; ++_i) {
	      var _point = polygon2LinearRings[_i];
	      intersect = poly.containsXY(_point[0], _point[1]);
	      if (intersect) {
	        break;
	      }
	    }
	  }
	
	  return intersect;
	};
	
	var mutilPolygonIntersectsPolygon = function mutilPolygonIntersectsPolygon(mutilPoly, polygon) {
	  var intersectsByLinearRingsFn = intersectsByLinearRings;
	  var lineLinearRings = mutilPoly.getCoordinates();
	  var polygon2LinearRings = [];
	
	  var polygonGeometryType = polygon.geometryType;
	  if (polygonGeometryType == _geometry2.default.EXTENT) {
	    polygon2LinearRings = [polygon.getCoordinates()];
	  } else if (polygonGeometryType == _geometry2.default.POLYGON) {
	    polygon2LinearRings = [polygon.getCoordinates()[0]]; // 取外环
	  } else if (polygonGeometryType == _geometry2.default.MULTI_POLYGON) {
	    polygon2LinearRings = polygon.getCoordinates();
	  }
	
	  var result = lineLinearRings.find(function (ring) {
	    var oneRingIntersects = polygon2LinearRings.find(function (linarRing) {
	      return intersectsByLinearRingsFn(ring[0], linarRing);
	    });
	
	    return oneRingIntersects !== undefined ? true : false;
	  });
	
	  return result !== undefined ? true : false;
	};
	
	var intersectsByLinearRings = function intersectsByLinearRings(LinearRing1, LinearRings2) {
	  var intersect = false;
	  var segs1 = getSortedSegments(LinearRing1);
	  var segs2 = getSortedSegments(LinearRings2);
	
	  var seg1 = void 0,
	      seg1x1 = void 0,
	      seg1x2 = void 0,
	      seg1y1 = void 0,
	      seg1y2 = void 0,
	      seg2 = void 0,
	      seg2y1 = void 0,
	      seg2y2 = void 0;
	
	  // sweep right
	  for (var i = 0, len = segs1.length; i < len; ++i) {
	    seg1 = segs1[i];
	    seg1x1 = seg1.x1;
	    seg1x2 = seg1.x2;
	    seg1y1 = seg1.y1;
	    seg1y2 = seg1.y2;
	
	    for (var j = 0, jlen = segs2.length; j < jlen; ++j) {
	      seg2 = segs2[j];
	      if (seg2.x1 > seg1x2) {
	        // seg1 still left of seg2
	        break;
	      }
	
	      if (seg2.x2 < seg1x1) {
	        // seg2 still left of seg1
	        continue;
	      }
	
	      seg2y1 = seg2.y1;
	      seg2y2 = seg2.y2;
	      if (Math.min(seg2y1, seg2y2) > Math.max(seg1y1, seg1y2)) {
	        // seg2 above seg1
	        continue;
	      }
	
	      if (Math.max(seg2y1, seg2y2) < Math.min(seg1y1, seg1y2)) {
	        // seg2 below seg1
	        continue;
	      }
	
	      if (segmentsIntersect(seg1, seg2)) {
	        intersect = true;
	        break;
	      }
	    }
	  }
	
	  return intersect;
	};
	
	var getSortedSegments = function getSortedSegments(points) {
	  var numSeg = points.length - 1;
	  var segments = new Array(numSeg),
	      point1 = void 0,
	      point2 = void 0;
	
	  for (var i = 0; i < numSeg; ++i) {
	    point1 = points[i];
	    point2 = points[i + 1];
	
	    if (point1[0] < point2[0]) {
	      segments[i] = {
	        x1: point1[0],
	        y1: point1[1],
	        x2: point2[0],
	        y2: point2[1]
	      };
	    } else {
	      segments[i] = {
	        x1: point2[0],
	        y1: point2[1],
	        x2: point1[0],
	        y2: point1[1]
	      };
	    }
	  }
	
	  // more efficient to define this somewhere static
	  function byX1(seg1, seg2) {
	    return seg1.x1 - seg2.x1;
	  }
	
	  return segments.sort(byX1);
	};
	
	var segmentsIntersect = function segmentsIntersect(seg1, seg2, options) {
	  var point = options && options.point;
	  var tolerance = options && options.tolerance;
	  var intersection = false;
	  var x11_21 = seg1.x1 - seg2.x1;
	  var y11_21 = seg1.y1 - seg2.y1;
	  var x12_11 = seg1.x2 - seg1.x1;
	  var y12_11 = seg1.y2 - seg1.y1;
	  var y22_21 = seg2.y2 - seg2.y1;
	  var x22_21 = seg2.x2 - seg2.x1;
	  var d = y22_21 * x12_11 - x22_21 * y12_11;
	  var n1 = x22_21 * y11_21 - y22_21 * x11_21;
	  var n2 = x12_11 * y11_21 - y12_11 * x11_21;
	
	  if (d == 0) {
	    // parallel
	    if (n1 == 0 && n2 == 0) {
	      // coincident
	      intersection = true;
	    }
	  } else {
	    var along1 = n1 / d;
	    var along2 = n2 / d;
	    if (along1 >= 0 && along1 <= 1 && along2 >= 0 && along2 <= 1) {
	      // intersect
	      if (!point) {
	        intersection = true;
	      } else {
	        // calculate the intersection point
	        var x = seg1.x1 + along1 * x12_11;
	        var y = seg1.y1 + along1 * y12_11;
	        intersection = { 'x': x, 'y': y };
	      }
	    }
	  }
	
	  if (tolerance) {
	    var dist = void 0;
	    if (intersection) {
	      if (point) {
	        var segs = [seg1, seg2];
	        var seg = void 0,
	            _x = void 0,
	            _y = void 0;
	        // check segment endpoints for proximity to intersection
	        // set intersection to first endpoint within the tolerance
	        for (var i = 0; i < 2; ++i) {
	          seg = segs[i];
	          for (var j = 1; j < 3; ++j) {
	            _x = seg['x' + j];
	            _y = seg['y' + j];
	
	            dist = Math.sqrt(Math.pow(_x - intersection.x, 2) + Math.pow(_y - intersection.y, 2));
	
	            if (dist < tolerance) {
	              intersection.x = _x;
	              intersection.y = _y;
	              break;
	            }
	          }
	        }
	      }
	    } else {
	      // no calculated intersection, but segments could be within
	      // the tolerance of one another
	      var _segs = [seg1, seg2];
	      var source = void 0,
	          target = void 0,
	          p = void 0,
	          result = void 0;
	      // check segment endpoints for proximity to intersection
	      // set intersection to first endpoint within the tolerance
	      for (var _i2 = 0; _i2 < 2; ++_i2) {
	        source = _segs[_i2];
	        target = _segs[(_i2 + 1) % 2];
	        for (var _j = 1; _j < 3; ++_j) {
	          p = { x: source['x' + _j], y: source['y' + _j] };
	          result = distanceToSegment(p, target);
	          if (result.distance < tolerance) {
	            if (point) {
	              intersection = { 'x': p.x, 'y': p.y };
	            } else {
	              intersection = true;
	            }
	
	            break;
	          }
	        }
	      }
	    }
	  }
	  return intersection;
	};
	
	var distanceToSegment = function distanceToSegment(point, segment) {
	  var result = distanceSquaredToSegment(point, segment);
	  result.distance = Math.sqrt(result.distance);
	  return result;
	};
	
	var distanceSquaredToSegment = function distanceSquaredToSegment(point, segment) {
	  var x0 = point.x;
	  var y0 = point.y;
	  var x1 = segment.x1;
	  var y1 = segment.y1;
	  var x2 = segment.x2;
	  var y2 = segment.y2;
	  var dx = x2 - x1;
	  var dy = y2 - y1;
	  var along = (dx * (x0 - x1) + dy * (y0 - y1)) / (Math.pow(dx, 2) + Math.pow(dy, 2));
	  var x = void 0,
	      y = void 0;
	
	  if (along <= 0.0) {
	    x = x1;
	    y = y1;
	  } else if (along >= 1.0) {
	    x = x2;
	    y = y2;
	  } else {
	    x = x1 + along * dx;
	    y = y1 + along * dy;
	  }
	
	  return {
	    distance: Math.pow(x - x0, 2) + Math.pow(y - y0, 2),
	    x: x,
	    y: y,
	    along: along
	  };
	};
	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = splitPolygonByPolyline;
	
	var _contains = __webpack_require__(86);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _extentutil = __webpack_require__(13);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isDividedPointSymbol = Symbol('isDividedPoint');
	var alreadyUsedSymbol = Symbol('alreadyUsed');
	var dividePointSymbol = Symbol('dividePoint');
	
	/**
	 * 使用直线来切割多边形,
	 * 暂时只支持不带洞的多边形的分割
	 *
	 * @method splitPolygonByLine
	 * @param polygon {Geometry} 被切割多边形
	 * @param line {Geometry} 切割直线
	 * @returns {Array}
	 */
	function splitPolygonByPolyline(targetPolygon, splitLine) {
	
	  // 不再原对象上处理
	  var polygon = targetPolygon.clone();
	  var line = splitLine.clone();
	
	  var polygonCoordinates = polygon.getCoordinates()[0];
	  var lineCoordinates = line.getCoordinates();
	
	  // 找到直线和面的相交点
	  var dividedPointList = findIntersectionPoints(polygonCoordinates, lineCoordinates);
	
	  // 0交点或者交点为奇数，则认为非法输入
	  if (dividedPointList.length === 0 || dividedPointList.length % 2 === 1) {
	    return [];
	  }
	
	  // 参入到原来分割线中
	  var afterInsertLineCoords = insertDiveidePointsToSplitLineCoords(dividedPointList, lineCoordinates);
	
	  var allPartsScliedFromLineCoords = sliceDividedPointFromLine(dividedPointList, afterInsertLineCoords);
	
	  // 按照顺序插入分割点到分割多边形顶多序列中
	  var vertexListAfterDivide = insertDividePointsToCoordinates(dividedPointList, polygonCoordinates);
	
	  // 重塑多边形
	  var results = renewal(vertexListAfterDivide, allPartsScliedFromLineCoords);
	
	  var featureCollection = [];
	  results.forEach(function (r) {
	    var coords = [];
	    r.forEach(function (arrs) {
	      coords.push([arrs[0], arrs[1]]);
	    });
	    var polygon = new _polygon2.default();
	    polygon.setCoordinates([coords]);
	    featureCollection.push(polygon);
	  });
	
	  // 处理带洞多边形
	  handleHolesForPolygon(polygon, featureCollection, line);
	
	  return featureCollection;
	}
	
	var renewal = function renewal(vertexListAfterDivide, allPartsScliedFromLineCoords) {
	
	  var i = 0;
	  var len = vertexListAfterDivide.length;
	
	  var isInArray = function isInArray(point, singlePolygonCoords) {
	    return singlePolygonCoords.find(function (item) {
	      return item[0] === point[0] && item[1] === point[1];
	    });
	  };
	
	  // 找到分割点在同一分割边上的其他点
	  var findPartners = function findPartners(point) {
	    for (var j = 0, jLen = allPartsScliedFromLineCoords.length; j < jLen; j++) {
	      var parts = allPartsScliedFromLineCoords[j];
	      var fp = parts[0];
	      var ep = parts[parts.length - 1];
	
	      // 如果是首点
	      if (fp[0] === point[0] && fp[1] === point[1]) {
	        return parts;
	      }
	
	      if (ep[0] === point[0] && ep[1] === point[1]) {
	        var newParts = [].concat(parts);
	        return newParts.reverse();
	      }
	    }
	  };
	
	  // 寻找点在多边形序列的下一点
	  var findNextPoint = function findNextPoint(point) {
	    for (var m = 0, mlen = vertexListAfterDivide.length; m < mlen; m++) {
	      var item = vertexListAfterDivide[m];
	      if (item[0] === point[0] && item[1] === point[1]) {
	        if (m === vertexListAfterDivide.length - 1) {
	          return item;
	        } else {
	          return vertexListAfterDivide[m + 1];
	        }
	      }
	    }
	  };
	
	  var singlePolygonCoords = [];
	  var allPolygonCoords = [];
	
	  // 递归分割
	  var goThrough = function goThrough(ePoint, singlePolygonCoords) {
	    if (singlePolygonCoords.length > 1) {
	      var firstPoint = singlePolygonCoords[0];
	      if (firstPoint[0] === ePoint[0] && firstPoint[1] === ePoint[1]) {
	        singlePolygonCoords.push(ePoint);
	        return true;
	      }
	    }
	
	    // 找到分割点，就需要添加它的伙伴（不管顺逆方向）
	    if (ePoint.length >= 3 && ePoint[2] === isDividedPointSymbol) {
	      var parts = findPartners(ePoint);
	      parts.forEach(function (p) {
	        singlePolygonCoords.push(p);
	      });
	
	      // 判断此时是否已经完成绘制
	      var ffpoint = singlePolygonCoords[0];
	      var eepoint = singlePolygonCoords[singlePolygonCoords.length - 1];
	      if (ffpoint[0] === eepoint[0] && ffpoint[1] === eepoint[1]) {
	        return true;
	      }
	
	      var endPoint = parts[parts.length - 1];
	      var nextPoint = findNextPoint(endPoint);
	      goThrough(nextPoint, singlePolygonCoords);
	    } else if (ePoint.length === 2) {
	      singlePolygonCoords.push(ePoint);
	
	      var _nextPoint = findNextPoint(ePoint);
	      goThrough(_nextPoint, singlePolygonCoords);
	    }
	  };
	
	  // 更新多边形顶点的状态
	  var updataStatus = function updataStatus(singlePolygonCoords, vertexListAfterDivide) {
	    vertexListAfterDivide.forEach(function (vertex) {
	      if (isInArray(vertex, singlePolygonCoords)) {
	        // 如果是原多边形顶点，则设置为alreadyUsedSymbol
	        if (vertex.length === 2) {
	          vertex.push(alreadyUsedSymbol);
	        }
	        // 如果是分割点，则只能使用2次
	        else if (vertex.length === 3 && vertex[2] === isDividedPointSymbol) {
	            vertex.push('1');
	          }
	          //
	          else if (vertex.length === 4) {
	              if (vertex[3] === '1') {
	                vertex[3] = '2';
	              }
	            }
	      }
	    });
	  };
	
	  // 检测这两个点是否是切割边
	  var isInOneSegment = function isInOneSegment(onePoint, otherPoint) {
	    var allPartsScliedFromLineCoordsTemp = allPartsScliedFromLineCoords;
	    var findCount = 0;
	
	    for (var _i = 0, _len = allPartsScliedFromLineCoordsTemp.length; _i < _len; _i++) {
	      var group = allPartsScliedFromLineCoordsTemp[_i];
	      findCount = 0;
	
	      for (var j = 0, jjlen = group.length; j < jjlen; j++) {
	        var item = group[j];
	        if (item[0] === onePoint[0] && item[1] === onePoint[1]) {
	          findCount++;
	        }
	
	        if (item[0] === otherPoint[0] && item[1] === otherPoint[1]) {
	          findCount++;
	        }
	
	        if (findCount === 2) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  };
	
	  for (; i < len - 1; i++) {
	    var fPoint = vertexListAfterDivide[i];
	    // 如果是普通点
	    if (fPoint.length === 2) {
	      if (!isInArray(fPoint, singlePolygonCoords)) {
	        singlePolygonCoords.push(fPoint);
	      }
	
	      var ePoint = vertexListAfterDivide[i + 1];
	      goThrough(ePoint, singlePolygonCoords);
	
	      updataStatus(singlePolygonCoords, vertexListAfterDivide);
	
	      allPolygonCoords.push(singlePolygonCoords);
	      singlePolygonCoords = [];
	    }
	    // 如果是分割点
	    else if (fPoint.length === 3 && fPoint[2] === isDividedPointSymbol) {
	        if (!isInArray(fPoint, singlePolygonCoords)) {
	          singlePolygonCoords.push(fPoint);
	        }
	
	        var _ePoint = vertexListAfterDivide[i + 1];
	        goThrough(_ePoint, singlePolygonCoords);
	
	        updataStatus(singlePolygonCoords, vertexListAfterDivide);
	
	        allPolygonCoords.push(singlePolygonCoords);
	        singlePolygonCoords = [];
	      } else if (fPoint.length === 4 && fPoint[3] === '1') {
	        var _ePoint2 = vertexListAfterDivide[i + 1];
	
	        // 分割点，必须是构成同一边，不能是异边
	        if (_ePoint2.length >= 3 && _ePoint2[2] === isDividedPointSymbol && isInOneSegment(fPoint, _ePoint2)) {
	          _ePoint2 = fPoint;
	        }
	        // 异边，则重新启动分割流程
	        else {
	            if (!isInArray(fPoint, singlePolygonCoords)) {
	              singlePolygonCoords.push(fPoint);
	            }
	          }
	
	        goThrough(_ePoint2, singlePolygonCoords);
	        updataStatus(singlePolygonCoords, vertexListAfterDivide);
	
	        var fp = singlePolygonCoords[0];
	        var tp = singlePolygonCoords[singlePolygonCoords.length - 1];
	        if (fp[0] !== tp[0] || fp[1] !== tp[1]) {
	          singlePolygonCoords.push(fp);
	        }
	
	        allPolygonCoords.push(singlePolygonCoords);
	        singlePolygonCoords = [];
	      }
	  }
	
	  return allPolygonCoords;
	};
	
	var sliceDividedPointFromLine = function sliceDividedPointFromLine(dividedPointList, afterInsertLineCoords) {
	  var allParts = [];
	  var singleParts = [];
	  var isDividePointStart = false;
	
	  for (var i = 0, len = afterInsertLineCoords.length; i < len; i++) {
	    var item = afterInsertLineCoords[i];
	
	    if (isDividePointStart === false && item.length === 3) {
	      singleParts.push([item[0], item[1]]);
	      isDividePointStart = true;
	
	      continue;
	    }
	
	    if (isDividePointStart) {
	      if (item.length === 2) {
	        singleParts.push(item);
	
	        continue;
	      }
	    }
	
	    if (isDividePointStart && item.length === 3) {
	      singleParts.push([item[0], item[1]]);
	      isDividePointStart = false;
	
	      allParts.push(singleParts);
	      singleParts = [];
	    }
	  }
	
	  return allParts;
	};
	
	var insertDiveidePointsToSplitLineCoords = function insertDiveidePointsToSplitLineCoords(dividedPointList, lineCoordinates) {
	
	  var getDividePoints = function getDividePoints(fP, eP) {
	    return dividedPointList.filter(function (dp) {
	      var dfPoint = dp.intersectFrom.fromPoint;
	      var dePoint = dp.intersectFrom.endPoint;
	
	      return dfPoint[0] === fP[0] && dfPoint[1] === fP[1] && dePoint[0] === eP[0] && dePoint[1] === eP[1];
	    });
	  };
	
	  var isInArray = function isInArray(point) {
	    return afterArr.find(function (item) {
	      return item[0] === point[0] && item[1] === point[1];
	    });
	  };
	
	  var len = lineCoordinates.length;
	  var i = 0;
	  var afterArr = [];
	  for (; i < len - 1; i++) {
	    var fPoint = lineCoordinates[i];
	    var ePoint = lineCoordinates[i + 1];
	
	    if (!isInArray(fPoint)) {
	      afterArr.push(fPoint);
	    }
	
	    var dividePoints = getDividePoints(fPoint, ePoint);
	    if (dividePoints.length !== 0) {
	      // 插入分割点
	      if (dividePoints.length === 1) {
	        afterArr.push([dividePoints[0].point.x, dividePoints[0].point.y, dividePointSymbol]);
	      } else {
	        (function () {
	          // 多个分割点需要排序
	
	          var firstPointXY = {
	            x: fPoint[0],
	            y: fPoint[1]
	          };
	
	          dividePoints.sort(function (item1, item2) {
	            return distance(item1.point, firstPointXY) - distance(item2.point, firstPointXY);
	          });
	
	          dividePoints.forEach(function (item) {
	            afterArr.push([item.point.x, item.point.y, dividePointSymbol]);
	          });
	        })();
	      }
	    }
	
	    if (!isInArray(ePoint)) {
	      afterArr.push(ePoint);
	    }
	  }
	
	  return afterArr;
	};
	
	var distance = function distance(p1, p2) {
	  return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
	};
	
	var insertDividePointsToCoordinates = function insertDividePointsToCoordinates(dividedPointList, polygonCoordinates) {
	  var afterInserted = [];
	
	  var isInDividedPointList = function isInDividedPointList(firstPoint, endPoint) {
	    return dividedPointList.filter(function (item) {
	      var orialPoint = item.originPoint;
	      var ofPoint = orialPoint.fromPoint;
	      var oePoint = orialPoint.toPoint;
	
	      return firstPoint[0] === ofPoint[0] && firstPoint[1] === ofPoint[1] && endPoint[0] === oePoint[0] && endPoint[1] === oePoint[1];
	    });
	  };
	
	  var len = polygonCoordinates.length;
	  var i = 0;
	
	  for (; i < len - 1; i++) {
	    var fPoint = polygonCoordinates[i];
	    var ePoint = polygonCoordinates[i + 1];
	
	    afterInserted.push(fPoint);
	    var itemDividedPoint = isInDividedPointList(fPoint, ePoint);
	
	    if (itemDividedPoint.length > 0) {
	      if (itemDividedPoint.length > 1) {
	        (function () {
	          var firstPointXY = {
	            x: fPoint[0],
	            y: fPoint[1]
	          };
	
	          itemDividedPoint.sort(function (item1, item2) {
	            return distance(item1.point, firstPointXY) - distance(item2.point, firstPointXY);
	          });
	        })();
	      }
	
	      itemDividedPoint.forEach(function (item) {
	        var point = item.point;
	        afterInserted.push([point.x, point.y, isDividedPointSymbol]);
	      });
	    }
	  }
	
	  afterInserted.push(afterInserted[0]);
	  return afterInserted;
	};
	
	var findOneIntersectionPoints = function findOneIntersectionPoints(polygonCoordinates, lineCoordinates) {
	  var _ExtentUtil = _extentutil.ExtentUtil;
	  var lineCoordinatesExtent = _ExtentUtil.boundingExtentFromTwoPoints(lineCoordinates[0], lineCoordinates[1]);
	  var lineCoordinatesExtentBuffer = _ExtentUtil.buffer(lineCoordinatesExtent, 4);
	
	  var seg2 = {
	    x1: lineCoordinates[0][0],
	    y1: lineCoordinates[0][1],
	    x2: lineCoordinates[1][0],
	    y2: lineCoordinates[1][1]
	  };
	
	  var ntersectionPoints = [];
	
	  for (var j = 0, jj = polygonCoordinates.length - 1; j < jj; j++) {
	    var points = polygonCoordinates[j];
	    var nextPoints = polygonCoordinates[j + 1];
	
	    var pathExtent = _ExtentUtil.boundingExtentFromTwoPoints(points, nextPoints);
	    // 如果两边的extent相交，则判断他们是否相交
	    if (_ExtentUtil.intersects(pathExtent, lineCoordinatesExtentBuffer)) {
	
	      var seg1 = {
	        x1: points[0],
	        y1: points[1],
	        x2: nextPoints[0],
	        y2: nextPoints[1]
	      };
	
	      var intersectPoint = segmentsIntersect(seg1, seg2, { point: true });
	      if (intersectPoint instanceof Object) {
	        ntersectionPoints.push({
	          point: intersectPoint,
	          originPoint: {
	            fromPoint: points,
	            toPoint: nextPoints
	          },
	          index: j
	        });
	      }
	    }
	  }
	
	  return ntersectionPoints;
	};
	
	var findIntersectionPoints = function findIntersectionPoints(polygonCoordinates, lineCoordinates) {
	  var _findOneIntersectionPoints = findOneIntersectionPoints;
	  var ntersectionPoints = [];
	
	  var _loop = function _loop(i, len) {
	    var firstPoint = lineCoordinates[i];
	    var endPoint = lineCoordinates[i + 1];
	
	    var intersectionPoints = _findOneIntersectionPoints(polygonCoordinates, [firstPoint, endPoint]);
	    intersectionPoints.forEach(function (ntp) {
	      ntp.intersectIndex = i;
	      ntp.intersectFrom = {
	        fromPoint: firstPoint,
	        endPoint: endPoint
	      };
	    });
	
	    ntersectionPoints = ntersectionPoints.concat(intersectionPoints);
	  };
	
	  for (var i = 0, len = lineCoordinates.length - 1; i < len; i++) {
	    _loop(i, len);
	  }
	
	  return ntersectionPoints;
	};
	
	var segmentsIntersect = function segmentsIntersect(seg1, seg2, options) {
	  var point = options && options.point;
	  var tolerance = options && options.tolerance;
	  var intersection = false;
	  var x11_21 = seg1.x1 - seg2.x1;
	  var y11_21 = seg1.y1 - seg2.y1;
	  var x12_11 = seg1.x2 - seg1.x1;
	  var y12_11 = seg1.y2 - seg1.y1;
	  var y22_21 = seg2.y2 - seg2.y1;
	  var x22_21 = seg2.x2 - seg2.x1;
	  var d = y22_21 * x12_11 - x22_21 * y12_11;
	  var n1 = x22_21 * y11_21 - y22_21 * x11_21;
	  var n2 = x12_11 * y11_21 - y12_11 * x11_21;
	
	  if (d == 0) {
	    // parallel
	    if (n1 == 0 && n2 == 0) {
	      // coincident
	      intersection = true;
	    }
	  } else {
	    var along1 = n1 / d;
	    var along2 = n2 / d;
	    if (along1 >= 0 && along1 <= 1 && along2 >= 0 && along2 <= 1) {
	      // intersect
	      if (!point) {
	        intersection = true;
	      } else {
	        // calculate the intersection point
	        var x = seg1.x1 + along1 * x12_11;
	        var y = seg1.y1 + along1 * y12_11;
	        intersection = { 'x': x, 'y': y };
	      }
	    }
	  }
	
	  if (tolerance) {
	    var dist = void 0;
	    if (intersection) {
	      if (point) {
	        var segs = [seg1, seg2];
	        var seg = void 0,
	            _x = void 0,
	            _y = void 0;
	        // check segment endpoints for proximity to intersection
	        // set intersection to first endpoint within the tolerance
	        for (var i = 0; i < 2; ++i) {
	          seg = segs[i];
	          for (var j = 1; j < 3; ++j) {
	            _x = seg['x' + j];
	            _y = seg['y' + j];
	
	            dist = Math.sqrt(Math.pow(_x - intersection.x, 2) + Math.pow(_y - intersection.y, 2));
	
	            if (dist < tolerance) {
	              intersection.x = _x;
	              intersection.y = _y;
	              break;
	            }
	          }
	        }
	      }
	    } else {
	      // no calculated intersection, but segments could be within
	      // the tolerance of one another
	      var _segs = [seg1, seg2];
	      var source = void 0,
	          target = void 0,
	          p = void 0,
	          result = void 0;
	      // check segment endpoints for proximity to intersection
	      // set intersection to first endpoint within the tolerance
	      for (var _i2 = 0; _i2 < 2; ++_i2) {
	        source = _segs[_i2];
	        target = _segs[(_i2 + 1) % 2];
	        for (var _j = 1; _j < 3; ++_j) {
	          p = { x: source['x' + _j], y: source['y' + _j] };
	          result = distanceToSegment(p, target);
	          if (result.distance < tolerance) {
	            if (point) {
	              intersection = { 'x': p.x, 'y': p.y };
	            } else {
	              intersection = true;
	            }
	
	            break;
	          }
	        }
	      }
	    }
	  }
	  return intersection;
	};
	
	var distanceToSegment = function distanceToSegment(point, segment) {
	  var result = distanceSquaredToSegment(point, segment);
	  result.distance = Math.sqrt(result.distance);
	  return result;
	};
	
	var distanceSquaredToSegment = function distanceSquaredToSegment(point, segment) {
	  var x0 = point.x;
	  var y0 = point.y;
	  var x1 = segment.x1;
	  var y1 = segment.y1;
	  var x2 = segment.x2;
	  var y2 = segment.y2;
	  var dx = x2 - x1;
	  var dy = y2 - y1;
	  var along = (dx * (x0 - x1) + dy * (y0 - y1)) / (Math.pow(dx, 2) + Math.pow(dy, 2));
	  var x = void 0,
	      y = void 0;
	
	  if (along <= 0.0) {
	    x = x1;
	    y = y1;
	  } else if (along >= 1.0) {
	    x = x2;
	    y = y2;
	  } else {
	    x = x1 + along * dx;
	    y = y1 + along * dy;
	  }
	
	  return {
	    distance: Math.pow(x - x0, 2) + Math.pow(y - y0, 2),
	    x: x, y: y,
	    along: along
	  };
	};
	
	/**
	 * 处理带洞多边形
	 * @param polygon
	 * @param geometryCollection
	 * @param splitLine
	 */
	var handleHolesForPolygon = function handleHolesForPolygon(polygon, geometryCollection, splitLine) {
	  if (!polygon.hasHoles()) {
	    return;
	  }
	
	  var addHoleToPolygon = function addHoleToPolygon(polyCoods, geometryCollection) {
	    var poly = new _polygon2.default([polyCoods]);
	    var needPoly = geometryCollection.find(function (polygon) {
	      return (0, _contains2.default)(polygon, poly);
	    });
	
	    if (needPoly) {
	      needPoly.getCoordinates().push(polyCoods);
	    }
	  };
	
	  // 判断洞是否与切割线相交
	  var coords = polygon.getCoordinates();
	  var lineCoords = splitLine;
	
	  for (var i = 1, len = coords.length; i < len; i++) {
	    var dividedPoints = findIntersectionPoints(coords[i], lineCoords);
	
	    // 如果分割线和洞不相交，需要判断洞的归属
	    if (dividedPoints.length === 0) {
	      // console.log('Find one need to appended to collection.')
	      addHoleToPolygon(coords[i], geometryCollection);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contains;
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _polygon = __webpack_require__(27);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *
	 * 判断多边形是否包含另外一个图形
	 *
	 * @method contains
	 * @param polygon
	 * @param geometry
	 * @returns {*}
	 */
	function contains(polygon, geometry) {
	  var polyGeometryType = polygon.geometryType;
	  var isContained = false;
	
	  if (polyGeometryType === _geometry2.default.POLYGON || polyGeometryType === _geometry2.default.MULTI_POLYGON || polyGeometryType === _geometry2.default.EXTENT) {
	    var targetGeometryType = geometry.geometryType;
	
	    if (targetGeometryType === _geometry2.default.POINT) {
	      return polygon.containsXY(geometry.x, geometry.y);
	    } else if (targetGeometryType === _geometry2.default.LINE) {
	      return polyContainsLine(polygon, geometry);
	    } else if (targetGeometryType === _geometry2.default.POLYGON) {
	      return polyContainsPoly(polygon, geometry);
	    } else if (targetGeometryType === _geometry2.default.MULTI_POLYGON) {
	      return polyContainsMultiPoly(polygon, geometry);
	    } else if (targetGeometryType === _geometry2.default.PARALLELOGRAM) {
	      return polyContainsPoly(polygon, new _polygon2.default(geometry.getCoordinates()));
	    }
	  }
	
	  return isContained;
	}
	
	var polyContainsLine = function polyContainsLine(poly, line) {
	  var lineCoords = line.getCoordinates();
	  return polygonContainsLinestring(poly, lineCoords);
	};
	
	var polyContainsPoly = function polyContainsPoly(poly, poly2) {
	  var poly2Type = poly2.geometryType;
	  if (poly2Type === _geometry2.default.POLYGON) {
	    var outRing = poly2.getCoordinates()[0];
	    return polygonContainsLinestring(poly, outRing);
	  }
	
	  return false;
	};
	
	var polyContainsMultiPoly = function polyContainsMultiPoly(polygon, mutilpolygon) {
	  var polys = mutilpolygon.convertToPolygons();
	  var contained = polys.find(function (p) {
	    return !polyContainsPoly(polygon, p);
	  });
	
	  return contained == undefined ? true : false;
	};
	
	var polygonContainsLinestring = function polygonContainsLinestring(poly, coords) {
	  var hasOne = coords.some(function (coord) {
	    return !poly.containsXY(coord[0], coord[1]);
	  });
	
	  return !hasOne;
	};
	module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = polygonWithHoles;
	
	var _geometry = __webpack_require__(9);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _mutilpolygon = __webpack_require__(29);
	
	var _mutilpolygon2 = _interopRequireDefault(_mutilpolygon);
	
	var _orient = __webpack_require__(28);
	
	var _contains = __webpack_require__(86);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *
	 * @param polygon
	 * @param holePolygon
	 * @returns {*}
	 */
	function polygonWithHoles(polygon1, polygon2) {
	
	  var polygon = polygon1.clone();
	  var holePolygon = polygon2.clone();
	
	  var resultPolygon = polygon;
	  var holeCoordinates = holePolygon.getCoordinates();
	  var polygonCoordinates = polygon.getCoordinates();
	
	  var type = polygon.geometryType;
	  // if (type === Geometry.POLYGON || type === Geometry.MULTI_POLYGON ) {
	  if (type === _geometry2.default.POLYGON) {
	    // 必须要被包含在多边形内
	    if ((0, _contains2.default)(polygon, holePolygon)) {
	      var holeOutRings = holeCoordinates[0];
	      var polygonOutRings = polygonCoordinates[0];
	
	      var tempHoleOutRings = [];
	      var tempPolygonOutRings = [];
	
	      holeOutRings.forEach(function (ring) {
	        tempHoleOutRings.push(ring[0], ring[1]);
	      });
	
	      polygonOutRings.forEach(function (ring) {
	        tempPolygonOutRings.push(ring[0], ring[1]);
	      });
	
	      var holeOriented = (0, _orient.linearRingIsClockwise)(tempHoleOutRings, 0, tempHoleOutRings.length, 2);
	      var polygonOutRingOriented = (0, _orient.linearRingIsClockwise)(tempPolygonOutRings, 0, tempPolygonOutRings.length, 2);
	
	      // 带洞多边形
	      if (polygonCoordinates.length > 1) {
	        // 如果有带洞多边形，需要处理的更多
	        // 这里只是简单的存储进去
	
	        // 不同向
	        if (holeOriented !== polygonOutRingOriented) {
	          polygonCoordinates.push(holeOutRings.slice());
	        } else {
	          polygonCoordinates.push(holeOutRings.slice().reverse());
	        }
	      } else {
	        // 不同向
	        if (holeOriented !== polygonOutRingOriented) {
	          polygonCoordinates.push(holeOutRings.slice());
	        } else {
	          polygonCoordinates.push(holeOutRings.slice().reverse());
	        }
	      }
	    }
	  } else if (type === _geometry2.default.MULTI_POLYGON) {
	    var polygons = polygon.convertToPolygons();
	
	    var polygonsWithHole = [];
	
	    polygons.forEach(function (poly) {
	      var polyWithHole = polygonWithHoles(poly, holePolygon);
	      polygonsWithHole.push(polyWithHole);
	    });
	
	    var coordinates = [];
	    polygonsWithHole.forEach(function (poly) {
	      coordinates.push(poly.getCoordinates());
	    });
	
	    var multiPolygon = new _mutilpolygon2.default();
	    multiPolygon.setCoordinates(coordinates);
	
	    resultPolygon = multiPolygon;
	  }
	
	  return resultPolygon;
	}
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=mk.js.map