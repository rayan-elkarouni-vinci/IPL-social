import { validateEmail } from '../src/emailValidator';

describe('Email Validation', () => {

    it('should return false if no @ symbol', () => {
        let actual = 'testvinci.be';
        
        expect(validateEmail(actual)).toBe(false); 
    });
    
});