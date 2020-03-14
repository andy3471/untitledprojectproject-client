export function headers(state) {
    if (state.tokenAuth) {
        const str = 'Bearer ';
        return {
            'Authorization': str.concat(state.token),
            'Accept': 'application/json'
        };
    } else {
        return {
            'Accept': 'application/json'
        }
    }
}