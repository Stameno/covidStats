export default function sortFunction(property, array) {
    return [...array].sort((a, b) => {
        if(property === 'Date'){
            return (Date.parse(b.date) > Date.parse(a.date)) ? 1 : -1
        }
        return (a[property] > b[property]) ? 1 : -1
    });
};
