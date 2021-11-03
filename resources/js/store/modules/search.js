import axios from 'axios';

const pipe = {
    state: {
        pipedata: [],
        searchFilter: []
    },
    actions: {
        loadPipe ({commit}) {
            console.log('pipe loaded');
            axios.get('http://localhost/')
        }
    }
}