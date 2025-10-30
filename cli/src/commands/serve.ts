import http from "http";
import chalk from "chalk";

export async function serveProject() {
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.end("🍓 Raspberry app running!");
  });

  server.listen(port, () => {
    console.log(chalk.blue(`Your Raspberry app is live 🚀 `));
    console.log(chalk.green(`Server running at http://localhost:${port}`));
  });
}
