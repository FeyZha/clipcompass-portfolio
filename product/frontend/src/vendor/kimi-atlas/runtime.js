/* Adapted from the user-authorized Kimi Knowledge Atlas. See third-party/kimi-atlas/README.md. */
const Lp = "170", DM = 0, n0 = 1, UM = 2, lx = 1, NM = 2, Oa = 3, Ar = 0, ui = 1, za = 2, Tr = 0, ss = 1, uo = 2, i0 = 3, a0 = 4, LM = 5, ns = 100, OM = 101, zM = 102, PM = 103, IM = 104, BM = 200, FM = 201, HM = 202, GM = 203, Xd = 204, kd = 205, VM = 206, XM = 207, kM = 208, jM = 209, qM = 210, YM = 211, WM = 212, ZM = 213, KM = 214, jd = 0, qd = 1, Yd = 2, mo = 3, Wd = 4, Zd = 5, Kd = 6, Qd = 7, cx = 0, QM = 1, JM = 2, br = 0, $M = 1, tE = 2, eE = 3, nE = 4, iE = 5, aE = 6, rE = 7, ux = 300, go = 301, vo = 302, Jd = 303, $d = 304, Nu = 306, tp = 1e3, as = 1001, ep = 1002, Zi = 1003, sE = 1004, Kc = 1005, da = 1006, hd = 1007, rs = 1008, Ga = 1009, fx = 1010, hx = 1011, bl = 1012, Op = 1013, os = 1014, Pa = 1015, Al = 1016, zp = 1017, Pp = 1018, _o = 1020, dx = 35902, px = 1021, mx = 1022, Yi = 1023, gx = 1024, vx = 1025, ho = 1026, xo = 1027, _x = 1028, Ip = 1029, xx = 1030, Bp = 1031, Fp = 1033, Mu = 33776, Eu = 33777, Tu = 33778, bu = 33779, np = 35840, ip = 35841, ap = 35842, rp = 35843, sp = 36196, op = 37492, lp = 37496, cp = 37808, up = 37809, fp = 37810, hp = 37811, dp = 37812, pp = 37813, mp = 37814, gp = 37815, vp = 37816, _p = 37817, xp = 37818, yp = 37819, Sp = 37820, Mp = 37821, Au = 36492, Ep = 36494, Tp = 36495, yx = 36283, bp = 36284, Ap = 36285, Rp = 36286, oE = 3200, lE = 3201, cE = 0, uE = 1, Er = "", Li = "srgb", So = "srgb-linear", Lu = "linear", en = "srgb", Ks = 7680, r0 = 519, fE = 512, hE = 513, dE = 514, Sx = 515, pE = 516, mE = 517, gE = 518, vE = 519, s0 = 35044, o0 = "300 es", Ia = 2e3, Cu = 2001;
class Mo {
  addEventListener(n, a) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    s[n] === void 0 && (s[n] = []), s[n].indexOf(a) === -1 && s[n].push(a);
  }
  hasEventListener(n, a) {
    if (this._listeners === void 0) return false;
    const s = this._listeners;
    return s[n] !== void 0 && s[n].indexOf(a) !== -1;
  }
  removeEventListener(n, a) {
    if (this._listeners === void 0) return;
    const c = this._listeners[n];
    if (c !== void 0) {
      const f = c.indexOf(a);
      f !== -1 && c.splice(f, 1);
    }
  }
  dispatchEvent(n) {
    if (this._listeners === void 0) return;
    const s = this._listeners[n.type];
    if (s !== void 0) {
      n.target = this;
      const c = s.slice(0);
      for (let f = 0, h = c.length; f < h; f++) c[f].call(this, n);
      n.target = null;
    }
  }
}
const qn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], dd = Math.PI / 180, Cp = 180 / Math.PI;
function Rl() {
  const o = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, a = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0;
  return (qn[o & 255] + qn[o >> 8 & 255] + qn[o >> 16 & 255] + qn[o >> 24 & 255] + "-" + qn[n & 255] + qn[n >> 8 & 255] + "-" + qn[n >> 16 & 15 | 64] + qn[n >> 24 & 255] + "-" + qn[a & 63 | 128] + qn[a >> 8 & 255] + "-" + qn[a >> 16 & 255] + qn[a >> 24 & 255] + qn[s & 255] + qn[s >> 8 & 255] + qn[s >> 16 & 255] + qn[s >> 24 & 255]).toLowerCase();
}
function ci(o, n, a) {
  return Math.max(n, Math.min(a, o));
}
function _E(o, n) {
  return (o % n + n) % n;
}
function pd(o, n, a) {
  return (1 - a) * o + a * n;
}
function gl(o, n) {
  switch (n.constructor) {
    case Float32Array:
      return o;
    case Uint32Array:
      return o / 4294967295;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int32Array:
      return Math.max(o / 2147483647, -1);
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function li(o, n) {
  switch (n.constructor) {
    case Float32Array:
      return o;
    case Uint32Array:
      return Math.round(o * 4294967295);
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int32Array:
      return Math.round(o * 2147483647);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class an {
  constructor(n = 0, a = 0) {
    an.prototype.isVector2 = true, this.x = n, this.y = a;
  }
  get width() {
    return this.x;
  }
  set width(n) {
    this.x = n;
  }
  get height() {
    return this.y;
  }
  set height(n) {
    this.y = n;
  }
  set(n, a) {
    return this.x = n, this.y = a, this;
  }
  setScalar(n) {
    return this.x = n, this.y = n, this;
  }
  setX(n) {
    return this.x = n, this;
  }
  setY(n) {
    return this.y = n, this;
  }
  setComponent(n, a) {
    switch (n) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      default:
        throw new Error("index is out of range: " + n);
    }
    return this;
  }
  getComponent(n) {
    switch (n) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + n);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(n) {
    return this.x = n.x, this.y = n.y, this;
  }
  add(n) {
    return this.x += n.x, this.y += n.y, this;
  }
  addScalar(n) {
    return this.x += n, this.y += n, this;
  }
  addVectors(n, a) {
    return this.x = n.x + a.x, this.y = n.y + a.y, this;
  }
  addScaledVector(n, a) {
    return this.x += n.x * a, this.y += n.y * a, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this;
  }
  subVectors(n, a) {
    return this.x = n.x - a.x, this.y = n.y - a.y, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this;
  }
  divide(n) {
    return this.x /= n.x, this.y /= n.y, this;
  }
  divideScalar(n) {
    return this.multiplyScalar(1 / n);
  }
  applyMatrix3(n) {
    const a = this.x, s = this.y, c = n.elements;
    return this.x = c[0] * a + c[3] * s + c[6], this.y = c[1] * a + c[4] * s + c[7], this;
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this;
  }
  clamp(n, a) {
    return this.x = Math.max(n.x, Math.min(a.x, this.x)), this.y = Math.max(n.y, Math.min(a.y, this.y)), this;
  }
  clampScalar(n, a) {
    return this.x = Math.max(n, Math.min(a, this.x)), this.y = Math.max(n, Math.min(a, this.y)), this;
  }
  clampLength(n, a) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(Math.max(n, Math.min(a, s)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(n) {
    return this.x * n.x + this.y * n.y;
  }
  cross(n) {
    return this.x * n.y - this.y * n.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(n) {
    const a = Math.sqrt(this.lengthSq() * n.lengthSq());
    if (a === 0) return Math.PI / 2;
    const s = this.dot(n) / a;
    return Math.acos(ci(s, -1, 1));
  }
  distanceTo(n) {
    return Math.sqrt(this.distanceToSquared(n));
  }
  distanceToSquared(n) {
    const a = this.x - n.x, s = this.y - n.y;
    return a * a + s * s;
  }
  manhattanDistanceTo(n) {
    return Math.abs(this.x - n.x) + Math.abs(this.y - n.y);
  }
  setLength(n) {
    return this.normalize().multiplyScalar(n);
  }
  lerp(n, a) {
    return this.x += (n.x - this.x) * a, this.y += (n.y - this.y) * a, this;
  }
  lerpVectors(n, a, s) {
    return this.x = n.x + (a.x - n.x) * s, this.y = n.y + (a.y - n.y) * s, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y;
  }
  fromArray(n, a = 0) {
    return this.x = n[a], this.y = n[a + 1], this;
  }
  toArray(n = [], a = 0) {
    return n[a] = this.x, n[a + 1] = this.y, n;
  }
  fromBufferAttribute(n, a) {
    return this.x = n.getX(a), this.y = n.getY(a), this;
  }
  rotateAround(n, a) {
    const s = Math.cos(a), c = Math.sin(a), f = this.x - n.x, h = this.y - n.y;
    return this.x = f * s - h * c + n.x, this.y = f * c + h * s + n.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ae {
  constructor(n, a, s, c, f, h, d, m, _) {
    Ae.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], n !== void 0 && this.set(n, a, s, c, f, h, d, m, _);
  }
  set(n, a, s, c, f, h, d, m, _) {
    const g = this.elements;
    return g[0] = n, g[1] = c, g[2] = d, g[3] = a, g[4] = f, g[5] = m, g[6] = s, g[7] = h, g[8] = _, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(n) {
    const a = this.elements, s = n.elements;
    return a[0] = s[0], a[1] = s[1], a[2] = s[2], a[3] = s[3], a[4] = s[4], a[5] = s[5], a[6] = s[6], a[7] = s[7], a[8] = s[8], this;
  }
  extractBasis(n, a, s) {
    return n.setFromMatrix3Column(this, 0), a.setFromMatrix3Column(this, 1), s.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(n) {
    const a = n.elements;
    return this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]), this;
  }
  multiply(n) {
    return this.multiplyMatrices(this, n);
  }
  premultiply(n) {
    return this.multiplyMatrices(n, this);
  }
  multiplyMatrices(n, a) {
    const s = n.elements, c = a.elements, f = this.elements, h = s[0], d = s[3], m = s[6], _ = s[1], g = s[4], p = s[7], x = s[2], M = s[5], T = s[8], R = c[0], S = c[3], y = c[6], P = c[1], O = c[4], N = c[7], et = c[2], V = c[5], I = c[8];
    return f[0] = h * R + d * P + m * et, f[3] = h * S + d * O + m * V, f[6] = h * y + d * N + m * I, f[1] = _ * R + g * P + p * et, f[4] = _ * S + g * O + p * V, f[7] = _ * y + g * N + p * I, f[2] = x * R + M * P + T * et, f[5] = x * S + M * O + T * V, f[8] = x * y + M * N + T * I, this;
  }
  multiplyScalar(n) {
    const a = this.elements;
    return a[0] *= n, a[3] *= n, a[6] *= n, a[1] *= n, a[4] *= n, a[7] *= n, a[2] *= n, a[5] *= n, a[8] *= n, this;
  }
  determinant() {
    const n = this.elements, a = n[0], s = n[1], c = n[2], f = n[3], h = n[4], d = n[5], m = n[6], _ = n[7], g = n[8];
    return a * h * g - a * d * _ - s * f * g + s * d * m + c * f * _ - c * h * m;
  }
  invert() {
    const n = this.elements, a = n[0], s = n[1], c = n[2], f = n[3], h = n[4], d = n[5], m = n[6], _ = n[7], g = n[8], p = g * h - d * _, x = d * m - g * f, M = _ * f - h * m, T = a * p + s * x + c * M;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / T;
    return n[0] = p * R, n[1] = (c * _ - g * s) * R, n[2] = (d * s - c * h) * R, n[3] = x * R, n[4] = (g * a - c * m) * R, n[5] = (c * f - d * a) * R, n[6] = M * R, n[7] = (s * m - _ * a) * R, n[8] = (h * a - s * f) * R, this;
  }
  transpose() {
    let n;
    const a = this.elements;
    return n = a[1], a[1] = a[3], a[3] = n, n = a[2], a[2] = a[6], a[6] = n, n = a[5], a[5] = a[7], a[7] = n, this;
  }
  getNormalMatrix(n) {
    return this.setFromMatrix4(n).invert().transpose();
  }
  transposeIntoArray(n) {
    const a = this.elements;
    return n[0] = a[0], n[1] = a[3], n[2] = a[6], n[3] = a[1], n[4] = a[4], n[5] = a[7], n[6] = a[2], n[7] = a[5], n[8] = a[8], this;
  }
  setUvTransform(n, a, s, c, f, h, d) {
    const m = Math.cos(f), _ = Math.sin(f);
    return this.set(s * m, s * _, -s * (m * h + _ * d) + h + n, -c * _, c * m, -c * (-_ * h + m * d) + d + a, 0, 0, 1), this;
  }
  scale(n, a) {
    return this.premultiply(md.makeScale(n, a)), this;
  }
  rotate(n) {
    return this.premultiply(md.makeRotation(-n)), this;
  }
  translate(n, a) {
    return this.premultiply(md.makeTranslation(n, a)), this;
  }
  makeTranslation(n, a) {
    return n.isVector2 ? this.set(1, 0, n.x, 0, 1, n.y, 0, 0, 1) : this.set(1, 0, n, 0, 1, a, 0, 0, 1), this;
  }
  makeRotation(n) {
    const a = Math.cos(n), s = Math.sin(n);
    return this.set(a, -s, 0, s, a, 0, 0, 0, 1), this;
  }
  makeScale(n, a) {
    return this.set(n, 0, 0, 0, a, 0, 0, 0, 1), this;
  }
  equals(n) {
    const a = this.elements, s = n.elements;
    for (let c = 0; c < 9; c++) if (a[c] !== s[c]) return false;
    return true;
  }
  fromArray(n, a = 0) {
    for (let s = 0; s < 9; s++) this.elements[s] = n[s + a];
    return this;
  }
  toArray(n = [], a = 0) {
    const s = this.elements;
    return n[a] = s[0], n[a + 1] = s[1], n[a + 2] = s[2], n[a + 3] = s[3], n[a + 4] = s[4], n[a + 5] = s[5], n[a + 6] = s[6], n[a + 7] = s[7], n[a + 8] = s[8], n;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const md = new Ae();
function Mx(o) {
  for (let n = o.length - 1; n >= 0; --n) if (o[n] >= 65535) return true;
  return false;
}
function wu(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}
function xE() {
  const o = wu("canvas");
  return o.style.display = "block", o;
}
const l0 = {};
function El(o) {
  o in l0 || (l0[o] = true, console.warn(o));
}
function yE(o, n, a) {
  return new Promise(function(s, c) {
    function f() {
      switch (o.clientWaitSync(n, o.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case o.WAIT_FAILED:
          c();
          break;
        case o.TIMEOUT_EXPIRED:
          setTimeout(f, a);
          break;
        default:
          s();
      }
    }
    setTimeout(f, a);
  });
}
function SE(o) {
  const n = o.elements;
  n[2] = 0.5 * n[2] + 0.5 * n[3], n[6] = 0.5 * n[6] + 0.5 * n[7], n[10] = 0.5 * n[10] + 0.5 * n[11], n[14] = 0.5 * n[14] + 0.5 * n[15];
}
function ME(o) {
  const n = o.elements;
  n[11] === -1 ? (n[10] = -n[10] - 1, n[14] = -n[14]) : (n[10] = -n[10], n[14] = -n[14] + 1);
}
const Ve = { enabled: true, workingColorSpace: So, spaces: {}, convert: function(o, n, a) {
  return this.enabled === false || n === a || !n || !a || (this.spaces[n].transfer === en && (o.r = Fa(o.r), o.g = Fa(o.g), o.b = Fa(o.b)), this.spaces[n].primaries !== this.spaces[a].primaries && (o.applyMatrix3(this.spaces[n].toXYZ), o.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === en && (o.r = po(o.r), o.g = po(o.g), o.b = po(o.b))), o;
}, fromWorkingColorSpace: function(o, n) {
  return this.convert(o, this.workingColorSpace, n);
}, toWorkingColorSpace: function(o, n) {
  return this.convert(o, n, this.workingColorSpace);
}, getPrimaries: function(o) {
  return this.spaces[o].primaries;
}, getTransfer: function(o) {
  return o === Er ? Lu : this.spaces[o].transfer;
}, getLuminanceCoefficients: function(o, n = this.workingColorSpace) {
  return o.fromArray(this.spaces[n].luminanceCoefficients);
}, define: function(o) {
  Object.assign(this.spaces, o);
}, _getMatrix: function(o, n, a) {
  return o.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ);
}, _getDrawingBufferColorSpace: function(o) {
  return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace;
}, _getUnpackColorSpace: function(o = this.workingColorSpace) {
  return this.spaces[o].workingColorSpaceConfig.unpackColorSpace;
} };
function Fa(o) {
  return o < 0.04045 ? o * 0.0773993808 : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function po(o) {
  return o < 31308e-7 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const c0 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], u0 = [0.2126, 0.7152, 0.0722], f0 = [0.3127, 0.329], h0 = new Ae().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), d0 = new Ae().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
Ve.define({ [So]: { primaries: c0, whitePoint: f0, transfer: Lu, toXYZ: h0, fromXYZ: d0, luminanceCoefficients: u0, workingColorSpaceConfig: { unpackColorSpace: Li }, outputColorSpaceConfig: { drawingBufferColorSpace: Li } }, [Li]: { primaries: c0, whitePoint: f0, transfer: en, toXYZ: h0, fromXYZ: d0, luminanceCoefficients: u0, outputColorSpaceConfig: { drawingBufferColorSpace: Li } } });
let Qs;
class EE {
  static getDataURL(n) {
    if (/^data:/i.test(n.src) || typeof HTMLCanvasElement > "u") return n.src;
    let a;
    if (n instanceof HTMLCanvasElement) a = n;
    else {
      Qs === void 0 && (Qs = wu("canvas")), Qs.width = n.width, Qs.height = n.height;
      const s = Qs.getContext("2d");
      n instanceof ImageData ? s.putImageData(n, 0, 0) : s.drawImage(n, 0, 0, n.width, n.height), a = Qs;
    }
    return a.width > 2048 || a.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", n), a.toDataURL("image/jpeg", 0.6)) : a.toDataURL("image/png");
  }
  static sRGBToLinear(n) {
    if (typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap) {
      const a = wu("canvas");
      a.width = n.width, a.height = n.height;
      const s = a.getContext("2d");
      s.drawImage(n, 0, 0, n.width, n.height);
      const c = s.getImageData(0, 0, n.width, n.height), f = c.data;
      for (let h = 0; h < f.length; h++) f[h] = Fa(f[h] / 255) * 255;
      return s.putImageData(c, 0, 0), a;
    } else if (n.data) {
      const a = n.data.slice(0);
      for (let s = 0; s < a.length; s++) a instanceof Uint8Array || a instanceof Uint8ClampedArray ? a[s] = Math.floor(Fa(a[s] / 255) * 255) : a[s] = Fa(a[s]);
      return { data: a, width: n.width, height: n.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), n;
  }
}
let TE = 0;
class Ex {
  constructor(n = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: TE++ }), this.uuid = Rl(), this.data = n, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(n) {
    n === true && this.version++;
  }
  toJSON(n) {
    const a = n === void 0 || typeof n == "string";
    if (!a && n.images[this.uuid] !== void 0) return n.images[this.uuid];
    const s = { uuid: this.uuid, url: "" }, c = this.data;
    if (c !== null) {
      let f;
      if (Array.isArray(c)) {
        f = [];
        for (let h = 0, d = c.length; h < d; h++) c[h].isDataTexture ? f.push(gd(c[h].image)) : f.push(gd(c[h]));
      } else f = gd(c);
      s.url = f;
    }
    return a || (n.images[this.uuid] = s), s;
  }
}
function gd(o) {
  return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? EE.getDataURL(o) : o.data ? { data: Array.from(o.data), width: o.width, height: o.height, type: o.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let bE = 0;
class fi extends Mo {
  constructor(n = fi.DEFAULT_IMAGE, a = fi.DEFAULT_MAPPING, s = as, c = as, f = da, h = rs, d = Yi, m = Ga, _ = fi.DEFAULT_ANISOTROPY, g = Er) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: bE++ }), this.uuid = Rl(), this.name = "", this.source = new Ex(n), this.mipmaps = [], this.mapping = a, this.channel = 0, this.wrapS = s, this.wrapT = c, this.magFilter = f, this.minFilter = h, this.anisotropy = _, this.format = d, this.internalFormat = null, this.type = m, this.offset = new an(0, 0), this.repeat = new an(1, 1), this.center = new an(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ae(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = g, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(n = null) {
    this.source.data = n;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    return this.name = n.name, this.source = n.source, this.mipmaps = n.mipmaps.slice(0), this.mapping = n.mapping, this.channel = n.channel, this.wrapS = n.wrapS, this.wrapT = n.wrapT, this.magFilter = n.magFilter, this.minFilter = n.minFilter, this.anisotropy = n.anisotropy, this.format = n.format, this.internalFormat = n.internalFormat, this.type = n.type, this.offset.copy(n.offset), this.repeat.copy(n.repeat), this.center.copy(n.center), this.rotation = n.rotation, this.matrixAutoUpdate = n.matrixAutoUpdate, this.matrix.copy(n.matrix), this.generateMipmaps = n.generateMipmaps, this.premultiplyAlpha = n.premultiplyAlpha, this.flipY = n.flipY, this.unpackAlignment = n.unpackAlignment, this.colorSpace = n.colorSpace, this.userData = JSON.parse(JSON.stringify(n.userData)), this.needsUpdate = true, this;
  }
  toJSON(n) {
    const a = n === void 0 || typeof n == "string";
    if (!a && n.textures[this.uuid] !== void 0) return n.textures[this.uuid];
    const s = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(n).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (s.userData = this.userData), a || (n.textures[this.uuid] = s), s;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(n) {
    if (this.mapping !== ux) return n;
    if (n.applyMatrix3(this.matrix), n.x < 0 || n.x > 1) switch (this.wrapS) {
      case tp:
        n.x = n.x - Math.floor(n.x);
        break;
      case as:
        n.x = n.x < 0 ? 0 : 1;
        break;
      case ep:
        Math.abs(Math.floor(n.x) % 2) === 1 ? n.x = Math.ceil(n.x) - n.x : n.x = n.x - Math.floor(n.x);
        break;
    }
    if (n.y < 0 || n.y > 1) switch (this.wrapT) {
      case tp:
        n.y = n.y - Math.floor(n.y);
        break;
      case as:
        n.y = n.y < 0 ? 0 : 1;
        break;
      case ep:
        Math.abs(Math.floor(n.y) % 2) === 1 ? n.y = Math.ceil(n.y) - n.y : n.y = n.y - Math.floor(n.y);
        break;
    }
    return this.flipY && (n.y = 1 - n.y), n;
  }
  set needsUpdate(n) {
    n === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(n) {
    n === true && this.pmremVersion++;
  }
}
fi.DEFAULT_IMAGE = null;
fi.DEFAULT_MAPPING = ux;
fi.DEFAULT_ANISOTROPY = 1;
class Mn {
  constructor(n = 0, a = 0, s = 0, c = 1) {
    Mn.prototype.isVector4 = true, this.x = n, this.y = a, this.z = s, this.w = c;
  }
  get width() {
    return this.z;
  }
  set width(n) {
    this.z = n;
  }
  get height() {
    return this.w;
  }
  set height(n) {
    this.w = n;
  }
  set(n, a, s, c) {
    return this.x = n, this.y = a, this.z = s, this.w = c, this;
  }
  setScalar(n) {
    return this.x = n, this.y = n, this.z = n, this.w = n, this;
  }
  setX(n) {
    return this.x = n, this;
  }
  setY(n) {
    return this.y = n, this;
  }
  setZ(n) {
    return this.z = n, this;
  }
  setW(n) {
    return this.w = n, this;
  }
  setComponent(n, a) {
    switch (n) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      case 2:
        this.z = a;
        break;
      case 3:
        this.w = a;
        break;
      default:
        throw new Error("index is out of range: " + n);
    }
    return this;
  }
  getComponent(n) {
    switch (n) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + n);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(n) {
    return this.x = n.x, this.y = n.y, this.z = n.z, this.w = n.w !== void 0 ? n.w : 1, this;
  }
  add(n) {
    return this.x += n.x, this.y += n.y, this.z += n.z, this.w += n.w, this;
  }
  addScalar(n) {
    return this.x += n, this.y += n, this.z += n, this.w += n, this;
  }
  addVectors(n, a) {
    return this.x = n.x + a.x, this.y = n.y + a.y, this.z = n.z + a.z, this.w = n.w + a.w, this;
  }
  addScaledVector(n, a) {
    return this.x += n.x * a, this.y += n.y * a, this.z += n.z * a, this.w += n.w * a, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this.z -= n.z, this.w -= n.w, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this.z -= n, this.w -= n, this;
  }
  subVectors(n, a) {
    return this.x = n.x - a.x, this.y = n.y - a.y, this.z = n.z - a.z, this.w = n.w - a.w, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this.z *= n.z, this.w *= n.w, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this.z *= n, this.w *= n, this;
  }
  applyMatrix4(n) {
    const a = this.x, s = this.y, c = this.z, f = this.w, h = n.elements;
    return this.x = h[0] * a + h[4] * s + h[8] * c + h[12] * f, this.y = h[1] * a + h[5] * s + h[9] * c + h[13] * f, this.z = h[2] * a + h[6] * s + h[10] * c + h[14] * f, this.w = h[3] * a + h[7] * s + h[11] * c + h[15] * f, this;
  }
  divide(n) {
    return this.x /= n.x, this.y /= n.y, this.z /= n.z, this.w /= n.w, this;
  }
  divideScalar(n) {
    return this.multiplyScalar(1 / n);
  }
  setAxisAngleFromQuaternion(n) {
    this.w = 2 * Math.acos(n.w);
    const a = Math.sqrt(1 - n.w * n.w);
    return a < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = n.x / a, this.y = n.y / a, this.z = n.z / a), this;
  }
  setAxisAngleFromRotationMatrix(n) {
    let a, s, c, f;
    const m = n.elements, _ = m[0], g = m[4], p = m[8], x = m[1], M = m[5], T = m[9], R = m[2], S = m[6], y = m[10];
    if (Math.abs(g - x) < 0.01 && Math.abs(p - R) < 0.01 && Math.abs(T - S) < 0.01) {
      if (Math.abs(g + x) < 0.1 && Math.abs(p + R) < 0.1 && Math.abs(T + S) < 0.1 && Math.abs(_ + M + y - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      a = Math.PI;
      const O = (_ + 1) / 2, N = (M + 1) / 2, et = (y + 1) / 2, V = (g + x) / 4, I = (p + R) / 4, q = (T + S) / 4;
      return O > N && O > et ? O < 0.01 ? (s = 0, c = 0.707106781, f = 0.707106781) : (s = Math.sqrt(O), c = V / s, f = I / s) : N > et ? N < 0.01 ? (s = 0.707106781, c = 0, f = 0.707106781) : (c = Math.sqrt(N), s = V / c, f = q / c) : et < 0.01 ? (s = 0.707106781, c = 0.707106781, f = 0) : (f = Math.sqrt(et), s = I / f, c = q / f), this.set(s, c, f, a), this;
    }
    let P = Math.sqrt((S - T) * (S - T) + (p - R) * (p - R) + (x - g) * (x - g));
    return Math.abs(P) < 1e-3 && (P = 1), this.x = (S - T) / P, this.y = (p - R) / P, this.z = (x - g) / P, this.w = Math.acos((_ + M + y - 1) / 2), this;
  }
  setFromMatrixPosition(n) {
    const a = n.elements;
    return this.x = a[12], this.y = a[13], this.z = a[14], this.w = a[15], this;
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this.z = Math.min(this.z, n.z), this.w = Math.min(this.w, n.w), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this.z = Math.max(this.z, n.z), this.w = Math.max(this.w, n.w), this;
  }
  clamp(n, a) {
    return this.x = Math.max(n.x, Math.min(a.x, this.x)), this.y = Math.max(n.y, Math.min(a.y, this.y)), this.z = Math.max(n.z, Math.min(a.z, this.z)), this.w = Math.max(n.w, Math.min(a.w, this.w)), this;
  }
  clampScalar(n, a) {
    return this.x = Math.max(n, Math.min(a, this.x)), this.y = Math.max(n, Math.min(a, this.y)), this.z = Math.max(n, Math.min(a, this.z)), this.w = Math.max(n, Math.min(a, this.w)), this;
  }
  clampLength(n, a) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(Math.max(n, Math.min(a, s)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(n) {
    return this.x * n.x + this.y * n.y + this.z * n.z + this.w * n.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(n) {
    return this.normalize().multiplyScalar(n);
  }
  lerp(n, a) {
    return this.x += (n.x - this.x) * a, this.y += (n.y - this.y) * a, this.z += (n.z - this.z) * a, this.w += (n.w - this.w) * a, this;
  }
  lerpVectors(n, a, s) {
    return this.x = n.x + (a.x - n.x) * s, this.y = n.y + (a.y - n.y) * s, this.z = n.z + (a.z - n.z) * s, this.w = n.w + (a.w - n.w) * s, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y && n.z === this.z && n.w === this.w;
  }
  fromArray(n, a = 0) {
    return this.x = n[a], this.y = n[a + 1], this.z = n[a + 2], this.w = n[a + 3], this;
  }
  toArray(n = [], a = 0) {
    return n[a] = this.x, n[a + 1] = this.y, n[a + 2] = this.z, n[a + 3] = this.w, n;
  }
  fromBufferAttribute(n, a) {
    return this.x = n.getX(a), this.y = n.getY(a), this.z = n.getZ(a), this.w = n.getW(a), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class AE extends Mo {
  constructor(n = 1, a = 1, s = {}) {
    super(), this.isRenderTarget = true, this.width = n, this.height = a, this.depth = 1, this.scissor = new Mn(0, 0, n, a), this.scissorTest = false, this.viewport = new Mn(0, 0, n, a);
    const c = { width: n, height: a, depth: 1 };
    s = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: da, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, s);
    const f = new fi(c, s.mapping, s.wrapS, s.wrapT, s.magFilter, s.minFilter, s.format, s.type, s.anisotropy, s.colorSpace);
    f.flipY = false, f.generateMipmaps = s.generateMipmaps, f.internalFormat = s.internalFormat, this.textures = [];
    const h = s.count;
    for (let d = 0; d < h; d++) this.textures[d] = f.clone(), this.textures[d].isRenderTargetTexture = true;
    this.depthBuffer = s.depthBuffer, this.stencilBuffer = s.stencilBuffer, this.resolveDepthBuffer = s.resolveDepthBuffer, this.resolveStencilBuffer = s.resolveStencilBuffer, this.depthTexture = s.depthTexture, this.samples = s.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(n) {
    this.textures[0] = n;
  }
  setSize(n, a, s = 1) {
    if (this.width !== n || this.height !== a || this.depth !== s) {
      this.width = n, this.height = a, this.depth = s;
      for (let c = 0, f = this.textures.length; c < f; c++) this.textures[c].image.width = n, this.textures[c].image.height = a, this.textures[c].image.depth = s;
      this.dispose();
    }
    this.viewport.set(0, 0, n, a), this.scissor.set(0, 0, n, a);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.width = n.width, this.height = n.height, this.depth = n.depth, this.scissor.copy(n.scissor), this.scissorTest = n.scissorTest, this.viewport.copy(n.viewport), this.textures.length = 0;
    for (let s = 0, c = n.textures.length; s < c; s++) this.textures[s] = n.textures[s].clone(), this.textures[s].isRenderTargetTexture = true;
    const a = Object.assign({}, n.texture.image);
    return this.texture.source = new Ex(a), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, n.depthTexture !== null && (this.depthTexture = n.depthTexture.clone()), this.samples = n.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ls extends AE {
  constructor(n = 1, a = 1, s = {}) {
    super(n, a, s), this.isWebGLRenderTarget = true;
  }
}
class Tx extends fi {
  constructor(n = null, a = 1, s = 1, c = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: n, width: a, height: s, depth: c }, this.magFilter = Zi, this.minFilter = Zi, this.wrapR = as, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(n) {
    this.layerUpdates.add(n);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class RE extends fi {
  constructor(n = null, a = 1, s = 1, c = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: n, width: a, height: s, depth: c }, this.magFilter = Zi, this.minFilter = Zi, this.wrapR = as, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Cl {
  constructor(n = 0, a = 0, s = 0, c = 1) {
    this.isQuaternion = true, this._x = n, this._y = a, this._z = s, this._w = c;
  }
  static slerpFlat(n, a, s, c, f, h, d) {
    let m = s[c + 0], _ = s[c + 1], g = s[c + 2], p = s[c + 3];
    const x = f[h + 0], M = f[h + 1], T = f[h + 2], R = f[h + 3];
    if (d === 0) {
      n[a + 0] = m, n[a + 1] = _, n[a + 2] = g, n[a + 3] = p;
      return;
    }
    if (d === 1) {
      n[a + 0] = x, n[a + 1] = M, n[a + 2] = T, n[a + 3] = R;
      return;
    }
    if (p !== R || m !== x || _ !== M || g !== T) {
      let S = 1 - d;
      const y = m * x + _ * M + g * T + p * R, P = y >= 0 ? 1 : -1, O = 1 - y * y;
      if (O > Number.EPSILON) {
        const et = Math.sqrt(O), V = Math.atan2(et, y * P);
        S = Math.sin(S * V) / et, d = Math.sin(d * V) / et;
      }
      const N = d * P;
      if (m = m * S + x * N, _ = _ * S + M * N, g = g * S + T * N, p = p * S + R * N, S === 1 - d) {
        const et = 1 / Math.sqrt(m * m + _ * _ + g * g + p * p);
        m *= et, _ *= et, g *= et, p *= et;
      }
    }
    n[a] = m, n[a + 1] = _, n[a + 2] = g, n[a + 3] = p;
  }
  static multiplyQuaternionsFlat(n, a, s, c, f, h) {
    const d = s[c], m = s[c + 1], _ = s[c + 2], g = s[c + 3], p = f[h], x = f[h + 1], M = f[h + 2], T = f[h + 3];
    return n[a] = d * T + g * p + m * M - _ * x, n[a + 1] = m * T + g * x + _ * p - d * M, n[a + 2] = _ * T + g * M + d * x - m * p, n[a + 3] = g * T - d * p - m * x - _ * M, n;
  }
  get x() {
    return this._x;
  }
  set x(n) {
    this._x = n, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(n) {
    this._y = n, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(n) {
    this._z = n, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(n) {
    this._w = n, this._onChangeCallback();
  }
  set(n, a, s, c) {
    return this._x = n, this._y = a, this._z = s, this._w = c, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(n) {
    return this._x = n.x, this._y = n.y, this._z = n.z, this._w = n.w, this._onChangeCallback(), this;
  }
  setFromEuler(n, a = true) {
    const s = n._x, c = n._y, f = n._z, h = n._order, d = Math.cos, m = Math.sin, _ = d(s / 2), g = d(c / 2), p = d(f / 2), x = m(s / 2), M = m(c / 2), T = m(f / 2);
    switch (h) {
      case "XYZ":
        this._x = x * g * p + _ * M * T, this._y = _ * M * p - x * g * T, this._z = _ * g * T + x * M * p, this._w = _ * g * p - x * M * T;
        break;
      case "YXZ":
        this._x = x * g * p + _ * M * T, this._y = _ * M * p - x * g * T, this._z = _ * g * T - x * M * p, this._w = _ * g * p + x * M * T;
        break;
      case "ZXY":
        this._x = x * g * p - _ * M * T, this._y = _ * M * p + x * g * T, this._z = _ * g * T + x * M * p, this._w = _ * g * p - x * M * T;
        break;
      case "ZYX":
        this._x = x * g * p - _ * M * T, this._y = _ * M * p + x * g * T, this._z = _ * g * T - x * M * p, this._w = _ * g * p + x * M * T;
        break;
      case "YZX":
        this._x = x * g * p + _ * M * T, this._y = _ * M * p + x * g * T, this._z = _ * g * T - x * M * p, this._w = _ * g * p - x * M * T;
        break;
      case "XZY":
        this._x = x * g * p - _ * M * T, this._y = _ * M * p - x * g * T, this._z = _ * g * T + x * M * p, this._w = _ * g * p + x * M * T;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + h);
    }
    return a === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(n, a) {
    const s = a / 2, c = Math.sin(s);
    return this._x = n.x * c, this._y = n.y * c, this._z = n.z * c, this._w = Math.cos(s), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(n) {
    const a = n.elements, s = a[0], c = a[4], f = a[8], h = a[1], d = a[5], m = a[9], _ = a[2], g = a[6], p = a[10], x = s + d + p;
    if (x > 0) {
      const M = 0.5 / Math.sqrt(x + 1);
      this._w = 0.25 / M, this._x = (g - m) * M, this._y = (f - _) * M, this._z = (h - c) * M;
    } else if (s > d && s > p) {
      const M = 2 * Math.sqrt(1 + s - d - p);
      this._w = (g - m) / M, this._x = 0.25 * M, this._y = (c + h) / M, this._z = (f + _) / M;
    } else if (d > p) {
      const M = 2 * Math.sqrt(1 + d - s - p);
      this._w = (f - _) / M, this._x = (c + h) / M, this._y = 0.25 * M, this._z = (m + g) / M;
    } else {
      const M = 2 * Math.sqrt(1 + p - s - d);
      this._w = (h - c) / M, this._x = (f + _) / M, this._y = (m + g) / M, this._z = 0.25 * M;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(n, a) {
    let s = n.dot(a) + 1;
    return s < Number.EPSILON ? (s = 0, Math.abs(n.x) > Math.abs(n.z) ? (this._x = -n.y, this._y = n.x, this._z = 0, this._w = s) : (this._x = 0, this._y = -n.z, this._z = n.y, this._w = s)) : (this._x = n.y * a.z - n.z * a.y, this._y = n.z * a.x - n.x * a.z, this._z = n.x * a.y - n.y * a.x, this._w = s), this.normalize();
  }
  angleTo(n) {
    return 2 * Math.acos(Math.abs(ci(this.dot(n), -1, 1)));
  }
  rotateTowards(n, a) {
    const s = this.angleTo(n);
    if (s === 0) return this;
    const c = Math.min(1, a / s);
    return this.slerp(n, c), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(n) {
    return this._x * n._x + this._y * n._y + this._z * n._z + this._w * n._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let n = this.length();
    return n === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (n = 1 / n, this._x = this._x * n, this._y = this._y * n, this._z = this._z * n, this._w = this._w * n), this._onChangeCallback(), this;
  }
  multiply(n) {
    return this.multiplyQuaternions(this, n);
  }
  premultiply(n) {
    return this.multiplyQuaternions(n, this);
  }
  multiplyQuaternions(n, a) {
    const s = n._x, c = n._y, f = n._z, h = n._w, d = a._x, m = a._y, _ = a._z, g = a._w;
    return this._x = s * g + h * d + c * _ - f * m, this._y = c * g + h * m + f * d - s * _, this._z = f * g + h * _ + s * m - c * d, this._w = h * g - s * d - c * m - f * _, this._onChangeCallback(), this;
  }
  slerp(n, a) {
    if (a === 0) return this;
    if (a === 1) return this.copy(n);
    const s = this._x, c = this._y, f = this._z, h = this._w;
    let d = h * n._w + s * n._x + c * n._y + f * n._z;
    if (d < 0 ? (this._w = -n._w, this._x = -n._x, this._y = -n._y, this._z = -n._z, d = -d) : this.copy(n), d >= 1) return this._w = h, this._x = s, this._y = c, this._z = f, this;
    const m = 1 - d * d;
    if (m <= Number.EPSILON) {
      const M = 1 - a;
      return this._w = M * h + a * this._w, this._x = M * s + a * this._x, this._y = M * c + a * this._y, this._z = M * f + a * this._z, this.normalize(), this;
    }
    const _ = Math.sqrt(m), g = Math.atan2(_, d), p = Math.sin((1 - a) * g) / _, x = Math.sin(a * g) / _;
    return this._w = h * p + this._w * x, this._x = s * p + this._x * x, this._y = c * p + this._y * x, this._z = f * p + this._z * x, this._onChangeCallback(), this;
  }
  slerpQuaternions(n, a, s) {
    return this.copy(n).slerp(a, s);
  }
  random() {
    const n = 2 * Math.PI * Math.random(), a = 2 * Math.PI * Math.random(), s = Math.random(), c = Math.sqrt(1 - s), f = Math.sqrt(s);
    return this.set(c * Math.sin(n), c * Math.cos(n), f * Math.sin(a), f * Math.cos(a));
  }
  equals(n) {
    return n._x === this._x && n._y === this._y && n._z === this._z && n._w === this._w;
  }
  fromArray(n, a = 0) {
    return this._x = n[a], this._y = n[a + 1], this._z = n[a + 2], this._w = n[a + 3], this._onChangeCallback(), this;
  }
  toArray(n = [], a = 0) {
    return n[a] = this._x, n[a + 1] = this._y, n[a + 2] = this._z, n[a + 3] = this._w, n;
  }
  fromBufferAttribute(n, a) {
    return this._x = n.getX(a), this._y = n.getY(a), this._z = n.getZ(a), this._w = n.getW(a), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(n) {
    return this._onChangeCallback = n, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class ft {
  constructor(n = 0, a = 0, s = 0) {
    ft.prototype.isVector3 = true, this.x = n, this.y = a, this.z = s;
  }
  set(n, a, s) {
    return s === void 0 && (s = this.z), this.x = n, this.y = a, this.z = s, this;
  }
  setScalar(n) {
    return this.x = n, this.y = n, this.z = n, this;
  }
  setX(n) {
    return this.x = n, this;
  }
  setY(n) {
    return this.y = n, this;
  }
  setZ(n) {
    return this.z = n, this;
  }
  setComponent(n, a) {
    switch (n) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      case 2:
        this.z = a;
        break;
      default:
        throw new Error("index is out of range: " + n);
    }
    return this;
  }
  getComponent(n) {
    switch (n) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + n);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(n) {
    return this.x = n.x, this.y = n.y, this.z = n.z, this;
  }
  add(n) {
    return this.x += n.x, this.y += n.y, this.z += n.z, this;
  }
  addScalar(n) {
    return this.x += n, this.y += n, this.z += n, this;
  }
  addVectors(n, a) {
    return this.x = n.x + a.x, this.y = n.y + a.y, this.z = n.z + a.z, this;
  }
  addScaledVector(n, a) {
    return this.x += n.x * a, this.y += n.y * a, this.z += n.z * a, this;
  }
  sub(n) {
    return this.x -= n.x, this.y -= n.y, this.z -= n.z, this;
  }
  subScalar(n) {
    return this.x -= n, this.y -= n, this.z -= n, this;
  }
  subVectors(n, a) {
    return this.x = n.x - a.x, this.y = n.y - a.y, this.z = n.z - a.z, this;
  }
  multiply(n) {
    return this.x *= n.x, this.y *= n.y, this.z *= n.z, this;
  }
  multiplyScalar(n) {
    return this.x *= n, this.y *= n, this.z *= n, this;
  }
  multiplyVectors(n, a) {
    return this.x = n.x * a.x, this.y = n.y * a.y, this.z = n.z * a.z, this;
  }
  applyEuler(n) {
    return this.applyQuaternion(p0.setFromEuler(n));
  }
  applyAxisAngle(n, a) {
    return this.applyQuaternion(p0.setFromAxisAngle(n, a));
  }
  applyMatrix3(n) {
    const a = this.x, s = this.y, c = this.z, f = n.elements;
    return this.x = f[0] * a + f[3] * s + f[6] * c, this.y = f[1] * a + f[4] * s + f[7] * c, this.z = f[2] * a + f[5] * s + f[8] * c, this;
  }
  applyNormalMatrix(n) {
    return this.applyMatrix3(n).normalize();
  }
  applyMatrix4(n) {
    const a = this.x, s = this.y, c = this.z, f = n.elements, h = 1 / (f[3] * a + f[7] * s + f[11] * c + f[15]);
    return this.x = (f[0] * a + f[4] * s + f[8] * c + f[12]) * h, this.y = (f[1] * a + f[5] * s + f[9] * c + f[13]) * h, this.z = (f[2] * a + f[6] * s + f[10] * c + f[14]) * h, this;
  }
  applyQuaternion(n) {
    const a = this.x, s = this.y, c = this.z, f = n.x, h = n.y, d = n.z, m = n.w, _ = 2 * (h * c - d * s), g = 2 * (d * a - f * c), p = 2 * (f * s - h * a);
    return this.x = a + m * _ + h * p - d * g, this.y = s + m * g + d * _ - f * p, this.z = c + m * p + f * g - h * _, this;
  }
  project(n) {
    return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix);
  }
  unproject(n) {
    return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld);
  }
  transformDirection(n) {
    const a = this.x, s = this.y, c = this.z, f = n.elements;
    return this.x = f[0] * a + f[4] * s + f[8] * c, this.y = f[1] * a + f[5] * s + f[9] * c, this.z = f[2] * a + f[6] * s + f[10] * c, this.normalize();
  }
  divide(n) {
    return this.x /= n.x, this.y /= n.y, this.z /= n.z, this;
  }
  divideScalar(n) {
    return this.multiplyScalar(1 / n);
  }
  min(n) {
    return this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this.z = Math.min(this.z, n.z), this;
  }
  max(n) {
    return this.x = Math.max(this.x, n.x), this.y = Math.max(this.y, n.y), this.z = Math.max(this.z, n.z), this;
  }
  clamp(n, a) {
    return this.x = Math.max(n.x, Math.min(a.x, this.x)), this.y = Math.max(n.y, Math.min(a.y, this.y)), this.z = Math.max(n.z, Math.min(a.z, this.z)), this;
  }
  clampScalar(n, a) {
    return this.x = Math.max(n, Math.min(a, this.x)), this.y = Math.max(n, Math.min(a, this.y)), this.z = Math.max(n, Math.min(a, this.z)), this;
  }
  clampLength(n, a) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(Math.max(n, Math.min(a, s)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(n) {
    return this.x * n.x + this.y * n.y + this.z * n.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(n) {
    return this.normalize().multiplyScalar(n);
  }
  lerp(n, a) {
    return this.x += (n.x - this.x) * a, this.y += (n.y - this.y) * a, this.z += (n.z - this.z) * a, this;
  }
  lerpVectors(n, a, s) {
    return this.x = n.x + (a.x - n.x) * s, this.y = n.y + (a.y - n.y) * s, this.z = n.z + (a.z - n.z) * s, this;
  }
  cross(n) {
    return this.crossVectors(this, n);
  }
  crossVectors(n, a) {
    const s = n.x, c = n.y, f = n.z, h = a.x, d = a.y, m = a.z;
    return this.x = c * m - f * d, this.y = f * h - s * m, this.z = s * d - c * h, this;
  }
  projectOnVector(n) {
    const a = n.lengthSq();
    if (a === 0) return this.set(0, 0, 0);
    const s = n.dot(this) / a;
    return this.copy(n).multiplyScalar(s);
  }
  projectOnPlane(n) {
    return vd.copy(this).projectOnVector(n), this.sub(vd);
  }
  reflect(n) {
    return this.sub(vd.copy(n).multiplyScalar(2 * this.dot(n)));
  }
  angleTo(n) {
    const a = Math.sqrt(this.lengthSq() * n.lengthSq());
    if (a === 0) return Math.PI / 2;
    const s = this.dot(n) / a;
    return Math.acos(ci(s, -1, 1));
  }
  distanceTo(n) {
    return Math.sqrt(this.distanceToSquared(n));
  }
  distanceToSquared(n) {
    const a = this.x - n.x, s = this.y - n.y, c = this.z - n.z;
    return a * a + s * s + c * c;
  }
  manhattanDistanceTo(n) {
    return Math.abs(this.x - n.x) + Math.abs(this.y - n.y) + Math.abs(this.z - n.z);
  }
  setFromSpherical(n) {
    return this.setFromSphericalCoords(n.radius, n.phi, n.theta);
  }
  setFromSphericalCoords(n, a, s) {
    const c = Math.sin(a) * n;
    return this.x = c * Math.sin(s), this.y = Math.cos(a) * n, this.z = c * Math.cos(s), this;
  }
  setFromCylindrical(n) {
    return this.setFromCylindricalCoords(n.radius, n.theta, n.y);
  }
  setFromCylindricalCoords(n, a, s) {
    return this.x = n * Math.sin(a), this.y = s, this.z = n * Math.cos(a), this;
  }
  setFromMatrixPosition(n) {
    const a = n.elements;
    return this.x = a[12], this.y = a[13], this.z = a[14], this;
  }
  setFromMatrixScale(n) {
    const a = this.setFromMatrixColumn(n, 0).length(), s = this.setFromMatrixColumn(n, 1).length(), c = this.setFromMatrixColumn(n, 2).length();
    return this.x = a, this.y = s, this.z = c, this;
  }
  setFromMatrixColumn(n, a) {
    return this.fromArray(n.elements, a * 4);
  }
  setFromMatrix3Column(n, a) {
    return this.fromArray(n.elements, a * 3);
  }
  setFromEuler(n) {
    return this.x = n._x, this.y = n._y, this.z = n._z, this;
  }
  setFromColor(n) {
    return this.x = n.r, this.y = n.g, this.z = n.b, this;
  }
  equals(n) {
    return n.x === this.x && n.y === this.y && n.z === this.z;
  }
  fromArray(n, a = 0) {
    return this.x = n[a], this.y = n[a + 1], this.z = n[a + 2], this;
  }
  toArray(n = [], a = 0) {
    return n[a] = this.x, n[a + 1] = this.y, n[a + 2] = this.z, n;
  }
  fromBufferAttribute(n, a) {
    return this.x = n.getX(a), this.y = n.getY(a), this.z = n.getZ(a), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const n = Math.random() * Math.PI * 2, a = Math.random() * 2 - 1, s = Math.sqrt(1 - a * a);
    return this.x = s * Math.cos(n), this.y = a, this.z = s * Math.sin(n), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const vd = new ft(), p0 = new Cl();
class wl {
  constructor(n = new ft(1 / 0, 1 / 0, 1 / 0), a = new ft(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = n, this.max = a;
  }
  set(n, a) {
    return this.min.copy(n), this.max.copy(a), this;
  }
  setFromArray(n) {
    this.makeEmpty();
    for (let a = 0, s = n.length; a < s; a += 3) this.expandByPoint(Xi.fromArray(n, a));
    return this;
  }
  setFromBufferAttribute(n) {
    this.makeEmpty();
    for (let a = 0, s = n.count; a < s; a++) this.expandByPoint(Xi.fromBufferAttribute(n, a));
    return this;
  }
  setFromPoints(n) {
    this.makeEmpty();
    for (let a = 0, s = n.length; a < s; a++) this.expandByPoint(n[a]);
    return this;
  }
  setFromCenterAndSize(n, a) {
    const s = Xi.copy(a).multiplyScalar(0.5);
    return this.min.copy(n).sub(s), this.max.copy(n).add(s), this;
  }
  setFromObject(n, a = false) {
    return this.makeEmpty(), this.expandByObject(n, a);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    return this.min.copy(n.min), this.max.copy(n.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(n) {
    return this.isEmpty() ? n.set(0, 0, 0) : n.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(n) {
    return this.isEmpty() ? n.set(0, 0, 0) : n.subVectors(this.max, this.min);
  }
  expandByPoint(n) {
    return this.min.min(n), this.max.max(n), this;
  }
  expandByVector(n) {
    return this.min.sub(n), this.max.add(n), this;
  }
  expandByScalar(n) {
    return this.min.addScalar(-n), this.max.addScalar(n), this;
  }
  expandByObject(n, a = false) {
    n.updateWorldMatrix(false, false);
    const s = n.geometry;
    if (s !== void 0) {
      const f = s.getAttribute("position");
      if (a === true && f !== void 0 && n.isInstancedMesh !== true) for (let h = 0, d = f.count; h < d; h++) n.isMesh === true ? n.getVertexPosition(h, Xi) : Xi.fromBufferAttribute(f, h), Xi.applyMatrix4(n.matrixWorld), this.expandByPoint(Xi);
      else n.boundingBox !== void 0 ? (n.boundingBox === null && n.computeBoundingBox(), Qc.copy(n.boundingBox)) : (s.boundingBox === null && s.computeBoundingBox(), Qc.copy(s.boundingBox)), Qc.applyMatrix4(n.matrixWorld), this.union(Qc);
    }
    const c = n.children;
    for (let f = 0, h = c.length; f < h; f++) this.expandByObject(c[f], a);
    return this;
  }
  containsPoint(n) {
    return n.x >= this.min.x && n.x <= this.max.x && n.y >= this.min.y && n.y <= this.max.y && n.z >= this.min.z && n.z <= this.max.z;
  }
  containsBox(n) {
    return this.min.x <= n.min.x && n.max.x <= this.max.x && this.min.y <= n.min.y && n.max.y <= this.max.y && this.min.z <= n.min.z && n.max.z <= this.max.z;
  }
  getParameter(n, a) {
    return a.set((n.x - this.min.x) / (this.max.x - this.min.x), (n.y - this.min.y) / (this.max.y - this.min.y), (n.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(n) {
    return n.max.x >= this.min.x && n.min.x <= this.max.x && n.max.y >= this.min.y && n.min.y <= this.max.y && n.max.z >= this.min.z && n.min.z <= this.max.z;
  }
  intersectsSphere(n) {
    return this.clampPoint(n.center, Xi), Xi.distanceToSquared(n.center) <= n.radius * n.radius;
  }
  intersectsPlane(n) {
    let a, s;
    return n.normal.x > 0 ? (a = n.normal.x * this.min.x, s = n.normal.x * this.max.x) : (a = n.normal.x * this.max.x, s = n.normal.x * this.min.x), n.normal.y > 0 ? (a += n.normal.y * this.min.y, s += n.normal.y * this.max.y) : (a += n.normal.y * this.max.y, s += n.normal.y * this.min.y), n.normal.z > 0 ? (a += n.normal.z * this.min.z, s += n.normal.z * this.max.z) : (a += n.normal.z * this.max.z, s += n.normal.z * this.min.z), a <= -n.constant && s >= -n.constant;
  }
  intersectsTriangle(n) {
    if (this.isEmpty()) return false;
    this.getCenter(vl), Jc.subVectors(this.max, vl), Js.subVectors(n.a, vl), $s.subVectors(n.b, vl), to.subVectors(n.c, vl), vr.subVectors($s, Js), _r.subVectors(to, $s), Wr.subVectors(Js, to);
    let a = [0, -vr.z, vr.y, 0, -_r.z, _r.y, 0, -Wr.z, Wr.y, vr.z, 0, -vr.x, _r.z, 0, -_r.x, Wr.z, 0, -Wr.x, -vr.y, vr.x, 0, -_r.y, _r.x, 0, -Wr.y, Wr.x, 0];
    return !_d(a, Js, $s, to, Jc) || (a = [1, 0, 0, 0, 1, 0, 0, 0, 1], !_d(a, Js, $s, to, Jc)) ? false : ($c.crossVectors(vr, _r), a = [$c.x, $c.y, $c.z], _d(a, Js, $s, to, Jc));
  }
  clampPoint(n, a) {
    return a.copy(n).clamp(this.min, this.max);
  }
  distanceToPoint(n) {
    return this.clampPoint(n, Xi).distanceTo(n);
  }
  getBoundingSphere(n) {
    return this.isEmpty() ? n.makeEmpty() : (this.getCenter(n.center), n.radius = this.getSize(Xi).length() * 0.5), n;
  }
  intersect(n) {
    return this.min.max(n.min), this.max.min(n.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(n) {
    return this.min.min(n.min), this.max.max(n.max), this;
  }
  applyMatrix4(n) {
    return this.isEmpty() ? this : (wa[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(n), wa[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(n), wa[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(n), wa[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(n), wa[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(n), wa[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(n), wa[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(n), wa[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(n), this.setFromPoints(wa), this);
  }
  translate(n) {
    return this.min.add(n), this.max.add(n), this;
  }
  equals(n) {
    return n.min.equals(this.min) && n.max.equals(this.max);
  }
}
const wa = [new ft(), new ft(), new ft(), new ft(), new ft(), new ft(), new ft(), new ft()], Xi = new ft(), Qc = new wl(), Js = new ft(), $s = new ft(), to = new ft(), vr = new ft(), _r = new ft(), Wr = new ft(), vl = new ft(), Jc = new ft(), $c = new ft(), Zr = new ft();
function _d(o, n, a, s, c) {
  for (let f = 0, h = o.length - 3; f <= h; f += 3) {
    Zr.fromArray(o, f);
    const d = c.x * Math.abs(Zr.x) + c.y * Math.abs(Zr.y) + c.z * Math.abs(Zr.z), m = n.dot(Zr), _ = a.dot(Zr), g = s.dot(Zr);
    if (Math.max(-Math.max(m, _, g), Math.min(m, _, g)) > d) return false;
  }
  return true;
}
const CE = new wl(), _l = new ft(), xd = new ft();
class Dl {
  constructor(n = new ft(), a = -1) {
    this.isSphere = true, this.center = n, this.radius = a;
  }
  set(n, a) {
    return this.center.copy(n), this.radius = a, this;
  }
  setFromPoints(n, a) {
    const s = this.center;
    a !== void 0 ? s.copy(a) : CE.setFromPoints(n).getCenter(s);
    let c = 0;
    for (let f = 0, h = n.length; f < h; f++) c = Math.max(c, s.distanceToSquared(n[f]));
    return this.radius = Math.sqrt(c), this;
  }
  copy(n) {
    return this.center.copy(n.center), this.radius = n.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(n) {
    return n.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(n) {
    return n.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(n) {
    const a = this.radius + n.radius;
    return n.center.distanceToSquared(this.center) <= a * a;
  }
  intersectsBox(n) {
    return n.intersectsSphere(this);
  }
  intersectsPlane(n) {
    return Math.abs(n.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(n, a) {
    const s = this.center.distanceToSquared(n);
    return a.copy(n), s > this.radius * this.radius && (a.sub(this.center).normalize(), a.multiplyScalar(this.radius).add(this.center)), a;
  }
  getBoundingBox(n) {
    return this.isEmpty() ? (n.makeEmpty(), n) : (n.set(this.center, this.center), n.expandByScalar(this.radius), n);
  }
  applyMatrix4(n) {
    return this.center.applyMatrix4(n), this.radius = this.radius * n.getMaxScaleOnAxis(), this;
  }
  translate(n) {
    return this.center.add(n), this;
  }
  expandByPoint(n) {
    if (this.isEmpty()) return this.center.copy(n), this.radius = 0, this;
    _l.subVectors(n, this.center);
    const a = _l.lengthSq();
    if (a > this.radius * this.radius) {
      const s = Math.sqrt(a), c = (s - this.radius) * 0.5;
      this.center.addScaledVector(_l, c / s), this.radius += c;
    }
    return this;
  }
  union(n) {
    return n.isEmpty() ? this : this.isEmpty() ? (this.copy(n), this) : (this.center.equals(n.center) === true ? this.radius = Math.max(this.radius, n.radius) : (xd.subVectors(n.center, this.center).setLength(n.radius), this.expandByPoint(_l.copy(n.center).add(xd)), this.expandByPoint(_l.copy(n.center).sub(xd))), this);
  }
  equals(n) {
    return n.center.equals(this.center) && n.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Da = new ft(), yd = new ft(), tu = new ft(), xr = new ft(), Sd = new ft(), eu = new ft(), Md = new ft();
class Hp {
  constructor(n = new ft(), a = new ft(0, 0, -1)) {
    this.origin = n, this.direction = a;
  }
  set(n, a) {
    return this.origin.copy(n), this.direction.copy(a), this;
  }
  copy(n) {
    return this.origin.copy(n.origin), this.direction.copy(n.direction), this;
  }
  at(n, a) {
    return a.copy(this.origin).addScaledVector(this.direction, n);
  }
  lookAt(n) {
    return this.direction.copy(n).sub(this.origin).normalize(), this;
  }
  recast(n) {
    return this.origin.copy(this.at(n, Da)), this;
  }
  closestPointToPoint(n, a) {
    a.subVectors(n, this.origin);
    const s = a.dot(this.direction);
    return s < 0 ? a.copy(this.origin) : a.copy(this.origin).addScaledVector(this.direction, s);
  }
  distanceToPoint(n) {
    return Math.sqrt(this.distanceSqToPoint(n));
  }
  distanceSqToPoint(n) {
    const a = Da.subVectors(n, this.origin).dot(this.direction);
    return a < 0 ? this.origin.distanceToSquared(n) : (Da.copy(this.origin).addScaledVector(this.direction, a), Da.distanceToSquared(n));
  }
  distanceSqToSegment(n, a, s, c) {
    yd.copy(n).add(a).multiplyScalar(0.5), tu.copy(a).sub(n).normalize(), xr.copy(this.origin).sub(yd);
    const f = n.distanceTo(a) * 0.5, h = -this.direction.dot(tu), d = xr.dot(this.direction), m = -xr.dot(tu), _ = xr.lengthSq(), g = Math.abs(1 - h * h);
    let p, x, M, T;
    if (g > 0) if (p = h * m - d, x = h * d - m, T = f * g, p >= 0) if (x >= -T) if (x <= T) {
      const R = 1 / g;
      p *= R, x *= R, M = p * (p + h * x + 2 * d) + x * (h * p + x + 2 * m) + _;
    } else x = f, p = Math.max(0, -(h * x + d)), M = -p * p + x * (x + 2 * m) + _;
    else x = -f, p = Math.max(0, -(h * x + d)), M = -p * p + x * (x + 2 * m) + _;
    else x <= -T ? (p = Math.max(0, -(-h * f + d)), x = p > 0 ? -f : Math.min(Math.max(-f, -m), f), M = -p * p + x * (x + 2 * m) + _) : x <= T ? (p = 0, x = Math.min(Math.max(-f, -m), f), M = x * (x + 2 * m) + _) : (p = Math.max(0, -(h * f + d)), x = p > 0 ? f : Math.min(Math.max(-f, -m), f), M = -p * p + x * (x + 2 * m) + _);
    else x = h > 0 ? -f : f, p = Math.max(0, -(h * x + d)), M = -p * p + x * (x + 2 * m) + _;
    return s && s.copy(this.origin).addScaledVector(this.direction, p), c && c.copy(yd).addScaledVector(tu, x), M;
  }
  intersectSphere(n, a) {
    Da.subVectors(n.center, this.origin);
    const s = Da.dot(this.direction), c = Da.dot(Da) - s * s, f = n.radius * n.radius;
    if (c > f) return null;
    const h = Math.sqrt(f - c), d = s - h, m = s + h;
    return m < 0 ? null : d < 0 ? this.at(m, a) : this.at(d, a);
  }
  intersectsSphere(n) {
    return this.distanceSqToPoint(n.center) <= n.radius * n.radius;
  }
  distanceToPlane(n) {
    const a = n.normal.dot(this.direction);
    if (a === 0) return n.distanceToPoint(this.origin) === 0 ? 0 : null;
    const s = -(this.origin.dot(n.normal) + n.constant) / a;
    return s >= 0 ? s : null;
  }
  intersectPlane(n, a) {
    const s = this.distanceToPlane(n);
    return s === null ? null : this.at(s, a);
  }
  intersectsPlane(n) {
    const a = n.distanceToPoint(this.origin);
    return a === 0 || n.normal.dot(this.direction) * a < 0;
  }
  intersectBox(n, a) {
    let s, c, f, h, d, m;
    const _ = 1 / this.direction.x, g = 1 / this.direction.y, p = 1 / this.direction.z, x = this.origin;
    return _ >= 0 ? (s = (n.min.x - x.x) * _, c = (n.max.x - x.x) * _) : (s = (n.max.x - x.x) * _, c = (n.min.x - x.x) * _), g >= 0 ? (f = (n.min.y - x.y) * g, h = (n.max.y - x.y) * g) : (f = (n.max.y - x.y) * g, h = (n.min.y - x.y) * g), s > h || f > c || ((f > s || isNaN(s)) && (s = f), (h < c || isNaN(c)) && (c = h), p >= 0 ? (d = (n.min.z - x.z) * p, m = (n.max.z - x.z) * p) : (d = (n.max.z - x.z) * p, m = (n.min.z - x.z) * p), s > m || d > c) || ((d > s || s !== s) && (s = d), (m < c || c !== c) && (c = m), c < 0) ? null : this.at(s >= 0 ? s : c, a);
  }
  intersectsBox(n) {
    return this.intersectBox(n, Da) !== null;
  }
  intersectTriangle(n, a, s, c, f) {
    Sd.subVectors(a, n), eu.subVectors(s, n), Md.crossVectors(Sd, eu);
    let h = this.direction.dot(Md), d;
    if (h > 0) {
      if (c) return null;
      d = 1;
    } else if (h < 0) d = -1, h = -h;
    else return null;
    xr.subVectors(this.origin, n);
    const m = d * this.direction.dot(eu.crossVectors(xr, eu));
    if (m < 0) return null;
    const _ = d * this.direction.dot(Sd.cross(xr));
    if (_ < 0 || m + _ > h) return null;
    const g = -d * xr.dot(Md);
    return g < 0 ? null : this.at(g / h, f);
  }
  applyMatrix4(n) {
    return this.origin.applyMatrix4(n), this.direction.transformDirection(n), this;
  }
  equals(n) {
    return n.origin.equals(this.origin) && n.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class _n {
  constructor(n, a, s, c, f, h, d, m, _, g, p, x, M, T, R, S) {
    _n.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], n !== void 0 && this.set(n, a, s, c, f, h, d, m, _, g, p, x, M, T, R, S);
  }
  set(n, a, s, c, f, h, d, m, _, g, p, x, M, T, R, S) {
    const y = this.elements;
    return y[0] = n, y[4] = a, y[8] = s, y[12] = c, y[1] = f, y[5] = h, y[9] = d, y[13] = m, y[2] = _, y[6] = g, y[10] = p, y[14] = x, y[3] = M, y[7] = T, y[11] = R, y[15] = S, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new _n().fromArray(this.elements);
  }
  copy(n) {
    const a = this.elements, s = n.elements;
    return a[0] = s[0], a[1] = s[1], a[2] = s[2], a[3] = s[3], a[4] = s[4], a[5] = s[5], a[6] = s[6], a[7] = s[7], a[8] = s[8], a[9] = s[9], a[10] = s[10], a[11] = s[11], a[12] = s[12], a[13] = s[13], a[14] = s[14], a[15] = s[15], this;
  }
  copyPosition(n) {
    const a = this.elements, s = n.elements;
    return a[12] = s[12], a[13] = s[13], a[14] = s[14], this;
  }
  setFromMatrix3(n) {
    const a = n.elements;
    return this.set(a[0], a[3], a[6], 0, a[1], a[4], a[7], 0, a[2], a[5], a[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(n, a, s) {
    return n.setFromMatrixColumn(this, 0), a.setFromMatrixColumn(this, 1), s.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(n, a, s) {
    return this.set(n.x, a.x, s.x, 0, n.y, a.y, s.y, 0, n.z, a.z, s.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(n) {
    const a = this.elements, s = n.elements, c = 1 / eo.setFromMatrixColumn(n, 0).length(), f = 1 / eo.setFromMatrixColumn(n, 1).length(), h = 1 / eo.setFromMatrixColumn(n, 2).length();
    return a[0] = s[0] * c, a[1] = s[1] * c, a[2] = s[2] * c, a[3] = 0, a[4] = s[4] * f, a[5] = s[5] * f, a[6] = s[6] * f, a[7] = 0, a[8] = s[8] * h, a[9] = s[9] * h, a[10] = s[10] * h, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromEuler(n) {
    const a = this.elements, s = n.x, c = n.y, f = n.z, h = Math.cos(s), d = Math.sin(s), m = Math.cos(c), _ = Math.sin(c), g = Math.cos(f), p = Math.sin(f);
    if (n.order === "XYZ") {
      const x = h * g, M = h * p, T = d * g, R = d * p;
      a[0] = m * g, a[4] = -m * p, a[8] = _, a[1] = M + T * _, a[5] = x - R * _, a[9] = -d * m, a[2] = R - x * _, a[6] = T + M * _, a[10] = h * m;
    } else if (n.order === "YXZ") {
      const x = m * g, M = m * p, T = _ * g, R = _ * p;
      a[0] = x + R * d, a[4] = T * d - M, a[8] = h * _, a[1] = h * p, a[5] = h * g, a[9] = -d, a[2] = M * d - T, a[6] = R + x * d, a[10] = h * m;
    } else if (n.order === "ZXY") {
      const x = m * g, M = m * p, T = _ * g, R = _ * p;
      a[0] = x - R * d, a[4] = -h * p, a[8] = T + M * d, a[1] = M + T * d, a[5] = h * g, a[9] = R - x * d, a[2] = -h * _, a[6] = d, a[10] = h * m;
    } else if (n.order === "ZYX") {
      const x = h * g, M = h * p, T = d * g, R = d * p;
      a[0] = m * g, a[4] = T * _ - M, a[8] = x * _ + R, a[1] = m * p, a[5] = R * _ + x, a[9] = M * _ - T, a[2] = -_, a[6] = d * m, a[10] = h * m;
    } else if (n.order === "YZX") {
      const x = h * m, M = h * _, T = d * m, R = d * _;
      a[0] = m * g, a[4] = R - x * p, a[8] = T * p + M, a[1] = p, a[5] = h * g, a[9] = -d * g, a[2] = -_ * g, a[6] = M * p + T, a[10] = x - R * p;
    } else if (n.order === "XZY") {
      const x = h * m, M = h * _, T = d * m, R = d * _;
      a[0] = m * g, a[4] = -p, a[8] = _ * g, a[1] = x * p + R, a[5] = h * g, a[9] = M * p - T, a[2] = T * p - M, a[6] = d * g, a[10] = R * p + x;
    }
    return a[3] = 0, a[7] = 0, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, this;
  }
  makeRotationFromQuaternion(n) {
    return this.compose(wE, n, DE);
  }
  lookAt(n, a, s) {
    const c = this.elements;
    return yi.subVectors(n, a), yi.lengthSq() === 0 && (yi.z = 1), yi.normalize(), yr.crossVectors(s, yi), yr.lengthSq() === 0 && (Math.abs(s.z) === 1 ? yi.x += 1e-4 : yi.z += 1e-4, yi.normalize(), yr.crossVectors(s, yi)), yr.normalize(), nu.crossVectors(yi, yr), c[0] = yr.x, c[4] = nu.x, c[8] = yi.x, c[1] = yr.y, c[5] = nu.y, c[9] = yi.y, c[2] = yr.z, c[6] = nu.z, c[10] = yi.z, this;
  }
  multiply(n) {
    return this.multiplyMatrices(this, n);
  }
  premultiply(n) {
    return this.multiplyMatrices(n, this);
  }
  multiplyMatrices(n, a) {
    const s = n.elements, c = a.elements, f = this.elements, h = s[0], d = s[4], m = s[8], _ = s[12], g = s[1], p = s[5], x = s[9], M = s[13], T = s[2], R = s[6], S = s[10], y = s[14], P = s[3], O = s[7], N = s[11], et = s[15], V = c[0], I = c[4], q = c[8], U = c[12], C = c[1], B = c[5], at = c[9], ot = c[13], ht = c[2], gt = c[6], X = c[10], rt = c[14], Z = c[3], St = c[7], bt = c[11], Vt = c[15];
    return f[0] = h * V + d * C + m * ht + _ * Z, f[4] = h * I + d * B + m * gt + _ * St, f[8] = h * q + d * at + m * X + _ * bt, f[12] = h * U + d * ot + m * rt + _ * Vt, f[1] = g * V + p * C + x * ht + M * Z, f[5] = g * I + p * B + x * gt + M * St, f[9] = g * q + p * at + x * X + M * bt, f[13] = g * U + p * ot + x * rt + M * Vt, f[2] = T * V + R * C + S * ht + y * Z, f[6] = T * I + R * B + S * gt + y * St, f[10] = T * q + R * at + S * X + y * bt, f[14] = T * U + R * ot + S * rt + y * Vt, f[3] = P * V + O * C + N * ht + et * Z, f[7] = P * I + O * B + N * gt + et * St, f[11] = P * q + O * at + N * X + et * bt, f[15] = P * U + O * ot + N * rt + et * Vt, this;
  }
  multiplyScalar(n) {
    const a = this.elements;
    return a[0] *= n, a[4] *= n, a[8] *= n, a[12] *= n, a[1] *= n, a[5] *= n, a[9] *= n, a[13] *= n, a[2] *= n, a[6] *= n, a[10] *= n, a[14] *= n, a[3] *= n, a[7] *= n, a[11] *= n, a[15] *= n, this;
  }
  determinant() {
    const n = this.elements, a = n[0], s = n[4], c = n[8], f = n[12], h = n[1], d = n[5], m = n[9], _ = n[13], g = n[2], p = n[6], x = n[10], M = n[14], T = n[3], R = n[7], S = n[11], y = n[15];
    return T * (+f * m * p - c * _ * p - f * d * x + s * _ * x + c * d * M - s * m * M) + R * (+a * m * M - a * _ * x + f * h * x - c * h * M + c * _ * g - f * m * g) + S * (+a * _ * p - a * d * M - f * h * p + s * h * M + f * d * g - s * _ * g) + y * (-c * d * g - a * m * p + a * d * x + c * h * p - s * h * x + s * m * g);
  }
  transpose() {
    const n = this.elements;
    let a;
    return a = n[1], n[1] = n[4], n[4] = a, a = n[2], n[2] = n[8], n[8] = a, a = n[6], n[6] = n[9], n[9] = a, a = n[3], n[3] = n[12], n[12] = a, a = n[7], n[7] = n[13], n[13] = a, a = n[11], n[11] = n[14], n[14] = a, this;
  }
  setPosition(n, a, s) {
    const c = this.elements;
    return n.isVector3 ? (c[12] = n.x, c[13] = n.y, c[14] = n.z) : (c[12] = n, c[13] = a, c[14] = s), this;
  }
  invert() {
    const n = this.elements, a = n[0], s = n[1], c = n[2], f = n[3], h = n[4], d = n[5], m = n[6], _ = n[7], g = n[8], p = n[9], x = n[10], M = n[11], T = n[12], R = n[13], S = n[14], y = n[15], P = p * S * _ - R * x * _ + R * m * M - d * S * M - p * m * y + d * x * y, O = T * x * _ - g * S * _ - T * m * M + h * S * M + g * m * y - h * x * y, N = g * R * _ - T * p * _ + T * d * M - h * R * M - g * d * y + h * p * y, et = T * p * m - g * R * m - T * d * x + h * R * x + g * d * S - h * p * S, V = a * P + s * O + c * N + f * et;
    if (V === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / V;
    return n[0] = P * I, n[1] = (R * x * f - p * S * f - R * c * M + s * S * M + p * c * y - s * x * y) * I, n[2] = (d * S * f - R * m * f + R * c * _ - s * S * _ - d * c * y + s * m * y) * I, n[3] = (p * m * f - d * x * f - p * c * _ + s * x * _ + d * c * M - s * m * M) * I, n[4] = O * I, n[5] = (g * S * f - T * x * f + T * c * M - a * S * M - g * c * y + a * x * y) * I, n[6] = (T * m * f - h * S * f - T * c * _ + a * S * _ + h * c * y - a * m * y) * I, n[7] = (h * x * f - g * m * f + g * c * _ - a * x * _ - h * c * M + a * m * M) * I, n[8] = N * I, n[9] = (T * p * f - g * R * f - T * s * M + a * R * M + g * s * y - a * p * y) * I, n[10] = (h * R * f - T * d * f + T * s * _ - a * R * _ - h * s * y + a * d * y) * I, n[11] = (g * d * f - h * p * f - g * s * _ + a * p * _ + h * s * M - a * d * M) * I, n[12] = et * I, n[13] = (g * R * c - T * p * c + T * s * x - a * R * x - g * s * S + a * p * S) * I, n[14] = (T * d * c - h * R * c - T * s * m + a * R * m + h * s * S - a * d * S) * I, n[15] = (h * p * c - g * d * c + g * s * m - a * p * m - h * s * x + a * d * x) * I, this;
  }
  scale(n) {
    const a = this.elements, s = n.x, c = n.y, f = n.z;
    return a[0] *= s, a[4] *= c, a[8] *= f, a[1] *= s, a[5] *= c, a[9] *= f, a[2] *= s, a[6] *= c, a[10] *= f, a[3] *= s, a[7] *= c, a[11] *= f, this;
  }
  getMaxScaleOnAxis() {
    const n = this.elements, a = n[0] * n[0] + n[1] * n[1] + n[2] * n[2], s = n[4] * n[4] + n[5] * n[5] + n[6] * n[6], c = n[8] * n[8] + n[9] * n[9] + n[10] * n[10];
    return Math.sqrt(Math.max(a, s, c));
  }
  makeTranslation(n, a, s) {
    return n.isVector3 ? this.set(1, 0, 0, n.x, 0, 1, 0, n.y, 0, 0, 1, n.z, 0, 0, 0, 1) : this.set(1, 0, 0, n, 0, 1, 0, a, 0, 0, 1, s, 0, 0, 0, 1), this;
  }
  makeRotationX(n) {
    const a = Math.cos(n), s = Math.sin(n);
    return this.set(1, 0, 0, 0, 0, a, -s, 0, 0, s, a, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(n) {
    const a = Math.cos(n), s = Math.sin(n);
    return this.set(a, 0, s, 0, 0, 1, 0, 0, -s, 0, a, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(n) {
    const a = Math.cos(n), s = Math.sin(n);
    return this.set(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(n, a) {
    const s = Math.cos(a), c = Math.sin(a), f = 1 - s, h = n.x, d = n.y, m = n.z, _ = f * h, g = f * d;
    return this.set(_ * h + s, _ * d - c * m, _ * m + c * d, 0, _ * d + c * m, g * d + s, g * m - c * h, 0, _ * m - c * d, g * m + c * h, f * m * m + s, 0, 0, 0, 0, 1), this;
  }
  makeScale(n, a, s) {
    return this.set(n, 0, 0, 0, 0, a, 0, 0, 0, 0, s, 0, 0, 0, 0, 1), this;
  }
  makeShear(n, a, s, c, f, h) {
    return this.set(1, s, f, 0, n, 1, h, 0, a, c, 1, 0, 0, 0, 0, 1), this;
  }
  compose(n, a, s) {
    const c = this.elements, f = a._x, h = a._y, d = a._z, m = a._w, _ = f + f, g = h + h, p = d + d, x = f * _, M = f * g, T = f * p, R = h * g, S = h * p, y = d * p, P = m * _, O = m * g, N = m * p, et = s.x, V = s.y, I = s.z;
    return c[0] = (1 - (R + y)) * et, c[1] = (M + N) * et, c[2] = (T - O) * et, c[3] = 0, c[4] = (M - N) * V, c[5] = (1 - (x + y)) * V, c[6] = (S + P) * V, c[7] = 0, c[8] = (T + O) * I, c[9] = (S - P) * I, c[10] = (1 - (x + R)) * I, c[11] = 0, c[12] = n.x, c[13] = n.y, c[14] = n.z, c[15] = 1, this;
  }
  decompose(n, a, s) {
    const c = this.elements;
    let f = eo.set(c[0], c[1], c[2]).length();
    const h = eo.set(c[4], c[5], c[6]).length(), d = eo.set(c[8], c[9], c[10]).length();
    this.determinant() < 0 && (f = -f), n.x = c[12], n.y = c[13], n.z = c[14], ki.copy(this);
    const _ = 1 / f, g = 1 / h, p = 1 / d;
    return ki.elements[0] *= _, ki.elements[1] *= _, ki.elements[2] *= _, ki.elements[4] *= g, ki.elements[5] *= g, ki.elements[6] *= g, ki.elements[8] *= p, ki.elements[9] *= p, ki.elements[10] *= p, a.setFromRotationMatrix(ki), s.x = f, s.y = h, s.z = d, this;
  }
  makePerspective(n, a, s, c, f, h, d = Ia) {
    const m = this.elements, _ = 2 * f / (a - n), g = 2 * f / (s - c), p = (a + n) / (a - n), x = (s + c) / (s - c);
    let M, T;
    if (d === Ia) M = -(h + f) / (h - f), T = -2 * h * f / (h - f);
    else if (d === Cu) M = -h / (h - f), T = -h * f / (h - f);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + d);
    return m[0] = _, m[4] = 0, m[8] = p, m[12] = 0, m[1] = 0, m[5] = g, m[9] = x, m[13] = 0, m[2] = 0, m[6] = 0, m[10] = M, m[14] = T, m[3] = 0, m[7] = 0, m[11] = -1, m[15] = 0, this;
  }
  makeOrthographic(n, a, s, c, f, h, d = Ia) {
    const m = this.elements, _ = 1 / (a - n), g = 1 / (s - c), p = 1 / (h - f), x = (a + n) * _, M = (s + c) * g;
    let T, R;
    if (d === Ia) T = (h + f) * p, R = -2 * p;
    else if (d === Cu) T = f * p, R = -1 * p;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + d);
    return m[0] = 2 * _, m[4] = 0, m[8] = 0, m[12] = -x, m[1] = 0, m[5] = 2 * g, m[9] = 0, m[13] = -M, m[2] = 0, m[6] = 0, m[10] = R, m[14] = -T, m[3] = 0, m[7] = 0, m[11] = 0, m[15] = 1, this;
  }
  equals(n) {
    const a = this.elements, s = n.elements;
    for (let c = 0; c < 16; c++) if (a[c] !== s[c]) return false;
    return true;
  }
  fromArray(n, a = 0) {
    for (let s = 0; s < 16; s++) this.elements[s] = n[s + a];
    return this;
  }
  toArray(n = [], a = 0) {
    const s = this.elements;
    return n[a] = s[0], n[a + 1] = s[1], n[a + 2] = s[2], n[a + 3] = s[3], n[a + 4] = s[4], n[a + 5] = s[5], n[a + 6] = s[6], n[a + 7] = s[7], n[a + 8] = s[8], n[a + 9] = s[9], n[a + 10] = s[10], n[a + 11] = s[11], n[a + 12] = s[12], n[a + 13] = s[13], n[a + 14] = s[14], n[a + 15] = s[15], n;
  }
}
const eo = new ft(), ki = new _n(), wE = new ft(0, 0, 0), DE = new ft(1, 1, 1), yr = new ft(), nu = new ft(), yi = new ft(), m0 = new _n(), g0 = new Cl();
class Va {
  constructor(n = 0, a = 0, s = 0, c = Va.DEFAULT_ORDER) {
    this.isEuler = true, this._x = n, this._y = a, this._z = s, this._order = c;
  }
  get x() {
    return this._x;
  }
  set x(n) {
    this._x = n, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(n) {
    this._y = n, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(n) {
    this._z = n, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(n) {
    this._order = n, this._onChangeCallback();
  }
  set(n, a, s, c = this._order) {
    return this._x = n, this._y = a, this._z = s, this._order = c, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(n) {
    return this._x = n._x, this._y = n._y, this._z = n._z, this._order = n._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(n, a = this._order, s = true) {
    const c = n.elements, f = c[0], h = c[4], d = c[8], m = c[1], _ = c[5], g = c[9], p = c[2], x = c[6], M = c[10];
    switch (a) {
      case "XYZ":
        this._y = Math.asin(ci(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(-g, M), this._z = Math.atan2(-h, f)) : (this._x = Math.atan2(x, _), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ci(g, -1, 1)), Math.abs(g) < 0.9999999 ? (this._y = Math.atan2(d, M), this._z = Math.atan2(m, _)) : (this._y = Math.atan2(-p, f), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ci(x, -1, 1)), Math.abs(x) < 0.9999999 ? (this._y = Math.atan2(-p, M), this._z = Math.atan2(-h, _)) : (this._y = 0, this._z = Math.atan2(m, f));
        break;
      case "ZYX":
        this._y = Math.asin(-ci(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._x = Math.atan2(x, M), this._z = Math.atan2(m, f)) : (this._x = 0, this._z = Math.atan2(-h, _));
        break;
      case "YZX":
        this._z = Math.asin(ci(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(-g, _), this._y = Math.atan2(-p, f)) : (this._x = 0, this._y = Math.atan2(d, M));
        break;
      case "XZY":
        this._z = Math.asin(-ci(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(x, _), this._y = Math.atan2(d, f)) : (this._x = Math.atan2(-g, M), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + a);
    }
    return this._order = a, s === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(n, a, s) {
    return m0.makeRotationFromQuaternion(n), this.setFromRotationMatrix(m0, a, s);
  }
  setFromVector3(n, a = this._order) {
    return this.set(n.x, n.y, n.z, a);
  }
  reorder(n) {
    return g0.setFromEuler(this), this.setFromQuaternion(g0, n);
  }
  equals(n) {
    return n._x === this._x && n._y === this._y && n._z === this._z && n._order === this._order;
  }
  fromArray(n) {
    return this._x = n[0], this._y = n[1], this._z = n[2], n[3] !== void 0 && (this._order = n[3]), this._onChangeCallback(), this;
  }
  toArray(n = [], a = 0) {
    return n[a] = this._x, n[a + 1] = this._y, n[a + 2] = this._z, n[a + 3] = this._order, n;
  }
  _onChange(n) {
    return this._onChangeCallback = n, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Va.DEFAULT_ORDER = "XYZ";
class bx {
  constructor() {
    this.mask = 1;
  }
  set(n) {
    this.mask = (1 << n | 0) >>> 0;
  }
  enable(n) {
    this.mask |= 1 << n | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(n) {
    this.mask ^= 1 << n | 0;
  }
  disable(n) {
    this.mask &= ~(1 << n | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(n) {
    return (this.mask & n.mask) !== 0;
  }
  isEnabled(n) {
    return (this.mask & (1 << n | 0)) !== 0;
  }
}
let UE = 0;
const v0 = new ft(), no = new Cl(), Ua = new _n(), iu = new ft(), xl = new ft(), NE = new ft(), LE = new Cl(), _0 = new ft(1, 0, 0), x0 = new ft(0, 1, 0), y0 = new ft(0, 0, 1), S0 = { type: "added" }, OE = { type: "removed" }, io = { type: "childadded", child: null }, Ed = { type: "childremoved", child: null };
class ti extends Mo {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: UE++ }), this.uuid = Rl(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ti.DEFAULT_UP.clone();
    const n = new ft(), a = new Va(), s = new Cl(), c = new ft(1, 1, 1);
    function f() {
      s.setFromEuler(a, false);
    }
    function h() {
      a.setFromQuaternion(s, void 0, false);
    }
    a._onChange(f), s._onChange(h), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: n }, rotation: { configurable: true, enumerable: true, value: a }, quaternion: { configurable: true, enumerable: true, value: s }, scale: { configurable: true, enumerable: true, value: c }, modelViewMatrix: { value: new _n() }, normalMatrix: { value: new Ae() } }), this.matrix = new _n(), this.matrixWorld = new _n(), this.matrixAutoUpdate = ti.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new bx(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(n) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(n), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(n) {
    return this.quaternion.premultiply(n), this;
  }
  setRotationFromAxisAngle(n, a) {
    this.quaternion.setFromAxisAngle(n, a);
  }
  setRotationFromEuler(n) {
    this.quaternion.setFromEuler(n, true);
  }
  setRotationFromMatrix(n) {
    this.quaternion.setFromRotationMatrix(n);
  }
  setRotationFromQuaternion(n) {
    this.quaternion.copy(n);
  }
  rotateOnAxis(n, a) {
    return no.setFromAxisAngle(n, a), this.quaternion.multiply(no), this;
  }
  rotateOnWorldAxis(n, a) {
    return no.setFromAxisAngle(n, a), this.quaternion.premultiply(no), this;
  }
  rotateX(n) {
    return this.rotateOnAxis(_0, n);
  }
  rotateY(n) {
    return this.rotateOnAxis(x0, n);
  }
  rotateZ(n) {
    return this.rotateOnAxis(y0, n);
  }
  translateOnAxis(n, a) {
    return v0.copy(n).applyQuaternion(this.quaternion), this.position.add(v0.multiplyScalar(a)), this;
  }
  translateX(n) {
    return this.translateOnAxis(_0, n);
  }
  translateY(n) {
    return this.translateOnAxis(x0, n);
  }
  translateZ(n) {
    return this.translateOnAxis(y0, n);
  }
  localToWorld(n) {
    return this.updateWorldMatrix(true, false), n.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(n) {
    return this.updateWorldMatrix(true, false), n.applyMatrix4(Ua.copy(this.matrixWorld).invert());
  }
  lookAt(n, a, s) {
    n.isVector3 ? iu.copy(n) : iu.set(n, a, s);
    const c = this.parent;
    this.updateWorldMatrix(true, false), xl.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ua.lookAt(xl, iu, this.up) : Ua.lookAt(iu, xl, this.up), this.quaternion.setFromRotationMatrix(Ua), c && (Ua.extractRotation(c.matrixWorld), no.setFromRotationMatrix(Ua), this.quaternion.premultiply(no.invert()));
  }
  add(n) {
    if (arguments.length > 1) {
      for (let a = 0; a < arguments.length; a++) this.add(arguments[a]);
      return this;
    }
    return n === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", n), this) : (n && n.isObject3D ? (n.removeFromParent(), n.parent = this, this.children.push(n), n.dispatchEvent(S0), io.child = n, this.dispatchEvent(io), io.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", n), this);
  }
  remove(n) {
    if (arguments.length > 1) {
      for (let s = 0; s < arguments.length; s++) this.remove(arguments[s]);
      return this;
    }
    const a = this.children.indexOf(n);
    return a !== -1 && (n.parent = null, this.children.splice(a, 1), n.dispatchEvent(OE), Ed.child = n, this.dispatchEvent(Ed), Ed.child = null), this;
  }
  removeFromParent() {
    const n = this.parent;
    return n !== null && n.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(n) {
    return this.updateWorldMatrix(true, false), Ua.copy(this.matrixWorld).invert(), n.parent !== null && (n.parent.updateWorldMatrix(true, false), Ua.multiply(n.parent.matrixWorld)), n.applyMatrix4(Ua), n.removeFromParent(), n.parent = this, this.children.push(n), n.updateWorldMatrix(false, true), n.dispatchEvent(S0), io.child = n, this.dispatchEvent(io), io.child = null, this;
  }
  getObjectById(n) {
    return this.getObjectByProperty("id", n);
  }
  getObjectByName(n) {
    return this.getObjectByProperty("name", n);
  }
  getObjectByProperty(n, a) {
    if (this[n] === a) return this;
    for (let s = 0, c = this.children.length; s < c; s++) {
      const h = this.children[s].getObjectByProperty(n, a);
      if (h !== void 0) return h;
    }
  }
  getObjectsByProperty(n, a, s = []) {
    this[n] === a && s.push(this);
    const c = this.children;
    for (let f = 0, h = c.length; f < h; f++) c[f].getObjectsByProperty(n, a, s);
    return s;
  }
  getWorldPosition(n) {
    return this.updateWorldMatrix(true, false), n.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(n) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(xl, n, NE), n;
  }
  getWorldScale(n) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(xl, LE, n), n;
  }
  getWorldDirection(n) {
    this.updateWorldMatrix(true, false);
    const a = this.matrixWorld.elements;
    return n.set(a[8], a[9], a[10]).normalize();
  }
  raycast() {
  }
  traverse(n) {
    n(this);
    const a = this.children;
    for (let s = 0, c = a.length; s < c; s++) a[s].traverse(n);
  }
  traverseVisible(n) {
    if (this.visible === false) return;
    n(this);
    const a = this.children;
    for (let s = 0, c = a.length; s < c; s++) a[s].traverseVisible(n);
  }
  traverseAncestors(n) {
    const a = this.parent;
    a !== null && (n(a), a.traverseAncestors(n));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(n) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, n = true);
    const a = this.children;
    for (let s = 0, c = a.length; s < c; s++) a[s].updateMatrixWorld(n);
  }
  updateWorldMatrix(n, a) {
    const s = this.parent;
    if (n === true && s !== null && s.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), a === true) {
      const c = this.children;
      for (let f = 0, h = c.length; f < h; f++) c[f].updateWorldMatrix(false, true);
    }
  }
  toJSON(n) {
    const a = n === void 0 || typeof n == "string", s = {};
    a && (n = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, s.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const c = {};
    c.uuid = this.uuid, c.type = this.type, this.name !== "" && (c.name = this.name), this.castShadow === true && (c.castShadow = true), this.receiveShadow === true && (c.receiveShadow = true), this.visible === false && (c.visible = false), this.frustumCulled === false && (c.frustumCulled = false), this.renderOrder !== 0 && (c.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (c.userData = this.userData), c.layers = this.layers.mask, c.matrix = this.matrix.toArray(), c.up = this.up.toArray(), this.matrixAutoUpdate === false && (c.matrixAutoUpdate = false), this.isInstancedMesh && (c.type = "InstancedMesh", c.count = this.count, c.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (c.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (c.type = "BatchedMesh", c.perObjectFrustumCulled = this.perObjectFrustumCulled, c.sortObjects = this.sortObjects, c.drawRanges = this._drawRanges, c.reservedRanges = this._reservedRanges, c.visibility = this._visibility, c.active = this._active, c.bounds = this._bounds.map((d) => ({ boxInitialized: d.boxInitialized, boxMin: d.box.min.toArray(), boxMax: d.box.max.toArray(), sphereInitialized: d.sphereInitialized, sphereRadius: d.sphere.radius, sphereCenter: d.sphere.center.toArray() })), c.maxInstanceCount = this._maxInstanceCount, c.maxVertexCount = this._maxVertexCount, c.maxIndexCount = this._maxIndexCount, c.geometryInitialized = this._geometryInitialized, c.geometryCount = this._geometryCount, c.matricesTexture = this._matricesTexture.toJSON(n), this._colorsTexture !== null && (c.colorsTexture = this._colorsTexture.toJSON(n)), this.boundingSphere !== null && (c.boundingSphere = { center: c.boundingSphere.center.toArray(), radius: c.boundingSphere.radius }), this.boundingBox !== null && (c.boundingBox = { min: c.boundingBox.min.toArray(), max: c.boundingBox.max.toArray() }));
    function f(d, m) {
      return d[m.uuid] === void 0 && (d[m.uuid] = m.toJSON(n)), m.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? c.background = this.background.toJSON() : this.background.isTexture && (c.background = this.background.toJSON(n).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (c.environment = this.environment.toJSON(n).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      c.geometry = f(n.geometries, this.geometry);
      const d = this.geometry.parameters;
      if (d !== void 0 && d.shapes !== void 0) {
        const m = d.shapes;
        if (Array.isArray(m)) for (let _ = 0, g = m.length; _ < g; _++) {
          const p = m[_];
          f(n.shapes, p);
        }
        else f(n.shapes, m);
      }
    }
    if (this.isSkinnedMesh && (c.bindMode = this.bindMode, c.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (f(n.skeletons, this.skeleton), c.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const d = [];
      for (let m = 0, _ = this.material.length; m < _; m++) d.push(f(n.materials, this.material[m]));
      c.material = d;
    } else c.material = f(n.materials, this.material);
    if (this.children.length > 0) {
      c.children = [];
      for (let d = 0; d < this.children.length; d++) c.children.push(this.children[d].toJSON(n).object);
    }
    if (this.animations.length > 0) {
      c.animations = [];
      for (let d = 0; d < this.animations.length; d++) {
        const m = this.animations[d];
        c.animations.push(f(n.animations, m));
      }
    }
    if (a) {
      const d = h(n.geometries), m = h(n.materials), _ = h(n.textures), g = h(n.images), p = h(n.shapes), x = h(n.skeletons), M = h(n.animations), T = h(n.nodes);
      d.length > 0 && (s.geometries = d), m.length > 0 && (s.materials = m), _.length > 0 && (s.textures = _), g.length > 0 && (s.images = g), p.length > 0 && (s.shapes = p), x.length > 0 && (s.skeletons = x), M.length > 0 && (s.animations = M), T.length > 0 && (s.nodes = T);
    }
    return s.object = c, s;
    function h(d) {
      const m = [];
      for (const _ in d) {
        const g = d[_];
        delete g.metadata, m.push(g);
      }
      return m;
    }
  }
  clone(n) {
    return new this.constructor().copy(this, n);
  }
  copy(n, a = true) {
    if (this.name = n.name, this.up.copy(n.up), this.position.copy(n.position), this.rotation.order = n.rotation.order, this.quaternion.copy(n.quaternion), this.scale.copy(n.scale), this.matrix.copy(n.matrix), this.matrixWorld.copy(n.matrixWorld), this.matrixAutoUpdate = n.matrixAutoUpdate, this.matrixWorldAutoUpdate = n.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = n.matrixWorldNeedsUpdate, this.layers.mask = n.layers.mask, this.visible = n.visible, this.castShadow = n.castShadow, this.receiveShadow = n.receiveShadow, this.frustumCulled = n.frustumCulled, this.renderOrder = n.renderOrder, this.animations = n.animations.slice(), this.userData = JSON.parse(JSON.stringify(n.userData)), a === true) for (let s = 0; s < n.children.length; s++) {
      const c = n.children[s];
      this.add(c.clone());
    }
    return this;
  }
}
ti.DEFAULT_UP = new ft(0, 1, 0);
ti.DEFAULT_MATRIX_AUTO_UPDATE = true;
ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const ji = new ft(), Na = new ft(), Td = new ft(), La = new ft(), ao = new ft(), ro = new ft(), M0 = new ft(), bd = new ft(), Ad = new ft(), Rd = new ft(), Cd = new Mn(), wd = new Mn(), Dd = new Mn();
class qi {
  constructor(n = new ft(), a = new ft(), s = new ft()) {
    this.a = n, this.b = a, this.c = s;
  }
  static getNormal(n, a, s, c) {
    c.subVectors(s, a), ji.subVectors(n, a), c.cross(ji);
    const f = c.lengthSq();
    return f > 0 ? c.multiplyScalar(1 / Math.sqrt(f)) : c.set(0, 0, 0);
  }
  static getBarycoord(n, a, s, c, f) {
    ji.subVectors(c, a), Na.subVectors(s, a), Td.subVectors(n, a);
    const h = ji.dot(ji), d = ji.dot(Na), m = ji.dot(Td), _ = Na.dot(Na), g = Na.dot(Td), p = h * _ - d * d;
    if (p === 0) return f.set(0, 0, 0), null;
    const x = 1 / p, M = (_ * m - d * g) * x, T = (h * g - d * m) * x;
    return f.set(1 - M - T, T, M);
  }
  static containsPoint(n, a, s, c) {
    return this.getBarycoord(n, a, s, c, La) === null ? false : La.x >= 0 && La.y >= 0 && La.x + La.y <= 1;
  }
  static getInterpolation(n, a, s, c, f, h, d, m) {
    return this.getBarycoord(n, a, s, c, La) === null ? (m.x = 0, m.y = 0, "z" in m && (m.z = 0), "w" in m && (m.w = 0), null) : (m.setScalar(0), m.addScaledVector(f, La.x), m.addScaledVector(h, La.y), m.addScaledVector(d, La.z), m);
  }
  static getInterpolatedAttribute(n, a, s, c, f, h) {
    return Cd.setScalar(0), wd.setScalar(0), Dd.setScalar(0), Cd.fromBufferAttribute(n, a), wd.fromBufferAttribute(n, s), Dd.fromBufferAttribute(n, c), h.setScalar(0), h.addScaledVector(Cd, f.x), h.addScaledVector(wd, f.y), h.addScaledVector(Dd, f.z), h;
  }
  static isFrontFacing(n, a, s, c) {
    return ji.subVectors(s, a), Na.subVectors(n, a), ji.cross(Na).dot(c) < 0;
  }
  set(n, a, s) {
    return this.a.copy(n), this.b.copy(a), this.c.copy(s), this;
  }
  setFromPointsAndIndices(n, a, s, c) {
    return this.a.copy(n[a]), this.b.copy(n[s]), this.c.copy(n[c]), this;
  }
  setFromAttributeAndIndices(n, a, s, c) {
    return this.a.fromBufferAttribute(n, a), this.b.fromBufferAttribute(n, s), this.c.fromBufferAttribute(n, c), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    return this.a.copy(n.a), this.b.copy(n.b), this.c.copy(n.c), this;
  }
  getArea() {
    return ji.subVectors(this.c, this.b), Na.subVectors(this.a, this.b), ji.cross(Na).length() * 0.5;
  }
  getMidpoint(n) {
    return n.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(n) {
    return qi.getNormal(this.a, this.b, this.c, n);
  }
  getPlane(n) {
    return n.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(n, a) {
    return qi.getBarycoord(n, this.a, this.b, this.c, a);
  }
  getInterpolation(n, a, s, c, f) {
    return qi.getInterpolation(n, this.a, this.b, this.c, a, s, c, f);
  }
  containsPoint(n) {
    return qi.containsPoint(n, this.a, this.b, this.c);
  }
  isFrontFacing(n) {
    return qi.isFrontFacing(this.a, this.b, this.c, n);
  }
  intersectsBox(n) {
    return n.intersectsTriangle(this);
  }
  closestPointToPoint(n, a) {
    const s = this.a, c = this.b, f = this.c;
    let h, d;
    ao.subVectors(c, s), ro.subVectors(f, s), bd.subVectors(n, s);
    const m = ao.dot(bd), _ = ro.dot(bd);
    if (m <= 0 && _ <= 0) return a.copy(s);
    Ad.subVectors(n, c);
    const g = ao.dot(Ad), p = ro.dot(Ad);
    if (g >= 0 && p <= g) return a.copy(c);
    const x = m * p - g * _;
    if (x <= 0 && m >= 0 && g <= 0) return h = m / (m - g), a.copy(s).addScaledVector(ao, h);
    Rd.subVectors(n, f);
    const M = ao.dot(Rd), T = ro.dot(Rd);
    if (T >= 0 && M <= T) return a.copy(f);
    const R = M * _ - m * T;
    if (R <= 0 && _ >= 0 && T <= 0) return d = _ / (_ - T), a.copy(s).addScaledVector(ro, d);
    const S = g * T - M * p;
    if (S <= 0 && p - g >= 0 && M - T >= 0) return M0.subVectors(f, c), d = (p - g) / (p - g + (M - T)), a.copy(c).addScaledVector(M0, d);
    const y = 1 / (S + R + x);
    return h = R * y, d = x * y, a.copy(s).addScaledVector(ao, h).addScaledVector(ro, d);
  }
  equals(n) {
    return n.a.equals(this.a) && n.b.equals(this.b) && n.c.equals(this.c);
  }
}
const Ax = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Sr = { h: 0, s: 0, l: 0 }, au = { h: 0, s: 0, l: 0 };
function Ud(o, n, a) {
  return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? o + (n - o) * 6 * a : a < 1 / 2 ? n : a < 2 / 3 ? o + (n - o) * 6 * (2 / 3 - a) : o;
}
class ke {
  constructor(n, a, s) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(n, a, s);
  }
  set(n, a, s) {
    if (a === void 0 && s === void 0) {
      const c = n;
      c && c.isColor ? this.copy(c) : typeof c == "number" ? this.setHex(c) : typeof c == "string" && this.setStyle(c);
    } else this.setRGB(n, a, s);
    return this;
  }
  setScalar(n) {
    return this.r = n, this.g = n, this.b = n, this;
  }
  setHex(n, a = Li) {
    return n = Math.floor(n), this.r = (n >> 16 & 255) / 255, this.g = (n >> 8 & 255) / 255, this.b = (n & 255) / 255, Ve.toWorkingColorSpace(this, a), this;
  }
  setRGB(n, a, s, c = Ve.workingColorSpace) {
    return this.r = n, this.g = a, this.b = s, Ve.toWorkingColorSpace(this, c), this;
  }
  setHSL(n, a, s, c = Ve.workingColorSpace) {
    if (n = _E(n, 1), a = ci(a, 0, 1), s = ci(s, 0, 1), a === 0) this.r = this.g = this.b = s;
    else {
      const f = s <= 0.5 ? s * (1 + a) : s + a - s * a, h = 2 * s - f;
      this.r = Ud(h, f, n + 1 / 3), this.g = Ud(h, f, n), this.b = Ud(h, f, n - 1 / 3);
    }
    return Ve.toWorkingColorSpace(this, c), this;
  }
  setStyle(n, a = Li) {
    function s(f) {
      f !== void 0 && parseFloat(f) < 1 && console.warn("THREE.Color: Alpha component of " + n + " will be ignored.");
    }
    let c;
    if (c = /^(\w+)\(([^\)]*)\)/.exec(n)) {
      let f;
      const h = c[1], d = c[2];
      switch (h) {
        case "rgb":
        case "rgba":
          if (f = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d)) return s(f[4]), this.setRGB(Math.min(255, parseInt(f[1], 10)) / 255, Math.min(255, parseInt(f[2], 10)) / 255, Math.min(255, parseInt(f[3], 10)) / 255, a);
          if (f = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d)) return s(f[4]), this.setRGB(Math.min(100, parseInt(f[1], 10)) / 100, Math.min(100, parseInt(f[2], 10)) / 100, Math.min(100, parseInt(f[3], 10)) / 100, a);
          break;
        case "hsl":
        case "hsla":
          if (f = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d)) return s(f[4]), this.setHSL(parseFloat(f[1]) / 360, parseFloat(f[2]) / 100, parseFloat(f[3]) / 100, a);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + n);
      }
    } else if (c = /^\#([A-Fa-f\d]+)$/.exec(n)) {
      const f = c[1], h = f.length;
      if (h === 3) return this.setRGB(parseInt(f.charAt(0), 16) / 15, parseInt(f.charAt(1), 16) / 15, parseInt(f.charAt(2), 16) / 15, a);
      if (h === 6) return this.setHex(parseInt(f, 16), a);
      console.warn("THREE.Color: Invalid hex color " + n);
    } else if (n && n.length > 0) return this.setColorName(n, a);
    return this;
  }
  setColorName(n, a = Li) {
    const s = Ax[n.toLowerCase()];
    return s !== void 0 ? this.setHex(s, a) : console.warn("THREE.Color: Unknown color " + n), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(n) {
    return this.r = n.r, this.g = n.g, this.b = n.b, this;
  }
  copySRGBToLinear(n) {
    return this.r = Fa(n.r), this.g = Fa(n.g), this.b = Fa(n.b), this;
  }
  copyLinearToSRGB(n) {
    return this.r = po(n.r), this.g = po(n.g), this.b = po(n.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(n = Li) {
    return Ve.fromWorkingColorSpace(Yn.copy(this), n), Math.round(ci(Yn.r * 255, 0, 255)) * 65536 + Math.round(ci(Yn.g * 255, 0, 255)) * 256 + Math.round(ci(Yn.b * 255, 0, 255));
  }
  getHexString(n = Li) {
    return ("000000" + this.getHex(n).toString(16)).slice(-6);
  }
  getHSL(n, a = Ve.workingColorSpace) {
    Ve.fromWorkingColorSpace(Yn.copy(this), a);
    const s = Yn.r, c = Yn.g, f = Yn.b, h = Math.max(s, c, f), d = Math.min(s, c, f);
    let m, _;
    const g = (d + h) / 2;
    if (d === h) m = 0, _ = 0;
    else {
      const p = h - d;
      switch (_ = g <= 0.5 ? p / (h + d) : p / (2 - h - d), h) {
        case s:
          m = (c - f) / p + (c < f ? 6 : 0);
          break;
        case c:
          m = (f - s) / p + 2;
          break;
        case f:
          m = (s - c) / p + 4;
          break;
      }
      m /= 6;
    }
    return n.h = m, n.s = _, n.l = g, n;
  }
  getRGB(n, a = Ve.workingColorSpace) {
    return Ve.fromWorkingColorSpace(Yn.copy(this), a), n.r = Yn.r, n.g = Yn.g, n.b = Yn.b, n;
  }
  getStyle(n = Li) {
    Ve.fromWorkingColorSpace(Yn.copy(this), n);
    const a = Yn.r, s = Yn.g, c = Yn.b;
    return n !== Li ? `color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})` : `rgb(${Math.round(a * 255)},${Math.round(s * 255)},${Math.round(c * 255)})`;
  }
  offsetHSL(n, a, s) {
    return this.getHSL(Sr), this.setHSL(Sr.h + n, Sr.s + a, Sr.l + s);
  }
  add(n) {
    return this.r += n.r, this.g += n.g, this.b += n.b, this;
  }
  addColors(n, a) {
    return this.r = n.r + a.r, this.g = n.g + a.g, this.b = n.b + a.b, this;
  }
  addScalar(n) {
    return this.r += n, this.g += n, this.b += n, this;
  }
  sub(n) {
    return this.r = Math.max(0, this.r - n.r), this.g = Math.max(0, this.g - n.g), this.b = Math.max(0, this.b - n.b), this;
  }
  multiply(n) {
    return this.r *= n.r, this.g *= n.g, this.b *= n.b, this;
  }
  multiplyScalar(n) {
    return this.r *= n, this.g *= n, this.b *= n, this;
  }
  lerp(n, a) {
    return this.r += (n.r - this.r) * a, this.g += (n.g - this.g) * a, this.b += (n.b - this.b) * a, this;
  }
  lerpColors(n, a, s) {
    return this.r = n.r + (a.r - n.r) * s, this.g = n.g + (a.g - n.g) * s, this.b = n.b + (a.b - n.b) * s, this;
  }
  lerpHSL(n, a) {
    this.getHSL(Sr), n.getHSL(au);
    const s = pd(Sr.h, au.h, a), c = pd(Sr.s, au.s, a), f = pd(Sr.l, au.l, a);
    return this.setHSL(s, c, f), this;
  }
  setFromVector3(n) {
    return this.r = n.x, this.g = n.y, this.b = n.z, this;
  }
  applyMatrix3(n) {
    const a = this.r, s = this.g, c = this.b, f = n.elements;
    return this.r = f[0] * a + f[3] * s + f[6] * c, this.g = f[1] * a + f[4] * s + f[7] * c, this.b = f[2] * a + f[5] * s + f[8] * c, this;
  }
  equals(n) {
    return n.r === this.r && n.g === this.g && n.b === this.b;
  }
  fromArray(n, a = 0) {
    return this.r = n[a], this.g = n[a + 1], this.b = n[a + 2], this;
  }
  toArray(n = [], a = 0) {
    return n[a] = this.r, n[a + 1] = this.g, n[a + 2] = this.b, n;
  }
  fromBufferAttribute(n, a) {
    return this.r = n.getX(a), this.g = n.getY(a), this.b = n.getZ(a), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Yn = new ke();
ke.NAMES = Ax;
let zE = 0;
class Eo extends Mo {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(n) {
  }
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: zE++ }), this.uuid = Rl(), this.name = "", this.blending = ss, this.side = Ar, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Xd, this.blendDst = kd, this.blendEquation = ns, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = mo, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = r0, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ks, this.stencilZFail = Ks, this.stencilZPass = Ks, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(n) {
    this._alphaTest > 0 != n > 0 && this.version++, this._alphaTest = n;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(n) {
    if (n !== void 0) for (const a in n) {
      const s = n[a];
      if (s === void 0) {
        console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);
        continue;
      }
      const c = this[a];
      if (c === void 0) {
        console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);
        continue;
      }
      c && c.isColor ? c.set(s) : c && c.isVector3 && s && s.isVector3 ? c.copy(s) : this[a] = s;
    }
  }
  toJSON(n) {
    const a = n === void 0 || typeof n == "string";
    a && (n = { textures: {}, images: {} });
    const s = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.color && this.color.isColor && (s.color = this.color.getHex()), this.roughness !== void 0 && (s.roughness = this.roughness), this.metalness !== void 0 && (s.metalness = this.metalness), this.sheen !== void 0 && (s.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (s.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (s.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (s.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (s.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (s.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (s.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (s.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (s.shininess = this.shininess), this.clearcoat !== void 0 && (s.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (s.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (s.clearcoatMap = this.clearcoatMap.toJSON(n).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (s.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(n).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (s.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(n).uuid, s.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (s.dispersion = this.dispersion), this.iridescence !== void 0 && (s.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (s.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (s.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (s.iridescenceMap = this.iridescenceMap.toJSON(n).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (s.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(n).uuid), this.anisotropy !== void 0 && (s.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (s.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (s.anisotropyMap = this.anisotropyMap.toJSON(n).uuid), this.map && this.map.isTexture && (s.map = this.map.toJSON(n).uuid), this.matcap && this.matcap.isTexture && (s.matcap = this.matcap.toJSON(n).uuid), this.alphaMap && this.alphaMap.isTexture && (s.alphaMap = this.alphaMap.toJSON(n).uuid), this.lightMap && this.lightMap.isTexture && (s.lightMap = this.lightMap.toJSON(n).uuid, s.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (s.aoMap = this.aoMap.toJSON(n).uuid, s.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (s.bumpMap = this.bumpMap.toJSON(n).uuid, s.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (s.normalMap = this.normalMap.toJSON(n).uuid, s.normalMapType = this.normalMapType, s.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (s.displacementMap = this.displacementMap.toJSON(n).uuid, s.displacementScale = this.displacementScale, s.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (s.roughnessMap = this.roughnessMap.toJSON(n).uuid), this.metalnessMap && this.metalnessMap.isTexture && (s.metalnessMap = this.metalnessMap.toJSON(n).uuid), this.emissiveMap && this.emissiveMap.isTexture && (s.emissiveMap = this.emissiveMap.toJSON(n).uuid), this.specularMap && this.specularMap.isTexture && (s.specularMap = this.specularMap.toJSON(n).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (s.specularIntensityMap = this.specularIntensityMap.toJSON(n).uuid), this.specularColorMap && this.specularColorMap.isTexture && (s.specularColorMap = this.specularColorMap.toJSON(n).uuid), this.envMap && this.envMap.isTexture && (s.envMap = this.envMap.toJSON(n).uuid, this.combine !== void 0 && (s.combine = this.combine)), this.envMapRotation !== void 0 && (s.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (s.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (s.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (s.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (s.gradientMap = this.gradientMap.toJSON(n).uuid), this.transmission !== void 0 && (s.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (s.transmissionMap = this.transmissionMap.toJSON(n).uuid), this.thickness !== void 0 && (s.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (s.thicknessMap = this.thicknessMap.toJSON(n).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (s.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (s.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (s.size = this.size), this.shadowSide !== null && (s.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (s.sizeAttenuation = this.sizeAttenuation), this.blending !== ss && (s.blending = this.blending), this.side !== Ar && (s.side = this.side), this.vertexColors === true && (s.vertexColors = true), this.opacity < 1 && (s.opacity = this.opacity), this.transparent === true && (s.transparent = true), this.blendSrc !== Xd && (s.blendSrc = this.blendSrc), this.blendDst !== kd && (s.blendDst = this.blendDst), this.blendEquation !== ns && (s.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (s.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (s.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (s.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (s.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (s.blendAlpha = this.blendAlpha), this.depthFunc !== mo && (s.depthFunc = this.depthFunc), this.depthTest === false && (s.depthTest = this.depthTest), this.depthWrite === false && (s.depthWrite = this.depthWrite), this.colorWrite === false && (s.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (s.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== r0 && (s.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (s.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (s.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ks && (s.stencilFail = this.stencilFail), this.stencilZFail !== Ks && (s.stencilZFail = this.stencilZFail), this.stencilZPass !== Ks && (s.stencilZPass = this.stencilZPass), this.stencilWrite === true && (s.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (s.rotation = this.rotation), this.polygonOffset === true && (s.polygonOffset = true), this.polygonOffsetFactor !== 0 && (s.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (s.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (s.linewidth = this.linewidth), this.dashSize !== void 0 && (s.dashSize = this.dashSize), this.gapSize !== void 0 && (s.gapSize = this.gapSize), this.scale !== void 0 && (s.scale = this.scale), this.dithering === true && (s.dithering = true), this.alphaTest > 0 && (s.alphaTest = this.alphaTest), this.alphaHash === true && (s.alphaHash = true), this.alphaToCoverage === true && (s.alphaToCoverage = true), this.premultipliedAlpha === true && (s.premultipliedAlpha = true), this.forceSinglePass === true && (s.forceSinglePass = true), this.wireframe === true && (s.wireframe = true), this.wireframeLinewidth > 1 && (s.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (s.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (s.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (s.flatShading = true), this.visible === false && (s.visible = false), this.toneMapped === false && (s.toneMapped = false), this.fog === false && (s.fog = false), Object.keys(this.userData).length > 0 && (s.userData = this.userData);
    function c(f) {
      const h = [];
      for (const d in f) {
        const m = f[d];
        delete m.metadata, h.push(m);
      }
      return h;
    }
    if (a) {
      const f = c(n.textures), h = c(n.images);
      f.length > 0 && (s.textures = f), h.length > 0 && (s.images = h);
    }
    return s;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.name = n.name, this.blending = n.blending, this.side = n.side, this.vertexColors = n.vertexColors, this.opacity = n.opacity, this.transparent = n.transparent, this.blendSrc = n.blendSrc, this.blendDst = n.blendDst, this.blendEquation = n.blendEquation, this.blendSrcAlpha = n.blendSrcAlpha, this.blendDstAlpha = n.blendDstAlpha, this.blendEquationAlpha = n.blendEquationAlpha, this.blendColor.copy(n.blendColor), this.blendAlpha = n.blendAlpha, this.depthFunc = n.depthFunc, this.depthTest = n.depthTest, this.depthWrite = n.depthWrite, this.stencilWriteMask = n.stencilWriteMask, this.stencilFunc = n.stencilFunc, this.stencilRef = n.stencilRef, this.stencilFuncMask = n.stencilFuncMask, this.stencilFail = n.stencilFail, this.stencilZFail = n.stencilZFail, this.stencilZPass = n.stencilZPass, this.stencilWrite = n.stencilWrite;
    const a = n.clippingPlanes;
    let s = null;
    if (a !== null) {
      const c = a.length;
      s = new Array(c);
      for (let f = 0; f !== c; ++f) s[f] = a[f].clone();
    }
    return this.clippingPlanes = s, this.clipIntersection = n.clipIntersection, this.clipShadows = n.clipShadows, this.shadowSide = n.shadowSide, this.colorWrite = n.colorWrite, this.precision = n.precision, this.polygonOffset = n.polygonOffset, this.polygonOffsetFactor = n.polygonOffsetFactor, this.polygonOffsetUnits = n.polygonOffsetUnits, this.dithering = n.dithering, this.alphaTest = n.alphaTest, this.alphaHash = n.alphaHash, this.alphaToCoverage = n.alphaToCoverage, this.premultipliedAlpha = n.premultipliedAlpha, this.forceSinglePass = n.forceSinglePass, this.visible = n.visible, this.toneMapped = n.toneMapped, this.userData = JSON.parse(JSON.stringify(n.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(n) {
    n === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Rx extends Eo {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(n) {
    super(), this.isMeshBasicMaterial = true, this.color = new ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Va(), this.combine = cx, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.color.copy(n.color), this.map = n.map, this.lightMap = n.lightMap, this.lightMapIntensity = n.lightMapIntensity, this.aoMap = n.aoMap, this.aoMapIntensity = n.aoMapIntensity, this.specularMap = n.specularMap, this.alphaMap = n.alphaMap, this.envMap = n.envMap, this.envMapRotation.copy(n.envMapRotation), this.combine = n.combine, this.reflectivity = n.reflectivity, this.refractionRatio = n.refractionRatio, this.wireframe = n.wireframe, this.wireframeLinewidth = n.wireframeLinewidth, this.wireframeLinecap = n.wireframeLinecap, this.wireframeLinejoin = n.wireframeLinejoin, this.fog = n.fog, this;
  }
}
const Cn = new ft(), ru = new an();
class Sn {
  constructor(n, a, s = false) {
    if (Array.isArray(n)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = n, this.itemSize = a, this.count = n !== void 0 ? n.length / a : 0, this.normalized = s, this.usage = s0, this.updateRanges = [], this.gpuType = Pa, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(n) {
    n === true && this.version++;
  }
  setUsage(n) {
    return this.usage = n, this;
  }
  addUpdateRange(n, a) {
    this.updateRanges.push({ start: n, count: a });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(n) {
    return this.name = n.name, this.array = new n.array.constructor(n.array), this.itemSize = n.itemSize, this.count = n.count, this.normalized = n.normalized, this.usage = n.usage, this.gpuType = n.gpuType, this;
  }
  copyAt(n, a, s) {
    n *= this.itemSize, s *= a.itemSize;
    for (let c = 0, f = this.itemSize; c < f; c++) this.array[n + c] = a.array[s + c];
    return this;
  }
  copyArray(n) {
    return this.array.set(n), this;
  }
  applyMatrix3(n) {
    if (this.itemSize === 2) for (let a = 0, s = this.count; a < s; a++) ru.fromBufferAttribute(this, a), ru.applyMatrix3(n), this.setXY(a, ru.x, ru.y);
    else if (this.itemSize === 3) for (let a = 0, s = this.count; a < s; a++) Cn.fromBufferAttribute(this, a), Cn.applyMatrix3(n), this.setXYZ(a, Cn.x, Cn.y, Cn.z);
    return this;
  }
  applyMatrix4(n) {
    for (let a = 0, s = this.count; a < s; a++) Cn.fromBufferAttribute(this, a), Cn.applyMatrix4(n), this.setXYZ(a, Cn.x, Cn.y, Cn.z);
    return this;
  }
  applyNormalMatrix(n) {
    for (let a = 0, s = this.count; a < s; a++) Cn.fromBufferAttribute(this, a), Cn.applyNormalMatrix(n), this.setXYZ(a, Cn.x, Cn.y, Cn.z);
    return this;
  }
  transformDirection(n) {
    for (let a = 0, s = this.count; a < s; a++) Cn.fromBufferAttribute(this, a), Cn.transformDirection(n), this.setXYZ(a, Cn.x, Cn.y, Cn.z);
    return this;
  }
  set(n, a = 0) {
    return this.array.set(n, a), this;
  }
  getComponent(n, a) {
    let s = this.array[n * this.itemSize + a];
    return this.normalized && (s = gl(s, this.array)), s;
  }
  setComponent(n, a, s) {
    return this.normalized && (s = li(s, this.array)), this.array[n * this.itemSize + a] = s, this;
  }
  getX(n) {
    let a = this.array[n * this.itemSize];
    return this.normalized && (a = gl(a, this.array)), a;
  }
  setX(n, a) {
    return this.normalized && (a = li(a, this.array)), this.array[n * this.itemSize] = a, this;
  }
  getY(n) {
    let a = this.array[n * this.itemSize + 1];
    return this.normalized && (a = gl(a, this.array)), a;
  }
  setY(n, a) {
    return this.normalized && (a = li(a, this.array)), this.array[n * this.itemSize + 1] = a, this;
  }
  getZ(n) {
    let a = this.array[n * this.itemSize + 2];
    return this.normalized && (a = gl(a, this.array)), a;
  }
  setZ(n, a) {
    return this.normalized && (a = li(a, this.array)), this.array[n * this.itemSize + 2] = a, this;
  }
  getW(n) {
    let a = this.array[n * this.itemSize + 3];
    return this.normalized && (a = gl(a, this.array)), a;
  }
  setW(n, a) {
    return this.normalized && (a = li(a, this.array)), this.array[n * this.itemSize + 3] = a, this;
  }
  setXY(n, a, s) {
    return n *= this.itemSize, this.normalized && (a = li(a, this.array), s = li(s, this.array)), this.array[n + 0] = a, this.array[n + 1] = s, this;
  }
  setXYZ(n, a, s, c) {
    return n *= this.itemSize, this.normalized && (a = li(a, this.array), s = li(s, this.array), c = li(c, this.array)), this.array[n + 0] = a, this.array[n + 1] = s, this.array[n + 2] = c, this;
  }
  setXYZW(n, a, s, c, f) {
    return n *= this.itemSize, this.normalized && (a = li(a, this.array), s = li(s, this.array), c = li(c, this.array), f = li(f, this.array)), this.array[n + 0] = a, this.array[n + 1] = s, this.array[n + 2] = c, this.array[n + 3] = f, this;
  }
  onUpload(n) {
    return this.onUploadCallback = n, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const n = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (n.name = this.name), this.usage !== s0 && (n.usage = this.usage), n;
  }
}
class Cx extends Sn {
  constructor(n, a, s) {
    super(new Uint16Array(n), a, s);
  }
}
class wx extends Sn {
  constructor(n, a, s) {
    super(new Uint32Array(n), a, s);
  }
}
class Ha extends Sn {
  constructor(n, a, s) {
    super(new Float32Array(n), a, s);
  }
}
let PE = 0;
const Ni = new _n(), Nd = new ti(), so = new ft(), Si = new wl(), yl = new wl(), In = new ft();
class Qi extends Mo {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: PE++ }), this.uuid = Rl(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(n) {
    return Array.isArray(n) ? this.index = new (Mx(n) ? wx : Cx)(n, 1) : this.index = n, this;
  }
  setIndirect(n) {
    return this.indirect = n, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(n) {
    return this.attributes[n];
  }
  setAttribute(n, a) {
    return this.attributes[n] = a, this;
  }
  deleteAttribute(n) {
    return delete this.attributes[n], this;
  }
  hasAttribute(n) {
    return this.attributes[n] !== void 0;
  }
  addGroup(n, a, s = 0) {
    this.groups.push({ start: n, count: a, materialIndex: s });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(n, a) {
    this.drawRange.start = n, this.drawRange.count = a;
  }
  applyMatrix4(n) {
    const a = this.attributes.position;
    a !== void 0 && (a.applyMatrix4(n), a.needsUpdate = true);
    const s = this.attributes.normal;
    if (s !== void 0) {
      const f = new Ae().getNormalMatrix(n);
      s.applyNormalMatrix(f), s.needsUpdate = true;
    }
    const c = this.attributes.tangent;
    return c !== void 0 && (c.transformDirection(n), c.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(n) {
    return Ni.makeRotationFromQuaternion(n), this.applyMatrix4(Ni), this;
  }
  rotateX(n) {
    return Ni.makeRotationX(n), this.applyMatrix4(Ni), this;
  }
  rotateY(n) {
    return Ni.makeRotationY(n), this.applyMatrix4(Ni), this;
  }
  rotateZ(n) {
    return Ni.makeRotationZ(n), this.applyMatrix4(Ni), this;
  }
  translate(n, a, s) {
    return Ni.makeTranslation(n, a, s), this.applyMatrix4(Ni), this;
  }
  scale(n, a, s) {
    return Ni.makeScale(n, a, s), this.applyMatrix4(Ni), this;
  }
  lookAt(n) {
    return Nd.lookAt(n), Nd.updateMatrix(), this.applyMatrix4(Nd.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(so).negate(), this.translate(so.x, so.y, so.z), this;
  }
  setFromPoints(n) {
    const a = this.getAttribute("position");
    if (a === void 0) {
      const s = [];
      for (let c = 0, f = n.length; c < f; c++) {
        const h = n[c];
        s.push(h.x, h.y, h.z || 0);
      }
      this.setAttribute("position", new Ha(s, 3));
    } else {
      for (let s = 0, c = a.count; s < c; s++) {
        const f = n[s];
        a.setXYZ(s, f.x, f.y, f.z || 0);
      }
      n.length > a.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), a.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new wl());
    const n = this.attributes.position, a = this.morphAttributes.position;
    if (n && n.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new ft(-1 / 0, -1 / 0, -1 / 0), new ft(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (n !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(n), a) for (let s = 0, c = a.length; s < c; s++) {
        const f = a[s];
        Si.setFromBufferAttribute(f), this.morphTargetsRelative ? (In.addVectors(this.boundingBox.min, Si.min), this.boundingBox.expandByPoint(In), In.addVectors(this.boundingBox.max, Si.max), this.boundingBox.expandByPoint(In)) : (this.boundingBox.expandByPoint(Si.min), this.boundingBox.expandByPoint(Si.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Dl());
    const n = this.attributes.position, a = this.morphAttributes.position;
    if (n && n.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new ft(), 1 / 0);
      return;
    }
    if (n) {
      const s = this.boundingSphere.center;
      if (Si.setFromBufferAttribute(n), a) for (let f = 0, h = a.length; f < h; f++) {
        const d = a[f];
        yl.setFromBufferAttribute(d), this.morphTargetsRelative ? (In.addVectors(Si.min, yl.min), Si.expandByPoint(In), In.addVectors(Si.max, yl.max), Si.expandByPoint(In)) : (Si.expandByPoint(yl.min), Si.expandByPoint(yl.max));
      }
      Si.getCenter(s);
      let c = 0;
      for (let f = 0, h = n.count; f < h; f++) In.fromBufferAttribute(n, f), c = Math.max(c, s.distanceToSquared(In));
      if (a) for (let f = 0, h = a.length; f < h; f++) {
        const d = a[f], m = this.morphTargetsRelative;
        for (let _ = 0, g = d.count; _ < g; _++) In.fromBufferAttribute(d, _), m && (so.fromBufferAttribute(n, _), In.add(so)), c = Math.max(c, s.distanceToSquared(In));
      }
      this.boundingSphere.radius = Math.sqrt(c), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const n = this.index, a = this.attributes;
    if (n === null || a.position === void 0 || a.normal === void 0 || a.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const s = a.position, c = a.normal, f = a.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Sn(new Float32Array(4 * s.count), 4));
    const h = this.getAttribute("tangent"), d = [], m = [];
    for (let q = 0; q < s.count; q++) d[q] = new ft(), m[q] = new ft();
    const _ = new ft(), g = new ft(), p = new ft(), x = new an(), M = new an(), T = new an(), R = new ft(), S = new ft();
    function y(q, U, C) {
      _.fromBufferAttribute(s, q), g.fromBufferAttribute(s, U), p.fromBufferAttribute(s, C), x.fromBufferAttribute(f, q), M.fromBufferAttribute(f, U), T.fromBufferAttribute(f, C), g.sub(_), p.sub(_), M.sub(x), T.sub(x);
      const B = 1 / (M.x * T.y - T.x * M.y);
      isFinite(B) && (R.copy(g).multiplyScalar(T.y).addScaledVector(p, -M.y).multiplyScalar(B), S.copy(p).multiplyScalar(M.x).addScaledVector(g, -T.x).multiplyScalar(B), d[q].add(R), d[U].add(R), d[C].add(R), m[q].add(S), m[U].add(S), m[C].add(S));
    }
    let P = this.groups;
    P.length === 0 && (P = [{ start: 0, count: n.count }]);
    for (let q = 0, U = P.length; q < U; ++q) {
      const C = P[q], B = C.start, at = C.count;
      for (let ot = B, ht = B + at; ot < ht; ot += 3) y(n.getX(ot + 0), n.getX(ot + 1), n.getX(ot + 2));
    }
    const O = new ft(), N = new ft(), et = new ft(), V = new ft();
    function I(q) {
      et.fromBufferAttribute(c, q), V.copy(et);
      const U = d[q];
      O.copy(U), O.sub(et.multiplyScalar(et.dot(U))).normalize(), N.crossVectors(V, U);
      const B = N.dot(m[q]) < 0 ? -1 : 1;
      h.setXYZW(q, O.x, O.y, O.z, B);
    }
    for (let q = 0, U = P.length; q < U; ++q) {
      const C = P[q], B = C.start, at = C.count;
      for (let ot = B, ht = B + at; ot < ht; ot += 3) I(n.getX(ot + 0)), I(n.getX(ot + 1)), I(n.getX(ot + 2));
    }
  }
  computeVertexNormals() {
    const n = this.index, a = this.getAttribute("position");
    if (a !== void 0) {
      let s = this.getAttribute("normal");
      if (s === void 0) s = new Sn(new Float32Array(a.count * 3), 3), this.setAttribute("normal", s);
      else for (let x = 0, M = s.count; x < M; x++) s.setXYZ(x, 0, 0, 0);
      const c = new ft(), f = new ft(), h = new ft(), d = new ft(), m = new ft(), _ = new ft(), g = new ft(), p = new ft();
      if (n) for (let x = 0, M = n.count; x < M; x += 3) {
        const T = n.getX(x + 0), R = n.getX(x + 1), S = n.getX(x + 2);
        c.fromBufferAttribute(a, T), f.fromBufferAttribute(a, R), h.fromBufferAttribute(a, S), g.subVectors(h, f), p.subVectors(c, f), g.cross(p), d.fromBufferAttribute(s, T), m.fromBufferAttribute(s, R), _.fromBufferAttribute(s, S), d.add(g), m.add(g), _.add(g), s.setXYZ(T, d.x, d.y, d.z), s.setXYZ(R, m.x, m.y, m.z), s.setXYZ(S, _.x, _.y, _.z);
      }
      else for (let x = 0, M = a.count; x < M; x += 3) c.fromBufferAttribute(a, x + 0), f.fromBufferAttribute(a, x + 1), h.fromBufferAttribute(a, x + 2), g.subVectors(h, f), p.subVectors(c, f), g.cross(p), s.setXYZ(x + 0, g.x, g.y, g.z), s.setXYZ(x + 1, g.x, g.y, g.z), s.setXYZ(x + 2, g.x, g.y, g.z);
      this.normalizeNormals(), s.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const n = this.attributes.normal;
    for (let a = 0, s = n.count; a < s; a++) In.fromBufferAttribute(n, a), In.normalize(), n.setXYZ(a, In.x, In.y, In.z);
  }
  toNonIndexed() {
    function n(d, m) {
      const _ = d.array, g = d.itemSize, p = d.normalized, x = new _.constructor(m.length * g);
      let M = 0, T = 0;
      for (let R = 0, S = m.length; R < S; R++) {
        d.isInterleavedBufferAttribute ? M = m[R] * d.data.stride + d.offset : M = m[R] * g;
        for (let y = 0; y < g; y++) x[T++] = _[M++];
      }
      return new Sn(x, g, p);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const a = new Qi(), s = this.index.array, c = this.attributes;
    for (const d in c) {
      const m = c[d], _ = n(m, s);
      a.setAttribute(d, _);
    }
    const f = this.morphAttributes;
    for (const d in f) {
      const m = [], _ = f[d];
      for (let g = 0, p = _.length; g < p; g++) {
        const x = _[g], M = n(x, s);
        m.push(M);
      }
      a.morphAttributes[d] = m;
    }
    a.morphTargetsRelative = this.morphTargetsRelative;
    const h = this.groups;
    for (let d = 0, m = h.length; d < m; d++) {
      const _ = h[d];
      a.addGroup(_.start, _.count, _.materialIndex);
    }
    return a;
  }
  toJSON() {
    const n = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), Object.keys(this.userData).length > 0 && (n.userData = this.userData), this.parameters !== void 0) {
      const m = this.parameters;
      for (const _ in m) m[_] !== void 0 && (n[_] = m[_]);
      return n;
    }
    n.data = { attributes: {} };
    const a = this.index;
    a !== null && (n.data.index = { type: a.array.constructor.name, array: Array.prototype.slice.call(a.array) });
    const s = this.attributes;
    for (const m in s) {
      const _ = s[m];
      n.data.attributes[m] = _.toJSON(n.data);
    }
    const c = {};
    let f = false;
    for (const m in this.morphAttributes) {
      const _ = this.morphAttributes[m], g = [];
      for (let p = 0, x = _.length; p < x; p++) {
        const M = _[p];
        g.push(M.toJSON(n.data));
      }
      g.length > 0 && (c[m] = g, f = true);
    }
    f && (n.data.morphAttributes = c, n.data.morphTargetsRelative = this.morphTargetsRelative);
    const h = this.groups;
    h.length > 0 && (n.data.groups = JSON.parse(JSON.stringify(h)));
    const d = this.boundingSphere;
    return d !== null && (n.data.boundingSphere = { center: d.center.toArray(), radius: d.radius }), n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(n) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const a = {};
    this.name = n.name;
    const s = n.index;
    s !== null && this.setIndex(s.clone(a));
    const c = n.attributes;
    for (const _ in c) {
      const g = c[_];
      this.setAttribute(_, g.clone(a));
    }
    const f = n.morphAttributes;
    for (const _ in f) {
      const g = [], p = f[_];
      for (let x = 0, M = p.length; x < M; x++) g.push(p[x].clone(a));
      this.morphAttributes[_] = g;
    }
    this.morphTargetsRelative = n.morphTargetsRelative;
    const h = n.groups;
    for (let _ = 0, g = h.length; _ < g; _++) {
      const p = h[_];
      this.addGroup(p.start, p.count, p.materialIndex);
    }
    const d = n.boundingBox;
    d !== null && (this.boundingBox = d.clone());
    const m = n.boundingSphere;
    return m !== null && (this.boundingSphere = m.clone()), this.drawRange.start = n.drawRange.start, this.drawRange.count = n.drawRange.count, this.userData = n.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const E0 = new _n(), Kr = new Hp(), su = new Dl(), T0 = new ft(), ou = new ft(), lu = new ft(), cu = new ft(), Ld = new ft(), uu = new ft(), b0 = new ft(), fu = new ft();
class Ba extends ti {
  constructor(n = new Qi(), a = new Rx()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = n, this.material = a, this.updateMorphTargets();
  }
  copy(n, a) {
    return super.copy(n, a), n.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = n.morphTargetInfluences.slice()), n.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, n.morphTargetDictionary)), this.material = Array.isArray(n.material) ? n.material.slice() : n.material, this.geometry = n.geometry, this;
  }
  updateMorphTargets() {
    const a = this.geometry.morphAttributes, s = Object.keys(a);
    if (s.length > 0) {
      const c = a[s[0]];
      if (c !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let f = 0, h = c.length; f < h; f++) {
          const d = c[f].name || String(f);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[d] = f;
        }
      }
    }
  }
  getVertexPosition(n, a) {
    const s = this.geometry, c = s.attributes.position, f = s.morphAttributes.position, h = s.morphTargetsRelative;
    a.fromBufferAttribute(c, n);
    const d = this.morphTargetInfluences;
    if (f && d) {
      uu.set(0, 0, 0);
      for (let m = 0, _ = f.length; m < _; m++) {
        const g = d[m], p = f[m];
        g !== 0 && (Ld.fromBufferAttribute(p, n), h ? uu.addScaledVector(Ld, g) : uu.addScaledVector(Ld.sub(a), g));
      }
      a.add(uu);
    }
    return a;
  }
  raycast(n, a) {
    const s = this.geometry, c = this.material, f = this.matrixWorld;
    c !== void 0 && (s.boundingSphere === null && s.computeBoundingSphere(), su.copy(s.boundingSphere), su.applyMatrix4(f), Kr.copy(n.ray).recast(n.near), !(su.containsPoint(Kr.origin) === false && (Kr.intersectSphere(su, T0) === null || Kr.origin.distanceToSquared(T0) > (n.far - n.near) ** 2)) && (E0.copy(f).invert(), Kr.copy(n.ray).applyMatrix4(E0), !(s.boundingBox !== null && Kr.intersectsBox(s.boundingBox) === false) && this._computeIntersections(n, a, Kr)));
  }
  _computeIntersections(n, a, s) {
    let c;
    const f = this.geometry, h = this.material, d = f.index, m = f.attributes.position, _ = f.attributes.uv, g = f.attributes.uv1, p = f.attributes.normal, x = f.groups, M = f.drawRange;
    if (d !== null) if (Array.isArray(h)) for (let T = 0, R = x.length; T < R; T++) {
      const S = x[T], y = h[S.materialIndex], P = Math.max(S.start, M.start), O = Math.min(d.count, Math.min(S.start + S.count, M.start + M.count));
      for (let N = P, et = O; N < et; N += 3) {
        const V = d.getX(N), I = d.getX(N + 1), q = d.getX(N + 2);
        c = hu(this, y, n, s, _, g, p, V, I, q), c && (c.faceIndex = Math.floor(N / 3), c.face.materialIndex = S.materialIndex, a.push(c));
      }
    }
    else {
      const T = Math.max(0, M.start), R = Math.min(d.count, M.start + M.count);
      for (let S = T, y = R; S < y; S += 3) {
        const P = d.getX(S), O = d.getX(S + 1), N = d.getX(S + 2);
        c = hu(this, h, n, s, _, g, p, P, O, N), c && (c.faceIndex = Math.floor(S / 3), a.push(c));
      }
    }
    else if (m !== void 0) if (Array.isArray(h)) for (let T = 0, R = x.length; T < R; T++) {
      const S = x[T], y = h[S.materialIndex], P = Math.max(S.start, M.start), O = Math.min(m.count, Math.min(S.start + S.count, M.start + M.count));
      for (let N = P, et = O; N < et; N += 3) {
        const V = N, I = N + 1, q = N + 2;
        c = hu(this, y, n, s, _, g, p, V, I, q), c && (c.faceIndex = Math.floor(N / 3), c.face.materialIndex = S.materialIndex, a.push(c));
      }
    }
    else {
      const T = Math.max(0, M.start), R = Math.min(m.count, M.start + M.count);
      for (let S = T, y = R; S < y; S += 3) {
        const P = S, O = S + 1, N = S + 2;
        c = hu(this, h, n, s, _, g, p, P, O, N), c && (c.faceIndex = Math.floor(S / 3), a.push(c));
      }
    }
  }
}
function IE(o, n, a, s, c, f, h, d) {
  let m;
  if (n.side === ui ? m = s.intersectTriangle(h, f, c, true, d) : m = s.intersectTriangle(c, f, h, n.side === Ar, d), m === null) return null;
  fu.copy(d), fu.applyMatrix4(o.matrixWorld);
  const _ = a.ray.origin.distanceTo(fu);
  return _ < a.near || _ > a.far ? null : { distance: _, point: fu.clone(), object: o };
}
function hu(o, n, a, s, c, f, h, d, m, _) {
  o.getVertexPosition(d, ou), o.getVertexPosition(m, lu), o.getVertexPosition(_, cu);
  const g = IE(o, n, a, s, ou, lu, cu, b0);
  if (g) {
    const p = new ft();
    qi.getBarycoord(b0, ou, lu, cu, p), c && (g.uv = qi.getInterpolatedAttribute(c, d, m, _, p, new an())), f && (g.uv1 = qi.getInterpolatedAttribute(f, d, m, _, p, new an())), h && (g.normal = qi.getInterpolatedAttribute(h, d, m, _, p, new ft()), g.normal.dot(s.direction) > 0 && g.normal.multiplyScalar(-1));
    const x = { a: d, b: m, c: _, normal: new ft(), materialIndex: 0 };
    qi.getNormal(ou, lu, cu, x.normal), g.face = x, g.barycoord = p;
  }
  return g;
}
class Ul extends Qi {
  constructor(n = 1, a = 1, s = 1, c = 1, f = 1, h = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: n, height: a, depth: s, widthSegments: c, heightSegments: f, depthSegments: h };
    const d = this;
    c = Math.floor(c), f = Math.floor(f), h = Math.floor(h);
    const m = [], _ = [], g = [], p = [];
    let x = 0, M = 0;
    T("z", "y", "x", -1, -1, s, a, n, h, f, 0), T("z", "y", "x", 1, -1, s, a, -n, h, f, 1), T("x", "z", "y", 1, 1, n, s, a, c, h, 2), T("x", "z", "y", 1, -1, n, s, -a, c, h, 3), T("x", "y", "z", 1, -1, n, a, s, c, f, 4), T("x", "y", "z", -1, -1, n, a, -s, c, f, 5), this.setIndex(m), this.setAttribute("position", new Ha(_, 3)), this.setAttribute("normal", new Ha(g, 3)), this.setAttribute("uv", new Ha(p, 2));
    function T(R, S, y, P, O, N, et, V, I, q, U) {
      const C = N / I, B = et / q, at = N / 2, ot = et / 2, ht = V / 2, gt = I + 1, X = q + 1;
      let rt = 0, Z = 0;
      const St = new ft();
      for (let bt = 0; bt < X; bt++) {
        const Vt = bt * B - ot;
        for (let ce = 0; ce < gt; ce++) {
          const pt = ce * C - at;
          St[R] = pt * P, St[S] = Vt * O, St[y] = ht, _.push(St.x, St.y, St.z), St[R] = 0, St[S] = 0, St[y] = V > 0 ? 1 : -1, g.push(St.x, St.y, St.z), p.push(ce / I), p.push(1 - bt / q), rt += 1;
        }
      }
      for (let bt = 0; bt < q; bt++) for (let Vt = 0; Vt < I; Vt++) {
        const ce = x + Vt + gt * bt, pt = x + Vt + gt * (bt + 1), A = x + (Vt + 1) + gt * (bt + 1), k = x + (Vt + 1) + gt * bt;
        m.push(ce, pt, k), m.push(pt, A, k), Z += 6;
      }
      d.addGroup(M, Z, U), M += Z, x += rt;
    }
  }
  copy(n) {
    return super.copy(n), this.parameters = Object.assign({}, n.parameters), this;
  }
  static fromJSON(n) {
    return new Ul(n.width, n.height, n.depth, n.widthSegments, n.heightSegments, n.depthSegments);
  }
}
function yo(o) {
  const n = {};
  for (const a in o) {
    n[a] = {};
    for (const s in o[a]) {
      const c = o[a][s];
      c && (c.isColor || c.isMatrix3 || c.isMatrix4 || c.isVector2 || c.isVector3 || c.isVector4 || c.isTexture || c.isQuaternion) ? c.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), n[a][s] = null) : n[a][s] = c.clone() : Array.isArray(c) ? n[a][s] = c.slice() : n[a][s] = c;
    }
  }
  return n;
}
function $n(o) {
  const n = {};
  for (let a = 0; a < o.length; a++) {
    const s = yo(o[a]);
    for (const c in s) n[c] = s[c];
  }
  return n;
}
function BE(o) {
  const n = [];
  for (let a = 0; a < o.length; a++) n.push(o[a].clone());
  return n;
}
function Dx(o) {
  const n = o.getRenderTarget();
  return n === null ? o.outputColorSpace : n.isXRRenderTarget === true ? n.texture.colorSpace : Ve.workingColorSpace;
}
const FE = { clone: yo, merge: $n };
var HE = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, GE = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ki extends Eo {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(n) {
    super(), this.isShaderMaterial = true, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = HE, this.fragmentShader = GE, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, n !== void 0 && this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.fragmentShader = n.fragmentShader, this.vertexShader = n.vertexShader, this.uniforms = yo(n.uniforms), this.uniformsGroups = BE(n.uniformsGroups), this.defines = Object.assign({}, n.defines), this.wireframe = n.wireframe, this.wireframeLinewidth = n.wireframeLinewidth, this.fog = n.fog, this.lights = n.lights, this.clipping = n.clipping, this.extensions = Object.assign({}, n.extensions), this.glslVersion = n.glslVersion, this;
  }
  toJSON(n) {
    const a = super.toJSON(n);
    a.glslVersion = this.glslVersion, a.uniforms = {};
    for (const c in this.uniforms) {
      const h = this.uniforms[c].value;
      h && h.isTexture ? a.uniforms[c] = { type: "t", value: h.toJSON(n).uuid } : h && h.isColor ? a.uniforms[c] = { type: "c", value: h.getHex() } : h && h.isVector2 ? a.uniforms[c] = { type: "v2", value: h.toArray() } : h && h.isVector3 ? a.uniforms[c] = { type: "v3", value: h.toArray() } : h && h.isVector4 ? a.uniforms[c] = { type: "v4", value: h.toArray() } : h && h.isMatrix3 ? a.uniforms[c] = { type: "m3", value: h.toArray() } : h && h.isMatrix4 ? a.uniforms[c] = { type: "m4", value: h.toArray() } : a.uniforms[c] = { value: h };
    }
    Object.keys(this.defines).length > 0 && (a.defines = this.defines), a.vertexShader = this.vertexShader, a.fragmentShader = this.fragmentShader, a.lights = this.lights, a.clipping = this.clipping;
    const s = {};
    for (const c in this.extensions) this.extensions[c] === true && (s[c] = true);
    return Object.keys(s).length > 0 && (a.extensions = s), a;
  }
}
class Ux extends ti {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new _n(), this.projectionMatrix = new _n(), this.projectionMatrixInverse = new _n(), this.coordinateSystem = Ia;
  }
  copy(n, a) {
    return super.copy(n, a), this.matrixWorldInverse.copy(n.matrixWorldInverse), this.projectionMatrix.copy(n.projectionMatrix), this.projectionMatrixInverse.copy(n.projectionMatrixInverse), this.coordinateSystem = n.coordinateSystem, this;
  }
  getWorldDirection(n) {
    return super.getWorldDirection(n).negate();
  }
  updateMatrixWorld(n) {
    super.updateMatrixWorld(n), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(n, a) {
    super.updateWorldMatrix(n, a), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mr = new ft(), A0 = new an(), R0 = new an();
class Oi extends Ux {
  constructor(n = 50, a = 1, s = 0.1, c = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = n, this.zoom = 1, this.near = s, this.far = c, this.focus = 10, this.aspect = a, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(n, a) {
    return super.copy(n, a), this.fov = n.fov, this.zoom = n.zoom, this.near = n.near, this.far = n.far, this.focus = n.focus, this.aspect = n.aspect, this.view = n.view === null ? null : Object.assign({}, n.view), this.filmGauge = n.filmGauge, this.filmOffset = n.filmOffset, this;
  }
  setFocalLength(n) {
    const a = 0.5 * this.getFilmHeight() / n;
    this.fov = Cp * 2 * Math.atan(a), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const n = Math.tan(dd * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / n;
  }
  getEffectiveFOV() {
    return Cp * 2 * Math.atan(Math.tan(dd * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(n, a, s) {
    Mr.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), a.set(Mr.x, Mr.y).multiplyScalar(-n / Mr.z), Mr.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), s.set(Mr.x, Mr.y).multiplyScalar(-n / Mr.z);
  }
  getViewSize(n, a) {
    return this.getViewBounds(n, A0, R0), a.subVectors(R0, A0);
  }
  setViewOffset(n, a, s, c, f, h) {
    this.aspect = n / a, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = n, this.view.fullHeight = a, this.view.offsetX = s, this.view.offsetY = c, this.view.width = f, this.view.height = h, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const n = this.near;
    let a = n * Math.tan(dd * 0.5 * this.fov) / this.zoom, s = 2 * a, c = this.aspect * s, f = -0.5 * c;
    const h = this.view;
    if (this.view !== null && this.view.enabled) {
      const m = h.fullWidth, _ = h.fullHeight;
      f += h.offsetX * c / m, a -= h.offsetY * s / _, c *= h.width / m, s *= h.height / _;
    }
    const d = this.filmOffset;
    d !== 0 && (f += n * d / this.getFilmWidth()), this.projectionMatrix.makePerspective(f, f + c, a, a - s, n, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(n) {
    const a = super.toJSON(n);
    return a.object.fov = this.fov, a.object.zoom = this.zoom, a.object.near = this.near, a.object.far = this.far, a.object.focus = this.focus, a.object.aspect = this.aspect, this.view !== null && (a.object.view = Object.assign({}, this.view)), a.object.filmGauge = this.filmGauge, a.object.filmOffset = this.filmOffset, a;
  }
}
const oo = -90, lo = 1;
class VE extends ti {
  constructor(n, a, s) {
    super(), this.type = "CubeCamera", this.renderTarget = s, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const c = new Oi(oo, lo, n, a);
    c.layers = this.layers, this.add(c);
    const f = new Oi(oo, lo, n, a);
    f.layers = this.layers, this.add(f);
    const h = new Oi(oo, lo, n, a);
    h.layers = this.layers, this.add(h);
    const d = new Oi(oo, lo, n, a);
    d.layers = this.layers, this.add(d);
    const m = new Oi(oo, lo, n, a);
    m.layers = this.layers, this.add(m);
    const _ = new Oi(oo, lo, n, a);
    _.layers = this.layers, this.add(_);
  }
  updateCoordinateSystem() {
    const n = this.coordinateSystem, a = this.children.concat(), [s, c, f, h, d, m] = a;
    for (const _ of a) this.remove(_);
    if (n === Ia) s.up.set(0, 1, 0), s.lookAt(1, 0, 0), c.up.set(0, 1, 0), c.lookAt(-1, 0, 0), f.up.set(0, 0, -1), f.lookAt(0, 1, 0), h.up.set(0, 0, 1), h.lookAt(0, -1, 0), d.up.set(0, 1, 0), d.lookAt(0, 0, 1), m.up.set(0, 1, 0), m.lookAt(0, 0, -1);
    else if (n === Cu) s.up.set(0, -1, 0), s.lookAt(-1, 0, 0), c.up.set(0, -1, 0), c.lookAt(1, 0, 0), f.up.set(0, 0, 1), f.lookAt(0, 1, 0), h.up.set(0, 0, -1), h.lookAt(0, -1, 0), d.up.set(0, -1, 0), d.lookAt(0, 0, 1), m.up.set(0, -1, 0), m.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + n);
    for (const _ of a) this.add(_), _.updateMatrixWorld();
  }
  update(n, a) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: s, activeMipmapLevel: c } = this;
    this.coordinateSystem !== n.coordinateSystem && (this.coordinateSystem = n.coordinateSystem, this.updateCoordinateSystem());
    const [f, h, d, m, _, g] = this.children, p = n.getRenderTarget(), x = n.getActiveCubeFace(), M = n.getActiveMipmapLevel(), T = n.xr.enabled;
    n.xr.enabled = false;
    const R = s.texture.generateMipmaps;
    s.texture.generateMipmaps = false, n.setRenderTarget(s, 0, c), n.render(a, f), n.setRenderTarget(s, 1, c), n.render(a, h), n.setRenderTarget(s, 2, c), n.render(a, d), n.setRenderTarget(s, 3, c), n.render(a, m), n.setRenderTarget(s, 4, c), n.render(a, _), s.texture.generateMipmaps = R, n.setRenderTarget(s, 5, c), n.render(a, g), n.setRenderTarget(p, x, M), n.xr.enabled = T, s.texture.needsPMREMUpdate = true;
  }
}
class Nx extends fi {
  constructor(n, a, s, c, f, h, d, m, _, g) {
    n = n !== void 0 ? n : [], a = a !== void 0 ? a : go, super(n, a, s, c, f, h, d, m, _, g), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(n) {
    this.image = n;
  }
}
class XE extends ls {
  constructor(n = 1, a = {}) {
    super(n, n, a), this.isWebGLCubeRenderTarget = true;
    const s = { width: n, height: n, depth: 1 }, c = [s, s, s, s, s, s];
    this.texture = new Nx(c, a.mapping, a.wrapS, a.wrapT, a.magFilter, a.minFilter, a.format, a.type, a.anisotropy, a.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = a.generateMipmaps !== void 0 ? a.generateMipmaps : false, this.texture.minFilter = a.minFilter !== void 0 ? a.minFilter : da;
  }
  fromEquirectangularTexture(n, a) {
    this.texture.type = a.type, this.texture.colorSpace = a.colorSpace, this.texture.generateMipmaps = a.generateMipmaps, this.texture.minFilter = a.minFilter, this.texture.magFilter = a.magFilter;
    const s = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, c = new Ul(5, 5, 5), f = new Ki({ name: "CubemapFromEquirect", uniforms: yo(s.uniforms), vertexShader: s.vertexShader, fragmentShader: s.fragmentShader, side: ui, blending: Tr });
    f.uniforms.tEquirect.value = a;
    const h = new Ba(c, f), d = a.minFilter;
    return a.minFilter === rs && (a.minFilter = da), new VE(1, 10, this).update(n, h), a.minFilter = d, h.geometry.dispose(), h.material.dispose(), this;
  }
  clear(n, a, s, c) {
    const f = n.getRenderTarget();
    for (let h = 0; h < 6; h++) n.setRenderTarget(this, h), n.clear(a, s, c);
    n.setRenderTarget(f);
  }
}
const Od = new ft(), kE = new ft(), jE = new Ae();
class ts {
  constructor(n = new ft(1, 0, 0), a = 0) {
    this.isPlane = true, this.normal = n, this.constant = a;
  }
  set(n, a) {
    return this.normal.copy(n), this.constant = a, this;
  }
  setComponents(n, a, s, c) {
    return this.normal.set(n, a, s), this.constant = c, this;
  }
  setFromNormalAndCoplanarPoint(n, a) {
    return this.normal.copy(n), this.constant = -a.dot(this.normal), this;
  }
  setFromCoplanarPoints(n, a, s) {
    const c = Od.subVectors(s, a).cross(kE.subVectors(n, a)).normalize();
    return this.setFromNormalAndCoplanarPoint(c, n), this;
  }
  copy(n) {
    return this.normal.copy(n.normal), this.constant = n.constant, this;
  }
  normalize() {
    const n = 1 / this.normal.length();
    return this.normal.multiplyScalar(n), this.constant *= n, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(n) {
    return this.normal.dot(n) + this.constant;
  }
  distanceToSphere(n) {
    return this.distanceToPoint(n.center) - n.radius;
  }
  projectPoint(n, a) {
    return a.copy(n).addScaledVector(this.normal, -this.distanceToPoint(n));
  }
  intersectLine(n, a) {
    const s = n.delta(Od), c = this.normal.dot(s);
    if (c === 0) return this.distanceToPoint(n.start) === 0 ? a.copy(n.start) : null;
    const f = -(n.start.dot(this.normal) + this.constant) / c;
    return f < 0 || f > 1 ? null : a.copy(n.start).addScaledVector(s, f);
  }
  intersectsLine(n) {
    const a = this.distanceToPoint(n.start), s = this.distanceToPoint(n.end);
    return a < 0 && s > 0 || s < 0 && a > 0;
  }
  intersectsBox(n) {
    return n.intersectsPlane(this);
  }
  intersectsSphere(n) {
    return n.intersectsPlane(this);
  }
  coplanarPoint(n) {
    return n.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(n, a) {
    const s = a || jE.getNormalMatrix(n), c = this.coplanarPoint(Od).applyMatrix4(n), f = this.normal.applyMatrix3(s).normalize();
    return this.constant = -c.dot(f), this;
  }
  translate(n) {
    return this.constant -= n.dot(this.normal), this;
  }
  equals(n) {
    return n.normal.equals(this.normal) && n.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qr = new Dl(), du = new ft();
class Lx {
  constructor(n = new ts(), a = new ts(), s = new ts(), c = new ts(), f = new ts(), h = new ts()) {
    this.planes = [n, a, s, c, f, h];
  }
  set(n, a, s, c, f, h) {
    const d = this.planes;
    return d[0].copy(n), d[1].copy(a), d[2].copy(s), d[3].copy(c), d[4].copy(f), d[5].copy(h), this;
  }
  copy(n) {
    const a = this.planes;
    for (let s = 0; s < 6; s++) a[s].copy(n.planes[s]);
    return this;
  }
  setFromProjectionMatrix(n, a = Ia) {
    const s = this.planes, c = n.elements, f = c[0], h = c[1], d = c[2], m = c[3], _ = c[4], g = c[5], p = c[6], x = c[7], M = c[8], T = c[9], R = c[10], S = c[11], y = c[12], P = c[13], O = c[14], N = c[15];
    if (s[0].setComponents(m - f, x - _, S - M, N - y).normalize(), s[1].setComponents(m + f, x + _, S + M, N + y).normalize(), s[2].setComponents(m + h, x + g, S + T, N + P).normalize(), s[3].setComponents(m - h, x - g, S - T, N - P).normalize(), s[4].setComponents(m - d, x - p, S - R, N - O).normalize(), a === Ia) s[5].setComponents(m + d, x + p, S + R, N + O).normalize();
    else if (a === Cu) s[5].setComponents(d, p, R, O).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + a);
    return this;
  }
  intersectsObject(n) {
    if (n.boundingSphere !== void 0) n.boundingSphere === null && n.computeBoundingSphere(), Qr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);
    else {
      const a = n.geometry;
      a.boundingSphere === null && a.computeBoundingSphere(), Qr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld);
    }
    return this.intersectsSphere(Qr);
  }
  intersectsSprite(n) {
    return Qr.center.set(0, 0, 0), Qr.radius = 0.7071067811865476, Qr.applyMatrix4(n.matrixWorld), this.intersectsSphere(Qr);
  }
  intersectsSphere(n) {
    const a = this.planes, s = n.center, c = -n.radius;
    for (let f = 0; f < 6; f++) if (a[f].distanceToPoint(s) < c) return false;
    return true;
  }
  intersectsBox(n) {
    const a = this.planes;
    for (let s = 0; s < 6; s++) {
      const c = a[s];
      if (du.x = c.normal.x > 0 ? n.max.x : n.min.x, du.y = c.normal.y > 0 ? n.max.y : n.min.y, du.z = c.normal.z > 0 ? n.max.z : n.min.z, c.distanceToPoint(du) < 0) return false;
    }
    return true;
  }
  containsPoint(n) {
    const a = this.planes;
    for (let s = 0; s < 6; s++) if (a[s].distanceToPoint(n) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Ox() {
  let o = null, n = false, a = null, s = null;
  function c(f, h) {
    a(f, h), s = o.requestAnimationFrame(c);
  }
  return { start: function() {
    n !== true && a !== null && (s = o.requestAnimationFrame(c), n = true);
  }, stop: function() {
    o.cancelAnimationFrame(s), n = false;
  }, setAnimationLoop: function(f) {
    a = f;
  }, setContext: function(f) {
    o = f;
  } };
}
function qE(o) {
  const n = /* @__PURE__ */ new WeakMap();
  function a(d, m) {
    const _ = d.array, g = d.usage, p = _.byteLength, x = o.createBuffer();
    o.bindBuffer(m, x), o.bufferData(m, _, g), d.onUploadCallback();
    let M;
    if (_ instanceof Float32Array) M = o.FLOAT;
    else if (_ instanceof Uint16Array) d.isFloat16BufferAttribute ? M = o.HALF_FLOAT : M = o.UNSIGNED_SHORT;
    else if (_ instanceof Int16Array) M = o.SHORT;
    else if (_ instanceof Uint32Array) M = o.UNSIGNED_INT;
    else if (_ instanceof Int32Array) M = o.INT;
    else if (_ instanceof Int8Array) M = o.BYTE;
    else if (_ instanceof Uint8Array) M = o.UNSIGNED_BYTE;
    else if (_ instanceof Uint8ClampedArray) M = o.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + _);
    return { buffer: x, type: M, bytesPerElement: _.BYTES_PER_ELEMENT, version: d.version, size: p };
  }
  function s(d, m, _) {
    const g = m.array, p = m.updateRanges;
    if (o.bindBuffer(_, d), p.length === 0) o.bufferSubData(_, 0, g);
    else {
      p.sort((M, T) => M.start - T.start);
      let x = 0;
      for (let M = 1; M < p.length; M++) {
        const T = p[x], R = p[M];
        R.start <= T.start + T.count + 1 ? T.count = Math.max(T.count, R.start + R.count - T.start) : (++x, p[x] = R);
      }
      p.length = x + 1;
      for (let M = 0, T = p.length; M < T; M++) {
        const R = p[M];
        o.bufferSubData(_, R.start * g.BYTES_PER_ELEMENT, g, R.start, R.count);
      }
      m.clearUpdateRanges();
    }
    m.onUploadCallback();
  }
  function c(d) {
    return d.isInterleavedBufferAttribute && (d = d.data), n.get(d);
  }
  function f(d) {
    d.isInterleavedBufferAttribute && (d = d.data);
    const m = n.get(d);
    m && (o.deleteBuffer(m.buffer), n.delete(d));
  }
  function h(d, m) {
    if (d.isInterleavedBufferAttribute && (d = d.data), d.isGLBufferAttribute) {
      const g = n.get(d);
      (!g || g.version < d.version) && n.set(d, { buffer: d.buffer, type: d.type, bytesPerElement: d.elementSize, version: d.version });
      return;
    }
    const _ = n.get(d);
    if (_ === void 0) n.set(d, a(d, m));
    else if (_.version < d.version) {
      if (_.size !== d.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      s(_.buffer, d, m), _.version = d.version;
    }
  }
  return { get: c, remove: f, update: h };
}
class Ou extends Qi {
  constructor(n = 1, a = 1, s = 1, c = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: n, height: a, widthSegments: s, heightSegments: c };
    const f = n / 2, h = a / 2, d = Math.floor(s), m = Math.floor(c), _ = d + 1, g = m + 1, p = n / d, x = a / m, M = [], T = [], R = [], S = [];
    for (let y = 0; y < g; y++) {
      const P = y * x - h;
      for (let O = 0; O < _; O++) {
        const N = O * p - f;
        T.push(N, -P, 0), R.push(0, 0, 1), S.push(O / d), S.push(1 - y / m);
      }
    }
    for (let y = 0; y < m; y++) for (let P = 0; P < d; P++) {
      const O = P + _ * y, N = P + _ * (y + 1), et = P + 1 + _ * (y + 1), V = P + 1 + _ * y;
      M.push(O, N, V), M.push(N, et, V);
    }
    this.setIndex(M), this.setAttribute("position", new Ha(T, 3)), this.setAttribute("normal", new Ha(R, 3)), this.setAttribute("uv", new Ha(S, 2));
  }
  copy(n) {
    return super.copy(n), this.parameters = Object.assign({}, n.parameters), this;
  }
  static fromJSON(n) {
    return new Ou(n.width, n.height, n.widthSegments, n.heightSegments);
  }
}
var YE = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, WE = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, ZE = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, KE = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, QE = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, JE = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, $E = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, tT = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, eT = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, nT = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, iT = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, aT = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, rT = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, sT = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, oT = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, lT = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, cT = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, uT = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, fT = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, hT = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, dT = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, pT = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, mT = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, gT = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, vT = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, _T = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, xT = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, yT = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, ST = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, MT = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ET = "gl_FragColor = linearToOutputTexel( gl_FragColor );", TT = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, bT = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, AT = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, RT = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, CT = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, wT = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, DT = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, UT = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, NT = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, LT = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, OT = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, zT = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, PT = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, IT = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, BT = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, FT = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, HT = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, GT = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, VT = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, XT = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, kT = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, jT = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, qT = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, YT = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, WT = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ZT = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, KT = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, QT = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, JT = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, $T = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, t1 = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, e1 = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, n1 = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, i1 = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, a1 = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, r1 = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, s1 = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, o1 = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, l1 = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, c1 = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, u1 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, f1 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, h1 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, d1 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, p1 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, m1 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, g1 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, v1 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, _1 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, x1 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, y1 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, S1 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, M1 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, E1 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, T1 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, b1 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, A1 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, R1 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, C1 = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, w1 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, D1 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, U1 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, N1 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, L1 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, O1 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, z1 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, P1 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, I1 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, B1 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, F1 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, H1 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, G1 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, V1 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, X1 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, k1 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, j1 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const q1 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Y1 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, W1 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Z1 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, K1 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Q1 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, J1 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, $1 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, tb = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, eb = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, nb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, ib = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ab = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, rb = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, sb = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, ob = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lb = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, cb = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ub = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, fb = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, hb = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, db = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, pb = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mb = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gb = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, vb = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _b = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, xb = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, yb = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Sb = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Mb = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Eb = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Tb = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, bb = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Re = { alphahash_fragment: YE, alphahash_pars_fragment: WE, alphamap_fragment: ZE, alphamap_pars_fragment: KE, alphatest_fragment: QE, alphatest_pars_fragment: JE, aomap_fragment: $E, aomap_pars_fragment: tT, batching_pars_vertex: eT, batching_vertex: nT, begin_vertex: iT, beginnormal_vertex: aT, bsdfs: rT, iridescence_fragment: sT, bumpmap_pars_fragment: oT, clipping_planes_fragment: lT, clipping_planes_pars_fragment: cT, clipping_planes_pars_vertex: uT, clipping_planes_vertex: fT, color_fragment: hT, color_pars_fragment: dT, color_pars_vertex: pT, color_vertex: mT, common: gT, cube_uv_reflection_fragment: vT, defaultnormal_vertex: _T, displacementmap_pars_vertex: xT, displacementmap_vertex: yT, emissivemap_fragment: ST, emissivemap_pars_fragment: MT, colorspace_fragment: ET, colorspace_pars_fragment: TT, envmap_fragment: bT, envmap_common_pars_fragment: AT, envmap_pars_fragment: RT, envmap_pars_vertex: CT, envmap_physical_pars_fragment: FT, envmap_vertex: wT, fog_vertex: DT, fog_pars_vertex: UT, fog_fragment: NT, fog_pars_fragment: LT, gradientmap_pars_fragment: OT, lightmap_pars_fragment: zT, lights_lambert_fragment: PT, lights_lambert_pars_fragment: IT, lights_pars_begin: BT, lights_toon_fragment: HT, lights_toon_pars_fragment: GT, lights_phong_fragment: VT, lights_phong_pars_fragment: XT, lights_physical_fragment: kT, lights_physical_pars_fragment: jT, lights_fragment_begin: qT, lights_fragment_maps: YT, lights_fragment_end: WT, logdepthbuf_fragment: ZT, logdepthbuf_pars_fragment: KT, logdepthbuf_pars_vertex: QT, logdepthbuf_vertex: JT, map_fragment: $T, map_pars_fragment: t1, map_particle_fragment: e1, map_particle_pars_fragment: n1, metalnessmap_fragment: i1, metalnessmap_pars_fragment: a1, morphinstance_vertex: r1, morphcolor_vertex: s1, morphnormal_vertex: o1, morphtarget_pars_vertex: l1, morphtarget_vertex: c1, normal_fragment_begin: u1, normal_fragment_maps: f1, normal_pars_fragment: h1, normal_pars_vertex: d1, normal_vertex: p1, normalmap_pars_fragment: m1, clearcoat_normal_fragment_begin: g1, clearcoat_normal_fragment_maps: v1, clearcoat_pars_fragment: _1, iridescence_pars_fragment: x1, opaque_fragment: y1, packing: S1, premultiplied_alpha_fragment: M1, project_vertex: E1, dithering_fragment: T1, dithering_pars_fragment: b1, roughnessmap_fragment: A1, roughnessmap_pars_fragment: R1, shadowmap_pars_fragment: C1, shadowmap_pars_vertex: w1, shadowmap_vertex: D1, shadowmask_pars_fragment: U1, skinbase_vertex: N1, skinning_pars_vertex: L1, skinning_vertex: O1, skinnormal_vertex: z1, specularmap_fragment: P1, specularmap_pars_fragment: I1, tonemapping_fragment: B1, tonemapping_pars_fragment: F1, transmission_fragment: H1, transmission_pars_fragment: G1, uv_pars_fragment: V1, uv_pars_vertex: X1, uv_vertex: k1, worldpos_vertex: j1, background_vert: q1, background_frag: Y1, backgroundCube_vert: W1, backgroundCube_frag: Z1, cube_vert: K1, cube_frag: Q1, depth_vert: J1, depth_frag: $1, distanceRGBA_vert: tb, distanceRGBA_frag: eb, equirect_vert: nb, equirect_frag: ib, linedashed_vert: ab, linedashed_frag: rb, meshbasic_vert: sb, meshbasic_frag: ob, meshlambert_vert: lb, meshlambert_frag: cb, meshmatcap_vert: ub, meshmatcap_frag: fb, meshnormal_vert: hb, meshnormal_frag: db, meshphong_vert: pb, meshphong_frag: mb, meshphysical_vert: gb, meshphysical_frag: vb, meshtoon_vert: _b, meshtoon_frag: xb, points_vert: yb, points_frag: Sb, shadow_vert: Mb, shadow_frag: Eb, sprite_vert: Tb, sprite_frag: bb }, kt = { common: { diffuse: { value: new ke(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ae() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ae() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ae() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ae() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ae() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ae() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ae() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ae() }, normalScale: { value: new an(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ae() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ae() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ae() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ae() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ke(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ke(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ae() }, alphaTest: { value: 0 }, uvTransform: { value: new Ae() } }, sprite: { diffuse: { value: new ke(16777215) }, opacity: { value: 1 }, center: { value: new an(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ae() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ae() }, alphaTest: { value: 0 } } }, ha = { basic: { uniforms: $n([kt.common, kt.specularmap, kt.envmap, kt.aomap, kt.lightmap, kt.fog]), vertexShader: Re.meshbasic_vert, fragmentShader: Re.meshbasic_frag }, lambert: { uniforms: $n([kt.common, kt.specularmap, kt.envmap, kt.aomap, kt.lightmap, kt.emissivemap, kt.bumpmap, kt.normalmap, kt.displacementmap, kt.fog, kt.lights, { emissive: { value: new ke(0) } }]), vertexShader: Re.meshlambert_vert, fragmentShader: Re.meshlambert_frag }, phong: { uniforms: $n([kt.common, kt.specularmap, kt.envmap, kt.aomap, kt.lightmap, kt.emissivemap, kt.bumpmap, kt.normalmap, kt.displacementmap, kt.fog, kt.lights, { emissive: { value: new ke(0) }, specular: { value: new ke(1118481) }, shininess: { value: 30 } }]), vertexShader: Re.meshphong_vert, fragmentShader: Re.meshphong_frag }, standard: { uniforms: $n([kt.common, kt.envmap, kt.aomap, kt.lightmap, kt.emissivemap, kt.bumpmap, kt.normalmap, kt.displacementmap, kt.roughnessmap, kt.metalnessmap, kt.fog, kt.lights, { emissive: { value: new ke(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Re.meshphysical_vert, fragmentShader: Re.meshphysical_frag }, toon: { uniforms: $n([kt.common, kt.aomap, kt.lightmap, kt.emissivemap, kt.bumpmap, kt.normalmap, kt.displacementmap, kt.gradientmap, kt.fog, kt.lights, { emissive: { value: new ke(0) } }]), vertexShader: Re.meshtoon_vert, fragmentShader: Re.meshtoon_frag }, matcap: { uniforms: $n([kt.common, kt.bumpmap, kt.normalmap, kt.displacementmap, kt.fog, { matcap: { value: null } }]), vertexShader: Re.meshmatcap_vert, fragmentShader: Re.meshmatcap_frag }, points: { uniforms: $n([kt.points, kt.fog]), vertexShader: Re.points_vert, fragmentShader: Re.points_frag }, dashed: { uniforms: $n([kt.common, kt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Re.linedashed_vert, fragmentShader: Re.linedashed_frag }, depth: { uniforms: $n([kt.common, kt.displacementmap]), vertexShader: Re.depth_vert, fragmentShader: Re.depth_frag }, normal: { uniforms: $n([kt.common, kt.bumpmap, kt.normalmap, kt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Re.meshnormal_vert, fragmentShader: Re.meshnormal_frag }, sprite: { uniforms: $n([kt.sprite, kt.fog]), vertexShader: Re.sprite_vert, fragmentShader: Re.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ae() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Re.background_vert, fragmentShader: Re.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ae() } }, vertexShader: Re.backgroundCube_vert, fragmentShader: Re.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Re.cube_vert, fragmentShader: Re.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Re.equirect_vert, fragmentShader: Re.equirect_frag }, distanceRGBA: { uniforms: $n([kt.common, kt.displacementmap, { referencePosition: { value: new ft() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Re.distanceRGBA_vert, fragmentShader: Re.distanceRGBA_frag }, shadow: { uniforms: $n([kt.lights, kt.fog, { color: { value: new ke(0) }, opacity: { value: 1 } }]), vertexShader: Re.shadow_vert, fragmentShader: Re.shadow_frag } };
ha.physical = { uniforms: $n([ha.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ae() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ae() }, clearcoatNormalScale: { value: new an(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ae() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ae() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ae() }, sheen: { value: 0 }, sheenColor: { value: new ke(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ae() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ae() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ae() }, transmissionSamplerSize: { value: new an() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ae() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ke(0) }, specularColor: { value: new ke(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ae() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ae() }, anisotropyVector: { value: new an() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ae() } }]), vertexShader: Re.meshphysical_vert, fragmentShader: Re.meshphysical_frag };
const pu = { r: 0, b: 0, g: 0 }, Jr = new Va(), Ab = new _n();
function Rb(o, n, a, s, c, f, h) {
  const d = new ke(0);
  let m = f === true ? 0 : 1, _, g, p = null, x = 0, M = null;
  function T(P) {
    let O = P.isScene === true ? P.background : null;
    return O && O.isTexture && (O = (P.backgroundBlurriness > 0 ? a : n).get(O)), O;
  }
  function R(P) {
    let O = false;
    const N = T(P);
    N === null ? y(d, m) : N && N.isColor && (y(N, 1), O = true);
    const et = o.xr.getEnvironmentBlendMode();
    et === "additive" ? s.buffers.color.setClear(0, 0, 0, 1, h) : et === "alpha-blend" && s.buffers.color.setClear(0, 0, 0, 0, h), (o.autoClear || O) && (s.buffers.depth.setTest(true), s.buffers.depth.setMask(true), s.buffers.color.setMask(true), o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil));
  }
  function S(P, O) {
    const N = T(O);
    N && (N.isCubeTexture || N.mapping === Nu) ? (g === void 0 && (g = new Ba(new Ul(1, 1, 1), new Ki({ name: "BackgroundCubeMaterial", uniforms: yo(ha.backgroundCube.uniforms), vertexShader: ha.backgroundCube.vertexShader, fragmentShader: ha.backgroundCube.fragmentShader, side: ui, depthTest: false, depthWrite: false, fog: false })), g.geometry.deleteAttribute("normal"), g.geometry.deleteAttribute("uv"), g.onBeforeRender = function(et, V, I) {
      this.matrixWorld.copyPosition(I.matrixWorld);
    }, Object.defineProperty(g.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), c.update(g)), Jr.copy(O.backgroundRotation), Jr.x *= -1, Jr.y *= -1, Jr.z *= -1, N.isCubeTexture && N.isRenderTargetTexture === false && (Jr.y *= -1, Jr.z *= -1), g.material.uniforms.envMap.value = N, g.material.uniforms.flipEnvMap.value = N.isCubeTexture && N.isRenderTargetTexture === false ? -1 : 1, g.material.uniforms.backgroundBlurriness.value = O.backgroundBlurriness, g.material.uniforms.backgroundIntensity.value = O.backgroundIntensity, g.material.uniforms.backgroundRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(Jr)), g.material.toneMapped = Ve.getTransfer(N.colorSpace) !== en, (p !== N || x !== N.version || M !== o.toneMapping) && (g.material.needsUpdate = true, p = N, x = N.version, M = o.toneMapping), g.layers.enableAll(), P.unshift(g, g.geometry, g.material, 0, 0, null)) : N && N.isTexture && (_ === void 0 && (_ = new Ba(new Ou(2, 2), new Ki({ name: "BackgroundMaterial", uniforms: yo(ha.background.uniforms), vertexShader: ha.background.vertexShader, fragmentShader: ha.background.fragmentShader, side: Ar, depthTest: false, depthWrite: false, fog: false })), _.geometry.deleteAttribute("normal"), Object.defineProperty(_.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), c.update(_)), _.material.uniforms.t2D.value = N, _.material.uniforms.backgroundIntensity.value = O.backgroundIntensity, _.material.toneMapped = Ve.getTransfer(N.colorSpace) !== en, N.matrixAutoUpdate === true && N.updateMatrix(), _.material.uniforms.uvTransform.value.copy(N.matrix), (p !== N || x !== N.version || M !== o.toneMapping) && (_.material.needsUpdate = true, p = N, x = N.version, M = o.toneMapping), _.layers.enableAll(), P.unshift(_, _.geometry, _.material, 0, 0, null));
  }
  function y(P, O) {
    P.getRGB(pu, Dx(o)), s.buffers.color.setClear(pu.r, pu.g, pu.b, O, h);
  }
  return { getClearColor: function() {
    return d;
  }, setClearColor: function(P, O = 1) {
    d.set(P), m = O, y(d, m);
  }, getClearAlpha: function() {
    return m;
  }, setClearAlpha: function(P) {
    m = P, y(d, m);
  }, render: R, addToRenderList: S };
}
function Cb(o, n) {
  const a = o.getParameter(o.MAX_VERTEX_ATTRIBS), s = {}, c = x(null);
  let f = c, h = false;
  function d(C, B, at, ot, ht) {
    let gt = false;
    const X = p(ot, at, B);
    f !== X && (f = X, _(f.object)), gt = M(C, ot, at, ht), gt && T(C, ot, at, ht), ht !== null && n.update(ht, o.ELEMENT_ARRAY_BUFFER), (gt || h) && (h = false, N(C, B, at, ot), ht !== null && o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, n.get(ht).buffer));
  }
  function m() {
    return o.createVertexArray();
  }
  function _(C) {
    return o.bindVertexArray(C);
  }
  function g(C) {
    return o.deleteVertexArray(C);
  }
  function p(C, B, at) {
    const ot = at.wireframe === true;
    let ht = s[C.id];
    ht === void 0 && (ht = {}, s[C.id] = ht);
    let gt = ht[B.id];
    gt === void 0 && (gt = {}, ht[B.id] = gt);
    let X = gt[ot];
    return X === void 0 && (X = x(m()), gt[ot] = X), X;
  }
  function x(C) {
    const B = [], at = [], ot = [];
    for (let ht = 0; ht < a; ht++) B[ht] = 0, at[ht] = 0, ot[ht] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: B, enabledAttributes: at, attributeDivisors: ot, object: C, attributes: {}, index: null };
  }
  function M(C, B, at, ot) {
    const ht = f.attributes, gt = B.attributes;
    let X = 0;
    const rt = at.getAttributes();
    for (const Z in rt) if (rt[Z].location >= 0) {
      const bt = ht[Z];
      let Vt = gt[Z];
      if (Vt === void 0 && (Z === "instanceMatrix" && C.instanceMatrix && (Vt = C.instanceMatrix), Z === "instanceColor" && C.instanceColor && (Vt = C.instanceColor)), bt === void 0 || bt.attribute !== Vt || Vt && bt.data !== Vt.data) return true;
      X++;
    }
    return f.attributesNum !== X || f.index !== ot;
  }
  function T(C, B, at, ot) {
    const ht = {}, gt = B.attributes;
    let X = 0;
    const rt = at.getAttributes();
    for (const Z in rt) if (rt[Z].location >= 0) {
      let bt = gt[Z];
      bt === void 0 && (Z === "instanceMatrix" && C.instanceMatrix && (bt = C.instanceMatrix), Z === "instanceColor" && C.instanceColor && (bt = C.instanceColor));
      const Vt = {};
      Vt.attribute = bt, bt && bt.data && (Vt.data = bt.data), ht[Z] = Vt, X++;
    }
    f.attributes = ht, f.attributesNum = X, f.index = ot;
  }
  function R() {
    const C = f.newAttributes;
    for (let B = 0, at = C.length; B < at; B++) C[B] = 0;
  }
  function S(C) {
    y(C, 0);
  }
  function y(C, B) {
    const at = f.newAttributes, ot = f.enabledAttributes, ht = f.attributeDivisors;
    at[C] = 1, ot[C] === 0 && (o.enableVertexAttribArray(C), ot[C] = 1), ht[C] !== B && (o.vertexAttribDivisor(C, B), ht[C] = B);
  }
  function P() {
    const C = f.newAttributes, B = f.enabledAttributes;
    for (let at = 0, ot = B.length; at < ot; at++) B[at] !== C[at] && (o.disableVertexAttribArray(at), B[at] = 0);
  }
  function O(C, B, at, ot, ht, gt, X) {
    X === true ? o.vertexAttribIPointer(C, B, at, ht, gt) : o.vertexAttribPointer(C, B, at, ot, ht, gt);
  }
  function N(C, B, at, ot) {
    R();
    const ht = ot.attributes, gt = at.getAttributes(), X = B.defaultAttributeValues;
    for (const rt in gt) {
      const Z = gt[rt];
      if (Z.location >= 0) {
        let St = ht[rt];
        if (St === void 0 && (rt === "instanceMatrix" && C.instanceMatrix && (St = C.instanceMatrix), rt === "instanceColor" && C.instanceColor && (St = C.instanceColor)), St !== void 0) {
          const bt = St.normalized, Vt = St.itemSize, ce = n.get(St);
          if (ce === void 0) continue;
          const pt = ce.buffer, A = ce.type, k = ce.bytesPerElement, H = A === o.INT || A === o.UNSIGNED_INT || St.gpuType === Op;
          if (St.isInterleavedBufferAttribute) {
            const W = St.data, mt = W.stride, _t = St.offset;
            if (W.isInstancedInterleavedBuffer) {
              for (let At = 0; At < Z.locationSize; At++) y(Z.location + At, W.meshPerAttribute);
              C.isInstancedMesh !== true && ot._maxInstanceCount === void 0 && (ot._maxInstanceCount = W.meshPerAttribute * W.count);
            } else for (let At = 0; At < Z.locationSize; At++) S(Z.location + At);
            o.bindBuffer(o.ARRAY_BUFFER, pt);
            for (let At = 0; At < Z.locationSize; At++) O(Z.location + At, Vt / Z.locationSize, A, bt, mt * k, (_t + Vt / Z.locationSize * At) * k, H);
          } else {
            if (St.isInstancedBufferAttribute) {
              for (let W = 0; W < Z.locationSize; W++) y(Z.location + W, St.meshPerAttribute);
              C.isInstancedMesh !== true && ot._maxInstanceCount === void 0 && (ot._maxInstanceCount = St.meshPerAttribute * St.count);
            } else for (let W = 0; W < Z.locationSize; W++) S(Z.location + W);
            o.bindBuffer(o.ARRAY_BUFFER, pt);
            for (let W = 0; W < Z.locationSize; W++) O(Z.location + W, Vt / Z.locationSize, A, bt, Vt * k, Vt / Z.locationSize * W * k, H);
          }
        } else if (X !== void 0) {
          const bt = X[rt];
          if (bt !== void 0) switch (bt.length) {
            case 2:
              o.vertexAttrib2fv(Z.location, bt);
              break;
            case 3:
              o.vertexAttrib3fv(Z.location, bt);
              break;
            case 4:
              o.vertexAttrib4fv(Z.location, bt);
              break;
            default:
              o.vertexAttrib1fv(Z.location, bt);
          }
        }
      }
    }
    P();
  }
  function et() {
    q();
    for (const C in s) {
      const B = s[C];
      for (const at in B) {
        const ot = B[at];
        for (const ht in ot) g(ot[ht].object), delete ot[ht];
        delete B[at];
      }
      delete s[C];
    }
  }
  function V(C) {
    if (s[C.id] === void 0) return;
    const B = s[C.id];
    for (const at in B) {
      const ot = B[at];
      for (const ht in ot) g(ot[ht].object), delete ot[ht];
      delete B[at];
    }
    delete s[C.id];
  }
  function I(C) {
    for (const B in s) {
      const at = s[B];
      if (at[C.id] === void 0) continue;
      const ot = at[C.id];
      for (const ht in ot) g(ot[ht].object), delete ot[ht];
      delete at[C.id];
    }
  }
  function q() {
    U(), h = true, f !== c && (f = c, _(f.object));
  }
  function U() {
    c.geometry = null, c.program = null, c.wireframe = false;
  }
  return { setup: d, reset: q, resetDefaultState: U, dispose: et, releaseStatesOfGeometry: V, releaseStatesOfProgram: I, initAttributes: R, enableAttribute: S, disableUnusedAttributes: P };
}
function wb(o, n, a) {
  let s;
  function c(_) {
    s = _;
  }
  function f(_, g) {
    o.drawArrays(s, _, g), a.update(g, s, 1);
  }
  function h(_, g, p) {
    p !== 0 && (o.drawArraysInstanced(s, _, g, p), a.update(g, s, p));
  }
  function d(_, g, p) {
    if (p === 0) return;
    n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s, _, 0, g, 0, p);
    let M = 0;
    for (let T = 0; T < p; T++) M += g[T];
    a.update(M, s, 1);
  }
  function m(_, g, p, x) {
    if (p === 0) return;
    const M = n.get("WEBGL_multi_draw");
    if (M === null) for (let T = 0; T < _.length; T++) h(_[T], g[T], x[T]);
    else {
      M.multiDrawArraysInstancedWEBGL(s, _, 0, g, 0, x, 0, p);
      let T = 0;
      for (let R = 0; R < p; R++) T += g[R] * x[R];
      a.update(T, s, 1);
    }
  }
  this.setMode = c, this.render = f, this.renderInstances = h, this.renderMultiDraw = d, this.renderMultiDrawInstances = m;
}
function Db(o, n, a, s) {
  let c;
  function f() {
    if (c !== void 0) return c;
    if (n.has("EXT_texture_filter_anisotropic") === true) {
      const I = n.get("EXT_texture_filter_anisotropic");
      c = o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else c = 0;
    return c;
  }
  function h(I) {
    return !(I !== Yi && s.convert(I) !== o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function d(I) {
    const q = I === Al && (n.has("EXT_color_buffer_half_float") || n.has("EXT_color_buffer_float"));
    return !(I !== Ga && s.convert(I) !== o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE) && I !== Pa && !q);
  }
  function m(I) {
    if (I === "highp") {
      if (o.getShaderPrecisionFormat(o.VERTEX_SHADER, o.HIGH_FLOAT).precision > 0 && o.getShaderPrecisionFormat(o.FRAGMENT_SHADER, o.HIGH_FLOAT).precision > 0) return "highp";
      I = "mediump";
    }
    return I === "mediump" && o.getShaderPrecisionFormat(o.VERTEX_SHADER, o.MEDIUM_FLOAT).precision > 0 && o.getShaderPrecisionFormat(o.FRAGMENT_SHADER, o.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let _ = a.precision !== void 0 ? a.precision : "highp";
  const g = m(_);
  g !== _ && (console.warn("THREE.WebGLRenderer:", _, "not supported, using", g, "instead."), _ = g);
  const p = a.logarithmicDepthBuffer === true, x = a.reverseDepthBuffer === true && n.has("EXT_clip_control"), M = o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS), T = o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS), R = o.getParameter(o.MAX_TEXTURE_SIZE), S = o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE), y = o.getParameter(o.MAX_VERTEX_ATTRIBS), P = o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS), O = o.getParameter(o.MAX_VARYING_VECTORS), N = o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS), et = T > 0, V = o.getParameter(o.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: f, getMaxPrecision: m, textureFormatReadable: h, textureTypeReadable: d, precision: _, logarithmicDepthBuffer: p, reverseDepthBuffer: x, maxTextures: M, maxVertexTextures: T, maxTextureSize: R, maxCubemapSize: S, maxAttributes: y, maxVertexUniforms: P, maxVaryings: O, maxFragmentUniforms: N, vertexTextures: et, maxSamples: V };
}
function Ub(o) {
  const n = this;
  let a = null, s = 0, c = false, f = false;
  const h = new ts(), d = new Ae(), m = { value: null, needsUpdate: false };
  this.uniform = m, this.numPlanes = 0, this.numIntersection = 0, this.init = function(p, x) {
    const M = p.length !== 0 || x || s !== 0 || c;
    return c = x, s = p.length, M;
  }, this.beginShadows = function() {
    f = true, g(null);
  }, this.endShadows = function() {
    f = false;
  }, this.setGlobalState = function(p, x) {
    a = g(p, x, 0);
  }, this.setState = function(p, x, M) {
    const T = p.clippingPlanes, R = p.clipIntersection, S = p.clipShadows, y = o.get(p);
    if (!c || T === null || T.length === 0 || f && !S) f ? g(null) : _();
    else {
      const P = f ? 0 : s, O = P * 4;
      let N = y.clippingState || null;
      m.value = N, N = g(T, x, O, M);
      for (let et = 0; et !== O; ++et) N[et] = a[et];
      y.clippingState = N, this.numIntersection = R ? this.numPlanes : 0, this.numPlanes += P;
    }
  };
  function _() {
    m.value !== a && (m.value = a, m.needsUpdate = s > 0), n.numPlanes = s, n.numIntersection = 0;
  }
  function g(p, x, M, T) {
    const R = p !== null ? p.length : 0;
    let S = null;
    if (R !== 0) {
      if (S = m.value, T !== true || S === null) {
        const y = M + R * 4, P = x.matrixWorldInverse;
        d.getNormalMatrix(P), (S === null || S.length < y) && (S = new Float32Array(y));
        for (let O = 0, N = M; O !== R; ++O, N += 4) h.copy(p[O]).applyMatrix4(P, d), h.normal.toArray(S, N), S[N + 3] = h.constant;
      }
      m.value = S, m.needsUpdate = true;
    }
    return n.numPlanes = R, n.numIntersection = 0, S;
  }
}
function Nb(o) {
  let n = /* @__PURE__ */ new WeakMap();
  function a(h, d) {
    return d === Jd ? h.mapping = go : d === $d && (h.mapping = vo), h;
  }
  function s(h) {
    if (h && h.isTexture) {
      const d = h.mapping;
      if (d === Jd || d === $d) if (n.has(h)) {
        const m = n.get(h).texture;
        return a(m, h.mapping);
      } else {
        const m = h.image;
        if (m && m.height > 0) {
          const _ = new XE(m.height);
          return _.fromEquirectangularTexture(o, h), n.set(h, _), h.addEventListener("dispose", c), a(_.texture, h.mapping);
        } else return null;
      }
    }
    return h;
  }
  function c(h) {
    const d = h.target;
    d.removeEventListener("dispose", c);
    const m = n.get(d);
    m !== void 0 && (n.delete(d), m.dispose());
  }
  function f() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: s, dispose: f };
}
class Lb extends Ux {
  constructor(n = -1, a = 1, s = 1, c = -1, f = 0.1, h = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = n, this.right = a, this.top = s, this.bottom = c, this.near = f, this.far = h, this.updateProjectionMatrix();
  }
  copy(n, a) {
    return super.copy(n, a), this.left = n.left, this.right = n.right, this.top = n.top, this.bottom = n.bottom, this.near = n.near, this.far = n.far, this.zoom = n.zoom, this.view = n.view === null ? null : Object.assign({}, n.view), this;
  }
  setViewOffset(n, a, s, c, f, h) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = n, this.view.fullHeight = a, this.view.offsetX = s, this.view.offsetY = c, this.view.width = f, this.view.height = h, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const n = (this.right - this.left) / (2 * this.zoom), a = (this.top - this.bottom) / (2 * this.zoom), s = (this.right + this.left) / 2, c = (this.top + this.bottom) / 2;
    let f = s - n, h = s + n, d = c + a, m = c - a;
    if (this.view !== null && this.view.enabled) {
      const _ = (this.right - this.left) / this.view.fullWidth / this.zoom, g = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      f += _ * this.view.offsetX, h = f + _ * this.view.width, d -= g * this.view.offsetY, m = d - g * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(f, h, d, m, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(n) {
    const a = super.toJSON(n);
    return a.object.zoom = this.zoom, a.object.left = this.left, a.object.right = this.right, a.object.top = this.top, a.object.bottom = this.bottom, a.object.near = this.near, a.object.far = this.far, this.view !== null && (a.object.view = Object.assign({}, this.view)), a;
  }
}
const fo = 4, C0 = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], is = 20, zd = new Lb(), w0 = new ke();
let Pd = null, Id = 0, Bd = 0, Fd = false;
const es = (1 + Math.sqrt(5)) / 2, co = 1 / es, D0 = [new ft(-es, co, 0), new ft(es, co, 0), new ft(-co, 0, es), new ft(co, 0, es), new ft(0, es, -co), new ft(0, es, co), new ft(-1, 1, -1), new ft(1, 1, -1), new ft(-1, 1, 1), new ft(1, 1, 1)];
class U0 {
  constructor(n) {
    this._renderer = n, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(n, a = 0, s = 0.1, c = 100) {
    Pd = this._renderer.getRenderTarget(), Id = this._renderer.getActiveCubeFace(), Bd = this._renderer.getActiveMipmapLevel(), Fd = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const f = this._allocateTargets();
    return f.depthBuffer = true, this._sceneToCubeUV(n, s, c, f), a > 0 && this._blur(f, 0, 0, a), this._applyPMREM(f), this._cleanup(f), f;
  }
  fromEquirectangular(n, a = null) {
    return this._fromTexture(n, a);
  }
  fromCubemap(n, a = null) {
    return this._fromTexture(n, a);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = O0(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = L0(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(n) {
    this._lodMax = Math.floor(Math.log2(n)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let n = 0; n < this._lodPlanes.length; n++) this._lodPlanes[n].dispose();
  }
  _cleanup(n) {
    this._renderer.setRenderTarget(Pd, Id, Bd), this._renderer.xr.enabled = Fd, n.scissorTest = false, mu(n, 0, 0, n.width, n.height);
  }
  _fromTexture(n, a) {
    n.mapping === go || n.mapping === vo ? this._setSize(n.image.length === 0 ? 16 : n.image[0].width || n.image[0].image.width) : this._setSize(n.image.width / 4), Pd = this._renderer.getRenderTarget(), Id = this._renderer.getActiveCubeFace(), Bd = this._renderer.getActiveMipmapLevel(), Fd = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const s = a || this._allocateTargets();
    return this._textureToCubeUV(n, s), this._applyPMREM(s), this._cleanup(s), s;
  }
  _allocateTargets() {
    const n = 3 * Math.max(this._cubeSize, 112), a = 4 * this._cubeSize, s = { magFilter: da, minFilter: da, generateMipmaps: false, type: Al, format: Yi, colorSpace: So, depthBuffer: false }, c = N0(n, a, s);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== n || this._pingPongRenderTarget.height !== a) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = N0(n, a, s);
      const { _lodMax: f } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Ob(f)), this._blurMaterial = zb(f, n, a);
    }
    return c;
  }
  _compileMaterial(n) {
    const a = new Ba(this._lodPlanes[0], n);
    this._renderer.compile(a, zd);
  }
  _sceneToCubeUV(n, a, s, c) {
    const d = new Oi(90, 1, a, s), m = [1, -1, 1, 1, 1, 1], _ = [1, 1, 1, -1, -1, -1], g = this._renderer, p = g.autoClear, x = g.toneMapping;
    g.getClearColor(w0), g.toneMapping = br, g.autoClear = false;
    const M = new Rx({ name: "PMREM.Background", side: ui, depthWrite: false, depthTest: false }), T = new Ba(new Ul(), M);
    let R = false;
    const S = n.background;
    S ? S.isColor && (M.color.copy(S), n.background = null, R = true) : (M.color.copy(w0), R = true);
    for (let y = 0; y < 6; y++) {
      const P = y % 3;
      P === 0 ? (d.up.set(0, m[y], 0), d.lookAt(_[y], 0, 0)) : P === 1 ? (d.up.set(0, 0, m[y]), d.lookAt(0, _[y], 0)) : (d.up.set(0, m[y], 0), d.lookAt(0, 0, _[y]));
      const O = this._cubeSize;
      mu(c, P * O, y > 2 ? O : 0, O, O), g.setRenderTarget(c), R && g.render(T, d), g.render(n, d);
    }
    T.geometry.dispose(), T.material.dispose(), g.toneMapping = x, g.autoClear = p, n.background = S;
  }
  _textureToCubeUV(n, a) {
    const s = this._renderer, c = n.mapping === go || n.mapping === vo;
    c ? (this._cubemapMaterial === null && (this._cubemapMaterial = O0()), this._cubemapMaterial.uniforms.flipEnvMap.value = n.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = L0());
    const f = c ? this._cubemapMaterial : this._equirectMaterial, h = new Ba(this._lodPlanes[0], f), d = f.uniforms;
    d.envMap.value = n;
    const m = this._cubeSize;
    mu(a, 0, 0, 3 * m, 2 * m), s.setRenderTarget(a), s.render(h, zd);
  }
  _applyPMREM(n) {
    const a = this._renderer, s = a.autoClear;
    a.autoClear = false;
    const c = this._lodPlanes.length;
    for (let f = 1; f < c; f++) {
      const h = Math.sqrt(this._sigmas[f] * this._sigmas[f] - this._sigmas[f - 1] * this._sigmas[f - 1]), d = D0[(c - f - 1) % D0.length];
      this._blur(n, f - 1, f, h, d);
    }
    a.autoClear = s;
  }
  _blur(n, a, s, c, f) {
    const h = this._pingPongRenderTarget;
    this._halfBlur(n, h, a, s, c, "latitudinal", f), this._halfBlur(h, n, s, s, c, "longitudinal", f);
  }
  _halfBlur(n, a, s, c, f, h, d) {
    const m = this._renderer, _ = this._blurMaterial;
    h !== "latitudinal" && h !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const g = 3, p = new Ba(this._lodPlanes[c], _), x = _.uniforms, M = this._sizeLods[s] - 1, T = isFinite(f) ? Math.PI / (2 * M) : 2 * Math.PI / (2 * is - 1), R = f / T, S = isFinite(f) ? 1 + Math.floor(g * R) : is;
    S > is && console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${is}`);
    const y = [];
    let P = 0;
    for (let I = 0; I < is; ++I) {
      const q = I / R, U = Math.exp(-q * q / 2);
      y.push(U), I === 0 ? P += U : I < S && (P += 2 * U);
    }
    for (let I = 0; I < y.length; I++) y[I] = y[I] / P;
    x.envMap.value = n.texture, x.samples.value = S, x.weights.value = y, x.latitudinal.value = h === "latitudinal", d && (x.poleAxis.value = d);
    const { _lodMax: O } = this;
    x.dTheta.value = T, x.mipInt.value = O - s;
    const N = this._sizeLods[c], et = 3 * N * (c > O - fo ? c - O + fo : 0), V = 4 * (this._cubeSize - N);
    mu(a, et, V, 3 * N, 2 * N), m.setRenderTarget(a), m.render(p, zd);
  }
}
function Ob(o) {
  const n = [], a = [], s = [];
  let c = o;
  const f = o - fo + 1 + C0.length;
  for (let h = 0; h < f; h++) {
    const d = Math.pow(2, c);
    a.push(d);
    let m = 1 / d;
    h > o - fo ? m = C0[h - o + fo - 1] : h === 0 && (m = 0), s.push(m);
    const _ = 1 / (d - 2), g = -_, p = 1 + _, x = [g, g, p, g, p, p, g, g, p, p, g, p], M = 6, T = 6, R = 3, S = 2, y = 1, P = new Float32Array(R * T * M), O = new Float32Array(S * T * M), N = new Float32Array(y * T * M);
    for (let V = 0; V < M; V++) {
      const I = V % 3 * 2 / 3 - 1, q = V > 2 ? 0 : -1, U = [I, q, 0, I + 2 / 3, q, 0, I + 2 / 3, q + 1, 0, I, q, 0, I + 2 / 3, q + 1, 0, I, q + 1, 0];
      P.set(U, R * T * V), O.set(x, S * T * V);
      const C = [V, V, V, V, V, V];
      N.set(C, y * T * V);
    }
    const et = new Qi();
    et.setAttribute("position", new Sn(P, R)), et.setAttribute("uv", new Sn(O, S)), et.setAttribute("faceIndex", new Sn(N, y)), n.push(et), c > fo && c--;
  }
  return { lodPlanes: n, sizeLods: a, sigmas: s };
}
function N0(o, n, a) {
  const s = new ls(o, n, a);
  return s.texture.mapping = Nu, s.texture.name = "PMREM.cubeUv", s.scissorTest = true, s;
}
function mu(o, n, a, s, c) {
  o.viewport.set(n, a, s, c), o.scissor.set(n, a, s, c);
}
function zb(o, n, a) {
  const s = new Float32Array(is), c = new ft(0, 1, 0);
  return new Ki({ name: "SphericalGaussianBlur", defines: { n: is, CUBEUV_TEXEL_WIDTH: 1 / n, CUBEUV_TEXEL_HEIGHT: 1 / a, CUBEUV_MAX_MIP: `${o}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: s }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: c } }, vertexShader: Gp(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Tr, depthTest: false, depthWrite: false });
}
function L0() {
  return new Ki({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Gp(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Tr, depthTest: false, depthWrite: false });
}
function O0() {
  return new Ki({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Gp(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Tr, depthTest: false, depthWrite: false });
}
function Gp() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Pb(o) {
  let n = /* @__PURE__ */ new WeakMap(), a = null;
  function s(d) {
    if (d && d.isTexture) {
      const m = d.mapping, _ = m === Jd || m === $d, g = m === go || m === vo;
      if (_ || g) {
        let p = n.get(d);
        const x = p !== void 0 ? p.texture.pmremVersion : 0;
        if (d.isRenderTargetTexture && d.pmremVersion !== x) return a === null && (a = new U0(o)), p = _ ? a.fromEquirectangular(d, p) : a.fromCubemap(d, p), p.texture.pmremVersion = d.pmremVersion, n.set(d, p), p.texture;
        if (p !== void 0) return p.texture;
        {
          const M = d.image;
          return _ && M && M.height > 0 || g && M && c(M) ? (a === null && (a = new U0(o)), p = _ ? a.fromEquirectangular(d) : a.fromCubemap(d), p.texture.pmremVersion = d.pmremVersion, n.set(d, p), d.addEventListener("dispose", f), p.texture) : null;
        }
      }
    }
    return d;
  }
  function c(d) {
    let m = 0;
    const _ = 6;
    for (let g = 0; g < _; g++) d[g] !== void 0 && m++;
    return m === _;
  }
  function f(d) {
    const m = d.target;
    m.removeEventListener("dispose", f);
    const _ = n.get(m);
    _ !== void 0 && (n.delete(m), _.dispose());
  }
  function h() {
    n = /* @__PURE__ */ new WeakMap(), a !== null && (a.dispose(), a = null);
  }
  return { get: s, dispose: h };
}
function Ib(o) {
  const n = {};
  function a(s) {
    if (n[s] !== void 0) return n[s];
    let c;
    switch (s) {
      case "WEBGL_depth_texture":
        c = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        c = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        c = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        c = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        c = o.getExtension(s);
    }
    return n[s] = c, c;
  }
  return { has: function(s) {
    return a(s) !== null;
  }, init: function() {
    a("EXT_color_buffer_float"), a("WEBGL_clip_cull_distance"), a("OES_texture_float_linear"), a("EXT_color_buffer_half_float"), a("WEBGL_multisampled_render_to_texture"), a("WEBGL_render_shared_exponent");
  }, get: function(s) {
    const c = a(s);
    return c === null && El("THREE.WebGLRenderer: " + s + " extension not supported."), c;
  } };
}
function Bb(o, n, a, s) {
  const c = {}, f = /* @__PURE__ */ new WeakMap();
  function h(p) {
    const x = p.target;
    x.index !== null && n.remove(x.index);
    for (const T in x.attributes) n.remove(x.attributes[T]);
    for (const T in x.morphAttributes) {
      const R = x.morphAttributes[T];
      for (let S = 0, y = R.length; S < y; S++) n.remove(R[S]);
    }
    x.removeEventListener("dispose", h), delete c[x.id];
    const M = f.get(x);
    M && (n.remove(M), f.delete(x)), s.releaseStatesOfGeometry(x), x.isInstancedBufferGeometry === true && delete x._maxInstanceCount, a.memory.geometries--;
  }
  function d(p, x) {
    return c[x.id] === true || (x.addEventListener("dispose", h), c[x.id] = true, a.memory.geometries++), x;
  }
  function m(p) {
    const x = p.attributes;
    for (const T in x) n.update(x[T], o.ARRAY_BUFFER);
    const M = p.morphAttributes;
    for (const T in M) {
      const R = M[T];
      for (let S = 0, y = R.length; S < y; S++) n.update(R[S], o.ARRAY_BUFFER);
    }
  }
  function _(p) {
    const x = [], M = p.index, T = p.attributes.position;
    let R = 0;
    if (M !== null) {
      const P = M.array;
      R = M.version;
      for (let O = 0, N = P.length; O < N; O += 3) {
        const et = P[O + 0], V = P[O + 1], I = P[O + 2];
        x.push(et, V, V, I, I, et);
      }
    } else if (T !== void 0) {
      const P = T.array;
      R = T.version;
      for (let O = 0, N = P.length / 3 - 1; O < N; O += 3) {
        const et = O + 0, V = O + 1, I = O + 2;
        x.push(et, V, V, I, I, et);
      }
    } else return;
    const S = new (Mx(x) ? wx : Cx)(x, 1);
    S.version = R;
    const y = f.get(p);
    y && n.remove(y), f.set(p, S);
  }
  function g(p) {
    const x = f.get(p);
    if (x) {
      const M = p.index;
      M !== null && x.version < M.version && _(p);
    } else _(p);
    return f.get(p);
  }
  return { get: d, update: m, getWireframeAttribute: g };
}
function Fb(o, n, a) {
  let s;
  function c(x) {
    s = x;
  }
  let f, h;
  function d(x) {
    f = x.type, h = x.bytesPerElement;
  }
  function m(x, M) {
    o.drawElements(s, M, f, x * h), a.update(M, s, 1);
  }
  function _(x, M, T) {
    T !== 0 && (o.drawElementsInstanced(s, M, f, x * h, T), a.update(M, s, T));
  }
  function g(x, M, T) {
    if (T === 0) return;
    n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s, M, 0, f, x, 0, T);
    let S = 0;
    for (let y = 0; y < T; y++) S += M[y];
    a.update(S, s, 1);
  }
  function p(x, M, T, R) {
    if (T === 0) return;
    const S = n.get("WEBGL_multi_draw");
    if (S === null) for (let y = 0; y < x.length; y++) _(x[y] / h, M[y], R[y]);
    else {
      S.multiDrawElementsInstancedWEBGL(s, M, 0, f, x, 0, R, 0, T);
      let y = 0;
      for (let P = 0; P < T; P++) y += M[P] * R[P];
      a.update(y, s, 1);
    }
  }
  this.setMode = c, this.setIndex = d, this.render = m, this.renderInstances = _, this.renderMultiDraw = g, this.renderMultiDrawInstances = p;
}
function Hb(o) {
  const n = { geometries: 0, textures: 0 }, a = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function s(f, h, d) {
    switch (a.calls++, h) {
      case o.TRIANGLES:
        a.triangles += d * (f / 3);
        break;
      case o.LINES:
        a.lines += d * (f / 2);
        break;
      case o.LINE_STRIP:
        a.lines += d * (f - 1);
        break;
      case o.LINE_LOOP:
        a.lines += d * f;
        break;
      case o.POINTS:
        a.points += d * f;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", h);
        break;
    }
  }
  function c() {
    a.calls = 0, a.triangles = 0, a.points = 0, a.lines = 0;
  }
  return { memory: n, render: a, programs: null, autoReset: true, reset: c, update: s };
}
function Gb(o, n, a) {
  const s = /* @__PURE__ */ new WeakMap(), c = new Mn();
  function f(h, d, m) {
    const _ = h.morphTargetInfluences, g = d.morphAttributes.position || d.morphAttributes.normal || d.morphAttributes.color, p = g !== void 0 ? g.length : 0;
    let x = s.get(d);
    if (x === void 0 || x.count !== p) {
      let U = function() {
        I.dispose(), s.delete(d), d.removeEventListener("dispose", U);
      };
      x !== void 0 && x.texture.dispose();
      const M = d.morphAttributes.position !== void 0, T = d.morphAttributes.normal !== void 0, R = d.morphAttributes.color !== void 0, S = d.morphAttributes.position || [], y = d.morphAttributes.normal || [], P = d.morphAttributes.color || [];
      let O = 0;
      M === true && (O = 1), T === true && (O = 2), R === true && (O = 3);
      let N = d.attributes.position.count * O, et = 1;
      N > n.maxTextureSize && (et = Math.ceil(N / n.maxTextureSize), N = n.maxTextureSize);
      const V = new Float32Array(N * et * 4 * p), I = new Tx(V, N, et, p);
      I.type = Pa, I.needsUpdate = true;
      const q = O * 4;
      for (let C = 0; C < p; C++) {
        const B = S[C], at = y[C], ot = P[C], ht = N * et * 4 * C;
        for (let gt = 0; gt < B.count; gt++) {
          const X = gt * q;
          M === true && (c.fromBufferAttribute(B, gt), V[ht + X + 0] = c.x, V[ht + X + 1] = c.y, V[ht + X + 2] = c.z, V[ht + X + 3] = 0), T === true && (c.fromBufferAttribute(at, gt), V[ht + X + 4] = c.x, V[ht + X + 5] = c.y, V[ht + X + 6] = c.z, V[ht + X + 7] = 0), R === true && (c.fromBufferAttribute(ot, gt), V[ht + X + 8] = c.x, V[ht + X + 9] = c.y, V[ht + X + 10] = c.z, V[ht + X + 11] = ot.itemSize === 4 ? c.w : 1);
        }
      }
      x = { count: p, texture: I, size: new an(N, et) }, s.set(d, x), d.addEventListener("dispose", U);
    }
    if (h.isInstancedMesh === true && h.morphTexture !== null) m.getUniforms().setValue(o, "morphTexture", h.morphTexture, a);
    else {
      let M = 0;
      for (let R = 0; R < _.length; R++) M += _[R];
      const T = d.morphTargetsRelative ? 1 : 1 - M;
      m.getUniforms().setValue(o, "morphTargetBaseInfluence", T), m.getUniforms().setValue(o, "morphTargetInfluences", _);
    }
    m.getUniforms().setValue(o, "morphTargetsTexture", x.texture, a), m.getUniforms().setValue(o, "morphTargetsTextureSize", x.size);
  }
  return { update: f };
}
function Vb(o, n, a, s) {
  let c = /* @__PURE__ */ new WeakMap();
  function f(m) {
    const _ = s.render.frame, g = m.geometry, p = n.get(m, g);
    if (c.get(p) !== _ && (n.update(p), c.set(p, _)), m.isInstancedMesh && (m.hasEventListener("dispose", d) === false && m.addEventListener("dispose", d), c.get(m) !== _ && (a.update(m.instanceMatrix, o.ARRAY_BUFFER), m.instanceColor !== null && a.update(m.instanceColor, o.ARRAY_BUFFER), c.set(m, _))), m.isSkinnedMesh) {
      const x = m.skeleton;
      c.get(x) !== _ && (x.update(), c.set(x, _));
    }
    return p;
  }
  function h() {
    c = /* @__PURE__ */ new WeakMap();
  }
  function d(m) {
    const _ = m.target;
    _.removeEventListener("dispose", d), a.remove(_.instanceMatrix), _.instanceColor !== null && a.remove(_.instanceColor);
  }
  return { update: f, dispose: h };
}
class zx extends fi {
  constructor(n, a, s, c, f, h, d, m, _, g = ho) {
    if (g !== ho && g !== xo) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    s === void 0 && g === ho && (s = os), s === void 0 && g === xo && (s = _o), super(null, c, f, h, d, m, g, s, _), this.isDepthTexture = true, this.image = { width: n, height: a }, this.magFilter = d !== void 0 ? d : Zi, this.minFilter = m !== void 0 ? m : Zi, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(n) {
    return super.copy(n), this.compareFunction = n.compareFunction, this;
  }
  toJSON(n) {
    const a = super.toJSON(n);
    return this.compareFunction !== null && (a.compareFunction = this.compareFunction), a;
  }
}
const Px = new fi(), z0 = new zx(1, 1), Ix = new Tx(), Bx = new RE(), Fx = new Nx(), P0 = [], I0 = [], B0 = new Float32Array(16), F0 = new Float32Array(9), H0 = new Float32Array(4);
function To(o, n, a) {
  const s = o[0];
  if (s <= 0 || s > 0) return o;
  const c = n * a;
  let f = P0[c];
  if (f === void 0 && (f = new Float32Array(c), P0[c] = f), n !== 0) {
    s.toArray(f, 0);
    for (let h = 1, d = 0; h !== n; ++h) d += a, o[h].toArray(f, d);
  }
  return f;
}
function Un(o, n) {
  if (o.length !== n.length) return false;
  for (let a = 0, s = o.length; a < s; a++) if (o[a] !== n[a]) return false;
  return true;
}
function Nn(o, n) {
  for (let a = 0, s = n.length; a < s; a++) o[a] = n[a];
}
function zu(o, n) {
  let a = I0[n];
  a === void 0 && (a = new Int32Array(n), I0[n] = a);
  for (let s = 0; s !== n; ++s) a[s] = o.allocateTextureUnit();
  return a;
}
function Xb(o, n) {
  const a = this.cache;
  a[0] !== n && (o.uniform1f(this.addr, n), a[0] = n);
}
function kb(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y) && (o.uniform2f(this.addr, n.x, n.y), a[0] = n.x, a[1] = n.y);
  else {
    if (Un(a, n)) return;
    o.uniform2fv(this.addr, n), Nn(a, n);
  }
}
function jb(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y || a[2] !== n.z) && (o.uniform3f(this.addr, n.x, n.y, n.z), a[0] = n.x, a[1] = n.y, a[2] = n.z);
  else if (n.r !== void 0) (a[0] !== n.r || a[1] !== n.g || a[2] !== n.b) && (o.uniform3f(this.addr, n.r, n.g, n.b), a[0] = n.r, a[1] = n.g, a[2] = n.b);
  else {
    if (Un(a, n)) return;
    o.uniform3fv(this.addr, n), Nn(a, n);
  }
}
function qb(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y || a[2] !== n.z || a[3] !== n.w) && (o.uniform4f(this.addr, n.x, n.y, n.z, n.w), a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = n.w);
  else {
    if (Un(a, n)) return;
    o.uniform4fv(this.addr, n), Nn(a, n);
  }
}
function Yb(o, n) {
  const a = this.cache, s = n.elements;
  if (s === void 0) {
    if (Un(a, n)) return;
    o.uniformMatrix2fv(this.addr, false, n), Nn(a, n);
  } else {
    if (Un(a, s)) return;
    H0.set(s), o.uniformMatrix2fv(this.addr, false, H0), Nn(a, s);
  }
}
function Wb(o, n) {
  const a = this.cache, s = n.elements;
  if (s === void 0) {
    if (Un(a, n)) return;
    o.uniformMatrix3fv(this.addr, false, n), Nn(a, n);
  } else {
    if (Un(a, s)) return;
    F0.set(s), o.uniformMatrix3fv(this.addr, false, F0), Nn(a, s);
  }
}
function Zb(o, n) {
  const a = this.cache, s = n.elements;
  if (s === void 0) {
    if (Un(a, n)) return;
    o.uniformMatrix4fv(this.addr, false, n), Nn(a, n);
  } else {
    if (Un(a, s)) return;
    B0.set(s), o.uniformMatrix4fv(this.addr, false, B0), Nn(a, s);
  }
}
function Kb(o, n) {
  const a = this.cache;
  a[0] !== n && (o.uniform1i(this.addr, n), a[0] = n);
}
function Qb(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y) && (o.uniform2i(this.addr, n.x, n.y), a[0] = n.x, a[1] = n.y);
  else {
    if (Un(a, n)) return;
    o.uniform2iv(this.addr, n), Nn(a, n);
  }
}
function Jb(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y || a[2] !== n.z) && (o.uniform3i(this.addr, n.x, n.y, n.z), a[0] = n.x, a[1] = n.y, a[2] = n.z);
  else {
    if (Un(a, n)) return;
    o.uniform3iv(this.addr, n), Nn(a, n);
  }
}
function $b(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y || a[2] !== n.z || a[3] !== n.w) && (o.uniform4i(this.addr, n.x, n.y, n.z, n.w), a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = n.w);
  else {
    if (Un(a, n)) return;
    o.uniform4iv(this.addr, n), Nn(a, n);
  }
}
function tA(o, n) {
  const a = this.cache;
  a[0] !== n && (o.uniform1ui(this.addr, n), a[0] = n);
}
function eA(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y) && (o.uniform2ui(this.addr, n.x, n.y), a[0] = n.x, a[1] = n.y);
  else {
    if (Un(a, n)) return;
    o.uniform2uiv(this.addr, n), Nn(a, n);
  }
}
function nA(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y || a[2] !== n.z) && (o.uniform3ui(this.addr, n.x, n.y, n.z), a[0] = n.x, a[1] = n.y, a[2] = n.z);
  else {
    if (Un(a, n)) return;
    o.uniform3uiv(this.addr, n), Nn(a, n);
  }
}
function iA(o, n) {
  const a = this.cache;
  if (n.x !== void 0) (a[0] !== n.x || a[1] !== n.y || a[2] !== n.z || a[3] !== n.w) && (o.uniform4ui(this.addr, n.x, n.y, n.z, n.w), a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = n.w);
  else {
    if (Un(a, n)) return;
    o.uniform4uiv(this.addr, n), Nn(a, n);
  }
}
function aA(o, n, a) {
  const s = this.cache, c = a.allocateTextureUnit();
  s[0] !== c && (o.uniform1i(this.addr, c), s[0] = c);
  let f;
  this.type === o.SAMPLER_2D_SHADOW ? (z0.compareFunction = Sx, f = z0) : f = Px, a.setTexture2D(n || f, c);
}
function rA(o, n, a) {
  const s = this.cache, c = a.allocateTextureUnit();
  s[0] !== c && (o.uniform1i(this.addr, c), s[0] = c), a.setTexture3D(n || Bx, c);
}
function sA(o, n, a) {
  const s = this.cache, c = a.allocateTextureUnit();
  s[0] !== c && (o.uniform1i(this.addr, c), s[0] = c), a.setTextureCube(n || Fx, c);
}
function oA(o, n, a) {
  const s = this.cache, c = a.allocateTextureUnit();
  s[0] !== c && (o.uniform1i(this.addr, c), s[0] = c), a.setTexture2DArray(n || Ix, c);
}
function lA(o) {
  switch (o) {
    case 5126:
      return Xb;
    case 35664:
      return kb;
    case 35665:
      return jb;
    case 35666:
      return qb;
    case 35674:
      return Yb;
    case 35675:
      return Wb;
    case 35676:
      return Zb;
    case 5124:
    case 35670:
      return Kb;
    case 35667:
    case 35671:
      return Qb;
    case 35668:
    case 35672:
      return Jb;
    case 35669:
    case 35673:
      return $b;
    case 5125:
      return tA;
    case 36294:
      return eA;
    case 36295:
      return nA;
    case 36296:
      return iA;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return aA;
    case 35679:
    case 36299:
    case 36307:
      return rA;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return sA;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return oA;
  }
}
function cA(o, n) {
  o.uniform1fv(this.addr, n);
}
function uA(o, n) {
  const a = To(n, this.size, 2);
  o.uniform2fv(this.addr, a);
}
function fA(o, n) {
  const a = To(n, this.size, 3);
  o.uniform3fv(this.addr, a);
}
function hA(o, n) {
  const a = To(n, this.size, 4);
  o.uniform4fv(this.addr, a);
}
function dA(o, n) {
  const a = To(n, this.size, 4);
  o.uniformMatrix2fv(this.addr, false, a);
}
function pA(o, n) {
  const a = To(n, this.size, 9);
  o.uniformMatrix3fv(this.addr, false, a);
}
function mA(o, n) {
  const a = To(n, this.size, 16);
  o.uniformMatrix4fv(this.addr, false, a);
}
function gA(o, n) {
  o.uniform1iv(this.addr, n);
}
function vA(o, n) {
  o.uniform2iv(this.addr, n);
}
function _A(o, n) {
  o.uniform3iv(this.addr, n);
}
function xA(o, n) {
  o.uniform4iv(this.addr, n);
}
function yA(o, n) {
  o.uniform1uiv(this.addr, n);
}
function SA(o, n) {
  o.uniform2uiv(this.addr, n);
}
function MA(o, n) {
  o.uniform3uiv(this.addr, n);
}
function EA(o, n) {
  o.uniform4uiv(this.addr, n);
}
function TA(o, n, a) {
  const s = this.cache, c = n.length, f = zu(a, c);
  Un(s, f) || (o.uniform1iv(this.addr, f), Nn(s, f));
  for (let h = 0; h !== c; ++h) a.setTexture2D(n[h] || Px, f[h]);
}
function bA(o, n, a) {
  const s = this.cache, c = n.length, f = zu(a, c);
  Un(s, f) || (o.uniform1iv(this.addr, f), Nn(s, f));
  for (let h = 0; h !== c; ++h) a.setTexture3D(n[h] || Bx, f[h]);
}
function AA(o, n, a) {
  const s = this.cache, c = n.length, f = zu(a, c);
  Un(s, f) || (o.uniform1iv(this.addr, f), Nn(s, f));
  for (let h = 0; h !== c; ++h) a.setTextureCube(n[h] || Fx, f[h]);
}
function RA(o, n, a) {
  const s = this.cache, c = n.length, f = zu(a, c);
  Un(s, f) || (o.uniform1iv(this.addr, f), Nn(s, f));
  for (let h = 0; h !== c; ++h) a.setTexture2DArray(n[h] || Ix, f[h]);
}
function CA(o) {
  switch (o) {
    case 5126:
      return cA;
    case 35664:
      return uA;
    case 35665:
      return fA;
    case 35666:
      return hA;
    case 35674:
      return dA;
    case 35675:
      return pA;
    case 35676:
      return mA;
    case 5124:
    case 35670:
      return gA;
    case 35667:
    case 35671:
      return vA;
    case 35668:
    case 35672:
      return _A;
    case 35669:
    case 35673:
      return xA;
    case 5125:
      return yA;
    case 36294:
      return SA;
    case 36295:
      return MA;
    case 36296:
      return EA;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return TA;
    case 35679:
    case 36299:
    case 36307:
      return bA;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return AA;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return RA;
  }
}
class wA {
  constructor(n, a, s) {
    this.id = n, this.addr = s, this.cache = [], this.type = a.type, this.setValue = lA(a.type);
  }
}
class DA {
  constructor(n, a, s) {
    this.id = n, this.addr = s, this.cache = [], this.type = a.type, this.size = a.size, this.setValue = CA(a.type);
  }
}
class UA {
  constructor(n) {
    this.id = n, this.seq = [], this.map = {};
  }
  setValue(n, a, s) {
    const c = this.seq;
    for (let f = 0, h = c.length; f !== h; ++f) {
      const d = c[f];
      d.setValue(n, a[d.id], s);
    }
  }
}
const Hd = /(\w+)(\])?(\[|\.)?/g;
function G0(o, n) {
  o.seq.push(n), o.map[n.id] = n;
}
function NA(o, n, a) {
  const s = o.name, c = s.length;
  for (Hd.lastIndex = 0; ; ) {
    const f = Hd.exec(s), h = Hd.lastIndex;
    let d = f[1];
    const m = f[2] === "]", _ = f[3];
    if (m && (d = d | 0), _ === void 0 || _ === "[" && h + 2 === c) {
      G0(a, _ === void 0 ? new wA(d, o, n) : new DA(d, o, n));
      break;
    } else {
      let p = a.map[d];
      p === void 0 && (p = new UA(d), G0(a, p)), a = p;
    }
  }
}
class Ru {
  constructor(n, a) {
    this.seq = [], this.map = {};
    const s = n.getProgramParameter(a, n.ACTIVE_UNIFORMS);
    for (let c = 0; c < s; ++c) {
      const f = n.getActiveUniform(a, c), h = n.getUniformLocation(a, f.name);
      NA(f, h, this);
    }
  }
  setValue(n, a, s, c) {
    const f = this.map[a];
    f !== void 0 && f.setValue(n, s, c);
  }
  setOptional(n, a, s) {
    const c = a[s];
    c !== void 0 && this.setValue(n, s, c);
  }
  static upload(n, a, s, c) {
    for (let f = 0, h = a.length; f !== h; ++f) {
      const d = a[f], m = s[d.id];
      m.needsUpdate !== false && d.setValue(n, m.value, c);
    }
  }
  static seqWithValue(n, a) {
    const s = [];
    for (let c = 0, f = n.length; c !== f; ++c) {
      const h = n[c];
      h.id in a && s.push(h);
    }
    return s;
  }
}
function V0(o, n, a) {
  const s = o.createShader(n);
  return o.shaderSource(s, a), o.compileShader(s), s;
}
const LA = 37297;
let OA = 0;
function zA(o, n) {
  const a = o.split(`
`), s = [], c = Math.max(n - 6, 0), f = Math.min(n + 6, a.length);
  for (let h = c; h < f; h++) {
    const d = h + 1;
    s.push(`${d === n ? ">" : " "} ${d}: ${a[h]}`);
  }
  return s.join(`
`);
}
const X0 = new Ae();
function PA(o) {
  Ve._getMatrix(X0, Ve.workingColorSpace, o);
  const n = `mat3( ${X0.elements.map((a) => a.toFixed(4))} )`;
  switch (Ve.getTransfer(o)) {
    case Lu:
      return [n, "LinearTransferOETF"];
    case en:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", o), [n, "LinearTransferOETF"];
  }
}
function k0(o, n, a) {
  const s = o.getShaderParameter(n, o.COMPILE_STATUS), c = o.getShaderInfoLog(n).trim();
  if (s && c === "") return "";
  const f = /ERROR: 0:(\d+)/.exec(c);
  if (f) {
    const h = parseInt(f[1]);
    return a.toUpperCase() + `

` + c + `

` + zA(o.getShaderSource(n), h);
  } else return c;
}
function IA(o, n) {
  const a = PA(n);
  return [`vec4 ${o}( vec4 value ) {`, `	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`, "}"].join(`
`);
}
function BA(o, n) {
  let a;
  switch (n) {
    case $M:
      a = "Linear";
      break;
    case tE:
      a = "Reinhard";
      break;
    case eE:
      a = "Cineon";
      break;
    case nE:
      a = "ACESFilmic";
      break;
    case aE:
      a = "AgX";
      break;
    case rE:
      a = "Neutral";
      break;
    case iE:
      a = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", n), a = "Linear";
  }
  return "vec3 " + o + "( vec3 color ) { return " + a + "ToneMapping( color ); }";
}
const gu = new ft();
function FA() {
  Ve.getLuminanceCoefficients(gu);
  const o = gu.x.toFixed(4), n = gu.y.toFixed(4), a = gu.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${o}, ${n}, ${a} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function HA(o) {
  return [o.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", o.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Tl).join(`
`);
}
function GA(o) {
  const n = [];
  for (const a in o) {
    const s = o[a];
    s !== false && n.push("#define " + a + " " + s);
  }
  return n.join(`
`);
}
function VA(o, n) {
  const a = {}, s = o.getProgramParameter(n, o.ACTIVE_ATTRIBUTES);
  for (let c = 0; c < s; c++) {
    const f = o.getActiveAttrib(n, c), h = f.name;
    let d = 1;
    f.type === o.FLOAT_MAT2 && (d = 2), f.type === o.FLOAT_MAT3 && (d = 3), f.type === o.FLOAT_MAT4 && (d = 4), a[h] = { type: f.type, location: o.getAttribLocation(n, h), locationSize: d };
  }
  return a;
}
function Tl(o) {
  return o !== "";
}
function j0(o, n) {
  const a = n.numSpotLightShadows + n.numSpotLightMaps - n.numSpotLightShadowsWithMaps;
  return o.replace(/NUM_DIR_LIGHTS/g, n.numDirLights).replace(/NUM_SPOT_LIGHTS/g, n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, a).replace(/NUM_RECT_AREA_LIGHTS/g, n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, n.numPointLights).replace(/NUM_HEMI_LIGHTS/g, n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, n.numPointLightShadows);
}
function q0(o, n) {
  return o.replace(/NUM_CLIPPING_PLANES/g, n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, n.numClippingPlanes - n.numClipIntersection);
}
const XA = /^[ \t]*#include +<([\w\d./]+)>/gm;
function wp(o) {
  return o.replace(XA, jA);
}
const kA = /* @__PURE__ */ new Map();
function jA(o, n) {
  let a = Re[n];
  if (a === void 0) {
    const s = kA.get(n);
    if (s !== void 0) a = Re[s], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', n, s);
    else throw new Error("Can not resolve #include <" + n + ">");
  }
  return wp(a);
}
const qA = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Y0(o) {
  return o.replace(qA, YA);
}
function YA(o, n, a, s) {
  let c = "";
  for (let f = parseInt(n); f < parseInt(a); f++) c += s.replace(/\[\s*i\s*\]/g, "[ " + f + " ]").replace(/UNROLLED_LOOP_INDEX/g, f);
  return c;
}
function W0(o) {
  let n = `precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;
  return o.precision === "highp" ? n += `
#define HIGH_PRECISION` : o.precision === "mediump" ? n += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (n += `
#define LOW_PRECISION`), n;
}
function WA(o) {
  let n = "SHADOWMAP_TYPE_BASIC";
  return o.shadowMapType === lx ? n = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === NM ? n = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === Oa && (n = "SHADOWMAP_TYPE_VSM"), n;
}
function ZA(o) {
  let n = "ENVMAP_TYPE_CUBE";
  if (o.envMap) switch (o.envMapMode) {
    case go:
    case vo:
      n = "ENVMAP_TYPE_CUBE";
      break;
    case Nu:
      n = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return n;
}
function KA(o) {
  let n = "ENVMAP_MODE_REFLECTION";
  return o.envMap && o.envMapMode === vo && (n = "ENVMAP_MODE_REFRACTION"), n;
}
function QA(o) {
  let n = "ENVMAP_BLENDING_NONE";
  if (o.envMap) switch (o.combine) {
    case cx:
      n = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case QM:
      n = "ENVMAP_BLENDING_MIX";
      break;
    case JM:
      n = "ENVMAP_BLENDING_ADD";
      break;
  }
  return n;
}
function JA(o) {
  const n = o.envMapCubeUVHeight;
  if (n === null) return null;
  const a = Math.log2(n) - 2, s = 1 / n;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, a), 112)), texelHeight: s, maxMip: a };
}
function $A(o, n, a, s) {
  const c = o.getContext(), f = a.defines;
  let h = a.vertexShader, d = a.fragmentShader;
  const m = WA(a), _ = ZA(a), g = KA(a), p = QA(a), x = JA(a), M = HA(a), T = GA(f), R = c.createProgram();
  let S, y, P = a.glslVersion ? "#version " + a.glslVersion + `
` : "";
  a.isRawShaderMaterial ? (S = ["#define SHADER_TYPE " + a.shaderType, "#define SHADER_NAME " + a.shaderName, T].filter(Tl).join(`
`), S.length > 0 && (S += `
`), y = ["#define SHADER_TYPE " + a.shaderType, "#define SHADER_NAME " + a.shaderName, T].filter(Tl).join(`
`), y.length > 0 && (y += `
`)) : (S = [W0(a), "#define SHADER_TYPE " + a.shaderType, "#define SHADER_NAME " + a.shaderName, T, a.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", a.batching ? "#define USE_BATCHING" : "", a.batchingColor ? "#define USE_BATCHING_COLOR" : "", a.instancing ? "#define USE_INSTANCING" : "", a.instancingColor ? "#define USE_INSTANCING_COLOR" : "", a.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + g : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", a.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", a.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.anisotropy ? "#define USE_ANISOTROPY" : "", a.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", a.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", a.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.alphaHash ? "#define USE_ALPHAHASH" : "", a.transmission ? "#define USE_TRANSMISSION" : "", a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", a.thicknessMap ? "#define USE_THICKNESSMAP" : "", a.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", a.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", a.mapUv ? "#define MAP_UV " + a.mapUv : "", a.alphaMapUv ? "#define ALPHAMAP_UV " + a.alphaMapUv : "", a.lightMapUv ? "#define LIGHTMAP_UV " + a.lightMapUv : "", a.aoMapUv ? "#define AOMAP_UV " + a.aoMapUv : "", a.emissiveMapUv ? "#define EMISSIVEMAP_UV " + a.emissiveMapUv : "", a.bumpMapUv ? "#define BUMPMAP_UV " + a.bumpMapUv : "", a.normalMapUv ? "#define NORMALMAP_UV " + a.normalMapUv : "", a.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + a.displacementMapUv : "", a.metalnessMapUv ? "#define METALNESSMAP_UV " + a.metalnessMapUv : "", a.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + a.roughnessMapUv : "", a.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + a.anisotropyMapUv : "", a.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + a.clearcoatMapUv : "", a.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + a.clearcoatNormalMapUv : "", a.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + a.clearcoatRoughnessMapUv : "", a.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + a.iridescenceMapUv : "", a.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + a.iridescenceThicknessMapUv : "", a.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + a.sheenColorMapUv : "", a.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + a.sheenRoughnessMapUv : "", a.specularMapUv ? "#define SPECULARMAP_UV " + a.specularMapUv : "", a.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + a.specularColorMapUv : "", a.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + a.specularIntensityMapUv : "", a.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + a.transmissionMapUv : "", a.thicknessMapUv ? "#define THICKNESSMAP_UV " + a.thicknessMapUv : "", a.vertexTangents && a.flatShading === false ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", a.vertexUv1s ? "#define USE_UV1" : "", a.vertexUv2s ? "#define USE_UV2" : "", a.vertexUv3s ? "#define USE_UV3" : "", a.pointsUvs ? "#define USE_POINTS_UV" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && a.flatShading === false ? "#define USE_MORPHNORMALS" : "", a.morphColors ? "#define USE_MORPHCOLORS" : "", a.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + a.morphTextureStride : "", a.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + a.morphTargetsCount : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + m : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Tl).join(`
`), y = [W0(a), "#define SHADER_TYPE " + a.shaderType, "#define SHADER_NAME " + a.shaderName, T, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + _ : "", a.envMap ? "#define " + g : "", a.envMap ? "#define " + p : "", x ? "#define CUBEUV_TEXEL_WIDTH " + x.texelWidth : "", x ? "#define CUBEUV_TEXEL_HEIGHT " + x.texelHeight : "", x ? "#define CUBEUV_MAX_MIP " + x.maxMip + ".0" : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", a.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.anisotropy ? "#define USE_ANISOTROPY" : "", a.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", a.clearcoat ? "#define USE_CLEARCOAT" : "", a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.dispersion ? "#define USE_DISPERSION" : "", a.iridescence ? "#define USE_IRIDESCENCE" : "", a.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", a.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", a.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.alphaTest ? "#define USE_ALPHATEST" : "", a.alphaHash ? "#define USE_ALPHAHASH" : "", a.sheen ? "#define USE_SHEEN" : "", a.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", a.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", a.transmission ? "#define USE_TRANSMISSION" : "", a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", a.thicknessMap ? "#define USE_THICKNESSMAP" : "", a.vertexTangents && a.flatShading === false ? "#define USE_TANGENT" : "", a.vertexColors || a.instancingColor || a.batchingColor ? "#define USE_COLOR" : "", a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", a.vertexUv1s ? "#define USE_UV1" : "", a.vertexUv2s ? "#define USE_UV2" : "", a.vertexUv3s ? "#define USE_UV3" : "", a.pointsUvs ? "#define USE_POINTS_UV" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + m : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", a.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", a.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", a.toneMapping !== br ? "#define TONE_MAPPING" : "", a.toneMapping !== br ? Re.tonemapping_pars_fragment : "", a.toneMapping !== br ? BA("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.opaque ? "#define OPAQUE" : "", Re.colorspace_pars_fragment, IA("linearToOutputTexel", a.outputColorSpace), FA(), a.useDepthPacking ? "#define DEPTH_PACKING " + a.depthPacking : "", `
`].filter(Tl).join(`
`)), h = wp(h), h = j0(h, a), h = q0(h, a), d = wp(d), d = j0(d, a), d = q0(d, a), h = Y0(h), d = Y0(d), a.isRawShaderMaterial !== true && (P = `#version 300 es
`, S = [M, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + S, y = ["#define varying in", a.glslVersion === o0 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", a.glslVersion === o0 ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + y);
  const O = P + S + h, N = P + y + d, et = V0(c, c.VERTEX_SHADER, O), V = V0(c, c.FRAGMENT_SHADER, N);
  c.attachShader(R, et), c.attachShader(R, V), a.index0AttributeName !== void 0 ? c.bindAttribLocation(R, 0, a.index0AttributeName) : a.morphTargets === true && c.bindAttribLocation(R, 0, "position"), c.linkProgram(R);
  function I(B) {
    if (o.debug.checkShaderErrors) {
      const at = c.getProgramInfoLog(R).trim(), ot = c.getShaderInfoLog(et).trim(), ht = c.getShaderInfoLog(V).trim();
      let gt = true, X = true;
      if (c.getProgramParameter(R, c.LINK_STATUS) === false) if (gt = false, typeof o.debug.onShaderError == "function") o.debug.onShaderError(c, R, et, V);
      else {
        const rt = k0(c, et, "vertex"), Z = k0(c, V, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + c.getError() + " - VALIDATE_STATUS " + c.getProgramParameter(R, c.VALIDATE_STATUS) + `

Material Name: ` + B.name + `
Material Type: ` + B.type + `

Program Info Log: ` + at + `
` + rt + `
` + Z);
      }
      else at !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", at) : (ot === "" || ht === "") && (X = false);
      X && (B.diagnostics = { runnable: gt, programLog: at, vertexShader: { log: ot, prefix: S }, fragmentShader: { log: ht, prefix: y } });
    }
    c.deleteShader(et), c.deleteShader(V), q = new Ru(c, R), U = VA(c, R);
  }
  let q;
  this.getUniforms = function() {
    return q === void 0 && I(this), q;
  };
  let U;
  this.getAttributes = function() {
    return U === void 0 && I(this), U;
  };
  let C = a.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return C === false && (C = c.getProgramParameter(R, LA)), C;
  }, this.destroy = function() {
    s.releaseStatesOfProgram(this), c.deleteProgram(R), this.program = void 0;
  }, this.type = a.shaderType, this.name = a.shaderName, this.id = OA++, this.cacheKey = n, this.usedTimes = 1, this.program = R, this.vertexShader = et, this.fragmentShader = V, this;
}
let tR = 0;
class eR {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(n) {
    const a = n.vertexShader, s = n.fragmentShader, c = this._getShaderStage(a), f = this._getShaderStage(s), h = this._getShaderCacheForMaterial(n);
    return h.has(c) === false && (h.add(c), c.usedTimes++), h.has(f) === false && (h.add(f), f.usedTimes++), this;
  }
  remove(n) {
    const a = this.materialCache.get(n);
    for (const s of a) s.usedTimes--, s.usedTimes === 0 && this.shaderCache.delete(s.code);
    return this.materialCache.delete(n), this;
  }
  getVertexShaderID(n) {
    return this._getShaderStage(n.vertexShader).id;
  }
  getFragmentShaderID(n) {
    return this._getShaderStage(n.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(n) {
    const a = this.materialCache;
    let s = a.get(n);
    return s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(n, s)), s;
  }
  _getShaderStage(n) {
    const a = this.shaderCache;
    let s = a.get(n);
    return s === void 0 && (s = new nR(n), a.set(n, s)), s;
  }
}
class nR {
  constructor(n) {
    this.id = tR++, this.code = n, this.usedTimes = 0;
  }
}
function iR(o, n, a, s, c, f, h) {
  const d = new bx(), m = new eR(), _ = /* @__PURE__ */ new Set(), g = [], p = c.logarithmicDepthBuffer, x = c.vertexTextures;
  let M = c.precision;
  const T = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function R(U) {
    return _.add(U), U === 0 ? "uv" : `uv${U}`;
  }
  function S(U, C, B, at, ot) {
    const ht = at.fog, gt = ot.geometry, X = U.isMeshStandardMaterial ? at.environment : null, rt = (U.isMeshStandardMaterial ? a : n).get(U.envMap || X), Z = rt && rt.mapping === Nu ? rt.image.height : null, St = T[U.type];
    U.precision !== null && (M = c.getMaxPrecision(U.precision), M !== U.precision && console.warn("THREE.WebGLProgram.getParameters:", U.precision, "not supported, using", M, "instead."));
    const bt = gt.morphAttributes.position || gt.morphAttributes.normal || gt.morphAttributes.color, Vt = bt !== void 0 ? bt.length : 0;
    let ce = 0;
    gt.morphAttributes.position !== void 0 && (ce = 1), gt.morphAttributes.normal !== void 0 && (ce = 2), gt.morphAttributes.color !== void 0 && (ce = 3);
    let pt, A, k, H;
    if (St) {
      const De = ha[St];
      pt = De.vertexShader, A = De.fragmentShader;
    } else pt = U.vertexShader, A = U.fragmentShader, m.update(U), k = m.getVertexShaderID(U), H = m.getFragmentShaderID(U);
    const W = o.getRenderTarget(), mt = o.state.buffers.depth.getReversed(), _t = ot.isInstancedMesh === true, At = ot.isBatchedMesh === true, Ct = !!U.map, Ut = !!U.matcap, re = !!rt, j = !!U.aoMap, Fe = !!U.lightMap, le = !!U.bumpMap, ae = !!U.normalMap, Ft = !!U.displacementMap, Se = !!U.emissiveMap, ne = !!U.metalnessMap, L = !!U.roughnessMap, b = U.anisotropy > 0, it = U.clearcoat > 0, xt = U.dispersion > 0, Rt = U.iridescence > 0, Et = U.sheen > 0, qt = U.transmission > 0, vt = b && !!U.anisotropyMap, Ht = it && !!U.clearcoatMap, Te = it && !!U.clearcoatNormalMap, Nt = it && !!U.clearcoatRoughnessMap, Yt = Rt && !!U.iridescenceMap, te = Rt && !!U.iridescenceThicknessMap, ue = Et && !!U.sheenColorMap, jt = Et && !!U.sheenRoughnessMap, ye = !!U.specularMap, xe = !!U.specularColorMap, we = !!U.specularIntensityMap, F = qt && !!U.transmissionMap, wt = qt && !!U.thicknessMap, ut = !!U.gradientMap, Tt = !!U.alphaMap, zt = U.alphaTest > 0, Gt = !!U.alphaHash, fe = !!U.extensions;
    let $e = br;
    U.toneMapped && (W === null || W.isXRRenderTarget === true) && ($e = o.toneMapping);
    const cn = { shaderID: St, shaderType: U.type, shaderName: U.name, vertexShader: pt, fragmentShader: A, defines: U.defines, customVertexShaderID: k, customFragmentShaderID: H, isRawShaderMaterial: U.isRawShaderMaterial === true, glslVersion: U.glslVersion, precision: M, batching: At, batchingColor: At && ot._colorsTexture !== null, instancing: _t, instancingColor: _t && ot.instanceColor !== null, instancingMorph: _t && ot.morphTexture !== null, supportsVertexTextures: x, outputColorSpace: W === null ? o.outputColorSpace : W.isXRRenderTarget === true ? W.texture.colorSpace : So, alphaToCoverage: !!U.alphaToCoverage, map: Ct, matcap: Ut, envMap: re, envMapMode: re && rt.mapping, envMapCubeUVHeight: Z, aoMap: j, lightMap: Fe, bumpMap: le, normalMap: ae, displacementMap: x && Ft, emissiveMap: Se, normalMapObjectSpace: ae && U.normalMapType === uE, normalMapTangentSpace: ae && U.normalMapType === cE, metalnessMap: ne, roughnessMap: L, anisotropy: b, anisotropyMap: vt, clearcoat: it, clearcoatMap: Ht, clearcoatNormalMap: Te, clearcoatRoughnessMap: Nt, dispersion: xt, iridescence: Rt, iridescenceMap: Yt, iridescenceThicknessMap: te, sheen: Et, sheenColorMap: ue, sheenRoughnessMap: jt, specularMap: ye, specularColorMap: xe, specularIntensityMap: we, transmission: qt, transmissionMap: F, thicknessMap: wt, gradientMap: ut, opaque: U.transparent === false && U.blending === ss && U.alphaToCoverage === false, alphaMap: Tt, alphaTest: zt, alphaHash: Gt, combine: U.combine, mapUv: Ct && R(U.map.channel), aoMapUv: j && R(U.aoMap.channel), lightMapUv: Fe && R(U.lightMap.channel), bumpMapUv: le && R(U.bumpMap.channel), normalMapUv: ae && R(U.normalMap.channel), displacementMapUv: Ft && R(U.displacementMap.channel), emissiveMapUv: Se && R(U.emissiveMap.channel), metalnessMapUv: ne && R(U.metalnessMap.channel), roughnessMapUv: L && R(U.roughnessMap.channel), anisotropyMapUv: vt && R(U.anisotropyMap.channel), clearcoatMapUv: Ht && R(U.clearcoatMap.channel), clearcoatNormalMapUv: Te && R(U.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Nt && R(U.clearcoatRoughnessMap.channel), iridescenceMapUv: Yt && R(U.iridescenceMap.channel), iridescenceThicknessMapUv: te && R(U.iridescenceThicknessMap.channel), sheenColorMapUv: ue && R(U.sheenColorMap.channel), sheenRoughnessMapUv: jt && R(U.sheenRoughnessMap.channel), specularMapUv: ye && R(U.specularMap.channel), specularColorMapUv: xe && R(U.specularColorMap.channel), specularIntensityMapUv: we && R(U.specularIntensityMap.channel), transmissionMapUv: F && R(U.transmissionMap.channel), thicknessMapUv: wt && R(U.thicknessMap.channel), alphaMapUv: Tt && R(U.alphaMap.channel), vertexTangents: !!gt.attributes.tangent && (ae || b), vertexColors: U.vertexColors, vertexAlphas: U.vertexColors === true && !!gt.attributes.color && gt.attributes.color.itemSize === 4, pointsUvs: ot.isPoints === true && !!gt.attributes.uv && (Ct || Tt), fog: !!ht, useFog: U.fog === true, fogExp2: !!ht && ht.isFogExp2, flatShading: U.flatShading === true, sizeAttenuation: U.sizeAttenuation === true, logarithmicDepthBuffer: p, reverseDepthBuffer: mt, skinning: ot.isSkinnedMesh === true, morphTargets: gt.morphAttributes.position !== void 0, morphNormals: gt.morphAttributes.normal !== void 0, morphColors: gt.morphAttributes.color !== void 0, morphTargetsCount: Vt, morphTextureStride: ce, numDirLights: C.directional.length, numPointLights: C.point.length, numSpotLights: C.spot.length, numSpotLightMaps: C.spotLightMap.length, numRectAreaLights: C.rectArea.length, numHemiLights: C.hemi.length, numDirLightShadows: C.directionalShadowMap.length, numPointLightShadows: C.pointShadowMap.length, numSpotLightShadows: C.spotShadowMap.length, numSpotLightShadowsWithMaps: C.numSpotLightShadowsWithMaps, numLightProbes: C.numLightProbes, numClippingPlanes: h.numPlanes, numClipIntersection: h.numIntersection, dithering: U.dithering, shadowMapEnabled: o.shadowMap.enabled && B.length > 0, shadowMapType: o.shadowMap.type, toneMapping: $e, decodeVideoTexture: Ct && U.map.isVideoTexture === true && Ve.getTransfer(U.map.colorSpace) === en, decodeVideoTextureEmissive: Se && U.emissiveMap.isVideoTexture === true && Ve.getTransfer(U.emissiveMap.colorSpace) === en, premultipliedAlpha: U.premultipliedAlpha, doubleSided: U.side === za, flipSided: U.side === ui, useDepthPacking: U.depthPacking >= 0, depthPacking: U.depthPacking || 0, index0AttributeName: U.index0AttributeName, extensionClipCullDistance: fe && U.extensions.clipCullDistance === true && s.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (fe && U.extensions.multiDraw === true || At) && s.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: s.has("KHR_parallel_shader_compile"), customProgramCacheKey: U.customProgramCacheKey() };
    return cn.vertexUv1s = _.has(1), cn.vertexUv2s = _.has(2), cn.vertexUv3s = _.has(3), _.clear(), cn;
  }
  function y(U) {
    const C = [];
    if (U.shaderID ? C.push(U.shaderID) : (C.push(U.customVertexShaderID), C.push(U.customFragmentShaderID)), U.defines !== void 0) for (const B in U.defines) C.push(B), C.push(U.defines[B]);
    return U.isRawShaderMaterial === false && (P(C, U), O(C, U), C.push(o.outputColorSpace)), C.push(U.customProgramCacheKey), C.join();
  }
  function P(U, C) {
    U.push(C.precision), U.push(C.outputColorSpace), U.push(C.envMapMode), U.push(C.envMapCubeUVHeight), U.push(C.mapUv), U.push(C.alphaMapUv), U.push(C.lightMapUv), U.push(C.aoMapUv), U.push(C.bumpMapUv), U.push(C.normalMapUv), U.push(C.displacementMapUv), U.push(C.emissiveMapUv), U.push(C.metalnessMapUv), U.push(C.roughnessMapUv), U.push(C.anisotropyMapUv), U.push(C.clearcoatMapUv), U.push(C.clearcoatNormalMapUv), U.push(C.clearcoatRoughnessMapUv), U.push(C.iridescenceMapUv), U.push(C.iridescenceThicknessMapUv), U.push(C.sheenColorMapUv), U.push(C.sheenRoughnessMapUv), U.push(C.specularMapUv), U.push(C.specularColorMapUv), U.push(C.specularIntensityMapUv), U.push(C.transmissionMapUv), U.push(C.thicknessMapUv), U.push(C.combine), U.push(C.fogExp2), U.push(C.sizeAttenuation), U.push(C.morphTargetsCount), U.push(C.morphAttributeCount), U.push(C.numDirLights), U.push(C.numPointLights), U.push(C.numSpotLights), U.push(C.numSpotLightMaps), U.push(C.numHemiLights), U.push(C.numRectAreaLights), U.push(C.numDirLightShadows), U.push(C.numPointLightShadows), U.push(C.numSpotLightShadows), U.push(C.numSpotLightShadowsWithMaps), U.push(C.numLightProbes), U.push(C.shadowMapType), U.push(C.toneMapping), U.push(C.numClippingPlanes), U.push(C.numClipIntersection), U.push(C.depthPacking);
  }
  function O(U, C) {
    d.disableAll(), C.supportsVertexTextures && d.enable(0), C.instancing && d.enable(1), C.instancingColor && d.enable(2), C.instancingMorph && d.enable(3), C.matcap && d.enable(4), C.envMap && d.enable(5), C.normalMapObjectSpace && d.enable(6), C.normalMapTangentSpace && d.enable(7), C.clearcoat && d.enable(8), C.iridescence && d.enable(9), C.alphaTest && d.enable(10), C.vertexColors && d.enable(11), C.vertexAlphas && d.enable(12), C.vertexUv1s && d.enable(13), C.vertexUv2s && d.enable(14), C.vertexUv3s && d.enable(15), C.vertexTangents && d.enable(16), C.anisotropy && d.enable(17), C.alphaHash && d.enable(18), C.batching && d.enable(19), C.dispersion && d.enable(20), C.batchingColor && d.enable(21), U.push(d.mask), d.disableAll(), C.fog && d.enable(0), C.useFog && d.enable(1), C.flatShading && d.enable(2), C.logarithmicDepthBuffer && d.enable(3), C.reverseDepthBuffer && d.enable(4), C.skinning && d.enable(5), C.morphTargets && d.enable(6), C.morphNormals && d.enable(7), C.morphColors && d.enable(8), C.premultipliedAlpha && d.enable(9), C.shadowMapEnabled && d.enable(10), C.doubleSided && d.enable(11), C.flipSided && d.enable(12), C.useDepthPacking && d.enable(13), C.dithering && d.enable(14), C.transmission && d.enable(15), C.sheen && d.enable(16), C.opaque && d.enable(17), C.pointsUvs && d.enable(18), C.decodeVideoTexture && d.enable(19), C.decodeVideoTextureEmissive && d.enable(20), C.alphaToCoverage && d.enable(21), U.push(d.mask);
  }
  function N(U) {
    const C = T[U.type];
    let B;
    if (C) {
      const at = ha[C];
      B = FE.clone(at.uniforms);
    } else B = U.uniforms;
    return B;
  }
  function et(U, C) {
    let B;
    for (let at = 0, ot = g.length; at < ot; at++) {
      const ht = g[at];
      if (ht.cacheKey === C) {
        B = ht, ++B.usedTimes;
        break;
      }
    }
    return B === void 0 && (B = new $A(o, C, U, f), g.push(B)), B;
  }
  function V(U) {
    if (--U.usedTimes === 0) {
      const C = g.indexOf(U);
      g[C] = g[g.length - 1], g.pop(), U.destroy();
    }
  }
  function I(U) {
    m.remove(U);
  }
  function q() {
    m.dispose();
  }
  return { getParameters: S, getProgramCacheKey: y, getUniforms: N, acquireProgram: et, releaseProgram: V, releaseShaderCache: I, programs: g, dispose: q };
}
function aR() {
  let o = /* @__PURE__ */ new WeakMap();
  function n(h) {
    return o.has(h);
  }
  function a(h) {
    let d = o.get(h);
    return d === void 0 && (d = {}, o.set(h, d)), d;
  }
  function s(h) {
    o.delete(h);
  }
  function c(h, d, m) {
    o.get(h)[d] = m;
  }
  function f() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return { has: n, get: a, remove: s, update: c, dispose: f };
}
function rR(o, n) {
  return o.groupOrder !== n.groupOrder ? o.groupOrder - n.groupOrder : o.renderOrder !== n.renderOrder ? o.renderOrder - n.renderOrder : o.material.id !== n.material.id ? o.material.id - n.material.id : o.z !== n.z ? o.z - n.z : o.id - n.id;
}
function Z0(o, n) {
  return o.groupOrder !== n.groupOrder ? o.groupOrder - n.groupOrder : o.renderOrder !== n.renderOrder ? o.renderOrder - n.renderOrder : o.z !== n.z ? n.z - o.z : o.id - n.id;
}
function K0() {
  const o = [];
  let n = 0;
  const a = [], s = [], c = [];
  function f() {
    n = 0, a.length = 0, s.length = 0, c.length = 0;
  }
  function h(p, x, M, T, R, S) {
    let y = o[n];
    return y === void 0 ? (y = { id: p.id, object: p, geometry: x, material: M, groupOrder: T, renderOrder: p.renderOrder, z: R, group: S }, o[n] = y) : (y.id = p.id, y.object = p, y.geometry = x, y.material = M, y.groupOrder = T, y.renderOrder = p.renderOrder, y.z = R, y.group = S), n++, y;
  }
  function d(p, x, M, T, R, S) {
    const y = h(p, x, M, T, R, S);
    M.transmission > 0 ? s.push(y) : M.transparent === true ? c.push(y) : a.push(y);
  }
  function m(p, x, M, T, R, S) {
    const y = h(p, x, M, T, R, S);
    M.transmission > 0 ? s.unshift(y) : M.transparent === true ? c.unshift(y) : a.unshift(y);
  }
  function _(p, x) {
    a.length > 1 && a.sort(p || rR), s.length > 1 && s.sort(x || Z0), c.length > 1 && c.sort(x || Z0);
  }
  function g() {
    for (let p = n, x = o.length; p < x; p++) {
      const M = o[p];
      if (M.id === null) break;
      M.id = null, M.object = null, M.geometry = null, M.material = null, M.group = null;
    }
  }
  return { opaque: a, transmissive: s, transparent: c, init: f, push: d, unshift: m, finish: g, sort: _ };
}
function sR() {
  let o = /* @__PURE__ */ new WeakMap();
  function n(s, c) {
    const f = o.get(s);
    let h;
    return f === void 0 ? (h = new K0(), o.set(s, [h])) : c >= f.length ? (h = new K0(), f.push(h)) : h = f[c], h;
  }
  function a() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: a };
}
function oR() {
  const o = {};
  return { get: function(n) {
    if (o[n.id] !== void 0) return o[n.id];
    let a;
    switch (n.type) {
      case "DirectionalLight":
        a = { direction: new ft(), color: new ke() };
        break;
      case "SpotLight":
        a = { position: new ft(), direction: new ft(), color: new ke(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        a = { position: new ft(), color: new ke(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        a = { direction: new ft(), skyColor: new ke(), groundColor: new ke() };
        break;
      case "RectAreaLight":
        a = { color: new ke(), position: new ft(), halfWidth: new ft(), halfHeight: new ft() };
        break;
    }
    return o[n.id] = a, a;
  } };
}
function lR() {
  const o = {};
  return { get: function(n) {
    if (o[n.id] !== void 0) return o[n.id];
    let a;
    switch (n.type) {
      case "DirectionalLight":
        a = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new an() };
        break;
      case "SpotLight":
        a = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new an() };
        break;
      case "PointLight":
        a = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new an(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return o[n.id] = a, a;
  } };
}
let cR = 0;
function uR(o, n) {
  return (n.castShadow ? 2 : 0) - (o.castShadow ? 2 : 0) + (n.map ? 1 : 0) - (o.map ? 1 : 0);
}
function fR(o) {
  const n = new oR(), a = lR(), s = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let _ = 0; _ < 9; _++) s.probe.push(new ft());
  const c = new ft(), f = new _n(), h = new _n();
  function d(_) {
    let g = 0, p = 0, x = 0;
    for (let U = 0; U < 9; U++) s.probe[U].set(0, 0, 0);
    let M = 0, T = 0, R = 0, S = 0, y = 0, P = 0, O = 0, N = 0, et = 0, V = 0, I = 0;
    _.sort(uR);
    for (let U = 0, C = _.length; U < C; U++) {
      const B = _[U], at = B.color, ot = B.intensity, ht = B.distance, gt = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight) g += at.r * ot, p += at.g * ot, x += at.b * ot;
      else if (B.isLightProbe) {
        for (let X = 0; X < 9; X++) s.probe[X].addScaledVector(B.sh.coefficients[X], ot);
        I++;
      } else if (B.isDirectionalLight) {
        const X = n.get(B);
        if (X.color.copy(B.color).multiplyScalar(B.intensity), B.castShadow) {
          const rt = B.shadow, Z = a.get(B);
          Z.shadowIntensity = rt.intensity, Z.shadowBias = rt.bias, Z.shadowNormalBias = rt.normalBias, Z.shadowRadius = rt.radius, Z.shadowMapSize = rt.mapSize, s.directionalShadow[M] = Z, s.directionalShadowMap[M] = gt, s.directionalShadowMatrix[M] = B.shadow.matrix, P++;
        }
        s.directional[M] = X, M++;
      } else if (B.isSpotLight) {
        const X = n.get(B);
        X.position.setFromMatrixPosition(B.matrixWorld), X.color.copy(at).multiplyScalar(ot), X.distance = ht, X.coneCos = Math.cos(B.angle), X.penumbraCos = Math.cos(B.angle * (1 - B.penumbra)), X.decay = B.decay, s.spot[R] = X;
        const rt = B.shadow;
        if (B.map && (s.spotLightMap[et] = B.map, et++, rt.updateMatrices(B), B.castShadow && V++), s.spotLightMatrix[R] = rt.matrix, B.castShadow) {
          const Z = a.get(B);
          Z.shadowIntensity = rt.intensity, Z.shadowBias = rt.bias, Z.shadowNormalBias = rt.normalBias, Z.shadowRadius = rt.radius, Z.shadowMapSize = rt.mapSize, s.spotShadow[R] = Z, s.spotShadowMap[R] = gt, N++;
        }
        R++;
      } else if (B.isRectAreaLight) {
        const X = n.get(B);
        X.color.copy(at).multiplyScalar(ot), X.halfWidth.set(B.width * 0.5, 0, 0), X.halfHeight.set(0, B.height * 0.5, 0), s.rectArea[S] = X, S++;
      } else if (B.isPointLight) {
        const X = n.get(B);
        if (X.color.copy(B.color).multiplyScalar(B.intensity), X.distance = B.distance, X.decay = B.decay, B.castShadow) {
          const rt = B.shadow, Z = a.get(B);
          Z.shadowIntensity = rt.intensity, Z.shadowBias = rt.bias, Z.shadowNormalBias = rt.normalBias, Z.shadowRadius = rt.radius, Z.shadowMapSize = rt.mapSize, Z.shadowCameraNear = rt.camera.near, Z.shadowCameraFar = rt.camera.far, s.pointShadow[T] = Z, s.pointShadowMap[T] = gt, s.pointShadowMatrix[T] = B.shadow.matrix, O++;
        }
        s.point[T] = X, T++;
      } else if (B.isHemisphereLight) {
        const X = n.get(B);
        X.skyColor.copy(B.color).multiplyScalar(ot), X.groundColor.copy(B.groundColor).multiplyScalar(ot), s.hemi[y] = X, y++;
      }
    }
    S > 0 && (o.has("OES_texture_float_linear") === true ? (s.rectAreaLTC1 = kt.LTC_FLOAT_1, s.rectAreaLTC2 = kt.LTC_FLOAT_2) : (s.rectAreaLTC1 = kt.LTC_HALF_1, s.rectAreaLTC2 = kt.LTC_HALF_2)), s.ambient[0] = g, s.ambient[1] = p, s.ambient[2] = x;
    const q = s.hash;
    (q.directionalLength !== M || q.pointLength !== T || q.spotLength !== R || q.rectAreaLength !== S || q.hemiLength !== y || q.numDirectionalShadows !== P || q.numPointShadows !== O || q.numSpotShadows !== N || q.numSpotMaps !== et || q.numLightProbes !== I) && (s.directional.length = M, s.spot.length = R, s.rectArea.length = S, s.point.length = T, s.hemi.length = y, s.directionalShadow.length = P, s.directionalShadowMap.length = P, s.pointShadow.length = O, s.pointShadowMap.length = O, s.spotShadow.length = N, s.spotShadowMap.length = N, s.directionalShadowMatrix.length = P, s.pointShadowMatrix.length = O, s.spotLightMatrix.length = N + et - V, s.spotLightMap.length = et, s.numSpotLightShadowsWithMaps = V, s.numLightProbes = I, q.directionalLength = M, q.pointLength = T, q.spotLength = R, q.rectAreaLength = S, q.hemiLength = y, q.numDirectionalShadows = P, q.numPointShadows = O, q.numSpotShadows = N, q.numSpotMaps = et, q.numLightProbes = I, s.version = cR++);
  }
  function m(_, g) {
    let p = 0, x = 0, M = 0, T = 0, R = 0;
    const S = g.matrixWorldInverse;
    for (let y = 0, P = _.length; y < P; y++) {
      const O = _[y];
      if (O.isDirectionalLight) {
        const N = s.directional[p];
        N.direction.setFromMatrixPosition(O.matrixWorld), c.setFromMatrixPosition(O.target.matrixWorld), N.direction.sub(c), N.direction.transformDirection(S), p++;
      } else if (O.isSpotLight) {
        const N = s.spot[M];
        N.position.setFromMatrixPosition(O.matrixWorld), N.position.applyMatrix4(S), N.direction.setFromMatrixPosition(O.matrixWorld), c.setFromMatrixPosition(O.target.matrixWorld), N.direction.sub(c), N.direction.transformDirection(S), M++;
      } else if (O.isRectAreaLight) {
        const N = s.rectArea[T];
        N.position.setFromMatrixPosition(O.matrixWorld), N.position.applyMatrix4(S), h.identity(), f.copy(O.matrixWorld), f.premultiply(S), h.extractRotation(f), N.halfWidth.set(O.width * 0.5, 0, 0), N.halfHeight.set(0, O.height * 0.5, 0), N.halfWidth.applyMatrix4(h), N.halfHeight.applyMatrix4(h), T++;
      } else if (O.isPointLight) {
        const N = s.point[x];
        N.position.setFromMatrixPosition(O.matrixWorld), N.position.applyMatrix4(S), x++;
      } else if (O.isHemisphereLight) {
        const N = s.hemi[R];
        N.direction.setFromMatrixPosition(O.matrixWorld), N.direction.transformDirection(S), R++;
      }
    }
  }
  return { setup: d, setupView: m, state: s };
}
function Q0(o) {
  const n = new fR(o), a = [], s = [];
  function c(g) {
    _.camera = g, a.length = 0, s.length = 0;
  }
  function f(g) {
    a.push(g);
  }
  function h(g) {
    s.push(g);
  }
  function d() {
    n.setup(a);
  }
  function m(g) {
    n.setupView(a, g);
  }
  const _ = { lightsArray: a, shadowsArray: s, camera: null, lights: n, transmissionRenderTarget: {} };
  return { init: c, state: _, setupLights: d, setupLightsView: m, pushLight: f, pushShadow: h };
}
function hR(o) {
  let n = /* @__PURE__ */ new WeakMap();
  function a(c, f = 0) {
    const h = n.get(c);
    let d;
    return h === void 0 ? (d = new Q0(o), n.set(c, [d])) : f >= h.length ? (d = new Q0(o), h.push(d)) : d = h[f], d;
  }
  function s() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: a, dispose: s };
}
class dR extends Eo {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(n) {
    super(), this.isMeshDepthMaterial = true, this.depthPacking = oE, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.depthPacking = n.depthPacking, this.map = n.map, this.alphaMap = n.alphaMap, this.displacementMap = n.displacementMap, this.displacementScale = n.displacementScale, this.displacementBias = n.displacementBias, this.wireframe = n.wireframe, this.wireframeLinewidth = n.wireframeLinewidth, this;
  }
}
class pR extends Eo {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(n) {
    super(), this.isMeshDistanceMaterial = true, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.map = n.map, this.alphaMap = n.alphaMap, this.displacementMap = n.displacementMap, this.displacementScale = n.displacementScale, this.displacementBias = n.displacementBias, this;
  }
}
const mR = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, gR = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function vR(o, n, a) {
  let s = new Lx();
  const c = new an(), f = new an(), h = new Mn(), d = new dR({ depthPacking: lE }), m = new pR(), _ = {}, g = a.maxTextureSize, p = { [Ar]: ui, [ui]: Ar, [za]: za }, x = new Ki({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new an() }, radius: { value: 4 } }, vertexShader: mR, fragmentShader: gR }), M = x.clone();
  M.defines.HORIZONTAL_PASS = 1;
  const T = new Qi();
  T.setAttribute("position", new Sn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const R = new Ba(T, x), S = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = lx;
  let y = this.type;
  this.render = function(V, I, q) {
    if (S.enabled === false || S.autoUpdate === false && S.needsUpdate === false || V.length === 0) return;
    const U = o.getRenderTarget(), C = o.getActiveCubeFace(), B = o.getActiveMipmapLevel(), at = o.state;
    at.setBlending(Tr), at.buffers.color.setClear(1, 1, 1, 1), at.buffers.depth.setTest(true), at.setScissorTest(false);
    const ot = y !== Oa && this.type === Oa, ht = y === Oa && this.type !== Oa;
    for (let gt = 0, X = V.length; gt < X; gt++) {
      const rt = V[gt], Z = rt.shadow;
      if (Z === void 0) {
        console.warn("THREE.WebGLShadowMap:", rt, "has no shadow.");
        continue;
      }
      if (Z.autoUpdate === false && Z.needsUpdate === false) continue;
      c.copy(Z.mapSize);
      const St = Z.getFrameExtents();
      if (c.multiply(St), f.copy(Z.mapSize), (c.x > g || c.y > g) && (c.x > g && (f.x = Math.floor(g / St.x), c.x = f.x * St.x, Z.mapSize.x = f.x), c.y > g && (f.y = Math.floor(g / St.y), c.y = f.y * St.y, Z.mapSize.y = f.y)), Z.map === null || ot === true || ht === true) {
        const Vt = this.type !== Oa ? { minFilter: Zi, magFilter: Zi } : {};
        Z.map !== null && Z.map.dispose(), Z.map = new ls(c.x, c.y, Vt), Z.map.texture.name = rt.name + ".shadowMap", Z.camera.updateProjectionMatrix();
      }
      o.setRenderTarget(Z.map), o.clear();
      const bt = Z.getViewportCount();
      for (let Vt = 0; Vt < bt; Vt++) {
        const ce = Z.getViewport(Vt);
        h.set(f.x * ce.x, f.y * ce.y, f.x * ce.z, f.y * ce.w), at.viewport(h), Z.updateMatrices(rt, Vt), s = Z.getFrustum(), N(I, q, Z.camera, rt, this.type);
      }
      Z.isPointLightShadow !== true && this.type === Oa && P(Z, q), Z.needsUpdate = false;
    }
    y = this.type, S.needsUpdate = false, o.setRenderTarget(U, C, B);
  };
  function P(V, I) {
    const q = n.update(R);
    x.defines.VSM_SAMPLES !== V.blurSamples && (x.defines.VSM_SAMPLES = V.blurSamples, M.defines.VSM_SAMPLES = V.blurSamples, x.needsUpdate = true, M.needsUpdate = true), V.mapPass === null && (V.mapPass = new ls(c.x, c.y)), x.uniforms.shadow_pass.value = V.map.texture, x.uniforms.resolution.value = V.mapSize, x.uniforms.radius.value = V.radius, o.setRenderTarget(V.mapPass), o.clear(), o.renderBufferDirect(I, null, q, x, R, null), M.uniforms.shadow_pass.value = V.mapPass.texture, M.uniforms.resolution.value = V.mapSize, M.uniforms.radius.value = V.radius, o.setRenderTarget(V.map), o.clear(), o.renderBufferDirect(I, null, q, M, R, null);
  }
  function O(V, I, q, U) {
    let C = null;
    const B = q.isPointLight === true ? V.customDistanceMaterial : V.customDepthMaterial;
    if (B !== void 0) C = B;
    else if (C = q.isPointLight === true ? m : d, o.localClippingEnabled && I.clipShadows === true && Array.isArray(I.clippingPlanes) && I.clippingPlanes.length !== 0 || I.displacementMap && I.displacementScale !== 0 || I.alphaMap && I.alphaTest > 0 || I.map && I.alphaTest > 0) {
      const at = C.uuid, ot = I.uuid;
      let ht = _[at];
      ht === void 0 && (ht = {}, _[at] = ht);
      let gt = ht[ot];
      gt === void 0 && (gt = C.clone(), ht[ot] = gt, I.addEventListener("dispose", et)), C = gt;
    }
    if (C.visible = I.visible, C.wireframe = I.wireframe, U === Oa ? C.side = I.shadowSide !== null ? I.shadowSide : I.side : C.side = I.shadowSide !== null ? I.shadowSide : p[I.side], C.alphaMap = I.alphaMap, C.alphaTest = I.alphaTest, C.map = I.map, C.clipShadows = I.clipShadows, C.clippingPlanes = I.clippingPlanes, C.clipIntersection = I.clipIntersection, C.displacementMap = I.displacementMap, C.displacementScale = I.displacementScale, C.displacementBias = I.displacementBias, C.wireframeLinewidth = I.wireframeLinewidth, C.linewidth = I.linewidth, q.isPointLight === true && C.isMeshDistanceMaterial === true) {
      const at = o.properties.get(C);
      at.light = q;
    }
    return C;
  }
  function N(V, I, q, U, C) {
    if (V.visible === false) return;
    if (V.layers.test(I.layers) && (V.isMesh || V.isLine || V.isPoints) && (V.castShadow || V.receiveShadow && C === Oa) && (!V.frustumCulled || s.intersectsObject(V))) {
      V.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, V.matrixWorld);
      const ot = n.update(V), ht = V.material;
      if (Array.isArray(ht)) {
        const gt = ot.groups;
        for (let X = 0, rt = gt.length; X < rt; X++) {
          const Z = gt[X], St = ht[Z.materialIndex];
          if (St && St.visible) {
            const bt = O(V, St, U, C);
            V.onBeforeShadow(o, V, I, q, ot, bt, Z), o.renderBufferDirect(q, null, ot, bt, V, Z), V.onAfterShadow(o, V, I, q, ot, bt, Z);
          }
        }
      } else if (ht.visible) {
        const gt = O(V, ht, U, C);
        V.onBeforeShadow(o, V, I, q, ot, gt, null), o.renderBufferDirect(q, null, ot, gt, V, null), V.onAfterShadow(o, V, I, q, ot, gt, null);
      }
    }
    const at = V.children;
    for (let ot = 0, ht = at.length; ot < ht; ot++) N(at[ot], I, q, U, C);
  }
  function et(V) {
    V.target.removeEventListener("dispose", et);
    for (const q in _) {
      const U = _[q], C = V.target.uuid;
      C in U && (U[C].dispose(), delete U[C]);
    }
  }
}
const _R = { [jd]: qd, [Yd]: Kd, [Wd]: Qd, [mo]: Zd, [qd]: jd, [Kd]: Yd, [Qd]: Wd, [Zd]: mo };
function xR(o, n) {
  function a() {
    let F = false;
    const wt = new Mn();
    let ut = null;
    const Tt = new Mn(0, 0, 0, 0);
    return { setMask: function(zt) {
      ut !== zt && !F && (o.colorMask(zt, zt, zt, zt), ut = zt);
    }, setLocked: function(zt) {
      F = zt;
    }, setClear: function(zt, Gt, fe, $e, cn) {
      cn === true && (zt *= $e, Gt *= $e, fe *= $e), wt.set(zt, Gt, fe, $e), Tt.equals(wt) === false && (o.clearColor(zt, Gt, fe, $e), Tt.copy(wt));
    }, reset: function() {
      F = false, ut = null, Tt.set(-1, 0, 0, 0);
    } };
  }
  function s() {
    let F = false, wt = false, ut = null, Tt = null, zt = null;
    return { setReversed: function(Gt) {
      if (wt !== Gt) {
        const fe = n.get("EXT_clip_control");
        wt ? fe.clipControlEXT(fe.LOWER_LEFT_EXT, fe.ZERO_TO_ONE_EXT) : fe.clipControlEXT(fe.LOWER_LEFT_EXT, fe.NEGATIVE_ONE_TO_ONE_EXT);
        const $e = zt;
        zt = null, this.setClear($e);
      }
      wt = Gt;
    }, getReversed: function() {
      return wt;
    }, setTest: function(Gt) {
      Gt ? W(o.DEPTH_TEST) : mt(o.DEPTH_TEST);
    }, setMask: function(Gt) {
      ut !== Gt && !F && (o.depthMask(Gt), ut = Gt);
    }, setFunc: function(Gt) {
      if (wt && (Gt = _R[Gt]), Tt !== Gt) {
        switch (Gt) {
          case jd:
            o.depthFunc(o.NEVER);
            break;
          case qd:
            o.depthFunc(o.ALWAYS);
            break;
          case Yd:
            o.depthFunc(o.LESS);
            break;
          case mo:
            o.depthFunc(o.LEQUAL);
            break;
          case Wd:
            o.depthFunc(o.EQUAL);
            break;
          case Zd:
            o.depthFunc(o.GEQUAL);
            break;
          case Kd:
            o.depthFunc(o.GREATER);
            break;
          case Qd:
            o.depthFunc(o.NOTEQUAL);
            break;
          default:
            o.depthFunc(o.LEQUAL);
        }
        Tt = Gt;
      }
    }, setLocked: function(Gt) {
      F = Gt;
    }, setClear: function(Gt) {
      zt !== Gt && (wt && (Gt = 1 - Gt), o.clearDepth(Gt), zt = Gt);
    }, reset: function() {
      F = false, ut = null, Tt = null, zt = null, wt = false;
    } };
  }
  function c() {
    let F = false, wt = null, ut = null, Tt = null, zt = null, Gt = null, fe = null, $e = null, cn = null;
    return { setTest: function(De) {
      F || (De ? W(o.STENCIL_TEST) : mt(o.STENCIL_TEST));
    }, setMask: function(De) {
      wt !== De && !F && (o.stencilMask(De), wt = De);
    }, setFunc: function(De, Xe, rn) {
      (ut !== De || Tt !== Xe || zt !== rn) && (o.stencilFunc(De, Xe, rn), ut = De, Tt = Xe, zt = rn);
    }, setOp: function(De, Xe, rn) {
      (Gt !== De || fe !== Xe || $e !== rn) && (o.stencilOp(De, Xe, rn), Gt = De, fe = Xe, $e = rn);
    }, setLocked: function(De) {
      F = De;
    }, setClear: function(De) {
      cn !== De && (o.clearStencil(De), cn = De);
    }, reset: function() {
      F = false, wt = null, ut = null, Tt = null, zt = null, Gt = null, fe = null, $e = null, cn = null;
    } };
  }
  const f = new a(), h = new s(), d = new c(), m = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap();
  let g = {}, p = {}, x = /* @__PURE__ */ new WeakMap(), M = [], T = null, R = false, S = null, y = null, P = null, O = null, N = null, et = null, V = null, I = new ke(0, 0, 0), q = 0, U = false, C = null, B = null, at = null, ot = null, ht = null;
  const gt = o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = false, rt = 0;
  const Z = o.getParameter(o.VERSION);
  Z.indexOf("WebGL") !== -1 ? (rt = parseFloat(/^WebGL (\d)/.exec(Z)[1]), X = rt >= 1) : Z.indexOf("OpenGL ES") !== -1 && (rt = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), X = rt >= 2);
  let St = null, bt = {};
  const Vt = o.getParameter(o.SCISSOR_BOX), ce = o.getParameter(o.VIEWPORT), pt = new Mn().fromArray(Vt), A = new Mn().fromArray(ce);
  function k(F, wt, ut, Tt) {
    const zt = new Uint8Array(4), Gt = o.createTexture();
    o.bindTexture(F, Gt), o.texParameteri(F, o.TEXTURE_MIN_FILTER, o.NEAREST), o.texParameteri(F, o.TEXTURE_MAG_FILTER, o.NEAREST);
    for (let fe = 0; fe < ut; fe++) F === o.TEXTURE_3D || F === o.TEXTURE_2D_ARRAY ? o.texImage3D(wt, 0, o.RGBA, 1, 1, Tt, 0, o.RGBA, o.UNSIGNED_BYTE, zt) : o.texImage2D(wt + fe, 0, o.RGBA, 1, 1, 0, o.RGBA, o.UNSIGNED_BYTE, zt);
    return Gt;
  }
  const H = {};
  H[o.TEXTURE_2D] = k(o.TEXTURE_2D, o.TEXTURE_2D, 1), H[o.TEXTURE_CUBE_MAP] = k(o.TEXTURE_CUBE_MAP, o.TEXTURE_CUBE_MAP_POSITIVE_X, 6), H[o.TEXTURE_2D_ARRAY] = k(o.TEXTURE_2D_ARRAY, o.TEXTURE_2D_ARRAY, 1, 1), H[o.TEXTURE_3D] = k(o.TEXTURE_3D, o.TEXTURE_3D, 1, 1), f.setClear(0, 0, 0, 1), h.setClear(1), d.setClear(0), W(o.DEPTH_TEST), h.setFunc(mo), le(false), ae(n0), W(o.CULL_FACE), j(Tr);
  function W(F) {
    g[F] !== true && (o.enable(F), g[F] = true);
  }
  function mt(F) {
    g[F] !== false && (o.disable(F), g[F] = false);
  }
  function _t(F, wt) {
    return p[F] !== wt ? (o.bindFramebuffer(F, wt), p[F] = wt, F === o.DRAW_FRAMEBUFFER && (p[o.FRAMEBUFFER] = wt), F === o.FRAMEBUFFER && (p[o.DRAW_FRAMEBUFFER] = wt), true) : false;
  }
  function At(F, wt) {
    let ut = M, Tt = false;
    if (F) {
      ut = x.get(wt), ut === void 0 && (ut = [], x.set(wt, ut));
      const zt = F.textures;
      if (ut.length !== zt.length || ut[0] !== o.COLOR_ATTACHMENT0) {
        for (let Gt = 0, fe = zt.length; Gt < fe; Gt++) ut[Gt] = o.COLOR_ATTACHMENT0 + Gt;
        ut.length = zt.length, Tt = true;
      }
    } else ut[0] !== o.BACK && (ut[0] = o.BACK, Tt = true);
    Tt && o.drawBuffers(ut);
  }
  function Ct(F) {
    return T !== F ? (o.useProgram(F), T = F, true) : false;
  }
  const Ut = { [ns]: o.FUNC_ADD, [OM]: o.FUNC_SUBTRACT, [zM]: o.FUNC_REVERSE_SUBTRACT };
  Ut[PM] = o.MIN, Ut[IM] = o.MAX;
  const re = { [BM]: o.ZERO, [FM]: o.ONE, [HM]: o.SRC_COLOR, [Xd]: o.SRC_ALPHA, [qM]: o.SRC_ALPHA_SATURATE, [kM]: o.DST_COLOR, [VM]: o.DST_ALPHA, [GM]: o.ONE_MINUS_SRC_COLOR, [kd]: o.ONE_MINUS_SRC_ALPHA, [jM]: o.ONE_MINUS_DST_COLOR, [XM]: o.ONE_MINUS_DST_ALPHA, [YM]: o.CONSTANT_COLOR, [WM]: o.ONE_MINUS_CONSTANT_COLOR, [ZM]: o.CONSTANT_ALPHA, [KM]: o.ONE_MINUS_CONSTANT_ALPHA };
  function j(F, wt, ut, Tt, zt, Gt, fe, $e, cn, De) {
    if (F === Tr) {
      R === true && (mt(o.BLEND), R = false);
      return;
    }
    if (R === false && (W(o.BLEND), R = true), F !== LM) {
      if (F !== S || De !== U) {
        if ((y !== ns || N !== ns) && (o.blendEquation(o.FUNC_ADD), y = ns, N = ns), De) switch (F) {
          case ss:
            o.blendFuncSeparate(o.ONE, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE_MINUS_SRC_ALPHA);
            break;
          case uo:
            o.blendFunc(o.ONE, o.ONE);
            break;
          case i0:
            o.blendFuncSeparate(o.ZERO, o.ONE_MINUS_SRC_COLOR, o.ZERO, o.ONE);
            break;
          case a0:
            o.blendFuncSeparate(o.ZERO, o.SRC_COLOR, o.ZERO, o.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", F);
            break;
        }
        else switch (F) {
          case ss:
            o.blendFuncSeparate(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE_MINUS_SRC_ALPHA);
            break;
          case uo:
            o.blendFunc(o.SRC_ALPHA, o.ONE);
            break;
          case i0:
            o.blendFuncSeparate(o.ZERO, o.ONE_MINUS_SRC_COLOR, o.ZERO, o.ONE);
            break;
          case a0:
            o.blendFunc(o.ZERO, o.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", F);
            break;
        }
        P = null, O = null, et = null, V = null, I.set(0, 0, 0), q = 0, S = F, U = De;
      }
      return;
    }
    zt = zt || wt, Gt = Gt || ut, fe = fe || Tt, (wt !== y || zt !== N) && (o.blendEquationSeparate(Ut[wt], Ut[zt]), y = wt, N = zt), (ut !== P || Tt !== O || Gt !== et || fe !== V) && (o.blendFuncSeparate(re[ut], re[Tt], re[Gt], re[fe]), P = ut, O = Tt, et = Gt, V = fe), ($e.equals(I) === false || cn !== q) && (o.blendColor($e.r, $e.g, $e.b, cn), I.copy($e), q = cn), S = F, U = false;
  }
  function Fe(F, wt) {
    F.side === za ? mt(o.CULL_FACE) : W(o.CULL_FACE);
    let ut = F.side === ui;
    wt && (ut = !ut), le(ut), F.blending === ss && F.transparent === false ? j(Tr) : j(F.blending, F.blendEquation, F.blendSrc, F.blendDst, F.blendEquationAlpha, F.blendSrcAlpha, F.blendDstAlpha, F.blendColor, F.blendAlpha, F.premultipliedAlpha), h.setFunc(F.depthFunc), h.setTest(F.depthTest), h.setMask(F.depthWrite), f.setMask(F.colorWrite);
    const Tt = F.stencilWrite;
    d.setTest(Tt), Tt && (d.setMask(F.stencilWriteMask), d.setFunc(F.stencilFunc, F.stencilRef, F.stencilFuncMask), d.setOp(F.stencilFail, F.stencilZFail, F.stencilZPass)), Se(F.polygonOffset, F.polygonOffsetFactor, F.polygonOffsetUnits), F.alphaToCoverage === true ? W(o.SAMPLE_ALPHA_TO_COVERAGE) : mt(o.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function le(F) {
    C !== F && (F ? o.frontFace(o.CW) : o.frontFace(o.CCW), C = F);
  }
  function ae(F) {
    F !== DM ? (W(o.CULL_FACE), F !== B && (F === n0 ? o.cullFace(o.BACK) : F === UM ? o.cullFace(o.FRONT) : o.cullFace(o.FRONT_AND_BACK))) : mt(o.CULL_FACE), B = F;
  }
  function Ft(F) {
    F !== at && (X && o.lineWidth(F), at = F);
  }
  function Se(F, wt, ut) {
    F ? (W(o.POLYGON_OFFSET_FILL), (ot !== wt || ht !== ut) && (o.polygonOffset(wt, ut), ot = wt, ht = ut)) : mt(o.POLYGON_OFFSET_FILL);
  }
  function ne(F) {
    F ? W(o.SCISSOR_TEST) : mt(o.SCISSOR_TEST);
  }
  function L(F) {
    F === void 0 && (F = o.TEXTURE0 + gt - 1), St !== F && (o.activeTexture(F), St = F);
  }
  function b(F, wt, ut) {
    ut === void 0 && (St === null ? ut = o.TEXTURE0 + gt - 1 : ut = St);
    let Tt = bt[ut];
    Tt === void 0 && (Tt = { type: void 0, texture: void 0 }, bt[ut] = Tt), (Tt.type !== F || Tt.texture !== wt) && (St !== ut && (o.activeTexture(ut), St = ut), o.bindTexture(F, wt || H[F]), Tt.type = F, Tt.texture = wt);
  }
  function it() {
    const F = bt[St];
    F !== void 0 && F.type !== void 0 && (o.bindTexture(F.type, null), F.type = void 0, F.texture = void 0);
  }
  function xt() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Rt() {
    try {
      o.compressedTexImage3D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Et() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function qt() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function vt() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Ht() {
    try {
      o.compressedTexSubImage3D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Te() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Nt() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Yt() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function te() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function ue(F) {
    pt.equals(F) === false && (o.scissor(F.x, F.y, F.z, F.w), pt.copy(F));
  }
  function jt(F) {
    A.equals(F) === false && (o.viewport(F.x, F.y, F.z, F.w), A.copy(F));
  }
  function ye(F, wt) {
    let ut = _.get(wt);
    ut === void 0 && (ut = /* @__PURE__ */ new WeakMap(), _.set(wt, ut));
    let Tt = ut.get(F);
    Tt === void 0 && (Tt = o.getUniformBlockIndex(wt, F.name), ut.set(F, Tt));
  }
  function xe(F, wt) {
    const Tt = _.get(wt).get(F);
    m.get(wt) !== Tt && (o.uniformBlockBinding(wt, Tt, F.__bindingPointIndex), m.set(wt, Tt));
  }
  function we() {
    o.disable(o.BLEND), o.disable(o.CULL_FACE), o.disable(o.DEPTH_TEST), o.disable(o.POLYGON_OFFSET_FILL), o.disable(o.SCISSOR_TEST), o.disable(o.STENCIL_TEST), o.disable(o.SAMPLE_ALPHA_TO_COVERAGE), o.blendEquation(o.FUNC_ADD), o.blendFunc(o.ONE, o.ZERO), o.blendFuncSeparate(o.ONE, o.ZERO, o.ONE, o.ZERO), o.blendColor(0, 0, 0, 0), o.colorMask(true, true, true, true), o.clearColor(0, 0, 0, 0), o.depthMask(true), o.depthFunc(o.LESS), h.setReversed(false), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(o.ALWAYS, 0, 4294967295), o.stencilOp(o.KEEP, o.KEEP, o.KEEP), o.clearStencil(0), o.cullFace(o.BACK), o.frontFace(o.CCW), o.polygonOffset(0, 0), o.activeTexture(o.TEXTURE0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.bindFramebuffer(o.DRAW_FRAMEBUFFER, null), o.bindFramebuffer(o.READ_FRAMEBUFFER, null), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), g = {}, St = null, bt = {}, p = {}, x = /* @__PURE__ */ new WeakMap(), M = [], T = null, R = false, S = null, y = null, P = null, O = null, N = null, et = null, V = null, I = new ke(0, 0, 0), q = 0, U = false, C = null, B = null, at = null, ot = null, ht = null, pt.set(0, 0, o.canvas.width, o.canvas.height), A.set(0, 0, o.canvas.width, o.canvas.height), f.reset(), h.reset(), d.reset();
  }
  return { buffers: { color: f, depth: h, stencil: d }, enable: W, disable: mt, bindFramebuffer: _t, drawBuffers: At, useProgram: Ct, setBlending: j, setMaterial: Fe, setFlipSided: le, setCullFace: ae, setLineWidth: Ft, setPolygonOffset: Se, setScissorTest: ne, activeTexture: L, bindTexture: b, unbindTexture: it, compressedTexImage2D: xt, compressedTexImage3D: Rt, texImage2D: Yt, texImage3D: te, updateUBOMapping: ye, uniformBlockBinding: xe, texStorage2D: Te, texStorage3D: Nt, texSubImage2D: Et, texSubImage3D: qt, compressedTexSubImage2D: vt, compressedTexSubImage3D: Ht, scissor: ue, viewport: jt, reset: we };
}
function J0(o, n, a, s) {
  const c = yR(s);
  switch (a) {
    case px:
      return o * n;
    case gx:
      return o * n;
    case vx:
      return o * n * 2;
    case _x:
      return o * n / c.components * c.byteLength;
    case Ip:
      return o * n / c.components * c.byteLength;
    case xx:
      return o * n * 2 / c.components * c.byteLength;
    case Bp:
      return o * n * 2 / c.components * c.byteLength;
    case mx:
      return o * n * 3 / c.components * c.byteLength;
    case Yi:
      return o * n * 4 / c.components * c.byteLength;
    case Fp:
      return o * n * 4 / c.components * c.byteLength;
    case Mu:
    case Eu:
      return Math.floor((o + 3) / 4) * Math.floor((n + 3) / 4) * 8;
    case Tu:
    case bu:
      return Math.floor((o + 3) / 4) * Math.floor((n + 3) / 4) * 16;
    case ip:
    case rp:
      return Math.max(o, 16) * Math.max(n, 8) / 4;
    case np:
    case ap:
      return Math.max(o, 8) * Math.max(n, 8) / 2;
    case sp:
    case op:
      return Math.floor((o + 3) / 4) * Math.floor((n + 3) / 4) * 8;
    case lp:
      return Math.floor((o + 3) / 4) * Math.floor((n + 3) / 4) * 16;
    case cp:
      return Math.floor((o + 3) / 4) * Math.floor((n + 3) / 4) * 16;
    case up:
      return Math.floor((o + 4) / 5) * Math.floor((n + 3) / 4) * 16;
    case fp:
      return Math.floor((o + 4) / 5) * Math.floor((n + 4) / 5) * 16;
    case hp:
      return Math.floor((o + 5) / 6) * Math.floor((n + 4) / 5) * 16;
    case dp:
      return Math.floor((o + 5) / 6) * Math.floor((n + 5) / 6) * 16;
    case pp:
      return Math.floor((o + 7) / 8) * Math.floor((n + 4) / 5) * 16;
    case mp:
      return Math.floor((o + 7) / 8) * Math.floor((n + 5) / 6) * 16;
    case gp:
      return Math.floor((o + 7) / 8) * Math.floor((n + 7) / 8) * 16;
    case vp:
      return Math.floor((o + 9) / 10) * Math.floor((n + 4) / 5) * 16;
    case _p:
      return Math.floor((o + 9) / 10) * Math.floor((n + 5) / 6) * 16;
    case xp:
      return Math.floor((o + 9) / 10) * Math.floor((n + 7) / 8) * 16;
    case yp:
      return Math.floor((o + 9) / 10) * Math.floor((n + 9) / 10) * 16;
    case Sp:
      return Math.floor((o + 11) / 12) * Math.floor((n + 9) / 10) * 16;
    case Mp:
      return Math.floor((o + 11) / 12) * Math.floor((n + 11) / 12) * 16;
    case Au:
    case Ep:
    case Tp:
      return Math.ceil(o / 4) * Math.ceil(n / 4) * 16;
    case yx:
    case bp:
      return Math.ceil(o / 4) * Math.ceil(n / 4) * 8;
    case Ap:
    case Rp:
      return Math.ceil(o / 4) * Math.ceil(n / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${a} format.`);
}
function yR(o) {
  switch (o) {
    case Ga:
    case fx:
      return { byteLength: 1, components: 1 };
    case bl:
    case hx:
    case Al:
      return { byteLength: 2, components: 1 };
    case zp:
    case Pp:
      return { byteLength: 2, components: 4 };
    case os:
    case Op:
    case Pa:
      return { byteLength: 4, components: 1 };
    case dx:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${o}.`);
}
function SR(o, n, a, s, c, f, h) {
  const d = n.has("WEBGL_multisampled_render_to_texture") ? n.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), _ = new an(), g = /* @__PURE__ */ new WeakMap();
  let p;
  const x = /* @__PURE__ */ new WeakMap();
  let M = false;
  try {
    M = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function T(L, b) {
    return M ? new OffscreenCanvas(L, b) : wu("canvas");
  }
  function R(L, b, it) {
    let xt = 1;
    const Rt = ne(L);
    if ((Rt.width > it || Rt.height > it) && (xt = it / Math.max(Rt.width, Rt.height)), xt < 1) if (typeof HTMLImageElement < "u" && L instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && L instanceof ImageBitmap || typeof VideoFrame < "u" && L instanceof VideoFrame) {
      const Et = Math.floor(xt * Rt.width), qt = Math.floor(xt * Rt.height);
      p === void 0 && (p = T(Et, qt));
      const vt = b ? T(Et, qt) : p;
      return vt.width = Et, vt.height = qt, vt.getContext("2d").drawImage(L, 0, 0, Et, qt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Rt.width + "x" + Rt.height + ") to (" + Et + "x" + qt + ")."), vt;
    } else return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Rt.width + "x" + Rt.height + ")."), L;
    return L;
  }
  function S(L) {
    return L.generateMipmaps;
  }
  function y(L) {
    o.generateMipmap(L);
  }
  function P(L) {
    return L.isWebGLCubeRenderTarget ? o.TEXTURE_CUBE_MAP : L.isWebGL3DRenderTarget ? o.TEXTURE_3D : L.isWebGLArrayRenderTarget || L.isCompressedArrayTexture ? o.TEXTURE_2D_ARRAY : o.TEXTURE_2D;
  }
  function O(L, b, it, xt, Rt = false) {
    if (L !== null) {
      if (o[L] !== void 0) return o[L];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'");
    }
    let Et = b;
    if (b === o.RED && (it === o.FLOAT && (Et = o.R32F), it === o.HALF_FLOAT && (Et = o.R16F), it === o.UNSIGNED_BYTE && (Et = o.R8)), b === o.RED_INTEGER && (it === o.UNSIGNED_BYTE && (Et = o.R8UI), it === o.UNSIGNED_SHORT && (Et = o.R16UI), it === o.UNSIGNED_INT && (Et = o.R32UI), it === o.BYTE && (Et = o.R8I), it === o.SHORT && (Et = o.R16I), it === o.INT && (Et = o.R32I)), b === o.RG && (it === o.FLOAT && (Et = o.RG32F), it === o.HALF_FLOAT && (Et = o.RG16F), it === o.UNSIGNED_BYTE && (Et = o.RG8)), b === o.RG_INTEGER && (it === o.UNSIGNED_BYTE && (Et = o.RG8UI), it === o.UNSIGNED_SHORT && (Et = o.RG16UI), it === o.UNSIGNED_INT && (Et = o.RG32UI), it === o.BYTE && (Et = o.RG8I), it === o.SHORT && (Et = o.RG16I), it === o.INT && (Et = o.RG32I)), b === o.RGB_INTEGER && (it === o.UNSIGNED_BYTE && (Et = o.RGB8UI), it === o.UNSIGNED_SHORT && (Et = o.RGB16UI), it === o.UNSIGNED_INT && (Et = o.RGB32UI), it === o.BYTE && (Et = o.RGB8I), it === o.SHORT && (Et = o.RGB16I), it === o.INT && (Et = o.RGB32I)), b === o.RGBA_INTEGER && (it === o.UNSIGNED_BYTE && (Et = o.RGBA8UI), it === o.UNSIGNED_SHORT && (Et = o.RGBA16UI), it === o.UNSIGNED_INT && (Et = o.RGBA32UI), it === o.BYTE && (Et = o.RGBA8I), it === o.SHORT && (Et = o.RGBA16I), it === o.INT && (Et = o.RGBA32I)), b === o.RGB && it === o.UNSIGNED_INT_5_9_9_9_REV && (Et = o.RGB9_E5), b === o.RGBA) {
      const qt = Rt ? Lu : Ve.getTransfer(xt);
      it === o.FLOAT && (Et = o.RGBA32F), it === o.HALF_FLOAT && (Et = o.RGBA16F), it === o.UNSIGNED_BYTE && (Et = qt === en ? o.SRGB8_ALPHA8 : o.RGBA8), it === o.UNSIGNED_SHORT_4_4_4_4 && (Et = o.RGBA4), it === o.UNSIGNED_SHORT_5_5_5_1 && (Et = o.RGB5_A1);
    }
    return (Et === o.R16F || Et === o.R32F || Et === o.RG16F || Et === o.RG32F || Et === o.RGBA16F || Et === o.RGBA32F) && n.get("EXT_color_buffer_float"), Et;
  }
  function N(L, b) {
    let it;
    return L ? b === null || b === os || b === _o ? it = o.DEPTH24_STENCIL8 : b === Pa ? it = o.DEPTH32F_STENCIL8 : b === bl && (it = o.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : b === null || b === os || b === _o ? it = o.DEPTH_COMPONENT24 : b === Pa ? it = o.DEPTH_COMPONENT32F : b === bl && (it = o.DEPTH_COMPONENT16), it;
  }
  function et(L, b) {
    return S(L) === true || L.isFramebufferTexture && L.minFilter !== Zi && L.minFilter !== da ? Math.log2(Math.max(b.width, b.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? b.mipmaps.length : 1;
  }
  function V(L) {
    const b = L.target;
    b.removeEventListener("dispose", V), q(b), b.isVideoTexture && g.delete(b);
  }
  function I(L) {
    const b = L.target;
    b.removeEventListener("dispose", I), C(b);
  }
  function q(L) {
    const b = s.get(L);
    if (b.__webglInit === void 0) return;
    const it = L.source, xt = x.get(it);
    if (xt) {
      const Rt = xt[b.__cacheKey];
      Rt.usedTimes--, Rt.usedTimes === 0 && U(L), Object.keys(xt).length === 0 && x.delete(it);
    }
    s.remove(L);
  }
  function U(L) {
    const b = s.get(L);
    o.deleteTexture(b.__webglTexture);
    const it = L.source, xt = x.get(it);
    delete xt[b.__cacheKey], h.memory.textures--;
  }
  function C(L) {
    const b = s.get(L);
    if (L.depthTexture && (L.depthTexture.dispose(), s.remove(L.depthTexture)), L.isWebGLCubeRenderTarget) for (let xt = 0; xt < 6; xt++) {
      if (Array.isArray(b.__webglFramebuffer[xt])) for (let Rt = 0; Rt < b.__webglFramebuffer[xt].length; Rt++) o.deleteFramebuffer(b.__webglFramebuffer[xt][Rt]);
      else o.deleteFramebuffer(b.__webglFramebuffer[xt]);
      b.__webglDepthbuffer && o.deleteRenderbuffer(b.__webglDepthbuffer[xt]);
    }
    else {
      if (Array.isArray(b.__webglFramebuffer)) for (let xt = 0; xt < b.__webglFramebuffer.length; xt++) o.deleteFramebuffer(b.__webglFramebuffer[xt]);
      else o.deleteFramebuffer(b.__webglFramebuffer);
      if (b.__webglDepthbuffer && o.deleteRenderbuffer(b.__webglDepthbuffer), b.__webglMultisampledFramebuffer && o.deleteFramebuffer(b.__webglMultisampledFramebuffer), b.__webglColorRenderbuffer) for (let xt = 0; xt < b.__webglColorRenderbuffer.length; xt++) b.__webglColorRenderbuffer[xt] && o.deleteRenderbuffer(b.__webglColorRenderbuffer[xt]);
      b.__webglDepthRenderbuffer && o.deleteRenderbuffer(b.__webglDepthRenderbuffer);
    }
    const it = L.textures;
    for (let xt = 0, Rt = it.length; xt < Rt; xt++) {
      const Et = s.get(it[xt]);
      Et.__webglTexture && (o.deleteTexture(Et.__webglTexture), h.memory.textures--), s.remove(it[xt]);
    }
    s.remove(L);
  }
  let B = 0;
  function at() {
    B = 0;
  }
  function ot() {
    const L = B;
    return L >= c.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + c.maxTextures), B += 1, L;
  }
  function ht(L) {
    const b = [];
    return b.push(L.wrapS), b.push(L.wrapT), b.push(L.wrapR || 0), b.push(L.magFilter), b.push(L.minFilter), b.push(L.anisotropy), b.push(L.internalFormat), b.push(L.format), b.push(L.type), b.push(L.generateMipmaps), b.push(L.premultiplyAlpha), b.push(L.flipY), b.push(L.unpackAlignment), b.push(L.colorSpace), b.join();
  }
  function gt(L, b) {
    const it = s.get(L);
    if (L.isVideoTexture && Ft(L), L.isRenderTargetTexture === false && L.version > 0 && it.__version !== L.version) {
      const xt = L.image;
      if (xt === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (xt.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        A(it, L, b);
        return;
      }
    }
    a.bindTexture(o.TEXTURE_2D, it.__webglTexture, o.TEXTURE0 + b);
  }
  function X(L, b) {
    const it = s.get(L);
    if (L.version > 0 && it.__version !== L.version) {
      A(it, L, b);
      return;
    }
    a.bindTexture(o.TEXTURE_2D_ARRAY, it.__webglTexture, o.TEXTURE0 + b);
  }
  function rt(L, b) {
    const it = s.get(L);
    if (L.version > 0 && it.__version !== L.version) {
      A(it, L, b);
      return;
    }
    a.bindTexture(o.TEXTURE_3D, it.__webglTexture, o.TEXTURE0 + b);
  }
  function Z(L, b) {
    const it = s.get(L);
    if (L.version > 0 && it.__version !== L.version) {
      k(it, L, b);
      return;
    }
    a.bindTexture(o.TEXTURE_CUBE_MAP, it.__webglTexture, o.TEXTURE0 + b);
  }
  const St = { [tp]: o.REPEAT, [as]: o.CLAMP_TO_EDGE, [ep]: o.MIRRORED_REPEAT }, bt = { [Zi]: o.NEAREST, [sE]: o.NEAREST_MIPMAP_NEAREST, [Kc]: o.NEAREST_MIPMAP_LINEAR, [da]: o.LINEAR, [hd]: o.LINEAR_MIPMAP_NEAREST, [rs]: o.LINEAR_MIPMAP_LINEAR }, Vt = { [fE]: o.NEVER, [vE]: o.ALWAYS, [hE]: o.LESS, [Sx]: o.LEQUAL, [dE]: o.EQUAL, [gE]: o.GEQUAL, [pE]: o.GREATER, [mE]: o.NOTEQUAL };
  function ce(L, b) {
    if (b.type === Pa && n.has("OES_texture_float_linear") === false && (b.magFilter === da || b.magFilter === hd || b.magFilter === Kc || b.magFilter === rs || b.minFilter === da || b.minFilter === hd || b.minFilter === Kc || b.minFilter === rs) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), o.texParameteri(L, o.TEXTURE_WRAP_S, St[b.wrapS]), o.texParameteri(L, o.TEXTURE_WRAP_T, St[b.wrapT]), (L === o.TEXTURE_3D || L === o.TEXTURE_2D_ARRAY) && o.texParameteri(L, o.TEXTURE_WRAP_R, St[b.wrapR]), o.texParameteri(L, o.TEXTURE_MAG_FILTER, bt[b.magFilter]), o.texParameteri(L, o.TEXTURE_MIN_FILTER, bt[b.minFilter]), b.compareFunction && (o.texParameteri(L, o.TEXTURE_COMPARE_MODE, o.COMPARE_REF_TO_TEXTURE), o.texParameteri(L, o.TEXTURE_COMPARE_FUNC, Vt[b.compareFunction])), n.has("EXT_texture_filter_anisotropic") === true) {
      if (b.magFilter === Zi || b.minFilter !== Kc && b.minFilter !== rs || b.type === Pa && n.has("OES_texture_float_linear") === false) return;
      if (b.anisotropy > 1 || s.get(b).__currentAnisotropy) {
        const it = n.get("EXT_texture_filter_anisotropic");
        o.texParameterf(L, it.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, c.getMaxAnisotropy())), s.get(b).__currentAnisotropy = b.anisotropy;
      }
    }
  }
  function pt(L, b) {
    let it = false;
    L.__webglInit === void 0 && (L.__webglInit = true, b.addEventListener("dispose", V));
    const xt = b.source;
    let Rt = x.get(xt);
    Rt === void 0 && (Rt = {}, x.set(xt, Rt));
    const Et = ht(b);
    if (Et !== L.__cacheKey) {
      Rt[Et] === void 0 && (Rt[Et] = { texture: o.createTexture(), usedTimes: 0 }, h.memory.textures++, it = true), Rt[Et].usedTimes++;
      const qt = Rt[L.__cacheKey];
      qt !== void 0 && (Rt[L.__cacheKey].usedTimes--, qt.usedTimes === 0 && U(b)), L.__cacheKey = Et, L.__webglTexture = Rt[Et].texture;
    }
    return it;
  }
  function A(L, b, it) {
    let xt = o.TEXTURE_2D;
    (b.isDataArrayTexture || b.isCompressedArrayTexture) && (xt = o.TEXTURE_2D_ARRAY), b.isData3DTexture && (xt = o.TEXTURE_3D);
    const Rt = pt(L, b), Et = b.source;
    a.bindTexture(xt, L.__webglTexture, o.TEXTURE0 + it);
    const qt = s.get(Et);
    if (Et.version !== qt.__version || Rt === true) {
      a.activeTexture(o.TEXTURE0 + it);
      const vt = Ve.getPrimaries(Ve.workingColorSpace), Ht = b.colorSpace === Er ? null : Ve.getPrimaries(b.colorSpace), Te = b.colorSpace === Er || vt === Ht ? o.NONE : o.BROWSER_DEFAULT_WEBGL;
      o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, b.flipY), o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), o.pixelStorei(o.UNPACK_ALIGNMENT, b.unpackAlignment), o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te);
      let Nt = R(b.image, false, c.maxTextureSize);
      Nt = Se(b, Nt);
      const Yt = f.convert(b.format, b.colorSpace), te = f.convert(b.type);
      let ue = O(b.internalFormat, Yt, te, b.colorSpace, b.isVideoTexture);
      ce(xt, b);
      let jt;
      const ye = b.mipmaps, xe = b.isVideoTexture !== true, we = qt.__version === void 0 || Rt === true, F = Et.dataReady, wt = et(b, Nt);
      if (b.isDepthTexture) ue = N(b.format === xo, b.type), we && (xe ? a.texStorage2D(o.TEXTURE_2D, 1, ue, Nt.width, Nt.height) : a.texImage2D(o.TEXTURE_2D, 0, ue, Nt.width, Nt.height, 0, Yt, te, null));
      else if (b.isDataTexture) if (ye.length > 0) {
        xe && we && a.texStorage2D(o.TEXTURE_2D, wt, ue, ye[0].width, ye[0].height);
        for (let ut = 0, Tt = ye.length; ut < Tt; ut++) jt = ye[ut], xe ? F && a.texSubImage2D(o.TEXTURE_2D, ut, 0, 0, jt.width, jt.height, Yt, te, jt.data) : a.texImage2D(o.TEXTURE_2D, ut, ue, jt.width, jt.height, 0, Yt, te, jt.data);
        b.generateMipmaps = false;
      } else xe ? (we && a.texStorage2D(o.TEXTURE_2D, wt, ue, Nt.width, Nt.height), F && a.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, Nt.width, Nt.height, Yt, te, Nt.data)) : a.texImage2D(o.TEXTURE_2D, 0, ue, Nt.width, Nt.height, 0, Yt, te, Nt.data);
      else if (b.isCompressedTexture) if (b.isCompressedArrayTexture) {
        xe && we && a.texStorage3D(o.TEXTURE_2D_ARRAY, wt, ue, ye[0].width, ye[0].height, Nt.depth);
        for (let ut = 0, Tt = ye.length; ut < Tt; ut++) if (jt = ye[ut], b.format !== Yi) if (Yt !== null) if (xe) {
          if (F) if (b.layerUpdates.size > 0) {
            const zt = J0(jt.width, jt.height, b.format, b.type);
            for (const Gt of b.layerUpdates) {
              const fe = jt.data.subarray(Gt * zt / jt.data.BYTES_PER_ELEMENT, (Gt + 1) * zt / jt.data.BYTES_PER_ELEMENT);
              a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY, ut, 0, 0, Gt, jt.width, jt.height, 1, Yt, fe);
            }
            b.clearLayerUpdates();
          } else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY, ut, 0, 0, 0, jt.width, jt.height, Nt.depth, Yt, jt.data);
        } else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY, ut, ue, jt.width, jt.height, Nt.depth, 0, jt.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else xe ? F && a.texSubImage3D(o.TEXTURE_2D_ARRAY, ut, 0, 0, 0, jt.width, jt.height, Nt.depth, Yt, te, jt.data) : a.texImage3D(o.TEXTURE_2D_ARRAY, ut, ue, jt.width, jt.height, Nt.depth, 0, Yt, te, jt.data);
      } else {
        xe && we && a.texStorage2D(o.TEXTURE_2D, wt, ue, ye[0].width, ye[0].height);
        for (let ut = 0, Tt = ye.length; ut < Tt; ut++) jt = ye[ut], b.format !== Yi ? Yt !== null ? xe ? F && a.compressedTexSubImage2D(o.TEXTURE_2D, ut, 0, 0, jt.width, jt.height, Yt, jt.data) : a.compressedTexImage2D(o.TEXTURE_2D, ut, ue, jt.width, jt.height, 0, jt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : xe ? F && a.texSubImage2D(o.TEXTURE_2D, ut, 0, 0, jt.width, jt.height, Yt, te, jt.data) : a.texImage2D(o.TEXTURE_2D, ut, ue, jt.width, jt.height, 0, Yt, te, jt.data);
      }
      else if (b.isDataArrayTexture) if (xe) {
        if (we && a.texStorage3D(o.TEXTURE_2D_ARRAY, wt, ue, Nt.width, Nt.height, Nt.depth), F) if (b.layerUpdates.size > 0) {
          const ut = J0(Nt.width, Nt.height, b.format, b.type);
          for (const Tt of b.layerUpdates) {
            const zt = Nt.data.subarray(Tt * ut / Nt.data.BYTES_PER_ELEMENT, (Tt + 1) * ut / Nt.data.BYTES_PER_ELEMENT);
            a.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, Tt, Nt.width, Nt.height, 1, Yt, te, zt);
          }
          b.clearLayerUpdates();
        } else a.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Nt.width, Nt.height, Nt.depth, Yt, te, Nt.data);
      } else a.texImage3D(o.TEXTURE_2D_ARRAY, 0, ue, Nt.width, Nt.height, Nt.depth, 0, Yt, te, Nt.data);
      else if (b.isData3DTexture) xe ? (we && a.texStorage3D(o.TEXTURE_3D, wt, ue, Nt.width, Nt.height, Nt.depth), F && a.texSubImage3D(o.TEXTURE_3D, 0, 0, 0, 0, Nt.width, Nt.height, Nt.depth, Yt, te, Nt.data)) : a.texImage3D(o.TEXTURE_3D, 0, ue, Nt.width, Nt.height, Nt.depth, 0, Yt, te, Nt.data);
      else if (b.isFramebufferTexture) {
        if (we) if (xe) a.texStorage2D(o.TEXTURE_2D, wt, ue, Nt.width, Nt.height);
        else {
          let ut = Nt.width, Tt = Nt.height;
          for (let zt = 0; zt < wt; zt++) a.texImage2D(o.TEXTURE_2D, zt, ue, ut, Tt, 0, Yt, te, null), ut >>= 1, Tt >>= 1;
        }
      } else if (ye.length > 0) {
        if (xe && we) {
          const ut = ne(ye[0]);
          a.texStorage2D(o.TEXTURE_2D, wt, ue, ut.width, ut.height);
        }
        for (let ut = 0, Tt = ye.length; ut < Tt; ut++) jt = ye[ut], xe ? F && a.texSubImage2D(o.TEXTURE_2D, ut, 0, 0, Yt, te, jt) : a.texImage2D(o.TEXTURE_2D, ut, ue, Yt, te, jt);
        b.generateMipmaps = false;
      } else if (xe) {
        if (we) {
          const ut = ne(Nt);
          a.texStorage2D(o.TEXTURE_2D, wt, ue, ut.width, ut.height);
        }
        F && a.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, Yt, te, Nt);
      } else a.texImage2D(o.TEXTURE_2D, 0, ue, Yt, te, Nt);
      S(b) && y(xt), qt.__version = Et.version, b.onUpdate && b.onUpdate(b);
    }
    L.__version = b.version;
  }
  function k(L, b, it) {
    if (b.image.length !== 6) return;
    const xt = pt(L, b), Rt = b.source;
    a.bindTexture(o.TEXTURE_CUBE_MAP, L.__webglTexture, o.TEXTURE0 + it);
    const Et = s.get(Rt);
    if (Rt.version !== Et.__version || xt === true) {
      a.activeTexture(o.TEXTURE0 + it);
      const qt = Ve.getPrimaries(Ve.workingColorSpace), vt = b.colorSpace === Er ? null : Ve.getPrimaries(b.colorSpace), Ht = b.colorSpace === Er || qt === vt ? o.NONE : o.BROWSER_DEFAULT_WEBGL;
      o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, b.flipY), o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), o.pixelStorei(o.UNPACK_ALIGNMENT, b.unpackAlignment), o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ht);
      const Te = b.isCompressedTexture || b.image[0].isCompressedTexture, Nt = b.image[0] && b.image[0].isDataTexture, Yt = [];
      for (let Tt = 0; Tt < 6; Tt++) !Te && !Nt ? Yt[Tt] = R(b.image[Tt], true, c.maxCubemapSize) : Yt[Tt] = Nt ? b.image[Tt].image : b.image[Tt], Yt[Tt] = Se(b, Yt[Tt]);
      const te = Yt[0], ue = f.convert(b.format, b.colorSpace), jt = f.convert(b.type), ye = O(b.internalFormat, ue, jt, b.colorSpace), xe = b.isVideoTexture !== true, we = Et.__version === void 0 || xt === true, F = Rt.dataReady;
      let wt = et(b, te);
      ce(o.TEXTURE_CUBE_MAP, b);
      let ut;
      if (Te) {
        xe && we && a.texStorage2D(o.TEXTURE_CUBE_MAP, wt, ye, te.width, te.height);
        for (let Tt = 0; Tt < 6; Tt++) {
          ut = Yt[Tt].mipmaps;
          for (let zt = 0; zt < ut.length; zt++) {
            const Gt = ut[zt];
            b.format !== Yi ? ue !== null ? xe ? F && a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt, 0, 0, Gt.width, Gt.height, ue, Gt.data) : a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt, ye, Gt.width, Gt.height, 0, Gt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : xe ? F && a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt, 0, 0, Gt.width, Gt.height, ue, jt, Gt.data) : a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt, ye, Gt.width, Gt.height, 0, ue, jt, Gt.data);
          }
        }
      } else {
        if (ut = b.mipmaps, xe && we) {
          ut.length > 0 && wt++;
          const Tt = ne(Yt[0]);
          a.texStorage2D(o.TEXTURE_CUBE_MAP, wt, ye, Tt.width, Tt.height);
        }
        for (let Tt = 0; Tt < 6; Tt++) if (Nt) {
          xe ? F && a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, 0, 0, 0, Yt[Tt].width, Yt[Tt].height, ue, jt, Yt[Tt].data) : a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, 0, ye, Yt[Tt].width, Yt[Tt].height, 0, ue, jt, Yt[Tt].data);
          for (let zt = 0; zt < ut.length; zt++) {
            const fe = ut[zt].image[Tt].image;
            xe ? F && a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt + 1, 0, 0, fe.width, fe.height, ue, jt, fe.data) : a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt + 1, ye, fe.width, fe.height, 0, ue, jt, fe.data);
          }
        } else {
          xe ? F && a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, 0, 0, 0, ue, jt, Yt[Tt]) : a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, 0, ye, ue, jt, Yt[Tt]);
          for (let zt = 0; zt < ut.length; zt++) {
            const Gt = ut[zt];
            xe ? F && a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt + 1, 0, 0, ue, jt, Gt.image[Tt]) : a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + Tt, zt + 1, ye, ue, jt, Gt.image[Tt]);
          }
        }
      }
      S(b) && y(o.TEXTURE_CUBE_MAP), Et.__version = Rt.version, b.onUpdate && b.onUpdate(b);
    }
    L.__version = b.version;
  }
  function H(L, b, it, xt, Rt, Et) {
    const qt = f.convert(it.format, it.colorSpace), vt = f.convert(it.type), Ht = O(it.internalFormat, qt, vt, it.colorSpace), Te = s.get(b), Nt = s.get(it);
    if (Nt.__renderTarget = b, !Te.__hasExternalTextures) {
      const Yt = Math.max(1, b.width >> Et), te = Math.max(1, b.height >> Et);
      Rt === o.TEXTURE_3D || Rt === o.TEXTURE_2D_ARRAY ? a.texImage3D(Rt, Et, Ht, Yt, te, b.depth, 0, qt, vt, null) : a.texImage2D(Rt, Et, Ht, Yt, te, 0, qt, vt, null);
    }
    a.bindFramebuffer(o.FRAMEBUFFER, L), ae(b) ? d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER, xt, Rt, Nt.__webglTexture, 0, le(b)) : (Rt === o.TEXTURE_2D || Rt >= o.TEXTURE_CUBE_MAP_POSITIVE_X && Rt <= o.TEXTURE_CUBE_MAP_NEGATIVE_Z) && o.framebufferTexture2D(o.FRAMEBUFFER, xt, Rt, Nt.__webglTexture, Et), a.bindFramebuffer(o.FRAMEBUFFER, null);
  }
  function W(L, b, it) {
    if (o.bindRenderbuffer(o.RENDERBUFFER, L), b.depthBuffer) {
      const xt = b.depthTexture, Rt = xt && xt.isDepthTexture ? xt.type : null, Et = N(b.stencilBuffer, Rt), qt = b.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT, vt = le(b);
      ae(b) ? d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER, vt, Et, b.width, b.height) : it ? o.renderbufferStorageMultisample(o.RENDERBUFFER, vt, Et, b.width, b.height) : o.renderbufferStorage(o.RENDERBUFFER, Et, b.width, b.height), o.framebufferRenderbuffer(o.FRAMEBUFFER, qt, o.RENDERBUFFER, L);
    } else {
      const xt = b.textures;
      for (let Rt = 0; Rt < xt.length; Rt++) {
        const Et = xt[Rt], qt = f.convert(Et.format, Et.colorSpace), vt = f.convert(Et.type), Ht = O(Et.internalFormat, qt, vt, Et.colorSpace), Te = le(b);
        it && ae(b) === false ? o.renderbufferStorageMultisample(o.RENDERBUFFER, Te, Ht, b.width, b.height) : ae(b) ? d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER, Te, Ht, b.width, b.height) : o.renderbufferStorage(o.RENDERBUFFER, Ht, b.width, b.height);
      }
    }
    o.bindRenderbuffer(o.RENDERBUFFER, null);
  }
  function mt(L, b) {
    if (b && b.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (a.bindFramebuffer(o.FRAMEBUFFER, L), !(b.depthTexture && b.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const xt = s.get(b.depthTexture);
    xt.__renderTarget = b, (!xt.__webglTexture || b.depthTexture.image.width !== b.width || b.depthTexture.image.height !== b.height) && (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate = true), gt(b.depthTexture, 0);
    const Rt = xt.__webglTexture, Et = le(b);
    if (b.depthTexture.format === ho) ae(b) ? d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER, o.DEPTH_ATTACHMENT, o.TEXTURE_2D, Rt, 0, Et) : o.framebufferTexture2D(o.FRAMEBUFFER, o.DEPTH_ATTACHMENT, o.TEXTURE_2D, Rt, 0);
    else if (b.depthTexture.format === xo) ae(b) ? d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER, o.DEPTH_STENCIL_ATTACHMENT, o.TEXTURE_2D, Rt, 0, Et) : o.framebufferTexture2D(o.FRAMEBUFFER, o.DEPTH_STENCIL_ATTACHMENT, o.TEXTURE_2D, Rt, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function _t(L) {
    const b = s.get(L), it = L.isWebGLCubeRenderTarget === true;
    if (b.__boundDepthTexture !== L.depthTexture) {
      const xt = L.depthTexture;
      if (b.__depthDisposeCallback && b.__depthDisposeCallback(), xt) {
        const Rt = () => {
          delete b.__boundDepthTexture, delete b.__depthDisposeCallback, xt.removeEventListener("dispose", Rt);
        };
        xt.addEventListener("dispose", Rt), b.__depthDisposeCallback = Rt;
      }
      b.__boundDepthTexture = xt;
    }
    if (L.depthTexture && !b.__autoAllocateDepthBuffer) {
      if (it) throw new Error("target.depthTexture not supported in Cube render targets");
      mt(b.__webglFramebuffer, L);
    } else if (it) {
      b.__webglDepthbuffer = [];
      for (let xt = 0; xt < 6; xt++) if (a.bindFramebuffer(o.FRAMEBUFFER, b.__webglFramebuffer[xt]), b.__webglDepthbuffer[xt] === void 0) b.__webglDepthbuffer[xt] = o.createRenderbuffer(), W(b.__webglDepthbuffer[xt], L, false);
      else {
        const Rt = L.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT, Et = b.__webglDepthbuffer[xt];
        o.bindRenderbuffer(o.RENDERBUFFER, Et), o.framebufferRenderbuffer(o.FRAMEBUFFER, Rt, o.RENDERBUFFER, Et);
      }
    } else if (a.bindFramebuffer(o.FRAMEBUFFER, b.__webglFramebuffer), b.__webglDepthbuffer === void 0) b.__webglDepthbuffer = o.createRenderbuffer(), W(b.__webglDepthbuffer, L, false);
    else {
      const xt = L.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT, Rt = b.__webglDepthbuffer;
      o.bindRenderbuffer(o.RENDERBUFFER, Rt), o.framebufferRenderbuffer(o.FRAMEBUFFER, xt, o.RENDERBUFFER, Rt);
    }
    a.bindFramebuffer(o.FRAMEBUFFER, null);
  }
  function At(L, b, it) {
    const xt = s.get(L);
    b !== void 0 && H(xt.__webglFramebuffer, L, L.texture, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, 0), it !== void 0 && _t(L);
  }
  function Ct(L) {
    const b = L.texture, it = s.get(L), xt = s.get(b);
    L.addEventListener("dispose", I);
    const Rt = L.textures, Et = L.isWebGLCubeRenderTarget === true, qt = Rt.length > 1;
    if (qt || (xt.__webglTexture === void 0 && (xt.__webglTexture = o.createTexture()), xt.__version = b.version, h.memory.textures++), Et) {
      it.__webglFramebuffer = [];
      for (let vt = 0; vt < 6; vt++) if (b.mipmaps && b.mipmaps.length > 0) {
        it.__webglFramebuffer[vt] = [];
        for (let Ht = 0; Ht < b.mipmaps.length; Ht++) it.__webglFramebuffer[vt][Ht] = o.createFramebuffer();
      } else it.__webglFramebuffer[vt] = o.createFramebuffer();
    } else {
      if (b.mipmaps && b.mipmaps.length > 0) {
        it.__webglFramebuffer = [];
        for (let vt = 0; vt < b.mipmaps.length; vt++) it.__webglFramebuffer[vt] = o.createFramebuffer();
      } else it.__webglFramebuffer = o.createFramebuffer();
      if (qt) for (let vt = 0, Ht = Rt.length; vt < Ht; vt++) {
        const Te = s.get(Rt[vt]);
        Te.__webglTexture === void 0 && (Te.__webglTexture = o.createTexture(), h.memory.textures++);
      }
      if (L.samples > 0 && ae(L) === false) {
        it.__webglMultisampledFramebuffer = o.createFramebuffer(), it.__webglColorRenderbuffer = [], a.bindFramebuffer(o.FRAMEBUFFER, it.__webglMultisampledFramebuffer);
        for (let vt = 0; vt < Rt.length; vt++) {
          const Ht = Rt[vt];
          it.__webglColorRenderbuffer[vt] = o.createRenderbuffer(), o.bindRenderbuffer(o.RENDERBUFFER, it.__webglColorRenderbuffer[vt]);
          const Te = f.convert(Ht.format, Ht.colorSpace), Nt = f.convert(Ht.type), Yt = O(Ht.internalFormat, Te, Nt, Ht.colorSpace, L.isXRRenderTarget === true), te = le(L);
          o.renderbufferStorageMultisample(o.RENDERBUFFER, te, Yt, L.width, L.height), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0 + vt, o.RENDERBUFFER, it.__webglColorRenderbuffer[vt]);
        }
        o.bindRenderbuffer(o.RENDERBUFFER, null), L.depthBuffer && (it.__webglDepthRenderbuffer = o.createRenderbuffer(), W(it.__webglDepthRenderbuffer, L, true)), a.bindFramebuffer(o.FRAMEBUFFER, null);
      }
    }
    if (Et) {
      a.bindTexture(o.TEXTURE_CUBE_MAP, xt.__webglTexture), ce(o.TEXTURE_CUBE_MAP, b);
      for (let vt = 0; vt < 6; vt++) if (b.mipmaps && b.mipmaps.length > 0) for (let Ht = 0; Ht < b.mipmaps.length; Ht++) H(it.__webglFramebuffer[vt][Ht], L, b, o.COLOR_ATTACHMENT0, o.TEXTURE_CUBE_MAP_POSITIVE_X + vt, Ht);
      else H(it.__webglFramebuffer[vt], L, b, o.COLOR_ATTACHMENT0, o.TEXTURE_CUBE_MAP_POSITIVE_X + vt, 0);
      S(b) && y(o.TEXTURE_CUBE_MAP), a.unbindTexture();
    } else if (qt) {
      for (let vt = 0, Ht = Rt.length; vt < Ht; vt++) {
        const Te = Rt[vt], Nt = s.get(Te);
        a.bindTexture(o.TEXTURE_2D, Nt.__webglTexture), ce(o.TEXTURE_2D, Te), H(it.__webglFramebuffer, L, Te, o.COLOR_ATTACHMENT0 + vt, o.TEXTURE_2D, 0), S(Te) && y(o.TEXTURE_2D);
      }
      a.unbindTexture();
    } else {
      let vt = o.TEXTURE_2D;
      if ((L.isWebGL3DRenderTarget || L.isWebGLArrayRenderTarget) && (vt = L.isWebGL3DRenderTarget ? o.TEXTURE_3D : o.TEXTURE_2D_ARRAY), a.bindTexture(vt, xt.__webglTexture), ce(vt, b), b.mipmaps && b.mipmaps.length > 0) for (let Ht = 0; Ht < b.mipmaps.length; Ht++) H(it.__webglFramebuffer[Ht], L, b, o.COLOR_ATTACHMENT0, vt, Ht);
      else H(it.__webglFramebuffer, L, b, o.COLOR_ATTACHMENT0, vt, 0);
      S(b) && y(vt), a.unbindTexture();
    }
    L.depthBuffer && _t(L);
  }
  function Ut(L) {
    const b = L.textures;
    for (let it = 0, xt = b.length; it < xt; it++) {
      const Rt = b[it];
      if (S(Rt)) {
        const Et = P(L), qt = s.get(Rt).__webglTexture;
        a.bindTexture(Et, qt), y(Et), a.unbindTexture();
      }
    }
  }
  const re = [], j = [];
  function Fe(L) {
    if (L.samples > 0) {
      if (ae(L) === false) {
        const b = L.textures, it = L.width, xt = L.height;
        let Rt = o.COLOR_BUFFER_BIT;
        const Et = L.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT, qt = s.get(L), vt = b.length > 1;
        if (vt) for (let Ht = 0; Ht < b.length; Ht++) a.bindFramebuffer(o.FRAMEBUFFER, qt.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0 + Ht, o.RENDERBUFFER, null), a.bindFramebuffer(o.FRAMEBUFFER, qt.__webglFramebuffer), o.framebufferTexture2D(o.DRAW_FRAMEBUFFER, o.COLOR_ATTACHMENT0 + Ht, o.TEXTURE_2D, null, 0);
        a.bindFramebuffer(o.READ_FRAMEBUFFER, qt.__webglMultisampledFramebuffer), a.bindFramebuffer(o.DRAW_FRAMEBUFFER, qt.__webglFramebuffer);
        for (let Ht = 0; Ht < b.length; Ht++) {
          if (L.resolveDepthBuffer && (L.depthBuffer && (Rt |= o.DEPTH_BUFFER_BIT), L.stencilBuffer && L.resolveStencilBuffer && (Rt |= o.STENCIL_BUFFER_BIT)), vt) {
            o.framebufferRenderbuffer(o.READ_FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.RENDERBUFFER, qt.__webglColorRenderbuffer[Ht]);
            const Te = s.get(b[Ht]).__webglTexture;
            o.framebufferTexture2D(o.DRAW_FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, Te, 0);
          }
          o.blitFramebuffer(0, 0, it, xt, 0, 0, it, xt, Rt, o.NEAREST), m === true && (re.length = 0, j.length = 0, re.push(o.COLOR_ATTACHMENT0 + Ht), L.depthBuffer && L.resolveDepthBuffer === false && (re.push(Et), j.push(Et), o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER, j)), o.invalidateFramebuffer(o.READ_FRAMEBUFFER, re));
        }
        if (a.bindFramebuffer(o.READ_FRAMEBUFFER, null), a.bindFramebuffer(o.DRAW_FRAMEBUFFER, null), vt) for (let Ht = 0; Ht < b.length; Ht++) {
          a.bindFramebuffer(o.FRAMEBUFFER, qt.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0 + Ht, o.RENDERBUFFER, qt.__webglColorRenderbuffer[Ht]);
          const Te = s.get(b[Ht]).__webglTexture;
          a.bindFramebuffer(o.FRAMEBUFFER, qt.__webglFramebuffer), o.framebufferTexture2D(o.DRAW_FRAMEBUFFER, o.COLOR_ATTACHMENT0 + Ht, o.TEXTURE_2D, Te, 0);
        }
        a.bindFramebuffer(o.DRAW_FRAMEBUFFER, qt.__webglMultisampledFramebuffer);
      } else if (L.depthBuffer && L.resolveDepthBuffer === false && m) {
        const b = L.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT;
        o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER, [b]);
      }
    }
  }
  function le(L) {
    return Math.min(c.maxSamples, L.samples);
  }
  function ae(L) {
    const b = s.get(L);
    return L.samples > 0 && n.has("WEBGL_multisampled_render_to_texture") === true && b.__useRenderToTexture !== false;
  }
  function Ft(L) {
    const b = h.render.frame;
    g.get(L) !== b && (g.set(L, b), L.update());
  }
  function Se(L, b) {
    const it = L.colorSpace, xt = L.format, Rt = L.type;
    return L.isCompressedTexture === true || L.isVideoTexture === true || it !== So && it !== Er && (Ve.getTransfer(it) === en ? (xt !== Yi || Rt !== Ga) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", it)), b;
  }
  function ne(L) {
    return typeof HTMLImageElement < "u" && L instanceof HTMLImageElement ? (_.width = L.naturalWidth || L.width, _.height = L.naturalHeight || L.height) : typeof VideoFrame < "u" && L instanceof VideoFrame ? (_.width = L.displayWidth, _.height = L.displayHeight) : (_.width = L.width, _.height = L.height), _;
  }
  this.allocateTextureUnit = ot, this.resetTextureUnits = at, this.setTexture2D = gt, this.setTexture2DArray = X, this.setTexture3D = rt, this.setTextureCube = Z, this.rebindTextures = At, this.setupRenderTarget = Ct, this.updateRenderTargetMipmap = Ut, this.updateMultisampleRenderTarget = Fe, this.setupDepthRenderbuffer = _t, this.setupFrameBufferTexture = H, this.useMultisampledRTT = ae;
}
function MR(o, n) {
  function a(s, c = Er) {
    let f;
    const h = Ve.getTransfer(c);
    if (s === Ga) return o.UNSIGNED_BYTE;
    if (s === zp) return o.UNSIGNED_SHORT_4_4_4_4;
    if (s === Pp) return o.UNSIGNED_SHORT_5_5_5_1;
    if (s === dx) return o.UNSIGNED_INT_5_9_9_9_REV;
    if (s === fx) return o.BYTE;
    if (s === hx) return o.SHORT;
    if (s === bl) return o.UNSIGNED_SHORT;
    if (s === Op) return o.INT;
    if (s === os) return o.UNSIGNED_INT;
    if (s === Pa) return o.FLOAT;
    if (s === Al) return o.HALF_FLOAT;
    if (s === px) return o.ALPHA;
    if (s === mx) return o.RGB;
    if (s === Yi) return o.RGBA;
    if (s === gx) return o.LUMINANCE;
    if (s === vx) return o.LUMINANCE_ALPHA;
    if (s === ho) return o.DEPTH_COMPONENT;
    if (s === xo) return o.DEPTH_STENCIL;
    if (s === _x) return o.RED;
    if (s === Ip) return o.RED_INTEGER;
    if (s === xx) return o.RG;
    if (s === Bp) return o.RG_INTEGER;
    if (s === Fp) return o.RGBA_INTEGER;
    if (s === Mu || s === Eu || s === Tu || s === bu) if (h === en) if (f = n.get("WEBGL_compressed_texture_s3tc_srgb"), f !== null) {
      if (s === Mu) return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (s === Eu) return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (s === Tu) return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (s === bu) return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (f = n.get("WEBGL_compressed_texture_s3tc"), f !== null) {
      if (s === Mu) return f.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (s === Eu) return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (s === Tu) return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (s === bu) return f.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (s === np || s === ip || s === ap || s === rp) if (f = n.get("WEBGL_compressed_texture_pvrtc"), f !== null) {
      if (s === np) return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (s === ip) return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (s === ap) return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (s === rp) return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (s === sp || s === op || s === lp) if (f = n.get("WEBGL_compressed_texture_etc"), f !== null) {
      if (s === sp || s === op) return h === en ? f.COMPRESSED_SRGB8_ETC2 : f.COMPRESSED_RGB8_ETC2;
      if (s === lp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : f.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (s === cp || s === up || s === fp || s === hp || s === dp || s === pp || s === mp || s === gp || s === vp || s === _p || s === xp || s === yp || s === Sp || s === Mp) if (f = n.get("WEBGL_compressed_texture_astc"), f !== null) {
      if (s === cp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : f.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (s === up) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : f.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (s === fp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : f.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (s === hp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : f.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (s === dp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : f.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (s === pp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : f.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (s === mp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : f.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (s === gp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : f.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (s === vp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : f.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (s === _p) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : f.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (s === xp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : f.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (s === yp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : f.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (s === Sp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : f.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (s === Mp) return h === en ? f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : f.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (s === Au || s === Ep || s === Tp) if (f = n.get("EXT_texture_compression_bptc"), f !== null) {
      if (s === Au) return h === en ? f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : f.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (s === Ep) return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (s === Tp) return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (s === yx || s === bp || s === Ap || s === Rp) if (f = n.get("EXT_texture_compression_rgtc"), f !== null) {
      if (s === Au) return f.COMPRESSED_RED_RGTC1_EXT;
      if (s === bp) return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (s === Ap) return f.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (s === Rp) return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return s === _o ? o.UNSIGNED_INT_24_8 : o[s] !== void 0 ? o[s] : null;
  }
  return { convert: a };
}
class ER extends Oi {
  constructor(n = []) {
    super(), this.isArrayCamera = true, this.cameras = n;
  }
}
class vu extends ti {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const TR = { type: "move" };
class Gd {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new vu(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new vu(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new ft(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new ft()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new vu(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new ft(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new ft()), this._grip;
  }
  dispatchEvent(n) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(n), this._grip !== null && this._grip.dispatchEvent(n), this._hand !== null && this._hand.dispatchEvent(n), this;
  }
  connect(n) {
    if (n && n.hand) {
      const a = this._hand;
      if (a) for (const s of n.hand.values()) this._getHandJoint(a, s);
    }
    return this.dispatchEvent({ type: "connected", data: n }), this;
  }
  disconnect(n) {
    return this.dispatchEvent({ type: "disconnected", data: n }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(n, a, s) {
    let c = null, f = null, h = null;
    const d = this._targetRay, m = this._grip, _ = this._hand;
    if (n && a.session.visibilityState !== "visible-blurred") {
      if (_ && n.hand) {
        h = true;
        for (const R of n.hand.values()) {
          const S = a.getJointPose(R, s), y = this._getHandJoint(_, R);
          S !== null && (y.matrix.fromArray(S.transform.matrix), y.matrix.decompose(y.position, y.rotation, y.scale), y.matrixWorldNeedsUpdate = true, y.jointRadius = S.radius), y.visible = S !== null;
        }
        const g = _.joints["index-finger-tip"], p = _.joints["thumb-tip"], x = g.position.distanceTo(p.position), M = 0.02, T = 5e-3;
        _.inputState.pinching && x > M + T ? (_.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: n.handedness, target: this })) : !_.inputState.pinching && x <= M - T && (_.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: n.handedness, target: this }));
      } else m !== null && n.gripSpace && (f = a.getPose(n.gripSpace, s), f !== null && (m.matrix.fromArray(f.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = true, f.linearVelocity ? (m.hasLinearVelocity = true, m.linearVelocity.copy(f.linearVelocity)) : m.hasLinearVelocity = false, f.angularVelocity ? (m.hasAngularVelocity = true, m.angularVelocity.copy(f.angularVelocity)) : m.hasAngularVelocity = false));
      d !== null && (c = a.getPose(n.targetRaySpace, s), c === null && f !== null && (c = f), c !== null && (d.matrix.fromArray(c.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = true, c.linearVelocity ? (d.hasLinearVelocity = true, d.linearVelocity.copy(c.linearVelocity)) : d.hasLinearVelocity = false, c.angularVelocity ? (d.hasAngularVelocity = true, d.angularVelocity.copy(c.angularVelocity)) : d.hasAngularVelocity = false, this.dispatchEvent(TR)));
    }
    return d !== null && (d.visible = c !== null), m !== null && (m.visible = f !== null), _ !== null && (_.visible = h !== null), this;
  }
  _getHandJoint(n, a) {
    if (n.joints[a.jointName] === void 0) {
      const s = new vu();
      s.matrixAutoUpdate = false, s.visible = false, n.joints[a.jointName] = s, n.add(s);
    }
    return n.joints[a.jointName];
  }
}
const bR = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, AR = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class RR {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(n, a, s) {
    if (this.texture === null) {
      const c = new fi(), f = n.properties.get(c);
      f.__webglTexture = a.texture, (a.depthNear != s.depthNear || a.depthFar != s.depthFar) && (this.depthNear = a.depthNear, this.depthFar = a.depthFar), this.texture = c;
    }
  }
  getMesh(n) {
    if (this.texture !== null && this.mesh === null) {
      const a = n.cameras[0].viewport, s = new Ki({ vertexShader: bR, fragmentShader: AR, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: a.z }, depthHeight: { value: a.w } } });
      this.mesh = new Ba(new Ou(20, 20), s);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class CR extends Mo {
  constructor(n, a) {
    super();
    const s = this;
    let c = null, f = 1, h = null, d = "local-floor", m = 1, _ = null, g = null, p = null, x = null, M = null, T = null;
    const R = new RR(), S = a.getContextAttributes();
    let y = null, P = null;
    const O = [], N = [], et = new an();
    let V = null;
    const I = new Oi();
    I.viewport = new Mn();
    const q = new Oi();
    q.viewport = new Mn();
    const U = [I, q], C = new ER();
    let B = null, at = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(A) {
      let k = O[A];
      return k === void 0 && (k = new Gd(), O[A] = k), k.getTargetRaySpace();
    }, this.getControllerGrip = function(A) {
      let k = O[A];
      return k === void 0 && (k = new Gd(), O[A] = k), k.getGripSpace();
    }, this.getHand = function(A) {
      let k = O[A];
      return k === void 0 && (k = new Gd(), O[A] = k), k.getHandSpace();
    };
    function ot(A) {
      const k = N.indexOf(A.inputSource);
      if (k === -1) return;
      const H = O[k];
      H !== void 0 && (H.update(A.inputSource, A.frame, _ || h), H.dispatchEvent({ type: A.type, data: A.inputSource }));
    }
    function ht() {
      c.removeEventListener("select", ot), c.removeEventListener("selectstart", ot), c.removeEventListener("selectend", ot), c.removeEventListener("squeeze", ot), c.removeEventListener("squeezestart", ot), c.removeEventListener("squeezeend", ot), c.removeEventListener("end", ht), c.removeEventListener("inputsourceschange", gt);
      for (let A = 0; A < O.length; A++) {
        const k = N[A];
        k !== null && (N[A] = null, O[A].disconnect(k));
      }
      B = null, at = null, R.reset(), n.setRenderTarget(y), M = null, x = null, p = null, c = null, P = null, pt.stop(), s.isPresenting = false, n.setPixelRatio(V), n.setSize(et.width, et.height, false), s.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(A) {
      f = A, s.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(A) {
      d = A, s.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return _ || h;
    }, this.setReferenceSpace = function(A) {
      _ = A;
    }, this.getBaseLayer = function() {
      return x !== null ? x : M;
    }, this.getBinding = function() {
      return p;
    }, this.getFrame = function() {
      return T;
    }, this.getSession = function() {
      return c;
    }, this.setSession = async function(A) {
      if (c = A, c !== null) {
        if (y = n.getRenderTarget(), c.addEventListener("select", ot), c.addEventListener("selectstart", ot), c.addEventListener("selectend", ot), c.addEventListener("squeeze", ot), c.addEventListener("squeezestart", ot), c.addEventListener("squeezeend", ot), c.addEventListener("end", ht), c.addEventListener("inputsourceschange", gt), S.xrCompatible !== true && await a.makeXRCompatible(), V = n.getPixelRatio(), n.getSize(et), c.renderState.layers === void 0) {
          const k = { antialias: S.antialias, alpha: true, depth: S.depth, stencil: S.stencil, framebufferScaleFactor: f };
          M = new XRWebGLLayer(c, a, k), c.updateRenderState({ baseLayer: M }), n.setPixelRatio(1), n.setSize(M.framebufferWidth, M.framebufferHeight, false), P = new ls(M.framebufferWidth, M.framebufferHeight, { format: Yi, type: Ga, colorSpace: n.outputColorSpace, stencilBuffer: S.stencil });
        } else {
          let k = null, H = null, W = null;
          S.depth && (W = S.stencil ? a.DEPTH24_STENCIL8 : a.DEPTH_COMPONENT24, k = S.stencil ? xo : ho, H = S.stencil ? _o : os);
          const mt = { colorFormat: a.RGBA8, depthFormat: W, scaleFactor: f };
          p = new XRWebGLBinding(c, a), x = p.createProjectionLayer(mt), c.updateRenderState({ layers: [x] }), n.setPixelRatio(1), n.setSize(x.textureWidth, x.textureHeight, false), P = new ls(x.textureWidth, x.textureHeight, { format: Yi, type: Ga, depthTexture: new zx(x.textureWidth, x.textureHeight, H, void 0, void 0, void 0, void 0, void 0, void 0, k), stencilBuffer: S.stencil, colorSpace: n.outputColorSpace, samples: S.antialias ? 4 : 0, resolveDepthBuffer: x.ignoreDepthValues === false });
        }
        P.isXRRenderTarget = true, this.setFoveation(m), _ = null, h = await c.requestReferenceSpace(d), pt.setContext(c), pt.start(), s.isPresenting = true, s.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (c !== null) return c.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return R.getDepthTexture();
    };
    function gt(A) {
      for (let k = 0; k < A.removed.length; k++) {
        const H = A.removed[k], W = N.indexOf(H);
        W >= 0 && (N[W] = null, O[W].disconnect(H));
      }
      for (let k = 0; k < A.added.length; k++) {
        const H = A.added[k];
        let W = N.indexOf(H);
        if (W === -1) {
          for (let _t = 0; _t < O.length; _t++) if (_t >= N.length) {
            N.push(H), W = _t;
            break;
          } else if (N[_t] === null) {
            N[_t] = H, W = _t;
            break;
          }
          if (W === -1) break;
        }
        const mt = O[W];
        mt && mt.connect(H);
      }
    }
    const X = new ft(), rt = new ft();
    function Z(A, k, H) {
      X.setFromMatrixPosition(k.matrixWorld), rt.setFromMatrixPosition(H.matrixWorld);
      const W = X.distanceTo(rt), mt = k.projectionMatrix.elements, _t = H.projectionMatrix.elements, At = mt[14] / (mt[10] - 1), Ct = mt[14] / (mt[10] + 1), Ut = (mt[9] + 1) / mt[5], re = (mt[9] - 1) / mt[5], j = (mt[8] - 1) / mt[0], Fe = (_t[8] + 1) / _t[0], le = At * j, ae = At * Fe, Ft = W / (-j + Fe), Se = Ft * -j;
      if (k.matrixWorld.decompose(A.position, A.quaternion, A.scale), A.translateX(Se), A.translateZ(Ft), A.matrixWorld.compose(A.position, A.quaternion, A.scale), A.matrixWorldInverse.copy(A.matrixWorld).invert(), mt[10] === -1) A.projectionMatrix.copy(k.projectionMatrix), A.projectionMatrixInverse.copy(k.projectionMatrixInverse);
      else {
        const ne = At + Ft, L = Ct + Ft, b = le - Se, it = ae + (W - Se), xt = Ut * Ct / L * ne, Rt = re * Ct / L * ne;
        A.projectionMatrix.makePerspective(b, it, xt, Rt, ne, L), A.projectionMatrixInverse.copy(A.projectionMatrix).invert();
      }
    }
    function St(A, k) {
      k === null ? A.matrixWorld.copy(A.matrix) : A.matrixWorld.multiplyMatrices(k.matrixWorld, A.matrix), A.matrixWorldInverse.copy(A.matrixWorld).invert();
    }
    this.updateCamera = function(A) {
      if (c === null) return;
      let k = A.near, H = A.far;
      R.texture !== null && (R.depthNear > 0 && (k = R.depthNear), R.depthFar > 0 && (H = R.depthFar)), C.near = q.near = I.near = k, C.far = q.far = I.far = H, (B !== C.near || at !== C.far) && (c.updateRenderState({ depthNear: C.near, depthFar: C.far }), B = C.near, at = C.far), I.layers.mask = A.layers.mask | 2, q.layers.mask = A.layers.mask | 4, C.layers.mask = I.layers.mask | q.layers.mask;
      const W = A.parent, mt = C.cameras;
      St(C, W);
      for (let _t = 0; _t < mt.length; _t++) St(mt[_t], W);
      mt.length === 2 ? Z(C, I, q) : C.projectionMatrix.copy(I.projectionMatrix), bt(A, C, W);
    };
    function bt(A, k, H) {
      H === null ? A.matrix.copy(k.matrixWorld) : (A.matrix.copy(H.matrixWorld), A.matrix.invert(), A.matrix.multiply(k.matrixWorld)), A.matrix.decompose(A.position, A.quaternion, A.scale), A.updateMatrixWorld(true), A.projectionMatrix.copy(k.projectionMatrix), A.projectionMatrixInverse.copy(k.projectionMatrixInverse), A.isPerspectiveCamera && (A.fov = Cp * 2 * Math.atan(1 / A.projectionMatrix.elements[5]), A.zoom = 1);
    }
    this.getCamera = function() {
      return C;
    }, this.getFoveation = function() {
      if (!(x === null && M === null)) return m;
    }, this.setFoveation = function(A) {
      m = A, x !== null && (x.fixedFoveation = A), M !== null && M.fixedFoveation !== void 0 && (M.fixedFoveation = A);
    }, this.hasDepthSensing = function() {
      return R.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return R.getMesh(C);
    };
    let Vt = null;
    function ce(A, k) {
      if (g = k.getViewerPose(_ || h), T = k, g !== null) {
        const H = g.views;
        M !== null && (n.setRenderTargetFramebuffer(P, M.framebuffer), n.setRenderTarget(P));
        let W = false;
        H.length !== C.cameras.length && (C.cameras.length = 0, W = true);
        for (let _t = 0; _t < H.length; _t++) {
          const At = H[_t];
          let Ct = null;
          if (M !== null) Ct = M.getViewport(At);
          else {
            const re = p.getViewSubImage(x, At);
            Ct = re.viewport, _t === 0 && (n.setRenderTargetTextures(P, re.colorTexture, x.ignoreDepthValues ? void 0 : re.depthStencilTexture), n.setRenderTarget(P));
          }
          let Ut = U[_t];
          Ut === void 0 && (Ut = new Oi(), Ut.layers.enable(_t), Ut.viewport = new Mn(), U[_t] = Ut), Ut.matrix.fromArray(At.transform.matrix), Ut.matrix.decompose(Ut.position, Ut.quaternion, Ut.scale), Ut.projectionMatrix.fromArray(At.projectionMatrix), Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(), Ut.viewport.set(Ct.x, Ct.y, Ct.width, Ct.height), _t === 0 && (C.matrix.copy(Ut.matrix), C.matrix.decompose(C.position, C.quaternion, C.scale)), W === true && C.cameras.push(Ut);
        }
        const mt = c.enabledFeatures;
        if (mt && mt.includes("depth-sensing")) {
          const _t = p.getDepthInformation(H[0]);
          _t && _t.isValid && _t.texture && R.init(n, _t, c.renderState);
        }
      }
      for (let H = 0; H < O.length; H++) {
        const W = N[H], mt = O[H];
        W !== null && mt !== void 0 && mt.update(W, k, _ || h);
      }
      Vt && Vt(A, k), k.detectedPlanes && s.dispatchEvent({ type: "planesdetected", data: k }), T = null;
    }
    const pt = new Ox();
    pt.setAnimationLoop(ce), this.setAnimationLoop = function(A) {
      Vt = A;
    }, this.dispose = function() {
    };
  }
}
const $r = new Va(), wR = new _n();
function DR(o, n) {
  function a(S, y) {
    S.matrixAutoUpdate === true && S.updateMatrix(), y.value.copy(S.matrix);
  }
  function s(S, y) {
    y.color.getRGB(S.fogColor.value, Dx(o)), y.isFog ? (S.fogNear.value = y.near, S.fogFar.value = y.far) : y.isFogExp2 && (S.fogDensity.value = y.density);
  }
  function c(S, y, P, O, N) {
    y.isMeshBasicMaterial || y.isMeshLambertMaterial ? f(S, y) : y.isMeshToonMaterial ? (f(S, y), p(S, y)) : y.isMeshPhongMaterial ? (f(S, y), g(S, y)) : y.isMeshStandardMaterial ? (f(S, y), x(S, y), y.isMeshPhysicalMaterial && M(S, y, N)) : y.isMeshMatcapMaterial ? (f(S, y), T(S, y)) : y.isMeshDepthMaterial ? f(S, y) : y.isMeshDistanceMaterial ? (f(S, y), R(S, y)) : y.isMeshNormalMaterial ? f(S, y) : y.isLineBasicMaterial ? (h(S, y), y.isLineDashedMaterial && d(S, y)) : y.isPointsMaterial ? m(S, y, P, O) : y.isSpriteMaterial ? _(S, y) : y.isShadowMaterial ? (S.color.value.copy(y.color), S.opacity.value = y.opacity) : y.isShaderMaterial && (y.uniformsNeedUpdate = false);
  }
  function f(S, y) {
    S.opacity.value = y.opacity, y.color && S.diffuse.value.copy(y.color), y.emissive && S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity), y.map && (S.map.value = y.map, a(y.map, S.mapTransform)), y.alphaMap && (S.alphaMap.value = y.alphaMap, a(y.alphaMap, S.alphaMapTransform)), y.bumpMap && (S.bumpMap.value = y.bumpMap, a(y.bumpMap, S.bumpMapTransform), S.bumpScale.value = y.bumpScale, y.side === ui && (S.bumpScale.value *= -1)), y.normalMap && (S.normalMap.value = y.normalMap, a(y.normalMap, S.normalMapTransform), S.normalScale.value.copy(y.normalScale), y.side === ui && S.normalScale.value.negate()), y.displacementMap && (S.displacementMap.value = y.displacementMap, a(y.displacementMap, S.displacementMapTransform), S.displacementScale.value = y.displacementScale, S.displacementBias.value = y.displacementBias), y.emissiveMap && (S.emissiveMap.value = y.emissiveMap, a(y.emissiveMap, S.emissiveMapTransform)), y.specularMap && (S.specularMap.value = y.specularMap, a(y.specularMap, S.specularMapTransform)), y.alphaTest > 0 && (S.alphaTest.value = y.alphaTest);
    const P = n.get(y), O = P.envMap, N = P.envMapRotation;
    O && (S.envMap.value = O, $r.copy(N), $r.x *= -1, $r.y *= -1, $r.z *= -1, O.isCubeTexture && O.isRenderTargetTexture === false && ($r.y *= -1, $r.z *= -1), S.envMapRotation.value.setFromMatrix4(wR.makeRotationFromEuler($r)), S.flipEnvMap.value = O.isCubeTexture && O.isRenderTargetTexture === false ? -1 : 1, S.reflectivity.value = y.reflectivity, S.ior.value = y.ior, S.refractionRatio.value = y.refractionRatio), y.lightMap && (S.lightMap.value = y.lightMap, S.lightMapIntensity.value = y.lightMapIntensity, a(y.lightMap, S.lightMapTransform)), y.aoMap && (S.aoMap.value = y.aoMap, S.aoMapIntensity.value = y.aoMapIntensity, a(y.aoMap, S.aoMapTransform));
  }
  function h(S, y) {
    S.diffuse.value.copy(y.color), S.opacity.value = y.opacity, y.map && (S.map.value = y.map, a(y.map, S.mapTransform));
  }
  function d(S, y) {
    S.dashSize.value = y.dashSize, S.totalSize.value = y.dashSize + y.gapSize, S.scale.value = y.scale;
  }
  function m(S, y, P, O) {
    S.diffuse.value.copy(y.color), S.opacity.value = y.opacity, S.size.value = y.size * P, S.scale.value = O * 0.5, y.map && (S.map.value = y.map, a(y.map, S.uvTransform)), y.alphaMap && (S.alphaMap.value = y.alphaMap, a(y.alphaMap, S.alphaMapTransform)), y.alphaTest > 0 && (S.alphaTest.value = y.alphaTest);
  }
  function _(S, y) {
    S.diffuse.value.copy(y.color), S.opacity.value = y.opacity, S.rotation.value = y.rotation, y.map && (S.map.value = y.map, a(y.map, S.mapTransform)), y.alphaMap && (S.alphaMap.value = y.alphaMap, a(y.alphaMap, S.alphaMapTransform)), y.alphaTest > 0 && (S.alphaTest.value = y.alphaTest);
  }
  function g(S, y) {
    S.specular.value.copy(y.specular), S.shininess.value = Math.max(y.shininess, 1e-4);
  }
  function p(S, y) {
    y.gradientMap && (S.gradientMap.value = y.gradientMap);
  }
  function x(S, y) {
    S.metalness.value = y.metalness, y.metalnessMap && (S.metalnessMap.value = y.metalnessMap, a(y.metalnessMap, S.metalnessMapTransform)), S.roughness.value = y.roughness, y.roughnessMap && (S.roughnessMap.value = y.roughnessMap, a(y.roughnessMap, S.roughnessMapTransform)), y.envMap && (S.envMapIntensity.value = y.envMapIntensity);
  }
  function M(S, y, P) {
    S.ior.value = y.ior, y.sheen > 0 && (S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen), S.sheenRoughness.value = y.sheenRoughness, y.sheenColorMap && (S.sheenColorMap.value = y.sheenColorMap, a(y.sheenColorMap, S.sheenColorMapTransform)), y.sheenRoughnessMap && (S.sheenRoughnessMap.value = y.sheenRoughnessMap, a(y.sheenRoughnessMap, S.sheenRoughnessMapTransform))), y.clearcoat > 0 && (S.clearcoat.value = y.clearcoat, S.clearcoatRoughness.value = y.clearcoatRoughness, y.clearcoatMap && (S.clearcoatMap.value = y.clearcoatMap, a(y.clearcoatMap, S.clearcoatMapTransform)), y.clearcoatRoughnessMap && (S.clearcoatRoughnessMap.value = y.clearcoatRoughnessMap, a(y.clearcoatRoughnessMap, S.clearcoatRoughnessMapTransform)), y.clearcoatNormalMap && (S.clearcoatNormalMap.value = y.clearcoatNormalMap, a(y.clearcoatNormalMap, S.clearcoatNormalMapTransform), S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale), y.side === ui && S.clearcoatNormalScale.value.negate())), y.dispersion > 0 && (S.dispersion.value = y.dispersion), y.iridescence > 0 && (S.iridescence.value = y.iridescence, S.iridescenceIOR.value = y.iridescenceIOR, S.iridescenceThicknessMinimum.value = y.iridescenceThicknessRange[0], S.iridescenceThicknessMaximum.value = y.iridescenceThicknessRange[1], y.iridescenceMap && (S.iridescenceMap.value = y.iridescenceMap, a(y.iridescenceMap, S.iridescenceMapTransform)), y.iridescenceThicknessMap && (S.iridescenceThicknessMap.value = y.iridescenceThicknessMap, a(y.iridescenceThicknessMap, S.iridescenceThicknessMapTransform))), y.transmission > 0 && (S.transmission.value = y.transmission, S.transmissionSamplerMap.value = P.texture, S.transmissionSamplerSize.value.set(P.width, P.height), y.transmissionMap && (S.transmissionMap.value = y.transmissionMap, a(y.transmissionMap, S.transmissionMapTransform)), S.thickness.value = y.thickness, y.thicknessMap && (S.thicknessMap.value = y.thicknessMap, a(y.thicknessMap, S.thicknessMapTransform)), S.attenuationDistance.value = y.attenuationDistance, S.attenuationColor.value.copy(y.attenuationColor)), y.anisotropy > 0 && (S.anisotropyVector.value.set(y.anisotropy * Math.cos(y.anisotropyRotation), y.anisotropy * Math.sin(y.anisotropyRotation)), y.anisotropyMap && (S.anisotropyMap.value = y.anisotropyMap, a(y.anisotropyMap, S.anisotropyMapTransform))), S.specularIntensity.value = y.specularIntensity, S.specularColor.value.copy(y.specularColor), y.specularColorMap && (S.specularColorMap.value = y.specularColorMap, a(y.specularColorMap, S.specularColorMapTransform)), y.specularIntensityMap && (S.specularIntensityMap.value = y.specularIntensityMap, a(y.specularIntensityMap, S.specularIntensityMapTransform));
  }
  function T(S, y) {
    y.matcap && (S.matcap.value = y.matcap);
  }
  function R(S, y) {
    const P = n.get(y).light;
    S.referencePosition.value.setFromMatrixPosition(P.matrixWorld), S.nearDistance.value = P.shadow.camera.near, S.farDistance.value = P.shadow.camera.far;
  }
  return { refreshFogUniforms: s, refreshMaterialUniforms: c };
}
function UR(o, n, a, s) {
  let c = {}, f = {}, h = [];
  const d = o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);
  function m(P, O) {
    const N = O.program;
    s.uniformBlockBinding(P, N);
  }
  function _(P, O) {
    let N = c[P.id];
    N === void 0 && (T(P), N = g(P), c[P.id] = N, P.addEventListener("dispose", S));
    const et = O.program;
    s.updateUBOMapping(P, et);
    const V = n.render.frame;
    f[P.id] !== V && (x(P), f[P.id] = V);
  }
  function g(P) {
    const O = p();
    P.__bindingPointIndex = O;
    const N = o.createBuffer(), et = P.__size, V = P.usage;
    return o.bindBuffer(o.UNIFORM_BUFFER, N), o.bufferData(o.UNIFORM_BUFFER, et, V), o.bindBuffer(o.UNIFORM_BUFFER, null), o.bindBufferBase(o.UNIFORM_BUFFER, O, N), N;
  }
  function p() {
    for (let P = 0; P < d; P++) if (h.indexOf(P) === -1) return h.push(P), P;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function x(P) {
    const O = c[P.id], N = P.uniforms, et = P.__cache;
    o.bindBuffer(o.UNIFORM_BUFFER, O);
    for (let V = 0, I = N.length; V < I; V++) {
      const q = Array.isArray(N[V]) ? N[V] : [N[V]];
      for (let U = 0, C = q.length; U < C; U++) {
        const B = q[U];
        if (M(B, V, U, et) === true) {
          const at = B.__offset, ot = Array.isArray(B.value) ? B.value : [B.value];
          let ht = 0;
          for (let gt = 0; gt < ot.length; gt++) {
            const X = ot[gt], rt = R(X);
            typeof X == "number" || typeof X == "boolean" ? (B.__data[0] = X, o.bufferSubData(o.UNIFORM_BUFFER, at + ht, B.__data)) : X.isMatrix3 ? (B.__data[0] = X.elements[0], B.__data[1] = X.elements[1], B.__data[2] = X.elements[2], B.__data[3] = 0, B.__data[4] = X.elements[3], B.__data[5] = X.elements[4], B.__data[6] = X.elements[5], B.__data[7] = 0, B.__data[8] = X.elements[6], B.__data[9] = X.elements[7], B.__data[10] = X.elements[8], B.__data[11] = 0) : (X.toArray(B.__data, ht), ht += rt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          o.bufferSubData(o.UNIFORM_BUFFER, at, B.__data);
        }
      }
    }
    o.bindBuffer(o.UNIFORM_BUFFER, null);
  }
  function M(P, O, N, et) {
    const V = P.value, I = O + "_" + N;
    if (et[I] === void 0) return typeof V == "number" || typeof V == "boolean" ? et[I] = V : et[I] = V.clone(), true;
    {
      const q = et[I];
      if (typeof V == "number" || typeof V == "boolean") {
        if (q !== V) return et[I] = V, true;
      } else if (q.equals(V) === false) return q.copy(V), true;
    }
    return false;
  }
  function T(P) {
    const O = P.uniforms;
    let N = 0;
    const et = 16;
    for (let I = 0, q = O.length; I < q; I++) {
      const U = Array.isArray(O[I]) ? O[I] : [O[I]];
      for (let C = 0, B = U.length; C < B; C++) {
        const at = U[C], ot = Array.isArray(at.value) ? at.value : [at.value];
        for (let ht = 0, gt = ot.length; ht < gt; ht++) {
          const X = ot[ht], rt = R(X), Z = N % et, St = Z % rt.boundary, bt = Z + St;
          N += St, bt !== 0 && et - bt < rt.storage && (N += et - bt), at.__data = new Float32Array(rt.storage / Float32Array.BYTES_PER_ELEMENT), at.__offset = N, N += rt.storage;
        }
      }
    }
    const V = N % et;
    return V > 0 && (N += et - V), P.__size = N, P.__cache = {}, this;
  }
  function R(P) {
    const O = { boundary: 0, storage: 0 };
    return typeof P == "number" || typeof P == "boolean" ? (O.boundary = 4, O.storage = 4) : P.isVector2 ? (O.boundary = 8, O.storage = 8) : P.isVector3 || P.isColor ? (O.boundary = 16, O.storage = 12) : P.isVector4 ? (O.boundary = 16, O.storage = 16) : P.isMatrix3 ? (O.boundary = 48, O.storage = 48) : P.isMatrix4 ? (O.boundary = 64, O.storage = 64) : P.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", P), O;
  }
  function S(P) {
    const O = P.target;
    O.removeEventListener("dispose", S);
    const N = h.indexOf(O.__bindingPointIndex);
    h.splice(N, 1), o.deleteBuffer(c[O.id]), delete c[O.id], delete f[O.id];
  }
  function y() {
    for (const P in c) o.deleteBuffer(c[P]);
    h = [], c = {}, f = {};
  }
  return { bind: m, update: _, dispose: y };
}
class NR {
  constructor(n = {}) {
    const { canvas: a = xE(), context: s = null, depth: c = true, stencil: f = false, alpha: h = false, antialias: d = false, premultipliedAlpha: m = true, preserveDrawingBuffer: _ = false, powerPreference: g = "default", failIfMajorPerformanceCaveat: p = false, reverseDepthBuffer: x = false } = n;
    this.isWebGLRenderer = true;
    let M;
    if (s !== null) {
      if (typeof WebGLRenderingContext < "u" && s instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      M = s.getContextAttributes().alpha;
    } else M = h;
    const T = new Uint32Array(4), R = new Int32Array(4);
    let S = null, y = null;
    const P = [], O = [];
    this.domElement = a, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Li, this.toneMapping = br, this.toneMappingExposure = 1;
    const N = this;
    let et = false, V = 0, I = 0, q = null, U = -1, C = null;
    const B = new Mn(), at = new Mn();
    let ot = null;
    const ht = new ke(0);
    let gt = 0, X = a.width, rt = a.height, Z = 1, St = null, bt = null;
    const Vt = new Mn(0, 0, X, rt), ce = new Mn(0, 0, X, rt);
    let pt = false;
    const A = new Lx();
    let k = false, H = false;
    const W = new _n(), mt = new _n(), _t = new ft(), At = new Mn(), Ct = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Ut = false;
    function re() {
      return q === null ? Z : 1;
    }
    let j = s;
    function Fe(w, Q) {
      return a.getContext(w, Q);
    }
    try {
      const w = { alpha: true, depth: c, stencil: f, antialias: d, premultipliedAlpha: m, preserveDrawingBuffer: _, powerPreference: g, failIfMajorPerformanceCaveat: p };
      if ("setAttribute" in a && a.setAttribute("data-engine", `three.js r${Lp}`), a.addEventListener("webglcontextlost", Tt, false), a.addEventListener("webglcontextrestored", zt, false), a.addEventListener("webglcontextcreationerror", Gt, false), j === null) {
        const Q = "webgl2";
        if (j = Fe(Q, w), j === null) throw Fe(Q) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (w) {
      throw console.error("THREE.WebGLRenderer: " + w.message), w;
    }
    let le, ae, Ft, Se, ne, L, b, it, xt, Rt, Et, qt, vt, Ht, Te, Nt, Yt, te, ue, jt, ye, xe, we, F;
    function wt() {
      le = new Ib(j), le.init(), xe = new MR(j, le), ae = new Db(j, le, n, xe), Ft = new xR(j, le), ae.reverseDepthBuffer && x && Ft.buffers.depth.setReversed(true), Se = new Hb(j), ne = new aR(), L = new SR(j, le, Ft, ne, ae, xe, Se), b = new Nb(N), it = new Pb(N), xt = new qE(j), we = new Cb(j, xt), Rt = new Bb(j, xt, Se, we), Et = new Vb(j, Rt, xt, Se), ue = new Gb(j, ae, L), Nt = new Ub(ne), qt = new iR(N, b, it, le, ae, we, Nt), vt = new DR(N, ne), Ht = new sR(), Te = new hR(le), te = new Rb(N, b, it, Ft, Et, M, m), Yt = new vR(N, Et, ae), F = new UR(j, Se, ae, Ft), jt = new wb(j, le, Se), ye = new Fb(j, le, Se), Se.programs = qt.programs, N.capabilities = ae, N.extensions = le, N.properties = ne, N.renderLists = Ht, N.shadowMap = Yt, N.state = Ft, N.info = Se;
    }
    wt();
    const ut = new CR(N, j);
    this.xr = ut, this.getContext = function() {
      return j;
    }, this.getContextAttributes = function() {
      return j.getContextAttributes();
    }, this.forceContextLoss = function() {
      const w = le.get("WEBGL_lose_context");
      w && w.loseContext();
    }, this.forceContextRestore = function() {
      const w = le.get("WEBGL_lose_context");
      w && w.restoreContext();
    }, this.getPixelRatio = function() {
      return Z;
    }, this.setPixelRatio = function(w) {
      w !== void 0 && (Z = w, this.setSize(X, rt, false));
    }, this.getSize = function(w) {
      return w.set(X, rt);
    }, this.setSize = function(w, Q, lt = true) {
      if (ut.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      X = w, rt = Q, a.width = Math.floor(w * Z), a.height = Math.floor(Q * Z), lt === true && (a.style.width = w + "px", a.style.height = Q + "px"), this.setViewport(0, 0, w, Q);
    }, this.getDrawingBufferSize = function(w) {
      return w.set(X * Z, rt * Z).floor();
    }, this.setDrawingBufferSize = function(w, Q, lt) {
      X = w, rt = Q, Z = lt, a.width = Math.floor(w * lt), a.height = Math.floor(Q * lt), this.setViewport(0, 0, w, Q);
    }, this.getCurrentViewport = function(w) {
      return w.copy(B);
    }, this.getViewport = function(w) {
      return w.copy(Vt);
    }, this.setViewport = function(w, Q, lt, ct) {
      w.isVector4 ? Vt.set(w.x, w.y, w.z, w.w) : Vt.set(w, Q, lt, ct), Ft.viewport(B.copy(Vt).multiplyScalar(Z).round());
    }, this.getScissor = function(w) {
      return w.copy(ce);
    }, this.setScissor = function(w, Q, lt, ct) {
      w.isVector4 ? ce.set(w.x, w.y, w.z, w.w) : ce.set(w, Q, lt, ct), Ft.scissor(at.copy(ce).multiplyScalar(Z).round());
    }, this.getScissorTest = function() {
      return pt;
    }, this.setScissorTest = function(w) {
      Ft.setScissorTest(pt = w);
    }, this.setOpaqueSort = function(w) {
      St = w;
    }, this.setTransparentSort = function(w) {
      bt = w;
    }, this.getClearColor = function(w) {
      return w.copy(te.getClearColor());
    }, this.setClearColor = function() {
      te.setClearColor.apply(te, arguments);
    }, this.getClearAlpha = function() {
      return te.getClearAlpha();
    }, this.setClearAlpha = function() {
      te.setClearAlpha.apply(te, arguments);
    }, this.clear = function(w = true, Q = true, lt = true) {
      let ct = 0;
      if (w) {
        let $ = false;
        if (q !== null) {
          const Lt = q.texture.format;
          $ = Lt === Fp || Lt === Bp || Lt === Ip;
        }
        if ($) {
          const Lt = q.texture.type, Pt = Lt === Ga || Lt === os || Lt === bl || Lt === _o || Lt === zp || Lt === Pp, Zt = te.getClearColor(), Qt = te.getClearAlpha(), ie = Zt.r, ee = Zt.g, Xt = Zt.b;
          Pt ? (T[0] = ie, T[1] = ee, T[2] = Xt, T[3] = Qt, j.clearBufferuiv(j.COLOR, 0, T)) : (R[0] = ie, R[1] = ee, R[2] = Xt, R[3] = Qt, j.clearBufferiv(j.COLOR, 0, R));
        } else ct |= j.COLOR_BUFFER_BIT;
      }
      Q && (ct |= j.DEPTH_BUFFER_BIT), lt && (ct |= j.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), j.clear(ct);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      a.removeEventListener("webglcontextlost", Tt, false), a.removeEventListener("webglcontextrestored", zt, false), a.removeEventListener("webglcontextcreationerror", Gt, false), Ht.dispose(), Te.dispose(), ne.dispose(), b.dispose(), it.dispose(), Et.dispose(), we.dispose(), F.dispose(), qt.dispose(), ut.dispose(), ut.removeEventListener("sessionstart", fn), ut.removeEventListener("sessionend", Xa), zi.stop();
    };
    function Tt(w) {
      w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), et = true;
    }
    function zt() {
      console.log("THREE.WebGLRenderer: Context Restored."), et = false;
      const w = Se.autoReset, Q = Yt.enabled, lt = Yt.autoUpdate, ct = Yt.needsUpdate, $ = Yt.type;
      wt(), Se.autoReset = w, Yt.enabled = Q, Yt.autoUpdate = lt, Yt.needsUpdate = ct, Yt.type = $;
    }
    function Gt(w) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage);
    }
    function fe(w) {
      const Q = w.target;
      Q.removeEventListener("dispose", fe), $e(Q);
    }
    function $e(w) {
      cn(w), ne.remove(w);
    }
    function cn(w) {
      const Q = ne.get(w).programs;
      Q !== void 0 && (Q.forEach(function(lt) {
        qt.releaseProgram(lt);
      }), w.isShaderMaterial && qt.releaseShaderCache(w));
    }
    this.renderBufferDirect = function(w, Q, lt, ct, $, Lt) {
      Q === null && (Q = Ct);
      const Pt = $.isMesh && $.matrixWorld.determinant() < 0, Zt = bo(w, Q, lt, ct, $);
      Ft.setMaterial(ct, Pt);
      let Qt = lt.index, ie = 1;
      if (ct.wireframe === true) {
        if (Qt = Rt.getWireframeAttribute(lt), Qt === void 0) return;
        ie = 2;
      }
      const ee = lt.drawRange, Xt = lt.attributes.position;
      let be = ee.start * ie, je = (ee.start + ee.count) * ie;
      Lt !== null && (be = Math.max(be, Lt.start * ie), je = Math.min(je, (Lt.start + Lt.count) * ie)), Qt !== null ? (be = Math.max(be, 0), je = Math.min(je, Qt.count)) : Xt != null && (be = Math.max(be, 0), je = Math.min(je, Xt.count));
      const Ye = je - be;
      if (Ye < 0 || Ye === 1 / 0) return;
      we.setup($, ct, Zt, lt, Qt);
      let un, Ue = jt;
      if (Qt !== null && (un = xt.get(Qt), Ue = ye, Ue.setIndex(un)), $.isMesh) ct.wireframe === true ? (Ft.setLineWidth(ct.wireframeLinewidth * re()), Ue.setMode(j.LINES)) : Ue.setMode(j.TRIANGLES);
      else if ($.isLine) {
        let Jt = ct.linewidth;
        Jt === void 0 && (Jt = 1), Ft.setLineWidth(Jt * re()), $.isLineSegments ? Ue.setMode(j.LINES) : $.isLineLoop ? Ue.setMode(j.LINE_LOOP) : Ue.setMode(j.LINE_STRIP);
      } else $.isPoints ? Ue.setMode(j.POINTS) : $.isSprite && Ue.setMode(j.TRIANGLES);
      if ($.isBatchedMesh) if ($._multiDrawInstances !== null) Ue.renderMultiDrawInstances($._multiDrawStarts, $._multiDrawCounts, $._multiDrawCount, $._multiDrawInstances);
      else if (le.get("WEBGL_multi_draw")) Ue.renderMultiDraw($._multiDrawStarts, $._multiDrawCounts, $._multiDrawCount);
      else {
        const Jt = $._multiDrawStarts, hn = $._multiDrawCounts, Ne = $._multiDrawCount, sn = Qt ? xt.get(Qt).bytesPerElement : 1, kn = ne.get(ct).currentProgram.getUniforms();
        for (let xn = 0; xn < Ne; xn++) kn.setValue(j, "_gl_DrawID", xn), Ue.render(Jt[xn] / sn, hn[xn]);
      }
      else if ($.isInstancedMesh) Ue.renderInstances(be, Ye, $.count);
      else if (lt.isInstancedBufferGeometry) {
        const Jt = lt._maxInstanceCount !== void 0 ? lt._maxInstanceCount : 1 / 0, hn = Math.min(lt.instanceCount, Jt);
        Ue.renderInstances(be, Ye, hn);
      } else Ue.render(be, Ye);
    };
    function De(w, Q, lt) {
      w.transparent === true && w.side === za && w.forceSinglePass === false ? (w.side = ui, w.needsUpdate = true, ei(w, Q, lt), w.side = Ar, w.needsUpdate = true, ei(w, Q, lt), w.side = za) : ei(w, Q, lt);
    }
    this.compile = function(w, Q, lt = null) {
      lt === null && (lt = w), y = Te.get(lt), y.init(Q), O.push(y), lt.traverseVisible(function($) {
        $.isLight && $.layers.test(Q.layers) && (y.pushLight($), $.castShadow && y.pushShadow($));
      }), w !== lt && w.traverseVisible(function($) {
        $.isLight && $.layers.test(Q.layers) && (y.pushLight($), $.castShadow && y.pushShadow($));
      }), y.setupLights();
      const ct = /* @__PURE__ */ new Set();
      return w.traverse(function($) {
        if (!($.isMesh || $.isPoints || $.isLine || $.isSprite)) return;
        const Lt = $.material;
        if (Lt) if (Array.isArray(Lt)) for (let Pt = 0; Pt < Lt.length; Pt++) {
          const Zt = Lt[Pt];
          De(Zt, lt, $), ct.add(Zt);
        }
        else De(Lt, lt, $), ct.add(Lt);
      }), O.pop(), y = null, ct;
    }, this.compileAsync = function(w, Q, lt = null) {
      const ct = this.compile(w, Q, lt);
      return new Promise(($) => {
        function Lt() {
          if (ct.forEach(function(Pt) {
            ne.get(Pt).currentProgram.isReady() && ct.delete(Pt);
          }), ct.size === 0) {
            $(w);
            return;
          }
          setTimeout(Lt, 10);
        }
        le.get("KHR_parallel_shader_compile") !== null ? Lt() : setTimeout(Lt, 10);
      });
    };
    let Xe = null;
    function rn(w) {
      Xe && Xe(w);
    }
    function fn() {
      zi.stop();
    }
    function Xa() {
      zi.start();
    }
    const zi = new Ox();
    zi.setAnimationLoop(rn), typeof self < "u" && zi.setContext(self), this.setAnimationLoop = function(w) {
      Xe = w, ut.setAnimationLoop(w), w === null ? zi.stop() : zi.start();
    }, ut.addEventListener("sessionstart", fn), ut.addEventListener("sessionend", Xa), this.render = function(w, Q) {
      if (Q !== void 0 && Q.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (et === true) return;
      if (w.matrixWorldAutoUpdate === true && w.updateMatrixWorld(), Q.parent === null && Q.matrixWorldAutoUpdate === true && Q.updateMatrixWorld(), ut.enabled === true && ut.isPresenting === true && (ut.cameraAutoUpdate === true && ut.updateCamera(Q), Q = ut.getCamera()), w.isScene === true && w.onBeforeRender(N, w, Q, q), y = Te.get(w, O.length), y.init(Q), O.push(y), mt.multiplyMatrices(Q.projectionMatrix, Q.matrixWorldInverse), A.setFromProjectionMatrix(mt), H = this.localClippingEnabled, k = Nt.init(this.clippingPlanes, H), S = Ht.get(w, P.length), S.init(), P.push(S), ut.enabled === true && ut.isPresenting === true) {
        const Lt = N.xr.getDepthSensingMesh();
        Lt !== null && pa(Lt, Q, -1 / 0, N.sortObjects);
      }
      pa(w, Q, 0, N.sortObjects), S.finish(), N.sortObjects === true && S.sort(St, bt), Ut = ut.enabled === false || ut.isPresenting === false || ut.hasDepthSensing() === false, Ut && te.addToRenderList(S, w), this.info.render.frame++, k === true && Nt.beginShadows();
      const lt = y.state.shadowsArray;
      Yt.render(lt, w, Q), k === true && Nt.endShadows(), this.info.autoReset === true && this.info.reset();
      const ct = S.opaque, $ = S.transmissive;
      if (y.setupLights(), Q.isArrayCamera) {
        const Lt = Q.cameras;
        if ($.length > 0) for (let Pt = 0, Zt = Lt.length; Pt < Zt; Pt++) {
          const Qt = Lt[Pt];
          Ji(ct, $, w, Qt);
        }
        Ut && te.render(w);
        for (let Pt = 0, Zt = Lt.length; Pt < Zt; Pt++) {
          const Qt = Lt[Pt];
          Mi(S, w, Qt, Qt.viewport);
        }
      } else $.length > 0 && Ji(ct, $, w, Q), Ut && te.render(w), Mi(S, w, Q);
      q !== null && (L.updateMultisampleRenderTarget(q), L.updateRenderTargetMipmap(q)), w.isScene === true && w.onAfterRender(N, w, Q), we.resetDefaultState(), U = -1, C = null, O.pop(), O.length > 0 ? (y = O[O.length - 1], k === true && Nt.setGlobalState(N.clippingPlanes, y.state.camera)) : y = null, P.pop(), P.length > 0 ? S = P[P.length - 1] : S = null;
    };
    function pa(w, Q, lt, ct) {
      if (w.visible === false) return;
      if (w.layers.test(Q.layers)) {
        if (w.isGroup) lt = w.renderOrder;
        else if (w.isLOD) w.autoUpdate === true && w.update(Q);
        else if (w.isLight) y.pushLight(w), w.castShadow && y.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || A.intersectsSprite(w)) {
            ct && At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);
            const Pt = Et.update(w), Zt = w.material;
            Zt.visible && S.push(w, Pt, Zt, lt, At.z, null);
          }
        } else if ((w.isMesh || w.isLine || w.isPoints) && (!w.frustumCulled || A.intersectsObject(w))) {
          const Pt = Et.update(w), Zt = w.material;
          if (ct && (w.boundingSphere !== void 0 ? (w.boundingSphere === null && w.computeBoundingSphere(), At.copy(w.boundingSphere.center)) : (Pt.boundingSphere === null && Pt.computeBoundingSphere(), At.copy(Pt.boundingSphere.center)), At.applyMatrix4(w.matrixWorld).applyMatrix4(mt)), Array.isArray(Zt)) {
            const Qt = Pt.groups;
            for (let ie = 0, ee = Qt.length; ie < ee; ie++) {
              const Xt = Qt[ie], be = Zt[Xt.materialIndex];
              be && be.visible && S.push(w, Pt, be, lt, At.z, Xt);
            }
          } else Zt.visible && S.push(w, Pt, Zt, lt, At.z, null);
        }
      }
      const Lt = w.children;
      for (let Pt = 0, Zt = Lt.length; Pt < Zt; Pt++) pa(Lt[Pt], Q, lt, ct);
    }
    function Mi(w, Q, lt, ct) {
      const $ = w.opaque, Lt = w.transmissive, Pt = w.transparent;
      y.setupLightsView(lt), k === true && Nt.setGlobalState(N.clippingPlanes, lt), ct && Ft.viewport(B.copy(ct)), $.length > 0 && Pi($, Q, lt), Lt.length > 0 && Pi(Lt, Q, lt), Pt.length > 0 && Pi(Pt, Q, lt), Ft.buffers.depth.setTest(true), Ft.buffers.depth.setMask(true), Ft.buffers.color.setMask(true), Ft.setPolygonOffset(false);
    }
    function Ji(w, Q, lt, ct) {
      if ((lt.isScene === true ? lt.overrideMaterial : null) !== null) return;
      y.state.transmissionRenderTarget[ct.id] === void 0 && (y.state.transmissionRenderTarget[ct.id] = new ls(1, 1, { generateMipmaps: true, type: le.has("EXT_color_buffer_half_float") || le.has("EXT_color_buffer_float") ? Al : Ga, minFilter: rs, samples: 4, stencilBuffer: f, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ve.workingColorSpace }));
      const Lt = y.state.transmissionRenderTarget[ct.id], Pt = ct.viewport || B;
      Lt.setSize(Pt.z, Pt.w);
      const Zt = N.getRenderTarget();
      N.setRenderTarget(Lt), N.getClearColor(ht), gt = N.getClearAlpha(), gt < 1 && N.setClearColor(16777215, 0.5), N.clear(), Ut && te.render(lt);
      const Qt = N.toneMapping;
      N.toneMapping = br;
      const ie = ct.viewport;
      if (ct.viewport !== void 0 && (ct.viewport = void 0), y.setupLightsView(ct), k === true && Nt.setGlobalState(N.clippingPlanes, ct), Pi(w, lt, ct), L.updateMultisampleRenderTarget(Lt), L.updateRenderTargetMipmap(Lt), le.has("WEBGL_multisampled_render_to_texture") === false) {
        let ee = false;
        for (let Xt = 0, be = Q.length; Xt < be; Xt++) {
          const je = Q[Xt], Ye = je.object, un = je.geometry, Ue = je.material, Jt = je.group;
          if (Ue.side === za && Ye.layers.test(ct.layers)) {
            const hn = Ue.side;
            Ue.side = ui, Ue.needsUpdate = true, hi(Ye, lt, ct, un, Ue, Jt), Ue.side = hn, Ue.needsUpdate = true, ee = true;
          }
        }
        ee === true && (L.updateMultisampleRenderTarget(Lt), L.updateRenderTargetMipmap(Lt));
      }
      N.setRenderTarget(Zt), N.setClearColor(ht, gt), ie !== void 0 && (ct.viewport = ie), N.toneMapping = Qt;
    }
    function Pi(w, Q, lt) {
      const ct = Q.isScene === true ? Q.overrideMaterial : null;
      for (let $ = 0, Lt = w.length; $ < Lt; $++) {
        const Pt = w[$], Zt = Pt.object, Qt = Pt.geometry, ie = ct === null ? Pt.material : ct, ee = Pt.group;
        Zt.layers.test(lt.layers) && hi(Zt, Q, lt, Qt, ie, ee);
      }
    }
    function hi(w, Q, lt, ct, $, Lt) {
      w.onBeforeRender(N, Q, lt, ct, $, Lt), w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), $.onBeforeRender(N, Q, lt, ct, w, Lt), $.transparent === true && $.side === za && $.forceSinglePass === false ? ($.side = ui, $.needsUpdate = true, N.renderBufferDirect(lt, Q, ct, $, w, Lt), $.side = Ar, $.needsUpdate = true, N.renderBufferDirect(lt, Q, ct, $, w, Lt), $.side = za) : N.renderBufferDirect(lt, Q, ct, $, w, Lt), w.onAfterRender(N, Q, lt, ct, $, Lt);
    }
    function ei(w, Q, lt) {
      Q.isScene !== true && (Q = Ct);
      const ct = ne.get(w), $ = y.state.lights, Lt = y.state.shadowsArray, Pt = $.state.version, Zt = qt.getParameters(w, $.state, Lt, Q, lt), Qt = qt.getProgramCacheKey(Zt);
      let ie = ct.programs;
      ct.environment = w.isMeshStandardMaterial ? Q.environment : null, ct.fog = Q.fog, ct.envMap = (w.isMeshStandardMaterial ? it : b).get(w.envMap || ct.environment), ct.envMapRotation = ct.environment !== null && w.envMap === null ? Q.environmentRotation : w.envMapRotation, ie === void 0 && (w.addEventListener("dispose", fe), ie = /* @__PURE__ */ new Map(), ct.programs = ie);
      let ee = ie.get(Qt);
      if (ee !== void 0) {
        if (ct.currentProgram === ee && ct.lightsStateVersion === Pt) return ka(w, Zt), ee;
      } else Zt.uniforms = qt.getUniforms(w), w.onBeforeCompile(Zt, N), ee = qt.acquireProgram(Zt, Qt), ie.set(Qt, ee), ct.uniforms = Zt.uniforms;
      const Xt = ct.uniforms;
      return (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === true) && (Xt.clippingPlanes = Nt.uniform), ka(w, Zt), ct.needsLights = Rr(w), ct.lightsStateVersion = Pt, ct.needsLights && (Xt.ambientLightColor.value = $.state.ambient, Xt.lightProbe.value = $.state.probe, Xt.directionalLights.value = $.state.directional, Xt.directionalLightShadows.value = $.state.directionalShadow, Xt.spotLights.value = $.state.spot, Xt.spotLightShadows.value = $.state.spotShadow, Xt.rectAreaLights.value = $.state.rectArea, Xt.ltc_1.value = $.state.rectAreaLTC1, Xt.ltc_2.value = $.state.rectAreaLTC2, Xt.pointLights.value = $.state.point, Xt.pointLightShadows.value = $.state.pointShadow, Xt.hemisphereLights.value = $.state.hemi, Xt.directionalShadowMap.value = $.state.directionalShadowMap, Xt.directionalShadowMatrix.value = $.state.directionalShadowMatrix, Xt.spotShadowMap.value = $.state.spotShadowMap, Xt.spotLightMatrix.value = $.state.spotLightMatrix, Xt.spotLightMap.value = $.state.spotLightMap, Xt.pointShadowMap.value = $.state.pointShadowMap, Xt.pointShadowMatrix.value = $.state.pointShadowMatrix), ct.currentProgram = ee, ct.uniformsList = null, ee;
    }
    function $i(w) {
      if (w.uniformsList === null) {
        const Q = w.currentProgram.getUniforms();
        w.uniformsList = Ru.seqWithValue(Q.seq, w.uniforms);
      }
      return w.uniformsList;
    }
    function ka(w, Q) {
      const lt = ne.get(w);
      lt.outputColorSpace = Q.outputColorSpace, lt.batching = Q.batching, lt.batchingColor = Q.batchingColor, lt.instancing = Q.instancing, lt.instancingColor = Q.instancingColor, lt.instancingMorph = Q.instancingMorph, lt.skinning = Q.skinning, lt.morphTargets = Q.morphTargets, lt.morphNormals = Q.morphNormals, lt.morphColors = Q.morphColors, lt.morphTargetsCount = Q.morphTargetsCount, lt.numClippingPlanes = Q.numClippingPlanes, lt.numIntersection = Q.numClipIntersection, lt.vertexAlphas = Q.vertexAlphas, lt.vertexTangents = Q.vertexTangents, lt.toneMapping = Q.toneMapping;
    }
    function bo(w, Q, lt, ct, $) {
      Q.isScene !== true && (Q = Ct), L.resetTextureUnits();
      const Lt = Q.fog, Pt = ct.isMeshStandardMaterial ? Q.environment : null, Zt = q === null ? N.outputColorSpace : q.isXRRenderTarget === true ? q.texture.colorSpace : So, Qt = (ct.isMeshStandardMaterial ? it : b).get(ct.envMap || Pt), ie = ct.vertexColors === true && !!lt.attributes.color && lt.attributes.color.itemSize === 4, ee = !!lt.attributes.tangent && (!!ct.normalMap || ct.anisotropy > 0), Xt = !!lt.morphAttributes.position, be = !!lt.morphAttributes.normal, je = !!lt.morphAttributes.color;
      let Ye = br;
      ct.toneMapped && (q === null || q.isXRRenderTarget === true) && (Ye = N.toneMapping);
      const un = lt.morphAttributes.position || lt.morphAttributes.normal || lt.morphAttributes.color, Ue = un !== void 0 ? un.length : 0, Jt = ne.get(ct), hn = y.state.lights;
      if (k === true && (H === true || w !== C)) {
        const dt = w === C && ct.id === U;
        Nt.setState(ct, w, dt);
      }
      let Ne = false;
      ct.version === Jt.__version ? (Jt.needsLights && Jt.lightsStateVersion !== hn.state.version || Jt.outputColorSpace !== Zt || $.isBatchedMesh && Jt.batching === false || !$.isBatchedMesh && Jt.batching === true || $.isBatchedMesh && Jt.batchingColor === true && $.colorTexture === null || $.isBatchedMesh && Jt.batchingColor === false && $.colorTexture !== null || $.isInstancedMesh && Jt.instancing === false || !$.isInstancedMesh && Jt.instancing === true || $.isSkinnedMesh && Jt.skinning === false || !$.isSkinnedMesh && Jt.skinning === true || $.isInstancedMesh && Jt.instancingColor === true && $.instanceColor === null || $.isInstancedMesh && Jt.instancingColor === false && $.instanceColor !== null || $.isInstancedMesh && Jt.instancingMorph === true && $.morphTexture === null || $.isInstancedMesh && Jt.instancingMorph === false && $.morphTexture !== null || Jt.envMap !== Qt || ct.fog === true && Jt.fog !== Lt || Jt.numClippingPlanes !== void 0 && (Jt.numClippingPlanes !== Nt.numPlanes || Jt.numIntersection !== Nt.numIntersection) || Jt.vertexAlphas !== ie || Jt.vertexTangents !== ee || Jt.morphTargets !== Xt || Jt.morphNormals !== be || Jt.morphColors !== je || Jt.toneMapping !== Ye || Jt.morphTargetsCount !== Ue) && (Ne = true) : (Ne = true, Jt.__version = ct.version);
      let sn = Jt.currentProgram;
      Ne === true && (sn = ei(ct, Q, $));
      let kn = false, xn = false, ni = false;
      const me = sn.getUniforms(), Wn = Jt.uniforms;
      if (Ft.useProgram(sn.program) && (kn = true, xn = true, ni = true), ct.id !== U && (U = ct.id, xn = true), kn || C !== w) {
        Ft.buffers.depth.getReversed() ? (W.copy(w.projectionMatrix), SE(W), ME(W), me.setValue(j, "projectionMatrix", W)) : me.setValue(j, "projectionMatrix", w.projectionMatrix), me.setValue(j, "viewMatrix", w.matrixWorldInverse);
        const Dt = me.map.cameraPosition;
        Dt !== void 0 && Dt.setValue(j, _t.setFromMatrixPosition(w.matrixWorld)), ae.logarithmicDepthBuffer && me.setValue(j, "logDepthBufFC", 2 / (Math.log(w.far + 1) / Math.LN2)), (ct.isMeshPhongMaterial || ct.isMeshToonMaterial || ct.isMeshLambertMaterial || ct.isMeshBasicMaterial || ct.isMeshStandardMaterial || ct.isShaderMaterial) && me.setValue(j, "isOrthographic", w.isOrthographicCamera === true), C !== w && (C = w, xn = true, ni = true);
      }
      if ($.isSkinnedMesh) {
        me.setOptional(j, $, "bindMatrix"), me.setOptional(j, $, "bindMatrixInverse");
        const dt = $.skeleton;
        dt && (dt.boneTexture === null && dt.computeBoneTexture(), me.setValue(j, "boneTexture", dt.boneTexture, L));
      }
      $.isBatchedMesh && (me.setOptional(j, $, "batchingTexture"), me.setValue(j, "batchingTexture", $._matricesTexture, L), me.setOptional(j, $, "batchingIdTexture"), me.setValue(j, "batchingIdTexture", $._indirectTexture, L), me.setOptional(j, $, "batchingColorTexture"), $._colorsTexture !== null && me.setValue(j, "batchingColorTexture", $._colorsTexture, L));
      const ta = lt.morphAttributes;
      if ((ta.position !== void 0 || ta.normal !== void 0 || ta.color !== void 0) && ue.update($, lt, sn), (xn || Jt.receiveShadow !== $.receiveShadow) && (Jt.receiveShadow = $.receiveShadow, me.setValue(j, "receiveShadow", $.receiveShadow)), ct.isMeshGouraudMaterial && ct.envMap !== null && (Wn.envMap.value = Qt, Wn.flipEnvMap.value = Qt.isCubeTexture && Qt.isRenderTargetTexture === false ? -1 : 1), ct.isMeshStandardMaterial && ct.envMap === null && Q.environment !== null && (Wn.envMapIntensity.value = Q.environmentIntensity), xn && (me.setValue(j, "toneMappingExposure", N.toneMappingExposure), Jt.needsLights && cs(Wn, ni), Lt && ct.fog === true && vt.refreshFogUniforms(Wn, Lt), vt.refreshMaterialUniforms(Wn, ct, Z, rt, y.state.transmissionRenderTarget[w.id]), Ru.upload(j, $i(Jt), Wn, L)), ct.isShaderMaterial && ct.uniformsNeedUpdate === true && (Ru.upload(j, $i(Jt), Wn, L), ct.uniformsNeedUpdate = false), ct.isSpriteMaterial && me.setValue(j, "center", $.center), me.setValue(j, "modelViewMatrix", $.modelViewMatrix), me.setValue(j, "normalMatrix", $.normalMatrix), me.setValue(j, "modelMatrix", $.matrixWorld), ct.isShaderMaterial || ct.isRawShaderMaterial) {
        const dt = ct.uniformsGroups;
        for (let Dt = 0, Ot = dt.length; Dt < Ot; Dt++) {
          const Kt = dt[Dt];
          F.update(Kt, sn), F.bind(Kt, sn);
        }
      }
      return sn;
    }
    function cs(w, Q) {
      w.ambientLightColor.needsUpdate = Q, w.lightProbe.needsUpdate = Q, w.directionalLights.needsUpdate = Q, w.directionalLightShadows.needsUpdate = Q, w.pointLights.needsUpdate = Q, w.pointLightShadows.needsUpdate = Q, w.spotLights.needsUpdate = Q, w.spotLightShadows.needsUpdate = Q, w.rectAreaLights.needsUpdate = Q, w.hemisphereLights.needsUpdate = Q;
    }
    function Rr(w) {
      return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === true;
    }
    this.getActiveCubeFace = function() {
      return V;
    }, this.getActiveMipmapLevel = function() {
      return I;
    }, this.getRenderTarget = function() {
      return q;
    }, this.setRenderTargetTextures = function(w, Q, lt) {
      ne.get(w.texture).__webglTexture = Q, ne.get(w.depthTexture).__webglTexture = lt;
      const ct = ne.get(w);
      ct.__hasExternalTextures = true, ct.__autoAllocateDepthBuffer = lt === void 0, ct.__autoAllocateDepthBuffer || le.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), ct.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(w, Q) {
      const lt = ne.get(w);
      lt.__webglFramebuffer = Q, lt.__useDefaultFramebuffer = Q === void 0;
    }, this.setRenderTarget = function(w, Q = 0, lt = 0) {
      q = w, V = Q, I = lt;
      let ct = true, $ = null, Lt = false, Pt = false;
      if (w) {
        const Qt = ne.get(w);
        if (Qt.__useDefaultFramebuffer !== void 0) Ft.bindFramebuffer(j.FRAMEBUFFER, null), ct = false;
        else if (Qt.__webglFramebuffer === void 0) L.setupRenderTarget(w);
        else if (Qt.__hasExternalTextures) L.rebindTextures(w, ne.get(w.texture).__webglTexture, ne.get(w.depthTexture).__webglTexture);
        else if (w.depthBuffer) {
          const Xt = w.depthTexture;
          if (Qt.__boundDepthTexture !== Xt) {
            if (Xt !== null && ne.has(Xt) && (w.width !== Xt.image.width || w.height !== Xt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            L.setupDepthRenderbuffer(w);
          }
        }
        const ie = w.texture;
        (ie.isData3DTexture || ie.isDataArrayTexture || ie.isCompressedArrayTexture) && (Pt = true);
        const ee = ne.get(w).__webglFramebuffer;
        w.isWebGLCubeRenderTarget ? (Array.isArray(ee[Q]) ? $ = ee[Q][lt] : $ = ee[Q], Lt = true) : w.samples > 0 && L.useMultisampledRTT(w) === false ? $ = ne.get(w).__webglMultisampledFramebuffer : Array.isArray(ee) ? $ = ee[lt] : $ = ee, B.copy(w.viewport), at.copy(w.scissor), ot = w.scissorTest;
      } else B.copy(Vt).multiplyScalar(Z).floor(), at.copy(ce).multiplyScalar(Z).floor(), ot = pt;
      if (Ft.bindFramebuffer(j.FRAMEBUFFER, $) && ct && Ft.drawBuffers(w, $), Ft.viewport(B), Ft.scissor(at), Ft.setScissorTest(ot), Lt) {
        const Qt = ne.get(w.texture);
        j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, j.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Qt.__webglTexture, lt);
      } else if (Pt) {
        const Qt = ne.get(w.texture), ie = Q || 0;
        j.framebufferTextureLayer(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, Qt.__webglTexture, lt || 0, ie);
      }
      U = -1;
    }, this.readRenderTargetPixels = function(w, Q, lt, ct, $, Lt, Pt) {
      if (!(w && w.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Zt = ne.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && Pt !== void 0 && (Zt = Zt[Pt]), Zt) {
        Ft.bindFramebuffer(j.FRAMEBUFFER, Zt);
        try {
          const Qt = w.texture, ie = Qt.format, ee = Qt.type;
          if (!ae.textureFormatReadable(ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ae.textureTypeReadable(ee)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          Q >= 0 && Q <= w.width - ct && lt >= 0 && lt <= w.height - $ && j.readPixels(Q, lt, ct, $, xe.convert(ie), xe.convert(ee), Lt);
        } finally {
          const Qt = q !== null ? ne.get(q).__webglFramebuffer : null;
          Ft.bindFramebuffer(j.FRAMEBUFFER, Qt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(w, Q, lt, ct, $, Lt, Pt) {
      if (!(w && w.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Zt = ne.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && Pt !== void 0 && (Zt = Zt[Pt]), Zt) {
        const Qt = w.texture, ie = Qt.format, ee = Qt.type;
        if (!ae.textureFormatReadable(ie)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ae.textureTypeReadable(ee)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (Q >= 0 && Q <= w.width - ct && lt >= 0 && lt <= w.height - $) {
          Ft.bindFramebuffer(j.FRAMEBUFFER, Zt);
          const Xt = j.createBuffer();
          j.bindBuffer(j.PIXEL_PACK_BUFFER, Xt), j.bufferData(j.PIXEL_PACK_BUFFER, Lt.byteLength, j.STREAM_READ), j.readPixels(Q, lt, ct, $, xe.convert(ie), xe.convert(ee), 0);
          const be = q !== null ? ne.get(q).__webglFramebuffer : null;
          Ft.bindFramebuffer(j.FRAMEBUFFER, be);
          const je = j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return j.flush(), await yE(j, je, 4), j.bindBuffer(j.PIXEL_PACK_BUFFER, Xt), j.getBufferSubData(j.PIXEL_PACK_BUFFER, 0, Lt), j.deleteBuffer(Xt), j.deleteSync(je), Lt;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(w, Q = null, lt = 0) {
      w.isTexture !== true && (El("WebGLRenderer: copyFramebufferToTexture function signature has changed."), Q = arguments[0] || null, w = arguments[1]);
      const ct = Math.pow(2, -lt), $ = Math.floor(w.image.width * ct), Lt = Math.floor(w.image.height * ct), Pt = Q !== null ? Q.x : 0, Zt = Q !== null ? Q.y : 0;
      L.setTexture2D(w, 0), j.copyTexSubImage2D(j.TEXTURE_2D, lt, 0, 0, Pt, Zt, $, Lt), Ft.unbindTexture();
    }, this.copyTextureToTexture = function(w, Q, lt = null, ct = null, $ = 0) {
      w.isTexture !== true && (El("WebGLRenderer: copyTextureToTexture function signature has changed."), ct = arguments[0] || null, w = arguments[1], Q = arguments[2], $ = arguments[3] || 0, lt = null);
      let Lt, Pt, Zt, Qt, ie, ee, Xt, be, je;
      const Ye = w.isCompressedTexture ? w.mipmaps[$] : w.image;
      lt !== null ? (Lt = lt.max.x - lt.min.x, Pt = lt.max.y - lt.min.y, Zt = lt.isBox3 ? lt.max.z - lt.min.z : 1, Qt = lt.min.x, ie = lt.min.y, ee = lt.isBox3 ? lt.min.z : 0) : (Lt = Ye.width, Pt = Ye.height, Zt = Ye.depth || 1, Qt = 0, ie = 0, ee = 0), ct !== null ? (Xt = ct.x, be = ct.y, je = ct.z) : (Xt = 0, be = 0, je = 0);
      const un = xe.convert(Q.format), Ue = xe.convert(Q.type);
      let Jt;
      Q.isData3DTexture ? (L.setTexture3D(Q, 0), Jt = j.TEXTURE_3D) : Q.isDataArrayTexture || Q.isCompressedArrayTexture ? (L.setTexture2DArray(Q, 0), Jt = j.TEXTURE_2D_ARRAY) : (L.setTexture2D(Q, 0), Jt = j.TEXTURE_2D), j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL, Q.flipY), j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Q.premultiplyAlpha), j.pixelStorei(j.UNPACK_ALIGNMENT, Q.unpackAlignment);
      const hn = j.getParameter(j.UNPACK_ROW_LENGTH), Ne = j.getParameter(j.UNPACK_IMAGE_HEIGHT), sn = j.getParameter(j.UNPACK_SKIP_PIXELS), kn = j.getParameter(j.UNPACK_SKIP_ROWS), xn = j.getParameter(j.UNPACK_SKIP_IMAGES);
      j.pixelStorei(j.UNPACK_ROW_LENGTH, Ye.width), j.pixelStorei(j.UNPACK_IMAGE_HEIGHT, Ye.height), j.pixelStorei(j.UNPACK_SKIP_PIXELS, Qt), j.pixelStorei(j.UNPACK_SKIP_ROWS, ie), j.pixelStorei(j.UNPACK_SKIP_IMAGES, ee);
      const ni = w.isDataArrayTexture || w.isData3DTexture, me = Q.isDataArrayTexture || Q.isData3DTexture;
      if (w.isRenderTargetTexture || w.isDepthTexture) {
        const Wn = ne.get(w), ta = ne.get(Q), dt = ne.get(Wn.__renderTarget), Dt = ne.get(ta.__renderTarget);
        Ft.bindFramebuffer(j.READ_FRAMEBUFFER, dt.__webglFramebuffer), Ft.bindFramebuffer(j.DRAW_FRAMEBUFFER, Dt.__webglFramebuffer);
        for (let Ot = 0; Ot < Zt; Ot++) ni && j.framebufferTextureLayer(j.READ_FRAMEBUFFER, j.COLOR_ATTACHMENT0, ne.get(w).__webglTexture, $, ee + Ot), w.isDepthTexture ? (me && j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER, j.COLOR_ATTACHMENT0, ne.get(Q).__webglTexture, $, je + Ot), j.blitFramebuffer(Qt, ie, Lt, Pt, Xt, be, Lt, Pt, j.DEPTH_BUFFER_BIT, j.NEAREST)) : me ? j.copyTexSubImage3D(Jt, $, Xt, be, je + Ot, Qt, ie, Lt, Pt) : j.copyTexSubImage2D(Jt, $, Xt, be, je + Ot, Qt, ie, Lt, Pt);
        Ft.bindFramebuffer(j.READ_FRAMEBUFFER, null), Ft.bindFramebuffer(j.DRAW_FRAMEBUFFER, null);
      } else me ? w.isDataTexture || w.isData3DTexture ? j.texSubImage3D(Jt, $, Xt, be, je, Lt, Pt, Zt, un, Ue, Ye.data) : Q.isCompressedArrayTexture ? j.compressedTexSubImage3D(Jt, $, Xt, be, je, Lt, Pt, Zt, un, Ye.data) : j.texSubImage3D(Jt, $, Xt, be, je, Lt, Pt, Zt, un, Ue, Ye) : w.isDataTexture ? j.texSubImage2D(j.TEXTURE_2D, $, Xt, be, Lt, Pt, un, Ue, Ye.data) : w.isCompressedTexture ? j.compressedTexSubImage2D(j.TEXTURE_2D, $, Xt, be, Ye.width, Ye.height, un, Ye.data) : j.texSubImage2D(j.TEXTURE_2D, $, Xt, be, Lt, Pt, un, Ue, Ye);
      j.pixelStorei(j.UNPACK_ROW_LENGTH, hn), j.pixelStorei(j.UNPACK_IMAGE_HEIGHT, Ne), j.pixelStorei(j.UNPACK_SKIP_PIXELS, sn), j.pixelStorei(j.UNPACK_SKIP_ROWS, kn), j.pixelStorei(j.UNPACK_SKIP_IMAGES, xn), $ === 0 && Q.generateMipmaps && j.generateMipmap(Jt), Ft.unbindTexture();
    }, this.copyTextureToTexture3D = function(w, Q, lt = null, ct = null, $ = 0) {
      return w.isTexture !== true && (El("WebGLRenderer: copyTextureToTexture3D function signature has changed."), lt = arguments[0] || null, ct = arguments[1] || null, w = arguments[2], Q = arguments[3], $ = arguments[4] || 0), El('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(w, Q, lt, ct, $);
    }, this.initRenderTarget = function(w) {
      ne.get(w).__webglFramebuffer === void 0 && L.setupRenderTarget(w);
    }, this.initTexture = function(w) {
      w.isCubeTexture ? L.setTextureCube(w, 0) : w.isData3DTexture ? L.setTexture3D(w, 0) : w.isDataArrayTexture || w.isCompressedArrayTexture ? L.setTexture2DArray(w, 0) : L.setTexture2D(w, 0), Ft.unbindTexture();
    }, this.resetState = function() {
      V = 0, I = 0, q = null, Ft.reset(), we.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Ia;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(n) {
    this._outputColorSpace = n;
    const a = this.getContext();
    a.drawingBufferColorspace = Ve._getDrawingBufferColorSpace(n), a.unpackColorSpace = Ve._getUnpackColorSpace();
  }
}
class Vp {
  constructor(n, a = 25e-5) {
    this.isFogExp2 = true, this.name = "", this.color = new ke(n), this.density = a;
  }
  clone() {
    return new Vp(this.color, this.density);
  }
  toJSON() {
    return { type: "FogExp2", name: this.name, color: this.color.getHex(), density: this.density };
  }
}
class LR extends ti {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Va(), this.environmentIntensity = 1, this.environmentRotation = new Va(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(n, a) {
    return super.copy(n, a), n.background !== null && (this.background = n.background.clone()), n.environment !== null && (this.environment = n.environment.clone()), n.fog !== null && (this.fog = n.fog.clone()), this.backgroundBlurriness = n.backgroundBlurriness, this.backgroundIntensity = n.backgroundIntensity, this.backgroundRotation.copy(n.backgroundRotation), this.environmentIntensity = n.environmentIntensity, this.environmentRotation.copy(n.environmentRotation), n.overrideMaterial !== null && (this.overrideMaterial = n.overrideMaterial.clone()), this.matrixAutoUpdate = n.matrixAutoUpdate, this;
  }
  toJSON(n) {
    const a = super.toJSON(n);
    return this.fog !== null && (a.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (a.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (a.object.backgroundIntensity = this.backgroundIntensity), a.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (a.object.environmentIntensity = this.environmentIntensity), a.object.environmentRotation = this.environmentRotation.toArray(), a;
  }
}
class OR extends Eo {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(n) {
    super(), this.isLineBasicMaterial = true, this.color = new ke(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.color.copy(n.color), this.map = n.map, this.linewidth = n.linewidth, this.linecap = n.linecap, this.linejoin = n.linejoin, this.fog = n.fog, this;
  }
}
const Du = new ft(), Uu = new ft(), $0 = new _n(), Sl = new Hp(), _u = new Dl(), Vd = new ft(), tx = new ft();
class zR extends ti {
  constructor(n = new Qi(), a = new OR()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = n, this.material = a, this.updateMorphTargets();
  }
  copy(n, a) {
    return super.copy(n, a), this.material = Array.isArray(n.material) ? n.material.slice() : n.material, this.geometry = n.geometry, this;
  }
  computeLineDistances() {
    const n = this.geometry;
    if (n.index === null) {
      const a = n.attributes.position, s = [0];
      for (let c = 1, f = a.count; c < f; c++) Du.fromBufferAttribute(a, c - 1), Uu.fromBufferAttribute(a, c), s[c] = s[c - 1], s[c] += Du.distanceTo(Uu);
      n.setAttribute("lineDistance", new Ha(s, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(n, a) {
    const s = this.geometry, c = this.matrixWorld, f = n.params.Line.threshold, h = s.drawRange;
    if (s.boundingSphere === null && s.computeBoundingSphere(), _u.copy(s.boundingSphere), _u.applyMatrix4(c), _u.radius += f, n.ray.intersectsSphere(_u) === false) return;
    $0.copy(c).invert(), Sl.copy(n.ray).applyMatrix4($0);
    const d = f / ((this.scale.x + this.scale.y + this.scale.z) / 3), m = d * d, _ = this.isLineSegments ? 2 : 1, g = s.index, x = s.attributes.position;
    if (g !== null) {
      const M = Math.max(0, h.start), T = Math.min(g.count, h.start + h.count);
      for (let R = M, S = T - 1; R < S; R += _) {
        const y = g.getX(R), P = g.getX(R + 1), O = xu(this, n, Sl, m, y, P);
        O && a.push(O);
      }
      if (this.isLineLoop) {
        const R = g.getX(T - 1), S = g.getX(M), y = xu(this, n, Sl, m, R, S);
        y && a.push(y);
      }
    } else {
      const M = Math.max(0, h.start), T = Math.min(x.count, h.start + h.count);
      for (let R = M, S = T - 1; R < S; R += _) {
        const y = xu(this, n, Sl, m, R, R + 1);
        y && a.push(y);
      }
      if (this.isLineLoop) {
        const R = xu(this, n, Sl, m, T - 1, M);
        R && a.push(R);
      }
    }
  }
  updateMorphTargets() {
    const a = this.geometry.morphAttributes, s = Object.keys(a);
    if (s.length > 0) {
      const c = a[s[0]];
      if (c !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let f = 0, h = c.length; f < h; f++) {
          const d = c[f].name || String(f);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[d] = f;
        }
      }
    }
  }
}
function xu(o, n, a, s, c, f) {
  const h = o.geometry.attributes.position;
  if (Du.fromBufferAttribute(h, c), Uu.fromBufferAttribute(h, f), a.distanceSqToSegment(Du, Uu, Vd, tx) > s) return;
  Vd.applyMatrix4(o.matrixWorld);
  const m = n.ray.origin.distanceTo(Vd);
  if (!(m < n.near || m > n.far)) return { distance: m, point: tx.clone().applyMatrix4(o.matrixWorld), index: c, face: null, faceIndex: null, barycoord: null, object: o };
}
const ex = new ft(), nx = new ft();
class PR extends zR {
  constructor(n, a) {
    super(n, a), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const n = this.geometry;
    if (n.index === null) {
      const a = n.attributes.position, s = [];
      for (let c = 0, f = a.count; c < f; c += 2) ex.fromBufferAttribute(a, c), nx.fromBufferAttribute(a, c + 1), s[c] = c === 0 ? 0 : s[c - 1], s[c + 1] = s[c] + ex.distanceTo(nx);
      n.setAttribute("lineDistance", new Ha(s, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class IR extends Eo {
  static get type() {
    return "PointsMaterial";
  }
  constructor(n) {
    super(), this.isPointsMaterial = true, this.color = new ke(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.color.copy(n.color), this.map = n.map, this.alphaMap = n.alphaMap, this.size = n.size, this.sizeAttenuation = n.sizeAttenuation, this.fog = n.fog, this;
  }
}
const ix = new _n(), Dp = new Hp(), yu = new Dl(), Su = new ft();
class ax extends ti {
  constructor(n = new Qi(), a = new IR()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = n, this.material = a, this.updateMorphTargets();
  }
  copy(n, a) {
    return super.copy(n, a), this.material = Array.isArray(n.material) ? n.material.slice() : n.material, this.geometry = n.geometry, this;
  }
  raycast(n, a) {
    const s = this.geometry, c = this.matrixWorld, f = n.params.Points.threshold, h = s.drawRange;
    if (s.boundingSphere === null && s.computeBoundingSphere(), yu.copy(s.boundingSphere), yu.applyMatrix4(c), yu.radius += f, n.ray.intersectsSphere(yu) === false) return;
    ix.copy(c).invert(), Dp.copy(n.ray).applyMatrix4(ix);
    const d = f / ((this.scale.x + this.scale.y + this.scale.z) / 3), m = d * d, _ = s.index, p = s.attributes.position;
    if (_ !== null) {
      const x = Math.max(0, h.start), M = Math.min(_.count, h.start + h.count);
      for (let T = x, R = M; T < R; T++) {
        const S = _.getX(T);
        Su.fromBufferAttribute(p, S), rx(Su, S, m, c, n, a, this);
      }
    } else {
      const x = Math.max(0, h.start), M = Math.min(p.count, h.start + h.count);
      for (let T = x, R = M; T < R; T++) Su.fromBufferAttribute(p, T), rx(Su, T, m, c, n, a, this);
    }
  }
  updateMorphTargets() {
    const a = this.geometry.morphAttributes, s = Object.keys(a);
    if (s.length > 0) {
      const c = a[s[0]];
      if (c !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let f = 0, h = c.length; f < h; f++) {
          const d = c[f].name || String(f);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[d] = f;
        }
      }
    }
  }
}
function rx(o, n, a, s, c, f, h) {
  const d = Dp.distanceSqToPoint(o);
  if (d < a) {
    const m = new ft();
    Dp.closestPointToPoint(o, m), m.applyMatrix4(s);
    const _ = c.ray.origin.distanceTo(m);
    if (_ < c.near || _ > c.far) return;
    f.push({ distance: _, distanceToRay: Math.sqrt(d), point: m, index: n, face: null, faceIndex: null, barycoord: null, object: h });
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Lp } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Lp);
function BR(o) {
  return Math.min(4.8, 1.45 + Math.sqrt(Math.max(0, Number(o) || 0)) * 0.78);
}
function FR({ x: o, y: n, radius: a, width: s, height: labelHeight = 44, viewportWidth: c, viewportHeight: f, ensureVisible = false }, h) {
  const m = Math.max(8, a + 6), _ = 6;
  const candidates = [[o + m, n - labelHeight / 2, s, labelHeight], [o - m - s, n - labelHeight / 2, s, labelHeight], [o - s / 2, n - m - labelHeight, s, labelHeight], [o - s / 2, n + m, s, labelHeight]];
  if (ensureVisible) {
    candidates.push(...candidates.map(([x,y,w,h]) => [Math.max(_,Math.min(c-w-_,x)),Math.max(_,Math.min(f-h-_,y)),w,h]));
    const spare = [_ , f-labelHeight-_, ...h.flatMap(rect=>[rect[1]+rect[3]+16,rect[1]-labelHeight-16])].flatMap(y=>[_,(c-s)/2,c-s-_].map(x=>[x,y,s,labelHeight]));
    spare.sort((a,b)=>Math.hypot(a[0]+s/2-o,a[1]+labelHeight/2-n)-Math.hypot(b[0]+s/2-o,b[1]+labelHeight/2-n));
    candidates.push(...spare);
  }
  return candidates.find((p) => p[0] >= _ && p[1] >= _ && p[0] + p[2] <= c - _ && p[1] + p[3] <= f - _ && !h.some((x) => p[0] < x[0] + x[2] + 8 && p[0] + p[2] + 8 > x[0] && p[1] < x[1] + x[3] + 8 && p[1] + p[3] + 8 > x[1])) || null;
}
function HR({ settleMs: o = 180, movementPx: n = 0.35 } = {}) {
  let a, s, c = [], f = [], h = 0, d = false, lastLayout = 0;
  const m = (g) => g.map((p) => [...p]), _ = (g, p, x) => g.length !== p.length || g.some((M, T) => M.some((R, S) => Math.abs(R - p[T][S]) > x));
  return { update({ key: g, geometry: p, now: x, compute: M }) {
    return _(p, c, n) && (c = m(p), h = x), d ||= _(p, f, 2), (s === void 0 || a !== g || d && (x - h >= o || x - lastLayout >= 400)) && (s = M(), a = g, f = m(p), c = m(p), d = false, lastLayout = x), s;
  } };
}
function GR({ els: o, emit: n, data: a, initialTheme: s = "dark", language: c = "cn" }) {
  const f = a.clusters.map((H) => ({ ...H, color: H.light })), h = a.nodes, d = a.edges;
  let m = s;
  for (const H of f) H.color = H[m];
  const _ = Object.fromEntries(f.map((H) => [H.id, H])), g = h.map(([H, W, mt, _t], At) => ({ i: At, name: H, cid: W, w: mt, desc: _t, cluster: _[W], out: [], in: [], rel: [], x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, sx: 0, sy: 0, sz: 0, vis: true, alpha: 1, scale: 1 })), p = Object.fromEntries(g.map((H) => [H.name, H])), x = [];
  for (const [H, W, mt] of d) {
    const _t = p[H], At = p[W];
    if (!_t || !At) {
      console.warn("[atlas] 丢弃无效边：", H, "→", W);
      continue;
    }
    x.push({ s: _t, t: At, kind: mt, i: x.length, alpha: 1 }), mt === "pre" ? (_t.out.push(At), At.in.push(_t)) : (_t.rel.push(At), At.rel.push(_t));
  }
  const M = (H) => H.out.length + H.in.length + H.rel.length, T = g.map(() => []);
  for (const H of x) T[H.s.i].push(H.t.i), T[H.t.i].push(H.s.i);
  const R = 42;
  for (const H of f) {
    const [W, mt, _t] = H.anchor, At = Math.hypot(W, mt, _t) || 1;
    H.dir = [W / At, mt / At, _t / At];
  }
  const S = new Array(g.length).fill(-1);
  (function() {
    let W = true, mt = 0;
    for (const _t of g) _t.in.length || (S[_t.i] = 0);
    for (; W && mt++ < 40; ) {
      W = false;
      for (const _t of g) {
        let At = _t.in.length ? -1 : 0;
        for (const Ct of _t.in) S[Ct.i] >= 0 && (At = Math.max(At, S[Ct.i] + 1));
        At >= 0 && At !== S[_t.i] && (S[_t.i] = At, W = true);
      }
    }
    for (let _t = 0; _t < S.length; _t++) S[_t] < 0 && (S[_t] = 2);
  })();
  const y = Math.max(1, ...S), P = { atlas: [], shell: [], tier: [] };
  g.forEach((H, W) => {
    const mt = H.cluster.dir, _t = 1 - Math.min(M(H), 12) / 26;
    P.atlas.push([mt[0] * R * _t, mt[1] * R * _t, mt[2] * R * _t]);
    const At = f.indexOf(H.cluster), Ct = g.filter((Fe) => Fe.cid === H.cid).indexOf(H), Ut = g.filter((Fe) => Fe.cid === H.cid).length, re = (At / f.length + Ct / Ut / f.length) * Math.PI * 2, j = (Ct / Ut - 0.5) * 1.5;
    P.shell.push([R * 0.95 * Math.cos(j) * Math.cos(re), R * 0.95 * Math.sin(j), R * 0.95 * Math.cos(j) * Math.sin(re)]), P.tier.push([mt[0] * R * 0.72, (S[W] / y - 0.5) * R * 1.5, mt[2] * R * 0.72]);
  });
  const O = JSON.parse(JSON.stringify(P));
  let N = "atlas";
  g.forEach((H, W) => {
    const mt = P.atlas[W];
    H.x = mt[0] + Math.sin(W * 31.7 + 1) * 0.5 * 16, H.y = mt[1] + Math.sin(W * 31.7 + 1) * 0.5 * 16, H.z = mt[2] + Math.sin(W * 31.7 + 1) * 0.5 * 16;
  });
  let et = 1;
  const V = 9, I = 0.04, q = 130, U = 0.05;
  function C() {
    if (et < 4e-3) return;
    const H = P[N];
    for (let W = 0; W < g.length; W++) {
      const mt = g[W];
      for (let _t = W + 1; _t < g.length; _t++) {
        const At = g[_t];
        let Ct = mt.x - At.x, Ut = mt.y - At.y, re = mt.z - At.z, j = Ct * Ct + Ut * Ut + re * re + 0.6;
        const Fe = q / j, le = Math.sqrt(j);
        Ct /= le, Ut /= le, re /= le, mt.vx += Ct * Fe, mt.vy += Ut * Fe, mt.vz += re * Fe, At.vx -= Ct * Fe, At.vy -= Ut * Fe, At.vz -= re * Fe;
      }
    }
    for (const W of x) {
      const mt = W.s, _t = W.t;
      let At = _t.x - mt.x, Ct = _t.y - mt.y, Ut = _t.z - mt.z;
      const re = Math.hypot(At, Ct, Ut) || 1, j = (re - V) * I;
      At /= re, Ct /= re, Ut /= re, mt.vx += At * j, mt.vy += Ct * j, mt.vz += Ut * j, _t.vx -= At * j, _t.vy -= Ct * j, _t.vz -= Ut * j;
    }
    for (let W = 0; W < g.length; W++) {
      const mt = g[W], _t = H[W];
      mt.vx += (_t[0] - mt.x) * U, mt.vy += (_t[1] - mt.y) * U, mt.vz += (_t[2] - mt.z) * U;
      const At = 0.82;
      mt.vx *= At, mt.vy *= At, mt.vz *= At, mt.x += mt.vx * et, mt.y += mt.vy * et, mt.z += mt.vz * et;
    }
    et *= 0.988;
  }
  for (let H = 0; H < 220; H++) C();
  const B = 46;
  function at() {
    let H = 0;
    for (const W of g) H = Math.max(H, Math.hypot(W.x, W.y, W.z));
    return H / Math.sin(B * Math.PI / 360) * 0.88;
  }
  const ot = new AbortController(), { signal: ht } = ot, gt = (H, W, mt, _t) => H.addEventListener(W, mt, { ..._t, signal: ht });
  let X = 0;
  const rt = matchMedia("(prefers-reduced-motion: reduce)");
  N = "atlas", m = s, et = 1;
  for (const H of Object.keys(P)) P[H] = O[H].map((W) => [...W]);
  g.forEach((H, W) => {
    [H.x, H.y, H.z] = P.atlas[W], H.x += Math.sin(W * 31.7 + 1) * 8, H.y += Math.cos(W * 17.3 + 2) * 8, H.vx = H.vy = H.vz = 0, H.alpha = H.scale = 1, H.vis = true;
  });
  for (let H = 0; H < 220; H++) C();
  const { stage: Z } = o;
  let St, bt, Vt, ce, pt, A, k = true;
  try {
    St = new NR({ antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch {
    k = false;
  }
  if (St || (k = false), !k) {
    n.gate(true);
    const H = (...W) => {
    };
    return { setTheme: H, clearSel: H, setView: H, toggleFlow: H, toggleLabel: H, toggleSpin: H, reset: H, toggleTheme: H, dolly: H, zoomReset: H, toggleCluster: H, selectAt: H, hoverAt: H, setQuery: H, clearPath: H, centerOn: H, startPath: H, dispose() {
      ot.abort();
    } };
  }
  {
    let De = function(dt, Dt) {
      const Ot = le.uniforms.uPx.value;
      for (const Kt of g) {
        cn.set(Kt.x, Kt.y, Kt.z);
        const he = Vt.position.distanceTo(cn);
        cn.project(Vt), Kt.sx = (cn.x * 0.5 + 0.5) * dt, Kt.sy = (-cn.y * 0.5 + 0.5) * Dt, Kt.sz = cn.z, Kt.labelRadius = Kt.size * Ot / St.getPixelRatio() / Math.max(he, 1) * 0.5, Kt.sr = Kt.labelRadius * Kt.scale;
      }
    }, zi = function() {
      Xe.fill(1), rn.fill(1), fn.fill(1);
      const dt = Xa, Dt = (Ot) => !dt || Ot.name.toLowerCase().includes(dt) || Ot.desc.toLowerCase().includes(dt);
      for (const Ot of g) Ot.vis = !fe.has(Ot.cid) && Dt(Ot), Ot.vis || (Xe[Ot.i] = 0, rn[Ot.i] = 0.6);
      for (const Ot of x) (!Ot.s.vis || !Ot.t.vis) && (fn[Ot.i] = 0);
      if (ut) {
        for (const Ot of g) Ot.vis && (Xe[Ot.i] = ut.has(Ot.i) ? 1 : $e, rn[Ot.i] = ut.has(Ot.i) ? 1.25 : 0.8);
        for (const Ot of x) fn[Ot.i] && (fn[Ot.i] = ut.has(Ot.s.i) && ut.has(Ot.t.i) ? 1.35 : $e * 0.5);
      } else if (wt || F) {
        const Ot = wt || F, Kt = /* @__PURE__ */ new Set([Ot.i, ...T[Ot.i]]), he = wt ? $e : 0.22;
        for (const ve of g) ve.vis && (Xe[ve.i] = Kt.has(ve.i) ? 1 : he, rn[ve.i] = ve === Ot ? 1.35 : Kt.has(ve.i) ? 1.06 : 0.9);
        for (const ve of x) fn[ve.i] && (fn[ve.i] = ve.s === Ot || ve.t === Ot ? 1.65 : he * 0.5);
      }
      return F && F.vis && (Xe[F.i] = 1, rn[F.i] = Math.max(rn[F.i], 1.35)), { nT: Xe, sT: rn, eT: fn };
    }, pa = function(dt) {
      wt = dt, ut = null, o.pathbar.classList.remove("on"), vt.tx = dt.x, vt.ty = dt.y, vt.tz = dt.z, vt.tDist = Math.min(vt.tDist, qt * 0.92), jt(), me(dt), sn(), hn();
    }, Mi = function() {
      wt = null, ut = null, fitVisible(), o.pathbar.classList.remove("on"), me(null), sn(), hn();
    }, Ji = function(dt, Dt) {
      const Ot = new Array(g.length).fill(-1), Kt = /* @__PURE__ */ new Set([dt.i]), he = [dt.i];
      for (; he.length; ) {
        const ge = he.shift();
        if (ge === Dt.i) break;
        for (const wn of T[ge]) !Kt.has(wn) && g[wn].vis && (Kt.add(wn), Ot[wn] = ge, he.push(wn));
      }
      if (!Kt.has(Dt.i)) {
        o.chain.textContent = c === "en" ? "No visible path between these concepts" : "两点之间没有可见通路", o.pathbar.classList.add("on");
        return;
      }
      const ve = [];
      let Ze = Dt.i;
      for (; Ze !== -1 && (ve.unshift(Ze), Ze !== dt.i); ) Ze = Ot[Ze];
      ut = new Set(ve), o.chain.textContent = ve.map((ge) => g[ge].name).join(" → "), o.pathbar.classList.add("on"), hn();
    }, Pi = function() {
      ut = null, o.pathbar.classList.remove("on"), hn();
    }, Rr = function(dt, Dt, Ot) {
      const Kt = [dt, Dt, N, Xa, [...fe].join(","), zt, wt?.i, ut ? [...ut].join(",") : "", document.fonts.status].join("|"), he = cs.update({ key: Kt, now: Ot, geometry: g.map((ve) => [ve.sx, ve.sy, ve.labelRadius]), compute() {
        const ve = new Set(wt ? T[wt.i] : []), Ze = new Set(zt && !wt && !ut ? bo.slice(0, g.length).map((oe) => oe.i) : []);
        wt && (Ze.add(wt.i), ve.forEach((oe) => Ze.add(oe))), ut && ut.forEach((oe) => Ze.add(oe));
        const ge = (oe) => (oe === wt ? 1e4 : ut?.has(oe.i) ? 8e3 : ve.has(oe.i) ? 1e3 : 0) + M(oe), wn = [...Ze].map((oe) => g[oe]).filter((oe) => oe.vis && oe.sz < 1).sort((oe, Ln) => ge(Ln) - ge(oe) || oe.i - Ln.i), de = [], En = 15;
        ei && (ei.font = "450 " + En + "px " + $i);
        const mn = /* @__PURE__ */ new Map();
        for (const oe of wn) {
          const Ln = Math.min(240, Math.max(186, dt * .44), dt - 16), element = ka[oe.i];
          // Measure the actual Chinese line breaks rather than budgeting empty
          // rows. Cache by width/font state; title content is fixed for this graph.
          const measureKey = Ln + '|' + document.fonts.status;
          if (oe.measureKey !== measureKey) {
            const wasHidden = element.hidden;
            element.style.visibility = 'hidden'; element.hidden = false; element.style.width = Ln + 'px'; element.style.height = 'auto';
            oe.cardHeight = Math.ceil(element.getBoundingClientRect().height); oe.measureKey = measureKey;
            element.hidden = wasHidden; element.style.visibility = '';
          }
          const labelHeight = oe.cardHeight, placement = { x: oe.sx, y: oe.sy, radius: 0, width: Ln, height: labelHeight, viewportWidth: dt, viewportHeight: Dt, ensureVisible: !!wt || !!ut }, ma = FR(placement, de);
          ma && (de.push(ma), mn.set(oe.i, { dx: ma[0] - oe.sx, dy: ma[1] - oe.sy, width: Ln, height: labelHeight }));
        }
        return mn;
      } });
      for (const ve of g) {
        const Ze = ka[ve.i], ge = he.get(ve.i), wn = !ge || !ve.vis || ve.sz >= 1 || ve.sx + ge.dx < 0 || ve.sy + ge.dy < 0 || ve.sx + ge.dx + ge.width > dt || ve.sy + ge.dy + ge.height > Dt;
        ve.cardVisible = !wn;
        if (Ze.hidden !== wn && (Ze.hidden = wn), wn) continue;
        const left = Math.round(ve.sx + ge.dx), top = Math.round(ve.sy + ge.dy), de = `translate(${left}px,${top}px)`, En = ge.width + "px", active = wt || F, related = active && T[active.i].includes(ve.i), mn = "g-lab" + (ve === active ? " is-selected" : related ? " is-related" : active ? " is-muted" : "");
        Ze.style.transform !== de && (Ze.style.transform = de), Ze.style.width !== En && (Ze.style.width = En), Ze.style.height = ge.height + "px", Ze.className !== mn && (Ze.className = mn);
        Ze.style.setProperty('--node-color', ve.cluster.color);
        Ze.setAttribute('aria-pressed', String(ve === wt));
        // The question surface is the node. Project its centre back into the
        // retained Three scene so every edge follows the same displayed object.
        ve.displayPosition ||= new ft();
        ve.displayPosition.set((left + ge.width / 2) / dt * 2 - 1, 1 - (top + ge.height / 2) / Dt * 2, ve.sz).unproject(Vt);
      }
    }, Qt = function(dt) {
      X = requestAnimationFrame(Qt);
      if (document.hidden) { w = dt; return; }
      const Dt = Math.min(0.05, (dt - w) / 1e3);
      w = dt;
      const Ot = Z.clientWidth, Kt = Z.clientHeight;
      if (!Ot || !Kt) return;
      if (St.domElement.width !== Math.round(Ot * St.getPixelRatio()) || St.domElement.height !== Math.round(Kt * St.getPixelRatio())) {
        St.setSize(Ot, Kt, false);
        const de = Et();
        vt.tDist *= de / qt, vt.dist *= de / qt, qt = de, jt(), Vt.aspect = Ot / Kt, Vt.updateProjectionMatrix(), Fe.uniforms.uPx.value = le.uniforms.uPx.value = Kt * St.getPixelRatio() / (2 * Math.tan(Vt.fov * Math.PI / 360));
      }
      C(), Tt && !rt.matches && (vt.tTheta += Dt * 0.09);
      const he = rt.matches ? 1 : 1 - Math.pow(16e-4, Dt);
      if (vt.theta += (vt.tTheta - vt.theta) * he, vt.phi += (vt.tPhi - vt.phi) * he, vt.dist += (vt.tDist - vt.dist) * he, vt.cx += (vt.tx - vt.cx) * he, vt.cy += (vt.ty - vt.cy) * he, vt.cz += (vt.tz - vt.cz) * he, Vt.position.set(vt.cx + vt.dist * Math.sin(vt.phi) * Math.cos(vt.theta), vt.cy + vt.dist * Math.cos(vt.phi), vt.cz + vt.dist * Math.sin(vt.phi) * Math.sin(vt.theta)), Vt.lookAt(vt.cx, vt.cy, vt.cz), Vt.updateMatrixWorld(), De(Ot, Kt), we.live && !Ht) {
        let de = null, En = 1 / 0;
        for (const mn of g) {
          if (!mn.vis || mn.sz > 1 || zt) continue;
          const oe = mn.sx - we.x, Ln = mn.sy - we.y, ma = mn.sr + 18;
          if (oe * oe + Ln * Ln > ma * ma) continue;
          const us = oe * oe + Ln * Ln;
          us < En && (de = mn, En = us);
        }
        de !== F && (F = de, te.style.cursor = de ? "pointer" : "grab", hn());
      }
      Rr(Ot, Kt, dt);
      const { nT: ve, sT: Ze, eT: ge } = zi(), wn = rt.matches ? 1 : 1 - Math.pow(2e-3, Dt);
      for (const de of g) de.alpha += (ve[de.i] - de.alpha) * wn, de.scale += (Ze[de.i] - de.scale) * wn, ct.array[de.i * 3] = de.x, ct.array[de.i * 3 + 1] = de.y, ct.array[de.i * 3 + 2] = de.z, $.array[de.i] = zt || de.cardVisible ? 0 : de.alpha, Lt.array[de.i] = de.scale;
      ct.needsUpdate = $.needsUpdate = Lt.needsUpdate = true;
      for (const de of x) {
        de.alpha += (ge[de.i] - de.alpha) * wn;
        const En = de.i * 6;
        const from = de.s.cardVisible ? de.s.displayPosition : de.s, to = de.t.cardVisible ? de.t.displayPosition : de.t;
        Pt.array[En] = from.x, Pt.array[En + 1] = from.y, Pt.array[En + 2] = from.z, Pt.array[En + 3] = to.x, Pt.array[En + 4] = to.y, Pt.array[En + 5] = to.z, Zt.array[de.i * 2] = Zt.array[de.i * 2 + 1] = zt && (!de.s.cardVisible || !de.t.cardVisible) ? 0 : de.alpha;
      }
      Pt.needsUpdate = Zt.needsUpdate = true, Rt.uniforms.uTime.value = dt / 1e3, Rt.uniforms.uFlow.value += ((Gt && !rt.matches ? 1 : 0) - Rt.uniforms.uFlow.value) * wn, St.render(bt, Vt), Q += 1 / Math.max(Dt, 1e-4), lt++, lt >= 30 && (o.sFps.textContent = Math.round(Q / lt), Q = lt = 0);
    }, ie = function(dt = 0.55) {
      et = Math.max(et, dt);
    }, ee = function(dt) {
      N = dt, o.hudMode.textContent = { atlas: "FREE ORBIT", shell: "SHELL VIEW", tier: "DEPENDENCY TIERS" }[N], ie(1);
    }, Ye = function() {
      vt.tTheta = 1.55, vt.tPhi = 1.48, vt.tDist = qt, Mi(), ie(0.8), jt();
    }, un = function() {
      n.tools({ flow: Gt, label: zt, spin: Tt });
    }, Ue = function(dt) {
      m = dt, document.documentElement.dataset.theme = dt, n.theme(dt);
      const Dt = dt === "light";
      for (const he of f) he.color = he[dt];
      g.forEach((he, ve) => {
        const Ze = H(he.cluster.color);
        _t[ve * 3] = Ze[0], _t[ve * 3 + 1] = Ze[1], _t[ve * 3 + 2] = Ze[2];
      }), re.getAttribute("aColor").needsUpdate = true, x.forEach((he, ve) => {
        Se.set(H(he.s.cluster.color), ve * 6), Se.set(H(he.t.cluster.color), ve * 6 + 3);
      }), xt.getAttribute("aColor").needsUpdate = true;
      const Ot = Dt ? ss : uo;
      for (const he of [Fe, le, Rt]) he.uniforms.uLight.value = Dt ? 1 : 0, he.blending = Ot, he.needsUpdate = true;
      const Kt = Dt ? 16053489 : 328967;
      St.setClearColor(Kt, 0), bt.fog.color.setHex(Kt), bt.fog.density = Dt ? 42e-4 : 68e-4, sn(), wt && me(wt);
    }, hn = function() {
      o.hudSel.textContent = ut ? `${Math.max(0, ut.size - 1)} ${c === "en" ? "connections" : "条连接"}` : wt ? wt.name : F ? F.name : "";
    }, fitVisible = function() {
      const visible = g.filter(node => !fe.has(node.cid) && (!Xa || (node.name + ' ' + node.desc).toLowerCase().includes(Xa)));
      if ((!fe.size && !Xa) || !visible.length) { vt.tx = vt.ty = vt.tz = 0; vt.tDist = qt; jt(); return; }
      const bounds = ['x','y','z'].map(axis => [Math.min(...visible.map(node => node[axis])), Math.max(...visible.map(node => node[axis]))]);
      [vt.tx, vt.ty, vt.tz] = bounds.map(([min,max]) => (min + max) / 2);
      const radius = Math.max(8, ...visible.map(node => Math.hypot(node.x-vt.tx,node.y-vt.ty,node.z-vt.tz)));
      const usable = Math.max(.24, Math.min(1 - 260 / Math.max(Z.clientHeight,1), (Z.clientWidth - 300) / Math.max(Z.clientHeight,1)));
      vt.tDist = Math.min(qt, radius / (Math.tan(B * Math.PI / 360) * usable)); jt();
    }, Ne = function(dt) {
      fe.has(dt) ? fe.delete(dt) : fe.add(dt), sn(), fitVisible(), ie(0.4);
    }, sn = function() {
      const dt = o.q.value.trim().toLowerCase(), Dt = g.filter((Kt) => !fe.has(Kt.cid) && (!dt || Kt.name.toLowerCase().includes(dt) || Kt.desc.toLowerCase().includes(dt))).sort((Kt, he) => M(he) - M(Kt));
      n.list({ q: dt, rows: Dt.map((Kt) => ({ i: Kt.i, name: Kt.name, color: Kt.cluster.color, deg: M(Kt), on: Kt === wt })) }), o.sNode.textContent = Dt.length;
      const Ot = x.filter((Kt) => Dt.includes(Kt.s) && Dt.includes(Kt.t)).length;
      o.sEdge.textContent = Ot, o.sDeg.textContent = Dt.length ? (Ot * 2 / Dt.length).toFixed(1) : "0";
    }, ni = function(dt) {
      Xa = dt.trim().toLowerCase(), sn(), fitVisible(), ie(0.25);
    }, me = function(dt) {
      n.drawer(dt && { i: dt.i, name: dt.name, desc: dt.desc, cname: dt.cluster.name, color: dt.cluster.color, deg: M(dt), depth: S[dt.i], groups: [["前置 \xB7 学它之前", dt.in, "PRE"], ["延伸 \xB7 它撑起了", dt.out, "NEXT"], ["并列 \xB7 相关概念", dt.rel, "REL"]].filter(([, Dt]) => Dt.length).map(([Dt, Ot, Kt]) => ({ title: Dt, tag: Kt, items: Ot.map((he) => ({ i: he.i, name: he.name, color: he.cluster.color })) })) });
    }, Wn = function(dt) {
      const Dt = g[dt], Ot = P[N], Kt = Ot[Dt.i].slice();
      for (let he = 0; he < Ot.length; he++) Ot[he][0] -= Kt[0], Ot[he][1] -= Kt[1], Ot[he][2] -= Kt[2];
      vt.tx = vt.ty = vt.tz = 0, ie(1);
    }, ta = function(dt) {
      const Dt = g[dt];
      pa(Dt), o.chain.textContent = c === "en" ? `From ${Dt.name} — Shift-click another concept` : `从 ${Dt.name} 出发 — 按住 Shift 点击另一个知识点`, o.pathbar.classList.add("on");
    };
    St.setPixelRatio(Math.min(devicePixelRatio, 2)), Z.appendChild(St.domElement), bt = new LR(), bt.fog = new Vp(328967, 68e-4), Vt = new Oi(B, 1, 1, 1400);
    const H = (dt) => {
      const Dt = new ke(dt);
      return [Dt.r, Dt.g, Dt.b];
    }, W = g.length, mt = new Float32Array(W * 3), _t = new Float32Array(W * 3), At = new Float32Array(W), Ct = new Float32Array(W), Ut = new Float32Array(W);
    g.forEach((dt, Dt) => {
      const Ot = H(dt.cluster.color);
      _t[Dt * 3] = Ot[0], _t[Dt * 3 + 1] = Ot[1], _t[Dt * 3 + 2] = Ot[2], At[Dt] = dt.size = BR(M(dt)), Ct[Dt] = 1, Ut[Dt] = 1;
    });
    const re = new Qi();
    re.setAttribute("position", new Sn(mt, 3)), re.setAttribute("aColor", new Sn(_t, 3)), re.setAttribute("aSize", new Sn(At, 1)), re.setAttribute("aAlpha", new Sn(Ct, 1)), re.setAttribute("aScale", new Sn(Ut, 1));
    const j = `
    attribute vec3 aColor; attribute float aSize; attribute float aAlpha; attribute float aScale;
    varying vec3 vColor; varying float vAlpha;
    uniform float uPx, uMul;
    void main(){
      vColor = aColor; vAlpha = aAlpha;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * aScale * uMul * uPx / max(-mv.z, 1.0);
      gl_Position = projectionMatrix * mv;
    }`, Fe = new Ki({ uniforms: { uPx: { value: 300 }, uMul: { value: 4.5 }, uLight: { value: 0 } }, vertexShader: j, fragmentShader: `
      varying vec3 vColor; varying float vAlpha;
      uniform float uLight;
      void main(){
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        // 三次衰减而不是高斯：边缘落得更干净，不会在近处糊成一片方块。
        float halo = pow(1.0 - d, 3.0);
        if (uLight > 0.5) {
          // 白纸上这一层不是"发光"，是墨在纸上洇开的一圈 —— 只压深，不加亮。
          gl_FragColor = vec4(vColor * 0.62, halo * 0.07 * vAlpha);
        } else {
          vec2 p = gl_PointCoord - 0.5;
          float rays = exp(-abs(p.x) * 140.0) * exp(-abs(p.y) * 9.0) + exp(-abs(p.y) * 140.0) * exp(-abs(p.x) * 9.0);
          gl_FragColor = vec4(mix(vColor, vec3(1.0), 0.25) * (halo + rays * 0.35), (halo * 0.24 + rays * 0.18) * vAlpha);
        }
      }`, transparent: true, blending: uo, depthWrite: false }), le = new Ki({ uniforms: { uPx: { value: 300 }, uMul: { value: 1 }, uLight: { value: 0 } }, vertexShader: j, fragmentShader: `
      varying vec3 vColor; varying float vAlpha;
      uniform float uLight;
      void main(){
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        if (uLight > 0.5) {
          // A crisp, topic-colored core on the light chart.
          float disc = 1.0 - smoothstep(0.82, 1.0, d);
          gl_FragColor = vec4(vColor, disc * 0.95 * vAlpha);
        } else {
          float core = 1.0 - smoothstep(0.12, 1.0, d);
          float disc = 1.0 - smoothstep(0.80, 1.0, d);
          vec3 c = mix(vColor, vec3(1.0), core * 0.08);
          gl_FragColor = vec4(c, disc * vAlpha);
        }
        #include <colorspace_fragment>
      }`, transparent: true, blending: uo, depthWrite: false });
    ce = new ax(re, Fe), pt = new ax(re, le), ce.frustumCulled = false, pt.frustumCulled = false, bt.add(ce, pt);
    const ae = x.length, Ft = new Float32Array(ae * 6), Se = new Float32Array(ae * 6), ne = new Float32Array(ae * 2), L = new Float32Array(ae * 2), b = new Float32Array(ae * 2), it = new Float32Array(ae * 2);
    x.forEach((dt, Dt) => {
      const Ot = H(dt.s.cluster.color), Kt = H(dt.t.cluster.color);
      Se.set(Ot, Dt * 6), Se.set(Kt, Dt * 6 + 3), ne[Dt * 2] = 0, ne[Dt * 2 + 1] = 1;
      const he = Dt * 0.6180339887 % 1;
      L[Dt * 2] = he, L[Dt * 2 + 1] = he, b[Dt * 2] = b[Dt * 2 + 1] = 1, it[Dt * 2] = it[Dt * 2 + 1] = dt.kind === "pre" ? 1 : 0;
    });
    const xt = new Qi();
    xt.setAttribute("position", new Sn(Ft, 3)), xt.setAttribute("aColor", new Sn(Se, 3)), xt.setAttribute("aT", new Sn(ne, 1)), xt.setAttribute("aSeed", new Sn(L, 1)), xt.setAttribute("aAlpha", new Sn(b, 1)), xt.setAttribute("aDir", new Sn(it, 1));
    const Rt = new Ki({ uniforms: { uTime: { value: 0 }, uFlow: { value: 1 }, uLight: { value: 0 } }, vertexShader: `
      attribute vec3 aColor; attribute float aT, aSeed, aAlpha, aDir;
      varying vec3 vColor; varying float vT, vSeed, vAlpha, vDir;
      void main(){
        vColor = aColor; vT = aT; vSeed = aSeed; vAlpha = aAlpha; vDir = aDir;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`, fragmentShader: `
      precision mediump float;
      varying vec3 vColor; varying float vT, vSeed, vAlpha, vDir;
      uniform float uTime, uFlow, uLight;
      void main(){
        // 光点位置在 0..1 上循环；用环上最短距离算亮度，
        // 否则每绕一圈都会在接缝处闪一下。
        float head = fract(vSeed + uTime * 0.16);
        float d = abs(vT - head);
        d = min(d, 1.0 - d);
        float pulse = exp(-pow(d * 7.0, 2.0)) * vDir * uFlow;
        if (uLight > 0.5) {
          gl_FragColor = vec4(mix(vColor * 0.42, vColor, pulse), vAlpha * (0.28 + 0.46 * pulse));
        } else {
          gl_FragColor = vec4(mix(vec3(0.38, 0.43, 0.52), vColor, 0.55) * (0.8 + 0.8 * pulse), vAlpha * (0.40 + 0.45 * pulse));
        }
      }`, transparent: true, blending: uo, depthWrite: false });
    A = new PR(xt, Rt), A.frustumCulled = false, bt.add(A);
    const Et = () => at() * (Z.clientWidth < 500 ? 1.06 : 0.82) * Math.max(1, Z.clientHeight / Math.max(Z.clientWidth, 1));
    let qt = Et();
    const vt = { theta: 1.55, phi: 1.48, dist: qt, tTheta: 1.55, tPhi: 1.48, tDist: qt, tx: 0, ty: 0, tz: 0, cx: 0, cy: 0, cz: 0 };
    let Ht = false, Te = 0, Nt = 0, Yt = 0;
    const te = St.domElement;
    gt(te, "pointerdown", (dt) => {
      Ht = true, Yt = 0, Te = dt.clientX, Nt = dt.clientY, te.setPointerCapture(dt.pointerId);
    }), gt(te, "pointerup", (dt) => {
      Ht = false, te.releasePointerCapture(dt.pointerId);
    }), gt(te, "pointermove", (dt) => {
      const Dt = te.getBoundingClientRect();
      if (we.x = dt.clientX - Dt.left, we.y = dt.clientY - Dt.top, we.live = true, !Ht) return;
      const Ot = dt.clientX - Te, Kt = dt.clientY - Nt;
      Yt += Math.abs(Ot) + Math.abs(Kt), Te = dt.clientX, Nt = dt.clientY, vt.tTheta -= Ot * 52e-4, vt.tPhi = Math.max(0.12, Math.min(Math.PI - 0.12, vt.tPhi - Kt * 52e-4)), Tt = false, un();
    }), gt(te, "pointerleave", () => {
      we.live = false, F = null, hn();
    });
    const ue = o.zlvl, jt = () => {
      ue.textContent = Math.round(qt / vt.tDist * 100) + "%";
    }, ye = (dt) => {
      vt.tDist = Math.max(qt * 0.22, Math.min(qt * 2.6, vt.tDist * dt)), jt();
    };
    gt(te, "wheel", (dt) => {
      dt.preventDefault(), ye(1 + Math.sign(dt.deltaY) * 0.11);
    }, { passive: false });
    const xe = () => {
      vt.tDist = qt, jt();
    };
    jt();
    const we = { x: -1, y: -1, live: false };
    let F = null, wt = null, ut = null, Tt = false, zt = true, Gt = !rt.matches;
    gt(rt, "change", () => {
      rt.matches && (Tt = false, Gt = false, un());
    });
    const fe = /* @__PURE__ */ new Set(), $e = 0.12, cn = new ft();
    gt(te, "click", (dt) => {
      if (!(Yt > 5)) {
        if (!F) {
          dt.shiftKey || Mi();
          return;
        }
        if (dt.shiftKey && wt && F !== wt) {
          Ji(wt, F);
          return;
        }
        pa(F);
      }
    });
    const Xe = new Float32Array(g.length), rn = new Float32Array(g.length), fn = new Float32Array(x.length);
    let Xa = "";
    const hi = o.labels, ei = document.createElement("canvas").getContext("2d"), $i = getComputedStyle(hi).fontFamily, ka = g.map((dt) => {
      const Dt = document.createElement("button");
      Dt.type = "button", Dt.hidden = true, Dt.className = "g-lab", Dt.dataset.index = dt.i, Dt.dataset.cluster = dt.cid, Dt.setAttribute("aria-label", (c === "en" ? "Explore " : "探索问题：") + dt.name);
      const topic = document.createElement('span'), point = document.createElement('i'), title = document.createElement('span');
      topic.className = 'g-node-topic'; point.className = 'g-node-point'; point.setAttribute('aria-hidden', 'true');
      topic.append(point, document.createTextNode(dt.cluster.name)); title.className = 'g-node-question'; title.textContent = dt.name; Dt.append(topic, title);
      const Ot = () => {
        we.live = false, F = dt, hn();
      }, Kt = () => {
        F === dt && (F = null, hn());
      };
      return gt(Dt, "click", (he) => {
        he.stopPropagation(), kn(dt.i, he.shiftKey);
      }), gt(Dt, "pointerenter", Ot), gt(Dt, "pointerleave", Kt), gt(Dt, "focus", Ot), gt(Dt, "blur", Kt), hi.appendChild(Dt), Dt;
    }), bo = [...g].sort((dt, Dt) => M(Dt) - M(dt)), cs = HR();
    let w = performance.now(), Q = 0, lt = 0;
    const ct = re.getAttribute("position"), $ = re.getAttribute("aAlpha"), Lt = re.getAttribute("aScale"), Pt = xt.getAttribute("position"), Zt = xt.getAttribute("aAlpha");
    X = requestAnimationFrame(Qt);
    const Xt = () => {
      Gt = !rt.matches && !Gt, un();
    }, be = () => {
      zt = !zt, un();
    }, je = () => {
      Tt = !rt.matches && !Tt, un();
    }, Jt = () => Ue(m === "light" ? "dark" : "light");
    gt(window, "keydown", (dt) => {
      if (/^(INPUT|TEXTAREA|BUTTON|SELECT)$/.test(dt.target.tagName)) {
        dt.key === "Escape" && dt.target.blur();
        return;
      }
      dt.key === "Escape" ? Mi() : dt.key === "l" || dt.key === "L" ? (zt = !zt, un()) : dt.key === "r" || dt.key === "R" ? Ye() : dt.key === " " ? (dt.preventDefault(), Tt = !rt.matches && !Tt, un()) : dt.key === "/" ? (dt.preventDefault(), o.q.focus()) : dt.key === "=" || dt.key === "+" ? ye(1 / 1.18) : (dt.key === "-" || dt.key === "_") && ye(1.18);
    });
    const kn = (dt, Dt = false) => {
      Dt && wt && wt !== g[dt] ? Ji(wt, g[dt]) : pa(g[dt]);
    }, xn = (dt) => {
      F = dt === null ? null : g[dt];
    };
    return Ue(m), sn(), me(null), un(), hn(), { setTheme: Ue, clearSel: Mi, setView: ee, toggleFlow: Xt, toggleLabel: be, toggleSpin: je, reset: Ye, toggleTheme: Jt, dolly: ye, zoomReset: xe, toggleCluster: Ne, selectAt: kn, hoverAt: xn, setQuery: ni, clearPath: Pi, centerOn: Wn, startPath: ta, dispose() {
      ot.abort(), cancelAnimationFrame(X), ka.forEach((dt) => dt.remove()), re.dispose(), xt.dispose(), Fe.dispose(), le.dispose(), Rt.dispose(), St.dispose(), te.remove();
    } };
  }
}

export {GR as createAtlasGraph};
