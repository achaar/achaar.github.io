---
tags:
  - project
---
# Smart Fare calendar system

Design a simple fare calendar system in order to cluster different price range in respective air route to get a better understanding to price variation throughout the year. Instead of having just minimum, maximum and median airfare to represent three classes of fare distribution in fare calendar,
we can design a smart airfare categorization using clustering algorithms.

## Clustering algorithm

Cluster analysis or clustering is the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters). Cluster analysis itself is not one specific algorithm, but the general task to be solved. It can be achieved by various algorithms that differ significantly in their notion of what constitutes a cluster and how to efficiently find them. Popular notions of clusters include groups with small distances among the cluster members, dense areas of the data space, intervals or particular statistical distributions. Clustering can therefore be formulated as a multi-objective optimization problem.

## Clustering in fare calendar system

We can devise fare calendar system as a clustering problem in which fares can be categorized via automatic classification into clusters. Similarity amongst fares can be viewed as the minimal difference in airfare within the cluster. We can also determine optimal number of cluster which can represent fare variation in most appropriate details.

### K-means for clustering

[k-means](https://www.wikiwand.com/en/K-means_clustering) clustering aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean, serving as a prototype of the cluster. Mathematically:

Given a set of observations ($x_1$, $x_2$, …, $x_n$), where each observation is a d-dimensional real vector, k-means clustering aims to partition the n observations into $k$ ($\leq n$) sets $S$ = {$S_1$, $S_2$, …, $S_k$} so as to minimize the within-cluster sum of squares (WCSS) (i.e. variance). Formally, the objective is to find:

<!--Mathematical equation in markdown take from wikipedia-->
<!--Office work-->


<!--Write about k-means-->

<!--Determing k automatically-->
In Kmeans $k$ or the number of clusters can be taken as a hyperparameter. In order to determine $k$ automatically, either we can perform cross-validation or we can use other algorithms like silhouette analysis. Silhouette refers to a method of interpretation and validation of consistency within clusters of data.

The silhouette value is a measure of how similar an object is to its own cluster (cohesion) compared to other clusters (separation). The silhouette ranges from -1 to 1, where a high value indicates that the object is well matched to its own cluster and poorly matched to neighboring clusters. If most objects have a high value, then the clustering configuration is appropriate. If many points have a low or negative value, then the clustering configuration may have too many or too few clusters.

## Features in consideration, implementation and EDA involved

To construct fare calendar system as a Kmeans problem, we constructed features such as fare and date of journey for every arrival station, departure station and date of search(Since dynamic pricing of airline varies on these parameters heavily). We then dynamically constructed clusters for these fares. Using the above trained model we then, predicted every fare for different date of journey. This helps our fare calendar to give a better understanding of fare displayed (low, medium or high) for the searched route.

<!--Add some EDA and clustered prices with seperate bandwidth and use matplotlib-->

<!--Scala job and Mlib usage-->

Data that needs to be taken into consideration is massive, moreover the algorithm should be run daily so that we can avoid stale clusters. We can write a spark job using [MLib library](https://spark.apache.org/docs/1.2.0/mllib-clustering.html).
