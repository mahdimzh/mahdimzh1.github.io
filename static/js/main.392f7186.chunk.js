(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{20:function(e,s,t){},23:function(e,s,t){},34:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(12),i=t.n(c),n=(t(20),t(4)),r=t(5),l=t(7),j=t(6),d=t(10),o=t(13),h=t.n(o),b=(t(23),t(14)),m=t(1),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,s=this.props.data.name,t=this.props.data.lastname,a=this.props.data.description,c=this.props.data.resumedownload;return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)(b.a,{type:"circle",bg:!0}),Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)("h1",{className:"responsive-headline",children:s}),Object(m.jsx)("h2",{className:"responsive-headline",style:{color:"white"},children:t}),Object(m.jsxs)("h3",{children:[a,"."]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("ul",{className:"social",children:[Object(m.jsxs)("a",{target:"_blank",href:e,className:"button btn project-btn",style:{width:260,margin:5},rel:"noreferrer",children:[Object(m.jsx)("i",{className:"fa fa-book"}),"Open Source Projects"]}),Object(m.jsxs)("a",{target:"_blank",href:c,className:"button btn github-btn",style:{width:260,margin:5},rel:"noreferrer",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})]})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),u=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{target:"_blank",href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsx)("ul",{className:"copyright",children:Object(m.jsx)("li",{children:"\xa9 Copyright Mahdi MohammadiZadeh. All Rights Reserved"})})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:t}),Object(m.jsxs)("div",{className:"row",style:{display:"none"},children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[a,Object(m.jsx)("br",{}),c," ",i,", ",n]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:l})]})]}),Object(m.jsx)("div",{className:"columns download",children:Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:j,className:"button",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),t}(a.Component),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(s){var t=e.getRandomColor(),a="bar-expand "+s.name.toLowerCase(),c=s.level;return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:c,backgroundColor:t},className:a}),Object(m.jsx)("em",{children:s.name})]},s.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:a})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:c})})]})]})]})}}]),t}(a.Component),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.address.country,s=this.props.data.address.street,t=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.email,r="mailto:"+this.props.data.email,l="tel:"+this.props.data.phone,j=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsxs)("div",{className:"row section-head",style:{display:"none"},children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:j})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Address and Phone"}),Object(m.jsxs)("p",{className:"address",children:["Email: ",Object(m.jsx)("a",{href:r,children:n}),Object(m.jsx)("br",{}),"Phone: ",Object(m.jsx)("a",{href:l,children:i}),Object(m.jsx)("br",{}),s," ",Object(m.jsx)("br",{}),e,", ",t,Object(m.jsx)("br",{})," ",a," ",c]})]}),Object(m.jsxs)("div",{className:"widget widget_tweets",style:{display:"none"},children:[Object(m.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(m.jsxs)("ul",{id:"twitter",children:[Object(m.jsxs)("li",{children:[Object(m.jsxs)("span",{children:["This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(m.jsx)("a",{href:"#",children:"http://t.co/CGIrdxIlI3"})]}),Object(m.jsx)("b",{children:Object(m.jsx)("a",{href:"#",children:"2 Days Ago"})})]}),Object(m.jsxs)("li",{children:[Object(m.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(m.jsx)("a",{href:"#",children:"http://t.co/CGIrdxIlI3"})]}),Object(m.jsx)("b",{children:Object(m.jsx)("a",{href:"#",children:"3 Days Ago"})})]})]})]})]}),Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",style:{display:"none"},children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]}),Object(m.jsx)("iframe",{style:{border:0,width:"100%",height:270},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1713.4521408143469!2d51.37274132243104!3d35.69727572910265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00e957ed469b%3A0xb7a26ffaf9a11c2e!2sTehran%20Province%2C%20Tehran%2C%20Oroumiyeh%20St%2C%20Iran!5e0!3m2!1sen!2sus!4v1604680446440!5m2!1sen!2sus",frameborder:"0",allowfullscreen:!0})]})]})]})}}]),t}(a.Component),v=t(15),N=t.n(v),g=0,w=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)(N.a,{alt:e.title,src:s}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},g++)}));return Object(m.jsx)("section",{id:"portfolio",style:{display:"none"},children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),t}(a.Component),y=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=s.call(this,e)).state={resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.resumeData.main}),Object(m.jsx)(p,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.resume}),Object(m.jsx)(w,{data:this.state.resumeData.portfolio}),Object(m.jsx)(f,{data:this.state.resumeData.main}),Object(m.jsx)(u,{data:this.state.resumeData.main})]})}}]),t}(a.Component);i.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.392f7186.chunk.js.map