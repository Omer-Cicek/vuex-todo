<template>
    <div id="app">
        <div class="container">
            <AddTodo />
            <filter-todos/>
            <Todos/>
        </div>
    </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from "./components/FilterTodos.vue"

export default {
    name: 'app',
    components : {
        Todos,
        AddTodo,
        FilterTodos
    }
}
</script>

<style>
    body{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        background: #454BFF;
    }
    .container {
        max-width: 1100px;
        margin: auto;
        overflow: auto;
        padding: 0 2rem;
    }
</style>
