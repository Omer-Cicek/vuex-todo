import axios from "axios"

const state = {
    todos : []
}

const getters = {
    allTodos : (state) => state.todos
    
}

const mutations = {
    setTodos : (state, todos) => state.todos = todos,

    newTodo : (state, todo) => state.todos.unshift(todo),

    removeTodo : (state, id) => {
        state.todos = state.todos.filter(res => {
            return res.id != id
        })
    },
    updateTodo:(state,updatedTodo)=>{
        const index=state.todos.findIndex(todo=>todo.id===updatedTodo.id)
        if(index!==-1) state.todos.splice(index,1,updatedTodo)
    }
}

const actions = {

    fetchTodos({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            commit("setTodos", res.data)
            console.log("Response",res.data)
        })
    },

    addTodo({ commit }, title) {
        axios.post('https://jsonplaceholder.typicode.com/todos',{title, completed: false})
            .then(res => {
                commit("newTodo",res.data)
            })   
    },

    deleteTodo({ commit }, id) {
        console.log("Sil ulan", id)
        commit('removeTodo', id)
    },
    filterTodos({commit},e){
       const limit= (e.target.value);
       const response =axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`).then(response=>{
         commit("setTodos",response.data)
       })
    },
    updateTodo({commit},updatedTodo){
        const response = axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,updatedTodo).then(response=>{
            commit("updateTodo",response.data)
            console.log(response.data)
        })


    }
}


export default {
    state,
    getters,
    actions,
    mutations
}