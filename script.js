 let expression = ""
 //let first_operand = "";
 //let second_operand = "";
 //let operator = "";
 //let is_first_operand_defined = false;
 
 function process_input(event)
 {
    let value = event.target.innerText
    let type = check_value_type(value)

    if (type == "number")
    {
        update_expression(value)
        update_display()
    }
    else
    {
        if(value == "Clear")
        {
            clear_expression()
            update_display()
        }
        else
        {
            let valid = check_value_validity(value)
            if(valid)
            {
                if(value == "=")
                {
                    result = operate(expression)
                    clear_expression()
                    update_expression(result)
                    update_display()
                    clear_expression()
                }
                else
                {
                    update_expression(value)
                    update_display()
                }
            }
        }
    }
 }
 
 function check_value_type(value)
 {
    return !isNaN(value) ? "number" : "operator";   
 }

 function update_expression(value)
 {
    return expression = expression + value
 }

 function update_display()
 {
    display = document.querySelector("#display")
    display.innerText = expression
 }

 function clear_expression()
 {
    expression = ""
 }

 function check_value_validity(value)
 {
    let operator_index = find_operator_index()
    if(expression == "")
    {
        return false
    }
    else
    {
        if(value == "=")
        {
            if (operator_index)
            {
                if(!isNaN(expression[operator_index + 1]))
                {
                    return true
                }
            }
            return false
        }
        else
        {
            if(!operator_index && expression != "")
            {
                return true
            }
            return false
        }
    }
 }

 function find_operator_index()
 {
    let operators = ["+", "-", "*", "/",]
    for (const operator of operators)
    {
        operator_index = expression.indexOf(operator)
        {
            if (operator_index != -1)
            {
                return operator_index
            }
        }
    }
    return false
 }

function operate()
{
    let operator_index = find_operator_index()
    let operator = expression[operator_index]
    let operands = expression.split(operator);
    let result = 0
    switch(operator)
    {
    case "+":
        return String(+operands[0] + +operands[1])
    case "-":
        return String(+operands[0] - +operands[1])
    case "*":
        return String(+operands[0] * +operands[1])
    case "/":
        if(operands[0] == "0" || operands[1] == "0" )
        {
            alert("Divsion by zero not allowed")
            return ""
        }
        return String(+operands[0] / +operands[1])
    }
}   
 
 
 
 //// define chek operator validity that checks if operator is defined then if not adds it ad updates first operand defined to ture.
 //// define check which operator was clicked and if its = then call operate   else if its clean  call clean
 //// define operate which is trigered upon second operand is defined...... after operating it calls clean to clean all of things 
 
let buttons = document.querySelector("#buttons")
buttons.addEventListener("click", (e) => process_input(e))