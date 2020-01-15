export const validateService = (targetStaring) => {
    targetStaring.replace(/\\/g, '');
    return targetStaring
}
export const replaceIndention = (target) => {
    target.replace('\n', '<br />');
    return target;
}