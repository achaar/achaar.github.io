---
date: 2017-08-11 
tags:
  - project
---
# Supervised approach for nuclei segmentation

Segmentation is an important stage in almost every problem involving digital image analysis. In image segmentation we aim to partition the spatial domain of the image, thereby delimiting the region of interest which correspond to the target objects in the concerned image analysis.

Automated image analysis of cells and tissues has been an active research field in medical informatics for decades but has recently attracted increased attention due to developments in computer and microscopy hardware and the awareness that scientific and diagnostic pathology require novel approaches to perform objective quantitative analyses of cellular and tissue specimens. Since it is not always possible to generate the segmentation process manually, systems developed to automatically segment images are usually restricted to specific domains. Even for a particular application purpose, formal specification of the parameters of a segmentation algorithm can be very difficult. Moreover, the concept of a good partition may depend on the purpose of its use and may be highly subjective. Interactive segmentation systems are appropriate to deal with several of these issues. The user can manage the segmentation process, having full control over the level of detail
1of the desired partition.

We have devised a supervised approach for nuclei detection which takes an user input in order to know the desired partition for the image, then using this prior, overall segmentation will take place. We have taken both pixel-wise and patch-wise information into account for segmentation of nuclei.Further we have worked with ternary classification of images into nucleus, non nucleus and boundary region as well. We have experimented with both normal nuclei( Non cancerous) and complex nuclei (cancerous).

## Paradigms of segmentation

There are two paradigms of image segmentation, namely supervised and
unsupervised.
In unsupervised image segmentation, the aim is to obtain in a reliable
way the contours of the most significant spatial/spectral structures.
In supervised image segmentation, some prior information is introduced
to help the segmentation procedure. Typically, this prior knowledge corre-
sponds to:

* Annotation for the regions of interest, in the case of interactive segmentation.

* A pixel classification in homogeneous regions, which are the germs for an automatic segmentation.

## Random forest as classifier

