/*!
 * Chart.js v2.9.1
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
import moment from 'moment';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */


var colorString = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
};

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3,4})$/i,
       hex =  /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr),
       hexAlpha = "";
   if (match) {
      match = match[1];
      hexAlpha = match[3];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorName$1[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgba, a) {
   var a = (a !== undefined && rgba.length === 3) ? a : rgba[3];
   return "#" + hexDouble(rgba[0]) 
              + hexDouble(rgba[1])
              + hexDouble(rgba[2])
              + (
                 (a >= 0 && a < 1)
                 ? hexDouble(Math.round(a * 255))
                 : ""
              );
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorName$1) {
   reverseNames[colorName$1[name]] = name;
}

/* MIT license */



var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.valid = false;
	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = colorString.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = colorString.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = colorString.getHwb(obj)) {
			this.setValues('hwb', vals);
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		}
	}
};

Color.prototype = {
	isValid: function () {
		return this.valid;
	},
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return colorString.hexString(this.values.rgb);
	},
	rgbString: function () {
		return colorString.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return colorString.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return colorString.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return colorString.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return colorString.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return colorString.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return colorString.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	this.valid = true;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = colorConvert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

var chartjsColor = Color;

/**
 * @namespace Chart.helpers
 */

var helpers = {
  /**
   * An empty function that can be used, for example, for optional callback.
   */
  noop: function noop() {},

  /**
   * Returns a unique id, sequentially generated from a global variable.
   * @returns {number}
   * @function
   */
  uid: function () {
    var id = 0;
    return function () {
      return id++;
    };
  }(),

  /**
   * Returns true if `value` is neither null nor undefined, else returns false.
   * @param {*} value - The value to test.
   * @returns {boolean}
   * @since 2.7.0
   */
  isNullOrUndef: function isNullOrUndef(value) {
    return value === null || typeof value === 'undefined';
  },

  /**
   * Returns true if `value` is an array (including typed arrays), else returns false.
   * @param {*} value - The value to test.
   * @returns {boolean}
   * @function
   */
  isArray: function isArray(value) {
    if (Array.isArray && Array.isArray(value)) {
      return true;
    }

    var type = Object.prototype.toString.call(value);

    if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
      return true;
    }

    return false;
  },

  /**
   * Returns true if `value` is an object (excluding null), else returns false.
   * @param {*} value - The value to test.
   * @returns {boolean}
   * @since 2.7.0
   */
  isObject: function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === '[object Object]';
  },

  /**
   * Returns true if `value` is a finite number, else returns false
   * @param {*} value  - The value to test.
   * @returns {boolean}
   */
  isFinite: function (_isFinite) {
    function isFinite(_x) {
      return _isFinite.apply(this, arguments);
    }

    isFinite.toString = function () {
      return _isFinite.toString();
    };

    return isFinite;
  }(function (value) {
    return (typeof value === 'number' || value instanceof Number) && isFinite(value);
  }),

  /**
   * Returns `value` if defined, else returns `defaultValue`.
   * @param {*} value - The value to return if defined.
   * @param {*} defaultValue - The value to return if `value` is undefined.
   * @returns {*}
   */
  valueOrDefault: function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
  },

  /**
   * Returns value at the given `index` in array if defined, else returns `defaultValue`.
   * @param {Array} value - The array to lookup for value at `index`.
   * @param {number} index - The index in `value` to lookup for value.
   * @param {*} defaultValue - The value to return if `value[index]` is undefined.
   * @returns {*}
   */
  valueAtIndexOrDefault: function valueAtIndexOrDefault(value, index, defaultValue) {
    return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
  },

  /**
   * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
   * value returned by `fn`. If `fn` is not a function, this method returns undefined.
   * @param {function} fn - The function to call.
   * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
   * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
   * @returns {*}
   */
  callback: function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === 'function') {
      return fn.apply(thisArg, args);
    }
  },

  /**
   * Note(SB) for performance sake, this method should only be used when loopable type
   * is unknown or in none intensive code (not called often and small loopable). Else
   * it's preferable to use a regular for() loop and save extra function calls.
   * @param {object|Array} loopable - The object or array to be iterated.
   * @param {function} fn - The function to call for each item.
   * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
   * @param {boolean} [reverse] - If true, iterates backward on the loopable.
   */
  each: function each(loopable, fn, thisArg, reverse) {
    var i, len, keys;

    if (helpers.isArray(loopable)) {
      len = loopable.length;

      if (reverse) {
        for (i = len - 1; i >= 0; i--) {
          fn.call(thisArg, loopable[i], i);
        }
      } else {
        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[i], i);
        }
      }
    } else if (helpers.isObject(loopable)) {
      keys = Object.keys(loopable);
      len = keys.length;

      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[keys[i]], keys[i]);
      }
    }
  },

  /**
   * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
   * @see https://stackoverflow.com/a/14853974
   * @param {Array} a0 - The array to compare
   * @param {Array} a1 - The array to compare
   * @returns {boolean}
   */
  arrayEquals: function arrayEquals(a0, a1) {
    var i, ilen, v0, v1;

    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }

    for (i = 0, ilen = a0.length; i < ilen; ++i) {
      v0 = a0[i];
      v1 = a1[i];

      if (v0 instanceof Array && v1 instanceof Array) {
        if (!helpers.arrayEquals(v0, v1)) {
          return false;
        }
      } else if (v0 !== v1) {
        // NOTE: two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }

    return true;
  },

  /**
   * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
   * @param {Array} a0 - The array to compare
   * @param {Array} a1 - The array to compare
   * @returns {boolean}
   */
  _elementsEqual: function _elementsEqual(a0, a1) {
    var i, ilen, v0, v1;

    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }

    for (i = 0, ilen = a0.length; i < ilen; ++i) {
      v0 = a0[i];
      v1 = a1[i];

      if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
        return false;
      }
    }

    return true;
  },

  /**
   * Returns a deep copy of `source` without keeping references on objects and arrays.
   * @param {*} source - The value to clone.
   * @returns {*}
   */
  clone: function clone(source) {
    if (helpers.isArray(source)) {
      return source.map(helpers.clone);
    }

    if (helpers.isObject(source)) {
      var target = {};
      var keys = Object.keys(source);
      var klen = keys.length;
      var k = 0;

      for (; k < klen; ++k) {
        target[keys[k]] = helpers.clone(source[keys[k]]);
      }

      return target;
    }

    return source;
  },

  /**
   * The default merger when Chart.helpers.merge is called without merger option.
   * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
   * @private
   */
  _merger: function _merger(key, target, source, options) {
    var tval = target[key];
    var sval = source[key];

    if (helpers.isObject(tval) && helpers.isObject(sval)) {
      helpers.merge(tval, sval, options);
    } else {
      target[key] = helpers.clone(sval);
    }
  },

  /**
   * Merges source[key] in target[key] only if target[key] is undefined.
   * @private
   */
  _mergerIf: function _mergerIf(key, target, source) {
    var tval = target[key];
    var sval = source[key];

    if (helpers.isObject(tval) && helpers.isObject(sval)) {
      helpers.mergeIf(tval, sval);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = helpers.clone(sval);
    }
  },

  /**
   * Recursively deep copies `source` properties into `target` with the given `options`.
   * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
   * @param {object} target - The target object in which all sources are merged into.
   * @param {object|object[]} source - Object(s) to merge into `target`.
   * @param {object} [options] - Merging options:
   * @param {function} [options.merger] - The merge method (key, target, source, options)
   * @returns {object} The `target` object.
   */
  merge: function merge(target, source, options) {
    var sources = helpers.isArray(source) ? source : [source];
    var ilen = sources.length;
    var merge, i, keys, klen, k;

    if (!helpers.isObject(target)) {
      return target;
    }

    options = options || {};
    merge = options.merger || helpers._merger;

    for (i = 0; i < ilen; ++i) {
      source = sources[i];

      if (!helpers.isObject(source)) {
        continue;
      }

      keys = Object.keys(source);

      for (k = 0, klen = keys.length; k < klen; ++k) {
        merge(keys[k], target, source, options);
      }
    }

    return target;
  },

  /**
   * Recursively deep copies `source` properties into `target` *only* if not defined in target.
   * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
   * @param {object} target - The target object in which all sources are merged into.
   * @param {object|object[]} source - Object(s) to merge into `target`.
   * @returns {object} The `target` object.
   */
  mergeIf: function mergeIf(target, source) {
    return helpers.merge(target, source, {
      merger: helpers._mergerIf
    });
  },

  /**
   * Applies the contents of two or more objects together into the first object.
   * @param {object} target - The target object in which all objects are merged into.
   * @param {object} arg1 - Object containing additional properties to merge in target.
   * @param {object} argN - Additional objects containing properties to merge in target.
   * @returns {object} The `target` object.
   */
  extend: Object.assign || function (target) {
    return helpers.merge(target, [].slice.call(arguments, 1), {
      merger: function merger(key, dst, src) {
        dst[key] = src[key];
      }
    });
  },

  /**
   * Basic javascript inheritance based on the model created in Backbone.js
   */
  inherits: function inherits(extensions) {
    var me = this;
    var ChartElement = extensions && Object.prototype.hasOwnProperty.call(extensions, 'constructor') ? extensions.constructor : function () {
      return me.apply(this, arguments);
    };

    var Surrogate = function Surrogate() {
      this.constructor = ChartElement;
    };

    Surrogate.prototype = me.prototype;
    ChartElement.prototype = new Surrogate();
    ChartElement.extend = helpers.inherits;

    if (extensions) {
      helpers.extend(ChartElement.prototype, extensions);
    }

    ChartElement.__super__ = me.prototype;
    return ChartElement;
  },
  _deprecated: function _deprecated(scope, value, previous, current) {
    if (value !== undefined) {
      console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
    }
  }
};
var helpers_core = helpers;

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */

var effects = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return -t * (t - 2);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t;
    }

    return -0.5 * (--t * (t - 2) - 1);
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return (t = t - 1) * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t * t;
    }

    return 0.5 * ((t -= 2) * t * t + 2);
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return -((t = t - 1) * t * t * t - 1);
  },
  easeInOutQuart: function easeInOutQuart(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t * t * t;
    }

    return -0.5 * ((t -= 2) * t * t * t - 2);
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return (t = t - 1) * t * t * t * t + 1;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t * t * t * t;
    }

    return 0.5 * ((t -= 2) * t * t * t * t + 2);
  },
  easeInSine: function easeInSine(t) {
    return -Math.cos(t * (Math.PI / 2)) + 1;
  },
  easeOutSine: function easeOutSine(t) {
    return Math.sin(t * (Math.PI / 2));
  },
  easeInOutSine: function easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  },
  easeInExpo: function easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  },
  easeOutExpo: function easeOutExpo(t) {
    return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  },
  easeInOutExpo: function easeInOutExpo(t) {
    if (t === 0) {
      return 0;
    }

    if (t === 1) {
      return 1;
    }

    if ((t /= 0.5) < 1) {
      return 0.5 * Math.pow(2, 10 * (t - 1));
    }

    return 0.5 * (-Math.pow(2, -10 * --t) + 2);
  },
  easeInCirc: function easeInCirc(t) {
    if (t >= 1) {
      return t;
    }

    return -(Math.sqrt(1 - t * t) - 1);
  },
  easeOutCirc: function easeOutCirc(t) {
    return Math.sqrt(1 - (t = t - 1) * t);
  },
  easeInOutCirc: function easeInOutCirc(t) {
    if ((t /= 0.5) < 1) {
      return -0.5 * (Math.sqrt(1 - t * t) - 1);
    }

    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  easeInElastic: function easeInElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1;

    if (t === 0) {
      return 0;
    }

    if (t === 1) {
      return 1;
    }

    if (!p) {
      p = 0.3;
    }

    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
  },
  easeOutElastic: function easeOutElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1;

    if (t === 0) {
      return 0;
    }

    if (t === 1) {
      return 1;
    }

    if (!p) {
      p = 0.3;
    }

    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }

    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
  },
  easeInOutElastic: function easeInOutElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1;

    if (t === 0) {
      return 0;
    }

    if ((t /= 0.5) === 2) {
      return 1;
    }

    if (!p) {
      p = 0.45;
    }

    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }

    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
    }

    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
  },
  easeInBack: function easeInBack(t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack: function easeOutBack(t) {
    var s = 1.70158;
    return (t = t - 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack: function easeInOutBack(t) {
    var s = 1.70158;

    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    }

    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
  },
  easeInBounce: function easeInBounce(t) {
    return 1 - effects.easeOutBounce(1 - t);
  },
  easeOutBounce: function easeOutBounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }

    if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    }

    if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    }

    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce: function easeInOutBounce(t) {
    if (t < 0.5) {
      return effects.easeInBounce(t * 2) * 0.5;
    }

    return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
  }
};
var helpers_easing = {
  effects: effects
};

var PI = Math.PI;
var RAD_PER_DEG = PI / 180;
var DOUBLE_PI = PI * 2;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;
/**
 * @namespace Chart.helpers.canvas
 */

var helpers_canvas = {
  /**
   * Returns the aligned pixel value to avoid anti-aliasing blur
   * @param {Chart} chart - The chart instance.
   * @param {number} pixel - A pixel value.
   * @param {number} width - The width of the element.
   * @returns {number} The aligned pixel value.
   * @private
   */
  _alignPixel: function _alignPixel(chart, pixel, width) {
    var devicePixelRatio = chart.currentDevicePixelRatio;
    var halfWidth = width / 2;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
  },

  /**
   * Clears the entire canvas associated to the given `chart`.
   * @param {Chart} chart - The chart for which to clear the canvas.
   */
  clear: function clear(chart) {
    chart.ctx.clearRect(0, 0, chart.width, chart.height);
  },
  drawPoint: function drawPoint(ctx, style, radius, x, y, rotation) {
    var type, xOffset, yOffset, size, cornerRadius;
    var rad = (rotation || 0) * RAD_PER_DEG;

    if (style && _typeof(style) === 'object') {
      type = style.toString();

      if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rad);
        ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
        ctx.restore();
        return;
      }
    }

    if (isNaN(radius) || radius <= 0) {
      return;
    }

    ctx.beginPath();

    switch (style) {
      // Default includes circle
      default:
        ctx.arc(x, y, radius, 0, DOUBLE_PI);
        ctx.closePath();
        break;

      case 'triangle':
        ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        ctx.closePath();
        break;

      case 'rectRounded':
        // NOTE: the rounded rect implementation changed to use `arc` instead of
        // `quadraticCurveTo` since it generates better results when rect is
        // almost a circle. 0.516 (instead of 0.5) produces results with visually
        // closer proportion to the previous impl and it is inscribed in the
        // circle with `radius`. For more details, see the following PRs:
        // https://github.com/chartjs/Chart.js/issues/5597
        // https://github.com/chartjs/Chart.js/issues/5858
        cornerRadius = radius * 0.516;
        size = radius - cornerRadius;
        xOffset = Math.cos(rad + QUARTER_PI) * size;
        yOffset = Math.sin(rad + QUARTER_PI) * size;
        ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
        ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
        ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
        ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
        ctx.closePath();
        break;

      case 'rect':
        if (!rotation) {
          size = Math.SQRT1_2 * radius;
          ctx.rect(x - size, y - size, 2 * size, 2 * size);
          break;
        }

        rad += QUARTER_PI;

      /* falls through */

      case 'rectRot':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + yOffset, y - xOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        ctx.closePath();
        break;

      case 'crossRot':
        rad += QUARTER_PI;

      /* falls through */

      case 'cross':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;

      case 'star':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        rad += QUARTER_PI;
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;

      case 'line':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        break;

      case 'dash':
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
        break;
    }

    ctx.fill();
    ctx.stroke();
  },

  /**
   * Returns true if the point is inside the rectangle
   * @param {object} point - The point to test
   * @param {object} area - The rectangle
   * @returns {boolean}
   * @private
   */
  _isPointInArea: function _isPointInArea(point, area) {
    var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

    return point.x > area.left - epsilon && point.x < area.right + epsilon && point.y > area.top - epsilon && point.y < area.bottom + epsilon;
  },
  clipArea: function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
  },
  unclipArea: function unclipArea(ctx) {
    ctx.restore();
  },

  /**
   * @private
   */
  _steppedLineTo: function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (mode === 'middle') {
      var midpoint = (previous.x + target.x) / 2.0;
      ctx.lineTo(midpoint, flip ? target.y : previous.y);
      ctx.lineTo(midpoint, flip ? previous.y : target.y);
    } else if (mode === 'after' && !flip || mode !== 'after' && flip) {
      ctx.lineTo(previous.x, target.y);
    } else {
      ctx.lineTo(target.x, previous.y);
    }

    ctx.lineTo(target.x, target.y);
  },

  /**
   * @private
   */
  _bezierCurveTo: function _bezierCurveTo(ctx, previous, target, flip) {
    ctx.bezierCurveTo(flip ? previous.controlPointPreviousX : previous.controlPointNextX, flip ? previous.controlPointPreviousY : previous.controlPointNextY, flip ? target.controlPointNextX : target.controlPointPreviousX, flip ? target.controlPointNextY : target.controlPointPreviousY, target.x, target.y);
  }
};

var defaults = {
  /**
   * @private
   */
  _set: function _set(scope, values) {
    return helpers_core.merge(this[scope] || (this[scope] = {}), values);
  }
}; // TODO(v3): remove 'global' from namespace.  all default are global and
// there's inconsistency around which options are under 'global'

defaults._set('global', {
  defaultColor: 'rgba(0,0,0,0.1)',
  defaultFontColor: '#666',
  defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  defaultFontSize: 12,
  defaultFontStyle: 'normal',
  defaultLineHeight: 1.2,
  showLines: true
});

var core_defaults = defaults;

var valueOrDefault = helpers_core.valueOrDefault;
/**
 * Converts the given font object into a CSS font string.
 * @param {object} font - A font object.
 * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */

function toFontString(font) {
  if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
    return null;
  }

  return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @alias Chart.helpers.options
 * @namespace
 */


var helpers_options = {
  /**
   * Converts the given line height `value` in pixels for a specific font `size`.
   * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
   * @param {number} size - The font size (in pixels) used to resolve relative `value`.
   * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
   * @since 2.7.0
   */
  toLineHeight: function toLineHeight(value, size) {
    var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);

    if (!matches || matches[1] === 'normal') {
      return size * 1.2;
    }

    value = +matches[2];

    switch (matches[3]) {
      case 'px':
        return value;

      case '%':
        value /= 100;
        break;
    }

    return size * value;
  },

  /**
   * Converts the given value into a padding object with pre-computed width/height.
   * @param {number|object} value - If a number, set the value to all TRBL component,
   *  else, if and object, use defined properties and sets undefined ones to 0.
   * @returns {object} The padding values (top, right, bottom, left, width, height)
   * @since 2.7.0
   */
  toPadding: function toPadding(value) {
    var t, r, b, l;

    if (helpers_core.isObject(value)) {
      t = +value.top || 0;
      r = +value.right || 0;
      b = +value.bottom || 0;
      l = +value.left || 0;
    } else {
      t = r = b = l = +value || 0;
    }

    return {
      top: t,
      right: r,
      bottom: b,
      left: l,
      height: t + b,
      width: l + r
    };
  },

  /**
   * Parses font options and returns the font object.
   * @param {object} options - A object that contains font options to be parsed.
   * @return {object} The font object.
   * @todo Support font.* options and renamed to toFont().
   * @private
   */
  _parseFont: function _parseFont(options) {
    var globalDefaults = core_defaults.global;
    var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
    var font = {
      family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
      lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
      size: size,
      style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
      weight: null,
      string: ''
    };
    font.string = toFontString(font);
    return font;
  },

  /**
   * Evaluates the given `inputs` sequentially and returns the first defined value.
   * @param {Array} inputs - An array of values, falling back to the last value.
   * @param {object} [context] - If defined and the current value is a function, the value
   * is called with `context` as first argument and the result becomes the new input.
   * @param {number} [index] - If defined and the current value is an array, the value
   * at `index` become the new input.
   * @param {object} [info] - object to return information about resolution in
   * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
   * @since 2.7.0
   */
  resolve: function resolve(inputs, context, index, info) {
    var cacheable = true;
    var i, ilen, value;

    for (i = 0, ilen = inputs.length; i < ilen; ++i) {
      value = inputs[i];

      if (value === undefined) {
        continue;
      }

      if (context !== undefined && typeof value === 'function') {
        value = value(context);
        cacheable = false;
      }

      if (index !== undefined && helpers_core.isArray(value)) {
        value = value[index];
        cacheable = false;
      }

      if (value !== undefined) {
        if (info && !cacheable) {
          info.cacheable = false;
        }

        return value;
      }
    }
  }
};

/**
 * @alias Chart.helpers.math
 * @namespace
 */

var exports = {
  /**
   * Returns an array of factors sorted from 1 to sqrt(value)
   * @private
   */
  _factorize: function _factorize(value) {
    var result = [];
    var sqrt = Math.sqrt(value);
    var i;

    for (i = 1; i < sqrt; i++) {
      if (value % i === 0) {
        result.push(i);
        result.push(value / i);
      }
    }

    if (sqrt === (sqrt | 0)) {
      // if value is a square number
      result.push(sqrt);
    }

    result.sort(function (a, b) {
      return a - b;
    }).pop();
    return result;
  },
  log10: Math.log10 || function (x) {
    var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
    // Check for whole powers of 10,
    // which due to floating point rounding error should be corrected.

    var powerOf10 = Math.round(exponent);
    var isPowerOf10 = x === Math.pow(10, powerOf10);
    return isPowerOf10 ? powerOf10 : exponent;
  }
};
var helpers_math = exports;

var getRtlAdapter = function getRtlAdapter(rectX, width) {
  return {
    x: function x(_x) {
      return rectX + rectX + width - _x;
    },
    setWidth: function setWidth(w) {
      width = w;
    },
    textAlign: function textAlign(align) {
      if (align === 'center') {
        return align;
      }

      return align === 'right' ? 'left' : 'right';
    },
    xPlus: function xPlus(x, value) {
      return x - value;
    },
    leftForLtr: function leftForLtr(x, itemWidth) {
      return x - itemWidth;
    }
  };
};

var getLtrAdapter = function getLtrAdapter() {
  return {
    x: function x(_x2) {
      return _x2;
    },
    setWidth: function setWidth(w) {// eslint-disable-line no-unused-vars
    },
    textAlign: function textAlign(align) {
      return align;
    },
    xPlus: function xPlus(x, value) {
      return x + value;
    },
    leftForLtr: function leftForLtr(x, _itemWidth) {
      // eslint-disable-line no-unused-vars
      return x;
    }
  };
};

var getAdapter = function getAdapter(rtl, rectX, width) {
  return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
};

var overrideTextDirection = function overrideTextDirection(ctx, direction) {
  var style, original;

  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
};

var restoreTextDirection = function restoreTextDirection(ctx) {
  var original = ctx.prevTextDirection;

  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
};

var helpers_rtl = {
  getRtlAdapter: getAdapter,
  overrideTextDirection: overrideTextDirection,
  restoreTextDirection: restoreTextDirection
};

var helpers$1 = helpers_core;
var easing = helpers_easing;
var canvas = helpers_canvas;
var options = helpers_options;
var math = helpers_math;
var rtl = helpers_rtl;
helpers$1.easing = easing;
helpers$1.canvas = canvas;
helpers$1.options = options;
helpers$1.math = math;
helpers$1.rtl = rtl;

function interpolate(start, view, model, ease) {
  var keys = Object.keys(model);
  var i, ilen, key, actual, origin, target, type, c0, c1;

  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    target = model[key]; // if a value is added to the model after pivot() has been called, the view
    // doesn't contain it, so let's initialize the view to the target value.

    if (!Object.prototype.hasOwnProperty.call(view, key)) {
      view[key] = target;
    }

    actual = view[key];

    if (actual === target || key[0] === '_') {
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(start, key)) {
      start[key] = actual;
    }

    origin = start[key];
    type = _typeof(target);

    if (type === _typeof(origin)) {
      if (type === 'string') {
        c0 = chartjsColor(origin);

        if (c0.valid) {
          c1 = chartjsColor(target);

          if (c1.valid) {
            view[key] = c1.mix(c0, ease).rgbString();
            continue;
          }
        }
      } else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
        view[key] = origin + (target - origin) * ease;
        continue;
      }
    }

    view[key] = target;
  }
}

var Element =
/*#__PURE__*/
function () {
  function Element(configuration) {
    _classCallCheck(this, Element);

    helpers$1.extend(this, configuration); // this.hidden = false; we assume Element has an attribute called hidden, but do not initialize to save memory

    this.initialize.apply(this, arguments);
  }

  _createClass(Element, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "pivot",
    value: function pivot(animationsDisabled) {
      var me = this;

      if (animationsDisabled) {
        me._view = me._model;
        return me;
      }

      if (!me._view) {
        me._view = helpers$1.extend({}, me._model);
      }

      me._start = {};
      return me;
    }
  }, {
    key: "transition",
    value: function transition(ease) {
      var me = this;
      var model = me._model;
      var start = me._start;
      var view = me._view; // No animation -> No Transition

      if (!model || ease === 1) {
        // _model has to be cloned to _view
        // Otherwise, when _model properties are set on hover, _view.* is also set to the same value, and hover animation doesn't occur
        me._view = helpers$1.extend({}, model);
        me._start = null;
        return me;
      }

      if (!view) {
        view = me._view = {};
      }

      if (!start) {
        start = me._start = {};
      }

      interpolate(start, view, model, ease);
      return me;
    }
  }, {
    key: "tooltipPosition",
    value: function tooltipPosition() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
    }
  }]);

  return Element;
}();

Element.extend = helpers$1.inherits;
var core_element = Element;

var Animation =
/*#__PURE__*/
function (_Element) {
  _inherits(Animation, _Element);

  function Animation(props) {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      chart: null,
      // the animation associated chart instance
      currentStep: 0,
      // the current animation step
      numSteps: 60,
      // default number of steps
      easing: '',
      // the easing to use for this animation
      render: null,
      // render function used by the animation service
      onAnimationProgress: null,
      // user specified callback to fire on each step of the animation
      onAnimationComplete: null // user specified callback to fire when the animation finishes

    }));
    helpers$1.extend(_assertThisInitialized(_this), props);
    return _this;
  }

  return Animation;
}(core_element);

var core_animation = Animation;

core_defaults._set('global', {
  animation: {
    duration: 1000,
    easing: 'easeOutQuart',
    onProgress: helpers$1.noop,
    onComplete: helpers$1.noop
  }
});

var core_animations = {
  animations: [],
  request: null,

  /**
   * @param {Chart} chart - The chart to animate.
   * @param {Chart.Animation} animation - The animation that we will animate.
   * @param {number} duration - The animation duration in ms.
   * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
   */
  addAnimation: function addAnimation(chart, animation, duration, lazy) {
    var animations = this.animations;
    var i, ilen;
    animation.chart = chart;
    animation.startTime = Date.now();
    animation.duration = duration;

    if (!lazy) {
      chart.animating = true;
    }

    for (i = 0, ilen = animations.length; i < ilen; ++i) {
      if (animations[i].chart === chart) {
        animations[i] = animation;
        return;
      }
    }

    animations.push(animation); // If there are no animations queued, manually kickstart a digest, for lack of a better word

    if (animations.length === 1) {
      this.requestAnimationFrame();
    }
  },
  cancelAnimation: function cancelAnimation(chart) {
    var index = helpers$1.findIndex(this.animations, function (animation) {
      return animation.chart === chart;
    });

    if (index !== -1) {
      this.animations.splice(index, 1);
      chart.animating = false;
    }
  },
  requestAnimationFrame: function requestAnimationFrame() {
    var me = this;

    if (me.request === null) {
      // Skip animation frame requests until the active one is executed.
      // This can happen when processing mouse events, e.g. 'mousemove'
      // and 'mouseout' events will trigger multiple renders.
      me.request = helpers$1.requestAnimFrame.call(window, function () {
        me.request = null;
        me.startDigest();
      });
    }
  },

  /**
   * @private
   */
  startDigest: function startDigest() {
    var me = this;
    me.advance(); // Do we have more stuff to animate?

    if (me.animations.length > 0) {
      me.requestAnimationFrame();
    }
  },

  /**
   * @private
   */
  advance: function advance() {
    var animations = this.animations;
    var animation, chart, numSteps, nextStep;
    var i = 0; // 1 animation per chart, so we are looping charts here

    while (i < animations.length) {
      animation = animations[i];
      chart = animation.chart;
      numSteps = animation.numSteps; // Make sure that currentStep starts at 1
      // https://github.com/chartjs/Chart.js/issues/6104

      nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
      animation.currentStep = Math.min(nextStep, numSteps);
      helpers$1.callback(animation.render, [chart, animation], chart);
      helpers$1.callback(animation.onAnimationProgress, [animation], chart);

      if (animation.currentStep >= numSteps) {
        helpers$1.callback(animation.onAnimationComplete, [animation], chart);
        chart.animating = false;
        animations.splice(i, 1);
      } else {
        ++i;
      }
    }
  }
};

var resolve = helpers$1.options.resolve;
var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
 */

function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);

    return;
  }

  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach(function (key) {
    var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
    var base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value: function value() {
        var args = Array.prototype.slice.call(arguments);
        var res = base.apply(this, args);
        helpers$1.each(array._chartjs.listeners, function (object) {
          if (typeof object[method] === 'function') {
            object[method].apply(object, args);
          }
        });
        return res;
      }
    });
  });
}

function scaleClip(scale, allowedOverflow) {
  var opts = scale && scale.options || {};
  var reverse = opts.reverse;
  var min = opts.min === undefined ? allowedOverflow : 0;
  var max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}

function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }

  var x = scaleClip(xScale, allowedOverflow);
  var y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}

function toClip(value) {
  var t, r, b, l;

  if (helpers$1.isObject(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }

  return {
    top: t,
    right: r,
    bottom: b,
    left: l
  };
}
/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */


function unlistenArrayEvents(array, listener) {
  var stub = array._chartjs;

  if (!stub) {
    return;
  }

  var listeners = stub.listeners;
  var index = listeners.indexOf(listener);

  if (index !== -1) {
    listeners.splice(index, 1);
  }

  if (listeners.length > 0) {
    return;
  }

  arrayEvents.forEach(function (key) {
    delete array[key];
  });
  delete array._chartjs;
}

function getSortedDatasetIndices(chart, filterVisible) {
  var keys = [];

  var metasets = chart._getSortedDatasetMetas(filterVisible);

  var i, ilen;

  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }

  return keys;
}

function applyStack(stack, value, dsIndex, allOther) {
  var keys = stack.keys;
  var i, ilen, datasetIndex, otherValue;

  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];

    if (datasetIndex === dsIndex) {
      if (allOther) {
        continue;
      }

      break;
    }

    otherValue = stack.values[datasetIndex];

    if (!isNaN(otherValue) && (value === 0 || helpers$1.sign(value) === helpers$1.sign(otherValue))) {
      value += otherValue;
    }
  }

  return value;
}

function convertObjectDataToArray(data) {
  var keys = Object.keys(data);
  var adata = [];
  var i, ilen, key;

  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata.push({
      x: key,
      y: data[key]
    });
  }

  return adata;
}

function isStacked(scale, meta) {
  var stacked = scale && scale.options.stacked;
  return stacked || stacked === undefined && meta.stack !== undefined;
}

function getStackKey(indexScale, valueScale, meta) {
  return indexScale.id + '.' + valueScale.id + '.' + meta.stack + '.' + meta.type;
}

function getFirstScaleId(chart, axis) {
  var scalesOpts = chart.options.scales;
  var scale = chart.options.scale;
  var scaleId = scale && scale.id;
  var prop = axis + 'Axes';
  return scalesOpts && scalesOpts[prop] && scalesOpts[prop].length && scalesOpts[prop][0].id || scaleId;
}

function getUserBounds(scale) {
  var _scale$_getUserBounds = scale._getUserBounds(),
      min = _scale$_getUserBounds.min,
      max = _scale$_getUserBounds.max,
      minDefined = _scale$_getUserBounds.minDefined,
      maxDefined = _scale$_getUserBounds.maxDefined;

  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
} // Base class for all dataset controllers (line, bar, etc)


var DatasetController = function DatasetController(chart, datasetIndex) {
  this.initialize(chart, datasetIndex);
};

helpers$1.extend(DatasetController.prototype, {
  /**
   * Element type used to generate a meta dataset (e.g. Chart.element.Line).
   * @type {Chart.core.element}
   */
  datasetElementType: null,

  /**
   * Element type used to generate a meta data (e.g. Chart.element.Point).
   * @type {Chart.core.element}
   */
  dataElementType: null,

  /**
   * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
   * A derived controller may override this to resolve controller-specific options.
   * The keys defined here are for backward compatibility for legend styles.
   * @private
   */
  _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth'],

  /**
   * Data element option keys to be resolved in _resolveDataElementOptions.
   * A derived controller may override this to resolve controller-specific options.
   * The keys defined here are for backward compatibility for legend styles.
   * @private
   */
  _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'pointStyle'],
  initialize: function initialize(chart, datasetIndex) {
    var me = this;
    var meta;
    me.chart = chart;
    me.index = datasetIndex;
    me._cachedMeta = meta = me.getMeta();
    me._type = meta.type;
    me.linkScales();
    meta._stacked = isStacked(me._getValueScale(), meta);
    me.addElements();
  },
  updateIndex: function updateIndex(datasetIndex) {
    this.index = datasetIndex;
  },
  linkScales: function linkScales() {
    var chart = this.chart;
    var meta = this._cachedMeta;
    var dataset = this.getDataset();
    meta.xAxisID = dataset.xAxisID || getFirstScaleId(chart, 'x');
    meta.yAxisID = dataset.yAxisID || getFirstScaleId(chart, 'y');
  },
  getDataset: function getDataset() {
    return this.chart.data.datasets[this.index];
  },
  getMeta: function getMeta() {
    return this.chart.getDatasetMeta(this.index);
  },
  getScaleForId: function getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  },

  /**
   * @private
   */
  _getValueScaleId: function _getValueScaleId() {
    return this._cachedMeta.yAxisID;
  },

  /**
   * @private
   */
  _getIndexScaleId: function _getIndexScaleId() {
    return this._cachedMeta.xAxisID;
  },

  /**
   * @private
   */
  _getValueScale: function _getValueScale() {
    return this.getScaleForId(this._getValueScaleId());
  },

  /**
   * @private
   */
  _getIndexScale: function _getIndexScale() {
    return this.getScaleForId(this._getIndexScaleId());
  },

  /**
   * @private
   */
  _getOtherScale: function _getOtherScale(scale) {
    return scale.id === this._getIndexScaleId() ? this._getValueScale() : this._getIndexScale();
  },
  reset: function reset() {
    this._update(true);
  },

  /**
   * @private
   */
  destroy: function destroy() {
    if (this._data) {
      unlistenArrayEvents(this._data, this);
    }
  },
  createElement: function createElement(type) {
    return type && new type({
      _ctx: this.chart.ctx
    });
  },

  /**
   * @private
   */
  _dataCheck: function _dataCheck() {
    var me = this;
    var dataset = me.getDataset();
    var data = dataset.data || (dataset.data = []); // In order to correctly handle data addition/deletion animation (an thus simulate
    // real-time charts), we need to monitor these data modifications and synchronize
    // the internal meta data accordingly.

    if (helpers$1.isObject(data)) {
      // Object data is currently monitored for replacement only
      if (me._objectData === data) {
        return false;
      }

      me._data = convertObjectDataToArray(data);
      me._objectData = data;
    } else {
      if (me._data === data && helpers$1.arrayEquals(data, me._dataCopy)) {
        return false;
      }

      if (me._data) {
        // This case happens when the user replaced the data array instance.
        unlistenArrayEvents(me._data, me);
      } // Store a copy to detect direct modifications.
      // Note: This is suboptimal, but better than always parsing the data


      me._dataCopy = data.slice(0);

      if (data && Object.isExtensible(data)) {
        listenArrayEvents(data, me);
      }

      me._data = data;
    }

    return true;
  },

  /**
   * @private
   */
  _labelCheck: function _labelCheck() {
    var me = this;

    var scale = me._getIndexScale();

    var labels = scale ? scale._getLabels() : me.chart.data.labels;

    if (me._labels === labels) {
      return false;
    }

    me._labels = labels;
    return true;
  },
  addElements: function addElements() {
    var me = this;
    var meta = me._cachedMeta;
    var metaData = meta.data;
    var i, ilen, data;

    me._dataCheck();

    data = me._data;

    for (i = 0, ilen = data.length; i < ilen; ++i) {
      metaData[i] = metaData[i] || me.createElement(me.dataElementType);
    }

    meta.dataset = meta.dataset || me.createElement(me.datasetElementType);
  },
  buildOrUpdateElements: function buildOrUpdateElements() {
    var me = this;

    var dataChanged = me._dataCheck();

    var labelsChanged = me._labelCheck();

    var scaleChanged = me._scaleCheck();

    var meta = me._cachedMeta; // make sure cached _stacked status is current

    meta._stacked = isStacked(me._getValueScale(), meta); // Re-sync meta data in case the user replaced the data array or if we missed
    // any updates and so make sure that we handle number of datapoints changing.

    me.resyncElements(dataChanged | labelsChanged | scaleChanged);
  },

  /**
   * Returns the merged user-supplied and default dataset-level options
   * @private
   */
  _configure: function _configure() {
    var me = this;
    me._config = helpers$1.merge({}, [me.chart.options.datasets[me._type], me.getDataset()], {
      merger: function merger(key, target, source) {
        if (key !== '_meta' && key !== 'data') {
          helpers$1._merger(key, target, source);
        }
      }
    });
  },

  /**
   * @private
   */
  _parse: function _parse(start, count) {
    var me = this;
    var chart = me.chart;
    var meta = me._cachedMeta;
    var data = me._data;
    var stacks = chart._stacks || (chart._stacks = {}); // map structure is {stackKey: {datasetIndex: value}}

    var xScale = me._getIndexScale();

    var yScale = me._getValueScale();

    var xId = xScale.id;
    var yId = yScale.id;
    var xStacked = isStacked(xScale, meta);
    var yStacked = isStacked(yScale, meta);
    var xKey = yStacked && getStackKey(xScale, yScale, meta);
    var yKey = xStacked && getStackKey(yScale, xScale, meta);
    var stacked = xStacked || yStacked;
    var i, ilen, parsed, stack, item, x, y;

    if (helpers$1.isArray(data[start])) {
      parsed = me._parseArrayData(meta, data, start, count);
    } else if (helpers$1.isObject(data[start])) {
      parsed = me._parseObjectData(meta, data, start, count);
    } else {
      parsed = me._parsePrimitiveData(meta, data, start, count);
    }

    function storeStack(stackKey, indexValue, scaleId, value) {
      stackKey += '.' + indexValue;
      item._stackKeys[scaleId] = stackKey;
      stack = stacks[stackKey] || (stacks[stackKey] = {});
      stack[meta.index] = value;
    }

    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      item = parsed[i];
      meta.data[start + i]._parsed = item;

      if (stacked) {
        item._stackKeys = {};
        x = item[xId];
        y = item[yId];

        if (yStacked) {
          storeStack(xKey, x, yId, y);
        }

        if (xStacked) {
          storeStack(yKey, y, xId, x);
        }
      }
    }

    xScale._invalidateCaches();

    if (yScale !== xScale) {
      yScale._invalidateCaches();
    }
  },

  /**
   * Parse array of primitive values
   * @param {object} meta - dataset meta
   * @param {array} data - data array. Example [1,3,4]
   * @param {number} start - start index
   * @param {number} count - number of items to parse
   * @returns {object} parsed item - item containing index and a parsed value
   * for each scale id.
   * Example: {xScale0: 0, yScale0: 1}
   * @private
   */
  _parsePrimitiveData: function _parsePrimitiveData(meta, data, start, count) {
    var iScale = this._getIndexScale();

    var vScale = this._getValueScale();

    var labels = iScale._getLabels();

    var singleScale = iScale === vScale;
    var parsed = [];
    var i, ilen, item;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      item = {};
      item[iScale.id] = singleScale || iScale._parse(labels[i], i);
      item[vScale.id] = vScale._parse(data[i], i);
      parsed.push(item);
    }

    return parsed;
  },

  /**
   * Parse array of arrays
   * @param {object} meta - dataset meta
   * @param {array} data - data array. Example [[1,2],[3,4]]
   * @param {number} start - start index
   * @param {number} count - number of items to parse
   * @returns {object} parsed item - item containing index and a parsed value
   * for each scale id.
   * Example: {xScale0: 0, yScale0: 1}
   * @private
   */
  _parseArrayData: function _parseArrayData(meta, data, start, count) {
    var xScale = this.getScaleForId(meta.xAxisID);
    var yScale = this.getScaleForId(meta.yAxisID);
    var parsed = [];
    var i, ilen, item, arr;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      arr = data[i];
      item = {};
      item[xScale.id] = xScale._parse(arr[0], i);
      item[yScale.id] = yScale._parse(arr[1], i);
      parsed.push(item);
    }

    return parsed;
  },

  /**
   * Parse array of objects
   * @param {object} meta - dataset meta
   * @param {array} data - data array. Example [{x:1, y:5}, {x:2, y:10}]
   * @param {number} start - start index
   * @param {number} count - number of items to parse
   * @returns {object} parsed item - item containing index and a parsed value
   * for each scale id. _custom is optional
   * Example: {xScale0: 0, yScale0: 1, _custom: {r: 10, foo: 'bar'}}
   * @private
   */
  _parseObjectData: function _parseObjectData(meta, data, start, count) {
    var xScale = this.getScaleForId(meta.xAxisID);
    var yScale = this.getScaleForId(meta.yAxisID);
    var parsed = [];
    var i, ilen, item, obj;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[xScale.id] = xScale._parseObject(obj, 'x', i);
      item[yScale.id] = yScale._parseObject(obj, 'y', i);
      parsed.push(item);
    }

    return parsed;
  },

  /**
   * @private
   */
  _getParsed: function _getParsed(index) {
    var data = this._cachedMeta.data;

    if (index < 0 || index >= data.length) {
      return;
    }

    return data[index]._parsed;
  },

  /**
   * @private
   */
  _applyStack: function _applyStack(scale, parsed) {
    var chart = this.chart;
    var meta = this._cachedMeta;
    var value = parsed[scale.id];
    var stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: chart._stacks[parsed._stackKeys[scale.id]]
    };
    return applyStack(stack, value, meta.index);
  },

  /**
   * @private
   */
  _getMinMax: function _getMinMax(scale, canStack) {
    var chart = this.chart;
    var meta = this._cachedMeta;
    var metaData = meta.data;
    var ilen = metaData.length;
    var stacks = chart._stacks || (chart._stacks = {});
    var max = Number.NEGATIVE_INFINITY;
    var stacked = canStack && meta._stacked;
    var indices = getSortedDatasetIndices(chart, true);

    var otherScale = this._getOtherScale(scale);

    var _getUserBounds = getUserBounds(otherScale),
        otherMin = _getUserBounds.min,
        otherMax = _getUserBounds.max;

    var i, item, value, parsed, stack, min, minPositive, otherValue;
    min = minPositive = Number.POSITIVE_INFINITY;

    for (i = 0; i < ilen; ++i) {
      item = metaData[i];
      parsed = item._parsed;
      value = parsed[scale.id];
      otherValue = parsed[otherScale.id];

      if (item.hidden || isNaN(value) || otherMin > otherValue || otherMax < otherValue) {
        continue;
      }

      if (stacked) {
        stack = {
          keys: indices,
          values: stacks[parsed._stackKeys[scale.id]]
        };
        value = applyStack(stack, value, meta.index, true);
      }

      min = Math.min(min, value);
      max = Math.max(max, value);

      if (value > 0) {
        minPositive = Math.min(minPositive, value);
      }
    }

    return {
      min: min,
      max: max,
      minPositive: minPositive
    };
  },

  /**
   * @private
   */
  _getAllParsedValues: function _getAllParsedValues(scale) {
    var meta = this._cachedMeta;
    var metaData = meta.data;
    var values = [];
    var i, ilen, value;

    for (i = 0, ilen = metaData.length; i < ilen; ++i) {
      value = metaData[i]._parsed[scale.id];

      if (!isNaN(value)) {
        values.push(value);
      }
    }

    return values;
  },

  /**
   * @private
   */
  _cacheScaleStackStatus: function _cacheScaleStackStatus() {
    var me = this;

    var indexScale = me._getIndexScale();

    var valueScale = me._getValueScale();

    var cache = me._scaleStacked = {};

    if (indexScale && valueScale) {
      cache[indexScale.id] = indexScale.options.stacked;
      cache[valueScale.id] = valueScale.options.stacked;
    }
  },

  /**
   * @private
   */
  _scaleCheck: function _scaleCheck() {
    var me = this;

    var indexScale = me._getIndexScale();

    var valueScale = me._getValueScale();

    var cache = me._scaleStacked;
    return !cache || !indexScale || !valueScale || cache[indexScale.id] !== indexScale.options.stacked || cache[valueScale.id] !== valueScale.options.stacked;
  },

  /**
   * @private
   */
  _getMaxOverflow: function _getMaxOverflow() {
    return false;
  },

  /**
   * @private
   */
  _getLabelAndValue: function _getLabelAndValue(index) {
    var me = this;

    var indexScale = me._getIndexScale();

    var valueScale = me._getValueScale();

    var parsed = me._getParsed(index);

    return {
      label: indexScale ? '' + indexScale.getLabelForValue(parsed[indexScale.id]) : '',
      value: valueScale ? '' + valueScale.getLabelForValue(parsed[valueScale.id]) : ''
    };
  },

  /**
   * @private
   */
  _update: function _update(reset) {
    var me = this;

    me._configure();

    me._cachedDataOpts = null;
    me.update(reset);
    me._cachedMeta._clip = toClip(helpers$1.valueOrDefault(me._config.clip, defaultClip(me._xScale, me._yScale, me._getMaxOverflow())));

    me._cacheScaleStackStatus();
  },
  update: helpers$1.noop,
  transition: function transition(easingValue) {
    var meta = this._cachedMeta;
    var elements = meta.data || [];
    var ilen = elements.length;
    var i = 0;

    for (; i < ilen; ++i) {
      elements[i].transition(easingValue);
    }

    if (meta.dataset) {
      meta.dataset.transition(easingValue);
    }
  },
  draw: function draw() {
    var meta = this._cachedMeta;
    var elements = meta.data || [];
    var ilen = elements.length;
    var i = 0;

    if (meta.dataset) {
      meta.dataset.draw();
    }

    for (; i < ilen; ++i) {
      elements[i].draw();
    }
  },

  /**
   * Returns a set of predefined style properties that should be used to represent the dataset
   * or the data if the index is specified
   * @param {number} index - data index
   * @return {IStyleInterface} style object
   */
  getStyle: function getStyle(index) {
    var me = this;
    var meta = me._cachedMeta;
    var dataset = meta.dataset;
    var style;

    me._configure();

    if (dataset && index === undefined) {
      style = me._resolveDatasetElementOptions();
    } else {
      index = index || 0;
      style = me._resolveDataElementOptions(index);
    }

    if (style.fill === false || style.fill === null) {
      style.backgroundColor = style.borderColor;
    }

    return style;
  },

  /**
   * @private
   */
  _resolveDatasetElementOptions: function _resolveDatasetElementOptions(active) {
    var me = this;
    var chart = me.chart;
    var datasetOpts = me._config;
    var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
    var elementOptions = me._datasetElementOptions;
    var values = {};
    var i, ilen, key, readKey; // Scriptable options

    var context = {
      chart: chart,
      dataset: me.getDataset(),
      datasetIndex: me.index,
      active: active
    };

    for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
      key = elementOptions[i];
      readKey = active ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
      values[key] = resolve([datasetOpts[readKey], options[readKey]], context);
    }

    return values;
  },

  /**
   * @private
   */
  _resolveDataElementOptions: function _resolveDataElementOptions(index) {
    var me = this;
    var cached = me._cachedDataOpts;

    if (cached) {
      return cached;
    }

    var chart = me.chart;
    var datasetOpts = me._config;
    var options = chart.options.elements[me.dataElementType.prototype._type] || {};
    var elementOptions = me._dataElementOptions;
    var values = {}; // Scriptable options

    var context = {
      chart: chart,
      dataIndex: index,
      dataset: me.getDataset(),
      datasetIndex: me.index
    }; // `resolve` sets cacheable to `false` if any option is indexed or scripted

    var info = {
      cacheable: true
    };
    var keys, i, ilen, key;

    if (helpers$1.isArray(elementOptions)) {
      for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
        key = elementOptions[i];
        values[key] = resolve([datasetOpts[key], options[key]], context, index, info);
      }
    } else {
      keys = Object.keys(elementOptions);

      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve([datasetOpts[elementOptions[key]], datasetOpts[key], options[key]], context, index, info);
      }
    }

    if (info.cacheable) {
      me._cachedDataOpts = Object.freeze(values);
    }

    return values;
  },
  removeHoverStyle: function removeHoverStyle(element) {
    helpers$1.merge(element._model, element.$previousStyle || {});
    delete element.$previousStyle;
  },
  setHoverStyle: function setHoverStyle(element, datasetIndex, index) {
    var dataset = this.chart.data.datasets[datasetIndex];
    var model = element._model;
    var getHoverColor = helpers$1.getHoverColor;
    element.$previousStyle = {
      backgroundColor: model.backgroundColor,
      borderColor: model.borderColor,
      borderWidth: model.borderWidth
    };
    model.backgroundColor = resolve([dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
    model.borderColor = resolve([dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
    model.borderWidth = resolve([dataset.hoverBorderWidth, model.borderWidth], undefined, index);
  },

  /**
   * @private
   */
  _removeDatasetHoverStyle: function _removeDatasetHoverStyle() {
    var element = this.getMeta().dataset;

    if (element) {
      this.removeHoverStyle(element);
    }
  },

  /**
   * @private
   */
  _setDatasetHoverStyle: function _setDatasetHoverStyle() {
    var element = this.getMeta().dataset;
    var prev = {};
    var i, ilen, key, keys, hoverOptions, model;

    if (!element) {
      return;
    }

    model = element._model;
    hoverOptions = this._resolveDatasetElementOptions(true);
    keys = Object.keys(hoverOptions);

    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];
      prev[key] = model[key];
      model[key] = hoverOptions[key];
    }

    element.$previousStyle = prev;
  },

  /**
   * @private
   */
  resyncElements: function resyncElements(changed) {
    var me = this;
    var meta = me._cachedMeta;
    var numMeta = meta.data.length;
    var numData = me._data.length;

    if (numData > numMeta) {
      me.insertElements(numMeta, numData - numMeta);
    } else if (numData < numMeta) {
      meta.data.splice(numData, numMeta - numData);

      me._parse(0, numData);
    } else if (changed) {
      me._parse(0, numData);
    }
  },

  /**
   * @private
   */
  insertElements: function insertElements(start, count) {
    var _me$_cachedMeta$data;

    var me = this;
    var elements = [];
    var i;

    for (i = start; i < start + count; ++i) {
      elements.push(me.createElement(me.dataElementType));
    }

    (_me$_cachedMeta$data = me._cachedMeta.data).splice.apply(_me$_cachedMeta$data, [start, 0].concat(elements));

    me._parse(start, count);

    for (i = 0; i < count; ++i) {
      me.updateElement(elements[i], start + i, true);
    }
  },

  /**
   * @private
   */
  onDataPush: function onDataPush() {
    var count = arguments.length;
    this.insertElements(this.getDataset().data.length - count, count);
  },

  /**
   * @private
   */
  onDataPop: function onDataPop() {
    this._cachedMeta.data.pop();
  },

  /**
   * @private
   */
  onDataShift: function onDataShift() {
    this._cachedMeta.data.shift();
  },

  /**
   * @private
   */
  onDataSplice: function onDataSplice(start, count) {
    this._cachedMeta.data.splice(start, count);

    this.insertElements(start, arguments.length - 2);
  },

  /**
   * @private
   */
  onDataUnshift: function onDataUnshift() {
    this.insertElements(0, arguments.length);
  }
});
DatasetController.extend = helpers$1.inherits;
var core_datasetController = DatasetController;

var TAU = Math.PI * 2;

core_defaults._set('global', {
  elements: {
    arc: {
      backgroundColor: core_defaults.global.defaultColor,
      borderColor: '#fff',
      borderWidth: 2,
      borderAlign: 'center'
    }
  }
});

function clipArc(ctx, arc) {
  var startAngle = arc.startAngle;
  var endAngle = arc.endAngle;
  var pixelMargin = arc.pixelMargin;
  var angleMargin = pixelMargin / arc.outerRadius;
  var x = arc.x;
  var y = arc.y; // Draw an inner border by cliping the arc and drawing a double-width border
  // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders

  ctx.beginPath();
  ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);

  if (arc.innerRadius > pixelMargin) {
    angleMargin = pixelMargin / arc.innerRadius;
    ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
  }

  ctx.closePath();
  ctx.clip();
}

function drawFullCircleBorders(ctx, vm, arc, inner) {
  var endAngle = arc.endAngle;
  var i;

  if (inner) {
    arc.endAngle = arc.startAngle + TAU;
    clipArc(ctx, arc);
    arc.endAngle = endAngle;

    if (arc.endAngle === arc.startAngle && arc.fullCircles) {
      arc.endAngle += TAU;
      arc.fullCircles--;
    }
  }

  ctx.beginPath();
  ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);

  for (i = 0; i < arc.fullCircles; ++i) {
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);

  for (i = 0; i < arc.fullCircles; ++i) {
    ctx.stroke();
  }
}

function drawBorder(ctx, vm, arc) {
  var inner = vm.borderAlign === 'inner';

  if (inner) {
    ctx.lineWidth = vm.borderWidth * 2;
    ctx.lineJoin = 'round';
  } else {
    ctx.lineWidth = vm.borderWidth;
    ctx.lineJoin = 'bevel';
  }

  if (arc.fullCircles) {
    drawFullCircleBorders(ctx, vm, arc, inner);
  }

  if (inner) {
    clipArc(ctx, arc);
  }

  ctx.beginPath();
  ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
  ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
  ctx.closePath();
  ctx.stroke();
}

var Arc =
/*#__PURE__*/
function (_Element) {
  _inherits(Arc, _Element);

  function Arc(props) {
    _classCallCheck(this, Arc);

    return _possibleConstructorReturn(this, _getPrototypeOf(Arc).call(this, props));
  }

  _createClass(Arc, [{
    key: "inRange",
    value: function inRange(chartX, chartY) {
      var vm = this._view;

      if (vm) {
        var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {
          x: chartX,
          y: chartY
        });
        var angle = pointRelativePosition.angle;
        var distance = pointRelativePosition.distance; // Sanitise angle range

        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;

        while (endAngle < startAngle) {
          endAngle += TAU;
        }

        while (angle > endAngle) {
          angle -= TAU;
        }

        while (angle < startAngle) {
          angle += TAU;
        } // Check if within the range of the open/close angle


        var betweenAngles = angle >= startAngle && angle <= endAngle;
        var withinRadius = distance >= vm.innerRadius && distance <= vm.outerRadius;
        return betweenAngles && withinRadius;
      }

      return false;
    }
  }, {
    key: "getCenterPoint",
    value: function getCenterPoint() {
      var vm = this._view;
      var halfAngle = (vm.startAngle + vm.endAngle) / 2;
      var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
      return {
        x: vm.x + Math.cos(halfAngle) * halfRadius,
        y: vm.y + Math.sin(halfAngle) * halfRadius
      };
    }
  }, {
    key: "tooltipPosition",
    value: function tooltipPosition() {
      var vm = this._view;
      var centreAngle = vm.startAngle + (vm.endAngle - vm.startAngle) / 2;
      var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
      return {
        x: vm.x + Math.cos(centreAngle) * rangeFromCentre,
        y: vm.y + Math.sin(centreAngle) * rangeFromCentre
      };
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this._ctx;
      var vm = this._view;
      var pixelMargin = vm.borderAlign === 'inner' ? 0.33 : 0;
      var arc = {
        x: vm.x,
        y: vm.y,
        innerRadius: vm.innerRadius,
        outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
        pixelMargin: pixelMargin,
        startAngle: vm.startAngle,
        endAngle: vm.endAngle,
        fullCircles: Math.floor(vm.circumference / TAU)
      };
      var i;
      ctx.save();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;

      if (arc.fullCircles) {
        arc.endAngle = arc.startAngle + TAU;
        ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
        ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
        ctx.closePath();

        for (i = 0; i < arc.fullCircles; ++i) {
          ctx.fill();
        }

        arc.endAngle = arc.startAngle + vm.circumference % TAU;
      }

      ctx.beginPath();
      ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
      ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
      ctx.closePath();
      ctx.fill();

      if (vm.borderWidth) {
        drawBorder(ctx, vm, arc);
      }

      ctx.restore();
    }
  }]);

  return Arc;
}(core_element);

Arc.prototype._type = 'arc';
var element_arc = Arc;

var defaultColor = core_defaults.global.defaultColor;

core_defaults._set('global', {
  elements: {
    line: {
      tension: 0.4,
      backgroundColor: defaultColor,
      borderWidth: 3,
      borderColor: defaultColor,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      capBezierPoints: true,
      fill: true // do we fill in the area between the line and its base axis

    }
  }
});

function startAtGap(points, spanGaps) {
  var closePath = true;
  var previous = points.length && points[0]._view;
  var index, view;

  for (index = 1; index < points.length; ++index) {
    // If there is a gap in the (looping) line, start drawing from that gap
    view = points[index]._view;

    if (!view.skip && previous.skip) {
      points = points.slice(index).concat(points.slice(0, index));
      closePath = spanGaps;
      break;
    }

    previous = view;
  }

  points.closePath = closePath;
  return points;
}

function setStyle(ctx, vm) {
  ctx.lineCap = vm.borderCapStyle;
  ctx.setLineDash(vm.borderDash);
  ctx.lineDashOffset = vm.borderDashOffset;
  ctx.lineJoin = vm.borderJoinStyle;
  ctx.lineWidth = vm.borderWidth;
  ctx.strokeStyle = vm.borderColor;
}

function normalPath(ctx, points, spanGaps, vm) {
  var steppedLine = vm.steppedLine;
  var lineMethod = steppedLine ? helpers$1.canvas._steppedLineTo : helpers$1.canvas._bezierCurveTo;
  var move = true;
  var index, currentVM, previousVM;

  for (index = 0; index < points.length; ++index) {
    currentVM = points[index]._view;

    if (currentVM.skip) {
      move = move || !spanGaps;
      continue;
    }

    if (move) {
      ctx.moveTo(currentVM.x, currentVM.y);
      move = false;
    } else if (vm.tension || steppedLine) {
      lineMethod(ctx, previousVM, currentVM, false, steppedLine);
    } else {
      ctx.lineTo(currentVM.x, currentVM.y);
    }

    previousVM = currentVM;
  }
}
/**
 * Create path from points, grouping by truncated x-coordinate
 * Points need to be in order by x-coordinate for this to work efficiently
 * @param {CanvasRenderingContext2D} ctx - Context
 * @param {Point[]} points - Points defining the line
 * @param {boolean} spanGaps - Are gaps spanned over
 */


function fastPath(ctx, points, spanGaps) {
  var move = true;
  var count = 0;
  var avgX = 0;
  var index, vm, truncX, x, y, prevX, minY, maxY, lastY;

  for (index = 0; index < points.length; ++index) {
    vm = points[index]._view; // If point is skipped, we either move to next (not skipped) point
    // or line to it if spanGaps is true. `move` can already be true.

    if (vm.skip) {
      move = move || !spanGaps;
      continue;
    }

    x = vm.x;
    y = vm.y;
    truncX = x | 0; // truncated x-coordinate

    if (move) {
      ctx.moveTo(x, y);
      move = false;
    } else if (truncX === prevX) {
      // Determine `minY` / `maxY` and `avgX` while we stay within same x-position
      minY = Math.min(y, minY);
      maxY = Math.max(y, maxY); // For first point in group, count is `0`, so average will be `x` / 1.

      avgX = (count * avgX + x) / ++count;
    } else {
      if (minY !== maxY) {
        // Draw line to maxY and minY, using the average x-coordinate
        ctx.lineTo(avgX, maxY);
        ctx.lineTo(avgX, minY); // Move to y-value of last point in group. So the line continues
        // from correct position.

        ctx.moveTo(avgX, lastY);
      } // Draw line to next x-position, using the first (or only)
      // y-value in that group


      ctx.lineTo(x, y);
      prevX = truncX;
      count = 0;
      minY = maxY = y;
    } // Keep track of the last y-value in group


    lastY = y;
  }
}

function useFastPath(vm) {
  return vm.tension === 0 && !vm.steppedLine && !vm.fill && !vm.borderDash.length;
}

var Line =
/*#__PURE__*/
function (_Element) {
  _inherits(Line, _Element);

  function Line(props) {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, props));
  }

  _createClass(Line, [{
    key: "draw",
    value: function draw() {
      var me = this;
      var vm = me._view;
      var ctx = me._ctx;
      var spanGaps = vm.spanGaps;
      var closePath = me._loop;
      var points = me._children;

      if (!points.length) {
        return;
      }

      if (closePath) {
        points = startAtGap(points, spanGaps);
        closePath = points.closePath;
      }

      ctx.save();
      setStyle(ctx, vm);
      ctx.beginPath();

      if (useFastPath(vm)) {
        fastPath(ctx, points, spanGaps);
      } else {
        normalPath(ctx, points, spanGaps, vm);
      }

      if (closePath) {
        ctx.closePath();
      }

      ctx.stroke();
      ctx.restore();
    }
  }]);

  return Line;
}(core_element);

Line.prototype._type = 'line';
var element_line = Line;

var defaultColor$1 = core_defaults.global.defaultColor;

core_defaults._set('global', {
  elements: {
    point: {
      radius: 3,
      pointStyle: 'circle',
      backgroundColor: defaultColor$1,
      borderColor: defaultColor$1,
      borderWidth: 1,
      // Hover
      hitRadius: 1,
      hoverRadius: 4,
      hoverBorderWidth: 1
    }
  }
});

var Point =
/*#__PURE__*/
function (_Element) {
  _inherits(Point, _Element);

  function Point(props) {
    _classCallCheck(this, Point);

    return _possibleConstructorReturn(this, _getPrototypeOf(Point).call(this, props));
  }

  _createClass(Point, [{
    key: "inRange",
    value: function inRange(mouseX, mouseY) {
      var vm = this._view;
      return vm ? Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2) < Math.pow(vm.hitRadius + vm.radius, 2) : false;
    }
  }, {
    key: "inXRange",
    value: function inXRange(mouseX) {
      var vm = this._view;
      return vm ? Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius : false;
    }
  }, {
    key: "inYRange",
    value: function inYRange(mouseY) {
      var vm = this._view;
      return vm ? Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius : false;
    }
  }, {
    key: "getCenterPoint",
    value: function getCenterPoint() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    }
  }, {
    key: "size",
    value: function size() {
      var vm = this._view;
      var radius = vm.radius || 0;
      var borderWidth = vm.borderWidth || 0;
      return (radius + borderWidth) * 2;
    }
  }, {
    key: "tooltipPosition",
    value: function tooltipPosition() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
        padding: vm.radius + vm.borderWidth
      };
    }
  }, {
    key: "draw",
    value: function draw(chartArea) {
      var vm = this._view;
      var ctx = this._ctx;
      var pointStyle = vm.pointStyle;
      var rotation = vm.rotation;
      var radius = vm.radius;
      var x = vm.x;
      var y = vm.y;

      if (vm.skip || radius <= 0) {
        return;
      } // Clipping for Points.


      if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = vm.borderWidth;
        ctx.fillStyle = vm.backgroundColor;
        helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
      }
    }
  }]);

  return Point;
}(core_element);

Point.prototype._type = 'point';
var element_point = Point;

var defaultColor$2 = core_defaults.global.defaultColor;

core_defaults._set('global', {
  elements: {
    rectangle: {
      backgroundColor: defaultColor$2,
      borderColor: defaultColor$2,
      borderSkipped: 'bottom',
      borderWidth: 0
    }
  }
});

function isVertical(vm) {
  return vm && vm.width !== undefined;
}
/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */


function getBarBounds(vm) {
  var x1, x2, y1, y2, half;

  if (isVertical(vm)) {
    half = vm.width / 2;
    x1 = vm.x - half;
    x2 = vm.x + half;
    y1 = Math.min(vm.y, vm.base);
    y2 = Math.max(vm.y, vm.base);
  } else {
    half = vm.height / 2;
    x1 = Math.min(vm.x, vm.base);
    x2 = Math.max(vm.x, vm.base);
    y1 = vm.y - half;
    y2 = vm.y + half;
  }

  return {
    left: x1,
    top: y1,
    right: x2,
    bottom: y2
  };
}

function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}

function parseBorderSkipped(vm) {
  var edge = vm.borderSkipped;
  var res = {};

  if (!edge) {
    return res;
  }

  if (vm.horizontal) {
    if (vm.base > vm.x) {
      edge = swap(edge, 'left', 'right');
    }
  } else if (vm.base < vm.y) {
    edge = swap(edge, 'bottom', 'top');
  }

  res[edge] = true;
  return res;
}

function parseBorderWidth(vm, maxW, maxH) {
  var value = vm.borderWidth;
  var skip = parseBorderSkipped(vm);
  var t, r, b, l;

  if (helpers$1.isObject(value)) {
    t = +value.top || 0;
    r = +value.right || 0;
    b = +value.bottom || 0;
    l = +value.left || 0;
  } else {
    t = r = b = l = +value || 0;
  }

  return {
    t: skip.top || t < 0 ? 0 : t > maxH ? maxH : t,
    r: skip.right || r < 0 ? 0 : r > maxW ? maxW : r,
    b: skip.bottom || b < 0 ? 0 : b > maxH ? maxH : b,
    l: skip.left || l < 0 ? 0 : l > maxW ? maxW : l
  };
}

function boundingRects(vm) {
  var bounds = getBarBounds(vm);
  var width = bounds.right - bounds.left;
  var height = bounds.bottom - bounds.top;
  var border = parseBorderWidth(vm, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b
    }
  };
}

function _inRange(vm, x, y) {
  var skipX = x === null;
  var skipY = y === null;
  var bounds = !vm || skipX && skipY ? false : getBarBounds(vm);
  return bounds && (skipX || x >= bounds.left && x <= bounds.right) && (skipY || y >= bounds.top && y <= bounds.bottom);
}

var Rectangle =
/*#__PURE__*/
function (_Element) {
  _inherits(Rectangle, _Element);

  function Rectangle(props) {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).call(this, props));
  }

  _createClass(Rectangle, [{
    key: "draw",
    value: function draw() {
      var ctx = this._ctx;
      var vm = this._view;
      var rects = boundingRects(vm);
      var outer = rects.outer;
      var inner = rects.inner;
      ctx.fillStyle = vm.backgroundColor;
      ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

      if (outer.w === inner.w && outer.h === inner.h) {
        return;
      }

      ctx.save();
      ctx.beginPath();
      ctx.rect(outer.x, outer.y, outer.w, outer.h);
      ctx.clip();
      ctx.fillStyle = vm.borderColor;
      ctx.rect(inner.x, inner.y, inner.w, inner.h);
      ctx.fill('evenodd');
      ctx.restore();
    }
  }, {
    key: "inRange",
    value: function inRange(mouseX, mouseY) {
      return _inRange(this._view, mouseX, mouseY);
    }
  }, {
    key: "inXRange",
    value: function inXRange(mouseX) {
      return _inRange(this._view, mouseX, null);
    }
  }, {
    key: "inYRange",
    value: function inYRange(mouseY) {
      return _inRange(this._view, null, mouseY);
    }
  }, {
    key: "getCenterPoint",
    value: function getCenterPoint() {
      var vm = this._view;
      var x, y;

      if (isVertical(vm)) {
        x = vm.x;
        y = (vm.y + vm.base) / 2;
      } else {
        x = (vm.x + vm.base) / 2;
        y = vm.y;
      }

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "tooltipPosition",
    value: function tooltipPosition() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    }
  }]);

  return Rectangle;
}(core_element);

Rectangle.prototype._type = 'rectangle';
var element_rectangle = Rectangle;

var elements = {};
var Arc$1 = element_arc;
var Line$1 = element_line;
var Point$1 = element_point;
var Rectangle$1 = element_rectangle;
elements.Arc = Arc$1;
elements.Line = Line$1;
elements.Point = Point$1;
elements.Rectangle = Rectangle$1;

var valueOrDefault$1 = helpers$1.valueOrDefault;

core_defaults._set('bar', {
  hover: {
    mode: 'index'
  },
  scales: {
    xAxes: [{
      type: 'category',
      offset: true,
      gridLines: {
        offsetGridLines: true
      }
    }],
    yAxes: [{
      type: 'linear'
    }]
  }
});

core_defaults._set('global', {
  datasets: {
    bar: {
      categoryPercentage: 0.8,
      barPercentage: 0.9
    }
  }
});
/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */


function computeMinSampleSize(scale, pixels) {
  var min = scale._length;
  var prev, curr, i, ilen;

  for (i = 1, ilen = pixels.length; i < ilen; ++i) {
    min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
  }

  for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
    prev = curr;
  }

  return min;
}
/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */


function computeFitCategoryTraits(index, ruler, options) {
  var thickness = options.barThickness;
  var count = ruler.stackCount;
  var curr = ruler.pixels[index];
  var min = helpers$1.isNullOrUndef(thickness) ? computeMinSampleSize(ruler.scale, ruler.pixels) : -1;
  var size, ratio;

  if (helpers$1.isNullOrUndef(thickness)) {
    size = min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    // When bar thickness is enforced, category and bar percentages are ignored.
    // Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
    // and deprecate barPercentage since this value is ignored when thickness is absolute.
    size = thickness * count;
    ratio = 1;
  }

  return {
    chunk: size / count,
    ratio: ratio,
    start: curr - size / 2
  };
}
/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */


function computeFlexCategoryTraits(index, ruler, options) {
  var pixels = ruler.pixels;
  var curr = pixels[index];
  var prev = index > 0 ? pixels[index - 1] : null;
  var next = index < pixels.length - 1 ? pixels[index + 1] : null;
  var percent = options.categoryPercentage;
  var start, size;

  if (prev === null) {
    // first data: its size is double based on the next point or,
    // if it's also the last data, we use the scale size.
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }

  if (next === null) {
    // last data: its size is also double based on the previous point.
    next = curr + curr - prev;
  }

  start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / ruler.stackCount,
    ratio: options.barPercentage,
    start: start
  };
}

function parseFloatBar(arr, item, vScale, i) {
  var startValue = vScale._parse(arr[0], i);

  var endValue = vScale._parse(arr[1], i);

  var min = Math.min(startValue, endValue);
  var max = Math.max(startValue, endValue);
  var barStart = min;
  var barEnd = max;

  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  } // Store `barEnd` (furthest away from origin) as parsed value,
  // to make stacking straight forward


  item[vScale.id] = barEnd;
  item._custom = {
    barStart: barStart,
    barEnd: barEnd,
    start: startValue,
    end: endValue,
    min: min,
    max: max
  };
}

function parseArrayOrPrimitive(meta, data, start, count) {
  var iScale = this._getIndexScale();

  var vScale = this._getValueScale();

  var labels = iScale._getLabels();

  var singleScale = iScale === vScale;
  var parsed = [];
  var i, ilen, item, entry;

  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.id] = singleScale || iScale._parse(labels[i], i);

    if (helpers$1.isArray(entry)) {
      parseFloatBar(entry, item, vScale, i);
    } else {
      item[vScale.id] = vScale._parse(entry, i);
    }

    parsed.push(item);
  }

  return parsed;
}

var controller_bar = core_datasetController.extend({
  dataElementType: elements.Rectangle,

  /**
   * @private
   */
  _dataElementOptions: ['backgroundColor', 'borderColor', 'borderSkipped', 'borderWidth', 'barPercentage', 'barThickness', 'categoryPercentage', 'maxBarThickness', 'minBarLength'],

  /**
   * Overriding primitive data parsing since we support mixed primitive/array
   * data for float bars
   * @private
   */
  _parsePrimitiveData: function _parsePrimitiveData() {
    return parseArrayOrPrimitive.apply(this, arguments);
  },

  /**
   * Overriding array data parsing since we support mixed primitive/array
   * data for float bars
   * @private
   */
  _parseArrayData: function _parseArrayData() {
    return parseArrayOrPrimitive.apply(this, arguments);
  },

  /**
   * Overriding object data parsing since we support mixed primitive/array
   * value-scale data for float bars
   * @private
   */
  _parseObjectData: function _parseObjectData(meta, data, start, count) {
    var iScale = this._getIndexScale();

    var vScale = this._getValueScale();

    var vProp = vScale._getAxis();

    var parsed = [];
    var i, ilen, item, obj, value;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.id] = iScale._parseObject(obj, iScale._getAxis(), i);
      value = obj[vProp];

      if (helpers$1.isArray(value)) {
        parseFloatBar(value, item, vScale, i);
      } else {
        item[vScale.id] = vScale._parseObject(obj, vProp, i);
      }

      parsed.push(item);
    }

    return parsed;
  },

  /**
   * @private
   */
  _getLabelAndValue: function _getLabelAndValue(index) {
    var me = this;

    var indexScale = me._getIndexScale();

    var valueScale = me._getValueScale();

    var parsed = me._getParsed(index);

    var custom = parsed._custom;
    var value = custom ? '[' + custom.start + ', ' + custom.end + ']' : '' + valueScale.getLabelForValue(parsed[valueScale.id]);
    return {
      label: '' + indexScale.getLabelForValue(parsed[indexScale.id]),
      value: value
    };
  },
  initialize: function initialize() {
    var me = this;
    var meta;
    core_datasetController.prototype.initialize.apply(me, arguments);
    meta = me.getMeta();
    meta.stack = me.getDataset().stack;
    meta.bar = true;
  },
  update: function update(reset) {
    var me = this;
    var rects = me.getMeta().data;
    var i, ilen;
    me._ruler = me.getRuler();

    for (i = 0, ilen = rects.length; i < ilen; ++i) {
      me.updateElement(rects[i], i, reset);
    }
  },
  updateElement: function updateElement(rectangle, index, reset) {
    var me = this;

    var options = me._resolveDataElementOptions(index);

    rectangle._model = {
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderSkipped: options.borderSkipped,
      borderWidth: options.borderWidth
    }; // all borders are drawn for floating bar

    if (me._getParsed(index)._custom) {
      rectangle._model.borderSkipped = null;
    }

    me._updateElementGeometry(rectangle, index, reset, options);

    rectangle.pivot(me.chart._animationsDisabled);
  },

  /**
   * @private
   */
  _updateElementGeometry: function _updateElementGeometry(rectangle, index, reset, options) {
    var me = this;
    var model = rectangle._model;

    var vscale = me._getValueScale();

    var base = vscale.getBasePixel();
    var horizontal = vscale.isHorizontal();
    var ruler = me._ruler || me.getRuler();
    var vpixels = me.calculateBarValuePixels(index, options);
    var ipixels = me.calculateBarIndexPixels(index, ruler, options);
    model.horizontal = horizontal;
    model.base = reset ? base : vpixels.base;
    model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
    model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
    model.height = horizontal ? ipixels.size : undefined;
    model.width = horizontal ? undefined : ipixels.size;
  },

  /**
   * Returns the stacks based on groups and bar visibility.
   * @param {number} [last] - The dataset index
   * @returns {string[]} The list of stack IDs
   * @private
   */
  _getStacks: function _getStacks(last) {
    var me = this;

    var scale = me._getIndexScale();

    var metasets = scale._getMatchingVisibleMetas(me._type);

    var stacked = scale.options.stacked;
    var ilen = metasets.length;
    var stacks = [];
    var i, meta;

    for (i = 0; i < ilen; ++i) {
      meta = metasets[i]; // stacked   | meta.stack
      //           | found | not found | undefined
      // false     |   x   |     x     |     x
      // true      |       |     x     |
      // undefined |       |     x     |     x

      if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
        stacks.push(meta.stack);
      }

      if (meta.index === last) {
        break;
      }
    }

    return stacks;
  },

  /**
   * Returns the effective number of stacks based on groups and bar visibility.
   * @private
   */
  getStackCount: function getStackCount() {
    return this._getStacks().length;
  },

  /**
   * Returns the stack index for the given dataset based on groups and bar visibility.
   * @param {number} [datasetIndex] - The dataset index
   * @param {string} [name] - The stack name to find
   * @returns {number} The stack index
   * @private
   */
  getStackIndex: function getStackIndex(datasetIndex, name) {
    var stacks = this._getStacks(datasetIndex);

    var index = name !== undefined ? stacks.indexOf(name) : -1; // indexOf returns -1 if element is not present

    return index === -1 ? stacks.length - 1 : index;
  },

  /**
   * @private
   */
  getRuler: function getRuler() {
    var me = this;

    var scale = me._getIndexScale();

    var pixels = [];
    var i, ilen;

    for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
      pixels.push(scale.getPixelForValue(me._getParsed(i)[scale.id]));
    }

    return {
      pixels: pixels,
      start: scale._startPixel,
      end: scale._endPixel,
      stackCount: me.getStackCount(),
      scale: scale
    };
  },

  /**
   * Note: pixel values are not clamped to the scale area.
   * @private
   */
  calculateBarValuePixels: function calculateBarValuePixels(index, options) {
    var me = this;

    var valueScale = me._getValueScale();

    var minBarLength = options.minBarLength;
    var start = 0;

    var parsed = me._getParsed(index);

    var value = parsed[valueScale.id];
    var custom = parsed._custom;
    var length = me._cachedMeta._stacked ? me._applyStack(valueScale, parsed) : parsed[valueScale.id];
    var base, head, size;

    if (length !== value) {
      start = length - value;
      length = value;
    }

    if (custom && custom.barStart !== undefined && custom.barEnd !== undefined) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart; // bars crossing origin are not stacked

      if (value !== 0 && helpers$1.sign(value) !== helpers$1.sign(custom.barEnd)) {
        start = 0;
      }

      start += value;
    }

    base = valueScale.getPixelForValue(start);
    head = valueScale.getPixelForValue(start + length);
    size = head - base;

    if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
      size = size < 0 ? -minBarLength : minBarLength;
      head = base + size;
    }

    return {
      size: size,
      base: base,
      head: head,
      center: head + size / 2
    };
  },

  /**
   * @private
   */
  calculateBarIndexPixels: function calculateBarIndexPixels(index, ruler, options) {
    var me = this;
    var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options) : computeFitCategoryTraits(index, ruler, options);
    var stackIndex = me.getStackIndex(me.index, me.getMeta().stack);
    var center = range.start + range.chunk * stackIndex + range.chunk / 2;
    var size = Math.min(valueOrDefault$1(options.maxBarThickness, Infinity), range.chunk * range.ratio);
    return {
      base: center - size / 2,
      head: center + size / 2,
      center: center,
      size: size
    };
  },
  draw: function draw() {
    var me = this;
    var chart = me.chart;

    var scale = me._getValueScale();

    var rects = me.getMeta().data;
    var ilen = rects.length;
    var i = 0;
    helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

    for (; i < ilen; ++i) {
      if (!isNaN(me._getParsed(i)[scale.id])) {
        rects[i].draw();
      }
    }

    helpers$1.canvas.unclipArea(chart.ctx);
  }
});

var valueOrDefault$2 = helpers$1.valueOrDefault;
var resolve$1 = helpers$1.options.resolve;

core_defaults._set('bubble', {
  scales: {
    xAxes: [{
      type: 'linear',
      // bubble should probably use a linear scale by default
      position: 'bottom',
      id: 'x-axis-0' // need an ID so datasets can reference the scale

    }],
    yAxes: [{
      type: 'linear',
      position: 'left',
      id: 'y-axis-0'
    }]
  },
  tooltips: {
    callbacks: {
      title: function title() {
        // Title doesn't make sense for scatter since we format the data as a point
        return '';
      }
    }
  }
});

var controller_bubble = core_datasetController.extend({
  /**
   * @protected
   */
  dataElementType: elements.Point,

  /**
   * @private
   */
  _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth', 'hoverRadius', 'hitRadius', 'pointStyle', 'rotation'],

  /**
   * Parse array of objects
   * @private
   */
  _parseObjectData: function _parseObjectData(meta, data, start, count) {
    var xScale = this.getScaleForId(meta.xAxisID);
    var yScale = this.getScaleForId(meta.yAxisID);
    var parsed = [];
    var i, ilen, item, obj;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[xScale.id] = xScale._parseObject(obj, 'x', i);
      item[yScale.id] = yScale._parseObject(obj, 'y', i);
      item._custom = obj && obj.r && +obj.r;
      parsed.push(item);
    }

    return parsed;
  },

  /**
   * @private
   */
  _getMaxOverflow: function _getMaxOverflow() {
    var me = this;
    var meta = me._cachedMeta;
    var data = meta.data || [];

    if (!data.length) {
      return false;
    }

    var firstPoint = data[0].size();
    var lastPoint = data[data.length - 1].size();
    return Math.max(firstPoint, lastPoint) / 2;
  },

  /**
   * @private
   */
  _getLabelAndValue: function _getLabelAndValue(index) {
    var me = this;
    var meta = me._cachedMeta;
    var xScale = me.getScaleForId(meta.xAxisID);
    var yScale = me.getScaleForId(meta.yAxisID);

    var parsed = me._getParsed(index);

    var x = xScale.getLabelForValue(parsed[xScale.id]);
    var y = yScale.getLabelForValue(parsed[yScale.id]);
    var r = parsed._custom;
    return {
      label: meta.label,
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  },

  /**
   * @protected
   */
  update: function update(reset) {
    var me = this;
    var meta = me.getMeta();
    var points = meta.data; // Update Points

    helpers$1.each(points, function (point, index) {
      me.updateElement(point, index, reset);
    });
  },

  /**
   * @protected
   */
  updateElement: function updateElement(point, index, reset) {
    var me = this;
    var meta = me.getMeta();
    var xScale = me.getScaleForId(meta.xAxisID);
    var yScale = me.getScaleForId(meta.yAxisID);

    var options = me._resolveDataElementOptions(index);

    var parsed = !reset && me._getParsed(index);

    var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(parsed[xScale.id]);
    var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(parsed[yScale.id]);
    point._options = options;
    point._model = {
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth,
      hitRadius: options.hitRadius,
      pointStyle: options.pointStyle,
      rotation: options.rotation,
      radius: reset ? 0 : options.radius,
      skip: isNaN(x) || isNaN(y),
      x: x,
      y: y
    };
    point.pivot(me.chart._animationsDisabled);
  },

  /**
   * @protected
   */
  setHoverStyle: function setHoverStyle(point) {
    var model = point._model;
    var options = point._options;
    var getHoverColor = helpers$1.getHoverColor;
    point.$previousStyle = {
      backgroundColor: model.backgroundColor,
      borderColor: model.borderColor,
      borderWidth: model.borderWidth,
      radius: model.radius
    };
    model.backgroundColor = valueOrDefault$2(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
    model.borderColor = valueOrDefault$2(options.hoverBorderColor, getHoverColor(options.borderColor));
    model.borderWidth = valueOrDefault$2(options.hoverBorderWidth, options.borderWidth);
    model.radius = options.radius + options.hoverRadius;
  },

  /**
   * @private
   */
  _resolveDataElementOptions: function _resolveDataElementOptions(index) {
    var me = this;
    var chart = me.chart;
    var dataset = me.getDataset();

    var parsed = me._getParsed(index);

    var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments); // Scriptable options


    var context = {
      chart: chart,
      dataIndex: index,
      dataset: dataset,
      datasetIndex: me.index
    }; // In case values were cached (and thus frozen), we need to clone the values

    if (me._cachedDataOpts === values) {
      values = helpers$1.extend({}, values);
    } // Custom radius resolution


    values.radius = resolve$1([parsed && parsed._custom, me._config.radius, chart.options.elements.point.radius], context, index);
    return values;
  }
});

var valueOrDefault$3 = helpers$1.valueOrDefault;
var PI$1 = Math.PI;
var DOUBLE_PI$1 = PI$1 * 2;
var HALF_PI$1 = PI$1 / 2;

core_defaults._set('doughnut', {
  animation: {
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false
  },
  legendCallback: function legendCallback(chart) {
    var list = document.createElement('ul');
    var data = chart.data;
    var datasets = data.datasets;
    var labels = data.labels;
    var i, ilen, listItem, listItemSpan;
    list.setAttribute('class', chart.id + '-legend');

    if (datasets.length) {
      for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
        listItem = list.appendChild(document.createElement('li'));
        listItemSpan = listItem.appendChild(document.createElement('span'));
        listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

        if (labels[i]) {
          listItem.appendChild(document.createTextNode(labels[i]));
        }
      }
    }

    return list.outerHTML;
  },
  legend: {
    labels: {
      generateLabels: function generateLabels(chart) {
        var data = chart.data;

        if (data.labels.length && data.datasets.length) {
          return data.labels.map(function (label, i) {
            var meta = chart.getDatasetMeta(0);
            var style = meta.controller.getStyle(i);
            return {
              text: label,
              fillStyle: style.backgroundColor,
              strokeStyle: style.borderColor,
              lineWidth: style.borderWidth,
              hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
              // Extra data used for toggling the correct item
              index: i
            };
          });
        }

        return [];
      }
    },
    onClick: function onClick(e, legendItem) {
      var index = legendItem.index;
      var chart = this.chart;
      var i, ilen, meta;

      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        meta = chart.getDatasetMeta(i); // toggle visibility of index if exists

        if (meta.data[index]) {
          meta.data[index].hidden = !meta.data[index].hidden;
        }
      }

      chart.update();
    }
  },
  // The percentage of the chart that we cut out of the middle.
  cutoutPercentage: 50,
  // The rotation of the chart, where the first data arc begins.
  rotation: -HALF_PI$1,
  // The total circumference of the chart.
  circumference: DOUBLE_PI$1,
  // Need to override these to give a nice default
  tooltips: {
    callbacks: {
      title: function title() {
        return '';
      },
      label: function label(tooltipItem, data) {
        var dataLabel = data.labels[tooltipItem.index];
        var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

        if (helpers$1.isArray(dataLabel)) {
          // show value on first line of multiline label
          // need to clone because we are changing the value
          dataLabel = dataLabel.slice();
          dataLabel[0] += value;
        } else {
          dataLabel += value;
        }

        return dataLabel;
      }
    }
  }
});

var controller_doughnut = core_datasetController.extend({
  dataElementType: elements.Arc,
  linkScales: helpers$1.noop,

  /**
   * @private
   */
  _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],

  /**
   * Override data parsing, since we are not using scales
   * @private
   */
  _parse: function _parse(start, count) {
    var data = this.getDataset().data;
    var metaData = this.getMeta().data;
    var i, ilen;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      metaData[i]._parsed = +data[i];
    }
  },
  // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
  getRingIndex: function getRingIndex(datasetIndex) {
    var ringIndex = 0;

    for (var j = 0; j < datasetIndex; ++j) {
      if (this.chart.isDatasetVisible(j)) {
        ++ringIndex;
      }
    }

    return ringIndex;
  },
  update: function update(reset) {
    var me = this;
    var chart = me.chart;
    var chartArea = chart.chartArea;
    var opts = chart.options;
    var ratioX = 1;
    var ratioY = 1;
    var offsetX = 0;
    var offsetY = 0;
    var meta = me.getMeta();
    var arcs = meta.data;
    var cutout = opts.cutoutPercentage / 100 || 0;
    var circumference = opts.circumference;

    var chartWeight = me._getRingWeight(me.index);

    var maxWidth, maxHeight, i, ilen; // If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc

    if (circumference < DOUBLE_PI$1) {
      var startAngle = opts.rotation % DOUBLE_PI$1;
      startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
      var endAngle = startAngle + circumference;
      var startX = Math.cos(startAngle);
      var startY = Math.sin(startAngle);
      var endX = Math.cos(endAngle);
      var endY = Math.sin(endAngle);
      var contains0 = startAngle <= 0 && endAngle >= 0 || endAngle >= DOUBLE_PI$1;
      var contains90 = startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1 || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
      var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
      var contains270 = startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1 || endAngle >= PI$1 + HALF_PI$1;
      var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
      var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
      var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
      var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
      ratioX = (maxX - minX) / 2;
      ratioY = (maxY - minY) / 2;
      offsetX = -(maxX + minX) / 2;
      offsetY = -(maxY + minY) / 2;
    }

    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      arcs[i]._options = me._resolveDataElementOptions(i);
    }

    chart.borderWidth = me.getMaxBorderWidth();
    maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
    maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
    chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
    chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
    chart.offsetX = offsetX * chart.outerRadius;
    chart.offsetY = offsetY * chart.outerRadius;
    meta.total = me.calculateTotal();
    me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
    me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      me.updateElement(arcs[i], i, reset);
    }
  },
  updateElement: function updateElement(arc, index, reset) {
    var me = this;
    var chart = me.chart;
    var chartArea = chart.chartArea;
    var opts = chart.options;
    var animationOpts = opts.animation;
    var centerX = (chartArea.left + chartArea.right) / 2;
    var centerY = (chartArea.top + chartArea.bottom) / 2;
    var startAngle = opts.rotation; // non reset case handled later

    var endAngle = opts.rotation; // non reset case handled later

    var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(arc._parsed * opts.circumference / DOUBLE_PI$1);
    var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
    var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
    var options = arc._options || {};
    helpers$1.extend(arc, {
      // Desired view properties
      _model: {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        borderAlign: options.borderAlign,
        x: centerX + chart.offsetX,
        y: centerY + chart.offsetY,
        startAngle: startAngle,
        endAngle: endAngle,
        circumference: circumference,
        outerRadius: outerRadius,
        innerRadius: innerRadius
      }
    });
    var model = arc._model; // Set correct angles if not resetting

    if (!reset || !animationOpts.animateRotate) {
      if (index === 0) {
        model.startAngle = opts.rotation;
      } else {
        model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
      }

      model.endAngle = model.startAngle + model.circumference;
    }

    arc.pivot(chart._animationsDisabled);
  },
  calculateTotal: function calculateTotal() {
    var metaData = this.getMeta().data;
    var total = 0;
    var value;
    helpers$1.each(metaData, function (arc) {
      value = arc ? arc._parsed : NaN;

      if (!isNaN(value) && !arc.hidden) {
        total += Math.abs(value);
      }
    });
    /* if (total === 0) {
    	total = NaN;
    }*/

    return total;
  },
  calculateCircumference: function calculateCircumference(value) {
    var total = this.getMeta().total;

    if (total > 0 && !isNaN(value)) {
      return DOUBLE_PI$1 * (Math.abs(value) / total);
    }

    return 0;
  },
  // gets the max border or hover width to properly scale pie charts
  getMaxBorderWidth: function getMaxBorderWidth(arcs) {
    var me = this;
    var max = 0;
    var chart = me.chart;
    var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

    if (!arcs) {
      // Find the outmost visible dataset
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;

          if (i !== me.index) {
            controller = meta.controller;
          }

          break;
        }
      }
    }

    if (!arcs) {
      return 0;
    }

    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      arc = arcs[i];

      if (controller) {
        controller._configure();

        options = controller._resolveDataElementOptions(i);
      } else {
        options = arc._options;
      }

      if (options.borderAlign !== 'inner') {
        borderWidth = options.borderWidth;
        hoverWidth = options.hoverBorderWidth;
        max = borderWidth > max ? borderWidth : max;
        max = hoverWidth > max ? hoverWidth : max;
      }
    }

    return max;
  },

  /**
   * @protected
   */
  setHoverStyle: function setHoverStyle(arc) {
    var model = arc._model;
    var options = arc._options;
    var getHoverColor = helpers$1.getHoverColor;
    arc.$previousStyle = {
      backgroundColor: model.backgroundColor,
      borderColor: model.borderColor,
      borderWidth: model.borderWidth
    };
    model.backgroundColor = valueOrDefault$3(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
    model.borderColor = valueOrDefault$3(options.hoverBorderColor, getHoverColor(options.borderColor));
    model.borderWidth = valueOrDefault$3(options.hoverBorderWidth, options.borderWidth);
  },

  /**
   * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
   * @private
   */
  _getRingWeightOffset: function _getRingWeightOffset(datasetIndex) {
    var ringWeightOffset = 0;

    for (var i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }

    return ringWeightOffset;
  },

  /**
   * @private
   */
  _getRingWeight: function _getRingWeight(dataSetIndex) {
    return Math.max(valueOrDefault$3(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
  },

  /**
   * Returns the sum of all visibile data set weights.  This value can be 0.
   * @private
   */
  _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length);
  }
});

core_defaults._set('horizontalBar', {
  hover: {
    mode: 'index',
    axis: 'y'
  },
  scales: {
    xAxes: [{
      type: 'linear',
      position: 'bottom'
    }],
    yAxes: [{
      type: 'category',
      position: 'left',
      offset: true,
      gridLines: {
        offsetGridLines: true
      }
    }]
  },
  elements: {
    rectangle: {
      borderSkipped: 'left'
    }
  },
  tooltips: {
    mode: 'index',
    axis: 'y'
  }
});

core_defaults._set('global', {
  datasets: {
    horizontalBar: {
      categoryPercentage: 0.8,
      barPercentage: 0.9
    }
  }
});

var controller_horizontalBar = controller_bar.extend({
  /**
   * @private
   */
  _getValueScaleId: function _getValueScaleId() {
    return this.getMeta().xAxisID;
  },

  /**
   * @private
   */
  _getIndexScaleId: function _getIndexScaleId() {
    return this.getMeta().yAxisID;
  }
});

var valueOrDefault$4 = helpers$1.valueOrDefault;
var resolve$2 = helpers$1.options.resolve;
var isPointInArea = helpers$1.canvas._isPointInArea;

core_defaults._set('line', {
  showLines: true,
  spanGaps: false,
  hover: {
    mode: 'index'
  },
  scales: {
    xAxes: [{
      type: 'category',
      id: 'x-axis-0'
    }],
    yAxes: [{
      type: 'linear',
      id: 'y-axis-0'
    }]
  }
});

var controller_line = core_datasetController.extend({
  datasetElementType: elements.Line,
  dataElementType: elements.Point,

  /**
   * @private
   */
  _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth', 'cubicInterpolationMode', 'fill'],

  /**
   * @private
   */
  _dataElementOptions: {
    backgroundColor: 'pointBackgroundColor',
    borderColor: 'pointBorderColor',
    borderWidth: 'pointBorderWidth',
    hitRadius: 'pointHitRadius',
    hoverBackgroundColor: 'pointHoverBackgroundColor',
    hoverBorderColor: 'pointHoverBorderColor',
    hoverBorderWidth: 'pointHoverBorderWidth',
    hoverRadius: 'pointHoverRadius',
    pointStyle: 'pointStyle',
    radius: 'pointRadius',
    rotation: 'pointRotation'
  },
  update: function update(reset) {
    var me = this;
    var meta = me.getMeta();
    var line = meta.dataset;
    var points = meta.data || [];
    var options = me.chart.options;
    var config = me._config;
    var showLine = me._showLine = valueOrDefault$4(config.showLine, options.showLines);
    var i, ilen;
    me._xScale = me.getScaleForId(meta.xAxisID);
    me._yScale = me.getScaleForId(meta.yAxisID); // Update Line

    if (showLine) {
      // Data
      line._children = points; // Model

      line._model = me._resolveDatasetElementOptions();
      line.pivot();
    } // Update Points


    for (i = 0, ilen = points.length; i < ilen; ++i) {
      me.updateElement(points[i], i, reset);
    }

    if (showLine && line._model.tension !== 0) {
      me.updateBezierControlPoints();
    } // Now pivot the point for animation


    for (i = 0, ilen = points.length; i < ilen; ++i) {
      points[i].pivot(me.chart._animationsDisabled);
    }
  },
  updateElement: function updateElement(point, index, reset) {
    var me = this;
    var meta = me.getMeta();
    var xScale = me._xScale;
    var yScale = me._yScale;
    var stacked = meta._stacked;

    var parsed = me._getParsed(index);

    var options = me._resolveDataElementOptions(index);

    var x = xScale.getPixelForValue(parsed[xScale.id]);
    var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(stacked ? me._applyStack(yScale, parsed) : parsed[yScale.id]); // Utility

    point._options = options; // Desired view properties

    point._model = {
      x: x,
      y: y,
      skip: isNaN(x) || isNaN(y),
      // Appearance
      radius: options.radius,
      pointStyle: options.pointStyle,
      rotation: options.rotation,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth,
      // Tooltip
      hitRadius: options.hitRadius
    };
  },

  /**
   * @private
   */
  _resolveDatasetElementOptions: function _resolveDatasetElementOptions() {
    var me = this;
    var config = me._config;
    var options = me.chart.options;
    var lineOptions = options.elements.line;

    var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments); // The default behavior of lines is to break at null values, according
    // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
    // This option gives lines the ability to span gaps


    values.spanGaps = valueOrDefault$4(config.spanGaps, options.spanGaps);
    values.tension = valueOrDefault$4(config.lineTension, lineOptions.tension);
    values.steppedLine = resolve$2([config.steppedLine, lineOptions.stepped]);
    return values;
  },

  /**
   * @private
   */
  _getMaxOverflow: function _getMaxOverflow() {
    var me = this;
    var meta = me._cachedMeta;
    var data = meta.data || [];

    if (!data.length) {
      return false;
    }

    var border = me._showLine ? meta.dataset._model.borderWidth : 0;
    var firstPoint = data[0].size();
    var lastPoint = data[data.length - 1].size();
    return Math.max(border, firstPoint, lastPoint) / 2;
  },
  updateBezierControlPoints: function updateBezierControlPoints() {
    var me = this;
    var chart = me.chart;
    var meta = me.getMeta();
    var lineModel = meta.dataset._model;
    var area = chart.chartArea;
    var points = meta.data || [];
    var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

    if (lineModel.spanGaps) {
      points = points.filter(function (pt) {
        return !pt._model.skip;
      });
    }

    function capControlPoint(pt, min, max) {
      return Math.max(Math.min(pt, max), min);
    }

    if (lineModel.cubicInterpolationMode === 'monotone') {
      helpers$1.splineCurveMonotone(points);
    } else {
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        model = points[i]._model;
        controlPoints = helpers$1.splineCurve(points[Math.max(0, i - 1)]._model, model, points[Math.min(i + 1, ilen - 1)]._model, lineModel.tension);
        model.controlPointPreviousX = controlPoints.previous.x;
        model.controlPointPreviousY = controlPoints.previous.y;
        model.controlPointNextX = controlPoints.next.x;
        model.controlPointNextY = controlPoints.next.y;
      }
    }

    if (chart.options.elements.line.capBezierPoints) {
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        model = points[i]._model;

        if (isPointInArea(model, area)) {
          if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
            model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
            model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
          }

          if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
            model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
            model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
          }
        }
      }
    }
  },
  draw: function draw() {
    var me = this;
    var chart = me.chart;
    var meta = me.getMeta();
    var points = meta.data || [];
    var area = chart.chartArea;
    var i = 0;
    var ilen = points.length;

    if (me._showLine) {
      meta.dataset.draw();
    } // Draw the points


    for (; i < ilen; ++i) {
      points[i].draw(area);
    }
  },

  /**
   * @protected
   */
  setHoverStyle: function setHoverStyle(point) {
    var model = point._model;
    var options = point._options;
    var getHoverColor = helpers$1.getHoverColor;
    point.$previousStyle = {
      backgroundColor: model.backgroundColor,
      borderColor: model.borderColor,
      borderWidth: model.borderWidth,
      radius: model.radius
    };
    model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
    model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
    model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
    model.radius = valueOrDefault$4(options.hoverRadius, options.radius);
  }
});

var resolve$3 = helpers$1.options.resolve;

core_defaults._set('polarArea', {
  scale: {
    type: 'radialLinear',
    angleLines: {
      display: false
    },
    beginAtZero: true,
    gridLines: {
      circular: true
    },
    pointLabels: {
      display: false
    }
  },
  // Boolean - Whether to animate the rotation of the chart
  animation: {
    animateRotate: true,
    animateScale: true
  },
  startAngle: -0.5 * Math.PI,
  legendCallback: function legendCallback(chart) {
    var list = document.createElement('ul');
    var data = chart.data;
    var datasets = data.datasets;
    var labels = data.labels;
    var i, ilen, listItem, listItemSpan;
    list.setAttribute('class', chart.id + '-legend');

    if (datasets.length) {
      for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
        listItem = list.appendChild(document.createElement('li'));
        listItemSpan = listItem.appendChild(document.createElement('span'));
        listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

        if (labels[i]) {
          listItem.appendChild(document.createTextNode(labels[i]));
        }
      }
    }

    return list.outerHTML;
  },
  legend: {
    labels: {
      generateLabels: function generateLabels(chart) {
        var data = chart.data;

        if (data.labels.length && data.datasets.length) {
          return data.labels.map(function (label, i) {
            var meta = chart.getDatasetMeta(0);
            var style = meta.controller.getStyle(i);
            return {
              text: label,
              fillStyle: style.backgroundColor,
              strokeStyle: style.borderColor,
              lineWidth: style.borderWidth,
              hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
              // Extra data used for toggling the correct item
              index: i
            };
          });
        }

        return [];
      }
    },
    onClick: function onClick(e, legendItem) {
      var index = legendItem.index;
      var chart = this.chart;
      var i, ilen, meta;

      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        meta = chart.getDatasetMeta(i);
        meta.data[index].hidden = !meta.data[index].hidden;
      }

      chart.update();
    }
  },
  // Need to override these to give a nice default
  tooltips: {
    callbacks: {
      title: function title() {
        return '';
      },
      label: function label(item, data) {
        return data.labels[item.index] + ': ' + item.value;
      }
    }
  }
});

var controller_polarArea = core_datasetController.extend({
  dataElementType: elements.Arc,

  /**
   * @private
   */
  _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],

  /**
   * @private
   */
  _getIndexScaleId: function _getIndexScaleId() {
    return this.chart.scale.id;
  },

  /**
   * @private
   */
  _getValueScaleId: function _getValueScaleId() {
    return this.chart.scale.id;
  },
  update: function update(reset) {
    var me = this;
    var dataset = me.getDataset();
    var meta = me.getMeta();
    var start = me.chart.options.startAngle || 0;
    var starts = me._starts = [];
    var angles = me._angles = [];
    var arcs = meta.data;
    var i, ilen, angle;

    me._updateRadius();

    meta.count = me.countVisibleElements();

    for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
      starts[i] = start;
      angle = me._computeAngle(i);
      angles[i] = angle;
      start += angle;
    }

    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      arcs[i]._options = me._resolveDataElementOptions(i);
      me.updateElement(arcs[i], i, reset);
    }
  },

  /**
   * @private
   */
  _updateRadius: function _updateRadius() {
    var me = this;
    var chart = me.chart;
    var chartArea = chart.chartArea;
    var opts = chart.options;
    var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    chart.outerRadius = Math.max(minSize / 2, 0);
    chart.innerRadius = Math.max(opts.cutoutPercentage ? chart.outerRadius / 100 * opts.cutoutPercentage : 1, 0);
    chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
    me.outerRadius = chart.outerRadius - chart.radiusLength * me.index;
    me.innerRadius = me.outerRadius - chart.radiusLength;
  },
  updateElement: function updateElement(arc, index, reset) {
    var me = this;
    var chart = me.chart;
    var dataset = me.getDataset();
    var opts = chart.options;
    var animationOpts = opts.animation;
    var scale = chart.scale;
    var centerX = scale.xCenter;
    var centerY = scale.yCenter; // var negHalfPI = -0.5 * Math.PI;

    var datasetStartAngle = opts.startAngle;
    var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
    var startAngle = me._starts[index];
    var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);
    var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
    var options = arc._options || {};
    helpers$1.extend(arc, {
      // Desired view properties
      _model: {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        borderAlign: options.borderAlign,
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius: reset ? resetRadius : distance,
        startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
        endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle
      }
    });
    arc.pivot(chart._animationsDisabled);
  },
  countVisibleElements: function countVisibleElements() {
    var dataset = this.getDataset();
    var meta = this.getMeta();
    var count = 0;
    helpers$1.each(meta.data, function (element, index) {
      if (!isNaN(dataset.data[index]) && !element.hidden) {
        count++;
      }
    });
    return count;
  },

  /**
   * @protected
   */
  setHoverStyle: function setHoverStyle(arc) {
    var model = arc._model;
    var options = arc._options;
    var getHoverColor = helpers$1.getHoverColor;
    var valueOrDefault = helpers$1.valueOrDefault;
    arc.$previousStyle = {
      backgroundColor: model.backgroundColor,
      borderColor: model.borderColor,
      borderWidth: model.borderWidth
    };
    model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
    model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
    model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
  },

  /**
   * @private
   */
  _computeAngle: function _computeAngle(index) {
    var me = this;
    var count = this.getMeta().count;
    var dataset = me.getDataset();
    var meta = me.getMeta();

    if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
      return 0;
    } // Scriptable options


    var context = {
      chart: me.chart,
      dataIndex: index,
      dataset: dataset,
      datasetIndex: me.index
    };
    return resolve$3([me.chart.options.elements.arc.angle, 2 * Math.PI / count], context, index);
  }
});

core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));

core_defaults._set('pie', {
  cutoutPercentage: 0
}); // Pie charts are Doughnut chart with different defaults


var controller_pie = controller_doughnut;

var valueOrDefault$5 = helpers$1.valueOrDefault;

core_defaults._set('radar', {
  spanGaps: false,
  scale: {
    type: 'radialLinear'
  },
  elements: {
    line: {
      tension: 0 // no bezier in radar

    }
  }
});

function nextItem(collection, index) {
  return index >= collection.length - 1 ? collection[0] : collection[index + 1];
}

function previousItem(collection, index) {
  return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
}

var controller_radar = core_datasetController.extend({
  datasetElementType: elements.Line,
  dataElementType: elements.Point,

  /**
   * @private
   */
  _datasetElementOptions: ['backgroundColor', 'borderWidth', 'borderColor', 'borderCapStyle', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'fill'],

  /**
   * @private
   */
  _dataElementOptions: {
    backgroundColor: 'pointBackgroundColor',
    borderColor: 'pointBorderColor',
    borderWidth: 'pointBorderWidth',
    hitRadius: 'pointHitRadius',
    hoverBackgroundColor: 'pointHoverBackgroundColor',
    hoverBorderColor: 'pointHoverBorderColor',
    hoverBorderWidth: 'pointHoverBorderWidth',
    hoverRadius: 'pointHoverRadius',
    pointStyle: 'pointStyle',
    radius: 'pointRadius',
    rotation: 'pointRotation'
  },

  /**
   * @private
   */
  _getIndexScaleId: function _getIndexScaleId() {
    return this.chart.scale.id;
  },

  /**
   * @private
   */
  _getValueScaleId: function _getValueScaleId() {
    return this.chart.scale.id;
  },

  /**
   * @private
   */
  _getLabelAndValue: function _getLabelAndValue(index) {
    var me = this;

    var scale = me._getValueScale();

    var parsed = me._getParsed(index);

    return {
      label: scale._getLabels()[index],
      value: '' + scale.getLabelForValue(parsed[scale.id])
    };
  },
  update: function update(reset) {
    var me = this;
    var meta = me.getMeta();
    var line = meta.dataset;
    var points = meta.data || [];
    var animationsDisabled = me.chart._animationsDisabled;
    var i, ilen; // Data

    line._children = points;
    line._loop = true; // Model

    line._model = me._resolveDatasetElementOptions();
    line.pivot(animationsDisabled); // Update Points

    for (i = 0, ilen = points.length; i < ilen; ++i) {
      me.updateElement(points[i], i, reset);
    } // Update bezier control points


    me.updateBezierControlPoints(); // Now pivot the point for animation

    for (i = 0, ilen = points.length; i < ilen; ++i) {
      points[i].pivot(animationsDisabled);
    }
  },
  updateElement: function updateElement(point, index, reset) {
    var me = this;
    var dataset = me.getDataset();
    var scale = me.chart.scale;
    var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

    var options = me._resolveDataElementOptions(index);

    var x = reset ? scale.xCenter : pointPosition.x;
    var y = reset ? scale.yCenter : pointPosition.y; // Utility

    point._options = options; // Desired view properties

    point._model = {
      x: x,
      // value not used in dataset scale, but we want a consistent API between scales
      y: y,
      skip: isNaN(x) || isNaN(y),
      // Appearance
      radius: options.radius,
      pointStyle: options.pointStyle,
      rotation: options.rotation,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth,
      // Tooltip
      hitRadius: options.hitRadius
    };
  },

  /**
   * @private
   */
  _resolveDatasetElementOptions: function _resolveDatasetElementOptions() {
    var me = this;
    var config = me._config;
    var options = me.chart.options;

    var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

    values.spanGaps = valueOrDefault$5(config.spanGaps, options.spanGaps);
    values.tension = valueOrDefault$5(config.lineTension, options.elements.line.tension);
    return values;
  },
  updateBezierControlPoints: function updateBezierControlPoints() {
    var me = this;
    var meta = me.getMeta();
    var lineModel = meta.dataset._model;
    var area = me.chart.chartArea;
    var points = meta.data || [];
    var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

    if (meta.dataset._model.spanGaps) {
      points = points.filter(function (pt) {
        return !pt._model.skip;
      });
    }

    function capControlPoint(pt, min, max) {
      return Math.max(Math.min(pt, max), min);
    }

    for (i = 0, ilen = points.length; i < ilen; ++i) {
      model = points[i]._model;
      controlPoints = helpers$1.splineCurve(previousItem(points, i)._model, model, nextItem(points, i)._model, lineModel.tension); // Prevent the bezier going outside of the bounds of the graph

      model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
      model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
      model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
      model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
    }
  },
  setHoverStyle: function setHoverStyle(point) {
    var model = point._model;
    var options = point._options;
    var getHoverColor = helpers$1.getHoverColor;
    point.$previousStyle = {
      backgroundColor: model.backgroundColor,
      borderColor: model.borderColor,
      borderWidth: model.borderWidth,
      radius: model.radius
    };
    model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
    model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
    model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
    model.radius = valueOrDefault$5(options.hoverRadius, options.radius);
  }
});

core_defaults._set('scatter', {
  scales: {
    xAxes: [{
      id: 'x-axis-1',
      // need an ID so datasets can reference the scale
      type: 'linear',
      // scatter should not use a category axis
      position: 'bottom'
    }],
    yAxes: [{
      id: 'y-axis-1',
      type: 'linear',
      position: 'left'
    }]
  },
  tooltips: {
    callbacks: {
      title: function title() {
        return ''; // doesn't make sense for scatter since data are formatted as a point
      },
      label: function label(item) {
        return '(' + item.label + ', ' + item.value + ')';
      }
    }
  }
});

core_defaults._set('global', {
  datasets: {
    scatter: {
      showLine: false
    }
  }
}); // Scatter charts use line controllers


var controller_scatter = controller_line;

// the class, and so must be CamelCase in order to be correctly retrieved
// by the controller in core.controller.js (`controllers[meta.type]`).


var controllers = {
  bar: controller_bar,
  bubble: controller_bubble,
  doughnut: controller_doughnut,
  horizontalBar: controller_horizontalBar,
  line: controller_line,
  polarArea: controller_polarArea,
  pie: controller_pie,
  radar: controller_radar,
  scatter: controller_scatter
};

/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {object} the event position
 */


function getRelativePosition(e, chart) {
  if (e["native"]) {
    return {
      x: e.x,
      y: e.y
    };
  }

  return helpers$1.getRelativePosition(e, chart);
}
/**
 * Helper function to traverse all of the visible elements in the chart
 * @param {Chart} chart - the chart
 * @param {function} handler - the callback to execute for each visible item
 */


function parseVisibleItems(chart, handler) {
  var metasets = chart._getSortedVisibleDatasetMetas();

  var metadata, i, j, ilen, jlen, element;

  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    metadata = metasets[i].data;

    for (j = 0, jlen = metadata.length; j < jlen; ++j) {
      element = metadata[j];

      if (!element._view.skip) {
        handler(element, i, j);
      }
    }
  }
}
/**
 * Helper function to get the items that intersect the event position
 * @param {ChartElement[]} items - elements to filter
 * @param {object} position - the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */


function getIntersectItems(chart, position) {
  var elements = [];
  parseVisibleItems(chart, function (element, datasetIndex, index) {
    if (element.inRange(position.x, position.y)) {
      elements.push({
        element: element,
        datasetIndex: datasetIndex,
        index: index
      });
    }
  });
  return elements;
}
/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param {Chart} chart - the chart to look at elements from
 * @param {object} position - the point to be nearest to
 * @param {boolean} intersect - if true, only consider items that intersect the position
 * @param {function} distanceMetric - function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */


function getNearestItems(chart, position, intersect, distanceMetric) {
  var minDistance = Number.POSITIVE_INFINITY;
  var nearestItems = [];
  parseVisibleItems(chart, function (element, datasetIndex, index) {
    if (intersect && !element.inRange(position.x, position.y)) {
      return;
    }

    var center = element.getCenterPoint();
    var distance = distanceMetric(position, center);

    if (distance < minDistance) {
      nearestItems = [{
        element: element,
        datasetIndex: datasetIndex,
        index: index
      }];
      minDistance = distance;
    } else if (distance === minDistance) {
      // Can have multiple items at the same distance in which case we sort by size
      nearestItems.push({
        element: element,
        datasetIndex: datasetIndex,
        index: index
      });
    }
  });
  return nearestItems;
}
/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {string} axis - the axis mode. x|y|xy
 */


function getDistanceMetricForAxis(axis) {
  var useX = axis.indexOf('x') !== -1;
  var useY = axis.indexOf('y') !== -1;
  return function (pt1, pt2) {
    var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}

function indexMode(chart, e, options) {
  var position = getRelativePosition(e, chart); // Default axis for index mode is 'x' to match old behaviour

  options.axis = options.axis || 'x';
  var distanceMetric = getDistanceMetricForAxis(options.axis);
  var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
  var elements = [];

  if (!items.length) {
    return [];
  }

  chart._getSortedVisibleDatasetMetas().forEach(function (meta) {
    var index = items[0].index;
    var element = meta.data[index]; // don't count items that are skipped (null data)

    if (element && !element._view.skip) {
      elements.push({
        element: element,
        datasetIndex: meta.index,
        index: index
      });
    }
  });

  return elements;
}
/**
 * @interface IInteractionOptions
 */

/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */

/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */


var core_interaction = {
  // Helper function for different modes
  modes: {
    /**
     * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
     * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
     * @function Chart.Interaction.modes.index
     * @since v2.4.0
     * @param {Chart} chart - the chart we are returning items from
     * @param {Event} e - the event we are find things at
     * @param {IInteractionOptions} options - options to use during interaction
     * @return {Object[]} Array of elements that are under the point. If none are found, an empty array is returned
     */
    index: indexMode,

    /**
     * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
     * If the options.intersect is false, we find the nearest item and return the items in that dataset
     * @function Chart.Interaction.modes.dataset
     * @param {Chart} chart - the chart we are returning items from
     * @param {Event} e - the event we are find things at
     * @param {IInteractionOptions} options - options to use during interaction
     * @return {Object[]} Array of elements that are under the point. If none are found, an empty array is returned
     */
    dataset: function dataset(chart, e, options) {
      var position = getRelativePosition(e, chart);
      options.axis = options.axis || 'xy';
      var distanceMetric = getDistanceMetricForAxis(options.axis);
      var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

      if (items.length > 0) {
        items = [{
          datasetIndex: items[0].datasetIndex
        }]; // when mode: 'dataset' we only need to return datasetIndex
      }

      return items;
    },

    /**
     * Point mode returns all elements that hit test based on the event position
     * of the event
     * @function Chart.Interaction.modes.intersect
     * @param {Chart} chart - the chart we are returning items from
     * @param {Event} e - the event we are find things at
     * @return {Object[]} Array of elements that are under the point. If none are found, an empty array is returned
     */
    point: function point(chart, e) {
      var position = getRelativePosition(e, chart);
      return getIntersectItems(chart, position);
    },

    /**
     * nearest mode returns the element closest to the point
     * @function Chart.Interaction.modes.intersect
     * @param {Chart} chart - the chart we are returning items from
     * @param {Event} e - the event we are find things at
     * @param {IInteractionOptions} options - options to use
     * @return {Object[]} Array of elements that are under the point. If none are found, an empty array is returned
     */
    nearest: function nearest(chart, e, options) {
      var position = getRelativePosition(e, chart);
      options.axis = options.axis || 'xy';
      var distanceMetric = getDistanceMetricForAxis(options.axis);
      return getNearestItems(chart, position, options.intersect, distanceMetric);
    },

    /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @function Chart.Interaction.modes.x
     * @param {Chart} chart - the chart we are returning items from
     * @param {Event} e - the event we are find things at
     * @param {IInteractionOptions} options - options to use
     * @return {Object[]} Array of elements that are under the point. If none are found, an empty array is returned
     */
    x: function x(chart, e, options) {
      var position = getRelativePosition(e, chart);
      var items = [];
      var intersectsItem = false;
      parseVisibleItems(chart, function (element, datasetIndex, index) {
        if (element.inXRange(position.x)) {
          items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
          });
        }

        if (element.inRange(position.x, position.y)) {
          intersectsItem = true;
        }
      }); // If we want to trigger on an intersect and we don't have any items
      // that intersect the position, return nothing

      if (options.intersect && !intersectsItem) {
        items = [];
      }

      return items;
    },

    /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @function Chart.Interaction.modes.y
     * @param {Chart} chart - the chart we are returning items from
     * @param {Event} e - the event we are find things at
     * @param {IInteractionOptions} options - options to use
     * @return {Object[]} Array of elements that are under the point. If none are found, an empty array is returned
     */
    y: function y(chart, e, options) {
      var position = getRelativePosition(e, chart);
      var items = [];
      var intersectsItem = false;
      parseVisibleItems(chart, function (element, datasetIndex, index) {
        if (element.inYRange(position.y)) {
          items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
          });
        }

        if (element.inRange(position.x, position.y)) {
          intersectsItem = true;
        }
      }); // If we want to trigger on an intersect and we don't have any items
      // that intersect the position, return nothing

      if (options.intersect && !intersectsItem) {
        items = [];
      }

      return items;
    }
  }
};

var extend = helpers$1.extend;

function filterByPosition(array, position) {
  return helpers$1.where(array, function (v) {
    return v.pos === position;
  });
}

function sortByWeight(array, reverse) {
  return array.sort(function (a, b) {
    var v0 = reverse ? b : a;
    var v1 = reverse ? a : b;
    return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
  });
}

function wrapBoxes(boxes) {
  var layoutBoxes = [];
  var i, ilen, box;

  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    layoutBoxes.push({
      index: i,
      box: box,
      pos: box.position,
      horizontal: box.isHorizontal(),
      weight: box.weight
    });
  }

  return layoutBoxes;
}

function setLayoutDims(layouts, params) {
  var i, ilen, layout;

  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i]; // store width used instead of chartArea.w in fitBoxes

    layout.width = layout.horizontal ? layout.box.fullWidth && params.availableWidth : params.vBoxMaxWidth; // store height used instead of chartArea.h in fitBoxes

    layout.height = layout.horizontal && params.hBoxMaxHeight;
  }
}

function buildLayoutBoxes(boxes) {
  var layoutBoxes = wrapBoxes(boxes);
  var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  return {
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(bottom),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right),
    horizontal: top.concat(bottom)
  };
}

function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}

function updateDims(chartArea, params, layout) {
  var box = layout.box;
  var maxPadding = chartArea.maxPadding;
  var newWidth, newHeight;

  if (layout.size) {
    // this layout was already counted for, lets first reduce old size
    chartArea[layout.pos] -= layout.size;
  }

  layout.size = layout.horizontal ? box.height : box.width;
  chartArea[layout.pos] += layout.size;

  if (box.getPadding) {
    var boxPadding = box.getPadding();
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
  }

  newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
  newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');

  if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
    chartArea.w = newWidth;
    chartArea.h = newHeight; // return true if chart area changed in layout's direction

    return layout.horizontal ? newWidth !== chartArea.w : newHeight !== chartArea.h;
  }
}

function handleMaxPadding(chartArea) {
  var maxPadding = chartArea.maxPadding;

  function updatePos(pos) {
    var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }

  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}

function getMargins(horizontal, chartArea) {
  var maxPadding = chartArea.maxPadding;

  function marginForPositions(positions) {
    var margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    positions.forEach(function (pos) {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }

  return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
}

function fitBoxes(boxes, chartArea, params) {
  var refitBoxes = [];
  var i, ilen, layout, box, refit, changed;

  for (i = 0, ilen = boxes.length; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));

    if (updateDims(chartArea, params, layout)) {
      changed = true;

      if (refitBoxes.length) {
        // Dimensions changed and there were non full width boxes before this
        // -> we have to refit those
        refit = true;
      }
    }

    if (!box.fullWidth) {
      // fullWidth boxes don't need to be re-fitted in any case
      refitBoxes.push(layout);
    }
  }

  return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
}

function placeBoxes(boxes, chartArea, params) {
  var userPadding = params.padding;
  var x = chartArea.x;
  var y = chartArea.y;
  var i, ilen, layout, box;

  for (i = 0, ilen = boxes.length; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;

    if (layout.horizontal) {
      box.left = box.fullWidth ? userPadding.left : chartArea.left;
      box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
      box.top = y;
      box.bottom = y + box.height;
      box.width = box.right - box.left;
      y = box.bottom;
    } else {
      box.left = x;
      box.right = x + box.width;
      box.top = chartArea.top;
      box.bottom = chartArea.top + chartArea.h;
      box.height = box.bottom - box.top;
      x = box.right;
    }
  }

  chartArea.x = x;
  chartArea.y = y;
}

core_defaults._set('global', {
  layout: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
});
/**
 * @interface ILayoutItem
 * @prop {string} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {function} update - Takes two parameters: width and height. Returns size of item
 * @prop {function} getPadding -  Returns an object with padding on the edges
 * @prop {number} width - Width of item. Must be valid after update()
 * @prop {number} height - Height of item. Must be valid after update()
 * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */
// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.


var core_layouts = {
  defaults: {},

  /**
   * Register a box to a chart.
   * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
   * @param {Chart} chart - the chart to use
   * @param {ILayoutItem} item - the item to add to be layed out
   */
  addBox: function addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    } // initialize item with default values


    item.fullWidth = item.fullWidth || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;

    item._layers = item._layers || function () {
      return [{
        z: 0,
        draw: function draw() {
          item.draw.apply(item, arguments);
        }
      }];
    };

    chart.boxes.push(item);
  },

  /**
   * Remove a layoutItem from a chart
   * @param {Chart} chart - the chart to remove the box from
   * @param {ILayoutItem} layoutItem - the item to remove from the layout
   */
  removeBox: function removeBox(chart, layoutItem) {
    var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;

    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },

  /**
   * Sets (or updates) options on the given `item`.
   * @param {Chart} chart - the chart in which the item lives (or will be added to)
   * @param {ILayoutItem} item - the item to configure with the given options
   * @param {object} options - the new item options.
   */
  configure: function configure(chart, item, options) {
    var props = ['fullWidth', 'position', 'weight'];
    var ilen = props.length;
    var i = 0;
    var prop;

    for (; i < ilen; ++i) {
      prop = props[i];

      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        item[prop] = options[prop];
      }
    }
  },

  /**
   * Fits boxes of the given chart into the given size by having each box measure itself
   * then running a fitting algorithm
   * @param {Chart} chart - the chart
   * @param {number} width - the width to fit into
   * @param {number} height - the height to fit into
   */
  update: function update(chart, width, height) {
    if (!chart) {
      return;
    }

    var layoutOptions = chart.options.layout || {};
    var padding = helpers$1.options.toPadding(layoutOptions.padding);
    var availableWidth = width - padding.width;
    var availableHeight = height - padding.height;
    var boxes = buildLayoutBoxes(chart.boxes);
    var verticalBoxes = boxes.vertical;
    var horizontalBoxes = boxes.horizontal; // Essentially we now have any number of boxes on each of the 4 sides.
    // Our canvas looks like the following.
    // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
    // B1 is the bottom axis
    // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
    // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
    // an error will be thrown.
    //
    // |----------------------------------------------------|
    // |                  T1 (Full Width)                   |
    // |----------------------------------------------------|
    // |    |    |                 T2                  |    |
    // |    |----|-------------------------------------|----|
    // |    |    | C1 |                           | C2 |    |
    // |    |    |----|                           |----|    |
    // |    |    |                                     |    |
    // | L1 | L2 |           ChartArea (C0)            | R1 |
    // |    |    |                                     |    |
    // |    |    |----|                           |----|    |
    // |    |    | C3 |                           | C4 |    |
    // |    |----|-------------------------------------|----|
    // |    |    |                 B1                  |    |
    // |----------------------------------------------------|
    // |                  B2 (Full Width)                   |
    // |----------------------------------------------------|
    //

    var params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding: padding,
      availableWidth: availableWidth,
      vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
      hBoxMaxHeight: availableHeight / 2
    });
    var chartArea = extend({
      maxPadding: extend({}, padding),
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    setLayoutDims(verticalBoxes.concat(horizontalBoxes), params); // First fit vertical boxes

    fitBoxes(verticalBoxes, chartArea, params); // Then fit horizontal boxes

    if (fitBoxes(horizontalBoxes, chartArea, params)) {
      // if the area changed, re-fit vertical boxes
      fitBoxes(verticalBoxes, chartArea, params);
    }

    handleMaxPadding(chartArea); // Finally place the boxes to correct coordinates

    placeBoxes(boxes.leftAndTop, chartArea, params); // Move to opposite side of chart

    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h
    }; // Finally update boxes in chartArea (radial scale for example)

    helpers$1.each(boxes.chartArea, function (layout) {
      var box = layout.box;
      extend(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h);
    });
  }
};

/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */
var platform_basic = {
  acquireContext: function acquireContext(item) {
    if (item && item.canvas) {
      // Support for any object associated to a canvas (including a context2d)
      item = item.canvas;
    }

    return item && item.getContext('2d') || null;
  }
};

var platform_dom = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n";

var platform_dom$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
'default': platform_dom
});

var stylesheet = getCjsExportFromNamespace(platform_dom$1);

var EXPANDO_KEY = '$chartjs';
var CSS_PREFIX = 'chartjs-';
var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];
/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */

var EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {number} Size in pixels or undefined if unknown.
 */

function readUsedSize(element, property) {
  var value = helpers$1.getStyle(element, property);
  var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? Number(matches[1]) : undefined;
}
/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */


function initCanvas(canvas, config) {
  var style = canvas.style; // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
  // returns null or '' if no explicit value has been set to the canvas attribute.

  var renderHeight = canvas.getAttribute('height');
  var renderWidth = canvas.getAttribute('width'); // Chart.js modifies some canvas values that we want to restore on destroy

  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  }; // Force canvas to display as block to avoid extra space caused by inline
  // elements, which would interfere with the responsive resize process.
  // https://github.com/chartjs/Chart.js/issues/2538

  style.display = style.display || 'block';

  if (renderWidth === null || renderWidth === '') {
    var displayWidth = readUsedSize(canvas, 'width');

    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }

  if (renderHeight === null || renderHeight === '') {
    if (canvas.style.height === '') {
      // If no explicit render height and style height, let's apply the aspect ratio,
      // which one can be specified by the user but also by charts as default option
      // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
      canvas.height = canvas.width / (config.options.aspectRatio || 2);
    } else {
      var displayHeight = readUsedSize(canvas, 'height');

      if (displayWidth !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }

  return canvas;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */


var supportsEventListenerOptions = function () {
  var supports = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        supports = true;
      }
    });
    window.addEventListener('e', null, options);
  } catch (e) {// continue regardless of error
  }

  return supports;
}(); // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287


var eventListenerOptions = supportsEventListenerOptions ? {
  passive: true
} : false;

function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}

function removeListener(node, type, listener) {
  node.removeEventListener(type, listener, eventListenerOptions);
}

function createEvent(type, chart, x, y, nativeEvent) {
  return {
    type: type,
    chart: chart,
    "native": nativeEvent || null,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}

function fromNativeEvent(event, chart) {
  var type = EVENT_TYPES[event.type] || event.type;
  var pos = helpers$1.getRelativePosition(event, chart);
  return createEvent(type, chart, pos.x, pos.y, event);
}

function throttled(fn, thisArg) {
  var ticking = false;
  var args = [];
  return function () {
    args = Array.prototype.slice.call(arguments);
    thisArg = thisArg || this;

    if (!ticking) {
      ticking = true;
      helpers$1.requestAnimFrame.call(window, function () {
        ticking = false;
        fn.apply(thisArg, args);
      });
    }
  };
}

function createDiv(cls) {
  var el = document.createElement('div');
  el.className = cls || '';
  return el;
} // Implementation based on https://github.com/marcj/css-element-queries


function createResizer(handler) {
  var maxSize = 1000000; // NOTE(SB) Don't use innerHTML because it could be considered unsafe.
  // https://github.com/chartjs/Chart.js/issues/5902

  var resizer = createDiv(CSS_SIZE_MONITOR);
  var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
  var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');
  expand.appendChild(createDiv());
  shrink.appendChild(createDiv());
  resizer.appendChild(expand);
  resizer.appendChild(shrink);

  resizer._reset = function () {
    expand.scrollLeft = maxSize;
    expand.scrollTop = maxSize;
    shrink.scrollLeft = maxSize;
    shrink.scrollTop = maxSize;
  };

  var onScroll = function onScroll() {
    resizer._reset();

    handler();
  };

  addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
  addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));
  return resizer;
} // https://davidwalsh.name/detect-node-insertion


function watchForRender(node, handler) {
  var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

  var proxy = expando.renderProxy = function (e) {
    if (e.animationName === CSS_RENDER_ANIMATION) {
      handler();
    }
  };

  helpers$1.each(ANIMATION_START_EVENTS, function (type) {
    addListener(node, type, proxy);
  }); // #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
  // is removed then added back immediately (same animation frame?). Accessing the
  // `offsetParent` property will force a reflow and re-evaluate the CSS animation.
  // https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
  // https://github.com/chartjs/Chart.js/issues/4737

  expando.reflow = !!node.offsetParent;
  node.classList.add(CSS_RENDER_MONITOR);
}

function unwatchForRender(node) {
  var expando = node[EXPANDO_KEY] || {};
  var proxy = expando.renderProxy;

  if (proxy) {
    helpers$1.each(ANIMATION_START_EVENTS, function (type) {
      removeListener(node, type, proxy);
    });
    delete expando.renderProxy;
  }

  node.classList.remove(CSS_RENDER_MONITOR);
}

function addResizeListener(node, listener, chart) {
  var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {}); // Let's keep track of this added resizer and thus avoid DOM query when removing it.

  var resizer = expando.resizer = createResizer(throttled(function () {
    if (expando.resizer) {
      var container = chart.options.maintainAspectRatio && node.parentNode;
      var w = container ? container.clientWidth : 0;
      listener(createEvent('resize', chart));

      if (container && container.clientWidth < w && chart.canvas) {
        // If the container size shrank during chart resize, let's assume
        // scrollbar appeared. So we resize again with the scrollbar visible -
        // effectively making chart smaller and the scrollbar hidden again.
        // Because we are inside `throttled`, and currently `ticking`, scroll
        // events are ignored during this whole 2 resize process.
        // If we assumed wrong and something else happened, we are resizing
        // twice in a frame (potential performance issue)
        listener(createEvent('resize', chart));
      }
    }
  })); // The resizer needs to be attached to the node parent, so we first need to be
  // sure that `node` is attached to the DOM before injecting the resizer element.

  watchForRender(node, function () {
    if (expando.resizer) {
      var container = node.parentNode;

      if (container && container !== resizer.parentNode) {
        container.insertBefore(resizer, container.firstChild);
      } // The container size might have changed, let's reset the resizer state.


      resizer._reset();
    }
  });
}

function removeResizeListener(node) {
  var expando = node[EXPANDO_KEY] || {};
  var resizer = expando.resizer;
  delete expando.resizer;
  unwatchForRender(node);

  if (resizer && resizer.parentNode) {
    resizer.parentNode.removeChild(resizer);
  }
}
/**
 * Injects CSS styles inline if the styles are not already present.
 * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
 * @param {string} css - the CSS to be injected.
 */


function injectCSS(rootNode, css) {
  // https://stackoverflow.com/q/3922139
  var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});

  if (!expando.containsStyles) {
    expando.containsStyles = true;
    css = '/* Chart.js */\n' + css;
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.appendChild(document.createTextNode(css));
    rootNode.appendChild(style);
  }
}

var platform_dom$2 = {
  /**
   * When `true`, prevents the automatic injection of the stylesheet required to
   * correctly detect when the chart is added to the DOM and then resized. This
   * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
   * to be manually imported to make this library compatible with any CSP.
   * See https://github.com/chartjs/Chart.js/issues/5208
   */
  disableCSSInjection: false,

  /**
   * This property holds whether this platform is enabled for the current environment.
   * Currently used by platform.js to select the proper implementation.
   * @private
   */
  _enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

  /**
   * Initializes resources that depend on platform options.
   * @param {HTMLCanvasElement} canvas - The Canvas element.
   * @private
   */
  _ensureLoaded: function _ensureLoaded(canvas) {
    if (!this.disableCSSInjection) {
      // If the canvas is in a shadow DOM, then the styles must also be inserted
      // into the same shadow DOM.
      // https://github.com/chartjs/Chart.js/issues/5763
      var root = canvas.getRootNode ? canvas.getRootNode() : document;
      var targetNode = root.host ? root : document.head;
      injectCSS(targetNode, stylesheet);
    }
  },
  acquireContext: function acquireContext(item, config) {
    if (typeof item === 'string') {
      item = document.getElementById(item);
    } else if (item.length) {
      // Support for array based queries (such as jQuery)
      item = item[0];
    }

    if (item && item.canvas) {
      // Support for any object associated to a canvas (including a context2d)
      item = item.canvas;
    } // To prevent canvas fingerprinting, some add-ons undefine the getContext
    // method, for example: https://github.com/kkapsner/CanvasBlocker
    // https://github.com/chartjs/Chart.js/issues/2807


    var context = item && item.getContext && item.getContext('2d'); // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
    // inside an iframe or when running in a protected environment. We could guess the
    // types from their toString() value but let's keep things flexible and assume it's
    // a sufficient condition if the item has a context2D which has item as `canvas`.
    // https://github.com/chartjs/Chart.js/issues/3887
    // https://github.com/chartjs/Chart.js/issues/4102
    // https://github.com/chartjs/Chart.js/issues/4152

    if (context && context.canvas === item) {
      // Load platform resources on first chart creation, to make it possible to
      // import the library before setting platform options.
      this._ensureLoaded(item);

      initCanvas(item, config);
      return context;
    }

    return null;
  },
  releaseContext: function releaseContext(context) {
    var canvas = context.canvas;

    if (!canvas[EXPANDO_KEY]) {
      return;
    }

    var initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach(function (prop) {
      var value = initial[prop];

      if (helpers$1.isNullOrUndef(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    helpers$1.each(initial.style || {}, function (value, key) {
      canvas.style[key] = value;
    }); // The canvas render size might have been changed (and thus the state stack discarded),
    // we can't use save() and restore() to restore the initial state. So make sure that at
    // least the canvas context is reset to the default state by setting the canvas width.
    // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
    // eslint-disable-next-line no-self-assign

    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
  },
  addEventListener: function addEventListener(chart, type, listener) {
    var canvas = chart.canvas;

    if (type === 'resize') {
      // Note: the resize event is not supported on all browsers.
      addResizeListener(canvas, listener, chart);
      return;
    }

    var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
    var proxies = expando.proxies || (expando.proxies = {});

    var proxy = proxies[chart.id + '_' + type] = function (event) {
      listener(fromNativeEvent(event, chart));
    };

    addListener(canvas, type, proxy);
  },
  removeEventListener: function removeEventListener(chart, type, listener) {
    var canvas = chart.canvas;

    if (type === 'resize') {
      // Note: the resize event is not supported on all browsers.
      removeResizeListener(canvas);
      return;
    }

    var expando = listener[EXPANDO_KEY] || {};
    var proxies = expando.proxies || {};
    var proxy = proxies[chart.id + '_' + type];

    if (!proxy) {
      return;
    }

    removeListener(canvas, type, proxy);
  }
};

var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;
/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */

var platform = helpers$1.extend({
  /**
   * @since 2.7.0
   */
  initialize: function initialize() {},

  /**
   * Called at chart construction time, returns a context2d instance implementing
   * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
   * @param {*} item - The native item from which to acquire context (platform specific)
   * @param {object} options - The chart options
   * @returns {CanvasRenderingContext2D} context2d instance
   */
  acquireContext: function acquireContext() {},

  /**
   * Called at chart destruction time, releases any resources associated to the context
   * previously returned by the acquireContext() method.
   * @param {CanvasRenderingContext2D} context - The context2d instance
   * @returns {boolean} true if the method succeeded, else false
   */
  releaseContext: function releaseContext() {},

  /**
   * Registers the specified listener on the given chart.
   * @param {Chart} chart - Chart from which to listen for event
   * @param {string} type - The ({@link IEvent}) type to listen for
   * @param {function} listener - Receives a notification (an object that implements
   * the {@link IEvent} interface) when an event of the specified type occurs.
   */
  addEventListener: function addEventListener() {},

  /**
   * Removes the specified listener previously registered with addEventListener.
   * @param {Chart} chart - Chart from which to remove the listener
   * @param {string} type - The ({@link IEvent}) type to remove
   * @param {function} listener - The listener function to remove from the event target.
   */
  removeEventListener: function removeEventListener() {}
}, implementation);

core_defaults._set('global', {
  plugins: {}
});
/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */


var core_plugins = {
  /**
   * Globally registered plugins.
   * @private
   */
  _plugins: [],

  /**
   * This identifier is used to invalidate the descriptors cache attached to each chart
   * when a global plugin is registered or unregistered. In this case, the cache ID is
   * incremented and descriptors are regenerated during following API calls.
   * @private
   */
  _cacheId: 0,

  /**
   * Registers the given plugin(s) if not already registered.
   * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
   */
  register: function register(plugins) {
    var p = this._plugins;
    [].concat(plugins).forEach(function (plugin) {
      if (p.indexOf(plugin) === -1) {
        p.push(plugin);
      }
    });
    this._cacheId++;
  },

  /**
   * Unregisters the given plugin(s) only if registered.
   * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
   */
  unregister: function unregister(plugins) {
    var p = this._plugins;
    [].concat(plugins).forEach(function (plugin) {
      var idx = p.indexOf(plugin);

      if (idx !== -1) {
        p.splice(idx, 1);
      }
    });
    this._cacheId++;
  },

  /**
   * Remove all registered plugins.
   * @since 2.1.5
   */
  clear: function clear() {
    this._plugins = [];
    this._cacheId++;
  },

  /**
   * Returns the number of registered plugins?
   * @returns {number}
   * @since 2.1.5
   */
  count: function count() {
    return this._plugins.length;
  },

  /**
   * Returns all registered plugin instances.
   * @returns {IPlugin[]} array of plugin objects.
   * @since 2.1.5
   */
  getAll: function getAll() {
    return this._plugins;
  },

  /**
   * Calls enabled plugins for `chart` on the specified hook and with the given args.
   * This method immediately returns as soon as a plugin explicitly returns false. The
   * returned value can be used, for instance, to interrupt the current action.
   * @param {Chart} chart - The chart instance for which plugins should be called.
   * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
   * @param {Array} [args] - Extra arguments to apply to the hook call.
   * @returns {boolean} false if any of the plugins return false, else returns true.
   */
  notify: function notify(chart, hook, args) {
    var descriptors = this.descriptors(chart);
    var ilen = descriptors.length;
    var i, descriptor, plugin, params, method;

    for (i = 0; i < ilen; ++i) {
      descriptor = descriptors[i];
      plugin = descriptor.plugin;
      method = plugin[hook];

      if (typeof method === 'function') {
        params = [chart].concat(args || []);
        params.push(descriptor.options);

        if (method.apply(plugin, params) === false) {
          return false;
        }
      }
    }

    return true;
  },

  /**
   * Returns descriptors of enabled plugins for the given chart.
   * @returns {object[]} [{ plugin, options }]
   * @private
   */
  descriptors: function descriptors(chart) {
    var cache = chart.$plugins || (chart.$plugins = {});

    if (cache.id === this._cacheId) {
      return cache.descriptors;
    }

    var plugins = [];
    var descriptors = [];
    var config = chart && chart.config || {};
    var options = config.options && config.options.plugins || {};

    this._plugins.concat(config.plugins || []).forEach(function (plugin) {
      var idx = plugins.indexOf(plugin);

      if (idx !== -1) {
        return;
      }

      var id = plugin.id;
      var opts = options[id];

      if (opts === false) {
        return;
      }

      if (opts === true) {
        opts = helpers$1.clone(core_defaults.global.plugins[id]);
      }

      plugins.push(plugin);
      descriptors.push({
        plugin: plugin,
        options: opts || {}
      });
    });

    cache.descriptors = descriptors;
    cache.id = this._cacheId;
    return descriptors;
  },

  /**
   * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
   * but in some cases, this reference can be changed by the user when updating options.
   * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
   * @private
   */
  _invalidate: function _invalidate(chart) {
    delete chart.$plugins;
  }
};

var core_scaleService = {
  // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
  // use the new chart options to grab the correct scale
  constructors: {},
  // Use a registration function so that we can move to an ES6 map when we no longer need to support
  // old browsers
  // Scale config defaults
  defaults: {},
  registerScaleType: function registerScaleType(type, scaleConstructor, scaleDefaults) {
    this.constructors[type] = scaleConstructor;
    this.defaults[type] = helpers$1.clone(scaleDefaults);
  },
  getScaleConstructor: function getScaleConstructor(type) {
    return Object.prototype.hasOwnProperty.call(this.constructors, type) ? this.constructors[type] : undefined;
  },
  getScaleDefaults: function getScaleDefaults(type) {
    // Return the scale defaults merged with the global settings so that we always use the latest ones
    return Object.prototype.hasOwnProperty.call(this.defaults, type) ? helpers$1.merge({}, [core_defaults.scale, this.defaults[type]]) : {};
  },
  updateScaleDefaults: function updateScaleDefaults(type, additions) {
    var me = this;

    if (Object.prototype.hasOwnProperty.call(me.defaults, type)) {
      me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
    }
  },
  addScalesToLayout: function addScalesToLayout(chart) {
    // Adds each scale to the chart.boxes array to be sized accordingly
    helpers$1.each(chart.scales, function (scale) {
      // Set ILayoutItem parameters for backwards compatibility
      scale.fullWidth = scale.options.fullWidth;
      scale.position = scale.options.position;
      scale.weight = scale.options.weight;
      core_layouts.addBox(chart, scale);
    });
  }
};

var valueOrDefault$6 = helpers$1.valueOrDefault;
var getRtlHelper = helpers$1.rtl.getRtlAdapter;

core_defaults._set('global', {
  tooltips: {
    enabled: true,
    custom: null,
    mode: 'nearest',
    position: 'average',
    intersect: true,
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleFontStyle: 'bold',
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleFontColor: '#fff',
    titleAlign: 'left',
    bodySpacing: 2,
    bodyFontColor: '#fff',
    bodyAlign: 'left',
    footerFontStyle: 'bold',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFontColor: '#fff',
    footerAlign: 'left',
    yPadding: 6,
    xPadding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    multiKeyBackground: '#fff',
    displayColors: true,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    callbacks: {
      // Args are: (tooltipItems, data)
      beforeTitle: helpers$1.noop,
      title: function title(tooltipItems, data) {
        var title = '';
        var labels = data.labels;
        var labelCount = labels ? labels.length : 0;

        if (tooltipItems.length > 0) {
          var item = tooltipItems[0];

          if (item.label) {
            title = item.label;
          } else if (labelCount > 0 && item.index < labelCount) {
            title = labels[item.index];
          }
        }

        return title;
      },
      afterTitle: helpers$1.noop,
      // Args are: (tooltipItems, data)
      beforeBody: helpers$1.noop,
      // Args are: (tooltipItem, data)
      beforeLabel: helpers$1.noop,
      label: function label(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';

        if (label) {
          label += ': ';
        }

        if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
          label += tooltipItem.value;
        }

        return label;
      },
      labelColor: function labelColor(tooltipItem, chart) {
        var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
        var activeElement = meta.data[tooltipItem.index];
        var view = activeElement.$previousStyle || activeElement._view;
        return {
          borderColor: view.borderColor,
          backgroundColor: view.backgroundColor
        };
      },
      labelTextColor: function labelTextColor() {
        return this._options.bodyFontColor;
      },
      afterLabel: helpers$1.noop,
      // Args are: (tooltipItems, data)
      afterBody: helpers$1.noop,
      // Args are: (tooltipItems, data)
      beforeFooter: helpers$1.noop,
      footer: helpers$1.noop,
      afterFooter: helpers$1.noop
    }
  }
});

var positioners = {
  /**
   * Average mode places the tooltip at the average position of the elements shown
   * @function Chart.Tooltip.positioners.average
   * @param elements {ChartElement[]} the elements being displayed in the tooltip
   * @returns {object} tooltip position
   */
  average: function average(elements) {
    if (!elements.length) {
      return false;
    }

    var i, len;
    var x = 0;
    var y = 0;
    var count = 0;

    for (i = 0, len = elements.length; i < len; ++i) {
      var el = elements[i].element;

      if (el && el.hasValue()) {
        var pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }

    return {
      x: x / count,
      y: y / count
    };
  },

  /**
   * Gets the tooltip position nearest of the item nearest to the event position
   * @function Chart.Tooltip.positioners.nearest
   * @param elements {Chart.Element[]} the tooltip elements
   * @param eventPosition {object} the position of the event in canvas coordinates
   * @returns {object} the tooltip position
   */
  nearest: function nearest(elements, eventPosition) {
    var x = eventPosition.x;
    var y = eventPosition.y;
    var minDistance = Number.POSITIVE_INFINITY;
    var i, len, nearestElement;

    for (i = 0, len = elements.length; i < len; ++i) {
      var el = elements[i].element;

      if (el && el.hasValue()) {
        var center = el.getCenterPoint();
        var d = helpers$1.distanceBetweenPoints(eventPosition, center);

        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }

    if (nearestElement) {
      var tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }

    return {
      x: x,
      y: y
    };
  }
}; // Helper to push or concat based on if the 2nd parameter is an array or not

function pushOrConcat(base, toPush) {
  if (toPush) {
    if (helpers$1.isArray(toPush)) {
      // base = base.concat(toPush);
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }

  return base;
}
/**
 * Returns array of strings split by newline
 * @param {string} value - The value to split by newline.
 * @returns {string[]} value if newline present - Returned from String split() method
 * @function
 */


function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }

  return str;
}
/**
 * Private helper to create a tooltip item model
 * @param item - the chart element (point, arc, bar) to create the tooltip item for
 * @return new tooltip item
 */


function createTooltipItem(chart, item) {
  var datasetIndex = item.datasetIndex,
      element = item.element,
      index = item.index;

  var _chart$getDatasetMeta = chart.getDatasetMeta(datasetIndex).controller._getLabelAndValue(index),
      label = _chart$getDatasetMeta.label,
      value = _chart$getDatasetMeta.value;

  return {
    label: label,
    value: value,
    index: index,
    datasetIndex: datasetIndex,
    x: element._model.x,
    y: element._model.y
  };
}
/**
 * Helper to get the reset model for the tooltip
 * @param tooltipOpts {object} the tooltip options
 */


function getBaseModel(tooltipOpts) {
  var globalDefaults = core_defaults.global;
  return {
    // Positioning
    xPadding: tooltipOpts.xPadding,
    yPadding: tooltipOpts.yPadding,
    xAlign: tooltipOpts.xAlign,
    yAlign: tooltipOpts.yAlign,
    // Drawing direction and text direction
    rtl: tooltipOpts.rtl,
    textDirection: tooltipOpts.textDirection,
    // Body
    bodyFontColor: tooltipOpts.bodyFontColor,
    _bodyFontFamily: valueOrDefault$6(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
    _bodyFontStyle: valueOrDefault$6(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
    _bodyAlign: tooltipOpts.bodyAlign,
    bodyFontSize: valueOrDefault$6(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
    bodySpacing: tooltipOpts.bodySpacing,
    // Title
    titleFontColor: tooltipOpts.titleFontColor,
    _titleFontFamily: valueOrDefault$6(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
    _titleFontStyle: valueOrDefault$6(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
    titleFontSize: valueOrDefault$6(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
    _titleAlign: tooltipOpts.titleAlign,
    titleSpacing: tooltipOpts.titleSpacing,
    titleMarginBottom: tooltipOpts.titleMarginBottom,
    // Footer
    footerFontColor: tooltipOpts.footerFontColor,
    _footerFontFamily: valueOrDefault$6(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
    _footerFontStyle: valueOrDefault$6(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
    footerFontSize: valueOrDefault$6(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
    _footerAlign: tooltipOpts.footerAlign,
    footerSpacing: tooltipOpts.footerSpacing,
    footerMarginTop: tooltipOpts.footerMarginTop,
    // Appearance
    caretSize: tooltipOpts.caretSize,
    cornerRadius: tooltipOpts.cornerRadius,
    backgroundColor: tooltipOpts.backgroundColor,
    opacity: 0,
    legendColorBackground: tooltipOpts.multiKeyBackground,
    displayColors: tooltipOpts.displayColors,
    borderColor: tooltipOpts.borderColor,
    borderWidth: tooltipOpts.borderWidth
  };
}
/**
 * Get the size of the tooltip
 */


function getTooltipSize(tooltip, model) {
  var ctx = tooltip._chart.ctx;
  var height = model.yPadding * 2; // Tooltip Padding

  var width = 0; // Count of all lines in the body

  var body = model.body;
  var combinedBodyLength = body.reduce(function (count, bodyItem) {
    return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
  }, 0);
  combinedBodyLength += model.beforeBody.length + model.afterBody.length;
  var titleLineCount = model.title.length;
  var footerLineCount = model.footer.length;
  var titleFontSize = model.titleFontSize;
  var bodyFontSize = model.bodyFontSize;
  var footerFontSize = model.footerFontSize;
  height += titleLineCount * titleFontSize; // Title Lines

  height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing

  height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin

  height += combinedBodyLength * bodyFontSize; // Body Lines

  height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing

  height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin

  height += footerLineCount * footerFontSize; // Footer Lines

  height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
  // Title width

  var widthPadding = 0;

  var maxLineWidth = function maxLineWidth(line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };

  ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
  helpers$1.each(model.title, maxLineWidth); // Body width

  ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
  helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth); // Body lines may include some extra width due to the color box

  widthPadding = model.displayColors ? bodyFontSize + 2 : 0;
  helpers$1.each(body, function (bodyItem) {
    helpers$1.each(bodyItem.before, maxLineWidth);
    helpers$1.each(bodyItem.lines, maxLineWidth);
    helpers$1.each(bodyItem.after, maxLineWidth);
  }); // Reset back to 0

  widthPadding = 0; // Footer width

  ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
  helpers$1.each(model.footer, maxLineWidth); // Add padding

  width += 2 * model.xPadding;
  return {
    width: width,
    height: height
  };
}
/**
 * Helper to get the alignment of a tooltip given the size
 */


function determineAlignment(tooltip, size) {
  var model = tooltip._model;
  var chart = tooltip._chart;
  var chartArea = chart.chartArea;
  var xAlign = 'center';
  var yAlign = 'center';

  if (model.y < size.height) {
    yAlign = 'top';
  } else if (model.y > chart.height - size.height) {
    yAlign = 'bottom';
  }

  var lf, rf; // functions to determine left, right alignment

  var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart

  var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges

  var midX = (chartArea.left + chartArea.right) / 2;
  var midY = (chartArea.top + chartArea.bottom) / 2;

  if (yAlign === 'center') {
    lf = function lf(x) {
      return x <= midX;
    };

    rf = function rf(x) {
      return x > midX;
    };
  } else {
    lf = function lf(x) {
      return x <= size.width / 2;
    };

    rf = function rf(x) {
      return x >= chart.width - size.width / 2;
    };
  }

  olf = function olf(x) {
    return x + size.width + model.caretSize + model.caretPadding > chart.width;
  };

  orf = function orf(x) {
    return x - size.width - model.caretSize - model.caretPadding < 0;
  };

  yf = function yf(y) {
    return y <= midY ? 'top' : 'bottom';
  };

  if (lf(model.x)) {
    xAlign = 'left'; // Is tooltip too wide and goes over the right side of the chart.?

    if (olf(model.x)) {
      xAlign = 'center';
      yAlign = yf(model.y);
    }
  } else if (rf(model.x)) {
    xAlign = 'right'; // Is tooltip too wide and goes outside left edge of canvas?

    if (orf(model.x)) {
      xAlign = 'center';
      yAlign = yf(model.y);
    }
  }

  var opts = tooltip._options;
  return {
    xAlign: opts.xAlign ? opts.xAlign : xAlign,
    yAlign: opts.yAlign ? opts.yAlign : yAlign
  };
}
/**
 * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
 */


function getBackgroundPoint(vm, size, alignment, chart) {
  // Background Position
  var x = vm.x;
  var y = vm.y;
  var caretSize = vm.caretSize;
  var caretPadding = vm.caretPadding;
  var cornerRadius = vm.cornerRadius;
  var xAlign = alignment.xAlign;
  var yAlign = alignment.yAlign;
  var paddingAndSize = caretSize + caretPadding;
  var radiusAndPadding = cornerRadius + caretPadding;

  if (xAlign === 'right') {
    x -= size.width;
  } else if (xAlign === 'center') {
    x -= size.width / 2;

    if (x + size.width > chart.width) {
      x = chart.width - size.width;
    }

    if (x < 0) {
      x = 0;
    }
  }

  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= size.height + paddingAndSize;
  } else {
    y -= size.height / 2;
  }

  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= radiusAndPadding;
  } else if (xAlign === 'right') {
    x += radiusAndPadding;
  }

  return {
    x: x,
    y: y
  };
}

function getAlignedX(vm, align) {
  return align === 'center' ? vm.x + vm.width / 2 : align === 'right' ? vm.x + vm.width - vm.xPadding : vm.x + vm.xPadding;
}
/**
 * Helper to build before and after body lines
 */


function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}

var Tooltip =
/*#__PURE__*/
function (_Element) {
  _inherits(Tooltip, _Element);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "initialize",
    value: function initialize() {
      var me = this;
      me._model = getBaseModel(me._options);
      me._view = {};
      me._lastActive = [];
    }
  }, {
    key: "transition",
    value: function transition(easingValue) {
      var me = this;
      var options = me._options;

      if (me._lastEvent && me._chart.animating) {
        // Let's react to changes during animation
        me._active = me._chart.getElementsAtEventForMode(me._lastEvent, options.mode, options);
        me.update(true);
        me.pivot();
        me._lastActive = me.active;
      }

      core_element.prototype.transition.call(me, easingValue);
    } // Get the title
    // Args are: (tooltipItem, data)

  }, {
    key: "getTitle",
    value: function getTitle() {
      var me = this;
      var opts = me._options;
      var callbacks = opts.callbacks;
      var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
      var title = callbacks.title.apply(me, arguments);
      var afterTitle = callbacks.afterTitle.apply(me, arguments);
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    } // Args are: (tooltipItem, data)

  }, {
    key: "getBeforeBody",
    value: function getBeforeBody() {
      return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
    } // Args are: (tooltipItem, data)

  }, {
    key: "getBody",
    value: function getBody(tooltipItems, data) {
      var me = this;
      var callbacks = me._options.callbacks;
      var bodyItems = [];
      helpers$1.each(tooltipItems, function (tooltipItem) {
        var bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
        pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
        pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    } // Args are: (tooltipItem, data)

  }, {
    key: "getAfterBody",
    value: function getAfterBody() {
      return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
    } // Get the footer and beforeFooter and afterFooter lines
    // Args are: (tooltipItem, data)

  }, {
    key: "getFooter",
    value: function getFooter() {
      var me = this;
      var callbacks = me._options.callbacks;
      var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
      var footer = callbacks.footer.apply(me, arguments);
      var afterFooter = callbacks.afterFooter.apply(me, arguments);
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    }
  }, {
    key: "update",
    value: function update(changed) {
      var me = this;
      var opts = me._options; // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
      // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
      // which breaks any animations.

      var existingModel = me._model;
      var model = me._model = getBaseModel(opts);
      var active = me._active;
      var data = me._data; // In the case where active.length === 0 we need to keep these at existing values for good animations

      var alignment = {
        xAlign: existingModel.xAlign,
        yAlign: existingModel.yAlign
      };
      var backgroundPoint = {
        x: existingModel.x,
        y: existingModel.y
      };
      var tooltipSize = {
        width: existingModel.width,
        height: existingModel.height
      };
      var tooltipPosition = {
        x: existingModel.caretX,
        y: existingModel.caretY
      };
      var i, len;

      if (active.length) {
        model.opacity = 1;
        var labelColors = [];
        var labelTextColors = [];
        tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);
        var tooltipItems = [];

        for (i = 0, len = active.length; i < len; ++i) {
          tooltipItems.push(createTooltipItem(me._chart, active[i]));
        } // If the user provided a filter function, use it to modify the tooltip items


        if (opts.filter) {
          tooltipItems = tooltipItems.filter(function (a) {
            return opts.filter(a, data);
          });
        } // If the user provided a sorting function, use it to modify the tooltip items


        if (opts.itemSort) {
          tooltipItems = tooltipItems.sort(function (a, b) {
            return opts.itemSort(a, b, data);
          });
        } // Determine colors for boxes


        helpers$1.each(tooltipItems, function (tooltipItem) {
          labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
          labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
        }); // Build the Text Lines

        model.title = me.getTitle(tooltipItems, data);
        model.beforeBody = me.getBeforeBody(tooltipItems, data);
        model.body = me.getBody(tooltipItems, data);
        model.afterBody = me.getAfterBody(tooltipItems, data);
        model.footer = me.getFooter(tooltipItems, data); // Initial positioning and colors

        model.x = tooltipPosition.x;
        model.y = tooltipPosition.y;
        model.caretPadding = opts.caretPadding;
        model.labelColors = labelColors;
        model.labelTextColors = labelTextColors; // data points

        model.dataPoints = tooltipItems; // We need to determine alignment of the tooltip

        tooltipSize = getTooltipSize(this, model);
        alignment = determineAlignment(this, tooltipSize); // Final Size and Position

        backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
      } else {
        model.opacity = 0;
      }

      model.xAlign = alignment.xAlign;
      model.yAlign = alignment.yAlign;
      model.x = backgroundPoint.x;
      model.y = backgroundPoint.y;
      model.width = tooltipSize.width;
      model.height = tooltipSize.height; // Point where the caret on the tooltip points to

      model.caretX = tooltipPosition.x;
      model.caretY = tooltipPosition.y;
      me._model = model;

      if (changed && opts.custom) {
        opts.custom.call(me, model);
      }

      return me;
    }
  }, {
    key: "drawCaret",
    value: function drawCaret(tooltipPoint, size) {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
  }, {
    key: "getCaretPosition",
    value: function getCaretPosition(tooltipPoint, size, vm) {
      var x1, x2, x3, y1, y2, y3;
      var caretSize = vm.caretSize;
      var cornerRadius = vm.cornerRadius;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var ptX = tooltipPoint.x;
      var ptY = tooltipPoint.y;
      var width = size.width;
      var height = size.height;

      if (yAlign === 'center') {
        y2 = ptY + height / 2;

        if (xAlign === 'left') {
          x1 = ptX;
          x2 = x1 - caretSize;
          x3 = x1;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          x3 = x1;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
      } else {
        if (xAlign === 'left') {
          x2 = ptX + cornerRadius + caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else if (xAlign === 'right') {
          x2 = ptX + width - cornerRadius - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          x2 = vm.caretX;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        }

        if (yAlign === 'top') {
          y1 = ptY;
          y2 = y1 - caretSize;
          y3 = y1;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          y3 = y1; // invert drawing order

          var tmp = x3;
          x3 = x1;
          x1 = tmp;
        }
      }

      return {
        x1: x1,
        x2: x2,
        x3: x3,
        y1: y1,
        y2: y2,
        y3: y3
      };
    }
  }, {
    key: "drawTitle",
    value: function drawTitle(pt, vm, ctx) {
      var title = vm.title;
      var length = title.length;
      var titleFontSize, titleSpacing, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
        pt.x = getAlignedX(vm, vm._titleAlign);
        ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
        ctx.textBaseline = 'middle';
        titleFontSize = vm.titleFontSize;
        titleSpacing = vm.titleSpacing;
        ctx.fillStyle = vm.titleFontColor;
        ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

        for (i = 0; i < length; ++i) {
          ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
          pt.y += titleFontSize + titleSpacing; // Line Height and spacing

          if (i + 1 === length) {
            pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
          }
        }
      }
    }
  }, {
    key: "drawBody",
    value: function drawBody(pt, vm, ctx) {
      var bodyFontSize = vm.bodyFontSize;
      var bodySpacing = vm.bodySpacing;
      var bodyAlign = vm._bodyAlign;
      var body = vm.body;
      var drawColorBoxes = vm.displayColors;
      var xLinePadding = 0;
      var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
      var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

      var fillLineOfText = function fillLineOfText(line) {
        ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
        pt.y += bodyFontSize + bodySpacing;
      };

      var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
      var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = 'middle';
      ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
      pt.x = getAlignedX(vm, bodyAlignForCalculation); // Before body lines

      ctx.fillStyle = vm.bodyFontColor;
      helpers$1.each(vm.beforeBody, fillLineOfText);
      xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? bodyFontSize / 2 + 1 : bodyFontSize + 2 : 0; // Draw body lines now

      for (i = 0, ilen = body.length; i < ilen; ++i) {
        bodyItem = body[i];
        textColor = vm.labelTextColors[i];
        labelColors = vm.labelColors[i];
        ctx.fillStyle = textColor;
        helpers$1.each(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;

        for (j = 0, jlen = lines.length; j < jlen; ++j) {
          // Draw Legend-like boxes if needed
          if (drawColorBoxes) {
            var rtlColorX = rtlHelper.x(colorX); // Fill a white rect so that colours merge nicely if the opacity is < 1

            ctx.fillStyle = vm.legendColorBackground;
            ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Border

            ctx.lineWidth = 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Inner square

            ctx.fillStyle = labelColors.backgroundColor;
            ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
            ctx.fillStyle = textColor;
          }

          fillLineOfText(lines[j]);
        }

        helpers$1.each(bodyItem.after, fillLineOfText);
      } // Reset back to 0 for after body


      xLinePadding = 0; // After body lines

      helpers$1.each(vm.afterBody, fillLineOfText);
      pt.y -= bodySpacing; // Remove last body spacing
    }
  }, {
    key: "drawFooter",
    value: function drawFooter(pt, vm, ctx) {
      var footer = vm.footer;
      var length = footer.length;
      var footerFontSize, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
        pt.x = getAlignedX(vm, vm._footerAlign);
        pt.y += vm.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
        ctx.textBaseline = 'middle';
        footerFontSize = vm.footerFontSize;
        ctx.fillStyle = vm.footerFontColor;
        ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

        for (i = 0; i < length; ++i) {
          ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
          pt.y += footerFontSize + vm.footerSpacing;
        }
      }
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(pt, vm, ctx, tooltipSize) {
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var x = pt.x;
      var y = pt.y;
      var width = tooltipSize.width;
      var height = tooltipSize.height;
      var radius = vm.cornerRadius;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);

      if (yAlign === 'top') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

      if (yAlign === 'center' && xAlign === 'right') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

      if (yAlign === 'bottom') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

      if (yAlign === 'center' && xAlign === 'left') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();

      if (vm.borderWidth > 0) {
        ctx.stroke();
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this._chart.ctx;
      var vm = this._view;

      if (vm.opacity === 0) {
        return;
      }

      var tooltipSize = {
        width: vm.width,
        height: vm.height
      };
      var pt = {
        x: vm.x,
        y: vm.y
      }; // IE11/Edge does not like very small opacities, so snap to 0

      var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity; // Truthy/falsey value for empty tooltip

      var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

      if (this._options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity; // Draw Background

        this.drawBackground(pt, vm, ctx, tooltipSize); // Draw Title, Body, and Footer

        pt.y += vm.yPadding;
        helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection); // Titles

        this.drawTitle(pt, vm, ctx); // Body

        this.drawBody(pt, vm, ctx); // Footer

        this.drawFooter(pt, vm, ctx);
        helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);
        ctx.restore();
      }
    }
    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     * @returns {boolean} true if the tooltip changed
     */

  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      var me = this;
      var options = me._options;
      var changed = false;
      me._lastActive = me._lastActive || []; // Find Active Elements for tooltips

      if (e.type === 'mouseout') {
        me._active = [];
        me._lastEvent = null;
      } else {
        me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);

        if (e.type !== 'click') {
          me._lastEvent = e.type === 'click' ? null : e;
        }

        if (options.reverse) {
          me._active.reverse();
        }
      } // Remember Last Actives


      changed = !helpers$1._elementsEqual(me._active, me._lastActive); // Only handle target event on tooltip change

      if (changed) {
        me._lastActive = me._active;

        if (options.enabled || options.custom) {
          me._eventPosition = {
            x: e.x,
            y: e.y
          };
          me.update(true);
          me.pivot();
        }
      }

      return changed;
    }
  }]);

  return Tooltip;
}(core_element);
/**
 * @namespace Chart.Tooltip.positioners
 */


Tooltip.positioners = positioners;
var core_tooltip = Tooltip;

var valueOrDefault$7 = helpers$1.valueOrDefault;

core_defaults._set('global', {
  elements: {},
  events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
  hover: {
    onHover: null,
    mode: 'nearest',
    intersect: true,
    animationDuration: 400
  },
  onClick: null,
  maintainAspectRatio: true,
  responsive: true,
  responsiveAnimationDuration: 0
});
/**
 * Recursively merge the given config objects representing the `scales` option
 * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
 * returns a deep copy of the result, thus doesn't alter inputs.
 */


function mergeScaleConfig()
/* config objects ... */
{
  return helpers$1.merge({}, [].slice.call(arguments), {
    merger: function merger(key, target, source, options) {
      if (key === 'xAxes' || key === 'yAxes') {
        var slen = source[key].length;
        var i, type, scale;

        if (!target[key]) {
          target[key] = [];
        }

        for (i = 0; i < slen; ++i) {
          scale = source[key][i];
          type = valueOrDefault$7(scale.type, key === 'xAxes' ? 'category' : 'linear');

          if (i >= target[key].length) {
            target[key].push({});
          }

          if (!target[key][i].type || scale.type && scale.type !== target[key][i].type) {
            // new/untyped scale or type changed: let's apply the new defaults
            // then merge source scale to correctly overwrite the defaults.
            helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
          } else {
            // scales type are the same
            helpers$1.merge(target[key][i], scale);
          }
        }
      } else {
        helpers$1._merger(key, target, source, options);
      }
    }
  });
}
/**
 * Recursively merge the given config objects as the root options by handling
 * default scale options for the `scales` and `scale` properties, then returns
 * a deep copy of the result, thus doesn't alter inputs.
 */


function mergeConfig()
/* config objects ... */
{
  return helpers$1.merge({}, [].slice.call(arguments), {
    merger: function merger(key, target, source, options) {
      var tval = target[key] || {};
      var sval = source[key];

      if (key === 'scales') {
        // scale config merging is complex. Add our own function here for that
        target[key] = mergeScaleConfig(tval, sval);
      } else if (key === 'scale') {
        // used in polar area & radar charts since there is only one scale
        target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
      } else {
        helpers$1._merger(key, target, source, options);
      }
    }
  });
}

function initConfig(config) {
  config = config || {}; // Do NOT use mergeConfig for the data object because this method merges arrays
  // and so would change references to labels and datasets, preventing data updates.

  var data = config.data = config.data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  config.options = mergeConfig(core_defaults.global, core_defaults[config.type], config.options || {});
  return config;
}

function isAnimationDisabled(config) {
  return !config.animation || !(config.animation.duration || config.hover && config.hover.animationDuration || config.responsiveAnimationDuration);
}

function updateConfig(chart) {
  var newOptions = chart.options;
  helpers$1.each(chart.scales, function (scale) {
    core_layouts.removeBox(chart, scale);
  });
  newOptions = mergeConfig(core_defaults.global, core_defaults[chart.config.type], newOptions);
  chart.options = chart.config.options = newOptions;
  chart._animationsDisabled = isAnimationDisabled(newOptions);
  chart.ensureScalesHaveIDs();
  chart.buildOrUpdateScales(); // Tooltip

  chart.tooltip._options = newOptions.tooltips;
  chart.tooltip.initialize();
}

function nextAvailableScaleId(axesOpts, prefix, index) {
  var id;

  var hasId = function hasId(obj) {
    return obj.id === id;
  };

  do {
    id = prefix + index++;
  } while (helpers$1.findIndex(axesOpts, hasId) >= 0);

  return id;
}

function positionIsHorizontal(position) {
  return position === 'top' || position === 'bottom';
}

function compare2Level(l1, l2) {
  return function (a, b) {
    return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
  };
}

var Chart = function Chart(item, config) {
  this.construct(item, config);
  return this;
};

helpers$1.extend(Chart.prototype,
/** @lends Chart */
{
  /**
   * @private
   */
  construct: function construct(item, config) {
    var me = this;
    config = initConfig(config);
    var context = platform.acquireContext(item, config);
    var canvas = context && context.canvas;
    var height = canvas && canvas.height;
    var width = canvas && canvas.width;
    me.id = helpers$1.uid();
    me.ctx = context;
    me.canvas = canvas;
    me.config = config;
    me.width = width;
    me.height = height;
    me.aspectRatio = height ? width / height : null;
    me.options = config.options;
    me._bufferedRender = false;
    me._layers = []; // Add the chart instance to the global namespace

    Chart.instances[me.id] = me; // Define alias to the config data: `chart.data === chart.config.data`

    Object.defineProperty(me, 'data', {
      get: function get() {
        return me.config.data;
      },
      set: function set(value) {
        me.config.data = value;
      }
    });

    if (!context || !canvas) {
      // The given item is not a compatible context2d element, let's return before finalizing
      // the chart initialization but after setting basic chart / controller properties that
      // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
      // https://github.com/chartjs/Chart.js/issues/2807
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }

    me.initialize();
    me.update();
  },

  /**
   * @private
   */
  initialize: function initialize() {
    var me = this; // Before init plugin notification

    core_plugins.notify(me, 'beforeInit');
    helpers$1.retinaScale(me, me.options.devicePixelRatio);
    me.bindEvents();

    if (me.options.responsive) {
      // Initial resize before chart draws (must be silent to preserve initial animations).
      me.resize(true);
    }

    me.initToolTip(); // After init plugin notification

    core_plugins.notify(me, 'afterInit');
    return me;
  },
  clear: function clear() {
    helpers$1.canvas.clear(this);
    return this;
  },
  stop: function stop() {
    // Stops any current animation loop occurring
    core_animations.cancelAnimation(this);
    return this;
  },
  resize: function resize(silent) {
    var me = this;
    var options = me.options;
    var canvas = me.canvas;
    var aspectRatio = options.maintainAspectRatio && me.aspectRatio || null; // the canvas render width and height will be casted to integers so make sure that
    // the canvas display style uses the same integer values to avoid blurring effect.
    // Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed

    var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
    var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

    if (me.width === newWidth && me.height === newHeight) {
      return;
    }

    canvas.width = me.width = newWidth;
    canvas.height = me.height = newHeight;
    canvas.style.width = newWidth + 'px';
    canvas.style.height = newHeight + 'px';
    helpers$1.retinaScale(me, options.devicePixelRatio);

    if (!silent) {
      // Notify any plugins about the resize
      var newSize = {
        width: newWidth,
        height: newHeight
      };
      core_plugins.notify(me, 'resize', [newSize]); // Notify of resize

      if (options.onResize) {
        options.onResize(me, newSize);
      }

      me.stop();
      me.update({
        duration: options.responsiveAnimationDuration
      });
    }
  },
  ensureScalesHaveIDs: function ensureScalesHaveIDs() {
    var options = this.options;
    var scalesOptions = options.scales || {};
    var scaleOptions = options.scale;
    helpers$1.each(scalesOptions.xAxes, function (xAxisOptions, index) {
      if (!xAxisOptions.id) {
        xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
      }
    });
    helpers$1.each(scalesOptions.yAxes, function (yAxisOptions, index) {
      if (!yAxisOptions.id) {
        yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
      }
    });

    if (scaleOptions) {
      scaleOptions.id = scaleOptions.id || 'scale';
    }
  },

  /**
   * Builds a map of scale ID to scale object for future lookup.
   */
  buildOrUpdateScales: function buildOrUpdateScales() {
    var me = this;
    var options = me.options;
    var scales = me.scales || {};
    var items = [];
    var updated = Object.keys(scales).reduce(function (obj, id) {
      obj[id] = false;
      return obj;
    }, {});

    if (options.scales) {
      items = items.concat((options.scales.xAxes || []).map(function (xAxisOptions) {
        return {
          options: xAxisOptions,
          dtype: 'category',
          dposition: 'bottom'
        };
      }), (options.scales.yAxes || []).map(function (yAxisOptions) {
        return {
          options: yAxisOptions,
          dtype: 'linear',
          dposition: 'left'
        };
      }));
    }

    if (options.scale) {
      items.push({
        options: options.scale,
        dtype: 'radialLinear',
        isDefault: true,
        dposition: 'chartArea'
      });
    }

    helpers$1.each(items, function (item) {
      var scaleOptions = item.options;
      var id = scaleOptions.id;
      var scaleType = valueOrDefault$7(scaleOptions.type, item.dtype);

      if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }

      updated[id] = true;
      var scale = null;

      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
        scale.options = scaleOptions;
        scale.ctx = me.ctx;
        scale.chart = me;
      } else {
        var scaleClass = core_scaleService.getScaleConstructor(scaleType);

        if (!scaleClass) {
          return;
        }

        scale = new scaleClass({
          id: id,
          type: scaleType,
          options: scaleOptions,
          ctx: me.ctx,
          chart: me
        });
        scales[scale.id] = scale;
      } // parse min/max value, so we can properly determine min/max for other scales


      scale._userMin = scale._parse(scale.options.min);
      scale._userMax = scale._parse(scale.options.max); // TODO(SB): I think we should be able to remove this custom case (options.scale)
      // and consider it as a regular scale part of the "scales"" map only! This would
      // make the logic easier and remove some useless? custom code.

      if (item.isDefault) {
        me.scale = scale;
      }
    }); // clear up discarded scales

    helpers$1.each(updated, function (hasUpdated, id) {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    me.scales = scales;
    core_scaleService.addScalesToLayout(this);
  },
  buildOrUpdateControllers: function buildOrUpdateControllers() {
    var me = this;
    var newControllers = [];
    var datasets = me.data.datasets;
    var i, ilen;

    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      var dataset = datasets[i];
      var meta = me.getDatasetMeta(i);
      var type = dataset.type || me.config.type;

      if (meta.type && meta.type !== type) {
        me.destroyDatasetMeta(i);
        meta = me.getDatasetMeta(i);
      }

      meta.type = type;
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;

      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        var ControllerClass = controllers[meta.type];

        if (ControllerClass === undefined) {
          throw new Error('"' + meta.type + '" is not a chart type.');
        }

        meta.controller = new ControllerClass(me, i);
        newControllers.push(meta.controller);
      }
    }

    return newControllers;
  },

  /**
   * Reset the elements of all datasets
   * @private
   */
  resetElements: function resetElements() {
    var me = this;
    helpers$1.each(me.data.datasets, function (dataset, datasetIndex) {
      me.getDatasetMeta(datasetIndex).controller.reset();
    }, me);
  },

  /**
  * Resets the chart back to its state before the initial animation
  */
  reset: function reset() {
    this.resetElements();
    this.tooltip.initialize();
  },
  update: function update(config) {
    var me = this;
    var i, ilen;
    config = config || {};
    updateConfig(me); // plugins options references might have change, let's invalidate the cache
    // https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167

    core_plugins._invalidate(me);

    if (core_plugins.notify(me, 'beforeUpdate') === false) {
      return;
    } // In case the entire data object changed


    me.tooltip._data = me.data; // Make sure dataset controllers are updated and new controllers are reset

    var newControllers = me.buildOrUpdateControllers(); // Make sure all dataset controllers have correct meta data counts

    for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
      me.getDatasetMeta(i).controller.buildOrUpdateElements();
    }

    me.updateLayout(); // Can only reset the new controllers after the scales have been updated

    if (me.options.animation && me.options.animation.duration) {
      helpers$1.each(newControllers, function (controller) {
        controller.reset();
      });
    }

    me.updateDatasets(); // Need to reset tooltip in case it is displayed with elements that are removed
    // after update.

    me.tooltip.initialize(); // Last active contains items that were previously hovered.

    me.lastActive = []; // Do this before render so that any plugins that need final scale updates can use it

    core_plugins.notify(me, 'afterUpdate');

    me._layers.sort(compare2Level('z', '_idx'));

    if (me._bufferedRender) {
      me._bufferedRequest = {
        duration: config.duration,
        easing: config.easing,
        lazy: config.lazy
      };
    } else {
      me.render(config);
    } // Replay last event from before update


    if (me._lastEvent) {
      me.eventHandler(me._lastEvent);
    }
  },

  /**
   * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
   * hook, in which case, plugins will not be called on `afterLayout`.
   * @private
   */
  updateLayout: function updateLayout() {
    var me = this;

    if (core_plugins.notify(me, 'beforeLayout') === false) {
      return;
    }

    core_layouts.update(this, this.width, this.height);
    me._layers = [];
    helpers$1.each(me.boxes, function (box) {
      // _configure is called twice, once in core.scale.update and once here.
      // Here the boxes are fully updated and at their final positions.
      if (box._configure) {
        box._configure();
      }

      me._layers.push.apply(me._layers, box._layers());
    }, me);

    me._layers.forEach(function (item, index) {
      item._idx = index;
    });

    core_plugins.notify(me, 'afterLayout');
  },

  /**
   * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
   * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
   * @private
   */
  updateDatasets: function updateDatasets() {
    var me = this;

    if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
      return;
    }

    for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me.updateDataset(i);
    }

    core_plugins.notify(me, 'afterDatasetsUpdate');
  },

  /**
   * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
   * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
   * @private
   */
  updateDataset: function updateDataset(index) {
    var me = this;
    var meta = me.getDatasetMeta(index);
    var args = {
      meta: meta,
      index: index
    };

    if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
      return;
    }

    meta.controller._update();

    core_plugins.notify(me, 'afterDatasetUpdate', [args]);
  },
  render: function render(config) {
    var me = this;

    if (!config || _typeof(config) !== 'object') {
      // backwards compatibility
      config = {
        duration: config,
        lazy: arguments[1]
      };
    }

    var animationOptions = me.options.animation;
    var duration = valueOrDefault$7(config.duration, animationOptions && animationOptions.duration);
    var lazy = config.lazy;

    if (core_plugins.notify(me, 'beforeRender') === false) {
      return;
    }

    var onComplete = function onComplete(animation) {
      core_plugins.notify(me, 'afterRender');
      helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
    };

    if (animationOptions && duration) {
      var animation = new core_animation({
        numSteps: duration / 16.66,
        // 60 fps
        easing: config.easing || animationOptions.easing,
        render: function render(chart, animationObject) {
          var easingFunction = helpers$1.easing.effects[animationObject.easing];
          var stepDecimal = animationObject.currentStep / animationObject.numSteps;
          chart.draw(easingFunction(stepDecimal));
        },
        onAnimationProgress: animationOptions.onProgress,
        onAnimationComplete: onComplete
      });
      core_animations.addAnimation(me, animation, duration, lazy);
    } else {
      me.draw(); // See https://github.com/chartjs/Chart.js/issues/3781

      onComplete(new core_animation({
        numSteps: 0,
        chart: me
      }));
    }

    return me;
  },
  draw: function draw(easingValue) {
    var me = this;
    var i, layers;
    me.clear();

    if (helpers$1.isNullOrUndef(easingValue)) {
      easingValue = 1;
    }

    me.transition(easingValue);

    if (me.width <= 0 || me.height <= 0) {
      return;
    }

    if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
      return;
    } // Because of plugin hooks (before/afterDatasetsDraw), datasets can't
    // currently be part of layers. Instead, we draw
    // layers <= 0 before(default, backward compat), and the rest after


    layers = me._layers;

    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(me.chartArea);
    }

    me.drawDatasets(easingValue); // Rest of layers

    for (; i < layers.length; ++i) {
      layers[i].draw(me.chartArea);
    }

    me._drawTooltip(easingValue);

    core_plugins.notify(me, 'afterDraw', [easingValue]);
  },

  /**
   * @private
   */
  transition: function transition(easingValue) {
    var me = this;
    var i, ilen;

    if (!me._animationsDisabled) {
      for (i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
        if (me.isDatasetVisible(i)) {
          me.getDatasetMeta(i).controller.transition(easingValue);
        }
      }
    }

    me.tooltip.transition(easingValue);

    if (me._lastEvent && me.animating) {
      // If, during animation, element under mouse changes, let's react to that.
      me.handleEvent(me._lastEvent);
    }
  },

  /**
   * @private
   */
  _getSortedDatasetMetas: function _getSortedDatasetMetas(filterVisible) {
    var me = this;
    var datasets = me.data.datasets || [];
    var result = [];
    var i, ilen;

    for (i = 0, ilen = datasets.length; i < ilen; ++i) {
      if (!filterVisible || me.isDatasetVisible(i)) {
        result.push(me.getDatasetMeta(i));
      }
    }

    result.sort(compare2Level('order', 'index'));
    return result;
  },

  /**
   * @private
   */
  _getSortedVisibleDatasetMetas: function _getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  },

  /**
   * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
   * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
   * @private
   */
  drawDatasets: function drawDatasets(easingValue) {
    var me = this;
    var metasets, i;

    if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
      return;
    }

    metasets = me._getSortedVisibleDatasetMetas();

    for (i = metasets.length - 1; i >= 0; --i) {
      me.drawDataset(metasets[i], easingValue);
    }

    core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
  },

  /**
   * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
   * hook, in which case, plugins will not be called on `afterDatasetDraw`.
   * @private
   */
  drawDataset: function drawDataset(meta, easingValue) {
    var me = this;
    var ctx = me.ctx;
    var clip = meta._clip;
    var canvas = me.canvas;
    var area = me.chartArea;
    var args = {
      meta: meta,
      index: meta.index,
      easingValue: easingValue
    };

    if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
      return;
    }

    helpers$1.canvas.clipArea(ctx, {
      left: clip.left === false ? 0 : area.left - clip.left,
      right: clip.right === false ? canvas.width : area.right + clip.right,
      top: clip.top === false ? 0 : area.top - clip.top,
      bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
    });
    meta.controller.draw(easingValue);
    helpers$1.canvas.unclipArea(ctx);
    core_plugins.notify(me, 'afterDatasetDraw', [args]);
  },

  /**
   * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
   * hook, in which case, plugins will not be called on `afterTooltipDraw`.
   * @private
   */
  _drawTooltip: function _drawTooltip(easingValue) {
    var me = this;
    var tooltip = me.tooltip;
    var args = {
      tooltip: tooltip,
      easingValue: easingValue
    };

    if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
      return;
    }

    tooltip.draw();
    core_plugins.notify(me, 'afterTooltipDraw', [args]);
  },

  /**
   * Get the single element that was clicked on
   * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
   */
  getElementAtEvent: function getElementAtEvent(e) {
    return core_interaction.modes.nearest(this, e, {
      intersect: true
    });
  },
  getElementsAtEvent: function getElementsAtEvent(e) {
    return core_interaction.modes.index(this, e, {
      intersect: true
    });
  },
  getElementsAtXAxis: function getElementsAtXAxis(e) {
    return core_interaction.modes.index(this, e, {
      intersect: false
    });
  },
  getElementsAtEventForMode: function getElementsAtEventForMode(e, mode, options) {
    var method = core_interaction.modes[mode];

    if (typeof method === 'function') {
      return method(this, e, options);
    }

    return [];
  },
  getDatasetAtEvent: function getDatasetAtEvent(e) {
    return core_interaction.modes.dataset(this, e, {
      intersect: true
    });
  },
  getDatasetMeta: function getDatasetMeta(datasetIndex) {
    var me = this;
    var dataset = me.data.datasets[datasetIndex];

    if (!dataset._meta) {
      dataset._meta = {};
    }

    var meta = dataset._meta[me.id];

    if (!meta) {
      meta = dataset._meta[me.id] = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        // See isDatasetVisible() comment
        xAxisID: null,
        yAxisID: null,
        order: dataset.order || 0,
        index: datasetIndex
      };
    }

    return meta;
  },
  getVisibleDatasetCount: function getVisibleDatasetCount() {
    var count = 0;

    for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      if (this.isDatasetVisible(i)) {
        count++;
      }
    }

    return count;
  },
  isDatasetVisible: function isDatasetVisible(datasetIndex) {
    var meta = this.getDatasetMeta(datasetIndex); // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
    // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.

    return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
  },
  generateLegend: function generateLegend() {
    return this.options.legendCallback(this);
  },

  /**
   * @private
   */
  destroyDatasetMeta: function destroyDatasetMeta(datasetIndex) {
    var id = this.id;
    var dataset = this.data.datasets[datasetIndex];
    var meta = dataset._meta && dataset._meta[id];

    if (meta) {
      meta.controller.destroy();
      delete dataset._meta[id];
    }
  },
  destroy: function destroy() {
    var me = this;
    var canvas = me.canvas;
    var i, ilen;
    me.stop(); // dataset controllers need to cleanup associated data

    for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me.destroyDatasetMeta(i);
    }

    if (canvas) {
      me.unbindEvents();
      helpers$1.canvas.clear(me);
      platform.releaseContext(me.ctx);
      me.canvas = null;
      me.ctx = null;
    }

    core_plugins.notify(me, 'destroy');
    delete Chart.instances[me.id];
  },
  toBase64Image: function toBase64Image() {
    return this.canvas.toDataURL.apply(this.canvas, arguments);
  },
  initToolTip: function initToolTip() {
    var me = this;
    me.tooltip = new core_tooltip({
      _chart: me,
      _data: me.data,
      _options: me.options.tooltips
    }, me);
  },

  /**
   * @private
   */
  bindEvents: function bindEvents() {
    var me = this;
    var listeners = me._listeners = {};

    var listener = function listener() {
      me.eventHandler.apply(me, arguments);
    };

    helpers$1.each(me.options.events, function (type) {
      platform.addEventListener(me, type, listener);
      listeners[type] = listener;
    }); // Elements used to detect size change should not be injected for non responsive charts.
    // See https://github.com/chartjs/Chart.js/issues/2210

    if (me.options.responsive) {
      listener = function listener() {
        me.resize();
      };

      platform.addEventListener(me, 'resize', listener);
      listeners.resize = listener;
    }
  },

  /**
   * @private
   */
  unbindEvents: function unbindEvents() {
    var me = this;
    var listeners = me._listeners;

    if (!listeners) {
      return;
    }

    delete me._listeners;
    helpers$1.each(listeners, function (listener, type) {
      platform.removeEventListener(me, type, listener);
    });
  },
  updateHoverStyle: function updateHoverStyle(items, mode, enabled) {
    var prefix = enabled ? 'set' : 'remove';
    var meta, item, i, ilen;

    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();

      for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
        meta.controller[prefix + 'HoverStyle'](meta.data[i], items[0].datasetIndex, i);
      }

      return;
    }

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];

      if (item) {
        this.getDatasetMeta(item.datasetIndex).controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  },

  /**
   * @private
   */
  _updateHoverStyles: function _updateHoverStyles() {
    var me = this;
    var options = me.options || {};
    var hoverOptions = options.hover; // Remove styling for last active (even if it may still be active)

    if (me.lastActive.length) {
      me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
    } // Built-in hover styling


    if (me.active.length && hoverOptions.mode) {
      me.updateHoverStyle(me.active, hoverOptions.mode, true);
    }
  },

  /**
   * @private
   */
  eventHandler: function eventHandler(e) {
    var me = this;
    var tooltip = me.tooltip;

    if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
      return;
    } // Buffer any update calls so that renders do not occur


    me._bufferedRender = true;
    me._bufferedRequest = null;
    var changed = me.handleEvent(e); // for smooth tooltip animations issue #4989
    // the tooltip should be the source of change
    // Animation check workaround:
    // tooltip._start will be null when tooltip isn't animating

    if (tooltip) {
      changed = tooltip._start ? tooltip.handleEvent(e) : changed | tooltip.handleEvent(e);
    }

    core_plugins.notify(me, 'afterEvent', [e]);
    var bufferedRequest = me._bufferedRequest;

    if (bufferedRequest) {
      // If we have an update that was triggered, we need to do a normal render
      me.render(bufferedRequest);
    } else if (changed && !me.animating) {
      // If entering, leaving, or changing elements, animate the change via pivot
      me.stop(); // We only need to render at this point. Updating will cause scales to be
      // recomputed generating flicker & using more memory than necessary.

      me.render({
        duration: me.options.hover.animationDuration,
        lazy: true
      });
    }

    me._bufferedRender = false;
    me._bufferedRequest = null;
    return me;
  },

  /**
   * Handle an event
   * @private
   * @param {IEvent} event the event to handle
   * @return {boolean} true if the chart needs to re-render
   */
  handleEvent: function handleEvent(e) {
    var me = this;
    var options = me.options || {};
    var hoverOptions = options.hover;
    var changed = false;
    me.lastActive = me.lastActive || []; // Find Active Elements for hover and tooltips

    if (e.type === 'mouseout') {
      me.active = [];
      me._lastEvent = null;
    } else {
      me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
      me._lastEvent = e.type === 'click' ? null : e;
    } // Invoke onHover hook
    // Need to call with native event here to not break backwards compatibility


    helpers$1.callback(options.onHover || options.hover.onHover, [e["native"], me.active], me);

    if (e.type === 'mouseup' || e.type === 'click') {
      if (options.onClick && helpers$1.canvas._isPointInArea(e, me.chartArea)) {
        // Use e.native here for backwards compatibility
        options.onClick.call(me, e["native"], me.active);
      }
    }

    me._updateHoverStyles();

    changed = !helpers$1._elementsEqual(me.active, me.lastActive); // Remember Last Actives

    me.lastActive = me.active;
    return changed;
  }
});
/**
 * NOTE(SB) We actually don't use this container anymore but we need to keep it
 * for backward compatibility. Though, it can still be useful for plugins that
 * would need to work on multiple charts?!
 */

Chart.instances = {};
var core_controller = Chart;

var core_helpers = function core_helpers() {
  // -- Basic js utility methods
  helpers$1.where = function (collection, filterCallback) {
    if (helpers$1.isArray(collection) && Array.prototype.filter) {
      return collection.filter(filterCallback);
    }

    var filtered = [];
    helpers$1.each(collection, function (item) {
      if (filterCallback(item)) {
        filtered.push(item);
      }
    });
    return filtered;
  };

  helpers$1.findIndex = Array.prototype.findIndex ? function (array, callback, scope) {
    return array.findIndex(callback, scope);
  } : function (array, callback, scope) {
    scope = scope === undefined ? array : scope;

    for (var i = 0, ilen = array.length; i < ilen; ++i) {
      if (callback.call(scope, array[i], i, array)) {
        return i;
      }
    }

    return -1;
  };

  helpers$1.findNextWhere = function (arrayToSearch, filterCallback, startIndex) {
    // Default to start of the array
    if (helpers$1.isNullOrUndef(startIndex)) {
      startIndex = -1;
    }

    for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
      var currentItem = arrayToSearch[i];

      if (filterCallback(currentItem)) {
        return currentItem;
      }
    }
  };

  helpers$1.findPreviousWhere = function (arrayToSearch, filterCallback, startIndex) {
    // Default to end of the array
    if (helpers$1.isNullOrUndef(startIndex)) {
      startIndex = arrayToSearch.length;
    }

    for (var i = startIndex - 1; i >= 0; i--) {
      var currentItem = arrayToSearch[i];

      if (filterCallback(currentItem)) {
        return currentItem;
      }
    }
  }; // -- Math methods


  helpers$1.isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  helpers$1.almostEquals = function (x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
  };

  helpers$1.almostWhole = function (x, epsilon) {
    var rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
  };

  helpers$1._setMinAndMax = function (array, target) {
    var i, ilen, value;

    for (i = 0, ilen = array.length; i < ilen; i++) {
      value = array[i];

      if (!isNaN(value)) {
        target.min = Math.min(target.min, value);
        target.max = Math.max(target.max, value);
      }
    }
  };

  helpers$1._setMinAndMaxByKey = function (array, target, property) {
    var i, ilen, value;

    for (i = 0, ilen = array.length; i < ilen; i++) {
      value = array[i][property];

      if (!isNaN(value)) {
        target.min = Math.min(target.min, value);
        target.max = Math.max(target.max, value);
      }
    }
  };

  helpers$1.sign = Math.sign ? function (x) {
    return Math.sign(x);
  } : function (x) {
    x = +x; // convert to a number

    if (x === 0 || isNaN(x)) {
      return x;
    }

    return x > 0 ? 1 : -1;
  };

  helpers$1.toRadians = function (degrees) {
    return degrees * (Math.PI / 180);
  };

  helpers$1.toDegrees = function (radians) {
    return radians * (180 / Math.PI);
  };
  /**
   * Returns the number of decimal places
   * i.e. the number of digits after the decimal point, of the value of this Number.
   * @param {number} x - A number.
   * @returns {number} The number of decimal places.
   * @private
   */


  helpers$1._decimalPlaces = function (x) {
    if (!helpers$1.isFinite(x)) {
      return;
    }

    var e = 1;
    var p = 0;

    while (Math.round(x * e) / e !== x) {
      e *= 10;
      p++;
    }

    return p;
  }; // Gets the angle from vertical upright to the point about a centre.


  helpers$1.getAngleFromPoint = function (centrePoint, anglePoint) {
    var distanceFromXCenter = anglePoint.x - centrePoint.x;
    var distanceFromYCenter = anglePoint.y - centrePoint.y;
    var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

    if (angle < -0.5 * Math.PI) {
      angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    }

    return {
      angle: angle,
      distance: radialDistanceFromCenter
    };
  };

  helpers$1.distanceBetweenPoints = function (pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  };

  helpers$1.splineCurve = function (firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    var previous = firstPoint.skip ? middlePoint : firstPoint;
    var current = middlePoint;
    var next = afterPoint.skip ? middlePoint : afterPoint;
    var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
    var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
    var s01 = d01 / (d01 + d12);
    var s12 = d12 / (d01 + d12); // If all points are the same, s01 & s02 will be inf

    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    var fa = t * s01; // scaling factor for triangle Ta

    var fb = t * s12;
    return {
      previous: {
        x: current.x - fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
      },
      next: {
        x: current.x + fb * (next.x - previous.x),
        y: current.y + fb * (next.y - previous.y)
      }
    };
  };

  helpers$1.EPSILON = Number.EPSILON || 1e-14;

  helpers$1.splineCurveMonotone = function (points) {
    // This function calculates Bézier control points in a similar way than |splineCurve|,
    // but preserves monotonicity of the provided data and ensures no local extremums are added
    // between the dataset discrete points due to the interpolation.
    // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
    var pointsWithTangents = (points || []).map(function (point) {
      return {
        model: point._model,
        deltaK: 0,
        mK: 0
      };
    }); // Calculate slopes (deltaK) and initialize tangents (mK)

    var pointsLen = pointsWithTangents.length;
    var i, pointBefore, pointCurrent, pointAfter;

    for (i = 0; i < pointsLen; ++i) {
      pointCurrent = pointsWithTangents[i];

      if (pointCurrent.model.skip) {
        continue;
      }

      pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
      pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

      if (pointAfter && !pointAfter.model.skip) {
        var slopeDeltaX = pointAfter.model.x - pointCurrent.model.x; // In the case of two points that appear at the same x pixel, slopeDeltaX is 0

        pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
      }

      if (!pointBefore || pointBefore.model.skip) {
        pointCurrent.mK = pointCurrent.deltaK;
      } else if (!pointAfter || pointAfter.model.skip) {
        pointCurrent.mK = pointBefore.deltaK;
      } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
        pointCurrent.mK = 0;
      } else {
        pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
      }
    } // Adjust tangents to ensure monotonic properties


    var alphaK, betaK, tauK, squaredMagnitude;

    for (i = 0; i < pointsLen - 1; ++i) {
      pointCurrent = pointsWithTangents[i];
      pointAfter = pointsWithTangents[i + 1];

      if (pointCurrent.model.skip || pointAfter.model.skip) {
        continue;
      }

      if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
        pointCurrent.mK = pointAfter.mK = 0;
        continue;
      }

      alphaK = pointCurrent.mK / pointCurrent.deltaK;
      betaK = pointAfter.mK / pointCurrent.deltaK;
      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);

      if (squaredMagnitude <= 9) {
        continue;
      }

      tauK = 3 / Math.sqrt(squaredMagnitude);
      pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
      pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
    } // Compute control points


    var deltaX;

    for (i = 0; i < pointsLen; ++i) {
      pointCurrent = pointsWithTangents[i];

      if (pointCurrent.model.skip) {
        continue;
      }

      pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
      pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

      if (pointBefore && !pointBefore.model.skip) {
        deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
        pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
        pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
      }

      if (pointAfter && !pointAfter.model.skip) {
        deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
        pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
        pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
      }
    }
  }; // Implementation of the nice number algorithm used in determining where axis labels will go


  helpers$1.niceNum = function (range, round) {
    var exponent = Math.floor(helpers$1.math.log10(range));
    var fraction = range / Math.pow(10, exponent);
    var niceFraction;

    if (round) {
      if (fraction < 1.5) {
        niceFraction = 1;
      } else if (fraction < 3) {
        niceFraction = 2;
      } else if (fraction < 7) {
        niceFraction = 5;
      } else {
        niceFraction = 10;
      }
    } else if (fraction <= 1.0) {
      niceFraction = 1;
    } else if (fraction <= 2) {
      niceFraction = 2;
    } else if (fraction <= 5) {
      niceFraction = 5;
    } else {
      niceFraction = 10;
    }

    return niceFraction * Math.pow(10, exponent);
  }; // Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


  helpers$1.requestAnimFrame = function () {
    if (typeof window === 'undefined') {
      return function (callback) {
        callback();
      };
    }

    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }(); // -- DOM methods


  helpers$1.getRelativePosition = function (evt, chart) {
    var mouseX, mouseY;
    var e = evt.originalEvent || evt;
    var canvas = evt.target || evt.srcElement;
    var boundingRect = canvas.getBoundingClientRect();
    var touches = e.touches;

    if (touches && touches.length > 0) {
      mouseX = touches[0].clientX;
      mouseY = touches[0].clientY;
    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
    } // Scale mouse coordinates into canvas coordinates
    // by following the pattern laid out by 'jerryj' in the comments of
    // https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/


    var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
    var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
    var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
    var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
    var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
    var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom; // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
    // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here

    mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / width * canvas.width / chart.currentDevicePixelRatio);
    mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / height * canvas.height / chart.currentDevicePixelRatio);
    return {
      x: mouseX,
      y: mouseY
    };
  }; // Private helper function to convert max-width/max-height values that may be percentages into a number


  function parseMaxStyle(styleValue, node, parentProperty) {
    var valueInPixels;

    if (typeof styleValue === 'string') {
      valueInPixels = parseInt(styleValue, 10);

      if (styleValue.indexOf('%') !== -1) {
        // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
      }
    } else {
      valueInPixels = styleValue;
    }

    return valueInPixels;
  }
  /**
   * Returns if the given value contains an effective constraint.
   * @private
   */


  function isConstrainedValue(value) {
    return value !== undefined && value !== null && value !== 'none';
  }
  /**
   * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
   * @param {HTMLElement} domNode - the node to check the constraint on
   * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
   * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
   * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
   */


  function getConstraintDimension(domNode, maxStyle, percentageProperty) {
    var view = document.defaultView;

    var parentNode = helpers$1._getParentNode(domNode);

    var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
    var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
    var hasCNode = isConstrainedValue(constrainedNode);
    var hasCContainer = isConstrainedValue(constrainedContainer);
    var infinity = Number.POSITIVE_INFINITY;

    if (hasCNode || hasCContainer) {
      return Math.min(hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity, hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
    }

    return 'none';
  } // returns Number or undefined if no constraint


  helpers$1.getConstraintWidth = function (domNode) {
    return getConstraintDimension(domNode, 'max-width', 'clientWidth');
  }; // returns Number or undefined if no constraint


  helpers$1.getConstraintHeight = function (domNode) {
    return getConstraintDimension(domNode, 'max-height', 'clientHeight');
  };
  /**
   * @private
  	 */


  helpers$1._calculatePadding = function (container, padding, parentDimension) {
    padding = helpers$1.getStyle(container, padding);
    return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
  };
  /**
   * @private
   */


  helpers$1._getParentNode = function (domNode) {
    var parent = domNode.parentNode;

    if (parent && parent.toString() === '[object ShadowRoot]') {
      parent = parent.host;
    }

    return parent;
  };

  helpers$1.getMaximumWidth = function (domNode) {
    var container = helpers$1._getParentNode(domNode);

    if (!container) {
      return domNode.clientWidth;
    }

    var clientWidth = container.clientWidth;

    var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);

    var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

    var w = clientWidth - paddingLeft - paddingRight;
    var cw = helpers$1.getConstraintWidth(domNode);
    return isNaN(cw) ? w : Math.min(w, cw);
  };

  helpers$1.getMaximumHeight = function (domNode) {
    var container = helpers$1._getParentNode(domNode);

    if (!container) {
      return domNode.clientHeight;
    }

    var clientHeight = container.clientHeight;

    var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);

    var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

    var h = clientHeight - paddingTop - paddingBottom;
    var ch = helpers$1.getConstraintHeight(domNode);
    return isNaN(ch) ? h : Math.min(h, ch);
  };

  helpers$1.getStyle = function (el, property) {
    return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
  };

  helpers$1.retinaScale = function (chart, forceRatio) {
    var pixelRatio = chart.currentDevicePixelRatio = forceRatio || typeof window !== 'undefined' && window.devicePixelRatio || 1;

    if (pixelRatio === 1) {
      return;
    }

    var canvas = chart.canvas;
    var height = chart.height;
    var width = chart.width;
    canvas.height = height * pixelRatio;
    canvas.width = width * pixelRatio;
    chart.ctx.scale(pixelRatio, pixelRatio); // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575

    if (!canvas.style.height && !canvas.style.width) {
      canvas.style.height = height + 'px';
      canvas.style.width = width + 'px';
    }
  }; // -- Canvas methods


  helpers$1.fontString = function (pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
  };

  helpers$1.longestText = function (ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    var data = cache.data = cache.data || {};
    var gc = cache.garbageCollect = cache.garbageCollect || [];

    if (cache.font !== font) {
      data = cache.data = {};
      gc = cache.garbageCollect = [];
      cache.font = font;
    }

    ctx.font = font;
    var longest = 0;
    var ilen = arrayOfThings.length;
    var i, j, jlen, thing, nestedThing;

    for (i = 0; i < ilen; i++) {
      thing = arrayOfThings[i]; // Undefined strings and arrays should not be measured

      if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
        longest = helpers$1.measureText(ctx, data, gc, longest, thing);
      } else if (helpers$1.isArray(thing)) {
        // if it is an array lets measure each element
        // to do maybe simplify this function a bit so we can do this more recursively?
        for (j = 0, jlen = thing.length; j < jlen; j++) {
          nestedThing = thing[j]; // Undefined strings and arrays should not be measured

          if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
            longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
          }
        }
      }
    }

    var gcLen = gc.length / 2;

    if (gcLen > arrayOfThings.length) {
      for (i = 0; i < gcLen; i++) {
        delete data[gc[i]];
      }

      gc.splice(0, gcLen);
    }

    return longest;
  };

  helpers$1.measureText = function (ctx, data, gc, longest, string) {
    var textWidth = data[string];

    if (!textWidth) {
      textWidth = data[string] = ctx.measureText(string).width;
      gc.push(string);
    }

    if (textWidth > longest) {
      longest = textWidth;
    }

    return longest;
  };

  helpers$1.color = !chartjsColor ? function (value) {
    console.error('Color.js not found!');
    return value;
  } : function (value) {
    if (value instanceof CanvasGradient) {
      value = core_defaults.global.defaultColor;
    }

    return chartjsColor(value);
  };

  helpers$1.getHoverColor = function (colorValue) {
    return colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient ? colorValue : helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
  };
};

function _abstract() {
  throw new Error('This method is not implemented: either no adapter can ' + 'be found or an incomplete integration was provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */

/**
 * Currently supported unit string values.
 * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
 * @memberof Chart._adapters._date
 * @name Unit
 */

/**
 * @class
 */


function DateAdapter(options) {
  this.options = options || {};
}

helpers$1.extend(DateAdapter.prototype,
/** @lends DateAdapter */
{
  /**
   * Returns a map of time formats for the supported formatting units defined
   * in Unit as well as 'datetime' representing a detailed date/time string.
   * @returns {{string: string}}
   */
  formats: _abstract,

  /**
   * Parses the given `value` and return the associated timestamp.
   * @param {any} value - the value to parse (usually comes from the data)
   * @param {string} [format] - the expected data format
   * @returns {(number|null)}
   * @function
   */
  parse: _abstract,

  /**
   * Returns the formatted date in the specified `format` for a given `timestamp`.
   * @param {number} timestamp - the timestamp to format
   * @param {string} format - the date/time token
   * @return {string}
   * @function
   */
  format: _abstract,

  /**
   * Adds the specified `amount` of `unit` to the given `timestamp`.
   * @param {number} timestamp - the input timestamp
   * @param {number} amount - the amount to add
   * @param {Unit} unit - the unit as string
   * @return {number}
   * @function
   */
  add: _abstract,

  /**
   * Returns the number of `unit` between the given timestamps.
   * @param {number} max - the input timestamp (reference)
   * @param {number} min - the timestamp to substract
   * @param {Unit} unit - the unit as string
   * @return {number}
   * @function
   */
  diff: _abstract,

  /**
   * Returns start of `unit` for the given `timestamp`.
   * @param {number} timestamp - the input timestamp
   * @param {Unit} unit - the unit as string
   * @param {number} [weekday] - the ISO day of the week with 1 being Monday
   * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
   * @function
   */
  startOf: _abstract,

  /**
   * Returns end of `unit` for the given `timestamp`.
   * @param {number} timestamp - the input timestamp
   * @param {Unit} unit - the unit as string
   * @function
   */
  endOf: _abstract
});

DateAdapter.override = function (members) {
  helpers$1.extend(DateAdapter.prototype, members);
};

var _date = DateAdapter;
var core_adapters = {
  _date: _date
};

var math$1 = helpers$1.math;
/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */

var core_ticks = {
  /**
   * Namespace to hold formatters for different types of ticks
   * @namespace Chart.Ticks.formatters
   */
  formatters: {
    /**
     * Formatter for value labels
     * @method Chart.Ticks.formatters.values
     * @param value the value to display
     * @return {string|string[]} the label to display
     */
    values: function values(value) {
      return helpers$1.isArray(value) ? value : '' + value;
    },

    /**
     * Formatter for linear numeric ticks
     * @method Chart.Ticks.formatters.linear
     * @param tickValue {number} the value to be formatted
     * @param index {number} the position of the tickValue parameter in the ticks array
     * @param ticks {number[]} the list of ticks being converted
     * @return {string} string representation of the tickValue parameter
     */
    linear: function linear(tickValue, index, ticks) {
      // If we have lots of ticks, don't use the ones
      var delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value; // If we have a number like 2.5 as the delta, figure out how many decimal places we need

      if (Math.abs(delta) > 1) {
        if (tickValue !== Math.floor(tickValue)) {
          // not an integer
          delta = tickValue - Math.floor(tickValue);
        }
      }

      var logDelta = math$1.log10(Math.abs(delta));
      var tickString = '';

      if (tickValue !== 0) {
        var maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));

        if (maxTick < 1e-4) {
          // all ticks are small numbers; use scientific notation
          var logTick = math$1.log10(Math.abs(tickValue));
          var numExponential = Math.floor(logTick) - Math.floor(logDelta);
          numExponential = Math.max(Math.min(numExponential, 20), 0);
          tickString = tickValue.toExponential(numExponential);
        } else {
          var numDecimal = -1 * Math.floor(logDelta);
          numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places

          tickString = tickValue.toFixed(numDecimal);
        }
      } else {
        tickString = '0'; // never show decimal places for 0
      }

      return tickString;
    },
    logarithmic: function logarithmic(tickValue, index, ticks) {
      var remain = tickValue / Math.pow(10, Math.floor(math$1.log10(tickValue)));

      if (tickValue === 0) {
        return '0';
      } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
        return tickValue.toExponential();
      }

      return '';
    }
  }
};

var alignPixel = helpers$1.canvas._alignPixel;
var isArray = helpers$1.isArray;
var isFinite$1 = helpers$1.isFinite;
var isNullOrUndef = helpers$1.isNullOrUndef;
var valueOrDefault$8 = helpers$1.valueOrDefault;
var resolve$4 = helpers$1.options.resolve;

core_defaults._set('scale', {
  display: true,
  position: 'left',
  offset: false,
  reverse: false,
  beginAtZero: false,
  // grid line settings
  gridLines: {
    display: true,
    color: 'rgba(0,0,0,0.1)',
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickMarkLength: 10,
    offsetGridLines: false,
    borderDash: [],
    borderDashOffset: 0.0
  },
  // scale label
  scaleLabel: {
    // display property
    display: false,
    // actual label
    labelString: '',
    // top/bottom padding
    padding: {
      top: 4,
      bottom: 4
    }
  },
  // label settings
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    padding: 0,
    display: true,
    autoSkip: true,
    autoSkipPadding: 0,
    labelOffset: 0,
    // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
    callback: core_ticks.formatters.values,
    minor: {},
    major: {}
  }
});
/** Returns a new array containing numItems from arr */


function sample(arr, numItems) {
  var result = [];
  var increment = arr.length / numItems;
  var i = 0;
  var len = arr.length;

  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }

  return result;
}

function getPixelForGridLine(scale, index, offsetGridLines) {
  var length = scale.ticks.length;
  var validIndex = Math.min(index, length - 1);
  var lineValue = scale.getPixelForTick(validIndex);
  var start = scale._startPixel;
  var end = scale._endPixel;
  var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

  var offset;

  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }

    lineValue += validIndex < index ? offset : -offset; // Return undefined if the pixel is out of the range

    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }

  return lineValue;
}

function garbageCollect(caches, length) {
  helpers$1.each(caches, function (cache) {
    var gc = cache.gc;
    var gcLen = gc.length / 2;
    var i;

    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }

      gc.splice(0, gcLen);
    }
  });
}
/**
 * Returns {width, height, offset} objects for the first, last, widest, highest tick
 * labels where offset indicates the anchor point offset from the top in pixels.
 */


function computeLabelSizes(ctx, tickFonts, ticks, caches) {
  var length = ticks.length;
  var widths = [];
  var heights = [];
  var offsets = [];
  var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;

  for (i = 0; i < length; ++i) {
    label = ticks[i].label;
    tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
    ctx.font = fontString = tickFont.string;
    cache = caches[fontString] = caches[fontString] || {
      data: {},
      gc: []
    };
    lineHeight = tickFont.lineHeight;
    width = height = 0; // Undefined labels and arrays should not be measured

    if (!isNullOrUndef(label) && !isArray(label)) {
      width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
      height = lineHeight;
    } else if (isArray(label)) {
      // if it is an array let's measure each element
      for (j = 0, jlen = label.length; j < jlen; ++j) {
        nestedLabel = label[j]; // Undefined labels and arrays should not be measured

        if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
          width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
          height += lineHeight;
        }
      }
    }

    widths.push(width);
    heights.push(height);
    offsets.push(lineHeight / 2);
  }

  garbageCollect(caches, length);
  widest = widths.indexOf(Math.max.apply(null, widths));
  highest = heights.indexOf(Math.max.apply(null, heights));

  function valueAt(idx) {
    return {
      width: widths[idx] || 0,
      height: heights[idx] || 0,
      offset: offsets[idx] || 0
    };
  }

  return {
    first: valueAt(0),
    last: valueAt(length - 1),
    widest: valueAt(widest),
    highest: valueAt(highest)
  };
}

function getTickMarkLength(options) {
  return options.drawTicks ? options.tickMarkLength : 0;
}

function getScaleLabelHeight(options) {
  var font, padding;

  if (!options.display) {
    return 0;
  }

  font = helpers$1.options._parseFont(options);
  padding = helpers$1.options.toPadding(options.padding);
  return font.lineHeight + padding.height;
}

function parseFontOptions(options, nestedOpts) {
  return helpers$1.extend(helpers$1.options._parseFont({
    fontFamily: valueOrDefault$8(nestedOpts.fontFamily, options.fontFamily),
    fontSize: valueOrDefault$8(nestedOpts.fontSize, options.fontSize),
    fontStyle: valueOrDefault$8(nestedOpts.fontStyle, options.fontStyle),
    lineHeight: valueOrDefault$8(nestedOpts.lineHeight, options.lineHeight)
  }), {
    color: resolve$4([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
  });
}

function parseTickFontOptions(options) {
  var minor = parseFontOptions(options, options.minor);
  var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;
  return {
    minor: minor,
    major: major
  };
}

function nonSkipped(ticksToFilter) {
  var filtered = [];
  var item, index, len;

  for (index = 0, len = ticksToFilter.length; index < len; ++index) {
    item = ticksToFilter[index];

    if (typeof item._index !== 'undefined') {
      filtered.push(item);
    }
  }

  return filtered;
}

function getEvenSpacing(arr) {
  var len = arr.length;
  var i, diff;

  if (len < 2) {
    return false;
  }

  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }

  return diff;
}

function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
  var evenMajorSpacing = getEvenSpacing(majorIndices);
  var spacing = (ticks.length - 1) / ticksLimit;
  var factors, factor, i, ilen; // If the major ticks are evenly spaced apart, place the minor ticks
  // so that they divide the major ticks into even chunks

  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }

  factors = helpers$1.math._factorize(evenMajorSpacing);

  for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
    factor = factors[i];

    if (factor > spacing) {
      return factor;
    }
  }

  return Math.max(spacing, 1);
}

function getMajorIndices(ticks) {
  var result = [];
  var i, ilen;

  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }

  return result;
}

function skipMajors(ticks, majorIndices, spacing) {
  var count = 0;
  var next = majorIndices[0];
  var i, tick;
  spacing = Math.ceil(spacing);

  for (i = 0; i < ticks.length; i++) {
    tick = ticks[i];

    if (i === next) {
      tick._index = i;
      count++;
      next = majorIndices[count * spacing];
    } else {
      delete tick.label;
    }
  }
}

function skip(ticks, spacing, majorStart, majorEnd) {
  var start = valueOrDefault$8(majorStart, 0);
  var end = Math.min(valueOrDefault$8(majorEnd, ticks.length), ticks.length);
  var count = 0;
  var length, i, tick, next;
  spacing = Math.ceil(spacing);

  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }

  next = start;

  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }

  for (i = Math.max(start, 0); i < end; i++) {
    tick = ticks[i];

    if (i === next) {
      tick._index = i;
      count++;
      next = Math.round(start + count * spacing);
    } else {
      delete tick.label;
    }
  }
}

var Scale =
/*#__PURE__*/
function (_Element) {
  _inherits(Scale, _Element);

  function Scale() {
    _classCallCheck(this, Scale);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scale).apply(this, arguments));
  }

  _createClass(Scale, [{
    key: "_parse",

    /**
     * Parse a supported input value to internal representation.
     * @param {*} raw
     * @param {number} index
     * @private
     * @since 3.0
     */
    value: function _parse(raw, index) {
      // eslint-disable-line no-unused-vars
      return raw;
    }
    /**
     * Parse an object for axis to internal representation.
     * @param {object} obj
     * @param {string} axis
     * @param {number} index
     * @private
     * @since 3.0
     */

  }, {
    key: "_parseObject",
    value: function _parseObject(obj, axis, index) {
      if (obj[axis] !== undefined) {
        return this._parse(obj[axis], index);
      }

      return null;
    }
    /**
     * @private
     * @since 3.0
     */

  }, {
    key: "_getUserBounds",
    value: function _getUserBounds() {
      var min = this._userMin;
      var max = this._userMax;

      if (isNullOrUndef(min) || isNaN(min)) {
        min = Number.POSITIVE_INFINITY;
      }

      if (isNullOrUndef(max) || isNaN(max)) {
        max = Number.NEGATIVE_INFINITY;
      }

      return {
        min: min,
        max: max,
        minDefined: isFinite$1(min),
        maxDefined: isFinite$1(max)
      };
    }
    /**
     * @private
     * @since 3.0
     */

  }, {
    key: "_getMinMax",
    value: function _getMinMax(canStack) {
      var me = this;

      var _me$_getUserBounds = me._getUserBounds(),
          min = _me$_getUserBounds.min,
          max = _me$_getUserBounds.max,
          minDefined = _me$_getUserBounds.minDefined,
          maxDefined = _me$_getUserBounds.maxDefined;

      var minPositive = Number.POSITIVE_INFINITY;
      var i, ilen, metas, minmax;

      if (minDefined && maxDefined) {
        return {
          min: min,
          max: max
        };
      }

      metas = me._getMatchingVisibleMetas();

      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        minmax = metas[i].controller._getMinMax(me, canStack);

        if (!minDefined) {
          min = Math.min(min, minmax.min);
        }

        if (!maxDefined) {
          max = Math.max(max, minmax.max);
        }

        minPositive = Math.min(minPositive, minmax.minPositive);
      }

      return {
        min: min,
        max: max,
        minPositive: minPositive
      };
    }
  }, {
    key: "_invalidateCaches",
    value: function _invalidateCaches() {}
    /**
     * Get the padding needed for the scale
     * @method getPadding
     * @private
     * @returns {Padding} the necessary padding
     */

  }, {
    key: "getPadding",
    value: function getPadding() {
      var me = this;
      return {
        left: me.paddingLeft || 0,
        top: me.paddingTop || 0,
        right: me.paddingRight || 0,
        bottom: me.paddingBottom || 0
      };
    }
    /**
     * Returns the scale tick objects ({label, major})
     * @since 2.7
     */

  }, {
    key: "getTicks",
    value: function getTicks() {
      return this.ticks;
    }
    /**
    * @private
    */

  }, {
    key: "_getLabels",
    value: function _getLabels() {
      var data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    } // These methods are ordered by lifecyle. Utilities then follow.
    // Any function defined here is inherited by all scale types.
    // Any function can be extended by the scale type

  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      helpers$1.callback(this.options.beforeUpdate, [this]);
    }
    /**
     * @param {number} maxWidth - the max width in pixels
     * @param {number} maxHeight - the max height in pixels
     * @param {object} margins - the space between the edge of the other scales and edge of the chart
     *   This space comes from two sources:
     *     - padding - space that's required to show the labels at the edges of the scale
     *     - thickness of scales or legends in another orientation
     */

  }, {
    key: "update",
    value: function update(maxWidth, maxHeight, margins) {
      var me = this;
      var tickOpts = me.options.ticks;
      var sampleSize = tickOpts.sampleSize;
      var samplingEnabled; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = helpers$1.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      me.ticks = null;
      me._labelSizes = null;
      me._maxLabelLines = 0;
      me.longestLabelWidth = 0;
      me.longestTextCache = me.longestTextCache || {};
      me._gridLineItems = null;
      me._labelItems = null; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Data min/max

      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits();
      me.beforeBuildTicks();
      me.ticks = me.buildTicks() || []; // Allow modification of ticks in callback.

      me.afterBuildTicks(); // Compute tick rotation and fit using a sampled subset of labels
      // We generally don't need to compute the size of every single label for determining scale size

      samplingEnabled = sampleSize < me.ticks.length;

      me._convertTicksToLabels(samplingEnabled ? sample(me.ticks, sampleSize) : me.ticks); // _configure is called twice, once here, once from core.controller.updateLayout.
      // Here we haven't been positioned yet, but dimensions are correct.
      // Variables set in _configure are needed for calculateTickRotation, and
      // it's ok that coordinates are not correct there, only dimensions matter.


      me._configure(); // Tick Rotation


      me.beforeCalculateTickRotation();
      me.calculateTickRotation();
      me.afterCalculateTickRotation();
      me.beforeFit();
      me.fit();
      me.afterFit(); // Auto-skip

      me.ticks = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(me.ticks) : me.ticks;

      if (samplingEnabled) {
        // Generate labels using all non-skipped ticks
        me._convertTicksToLabels(me.ticks);
      } // IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!


      me.afterUpdate(); // TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
      // make maxWidth and maxHeight private

      return me.minSize;
    }
    /**
     * @private
     */

  }, {
    key: "_configure",
    value: function _configure() {
      var me = this;
      var reversePixels = me.options.reverse;
      var startPixel, endPixel;

      if (me.isHorizontal()) {
        startPixel = me.left;
        endPixel = me.right;
      } else {
        startPixel = me.top;
        endPixel = me.bottom; // by default vertical scales are from bottom to top, so pixels are reversed

        reversePixels = !reversePixels;
      }

      me._startPixel = startPixel;
      me._endPixel = endPixel;
      me._reversePixels = reversePixels;
      me._length = endPixel - startPixel;
    }
  }, {
    key: "afterUpdate",
    value: function afterUpdate() {
      helpers$1.callback(this.options.afterUpdate, [this]);
    } //

  }, {
    key: "beforeSetDimensions",
    value: function beforeSetDimensions() {
      helpers$1.callback(this.options.beforeSetDimensions, [this]);
    }
  }, {
    key: "setDimensions",
    value: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
    }
  }, {
    key: "afterSetDimensions",
    value: function afterSetDimensions() {
      helpers$1.callback(this.options.afterSetDimensions, [this]);
    } // Data limits

  }, {
    key: "beforeDataLimits",
    value: function beforeDataLimits() {
      helpers$1.callback(this.options.beforeDataLimits, [this]);
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {}
  }, {
    key: "afterDataLimits",
    value: function afterDataLimits() {
      helpers$1.callback(this.options.afterDataLimits, [this]);
    } //

  }, {
    key: "beforeBuildTicks",
    value: function beforeBuildTicks() {
      helpers$1.callback(this.options.beforeBuildTicks, [this]);
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {}
  }, {
    key: "afterBuildTicks",
    value: function afterBuildTicks() {
      helpers$1.callback(this.options.afterBuildTicks, [this]);
    }
  }, {
    key: "beforeTickToLabelConversion",
    value: function beforeTickToLabelConversion() {
      helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
    }
    /**
     * Convert ticks to label strings
     */

  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      var me = this;
      var tickOpts = me.options.ticks;
      var i, ilen, tick;

      for (i = 0, ilen = ticks.length; i < ilen; i++) {
        tick = ticks[i];
        tick.label = helpers$1.callback(tickOpts.callback, [tick.value, i, ticks], me);
      }
    }
  }, {
    key: "afterTickToLabelConversion",
    value: function afterTickToLabelConversion() {
      helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
    } //

  }, {
    key: "beforeCalculateTickRotation",
    value: function beforeCalculateTickRotation() {
      helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
    }
  }, {
    key: "calculateTickRotation",
    value: function calculateTickRotation() {
      var me = this;
      var options = me.options;
      var tickOpts = options.ticks;
      var numTicks = me.ticks.length;
      var minRotation = tickOpts.minRotation || 0;
      var maxRotation = tickOpts.maxRotation;
      var labelRotation = minRotation;
      var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;

      if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
        me.labelRotation = minRotation;
        return;
      }

      labelSizes = me._getLabelSizes();
      maxLabelWidth = labelSizes.widest.width;
      maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset; // Estimate the width of each grid based on the canvas width, the maximum
      // label width and the number of tick intervals

      maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
      tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1); // Allow 3 pixels x2 padding either side for label readability

      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = me.maxHeight - getTickMarkLength(options.gridLines) - tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = helpers$1.toDegrees(Math.min(Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)), Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }

      me.labelRotation = labelRotation;
    }
  }, {
    key: "afterCalculateTickRotation",
    value: function afterCalculateTickRotation() {
      helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
    } //

  }, {
    key: "beforeFit",
    value: function beforeFit() {
      helpers$1.callback(this.options.beforeFit, [this]);
    }
  }, {
    key: "fit",
    value: function fit() {
      var me = this; // Reset

      var minSize = me.minSize = {
        width: 0,
        height: 0
      };
      var chart = me.chart;
      var opts = me.options;
      var tickOpts = opts.ticks;
      var scaleLabelOpts = opts.scaleLabel;
      var gridLineOpts = opts.gridLines;

      var display = me._isVisible();

      var isBottom = opts.position === 'bottom';
      var isHorizontal = me.isHorizontal(); // Width

      if (isHorizontal) {
        minSize.width = me.maxWidth;
      } else if (display) {
        minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      } // height


      if (!isHorizontal) {
        minSize.height = me.maxHeight; // fill all the height
      } else if (display) {
        minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      } // Don't bother fitting the ticks if we are not showing the labels


      if (tickOpts.display && display) {
        var tickFonts = parseTickFontOptions(tickOpts);

        var labelSizes = me._getLabelSizes();

        var firstLabelSize = labelSizes.first;
        var lastLabelSize = labelSizes.last;
        var widestLabelSize = labelSizes.widest;
        var highestLabelSize = labelSizes.highest;
        var lineSpace = tickFonts.minor.lineHeight * 0.4;
        var tickPadding = tickOpts.padding;

        if (isHorizontal) {
          // A horizontal axis is more constrained by the height.
          var isRotated = me.labelRotation !== 0;
          var angleRadians = helpers$1.toRadians(me.labelRotation);
          var cosRotation = Math.cos(angleRadians);
          var sinRotation = Math.sin(angleRadians);
          var labelHeight = sinRotation * widestLabelSize.width + cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0)) + (isRotated ? 0 : lineSpace); // padding

          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
          var offsetLeft = me.getPixelForTick(0) - me.left;
          var offsetRight = me.right - me.getPixelForTick(me.ticks.length - 1);
          var paddingLeft, paddingRight; // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
          // which means that the right padding is dominated by the font height

          if (isRotated) {
            paddingLeft = isBottom ? cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset : sinRotation * (firstLabelSize.height - firstLabelSize.offset);
            paddingRight = isBottom ? sinRotation * (lastLabelSize.height - lastLabelSize.offset) : cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
          } else {
            paddingLeft = firstLabelSize.width / 2;
            paddingRight = lastLabelSize.width / 2;
          } // Adjust padding taking into account changes in offsets
          // and add 3 px to move away from canvas edges


          me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
          me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
        } else {
          // A vertical axis is more constrained by the width. Labels are the
          // dominant factor here, so get that length first and account for padding
          var labelWidth = tickOpts.mirror ? 0 : // use lineSpace for consistency with horizontal axis
          // tickPadding is not implemented for horizontal
          widestLabelSize.width + tickPadding + lineSpace;
          minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);
          me.paddingTop = firstLabelSize.height / 2;
          me.paddingBottom = lastLabelSize.height / 2;
        }
      }

      me.handleMargins();

      if (isHorizontal) {
        me.width = me._length = chart.width - me.margins.left - me.margins.right;
        me.height = minSize.height;
      } else {
        me.width = minSize.width;
        me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
      }
    }
    /**
     * Handle margins and padding interactions
     * @private
     */

  }, {
    key: "handleMargins",
    value: function handleMargins() {
      var me = this;

      if (me.margins) {
        me.margins.left = Math.max(me.paddingLeft, me.margins.left);
        me.margins.top = Math.max(me.paddingTop, me.margins.top);
        me.margins.right = Math.max(me.paddingRight, me.margins.right);
        me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
      }
    }
  }, {
    key: "afterFit",
    value: function afterFit() {
      helpers$1.callback(this.options.afterFit, [this]);
    } // Shared Methods

  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    }
  }, {
    key: "isFullWidth",
    value: function isFullWidth() {
      return this.options.fullWidth;
    }
  }, {
    key: "_convertTicksToLabels",
    value: function _convertTicksToLabels(ticks) {
      var me = this;
      me.beforeTickToLabelConversion();
      me.generateTickLabels(ticks);
      me.afterTickToLabelConversion();
    }
    /**
     * @private
     */

  }, {
    key: "_getLabelSizes",
    value: function _getLabelSizes() {
      var me = this;
      var labelSizes = me._labelSizes;

      if (!labelSizes) {
        me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.ticks, me.longestTextCache);
        me.longestLabelWidth = labelSizes.widest.width;
      }

      return labelSizes;
    }
    /**
     * Used to get the label to display in the tooltip for the given value
     * @param value
     */

  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      return value;
    }
    /**
     * Returns the location of the given data point. Value can either be an index or a numerical value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param value
     * @param index
     * @param datasetIndex
     */

  }, {
    key: "getPixelForValue",
    value: function getPixelForValue() {}
    /**
     * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param pixel
     */

  }, {
    key: "getValueForPixel",
    value: function getValueForPixel() {}
    /**
     * Returns the location of the tick at the given index
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */

  }, {
    key: "getPixelForTick",
    value: function getPixelForTick(index) {
      var me = this;
      var offset = me.options.offset;
      var numTicks = me.ticks.length;
      var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);
      return index < 0 || index > numTicks - 1 ? null : me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
    }
    /**
     * Utility for getting the pixel location of a percentage of scale
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */

  }, {
    key: "getPixelForDecimal",
    value: function getPixelForDecimal(decimal) {
      var me = this;

      if (me._reversePixels) {
        decimal = 1 - decimal;
      }

      return me._startPixel + decimal * me._length;
    }
  }, {
    key: "getDecimalForPixel",
    value: function getDecimalForPixel(pixel) {
      var decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    }
    /**
     * Returns the pixel for the minimum chart value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */

  }, {
    key: "getBasePixel",
    value: function getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
  }, {
    key: "getBaseValue",
    value: function getBaseValue() {
      var me = this;
      var min = me.min;
      var max = me.max;
      return me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    /**
     * Returns a subset of ticks to be plotted to avoid overlapping labels.
     * @private
     */

  }, {
    key: "_autoSkip",
    value: function _autoSkip(ticks) {
      var me = this;
      var tickOpts = me.options.ticks;
      var axisLength = me._length;
      var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
      var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
      var numMajorIndices = majorIndices.length;
      var first = majorIndices[0];
      var last = majorIndices[numMajorIndices - 1];
      var i, ilen, spacing, avgMajorSpacing; // If there are too many major ticks to display them all

      if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
        return nonSkipped(ticks);
      }

      spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

      if (numMajorIndices > 0) {
        for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
          skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
        }

        avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
        skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return nonSkipped(ticks);
      }

      skip(ticks, spacing);
      return nonSkipped(ticks);
    }
    /**
     * @private
     */

  }, {
    key: "_tickSize",
    value: function _tickSize() {
      var me = this;
      var optionTicks = me.options.ticks; // Calculate space needed by label in axis direction.

      var rot = helpers$1.toRadians(me.labelRotation);
      var cos = Math.abs(Math.cos(rot));
      var sin = Math.abs(Math.sin(rot));

      var labelSizes = me._getLabelSizes();

      var padding = optionTicks.autoSkipPadding || 0;
      var w = labelSizes ? labelSizes.widest.width + padding : 0;
      var h = labelSizes ? labelSizes.highest.height + padding : 0; // Calculate space needed for 1 tick in axis direction.

      return me.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    /**
     * @private
     */

  }, {
    key: "_isVisible",
    value: function _isVisible() {
      var display = this.options.display;

      if (display !== 'auto') {
        return !!display;
      }

      return this._getMatchingVisibleMetas().length > 0;
    }
    /**
     * @private
     */

  }, {
    key: "_computeGridLineItems",
    value: function _computeGridLineItems(chartArea) {
      var me = this;
      var chart = me.chart;
      var options = me.options;
      var gridLines = options.gridLines;
      var position = options.position;
      var offsetGridLines = gridLines.offsetGridLines;
      var isHorizontal = me.isHorizontal();
      var ticks = me.ticks;
      var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);
      var tl = getTickMarkLength(gridLines);
      var items = [];
      var context = {
        scale: me,
        tick: ticks[0]
      };
      var axisWidth = gridLines.drawBorder ? resolve$4([gridLines.lineWidth, 0], context, 0) : 0;
      var axisHalfWidth = axisWidth / 2;

      var alignBorderValue = function alignBorderValue(pixel) {
        return alignPixel(chart, pixel, axisWidth);
      };

      var borderValue, i, tick, lineValue, alignedLineValue;
      var tx1, ty1, tx2, ty2, x1, y1, x2, y2;

      if (position === 'top') {
        borderValue = alignBorderValue(me.bottom);
        ty1 = me.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === 'bottom') {
        borderValue = alignBorderValue(me.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = me.top + tl;
      } else if (position === 'left') {
        borderValue = alignBorderValue(me.right);
        tx1 = me.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else {
        borderValue = alignBorderValue(me.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = me.left + tl;
      }

      for (i = 0; i < ticksLength; ++i) {
        tick = ticks[i] || {};
        context = {
          scale: me,
          tick: tick
        };
        var lineWidth = resolve$4([gridLines.lineWidth], context, i);
        var lineColor = resolve$4([gridLines.color], context, i);
        var borderDash = gridLines.borderDash || [];
        var borderDashOffset = resolve$4([gridLines.borderDashOffset], context, i);
        lineValue = getPixelForGridLine(me, i, offsetGridLines); // Skip if the pixel is out of the range

        if (lineValue === undefined) {
          continue;
        }

        alignedLineValue = alignPixel(chart, lineValue, lineWidth);

        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }

        items.push({
          tx1: tx1,
          ty1: ty1,
          tx2: tx2,
          ty2: ty2,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          width: lineWidth,
          color: lineColor,
          borderDash: borderDash,
          borderDashOffset: borderDashOffset
        });
      }

      items.ticksLength = ticksLength;
      items.borderValue = borderValue;
      return items;
    }
    /**
     * @private
     */

  }, {
    key: "_computeLabelItems",
    value: function _computeLabelItems() {
      var me = this;
      var options = me.options;
      var optionTicks = options.ticks;
      var position = options.position;
      var isMirrored = optionTicks.mirror;
      var isHorizontal = me.isHorizontal();
      var ticks = me.ticks;
      var fonts = parseTickFontOptions(optionTicks);
      var tickPadding = optionTicks.padding;
      var tl = getTickMarkLength(options.gridLines);
      var rotation = -helpers$1.toRadians(me.labelRotation);
      var items = [];
      var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;

      if (position === 'top') {
        y = me.bottom - tl - tickPadding;
        textAlign = !rotation ? 'center' : 'left';
      } else if (position === 'bottom') {
        y = me.top + tl + tickPadding;
        textAlign = !rotation ? 'center' : 'right';
      } else if (position === 'left') {
        x = me.right - (isMirrored ? 0 : tl) - tickPadding;
        textAlign = isMirrored ? 'left' : 'right';
      } else {
        x = me.left + (isMirrored ? 0 : tl) + tickPadding;
        textAlign = isMirrored ? 'right' : 'left';
      }

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        label = tick.label;
        pixel = me.getPixelForTick(i) + optionTicks.labelOffset;
        font = tick.major ? fonts.major : fonts.minor;
        lineHeight = font.lineHeight;
        lineCount = isArray(label) ? label.length : 1;

        if (isHorizontal) {
          x = pixel;
          textOffset = position === 'top' ? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight : (!rotation ? 0.5 : 0) * lineHeight;
        } else {
          y = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }

        items.push({
          x: x,
          y: y,
          rotation: rotation,
          label: label,
          font: font,
          textOffset: textOffset,
          textAlign: textAlign
        });
      }

      return items;
    }
    /**
     * @private
     */

  }, {
    key: "_drawGrid",
    value: function _drawGrid(chartArea) {
      var me = this;
      var gridLines = me.options.gridLines;

      if (!gridLines.display) {
        return;
      }

      var ctx = me.ctx;
      var chart = me.chart;
      var context = {
        scale: me,
        tick: me.ticks[0]
      };
      var axisWidth = gridLines.drawBorder ? resolve$4([gridLines.lineWidth, 0], context, 0) : 0;

      var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));

      var width, color, i, ilen, item;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        width = item.width;
        color = item.color;

        if (width && color) {
          ctx.save();
          ctx.lineWidth = width;
          ctx.strokeStyle = color;

          if (ctx.setLineDash) {
            ctx.setLineDash(item.borderDash);
            ctx.lineDashOffset = item.borderDashOffset;
          }

          ctx.beginPath();

          if (gridLines.drawTicks) {
            ctx.moveTo(item.tx1, item.ty1);
            ctx.lineTo(item.tx2, item.ty2);
          }

          if (gridLines.drawOnChartArea) {
            ctx.moveTo(item.x1, item.y1);
            ctx.lineTo(item.x2, item.y2);
          }

          ctx.stroke();
          ctx.restore();
        }
      }

      if (axisWidth) {
        // Draw the line at the edge of the axis
        var firstLineWidth = axisWidth;
        context = {
          scale: me,
          tick: me.ticks[items.ticksLength - 1]
        };
        var lastLineWidth = resolve$4([gridLines.lineWidth, 1], context, items.ticksLength - 1);
        var borderValue = items.borderValue;
        var x1, x2, y1, y2;

        if (me.isHorizontal()) {
          x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
          x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
          y1 = y2 = borderValue;
        } else {
          y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
          y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
          x1 = x2 = borderValue;
        }

        ctx.lineWidth = axisWidth;
        ctx.strokeStyle = resolve$4([gridLines.color], context, 0);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
    /**
     * @private
     */

  }, {
    key: "_drawLabels",
    value: function _drawLabels() {
      var me = this;
      var optionTicks = me.options.ticks;

      if (!optionTicks.display) {
        return;
      }

      var ctx = me.ctx;

      var items = me._labelItems || (me._labelItems = me._computeLabelItems());

      var i, j, ilen, jlen, item, tickFont, label, y;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        tickFont = item.font; // Make sure we draw text in the correct color and font

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);
        ctx.font = tickFont.string;
        ctx.fillStyle = tickFont.color;
        ctx.textBaseline = 'middle';
        ctx.textAlign = item.textAlign;
        label = item.label;
        y = item.textOffset;

        if (isArray(label)) {
          for (j = 0, jlen = label.length; j < jlen; ++j) {
            // We just make sure the multiline element is a string here..
            ctx.fillText('' + label[j], 0, y);
            y += tickFont.lineHeight;
          }
        } else {
          ctx.fillText(label, 0, y);
        }

        ctx.restore();
      }
    }
    /**
     * @private
     */

  }, {
    key: "_drawTitle",
    value: function _drawTitle() {
      var me = this;
      var ctx = me.ctx;
      var options = me.options;
      var scaleLabel = options.scaleLabel;

      if (!scaleLabel.display) {
        return;
      }

      var scaleLabelFontColor = valueOrDefault$8(scaleLabel.fontColor, core_defaults.global.defaultFontColor);

      var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);

      var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
      var halfLineHeight = scaleLabelFont.lineHeight / 2;
      var scaleLabelAlign = scaleLabel.align;
      var position = options.position;
      var rotation = 0;
      var isReverse = me.options.reverse;
      var scaleLabelX, scaleLabelY, textAlign;

      if (me.isHorizontal()) {
        switch (scaleLabelAlign) {
          case 'start':
            scaleLabelX = me.left + (isReverse ? me.width : 0);
            textAlign = isReverse ? 'right' : 'left';
            break;

          case 'end':
            scaleLabelX = me.left + (isReverse ? 0 : me.width);
            textAlign = isReverse ? 'left' : 'right';
            break;

          default:
            scaleLabelX = me.left + me.width / 2;
            textAlign = 'center';
        }

        scaleLabelY = position === 'top' ? me.top + halfLineHeight + scaleLabelPadding.top : me.bottom - halfLineHeight - scaleLabelPadding.bottom;
      } else {
        var isLeft = position === 'left';
        scaleLabelX = isLeft ? me.left + halfLineHeight + scaleLabelPadding.top : me.right - halfLineHeight - scaleLabelPadding.top;

        switch (scaleLabelAlign) {
          case 'start':
            scaleLabelY = me.top + (isReverse ? 0 : me.height);
            textAlign = isReverse === isLeft ? 'right' : 'left';
            break;

          case 'end':
            scaleLabelY = me.top + (isReverse ? me.height : 0);
            textAlign = isReverse === isLeft ? 'left' : 'right';
            break;

          default:
            scaleLabelY = me.top + me.height / 2;
            textAlign = 'center';
        }

        rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
      }

      ctx.save();
      ctx.translate(scaleLabelX, scaleLabelY);
      ctx.rotate(rotation);
      ctx.textAlign = textAlign;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = scaleLabelFontColor; // render in correct colour

      ctx.font = scaleLabelFont.string;
      ctx.fillText(scaleLabel.labelString, 0, 0);
      ctx.restore();
    }
  }, {
    key: "draw",
    value: function draw(chartArea) {
      var me = this;

      if (!me._isVisible()) {
        return;
      }

      me._drawGrid(chartArea);

      me._drawTitle();

      me._drawLabels();
    }
    /**
     * @private
     */

  }, {
    key: "_layers",
    value: function _layers() {
      var me = this;
      var opts = me.options;
      var tz = opts.ticks && opts.ticks.z || 0;
      var gz = opts.gridLines && opts.gridLines.z || 0;

      if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
        // backward compatibility: draw has been overridden by custom scale
        return [{
          z: tz,
          draw: function draw() {
            me.draw.apply(me, arguments);
          }
        }];
      }

      return [{
        z: gz,
        draw: function draw() {
          me._drawGrid.apply(me, arguments);

          me._drawTitle.apply(me, arguments);
        }
      }, {
        z: tz,
        draw: function draw() {
          me._drawLabels.apply(me, arguments);
        }
      }];
    }
    /**
     * @private
     */

  }, {
    key: "_getAxis",
    value: function _getAxis() {
      return this.isHorizontal() ? 'x' : 'y';
    }
    /**
     * Returns visible dataset metas that are attached to this scale
     * @param {string} [type] - if specified, also filter by dataset type
     * @private
     */

  }, {
    key: "_getMatchingVisibleMetas",
    value: function _getMatchingVisibleMetas(type) {
      var me = this;

      var metas = me.chart._getSortedVisibleDatasetMetas();

      var axisID = me._getAxis() + 'AxisID';
      var result = [];
      var i, ilen, meta;

      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        meta = metas[i];

        if (meta[axisID] === me.id && (!type || meta.type === type)) {
          result.push(meta);
        }
      }

      return result;
    }
  }]);

  return Scale;
}(core_element);

Scale.prototype._draw = Scale.prototype.draw;
var core_scale = Scale;

var defaultConfig = {
  position: 'bottom'
};

var CategroyScale =
/*#__PURE__*/
function (_Scale) {
  _inherits(CategroyScale, _Scale);

  function CategroyScale() {
    _classCallCheck(this, CategroyScale);

    return _possibleConstructorReturn(this, _getPrototypeOf(CategroyScale).apply(this, arguments));
  }

  _createClass(CategroyScale, [{
    key: "_parse",
    value: function _parse(raw, index) {
      var labels = this._getLabels();

      var first = labels.indexOf(raw);
      var last = labels.lastIndexOf(raw);
      return first === -1 || first !== last ? index : first;
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {
      var me = this;
      var max = me._getLabels().length - 1;
      me.min = Math.max(me._userMin || 0, 0);
      me.max = Math.min(me._userMax || max, max);
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      var me = this;

      var labels = me._getLabels();

      var min = me.min;
      var max = me.max; // If we are viewing some subset of labels, slice the original array

      labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
      return labels.map(function (l) {
        return {
          value: l
        };
      });
    }
  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      var me = this;

      var labels = me._getLabels();

      if (value >= 0 && value < labels.length) {
        return labels[value];
      }

      return value;
    }
  }, {
    key: "_configure",
    value: function _configure() {
      var me = this;
      var offset = me.options.offset;
      var ticks = me.ticks;

      core_scale.prototype._configure.call(me);

      if (!me.isHorizontal()) {
        // For backward compatibility, vertical category scale reverse is inverted.
        me._reversePixels = !me._reversePixels;
      }

      if (!ticks) {
        return;
      }

      me._startValue = me.min - (offset ? 0.5 : 0);
      me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
    } // Used to get data value locations.  Value can either be an index or a numerical value

  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      var me = this;

      if (typeof value !== 'number') {
        value = me._parse(value);
      }

      return me.getPixelForDecimal((value - me._startValue) / me._valueRange);
    }
  }, {
    key: "getPixelForTick",
    value: function getPixelForTick(index) {
      var ticks = this.ticks;
      return index < 0 || index > ticks.length - 1 ? null : this.getPixelForValue(index + this.min);
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      var me = this;
      var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
      return Math.min(Math.max(value, 0), me.ticks.length - 1);
    }
  }, {
    key: "getBasePixel",
    value: function getBasePixel() {
      return this.bottom;
    }
  }]);

  return CategroyScale;
}(core_scale);

var scale_category = CategroyScale; // INTERNAL: static default options, registered in src/index.js

var _defaults = defaultConfig;
scale_category._defaults = _defaults;

var isNullOrUndef$1 = helpers$1.isNullOrUndef;
/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */

function generateTicks(generationOptions, dataRange) {
  var ticks = []; // To get a "nice" value for the tick spacing, we will use the appropriately named
  // "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
  // for details.

  var MIN_SPACING = 1e-14;
  var stepSize = generationOptions.stepSize;
  var unit = stepSize || 1;
  var maxNumSpaces = generationOptions.maxTicks - 1;
  var min = generationOptions.min;
  var max = generationOptions.max;
  var precision = generationOptions.precision;
  var rmin = dataRange.min;
  var rmax = dataRange.max;
  var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
  var factor, niceMin, niceMax, numSpaces; // Beyond MIN_SPACING floating point numbers being to lose precision
  // such that we can't do the math necessary to generate ticks

  if (spacing < MIN_SPACING && isNullOrUndef$1(min) && isNullOrUndef$1(max)) {
    return [{
      value: rmin
    }, {
      value: rmax
    }];
  }

  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);

  if (numSpaces > maxNumSpaces) {
    // If the calculated num of spaces exceeds maxNumSpaces, recalculate it
    spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
  }

  if (stepSize || isNullOrUndef$1(precision)) {
    // If a precision is not specified, calculate factor based on spacing
    factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
  } else {
    // If the user specified a precision, round to that number of decimal places
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }

  niceMin = Math.floor(rmin / spacing) * spacing;
  niceMax = Math.ceil(rmax / spacing) * spacing; // If min, max and stepSize is set and they make an evenly spaced scale use it.

  if (stepSize) {
    // If very close to our whole number, use it.
    if (!isNullOrUndef$1(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
      niceMin = min;
    }

    if (!isNullOrUndef$1(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
      niceMax = max;
    }
  }

  numSpaces = (niceMax - niceMin) / spacing; // If very close to our rounded value, use it.

  if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
    numSpaces = Math.round(numSpaces);
  } else {
    numSpaces = Math.ceil(numSpaces);
  }

  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  ticks.push({
    value: isNullOrUndef$1(min) ? niceMin : min
  });

  for (var j = 1; j < numSpaces; ++j) {
    ticks.push({
      value: Math.round((niceMin + j * spacing) * factor) / factor
    });
  }

  ticks.push({
    value: isNullOrUndef$1(max) ? niceMax : max
  });
  return ticks;
}

var LinearScaleBase =
/*#__PURE__*/
function (_Scale) {
  _inherits(LinearScaleBase, _Scale);

  function LinearScaleBase() {
    _classCallCheck(this, LinearScaleBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinearScaleBase).apply(this, arguments));
  }

  _createClass(LinearScaleBase, [{
    key: "_parse",
    value: function _parse(raw, index) {
      // eslint-disable-line no-unused-vars
      if (helpers$1.isNullOrUndef(raw)) {
        return NaN;
      }

      if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(raw)) {
        return NaN;
      }

      return +raw;
    }
  }, {
    key: "handleTickRangeOptions",
    value: function handleTickRangeOptions() {
      var me = this;
      var opts = me.options; // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
      // do nothing since that would make the chart weird. If the user really wants a weird chart
      // axis, they can manually override it

      if (opts.beginAtZero) {
        var minSign = helpers$1.sign(me.min);
        var maxSign = helpers$1.sign(me.max);

        if (minSign < 0 && maxSign < 0) {
          // move the top up to 0
          me.max = 0;
        } else if (minSign > 0 && maxSign > 0) {
          // move the bottom down to 0
          me.min = 0;
        }
      }

      var setMin = opts.min !== undefined || opts.suggestedMin !== undefined;
      var setMax = opts.max !== undefined || opts.suggestedMax !== undefined;

      if (opts.min !== undefined) {
        me.min = opts.min;
      } else if (opts.suggestedMin !== undefined) {
        if (me.min === null) {
          me.min = opts.suggestedMin;
        } else {
          me.min = Math.min(me.min, opts.suggestedMin);
        }
      }

      if (opts.max !== undefined) {
        me.max = opts.max;
      } else if (opts.suggestedMax !== undefined) {
        if (me.max === null) {
          me.max = opts.suggestedMax;
        } else {
          me.max = Math.max(me.max, opts.suggestedMax);
        }
      }

      if (setMin !== setMax) {
        // We set the min or the max but not both.
        // So ensure that our range is good
        // Inverted or 0 length range can happen when
        // min is set, and no datasets are visible
        if (me.min >= me.max) {
          if (setMin) {
            me.max = me.min + 1;
          } else {
            me.min = me.max - 1;
          }
        }
      }

      if (me.min === me.max) {
        me.max++;

        if (!opts.beginAtZero) {
          me.min--;
        }
      }
    }
  }, {
    key: "getTickLimit",
    value: function getTickLimit() {
      var me = this;
      var tickOpts = me.options.ticks;
      var stepSize = tickOpts.stepSize;
      var maxTicksLimit = tickOpts.maxTicksLimit;
      var maxTicks;

      if (stepSize) {
        maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
      } else {
        maxTicks = me._computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }

      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }

      return maxTicks;
    }
  }, {
    key: "_computeTickLimit",
    value: function _computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
  }, {
    key: "_handleDirectionalChanges",
    value: function _handleDirectionalChanges(ticks) {
      return ticks;
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks; // Figure out what the max number of ticks we can support it is based on the size of
      // the axis area. For now, we say that the minimum tick spacing in pixels must be 40
      // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
      // the graph. Make sure we always have at least 2 ticks

      var maxTicks = me.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      var numericGeneratorOptions = {
        maxTicks: maxTicks,
        min: opts.min,
        max: opts.max,
        precision: tickOpts.precision,
        stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
      };
      var ticks = generateTicks(numericGeneratorOptions, me);
      ticks = me._handleDirectionalChanges(ticks); // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale

      helpers$1._setMinAndMaxByKey(ticks, me, 'value');

      if (opts.reverse) {
        ticks.reverse();
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }

      return ticks;
    }
  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      var me = this;
      me._tickValues = ticks.map(function (t) {
        return t.value;
      });
      core_scale.prototype.generateTickLabels.call(me, ticks);
    }
  }, {
    key: "_configure",
    value: function _configure() {
      var me = this;
      var ticks = me.getTicks();
      var start = me.min;
      var end = me.max;
      var offset;

      core_scale.prototype._configure.call(me);

      if (me.options.offset && ticks.length) {
        offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }

      me._startValue = start;
      me._endValue = end;
      me._valueRange = end - start;
    }
  }]);

  return LinearScaleBase;
}(core_scale);

var scale_linearbase = LinearScaleBase;

var defaultConfig$1 = {
  position: 'left',
  ticks: {
    callback: core_ticks.formatters.linear
  }
};

var LinearScale =
/*#__PURE__*/
function (_LinearScaleBase) {
  _inherits(LinearScale, _LinearScaleBase);

  function LinearScale() {
    _classCallCheck(this, LinearScale);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinearScale).apply(this, arguments));
  }

  _createClass(LinearScale, [{
    key: "determineDataLimits",
    value: function determineDataLimits() {
      var me = this;
      var DEFAULT_MIN = 0;
      var DEFAULT_MAX = 1;

      var minmax = me._getMinMax(true);

      var min = minmax.min;
      var max = minmax.max;
      me.min = helpers$1.isFinite(min) && !isNaN(min) ? min : DEFAULT_MIN;
      me.max = helpers$1.isFinite(max) && !isNaN(max) ? max : DEFAULT_MAX; // Backward compatible inconsistent min for stacked

      if (me.options.stacked && min > 0) {
        me.min = 0;
      } // Common base implementation to handle min, max, beginAtZero


      me.handleTickRangeOptions();
    } // Returns the maximum number of ticks based on the scale dimension

  }, {
    key: "_computeTickLimit",
    value: function _computeTickLimit() {
      var me = this;
      var tickFont;

      if (me.isHorizontal()) {
        return Math.ceil(me.width / 40);
      }

      tickFont = helpers$1.options._parseFont(me.options.ticks);
      return Math.ceil(me.height / tickFont.lineHeight);
    }
    /**
     * Called after the ticks are built
     * @private
     */

  }, {
    key: "_handleDirectionalChanges",
    value: function _handleDirectionalChanges(ticks) {
      // If we are in a vertical orientation the top value is the highest so reverse the array
      return this.isHorizontal() ? ticks : ticks.reverse();
    } // Utils

  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      var me = this;
      return me.getPixelForDecimal((value - me._startValue) / me._valueRange);
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
  }, {
    key: "getPixelForTick",
    value: function getPixelForTick(index) {
      var ticks = this._tickValues;

      if (index < 0 || index > ticks.length - 1) {
        return null;
      }

      return this.getPixelForValue(ticks[index]);
    }
  }]);

  return LinearScale;
}(scale_linearbase);

var scale_linear = LinearScale; // INTERNAL: static default options, registered in src/index.js

var _defaults$1 = defaultConfig$1;
scale_linear._defaults = _defaults$1;

var valueOrDefault$9 = helpers$1.valueOrDefault;
var log10 = helpers$1.math.log10;
/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */

function generateTicks$1(generationOptions, dataRange) {
  var ticks = [];
  var tickVal = valueOrDefault$9(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
  var endExp = Math.floor(log10(dataRange.max));
  var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
  var exp, significand;

  if (tickVal === 0) {
    exp = Math.floor(log10(dataRange.minNotZero));
    significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
    ticks.push({
      value: tickVal
    });
    tickVal = significand * Math.pow(10, exp);
  } else {
    exp = Math.floor(log10(tickVal));
    significand = Math.floor(tickVal / Math.pow(10, exp));
  }

  var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

  do {
    ticks.push({
      value: tickVal
    });
    ++significand;

    if (significand === 10) {
      significand = 1;
      ++exp;
      precision = exp >= 0 ? 1 : precision;
    }

    tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
  } while (exp < endExp || exp === endExp && significand < endSignificand);

  var lastTick = valueOrDefault$9(generationOptions.max, tickVal);
  ticks.push({
    value: lastTick
  });
  return ticks;
}

var defaultConfig$2 = {
  position: 'left',
  // label settings
  ticks: {
    callback: core_ticks.formatters.logarithmic
  }
};

var LogarithmicScale =
/*#__PURE__*/
function (_Scale) {
  _inherits(LogarithmicScale, _Scale);

  function LogarithmicScale() {
    _classCallCheck(this, LogarithmicScale);

    return _possibleConstructorReturn(this, _getPrototypeOf(LogarithmicScale).apply(this, arguments));
  }

  _createClass(LogarithmicScale, [{
    key: "_parse",
    value: function _parse(raw, index) {
      // eslint-disable-line no-unused-vars
      var value = scale_linearbase.prototype._parse.apply(this, arguments);

      return helpers$1.isFinite(value) && value >= 0 ? value : undefined;
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {
      var me = this;

      var minmax = me._getMinMax(true);

      var min = minmax.min;
      var max = minmax.max;
      var minPositive = minmax.minPositive;
      me.min = helpers$1.isFinite(min) ? Math.max(0, min) : null;
      me.max = helpers$1.isFinite(max) ? Math.max(0, max) : null;
      me.minNotZero = helpers$1.isFinite(minPositive) ? minPositive : null;
      me.handleTickRangeOptions();
    }
  }, {
    key: "handleTickRangeOptions",
    value: function handleTickRangeOptions() {
      var me = this;
      var DEFAULT_MIN = 1;
      var DEFAULT_MAX = 10;
      var min = me.min;
      var max = me.max;

      if (min === max) {
        if (min !== 0 && min !== null) {
          min = Math.pow(10, Math.floor(log10(min)) - 1);
          max = Math.pow(10, Math.floor(log10(max)) + 1);
        } else {
          min = DEFAULT_MIN;
          max = DEFAULT_MAX;
        }
      }

      if (min === null) {
        min = Math.pow(10, Math.floor(log10(max)) - 1);
      }

      if (max === null) {
        max = min !== 0 ? Math.pow(10, Math.floor(log10(min)) + 1) : DEFAULT_MAX;
      }

      if (me.minNotZero === null) {
        if (min > 0) {
          me.minNotZero = min;
        } else if (max < 1) {
          me.minNotZero = Math.pow(10, Math.floor(log10(max)));
        } else {
          me.minNotZero = DEFAULT_MIN;
        }
      }

      me.min = min;
      me.max = max;
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      var me = this;
      var opts = me.options;
      var reverse = !me.isHorizontal();
      var generationOptions = {
        min: me._userMin,
        max: me._userMax
      };
      var ticks = generateTicks$1(generationOptions, me); // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale

      helpers$1._setMinAndMaxByKey(ticks, me, 'value');

      if (opts.reverse) {
        reverse = !reverse;
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }

      if (reverse) {
        ticks.reverse();
      }

      return ticks;
    }
  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      this._tickValues = ticks.map(function (t) {
        return t.value;
      });
      return core_scale.prototype.generateTickLabels.call(this, ticks);
    }
  }, {
    key: "getPixelForTick",
    value: function getPixelForTick(index) {
      var ticks = this._tickValues;

      if (index < 0 || index > ticks.length - 1) {
        return null;
      }

      return this.getPixelForValue(ticks[index]);
    }
    /**
     * Returns the value of the first tick.
     * @param {number} value - The minimum not zero value.
     * @return {number} The first tick value.
     * @private
     */

  }, {
    key: "_getFirstTickValue",
    value: function _getFirstTickValue(value) {
      var exp = Math.floor(log10(value));
      var significand = Math.floor(value / Math.pow(10, exp));
      return significand * Math.pow(10, exp);
    }
  }, {
    key: "_configure",
    value: function _configure() {
      var me = this;
      var start = me.min;
      var offset = 0;

      core_scale.prototype._configure.call(me);

      if (start === 0) {
        start = me._getFirstTickValue(me.minNotZero);
        offset = valueOrDefault$9(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
      }

      me._startValue = log10(start);
      me._valueOffset = offset;
      me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
    }
  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      var me = this;
      var decimal = 0;

      if (value > me.min && value > 0) {
        decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
      }

      return me.getPixelForDecimal(decimal);
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      var me = this;
      var decimal = me.getDecimalForPixel(pixel);
      return decimal === 0 && me.min === 0 ? 0 : Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
    }
  }]);

  return LogarithmicScale;
}(core_scale);

var scale_logarithmic = LogarithmicScale; // INTERNAL: static default options, registered in src/index.js

var _defaults$2 = defaultConfig$2;
scale_logarithmic._defaults = _defaults$2;

var valueOrDefault$a = helpers$1.valueOrDefault;
var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;
var resolve$5 = helpers$1.options.resolve;
var defaultConfig$3 = {
  display: true,
  // Boolean - Whether to animate scaling the chart from the centre
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    color: 'rgba(0,0,0,0.1)',
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  gridLines: {
    circular: false
  },
  // label settings
  ticks: {
    // Boolean - Show a backdrop to the scale label
    showLabelBackdrop: true,
    // String - The colour of the label backdrop
    backdropColor: 'rgba(255,255,255,0.75)',
    // Number - The backdrop padding above & below the label in pixels
    backdropPaddingY: 2,
    // Number - The backdrop padding to the side of the label in pixels
    backdropPaddingX: 2,
    callback: core_ticks.formatters.linear
  },
  pointLabels: {
    // Boolean - if true, show point labels
    display: true,
    // Number - Point label font size in pixels
    fontSize: 10,
    // Function - Used to convert point labels
    callback: function callback(label) {
      return label;
    }
  }
};

function getTickBackdropHeight(opts) {
  var tickOpts = opts.ticks;

  if (tickOpts.display && opts.display) {
    return valueOrDefault$a(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
  }

  return 0;
}

function measureLabelSize(ctx, lineHeight, label) {
  if (helpers$1.isArray(label)) {
    return {
      w: helpers$1.longestText(ctx, ctx.font, label),
      h: label.length * lineHeight
    };
  }

  return {
    w: ctx.measureText(label).width,
    h: lineHeight
  };
}

function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - size / 2,
      end: pos + size / 2
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }

  return {
    start: pos,
    end: pos + size
  };
}
/**
 * Helper function to fit a radial linear scale with point labels
 */


function fitWithPointLabels(scale) {
  // Right, this is really confusing and there is a lot of maths going on here
  // The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
  //
  // Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
  //
  // Solution:
  //
  // We assume the radius of the polygon is half the size of the canvas at first
  // at each index we check if the text overlaps.
  //
  // Where it does, we store that angle and that index.
  //
  // After finding the largest index and angle we calculate how much we need to remove
  // from the shape radius to move the point inwards by that x.
  //
  // We average the left and right distances to get the maximum shape radius that can fit in the box
  // along with labels.
  //
  // Once we have that, we can find the centre point for the chart, by taking the x text protrusion
  // on each side, removing that from the size, halving it and adding the left x protrusion width.
  //
  // This will mean we have a shape fitted to the canvas, as large as it can be with the labels
  // and position it in the most space efficient manner
  //
  // https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
  var plFont = helpers$1.options._parseFont(scale.options.pointLabels); // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
  // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points


  var furthestLimits = {
    l: 0,
    r: scale.width,
    t: 0,
    b: scale.height - scale.paddingTop
  };
  var furthestAngles = {};
  var i, textSize, pointPosition;
  scale.ctx.font = plFont.string;
  scale._pointLabelSizes = [];
  var valueCount = scale.chart.data.labels.length;

  for (i = 0; i < valueCount; i++) {
    pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
    textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
    scale._pointLabelSizes[i] = textSize; // Add quarter circle to make degree 0 mean top of circle

    var angleRadians = scale.getIndexAngle(i);
    var angle = helpers$1.toDegrees(angleRadians) % 360;
    var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

    if (hLimits.start < furthestLimits.l) {
      furthestLimits.l = hLimits.start;
      furthestAngles.l = angleRadians;
    }

    if (hLimits.end > furthestLimits.r) {
      furthestLimits.r = hLimits.end;
      furthestAngles.r = angleRadians;
    }

    if (vLimits.start < furthestLimits.t) {
      furthestLimits.t = vLimits.start;
      furthestAngles.t = angleRadians;
    }

    if (vLimits.end > furthestLimits.b) {
      furthestLimits.b = vLimits.end;
      furthestAngles.b = angleRadians;
    }
  }

  scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
}

function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }

  return 'right';
}

function fillText(ctx, text, position, lineHeight) {
  var y = position.y + lineHeight / 2;
  var i, ilen;

  if (helpers$1.isArray(text)) {
    for (i = 0, ilen = text.length; i < ilen; ++i) {
      ctx.fillText(text[i], position.x, y);
      y += lineHeight;
    }
  } else {
    ctx.fillText(text, position.x, y);
  }
}

function adjustPointPositionForLabelHeight(angle, textSize, position) {
  if (angle === 90 || angle === 270) {
    position.y -= textSize.h / 2;
  } else if (angle > 270 || angle < 90) {
    position.y -= textSize.h;
  }
}

function drawPointLabels(scale) {
  var ctx = scale.ctx;
  var opts = scale.options;
  var pointLabelOpts = opts.pointLabels;
  var tickBackdropHeight = getTickBackdropHeight(opts);
  var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

  var plFont = helpers$1.options._parseFont(pointLabelOpts);

  ctx.save();
  ctx.font = plFont.string;
  ctx.textBaseline = 'middle';

  for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
    // Extra pixels out for some label spacing
    var extra = i === 0 ? tickBackdropHeight / 2 : 0;
    var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5); // Keep this in loop since we may support array properties here

    var pointLabelFontColor = valueAtIndexOrDefault(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
    ctx.fillStyle = pointLabelFontColor;
    var angleRadians = scale.getIndexAngle(i);
    var angle = helpers$1.toDegrees(angleRadians);
    ctx.textAlign = getTextAlignForAngle(angle);
    adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
    fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
  }

  ctx.restore();
}

function drawRadiusLine(scale, gridLineOpts, radius, index) {
  var ctx = scale.ctx;
  var circular = gridLineOpts.circular;
  var valueCount = scale.chart.data.labels.length;
  var lineColor = valueAtIndexOrDefault(gridLineOpts.color, index - 1);
  var lineWidth = valueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);
  var pointPosition;

  if (!circular && !valueCount || !lineColor || !lineWidth) {
    return;
  }

  ctx.save();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;

  if (ctx.setLineDash) {
    ctx.setLineDash(gridLineOpts.borderDash || []);
    ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
  }

  ctx.beginPath();

  if (circular) {
    // Draw circular arcs between the points
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
  } else {
    // Draw straight lines connecting each index
    pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);

    for (var i = 1; i < valueCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }

  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function numberOrZero(param) {
  return helpers$1.isNumber(param) ? param : 0;
}

var RadialLinearScale =
/*#__PURE__*/
function (_LinearScaleBase) {
  _inherits(RadialLinearScale, _LinearScaleBase);

  function RadialLinearScale() {
    _classCallCheck(this, RadialLinearScale);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadialLinearScale).apply(this, arguments));
  }

  _createClass(RadialLinearScale, [{
    key: "setDimensions",
    value: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      me.width = me.maxWidth;
      me.height = me.maxHeight;
      me.paddingTop = getTickBackdropHeight(me.options) / 2;
      me.xCenter = Math.floor(me.width / 2);
      me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
      me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {
      var me = this;

      var minmax = me._getMinMax(false);

      var min = minmax.min;
      var max = minmax.max;
      me.min = helpers$1.isFinite(min) && !isNaN(min) ? min : 0;
      me.max = helpers$1.isFinite(max) && !isNaN(max) ? max : 0; // Common base implementation to handle min, max, beginAtZero

      me.handleTickRangeOptions();
    } // Returns the maximum number of ticks based on the scale dimension

  }, {
    key: "_computeTickLimit",
    value: function _computeTickLimit() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      var me = this;
      scale_linearbase.prototype.generateTickLabels.call(me, ticks); // Point labels

      me.pointLabels = me.chart.data.labels.map(function () {
        var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
        return label || label === 0 ? label : '';
      });
    }
  }, {
    key: "fit",
    value: function fit() {
      var me = this;
      var opts = me.options;

      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(me);
      } else {
        me.setCenterPoint(0, 0, 0, 0);
      }
    }
    /**
     * Set radius reductions and determine new radius and center point
     * @private
     */

  }, {
    key: "setReductions",
    value: function setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
      var me = this;
      var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
      var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
      var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
      var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
      radiusReductionLeft = numberOrZero(radiusReductionLeft);
      radiusReductionRight = numberOrZero(radiusReductionRight);
      radiusReductionTop = numberOrZero(radiusReductionTop);
      radiusReductionBottom = numberOrZero(radiusReductionBottom);
      me.drawingArea = Math.min(Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2), Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
      me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
    }
  }, {
    key: "setCenterPoint",
    value: function setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
      var me = this;
      var maxRight = me.width - rightMovement - me.drawingArea;
      var maxLeft = leftMovement + me.drawingArea;
      var maxTop = topMovement + me.drawingArea;
      var maxBottom = me.height - me.paddingTop - bottomMovement - me.drawingArea;
      me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
      me.yCenter = Math.floor((maxTop + maxBottom) / 2 + me.top + me.paddingTop);
    }
  }, {
    key: "getIndexAngle",
    value: function getIndexAngle(index) {
      var chart = this.chart;
      var angleMultiplier = 360 / chart.data.labels.length;
      var options = chart.options || {};
      var startAngle = options.startAngle || 0; // Start from the top instead of right, so remove a quarter of the circle

      var angle = (index * angleMultiplier + startAngle) % 360;
      return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
    }
  }, {
    key: "getDistanceFromCenterForValue",
    value: function getDistanceFromCenterForValue(value) {
      var me = this;

      if (helpers$1.isNullOrUndef(value)) {
        return NaN;
      } // Take into account half font size + the yPadding of the top value


      var scalingFactor = me.drawingArea / (me.max - me.min);

      if (me.options.reverse) {
        return (me.max - value) * scalingFactor;
      }

      return (value - me.min) * scalingFactor;
    }
  }, {
    key: "getPointPosition",
    value: function getPointPosition(index, distanceFromCenter) {
      var me = this;
      var thisAngle = me.getIndexAngle(index) - Math.PI / 2;
      return {
        x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
        y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
      };
    }
  }, {
    key: "getPointPositionForValue",
    value: function getPointPositionForValue(index, value) {
      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
  }, {
    key: "getBasePosition",
    value: function getBasePosition(index) {
      var me = this;
      var min = me.min;
      var max = me.max;
      return me.getPointPositionForValue(index || 0, me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0);
    }
    /**
     * @private
     */

  }, {
    key: "_drawGrid",
    value: function _drawGrid() {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var gridLineOpts = opts.gridLines;
      var angleLineOpts = opts.angleLines;
      var lineWidth = valueOrDefault$a(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
      var lineColor = valueOrDefault$a(angleLineOpts.color, gridLineOpts.color);
      var i, offset, position;

      if (opts.pointLabels.display) {
        drawPointLabels(me);
      }

      if (gridLineOpts.display) {
        helpers$1.each(me.ticks, function (tick, index) {
          if (index !== 0) {
            offset = me.getDistanceFromCenterForValue(me._tickValues[index]);
            drawRadiusLine(me, gridLineOpts, offset, index);
          }
        });
      }

      if (angleLineOpts.display && lineWidth && lineColor) {
        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;

        if (ctx.setLineDash) {
          ctx.setLineDash(resolve$5([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
          ctx.lineDashOffset = resolve$5([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
        }

        for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
          offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
          position = me.getPointPosition(i, offset);
          ctx.beginPath();
          ctx.moveTo(me.xCenter, me.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }

        ctx.restore();
      }
    }
    /**
     * @private
     */

  }, {
    key: "_drawLabels",
    value: function _drawLabels() {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var tickOpts = opts.ticks;

      if (!tickOpts.display) {
        return;
      }

      var startAngle = me.getIndexAngle(0);

      var tickFont = helpers$1.options._parseFont(tickOpts);

      var tickFontColor = valueOrDefault$a(tickOpts.fontColor, core_defaults.global.defaultFontColor);
      var offset, width;
      ctx.save();
      ctx.font = tickFont.string;
      ctx.translate(me.xCenter, me.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      helpers$1.each(me.ticks, function (tick, index) {
        if (index === 0 && !opts.reverse) {
          return;
        }

        offset = me.getDistanceFromCenterForValue(me._tickValues[index]);

        if (tickOpts.showLabelBackdrop) {
          width = ctx.measureText(tick.label).width;
          ctx.fillStyle = tickOpts.backdropColor;
          ctx.fillRect(-width / 2 - tickOpts.backdropPaddingX, -offset - tickFont.size / 2 - tickOpts.backdropPaddingY, width + tickOpts.backdropPaddingX * 2, tickFont.size + tickOpts.backdropPaddingY * 2);
        }

        ctx.fillStyle = tickFontColor;
        ctx.fillText(tick.label, 0, -offset);
      });
      ctx.restore();
    }
    /**
     * @private
     */

  }, {
    key: "_drawTitle",
    value: function _drawTitle() {}
  }]);

  return RadialLinearScale;
}(scale_linearbase);

var scale_radialLinear = RadialLinearScale; // INTERNAL: static default options, registered in src/index.js

var _defaults$3 = defaultConfig$3;
scale_radialLinear._defaults = _defaults$3;

var resolve$6 = helpers$1.options.resolve;
var valueOrDefault$b = helpers$1.valueOrDefault; // Integer constants are from the ES6 spec.

var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
var INTERVALS = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2.628e9,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7.884e9,
    steps: 4
  },
  year: {
    common: true,
    size: 3.154e10
  }
};
var UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
  return a - b;
}

function arrayUnique(items) {
  var hash = {};
  var out = [];
  var i, ilen, item;

  for (i = 0, ilen = items.length; i < ilen; ++i) {
    item = items[i];

    if (!hash[item]) {
      hash[item] = true;
      out.push(item);
    }
  }

  return out;
}
/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */


function buildLookupTable(timestamps, min, max, distribution) {
  if (distribution === 'linear' || !timestamps.length) {
    return [{
      time: min,
      pos: 0
    }, {
      time: max,
      pos: 1
    }];
  }

  var table = [];
  var items = [min];
  var i, ilen, prev, curr, next;

  for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
    curr = timestamps[i];

    if (curr > min && curr < max) {
      items.push(curr);
    }
  }

  items.push(max);

  for (i = 0, ilen = items.length; i < ilen; ++i) {
    next = items[i + 1];
    prev = items[i - 1];
    curr = items[i]; // only add points that breaks the scale linearity

    if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
      table.push({
        time: curr,
        pos: i / (ilen - 1)
      });
    }
  }

  return table;
} // @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/


function lookup(table, key, value) {
  var lo = 0;
  var hi = table.length - 1;
  var mid, i0, i1;

  while (lo >= 0 && lo <= hi) {
    mid = lo + hi >> 1;
    i0 = table[mid - 1] || null;
    i1 = table[mid];

    if (!i0) {
      // given value is outside table (before first item)
      return {
        lo: null,
        hi: i1
      };
    } else if (i1[key] < value) {
      lo = mid + 1;
    } else if (i0[key] > value) {
      hi = mid - 1;
    } else {
      return {
        lo: i0,
        hi: i1
      };
    }
  } // given value is outside table (after last item)


  return {
    lo: i1,
    hi: null
  };
}
/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */


function interpolate$1(table, skey, sval, tkey) {
  var range = lookup(table, skey, sval); // Note: the lookup table ALWAYS contains at least 2 items (min and max)

  var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
  var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;
  var span = next[skey] - prev[skey];
  var ratio = span ? (sval - prev[skey]) / span : 0;
  var offset = (next[tkey] - prev[tkey]) * ratio;
  return prev[tkey] + offset;
}

function parse(scale, input) {
  if (helpers$1.isNullOrUndef(input)) {
    return null;
  }

  var adapter = scale._adapter;
  var options = scale.options.time;
  var parser = options.parser;
  var value = input;

  if (typeof parser === 'function') {
    value = parser(value);
  } // Only parse if its not a timestamp already


  if (!helpers$1.isFinite(value)) {
    value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
  }

  if (value === null) {
    return value;
  }

  if (options.round) {
    value = scale._adapter.startOf(value, options.round);
  }

  return +value;
}
/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */


function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  var ilen = UNITS.length;
  var i, interval, factor;

  for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    interval = INTERVALS[UNITS[i]];
    factor = interval.steps ? interval.steps : MAX_INTEGER;

    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }

  return UNITS[ilen - 1];
}
/**
 * Figures out what unit to format a set of ticks with
 */


function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  var i, unit;

  for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    unit = UNITS[i];

    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }

  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
  for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */


function generate(scale, min, max, capacity) {
  var adapter = scale._adapter;
  var options = scale.options;
  var timeOpts = options.time;
  var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
  var stepSize = resolve$6([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
  var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
  var first = min;
  var ticks = [];
  var time; // For 'week' unit, handle the first day of week option

  if (weekday) {
    first = +adapter.startOf(first, 'isoWeek', weekday);
  } // Align first ticks on unit


  first = +adapter.startOf(first, weekday ? 'day' : minor); // Prevent browser from freezing in case user options request millions of milliseconds

  if (adapter.diff(max, min, minor) > 100000 * stepSize) {
    throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
  }

  for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
    ticks.push(time);
  }

  if (time === max || options.bounds === 'ticks') {
    ticks.push(time);
  }

  return ticks;
}
/**
 * Returns the start and end offsets from edges in the form of {start, end}
 * where each value is a relative width to the scale and ranges between 0 and 1.
 * They add extra margins on the both sides by scaling down the original scale.
 * Offsets are added when the `offset` option is true.
 */


function computeOffsets(table, ticks, min, max, options) {
  var start = 0;
  var end = 0;
  var first, last;

  if (options.offset && ticks.length) {
    first = interpolate$1(table, 'time', ticks[0], 'pos');

    if (ticks.length === 1) {
      start = 1 - first;
    } else {
      start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
    }

    last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');

    if (ticks.length === 1) {
      end = last;
    } else {
      end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
    }
  }

  return {
    start: start,
    end: end,
    factor: 1 / (start + 1 + end)
  };
}

function setMajorTicks(scale, ticks, map, majorUnit) {
  var adapter = scale._adapter;
  var first = +adapter.startOf(ticks[0].value, majorUnit);
  var last = ticks[ticks.length - 1].value;
  var major, index;

  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];

    if (index >= 0) {
      ticks[index].major = true;
    }
  }

  return ticks;
}

function ticksFromTimestamps(scale, values, majorUnit) {
  var ticks = [];
  var map = {};
  var ilen = values.length;
  var i, value;

  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value: value,
      major: false
    });
  } // We set the major ticks separately from the above loop because calling startOf for every tick
  // is expensive when there is a large number of ticks


  return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}

function getDataTimestamps(scale) {
  var timestamps = scale._cache.data || [];
  var i, ilen, metas;

  if (timestamps.length) {
    return timestamps;
  }

  metas = scale._getMatchingVisibleMetas();

  for (i = 0, ilen = metas.length; i < ilen; ++i) {
    timestamps = timestamps.concat(metas[i].controller._getAllParsedValues(scale));
  } // We can not assume data is in order or unique - not even for single dataset
  // It seems to be somewhat faster to do sorting first


  return scale._cache.data = arrayUnique(timestamps.sort(sorter));
}

function getLabelTimestamps(scale) {
  var timestamps = scale._cache.labels || [];
  var i, ilen, labels;

  if (timestamps.length) {
    return timestamps;
  }

  labels = scale._getLabels();

  for (i = 0, ilen = labels.length; i < ilen; ++i) {
    timestamps.push(parse(scale, labels[i]));
  } // We could assume labels are in order and unique - but let's not


  return scale._cache.labels = arrayUnique(timestamps.sort(sorter));
}

function getAllTimestamps(scale) {
  var timestamps = scale._cache.all || [];
  var label, data;

  if (timestamps.length) {
    return timestamps;
  }

  data = getDataTimestamps(scale);
  label = getLabelTimestamps(scale);

  if (data.length && label.length) {
    // If combining labels and data (data might not contain all labels),
    // we need to recheck uniqueness and sort
    timestamps = arrayUnique(data.concat(label).sort(sorter));
  } else {
    timestamps = data.length ? data : label;
  }

  timestamps = scale._cache.all = timestamps;
  return timestamps;
}

function getTimestampsForTicks(scale) {
  var min = scale.min;
  var max = scale.max;
  var options = scale.options;

  var capacity = scale._getLabelCapacity(min);

  var source = options.ticks.source;
  var timestamps;

  if (source === 'data' || source === 'auto' && options.distribution === 'series') {
    timestamps = getAllTimestamps(scale);
  } else if (source === 'labels') {
    timestamps = getLabelTimestamps(scale);
  } else {
    timestamps = generate(scale, min, max, capacity);
  }

  return timestamps;
}

function getTimestampsForTable(scale) {
  return scale.options.distribution === 'series' ? getAllTimestamps(scale) : [scale.min, scale.max];
}

function getLabelBounds(scale) {
  var min = Number.POSITIVE_INFINITY;
  var max = Number.NEGATIVE_INFINITY;
  var arr = getLabelTimestamps(scale);

  if (arr.length) {
    min = arr[0];
    max = arr[arr.length - 1];
  }

  return {
    min: min,
    max: max
  };
}
/**
 * Return subset of `timestamps` between `min` and `max`.
 * Timestamps are assumend to be in sorted order.
 * @param {int[]} timestamps - array of timestamps
 * @param {int} min - min value (timestamp)
 * @param {int} max - max value (timestamp)
 */


function filterBetween(timestamps, min, max) {
  var start = 0;
  var end = timestamps.length - 1;

  while (start < end && timestamps[start] < min) {
    start++;
  }

  while (end > start && timestamps[end] > max) {
    end--;
  }

  end++; // slice does not include last element

  return start > 0 || end < timestamps.length ? timestamps.slice(start, end) : timestamps;
}

var defaultConfig$4 = {
  position: 'bottom',

  /**
   * Data distribution along the scale:
   * - 'linear': data are spread according to their time (distances can vary),
   * - 'series': data are spread at the same distance from each other.
   * @see https://github.com/chartjs/Chart.js/pull/4507
   * @since 2.7.0
   */
  distribution: 'linear',

  /**
   * Scale boundary strategy (bypassed by min/max time options)
   * - `data`: make sure data are fully visible, ticks outside are removed
   * - `ticks`: make sure ticks are fully visible, data outside are truncated
   * @see https://github.com/chartjs/Chart.js/pull/4556
   * @since 2.7.0
   */
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
    unit: false,
    // false == automatic or override with week, month, year, etc.
    round: false,
    // none, or override with week, month, year, etc.
    isoWeekday: false,
    // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    autoSkip: false,

    /**
     * Ticks generation input values:
     * - 'auto': generates "optimal" ticks based on scale size and time options.
     * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
     * - 'labels': generates ticks from user given `data.labels` values ONLY.
     * @see https://github.com/chartjs/Chart.js/pull/4507
     * @since 2.7.0
     */
    source: 'auto',
    major: {
      enabled: false
    }
  }
};

var TimeScale =
/*#__PURE__*/
function (_Scale) {
  _inherits(TimeScale, _Scale);

  _createClass(TimeScale, [{
    key: "_parse",
    value: function _parse(raw, index) {
      // eslint-disable-line no-unused-vars
      if (raw === undefined) {
        return NaN;
      }

      return parse(this, raw);
    }
  }, {
    key: "_parseObject",
    value: function _parseObject(obj, axis, index) {
      if (obj && obj.t) {
        return this._parse(obj.t, index);
      }

      if (obj[axis] !== undefined) {
        return this._parse(obj[axis], index);
      }

      return null;
    }
  }, {
    key: "_invalidateCaches",
    value: function _invalidateCaches() {
      this._cache = {};
    }
  }]);

  function TimeScale(props) {
    var _this;

    _classCallCheck(this, TimeScale);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeScale).call(this, props));

    var me = _assertThisInitialized(_this);

    var options = me.options;
    var time = options.time || (options.time = {});
    var adapter = me._adapter = new core_adapters._date(options.adapters.date);
    me._cache = {}; // Backward compatibility: before introducing adapter, `displayFormats` was
    // supposed to contain *all* unit/string pairs but this can't be resolved
    // when loading the scale (adapters are loaded afterward), so let's populate
    // missing formats on update

    helpers$1.mergeIf(time.displayFormats, adapter.formats());
    return _this;
  }

  _createClass(TimeScale, [{
    key: "determineDataLimits",
    value: function determineDataLimits() {
      var me = this;
      var options = me.options;
      var adapter = me._adapter;
      var unit = options.time.unit || 'day';

      var _me$_getUserBounds = me._getUserBounds(),
          min = _me$_getUserBounds.min,
          max = _me$_getUserBounds.max,
          minDefined = _me$_getUserBounds.minDefined,
          maxDefined = _me$_getUserBounds.maxDefined;

      function _applyBounds(bounds) {
        if (!minDefined && !isNaN(bounds.min)) {
          min = Math.min(min, bounds.min);
        }

        if (!maxDefined && !isNaN(bounds.max)) {
          max = Math.max(max, bounds.max);
        }
      } // If we have user provided `min` and `max` labels / data bounds can be ignored


      if (!minDefined || !maxDefined) {
        // Labels are always considered, when user did not force bounds
        _applyBounds(getLabelBounds(me)); // If `bounds` is `'ticks'` and `ticks.source` is `'labels'`,
        // data bounds are ignored (and don't need to be determined)


        if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
          _applyBounds(me._getMinMax(false));
        }
      }

      min = helpers$1.isFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
      max = helpers$1.isFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1; // Make sure that max is strictly higher than min (required by the lookup table)

      me.min = Math.min(min, max);
      me.max = Math.max(min + 1, max);
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      var me = this;
      var options = me.options;
      var timeOpts = options.time;
      var tickOpts = options.ticks;
      var distribution = options.distribution;
      var ticks = [];
      var min, max, timestamps;
      timestamps = getTimestampsForTicks(me);

      if (options.bounds === 'ticks' && timestamps.length) {
        me.min = me._userMin || timestamps[0];
        me.max = me._userMax || timestamps[timestamps.length - 1];
      }

      min = me.min;
      max = me.max;
      ticks = filterBetween(timestamps, min, max); // PRIVATE
      // determineUnitForFormatting relies on the number of ticks so we don't use it when
      // autoSkip is enabled because we don't yet know what the final number of ticks will be

      me._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, me._getLabelCapacity(min)) : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
      me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined : determineMajorUnit(me._unit);
      me._table = buildLookupTable(getTimestampsForTable(me), min, max, distribution);
      me._offsets = computeOffsets(me._table, ticks, min, max, options);

      if (options.reverse) {
        ticks.reverse();
      }

      return ticksFromTimestamps(me, ticks, me._majorUnit);
    }
  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      var me = this;
      var adapter = me._adapter;
      var timeOpts = me.options.time;

      if (timeOpts.tooltipFormat) {
        return adapter.format(value, timeOpts.tooltipFormat);
      }

      return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    /**
     * Function to format an individual tick mark
     * @private
     */

  }, {
    key: "_tickFormatFunction",
    value: function _tickFormatFunction(time, index, ticks, format) {
      var me = this;
      var adapter = me._adapter;
      var options = me.options;
      var formats = options.time.displayFormats;
      var minorFormat = formats[me._unit];
      var majorUnit = me._majorUnit;
      var majorFormat = formats[majorUnit];
      var tick = ticks[index];
      var tickOpts = options.ticks;
      var major = majorUnit && majorFormat && tick && tick.major;
      var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
      var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
      var formatter = resolve$6([nestedTickOpts.callback, tickOpts.callback]);
      return formatter ? formatter(label, index, ticks) : label;
    }
  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      var i, ilen, tick;

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        tick.label = this._tickFormatFunction(tick.value, i, ticks);
      }
    }
    /**
     * @private
     */

  }, {
    key: "_getPixelForOffset",
    value: function _getPixelForOffset(time) {
      var me = this;
      var offsets = me._offsets;
      var pos = interpolate$1(me._table, 'time', time, 'pos');
      return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      var me = this;

      if (typeof value !== 'number') {
        value = parse(me, value);
      }

      if (value !== null) {
        return me._getPixelForOffset(value);
      }
    }
  }, {
    key: "getPixelForTick",
    value: function getPixelForTick(index) {
      var ticks = this.getTicks();
      return index >= 0 && index < ticks.length ? this._getPixelForOffset(ticks[index].value) : null;
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      var me = this;
      var offsets = me._offsets;
      var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return interpolate$1(me._table, 'pos', pos, 'time');
    }
    /**
     * @private
     */

  }, {
    key: "_getLabelSize",
    value: function _getLabelSize(label) {
      var me = this;
      var ticksOpts = me.options.ticks;
      var tickLabelWidth = me.ctx.measureText(label).width;
      var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      var cosRotation = Math.cos(angle);
      var sinRotation = Math.sin(angle);
      var tickFontSize = valueOrDefault$b(ticksOpts.fontSize, core_defaults.global.defaultFontSize);
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    }
    /**
     * @private
     */

  }, {
    key: "_getLabelCapacity",
    value: function _getLabelCapacity(exampleTime) {
      var me = this;
      var timeOpts = me.options.time;
      var displayFormats = timeOpts.displayFormats; // pick the longest format (milliseconds) for guestimation

      var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;

      var exampleLabel = me._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);

      var size = me._getLabelSize(exampleLabel);

      var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

      if (me.options.offset) {
        capacity--;
      }

      return capacity > 0 ? capacity : 1;
    }
  }]);

  return TimeScale;
}(core_scale);

var scale_time = TimeScale; // INTERNAL: static default options, registered in src/index.js

var _defaults$4 = defaultConfig$4;
scale_time._defaults = _defaults$4;

var scales = {
  category: scale_category,
  linear: scale_linear,
  logarithmic: scale_logarithmic,
  radialLinear: scale_radialLinear,
  time: scale_time
};

var FORMATS = {
  datetime: 'MMM D, YYYY, h:mm:ss a',
  millisecond: 'h:mm:ss.SSS a',
  second: 'h:mm:ss a',
  minute: 'h:mm a',
  hour: 'hA',
  day: 'MMM D',
  week: 'll',
  month: 'MMM YYYY',
  quarter: '[Q]Q - YYYY',
  year: 'YYYY'
};

core_adapters._date.override(typeof moment === 'function' ? {
  _id: 'moment',
  // DEBUG ONLY
  formats: function formats() {
    return FORMATS;
  },
  parse: function parse(value, format) {
    if (typeof value === 'string' && typeof format === 'string') {
      value = moment(value, format);
    } else if (!(value instanceof moment)) {
      value = moment(value);
    }

    return value.isValid() ? value.valueOf() : null;
  },
  format: function format(time, _format) {
    return moment(time).format(_format);
  },
  add: function add(time, amount, unit) {
    return moment(time).add(amount, unit).valueOf();
  },
  diff: function diff(max, min, unit) {
    return moment(max).diff(moment(min), unit);
  },
  startOf: function startOf(time, unit, weekday) {
    time = moment(time);

    if (unit === 'isoWeek') {
      return time.isoWeekday(weekday).valueOf();
    }

    return time.startOf(unit).valueOf();
  },
  endOf: function endOf(time, unit) {
    return moment(time).endOf(unit).valueOf();
  }
} : {});

core_defaults._set('global', {
  plugins: {
    filler: {
      propagate: true
    }
  }
});

var mappers = {
  dataset: function dataset(source) {
    var index = source.fill;
    var chart = source.chart;
    var meta = chart.getDatasetMeta(index);
    var visible = meta && chart.isDatasetVisible(index);
    var points = visible && meta.dataset._children || [];
    var length = points.length || 0;
    return !length ? null : function (point, i) {
      return i < length && points[i]._view || null;
    };
  },
  boundary: function boundary(source) {
    var boundary = source.boundary;
    var x = boundary ? boundary.x : null;
    var y = boundary ? boundary.y : null;

    if (helpers$1.isArray(boundary)) {
      return function (point, i) {
        return boundary[i];
      };
    }

    return function (point) {
      return {
        x: x === null ? point.x : x,
        y: y === null ? point.y : y,
        boundary: true
      };
    };
  }
}; // @todo if (fill[0] === '#')

function decodeFill(el, index, count) {
  var model = el._model || {};
  var fill = model.fill;
  var target;

  if (fill === undefined) {
    fill = !!model.backgroundColor;
  }

  if (fill === false || fill === null) {
    return false;
  }

  if (fill === true) {
    return 'origin';
  }

  target = parseFloat(fill, 10);

  if (isFinite(target) && Math.floor(target) === target) {
    if (fill[0] === '-' || fill[0] === '+') {
      target = index + target;
    }

    if (target === index || target < 0 || target >= count) {
      return false;
    }

    return target;
  }

  switch (fill) {
    // compatibility
    case 'bottom':
      return 'start';

    case 'top':
      return 'end';

    case 'zero':
      return 'origin';
    // supported boundaries

    case 'origin':
    case 'start':
    case 'end':
      return fill;
    // invalid fill values

    default:
      return false;
  }
}

function computeLinearBoundary(source) {
  var model = source.el._model || {};
  var scale = source.scale || {};
  var fill = source.fill;
  var target = null;
  var horizontal;

  if (isFinite(fill)) {
    return null;
  } // Backward compatibility: until v3, we still need to support boundary values set on
  // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
  // controllers might still use it (e.g. the Smith chart).


  if (fill === 'start') {
    target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
  } else if (fill === 'end') {
    target = model.scaleTop === undefined ? scale.top : model.scaleTop;
  } else if (model.scaleZero !== undefined) {
    target = model.scaleZero;
  } else if (scale.getBasePixel) {
    target = scale.getBasePixel();
  }

  if (target !== undefined && target !== null) {
    if (target.x !== undefined && target.y !== undefined) {
      return target;
    }

    if (helpers$1.isFinite(target)) {
      horizontal = scale.isHorizontal();
      return {
        x: horizontal ? target : null,
        y: horizontal ? null : target,
        boundary: true
      };
    }
  }

  return null;
}

function computeCircularBoundary(source) {
  var scale = source.scale;
  var options = scale.options;
  var length = scale.chart.data.labels.length;
  var fill = source.fill;
  var target = [];
  var start, end, center, i, point;

  if (!length) {
    return null;
  }

  start = options.reverse ? scale.max : scale.min;
  end = options.reverse ? scale.min : scale.max;
  center = scale.getPointPositionForValue(0, start);

  for (i = 0; i < length; ++i) {
    point = fill === 'start' || fill === 'end' ? scale.getPointPositionForValue(i, fill === 'start' ? start : end) : scale.getBasePosition(i);

    if (options.gridLines.circular) {
      point.cx = center.x;
      point.cy = center.y;
      point.angle = scale.getIndexAngle(i) - Math.PI / 2;
    }

    point.boundary = true;
    target.push(point);
  }

  return target;
}

function computeBoundary(source) {
  var scale = source.scale || {};

  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }

  return computeLinearBoundary(source);
}

function resolveTarget(sources, index, propagate) {
  var source = sources[index];
  var fill = source.fill;
  var visited = [index];
  var target;

  if (!propagate) {
    return fill;
  }

  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!isFinite(fill)) {
      return fill;
    }

    target = sources[fill];

    if (!target) {
      return false;
    }

    if (target.visible) {
      return fill;
    }

    visited.push(fill);
    fill = target.fill;
  }

  return false;
}

function createMapper(source) {
  var fill = source.fill;
  var type = 'dataset';

  if (fill === false) {
    return null;
  }

  if (!isFinite(fill)) {
    type = 'boundary';
  }

  return mappers[type](source);
}

function isDrawable(point) {
  return point && !point.skip;
}

function drawArea(ctx, curve0, curve1, len0, len1, stepped, tension) {
  var lineTo = stepped ? helpers$1.canvas._steppedLineTo : helpers$1.canvas._bezierCurveTo;
  var i, cx, cy, r, target;

  if (!len0 || !len1) {
    return;
  } // building first area curve (normal)


  ctx.moveTo(curve0[0].x, curve0[0].y);

  for (i = 1; i < len0; ++i) {
    target = curve0[i];

    if (!target.boundary && (tension || stepped)) {
      lineTo(ctx, curve0[i - 1], target, false, stepped);
    } else {
      ctx.lineTo(target.x, target.y);
    }
  }

  if (curve1[0].angle !== undefined) {
    cx = curve1[0].cx;
    cy = curve1[0].cy;
    r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));

    for (i = len1 - 1; i > 0; --i) {
      ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
    }

    return;
  } // joining the two area curves


  ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y); // building opposite area curve (reverse)

  for (i = len1 - 1; i > 0; --i) {
    target = curve1[i - 1];

    if (!target.boundary && (tension || stepped)) {
      lineTo(ctx, curve1[i], target, true, stepped);
    } else {
      ctx.lineTo(target.x, target.y);
    }
  }
}

function doFill(ctx, points, mapper, el) {
  var count = points.length;
  var view = el._view;
  var loop = el._loop;
  var span = view.spanGaps;
  var stepped = view.steppedLine;
  var tension = view.tension;
  var curve0 = [];
  var curve1 = [];
  var len0 = 0;
  var len1 = 0;
  var i, ilen, index, p0, p1, d0, d1, loopOffset;
  ctx.beginPath();

  for (i = 0, ilen = count; i < ilen; ++i) {
    index = i % count;
    p0 = points[index]._view;
    p1 = mapper(p0, index, view);
    d0 = isDrawable(p0);
    d1 = isDrawable(p1);

    if (loop && loopOffset === undefined && d0) {
      loopOffset = i + 1;
      ilen = count + loopOffset;
    }

    if (d0 && d1) {
      len0 = curve0.push(p0);
      len1 = curve1.push(p1);
    } else if (len0 && len1) {
      if (!span) {
        drawArea(ctx, curve0, curve1, len0, len1, stepped, tension);
        len0 = len1 = 0;
        curve0 = [];
        curve1 = [];
      } else {
        if (d0) {
          curve0.push(p0);
        }

        if (d1) {
          curve1.push(p1);
        }
      }
    }
  }

  drawArea(ctx, curve0, curve1, len0, len1, stepped, tension);
  ctx.closePath();
  ctx.fillStyle = view.backgroundColor;
  ctx.fill();
}

var plugin_filler = {
  id: 'filler',
  afterDatasetsUpdate: function afterDatasetsUpdate(chart, options) {
    var count = (chart.data.datasets || []).length;
    var propagate = options.propagate;
    var sources = [];
    var meta, i, el, source;

    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      el = meta.dataset;
      source = null;

      if (el && el._model && el instanceof elements.Line) {
        source = {
          visible: chart.isDatasetVisible(i),
          fill: decodeFill(el, i, count),
          chart: chart,
          scale: meta.controller.getScaleForId(meta.yAxisID) || chart.scale,
          el: el
        };
      }

      meta.$filler = source;
      sources.push(source);
    }

    for (i = 0; i < count; ++i) {
      source = sources[i];

      if (!source) {
        continue;
      }

      source.fill = resolveTarget(sources, i, propagate);
      source.boundary = computeBoundary(source);
      source.mapper = createMapper(source);
    }
  },
  beforeDatasetsDraw: function beforeDatasetsDraw(chart) {
    var metasets = chart._getSortedVisibleDatasetMetas();

    var ctx = chart.ctx;
    var meta, i, el, points, mapper;

    for (i = metasets.length - 1; i >= 0; --i) {
      meta = metasets[i].$filler;

      if (!meta || !meta.visible) {
        continue;
      }

      el = meta.el;
      points = el._children || [];
      mapper = meta.mapper;

      if (mapper && points.length) {
        helpers$1.canvas.clipArea(ctx, chart.chartArea);
        doFill(ctx, points, mapper, el);
        helpers$1.canvas.unclipArea(ctx);
      }
    }
  }
};

var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
var valueOrDefault$c = helpers$1.valueOrDefault;

core_defaults._set('global', {
  legend: {
    display: true,
    position: 'top',
    align: 'center',
    fullWidth: true,
    reverse: false,
    weight: 1000,
    // a callback that will handle
    onClick: function onClick(e, legendItem) {
      var index = legendItem.datasetIndex;
      var ci = this.chart;
      var meta = ci.getDatasetMeta(index); // See controller.isDatasetVisible comment

      meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null; // We hid a dataset ... rerender the chart

      ci.update();
    },
    onHover: null,
    onLeave: null,
    labels: {
      boxWidth: 40,
      padding: 10,
      // Generates labels shown in the legend
      // Valid properties to return:
      // text : text to display
      // fillStyle : fill of coloured box
      // strokeStyle: stroke of coloured box
      // hidden : if this legend item refers to a hidden item
      // lineCap : cap style for line
      // lineDash
      // lineDashOffset :
      // lineJoin :
      // lineWidth :
      generateLabels: function generateLabels(chart) {
        var datasets = chart.data.datasets;
        var options = chart.options.legend || {};
        var usePointStyle = options.labels && options.labels.usePointStyle;
        return chart._getSortedDatasetMetas().map(function (meta) {
          var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            hidden: !chart.isDatasetVisible(meta.index),
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: style.borderWidth,
            strokeStyle: style.borderColor,
            pointStyle: style.pointStyle,
            rotation: style.rotation,
            // Below is extra data used for toggling the datasets
            datasetIndex: meta.index
          };
        }, this);
      }
    }
  },
  legendCallback: function legendCallback(chart) {
    var list = document.createElement('ul');
    var datasets = chart.data.datasets;
    var i, ilen, listItem, listItemSpan;
    list.setAttribute('class', chart.id + '-legend');

    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      listItem = list.appendChild(document.createElement('li'));
      listItemSpan = listItem.appendChild(document.createElement('span'));
      listItemSpan.style.backgroundColor = datasets[i].backgroundColor;

      if (datasets[i].label) {
        listItem.appendChild(document.createTextNode(datasets[i].label));
      }
    }

    return list.outerHTML;
  }
});
/**
 * Helper function to get the box width based on the usePointStyle option
 * @param {object} labelopts - the label options on the legend
 * @param {number} fontSize - the label font size
 * @return {number} width of the color box area
 */


function getBoxWidth(labelOpts, fontSize) {
  return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ? fontSize : labelOpts.boxWidth;
}
/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */


var Legend =
/*#__PURE__*/
function (_Element) {
  _inherits(Legend, _Element);

  function Legend() {
    _classCallCheck(this, Legend);

    return _possibleConstructorReturn(this, _getPrototypeOf(Legend).apply(this, arguments));
  }

  _createClass(Legend, [{
    key: "initialize",
    value: function initialize(config) {
      var me = this;
      helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

      me.legendHitBoxes = [];
      /**
      	 * @private
      	 */

      me._hoveredItem = null; // Are we in doughnut mode which has a different data type

      me.doughnutMode = false;
    } // These methods are ordered by lifecycle. Utilities then follow.
    // Any function defined here is inherited by all legend types.
    // Any function can be extended by the legend type

  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {}
  }, {
    key: "update",
    value: function update(maxWidth, maxHeight, margins) {
      var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Labels

      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels(); // Fit

      me.beforeFit();
      me.fit();
      me.afterFit(); //

      me.afterUpdate();
      return me.minSize;
    }
  }, {
    key: "afterUpdate",
    value: function afterUpdate() {} //

  }, {
    key: "beforeSetDimensions",
    value: function beforeSetDimensions() {}
  }, {
    key: "setDimensions",
    value: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0; // Reset minSize

      me.minSize = {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "afterSetDimensions",
    value: function afterSetDimensions() {} //

  }, {
    key: "beforeBuildLabels",
    value: function beforeBuildLabels() {}
  }, {
    key: "buildLabels",
    value: function buildLabels() {
      var me = this;
      var labelOpts = me.options.labels || {};
      var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

      if (labelOpts.filter) {
        legendItems = legendItems.filter(function (item) {
          return labelOpts.filter(item, me.chart.data);
        });
      }

      if (me.options.reverse) {
        legendItems.reverse();
      }

      me.legendItems = legendItems;
    }
  }, {
    key: "afterBuildLabels",
    value: function afterBuildLabels() {} //

  }, {
    key: "beforeFit",
    value: function beforeFit() {}
  }, {
    key: "fit",
    value: function fit() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var display = opts.display;
      var ctx = me.ctx;

      var labelFont = helpers$1.options._parseFont(labelOpts);

      var fontSize = labelFont.size; // Reset hit boxes

      var hitboxes = me.legendHitBoxes = [];
      var minSize = me.minSize;
      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        minSize.width = me.maxWidth; // fill all the width

        minSize.height = display ? 10 : 0;
      } else {
        minSize.width = display ? 10 : 0;
        minSize.height = me.maxHeight; // fill all the height
      } // Increase sizes here


      if (!display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }

      ctx.font = labelFont.string;

      if (isHorizontal) {
        // Labels
        // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
        var lineWidths = me.lineWidths = [0];
        var totalHeight = 0;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var width = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

          if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
            totalHeight += fontSize + labelOpts.padding;
            lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
          } // Store the hitbox width and height here. Final position will be updated in `draw`


          hitboxes[i] = {
            left: 0,
            top: 0,
            width: width,
            height: fontSize
          };
          lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
        });
        minSize.height += totalHeight;
      } else {
        var vPadding = labelOpts.padding;
        var columnWidths = me.columnWidths = [];
        var columnHeights = me.columnHeights = [];
        var totalWidth = labelOpts.padding;
        var currentColWidth = 0;
        var currentColHeight = 0;
        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width; // If too tall, go to new column

          if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
            totalWidth += currentColWidth + labelOpts.padding;
            columnWidths.push(currentColWidth); // previous column width

            columnHeights.push(currentColHeight);
            currentColWidth = 0;
            currentColHeight = 0;
          } // Get max width


          currentColWidth = Math.max(currentColWidth, itemWidth);
          currentColHeight += fontSize + vPadding; // Store the hitbox width and height here. Final position will be updated in `draw`

          hitboxes[i] = {
            left: 0,
            top: 0,
            width: itemWidth,
            height: fontSize
          };
        });
        totalWidth += currentColWidth;
        columnWidths.push(currentColWidth);
        columnHeights.push(currentColHeight);
        minSize.width += totalWidth;
      }

      me.width = minSize.width;
      me.height = minSize.height;
    }
  }, {
    key: "afterFit",
    value: function afterFit() {} // Shared Methods

  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    } // Actually draw the legend on the canvas

  }, {
    key: "draw",
    value: function draw() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor;
      var lineDefault = globalDefaults.elements.line;
      var legendHeight = me.height;
      var columnHeights = me.columnHeights;
      var legendWidth = me.width;
      var lineWidths = me.lineWidths;

      if (!opts.display) {
        return;
      }

      var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
      var ctx = me.ctx;
      var fontColor = valueOrDefault$c(labelOpts.fontColor, globalDefaults.defaultFontColor);

      var labelFont = helpers$1.options._parseFont(labelOpts);

      var fontSize = labelFont.size;
      var cursor; // Canvas setup

      ctx.textAlign = rtlHelper.textAlign('left');
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = fontColor; // for strikethrough effect

      ctx.fillStyle = fontColor; // render in correct colour

      ctx.font = labelFont.string;
      var boxWidth = getBoxWidth(labelOpts, fontSize);
      var hitboxes = me.legendHitBoxes; // current position

      var drawLegendBox = function drawLegendBox(x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0) {
          return;
        } // Set the ctx for the box


        ctx.save();
        var lineWidth = valueOrDefault$c(legendItem.lineWidth, lineDefault.borderWidth);
        ctx.fillStyle = valueOrDefault$c(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault$c(legendItem.lineCap, lineDefault.borderCapStyle);
        ctx.lineDashOffset = valueOrDefault$c(legendItem.lineDashOffset, lineDefault.borderDashOffset);
        ctx.lineJoin = valueOrDefault$c(legendItem.lineJoin, lineDefault.borderJoinStyle);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault$c(legendItem.strokeStyle, defaultColor);

        if (ctx.setLineDash) {
          // IE 9 and 10 do not support line dash
          ctx.setLineDash(valueOrDefault$c(legendItem.lineDash, lineDefault.borderDash));
        }

        if (labelOpts && labelOpts.usePointStyle) {
          // Recalculate x and y for drawPoint() because its expecting
          // x and y to be center of figure (instead of top left)
          var radius = boxWidth * Math.SQRT2 / 2;
          var centerX = rtlHelper.xPlus(x, boxWidth / 2);
          var centerY = y + fontSize / 2; // Draw pointStyle as legend symbol

          helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
        } else {
          // Draw box as legend symbol
          ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);

          if (lineWidth !== 0) {
            ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
          }
        }

        ctx.restore();
      };

      var fillText = function fillText(x, y, legendItem, textWidth) {
        var halfFontSize = fontSize / 2;
        var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
        var yMiddle = y + halfFontSize;
        ctx.fillText(legendItem.text, xLeft, yMiddle);

        if (legendItem.hidden) {
          // Strikethrough the text if hidden
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.moveTo(xLeft, yMiddle);
          ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
          ctx.stroke();
        }
      };

      var alignmentOffset = function alignmentOffset(dimension, blockSize) {
        switch (opts.align) {
          case 'start':
            return labelOpts.padding;

          case 'end':
            return dimension - blockSize;

          default:
            // center
            return (dimension - blockSize + labelOpts.padding) / 2;
        }
      }; // Horizontal


      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        cursor = {
          x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
          y: me.top + labelOpts.padding,
          line: 0
        };
      } else {
        cursor = {
          x: me.left + labelOpts.padding,
          y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
          line: 0
        };
      }

      helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);
      var itemHeight = fontSize + labelOpts.padding;
      helpers$1.each(me.legendItems, function (legendItem, i) {
        var textWidth = ctx.measureText(legendItem.text).width;
        var width = boxWidth + fontSize / 2 + textWidth;
        var x = cursor.x;
        var y = cursor.y;
        rtlHelper.setWidth(me.minSize.width); // Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
        // instead of me.right and me.bottom because me.width and me.height
        // may have been changed since me.minSize was calculated

        if (isHorizontal) {
          if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
            y = cursor.y += itemHeight;
            cursor.line++;
            x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
          }
        } else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
          x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
          cursor.line++;
          y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
        }

        var realX = rtlHelper.x(x);
        drawLegendBox(realX, y, legendItem);
        hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
        hitboxes[i].top = y; // Fill the actual label

        fillText(realX, y, legendItem, textWidth);

        if (isHorizontal) {
          cursor.x += width + labelOpts.padding;
        } else {
          cursor.y += itemHeight;
        }
      });
      helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
    }
    /**
     * @private
     */

  }, {
    key: "_getLegendItemAt",
    value: function _getLegendItemAt(x, y) {
      var me = this;
      var i, hitBox, lh;

      if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
        // See if we are touching one of the dataset boxes
        lh = me.legendHitBoxes;

        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];

          if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
            // Touching an element
            return me.legendItems[i];
          }
        }
      }

      return null;
    }
    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     */

  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      var me = this;
      var opts = me.options;
      var type = e.type === 'mouseup' ? 'click' : e.type;
      var hoveredItem;

      if (type === 'mousemove') {
        if (!opts.onHover && !opts.onLeave) {
          return;
        }
      } else if (type === 'click') {
        if (!opts.onClick) {
          return;
        }
      } else {
        return;
      } // Chart event already has relative position in it


      hoveredItem = me._getLegendItemAt(e.x, e.y);

      if (type === 'click') {
        if (hoveredItem && opts.onClick) {
          // use e.native for backwards compatibility
          opts.onClick.call(me, e["native"], hoveredItem);
        }
      } else {
        if (opts.onLeave && hoveredItem !== me._hoveredItem) {
          if (me._hoveredItem) {
            opts.onLeave.call(me, e["native"], me._hoveredItem);
          }

          me._hoveredItem = hoveredItem;
        }

        if (opts.onHover && hoveredItem) {
          // use e.native for backwards compatibility
          opts.onHover.call(me, e["native"], hoveredItem);
        }
      }
    }
  }]);

  return Legend;
}(core_element);

function createNewLegendAndAttach(chart, legendOpts) {
  var legend = new Legend({
    ctx: chart.ctx,
    options: legendOpts,
    chart: chart
  });
  core_layouts.configure(chart, legend, legendOpts);
  core_layouts.addBox(chart, legend);
  chart.legend = legend;
}

var plugin_legend = {
  id: 'legend',

  /**
   * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
   * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
   * the plugin, which one will be re-exposed in the chart.js file.
   * https://github.com/chartjs/Chart.js/pull/2640
   * @private
   */
  _element: Legend,
  beforeInit: function beforeInit(chart) {
    var legendOpts = chart.options.legend;

    if (legendOpts) {
      createNewLegendAndAttach(chart, legendOpts);
    }
  },
  beforeUpdate: function beforeUpdate(chart) {
    var legendOpts = chart.options.legend;
    var legend = chart.legend;

    if (legendOpts) {
      helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

      if (legend) {
        core_layouts.configure(chart, legend, legendOpts);
        legend.options = legendOpts;
      } else {
        createNewLegendAndAttach(chart, legendOpts);
      }
    } else if (legend) {
      core_layouts.removeBox(chart, legend);
      delete chart.legend;
    }
  },
  afterEvent: function afterEvent(chart, e) {
    var legend = chart.legend;

    if (legend) {
      legend.handleEvent(e);
    }
  }
};

core_defaults._set('global', {
  title: {
    display: false,
    fontStyle: 'bold',
    fullWidth: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000 // by default greater than legend (1000) to be above

  }
});
/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */


var Title =
/*#__PURE__*/
function (_Element) {
  _inherits(Title, _Element);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, _getPrototypeOf(Title).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "initialize",
    value: function initialize(config) {
      var me = this;
      helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

      me.legendHitBoxes = [];
    } // These methods are ordered by lifecycle. Utilities then follow.

  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {}
  }, {
    key: "update",
    value: function update(maxWidth, maxHeight, margins) {
      var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Labels

      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels(); // Fit

      me.beforeFit();
      me.fit();
      me.afterFit(); //

      me.afterUpdate();
      return me.minSize;
    }
  }, {
    key: "afterUpdate",
    value: function afterUpdate() {} //

  }, {
    key: "beforeSetDimensions",
    value: function beforeSetDimensions() {}
  }, {
    key: "setDimensions",
    value: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0; // Reset minSize

      me.minSize = {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "afterSetDimensions",
    value: function afterSetDimensions() {} //

  }, {
    key: "beforeBuildLabels",
    value: function beforeBuildLabels() {}
  }, {
    key: "buildLabels",
    value: function buildLabels() {}
  }, {
    key: "afterBuildLabels",
    value: function afterBuildLabels() {} //

  }, {
    key: "beforeFit",
    value: function beforeFit() {}
  }, {
    key: "fit",
    value: function fit() {
      var me = this;
      var opts = me.options;
      var minSize = me.minSize = {};
      var isHorizontal = me.isHorizontal();
      var lineCount, textSize;

      if (!opts.display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }

      lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
      textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;
      me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
      me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
    }
  }, {
    key: "afterFit",
    value: function afterFit() {} // Shared Methods

  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    } // Actually draw the title block on the canvas

  }, {
    key: "draw",
    value: function draw() {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;

      if (!opts.display) {
        return;
      }

      var fontOpts = helpers$1.options._parseFont(opts);

      var lineHeight = fontOpts.lineHeight;
      var offset = lineHeight / 2 + opts.padding;
      var rotation = 0;
      var top = me.top;
      var left = me.left;
      var bottom = me.bottom;
      var right = me.right;
      var maxWidth, titleX, titleY;
      ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour

      ctx.font = fontOpts.string; // Horizontal

      if (me.isHorizontal()) {
        titleX = left + (right - left) / 2; // midpoint of the width

        titleY = top + offset;
        maxWidth = right - left;
      } else {
        titleX = opts.position === 'left' ? left + offset : right - offset;
        titleY = top + (bottom - top) / 2;
        maxWidth = bottom - top;
        rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
      }

      ctx.save();
      ctx.translate(titleX, titleY);
      ctx.rotate(rotation);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var text = opts.text;

      if (helpers$1.isArray(text)) {
        var y = 0;

        for (var i = 0; i < text.length; ++i) {
          ctx.fillText(text[i], 0, y, maxWidth);
          y += lineHeight;
        }
      } else {
        ctx.fillText(text, 0, 0, maxWidth);
      }

      ctx.restore();
    }
  }]);

  return Title;
}(core_element);

function createNewTitleBlockAndAttach(chart, titleOpts) {
  var title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart: chart
  });
  core_layouts.configure(chart, title, titleOpts);
  core_layouts.addBox(chart, title);
  chart.titleBlock = title;
}

var plugin_title = {
  id: 'title',

  /**
   * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
   * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
   * the plugin, which one will be re-exposed in the chart.js file.
   * https://github.com/chartjs/Chart.js/pull/2640
   * @private
   */
  _element: Title,
  beforeInit: function beforeInit(chart) {
    var titleOpts = chart.options.title;

    if (titleOpts) {
      createNewTitleBlockAndAttach(chart, titleOpts);
    }
  },
  beforeUpdate: function beforeUpdate(chart) {
    var titleOpts = chart.options.title;
    var titleBlock = chart.titleBlock;

    if (titleOpts) {
      helpers$1.mergeIf(titleOpts, core_defaults.global.title);

      if (titleBlock) {
        core_layouts.configure(chart, titleBlock, titleOpts);
        titleBlock.options = titleOpts;
      } else {
        createNewTitleBlockAndAttach(chart, titleOpts);
      }
    } else if (titleBlock) {
      core_layouts.removeBox(chart, titleBlock);
      delete chart.titleBlock;
    }
  }
};

var plugins = {};
var filler = plugin_filler;
var legend = plugin_legend;
var title = plugin_title;
plugins.filler = filler;
plugins.legend = legend;
plugins.title = title;

/**
 * @namespace Chart
 */

core_controller.helpers = helpers$1; // @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!

core_helpers();
core_controller._adapters = core_adapters;
core_controller.Animation = core_animation;
core_controller.animationService = core_animations;
core_controller.controllers = controllers;
core_controller.DatasetController = core_datasetController;
core_controller.defaults = core_defaults;
core_controller.Element = core_element;
core_controller.elements = elements;
core_controller.Interaction = core_interaction;
core_controller.layouts = core_layouts;
core_controller.platform = platform;
core_controller.plugins = core_plugins;
core_controller.Scale = core_scale;
core_controller.scaleService = core_scaleService;
core_controller.Ticks = core_ticks;
core_controller.Tooltip = core_tooltip; // Register built-in scales

core_controller.helpers.each(scales, function (scale, type) {
  core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
}); // Load to register built-in adapters (as side effects)
// Loading built-in plugins

for (var k in plugins) {
  if (Object.prototype.hasOwnProperty.call(plugins, k)) {
    core_controller.plugins.register(plugins[k]);
  }
}

core_controller.platform.initialize();
var src = core_controller;

if (typeof window !== 'undefined') {
  window.Chart = core_controller;
}

export default src;
