const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const bar = document.getElementById("bar")

num1.addEventListener("click", barchanger() )


this.innerHeight


var button = document.querySelectorAll(".num").length;

for (let i = 0; i < button; i++) {
    document.querySelectorAll(".num")[i].addEventListener("click", function () {
           
        // makesound(this.innerHTML)
        barchanger(this.id)
       
    });
    
}
document.querySelectorAll(".set").onclick = playSound;


    function barchanger(input){
        switch (input) {
            case "num1":
                // bar.style.width = 108 + "px"
                bar.style.left = 450 + "px"
                break;
            case "num2":
                // bar.style.width = 216 + "px"
                bar.style.left = 558 + "px"
                break;
            case "num3":
                // bar.style.width = 324 + "px"
                bar.style.left = 666 + "px"
                break;
            case "num4":
                // bar.style.width = 432 + "px"
                bar.style.left = 774 + "px"
                break;
            case "num5":
                // bar.style.width = 540 + "px"
                bar.style.left = 882 + "px"
                break;



            default:
                break;
        }

}