(this.webpackJsonpfrontpeliculas_53844=this.webpackJsonpfrontpeliculas_53844||[]).push([[0],{22:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(24),s=n.n(i),r=n(4),l=n(2),o=(n(22),n(0));function j(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("fieldset",{className:"detalles",children:[Object(o.jsx)("legend",{children:"Actores"}),Object(o.jsx)("ul",{children:e.actores&&e.actores.map((function(e,t){return Object(o.jsxs)("li",{children:[e.nombre," ",e.apellido]},t)}))})]})})}function d(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("fieldset",{className:"detalles",children:[Object(o.jsx)("legend",{children:e.titulo}),Object(o.jsx)("ul",{children:e.datos&&e.datos.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]})})}var u="http://localhost:3000/api";function b(){return JSON.parse(localStorage.getItem("auth")).token}function h(e){return fetch(u+("/peliculas/obtenerPelicula/"+e),{method:"GET",mode:"cors"}).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).catch((function(e){console.log(e)}))}n(33);function O(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("fieldset",{className:"detalles",children:[Object(o.jsx)("legend",{children:e.titulo}),e.datos&&Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Cantidad: ",e.datos.cantidad]},1),Object(o.jsxs)("li",{children:["Ganadas: ",e.datos.ganadas]},2)]})]})})}function x(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(l.h)().id;return Object(c.useEffect)((function(){h(i).then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[i]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"dv-main_detalle",children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Detalle Pel\xedcula"}),Object(o.jsxs)("div",{className:"dv-titulo_detalle",children:[Object(o.jsx)("h1",{children:n.titulo}),Object(o.jsxs)("div",{className:"dv-datos_detalle",children:[Object(o.jsx)("div",{className:"dv-poster_detalle",children:Object(o.jsx)("img",{alt:"P\xf3ster",src:n.poster})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("fieldset",{className:"contDatos",children:[Object(o.jsx)("legend",{children:"A\xf1o"}),Object(o.jsx)("span",{children:n.ano})]}),Object(o.jsxs)("fieldset",{className:"contDatos",children:[Object(o.jsx)("legend",{children:"Rating"}),Object(o.jsx)("span",{children:n.rating})]}),Object(o.jsxs)("fieldset",{className:"contDatos",children:[Object(o.jsx)("legend",{children:"Clasificaci\xf3n"}),Object(o.jsx)("legend",{children:n.clasificacion})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:n.sinopsis})})]})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"....."}),Object(o.jsx)("hr",{}),Object(o.jsxs)("fieldset",{className:"contDatos",children:[Object(o.jsx)("legend",{children:"Detalle"}),Object(o.jsx)(j,{actores:n.actores}),Object(o.jsxs)("div",{className:"dv-general_detalle",children:[Object(o.jsx)(d,{titulo:"G\xe9neros",datos:n.generos}),Object(o.jsx)(d,{titulo:"Idiomas",datos:n.idiomas}),Object(o.jsx)(d,{titulo:"Pa\xedses",datos:n.paises}),Object(o.jsx)(O,{titulo:"Nominaciones",datos:n.nominaciones})]}),Object(o.jsx)(d,{titulo:"Directores",datos:n.directores})]})]}),Object(o.jsx)("div",{className:"dv-button_detalle",children:Object(o.jsx)("button",{type:"button",children:"Regresar"})})]})})}var m=n(26),p=n(27);n(41);function f(e){var t=Object(l.g)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"resumen",onClick:function(n){t.push("/detalle/"+e.pelicula._id)},children:[Object(o.jsx)("div",{className:"resumen-img",children:Object(o.jsx)("img",{src:e.pelicula.poster,alt:"P\xf3ster"})}),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:e.pelicula.titulo})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:e.pelicula.sinopsis})}),Object(o.jsx)("div",{children:Object(o.jsxs)("span",{children:[Object(o.jsx)(m.a,{icon:p.a}),e.pelicula.rating]})})]},e.pelicula._id)})}n(42);function g(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(r.a)(i,2),l=s[0],j=s[1];return Object(c.useEffect)((function(){var e;n.length>=3?(e=n,fetch(u+"/peliculas/obtenerPeliculasPorTitulo/"+e,{method:"GET",mode:"cors"}).then((function(e){return 200===e.status?e.json():Promise.reject(e.statusText)})).catch((function(e){console.log(e)}))).then((function(e){j(e.data)})).catch((function(e){console.log(e)})):j([])}),[n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"busqueda",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Buscar Pel\xedcula"}),Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",name:"busqueda",id:"busqueda",onChange:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.value;a(t)}})})]})}),Object(o.jsx)("div",{className:"busqueda",children:Object(o.jsxs)("fieldset",{className:"listado",children:[Object(o.jsx)("legend",{children:"Listado Pel\xedculas"}),Object(o.jsx)("div",{children:Object(o.jsxs)("span",{children:["Mostrando resultados para: ",n]})}),Object(o.jsx)("div",{className:"resultados",children:l&&l.length>0&&l.map((function(e,t){return Object(o.jsx)(f,{pelicula:e},t.toString())}))})]})})]})}n(43);function v(e){var t=Object(l.g)();function n(n){n.preventDefault(),"btnIniciar"===n.target.name?t.push("/login"):(localStorage.removeItem("auth"),e.autenticado(null),t.push("/"))}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{className:"header",children:e.usuario?Object(o.jsx)("button",{type:"button",className:"btn btn-primary",onClick:n,name:"btnCerrar",children:"Cerrar Sesi\xf3n"}):Object(o.jsx)("button",{type:"button",className:"btn btn-primary",onClick:n,name:"btnIniciar",children:"Iniciar Sesi\xf3n"})}),e.children]})}n(44);function C(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(""),j=Object(r.a)(s,2),d=j[0],b=j[1],h=Object(l.g)();function O(e){var t=e.target,n=t.name,c=t.value;"usuario"===n?i(c):b(c)}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"text-center mt-5",children:Object(o.jsxs)("form",{className:"inicioSesion",children:[Object(o.jsx)("img",{className:"imagen",src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-peliculas-2021-1640687462.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"}),Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{className:"h3 mb-3 font-weight-normal",children:"Iniciar Sesi\xf3n"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"sr-only",htmlFor:"usuario",children:"Usuario: "}),Object(o.jsx)("input",{className:"form-control",type:"text",name:"usuario",id:"usuario",onChange:O,value:a})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"sr-only",htmlFor:"clave",children:"Contrase\xf1a: "}),Object(o.jsx)("input",{className:"form-control",type:"password",name:"clave",id:"clave",onChange:O,value:d})]}),Object(o.jsx)("div",{className:"mt-3",children:Object(o.jsx)("button",{clas:!0,type:"button",className:"btn btn-lg btn-primary btn-block",onClick:function(t){t.preventDefault(),function(e,t){return fetch(u+"/usuarios/iniciarSesion?usuario="+e+"&clave="+t,{method:"GET",mode:"cors"}).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).catch((function(e){console.log(e)}))}(a,d).then((function(t){if(t.token){var n={nombre:t.datos.nombre,roles:t.datos.roles,token:t.token};localStorage.setItem("auth",JSON.stringify(n)),e.autenticado(n),h.push("/administrar")}}))},children:"Iniciar Sesi\xf3n"})})]})]})})})}var S=n(12),y=n(10),N=n(16);function k(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"nombre-"+e.index,children:"Nombre: "}),Object(o.jsx)("input",{type:"text",id:"nombre-"+e.index,name:"nombre-"+e.index,value:e.actor.nombre,onChange:e.onChange})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"apellido-"+e.index,children:"Apellido: "}),Object(o.jsx)("input",{type:"text",id:"apellido-"+e.index,name:"apellido-"+e.index,value:e.actor.apellido,onChange:e.onChange})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",name:"btnEliminar",onClick:e.onClick,value:e.index,children:"Eliminar"})})]})})}function P(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],i=n[1];function s(t){t.preventDefault();var n=t.target,c=n.name,s=n.value;"btnAdicionar"===c?(e.actualizarDatos((function(e){return[].concat(Object(N.a)(e),[a])})),i("")):e.actualizarDatos((function(e){return e.filter((function(e,t){return t!==parseInt(s)}))}))}return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:e.titulo}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:e.id,children:[e.titulo," : "]}),Object(o.jsx)("input",{type:"text",id:e.id,name:e.id,value:a,onChange:function(e){var t=e.target.value;i(t)}}),Object(o.jsxs)("button",{type:"button",onClick:s,name:"btnAdicionar",children:["Adicionar ",e.titulo]})]}),Object(o.jsx)("div",{children:e.datos&&e.datos.map((function(e,t){return Object(o.jsx)("button",{type:"button",value:t,name:"btnEliminar",onClick:s,children:e},t)}))})]})})}function F(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],i=n[1];function s(t){var n=t.target,c=n.name,a=n.value;switch(c){case"btnEditar":e.id(a);break;case"btnEliminar":(function(e){var t="/peliculas/eliminarPelicula?id="+e,n={method:"DELETE",headers:{authorization:"Bearer "+b()},mode:"cors"};return fetch(u+t,n).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).catch((function(e){console.log(e)}))})(a).then((function(e){e.datos.acknowledged?i((function(e){return e.filter((function(e){return e._id!==a}))})):alert("Error al eliminar pel\xedcula")})).catch((function(e){console.log(e)}))}}return Object(c.useEffect)((function(){(function(){var e={method:"GET",mode:"cors",headers:{authorization:"Bearer "+b()}};return fetch(u+"/peliculas/obtenerPeliculas",e).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).catch((function(e){console.log(e)}))})().then((function(e){i(e.data)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Pel\xedcula"}),Object(o.jsx)("th",{children:"A\xf1o"}),Object(o.jsx)("th",{children:"Rating"}),Object(o.jsx)("th",{children:"Clasificaci\xf3n"}),Object(o.jsx)("th",{children:"Acciones"})]})}),Object(o.jsx)("tbody",{children:a&&a.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.titulo}),Object(o.jsx)("td",{children:e.ano}),Object(o.jsx)("td",{children:e.rating}),Object(o.jsx)("td",{children:e.clasificacion}),Object(o.jsxs)("td",{children:[Object(o.jsx)("button",{type:"button",name:"btnEditar",onClick:s,value:e._id,children:"Editar"}),Object(o.jsx)("button",{type:"button",name:"btnEliminar",onClick:s,value:e._id,children:"Eliminar"})]})]},e._id)}))})]})})}function E(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(r.a)(i,2),l=s[0],j=s[1],d=Object(c.useState)(""),O=Object(r.a)(d,2),x=O[0],m=O[1],p=Object(c.useState)(""),f=Object(r.a)(p,2),g=f[0],v=f[1],C=Object(c.useState)(""),E=Object(r.a)(C,2),D=E[0],T=E[1],I=Object(c.useState)(""),z=Object(r.a)(I,2),_=z[0],A=z[1],w=Object(c.useState)(""),G=Object(r.a)(w,2),B=G[0],J=G[1],q=Object(c.useState)(""),L=Object(r.a)(q,2),R=L[0],M=L[1],U=Object(c.useState)([]),H=Object(r.a)(U,2),K=H[0],Q=H[1],V=Object(c.useState)([]),W=Object(r.a)(V,2),X=W[0],Y=W[1],Z=Object(c.useState)([]),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)([]),ce=Object(r.a)(ne,2),ae=ce[0],ie=ce[1],se=Object(c.useState)([]),re=Object(r.a)(se,2),le=re[0],oe=re[1],je=Object(c.useState)({cantidad:0,ganadas:0}),de=Object(r.a)(je,2),ue=de[0],be=de[1];function he(e){var t=e.target,n=t.name,c=t.value;switch(n){case"titulo":j(c);break;case"ano":m(c);break;case"rating":v(c);break;case"poster":T(c);break;case"clasificacion":A(c);break;case"tipo":J(c);break;case"sinopsis":M(c)}}function Oe(e){var t=e.target,n=t.name,c=t.value;if("btnEliminar"===n)Q((function(e){return e.filter((function(e,t){return t!==parseInt(c)}))}));else{var a=[].concat(Object(N.a)(K),[{nombre:"",apellido:""}]);Q(a)}}function xe(e){var t=parseInt(e.target.name.split("-").pop()),n=e.target.name.split("-").shift(),c=e.target.value;Q((function(e){return e.map((function(e,a){return a===t?Object(y.a)(Object(y.a)({},e),{},Object(S.a)({},n,c)):Object(y.a)({},e)}))}))}function me(e){var t=e.target,n=t.name,c=t.value;be((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(S.a)({},n,c))}))}return Object(c.useEffect)((function(){n&&h(n).then((function(e){var t=e.data;j(t.titulo),m(t.ano),v(t.rating),T(t.poster),A(t.clasificacion),J(t.tipo),M(t.sinopsis),Q(t.actores),Y(t.generos),te(t.idiomas),ie(t.paises),oe(t.directores),be(t.nominaciones)}))}),[n]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Administrar Pel\xedculas"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Datos Pel\xedcula"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"titulo",children:"Titulo: "}),Object(o.jsx)("input",{type:"text",id:"titulo",name:"titulo",value:l,onChange:he})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"ano",children:"A\xf1o: "}),Object(o.jsx)("input",{type:"text",id:"ano",name:"ano",value:x,onChange:he})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"rating",children:"Rating: "}),Object(o.jsx)("input",{type:"text",id:"rating",name:"rating",value:g,onChange:he})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"clasificacion",children:"Clasificaci\xf3n: "}),Object(o.jsx)("input",{type:"text",id:"clasificacion",name:"clasificacion",value:_,onChange:he})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"poster",children:"P\xf3ster: "}),Object(o.jsx)("input",{type:"text",id:"poster",name:"poster",value:D,onChange:he})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"tipo",children:"Tipo: "}),Object(o.jsx)("input",{type:"text",id:"tipo",name:"tipo",value:B,onChange:he})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"sinopsis",children:"Sinopsis: "}),Object(o.jsx)("textarea",{id:"sinopsis",name:"sinopsis",value:R,onChange:he})]})]}),Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Actores"}),Object(o.jsx)("button",{type:"button",onClick:Oe,children:"Adicionar Actor"}),K&&K.map((function(e,t){return Object(o.jsx)(k,{index:t,actor:e,onChange:xe,onClick:Oe},t)}))]}),Object(o.jsx)(P,{titulo:"G\xe9neros",id:"genero",datos:X,actualizarDatos:Y}),Object(o.jsx)(P,{titulo:"Idiomas",id:"idiomas",datos:ee,actualizarDatos:te}),Object(o.jsx)(P,{titulo:"Pa\xedses",id:"paises",datos:ae,actualizarDatos:ie}),Object(o.jsx)(P,{titulo:"Directores",id:"directores",datos:le,actualizarDatos:oe}),Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Nominaciones"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"cantidad",children:"Cantidad: "}),Object(o.jsx)("input",{type:"text",id:"cantidad",name:"cantidad",value:ue.cantidad,onChange:me})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"ganadas",children:"Ganadas: "}),Object(o.jsx)("input",{type:"text",id:"ganadas",name:"ganadas",value:ue.ganadas,onChange:me})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",onClick:function(e){e.preventDefault();var t={titulo:l,ano:x,rating:g,clasificacion:_,poster:D,tipo:B,sinopsis:R,actores:K,generos:X,paises:ae,idiomas:ee,directores:le,nominaciones:ue};n?function(e,t){var n="/peliculas/actualizarPelicula/"+e,c={method:"PUT",mode:"cors",headers:{authorization:"Bearer "+b(),"content-type":"application/json"},body:JSON.stringify(t)};return fetch(u+n,c).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).catch((function(e){console.log(e)}))}(n,t).then((function(e){e.datos.acknowledged&&(alert("Pel\xedcula actualizada correctamente..."),J(""),j(""),m(""),v(""),A(""),T(""),M(""),Q([]),be({cantidad:0,ganadas:0}),ie([]),te([]),Y([]),oe([]),a(""))})).catch((function(e){console.log(e)})):function(e){var t={method:"POST",mode:"cors",headers:{authorization:"Bearer "+b(),"content-type":"application/json"},body:JSON.stringify(e)};return fetch(u+"/peliculas/crearPelicula",t).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).catch((function(e){console.log(e)}))}(t).then((function(e){e.resultado&&"string"===typeof e.resultado&&(alert("Pel\xedcula creada correctamente..."),J(""),j(""),m(""),v(""),A(""),T(""),M(""),Q([]),be({cantidad:0,ganadas:0}),ie([]),te([]),Y([]),oe([]))})).catch((function(e){console.log(e)}))},children:"Guardar"})})]}),Object(o.jsx)(F,{id:a})]})})})}function D(){var e=JSON.parse(localStorage.getItem("auth")),t=Object(c.useState)(e),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(o.jsx)(l.d,{children:Object(o.jsx)("div",{children:Object(o.jsxs)(v,{usuario:a,autenticado:i,children:[Object(o.jsx)(l.b,{exact:!0,path:"/",component:g}),Object(o.jsx)(l.b,{path:"/detalle/:id",component:x}),Object(o.jsx)(l.b,{path:"/administrar",children:a?Object(o.jsx)(E,{}):Object(o.jsx)(l.a,{to:"/login"})}),Object(o.jsx)(l.b,{path:"/login",children:Object(o.jsx)(C,{autenticado:i})})]})})})}var T=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(D,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},z=n(19);n(45),n(46);s.a.render(Object(o.jsx)(z.a,{children:Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(T,{})})}),document.getElementById("root")),I()}},[[47,1,2]]]);
//# sourceMappingURL=main.0b0f71c0.chunk.js.map