(this["webpackJsonpam-77.github.io"]=this["webpackJsonpam-77.github.io"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.0f4a76c9.svg"},23:function(e,t,a){e.exports=a.p+"static/media/mein-foto.f63bed32.jpg"},27:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=a(16),i=a(9),s=a(10),m=a(8),u=a(11),p=a(12),f=a(13),h=a(15),d=a(1),E=a(45),b=a(44),g=a(22),v=a.n(g),y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.preloader,t=this.refs.logo;this.props.tl.from(t,.75,{delay:1,opacity:0,y:77}).to(t,.75,{delay:.5,opacity:0,y:-77}).to(e,0,{delay:1,css:{display:"none"}}).play()}},{key:"render",value:function(){return r.a.createElement("div",{ref:"preloader",className:"preloader"},r.a.createElement("div",{ref:"logo",className:"logo-container"},r.a.createElement("img",{src:v.a,alt:"AM-77 Logo"})))}}]),t}(n.Component),_=a(23),N=a.n(_),j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=[this.refs.first_name,this.refs.last_name,this.refs.title,this.refs.mein_foto],t=[this.refs.about_title,this.refs.about_content1,this.refs.about_content2,this.refs.about_content3,this.refs.about_content4],a=[this.refs.contact_title,this.refs.contact_content],n=this.refs.contact_links.children;this.props.tl.from([].concat(e,t,a),1.25,{delay:-1,ease:d.b.easeOut,opacity:0,y:50,stagger:{amount:.75}}).to(n,1.5,{delay:-1,ease:d.b.easeOut,y:0,opacity:1,stagger:{amount:.5}}).play()}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(y,{tl:this.props.tl}),r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"name"},r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("span",{ref:"first_name",className:"first"},"Mohamed Amine")," ",r.a.createElement("span",{ref:"last_name",className:"last"},"Griche")),r.a.createElement("h4",null,r.a.createElement("span",{ref:"title",className:"title"},"A software engineer who loves Open Sourec,  Linux & JavaScript ",r.a.createElement("span",{className:"heart-emoji","aria-label":"emoji",role:"img"},"\ud83d\udc9b"),"."))),r.a.createElement("div",{ref:"mein_foto",className:"mein-foto"},r.a.createElement("img",{src:N.a,alt:"mien foto"})))),r.a.createElement("div",{className:"about"},r.a.createElement("h2",{className:"title"},r.a.createElement("span",{ref:"about_title"},"About")),r.a.createElement("p",{ref:"about_content1",className:"content"},"Hello, my name is Amine ",r.a.createElement("span",{className:"waving-emoji","aria-label":"emoji",role:"img"},"\ud83d\udc4b")),r.a.createElement("p",{ref:"about_content2",className:"content"},"I am a software engineer from Algeria"),r.a.createElement("p",{ref:"about_content3",className:"content"},"I code, mostly in JavaScript & React"),r.a.createElement("p",{ref:"about_content4",className:"content"},"and sometimes I write about it too, in ",r.a.createElement("a",{href:"https://am77-blog.netlify.app",title:"AM77 Blog"},"my-blog."))),r.a.createElement("div",{className:"contact"},r.a.createElement("h2",{className:"title"},r.a.createElement("span",{ref:"contact_title"},"Reach Me")),r.a.createElement("p",{className:"content"},r.a.createElement("span",{ref:"contact_content"},"Here are some places on the web where you can find me:")),r.a.createElement("div",{ref:"contact_links",className:"links"},r.a.createElement("a",{href:"https://am77-blog.netlify.app",title:"AM77 Blog"},"blog"),r.a.createElement("a",{href:"https://github.com/am-77",title:"AM-77"},"github"),r.a.createElement("a",{href:"https://www.linkedin.com/in/mohamed-amine-griche",title:"mohamed-amine-griche"},"linkedin"),r.a.createElement("a",{href:"https://codepen.io/am-77",title:"AM-77"},"codepen"),r.a.createElement("a",{href:"https://www.npmjs.com/~am-77",title:"AM-77"},"npm"),r.a.createElement("a",{href:"https://dev.to/am77",title:"AM-77"},"dev.to"),r.a.createElement("a",{href:"https://stackoverflow.com/users/10564525",title:"AM-77"},"stackoverflow"),r.a.createElement("a",{href:"https://twitter.com/__AM77__",title:"__AM77__"},"twitter"),r.a.createElement("a",{href:"mailto:amine.griche77@protonmail.ch",title:"amine.griche77@protonmail.ch"},"email"),r.a.createElement("a",{href:"/cv.pdf",title:"resume",target:"_blank"},"resume"))))))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.tl.from(this.refs.work_container,1.2,{delay:-1,opacity:0,ease:d.b.easeOut}).play()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{tl:this.props.tl}),r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"title-line-container"},r.a.createElement("h1",{ref:"work_container",className:"title-line"},"This is the about page"),r.a.createElement(o.b,{to:"/"},"go home."))))}}]),t}(n.Component);function k(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("p",null,"Loading..."))}var O=a(42).Preload,M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onEnter=function(e){h.a.from(e,1,{delay:1,opacity:0})},a.onExit=function(e){h.a.to(e,1,{opacity:0})},a.tl=new d.d,a.loadingIndicator=r.a.createElement(k,null),a.images=["./assets/fonts/Cool-For-The-Momenet.ttf","./assets/images/logo.svg","./assets/images/mein-foto.png"],a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){((new Date).getHours()<7||(new Date).getHours()>18)&&document.body.classList.add("dark"),h.a.to(this.refs.app,0,{css:{visibility:"visible"}})}},{key:"render",value:function(){var e=this;return r.a.createElement(O,{loadingIndicator:this.loadingIndicator,images:this.images},r.a.createElement("div",{className:"app-container",ref:"app"},r.a.createElement(f.a,{render:function(t){var a=t.location;return r.a.createElement(E.a,null,r.a.createElement(b.a,{key:a.key,timeout:1e3,onEnter:e.onEnter,onExit:e.onExit},r.a.createElement(f.c,{location:a},r.a.createElement(f.a,{path:"/",exact:!0},r.a.createElement(j,{tl:e.tl})),r.a.createElement(f.a,{path:"/work"},r.a.createElement(w,{tl:e.tl})))))}})))}}]),t}(n.Component);a(40);c.a.render(r.a.createElement(o.a,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.92e302d2.chunk.js.map