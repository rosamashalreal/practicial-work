
var button = document.getElementById("flow")

button.addEventListener('click', () => {

    if (document.getElementById("input").value === '') {
        document.getElementById("gift").style.display = 'block';
        document.getElementById("error").style.visibility = 'visible';
        document.getElementById("input").style.border = '1px solid red';
    }

})
