import path from 'path';
import { TextLintEngine } from 'textlint';

const engine = new TextLintEngine({
  rules: ['no-todo'],
});

const run = (path) => engine.executeOnFiles([path]);

const results = await run(path.resolve(process.cwd(), "test.md"));

if (engine.isErrorResults(results)) {
  console.dir(results , {depth:5});
} else {
  console.log("All Passed!");
}
