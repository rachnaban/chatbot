(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{11:function(e,a,t){e.exports=t(22)},16:function(e,a,t){},17:function(e,a,t){},21:function(e,a,t){e.exports=t.p+"static/media/tone.fedc1eda.mp3"},22:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(6),i=t.n(n),s=(t(16),t(17),t(7)),l=t.n(s),c=t(1);var g=function(e){var a=e.triggerNextStep,t=(e.onClick,Object(o.useState)(!1)),n=Object(c.a)(t,2),i=n[0],s=(n[1],Object(o.useState)(!1)),l=Object(c.a)(s,2),g=(l[0],l[1]),u=Object(o.useState)(!1),d=Object(c.a)(u,2),m=(d[0],d[1]),h=Object(o.useState)(!1),y=Object(c.a)(h,2),p=(y[0],y[1]),v=Object(o.useCallback)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){return e.every((function(e){return!(e.deviceId&&e.label)}))})).then((function(e){if(console.log({shouldAskForMediaPermissions:e}),e)return navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(e){return e.getTracks().forEach((function(e){return e.stop()}))})).catch((function(e){throw console.log("Permission denied",e),new Error(e)}))})).then((function(e){m(!0),a({trigger:"14",value:"Okay!"})})).catch((function(e){var t=e||{},o=t.message,r=t.code,n=t.name;console.log({code:r,name:n,message:o}),o&&o.indexOf("NotFoundError")>-1?p(!0):g(!0),a({trigger:"15",value:"Okay!"})}))}),[i]);return r.a.createElement("button",{onClick:v},"Okay!")},u=function(){return r.a.createElement(l.a,{headerTitle:"BSWH",customDelay:2e3,steps:[{id:"1",message:"Hey there, I'm BSWHbot! \ud83d\ude04",trigger:"2"},{id:"2",message:"I've been asked to make sure your system is ready for a Doxy.me call. Shall we get started?",trigger:"3"},{id:"3",options:[{value:!0,label:"Yes, please",trigger:"4"},{value:!1,label:"No, thanks",trigger:"end-message"}]},{id:"4",message:"Alrighty, let's start by testing your speakers. Click Play!",trigger:"6"},{id:"end-message",message:"Okay, see you!",end:!0},{id:"6",options:[{value:!0,label:"Play",trigger:"audio"}]},{id:"audio",component:r.a.createElement(r.a.Fragment,null,r.a.createElement("iframe",{src:t(21),allow:"autoplay",style:{display:"none"},id:"iframeAudio"})),asMessage:!0,trigger:"7"},{id:"7",message:"Do you hear the sound I'm playing?",trigger:"8"},{id:"8",options:[{value:!0,label:"Yes",trigger:"9"},{value:!1,label:"No",trigger:"end-message"}]},{id:"9",message:"Super \ud83d\ude0a! That means you will hear your provider.?",trigger:"10"},{id:"10",message:"Okay, now let's check your microphone and webcam.?",trigger:"11"},{id:"11",options:[{value:!0,label:"Okay!",trigger:"12"}]},{id:"12",message:"I'll need your permission to use your microphone and webcam. When prompted, click Allow. \ud83d\ude4f",trigger:"13"},{id:"13",component:r.a.createElement(g,null),asMessage:!0,waitAction:!0},{id:"14",message:"Ok great, it looks like we can now access your microphone and camera!",trigger:"18"},{id:"15",message:"Whoa, you denied access to your microphone and webcam!",trigger:"16"},{id:"16",message:"In order for your microphone and webcam to work, you need to allow access.",trigger:"17"},{id:"17",options:[{value:!0,label:"Try Again!",trigger:"10"}]},{id:"18",message:"Say something into your microphone?\ud83c\udf99\ufe0f",trigger:"19"},{id:"19",message:"Woohoo, I hear you loud and clear! \ud83d\udce2\ud83e\udd2a",trigger:"20"},{id:"20",message:"Ok, time for the webcam! Do you see a video feed of yourself?",trigger:"video"},{id:"video",component:r.a.createElement(r.a.Fragment,null),asMessage:!1,trigger:"21"},{id:"21",options:[{value:!0,label:"Yes",trigger:"22"},{value:!1,label:"No",trigger:"end-message"}]},{id:"22",message:"Alright, you're all set for a great call! \ud83c\udf89\ud83e\udd29"}]})};var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.4ae2ff9c.chunk.js.map