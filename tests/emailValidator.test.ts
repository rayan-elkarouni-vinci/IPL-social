import { validateEmail } from '../src/emailValidator';

describe('Email Validation', () => {

    it('should return true in any case', () => {
        let actual = 'testvinci.be';

        expect(validateEmail(actual)).toBe(true);
    })
    
});