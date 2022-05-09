"use strict";(self.webpackChunksocialdata=self.webpackChunksocialdata||[]).push([[609],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l="Improving the model",c={unversionedId:"Predictions/Optimizing-the-model",id:"Predictions/Optimizing-the-model",title:"Improving the model",description:"To improve the model from a simple Decisiontreeclassifier, we opted for a solution with a Randomforrestclassifier which is basicly just multiple Decisiontreeclassifiers, where each of them has a vote and then the majority wins for a specific classification.",source:"@site/docs/Predictions/Optimizing-the-model.mdx",sourceDirName:"Predictions",slug:"/Predictions/Optimizing-the-model",permalink:"/socialdata/docs/Predictions/Optimizing-the-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Predicting Obesity",permalink:"/socialdata/docs/Predictions/predict"},next:{title:"Model evaluation",permalink:"/socialdata/docs/Predictions/model_evaluation"}},d={},p=[{value:"Further improving the model",id:"further-improving-the-model",level:3}],u={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"improving-the-model"},"Improving the model"),(0,o.kt)("p",null,"To improve the model from a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"Decisiontreeclassifier"),", we opted for a solution with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Randomforrestclassifier")," which is basicly just multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Decisiontreeclassifiers"),", where each of them has a vote and then the majority wins for a specific classification. "),(0,o.kt)("p",null,"With the basic ",(0,o.kt)("inlineCode",{parentName:"p"},"Randomforrestclassifier"),"we obtained far better results."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(6505).Z}," ",(0,o.kt)("img",{src:n(4269).Z,width:"864",height:"648"})," ")),(0,o.kt)("p",null,"Comparing the two ",(0,o.kt)("em",{parentName:"p"},"Confusion matrices")," the true postive rate has gone from 211 to 262, likewise the false positive has been reduced from 90 to around 68.\nAs for the true negatives it reduced by a small bit from 119 to 114, however that is the cost of having correctly classified far more.\nLikewise the False negative was reduced from 80 to 56. "),(0,o.kt)("p",null,"With the different results from the confusion matrix we now obtained the following: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accuracy of the model: 0.752"),(0,o.kt)("li",{parentName:"ul"},"Precision of the model: 0.793939393939394"),(0,o.kt)("li",{parentName:"ul"},"recall of the model: 0.8238993710691824"),(0,o.kt)("li",{parentName:"ul"},"F1-score of the model: 0.808641975308642")),(0,o.kt)("p",null,"With an increase in both the precision and recall we are actually happy.\nOfcourse it is better to get it right more times whether or not a county is obesed. But likewise with an increased recall we ensure that we get the most counties that can be considered obesed based on features, and thus are able to account for based on said features to improve public health in that county! "),(0,o.kt)("h3",{id:"further-improving-the-model"},"Further improving the model"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Randomforrestclassifier")," uses different ",(0,o.kt)("em",{parentName:"p"},"Hyperparameters")," that can be tuned in order to improve the overall accuracy of the model.\nBy performing ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomSearchCV"),"to first establish how the hyperparameters act on the model and then ",(0,o.kt)("inlineCode",{parentName:"p"},"GridSearchCV"),"to find different parameters for the said model in an interval we were able to further improve the model accuracy.\nWith the new ",(0,o.kt)("em",{parentName:"p"},"hyperparameters")," we arrive with the following confusion matrix and measurements"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(7735).Z}," ",(0,o.kt)("img",{src:n(6689).Z,width:"864",height:"648"})," ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accuracy of the model: 0.74"),(0,o.kt)("li",{parentName:"ul"},"Precision of the model: 0.7701149425287356"),(0,o.kt)("li",{parentName:"ul"},"recall of the model: 0.8427672955974843"),(0,o.kt)("li",{parentName:"ul"},"F1-score of the model: 0.8048048048048047")),(0,o.kt)("p",null,"Based upon the measurements above we arrive with a model with less ",(0,o.kt)("inlineCode",{parentName:"p"},"accuray"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Precison"),". However an increase in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Recall"),"and almost the same  ",(0,o.kt)("inlineCode",{parentName:"p"},"F1-score"),"."),(0,o.kt)("p",null,"Based on that and the confusion matrix numbers we see a model that identifies more true positives, but at the cost of more false positives and thus the increased ",(0,o.kt)("inlineCode",{parentName:"p"},"Recall"),". Likewise we see a minor decrease in true negatives, but a reduction in false negaitves. As this doesn't classify whether one individual has a disease or is life critical for one individual, but rather identifies whether or not a county is more vulnerable of obesity or not it is a good thing to identify to many to try to prohibit this prediction."))}m.isMDXComponent=!0},6505:function(e,t,n){t.Z=n.p+"assets/files/confusionMatrix_RF-193b4d9d85f70c3362f73b1e01fa3946.png"},7735:function(e,t,n){t.Z=n.p+"assets/files/confusionMatrix_Tuned-6be5707921002e7efad20b6e964dab4f.png"},4269:function(e,t,n){t.Z=n.p+"assets/images/confusionMatrix_RF-193b4d9d85f70c3362f73b1e01fa3946.png"},6689:function(e,t,n){t.Z=n.p+"assets/images/confusionMatrix_Tuned-6be5707921002e7efad20b6e964dab4f.png"}}]);