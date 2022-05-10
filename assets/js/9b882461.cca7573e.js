"use strict";(self.webpackChunksocialdata=self.webpackChunksocialdata||[]).push([[4369],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},c="Predicting Obesity",l={unversionedId:"Predictions/predict",id:"Predictions/predict",title:"Predicting Obesity",description:"To get a sense of correlation or consistency in the data, we choose to see if we could predict wether or not 1/3 of the adults in a state were obese or not. We choose 1/3 since the median of the obesity column was 34 % (health['adultobesity% Adults with Obesity'].median() = 34), leaving us with a dataset somewhat split into two. The new column from this criteria, denounced is_obese, consisting of booleans can now be used as a response variable and the obesity column omitted. The prediction we did was a simple Decisiontreeclassifier to quickly try and get a prediction and therefore a possible tendency in the data. Firstly the correlation heatmap is computed to check for any surprising correlations in the data:",source:"@site/docs/Predictions/predict.md",sourceDirName:"Predictions",slug:"/Predictions/predict",permalink:"/socialdata/docs/Predictions/predict",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Political orientation",permalink:"/socialdata/docs/exploring_the_data/politics"},next:{title:"Improving the model",permalink:"/socialdata/docs/Predictions/Optimizing-the-model"}},d={},p=[],u={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"predicting-obesity"},"Predicting Obesity"),(0,i.kt)("p",null,"To get a sense of correlation or consistency in the data, we choose to see if we could predict wether or not 1/3 of the adults in a state were obese or not. We choose 1/3 since the median of the obesity column was 34 % (",(0,i.kt)("inlineCode",{parentName:"p"},"health['adult_obesity_% Adults with Obesity'].median() = 34"),"), leaving us with a dataset somewhat split into two. The new column from this criteria, denounced ",(0,i.kt)("inlineCode",{parentName:"p"},"is_obese"),", consisting of booleans can now be used as a response variable and the obesity column omitted. The prediction we did was a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"Decisiontreeclassifier")," to quickly try and get a prediction and therefore a possible tendency in the data. Firstly the correlation heatmap is computed to check for any surprising correlations in the data:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Correlation image "),"\n",(0,i.kt)("a",{target:"_blank",href:n(1254).Z}," ",(0,i.kt)("img",{src:n(9222).Z,width:"3411",height:"2843"})," ")),(0,i.kt)("p",null,"The correlation heatmap gives some information about what features are correlated. The highest correlation around 0.9 is found between ",(0,i.kt)("inlineCode",{parentName:"p"},"poor_physical_health_days")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"poor_mental_health_days"),". These features are self surveyed from citizens, which means that people could tend to say that a poor physical health day is also a poor mental health day. It seems that the numbers correlate at least.\nAnother high correlating factor is ",(0,i.kt)("inlineCode",{parentName:"p"},"smoking")," together with ",(0,i.kt)("inlineCode",{parentName:"p"},"Potential_Life_Lost_Rate")," aswell as the two previous features, ",(0,i.kt)("inlineCode",{parentName:"p"},"poor_physical_health_days")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"poor_mental_health_days"),". It seems that in counties where a great percentage of the adult population smoke, they also seem to lose potential years of life aswell as their amount of poor mental and physical health days increase. ",(0,i.kt)("inlineCode",{parentName:"p"},"smoking")," could seem to be a great indicator of the unhealthy counties. Furthermore the ",(0,i.kt)("inlineCode",{parentName:"p"},"per_gop")," attribute is a measure of percentage republican in the respective counties, having a percentage measure for democrates could have been included but would be ",(0,i.kt)("inlineCode",{parentName:"p"},"per_dem"),"=1-",(0,i.kt)("inlineCode",{parentName:"p"},"per_gop")," and therefore trivially highly correlated with the percentage measure for republicans. It could have been an interesting to look into voting percentages in general, and see if that could be correlated to obesity in some way, e.g. in implying if (dis)trust in the government has an influence. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Test data and initial results ")),(0,i.kt)("p",null,"Since the model needs some training and test data, we decided to split our test set to be 3 states (this gives us some nicer plots instead of spread out counties across the US). We choose a west-coast (Oregon), midderteranin (Oklahoma) and east-coast (Pennsylvania) state, to see if the prediction differs accros the US. "),(0,i.kt)("p",null,"The confusion matrix was computed as seen below."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(8359).Z}," ",(0,i.kt)("img",{src:n(8678).Z,width:"864",height:"648"})," ")),(0,i.kt)("p",null,"With the different results from the confusion matrix:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accuracy of the model: 0.5988372093023255"),(0,i.kt)("li",{parentName:"ul"},"Precision of the model: 0.7721518987341772"),(0,i.kt)("li",{parentName:"ul"},"recall of the model: 0.5446428571428571")),(0,i.kt)("p",null,"This gives us an idea that predicting obesity is not a total lost cause, as there seem to be some underlying patteren to what makes a county obese. Now let's see if the model can be improved."))}h.isMDXComponent=!0},8359:function(e,t,n){t.Z=n.p+"assets/files/confusionMatrix-48f7ded486afe852f43d8ef336742c88.png"},1254:function(e,t,n){t.Z=n.p+"assets/files/corrHeat-ef3fe8adf3d5f6344754b9557bacfde2.png"},8678:function(e,t,n){t.Z=n.p+"assets/images/confusionMatrix-48f7ded486afe852f43d8ef336742c88.png"},9222:function(e,t,n){t.Z=n.p+"assets/images/corrHeat-ef3fe8adf3d5f6344754b9557bacfde2.png"}}]);