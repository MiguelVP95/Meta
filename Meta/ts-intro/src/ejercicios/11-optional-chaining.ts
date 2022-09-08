/*
    ===== Código de TypeScript =====
*/
// @errors: 2339
// @experimentalDecorators
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre:'Fernando'

}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function immprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos= pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

immprimeHijos(pasajero1)