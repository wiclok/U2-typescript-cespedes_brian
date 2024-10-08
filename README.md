# U2-typescript-cespedes_brian

Este repositorio contiene la resolución de ejercicios prácticos sobre fundamentos de TypeScript. Los ejercicios están organizados en archivos individuales dentro de este directorio, cada uno con un enfoque en diferentes aspectos básicos de TypeScript.

##  Estructura del proyecto

El proyecto está organizado de la siguiente manera:

1. Tipos básicos: Declara una variable age de tipo número y otra variable name de tipo string, asignándoles valores.
2. Union types: Declara una variable status que puede ser de tipo string o número. Se prueban ambos tipos con diferentes valores.
3. Interfaz básica: Define una interfaz Person con las propiedades firstName y lastName. Se crea una variable person de tipo Person con un objeto que contiene nombre y apellido.
4. Interfaz opcional: Modifica la interfaz Person para que la propiedad lastName sea opcional. Se crea un objeto que solo incluye firstName.
5. Función con tipado: Implementa una función add que acepta dos números y devuelve su suma, con los parámetros y el valor de retorno tipados adecuadamente.
6. Tipado en funciones: Crea una función greet que toma un argumento name de tipo string y devuelve un saludo personalizado.
7. Clase básica: Define una clase Car con una propiedad make de tipo string y un método drive() que imprime un mensaje en la consola.
8. Clase con constructor: Añade un constructor a la clase Car para inicializar la propiedad make. Crea una instancia de Car y llama al método drive().
9. Clase con propiedades privadas: Modifica la clase Car para que make sea una propiedad privada. Añade un método getMake() que devuelve el valor de make.
10. Herencia de clases: Crea una clase ElectricCar que extiende de Car y añade una propiedad batteryLife de tipo número. Implementa un método charge() que imprime un mensaje indicando que el coche se está cargando.
11. Interface y clases: Define una interfaz Shape con un método area(). Luego, crea una clase Circle que implementa esta interfaz y calcula el área de un círculo.
12. Tipos literales: Crea una variable direction que solo puede tener uno de los valores: "up", "down", "left", "right".
13. Enum: Declara un enum Color con los valores "Red", "Green", y "Blue". Implementa una función que toma un argumento de tipo Color y devuelve un mensaje con el color.
14. Type assertions: Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. Luego, utiliza la propiedad .length en esta variable.
15. Genéricos (básico): Implementa una función genérica identity que toma un argumento de tipo T y devuelve el mismo valor. Se usa esta función con diferentes tipos de datos.

## Requisitos
- Node.js
- TypeScript

## Intrucciones 

1. Clona el repositorio
```sh
git clone https://github.com/tu-usuario/U2-typescript-nombre_apellido.git
```

2. Navega al directorio del proyecto 
```sh
cd U2-typescript-nombre_apellido
```

3. Ejecuta los ejercicios individualmente usando ts-node o compilándolos con TypeScript:

```sh
ts-node archivo.ts
```