export declare const map: <T, S>(input: T[] | undefined, callback: (value: T, index: number, array: T[]) => S) => S[];
export declare const filter: <T extends {}>(input: T[], callback: (value: T, index: number, array: T[]) => boolean) => T[];
export declare const findIndex: <T>(input: T[], compareFunc: (element: T) => boolean) => number;
export declare const formatToken: (token?: string) => string;
export declare const insertObjectIf: <T extends {}>(condition: boolean | any, elements: T) => Partial<T>;
export declare const insertObjectIfElse: <T1, T2>(condition: boolean, elements1: T1, elements2: T2) => Partial<T1 | T2>;
export declare const getUniqueListBy: <T>(array?: T[] | undefined, key?: string) => T[];
export declare const arrayToJson: <T>(array?: T[], key?: string) => {
    [key: string]: T;
};
export declare const isEqualWithoutNil: (value: any, other: any) => boolean;
