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

    it('should return false if no text before or after @', () => {
        let before = '@vinci.be';
        let after = 'mrdebeauffortestmonexemple@';

        expect(validateEmail(before)).toBe(false);
        expect(validateEmail(after)).toBe(false);
    });

    it('should return false if domain has no dot or dot is last', () => {
        let noDot = 'leonard@vinci';
        let lastDot = 'de@vinci.';

        expect(validateEmail(noDot)).toBe(false);
        expect(validateEmail(lastDot)).toBe(false); 
    });
    
    it('should return true for a valid email', () => {
         expect(validateEmail('lesmeilleursprofsviennentde@vinci.be')).toBe(true);
    });

});
