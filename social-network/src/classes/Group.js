import User from "./User";

export default class Group {
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
    try {
      if (!this.#members.includes(user)) {
        this.#members.push(user);
        console.info(`${user.name} is now part of ${this.name}!`);
      } else {
        throw new Error(`${user.name} is already in ${this.name}!`);
      }
    } catch (error) {
      console.error(error);
    }
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
        console.info(
          isInTheGroup
            ? `${user.name} is part of ${this.name}`
            : `${user.name} is NOT in ${this.name}`
        );
        return isInTheGroup;
      } else {
        throw new Error("This group is private.");
      }
    } catch (error) {
      console.error(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
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
