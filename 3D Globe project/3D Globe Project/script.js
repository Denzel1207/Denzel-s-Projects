import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();
loader.load(
  "https://cdn.glitch.global/0f3b79d8-da58-4eae-976b-69ad392f2cb5/stars.jpg?v=1745634565589",
  function (texture) {
    scene.background = texture;
  }
);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const earthGroup = new THREE.Group();
earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
scene.add(earthGroup);
new OrbitControls(camera, renderer.domElement);
//const loader = new THREE.TextureLoader();
const geo = new THREE.IcosahedronGeometry(1, 12);
const mat = new THREE.MeshStandardMaterial({
  map: loader.load(
    "https://cdn.glitch.global/0f3b79d8-da58-4eae-976b-69ad392f2cb5/00_earthmap1k.jpg?v=1745625931726"
  ),
});
const mesh = new THREE.Mesh(geo, mat);
earthGroup.add(mesh);

const lightsMat = new THREE.MeshBasicMaterial({
  transparent: true,
  opacity: 0.6,
  map: loader.load(
    "https://cdn.glitch.global/0f3b79d8-da58-4eae-976b-69ad392f2cb5/03_earthlights1k%20(1).jpg?v=1745625911035"
  ),
  blending: THREE.AdditiveBlending,
});

const lightsMesh = new THREE.Mesh(geo, lightsMat);
earthGroup.add(lightsMesh);

const cloudsMat = new THREE.MeshStandardMaterial({
  map: loader.load(
    "https://cdn.glitch.global/0f3b79d8-da58-4eae-976b-69ad392f2cb5/eathhirescloud.jpg?v=1745632267519"
  ),
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
});
const cloudsMesh = new THREE.Mesh(geo, cloudsMat);
cloudsMesh.scale.setScalar(1.003);
earthGroup.add(cloudsMesh);

const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
//mesh.add(wireMesh);

const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, -0.5, 1.5);
scene.add(sunLight);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.002;
  lightsMesh.rotation.y += 0.002;
  cloudsMesh.rotation.y += 0.002;
  renderer.render(scene, camera);
  controls.update();
}
animate();
