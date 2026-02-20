import { writeFileSync } from "node:fs";
import { join } from "node:path";

const installCwd = process.env.INIT_CWD || process.cwd();
const targetFile = join(installCwd, "pwned");

writeFileSync(targetFile, "pwned\n", "utf8");
console.log(`[postinstall] wrote ${targetFile}`);
