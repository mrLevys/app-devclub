import "./style.css";
import Trash from "../../assets/icon-trash.svg";

function Home() {
  const users = [
    {
      id: "01",
      name: "Rodolfo",
      age: 31,
      email: "rod@email.com",
    },
    {
      id: "02",
      name: "Astolfo",
      age: 32,
      email: "ast@email.com",
    },
    {
      id: "03",
      name: "Bololfo",
      age: 33,
      email: "bol@email.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cdastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
