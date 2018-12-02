<template>
  <div>
    <header class="header">
        <div class="top-bar container-fluid">
            <div class="actions">
                <a class="btn" href="mailto:ankur.iitg2016@gmail.com"><i class="fa fa-paper-plane" aria-hidden="true"></i> Contact Me</a>
                <nuxt-link class="btn" to="/blog"><i class="fa fa-pencil"></i> Blog & Projects</nuxt-link>
            </div><!--//actions-->
            <ul class="social list-inline">
                <li><a href="https://www.linkedin.com/in/ankur-kunder-62320170" target="_blank" title="LinkedIn Profile"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <!--<li><a href="https://twitter.com/@ankur_kunder" target="_blank" title="@ankur_kunder on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>-->
                <li><a href="https://github.com/achaar" target="_blank" title="achaar on Github"><i class="fa fa-github-alt" aria-hidden="true"></i></a></li>
            </ul><!--//social-->
        </div><!--//top-bar-->
        
        <div class="intro">
            <div class="container text-center">
                <img class="profile-image" src="//github.com/achaar.png" alt="">
                <h1 class="name">Ankur Kunder</h1>
                <div class="title">Software Engineer | ML Enthusiast</div>
                <div class="profile">
                    <p>I am currently working at SRI-Delhi as a Software Engineer. I have a B.Tech in ECE with a Minor in CSE. I am also a machine learning enthusiast and currently learning about topics such as YOLO and GANs. In leisure time, I like to read books on Economics, watch TV shows, sketch, and play Basketball.</p>
                </div><!--//profile-->
            </div><!--//container-->
        </div><!--//intro-->
        
        <div class="contact-info">
            <div class="container text-center">
                <ul class="list-inline">
                    <li class="email"><i class="fa fa-envelope"></i><a href="mailto:ankur.iitg2016@gmail.com">ankur.iitg2016@gmail.com</a></li>
                    <li><i class="fa fa-phone"></i> <a href="tel: +918473994800">+91 8473994800</a></li>
                    <li class="website"><i class="fa fa-globe"></i><a href="https://achaar.github.io">achaar.github.io</a></li>
                </ul>
            </div><!--//container-->
        </div><!--//contact-info-->
        
        <div class="page-nav-space-holder hidden-xs">
            <div id="page-nav-wrapper" class="page-nav-wrapper text-center">
                <div class="container">
                    <ul id="page-nav" class="nav page-nav list-inline">
                        <li class=""><a class="scrollto" href="#experiences">Experiences</a></li>
                        <li><a class="scrollto" href="#education">Education</a></li>
                        <li><a class="scrollto" href="#skills">Skills</a></li>
                        <!-- <li><a class="scrollto" href="#portfolio">Portfolio</a></li> -->
                        <li><a class="scrollto" href="#contact">Contact</a></li>
                    </ul><!--//page-nav-->
                </div>
            </div><!--//page-nav-wrapper-->
        </div>
        
    </header><!--//header-->
    
    <div class="wrapper container">
        <section id="experiences" class="experiences-section section">
            <h2 class="section-title">Work Experiences</h2>
            <div class="timeline">
                <div class="item">
                    <div class="work-place">
                        <h3 class="place">Samsung Research Institute - Delhi</h3>
                        <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>Bangalore</div>
                    </div>
                    <div class="job-meta">
                        <div class="title">Software Engineer</div>
                        <div class="time">July 2016 – Current</div>
                    </div><!--//job-meta-->
                    <div class="job-desc">
                        <p>The role includes maintaining and developing parts of an Application that is used to Mirror TV screen on P2P connected devices.</p> 
                        <!--<ul>
                            <li>Implemented a State Machine using Boost Statechart Library</li>
                            <li>Inter-process communication using DBus</li>
                            <li>Two different Proof of Concepts</li>
                        </ul>-->
                    </div><!--//job-desc-->
                </div><!--//item-->
                
                <div class="item">
                    <div class="work-place">
                        <h3 class="place">Hanyang University</h3>
                        <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>Seoul</div>
                    </div>
                    <div class="job-meta">
                        <div class="title">Undergrad Researcher</div>
                        <div class="time">June 2015 – July 2015</div>
                    </div><!--//job-meta-->
                    <div class="job-desc">
                        <p>Researched on Pedestrian Detection using Deep Learning.</p> 
                    </div><!--//job-desc-->
                </div><!--//item-->
                
                <div class="item">
                    <div class="work-place">
                        <h3 class="place">Speech Technology Lab, Indian Institute of Technology Guwahati</h3>
                        <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>Kolkata</div>
                    </div>
                    <div class="job-meta">
                        <div class="title">Sophomore Researcher</div>
                        <div class="time">May 2014 – June 2014</div>
                    </div><!--//job-meta-->
                    <div class="job-desc">
                        <p>Researched Assamese Text classification using Neural Networks.</p> 
                    </div><!--//job-desc-->
                </div><!--//item-->
                
            </div><!--//timeline-->
            
        </section><!--//section-->
        
        <section id="education" class="education-section section">
            <h2 class="section-title">Education</h2>
            <div class="row">
                <div class="item col-xs-12 col-sm-12">
                    <div class="item-inner">
                        <h3 class="degree">B.Tech. Electronics and Communication Engineering with a Minor in Computer Science and Engineering.</h3>
                        <div class="education-body">
                            Indian Institute of Technology Guwahati
                        </div><!--//education-body-->
                        <div class="time">2012 - 2016</div>
                        <div class="desc">
                        </div>
                    </div><!--//item-inner-->
                </div><!--//item-->
              
                
            </div><!--//row-->
        </section><!--//section-->
        
        
        <section id="skills-section" class="skills-section section text-center">
            <h2 class="section-title">Professional Skills</h2>
            <div class="top-skills">
                <h3 class="subtitle">Top Skills</h3>
                <div class="row">
                    <div class="item col-xs-12 col-sm-4">
                        <div class="item-inner">
                            <PieChart bar-color="#008fa1" scale-color="#fff" :percent="100" :size="160" :line-width="8">
                              Python
                            </PieChart>
                            <h4 class="skill-name">Python &amp; Scikit Learn</h4>
                            <div class="level">Expert, 3 years</div>
                            <div class="desc">
                                Prototyping ML and data analytics algorithms using scikit-learn, pandas and TensorFlow.
                            </div>
                        </div><!--//item-inner-->
                    </div><!--//item-->
                    <div class="item col-xs-12 col-sm-4">
                        <div class="item-inner">
                            <PieChart bar-color="#008fa1" scale-color="#fff" :percent="75" :size="160" :line-width="8">
                              Java
                            </PieChart>
                            <h4 class="skill-name">Java</h4>
                            <div class="level">Advanced, 1 years</div>
                            <div class="desc">
                                Learnt and mastered at work.
                            </div>
                        </div><!--//item-inner-->
                    </div><!--//item-->
                    <div class="item col-xs-12 col-sm-4">
                        <div class="item-inner">
                            <PieChart bar-color="#008fa1" scale-color="#fff" :percent="60" :size="160" :line-width="8">
                              C/C++
                            </PieChart>
                            <h4 class="skill-name">C/C++</h4>
                            <div class="level">Advanced, 4 years</div>
                            <div class="desc">
                                First language, saviour since 2012.
                            </div>
                        </div><!--//item-inner-->
                    </div><!--//item-->
                </div><!--//row-->
            </div><!--//top-skills-->
            
            <div class="other-skills">
                <h3 class="subtitle">Other Skills</h3>
                <div class="misc-skills">
                    <span class="skill-tag">TensorFlow</span>
                    <span class="skill-tag">Numpy</span>
                    <span class="skill-tag">Linux</span>
                    <br>
                    <span class="skill-tag">MATLAB</span>
                    <span class="skill-tag">Git</span>
                    <br>
                    <span class="skill-tag">Boost Statechart Library</span>
                    <span class="skill-tag">Network Programming</span>
                </div>
            </div><!--//other-skills-->
            
        </section><!--//skills-section-->
        
        <!-- <section id="portfolio" class="portfolio-section section">
            <h2 class="section-title">Portfolio</h2>
            <ul id="filters" class="filters clearfix">
                <li class="type">All</li>
                <li class="type">Back-end</li>
                <li class="type">Front-end</li>
            </ul>
            <div class="items-wrapper row"></div>
            
        </section> -->
        
        <section id="contact" class="contact-section section">
            <h2 class="section-title">Get in Touch</h2>
            <div class="intro">
                <img class="profile-image" src="//github.com/achaar.png" alt="">
                <div class="dialog">
                    <p>
                      I'm currently learning to develop better ML Applications.
                      <br>
                      <br>
                      <br>
                    </p>
                </div><!--//diaplog-->
            </div><!--//intro-->

        </section><!--//section-->
        
    </div><!--//wrapper-->
    
    <footer class="footer text-center">
        <div class="container">
            <small class="copyright">&copy; 2018 Ankur Kunder</small>
        </div><!--//container-->
    </footer>
  </div>
