import { Component } from "../core/component.js";
import { NavBar } from "../components/navbar.js";

export function HeaderTemplate(links) {
  const navBar = new NavBar(links);
  return new Component("header").appendChild(navBar);
}
