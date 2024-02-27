import esBisiesto from "./anoBisiesto";

describe("Sumar", () => {
    it("deberia darnos que es bisiesto por ejemplo el 2024", () => {
        expect(esBisiesto(2024)).toEqual(true);
    });

    it("deberia darnos que no es bisiesto por ejemplo 2023", () => {
        expect(esBisiesto(2023)).toEqual(false);
    });

    it("deberia darnos que no es bisiesto por ejemplo 100", () => {
        expect(esBisiesto(100)).toEqual(false);
    });

    it("deberia darnos que es bisiesto cuando el año es divisible por 400 por ejemplo el 400", () => {
        expect(esBisiesto(400)).toEqual(true);
    });
});
