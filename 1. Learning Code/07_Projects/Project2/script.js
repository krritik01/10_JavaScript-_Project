const form = document.querySelector('form')
// form is only submitted in "get type" or "post type" and whenever it is submitted the value is gone to url or server but in this we have to stop this by using a method on event like addEventListener('submit') with preventDefault

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('.result')

    if(height===""||height<=0||isNaN(height)){
        result.innerHTML="Please enter a valid height";
    }
    else if(weight===""||weight<=0||isNaN(weight)){
        result.innerHTML="Please enter a valid weight";
    }
    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        
        result.innerHTML= `<span>${bmi}</span>`
    }
})



