<template>
    <div class="container">
        <h1>{{title}}</h1>
        <slot name='header'></slot>
        <slot name='footer'></slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
}
</script>

<style>
.container{
    background-color: aquamarine;
    width: 200px;
}
</style>