var vue = new Vue({
    el: "#app",
    data: function() {
        return {
            text: ""
        }
    },
    watch: {
        text: function(value) {
            console.log(this.text)
        }
    }
});