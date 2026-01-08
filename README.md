# npm-shortidx

`npm-shortidx` es una librería para generar identificadores aleatorios cortos. Incluye funciones para generar IDs con diferentes conjuntos de caracteres y para reordenar arrays de manera aleatoria.

> ⚠️ **Nota importante**
>
> Las funciones `ShortIdx`, `RandomIdx` y `CustomIdx` **NO están diseñadas para generar contraseñas**.
>
> Estas funciones deben usarse únicamente para:
>
> - Identificadores (IDs)
> - Tokens temporales
> - Hashes simples
> - Keys de UI (React, Vue, etc.)
> - Slugs o identificadores no críticos
>
> Para generación de contraseñas seguras, utiliza la función `PasswordGen`, que emplea una fuente de aleatoriedad criptográficamente segura.

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
  - [PasswordGen](#PasswordGen)
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

### ⚠️ Seguridad y uso recomendado

- `ShortIdx`, `RandomIdx` y `CustomIdx` **no usan aleatoriedad criptográficamente segura**.
- No deben usarse para:
  - Contraseñas
  - Claves privadas
  - Tokens de autenticación permanentes
  - Datos sensibles

Estas funciones están pensadas para **identificadores rápidos y ligeros**, no para seguridad.

```ts
ShortIdx(),
  RandomIdx(),
  CustomIdx(),
  RepeatIdx(),
  ShuffleX(),
  IndexShuffle(),
  ShuffleString(),
  PasswordGen();
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

ShortIdx(); // "G7ksLzW"
ShortIdx(12); // "AdE8fsU1KqpQ"
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

RandomIdx(); // "s@L!z82_"
RandomIdx(10); // "*>d3@9x^Z!"
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

RepeatIdx(4, ShortIdx); // ["R3f7tK1", "gTz1xL9", ...]
RepeatIdx(3, RandomIdx, 10); // ["<xD&0j9@#", "2K!lm8$@#", ...]
```

---

### ShuffleX()

Reordena arrays de forma aleatoria.

```ts
import { ShuffleX } from "npm-shortidx";

const items = ["a", "b", "c", "d"];
ShuffleX(items); // ['c', 'a', 'd', 'b']
ShuffleX(items, 2); // ['b', 'd']
```

---

### IndexShuffle()

Devuelve un array de índices aleatorios.

```ts
import { IndexShuffle } from "npm-shortidx";

IndexShuffle(5); // [2, 0, 4, 1, 3]
```

---

### ShuffleString()

Desordena los caracteres de un string.

```ts
import { ShuffleString } from "npm-shortidx";

ShuffleString("abcdef"); // "ecdbfa"
```

## ¿Qué función debo usar?

| Caso de uso                       | Función         |
| --------------------------------- | --------------- |
| IDs cortos y ligeros              | `ShortIdx`      |
| IDs con símbolos                  | `RandomIdx`     |
| IDs con charset personalizado     | `CustomIdx`     |
| Generar múltiples IDs             | `RepeatIdx`     |
| Barajar arrays sin mutarlos       | `ShuffleX`      |
| Obtener índices aleatorios        | `IndexShuffle`  |
| Reordenar caracteres de un string | `ShuffleString` |
| Generar contraseñas seguras       | `PasswordGen`   |

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
      {letters.map((letter) => (
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

### PasswordGen()

Genera contraseñas aleatorias utilizando una fuente de aleatoriedad criptográficamente segura (`crypto.getRandomValues`).

✅ **Uso recomendado**:

- Contraseñas
- Tokens de seguridad
- Claves temporales sensibles

❌ **No recomendado para**:

- IDs visuales
- Keys de UI
- Slugs

Por defecto, el generador utiliza únicamente letras ASCII:

- a–z
- A–Z

Esto garantiza compatibilidad máxima con cualquier sistema.

**Caracteres por defecto**:

```
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
```

Si necesitas números, símbolos o caracteres Unicode,
agrégalos explícitamente mediante `extraChars` .

**Uso**:

```ts
import { PasswordGen } from "npm-shortidx";

PasswordGen();
// Ejemplo: "A9$kP2@Lm8#Qx1!Z"

PasswordGen({
  length: 24,
});

PasswordGen({
  extraChars: "_-+=",
});
```

PasswordGen está diseñada para seguridad.
Usa esta función siempre que necesites una contraseña real.

---

## Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o enviar un pull request.

---

## Licencia

### ISC
