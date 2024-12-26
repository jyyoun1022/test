<template>
    <div>
        <input type="number" v-model="cm">
        <button @click="toIn">cm -- inch</button>
        <button @click="toCm">inch -- cm</button>
        <input type="number" v-model="inch">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                constc: 2.54,
                consti: 0.3937,
                cm: 1,
                inch: 0.3937
            }
        },
        methods: {
            toIn() {
                this.inch = this.cm * this.consti
            },
            toCm() {
                this.cm = this.inch * this.constc
            }
        }
    }
</script>