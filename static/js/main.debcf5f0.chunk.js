(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(47)},33:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),l=n(14),i=n.n(l),r=(n(33),n(15)),c=n(16),s=n(17),d=n(25),m=n(18),h=n(26),u=n(5),p=(n(34),n(35),n(19)),g=n(24),b=n(8),v=n.n(b);function y(){var e=Object(r.a)(["\n          {\n            listing(id: ","){ \n              name \n              price_day \n              url \n              description\n              images{ \n                url \n              }\n            }\n          }\n        "]);return y=function(){return e},e}var f=new g.a({uri:"https://mattb.omni.co/graphql"}),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={link:"",name:"",description:"",image:"",price:24,code:"",style:1,codeStyle1:'\x3c!-- Omni code snippet begins here--\x3e\n      \n<div class="omni-rental-box"><style>.omni-rental-box{ font-family: Arial, Helvetica, sans-serif;margin-top: 2%;padding: 1%;width: 36%;border: none;}.omni-rental-item-name{padding-top: 2%;font-size: 48px;font-weight: 700;color: #000;font-family: Arial, Helvetica, sans-serif;line-height: 1.0em;padding-left: 2%;}.omni-rental-image{height: 300px;width: 400px;border-color: #fff;border-width: 1px;border-style: solid;background-size: cover;border-color: #E8E8E8;border-width: 1px;border-style: solid;border-radius: 10px;background-image: url('.concat(n.image,');}.omni-rental-link{text-decoration: none;}.omni-rental-description{font-size: 18px;color: #000;padding-left: 2%;opacity: 0.5;}</style><a class="omni-rental-link" href=').concat(n.link,' target="_blank"><div class="omni-rental-image"></div><h1 class="omni-rental-item-name">').concat(n.name,'</h1><p class="omni-rental-description">').concat(n.description,"</p></a></div>\n\n\x3c!-- Omni code snippet ends here--\x3e\n      "),codeStyle2:'\x3c!-- Omni code snippet begins here--\x3e\n\n<style>.omni-rental-button{padding-top:1%;padding-bottom:1%;background-color:#F2F4F5;color:white;font-size:1.6vw;width: 250px;border-radius: 8px;border-width: 1px;border-style: solid;border-color: #E8E8E8; color: #000;font-weight: 300;display: inline-block;}.logo{padding-right: 5%;height: 2vw;width: 2vw;vertical-align: bottom;}</style><a class="omni-rental-link" href='.concat(n.link,' target="_blank"><button class="omni-rental-button"><img class="logo" src="https://raw.githubusercontent.com/vdthatte/embed-styles/master/logo.png">Rent on Omni</button></a></div>\n\n\x3c!-- Omni code snippet ends here--\x3e\n      '),codeStyle3:'\x3c!-- Omni code snippet begins here--\x3e\n\n<div class="omni-rental-box"><style>.omni-rental-image{height: 250px;width: 250px;}.omni-rental-item-name{padding-top: 2%;font-size: 2vw;font-weight: 700;color: #000;}.omni-rental-button{ padding-top:4%;padding-bottom:4%;background-color:#E81F24;color: white;font-size:16px;width:80%;border-radius:8px;border-color: transparent;border-style:solid;} .omni-rental-box{ border-width: 1px; border-color: transparent;border-style:solid;width:300px;padding-bottom:2%;top:0;margin-top:5%;margin-left:5%;background-size:cover;border-color:#E8E8E8;border-width: 1px;border-style: solid;border-radius: 10px;} .omni-rental-link{text-decoration: none;}</style><a class="omni-rental-link" href='.concat(n.link,' target="_blank"><center><h1 class="omni-rental-item-name">').concat(n.name,'</h1></center><img class="omni-rental-image"  src=').concat(n.image,'></img><center><button class="omni-rental-button">Rent for ').concat(n.price,"/day</button></center></a></div>\n\n\x3c!-- Omni code snippet ends here--\x3e\n      ")},n.handleChange=n.handleChange.bind(Object(u.a)(Object(u.a)(n))),n.getURLData=n.getURLData.bind(Object(u.a)(Object(u.a)(n))),n.handleFocus=n.handleFocus.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getURLData",value:function(e){var t=this,n='"'+e+'"';f.query({query:v()(y(),n)}).then(function(e){var n=e.data.listing;n.images.length>0&&t.setState({name:n.name,price:n.price_day,image:n.images[0].url,description:n.description,code:t.state.codeStyle1})}).catch(function(e){return console.error(e)})}},{key:"componentDidMount",value:function(){""==this.state.link&&this.getURLData("LAGBURsRR1mi")}},{key:"handleFocus",value:function(e){e.target.select()}},{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t),"link"==e.target.name?"listings"==e.target.value.split("/")[3]&&this.getURLData(e.target.value.split("/")[4].split("?")[0]):"style"==e.target.name&&(1==e.target.value?this.setState({code:this.state.codeStyle1}):2==e.target.value?this.setState({code:this.state.codeStyle2}):this.setState({code:this.state.codeStyle3}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"logoDiv"},o.a.createElement("center",null,o.a.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M30.291 8.8l.005.01C31.471 11.032 32 13.303 32 16c0 8.836-7.163 16-16 16S0 24.836 0 16 7.163 0 16 0c2.896 0 5.097.487 7.425 1.825a1.307 1.307 0 1 1-1.027 2.403c-.001.003.027.01.026.012A13.447 13.447 0 0 0 16 2.612C8.606 2.612 2.612 8.606 2.612 16S8.606 29.388 16 29.388 29.388 23.394 29.388 16c0-2.144-.5-4.153-1.395-5.95l-.007-.015a1.308 1.308 0 0 1 2.26-1.31c.013.026.03.048.045.075zm-6.605-.15c.346.346.313.852.313 1.283v12.785c0 .077-.008.152-.022.225l-.004.028a1.272 1.272 0 0 1-.157.4 1.292 1.292 0 0 1-.148.2c-.015.018-.027.037-.044.054-.016.017-.036.029-.053.044a1.289 1.289 0 0 1-.601.305l-.028.004a1.291 1.291 0 0 1-.226.022h-.001a1.28 1.28 0 0 1-.233-.022l-.016-.003a1.261 1.261 0 0 1-.21-.062l-.034-.012a1.271 1.271 0 0 1-.182-.096c-.016-.01-.032-.018-.047-.029a1.296 1.296 0 0 1-.161-.131c-.008-.008-.016-.012-.024-.02l-11.24-11.24v9.994c0 .707-.577 1.285-1.284 1.285A1.288 1.288 0 0 1 8 22.379V9.281c0-.076.008-.151.021-.224l.005-.028a1.254 1.254 0 0 1 .157-.4 1.233 1.233 0 0 1 .147-.2c.016-.018.028-.037.045-.054.016-.017.036-.029.053-.044a1.353 1.353 0 0 1 .34-.22c.022-.011.046-.02.07-.029a1.29 1.29 0 0 1 .191-.056l.028-.004a1.258 1.258 0 0 1 .46 0l.016.003c.073.014.143.036.21.062l.034.012c.064.027.124.06.182.096l.047.028a1.3 1.3 0 0 1 .161.132c.008.008.016.012.024.02l5.977 5.977 5.701-5.703c.5-.499 1.317-.499 1.817 0zm4.047-3.05a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0zm-6.4 14.133V12.8l-3.2 3.467 3.2 3.466z",fill:"#32393D","fill-rule":"evenodd"})))),o.a.createElement("div",null,o.a.createElement("div",{class:"input-form"},o.a.createElement("h2",null,"Paste URL of the product you want to embed below"),o.a.createElement("input",{class:"input-box",name:"link",value:this.state.link,placeholder:"https://omni.co/listings/LAGBURsRR1mi?metro=san_francisco",onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",null,"Copy and paste this code into your website"),o.a.createElement("textarea",{rows:"4",class:"code-snippet-box",placeholder:"",value:this.state.code,onChange:this.handleChange,onFocus:this.handleFocus,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"}),o.a.createElement("br",null),o.a.createElement("div",{className:"copyButtonSection"},o.a.createElement(p.CopyToClipboard,{text:this.state.code,onCopy:function(){return e.setState({copied:!0})}},this.state.copied?o.a.createElement("button",{className:"copyButton"},o.a.createElement("span",{style:{color:"red"}},"Copied.")):o.a.createElement("button",{className:"copyButton"},"Copy Code")))),o.a.createElement("center",null,o.a.createElement("div",{class:"change-style-buttons"},o.a.createElement("button",{class:"style-button",onClick:this.handleChange,name:"style",value:1},"In-line"),o.a.createElement("button",{class:"style-button",onClick:this.handleChange,name:"style",value:2},"Button"),o.a.createElement("button",{class:"style-button",onClick:this.handleChange,name:"style",value:3},"Card"))),o.a.createElement("div",{class:"right-section"},1==this.state.style?o.a.createElement("div",{class:"omni-rental-box-1"},o.a.createElement("a",{class:"omni-rental-link-1",href:this.state.link,target:"_blank"},o.a.createElement("div",{class:"omni-rental-image-1",style:{backgroundImage:"url(".concat(this.state.image,")")}}),o.a.createElement("h1",{class:"omni-rental-item-name-1"},this.state.name),o.a.createElement("p",{class:"omni-rental-description-1"},this.state.description))):null,2==this.state.style?o.a.createElement("div",{class:"omni-rental-box-2"},o.a.createElement("center",null,o.a.createElement("a",{class:"omni-rental-link",href:this.state.link,target:"_blank"},o.a.createElement("button",{class:"omni-rental-button"},o.a.createElement("img",{class:"logo",src:"https://raw.githubusercontent.com/vdthatte/embed-styles/master/logo.png"}),"Rent on Omni")))):null,3==this.state.style?o.a.createElement("div",{class:"omni-rental-box-3"},o.a.createElement("a",{class:"omni-rental-link",href:this.state.link,target:"_blank"},o.a.createElement("center",null,o.a.createElement("h1",{class:"omni-rental-item-name-3"},this.state.name)),o.a.createElement("img",{class:"omni-rental-image-3",src:this.state.image}),o.a.createElement("center",null,o.a.createElement("button",{class:"omni-rental-button-3"},"Rent for $",this.state.price,"/day")))):null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.debcf5f0.chunk.js.map