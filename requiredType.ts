interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 5 };

const obj2: Required<Props> = { a: 5, b: "10" };

// Following will cause error
// const obj2: Required<Props> = { a: 5 };

console.log(obj1, obj2);

