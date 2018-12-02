---
date: 2017-03-11
tags:
  - project
---
# User classification

## Problem statement

Based on the activities performed by the user in travel marketplace, we aim to classify them with certain probability that how likely is the user to book a ticket.

## Dataset preparation

In general, inorder to take every activity of a user into account, our dataset will contain both categorical as well as numerical data. In statistics, a categorical variable is a variable that can take on one of a limited, and usually fixed, number of possible values, assigning each individual or other unit of observation to a particular group or nominal category on the basis of some qualitative property. We have to preprocess our data in such a way that it will be able to deal with both categorical and numeric data.

### Dealing with categorical data

We need to convert categorical variables into numerical data as we can not train our model using categorical variables and at the same time we can not lose on categorical values. In order to achieve this we can do [one-hot encoding](https://www.quora.com/What-is-one-hot-encoding-and-when-is-it-used-in-data-science). This method is quite popular as it performs really well for several machine learning algorithms.

### Dealing with missing values

In general, nature of this dataset is very sparse, and often suffers from missing data issue. In order to resolve this, we can use following methods:

* Ignore the tuple with missing value, but if a lot of tuple has missing data, this method can lead to a great data loss.

* Use a global constant at missing values which can be the most frequent value.

* Use the most probable value to fill in the missing value, this technique is the most popular one.

### Dividing data into training, testing and validation dataset

To split dataset into training, testing and validation, the major concern is the amount of data and number of features contained it.

There are two competing concerns: with less training data, your parameter estimates have greater variance. With less testing data, your performance statistic will have greater variance. Broadly speaking you should be concerned with dividing data such that neither variance is too high, which is more to do with the absolute number of instances in each category rather than the percentage.

If you have a total of 100 instances, you're probably stuck with cross validation as no single split is going to give you satisfactory variance in your estimates. If you have 100,000 instances, it doesn't really matter whether you choose an 80:20 split or a 90:10 split (indeed you may choose to use less training data if your method is particularly computationally intensive).

Assuming you have enough data to do proper held-out test data (rather than cross-validation), the following is an instructive way to get a handle on variances:

Split your data into training and testing (80/20 is indeed a good starting point)
Split the training data into training and validation (again, 80/20 is a fair split).
Subsample random selections of your training data, train the classifier with this, and record the performance on the validation set
Try a series of runs with different amounts of training data: randomly sample 20% of it, say, 10 times and observe performance on the validation data, then do the same with 40%, 60%, 80%. You should see both greater performance with more data, but also lower variance across the different random samples
To get a handle on variance due to the size of test data, perform the same procedure in reverse. Train on all of your training data, then randomly sample a percentage of your validation data a number of times, and observe performance. You should now find that the mean performance on small samples of your validation data is roughly the same as the performance.

To implement this we can use [sklearn.model_selection.train_test_split(*arrays, **options)](http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html#sklearn.model_selection.train_test_split). It basically split arrays or matrices into random train and test subsets. Then we can split training dataset further into validation and training set. Now, if we want to use K-fold cross validation, then we divide training dataset into K equal parts, and randomly train on K-1 dataset and validate on the remaining dataset.

## Data preprocessing

For implementation of machine learning algorithms, it is advisable to apply following methods:

* Standardization: The result of standardization (or Z-score normalization) is that the features will be rescaled so that they’ll have the properties of a standard normal distribution with μ=0 and σ=1 where μ is the mean (average) and σ is the standard deviation from the mean; standard scores (also called z scores) of the samples are calculated as follows:

z = (x−μ)/σ
Standardizing the features so that they are centered around 0 with a standard deviation of 1 is not only important if we are comparing measurements that have different units, but it is also a general requirement for many machine learning algorithms such as SVM and gradient descent.

* Min-max scaling: An alternative approach to Z-score normalization (or standardization) is the so-called Min-Max scaling (often also simply called “normalization” - a common cause for ambiguities). In this approach, the data is scaled to a fixed range - usually 0 to 1. The cost of having this bounded range - in contrast to standardization - is that we will end up with smaller standard deviations, which can suppress the effect of outliers.

A Min-Max scaling is typically done via the following equation:

Xnorm = (X−Xmin)/(Xmax−Xmin)

## Algorithm used for training

In order to achieve feature scaling and estimation, we can use [scikit pipelines](http://scikit-learn.org/stable/modules/pipeline.html). Pipeline can be used to chain multiple estimators into one. This is useful as there is often a fixed sequence of steps in processing the data, for example feature selection, normalization and classification. Pipeline serves two purposes here:
Convenience: You only have to call fit and predict once on your data to fit a whole sequence of estimators.
Joint parameter selection: You can grid search over parameters of all estimators in the pipeline at once.
All estimators in a pipeline, except the last one, must be transformers (i.e. must have a transform method). The last estimator may be any type (transformer, classifier, etc.).

Following are the algorithms that can be considered for classification:

### Support vector machines

support vector machines are supervised learning models with associated learning algorithms that analyze data used for classification and regression analysis. Given a set of training examples, each marked as belonging to one or the other of two categories, an SVM training algorithm builds a model that assigns new examples to one category or the other, making it a non-probabilistic binary linear classifier.

The advantages of support vector machines are:

* Effective in high dimensional spaces. Still effective in cases where number of dimensions is greater than the number of samples.

* It Uses a subset of training points in the decision function (called support vectors), so it is also memory efficient.

* Versatile: different Kernel functions can be specified for the decision function. Common kernels are provided, but it is also possible to specify custom kernels.

The disadvantages of support vector machines include:

* If the number of features is much greater than the number of samples, the method is likely to give poor performances.

* SVMs do not directly provide probability estimates, these are calculated using an expensive five-fold cross-validation (see Scores and probabilities, below).

Since, we want a probability with which we can understand how likely user will book a ticket, so it becomes an expensive affair.

### Logistic regression

 Logistic regression is the classical algorithm mainly utilised for binary classification. The binary logistic model is used to estimate the probability of a binary response based on one or more predictor (or independent) variables (features). It allows one to say that the presence of a risk factor increases the probability of a given outcome by a specific percentage.

 Due to this, we can consider this algorithm to solve our problem statement.

 Generally, to avoid overfitting, we implement logistic regression with L1 or L2 regularization. While implementing so, value of C becomes an hyperparameter. To estimate this hyperparameter, we can again use [scikit library](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html).

### Random forest

[Random forests](https://www.stat.berkeley.edu/~breiman/RandomForests/cc_home.htm) are an ensemble learning method for classification, regression and other tasks. They operate by generating multiple decision trees from
the training data and predict the class which is most popular among classes
predicted by each tree.

Features of Random Forests:

* It is unexcelled in accuracy among current algorithms.

* It runs efficiently on large data bases.

* It can handle thousands of input variables without variable deletion.

* It gives estimates of what variables are important in the classification.

* It generates an internal unbiased estimate of the generalization error as the forest building progresses.

Hyperparameters in this algorithm is number of trees in the random forest. Moreover since, when the training set for the current tree is drawn by sampling with replacement, about one-third of the cases are left out of the sample. This oob (out-of-bag) data is used to get a running unbiased estimate of the classification error as trees are added to the forest. It is also used to get estimates of variable importance. So, there is no need to use cross validation.

## Accuracy

 To check the accuracy of our model, accuracy calculation is not enough. This is because we have sparse data, so the number of positive casesis very less, thus even a high accuracy can result in poor estimation. We then considered:

* Precision: precision (also called positive predictive value) is the fraction of relevant instances among the retrieved instances.

* Recall: recall (also known as sensitivity) is the fraction of relevant instances that have been retrieved over total relevant instances in the image.

* F-score: F-score (F1 score) is the harmonic mean of precision and recall 

## Model selection techniques

Cross validation can be utilised for model selection process.

### Cross validation

k-fold cross validation or cross validation, that holds out less data each time can be implemented as follows:

* Randomly split S into k disjoint subsets of m/k training examples each. Let’s call these subsets $S_1$, . . . , $S_k$.

* For each model Mi, we evaluate it as follows: For j = 1, . . . , k Train the model Mi on S1 ∪···∪Sj−1 ∪Sj+1 ∪···Sk (i.e., train on all the data except Sj) to get some hypothesis hij.

* Test the hypothesis hij on Sj , to get εˆSj (hij ). The estimated generalization error of model Mi is then calculated as the average of the εˆSj (hij)’s (averaged over j).

* Pick the model Mi with the lowest estimated generalization error, and retrain that model on the entire training set S. The resulting hypothesis is then output as our final answer.

Typically a value of k can be 10. K-fold validation prevents wastage of data as well.

While k = 10 is a commonly used choice, in problems in which data is really scarce, sometimes we will use the extreme choice of k = m in order to leave out as little data as possible each time. In this setting, we would repeatedly train on all but one of the training examples in S, and test on that held-out example. The resulting m = k errors are then averaged together to obtain our estimate of the generalization error of a model. This method has its own name; since we’re holding out one training example at a time, this method is called leave-one-out cross validation.

## Further possibilities

We can also explore other algorithms such as:

* Exploring neural networks

* Since activities of a user is dynamic in nature, it will be intersting to Model it as reinforcement learning problem which takes previous calculated probability of booking a ticket as a feature for further learning.