import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import camelCase from "camelcase";

export const result = camelCase("-");

if (
  process.argv[1]
  && pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  process.stdout.write(`${JSON.stringify(result)}\n`);
}
