var vue = new Vue({
    el: "#app",
    data: function() {
        return {
            test: ''
        }
    },
    /* Step 1 */
    beforeCreate() {
        console.log("Before creating : switchTest()")
    },
    /* Step 2 */
    created() {
        console.log("----------------------------------------------------")
        console.log("Creating : switchTest()")
        console.log("Value of switchTest() : " + this.switchTest())
    },
    /* Step 3 */
    beforeMount() {
        console.log("----------------------------------------------------")
        console.log("Before mounting : switchTest()")
        console.log("Value of switchTest() : " + this.switchTest())
    },
    /* Step 4 */
    mounted() {
        console.log("----------------------------------------------------")
        console.log("Mounting : switchTest()")
        console.log("Value of switchTest() : " + this.switchTest())
    },
    /* Step 5 */
    beforeUpdate() {
        console.log("----------------------------------------------------")
        console.log("Before updating : switchTest()")
        console.log("New value of switchTest() : " + this.switchTest())
    },
    /* Step 6 */
    updated() {
        console.log("----------------------------------------------------")
        console.log("Updating : switchTest()")
        console.log("Value of switchTest() : " + this.switchTest())
    },
    /* Step 7 */
    beforeDestroy() {
        console.log("----------------------------------------------------")
        console.log("Before destroying : switchTest()")
        console.log("Value of switchTest() : " + this.switchTest())
    },
    /* Step 8 */
    destroyed() {
        console.log("----------------------------------------------------")
        console.log("Destroying : switchTest()")
        console.log("Value of switchTest() : " + this.switchTest())
    },
    methods: {
        switchTest() {
            if(this.test.length > 1) {
                return "There's a word"
            } else {
                return "There's no word"
            }
        }
    },
  });