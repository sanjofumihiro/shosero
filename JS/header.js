let Header={
    event:function(){
        document.querySelector("header .button1").addEventListener("click",Header.onV);
        document.querySelector("header .button2").addEventListener("click",Header.offV);
        document.querySelector("header .button3").addEventListener("click",Header.setV);
    },
    setUP:function(){
        document.querySelector("header").setAttribute("mode","none");
    },
    setV:function(){
        FINISHBOARD();
        document.querySelector("header").setAttribute("mode","none");
    },
    onV:function(){
        STRATBOARD();
        document.querySelector("header").setAttribute("mode","off");
    },
    offV:function(){
        STRATBOARD();
        document.querySelector("header").setAttribute("mode","on");
    }
}
Header.event();
Header.setUP();