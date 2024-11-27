import User from "./User";

export default class Comment {
  /**
   *
   * @param {User} author
   * @param {string} content
   */
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}
