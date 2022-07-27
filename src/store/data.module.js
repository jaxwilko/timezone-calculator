export default {
    state: {
        current: null
    },
    getters: {
        getCurrent(state) {
            return state.current;
        }
    },
    mutations: {
        setCurrent(state, props) {
            state.current = props;
        }
    }
};
