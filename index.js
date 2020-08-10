     /*
            GENERAL FUNCTIOALITY
            1. Calculator should be able to perform basic arithmetic
                Add, Sub, Multiply, Divide, Root, Power, Square
            2.Print Input
            3.Print Output
            4. Delete Number
            5. Automatically take inputs
            */

        // VERION 2 and 3 - FUUNCTIONS & OBJECTS
        var arith = {

        answer: [],

            // getNum: function (num1, num2) {
            // console.log(num1 +" + "+ num2) // using this to store outputs
            // },
            
        getAns: function(ans){
            console.log(ans);
        },
            
        addNum: function (num1, num2) {
            var ans = num1+ num2;
            this.answer.push(ans);
            // input.push(num1, num2); // using this to store inputs
            // this.getNum(num1, num2)
            this.getAns(ans);
        },
        multiplyNum: function (num1, num2) {
            var ans = num1 * num2;
            this.answer.push(ans);
            // this.getNum(num1, num2);
            this.getAns(ans);
        },
        subtractNum: function (num1, num2) {
            var ans = num1 - num2;
            this.answer.push(ans);
            // this.getNum(num1, num2);
            this.getAns(ans);
            
        },
        divideNum: function (num1, num2) {
            var ans = num1 / num2;
            this.answer.push(ans);
            // this.getNum(num1, num2);
            this.getAns(ans);
            
        },
        rootNum: function (num1) {
            var ans = Math.sqrt(num1);
            this.answer.push(ans);
            this.getAns(ans);
        },
        powerNum: function (num1,num2) {
            var ans = Math.pow(num1, num2);
            this.answer.push(ans);
            this.getAns(ans);
        },
        factorialNum: function (num) {
            if (num == 0) {
            var ans = 1;
        }
            else {

            for (var fac = 1; num > 0; num--){
            fac*=num;
        }
            var ans = fac;
            }
            this.answer.push(ans);
            this.getAns(ans);

            /* it takes a variable num and gives its factorial
            ln1 checks if said number is 0, and sets ans to 1(factorial rules)
            ln 2 -4 else, take a variable > 0 and keep multiplying it with num until num>0?
            */
        },
        squareNum: function (num1) {
            var ans = num1*num1;
            this.answer.push(ans);
            this.getAns(ans);

            /* what this does ?
             a function that takes a parameter and returns its square
            ln1 stores the answer into a avariable "ans"
            ln2 pushes ans into the array of our asnwers using the push function
            ln3 calls the getAns function used to ddisply the answer in the console
            */
        },
        
        clearOne: function (ans) {
            this.answer.splice(ans, 1);
            console.log(this.answer);
            // eventuall we will use this to clear the DOM 
        },
        clearAll: function (num) {
                this.answer.splice(num, this.answer.length);
                console.log(this.answer);
        }
    }

    var handlers = {
        getAns: function() {
            var ans = arith.answer[arith.answer.length - 1];
            arith.getAns(ans);
        },

       addNum: function () {
        //    Give the inputs from the DOM a place to be stored
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.addNum(numOne.valueAsNumber, numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';
       },

       subtractNum: function () {
        //    Give the inputs from the DOM a place to be stored
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.subtractNum(numOne.valueAsNumber, numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';
       },

       divideNum: function () {
        //    Give the inputs from the DOM a place to be stored
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.divideNum(numOne.valueAsNumber, numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';
       },

       multiplyNum: function () {
        //    Give the inputs from the DOM a place to be stored
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.multiplyNum(numOne.valueAsNumber, numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';
       },

       rootNum: function () {
        //    Give the inputs from the DOM a place to be stored
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.rootNum(numOne.valueAsNumber || numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';
       },

       powerNum: function () {
        //    Give the inputs from the DOM a place to be stored
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.powerNum(numOne.valueAsNumber, numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';
       },

       factorialNum: function () {
        //  Give the inputs from the DOM a place to be stored
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.factorialNum(numOne.valueAsNumber || numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';
       },
       squareNum: function () {
        var numOne = document.getElementById('num1');
        var numTwo = document.getElementById('num2');
        arith.squareNum(numOne.valueAsNumber || numTwo.valueAsNumber);
        numOne.value = '';
        numTwo.value = '';

        /*
            ln1 - ln2 gets the input fields from their unique id
            ln3 performs the function passeed in arith object on values from ln1&2
            ln 4-5 resets the input field

        */  
       },
       clearOne: function() {
            var ans = arith.answer.length - 1;
            arith.clearOne(ans)
            
        },

       clearAll: function() {
            var ans = 0;
            arith.clearAll(ans);
        }
    }  

    var view = {
        getAns: function () {
        
        var divBox = document.getElementById("answerBox")
        divBox.innerHTML = '';
            var ansTxt = document.createElement("strong")
            ansTxt.textContent = ''   
            ansTxt.textContent = arith.answer[arith.answer.length - 1];
            divBox.appendChild(ansTxt)
        /*
            what does this code do line by line?
            ln1 gets the div box where we will input the answer,
            ln2 clears the div box of any pre existing html elements
            ln3 creates a strong element a stores in the passed variable
            ln4 resets any pre existing content of the strong element
            ln5 sets a new text content from the answer array, by calculatio, the last variable
            ln6 this  attaches the strong elemnt stored as ansTxt into the divBox
        */
        },
        clearAns: function () {
            var divBox = document.getElementById("answerBox")
            divBox.innerHTML = '';
            // var ansTxt = document.createElement("strong")
            // ansTxt.textContent = ''   
            // divBox.appendChild(ansTxt)
        },
        clearOne: function (params) {
            handlers.clearOne()
            this.clearAns()
        },
        clearAll: function (params) {
            handlers.clearAll()
            this.clearAns()
        },
        inputAns: function () {
            var firstNum = document.getElementById("num1")
            firstNum.value = arith.answer[arith.answer.length - 1];
        },
        piNum: function () {
            var firstNum = document.getElementById("num1")
            firstNum.value = 22/7;
        },
        /*
        displayNum: function () {
            var firstNum = document.getElementById("num1");
            var numBtn = document.getElementById("numBtn");
           
            firstNum.value = numBtn.value
            
        }
        */
        addNum: function () {
            handlers.addNum()
            this.getAns()
        },
        subtractNum: function () {
            handlers.subtractNum()
            this.getAns()
        },
        multiplyNum: function () {
            handlers.multiplyNum()
            this.getAns()
        },
        divideNum: function () {
            handlers.divideNum()
            this.getAns()
        },
        rootNum: function () {
            handlers.rootNum()
            this.getAns()
        },
        powerNum: function () {
            handlers.powerNum()
            this.getAns()
        },
        
        factorialNum: function () {
            handlers.factorialNum()
            this.getAns()
        },

        squareNum:  function () {
            handlers.squareNum()
            this.getAns()
        }        
    }

