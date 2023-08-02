import { useState, useCallback } from "react";

const Teste = () => {
  const [name, setName] = useState("Luan");
  const [age, setAge] = useState(33);

  const handleChangeName = useCallback(() => {
    setName((prev) => (prev === "Luan" ? "May" : "Luan"));
  }, []);

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log("age atual", age, newAge);
    setAge((prev) => (prev === 33 ? 26 : 33));
  }, [age]);

  return (
    <div>
      <p> Idade: {age}</p>
      <br />
      <p> Nome: {name}</p>
      <button onClick={handleChangeName}>Alterar nome</button>
      <br />
      <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  );
};
export { Teste };
