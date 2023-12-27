import { ObjectType } from "./types";

// filters and returns only selected fields from the target object based on filtered object
export const getFilteredObject = (filteredObj: ObjectType, targetObj: ObjectType) => Object.keys(filteredObj).reduce(function (obj, key) {
    obj[key] = targetObj[key];
    return obj;
}, {});