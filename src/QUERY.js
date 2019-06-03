const QUERY = {
    
    parse(query) {
        const object = new URLSearchParams(query);
        const newObject = {};
        object.forEach((value, key) => {
            newObject[key] = value;
        });
    
        return newObject;
    },

    stringify(queryProps) {
        const newString = new URLSearchParams();
        
        const keys = Object.keys(queryProps);
        keys.forEach(key => {
            const value = queryProps[key];
            newString.set(key, value);
        });
    
        return newString.toString();
    }
};
export default QUERY;