import { useEffect, useState } from "react";

export const isFalsy: <V>(value: V) => boolean = (value) => {
  return value === 0 ? false : !value; // 将数字类型转成布尔类型
};

/**
 * 不要修改传入的对象的属性
 */
export const cleanObject = (obj: any) => {
  const objCopy = { ...obj };
  Object.keys(objCopy).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) delete objCopy[key];
  });
  return objCopy;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const debounce = (func: (...param: any) => void, delay: number = 0) => {
  let timeout: NodeJS.Timeout;
  return (...param: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...param);
    }, delay);
  };
};

export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debouncedValue, setDebouncedValue] = useState<V>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
