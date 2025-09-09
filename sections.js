// =========================
// SECTIONS CONFIG
// =========================
// Define positions, lookAt targets and rotations for each section.
// Rotations must be in radians (use Math.PI helpers for convenience).
// Example: Math.PI / 2 = 90°, Math.PI = 180°, etc.

export const sections = [
  { 
    position: { x: -0.6, y: 2.7, z: -0.3 }, 
    lookAt: { x: 0, y: 0, z: 0 },
    rotation: { x: -0.02, y: 0.7, z: 0.03 } // No rotation applied
  },
  { 
    position: { x: -1.74, y: 3, z: 2.5 }, 
    lookAt: { x: 0, y: 0, z: 0 },
    rotation: { x: -0.44, y: 1.3, z: 0.44 } // Rotate 45° on Y
  },
  { 
    position: { x: 0.08, y: 3, z: 1.36 }, 
    lookAt: { x: 0, y: 0, z: 0 },
    rotation: { x: -0.39, y: 0.99, z: 0.39 } // Tilt 30° down on X
  },
];
