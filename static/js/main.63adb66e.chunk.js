(this["webpackJsonpgetresponse-task"]=this["webpackJsonpgetresponse-task"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var i,c,r,a,s,l,d,o,x,p,b,h,j,m,g,f,u,O,A=t(2),w=t.n(A),v=t(12),y=t.n(v),N=t(3),k=t(4),C=t(5),B=t(16),U=t.p+"static/media/profile.aa96f941.jpg",_=t(1),E=[{name:"Josef Wolf"}],M=k.b.ul(i||(i=Object(N.a)(['\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  text-transform: uppercase;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  flex-flow: row nowrap;\n  border-left: 1px solid #c9c9c9;\n  margin-left: 32px;\n  font-size: 12.5px;\n  color: #7c7c7c;\n  li {\n    padding: 20px 10px;\n    position: relative;\n    :hover {\n      color: #ff801a;\n      cursor: pointer;\n    }\n  }\n  li::after {\n    content: "";\n    position: absolute;\n    width: 25px;\n    height: 2px;\n    left: 35%;\n    margin-top: 20px;\n    background: #ff801a;\n    transform: scale(0, 1);\n    transition: transform 0.3s ease;\n  }\n  li:hover::after {\n    transform: scale(1, 1);\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: white;\n    position: fixed;\n    transform: ',";\n    top: 79px;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    li {\n      color: black;\n    }\n  }\n"])),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),R=k.b.ul(c||(c=Object(N.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  justify-content: space-around;\n  color: #7c7c7c;\n  flex-direction: row;\n  align-items: center;\n  list-style: none;\n  font-size: 15.5px;\n  @media (max-width: 768px) {\n    color: black;\n  }\n  li {\n    cursor: pointer;\n  }\n  li:first-child {\n    border: 1px solid #c0c0c0;\n    border-radius: 100%;\n    width: 32px;\n    height: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      width: 34px;\n      height: 34px;\n      object-fit: cover;\n      border-radius: 50%;\n    }\n  }\n\n  li:nth-child(2) {\n    margin: 10px;\n    font-size: 15.5px;\n    line-height: 3.03;\n    text-align: left;\n  }\n"]))),F=function(n){var e=n.open;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(M,{open:e,children:[Object(_.jsx)("li",{children:"Dashboard"}),Object(_.jsx)("li",{children:"Recipes"}),Object(_.jsx)("li",{children:"Challange"})]}),Object(_.jsxs)(R,{children:[Object(_.jsx)("li",{children:Object(_.jsx)("img",{src:U,alt:""})}),Object(_.jsx)("li",{children:E[0].name}),Object(_.jsx)("li",{children:Object(_.jsx)(B.a,{})})]})]})},S=k.b.div(r||(r=Object(N.a)(["\n  width: 2rem;\n  height: 2rem;\n  top: 15px;\n  right: 20px;\n  display: none;\n  margin-right: 20px;\n  z-index: 20;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    transform-origin: 1px;\n    transition: all 0.4s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      opacity: ",";\n    }\n  }\n"])),(function(n){return n.open?"lightgrey":"black"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"}),(function(n){return n.open?"0":"100%"})),T=function(){var n=Object(A.useState)(!1),e=Object(C.a)(n,2),t=e[0],i=e[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(S,{open:t,onClick:function(){return i(!t)},children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]}),Object(_.jsx)(F,{open:t})]})},G=k.b.header(a||(a=Object(N.a)(["\n  background-color: white;\n  border-bottom: 2px solid #c9c9c9;\n  position: fixed;\n  height: 79px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  z-index: 20;\n  @media (max-width: 768px) {\n    background-color: #adbb0c;\n    width: 100%;\n  }\n"]))),I=k.b.nav(s||(s=Object(N.a)(["\n  width: 860px;\n  height: 100%;\n  margin-left: 118px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 30;\n  @media (max-width: 768px) {\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    width: 100%;\n    margin-left: 0;\n    padding: 0;\n  }\n"]))),J=function(){return Object(_.jsx)(G,{children:Object(_.jsx)(I,{children:Object(_.jsx)(T,{})})})},Z=t.p+"static/media/arrowR.31b32f0b.png",z=t.p+"static/media/arrowL.e1229325.png",K=k.b.div(l||(l=Object(N.a)(["\n  font-size: 9.5px;\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n    display: none;\n  }\n\n  p {\n    text-align: center;\n    text-transform: uppercase;\n  }\n\n  .progress {\n    display: flex;\n    justify-content: space-evenly;\n    .progress__box {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-right: 10px;\n      .progress-dot {\n        position: relative;\n        display: inline-block;\n        width: 10px;\n        height: 10px;\n        background-color: #dbdbdb;\n        border-radius: 50%;\n        z-index: 10 !important;\n      }\n\n      .progress-dot.active,\n      .progress-link.active {\n        background-color: #adbb0c;\n      }\n    }\n  }\n"]))),Q=k.b.div(d||(d=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 279px;\n  position: relative;\n  margin-left: 65px;\n  @media (max-width: 768px) {\n    margin-bottom: 40px;\n    display: none;\n  }\n\n  button {\n    width: 24px;\n    height: 42px;\n    cursor: pointer;\n    background-color: transparent;\n    border: solid 1px #c0c0c0;\n    border-radius: 5px;\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &:hover {\n      left: 5px;\n      background-color: #ff801a;\n      transition: ease-in 0.5s;\n    }\n    img {\n      width: 12px;\n      height: 16px;\n    }\n  }\n\n  .box {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 249px;\n    &__week {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 160px;\n      height: 36px;\n      font-size: 42px;\n      color: #ff801a;\n      line-height: 1;\n    }\n    .week {\n      opacity: 0;\n      transition-duration: 1s ease;\n    }\n    .week.active {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n"]))),H=function(n){var e=n.current,t=n.setCurrent,i=["WEEK 1","WEEK 2","WEEK 3","WEEK 4"],c=i.length;return console.log(e),!Array.isArray(i)||i.length<=0?null:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(K,{children:[Object(_.jsx)("p",{children:"Your 4 week progress"}),Object(_.jsx)("div",{className:"progress",children:i.map((function(n,t){return Object(_.jsxs)("div",{className:"progress__box",children:[Object(_.jsx)("span",{className:t===e?"progress-dot active":"progress-dot "}),Object(_.jsx)("span",{children:n.slice(4)})]},t)}))})]}),Object(_.jsxs)(Q,{children:[Object(_.jsx)("button",{className:"left-arrow",onClick:function(){t(0===e?c-1:e-1)},children:Object(_.jsx)("img",{src:z,alt:""})}),Object(_.jsx)("div",{className:"box",children:i.map((function(n,t){return Object(_.jsx)("div",{className:t===e?"week active":"week",children:t===e&&Object(_.jsx)("div",{className:"box__week",children:n})},t)}))}),Object(_.jsx)("button",{className:"right-arrow",onClick:function(){t(e===c-1?0:e+1)},children:Object(_.jsx)("img",{src:Z,alt:""})})]})]})},W=t(6),X=k.b.div(o||(o=Object(N.a)(["\n  p {\n    font-size: 9.5px;\n    text-align: center;\n    text-transform: uppercase;\n  }\n  div {\n    font-size: 30px;\n    color: #828282;\n    color: ",";\n    * {\n      margin-left: 13px;\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.open?"lightgrey":"#adbb0c;"})),V=function(){var n=Object(A.useState)(!1),e=Object(C.a)(n,2),t=e[0],i=e[1];return Object(_.jsxs)(X,{open:t,onClick:function(){return i(!t)},children:[Object(_.jsx)("p",{children:"Select your protein options"}),Object(_.jsxs)("div",{children:[Object(_.jsx)(W.a,{}),Object(_.jsx)(W.b,{}),Object(_.jsx)(W.e,{}),Object(_.jsx)(W.d,{}),Object(_.jsx)(W.c,{})]})]})},q=k.b.div(x||(x=Object(N.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  margin-top: 116px;\n  padding-bottom: 33px;\n\n  @media (max-width: 768px) {\n    display: flex;\n    align-items: center;\n    margin-top: 0;\n    padding: 90px 0 10px 0;\n  }\n"]))),Y=function(n){var e=n.current,t=n.setCurrent;return Object(_.jsxs)(q,{children:[Object(_.jsx)(H,{current:e,setCurrent:t}),Object(_.jsx)(V,{})]})},L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAYAAAA8E3wEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUeNpiZMAOLND4JxiIAwT1MTHQGdDdQhYsQXGCynagmD0yglSGjNRHLpAZEB8+IcKX5OZDdPBk5OTDEzS048TIKtoAAgwAy8MJCH+2P3MAAAAASUVORK5CYII=",P=t(10),D=k.b.div(p||(p=Object(N.a)(["\n  display: none;\n  @media (max-width: 769px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n  }\n\n  .box {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    background-color: white;\n    border-bottom: 2px solid #c2c2c2;\n    .week {\n      opacity: 0;\n      transition-duration: 1s ease;\n    }\n    .week.active {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n\n    &__card {\n      display: flex;\n      flex-direction: column;\n      width: 100vw;\n      > div {\n        text-align: center;\n        width: 100%;\n      }\n      &--data {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        font-size: 40px;\n        color: #adbb0c;\n        font-weight: bold;\n        border-top: 2px solid #c2c2c2;\n        height: 100px;\n      }\n\n      &--day:nth-child(7) {\n        color: #ff801a;\n        font-weight: bold;\n      }\n\n      &--day {\n        display: flex;\n        flex-direction: row;\n        border-top: 1px solid #c2c2c2;\n        color: black;\n        height: 100%;\n        height: 50px;\n        .header {\n          color: #c2c2c2;\n          font-size: 14px;\n          height: 100%;\n          padding: 0 0px 0 10px;\n        }\n        .meal {\n          display: flex;\n          justify-content: flex-end;\n          align-items: center;\n          width: 100%;\n          font-size: 18px;\n          padding-right: 50px;\n        }\n      }\n      &--workout {\n        border-top: 1px solid #c2c2c2;\n        color: #adbb0c;\n        p {\n          font-size: 20px;\n          font-weight: bold;\n        }\n\n        img {\n          height: 25px;\n        }\n      }\n    }\n  }\n\n  button {\n    display: flex;\n    align-items: center;\n    font-size: 50px;\n    color: #adbb0c;\n    background-color: transparent;\n    border: none;\n    outline: none;\n  }\n"]))),$=function(n){var e=n.meals,t=n.rowHeaders,i=Object(A.useState)(0),c=Object(C.a)(i,2),r=c[0],a=c[1],s=e.length,l=function(){a(r===s-1?0:r+1)},d=function(){a(0===r?s-1:r-1)};return Object(_.jsx)(D,{children:Object(_.jsx)("div",{className:"box",children:e.map((function(n,e){return Object(_.jsx)("div",{className:e===r?"week active":"week",children:e===r&&Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"box__card",children:[Object(_.jsxs)("div",{className:"box__card--data",children:[Object(_.jsx)("button",{className:"left-arrow",onClick:d,children:Object(_.jsx)(P.a,{})}),"DAY ",n.id,Object(_.jsx)("button",{className:"right-arrow",onClick:l,children:Object(_.jsx)(P.b,{})})]}),Object(_.jsxs)("div",{className:"box__card--day",children:[Object(_.jsx)("div",{className:"header",children:t[1]}),Object(_.jsx)("div",{className:"meal",children:Object(_.jsx)("p",{children:n.sixAM})})]}),Object(_.jsxs)("div",{className:"box__card--day",children:[Object(_.jsx)("div",{className:"header",children:t[2]}),Object(_.jsx)("div",{className:"meal",children:n.nineAM})]}),Object(_.jsxs)("div",{className:"box__card--day",children:[Object(_.jsx)("div",{className:"header",children:t[3]}),Object(_.jsx)("div",{className:"meal",children:n.twelveAM})]}),Object(_.jsxs)("div",{className:"box__card--day",children:[Object(_.jsx)("div",{className:"header",children:t[4]}),Object(_.jsx)("div",{className:"meal",children:n.threePM})]}),Object(_.jsxs)("div",{className:"box__card--day",children:[Object(_.jsx)("div",{className:"header",children:t[5]}),Object(_.jsx)("div",{className:"meal",children:n.sixPM})]}),Object(_.jsxs)("div",{className:"box__card--day",children:[Object(_.jsx)("div",{className:"header",children:t[6]}),Object(_.jsx)("div",{className:"meal",children:n.Carb})]}),Object(_.jsxs)("div",{className:"box__card--workout",children:[Object(_.jsx)("p",{children:"WORKOUT"}),Object(_.jsx)("img",{src:L,alt:"dumbbell"})]})]})})},e)}))})})},nn=t.p+"static/media/print.615a193d.svg",en=t.p+"static/media/rounded-rectangle.00160bd9.png",tn="\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n",cn=k.b.div(b||(b=Object(N.a)(["\n  width: 978px;\n  height: 580px;\n  display: flex;\n  flex-direction: row;\n  background-image: url(",");\n  background-color: white;\n  font-family: Arial;\n  @media (max-width: 768px) {\n    display: none;\n  }\n"])),en),rn=k.b.div(h||(h=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 85px;\n  color: #c2c2c2;\n  .table__header {\n    &--empty {\n      height: 50px;\n    }\n    &--emptyRow {\n      height: 35px;\n    }\n    &--time {\n      height: 90px;\n      border-top: 2px solid #c2c2c2;\n    }\n    &--workout {\n      height: 33px;\n    }\n    div {\n      ",";\n    }\n  }\n"])),tn),an=k.b.div(j||(j=Object(N.a)(["\n  width: 128px;\n  color: #c2c2c2;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  div {\n    ",";\n  }\n  .table__column {\n    &--day {\n      ",";\n      height: 50px;\n      border-right: 2px solid #c2c2c2;\n      font-size: 25px;\n      font-weight: bold;\n      color: #adbb0c;\n      text-transform: uppercase;\n    }\n    &--meal {\n      height: 90px;\n      border-top: 2px solid #c2c2c2;\n      border-right: 2px solid #c2c2c2;\n      font-size: 12.5px;\n      text-align: left;\n      padding-left: 13px;\n      padding-right: 10px;\n    }\n    &--carb {\n      ",";\n      height: 33px;\n      border-bottom: 2px solid #c2c2c2;\n      border-right: 2px solid #c2c2c2;\n    }\n    &--workout {\n      ",";\n      height: 35px;\n      border-right: 2px solid #c2c2c2;\n    }\n  }\n"])),tn,tn,tn,tn),sn=k.b.div(m||(m=Object(N.a)(["\n  color: #828282;\n  .column--day {\n    ",";\n    height: 50px;\n    font-size: 25px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #adbb0c;\n  }\n  .column--meal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 126px;\n    height: 458px;\n\n    border-top: 2px solid #c2c2c2;\n    img {\n      transform: rotate(-90deg);\n    }\n    p {\n      color: #c2c2c2;\n      font-size: 35px;\n      width: 300px;\n      text-align: center;\n      transform: rotate(-90deg);\n    }\n  }\n  .column--print {\n    ",";\n    height: 70px;\n    color: #c2c2c2;\n    cursor: pointer;\n  }\n"])),tn,tn),ln=function(n){var e=n.meals,t=["","6:00AM","9:00AM","12:00AM","3:00PM","6:00PM"," ","Workout"];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)($,{meals:e,rowHeaders:t}),Object(_.jsxs)(cn,{children:[Object(_.jsx)(rn,{children:Object(_.jsxs)("div",{className:"table__header",children:[Object(_.jsx)("div",{className:"table__header--empty",children:t[0]}),Object(_.jsx)("div",{className:"table__header--time",children:t[1]}),Object(_.jsx)("div",{className:"table__header--time",children:t[2]}),Object(_.jsx)("div",{className:"table__header--time",children:t[3]}),Object(_.jsx)("div",{className:"table__header--time",children:t[4]}),Object(_.jsx)("div",{className:"table__header--time",children:t[5]}),Object(_.jsx)("div",{className:"table__header--emptyRow",children:t[6]}),Object(_.jsx)("div",{className:"table__header--workout",children:t[7]})]},t)}),e.slice(0,6).map((function(n){return Object(_.jsxs)(an,{className:"table__column",children:[Object(_.jsxs)("div",{className:"table__column--day",children:["Day ",n.id]}),Object(_.jsx)("div",{className:"table__column--meal",children:n.sixAM}),Object(_.jsx)("div",{className:"table__column--meal",children:n.nineAM}),Object(_.jsx)("div",{className:"table__column--meal",children:n.twelveAM}),Object(_.jsx)("div",{className:"table__column--meal",children:n.threePM}),Object(_.jsx)("div",{className:"table__column--meal",children:n.sixPM}),Object(_.jsx)("div",{className:"table__column--carb",children:n.Carb}),Object(_.jsx)("div",{className:"table__column--workout",children:Object(_.jsx)("img",{src:L,alt:"dumbbell"})})]},n.id)})),Object(_.jsxs)(sn,{children:[Object(_.jsx)("div",{className:"column--day",children:"Day 7"}),Object(_.jsxs)("div",{className:"column--meal",children:[Object(_.jsx)("p",{children:"Guilt Free Day"}),Object(_.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JJREFUeNrEl1tIFGEUx2enzdTSNCoNEhJNCmq7odvGFoUWYgZB2Q2iC0UQvfhguiXUQ2TbQ/USQVB0obLIXrogkUW7RRcoRJKwlCLoIcQsTQXF6n/gPzA7zTeN61IHfszMzvnOOfudM993Pk8kEtFcygSwGqwA80EumMh338EH0AwegbvghxujXhc6+aAabAbjFTpTiR/sAX3gGgiDdifjusO7ZHAMtIJdIBVEGEwQZINxJJu/VVMnlWNaGUSyyolHkYI8cJNT/RNcAnXgnct0zQQhsI1/UlJTYTcbdjOwEDyl8/cgAHaMwLnGcTs59iNtPaFtxwAk340gC9wHi8BLLX6RsUUgSpuN9GEbQAqnfQrzuAb0aqOXTlACHtJ2A339EcBhMI9Tth4MaokTsbWWafTRV0wAUnSVLLiNjDrRIrO5lT4qjVQYAdSAseCiIueidx18AnMcnCygzg1FgYvtC/RVYxhO4yLzCxxVGF4ONoAccNAhgCrqVHCMndTR1ybxLQGUcYWLOKxaM0z30x0CyFGMMUs7fYnPMgmgmC/uORhuNt23Oui9UYyxiuGr2MuqFHnmMOA1cyYLyyEHvSOchSjHqOQ5rz4vvwDNxUoXdlHpn0G5C7024+uTFKTz4Zv276Sb13Rd+88iAfTwPkOhcxUsjsN2EdcVO8nktUcC6OBDgUJ5Ggu0BdSCZVw7rJLGd7XUfWH5LM1i+OrwUtnPCo/aKDdwUZlLNC4k3aZcZhKPZewtRQABXltkBpr4UKZQvgK6rI0MmMQvKI/3VuddTJ+dGL6adC4KfZy+fEXFHoijBmTMV0WPKb76xbfOXaqe/yCkMHYWnB6B8zMcYych+pKmtdf4DKX5HALbWb12so9N5+Bf9n3R2at4X8g+cchY2HTTBnGSz/XsXOzkOJgFToC3dNjHPUB+m00dTfGVXAZjwCn2jTFdcQrXaB93q5UJ7IqSeFgp4VcXYA3ENA0DYB27ISmS2zwNjVYmgwd03kkf/aquWFJRCr6AVeAV8xavFLILWkqbpdaeQ1dsvUFOVQHTcp6HDbciuuc4Npe2gnZbtO7QtfhZUMM8mMgW+pht1xL2+Ukki79VUaeNB5Nh2vCrui2Pi9Ox/Jv9YAvPfG5kgKtg2Kj20ZyOxcButtLlluN5hqmXMB/P77g9nv8WYAC4Fcq6umkcbwAAAABJRU5ErkJggg==",alt:""})]}),Object(_.jsxs)("div",{className:"column--print",children:[Object(_.jsx)("img",{src:nn,alt:""}),"Print"]})]})]})]})},dn=k.b.div(g||(g=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 987px;\n  height: 100%;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),on=function(){var n=Object(A.useState)(null),e=Object(C.a)(n,2),t=e[0],i=e[1],c=Object(A.useState)(0),r=Object(C.a)(c,2),a=r[0],s=r[1];return Object(A.useEffect)((function(){fetch("https://my-json-server.typicode.com/jozef-wolf/db.json/meals").then((function(n){return n.json()})).then((function(n){console.log(n),i(n)}))}),[]),Object(_.jsxs)(dn,{children:[Object(_.jsx)(Y,{current:a,setCurrent:s}),t&&Object(_.jsx)(ln,{meals:t,current:a,setCurrent:s})]})},xn=t.p+"static/media/arrow.dc3af22d.svg",pn=k.b.aside(f||(f=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  margin-top: 45px;\n  @media (max-width: 768px) {\n    justify-content: center;\n  }\n  .box__first,\n  .box__second,\n  .box__third {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    height: 190px;\n    text-align: left;\n    @media (max-width: 768px) {\n      padding: 0px !important;\n      margin: 30px;\n      height: 200px;\n      text-align: center;\n      width: 250px !important;\n      border-top: 2px solid #adbb0c;\n    }\n    h2 {\n      font-size: 28.5px;\n      height: 55px;\n      line-height: 1;\n      letter-spacing: -0.86px;\n      text-align: left;\n      color: #828282;\n    }\n    > p {\n      font-size: 12.5px;\n      width: 237px;\n      height: 35px;\n      line-height: 1.42;\n      letter-spacing: -0.47px;\n      text-align: left;\n      color: #828282;\n    }\n  }\n\n  span:hover {\n    cursor: pointer;\n  }\n  span {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 5px;\n    border: solid 1px #b8b8b8;\n    p {\n      line-height: 1;\n      color: #a4a4a4;\n      font-size: 15.5px;\n    }\n    img:first-child {\n      width: 16px;\n      height: 19px;\n    }\n  }\n  .arrow {\n    width: 7px;\n    height: 13px;\n  }\n  .box__first {\n    width: 307px;\n    > span {\n      width: 106px;\n      height: 33px;\n    }\n  }\n\n  .box__second {\n    height: 190px;\n    text-align: left;\n    width: 316px;\n    border-left: 1px solid #c2c2c2;\n    border-right: 1px solid #c2c2c2;\n    padding-left: 48px;\n    @media (max-width: 768px) {\n      border-left: none;\n      border-right: none;\n      height: 240px;\n    }\n    > p {\n      width: 237px;\n      height: 35px;\n    }\n    div {\n      display: flex;\n      flex-direction: row;\n    }\n    span:first-child {\n      width: 95px;\n      height: 33px;\n      margin-right: 14px;\n    }\n    span:last-child {\n      width: 125px;\n      height: 33px;\n    }\n  }\n  .box__third {\n    width: 275px;\n    padding-left: 39px;\n    span {\n      width: 126px;\n      height: 33px;\n    }\n  }\n"]))),bn=function(){return Object(_.jsxs)(pn,{children:[Object(_.jsxs)("div",{className:"box__first",children:[Object(_.jsx)("h2",{children:"Running out of products?"}),Object(_.jsx)("p",{children:"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}),Object(_.jsxs)("span",{children:[Object(_.jsx)("p",{children:"Buy now"}),Object(_.jsx)("img",{className:"arrow",src:xn,alt:""})]})]}),Object(_.jsxs)("div",{className:"box__second",children:[Object(_.jsx)("h2",{children:"Bod\u2022e Trainer in your pocket"}),Object(_.jsx)("p",{children:"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("span",{children:[Object(_.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAYAAAClI5npAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAldJREFUeNq8mEFIVFEUht9ME4kggZU2DrVqpxC2aBWIGrpwUZHQEIqWEqK0ChNXuijdBAW2EV2IDU4hFmJJCyMyFIRkwJhFC3MhKkaFpmKWmv+Bc+XyvG/mhe+dH77FvHl3zv/uu/fccyYQi8Usj5UD6kEUZIJzqW4OeRg4AJpAB8jia8l0g7wycAT0gSrb9U/pBgY9MtBqCE4alTBA77jdcP0reClhoJlfgV13wLaEgeuGay3gnZvBh12Ep8EJ7fMyaHQz9V4Z+AcSYA68BXGw/j8/kMrAGXANXAS5YIv39WswAXb5iS9oY/JALSjmxUkG18AXMAaGwWY6AxHwCNzg5KKrAtwHC6Cfp/oHuASqwWXDGIu/rwPfQBvoZnNWwJaKy8ELcNzyV0OcN37rM1AGRsBRy3/RzvkDbqptGOYFJBGctMHrYX8NdIJsoeC/eLanVCKKOORxv1SrgisDUYdU6odoC7+yp+JSwad/bDoLCoSCr4IPJgNhIQOzYMdkICRk4K/TcbwrZCDsZGBJyMBZ3vIHDMwL7oJqk4HPggaofDtlNzAuaIDS/SDI0A28t2RVBN6Ak8oAFReTwiZKuLpqUMdxvyUv6iHvKgNxTpXS6glqZ/QT4eBUS/bqjQkZ+C5o4AGV8LqBFXBPKPg06DK1Zs+4aPBT1F/cVidj0NDp1PicnikbzqRqTn+CK7wwvdYAeOqmNUtw5TqaolqmdusjWOTUms+d0TGH+2mr31IdkZvekCrX8+AhuMr/+8xy89KnT6Mm6qgqudAt5GI3yU/93BRkT4ABAIHScRdQXl7HAAAAAElFTkSuQmCC",alt:""}),Object(_.jsx)("p",{children:"iOS"}),Object(_.jsx)("img",{className:"arrow",src:xn,alt:""})]}),Object(_.jsxs)("span",{children:[Object(_.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABItJREFUeNrEmctvFEcQxudlL2BjGxLHcWKQMQgQIm+JROQl5YLggMQlh+SWvyh/hJVzlEuUK0LiAAKLJJCQ4NgBDATW8fqxXnt3dqiyfh0Vo5ndWWdWtPRpxzPTPV9XV31V3fZnZ2e9Am1AMChoCza94s0X7OF3W9Dq1iEoOPBewbjgVUHUAyGdyEHBKxDr2ooOroOexkI6y0cF+00ITggSwW+C9bIINQQbglHBScEUS+gzhrN0LGhCXDHEO6ssWWkWWhH8gZU+EcxATonsE4S8px9dg9g6fa4I5rlfGiGd6aTgbcEFwbv4RGzIWGsGkLsOsWUsXAqh1wRnBOcFZwXHjYOGGe+7Z7qk7xMQrwt+ENxgKXdNaEzwoeAilqkwaAyxyYw++uxvwQKk1Kkvmaj+tZO1uhE6CZlzgjdYgu+ItK9zCKlTzwm+F+wXfIPvfYn1NiDVkw5px2nBR4LPBIe4v0UIhx0mExq06eMs9YXgHXRpoBcL6VK9J/gALXHtmOArc503pn50hOujKV06TdTdxpqFCGlUHcEZm0SOtgOCj83S1HP6TxqrtrCS6zPB8s+jT4UIJYSthus9TJ6wxBXe2cyaIUI4aN7bMvf/RY8S/s40b2SSZ8yslchNQQ2rhCaCEkO6W2J1vwP81kk7f2IdvTfM+OrszYilGcFvVrHIKmv8V8r52t7uWmj6b0GsgXMfR+2V6EqE4B2A0CIzfwDJ0RQhf5eEEuNPDdR7DIc/i/gqoUcRUTPCms+xzlpmnBK8BdnAK6etMdl75MdjSMEMS/YwQt6dFdRn3iTKzvDyuFde00D4Gb95jNbN4DbapoLUkgwiihUjbmU2V6qEJhLt94eCVNG0RSRtmyy9XSKhFbDBuNtGFnYsGOQ4YGKKrKREQnbcrLGToAOZxOtfS1L4T1YC7+W0JG/CL4vQ/94Gld38HJH1g9QD34S732dCWd8Jgw4J0e8TKb+DpXYsNGRuVEyd0+oDKTdeTE6L2QS8EPa2yFIxfCqoIlhByX7mxtOxn4F1s6dbUin/ySTQa4K7RrjCkgk5v9n5OFYaI69pVlhUQt+SvyJeekDSC/tAyBWEbUjcJvNPUAnU9OHljI7TFE17S3boCmMO4ir3ge+EMm/2bZNCymyxQTujgMslVDe7z/UuKcBVgQ2uk5xqMSHT67gPU1m+667jGQ4+jAMe4XoAswemAqxS2Ln93LiRkhZFWYuJ3RFcFdzCiQsTqlHZxXzwFPXvFA5YweRLbK8X6HeUfduQOQlZ5L37bKGv4sj1Xgg1iYINNnRK7nPBp0hEBbK6K/mRLZPH1ltJHTa6dpczojmW62mns6JOhw1NzLrMwIfYIsfGJ5Y5qrtjjv5WU2Mogd+x5FoR5SwaHelcFJg04GVsJG2qSIqcwPZCyO3R9hmrRvjK/tSZwJ7UKewwzj7ar3ooKVAzZ5WqpRZoDZMII6NVVXMy4hJkzZByJ7DVPN3ZLaEaJ6oaMf9ARiPvl5Se1HhnwUTqPH+XdujpZl41elLnQ0vei/9q2ESFnS7p9ROIFnLq5wIMAK5LW02eMg2bAAAAAElFTkSuQmCC",alt:""}),Object(_.jsx)("p",{children:"Android"}),Object(_.jsx)("img",{className:"arrow",src:xn,alt:""})]})]})]}),Object(_.jsxs)("div",{className:"box__third",children:[Object(_.jsx)("h2",{children:"Frequently Asked Questions"}),Object(_.jsx)("p",{children:"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}),Object(_.jsxs)("span",{children:[Object(_.jsx)("p",{children:"Read FAQs"}),Object(_.jsx)("img",{className:"arrow",src:xn,alt:""})]})]})]})},hn=Object(k.a)(u||(u=Object(N.a)(["\n* {\n  margin: 0;\n  \n}\n\n\n  html, body {\n  \n    overflow-x: hidden;  \n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  position: relative;\n  background-color: #f9f9f9;\n}\n"]))),jn=k.b.div(O||(O=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));var mn=function(){return Object(_.jsxs)(jn,{className:"App",children:[Object(_.jsx)(hn,{}),Object(_.jsx)(J,{}),Object(_.jsx)(on,{}),Object(_.jsx)(bn,{})]})};y.a.render(Object(_.jsx)(w.a.StrictMode,{children:Object(_.jsx)(mn,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.63adb66e.chunk.js.map