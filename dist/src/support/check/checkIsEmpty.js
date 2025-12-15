import checkContainsAnyText from './checkContainsAnyText.js';
export default async (elementType, element, falseCase) => {
    let newFalseCase = true;
    if (typeof falseCase === 'function') {
        newFalseCase = false;
    }
    else if (falseCase === ' not') {
        newFalseCase = false;
    }
    await checkContainsAnyText(elementType, element, newFalseCase);
};
