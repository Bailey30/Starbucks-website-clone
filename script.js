
const bar = document.getElementById("bar")



var button = document.querySelectorAll(".num").length;

for (let i = 0; i < button; i++) {
    document.querySelectorAll(".num")[i].addEventListener("click", function () {
           
      
        barchanger(this.id)
       
    });
    
}



    function barchanger(input){
        switch (input) {
            case "num1":
                // bar.style.width = 108 + "px"
                bar.style.left = 450 + "px"
                // drinkcontainer = document.getElementsByClassName("drinkcontainer");
                
                // for (i = 0; i < drinkcontainer.length; i++) {
                //   drinkcontainer[i].classList.remove("visible")
                // }      
                  
                //   document.getElementById("coffee").classList.add("visible");
                
                break;
            case "num2":
                // bar.style.width = 216 + "px"
                bar.style.left = 558 + "px"
                // drinkcontainer = document.getElementsByClassName("drinkcontainer");
                // for (i = 0; i < drinkcontainer.length; i++) {
                //     drinkcontainer[i].classList.remove("visible")
                // const element = document.getElementById("bakery")
                // element.classList.add("visible");
                
                // }      
               
                
                

                break;
            case "num3":
                // bar.style.width = 324 + "px"
                bar.style.left = 666 + "px"
                // drinkcontainer = document.getElementsByClassName("drinkcontainer");
                // for (i = 0; i < drinkcontainer.length; i++) {
                //     drinkcontainer[i].classList.remove("visible")
                // }      
                
                // document.getElementById("handcrafted").classList.add("visible");
                

                break;
            case "num4":
                // bar.style.width = 432 + "px"
                bar.style.left = 774 + "px"
                // drinkcontainer = document.getElementsByClassName("drinkcontainer");
                // for (i = 0; i < drinkcontainer.length; i++) {
                //     drinkcontainer[i].classList.remove("visible")
                // }      
              
                // document.getElementById("salad").classList.add("visible");
                

                break;
            case "num5":
                // bar.style.width = 540 + "px"
                bar.style.left = 882 + "px"
                // drinkcontainer = document.getElementsByClassName("drinkcontainer");
                // for (i = 0; i < drinkcontainer[i].length; i++) {
                //     drinkcontainer.classList.remove("visible")
                // }
      
                
                // document.getElementById("merch").classList.add("visible");
                
                break;



            default:
                break;
        }

}