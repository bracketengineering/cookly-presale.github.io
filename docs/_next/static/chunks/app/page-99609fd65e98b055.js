(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3040:function(e,a,s){Promise.resolve().then(s.bind(s,5337))},8652:function(e,a,s){"use strict";s.d(a,{M:function(){return o},y:function(){return l}});var t=s(7908);let l=async e=>{try{let a=await t.Z.post("https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/presale-signup",e);return console.log(a.data),a.data}catch(e){console.error("Error sending signup:",e)}},o=async e=>{try{let a=await t.Z.post("https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/create-checkout-session",e);return console.log(Object.keys(a.data)),a.data}catch(e){return console.error("Error creating checkout session:",e),e}}},6837:function(e,a,s){"use strict";s.d(a,{Z:function(){return o}});var t=s(7437);s(2265);var l=s(752);function o(){return(0,t.jsx)("footer",{className:"bg-neutral-900 min-h-[20vh] text-white items-center  flex w-full p-4",children:(0,t.jsxs)("div",{className:"max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row w-full justify-between  items-center",children:[(0,t.jsxs)("div",{className:"flex space-y-4 flex-col",children:[(0,t.jsx)("p",{children:"Bristol, UK"}),(0,t.jsx)("p",{children:"contact@bracket.software"}),(0,t.jsx)("p",{children:"\xa9 2024 Cookly. All rights reserved."})]}),(0,t.jsxs)("div",{className:"flex space-y-4 flex-col",children:[(0,t.jsx)("a",{href:"terms.cookly.co.uk/privatePolicy.html",className:"text-white hover:text-gray-400",children:"Privacy Policy"}),(0,t.jsx)("a",{href:"terms.cookly.co.uk/termsOfService.html",className:"text-white hover:text-gray-400",children:"Terms of Use"}),(0,t.jsx)("a",{href:"mailto:contact@bracket.software",className:"text-white hover:text-gray-400",children:"Contact Us"})]}),(0,t.jsxs)("div",{className:"flex mt-2 space-y-4 md:mt-0 flex-col",children:[(0,t.jsx)("a",{href:"#",className:"text-white hover:text-gray-400 mr-2",children:(0,t.jsx)("i",{className:"fab fa-facebook-f"})}),(0,t.jsxs)("a",{href:"https://www.instagram.com/cooklyapp/",className:"text-white  text-xs justify-center items-center hover:text-gray-400",children:[(0,t.jsx)(l.Z,{className:"mr-2"}),"@CooklyApp"]})]})]})})}},5337:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return h}});var t=s(7437),l=s(4232),o=s(1293),n=s(2265),r=s(8652);function i(){let[e,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[o,i]=(0,n.useState)(null),[c,d]=(0,n.useState)({email:"",name:"",message:"",isLifetime:!1}),x=e=>{let{name:a,value:t}=e.target;!0==s&&l(!1),d(e=>({...e,[a]:t}))};return(0,t.jsx)("div",{className:"relative items-center justify-center flex flex-col ",children:(0,t.jsxs)("form",{onSubmit:e=>{a(!0),i(null),e.preventDefault(),(0,r.y)(c).then(()=>{a(!1),l(!0)}).catch(e=>{console.log(e),i(e),a(!1)})},className:"flex flex-col w-full items-center space-y-4  lg:flex px-8",children:[(0,t.jsx)("div",{className:"w-full flex ",children:(0,t.jsx)("input",{type:"text",placeholder:"Name",id:"name",name:"name",value:c.name,onChange:x,required:!0,className:"w-full flex py-3 px-4 border-[1px] border-gray-300"})}),(0,t.jsx)("div",{className:"w-full flex ",children:(0,t.jsx)("input",{type:"email",placeholder:"Email",id:"email",name:"email",value:c.email,onChange:x,required:!0,className:"w-full flex py-3 px-4 border-[1px] border-gray-300"})}),(0,t.jsx)("div",{className:"min-h-4 text-red-500",children:o}),s?(0,t.jsx)("p",{children:"Thank you, we will be in touch soon."}):(0,t.jsx)("button",{type:"submit",className:"bg-[#1edf2b] hover:bg-black text-black justify-around w-full hover:text-white font-bold px-8 py-4 rounded-full flex flex-row",children:(0,t.jsxs)("div",{className:"flex flex-row",children:[e?(0,t.jsx)("svg",{className:"animate-spin h-6 w-6 mr-8 border-b-4 border-white rounded-full "}):null,"Join Early Access"]})})]})})}var c=s(8792),d=s(1233),x=s.n(d);s(7002);var m=s(6837);let u="https://cookly.co.uk";function h(){let[e,a]=(0,n.useState)(null);return(0,n.useEffect)(()=>{x().init({once:!0,disable:"phone",duration:600,easing:"ease-out-sine"}),a(new URLSearchParams(window.location.search).get("referral")),console.log(e)},[]),(0,t.jsxs)("main",{className:"flex flex-col items-center max-w-screen overflow-hidden",children:[(0,t.jsx)("div",{className:"flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]",children:(0,t.jsxs)("div",{className:" max-w-[1200px] flex flex-row justify-between w-full",children:[(0,t.jsxs)(c.default,{href:"/".concat(e?"?referral=".concat(e):""),className:"flex flex-row space-x-2",children:[(0,t.jsx)("img",{src:"".concat(u,"/logo.png"),alt:"f",width:32,height:32,className:"rounded-3xl"}),(0,t.jsx)("text",{className:"text-black font-bold text-2xl",children:"Cookly"})]}),(0,t.jsx)(c.default,{href:"/lifetime".concat(e?"?referral=".concat(e):""),children:(0,t.jsx)(o.Z,{})})]})}),(0,t.jsxs)("div",{className:"relative min-h-[91vh] flex flex-col z-10 w-full items-center space-y-8 justify-around  lg:flex px-8 pt-16 pb-[137px] shadow-lime-500/50 ",children:[(0,t.jsx)("div",{className:"z-[-100] bg-gradient-conic blur-2xl opacity-60 from-green-900 via-[#1edf2b] absolute right-[-100px] lg:right-[10%] translate-y-[-200px] w-[200px] h-[200px]"}),(0,t.jsx)("div",{className:"z-[-100] bg-gradient-conic blur-2xl opacity-35 from-green-900 via-[#1edf2b] absolute left-[-200px] lg:left-32 lg:translate-y-[100px] translate-y-[300px] w-[300px] h-[300px]"}),(0,t.jsxs)("p",{"data-aos":"fade-up","data-aos-delay":"400",className:"uppercase font-mono text-center font-black text-6xl ",children:["Unlock ",(0,t.jsx)("span",{className:"text-transparent outline-text",children:"your"})," potential"]}),(0,t.jsxs)("p",{className:"max-w-[800px] text-center font-mono","data-aos":"fade-up","data-aos-delay":"600",children:[(0,t.jsx)("span",{className:"font-bold ",children:"April 2024"})," is when you begin a nutrition journey tailored uniquely to you — because your health deserves personalisation, not guesswork."]}),(0,t.jsx)(i,{})]}),(0,t.jsx)("img",{src:"".concat(u,"/Weight.png"),alt:"f",width:300,height:250,className:"rounded-2xl shadow-xl lg:mb-32 mb-16 z-[1000]","data-aos":"fade-up","data-aos-delay":"400"}),(0,t.jsxs)("div",{className:"min-h-[60vh] max-w-[1000px] lg:space-x-16 lg:space-y-0 space-y-16 flex-col-reverse space-y-reverse relative flex lg:flex-row z-10 w-full items-center  justify-around  lg:flex px-8 pb-16",children:[(0,t.jsx)("img",{src:"".concat(u,"/Logger.png"),alt:"f",width:250,height:250,className:"rounded-2xl shadow-xl","data-aos":"fade-up","data-aos-delay":"400"}),(0,t.jsxs)("p",{className:" space-y-12",children:[(0,t.jsx)("span",{"data-aos":"fade-up","data-aos-delay":"400",className:"block",children:"Currently, the health and fitness space remains exclusive for the people who already understand it and know what to eat.‍"}),(0,t.jsx)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:"We're developing an app that aims to make gaining muscle, maintaining and losing weight accessible and simpler than ever."}),(0,t.jsxs)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:["You will be able to track your macros with a tracker that constantly updates itself to align with ",(0,t.jsx)("span",{className:"font-bold",children:"YOUR"})," metabolism. And also provide you with food recommendations based on food you like and already eat."]}),(0,t.jsx)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:"Achieving your goals has literally never been easier."}),(0,t.jsxs)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:["We're offering our first users the opportunity to become a ",(0,t.jsx)("span",{className:"font-bold",children:"Founding Member"}),". While the application will be free to download and use certain features, premium features will be accessible only through annual/monthly memberships. By contributing to Cookly as a Founding Member, you are supporting our inception and gaining exclusive access to state-of-the-art nutritional features, forever. By becoming a Founding Member, you will be granted a lifetime membership to all current and future premium features."]})]})]}),(0,t.jsxs)("p",{className:"relative uppercase text-center font-black  text-6xl my-16 w-full",children:[(0,t.jsx)("span",{className:"text-black","data-aos":"fade-in","data-aos-delay":"400","data-aos-duration":"1000",children:"Features"}),(0,t.jsx)("div",{className:"z-[-100] bg-gradient-to-r blur-2xl opacity-30 from-green-900 via-[#1edf2b] absolute right-[-150px] lg:right-[2%] translate-y-[-250px] lg:w-[400px] w-[300px] h-[300px]"})]}),(0,t.jsxs)("div",{className:" relative min-h-[91vh] max-w-[1000px] flex lg:space-x-16 flex-col-reverse lg:flex-row z-10 w-full lg:items-start items-center  justify-around px-8 py-16",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"max-w-[800px] space-y-12","data-aos":"fade-right","data-aos-delay":"400",children:[(0,t.jsx)("span",{className:"block text-3xl font-bold ",children:"Dynamic Macro Tracking"}),(0,t.jsxs)("span",{className:"block",children:["Unlike ordinary calorie trackers, which don't at all consider different metabolic rates, our ",(0,t.jsx)("span",{className:"font-bold",children:"Premium Subscription"})," boasts a dynamic macro goal setter. An advanced algorithm powered by AI that constantly redefines itself for your own metabolism, so that you can be confident you will meet your goals."]})]}),(0,t.jsxs)("p",{className:"max-w-[800px] space-y-12 mt-16","data-aos":"fade-left","data-aos-delay":"400",children:[(0,t.jsx)("span",{className:"block text-3xl font-bold ",children:"Personalised Food Recommendations"}),(0,t.jsx)("span",{className:"block",children:"Currently, the market for health & fitness apps offer no value aside from confusing data, which is left up to you to interpret. For most who don't have pre-requisite nutrition knowledge, this can leave many people overwhelmed and confused as to how they improve. So we're building a food recommendation engine using AI and Machine Learning to recommend you foods, that not only align with your health and fitness goals, but even your personal dietary preferences."})]}),(0,t.jsxs)("p",{className:"max-w-[800px] space-y-6 mt-16","data-aos":"fade-right","data-aos-delay":"400",children:[(0,t.jsx)("span",{className:"block text-3xl font-bold ",children:"Poop Tracker"}),(0,t.jsx)("span",{className:"block",children:"Yep... Exactly what it sounds like."}),(0,t.jsx)("span",{className:"block",children:"You can even track your bowel movements. In the future, we hope to integrate food recommendations that even tailor to how your body reacts to different foods!"})]})]}),(0,t.jsx)("img",{src:"".concat(u,"/Dynamic.png"),alt:"f",width:250,height:250,className:"rounded-2xl shadow-xl mb-16 z-[1000]","data-aos":"fade-up","data-aos-delay":"400"})]}),(0,t.jsx)(m.Z,{})]})}(0,l.default)(()=>Promise.all([s.e(990),s.e(429)]).then(s.bind(s,1429)),{loadableGenerated:{webpack:()=>[1429]},ssr:!1})}},function(e){e.O(0,[992,453,971,69,744],function(){return e(e.s=3040)}),_N_E=e.O()}]);