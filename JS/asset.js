let PARA={
    side:true,
    active:document.createElement("divs")
}

let FIELD={
    go:function(){
        if(PARA.active.tagName=="DIV"){
            //おけない場合は背景を変色させる
            console.log(parseFloat(PARA.active.style.top));
            if(1<parseFloat(PARA.active.style.top)){
                PARA.active.style.top=(Math.floor((parseFloat(PARA.active.style.top)+2)/11.1)-1)*11.1+"%";
            }
        }
    },
    back:function(){
        if(PARA.active.tagName=="DIV"){
            //おけない場合は背景を変色させる
            console.log(parseFloat(PARA.active.style.top));
            if(81>parseFloat(PARA.active.style.top)){
                PARA.active.style.top=(Math.floor((parseFloat(PARA.active.style.top)+2)/11.1)+1)*11.1+"%";
            }
        }
    },
    left:function(){
        if(PARA.active.tagName=="DIV"){
            //おけない場合は背景を変色させる
            console.log(parseFloat(PARA.active.style.left));
            if(1<parseFloat(PARA.active.style.left)){
                PARA.active.style.left=(Math.floor((parseFloat(PARA.active.style.left)+2)/11.1)-1)*11.1+"%";
            }
        }
    },
    right:function(){
        if(PARA.active.tagName=="DIV"){
            //おけない場合は背景を変色させる
            console.log(parseFloat(PARA.active.style.left));
            if(81>parseFloat(PARA.active.style.left)){
                PARA.active.style.left=(Math.floor((parseFloat(PARA.active.style.left)+2)/11.1)+1)*11.1+"%";
            }
        }
    },
    ENTER:function(){
        //ここでおけるかの判定を挟み、おける場合は以下を実行
        PARA.active.style.backgroundColor="#fff0"
        PARA.active.style.zIndex="10";
        PARA.active=document.createElement("divs");
        if(PARA.side){
            PARA.side=false;
        }else{
            PARA.side=true;
        }
    }
}

let Asset={
    my:[],
    my_bag:[],
    en:[],
    en_bag:[],
    create:function(str,x,y,own,top,left,right,bottom){
        let ele=document.createElement("div");
        ele.classList.add("asset");
        if(own==false){
            ele.classList.add("enemy");
            Asset.en.push(ele);
        }else{
            Asset.my.push(ele);
        }
        if(top==true){
            ele.classList.add("top");
        }
        if(left==true){
            ele.classList.add("left");
        }
        if(right==true){
            ele.classList.add("right");
        }
        if(bottom==true){
            ele.classList.add("bottom");
        }
        ele.innerText=str;
        ele.style.top=(y*11.1)+"%";
        ele.style.left=(x*11.1)+"%";
        ele.addEventListener("click",function(){Asset.touchM(ele);})
        document.getElementById("asset").appendChild(ele);
    },
    moveEB:function(){},
    moveEF:function(){},
    moveMB:function(){},
    moveMF:function(){},
    touchM:function(ele){
        if(PARA.active.tagName=="DIV"){
            return
        }
        if((PARA.side==true&&Asset.my.includes(ele))||(PARA.side==false&&Asset.en.includes(ele))){
            PARA.active.style.backgroundColor="#FFF0"
            PARA.active.style.zIndex="10";
            ele.style.backgroundColor="#f80";
            PARA.active=ele;
            ele.style.zIndex="11";
        }
    }

}


let EVENTS={
    keys:function(){
        window.addEventListener("keyup",e=>{
            switch(e.key){
                case "w":
                    FIELD.go();
                    break;
                case "a":
                    FIELD.left();
                    break;
                case "s":
                    FIELD.back();
                    break;
                case "d":
                    FIELD.right();
                    break;
                case "Enter":
                    FIELD.ENTER();
                    break;
            }
        })
    }
}
EVENTS.keys();

function FINISHBOARD(){
    PARA.active=document.createElement("divs");
    PARA.side=true;
    Asset.my=[];
    Asset.my_bag=[];
    Asset.en=[];
    Asset.en_bag=[];
    document.getElementById("asset").innerHTML="";
}
function STRATBOARD(){
Asset.create("歩",0,6,true,true,false,false,false);
Asset.create("歩",1,6,true,true,false,false,false);
Asset.create("歩",2,6,true,true,false,false,false);
Asset.create("歩",3,6,true,true,false,false,false);
Asset.create("歩",4,6,true,true,false,false,false);
Asset.create("歩",5,6,true,true,false,false,false);
Asset.create("歩",6,6,true,true,false,false,false);
Asset.create("歩",7,6,true,true,false,false,false);
Asset.create("歩",8,6,true,true,false,false,false);

Asset.create("香",0,8,true,true,false,false,false);
Asset.create("桂",1,8,true,true,true,true,false);
Asset.create("銀",2,8,true,true,true,false,false);
Asset.create("金",3,8,true,true,true,false,true);
Asset.create("王",4,8,true,true,true,true,true);
Asset.create("金",5,8,true,true,false,true,true);
Asset.create("銀",6,8,true,true,false,true,false);
Asset.create("桂",7,8,true,true,true,true,false);
Asset.create("香",8,8,true,true,false,false,false);
Asset.create("角",1,7,true,true,true,true,true);
Asset.create("飛",7,7,true,true,true,true,true);



Asset.create("歩",0,2,false,true,false,false,false);
Asset.create("歩",1,2,false,true,false,false,false);
Asset.create("歩",2,2,false,true,false,false,false);
Asset.create("歩",3,2,false,true,false,false,false);
Asset.create("歩",4,2,false,true,false,false,false);
Asset.create("歩",5,2,false,true,false,false,false);
Asset.create("歩",6,2,false,true,false,false,false);
Asset.create("歩",7,2,false,true,false,false,false);
Asset.create("歩",8,2,false,true,false,false,false);

Asset.create("香",0,0,false,true,false,false,false);
Asset.create("桂",1,0,false,true,true,true,false);
Asset.create("銀",2,0,false,true,true,false,false);
Asset.create("金",3,0,false,true,true,false,true);
Asset.create("王",4,0,false,true,true,true,true);
Asset.create("金",5,0,false,true,false,true,true);
Asset.create("銀",6,0,false,true,false,true,false);
Asset.create("桂",7,0,false,true,true,true,false);
Asset.create("香",8,0,false,true,false,false,false);
Asset.create("飛",1,1,false,true,true,true,true);
Asset.create("角",7,1,false,true,true,true,true);
}