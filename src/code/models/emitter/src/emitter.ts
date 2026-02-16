import { EmitContext, resolvePath } from '@typespec/compiler';
import { EmitterOptions } from './lib.js';

export async function $onEmit(context: EmitContext<EmitterOptions>) {
    const outputPath = resolvePath(context.emitterOutputDir, 'hello.txt');
    const name = context.options['target-name'];
    await context.program.host.writeFile(outputPath, `hello ${name}!`);
}
