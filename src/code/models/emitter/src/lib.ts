import { createTypeSpecLibrary, JSONSchemaType } from '@typespec/compiler';

export interface EmitterOptions {
    'target-name'?: string;
}

const EmitterOptionsSchema: JSONSchemaType<EmitterOptions> = {
    type: 'object',
    additionalProperties: false,
    properties: {
        'target-name': { type: 'string', nullable: true }
    },
    required: []
};

export const $lib = createTypeSpecLibrary({
    name: '@crawlio/emitter',
    diagnostics: {},
    emitter: {
        options: EmitterOptionsSchema
    }
});

export const { reportDiagnostic, createDiagnostic } = $lib;
