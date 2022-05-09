---
sidebar_position: 1
---

# Predicting Obesity

To get a sense of correlation or consistency in the data, we choose to see if we could predict wether or not 1/3 of the adults in a state were obese or not. We choose 1/3 since the median of the obesity column was 34 % (`health['adult_obesity_% Adults with Obesity'].median() = 34`), leaving us with a dataset somewhat split into two. The new column from this criteria, denounced `is_obese`, consisting of booleans can now be used as a response variable and the obesity column omitted. The prediction we did was a simple `Decisiontreeclassifier` to quickly try and get a prediction and therefore a possible tendency in the data. Firstly the correlation heatmap is computed to check for any surprising correlations in the data:

** Correlation image **

The correlation heatmap gives some information about what features are correlated. The highest correlation around 0.9 is found between `poor_physical_health_days` and `poor_mental_health_days`. These features are self surveyed from citizens, which means that people could tend to say that a poor physical health day is also a poor mental health day. It seems that the numbers correlate at least.
Another high correlating factor is the `smoking` together with `Potential_Life_Lost_Rate` aswell as the two previous features, `poor_physical_health_days` and `poor_mental_health_days`. It seems that in counties where a great percentage of the adult population smoke, they also seem to lose potential years of life aswell as their amount of poor mental and physical health days increase. `smoking` could seem to be a great indicator of the unhealthy counties

The confusion matrix was computed as seen below.


[ ![](confusionMatrix.png) ](confusionMatrix.png)


With the different results from the confusion matrix:

* Accuracy of the model: 0.66
* Precision of the model: 0.7009966777408638
* recall of the model: 0.7250859106529209
* F1-score of the model: 0.7128378378378377