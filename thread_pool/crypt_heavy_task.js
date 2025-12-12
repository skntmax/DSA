const crypto = require("crypto");

console.time("hash");

for (let i = 0; i < 4; i++) {
  crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.timeEnd("hash");
  });
}
