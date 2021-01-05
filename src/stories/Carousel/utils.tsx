const pluck = (inputArray: any, key: string): any => {
    return inputArray.map( (o: any) => o[key]);
};

export { pluck };