
let darkMode;

if(localStorage.getItem("dark-mode")){
    darkMode = localStorage.getItem("dark-mode")
}else{
    darkMode = "light"
}
localStorage.setItem("dark-mode", darkMode)

$( () => {
    if(localStorage.getItem("dark-mode") == "dark"){
        $("body").addClass("dark-mode")
        $("#dark-mode-btn").hide()
        $("#light-mode-btn").show()

        
        
        
        
    }else{
        $("#light-mode-btn").hide()
       
        
    }
    $("#light-mode-btn").click(()=>{
        $("#light-mode-btn").hide()
        $("#dark-mode-btn").show()
        $("body").removeClass("dark-mode")
        localStorage.setItem("dark-mode", "light")
    })
    $("#dark-mode-btn").click(()=>{
        $("#light-mode-btn").show()
        $("#dark-mode-btn").hide()
        $("body").addClass("dark-mode")
        localStorage.setItem("dark-mode", "dark")
    })
    
})



    /* const btnDarkMode = document.querySelector('#dark-mode-boton')
    btnDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    })*/
