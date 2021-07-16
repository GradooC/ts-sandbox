type Merge<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
    B extends infer O
    ? { [K in keyof O]: O[K] }
    : never;

type KeyValue<S extends string> = S extends `${infer K}=${infer V}`
    ? Record<K, V>
    : S;

type Query<
    Q extends string,
    R extends Record<string, string> = {}
> = Q extends `${infer Head}&${infer Tail}`
    ? Query<Tail, Merge<R, KeyValue<Head>>>
    : Merge<R, KeyValue<Q>>;

type ResQuery = Query<"a=1&b=2&abc=true&fail=compliance">;
