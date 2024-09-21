import { makeAutoObservable } from "mobx";

class UserStore {
  user: { username: string; email: string } | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadUser();
  }

  setUser(username: string, email: string) {
    this.user = { username, email };
    localStorage.setItem("login", username); 
  }

  clearUser() {
    this.user = null;
    localStorage.removeItem("login"); 
  }

  loadUser() {
    const username = localStorage.getItem("login");
    if (username) {
      this.user = { username, email: "" }; 
    }
  }
}

const userStore = new UserStore();
export default userStore;
