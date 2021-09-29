let count = 0;

const number = document.getElementById("numeric");
const btn1 = document.querySelectorAll(".btn");

btn1.forEach(function(press){
    press.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
               count--;
        }

        else if(styles.contains('increase')) {
            count++;
        }

        else {
            count = 0;
        }

        if(count>0) {
            number.style.color = "green";
        }

        if(count<0) {
            number.style.color = "red";
        }

        if(count==0) {
            number.style.color = "black"
        }
         numeric.textContent = count;
    })
})