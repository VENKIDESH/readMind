(this.webpackJsonpmind_read=this.webpackJsonpmind_read||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(3),s=n.n(a),o=(n(9),n(10),n(4)),c=n(0);var d={width:"55px",height:"55px",background:"linear-gradient(90deg, rgba(0, 65, 106, 0.089) 0%, rgba(228, 229, 230, 0.089) 100%)",borderRadius:"20px",boxShadow:"inset 6.66667px -6.66667px 6.66667px rgba(87, 112, 128, 0.089), inset -6.66667px 6.66667px 6.66667px rgba(255, 255, 255, 0.089)",backdropFilter:"blur(14.9333px)",display:"flex",justifyContent:"center",alignItems:"center"},b=function(e){for(var t=Math.floor(16*Math.random()),n=0,r=e.number;r;)n+=r%10,r=Math.floor(r/10);return console.log(e.ansRand),Object(c.jsxs)("div",{style:d,children:[e.number," -  ",Object(c.jsx)("b",{children:9==n?e.ansRand:["\u03b1","\u03b2","\u03b4","\u03b5","\u03b6","\u03b7","\u03b8","\u03bb","\u03bc","\u03be","\u03c0","\u03c1","\u03c3","\u03c6","\u03c8","\u03c9"][t]})]})};var x=function(e){for(var t=[],n=1;n<101;n++)t.push(n);return Object(c.jsx)("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto auto auto auto auto auto auto auto auto auto",height:"650px",alignContent:"space-evenly"},children:t.map((function(t){return Object(c.jsx)(b,{number:t,ansRand:e.answer})}))})};var l=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontSize:"200px"},children:e.answer}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{onClick:function(){return window.location.reload(!1)},style:{cursor:"pointer"},children:"Try again"})]})};var j={background:"#eee",width:"544px",height:"585px",marginTop:"25px",padding:"1px"},p={marginTop:"10px",marginLeft:"10px",width:"524px",height:"565px",padding:"1px",background:"linear-gradient(90deg, #9796F0 10%, #FBC7D4 100%)"},u=function(e){return Object(c.jsx)("div",{style:j,children:Object(c.jsxs)("div",{style:p,children:[Object(c.jsx)("div",{style:{fontSize:"25px",fontWeight:"bold",marginTop:"10px"},children:"Game Instructions"}),Object(c.jsxs)("div",{style:{marginTop:"20px",fontSize:"20px",color:"#303030"},children:["1. Choose any two digit number between 1 and 100.",Object(c.jsx)("br",{})," ",Object(c.jsx)("i",{children:"Example: 25"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"2. Add the digits of that number.",Object(c.jsx)("br",{}),Object(c.jsx)("i",{children:"Example:2+5=7"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"3. Subtract the sum from the number chosen.",Object(c.jsx)("br",{}),Object(c.jsx)("i",{children:"Example:25-7=18"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"4.Look for symbol near the previous result(ie 18)",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"5.Visualize that symbol in your mind."]}),Object(c.jsx)("div",{style:{width:"150px",height:"150px",borderRadius:"100%",background:"linear-gradient(90deg, rgba(229, 93, 135, 0.1) 0%, rgba(95, 195, 228, 0.1) 100%)",marginTop:"20px",marginLeft:"200px",alignContent:"center",padding:"1px",boxShadow:"inset 2.46667px -2.46667px 2.46667px rgba(136, 121, 152, 0.4), inset -2.46667px 2.46667px 2.46667px rgba(255, 255, 255, 0.4)"},children:Object(c.jsxs)("div",{onClick:e.ansPageHandler(),style:{marginTop:"45px",fontSize:"25px",fontFamily:"sans-serif",background:"-webkit-linear-gradient(90deg, #E74C3C, #000000)",webkitBackgroundClip:"text",cursor:"pointer",webkitTextFillColor:"transparent"},children:[Object(c.jsx)("b",{children:"CLICK"}),Object(c.jsx)("br",{}),"HERE"]})})]})})};var g=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),i=n[0],a=n[1],s=["\u03b1","\u03b2","\u03b4","\u03b5","\u03b6","\u03b7","\u03b8","\u03bb","\u03bc","\u03be","\u03c0","\u03c1","\u03c3","\u03c6","\u03c8","\u03c9"][e.ansRand],d=function(){a(!i),console.log(i)};return i?Object(c.jsx)("div",{children:Object(c.jsx)(l,{ansPageHandler:function(){return d},answer:s})}):Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("div",{style:{width:"835px",marginLeft:"90px"},children:Object(c.jsx)(x,{answer:s})}),Object(c.jsx)("div",{children:Object(c.jsx)(u,{ansPageHandler:function(){return d}})})]})};var h={fontSize:"80px",fontWeight:"bold",background:"-webkit-linear-gradient(90deg, #000000, #E74C3C)",webkitBackgroundClip:"text",webkitTextFillColor:"transparent",textShadow:"-6px 6px 4px rgba(0, 0, 0, 0.25)"},O=function(){var e=Math.floor(16*Math.random());return Object(c.jsx)("div",{style:{background:"linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)",height:"100vh"},children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{style:h,children:"READ YOUR MIND"}),Object(c.jsx)(g,{ansRand:e})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.4bfe5501.chunk.js.map