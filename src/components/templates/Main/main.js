import { Component } from "../../../core/component.js";
import { TopMain } from "../../organisms/topMain.js";

export function MainTemplate(targetId) {
  const topMain = new TopMain();
  const containerMD = new Component("div", { 
    attributes: { id: targetId, class: "container-md" } 
  });

  const containerMain = new Component("section", { 
    attributes: { class: "container-main" } 
  }, [
    topMain,
    containerMD
  ]);

  const backgroundVideo = new Component("video", {
    attributes: { 
      autoplay: true,
      muted: true,
      loop: true,
      playsinline: true,
      class: "background-video"
    }
  }, [
    new Component("source", { attributes: { src: "./assets/videos/points.mp4", type: "video/mp4" } })
  ]);

  return new Component("main", {}, [backgroundVideo, containerMain]);
}
