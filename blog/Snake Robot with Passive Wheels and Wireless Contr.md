---
photo: /images/snake-robot.png
date: 2018-11-01
tags:
  - project
---
# Snake Robot with Passive Wheels and Wireless Control

The main objective was to make a robot that had the gait of a snake and can be wirelessly controlled. As students, we had the idea of microcontrollers, motors, and mechanics etc., but it was difficult to zero in on a design. We considered many elaborate designs but rejected them due to the time constraint of three months. We ended up pursuing the Joint and  Edge model, where a sinusoidal wave is transmitted through the connections. When a time delayed sine wave was applied to the joints, it created motion in the forward direction, somewhat similar to how we use roller-skates. The work was divided into categories such as design, procurement of materials, manufacturing of parts, software implementation, and establishing wireless communication. The wireless communication was done using WiFi Direct on ZigBee. I worked on the design, software implementation, and on assembling the robot. I wrote the code using the Arduino IDE, for which I learnt Object Oriented Programming, which helped me write a compact and reusable code. The robot had forward, backward, and turning movement commands which were implemented using the Servo library. The input was received on the ZigBee which transmitted it to the Arduino board. The chassis and joints were also made by the team from Aluminium sheets. We decided to attach passive wheels for smoothness, but we were unable to get the right clips for attaching the wheels.  So, I stepped in to learn Grinding at the Mechanical workshop, and then made all the joint clips by working at the machine. This made me appreciate what Mechanical Engineers did and how the tools and machines help us sculpt things that we imagine. We then assembled the whole robot complete with circuit connections and after a few trials, it worked. 

<iframe width="100%" height="360"  src="https://www.youtube.com/embed/6LS5nyMGA6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
