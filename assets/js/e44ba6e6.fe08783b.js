"use strict";(self.webpackChunksocialdata=self.webpackChunksocialdata||[]).push([[877],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={"sidebar position":1},c=void 0,l={unversionedId:"Predictions/Predict",id:"Predictions/Predict",title:"Predict",description:"Predicting Obesity",source:"@site/docs/Predictions/Predict.md",sourceDirName:"Predictions",slug:"/Predictions/Predict",permalink:"/socialdata/docs/Predictions/Predict",draft:!1,tags:[],version:"current",frontMatter:{"sidebar position":1},sidebar:"tutorialSidebar",previous:{title:"Yeet",permalink:"/socialdata/docs/Locations/test"}},p={},u=[{value:"Predicting Obesity",id:"predicting-obesity",level:2}],d={toc:u};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"predicting-obesity"},"Predicting Obesity"),(0,a.kt)("p",null,"To get a sense of correlation or consistency in the data, we choose to see if we could predict wether or not 1/3 of the adults in a state were obese or not. We choose 1/3 since the median of the obesity column was 34 (",(0,a.kt)("inlineCode",{parentName:"p"},"health['adult_obesity_% Adults with Obesity'].median() = 34"),"), leaving us with somewhat a dataset split into two. The new column ",(0,a.kt)("inlineCode",{parentName:"p"},"is_obese")," was then introduced as a response variable and the obesity column omitted. The prediction we did was a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Decisiontreeclassifier")," to quickly try and get a prediction and therefore a possible tendency in the data. Firstly the correlation heatmap is computed to check for any surprising correlations in the data:"),(0,a.kt)("p",null,"The correlation heatmap gives some information about what features are correlated. The highest correlation around 0.9 is found between ",(0,a.kt)("inlineCode",{parentName:"p"},"poor_physical_health_days")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"poor_mental_health_days"),". These features are self surveyed from citizens, which means that people could tend to say that a poor physical health day is also a poor mental health day. It seems that the numbers correlate at least.\nAnother high correlating factor is the ",(0,a.kt)("inlineCode",{parentName:"p"},"smoking")," together with ",(0,a.kt)("inlineCode",{parentName:"p"},"Potential_Life_Lost_Rate")," aswell as the two previous features, ",(0,a.kt)("inlineCode",{parentName:"p"},"poor_physical_health_days")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"poor_mental_health_days"),". It seems that in counties where a great percentage of the adult population smoke, they also seem to lose potential years of life aswell as their amount of poor mental and physical health days increase. ",(0,a.kt)("inlineCode",{parentName:"p"},"smoking")," could seem to be a great indicator of the unhealthy counties"),(0,a.kt)("p",null,"The confusion matrix was computed as seen below:"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(8359).Z}," ",(0,a.kt)("img",{src:n(8678).Z,width:"864",height:"648"})," ")),(0,a.kt)("p",null,"With the different results from the confusion matrix:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accuracy of the model: 0.66"),(0,a.kt)("li",{parentName:"ul"},"Precision of the model: 0.7009966777408638"),(0,a.kt)("li",{parentName:"ul"},"recall of the model: 0.7250859106529209"),(0,a.kt)("li",{parentName:"ul"},"F1-score of the model: 0.7128378378378377")))}f.isMDXComponent=!0},8359:function(e,t,n){t.Z=n.p+"assets/files/confusionMatrix-adbb27a8894cc180e27abd2786f6e4f4.png"},8678:function(e,t,n){t.Z=n.p+"assets/images/confusionMatrix-adbb27a8894cc180e27abd2786f6e4f4.png"}}]);