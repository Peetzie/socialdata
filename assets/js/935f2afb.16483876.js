"use strict";(self.webpackChunksocialdata=self.webpackChunksocialdata||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/socialdata/docs/intro","docId":"intro"},{"type":"category","label":"Data Exploration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Restaurant Locations","href":"/socialdata/docs/exploring_the_data/Restaurant_locations","docId":"exploring_the_data/Restaurant_locations"},{"type":"link","label":"Exploring health data based on states","href":"/socialdata/docs/exploring_the_data/Understanding the data","docId":"exploring_the_data/Understanding the data"},{"type":"link","label":"Researching food quality","href":"/socialdata/docs/exploring_the_data/Foodquality","docId":"exploring_the_data/Foodquality"},{"type":"link","label":"The relation of income \ud83d\udcb2 and obesity","href":"/socialdata/docs/exploring_the_data/Income_US","docId":"exploring_the_data/Income_US"}]},{"type":"category","label":"Predicting obesity based on unhealthy behavior","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Predicting Obesity","href":"/socialdata/docs/Predictions/predict","docId":"Predictions/predict"},{"type":"link","label":"Improving the model","href":"/socialdata/docs/Predictions/Optimizing-the-model","docId":"Predictions/Optimizing-the-model"},{"type":"link","label":"Model evaluation","href":"/socialdata/docs/Predictions/model_evaluation","docId":"Predictions/model_evaluation"}]},{"type":"category","label":"Thoughts on the project","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Discussion","href":"/socialdata/docs/Discussion/Discussiontxt","docId":"Discussion/Discussiontxt"},{"type":"link","label":"Conclusion","href":"/socialdata/docs/Discussion/Conclusion","docId":"Discussion/Conclusion"}]},{"type":"link","label":"Sources","href":"/socialdata/docs/Sources","docId":"Sources"}]},"docs":{"Discussion/Conclusion":{"id":"Discussion/Conclusion","title":"Conclusion","description":"","sidebar":"tutorialSidebar"},"Discussion/Discussiontxt":{"id":"Discussion/Discussiontxt","title":"Discussion","description":"* What went well?","sidebar":"tutorialSidebar"},"exploring_the_data/Foodquality":{"id":"exploring_the_data/Foodquality","title":"Researching food quality","description":"The food enviroment index, FEI, is a measure of the food environment in regards to both household income and proximity to healthy foods i.e. grocery stores and similar shops and the accesability to those, i.e. is it in a reasonable distance and is it affordable.  [8].","sidebar":"tutorialSidebar"},"exploring_the_data/Income_US":{"id":"exploring_the_data/Income_US","title":"The relation of income \ud83d\udcb2 and obesity","description":"The income of households can play a factor in deciding what food we eat. Fastfood is a cheap and easy source to food, and as seen it is widely spread across the United States. Sources tells us, that the fastfood consumption of adults increases with the family income level [12].","sidebar":"tutorialSidebar"},"exploring_the_data/Restaurant_locations":{"id":"exploring_the_data/Restaurant_locations","title":"Restaurant Locations","description":"What are the most popular fastfood restaurant chains?","sidebar":"tutorialSidebar"},"exploring_the_data/Understanding the data":{"id":"exploring_the_data/Understanding the data","title":"Exploring health data based on states","description":"Sorting the state data based on which state has the highest premature deathcounts","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"_","sidebar":"tutorialSidebar"},"Predictions/model_evaluation":{"id":"Predictions/model_evaluation","title":"Model evaluation","description":"Below is seen the three states, and the color represents if the predicted label is the same as the true label.","sidebar":"tutorialSidebar"},"Predictions/Optimizing-the-model":{"id":"Predictions/Optimizing-the-model","title":"Improving the model","description":"To improve the model from a simple Decisiontreeclassifier, we opted for a solution with a Randomforrestclassifier which is basicly just multiple Decisiontreeclassifiers, where each of them has a vote and then the majority wins for a specific classification.","sidebar":"tutorialSidebar"},"Predictions/predict":{"id":"Predictions/predict","title":"Predicting Obesity","description":"To get a sense of correlation or consistency in the data, we choose to see if we could predict wether or not 1/3 of the adults in a state were obese or not. We choose 1/3 since the median of the obesity column was 34 % (health[\'adultobesity% Adults with Obesity\'].median() = 34), leaving us with a dataset somewhat split into two. The new column from this criteria, denounced is_obese, consisting of booleans can now be used as a response variable and the obesity column omitted. The prediction we did was a simple Decisiontreeclassifier to quickly try and get a prediction and therefore a possible tendency in the data. Firstly the correlation heatmap is computed to check for any surprising correlations in the data:","sidebar":"tutorialSidebar"},"Sources":{"id":"Sources","title":"Sources","description":"1.  https://www.sciencedirect.com/science/article/pii/S1570677X10000663?via%3Dihub#bib0255","sidebar":"tutorialSidebar"}}}')}}]);