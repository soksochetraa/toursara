export const auth = {
  isLoggedIn: false,
  login() {
    this.isLoggedIn = true;
  },
  logout() {
    this.isLoggedIn = false;
  },
};
