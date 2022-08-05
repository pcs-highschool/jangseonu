<template>
    <div class="Title-raw">
        <h1 v-if="Title">{{Title}}</h1>
        <h2 v-else>untitle</h2>
        <h1>{{userName}}</h1>
    </div>
</template>

<script>
export default {
    props : {
        userName : String,
        Title : String
    }
}
</script>

<style>
.Title-raw {
    background: red;
    list-style-type: none;
}
</style>