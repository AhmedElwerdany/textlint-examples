import path from 'path';
import { TextLintEngine } from 'textlint';

const engine = new TextLintEngine({
  rules: ["no-empty-element"],
  formatterName: "pretty-error",
});

const run = (path) => engine.executeOnFiles([path]);

const results = await run(path.resolve(process.cwd(), "test.md"));

if (engine.isErrorResults(results)) {
  console.log(engine.formatResults(results));
  // json
  console.dir(results, { depth: 10 });
} else {
  console.log("All Passed!");
}
