import esBisiesto from "./anoBisiesto";

describe("Sumar", () => {
    it("deberia darnos que es bisiesto por ejemplo el 2024", () => {
        expect(esBisiesto(2024)).toEqual(true);
    });

    
});
