---
sidebar_position: 2
---


# Plotting Income around the US

The income of households can easily determine the food we eat. Fastfood is a cheap and easy source to food, and as seen it is widely spread across the united states. Sources tells us, that the fastfood consumption of adults increases with the family income level. **[[12]](https://www.cdc.gov/nchs/products/databriefs/db322.htm)**.

From the data the 10 counties with the highest mean income is shown below:

|State|County|	Mean Income|
|---	|---	|---   |
|Indiana	|Madison County|	162624.00|
|Maryland	|Montgomery County|	151535.33|
|Virginia	|Loudoun County|	142378.33|
|Arkansas	|Fulton County|	141250.00|
|North Dakota|	Cass County|	136797.00|
|Ohio	|Portage County|	134337.00|
|Kansas	|Johnson County|	134274.00|
|New York	|Westchester County|	132087.50|
|Colorado	|Boulder County|	131295.67|
|Rhode Island	|Providence County|	129181.00|

Due to missing data, the income variable has been omitted from our prediction model. However to still get a somewhat accurate picture of the income across the US, an interpolated image of the US is plotted. The values we do have is being spread out to other nearby counties with missing data, and is being impacted by all neraby values.

<iframe src="https://peetzie.github.io/SocialData_InteractiveMaps/fastfood_locations.html"
	sandbox="allow-same-origin allow-scripts"
	width="100%"
	height="500"
	scrolling="yes"
	seamless="seamless"
	frameborder="0">
</iframe>

:::caution Peetz!
Set lige den rigtige ind. Den ligger under Notebooks/lets-plot-images/income.html :))
:::

The green seems to spread especially near big cities, whereas the more red/purpleish colors are in the rural areas of the US.


