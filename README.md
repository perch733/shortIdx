# npm-shortidx

Es una librería que genera id de manera aleatoria hecha en javascript, por defecto su longitud es de 9.

los caracteres usados son los siguientes

```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_
```

## Como usar

Recuerda llamarlo como una función por ejemplo:

```
import { shortIdx } from "npm-shortidx";

function App() {

  return (
    <>
        <p>{shortIdx()}</p>
    </>
  );
}

export default App;
```

expectativa

- &#8220;wkezyUxsW&#8221;

util para las key en react

```
import { shortIdx } from "npm-shortidx";

function App() {

    const letter = ["a", "b", "c", "d"];

  return (
    <>
        <p>{shortIdx()}</p>

        {letter.map((letra) => {
          return <p key={shortIdx()}>{letra}</p>;
        })}
    </>
  );
}

export default App;
```

expectativa

```
WcuorI6_x

a

b

c

d
```

## Cambiando los parámetros de longitud

```
import { shortIdx } from "npm-shortidx";

function App() {

  return (
    <>
        <p>{shortIdx(15)}</p>
    </>
  );
}

export default App;
```

expectativa

- &#8220;sd9muNQYowxenSR&#8221;
- &#8220;JKGeDvQ52NX-SME&#8221;
- &#8220;2-WhIeFmG7qSPbM&#8221;
- &#8220;Pb87VDoEXHuwaBS&#8221;
- &#8220;XDRolWGwbhuLcfd&#8221;
- &#8220;cqvtu_p1ZieDBVK&#8221;
