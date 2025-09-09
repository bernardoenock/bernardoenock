// =========================
// README LOGIC (Overlay)
// =========================
import gsap from "gsap";

const CONFIG = {
  elementId: "readme-container",
  fadeDuration: 0.5,
};

let readmeContainer = document.createElement("div");
readmeContainer.id = CONFIG.elementId;
document.body.appendChild(readmeContainer);

readmeContainer.style.display = "none";
readmeContainer.style.opacity = "0";

// Show README
export async function showReadme(filePath) {
  try {
    gsap.to(readmeContainer.style, { opacity: 0, duration: 0 });
    const res = await fetch(filePath);
    const text = await res.text();
    readmeContainer.innerHTML = window.marked ? marked.parse(text) : text;

    readmeContainer.style.display = "block";
    gsap.to(readmeContainer.style, { opacity: 1, duration: 0.5 });
  } catch (err) {
    console.error("Error loading README:", err);
  }
}

// Close README on outside click
document.addEventListener("click", (event) => {
  if (readmeContainer.style.display === "block") {
    if (
      !readmeContainer.contains(event.target) &&
      !event.target.classList.contains("label") &&
      !event.target.closest("nav")
    ) {
      gsap.to(readmeContainer.style, {
        opacity: 0,
        duration: CONFIG.fadeDuration,
        onComplete: () => {
          readmeContainer.style.display = "none";

          // ✅ Dispatch custom event so main.js knows to show player again
          document.dispatchEvent(new Event("readmeClosed"));
        },
      });
    }
  }
});

// Prevent closing when clicking inside
readmeContainer.addEventListener("click", (event) => event.stopPropagation());

// Prevent closing when clicking nav/labels
document.querySelectorAll(".label, nav button").forEach((el) => {
  el.addEventListener("click", (event) => event.stopPropagation());
});
