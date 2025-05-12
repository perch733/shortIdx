# npm-shortidx

`npm-shortidx` es una librería para generar identificadores aleatorios cortos. Incluye funciones para generar IDs con diferentes conjuntos de caracteres y para reordenar arrays de manera aleatoria.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Métodos](#métodos)
  - [ShortIdx](#shortidx)
  - [RandomIdx](#randomidx)
  - [CustomIdx](#customidx)
  - [RepeatIdx](#repeatidx)
  - [ShuffleX](#shufflex)
  - [IndexShuffle](#indexshuffle)
  - [ShuffleString](#shufflestring)
- [Ejemplos](#ejemplos)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación 

```bash
npm i npm-shortidx
```
```bash
yarn add npm-shortidx
```

## Métodos

```ts
ShortIdx() , RandomIdx(), CustomIdx(), RepeatIdx(), ShuffleX(), IndexShuffle(), ShuffleString()
```

---

### ShortIdx()

Genera IDs aleatorios con caracteres alfanuméricos.

**Caracteres usados**:
```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_
```

**Uso**:

```ts
import { ShortIdx } from "npm-shortidx";

ShortIdx();         // "G7ksLzW"
ShortIdx(12);       // "AdE8fsU1KqpQ"
```

---

### RandomIdx()

Genera IDs aleatorios que incluyen símbolos y caracteres especiales.

**Caracteres usados**:
```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,./:;<=>?@[]^`{|}~\"
```

**Uso**:

```ts
import { RandomIdx } from "npm-shortidx";

RandomIdx();        // "s@L!z82_"
RandomIdx(10);      // "*>d3@9x^Z!"
```

---

### CustomIdx()

Genera un ID usando un conjunto de caracteres personalizado.

```ts
import { CustomIdx } from "npm-shortidx";

CustomIdx("ABC123", 5); // "2B1AC"
```

---

### RepeatIdx()

Genera múltiples IDs de forma masiva.

```ts
import { RepeatIdx, ShortIdx } from "npm-shortidx";

RepeatIdx(4, ShortIdx);        // ["R3f7tK1", "gTz1xL9", ...]
RepeatIdx(3, RandomIdx, 10);   // ["<xD&0j9@#", "2K!lm8$@#", ...]
```

---

### ShuffleX()

Reordena arrays de forma aleatoria.

```ts
import { ShuffleX } from "npm-shortidx";

const items = ['a', 'b', 'c', 'd'];
ShuffleX(items);       // ['c', 'a', 'd', 'b']
ShuffleX(items, 2);    // ['b', 'd']
```

---

### IndexShuffle()

Devuelve un array de índices aleatorios.

```ts
import { IndexShuffle } from "npm-shortidx";

IndexShuffle(5);  // [2, 0, 4, 1, 3]
```

---

### ShuffleString()

Desordena los caracteres de un string.

```ts
import { ShuffleString } from "npm-shortidx";

ShuffleString("abcdef"); // "ecdbfa"
```

---

## Ejemplos

**Uso en React**

```jsx
import { ShortIdx } from "npm-shortidx";

function App() {
  const letters = ["a", "b", "c", "d"];
  return (
    <>
      <p>{ShortIdx()}</p>
      {letters.map(letter => (
        <p key={ShortIdx()}>{letter}</p>
      ))}
    </>
  );
}
```

**Cambiando la longitud del ID**

```ts
ShortIdx(15); // "Kz83kJqsTg92Lm1"
```

**Generando múltiples IDs**

```ts
RepeatIdx(5, RandomIdx, 10); // ['@d8Lz!pZ3x', '29&Lk1@9Tq', ...]
```

**Reordenando caracteres de un string**

```ts
ShuffleString("hola mundo"); // "ouh nldma"
```

---

## Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o enviar un pull request.

---

## Licencia

### ISC
