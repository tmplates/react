const fs = require("fs");
const path = require("path");

module.exports = async function (prompts) {
  const lib = await prompts({
    name: "value",
    initial: true,
    type: "confirm",
    message: "Create a library project?",
  });

  if (lib) {
    return {
      ts: true,
      lib: true,
      test: true,
      dirs: ["src"],
      framework: "react",
      lint: ["stylelint", "commitlint", "eslint"],
      files: [
        ["src/index.ts", fs.readFileSync(resolve("files/lib/src/index.ts"))][
          ("src/Button.tsx", fs.readFileSync(resolve("files/lib/src/Button.tsx")))
        ],
        ["test/button.test.tsx", fs.readFileSync(resolve("files/lib/test/button.test.tsx"))],
      ],
    };
  } else {
    return {
      ts: true,
      lib: false,
      test: true,
      framework: "react",
      dirs: ["src", "public"],
      lint: ["stylelint", "commitlint", "eslint"],
      files: [
        ["index.html", fs.readFileSync(resolve("files/app/index.html"))],
        ["src/main.tsx", fs.readFileSync(resolve("files/app/src/main.tsx"))],
        ["src/App.tsx", fs.readFileSync(resolve("files/app/src/App.tsx"))],
        ["src/App.css", fs.readFileSync(resolve("files/app/src/App.css"))],
        ["src/index.scss", fs.readFileSync(resolve("files/app/src/index.css"))],
      ],
    };
  }
};

function resolve(filePath) {
  return path.join(__dirname, filePath);
}
