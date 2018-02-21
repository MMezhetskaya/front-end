describe("simple calculator", function() {

    it("при корретно введенных цифрах и знаке производит указанную операцию и возвращает результат", function() {
        assert.equal(calculator (1,1,"/"), 1);
    });
     it("Тест на корректность введенных данных. Введены цифры и недопустимый знак операции", function() {
         assert.equal(calculator (1,1,"а"), null);
     });
    it("Тест на корректность введенных данных. Введены нецифрa, цифра и допустимый знак операции", function() {
        assert.equal(calculator ("1",1,"+"), null);
    });
    it("Тест на корректность введенных данных. Введены нецифры и допустимый знак операции", function() {
        assert.equal(calculator ("1","b","+"), null);
    });
    it("Тест на корректность вычислений. Деление на 0 невозможно", function() {
        assert.equal(calculator (1,0,"/"), null);
    });
    it("Брать остаток от деления на 0 невозможно", function() {
        assert.equal(calculator (1,0,"%"), null);
    });

});
