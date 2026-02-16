import { createTypeSpecLibrary } from '@typespec/compiler';

export const $lib = createTypeSpecLibrary({
    name: 'core',
    diagnostics: {},
    state: {}
});

export const { reportDiagnostic, createDiagnostic, stateKeys: StateKeys } = $lib;
