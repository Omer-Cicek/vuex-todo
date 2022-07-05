<template>
    <div class="add">
        <form @submit="onSubmit">
            <input class="text" type="text" v-model="title" placeholder="Add Todo...">
            <input class="submit" type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "AddTodo",
    data(){
        return{
            title: ''
        }
    },
    
    methods : {
        ...mapActions(["addTodo"]),

        onSubmit(e){
            e.preventDefault()
            this.addTodo(this.title)
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
    }
   .text{
        flex: 10;
        padding: 10px;
        border: 1px solid white;
        border-radius: 8px 0px 0px 8px;
        outline: 0;
    }
    .submit{
        flex: 2;
        background: white;
        color: black;
        border: 1px solid white;
        border-radius: 0px 8px 8px 0px;
        cursor: pointer;
    }
</style>
