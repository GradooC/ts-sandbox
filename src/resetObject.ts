type Deep = 'flat' | 'deep';

type DeepReset<O extends Record<string, unknown>> = {
    [K in keyof O]: O[K] extends Record<string, unknown> ? DeepReset<O[K]> : null;
};

type FlatReset<O extends Record<string, unknown>> = {
    [K in keyof O]: null;
};

const isObject = (value: any): value is Record<string, unknown> =>
    Object.prototype.toString.call(value) === '[object Object]';

export function resetObject<O extends Record<string, unknown>>(obj: O, deep?: 'flat'): FlatReset<O>;
export function resetObject<O extends Record<string, unknown>>(obj: O, deep: 'deep'): DeepReset<O>;
export function resetObject<O extends Record<string, unknown>>(obj: O, deep: Deep = 'flat') {
    return {
        deep: Object.entries(obj).reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: isObject(value) ? resetObject(value, 'deep') : null,
            }),
            {} as DeepReset<O>
        ),
        flat: Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: null }), {} as FlatReset<O>),
    }[deep];
}
