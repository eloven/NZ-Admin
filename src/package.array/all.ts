/**
 * 所有元素都执行函数检测
 * @param arr
 * @param fn
 */
export const all = (arr: any[], fn: BoolFunction): boolean => {
    return arr.every(fn);
};

export type BoolFunction = (el: any) => boolean;
