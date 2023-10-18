import isNilOrEmpty from "ramda-adjunct/src/isNilOrEmpty";
import isNil from "ramda/src/isNil";
import isEqual from "lodash/isEqual";

export const map = <T, S>(
  input: T[] | undefined,
  callback: (value: T, index: number, array: T[]) => S
): S[] => {
  if (!Array.isArray(input)) return [];

  return input?.map(callback);
};

export const filter = <T extends {}>(
  input: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): T[] => {
  if (!Array.isArray(input)) return [];

  return input.filter(callback);
};

export const findIndex = <T>(
  input: T[],
  compareFunc: (element: T) => boolean
): number => {
  if (!Array.isArray(input)) return -1;

  return input?.findIndex(compareFunc);
};

export const formatToken = (token?: string) => `Bearer ${token ?? ""}`;

export const insertObjectIf = <T extends {}>(
  condition: boolean | any,
  elements: T
): Partial<T> => {
  return condition ? elements : ({} as T);
};

export const insertObjectIfElse = <T1, T2>(
  condition: boolean,
  elements1: T1,
  elements2: T2
): Partial<T1 | T2> => {
  return condition ? elements1 : elements2;
};

export const getUniqueListBy = <T>(array?: T[], key: string = "id") => {
  try {
    return [
      ...new Map((array ?? []).map((item: T) => [item[key], item])).values(),
    ];
  } catch {
    return [];
  }
};

export const arrayToJson = <T>(
  array: T[] = [],
  key: string = "id"
): {
  [key: string]: T;
} => {
  try {
    if (isNilOrEmpty(array)) return {};

    const result = {};
    for (const item of array) {
      result[item[key]] = item;
    }

    return result;
  } catch {
    return {};
  }
};

export const isEqualWithoutNil = (value: any, other: any) =>
  !isNil(value) && isEqual(value, other);
