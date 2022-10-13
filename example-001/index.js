import path from 'path';
import { TextLintEngine } from 'textlint';

const engine = new TextLintEngine(
    {
        formatterName: "pretty-error"
    }
);

const run = (path) => engine.executeOnFiles([path]);

const results = await run(path.resolve(process.cwd(), "test.md"));

if (engine.isErrorResults(results)) {
  const output = engine.formatResults(results);
  console.log(output);
} else {
  console.log("All Passed!");
}
