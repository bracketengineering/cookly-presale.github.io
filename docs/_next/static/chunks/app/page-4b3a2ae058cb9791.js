(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3040:function(e,a,t){Promise.resolve().then(t.bind(t,5337))},8652:function(e,a,t){"use strict";t.d(a,{M:function(){return o},y:function(){return l}});var s=t(7908);let l=async e=>{try{let a=await s.Z.post("https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/presale-signup",e);return console.log(a.data),a.data}catch(e){console.error("Error sending signup:",e)}},o=async e=>{try{let a=await s.Z.post("https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/create-checkout-session",e);return console.log(Object.keys(a.data)),a.data}catch(e){return console.error("Error creating checkout session:",e),e}}},6837:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var s=t(7437);t(2265);var l=t(752);function o(){return(0,s.jsx)("footer",{className:"bg-neutral-900 min-h-[20vh] text-white items-center  flex w-full p-4",children:(0,s.jsxs)("div",{className:"max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row w-full justify-between  items-center",children:[(0,s.jsxs)("div",{className:"flex space-y-4 flex-col",children:[(0,s.jsx)("p",{children:"Bristol, UK"}),(0,s.jsx)("p",{children:"contact@bracket.software"}),(0,s.jsx)("p",{children:"\xa9 2024 Cookly. All rights reserved."})]}),(0,s.jsxs)("div",{className:"flex space-y-4 flex-col",children:[(0,s.jsx)("a",{href:"terms.cookly.co.uk/privatePolicy.html",className:"text-white hover:text-gray-400",children:"Privacy Policy"}),(0,s.jsx)("a",{href:"terms.cookly.co.uk/termsOfService.html",className:"text-white hover:text-gray-400",children:"Terms of Use"}),(0,s.jsx)("a",{href:"mailto:contact@bracket.software",className:"text-white hover:text-gray-400",children:"Contact Us"})]}),(0,s.jsxs)("div",{className:"flex mt-2 space-y-4 md:mt-0 flex-col",children:[(0,s.jsx)("a",{href:"#",className:"text-white hover:text-gray-400 mr-2",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})}),(0,s.jsxs)("a",{href:"https://www.instagram.com/cooklyapp/",className:"text-white  text-xs justify-center items-center hover:text-gray-400",children:[(0,s.jsx)(l.Z,{className:"mr-2"}),"@CooklyApp"]})]})]})})}},5337:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return h}});var s=t(7437),l=t(4232),o=t(1293),r=t(2265),n=t(8652);function c(){let[e,a]=(0,r.useState)(!1),[t,l]=(0,r.useState)(!1),[o,c]=(0,r.useState)(null),[i,d]=(0,r.useState)({email:"",name:"",message:"",isLifetime:!1}),x=e=>{let{name:a,value:s}=e.target;!0==t&&l(!1),d(e=>({...e,[a]:s}))};return(0,s.jsxs)("div",{className:"relative items-center justify-center flex flex-col py-32 ",children:[(0,s.jsx)("div",{className:"z-[-100] bg-gradient-to-r blur-3xl opacity-15 from-green-900 via-[#1edf2b] absolute lg:left-[-20%] left-[-45%]  w-[400px] h-[600px] top-[-25%]"}),(0,s.jsxs)("p",{className:"max-w-[800px] space-y-6 mt-16 mb-8 flex flex-1  flex-col mx-8",children:[(0,s.jsx)("span",{className:"block text-3xl font-black text-center text-transparent outline-text",children:"Beta Testers"}),(0,s.jsx)("span",{className:"block",children:"If you're as excited about this as we are, we'd love to have your advice and come on board as a beta tester. You will be one of our most important members and shape the future of Cookly."})]}),(0,s.jsxs)("form",{onSubmit:e=>{a(!0),c(null),e.preventDefault(),(0,n.y)(i).then(()=>{a(!1),l(!0)}).catch(e=>{console.log(e),c(e),a(!1)})},className:"flex flex-col w-full items-center space-y-4  lg:flex px-8 pb-16 max-w-[600px]",children:[(0,s.jsx)("div",{className:"w-full flex ",children:(0,s.jsx)("input",{type:"text",placeholder:"Name",id:"name",name:"name",value:i.name,onChange:x,required:!0,className:"w-full flex py-3 px-4 border-[1px] border-gray-300"})}),(0,s.jsx)("div",{className:"w-full flex ",children:(0,s.jsx)("input",{type:"email",placeholder:"Email",id:"email",name:"email",value:i.email,onChange:x,required:!0,className:"w-full flex py-3 px-4 border-[1px] border-gray-300"})}),(0,s.jsx)("div",{className:"w-full flex mb-4",children:(0,s.jsx)("textarea",{id:"message",placeholder:"Message",name:"message",value:i.message,onChange:x,className:"w-full flex py-3 px-4 border-[1px] border-gray-300"})}),(0,s.jsx)("div",{className:"min-h-4 text-red-500",children:o}),t?(0,s.jsx)("p",{children:"Thank you, we will be in touch soon."}):(0,s.jsx)("button",{type:"submit",className:"bg-[#1edf2b] hover:bg-black text-black justify-around w-full hover:text-white font-bold px-8 py-4 rounded-full flex flex-row",children:(0,s.jsxs)("div",{className:"flex flex-row",children:[e?(0,s.jsx)("svg",{className:"animate-spin h-6 w-6 mr-8 border-b-4 border-white rounded-full "}):null,"Send Proposal"]})})]})]})}var i=t(8792),d=t(1233),x=t.n(d);t(7002);var m=t(6837);let f="https://cookly.co.uk",u=(0,l.default)(()=>Promise.all([t.e(990),t.e(429)]).then(t.bind(t,1429)),{loadableGenerated:{webpack:()=>[1429]},ssr:!1});function h(){let[e,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{x().init({once:!0,disable:"phone",duration:600,easing:"ease-out-sine"}),a(new URLSearchParams(window.location.search).get("referral")),console.log(e)},[]),(0,s.jsxs)("main",{className:"flex flex-col items-center max-w-screen overflow-hidden",children:[(0,s.jsx)("div",{className:"flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]",children:(0,s.jsxs)("div",{className:" max-w-[1200px] flex flex-row justify-between w-full",children:[(0,s.jsxs)(i.default,{href:"/".concat(e?"?referral=".concat(e):""),className:"flex flex-row space-x-2",children:[(0,s.jsx)("img",{src:"".concat(f,"/logo.png"),alt:"f",width:32,height:32,className:"rounded-3xl"}),(0,s.jsx)("text",{className:"text-black font-bold text-2xl",children:"Cookly"})]}),(0,s.jsx)(i.default,{href:"/lifetime".concat(e?"?referral=".concat(e):""),children:(0,s.jsx)(o.Z,{})})]})}),(0,s.jsxs)("div",{className:"relative min-h-[91vh] flex flex-col z-10 w-full items-center space-y-8 justify-around  lg:flex px-8 pt-16 pb-[137px] shadow-lime-500/50 ",children:[(0,s.jsx)("div",{className:"z-[-100] bg-gradient-conic blur-2xl opacity-60 from-green-900 via-[#1edf2b] absolute right-[-100px] lg:right-[10%] translate-y-[-200px] w-[200px] h-[200px]"}),(0,s.jsx)("div",{className:"z-[-100] bg-gradient-conic blur-2xl opacity-35 from-green-900 via-[#1edf2b] absolute left-[-200px] lg:left-32 lg:translate-y-[100px] translate-y-[300px] w-[300px] h-[300px]"}),(0,s.jsxs)("p",{"data-aos":"fade-up","data-aos-delay":"400",className:"uppercase font-mono text-center font-black text-6xl ",children:["Unlock ",(0,s.jsx)("span",{className:"text-transparent outline-text",children:"your"})," potential"]}),(0,s.jsxs)("p",{className:"max-w-[800px] text-center font-mono","data-aos":"fade-up","data-aos-delay":"600",children:[(0,s.jsx)("span",{className:"font-bold ",children:"April 2024"})," is when you begin a nutrition journey tailored uniquely to you — because your health deserves personalisation, not guesswork."]}),(0,s.jsxs)("div",{className:"justify-around justify-center items-center flex flex-col space-y-16",children:[(0,s.jsxs)("div",{"data-aos":"fade-in","data-aos-delay":"1000","data-aos-duration":"1500",children:[(0,s.jsx)(u,{}),(0,s.jsx)("p",{className:"text-center text-red-500 font-bold mt-4 max-w-[400px]",children:"LIMITED TIME OFFER!"})]}),(0,s.jsx)(i.default,{href:"/lifetime/".concat(e?"?referral=".concat(e):""),children:(0,s.jsx)("button",{"data-aos":"fade-in","data-aos-delay":"1500","data-aos-duration":"1500",className:"transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 bg-[#1edf2b] font-mono hover:bg-black text-black text-lg hover:text-white font-bold px-8 py-4 rounded-full",children:"Become A Founding Member"})})]})]}),(0,s.jsx)("img",{src:"".concat(f,"/Weight.png"),alt:"f",width:300,height:250,className:"rounded-2xl shadow-xl lg:mb-32 mb-16 z-[1000]","data-aos":"fade-up","data-aos-delay":"400"}),(0,s.jsxs)("div",{className:"min-h-[60vh] max-w-[1000px] lg:space-x-16 lg:space-y-0 space-y-16 flex-col-reverse space-y-reverse relative flex lg:flex-row z-10 w-full items-center  justify-around  lg:flex px-8 pb-16",children:[(0,s.jsx)("img",{src:"".concat(f,"/Logger.png"),alt:"f",width:250,height:250,className:"rounded-2xl shadow-xl","data-aos":"fade-up","data-aos-delay":"400"}),(0,s.jsxs)("p",{className:" space-y-12",children:[(0,s.jsx)("span",{"data-aos":"fade-up","data-aos-delay":"400",className:"block",children:"Currently, the health and fitness space remains exclusive for the people who already understand it and know what to eat.‍"}),(0,s.jsx)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:"We're developing an app that aims to make gaining muscle, maintaining and losing weight accessible and simpler than ever."}),(0,s.jsxs)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:["You will be able to track your macros with a tracker that constantly updates itself to align with ",(0,s.jsx)("span",{className:"font-bold",children:"YOUR"})," metabolism. And also provide you with food recommendations based on food you like and already eat."]}),(0,s.jsx)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:"Achieving your goals has literally never been easier."}),(0,s.jsxs)("span",{className:"block","data-aos":"fade-up","data-aos-delay":"400",children:["We're offering our first users the opportunity to become a ",(0,s.jsx)("span",{className:"font-bold",children:"Founding Member"}),". While the application will be free to download and use certain features, premium features will be accessible only through annual/monthly memberships. By contributing to Cookly as a Founding Member, you are supporting our inception and gaining exclusive access to state-of-the-art nutritional features, forever. By becoming a Founding Member, you will be granted a lifetime membership to all current and future premium features."]})]})]}),(0,s.jsxs)("p",{className:"relative uppercase text-center font-black  text-6xl my-16 w-full",children:[(0,s.jsx)("span",{className:"text-black","data-aos":"fade-in","data-aos-delay":"400","data-aos-duration":"1000",children:"Features"}),(0,s.jsx)("div",{className:"z-[-100] bg-gradient-to-r blur-2xl opacity-30 from-green-900 via-[#1edf2b] absolute right-[-150px] lg:right-[2%] translate-y-[-250px] lg:w-[400px] w-[300px] h-[300px]"})]}),(0,s.jsxs)("div",{className:" relative min-h-[91vh] max-w-[1000px] flex lg:space-x-16 flex-col-reverse lg:flex-row z-10 w-full lg:items-start items-center  justify-around px-8 py-16",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"max-w-[800px] space-y-12","data-aos":"fade-right","data-aos-delay":"400",children:[(0,s.jsx)("span",{className:"block text-3xl font-bold ",children:"Dynamic Macro Tracking"}),(0,s.jsxs)("span",{className:"block",children:["Unlike ordinary calorie trackers, which don't at all consider different metabolic rates, our ",(0,s.jsx)("span",{className:"font-bold",children:"Premium Subscription"})," boasts a dynamic macro goal setter. An advanced algorithm powered by AI that constantly redefines itself for your own metabolism, so that you can be confident you will meet your goals."]})]}),(0,s.jsxs)("p",{className:"max-w-[800px] space-y-12 mt-16","data-aos":"fade-left","data-aos-delay":"400",children:[(0,s.jsx)("span",{className:"block text-3xl font-bold ",children:"Personalised Food Recommendations"}),(0,s.jsx)("span",{className:"block",children:"Currently, the market for health & fitness apps offer no value aside from confusing data, which is left up to you to interpret. For most who don't have pre-requisite nutrition knowledge, this can leave many people overwhelmed and confused as to how they improve. So we're building a food recommendation engine using AI and Machine Learning to recommend you foods, that not only align with your health and fitness goals, but even your personal dietary preferences."})]}),(0,s.jsxs)("p",{className:"max-w-[800px] space-y-6 mt-16","data-aos":"fade-right","data-aos-delay":"400",children:[(0,s.jsx)("span",{className:"block text-3xl font-bold ",children:"Poop Tracker"}),(0,s.jsx)("span",{className:"block",children:"Yep... Exactly what it sounds like."}),(0,s.jsx)("span",{className:"block",children:"You can even track your bowel movements. In the future, we hope to integrate food recommendations that even tailor to how your body reacts to different foods!"})]})]}),(0,s.jsx)("img",{src:"".concat(f,"/Dynamic.png"),alt:"f",width:250,height:250,className:"rounded-2xl shadow-xl mb-16 z-[1000]","data-aos":"fade-up","data-aos-delay":"400"})]}),(0,s.jsx)(c,{}),(0,s.jsx)(m.Z,{})]})}}},function(e){e.O(0,[992,453,971,69,744],function(){return e(e.s=3040)}),_N_E=e.O()}]);