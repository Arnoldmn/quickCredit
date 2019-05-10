
export default (isAdmin) => {
    if (!isAdmin === true) {
        return false;
    }
    return true;

};