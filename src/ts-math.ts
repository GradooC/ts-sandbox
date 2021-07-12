export type Invert<
    Str extends string,
    Res extends string = ""
> = Str extends `${infer Head}${infer Tail}`
    ? Invert<Tail, `${Res}${Head extends "1" ? "0" : "1"}`>
    : Res;

type ResInvert = Invert<"00100">;

type WrapLine<
    Str extends string,
    Res extends string = ""
> = Str extends `${infer Head}${infer Tail}` ? WrapLine<Tail, `${Res}*`> : Res;

type Wrap<I extends string> = `**${WrapLine<I>}**
* ${I} *
**${WrapLine<I>}**`;

type ResWrap = Wrap<"Hello World">;

type WordCount<
    Str extends string,
    Res extends 0[] = [0]
> = Str extends `${infer Head} ${infer Tail}`
    ? WordCount<Tail, [...Res, 0]>
    : Res["length"];

type ResWordCount = WordCount<"Hello World From Here">;

type Line<Count extends number, Res extends string = "", S extends 0[] = []> = {
    recur: Line<Count, `${Res}*`, [...S, 0]>;
    done: Res;
}[S["length"] extends Count ? "done" : "recur"];

type Stars<
    Count extends number,
    Res extends string = "",
    S extends 0[] = []
> = {
    recur: Stars<Count, `${Res}\n${Line<Count>}`, [...S, 0]>;
    done: Res;
}[S["length"] extends Count ? "done" : "recur"];

type ResStars = Stars<5>;

type Min<X extends number, Y extends number, C extends 0[] = []> = {
    doneX: X;
    doneY: Y;
    recur: Min<X, Y, [...C, 0]>;
}[X extends C["length"] ? "doneX" : Y extends C["length"] ? "doneY" : "recur"];

type ResMin = Min<3, 5>;

type CountT<I extends number, Res extends number = 0, S extends 0[] = []> = {
    recur: CountT<I, Res | S["length"], [...S, 0]>;
    done: Res | I;
}[S["length"] extends I ? "done" : "recur"];

type ResCountT = CountT<5>;

type Count<I, S extends 0[] = []> = I extends S["length"]
    ? S
    : Count<I, [...S, 0]>;

type ResCount = Count<3>;

type Inc<I> = [...Count<I>, 0]["length"];

type ResInc = Inc<5>;

type Dec<I> = Count<I> extends [infer Head, ...infer Tail] ? Tail["length"] : 0;

type ResDec = Dec<4>;

type Add<X, Y> = Y extends 0 ? X : Add<Inc<X>, Dec<Y>>;

type ResAdd = Add<3, 5>;

type Sub<X, Y> = Y extends 0 ? X : Sub<Dec<X>, Dec<Y>>;

type ResSub = Sub<5, 3>;

type Mul<X, Y, Res = 0> = Y extends 0 ? Res : Mul<X, Dec<Y>, Add<Res, X>>;

type ResMul = Mul<2, 3>;

type DivI<X, Y, Res = 0> = X extends 0 ? Res : DivI<Sub<X, Y>, Y, Inc<Res>>;

type ResDivI = DivI<8, 2>;

type Div<X, Y> = Mul<DivI<X, Y>, Y> extends X ? DivI<X, Y> : Dec<DivI<X, Y>>;

type ResDiv = Div<26, 3>;

type Mod<X, Y> = Sub<X, Mul<Div<X, Y>, Y>>

type ResMod = Mod<20, 5>;

