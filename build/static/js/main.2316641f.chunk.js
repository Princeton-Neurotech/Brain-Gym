(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(89)},50:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(42),c=n.n(l),i=(n(50),n(1)),s=n(2),r=n(4),u=n(3),m=n(5),h=(n(25),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={settings:!0,notifs:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setClicked",value:function(){this.setState({settings:!0,notifs:!1})}},{key:"notifsClicked",value:function(){this.setState({settings:!1,notifs:!0})}},{key:"render",value:function(){var e=this.state.settings?"green":"white",t=this.state.notifs?"green":"white",n=o.a.createElement("button",{id:"Settings",className:e,onClick:this.setClicked.bind(this),autoFocus:!0},"Settings"),a=o.a.createElement("button",{id:"Notifications",className:t,onClick:this.notifsClicked.bind(this)},"Notifications");return o.a.createElement("section",{className:"NavWrap"},n,a,o.a.createElement("span",{className:"counter counter-lg"},"9"))}}]),t}(o.a.Component)),p=n(19),d=n(20),b=["Select an Option","First Option","Second Option","Third Option"],f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).getInputValue=function(e){n.props.parentCallback(e.target.value)},n.state={value:"Select an Option"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-group fontFamiliesSection"},o.a.createElement("label",{htmlFor:"fontFamilies"},"Font Family"),o.a.createElement("select",{value:this.state.value,onChange:this.getInputValue,className:"form-control"},b.map(function(e){return o.a.createElement("option",{value:e,key:e},e)})))}}]),t}(o.a.Component),g=(n(15),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).getInputValue=function(e){n.props.parentCallback(e.target.value)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-group fontFamiliesSection"},o.a.createElement("label",{htmlFor:"fontFamilies"},"Font Size"),o.a.createElement("input",{type:"number",title:"Rate",id:"lineSpace",className:"form-control",min:"1",step:"1",max:"400",onChange:this.getInputValue}))}}]),t}(o.a.Component)),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).getInputValue=function(e){n.props.parentCallback(e.target.value)},n.state={LineSpace:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-group fontFamiliesSection"},o.a.createElement("label",{htmlFor:"lineSpace"},"Line Spacing"),o.a.createElement("input",{type:"number",title:"Rate",id:"lineSpace",className:"form-control",min:"1.0",step:"0.05",max:"2.0",onChange:this.getInputValue}))}}]),t}(o.a.Component),k=n(9),v=n.n(k),O=n(10),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleCallbackThree=function(e){console.log(e),n.setState({LineSpace:e})},n.handleCallbackTwo=function(e){console.log(e),n.setState({FontSize:e})},n.handleCallbackOne=function(e){console.log(e),n.setState({FontFamily:e})},n.setOpen=function(){n.setState({open:!n.state.open})},n.sendFont=function(){var e=document.getElementById("fontSettingsList"),t=Object(O.a)(e);console.log("hi"),t&&v.a.post("http://127.0.0.1:8080/api/fonts/",{LineSpace:n.state.LineSpace,FontSize:n.state.FontSize,FontFamily:n.state.FontFamily}).then(function(e){console.log(e),console.log(e.data)})},n.state={LineSpace:"",FontSize:12,FontFamily:"",open:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"fontSettings"},o.a.createElement(d.a,{id:"fontSettingsBtn",onClick:this.setOpen,"aria-controls":"fontSettingsList","aria-expanded":this.state.open},"Font Settings"),o.a.createElement(p.a,{in:this.state.open},o.a.createElement("form",{id:"fontSettingsList"},o.a.createElement(f,{parentCallback:this.handleCallbackOne}),o.a.createElement(g,{parentCallback:this.handleCallbackTwo}),o.a.createElement(C,{parentCallback:this.handleCallbackThree}),o.a.createElement("button",{className:"btn btn-success",onClick:this.sendFont},"Submit"))))}}]),t}(o.a.Component),j=(n(84),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).getInputValue=function(e){n.props.parentCallback(e.target.value)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-group wordCountSection"},o.a.createElement("label",{htmlFor:"",className:"wordCountTitle"},"Word Count Threshold"),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"",className:"wordCount"},"How many total words you want to write"),o.a.createElement("input",{type:"number",title:"Rate",id:"wordCount",className:"form-control",min:"0",step:"1",onChange:this.getInputValue}))}}]),t}(o.a.Component)),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).getInputValue=function(e){n.props.parentCallback(e.target.value)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-group pageCountSection"},o.a.createElement("label",{htmlFor:"",className:"pageCountTitle"},"Page Count Threshold"),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"",className:"pageCount"},"How many total pages you want to write"),o.a.createElement("input",{type:"number",title:"Rate",id:"pageCount",className:"form-control",min:"0",step:"1",onChange:this.getInputValue}))}}]),t}(o.a.Component),y=n(21),w=n.n(y),F=n(22),N=n.n(F);window.Swal=N.a;var T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).setRoadblock=function(){setInterval(n.checkRoadblock(),1e3)},n.setCompletion=function(){setInterval(n.checkCompletion(),5e3)},n.sendThr=function(){setInterval(function(){n.checkRoadblock()},1e3),setInterval(function(){n.sendML()},3e5);var e=document.getElementById("fontSettingsList");Object(O.a)(e)&&v.a.post("http://127.0.0.1:3000/api/thr/",{wordCount:n.state.wordCount,pageCount:n.state.pageCount}).then(function(e){console.log(e),console.log(e.data.wordcount),N.a.fire({title:"We expect you to take "+e.data.wordcount/60+" minutes",text:"",icon:"OK",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"OK"})}),setInterval(function(){n.checkCompletion()},5e3)},n.sendML=function(){v.a.get("http://127.0.0.1:3000/api/ml/")},n.handleCallbackOne=function(e){console.log(e),n.state.wordCount=e},n.handleCallbackTwo=function(e){console.log(e),n.state.pageCount=e},n.state={isRoadblock:!1,isCompletion:!1,wordCount:0,pageCount:0,open:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showRoadblockNotifications",value:function(){this.n.supported()&&this.n.show()}},{key:"showCompNotifications",value:function(){this.a.supported()&&this.a.show()}},{key:"handleRoadClick",value:function(e){this.n.close(e.target.tag)}},{key:"handleCompClick",value:function(e){this.a.close(e.target.tag)}},{key:"checkRoadblock",value:function(){var e=this;v.a.get("http://127.0.0.1:3000/api/roadblock/").then(function(t){"True"==t.data[0]&&(e.showRoadblockNotifications(),e.state.isRoadblock=!0)})}},{key:"checkCompletion",value:function(){var e=this;v.a.get("http://127.0.0.1:3000/api/completion/").then(function(t){"True"==t.data[0]&&(e.showCompNotifications(),e.state.isCompletion=!0)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"thresholds"},o.a.createElement(w.a,{onRef:function(t){return e.n=t},title:"You have approached a roadblock!",body:"You have approached a roadblock!",onClick:function(t){return e.handleRoadClick(t)}}),o.a.createElement(w.a,{onRef:function(t){return e.a=t},title:"You have completed your goal!",body:"You have completed your goal!",onClick:function(t){return e.handleCompClick(t)}}),o.a.createElement(d.a,{id:"thresholdsBtn",onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"threshholdsList","aria-expanded":this.state.open},"Word and Page Count"),o.a.createElement(p.a,{in:this.state.open},o.a.createElement("div",{id:"threshholdsList"},o.a.createElement(j,{parentCallback:this.handleCallbackOne}),o.a.createElement(S,{parentCallback:this.handleCallbackTwo}),o.a.createElement("button",{className:"btn btn-success",onClick:this.sendThr},"submit"))))}}]),t}(o.a.Component),I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).getInputValue=function(e){n.setState({Time:e.target.value})},n.sendTime=function(){var e=document.getElementById("totalTimeSection");Object(O.a)(e)&&v.a.post("http://127.0.0.1:8080/api/time/",{totalTime:n.state.Time}).then(function(e){console.log(e),console.log(e.data)})},n.state={Time:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{id:"totalTimeSection"},o.a.createElement("label",{htmlFor:"",className:"totalTimeTitle"},"Total Estimated Time (in minutes)"),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"",className:"totalTime"},"Time estimated to complete assignment"),o.a.createElement("input",{type:"number",title:"Rate",id:"totalTime",className:"form-control",min:"0",max:"6000",step:"1",onChange:this.getInputValue}),o.a.createElement("button",{className:"btn btn-success",onClick:this.sendTime},"Submit")))}}]),t}(o.a.Component);var R=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(I,null),o.a.createElement(E,null),o.a.createElement(T,null))},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null))),L()}},[[43,1,2]]]);
//# sourceMappingURL=main.2316641f.chunk.js.map