//EJEMPLO FILTER 1°
let personas = [
    { nombre: "Marvin", edad: 17 },
    { nombre: "Mario", edad: 18 },
    { nombre: "Juan", edad: 21 },
    { nombre: "Ana", edad: 16 }
  ];
  let mayores = personas.filter(function(persona) {
    return persona.edad >= 18;
  });
  console.log(mayores);

// EJEMPLO FILTER 2°
let palabras = ["3° Software", "2° EMCA", "3° Arquitectura", "2° ECA", "2°CONTA"];
let terceros = palabras.filter(function(palabra) {
  return palabra.includes("3°");
});

console.log(terceros);