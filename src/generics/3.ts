function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: "Edward" }, { age: 22 });
console.log(mergedObject);
