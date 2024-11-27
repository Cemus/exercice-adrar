import isContentSafe from "../utils/isContentSafe";
import Publication from "./Publication";

export default class User {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    this.name = name;

    this.publications = [];
    this.groups = [];
  }
  /**
   *
   * @param {string} content
   */
  publish(content) {
    try {
      if (content) {
        if (isContentSafe(content)) {
          this.publications.push(new Publication(this, content));
          console.info(`${this.name} published something!`);
        } else {
          throw new Error("The publication contains inappropriate content!");
        }
      } else {
        throw new Error("A publication cannot be empty.");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
