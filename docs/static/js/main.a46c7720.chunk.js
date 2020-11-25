(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s(15),r=s.n(n),i=s(10),l=(s(23),s.p+"static/media/headerLogo.de13d484.png"),o=(s(24),function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("img",{src:l,alt:"Rick and Morty logo",className:"header__logo"})})}),j=(s(25),s(26),s(9)),u=function(e){return Object(a.jsx)(j.b,{to:"/character/".concat(e.user.id),children:Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("img",{className:"card__img",src:e.user.image,alt:"Foto de ".concat(e.user.name),title:"Foto de ".concat(e.user.name)}),Object(a.jsx)("h2",{className:"card__name",children:e.user.name}),Object(a.jsx)("h4",{className:"card__species",children:e.user.species})]})})},d=s.p+"static/media/notFoundCharacter.0750d412.png",m=function(e){var t=e.users.map((function(e){return Object(a.jsx)(u,{user:e},e.id)}));return Object(a.jsxs)("section",{children:[Object(a.jsx)("ul",{className:"cards",children:t}),Object(a.jsx)("div",{className:"container",children:0===e.users.length&&Object(a.jsxs)("div",{className:"urlNotFound__container",children:[Object(a.jsx)("p",{className:"urlNotFound__text",children:"There is no result for this search, please try again! "}),Object(a.jsx)("img",{src:d,alt:"Sorry",className:"notFound__img"})]})})]})},h=(s(35),function(e){return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"form__Text",children:[Object(a.jsx)("label",{className:"form__label display block",htmlFor:"name"}),Object(a.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",placeholder:"What character are you looking for? ",value:e.nameFilter,onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})]})}),b=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,species:e.species,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))},O=(s(36),function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"modal__Container",children:Object(a.jsxs)("div",{className:"detail__infoContainer",children:[Object(a.jsx)("img",{src:e.user.image,alt:e.user.name,className:"detail__image"}),Object(a.jsx)("h1",{className:"detail__name",children:e.user.name}),Object(a.jsxs)("p",{className:"character__details",children:["Status: ",Object(a.jsx)("span",{className:"answer__details",children:"Alive"===e.user.status?"Alive \ud83e\udd3a":"Dead"===e.user.status?"\ud83d\udc80":"Unknown \ud83d\udc7b"})]}),Object(a.jsxs)("p",{className:"character__details",children:["Specie: ",Object(a.jsx)("span",{className:"answer__details",children:e.user.species})]}),Object(a.jsxs)("p",{className:"character__details",children:["Origin: ",Object(a.jsx)("span",{className:"answer__details",children:e.user.origin})]}),Object(a.jsxs)("p",{className:"character__details",children:["Episodes: ",Object(a.jsx)("span",{className:"answer__details",children:e.user.episodes})]}),Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)("input",{className:"btn__goBack",type:"button",value:"Go back"})})]})})})}),x=(s(37),s(40)),p=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(x.a,{animation:"border",role:"status",className:"loading"})})},_=s(3),f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),u=l[0],x=l[1],f=Object(c.useState)(!1),g=Object(i.a)(f,2),N=g[0],v=g[1];Object(c.useEffect)((function(){v(!0),b().then((function(e){n(e),v(!1)}))}),[]);var F=s.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));F.sort((function(e,t){return e.name.localeCompare(t.name)}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[!0===N?Object(a.jsx)(p,{}):null,Object(a.jsx)(o,{}),Object(a.jsxs)(_.c,{children:[Object(a.jsxs)(_.a,{exact:!0,path:"/",children:[!1===N?Object(a.jsx)(h,{handleFilter:function(e){"name"===e.key&&x(e.value)},nameFilter:u}):null,!1===N?Object(a.jsx)(m,{users:F}):null]}),Object(a.jsx)(_.a,{path:"/character/:characterId",component:function(e){var t=parseInt(e.match.params.characterId),c=s.find((function(e){return t===e.id}));return null==c?Object(a.jsx)(j.b,{to:"/",children:Object(a.jsxs)("div",{className:"notfound__Container1",children:[Object(a.jsx)("p",{className:"notFound__text1",children:"There is no result for this search. Please click here to go back! "}),Object(a.jsx)("img",{src:d,alt:"Sorry",className:"notFound__img1"})]})}):Object(a.jsx)(O,{user:c})}})]})]})})};r.a.render(Object(a.jsx)(j.a,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a46c7720.chunk.js.map