import { Component } from "../../../core/component.js";
import { SettingsIcon } from "../../atoms/SettingsIcon/settingsIcon.js";
import { HomeIcon } from "../../atoms/HomeIcon/homeIcon.js";
import { SearchInput } from "../../atoms/SearchInput/searchInput.js";
import { Modal } from "../../atoms/Modal/modal.js";
import { ToggleButton } from "../../atoms/ToggleButton/toggleButton.js";
import { NavBar } from "../../molecules/Navbar/navbar.js";

export function HeaderTemplate(links) {
  const navBar = new NavBar(links);
  const searchInput = new SearchInput();
  const homeIcon = new HomeIcon();

  const handleToggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const themeToggleButton = new ToggleButton(handleToggleTheme);

  const modalNavBar = new NavBar(links);
  const modalContent = new Component("div", { attributes: { class: "settings-modal-content" } }, [
    modalNavBar,
    themeToggleButton
  ]);

  const settingsModal = new Modal("settings-modal", "Configurações", modalContent);

  const settingsIcon = new SettingsIcon(() => {
    document.getElementById("settings-modal").classList.remove("hidden");
  });

  const containerHeader = new Component("header", { attributes: { class: "header-container" } });

  const containerHomeIcon = new Component("div", { attributes: { class: "header-left" } }, [homeIcon]);

  const containerNavBar = new Component("div", { attributes: { class: "header-center" } }, [navBar]);

  const containerRight = new Component("div", { attributes: { class: "header-right" } }, [
    searchInput,
    settingsIcon,
    themeToggleButton,
    settingsModal
  ]);

  return containerHeader.appendChildren([
    containerHomeIcon,
    containerNavBar,
    containerRight
  ]);
}
