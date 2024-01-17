<div align="center">

  <img width="100%" alt="Iris logo" src="https://github.com/nick747/iris/assets/84738664/454ea262-a614-4ce3-af7b-a655ba2367de">
  <br />

  ---
  <br />  
</div>

**Iris** is a JavaScript library designed to facilitate the management of RGB and HEX colors.

<br />

## Installation

To install Iris simply go to your preferred code editor and in its terminal run the following command:
```bash
 
$ npm i iris-colors
 
```

## Usage

To start using the library in your project, import it in the main file:

```js
 
import iris from 'iris-colors';
 
```

## Functions

The Iris library offers 6 different functions: `getType()`, `toRgb()`, `toHex()`, `randomColor()`, `findComplementary()`, `addOpacity()`.

### The `getType()` function

The `getType()` function is useful to get the type of a color from input. It will detect if the input color is an **rgb** or an **hex** color. If it doesn't understand the type of the input color it will return **invalid**.

```js
 
import iris from 'iris-colors';

let type = iris.getType('#ff0000');

console.log(type);
 
```
```bash
 
>> 'hex'
 
```



