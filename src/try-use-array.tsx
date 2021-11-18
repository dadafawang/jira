import React from "react";
import { useArray, useMount } from "utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {});

  return (
    <div>
      <button onClick={() => add({ name: "jhon", age: 22 })}>add jhon</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()} style={{ marginBottom: "50px" }}>
        clear
      </button>
      {value.map((person, index) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
