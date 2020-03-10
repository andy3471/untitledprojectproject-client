export function getUserDetails(state, user) {
    state.user = user
    state.loggedIn = true;
}

export function loginToken(state, token) {
    state.token = token;
    state.tokenAuth = true;
}

export function loginError(state, error) {
    state.loginError = error;
}
export function logout(state) {
    state.loggedIn = false;
    state.user = {};
    state.tokenAuth = false;
}