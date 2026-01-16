export function validateEmail(email: string): boolean {
    if (email.includes(' ')) return false;

    if (!email.includes('@')) return false;

    const parts = email.split('@');
    if (parts[0].length === 0 || parts[1].length === 0) {
        return false;
    }
    
    return true;
}