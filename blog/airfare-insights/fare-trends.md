---
tags:
  - project
---
# Fare Trends

Pricing for airlines is one of the most volatile and dynamic metric in the travel industry. No wonder, it can drive potential customer really anxious before buying an airline ticket. Thus there is a great need for proper fare analytics and fare trend visualisations for better user experience and hassle free booking.

## Dynamic nature of airfare

Customers typically search anxiously 15-30 times before making a successful booking. In order to prevent customer from this hassle, we can present some insights about the fare variations for a particular route user is searching across all past dates. Furthermore, price prediction problem is too complex (especially in indian travel space) as it involves too many parameters in consideration, such as holidays, days before journey, weather, frequency, festivals to name a few. Also, if our price prediction model suffers from minimal inaccuracy also, it can result into a really bitter user experience. Instead, we can use historical prices to suggest the compatibility of the fare seen now and the past fares recorded.

## optimal fare suggestion

Generally, if a user search for a particular origin, destination and date of journey, we can keep the record of the fare variation in past days, based on that we can find the trend whether the fare has been increasing or decreasing for past (X) number of days from the day of search, further we store minimum airline fare for the source and destination, if the present price seen varies by some nominal percentage, we can inform users that this might be the optimal fare for the route. This very simple feature can give a better user experience and contributes towards hassleless booking.

## Past fare graph

Fare graph is another fare analytics that we can do to give more insights about the fares for the route(origin, destination, date of journey) user has searched for. Fare graph basically sums up the effort that user takes by searching for multiple dates. Specifically we will try to cater significant fares for past days and draw a simple graph which will indicate user how fare is varying.

### Finding significant fares and optimal number of days

In fare implementation we have two variables.

* Fares that are significant for providing fare insights.
* Number of days that should be considered for drawing fare graph of fares vs date of search.

To find the above discussed variables, we can use some clustering algorithm which will take fares and cluster them into clusters, then  the centroids provided by the algorithm can act as the significant fares to be considered for fare graph. [k-means](https://www.wikiwand.com/en/K-means_clustering) can be used to achieve these clusters. Note that if we intend to use KMeans we will have to take two hyperparameters into account.

* K (Optimal number of cluster)
* Optimal number of days for which data should be considered.

For hyperparameter estimation, either we can go for cross validation using either [random search or grid search](http://scikit-learn.org/stable/auto_examples/model_selection/randomized_search.html) depending on the performance on the dataset provided. Hyperparameter can be implemented using [scikit hyperparameter estimation](http://scikit-learn.org/stable/modules/grid_search.html) Silhouette analysis can also be utilised for finding optimal number of k.

The silhouette value is a measure of how similar an object is to its own cluster (cohesion) compared to other clusters (separation). The silhouette ranges from -1 to 1, where a high value indicates that the object is well matched to its own cluster and poorly matched to neighboring clusters. If most objects have a high value, then the clustering configuration is appropriate. If many points have a low or negative value, then the clustering configuration may have too many or too few clusters.

## Further possibilities

We can also implement price prediction in airline, (although it is a really complex problem). Below are some of the sources which might be helpful for initiation of the project.

* [Understanding complexity in airfare estimation](http://www.demarcken.org/carl/papers/ITA-software-travel-complexity/ITA-software-travel-complexity.pdf)

* Airline pricing using the concept of [yield management](https://www.wikiwand.com/en/Yield_management)

* Price forecasting using [ARIMA model](https://www.wikiwand.com/en/Yield_management)

* Ripper's algorithm for [decision rule](http://www.fsl.cs.stonybrook.edu/docs/binaryeval/node5.html)