</template>

<script>
import PieChart from 'vue-easy-pie-chart'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'

export default {
  components: { PieChart }
}
</script>

<style lang="scss" scoped>
.btn,
a.btn {
  line-height: 1.5;
  background: #008fa1;
  background-clip: padding-box;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  font-weight: 500;
}

.btn:hover,
a.btn:hover {
  color: #fff;
  background: #00a5bb;
}


.header {
  background: #00BCD4;
  color: #fff;
}
.header a {
  color: #fff;
}
.header .top-bar {
  position: relative;
  padding-top: 15px;
  padding-bottom: 120px;
}
.header .social {
  margin-bottom: 0;
}
.header .social a {
  color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  text-align: center;
  width: 32px;
  height: 32px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  padding-top: 2px;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  margin: 0 5px;
}
.header .social a:hover {
  color: #fff;
  border-color: #fff;
}
.header .actions {
  position: absolute;
  right: 15px;
  top: 15px;
}
.header .actions .fa {
  margin-right: 5px;
}
.header .actions a {
  margin-right: 10px;
  color: #fff;
}
.header .actions a:last-child {
  margin-right: 0;
}
.header .profile-image {
  position: absolute;
  width: 160px;
  height: 160px;
  left: 50%;
  margin: -160px -80px;
  border: 2px solid;
  border-radius: 160px;
  object-fit: contain;
}

