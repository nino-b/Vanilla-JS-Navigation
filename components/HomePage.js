import BaseComponent from "./BaseComponent";
import { fetchData } from "../utils/asyncUtils";

export default class HomePage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSSFile = '../styles/homePage.css';
    this.templateID = 'home-page-template';
    this.eventName = 'homechange'
  }
  connectedCallback() {
    super.pageSetup();
  }
}

customElements.define('home-page', HomePage);