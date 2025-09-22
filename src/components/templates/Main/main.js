import { Component } from "../../../core/component.js";

export function MainTemplate(targetId) {
  return new Component("main", { attributes: { id: targetId } });
}
