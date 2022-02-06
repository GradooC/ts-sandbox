type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];

type Rename<Obj extends Record<string, any>, Map extends AtLeastOne<Record<keyof Obj, string>>> = {
    [K in keyof Obj as K extends keyof Map ? Map[K] : K]: K extends keyof Obj ? Obj[K] : never;
};

export const renameKeys = <
    Obj extends Record<string, any>,
    Map extends AtLeastOne<Record<keyof Obj, string>>
>(
    obj: Obj,
    keyMap: Map
) =>
    Object.entries(obj).reduce(
        (acc, [key, value]) => ({ ...acc, [keyMap[key] || key]: value }),
        {} as Rename<Obj, Map>
    );
