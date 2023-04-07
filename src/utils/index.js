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
