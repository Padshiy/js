//Тест функции

describe("pow", function () {

    it("при возведении в отрицательную степень результат NaN", function () {
        assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function () {
        assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
    });

    it("любое число в степени 0 равно 1", function () {
        assert.equal(pow(123, 0), 1);
    });

    it("ноль в нулевой степени даёт NaN", function () {
        assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
    });
    
    describe("возводит x в степень n", function () {

        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    // ... дальнейшие тесты it и подблоки describe ...
});