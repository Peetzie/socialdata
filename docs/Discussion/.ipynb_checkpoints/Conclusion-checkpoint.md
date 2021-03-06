---
sidebar_position: 2
---

# Genre

The genre we chose to use is **Magazine Style** with some **Slide Show** features. Our focus from the beginning was the story and how the visualization should fit together with the story, the style to tell the story came more naturally as we began to construct visualizations, analyze those and started to build a webpage. 

We chose this genre since our visualizations are overall quite detailed and the reader has the opportunity to spend time go in depth with exploring the visualizaztions. The corresponding text is also rather in depth, however using bold and emojis trying to make it more readable, such as skimming the respective webpages also should be able to give an impression on what is going on, with the opportunity to go in depth by reading and exploring the interactive plots. 

There is somewhat linearity with the story, however not completely bound, the sidebar makes it easy for the reader to jump around to the headlines that spark interest, and the pages has some introduction in the beginning such that it is not strictly nescessary to have read the other pages, however that would be the intuitive way to click around. Therefore it can be argued that it is mostly **author-driven** in regards to somewhat **linear ordering of scenes** and as there is (if the reader chooses to go in depth with the text) a lot of **messaging**. In regards to the webpage structure and (some) of the visualizations it is **reader-driven** as the reader has the opportunity to click around and explore the **interactive website** and **interactive map plots**. 

## Visual Narrative

| **Visual structuring** 	| *** 	|
|---:	|---:	|
| Establishing Shot/Spalsh Screen 	| + 	|
| Consistent Visual Platform  	| + 	|
| Progress Bar/Timebar  	| - 	|
| "Checklist" Progress Tracker 	| - 	|
| **Highlight** 	| *** 	|
| Close-Ups 	| + 	|
| Feature Distinction  	| - 	|
| Character Direction  	| - 	|
| Motion 	| + 	|
| Audio 	| - 	|
| Zooming 	| + 	|
| **Transition Guidance** 	| *** 	|
| Familiar Objects  	| + 	|
| Viewing Angle  	| - 	|
| Viewer (Camera) Motion  	| - 	|
| Continuity Editing 	|- 	|
| Object Continuity 	| - 	|
| Animated Transitions 	| - 	|

**Visual Structuring** 


We chose to have an establishing shot for our web page to have a more fun and inspiring introduction to reading about what we did in the project. We chose a consistent visual platform as the plots themselves differed from barplots, maps and correlation-/confusionmatrices, and therefore the background was more consistent as to create more consitency throughout the plot. It would have been nice with a progress bar, but we valued spending more time on the visualizations than on implementing such. 

**Highlight** 


The interactive maps gave the opportunity to zoom and investigate close on fastfood chains and the heat maps, furthermore the three chosen test-states were zoom in on in the model evaluation, this was done to get a better view of the county data. Motion was necessary to be able to use within the webpage, since there was large plots and text in each webpage, however the motion was limited to scrolling. 

**Transition Guidance** 


We added emojis to the text as familiar objects, also to make an easier visual connection to the text and make it more fun to read. Furthermore there was clicking buttons to guide the reader back and forth together with the siderbar. 



## Narrative Structure

| **Ordering** 		| *** |
|---:	|---:	|
| Random Access 	| + 	|
| User Directed Path  	| - 	|
| Linear  	| + 	|
| **Interactivity** 	| *** | 
| Hover Highlighting/Details 	| + 	|
| Filterint/Selection/Search  	| - 	|
| Navigation Buttons  	| + 	|
| Very Limited Interactivity 	| - 	|
| Explicit Intstruction 	| - 	|
| Tacit Tutorial 	| - 	|
| Stimulating default views 	| + 	|
| **Messaging** 	| ***	|
| Captions/Headlines 	| + 	|
| Annotations  	| - 	|
| Accompanying Article  	| + 	|
| Multi-messaging 	| + 	|
| Comment Repition 	| - 	|
| Introductory Text 	| + 	|
| Summary 	| + 	|

**Ordering**


The storyline is overall linear guided with buttons back and forth in the bottom of the pages, with the possibility to access independent topics through the sidebar. 

**Interactivity** 


All the maps had interactivity with both hovertool for counties as well as for the fastfood restaurants. There was somewhat navigating buttons in the bottum of the pages and the ordering of the sidebar. Stimulating default views was used for the interactive maps as the startet in the view of USA, it could have been considered whether each start page of the different topics could be more stimulating, but it also shouldn't be overwhelming. 

**Messaging**  


All the topics had headlines and subtopics which was foldable. The visualizations had accompanying article, which was necessary since the plots were not able to stand for themselves, they were not self explanatory. Multimessaging was used in a way, showing barplots and maps. The project had both introductory text as well as summary in the discussion section. 




# Critical thoughts 

* What went well 

The data we found was very useful, both health, fastfood and political data had almost all counties included. The data was useful in terms of visualizing it geographically. 

* What is still missing

The income data was not very useful, and some time was spent on trying to interpolate with the missing counties, that however only worked in sort of pixel terms, which is why we ended up leaving it out of the machine learning model. Furthermore the county dataset was hard to visualize in other ways than in a geo map, since there were thousands of counties, the data could be aggregated as states, which was used in some barplots, but it was not the easiest way to visualize it, however it was easier to compare states in that way where the maps gave more of an overview. Furthermore we had some thoughts in regards to sex and race seggregated data, those thoughts were also discussed in the webpage in 'Discussion'. 



# Political data 


A study from 2018 investigate the voting results from 2008 and 2012 in regards to political orientation and health behaviours, which implied republicans consuming more high fat, processed foods, engaged in less in-depth health information searches and also exercised less than democrates **[[3]](https://pubmed.ncbi.nlm.nih.gov/29940293/)**. To gain an overview of how the political beliefs in USA is distributed it is visualized using a map.

**plot**

:::tip

Hover your mouse over the county to see the political distribution in the state as well as a boolean `is_obese` telling whether or not more than 33% of the county is obese. 

:::

It is a bit hard to compare a geomap with another geomap, therefore it is not directly clear how this is correlated to obesity, the comparison to this can be seen in the correlation matrix under 'Predicting obesity'. To include this parameter in our investigation was actually just a fun idea, but as it turned out to be one of the most important features in the fitted machine learning model this map was more interesting to look into oneself. 



