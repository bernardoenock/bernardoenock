import { Component } from "../../../core/component.js";
import { TopMain } from "../../organisms/topMain.js";

export function MainTemplate(targetId) {

  const topMain = new TopMain();
  const containerMD = new Component("div", { attributes: { id: targetId, class: "container-md" } });

  return new Component("main", {}, [topMain, containerMD]);
}
