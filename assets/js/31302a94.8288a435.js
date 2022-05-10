"use strict";(self.webpackChunksocialdata=self.webpackChunksocialdata||[]).push([[9609],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l="Improving the model",c={unversionedId:"Predictions/Optimizing-the-model",id:"Predictions/Optimizing-the-model",title:"Improving the model",description:"To improve the model from a simple Decisiontreeclassifier, we opted for a solution with a Randomforrestclassifier which is basicly just multiple Decisiontreeclassifiers, where each of them has a vote and then the majority wins for a specific classification.",source:"@site/docs/Predictions/Optimizing-the-model.mdx",sourceDirName:"Predictions",slug:"/Predictions/Optimizing-the-model",permalink:"/socialdata/docs/Predictions/Optimizing-the-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Predicting Obesity",permalink:"/socialdata/docs/Predictions/predict"},next:{title:"Model evaluation",permalink:"/socialdata/docs/Predictions/model_evaluation"}},p={},u=[{value:"Further improving the model",id:"further-improving-the-model",level:3}],d={toc:u};function f(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"improving-the-model"},"Improving the model"),(0,o.kt)("p",null,"To improve the model from a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"Decisiontreeclassifier"),", we opted for a solution with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Randomforrestclassifier")," which is basicly just multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Decisiontreeclassifiers"),", where each of them has a vote and then the majority wins for a specific classification. "),(0,o.kt)("p",null,"With the basic ",(0,o.kt)("inlineCode",{parentName:"p"},"Randomforrestclassifier"),"we obtained far better results."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(6505).Z}," ",(0,o.kt)("img",{src:n(4269).Z,width:"864",height:"648"})," ")),(0,o.kt)("p",null,"Comparing the two ",(0,o.kt)("em",{parentName:"p"},"Confusion matrices")," the true postives has gone from 61 to 104, likewise the false positive has been increased from 18 to around 39.\nAs for the true negatives it reduced by from 42 to 21, however that is the cost of having correctly classified far more.\nLikewise the False negative was reduced from 51 to 8! This overall gives us a better model."),(0,o.kt)("p",null,"With the different results from the confusion matrix we now obtained the following: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accuracy of the model: 0.7267441860465116"),(0,o.kt)("li",{parentName:"ul"},"Precision of the model: 0.7272727272727273"),(0,o.kt)("li",{parentName:"ul"},"recall of the model: 0.9285714285714286"),(0,o.kt)("li",{parentName:"ul"},"F1-score of the model: 0.8156862745098039")),(0,o.kt)("p",null,"With an increase in every aspect except for a little worse precision, we are actually happy.\nOfcourse it is better to get it right more times whether or not a county is obesed. But likewise with an increased recall we ensure that we get the most counties that can be considered obesed based on features, and thus are able to account for based on said features to improve public health in that county! "),(0,o.kt)("h3",{id:"further-improving-the-model"},"Further improving the model"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Randomforrestclassifier")," uses different ",(0,o.kt)("em",{parentName:"p"},"Hyperparameters")," that can be tuned in order to improve the overall accuracy of the model.\nBy performing ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomSearchCV"),"to first establish how the hyperparameters act on the model and then ",(0,o.kt)("inlineCode",{parentName:"p"},"GridSearchCV"),"to find different parameters for the said model in an interval we were able to further improve the model accuracy.\nWith the new ",(0,o.kt)("em",{parentName:"p"},"hyperparameters")," we arrive with the following confusion matrix and measurements"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(8038).Z}," ",(0,o.kt)("img",{src:n(8741).Z,width:"864",height:"648"})," ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accuracy of the model: 0.7325581395348837"),(0,o.kt)("li",{parentName:"ul"},"Precision of the model: 0.7171052631578947"),(0,o.kt)("li",{parentName:"ul"},"recall of the model: 0.9732142857142857"),(0,o.kt)("li",{parentName:"ul"},"F1-score of the model: 0.8257575757575757")),(0,o.kt)("p",null,"Based upon the measurements above we arrive with a model with less ",(0,o.kt)("inlineCode",{parentName:"p"},"Precison"),". However an increase in the ",(0,o.kt)("inlineCode",{parentName:"p"},"accuray"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Recall"),"and ",(0,o.kt)("inlineCode",{parentName:"p"},"F1-score"),"."),(0,o.kt)("p",null,"Based on that and the confusion matrix numbers we see a model that identifies more true positives, but at the cost of more false positives and thus the increased ",(0,o.kt)("inlineCode",{parentName:"p"},"Recall"),". Likewise we see a minor decrease in true negatives, but a reduction in false negaitves. As this doesn't classify whether one individual has a disease or is life critical for one individual, but rather identifies whether or not a county is more vulnerable of obesity or not it is a good thing to identify to many to try to prohibit this prediction. "),(0,o.kt)("p",null,"Below can be seen the importance of the different features"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(3828).Z}," ",(0,o.kt)("img",{src:n(4731).Z,width:"1075",height:"537"})," ")),(0,o.kt)("p",null,"As seen, the most important feature seem to be ",(0,o.kt)("inlineCode",{parentName:"p"},"smoking")," percentages\ud83d\udeac in the county which has around 40% of the importance. The next is ",(0,o.kt)("inlineCode",{parentName:"p"},"Years_of_Potential_Life_Lost_Rate")," however with a large standard deviation. Therafter is ",(0,o.kt)("inlineCode",{parentName:"p"},"percentage republican")," which seems to also have a positive affect, with a smaller standard error. This means that the model predicts obesity in a county if these features are prevalent in a county.\nIt can of course be discussed that it is unclear if smoking is a precondition to being obese or if it is actually the other way around, which counts for all of the features, this would need to be investigated further to conclude upon\ud83d\udd0e."))}f.isMDXComponent=!0},3828:function(e,t,n){t.Z=n.p+"assets/files/Feature_imps-fed868f39543f9f6f83469238247404a.png"},6505:function(e,t,n){t.Z=n.p+"assets/files/confusionMatrix_RF-c705c32afce105ac7314c72bd62d2632.png"},8038:function(e,t,n){t.Z=n.p+"assets/files/confusionMatrix_RF_tuned-7cabd8f871cbe8123cc2ec51d74962c2.png"},4731:function(e,t,n){t.Z=n.p+"assets/images/Feature_imps-fed868f39543f9f6f83469238247404a.png"},4269:function(e,t,n){t.Z=n.p+"assets/images/confusionMatrix_RF-c705c32afce105ac7314c72bd62d2632.png"},8741:function(e,t,n){t.Z=n.p+"assets/images/confusionMatrix_RF_tuned-7cabd8f871cbe8123cc2ec51d74962c2.png"}}]);