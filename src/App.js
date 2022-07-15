import { useState, useEffect } from "react";

export const App = () => {

  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");


  const getData = () => {
    console.log([
      {
        nome: "teste",
        sobrenome: "teste"
      },
      {
        nome: "teste",
        sobrenome: "teste"
      }
    ])
  }

  useEffect(() => {
    getData()
  }, [nome])

  const handleSubmit = () => {
    const user = {
      nomeusuario: nome,
      username: username
    }

    console.log(user)
  }

  return (
    <div className="App">
      <input placeholder="nome do usuario" type={"text"} onChange={(e) => setNome(e.target.value)} />
      <input placeholder="username" type={"text"} onChange={(e) => setUsername(e.target.value)}/>
      
      <button onClick={() => handleSubmit()}>enviar</button>
    </div>
  );
}