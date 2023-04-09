import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value); // 将数字类型转成布尔类型
/**
 * 不要修改传入的对象的属性
 */
export const cleanObject = (obj) => {
  const objCopy = { ...obj };
  Object.keys(objCopy).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) delete objCopy[key];
  });
  return objCopy;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const debounce = (func, delay) => {
  let timeout;
  return (...param) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...param);
    }, delay);
  };
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
