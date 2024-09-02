namespace MyNameSpace {
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity(42);
  console.log(num); // Imprime: 42

  const str = identity('Hello, World!');
  console.log(str); // Imprime: "Hello, World!"

  const obj = identity({ name: 'Alice', age: 30 });
  console.log(obj); // Imprime: { name: "Alice", age: 30 }

  const arr = identity([1, 2, 3, 4]);
  console.log(arr); // Imprime: [1, 2, 3, 4]
}
