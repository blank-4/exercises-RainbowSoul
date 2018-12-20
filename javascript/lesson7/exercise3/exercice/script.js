var vue = new Vue({
    el: "#app",
    data: function() {
        return {
            display: false,
            content: ''
        }
    },
    methods: {
        displayAlert: function() {
            alert(this.content)
        }
    }
});