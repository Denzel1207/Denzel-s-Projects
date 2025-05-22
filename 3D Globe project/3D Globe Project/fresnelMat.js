import * as THREE from "three";

THREE.FresnelShader = {
  uniforms: {},

  vertexShader: [
    "varying vec3 vPositionW;",
    "varying vec3 vNormalW;",

    "void main() {",

    "	vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);",
    " vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );",

    "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

    "}",
  ].join("\n"),

  fragmentShader: [
    "varying vec3 vPositionW;",
    "varying vec3 vNormalW;",

    "void main() {",

    "	vec3 color = vec3(1., 1., 1.);",
    "	vec3 viewDirectionW = normalize(cameraPosition - vPositionW);",
    "	float fresnelTerm = dot(viewDirectionW, vNormalW);",
    "	fresnelTerm = clamp(1.0 - fresnelTerm, 0., 1.);",

    "	gl_FragColor = vec4( color * fresnelTerm, 1.);",

    "}",
  ].join("\n"),
};

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 5;

  scene = new THREE.Scene();

  geometry = new THREE.TorusKnotBufferGeometry(1, 0.3, 128, 16);
  material = new THREE.ShaderMaterial({
    vertexShader: THREE.FresnelShader.vertexShader,
    fragmentShader: THREE.FresnelShader.fragmentShader,
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}
