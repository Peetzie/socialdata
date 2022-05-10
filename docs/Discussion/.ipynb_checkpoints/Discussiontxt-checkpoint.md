---
sidebar_position: 1
---

# Discussion

* Conclusion 

To answer the question why and where; if whether or not people in areas with higher number of fastfood restaurants, or with low income, are prone to obesity? 

It seems that the number of fastfood restaurants in the county does in fact affect the possibility of more than one third of the county being obese and income aswell but less importantly. However other features turned out to be more important in predicting a county's obesity; adult **smoking** percentage and **premature death** (in terms of years of potential life lost), percentage **republican voters**, average number of **mentally unhealthy days** and percentage of excessive **drinking**. 



* Choosing dataset 

The aim of the project was to predict obesity in counties, and there already exists a lot of research within the area of obesity, which helped give some initial ideas about potential relevant data to include. The health data, fastfood restaurant locations and political data was in three different datasets and had to be merged, which however was not that big of an obstacle since all datasets were well defined. 

However some parameters were ambigous in whether or not to include, for example there were arguments both for and against that exposure to fastfood restaurants (in general) was a significant factor in predicting obesity, however an article from 2022 argued that it was a significant factor for USA **[[1]](https://nutritionj.biomedcentral.com/articles/10.1186/s12937-021-00713-5)[[2]](https://www.nature.com/articles/s41467-021-27522-y)**. 

Furthermore a study from 2018 look into the voting results from 2008 and 2012 in regards to political orientation and health behaviours, which implied republicans consuming more high fat, processed foods, engaged in less in-depth health information searches and also exercised less than democrates **[[3]](https://pubmed.ncbi.nlm.nih.gov/29940293/)**. This data could thus be correlated with health data but could still be a relevant parameter for prediction, which it also turned out to be the third most important feature. 

The dataset for income had many counties with no data, therefore an interpolation method was used to try to smooth the known data out for a full dataset however with a larger variance. This feature also turned out to be insignificant in the machine learning model, which could either be because of income not being a relevant factor and otherwise because of a too large variance in the interpolated data resulting in an incorrect picture of the real world. Either way, it ended up not being a relevant factor. 

* Potential Further work 

It could have been relevant to convert the fastfood restaurant data into either fastfood restaurant per area or per 100000 population or similar. 

We wanted to look into sex and race seggregated data aswell, to further investigate if some groups were more susceptible to some of the parameters, e.g. exposure to fastfood restaurants and Food Environment Index. It would have been even better if the data was somewhat more individualized into which types of persons in the counties  e.g. were excessive drinkers, smokers, reported more mentally or physically days or their educational history. However this was not possible with the current dataset, but it could be interesting as potential further work. 

Another interesting could be looking into voting percentages in the counties, as to see if counties with low or high voting percentages were more susceptible to be obese or not. This could potentially be related to (dis)trust in the government which could also be an interesting parameter to look into. 

As obesity is caused by obtaining more calories than using, therefore obesity can potentially be passed on genetically both by metabolism but also mentally by e.g. having a drive to overeat, **[[4]](https://www.cdc.gov/genomics/resources/diseases/obesity/index.htm)**. Therefore it could be interesting to look at peoples moving patterns around the United States and maybe even globally to get a dynamic view.


* Obstacles setting up the webpage

The website has been difficult to set up. One of our aims was to display interactive plots from our website. However, due to the lack of functionality from docusaurus (and other potential website creaing frameworks) this only proved possible if we converted our python code to javascript. Which no one of us was familar enough with to do. 


