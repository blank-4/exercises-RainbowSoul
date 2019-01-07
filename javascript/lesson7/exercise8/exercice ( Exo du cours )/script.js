var vue = new Vue({
    el: "#app",
    data: function() {
        return {
            text: ""
        }
    },
    watch: {
        text: function(value) {
            if(this.text == "vue") {
                alert("vue")
            } else {
                console.log(this.text)
            }
        }
    }
});