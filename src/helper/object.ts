
export const convertObjToArray = (obj: any) => {
    return  Object.keys(obj).map((key) => ({
        id: key,
        ...obj[key]
    }));
}