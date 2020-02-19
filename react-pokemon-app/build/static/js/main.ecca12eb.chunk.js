(this["webpackJsonpreact-pokemons-app"]=this["webpackJsonpreact-pokemons-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=(a(24),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getUTCFullYear())}),s=function(e){var t;switch(e){case"Feu":t="red lighten-1";break;case"Eau":t="blue lighten-1";break;case"Plante":t="green lighten-1";break;case"Insecte":t="brown lighten-1";break;case"Normal":t="grey lighten-3";break;case"Vol":t="blue lighten-3";break;case"Poison":t="deep-purple accent-1";break;case"F\xe9e":t="pink lighten-4";break;case"Psy":t="deep-purple darken-2";break;case"Electrik":t="lime accent-1";break;case"Combat":t="deep-orange";break;default:t="grey"}return"chip ".concat(t)},l=a(8),i=function(e){var t=e.pokemon,a=e.bordelColor,i=void 0===a?"#009668":a,m=Object(n.useState)(),u=Object(r.a)(m,2),p=u[0],d=u[1],h=Object(l.f)();return c.a.createElement("div",{className:"col s6 m4",onClick:function(){return e=t.id,void h.push("/pokemons/".concat(e));var e},onMouseEnter:function(){d(i)},onMouseLeave:function(){d("#f5f5f5")}},c.a.createElement("div",{className:"card horizontal",style:{borderColor:p}},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.picture,alt:t.name})),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.name),c.a.createElement("p",null,c.a.createElement("small",null,o(t.created))),t.types.map((function(e){return c.a.createElement("span",{key:e,className:s(e)},e)}))))))},m=a(11),u=a(20),p=[{id:1,name:"Bulbizarre",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",types:["Plante","Poison"],created:new Date},{id:2,name:"Salam\xe8che",hp:28,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",types:["Feu"],created:new Date},{id:3,name:"Carapuce",hp:21,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",types:["Eau"],created:new Date},{id:4,name:"Aspicot",hp:16,cp:2,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",types:["Insecte","Poison"],created:new Date},{id:5,name:"Roucool",hp:30,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",types:["Normal","Vol"],created:new Date},{id:6,name:"Rattata",hp:18,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",types:["Normal"],created:new Date},{id:7,name:"Piafabec",hp:14,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",types:["Normal","Vol"],created:new Date},{id:8,name:"Abo",hp:16,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",types:["Poison"],created:new Date},{id:9,name:"Pikachu",hp:21,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",types:["Electrik"],created:new Date},{id:10,name:"Sabelette",hp:19,cp:3,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",types:["Normal"],created:new Date},{id:11,name:"M\xe9lof\xe9e",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",types:["F\xe9e"],created:new Date},{id:12,name:"Groupix",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",types:["Feu"],created:new Date}],d=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,null,[{key:"getPokemons",value:function(){var e=this;return this.isDev?fetch("http://localhost:3001/pokemons").then((function(e){return e.json()})).catch((function(t){return e.handleError(t)})):new Promise((function(t){t(e.pokemons)}))}},{key:"getPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e)).then((function(e){return e.json()})).then((function(e){return t.isEmpty(e)?null:e})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.find((function(t){return e===t.id})))}))}},{key:"updatePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id,c=t.pokemons.findIndex((function(e){return e.id===n}));t.pokemons[c]=e,a(e)}))}},{key:"deletePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id;t.pokemons=t.pokemons.filter((function(e){return e.id!==n})),a({})}))}},{key:"addPokemon",value:function(e){var t=this;return e.created=new Date(e.created),this.isDev?fetch("http://localhost:3001/pokemons",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){t.pokemons.push(e),a(e)}))}},{key:"searchPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons?q=".concat(e)).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.filter((function(t){return t.name.includes(e)})))}))}},{key:"isEmpty",value:function(e){return 0===Object.keys(e).length}},{key:"handleError",value:function(e){console.error(e)}}]),e}();d.pokemons=p,d.isDev=!1;var h=a(4),v=function(){var e=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){d.getPokemons().then((function(e){return c(e)}))}),[]),a}();return c.a.createElement("div",null,c.a.createElement("h1",{className:"center"},"Pokedex"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.map((function(e){return c.a.createElement(i,{key:e.id,pokemon:e,bordelColor:"green"})}))),c.a.createElement(h.b,{className:"btn-floating btn-large waves-effect waves-light red z-depth-3",style:{position:"fixed",bottom:"25px",right:"25px"},to:"/pokemon/add"},c.a.createElement("i",{className:"material-icons"},"add"))))},f=function(e){var t=e.match,a=Object(n.useState)(null),l=Object(r.a)(a,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){d.getPokemon(+t.params.id).then((function(e){return m(e)}))}),[t.params.id]),c.a.createElement("div",null,i?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("h2",{className:"header center"},i.name),c.a.createElement("div",{className:"card hoverable"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:i.picture,alt:i.name,style:{width:"250px",margin:"0 auto"}}),c.a.createElement(h.b,{to:"/pokemons/edit/".concat(i.id),className:"btn btn-floating halfway-fab waves-effect waves-light"},c.a.createElement("i",{className:"material-icons"},"edit"))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("table",{className:"bordered striped"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Nom"),c.a.createElement("td",null,c.a.createElement("strong",null,i.name))),c.a.createElement("tr",null,c.a.createElement("td",null,"Points de vie"),c.a.createElement("td",null,c.a.createElement("strong",null,i.hp))),c.a.createElement("tr",null,c.a.createElement("td",null,"D\xe9g\xe2ts"),c.a.createElement("td",null,c.a.createElement("strong",null,i.cp))),c.a.createElement("tr",null,c.a.createElement("td",null,"Types"),c.a.createElement("td",null,i.types.map((function(e){return c.a.createElement("span",{key:e,className:s(e)},e)})))),c.a.createElement("tr",null,c.a.createElement("td",null,"Date de cr\xe9ation"),c.a.createElement("td",null,o(i.created)))))),c.a.createElement("div",{className:"card-action"},c.a.createElement(h.b,{to:"/"},"Retour")))))):c.a.createElement("h4",{className:"center"},"Aucun pok\xe9mon \xe0 afficher !"))},E=function(){return c.a.createElement("div",{className:"center"},c.a.createElement("img",{src:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",alt:"Page non trouv\xe9e"}),c.a.createElement("h1",null,"Hey, cette page n'existe pas !"),c.a.createElement(h.b,{to:"/",className:"waves-effect waves-teal btn-flat"},"Retourner \xe0 l'accueil"))},k=a(6),g=a(12),b=function(e){var t=e.pokemon,a=e.isEditForm,o=Object(n.useState)({picture:{value:t.picture},name:{value:t.name,isValid:!0},hp:{value:t.hp,isValid:!0},cp:{value:t.cp,isValid:!0},types:{value:t.types,isValid:!0}}),i=Object(r.a)(o,2),m=i[0],u=i[1],p=Object(l.f)(),h=function(e){return m.types.value.includes(e)},v=function(e){var t=e.target.name,a=e.target.value,n=Object(g.a)({},t,{value:a});u(Object(k.a)({},m,{},n))},f=function(){return!a},E=function(){var e=m;if(f()){if(m.picture.value.startsWith("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/")&&m.picture.value.endsWith(".png")){var t={value:m.picture.value,error:"",isValid:!0};e=Object(k.a)({},m,{},{picture:t})}else{var a={value:m.picture.value,error:"l'url n est pas valide!",isValid:!1};e=Object(k.a)({},m,{},{picture:a})}}if(/^[a-zA-Z\xe0\xe9\xe8 ]{3,25}$/.test(m.name.value)){var n={value:m.name.value,error:"",isValid:!0};e=Object(k.a)({},e,{},{name:n})}else{var c={value:m.name.value,error:"Le nom du pok\xe9mon est requis.",isValid:!1};e=Object(k.a)({},e,{},{name:c})}if(/^[0-9]{1,3}$/.test(m.hp.value)){var r={value:m.hp.value,error:"",isValid:!0};e=Object(k.a)({},e,{},{hp:r})}else{var o={value:m.hp.value,error:"Les points de vie du pok\xe9mon sont compris entre 0 et 999.",isValid:!1};e=Object(k.a)({},e,{},{hp:o})}if(/^[0-9]{1,2}$/.test(m.cp.value)){var s={value:m.cp.value,error:"",isValid:!0};e=Object(k.a)({},e,{},{cp:s})}else{var l={value:m.cp.value,error:"Les d\xe9gats du pok\xe9mons sont compris entre 0 et 99.",isValid:!1};e=Object(k.a)({},e,{},{cp:l})}return u(e),!0===(e.name.isValid&&e.hp.isValid&&e.cp.isValid)},b=function(e){return(1!==m.types.value.length||!h(e))&&!(m.types.value.length>=3&&!h(e))},y=function(){d.addPokemon(t).then((function(){return p.push("/pokemons")}))},N=function(){d.updatePokemon(t).then((function(){return p.push("/pokemons/".concat(t.id))}))};return c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),E()&&(t.picture=m.picture.value,t.name=m.name.value,t.hp=m.hp.value,t.cp=m.cp.value,t.types=m.types.value,a?N():y())}(e)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("div",{className:"card hoverable"},a&&c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.picture,alt:t.name,style:{width:"250px",margin:"0 auto"}}),c.a.createElement("span",{className:"btn-floating halfway-fab waves-effect waves-light"},c.a.createElement("i",{onClick:function(){d.deletePokemon(t).then((function(){return p.push("/pokemons")}))},className:"material-icons"},"delete"))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},f&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"picture"},"Image"),c.a.createElement("input",{id:"picture",name:"picture",type:"text",className:"form-control",value:m.picture.value,onChange:function(e){return v(e)}}),m.picture.error&&c.a.createElement("div",{className:"card-panel red accent-1"},m.picture.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Nom"),c.a.createElement("input",{id:"name",name:"name",type:"text",className:"form-control",value:m.name.value,onChange:function(e){return v(e)}}),m.name.error&&c.a.createElement("div",{className:"card-panel red accent-1"},m.name.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"hp"},"Point de vie"),c.a.createElement("input",{id:"hp",name:"hp",type:"number",className:"form-control",value:m.hp.value,onChange:function(e){return v(e)}}),m.hp.error&&c.a.createElement("div",{className:"card-panel red accent-1"},m.hp.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"cp"},"D\xe9g\xe2ts"),c.a.createElement("input",{id:"cp",name:"cp",type:"number",className:"form-control",value:m.cp.value,onChange:function(e){return v(e)}}),m.cp.error&&c.a.createElement("div",{className:"card-panel red accent-1"},m.cp.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Types"),["Plante","Feu","Eau","Insecte","Normal","Electrik","Poison","Fe\u0301e","Vol","Combat","Psy"].map((function(e){return c.a.createElement("div",{key:e,style:{marginBottom:"10px"}},c.a.createElement("label",null,c.a.createElement("input",{id:e,type:"checkbox",className:"filled-in",value:e,checked:h(e),onChange:function(t){return function(e,t){var a;t.target.checked?a={value:m.types.value.concat([e])}:a={value:m.types.value.filter((function(t){return t!==e}))};u(Object(k.a)({},m,{},{types:a}))}(e,t)},disabled:!b(e)}),c.a.createElement("span",null,c.a.createElement("p",{className:s(e)},e))))})))),c.a.createElement("div",{className:"card-action center"},c.a.createElement("button",{type:"submit",className:"btn"},"Valider")))))))},y=function(e){var t=e.match,a=Object(n.useState)(null),o=Object(r.a)(a,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){d.getPokemon(+t.params.id).then((function(e){return l(e)}))}),[t.params.id]),c.a.createElement("div",null,s?c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"header center"},"\xc9diter ",s.name),c.a.createElement(b,{pokemon:s,isEditForm:!0})):c.a.createElement("h4",{className:"center"},"Aucun pok\xe9mon \xe0 afficher !"))},N=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["Normal"],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new Date;Object(m.a)(this,e),this.id=void 0,this.hp=void 0,this.cp=void 0,this.name=void 0,this.picture=void 0,this.types=void 0,this.created=void 0,this.id=t,this.hp=a,this.cp=n,this.name=c,this.picture=r,this.types=o,this.created=s},w=function(){var e=Object(n.useState)((new Date).getTime()),t=Object(r.a)(e,1)[0],a=Object(n.useState)(new N(t)),o=Object(r.a)(a,1)[0];return c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"header center"},"Ajouter un pokemon "),c.a.createElement(b,{pokemon:o,isEditForm:!1}))},j=function(){return c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper teal"},c.a.createElement(h.b,{to:"/",className:"brand-logo center"},"Pok\xe9dex"))),c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:v}),c.a.createElement(l.a,{exact:!0,path:"/pokemons",component:v}),c.a.createElement(l.a,{exact:!0,path:"/pokemon/add",component:w}),c.a.createElement(l.a,{exact:!0,path:"/pokemons/edit/:id",component:y}),c.a.createElement(l.a,{path:"/pokemons/:id",component:f}),c.a.createElement(l.a,{component:E}))))},O=a(21);a.n(O).a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ecca12eb.chunk.js.map