---
date: 2018-11-01
tags:
  - project
---
# Pedestrian Detection using Deep Learning @ Summer Research Internship at Hanyang University, Korea

I started by reading research papers to understand what type of classifier would be required for the problem. After reading a few papers, I picked a then state of the art paper from 2013 with the title [Joint Deep Learning for Pedestrian Detection](#1). I learned about the challenges related to Object Detection, in particular, about Deformation and Occlusion Handling. The objective was to detect a pedestrian in a given window and the novelty of the paper was to learn all the parameters related to feature extraction, deformation & occlusion handling, and the classifier simultaneously, whereas these were obtained separately in the previous approaches. What was interesting about the approach was that the filters in the second layer were of different sizes to account for the different parts and their occlusion statuses. In the next layer, a deformation model was learned based on [the quadratic constraint of deformation](#2), which added the weighted sum of deformation maps to the part detection matrices obtained from the second layer, and then the result was max-pooled to get a Part score. 20 Parts were divided into 3 levels, consisting of arms & legs (level I), torso(level II), one half of the body(level III), etc. Since, the parts at a lower level are related to parts at the higher level, for example, hands are part of the torso, Visibility and Classification of the parts was modeled keeping this in mind. Therefore, parameters from lower levels also contributed to the detection of objects at higher levels. A sigmoid function was used as an activation function in the classification model. The learning was done by Back Propagating the error obtained on the log loss.

I had problems implementing the backpropagation through convoluted matrices and after struggling for a few days, finally, figured it out by reformulating the problem as data(i.e. the error) flow from output node to the input nodes that contributed towards that particular output. I implemented the algorithm in MatLab from scratch. The model I made performed poorly because of random initialization which caused dead weights, a problem that I learned about in January, 2016. 

I also taught a few students there, to get them started on Machine Learning.

![At Prof. Hyunchul Shin's Office on the last day of my Internship](/images/intern-cover.jpg)


References:
<i id="1"></i>
[1]: W. Ouyang and X. Wang. Joint Deep Learning for Pedestrian Detection. In ICCV, 2013.
<i id="2"></i>
[2]: P. Felzenszwalb, R. B. Grishick, D.McAllister, and D. Ramanan. Object detection with discriminatively trained part based models. IEEE Trans. PAMI, 32:1627–1645, 2010.
