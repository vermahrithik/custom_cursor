// // dets
document.querySelector('#main')
.addEventListener('mousemove',function(dets){
    document.querySelector('#box').style.left=`${dets.clientX}px`
    document.querySelector('#box').style.top=`${dets.clientY}px`
    // console.log(dets.clientX);
})

// "#op-1"||"#op-2"||"#op-3"

const form=document.querySelector("#f-form h5")
form.addEventListener('mouseover',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(2.5)';
    document.querySelector('#box').style.backgroundColor=`white`;
    document.querySelector('#box').style.border=`none`;
    document.querySelector('#box').style.boxShadow=`none`;
})
form.addEventListener('mouseout',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.backgroundColor=`transparent`;
    document.querySelector('#box').style.border=`1px solid grey`;
    document.querySelector('#box').style.boxShadow=`0px 0px 8px white`;
})
const gall=document.querySelector("#gallery")
gall.addEventListener('mouseover',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(60)';
    document.querySelector('#box').style.backgroundColor=`white`;
    document.querySelector('#box').style.border=`none`;
    document.querySelector('#heart').style.webkitFilter=`none`;
    document.querySelector('#heart').style.borderRadius=`0% 60% 0% 60%`;
    document.querySelector('#heart').style.transform=`rotate(15deg)`;
    document.querySelector('#box').style.boxShadow=`none`;
    document.querySelector('#heart').style.transform=`scale(2)`;
    // document.querySelector('#main').style.cursor=`pointer`;
    document.querySelector('#para').style.mixBlendMode=`difference`;
    document.querySelector('#gallery').style.webkitFilter=`blur(1px)`;
    
})
gall.addEventListener('mouseout',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.backgroundColor=`transparent`;
    document.querySelector('#box').style.border=`1px solid grey`;
    document.querySelector('#heart').style.webkitFilter=`blur(4px)`;
    document.querySelector('#heart').style.borderRadius=`0% 0% 0% 0%`;
    document.querySelector('#heart').style.transform=`rotate(0deg)`;
    document.querySelector('#box').style.boxShadow=`0px 0px 8px white`;
    document.querySelector('#heart').style.transform=`none`;
    // document.querySelector('#main').style.cursor=`none`;
    document.querySelector('#para').style.mixBlendMode=`color-dodge`;
    document.querySelector('#gallery').style.webkitFilter=`none`;
})
const naym=document.querySelector("#name")
naym.addEventListener('mouseover',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(2)';
    document.querySelector('#box').style.backgroundColor=`white`;
    document.querySelector('#box').style.border=`none`;
    // document.querySelector('#box').style.boxShadow=`0px 0px 20px white`;
})
naym.addEventListener('mouseout',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.backgroundColor=`transparent`;
    document.querySelector('#box').style.border=`1px solid grey`;
    // document.querySelector('#box').style.boxShadow=`0px 0px 8px white`;
})

const menu=document.querySelector('#menu i')
menu.addEventListener('mouseover',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(3)';
    document.querySelector('#box').style.webkitFilter= `blur(6px)`;
})
menu.addEventListener('mouseout',function(){
    // document.querySelector('#o-1').style.left=`${dets.clientX}`
    // document.querySelector('#o-1').style.top=`${dets.clientY}`
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.webkitFilter= `none`;
    // console.log(dets.target);
})

const opt1=document.querySelector("#o-1")
const opt2=document.querySelector("#o-2")
const opt3=document.querySelector("#o-3")
// const optd=document.querySelector("#op-1")

opt1.addEventListener('mouseover',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(3)';
    document.querySelector('#box').style.webkitFilter= `blur(6px)`;
})
opt1.addEventListener('mouseout',function(){
    // document.querySelector('#o-1').style.left=`${dets.clientX}`
    // document.querySelector('#o-1').style.top=`${dets.clientY}`
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.webkitFilter= `none`;
    // console.log(dets.target);
})
opt2.addEventListener('mouseover',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(3)';
    document.querySelector('#box').style.webkitFilter= `blur(6px)`;
})
opt2.addEventListener('mouseout',function(){
    // document.querySelector('#o-1').style.left=`${dets.clientX}`
    // document.querySelector('#o-1').style.top=`${dets.clientY}`
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.webkitFilter= `none`;
    // console.log(dets.target);
})
opt3.addEventListener('mouseover',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(3)';
    document.querySelector('#box').style.webkitFilter= `blur(6px)`;
})
opt3.addEventListener('mouseout',function(){
    // document.querySelector('#o-1').style.left=`${dets.clientX}`
    // document.querySelector('#o-1').style.top=`${dets.clientY}`
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.webkitFilter= `none`;
    // console.log(dets.target);
})
const num=document.querySelector("#num")
num.addEventListener('mouseover',function(){
        document.querySelector('#box').style.transform='translate(-50%,-50%) scale(5)';
        document.querySelector('#box').style.border=`none`;
        document.querySelector('#box').style.backgroundColor=`white`;
        document.querySelector('#box').style.boxShadow=`none`;
})
num.addEventListener('mouseout',function(){
    document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
    document.querySelector('#box').style.backgroundColor=`transparent`;
    document.querySelector('#box').style.border=`1px solid grey`;
    document.querySelector('#box').style.boxShadow=`0px 0px 8px white`;
})
const para=document.querySelector("#para")
para.addEventListener('mouseover',function(){
        document.querySelector('#box').style.transform='translate(-50%,-50%) scale(2)';
        document.querySelector('#box').style.backgroundColor=`white`;
        document.querySelector('#box').style.opacity=`0.09`;
        document.querySelector('#box').style.boxShadow=`0px 0px 20px white`;
    })
    para.addEventListener('mouseout',function(){
        document.querySelector('#box').style.transform='translate(-50%,-50%) scale(0.5)';
        document.querySelector('#box').style.backgroundColor=`transparent`;
        document.querySelector('#box').style.opacity=`1`;
    document.querySelector('#box').style.boxShadow=`0px 0px 8px white`;
})





// const heart=document.querySelector("#heart")
// heart.addEventListener('mouseover',function(){
//         document.querySelector('#box').style.cursor='translate(-50%,-50%) scale(0.5)';
//         setTimeout(()=>{
//             document.querySelector('#box').style.cursor='translate(-50%,-50%) scale(60)';
//         },1000)
//         // document.querySelector('#heart').style.colorBlendMode='difference';
//         // document.querySelector('#main').style.webkitFilter='blur(5px)';
//     })
//     heart.addEventListener('mouseout',function(){
//         // document.querySelector('#main').style.webkitFilter='none';
//         document.querySelector('#box').style.cursor='translate(-50%,-50%) scale(70)';
//         // document.querySelector('#box').style.cursor='translate(-50%,-50%) scale(0.5)';
//         // document.querySelector('#heart').style.colorBlendMode='none';
//         // document.querySelector('#main').style.display='';
// })
