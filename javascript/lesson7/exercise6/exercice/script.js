var vue = new Vue({
    el: "#app",
    data: function() {
        return {
            status: false
        }
    },
    computed: {
        statusSwitch() {
            if(this.status) {
                return "oui"
            } else {
                return "non"
            }
        }
    }
});