import { ChCo } from "./index";
//@ts-ignore
import tinygradient from 'tinygradient';
describe('Default colors', () => {
    test("Defaults to Soft Rainbow", () => {
        var holder = ChCo.formatString('----');
        expect(ChCo.gradient).toStrictEqual(tinygradient(ChCo.gradientShorthands.softrainbow));
    });
    test("Setting to Old Movie works", () => {
        ChCo.setColor('oldmovie');
        expect(ChCo.gradient).toStrictEqual(tinygradient(ChCo.gradientShorthands.oldmovie));
    });
    test("Setting to Vaporwave works", () => {
        ChCo.setColor('vaporwave');
        expect(ChCo.gradient).toStrictEqual(tinygradient(ChCo.gradientShorthands.vaporwave));
    });
});
describe('formatString', () => {
    test("Valid input comes out correctly", () => {
        var holder = ChCo.formatString('----');
        expect(holder).not.toBeNull();
    });
    test("Valid input comes out correctly", () => {
        var holder = ChCo.formatString('');
        expect(holder).not.toBeNull();
    });
});
