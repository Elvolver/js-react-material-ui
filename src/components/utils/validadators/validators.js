export const required = value => {
    if (value) return undefined;
        return "Обязательно к заполнению"
};

export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) return `Не более - ${maxLength} символов`;
    return undefined;
};

export const maxLength10 = maxLengthCreator(10);
export const maxLength255 = maxLengthCreator(255);