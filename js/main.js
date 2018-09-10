var two = new Two({
  fullscreen: true
}).appendTo(document.body);

var length = 64;
var width = 250;
var height = 50;

let count = Math.PI * 100;
let t = 0;
var a = 400;
var b = 200;
var c = 17;
var d = 100;
var δ = (Math.random() * Math.PI) / 2;

var points = [];

for (var i = 0; i < count; i += 10) {
  var pct = i / (length - 1);
  y = 200 + a * Math.sin(c * i);
  x = 200 + b * Math.cos(d * i);

  points.push(new Two.Anchor(x, y));
}

var wave = two.makeCurve(points, true);
wave.translation.set(two.width / 2, two.height / 4);
wave.noFill();
var linearGradient = two.makeLinearGradient(
  two.width,
  -two.height,
  two.width,
  two.height,
  new Two.Stop(0, "rgb(0,255,255)"),
  new Two.Stop(1, "rgb(255,0,0)")
);
wave.stroke = linearGradient;
wave.linewidth = 0.5;
wave.cap = "round";

two.update(); // Generate the SVG elements

two.bind("update", function(frameCount) {
  var vertices = wave.vertices;
  for (var i = 0; i < vertices.length; i++) {
    var offset = frameCount / 20;
    var v = vertices[i];
    var pct = i / (vertices.length - 1);
    y = 200 + a * Math.sin((c * (i + frameCount / 10000)) / δ);
    x = 200 + b * Math.cos((d * (i / frameCount / 10000)) / δ);
    v.y = y;
  }
});
two.play();
