import User from "./User";
import Comment from "./Comment";
import isContentSafe from "../utils/isContentSafe";

export default class Publication {
  /**
   *
   * @param {User} author
   * @param {string} content
   */
  constructor(author, content) {
    this.author = author;
    this.content = content;

    this.comments = [];
  }
  /**
   *
   * @param {string} content
   */
  addComment(author, content) {
    try {
      if (content) {
        if (isContentSafe(content)) {
          this.comments.push(new Comment(author, content));
          console.info(`${author.name} wrote a new comment!`);
        } else {
          throw new Error("The comment contains inappropriate content!");
        }
      } else {
        throw new Error("A comment cannot be empty.");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
