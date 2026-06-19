// export class RootScreen {
//   // 속성
//   #authScreen;
//   #memoScreen;
//   #screenIds;
//   #me;

//   constructor(authScreen, memoScreen) {
//     this.#authScreen = authScreen;
//     this.#memoScreen = memoScreen;
//     this.#screenIds = ["signin-view", "signup-view", "memo-view"];
//     this.me = null;
//   }

//   run() {
//     // 등록
//     document.getElementById("goto-signup-btn").addEventListener("click", () => {
//       this.showScreen("signup-view");
//     });
//     document.getElementById("goto-signin-btn").addEventListener("click", () => {
//       this.showScreen("signin-view");
//     });
//     document.getElementById("signin-btn").addEventListener("click", () => {
//       this.#me = this.#authScreen.signIn();
//       if (this.#me !== null) {
//         this.showScreen("memo-view");
//         this.#memoScreen.showGrettingMessage(this.#me.username);
//       }
//     });
//     document.getElementById("signup-btn").addEventListener("click", () => {
//       const isSuccess = this.#authScreen.signUp();
//       if (isSuccess) {
//         this.showScreen("signin-view");
//       }
//     });

//     this.showScreen("signin-view");
//   }

//   showScreen(screenId) {
//     for (let i = 0; i < this.#screenIds.length; i++) {
//       if (this.#screenIds[i] === screenId) {
//         document.getElementById(this.#screenIds[i]).classList.add("active");
//       } else {
//         document.getElementById(this.#screenIds[i]).classList.remove("active");
//       }
//     }
//   }
// }