export function validateLength(value: string | undefined, minLength: number, errorMessage: string) {
    if (!value) {
        return;
    }
    if (value.length < minLength) {
        throw new Error(errorMessage);
    }
}