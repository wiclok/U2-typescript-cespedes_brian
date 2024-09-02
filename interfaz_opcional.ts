namespace MyNameSpace {
  interface Person {
    firstName: string | number;
    lastName?: string;
  }

  const person: Person = {
    firstName: 'Brian',
  };

}