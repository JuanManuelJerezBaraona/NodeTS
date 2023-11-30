describe('Test in the App file', () => {
    
    test('should be 30', () => {
        
        // 1. Arrange (preparar)
        const num1 = 10;
        const num2 = 20;

        // 2. Act (Actuar)
        const result = num1 + num2;

        // 3. Assert (Afirmar)
        expect( result ).toBe( 30 );

    })
});