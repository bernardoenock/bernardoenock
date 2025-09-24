import { Component } from "../../../core/component.js";
import { Button } from "../../atoms/Button/button.js";

export class CardBtnsMain extends Component {
  constructor() {

    const btnPoints = new Button(
      `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" width="24" height="24" aria-hidden="true">
        <path d="M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
      </svg>
      `,
      () => console.log("btnPoints"),
      {
        class: "icon-button"
      }
    );

    const btnNotify = new Button(
      `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" width="24" height="24" aria-hidden="true">
        <path d="M12 2a6 6 0 0 0-6 6v4.586l-.707.707A1 1 0 0 0 6 15h12a1 1 0 0 0 .707-1.707L18 12.586V8a6 6 0 0 0-6-6zm0 20a2.978 2.978 0 0 0 2.829-2H9.171A2.978 2.978 0 0 0 12 22z"/>
      </svg>
      `,
      () => console.log("btnNotify"),
      {
        class: "icon-button"
      }
    );

    const btnFollow = new Button(
      "Follow",
      () => console.log("btnFollow"),
      {
        class: "follow-button"
      }
    );

    super("div", 
      { 
        attributes: { 
          class: "card-btns-main" 
        } 
      }, [
      btnPoints,
      btnNotify,
      btnFollow
    ]);
  }
}