[Random forests](https://www.stat.berkeley.edu/~breiman/RandomForests/cc_home.htm) are an ensemble learning method for classification, regression and other tasks. They operate by generating multiple decision trees from
the training data and predict the class which is most popular among classes
predicted by each tree.

### Why random forest

Random forest is used as classifer mainly for the following reasons:

* It can handle thousands of input variables without variable deletion.

* It gives estimates of what variables are important in the classification which is quite helpful in case of patch wise classification.

* Since we have a limited data set to train our model.It has an effective method for estimating missing data and maintains accuracy when a large proportion of the data are missing.

* Generated forests can be saved for future use on other data which might be helpful if we tend to develop an interactive segmentation tool for nuclei detection.

Moreover, random forests does not overfits. It is very fast, we can run random forest on larger number of trees in a short span of time.

## Pixel-wise binary classification

Our aim is to segment nuclei from given images. This problem can be tackled
as a binary classification problem, where we classify every pixel of image as
a part of nucleus or not. So we use random forest classifier to classify every
pixel into 2 classes using RGB values of itself as features.

### Results

We have experimented with both cancerous and non-cancerous nuclei. Images were taken from H&H data. 20x for cancerous and 40x for non-cancerous.

#### Non-cancerous nuclei

Binary classification was tested by varying the number of estimators i.e number of trees in forest. We observe that after a particular value, change in [precision
and recall](https://www.wikiwand.com/en/Precision_and_recall) is negligible.

![Training image](/images/nuclei-segmentation/training.jpg)
Training Image{.text-center}

![Annotated image](/images/nuclei-segmentation/annotated.jpg)
Annotated Image{.text-center}

Also predicted image is more sharp with increase in number of trees. Smaller number of trees are producing good results because there is clear distinction in RGB values of pixels belonging to different classes.

![Testing image](/images/nuclei-segmentation/pixel-testing-image.png)

Result for multiple forest size would be:

Table: Non Cancerous : Measure of relevance for positive class

| No. of Trees | Precision | Recall | f1-score | Overall Accuracy |
| :----------: | :-------: | :----: | :------: | :--------------: |
|      1       |   0.74    |  0.64  |   0.69   |       0.96       |
|      5       |   0.77    |  0.67  |   0.72   |       0.96       |
|      10      |   0.79    |  0.66  |   0.72   |       0.96       |
|      50      |   0.78    |  0.68  |   0.73   |       0.97       |
|     100      |   0.78    |  0.69  |   0.73   |       0.97       |
|     200      |   0.78    |  0.69  |   0.73   |       0.97       |
|     500      |   0.79    |  0.69  |   0.73   |       0.97       |
{.table .table-sm}

#### Cancerous Nuclei

Similar experiments were conducted on cancerous images by varying the number of estimators. We observe that even for high number of trees, results are
not satisfying. Even though overall accuracy seems really good, this is not a good metric to validate the model as high accuracy is due to majority of non-nuclei white region. Thus, recall and precision are better metric to evaluate how our model is performing. Low recall and precision infers erroneous model.

![Test image](/images/nuclei-segmentation/cancer-testing.jpg)
Test Image{.text-center}

![ Predictions](/images/nuclei-segmentation/cancer-pixel.png)
Predictions{.text-center}

Result

| No. of Trees | Precision | Recall | f1-score | Overall Accuracy |
| :----------: | :-------: | :----: | :------: | :--------------: |
|      1       |   0.57    |  0.32  |   0.41   |       0.87       |
|      5       |   0.61    |  0.3   |   0.41   |       0.88       |
|      10      |   0.61    |  0.29  |   0.39   |       0.87       |
|      50      |   0.63    |  0.3   |   0.41   |       0.88       |
|     100      |   0.63    |  0.3   |   0.41   |       0.88       |
|     200      |   0.63    |  0.3   |   0.41   |       0.88       |
|     500      |   0.64    |  0.3   |   0.41   |       0.88       |
{.table .table-sm}

## Patchwise Binary Classification

In pixelwise approach each pixel has only 3 features, that is R,G,B values of its own which were used for classification. Results were good for non-cancerous images, but in case of cancerous nuclei they were not satisfactory. To improve the results we tried taking spatial features into account. One way
of achieving this is using the RGB values of surrounding pixels as features for classification.

### Results

Again we experimented with both cancerous and non-cancerous nuclei from the same H&E data. Following section shows the results for experiments. For these experiments we have fixed the number of estimators to be 500 and have collected results for different patch-sizes.

#### Non-cancerous Nuclei

The results are slightly better than previous approach (pixel-wise binary classification). Image show more sharpness and less noise. But with change in patch-size here is no relevant improvement in the results.

Non-Cancerous: Measure of relevance for positive class
Patch Size 
3
5
7
9
11
13
15
Precision
0.83 0.72
0.84 0.73
0.84 0.73
0.85 0.72
0.85 0.72
0.86 0.72
0.86 0.72

f1-score Accuracy 0.77 0.97 0.78 0.97 0.78 0.97 0.78 0.97 0.78 0.97 0.78 0.97 0.78 0.97
Recall

<!-- TODO: Images and table -->

#### Cancerous Nuclei

As we can see, the results are much better as compared to earlier approach. Also precision and overall accuracy seems to have improved. Upon increasing the patch-size, precision and recall improvement is very little but the results are much better if see the resultant images.

<!-- TODO: Images and table -->

## Ternary classification

In order to segment nuclei, it is sufficient to detect its boundary. So, instead of classifying every pixel in 2 classes, in this approach we consider 3 classes:

* inside the nucleus

* outside the nucleus

* the boundary

 We again try both pixelwise as well as patchwise classification techniques.

 ### Results

Results for ternary classification do not show any improvement over binary classification. Trend within similar approaches upon varying the number of estimators and patch-sizes again match with binary classification. So we just enlist all the results that were gathered for ternary classification.

<!-- TODO: Images and Tables -->

## Further possibilities

We have achieved a supervised approach for image segmentation using random forest classifier. Further possibilities for the development of this approach includes:

* We can modify this approach into a semi-supervised method so that it can be used for an interactive tool for image segmentation.

* Using a semi-supervised approach, we can employ online learning for the better classification of images.

* We can formulate our research into an interactive tool whose underlying features could be as follows:

  * we can divide this tool into three modules, one module will take the image and the appropriate annotations from the user.

  * Then, then the second module will make a classifier on the basis of prior given.

  * The final module will incorporate this classifier to further segment the mentioned image.

* Since we have used patch-wise image segmentation, the features under consideration are high in number. This leads our algorithm to take more time than expected. So we can use various techniques to reduce features of concern like stain separation.

* We can expand this tool further for hyper-spectral images.