.header .name {
  font-size: 48px;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
}
.header .title {
  font-size: 28px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.header .intro {
  background: #00a5bb;
  padding-top: 90px;
  padding-bottom: 60px;
  position: relative;
  font-size: 16px;
}

.header .profile {
  max-width: 800px;
  margin: 0 auto;
}

.header .contact-info {
  background: #008fa1;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 16px;
}

.header .contact-info ul {
  margin-bottom: 0;
}

.header .contact-info li {
  margin-right: 30px;
  color: rgba(255, 255, 255, 0.8);
}
.header .contact-info li a {
  color: rgba(255, 255, 255, 0.8);
}
.header .contact-info li a:hover {
  color: #fff;
}
.header .contact-info li:last-child {
  margin-right: 0;
}
.header .contact-info li .fa {
  margin-right: 10px;
}
/* Page Nav */
.page-nav-space-holder {
  height: 60px;
  position: relative;
}
.page-nav-wrapper {
  background: #007888;
  padding-top: 20px;
  padding-bottom: 20px;
  position: absolute;
  width: 100%;
  left: 0;
  -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.page-nav-wrapper.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #00BCD4;
}
.page-nav-wrapper a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-weight: 500;
}
.page-nav-wrapper .page-nav {
  margin: 0 auto;
  display: inline-block;
}
.page-nav-wrapper .page-nav li {
  margin-right: 30px;
  display: inline-block;
  background: none;
}
.page-nav-wrapper .page-nav li:hover,
.page-nav-wrapper .page-nav li:active {
  background: none;
}
.page-nav-wrapper .page-nav li.active a {
  color: #fff;
  background: none;
}
.page-nav-wrapper .page-nav li a {
  color: rgba(255, 255, 255, 0.6);
  padding: inherit;
}
.page-nav-wrapper .page-nav li a:hover {
  color: #fff;
}
.page-nav-wrapper .page-nav li a:hover,
.page-nav-wrapper .page-nav li a:active,
.page-nav-wrapper .page-nav li a:focus {
  background: none;
}
.page-nav-wrapper .page-nav li:last-child {
  margin-right: 0;
}
.wrapper {
  padding-top: 60px;
  padding-bottom: 60px;
}
.section {
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  padding: 45px;
  background: #fff;
  margin-bottom: 45px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
  border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.section:last-child {
  margin-bottom: 0;
}
.section-title {
  margin-top: 0;
  margin-bottom: 45px;
  font-size: 24px;
  text-align: center;
}
.timeline {
  border-left: 3px solid #00BCD4;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  position: relative;
  padding: 0 30px;
  margin-left: 280px;
}
.timeline .item {
  position: relative;
  margin-bottom: 45px;
}
.timeline .item:last-child {
  margin-bottom: 0;
}
.timeline .item:before {
  content: "";
  position: absolute;
  left: -43px;
  top: 0;
  display: inline-block;
  width: 22px;
  height: 22px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  background: #fff;
  border: 3px solid #00BCD4;
}
.timeline .item:after {
  content: "";
  position: absolute;
  left: -37px;
  top: 6px;
  display: inline-block;
  width: 10px;
  height: 10px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  background: #00BCD4;
  z-index: 10;
}
.timeline .work-place {
  position: relative;
}
.timeline .location {
  position: absolute;
  right: 0;
  top: 2px;
  color: #8a8a8a;
}
.timeline .location .fa {
  margin-right: 5px;
}
.timeline .place {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 300;
}
.timeline .job-meta {
  position: absolute;
  left: -280px;
  top: 0;
}
.timeline .job-meta .title {
  font-size: 18px;
  color: #00BCD4;
}
.timeline .job-meta .time {
  color: #8a8a8a;
}
.timeline .job-desc {
  color: #666;
}
.education-section .item {
  margin-bottom: 45px;
}
.education-section .item-inner {
  padding: 0 30px;
}
.education-section .degree {
  font-size: 18px;
  color: #00BCD4;
  margin-top: 0;
  margin-bottom: 0px;
}
.education-section .education-body {
  font-weight: 500;
  margin-bottom: 0px;
  font-size: 16px;
  font-weight: 300;
}
.education-section .time {
  color: #8a8a8a;
  margin-bottom: 15px;
}
.education-section .desc {
  color: #666;
}
.skills-section .subtitle {
  font-size: 18px;
  color: #8a8a8a;
  margin-top: 0;
  margin-bottom: 45px;
  font-weight: 300;
}
.skills-section .top-skills {
  margin-bottom: 60px;
}
.skills-section .top-skills .item {
  margin-bottom: 45px;
}
.skills-section .level {
  color: #8a8a8a;
  margin-bottom: 15px;
}
.skills-section .desc {
  color: #666;
}
.skills-section .skill-tag {
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  padding: 6px 30px;
  display: inline-block;
  margin-right: 10px;
  border: 1px solid #f5f5f5;
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 16px;
}
.chart-easy-pie {
  positon: relative;
}
.chart {
  width: 110px;
  height: 110px;
  vertical-align: middle;
  position: relative;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 30px;
}
.chart span {
  line-height: 110px;
}
.chart canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.testimonials-section .testimonials-carousel {
  max-width: 800px;
  margin: 0 auto;
}
.testimonials-section .item {
  padding-left: 60px;
  margin-bottom: 45px;
}
.testimonials-section .quote {
  border-left: none;
  padding: 0;
  font-size: 22px;
  color: #666;
  font-weight: 300;
  position: relative;
}
.testimonials-section .source .name {
  font-size: 16px;
}
.testimonials-section .source .position {
  color: #8a8a8a;
}
.testimonials-section .fa-quote-left {
  position: absolute;
  left: -60px;
  top: 0;
  width: 36px;
  height: 36px;
  display: inline-block;
  background: #00BCD4;
  color: #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  text-align: center;
  padding-top: 10px;
  font-size: 16px;
}
.testimonials-section .carousel-indicators {
  bottom: 0;
  margin-bottom: 0;
}
.testimonials-section .carousel-indicators li {
  background-color: #bdbdbd;
  border: none;
  width: 10px;
  height: 10px;
  margin: 0;
  margin-right: 5px;
}
.testimonials-section .carousel-indicators li.active {
  background-color: #00BCD4;
  width: 10px;
  height: 10px;
  margin: 0;
  margin-right: 5px;
}
.portfolio-section .filters {
  list-style: none;
  margin: 0 auto;
  margin-bottom: 60px;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
}
.portfolio-section .filters .type {
  margin-right: 30px;
  list-style: none;
  display: inline-block;
  padding: 8px 15px;
  color: #8a8a8a;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
}
.portfolio-section .filters .type:last-child {
  margin-right: 0;
}
.portfolio-section .filters .type.active {
  color: #00BCD4;
  border-bottom: 2px solid #00BCD4;
}
.portfolio-section .item {
  margin-bottom: 30px;
}
.portfolio-section .item-inner {
  background: #00BCD4;
  color: #fff;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
  border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  position: relative;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
}
.portfolio-section .item-inner:hover {
  background: #00c5de;
}
.portfolio-section .item-inner:hover img {
  -webkit-opacity: 0.9;
  -moz-opacity: 0.9;
  opacity: 0.9;
}
.portfolio-section .item-inner .content {
  padding: 30px;
  padding-bottom: 75px;
  position: relative;
}
.portfolio-section .item-inner .content a {
  color: #fff;
}
.portfolio-section .item-inner .content .sub-title {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 5px;
}
.portfolio-section .item-inner .content .meta {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.portfolio-section .item-inner .content .action {
  position: absolute;
  bottom: 30px;
  left: 30px;
}
.portfolio-section .item-inner .link-mask {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.contact-section .intro {
  position: relative;
  padding: 30px;
  padding-left: 190px;
  font-size: 16px;
  color: #666;
}
.contact-section .intro .profile-image {
  width: 120px;
  height: 120px;
  position: absolute;
  left: 30px;
}
.contact-section .intro p {
  margin-bottom: 15px;
}
.contact-section .service-list {
  margin-left: 30px;
  margin-bottom: 15px;
}
.contact-section .service-list li {
  margin-bottom: 15px;
}
.contact-section .service-list .fa {
  color: #00BCD4;
}
.contact-section .social {
  margin-bottom: 0;
}
.contact-section .social li {
  margin-right: 10px;
}
.contact-section .social li:last-child {
  margin-right: 0;
}
.contact-section .social a {
  display: inline-block;
  text-align: center;
  font-size: 24px;
  color: #8a8a8a;
}
.contact-section .social a:hover {
  color: #00BCD4;
}
.footer .container {
  padding: 30px;
  color: #8a8a8a;
  letter-spacing: 0.5px;
}
.footer .container a {
  color: #8a8a8a;
}
/* Extra small devices (phones, less than 768px) */
@media (max-width: 767px) {
  .header .social {
    margin: 0 auto;
    text-align: center;
  }
  .header .actions {
    position: static;
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: center;
  }
  .header .actions .btn {
    margin-bottom: 15px;
    font-size: 12px;
    display: inline-block;
    width: 100%;
  }
  .header .actions .btn:last-child {
    margin-bottom: 0;
  }
  .header .name {
    font-size: 36px;
  }
  .header .title {
    font-size: 22px;
  }
  .header .contact-info li {
    margin-right: 0;
    margin-bottom: 15px;
    font-size: 14px;
    width: 100%;
    display: inline-block;
  }
  .header .contact-info li:last-child {
    margin-bottom: 0;
  }
  .section {
    padding: 30px;
  }
  .section-title {
    font-size: 20px;
  }
  .timeline {
    margin-left: 0;
    padding-right: 0;
  }
  .timeline .place {
    margin-bottom: 5px;
  }
  .timeline .job-meta {
    position: static;
    margin-bottom: 15px;
  }
  .education-section .item {
    padding: 0;
  }
  .portfolio-section .filters .type {
    font-size: 12px;
    margin-right: 5px;
    padding: 8px 5px;
  }
  .portfolio-section .item-inner .content {
    padding: 15px;
  }
  .portfolio-section .item-inner .content .sub-title {
    font-size: 14px;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .portfolio-section .item-inner .content .meta {
    margin-bottom: 30px;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .portfolio-section .item-inner .content .action {
    position: static;
    font-size: 12px;
  }
  .contact-section .intro {
    padding: 0;
    text-align: center;
  }
  .contact-section .intro .profile-image {
    position: static;
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: center;
  }
  .contact-section .service-list {
    margin-left: 0;
  }
  .contact-section .social {
    margin: 0 auto;
  }
}

.list-inline {
  li {
    display: inline-flex;
  }
}

.img-responsive {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
