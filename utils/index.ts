//validate email
export const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//validate phone
export const validatePhone = (phone: string) => {
    return /^[0-9]{9}$/.test(phone)
}