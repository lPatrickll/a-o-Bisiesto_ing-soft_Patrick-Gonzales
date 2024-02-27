import esBisiesto from "./anoBisiesto";

describe("Sumar", () => {
    it("deberia darnos que es bisiesto por ejemplo el 2024", () => {
        expect(esBisiesto(2024)).toEqual(true);
    });

    it("deberia darnos que no es bisiesto por ejemplo 2023", () => {
        expect(esBisiesto(2023)).toEqual(false);
    });
});
