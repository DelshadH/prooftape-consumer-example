import { result } from "./app.mjs";

if (typeof result !== "string") {
  throw new Error("camelcase must return a string");
}
process.stdout.write("ordinary application contract passed\n");
