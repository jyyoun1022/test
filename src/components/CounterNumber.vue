<template>
    <div>
        <label>{{ count}}</label>
        <button @click="count++">Count</button>
        <button @click="count--">DisCount</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,

            }
        }
    }
</script>