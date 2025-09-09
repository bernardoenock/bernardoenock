// =========================
// IMPORTS
// =========================
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import gsap from "gsap";
import { sections } from "./sections.js";
import { showReadme } from "./readme.js";

// =========================
// CONFIG
// =========================
const CONFIG = {
  camera: {
    fov: 60,
    near: 0.1,
    far: 100,
    initialPos: { x: 2, y: 2, z: 1 },
    initialRot: { x: -0.08, y: 0.7, z: 0.08 },
  },
  fly: {
    movementSpeed: 5,
    rollSpeed: 0.5,
    dragToLook: true,
    autoForward: false,
  },
  model: {
    path: "/models/isometric_room_house_game-ready_low_poly.glb",
    scale: 1.5,
  },
  animation: {
    duration: 2,
    ease: "power2.inOut",
  },
  scene: {
    background: 0x111111,
  },
};

// =========================
// SCENE
// =========================
const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.scene.background);

// =========================
// CAMERA
// =========================
const camera = new THREE.PerspectiveCamera(
  CONFIG.camera.fov,
  window.innerWidth / window.innerHeight,
  CONFIG.camera.near,
  CONFIG.camera.far
);
camera.position.set(
  CONFIG.camera.initialPos.x,
  CONFIG.camera.initialPos.y,
  CONFIG.camera.initialPos.z
);
camera.rotation.set(
  CONFIG.camera.initialRot.x,
  CONFIG.camera.initialRot.y,
  CONFIG.camera.initialRot.z
);
scene.add(camera);

// =========================
// RENDERERS
// =========================
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
labelRenderer.domElement.style.pointerEvents = "none";
document.body.appendChild(labelRenderer.domElement);

// =========================
// LIGHTS
// =========================
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(5, 10, 7);
scene.add(light);

// =========================
// MODEL LOADER
// =========================
const loader = new GLTFLoader();
loader.load(CONFIG.model.path, (gltf) => {
  const model = gltf.scene;
  model.scale.set(CONFIG.model.scale, CONFIG.model.scale, CONFIG.model.scale);
  scene.add(model);
});

// =========================
// FLY CONTROLS
// =========================
const controls = new FlyControls(camera, renderer.domElement);
controls.movementSpeed = CONFIG.fly.movementSpeed;
controls.rollSpeed = CONFIG.fly.rollSpeed;
controls.dragToLook = CONFIG.fly.dragToLook;
controls.autoForward = CONFIG.fly.autoForward;

let controlsLocked = true;
let debugActive = false;
let debugOverlay = null;

// =========================
// CAMERA MOVEMENT
// =========================
function moveCameraTo(sectionIndex) {
  const { position, rotation } = sections[sectionIndex];

  controlsLocked = true;

  gsap.to(camera.position, {
    x: position.x,
    y: position.y,
    z: position.z,
    duration: CONFIG.animation.duration,
    ease: CONFIG.animation.ease,
  });

  gsap.to(camera.rotation, {
    x: rotation.x,
    y: rotation.y,
    z: rotation.z,
    duration: CONFIG.animation.duration,
    ease: CONFIG.animation.ease,
    onComplete: () => {
      controlsLocked = false;
    },
  });
}

// =========================
// RESET CAMERA TO INITIAL POSITION
// =========================
function resetCameraPosition() {
  controlsLocked = true;

  gsap.to(camera.position, {
    x: CONFIG.camera.initialPos.x,
    y: CONFIG.camera.initialPos.y,
    z: CONFIG.camera.initialPos.z,
    duration: CONFIG.animation.duration,
    ease: CONFIG.animation.ease,
  });

  gsap.to(camera.rotation, {
    x: CONFIG.camera.initialRot.x,
    y: CONFIG.camera.initialRot.y,
    z: CONFIG.camera.initialRot.z,
    duration: CONFIG.animation.duration,
    ease: CONFIG.animation.ease,
    onComplete: () => {
      controlsLocked = false;
    },
  });
}

// =========================
// TOUR PLAYER
// =========================
function createTourPlayer() {
  const existing = document.getElementById("tour-player");
  if (existing) return;

  const player = document.createElement("div");
  player.id = "tour-player";
  player.innerText = "▶ Start Tour";
  Object.assign(player.style, {
    position: "fixed",
    bottom: "50px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "15px 30px",
    background: "rgba(0,0,0,0.7)",
    color: "white",
    fontSize: "18px",
    borderRadius: "12px",
    cursor: "pointer",
    zIndex: "15",
    opacity: "0",
    transition: "opacity 0.5s ease",
  });
  document.body.appendChild(player);

  gsap.to(player.style, { opacity: 1, duration: 1 });

  player.addEventListener("click", () => {
    moveCameraTo(0); // "About"
    showReadme("/readme.md");
    gsap.to(player.style, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => player.remove(),
    });
  });
}

// Show player on page load
createTourPlayer();

// Show player again and reset camera when README closes
document.addEventListener("readmeClosed", () => {
  resetCameraPosition();
  createTourPlayer();
});

// =========================
// NAVIGATION EVENTS
// =========================
document.querySelectorAll("nav button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const sectionIndex = btn.getAttribute("data-section");
    moveCameraTo(sectionIndex);
    showReadme("/test.md");
  });
});

// =========================
// RESPONSIVE
// =========================
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

// =========================
// DEBUG CAMERA INFO
// =========================
function toggleDebug() {
  debugActive = !debugActive;

  if (debugActive) {
    debugOverlay = document.createElement("div");
    debugOverlay.style.position = "absolute";
    debugOverlay.style.top = "10px";
    debugOverlay.style.left = "10px";
    debugOverlay.style.padding = "8px";
    debugOverlay.style.background = "rgba(0,0,0,0.7)";
    debugOverlay.style.color = "lime";
    debugOverlay.style.fontFamily = "monospace";
    debugOverlay.style.zIndex = "9999";
    document.body.appendChild(debugOverlay);

    controlsLocked = false; // Unlock free movement
  } else {
    if (debugOverlay) document.body.removeChild(debugOverlay);
    debugOverlay = null;

    controlsLocked = true; // Lock camera again
  }
}

window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "v") toggleDebug();
});

// =========================
// MAIN LOOP
// =========================
function animate() {
  requestAnimationFrame(animate);

  // Only allow FlyControls updates if NOT locked
  if (!controlsLocked) controls.update(0.01);

  // Show debug info if active
  if (debugActive && debugOverlay) {
    debugOverlay.innerHTML = `
      <b>Camera Position</b><br>
      x: ${camera.position.x.toFixed(2)}<br>
      y: ${camera.position.y.toFixed(2)}<br>
      z: ${camera.position.z.toFixed(2)}<br>
      <b>Camera Rotation</b><br>
      x: ${camera.rotation.x.toFixed(2)}<br>
      y: ${camera.rotation.y.toFixed(2)}<br>
      z: ${camera.rotation.z.toFixed(2)}
    `;
  }

  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}
animate();