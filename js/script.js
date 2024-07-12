document.addEventListener('DOMContentLoaded', () => {

    let firstOperating
    let operation
    
    const exp_prev = document.querySelector('#exp-prev')

    const input = document.querySelector('#input')

    function calculate(num1, num2, op){
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let calc
        switch(op){
            case '+':
                calc = num1 + num2
                break
            case '-':
                calc = num1 - num2
                break
            case '*':
                calc = num1 * num2
                break
            case '/':
                calc = num1 / num2
                break
        }
        return calc.toString()
    }

    document.querySelectorAll('button.number').forEach( btn => {btn.addEventListener('click', (event) => {
        if (input.innerHTML.length === 1 && input.innerHTML === '0'){
            input.innerHTML = event.srcElement.innerHTML
        } else {
            input.innerHTML += event.srcElement.innerHTML
        }
    })})

    document.querySelector('#ac').addEventListener('click', () => {
        input.innerHTML = ''
        exp_prev.innerHTML = ''
    })

    document.querySelector('#del').addEventListener('click', () => {
        input.innerHTML = input.innerHTML.slice(0,-1)
    })

    document.querySelector('#point').addEventListener('click', () => {
        if (! input.innerHTML.includes('.')){
            if (input.innerHTML.length === 0){
                input.innerHTML = '0'
            }
            input.innerHTML += '.'
        }
    })

    document.querySelector('#zero').addEventListener('click', () => {
        if ( input.innerHTML.length !== 1 || (input.innerHTML.length === 1 && input.innerHTML !== '0')){
            input.innerHTML += '0'
        }
    })

    document.querySelectorAll('.op').forEach( op => { op.addEventListener('click', (event) => {
        if (input.innerHTML.length > 0) {
            firstOperating = exp_prev.innerHTML.length === 0 ? input.innerHTML : calculate(firstOperating, input.innerHTML, operation)
            operation = event.srcElement.innerHTML
            exp_prev.innerHTML = firstOperating+' '+event.srcElement.innerHTML
            input.innerHTML = ''
        }
    })})

    document.querySelector('#equal').addEventListener('click', () => {
        if (input.innerHTML.length > 0 && exp_prev.innerHTML.length > 0){
            exp_prev.innerHTML = ''
            input.innerHTML = calculate(firstOperating, input.innerHTML, operation)
        }
    })
})