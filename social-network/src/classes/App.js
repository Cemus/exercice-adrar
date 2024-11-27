import User from "./User";
import Group from "./Group";

export default class App {
  constructor() {
    this.users = [];
    this.groups = [];
    this.moi = new User("Moi");
  }
  setup() {
    const moi = new User("Moi");
    const charles = new User("Charles");
    const julie = new User("Julie");
    charles.publish("Hahaha, lol!");
    const charlesPub = charles.publications[0];
    charlesPub.addComment(charles, "lolilol");
    charlesPub.addComment(julie, "Franchement pas cool");

    const privateGroup = new Group("Illuminados", true);
    const publicGroup = new Group("Think tank", false);
    privateGroup.addMember(charles);
    publicGroup.addMember(charles);
    publicGroup.addMember(charles);

    this.users.push(charles, julie);
    this.groups.push(privateGroup, publicGroup);
  }
  getAllUsers() {
    return this.users;
  }
  getMe() {
    return this.moi;
  }
}
