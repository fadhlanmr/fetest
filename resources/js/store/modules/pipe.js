import axios from 'axios';

const pipe = {
    namespaced: true,
    state: {
        pipe: [],
        searchFilter: []
    },
    actions: {
        loadPipe ({commit}) {
            //console.log('pipe loaded');
            axios.get('http://localhost:8080/data').then(res => {
                console.log(res.data)
                let pipe = res.data
                commit('SET_PIPE', pipe)
            })
            .catch(error => console.error(error))
        }
    },
    mutations: {
        SET_PIPE(state, pipe){
            state.pipe = pipe
        }
    }
}

export default pipe;