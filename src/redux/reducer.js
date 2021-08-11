const initState = {
    theme: "light"
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case "CHANGE_THEME":
            return {
                theme: action.theme
            }
        default:
            return state;
    }
}

export default Reducer;