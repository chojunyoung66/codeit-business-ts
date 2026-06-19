// export class AuthScreen {
//   #authService;

//   constructor(authService) {
//     this.#authService = authService;
//   }

//   signIn() {
//     const inputEmail = document.getElementById("email").value;
//     if (inputEmail.includes("@") === false) {
//       alert("올바른 이메일 형식이 아닙니다.");
//       return null;
//     }

//     const inputPassword = document.getElementById("password").value;
//     if (inputPassword.length < 4) {
//       alert("비밀번호는 최소 4자 이상입니다.");
//       return null;
//     }

//     const user = this.#authService.signIn(inputEmail, inputPassword);
//     if (user === null) {
//       alert("이메일 또는 비밀번호가 일치하지 않습니다.\n");
//       return null;
//     }

//     alert("로그인 성공");
//     return user;
//   }

//   signUp() {
//     const inputEmail = document.getElementById("new-email").value;
//     if (inputEmail.includes("@") === false) {
//       alert("올바른 이메일 형식이 아닙니다.");
//       return false;
//     }

//     const inputPassword = document.getElementById("new-password").value;
//     if (inputPassword.length < 4) {
//       alert("비밀번호는 최소 4자 이상입니다.");
//       return false;
//     }

//     const inputUsername = document.getElementById("new-username").value;
//     if (inputUsername.length < 1) {
//       alert("이름은 최소 1자 이상입니다.");
//       return false;
//     }

//     const isSignedUp = this.#authService.signUp(
//       inputEmail,
//       inputPassword,
//       inputUsername,
//     );
//     if (isSignedUp === false) {
//       alert("이미 존재하는 계정입니다.");
//       return false;
//     }

//     document.getElementById("new-email").value = "";
//     document.getElementById("new-password").value = "";
//     document.getElementById("new-username").value = "";
//     alert("회원 가입에 성공했어요.");
//     return true;
//   }
// }