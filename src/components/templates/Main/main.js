import { Component } from "../../../core/component.js";
import { TopMain } from "../../organisms/TopMain/topMain.js";

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

  const backgroundGIF = new Component("div", { 
    attributes: { class: "background-gif" } 
  });

  const backgroundGIF2 = new Component("div", { 
    attributes: { class: "background-gif-2" } 
  });

  const mainComponent = new Component("main", {}, [
    backgroundGIF,
    backgroundGIF2,
    containerMain
  ]);

  return mainComponent;
}
