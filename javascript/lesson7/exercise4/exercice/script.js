var vue = new Vue({
    el: "#app",
    data: function() {
        return {
            status: false
        }
    },
    methods: {
        statusSwitch() {
            if(this.status) {
                return "oui"
            } else {
                return "non"
            }
        }
    }
});