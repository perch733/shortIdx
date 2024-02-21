# npm-shortidx

## Install

```
npm i npm-shortidx
```
```
yarn add npm-shortidx
```

## Métodos / methods
```
ShortIdx() , RandomIdx(), ShuffleX()
```

## ShortIdx()

Es una función que genera id de manera aleatoria hecha en javascript, por defecto su longitud es de 9. / It is a library that generates id randomly made in javascript, by default its length is 9.

los caracteres usados son los siguientes / the characters used are the following

```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_
```

## Cómo usarlo / how to use it

Recuerda llamarlo como una función por ejemplo:
Remember to call it as a function for example:

```
import { ShortIdx } from "npm-shortidx";

function App() {

  return (
    <>
        <p>{ShortIdx()}</p>
    </>
  );
}

export default App;
```

expectativas / expectations

- &#8220;wkezyUxsW&#8221;

útil para las key en react / useful for keys in react

```
import { shortIdx } from "npm-shortidx";

function App() {

    const letter = ["a", "b", "c", "d"];

  return (
    <>
        <p>{ShortIdx()}</p>

        {letter.map((letra) => {
          return <p key={shortIdx()}>{letra}</p>;
        })}
    </>
  );
}

export default App;
```

expectativas / expectations

```
WcuorI6_x

a

b

c

d
```

## Cambiando los parámetros de longitud / Changing the length parameters

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

expectativas / expectations

- &#8220;sd9muNQYowxenSR&#8221;
- &#8220;JKGeDvQ52NX-SME&#8221;
- &#8220;2-WhIeFmG7qSPbM&#8221;
- &#8220;Pb87VDoEXHuwaBS&#8221;
- &#8220;XDRolWGwbhuLcfd&#8221;
- &#8220;cqvtu_p1ZieDBVK&#8221;

## RandomIdx()

Genera id con símbolos mas complejos de manera aleatoria hecha en javascript, por defecto su longitud es de 9. / Generate id with more complex symbols randomly made in javascript, by default its length is 9.

los caracteres usados son los siguientes / the characters used are the following

```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,-./:;<=>?@[]^_`{|}~
```

## Cómo usarlo / how to use it

De manera muy similar a la función anterior:
Much like the previous function:

```
import { RandomIdx } from "npm-shortidx";

function App() {

  return (
    <>
        <p>{RandomIdx()}</p>
    </>
  );
}

export default App;
```

expectativas / expectations

- <tU!xQNK|Y8;
- 8Z-@vkXcopYr7VI
- N?[-1oxuhT-cIpz

Puedes usar como generador de contraseñas o tokens / You can use as a password or token generator

expectativas / expectations

```
Dz(6|H*_:n?V~Ak
7#g_&1]:;=kN4mv
~A<mOdaE_N]{Lj9
Kw>Ifjy0@]E-.vQ
b1W=DAVEzo[`-%;
```

## Cambiando los parámetros de longitud / Changing the length parameters

Similar a la función anterior
Similar to the previous function

```
RandomIdx(15)
```

expectativas / expectations

- &#8220;;IRS+tUkWPp|Xor&#8221;
- &#8220;c#HO,8XK-kPS=p_&#8221;
- &#8220;#]EpmRnUrhk'uA:&#8221;
- &#8220;QD9{uk+N*RY<0p(&#8221;
- &#8220;-28z5*0hv%3<sfU&#8221;
- &#8220;o_KjwAti@q%ZzBk&#8221;

## ShuffleX()

Es una función que reordena los array de manera aleatoria. / It is a function that sorts arrays randomly.

```
ShuffleX(array, length: optional)
```
 En el parámetro array ponemos el array a barajar y el length (opcional) definimos la longitud de array a mostrar, por defecto se mostrara todos los elementos del array barajado. / In the array parameter we put the array to shuffle and the length (optional) we define the length of the array to show, by default all the elements of the shuffled array will be shown.

```
import { ShuffleX } from "npm-shortidx";

const App = () => {

  let numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

  return (
    <>
        {
          console.log(ShuffleX(numbers))
        }
    </>
  );
}
export default App;
```

expectativas / expectations

```
[ '2', '4', '8', '5', '1', '9', '7', '6', '3', '0' ]

[ '0', '1', '4', '7', '5', '8', '9', '3', '6', '2' ]

[ '8', '4', '1', '7', '5', '6', '9', '2', '3', '0' ]
```

## Cambiando los parámetros de longitud / Changing the length parameters

Similar a la función anterior /
Similar to the previous function

```
ShuffleX(numbers, 3)
```

expectativas / expectations

```
[ '3', '0', '6' ]

[ '6', '5', '1' ]

[ '5', '1', '4' ]
```