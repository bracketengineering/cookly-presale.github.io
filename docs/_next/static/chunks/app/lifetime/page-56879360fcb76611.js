(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{9539:function(e,a,s){Promise.resolve().then(s.bind(s,5096))},8652:function(e,a,s){"use strict";s.d(a,{M:function(){return n},y:function(){return t}});var l=s(7908);let t=async e=>{try{let a=await l.Z.post("https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/presale-signup",e);return console.log(a.data),a.data}catch(e){console.error("Error sending signup:",e)}},n=async e=>{try{let a=await l.Z.post("https://mpddx5nqrl.execute-api.eu-west-2.amazonaws.com/v1/create-checkout-session",e);return console.log(Object.keys(a.data)),a.data}catch(e){return console.error("Error creating checkout session:",e),e}}},5096:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return p}});var l=s(7437),t=s(4232),n=s(1293),r=s(8792),o=s(703),c=s(752),i=s(2265),d=s(8652),x=s(1233),h=s.n(x);s(7002);let m=(0,t.default)(()=>Promise.all([s.e(990),s.e(429)]).then(s.bind(s,1429)),{loadableGenerated:{webpack:()=>[1429]},ssr:!1});function p(){let[e,a]=(0,i.useState)(null);(0,i.useEffect)(()=>{h().init({once:!0,disable:"phone",duration:600,easing:"ease-out-sine"}),a(new URLSearchParams(window.location.search).get("referral")),console.log(e)},[]);let s=async a=>{a.preventDefault();let s=JSON.parse((await (0,d.M)({priceId:"price_1OqxZNKvfn71PZ6opdwM2MYX",url:"https://buy.stripe.com/test_28o01o2HscA427C144",domain:"https://cookly.co.uk",promo_code:e})).body);console.log(s,s.url),s&&s.url&&(window.location.href=s.url)};return(0,l.jsxs)("main",{className:"",children:[(0,l.jsx)("div",{className:"flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]",children:(0,l.jsxs)("div",{className:" max-w-[1200px] flex flex-row justify-between w-full",children:[(0,l.jsxs)(r.default,{href:"/".concat(e?"?referral=".concat(e):""),className:"flex flex-row space-x-2 items-center",children:[(0,l.jsx)(o.default,{src:"".concat("https://cookly.co.uk","/logo.png"),alt:"f",width:32,height:32,className:"object-contain"}),(0,l.jsx)("text",{className:"text-black font-bold text-2xl",children:"Cookly"})]}),(0,l.jsx)(r.default,{href:"/lifetime".concat(e?"?referral=".concat(e):""),className:"",children:(0,l.jsx)(n.Z,{className:"ml-auto"})})]})}),(0,l.jsxs)("section",{className:"font-mono py-16 min-h-screen w-full flex flex-col items-center justify-center",children:[(0,l.jsxs)("div",{className:"max-w-[1200px] flex lg:flex-row flex-col mx-8 lg:space-x-16 mb-auto ",children:[(0,l.jsx)(o.default,{src:"${prefix}/phone.png",alt:"f",className:"max-h-[500px] object-contain mb-16 lg:mb-auto flex-shrink-1 "}),(0,l.jsxs)("div",{className:"space-y-8",children:[(0,l.jsx)("span",{className:"block text-5xl font-black ",children:"Lifetime Premium"}),(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("span",{className:"block text-2xl font-bold line-through mr-4 text-neutral-300",children:"\xa3200.00"}),(0,l.jsx)("span",{className:"block text-2xl font-black flex flex-row ",children:"\xa333.00"})]}),(0,l.jsx)("div",{children:(0,l.jsx)("form",{onSubmit:async e=>await s(e),children:(0,l.jsx)("button",{type:"submit",className:"transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 border-[#1edf2b] border-2 hover:bg-[#1edf2b] text-black hover:text-white font-bold px-16 py-4 rounded-full w-full lg:w-auto md:w-auto",children:"Buy Now"})})}),(0,l.jsxs)("div",{className:"flex flex-shrink-1 flex-col",children:[(0,l.jsx)("p",{className:"pb-2 font-bold text-red-500",children:"Ends in:"}),(0,l.jsx)("div",{className:"flex flex-shrink-1",children:(0,l.jsx)(m,{})})]}),(0,l.jsx)("span",{className:"block text-red-500 font-bold",children:"There will only ever be 1000 of these! So get yours now!"}),(0,l.jsxs)("div",{className:"bg-white border-[1px] rounded-3xl py-4 px-6",children:[(0,l.jsxs)("span",{className:"block",children:["Cookly is an app in development that will have premium features availible at prices starting from"," ",(0,l.jsx)("span",{className:"font-black",children:"\xa370"})," per year. By becoming a lifetime member now before our inception, you will gain access to any and all premium features for a fraction of the price."]}),(0,l.jsxs)("span",{className:"block mt-4",children:["Upon the app's release, if you're not happy with Cookly, or you would just like your money back, you will have"," ",(0,l.jsx)("span",{className:"font-black",children:"60-days"})," to apply for a"," ",(0,l.jsx)("span",{className:"font-bold",children:"hassle-free refund."})]}),(0,l.jsx)("span",{className:"block mt-4 font-bold",children:"We plan to realease the app on IOS in April 2024."})]})]})]}),(0,l.jsx)("div",{className:"flex flex-col z-10 w-full items-center  justify-around font-mono lg:flex px-8 py-32",children:(0,l.jsxs)("div",{className:"max-w-[800px] space-y-6",children:[(0,l.jsx)("span",{className:"block text-3xl font-black","data-aos":"fade-in","data-aos-delay":"400","data-aos-duration":"1000",children:"FAQ"}),(0,l.jsxs)("div",{className:"bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4","data-aos":"fade-right","data-aos-delay":"400",children:[(0,l.jsx)("span",{className:"block text-xl font-black ",children:"What extra features do I get as a Premium Member?"}),(0,l.jsx)("span",{className:"block ml-2",children:"We plan to evolve our app and hence our premium features over time, but some of the things we plan on implementing as soon as possible are:"}),(0,l.jsxs)("ul",{className:"ml-4 space-y-2 pb-2",children:[(0,l.jsx)("li",{children:"Dynamic Macro Goals"}),(0,l.jsx)("li",{children:"Higher quality recommendations"}),(0,l.jsx)("li",{children:"Meal Plans based on your preferences and goals"}),(0,l.jsx)("li",{children:"Waste reduction algorithm"})]})]}),(0,l.jsxs)("div",{className:"bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4","data-aos":"fade-left","data-aos-delay":"400",children:[(0,l.jsx)("span",{className:"block text-xl font-black",children:"What features do I get as a Non-Premium Member?"}),(0,l.jsx)("span",{className:"block ml-2",children:"Again, we plan to add many new features. Things we are working on now are:"}),(0,l.jsxs)("ul",{className:"ml-4 space-y-2 pb-2",children:[(0,l.jsx)("li",{children:"Normal calorie counter"}),(0,l.jsx)("li",{children:"Meal Preferences"}),(0,l.jsx)("li",{children:"Shopping List that integrates with your meal recommendations"}),(0,l.jsx)("li",{children:"Recipe sharing - share your healthy (or not) recipes with your friends"}),(0,l.jsx)("li",{children:"Search-by-Ingredient"})]})]}),(0,l.jsxs)("div",{className:"bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4","data-aos":"fade-right","data-aos-delay":"400",children:[(0,l.jsx)("span",{className:"block text-xl font-black",children:"Will Cookly be availible on Android?"}),(0,l.jsx)("span",{className:"block ml-2 pb-2",children:"Although we plan to release on Android as soon as possible, we currently have no set deadline."})]}),(0,l.jsxs)("div",{className:"bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4","data-aos":"fade-left","data-aos-delay":"400",children:[(0,l.jsx)("span",{className:"block text-xl font-black",children:"When and where will Cookly be availble?"}),(0,l.jsx)("span",{className:"block ml-2 pb-2",children:"We plan to release on IOS in the UK in April 2024. We plan to expand internationally over time but have no explicit deadline."})]})]})})]}),(0,l.jsx)("footer",{className:"bg-neutral-900 min-h-[20vh] text-white items-center  flex w-full p-4",children:(0,l.jsxs)("div",{className:"max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row w-full justify-between  items-center",children:[(0,l.jsxs)("div",{className:"flex space-y-4 flex-col",children:[(0,l.jsx)("p",{children:"Bristol, UK"}),(0,l.jsx)("p",{children:"contact@bracket.software"}),(0,l.jsx)("p",{children:"\xa9 2024 Cookly. All rights reserved."})]}),(0,l.jsxs)("div",{className:"flex space-y-4 flex-col",children:[(0,l.jsx)("a",{href:"#",className:"text-white hover:text-gray-400",children:"Privacy Policy"}),(0,l.jsx)("a",{href:"#",className:"text-white hover:text-gray-400",children:"Terms of Use"}),(0,l.jsx)("a",{href:"#",className:"text-white hover:text-gray-400",children:"Contact Us"})]}),(0,l.jsxs)("div",{className:"flex mt-2 space-y-4 md:mt-0 flex-col",children:[(0,l.jsx)("a",{href:"#",className:"text-white hover:text-gray-400 mr-2",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsxs)("a",{href:"#",className:"text-white  text-xs justify-center items-center hover:text-gray-400",children:[(0,l.jsx)(c.Z,{className:"mr-2"}),"@CooklyApp"]})]})]})})]})}}},function(e){e.O(0,[992,453,703,971,69,744],function(){return e(e.s=9539)}),_N_E=e.O()}]);