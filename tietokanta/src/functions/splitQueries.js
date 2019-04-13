

export default (string) => {
    const arr = string.split(';');
    if (!arr[arr.length - 1] || arr[arr.length - 1] === '\n')
        arr.pop();

    console.log(arr);
    return arr;
};