(this["webpackJsonpgithub-repos-search"]=this["webpackJsonpgithub-repos-search"]||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/dcard_logo.2ef7b509.svg"},38:function(e,a,t){e.exports=t(50)},43:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(12),c=t.n(r),l=(t(43),t(25)),i=t(69),u=t(72),s=t(73),d=t(76),h=t(71),m=t(31),b=t.n(m),g=Object(i.a)((function(e){var a=e,t=a.custom.navigationBar;return{root:{height:a.navigationBar.height,background:t.backgroundColor,color:t.color,boxSizing:"border-box",display:"flex",justifyContent:"center"},container:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",margin:"auto",boxSizing:"border-box",width:1280,maxWidth:1280},logo:function(e){return{display:"block",height:28,padding:e.matches?"0 16px":0}},button:{color:t.color}}})),f=function(e){var a=e.isDarkMode,t=e.handleChangeTheme,n=Object(h.a)("(min-width: 768px)"),r=g({matches:n}),c=a?u.a:s.a;return o.a.createElement("div",{className:r.root},o.a.createElement("div",{className:r.container},o.a.createElement("img",{src:b.a,className:r.logo,alt:"dcard logo"}),o.a.createElement(d.a,{className:r.button,"aria-label":"theme change",onClick:t},o.a.createElement(c,null))))},p=function(e){var a=e.isDarkMode,t=e.handleChangeTheme;return o.a.createElement(f,{isDarkMode:a,handleChangeTheme:t})},x=t(78),v=t(74),C=t(77),O=t(33),j=t.n(O),E=Object(i.a)((function(e){return Object(x.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:700,borderRadius:4},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}})})),k=function(e){var a=e.handleOnChange,t=E();return o.a.createElement(v.a,{component:"form",className:t.root},o.a.createElement(d.a,{disabled:!0,className:t.iconButton,"aria-label":"search"},o.a.createElement(j.a,null)),o.a.createElement(C.a,{className:t.input,placeholder:"Github repos search",inputProps:{"aria-label":"Github repos search"},onChange:a}))},w=Object(i.a)((function(){return{root:{height:100,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 20px"}}})),y=function(e){var a=e.handleOnChange,t=w();return o.a.createElement("div",{className:t.root},o.a.createElement(k,{handleOnChange:a}))},N=function(){return o.a.createElement("div",null,"SearchResult")},B=Object(i.a)((function(e){var a=e.custom.mainContent;return{root:{background:a.backgroundColor,color:a.color,flex:"1 1 auto"}}})),S=function(){var e=B(),a=Object(n.useState)(""),t=Object(l.a)(a,2),r=t[0],c=t[1],i=Object(n.useCallback)((function(e){c(e.target.value)}),[]);return console.log("queryString: ",r),o.a.createElement("div",{className:e.root},o.a.createElement(y,{handleOnChange:i}),o.a.createElement(N,null))},D=Object(i.a)((function(){return{root:{display:"flex",flexDirection:"column",height:"100vh"}}})),M=function(e){var a=e.isDarkMode,t=e.handleChangeTheme,n=D();return o.a.createElement("div",{className:n.root},o.a.createElement(p,{isDarkMode:a,handleChangeTheme:t}),o.a.createElement(S,null))},T=t(75),I=t(10),A=t(34),W={navigationBar:{height:48},color:{}},z={custom:{navigationBar:{backgroundColor:"#3b3b3b",color:"#fff"},mainContent:{backgroundColor:"#181818",color:"#fff"},border:{default:"1px solid #fff3"},boxShadow:{default:"0 1px 6px rgba(255,255,255,0.2)"}}},G={custom:{navigationBar:{backgroundColor:"#016AA6",color:"#fff"},mainContent:{backgroundColor:"#00324E",color:"#fff"},border:{default:"1px solid #01588A"},boxShadow:{default:"0 1px 6px rgba(32,33,36,.28)"}}},J=Object(A.a)(Object(I.a)(Object(I.a)(Object(I.a)({},W),z),{},{palette:{type:"dark"}})),R=Object(A.a)(Object(I.a)(Object(I.a)(Object(I.a)({},W),G),{},{palette:{}})),q=function(){var e=[R,J],a=Object(n.useState)(0),t=Object(l.a)(a,2),r=t[0],c=t[1],i=Object(n.useCallback)((function(){c((function(e){return(e+1)%2}))}),[]);return o.a.createElement(T.a,{theme:e[r]},o.a.createElement(M,{handleChangeTheme:i,isDarkMode:1===r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.ac80c75b.chunk.js.map