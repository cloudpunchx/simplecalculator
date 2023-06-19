<template>
    <div>
        <p class="title">Simple Calculator</p>
        <div class="calculator">
            <div class="outputContainer">
                <div class="outputCalc">{{ calculatorValue }}</div>
            </div>
            <div class="buttons">
                <div
                class="button"
                v-for="n in btnArr"
                :key="n"
                :class="{ operator: ['C', '*', '/', '-', '+', '%', '='].includes(n) }"
                >
                    <div class="btn" @click="calculatorFunction(n)">
                        {{ n }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeView",
        data() {
            return {
                calculatorValue: "",
                btnArr: [
                    "C",
                    "*",
                    "/",
                    "-",
                    "7",
                    "8",
                    "9",
                    "+",
                    "4",
                    "5",
                    "6",
                    "%",
                    "1",
                    "2",
                    "3",
                    "=",
                    "0",
                    ".",
                ],
            };
        },
        methods: {
            // (n) is the value of the button clicked
            calculatorFunction(n) {
            /* Append value */
            if (!isNaN(n) || n === ".") {
                this.calculatorValue += n + "";
            }
            /* Clear value, reset string to empty */
            if (n === "C") {
                this.calculatorValue = "";
            }
            /* Percentage calculates by 100 */
            if (n === "%") {
                this.calculatorValue = this.calculatorValue / 100 + "";
            }
            /* Operators divide, multiply, subtract, add */
            if (["/", "*", "-", "+"].includes(n)) {
                this.operator = n;
                this.previousCalculatorValue = this.calculatorValue;
                this.calculatorValue = "";
            }
            /* Calculate result using the eval function */
            if (n === "=") {
                this.calculatorValue = eval(
                this.previousCalculatorValue + this.operator + this.calculatorValue
                );
                this.previousCalculatorValue = "";
                this.operator = null;
            }
        },
    },
};
</script>

<style scoped>
.title{
    text-align: center;
    font-size: 22pt;
}
.calculator{
    margin-top: 100px;
}
.outputContainer {
    text-align: right;
    background-color: #F97068;
    width: min(300px, 70%);
    margin: 10px auto;
    padding: 10px;
    border: 0.5px solid rgb(255, 198, 124);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.outputCalc {
    background-color: #EDF2EF;
    padding: 20px;
    border-radius: 3px;
}
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    width: min(300px, 70%);
    border: 0.2px solid rgb(255, 198, 124);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    align-items: center;
    background-color: #F97068;
    justify-content: center;
    margin: 10px auto;
    gap: 5px;
}
.button {
    background-color: #D1D646;
    padding: 6px;
    border-radius: 5px;
    margin: 5px;
    font-weight: bold;
    font-size: 1.5em;
    color: whitesmoke;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
</style>