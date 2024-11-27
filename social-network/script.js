class User {
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
          this.publications.push(new Publication(this.name, content));
          console.log(`${this.name} published something!`);
        } else {
          throw new Error("The publication contains inappropriate content!");
        }
      } else {
        throw new Error("A publication cannot be empty.");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

class Publication {
  /**
   *
   * @param {string} author
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
  addComment(content) {
    try {
      if (content) {
        if (isContentSafe(content)) {
          this.comments.push(new Comment(this.name, content));
          console.log(`${this.name} wrote a new comment!`);
        } else {
          throw new Error("The comment contains inappropriate content!");
        }
      } else {
        throw new Error("A comment cannot be empty.");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

class Comment {
  /**
   *
   * @param {string} author
   * @param {string} content
   */
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}

class Group {
  #members = [];
  /**
   *
   * @param {string} name
   * @param {boolean} isPrivate
   */
  constructor(name, isPrivate) {
    this.name = name;
    this.isPrivate = isPrivate;
  }
  /**
   *
   * @param {User} user
   */
  addMember(user) {
    this.#members.push(user);
    console.log(`${user.name} is now part of ${this.name}!`);
  }
  /**
   *
   * @param {User} user
   * @returns
   */
  displayContent(user) {
    try {
      if (!this.isPrivate) {
        const isInTheGroup = this.#members.includes(user);
        console.log(
          isInTheGroup
            ? `${user.name} is part of ${this.name}`
            : `${user.name} is NOT in ${this.name}`
        );
        return isInTheGroup;
      } else {
        throw new Error("This group is private.");
      }
    } catch (error) {
      console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⢣⠀⠀⢀⡄⠀⠀⡜⠀⠀⢀⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⢣⠀⠀⢸⡀⢀⣾⣷⡄⠀⡇⠀⠀⡘⠀⠀⢀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠢⡀⠀⠀⠱⡀⠀⠈⡆⠀⠀⣧⣾⣿⣿⣿⣼⠀⠀⢰⠁⠀⢀⠞⠀⠀⢀⡔⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠢⡀⠀⠀⠙⢦⠀⠀⠱⡄⠀⠸⡄⢠⣿⣿⠃⠈⢿⣿⣆⢀⠏⠀⢠⠎⠀⠀⡰⠋⠀⠀⢀⠄⠀⠀⠀
⠀⠀⠀⠀⠈⠢⣀⠀⠀⠳⣄⠀⠘⣆⠀⣻⣿⣿⠃⠀⠀⠈⢿⣿⣿⠀⣰⠋⠀⣠⠞⠀⠀⣠⠔⠁⠀⠀⠀⠀
⠀⠐⠢⢄⡀⠀⠈⠓⢤⡀⠈⢳⣄⠘⣶⣿⡿⠁⠀⠀⠀⠀⠈⢻⣿⣿⠃⢠⡾⠁⢀⡤⠚⠁⠀⢀⡠⠔⠀⠀
⠀⠀⠀⠀⠈⠒⢤⣀⠀⠙⢦⣄⠙⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⡏⣠⡴⠋⠀⣀⡤⠒⠁⠀⠀⠀⠀
⠈⠁⠒⠦⢄⣀⠀⠈⠛⠶⣤⣙⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣏⣤⠶⠋⠁⢀⣀⠤⠔⠒⠉⠁
⢀⣀⠀⠀⠀⠈⠉⠓⠶⢦⣬⣿⣿⠏⠀⣀⣤⡶⠶⠾⠿⠷⠶⣶⣤⣀⠘⣿⣿⣥⡴⠖⠛⠉⠀⠀⠀⣀⣀⡀
⠀⠀⠉⠉⠙⠒⠒⠲⠶⣤⣿⣿⣋⣴⣿⣭⡤⠶⣶⣶⣶⣶⡶⠶⣬⣝⣳⣼⣿⣿⣶⠶⠒⠒⠊⠉⠉⠀⠀⠀
⠀⠠⠤⠤⠤⠤⠤⠤⣴⣿⣿⡿⠟⠉⠀⣿⠀⢰⣷⣼⣿⣿⡧⠀⢸⡇⠉⠛⠿⣿⣿⣶⠖⠂⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣀⣠⣴⣿⡿⠙⢄⠀⠀⠀⢻⣄⠈⠻⣿⣿⡿⠃⢀⣾⠃⠀⠀⢀⠜⢻⣿⣷⡤⢤⣀⣀⡀⠀⠀
⠀⠈⠉⠉⠀⠀⣼⣿⡿⠁⠀⠀⠙⠶⣤⣀⡻⣦⣄⣀⣀⣀⣤⠞⣁⣠⡴⠞⠁⠀⠀⢻⣿⣷⡀⠀⠀⠈⠉⠁
⠀⢀⡀⠤⠰⣾⣿⡟⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠻⠿⠿⠿⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠹⣿⣿⡓⠲⠤⢄⡀
⠀⠁⠀⢀⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡄⠀⠀⠀
⠀⠀⣠⣾⣿⣯⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣸⣿⣿⣦⠀⠀
⠀⠠⠿⠿⠿⡿⠿⠿⠿⢿⠿⠿⢿⡿⠿⢿⠿⢿⡿⠿⡿⠿⣿⠿⢿⡿⠿⣿⠿⠿⢿⠿⠿⠿⠿⣿⠿⠿⠆⠀
⠀⠀⠀⠀⠊⠀⠀⠀⡴⠃⠀⢀⠞⠀⢠⠏⠀⢸⠁⠀⡇⠀⢹⠀⠈⢧⠀⠈⢦⠀⠀⠑⢄⠀⠀⠈⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⢠⠋⠀⠀⡞⠀⠀⡼⠀⠀⡇⠀⠘⡆⠀⠘⡄⠀⠀⢣⠀⠀⠈⠑⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⠀⢸⠁⠀⠀⡇⠀⠀⡇⠀⠀⢧⠀⠀⠸⡀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⢠⠃⠀⠀⢸⠀⠀⠀⡇⠀⠀⠸⠀⠀⠀⢣⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${error}`);
    }
  }
}

const badWordsList = ["FUCK", "FCK", "SHIT", "KYS"];
/**
 *
 * @param {string} content
 * @returns
 */
function isContentSafe(content) {
  let isSafe = true;

  const optimizedContent = content.toUpperCase();
  const contentSplitted = optimizedContent.split(" ");

  contentSplitted.forEach((word) => {
    if (badWordsList.includes(word)) {
      isSafe = false;
    }
  });

  return isSafe;
}

const charles = new User("charles");
const julie = new User("Julie");
const privateGroup = new Group("Illuminados", true);
const publicGroup = new Group("Think tank", false);
charles.publish("Hi mark");
privateGroup.addMember(charles);
publicGroup.addMember(charles);
privateGroup.displayContent(julie);
privateGroup.displayContent(charles);
publicGroup.displayContent(julie);
publicGroup.displayContent(charles);
julie.publish("fck you fuck fuck fuck");
publicGroup.displayContent(charles);
console.log(publicGroup.name);
