"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{1429:function(e,s,r){r.r(s),r.d(s,{default:function(){return a}});var n=r(7437),t=r(2151),d=r.n(t),c=r(2265);function a(){let[e,s]=(0,c.useState)({days:0,hours:0,minutes:0,seconds:0});return(0,c.useEffect)(()=>{let e=d()().endOf("month"),r=()=>{let r=d()(),n=d().duration(e.diff(r));s({days:n.days(),hours:n.hours(),minutes:n.minutes(),seconds:n.seconds()})};r();let n=setInterval(r,1e3);return()=>clearInterval(n)},[]),(0,n.jsx)("div",{className:"",children:(0,n.jsxs)("div",{className:"justify-center space-x-2  items-center z-[1000] flex",children:[(0,n.jsxs)("span",{className:"bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg",children:[e.days," d"]}),(0,n.jsxs)("span",{className:"bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg",children:[e.hours," h"]}),(0,n.jsxs)("span",{className:"bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg",children:[e.minutes," m"]}),(0,n.jsxs)("span",{className:"bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg",children:[e.seconds," s"]})]})})}}}]);