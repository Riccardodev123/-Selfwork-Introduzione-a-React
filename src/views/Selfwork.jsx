import { useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import LoadingData from "../components/LoadingData";
import Main from "../components/Main";
import useFetch from "../hooks/useFetch";

const names = ["Qui", "Quo", "Qua"];

export default function Selfwork() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);
  return (
    <>
      {/* Inizio Selfwork Introduzione a React */}

      <h1 className="title">Selfwork Introduzione a React</h1>
      <label htmlFor="input" className="label">
        Test
      </label>
      <input type="text" id="input" className="input" />
      <hr />
      {/* Fine Selfwork Introduzione a React */}

      {/* Inizio Selfwork Componenti React */}
      <h2>Selfwork Componenti React</h2>
      {/* <Navbar /> */}
      <Header />
      <List names={names} />
      <hr />

      {/* Fine Selfwork Componenti React */}

      {/* Inzio Selfwork State Management */}
      <h2>Selfwork State Management</h2>
      <hr />
      <Counter />
      <Form />
      <hr />

      {/* Fine Selfwork State Management */}

      {/* Inizio Selfwork Compound Components */}
      <h2>Selfwork Compound Components</h2>
      <hr />
      <Main>
        <Main.List names={names} />
        <Main.Form />
      </Main>
      <hr />

      {/* Fine Selfwork Compound Components */}

      {/* Inizio Selfwork Gestione Side-effect */}
      <h2>Selfwork Gestione Side-effect</h2>
      <hr />
      <LoadingData />
      <hr />

      {/* Fine Selfwork Gestione Side-effect */}

      {/* Inizio Selfwork Custom Hooks */}
      <h2>Selfwork Custom hooks</h2>
      <hr />
      <h2>Titoli o Utenti</h2>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
      >
        Posts
      </button>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
      >
        Users
      </button>
      <ul>
        {data &&
          data.map((el) => <li key={el.id}>{el.title || el.name}</li>)}
      </ul>
      <hr />
    </>
  );
}
