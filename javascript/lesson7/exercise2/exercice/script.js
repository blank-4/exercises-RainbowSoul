new Vue({
    el: "#app",
    data: {
        value: 0
    },
    methods: {
        onclickIncrement: function() {
                this.value++
        },
        onclickDecrement: function() {
                this.value--
        }
    }
})