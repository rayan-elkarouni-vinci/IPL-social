import { validateEmail } from '../src/emailValidator';

describe('Email Validation', () => {

    it('should return false if no @ symbol', () => {
        let actual = 'test';

        expect(validateEmail(actual)).toBe(false); 
    });

    it('should return false if email contains spaces', () => {
        let actual = 'mr olivier choquet est le @goat';

        expect(validateEmail(actual)).toBe(false);
    });
    
});