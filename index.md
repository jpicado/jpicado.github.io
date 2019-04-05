---
layout: default
title: Jose Picado
---
  <div class="container">
    <br>
    <br>
    <br>
  </div>
  <!-- container -->

  <!-- ==== ABOUT ==== -->
  <div class="container" id="about" name="about">
    <div class="row">
      <div class="col-xs-12 col-xs-offset-1 col-sm-12 col-sm-offset-1 col-md-12 col-md-offset-1">
        <div class="">
          <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-3 col-md-offset-2">
            <img src="img/skydiving.png" alt="Jose" class="img-circle"/>
          </div>
          <div class=" col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-7">
            <h1 id="headerName">Jose Picado</h1>
            <!--div id="headerTitle">Ph.D. Candidate in Computer Science</div-->
            <h4>jpicado [AT] gmail [DOT] com</h4>
            <div>
              <a href="https://www.linkedin.com/in/jpicado"><img width="32" src="img/icons/linkedin.png" alt="LinkedIn"/></a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://github.com/jpicado"><img width="32" src="img/icons/github.png" alt="GitHub"/></a> 
              &nbsp;&nbsp;&nbsp;
              <a href="mailto:jpicado@gmail.com"><img width="32" src="img/icons/mail.png" alt="Email me"/></a>
              &nbsp;&nbsp;&nbsp;
              <a href="jose_picado_resume.pdf"><img width="32" src="img/icons/resume.png" alt="Resume"/></a>
            </div>
          </div>
        </div>
        <div class=" col-xs-10 col-sm-10 col-md-10">
          <div>
            <!--p>I am a Ph.D. Candidate in Computer Science at Oregon State University. 
            I am a member of the <a href="http://web.engr.oregonstate.edu/~termehca/">IDEA Lab</a>.
            My research is at the intersection of <span class="bold">data management</span> and <span class="bold">machine learning</span>.</p>
            <p>I have worked on <span class="bold">software development</span> and <span class="bold">data science</span> projects. You can find some of my <a href="#projects" class="smoothscroll">projects</a> and <a href="#publications" class="smoothscroll">publications</a> below.</p-->
            <br>
            <p><span class="bold">Bio.</span> I am a Ph.D. candidate at Oregon State University, where I do research on <span class="bold">data management</span> and <span class="bold">machine learning</span>. I have worked on software development and data science projects. See my <a href="#projects" class="smoothscroll">portfolio</a> and <a href="#publications" class="smoothscroll">publications</a> below.</p>
            <p>My research has mostly focused on <span class="bold">relational machine learning</span> &mdash; machine learning algorithms that learn over structured data, such as relational databases. I study the impact that data heterogeneities (e.g., structural and content heterogeneities) have on the learning algorithms and how to overcome them. I am advised by <a href="http://web.engr.oregonstate.edu/~termehca/">Arash Termehchy</a>.</p>
            <p>During my Ph.D., I squeezed three <span class="bold">internships</span>, one at Microsoft (2017) and two at Intel (2015 and 2014). I was also a <span class="bold">teaching assistant</span> for the Introduction to Databases, Database Management Systems, Introduction to Artificial Intelligence, Machine Learning and Data Mining, Data Structures, and Web Development courses.</p>
            <p>Before that, I lived in North Carolina for two years, where I got my <span class="bold">Masters</span> degree in Computer Science from Wake Forest University, advised by <a href="http://utdallas.edu/~sriraam.natarajan/">Sriraam Natarajan</a>. My research was on statistical relational learning, specifically with applications to information extraction.</p>
            <p>Even before that, I lived in my home country of <a href="http://happyplanetindex.org/countries/costa-rica">Costa Rica</a>, where I got my <span class="bold">Bachelors</span> degree in <span class="bold">Computer Science</span> from Costa Rica Institute of Technology and then worked as a <span class="bold">Software Engineer</span> at Avantica Technologies.</p>
            <p>I enjoy playing tennis, football (soccer), running, music, and traveling.</p>
            <p><span class="bold">NOTE.</span> I am looking for a data scientist/research scientist/software engineer full-time position.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- row -->
  </div>
  <!-- container -->


  <!-- ==== PROJECTS ==== -->
  <div class="container" id="projects" name="projects">
    <div class="row">
      <h2 class="centered">Portfolio</h2>
      <div class="project col-md-12 vertical-align">
        <div class="col-md-3">
          <img src="portfolio/cloud-databases/img.png" alt="" class="" width="225"/>
        </div>
        <div class="col-md-9">
          <div class="projectTitle"><h3>Predicting the lifespan of cloud databases</h3></div>
          <div class="projectDescription">
            <p>Public cloud database providers observe all sorts of different usage patterns and behaviors while operating their services. Service providers try to understand and characterize these behaviors in order to improve the quality of their service, provide new features for customers, and/or increase the efficiency of the operations. This project aimed at determining how long public cloud databases survive before being dropped. This project involved doing a large-scale survivability study of the Microsoft Azure SQL Databases, developing a machine learning classifier that classified cloud databases into short-lived and long-lived, and identifying some factors that can help predict the lifespan of cloud databases.</p>
            <!--p>The project involved getting data from Cosmos (Microsoft's internal Big Data system) using Scope (Cosmos's query language), cleaning and wrangling the data (using SQL and pandas), performing a survivability study (using lifelines), feature engineering, developing a machine learning classifier (using scikit-learn), and visualizing the results (using matplotlib).</p-->
            <span class="bold">Paper</span>: <a href="papers/Survivability_SIGMOD2018.pdf">SIGMOD 2018</a> (<a href="portfolio/cloud-databases/slides_p2066-picado.pdf">slides</a>).<br>
            <span class="bold">Skills</span>: Python, pandas, scikit-learn, lifelines, matplotlib, SQL, Microsoft Cosmos (Microsoft's internal Big Data system) and Scope (Cosmos's query language).<br>
            <span class="bold">Project type</span>: Internship project (Microsoft).<br>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="project col-md-12 vertical-align">
        <div class="col-md-3">
          <img src="portfolio/castor/img.png" alt="" class="" width="225"/>
        </div>
        <div class="col-md-9">
          <div class="projectTitle"><h3>Machine learning over structured data</h3></div>
          <div class="projectDescription">
            <p>Most machine learning algorithms assume that data can be stored in matrix form: rows represent observations and columns represent features. However, real-world data is rarely in this form. Instead, application domains usually contain information about different types of entities. One way of storing information about different types of entities is through relational databases. Given a relational database and training examples for a new concept, relational machine learning algorithms learn a definition of the concept in terms of existing relations in the database. We developed a relational learning system called Castor. We used Castor in different domains, such as learning a model to predict whether a chemical compound has anti-HIV activity, learning a model to predict whether a movie will be high grossing, and reverse-engineering SQL queries from training examples.</p>
            <span class="bold">Papers</span>: <a href="papers/Castor_SIGMOD2017.pdf">SIGMOD 2017</a> (<a href="portfolio/castor/slides_Castor_SIGMOD2017.pdf">slides</a>), <a href="papers/Castor_VLDBJ2018.pdf">VLDBJ 2018</a>, <a href="papers/Castor_VLDB2016.pdf">VLDB 2016</a>.<br>
            <span class="bold">Code</span>: <a href="https://github.com/jpicado/Castor">Github</a>.<br>
            <span class="bold">Skills</span>: Java, Python, pandas, SQL, VoltDB.<br>
            <span class="bold">Project type</span>: Research project.<br>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="project col-md-12 vertical-align">
        <div class="col-md-3">
          <img src="portfolio/castorx/img.png" alt="" class="" width="225"/>
        </div>
        <div class="col-md-9">
          <div class="projectTitle"><h3>Machine learning over heterogeneous databases</h3></div>
          <div class="projectDescription">
            <p>The information in a domain is usually spread across several databases, which often represent the same entities under different names. Therefore, learning over multiple databases may result in inaccurate definitions. Currently, users have to spend a great deal of time and effort to resolve these heterogeneities and create a unified and clean database instance to be used for learning. We developed CastorX, an extension of Castor, that learns directly over heterogeneous databases without any pre-processing step. The user specifies the attributes across relations that contain values that may refer to the same real-world entity through a set of declarative constraints. CastorX leverages these dependencies to learn accurate definitions over the heterogeneous data.</p>
            <span class="bold">Papers</span>: <a href="papers/p2066-picado.pdf">VLDB 2018</a>.<br>
            <span class="bold">Skills</span>: Java, Python, pandas, SQL, VoltDB.<br>
            <span class="bold">Project type</span>: Research project.<br>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="project col-md-12 vertical-align">
        <div class="col-md-3">
          <img src="portfolio/ade/img.png" alt="" class="" width="225"/>
        </div>
        <div class="col-md-9">
          <div class="projectTitle"><h3>Extracting adverse drug events from text</h3></div>
          <div class="projectDescription">
            <p>We developed a novel approach for extracting adverse drug events from text. Given a drug-effect pair, our method searches publicly available medical literature to find documents related to the drug-effect pair. It then converts these documents to standard natural language processing (NLP) features. These features are then used in a probabilistic classifier based on Markov logic networks to determine whether the drug-effect pair is indeed an adverse drug event.</p>
            <span class="bold">Paper</span>: <a href="papers/ADEKAIS.pdf">KAIS 2016</a>.<br>
            <span class="bold">Skills</span>: Java, Stanford CoreNLP.<br>
            <span class="bold">Project type</span>: Research project.<br>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="project col-md-12 vertical-align">
        <div class="col-md-3">
          <img src="portfolio/stackoverflow/img.png" alt="" class="" width="225"/>
        </div>
        <div class="col-md-9">
          <div class="projectTitle"><h3>Learning to label Stack Overflow questions</h3></div>
          <div class="projectDescription">
            <p>We used a deep learning approach to predict the tags of Stack Overflow questions, given their title and content. In particular, we used word vectors to represent each word and, given the sequence of word vectors corresponding to a question, we used a Long Short-Term Memory (LSTM) network to predict the tags of the question.</p>
            <span class="bold">Report</span>: <a href="portfolio/stackoverflow/Report.pdf">PDF</a> (<a href="portfolio/stackoverflow/Slides.pdf">slides</a>).<br>
            <span class="bold">Skills</span>: Python, keras, scikit-learn, deep learning.<br>
            <span class="bold">Project type</span>: Class project; Kaggle competition.<br>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="project col-md-12 vertical-align">
        <div class="col-md-3">
          <img src="portfolio/rainfall/img.png" alt="" class="" width="225"/>
        </div>
        <div class="col-md-9">
          <div class="projectTitle"><h3>Using Bayesian networks to estimate rainfall distribution given polarimetric radar data</h3></div>
          <div class="projectDescription">
            <p>Measuring the amount of rainfall on a specific field is an important issue in agriculture. We explored the use of Bayesian networks to estimate the distribution of rainfall given measurements from Polarimetric radars. We employed two different approaches for constructing the structure of the Bayesian network. First, we manually designed the structure based on domain knowledge. Second, we applied a structure learning algorithm to learn the structure automatically from data. Results showed that the Bayes network with the structure learned from data performed best.</p>
            <span class="bold">Report</span>: <a href="portfolio/rainfall/Report.pdf">PDF</a> (<a href="portfolio/rainfall/Slides.pdf">slides</a>).<br>
            <span class="bold">Skills</span>: Weka.<br>
            <span class="bold">Project type</span>: Class project; Kaggle competition.<br>
          </div>
        </div>
      </div>
      <!-- project -->
      <!--div class="project col-md-12 vertical-align">
        <div class="col-md-3">
          <img src="portfolio/ppi/img.png" alt="" class="" width="225"/>
        </div>
        <div class="col-md-9">
          <div class="projectTitle"><h3>Evaluating the scalability of clustering algorithms on protein-protein interaction networks</h3></div>
          <div class="projectDescription">
            <p>The structure of protein-protein interaction (PPI) networks reveals important properties of the functioning of living organisms. It has been found that most clusters in a PPI network correspond to either protein complexes or functional modules. In this project, we explored the automated detection of groups of clusters in PPI networks. We employed several clustering algorithms and evaluate their scalability as a function of the size of the input networks. We analyzed PPI networks from six organisms, and report the running times of the algorithms on these networks.</p>
            <span class="bold">Report</span>: <a href="portfolio/ppi/Report.pdf">PDF</a> (<a href="portfolio/ppi/Slides.pdf">slides</a>).<br>
            <span class="bold">Skills</span>: Python, igraph.<br>
            <span class="bold">Project type</span>: Class project.<br>
          </div>
        </div>
      </div-->
    </div>
    <!-- row -->
  </div>
  <!-- container -->

  <div class="container">
    
  </div>
  <!-- container -->



  <!-- ==== PUBLICATIONS ==== -->
  <div class="container" id="publications" name="publications">
    <div class="row">
      <h2 class="centered">Publications</h2>
      <div class="col-md-offset-1 col-md-10">
        <ul>
          <li>
            <span class="paper">Logical Scalability and Efficiency of Relational Learning Algorithms 
  </span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/Castor_VLDBJ2018.pdf">PDF</a>]<br>
            Jose Picado, Arash Termehchy, Alan Fern, Parisa Ataei<br>
            <span class="conference">The VLDB Journal (VLDBJ), 2018</span>
          </li>
          <li>
            <span class="paper">Learning Efficiently Over Heterogeneous Databases 
  </span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/p2066-picado.pdf">PDF</a>]<br>
            Jose Picado, Arash Termehchy, Sudhanshu Pathak<br>
            <span class="conference">Proceedings of the VLDB Endowment (PVLDB), 2018</span>
          </li>
          <li>
            <span class="paper">Survivability of Cloud Databases - Factors and Prediction 
  </span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/Survivability_SIGMOD2018.pdf">PDF</a>]<br>
            Jose Picado, Willis Lang, Edward C. Thayer<br>
            <span class="conference">Proceedings of the ACM International Conference on Management of Data (SIGMOD), 2018</span>
          </li>
          <li>
            <span class="paper">Learning Efficiently Over Heterogeneous Databases: Sampling and Constraints to the Rescue</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/CastorX_DEEM2018.pdf">PDF</a>]<br>
            Jose Picado, Arash Termehchy, Sudhanshu Pathak<br>
            <span class="conference">Proceedings of the Second Workshop on Data Management for End-to-End Machine Learning (DEEM), 2018</span>
          </li>
          <li>
            <span class="paper">AutoMode: Relational Learning With Less Black Magic</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/AutoMode_ICDE18.pdf">PDF</a>]<br>
            Jose Picado, Sudhanshu Pathak, Arash Termehchy, Alan Fern<br>
            <span class="conference">Proceedings of the IEEE International Conference on Data Engineering (ICDE), 2018</span>
          </li>
          <li>
            <span class="paper">Schema Independent Relational Learning</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/Castor_SIGMOD2017.pdf">PDF</a>]&nbsp;&nbsp;&nbsp;&nbsp;[<a href="https://arxiv.org/abs/1508.03846">Technical Report</a>]<br>
            Jose Picado, Arash Termehchy, Alan Fern, Parisa Ataei<br>
            <span class="conference">Proceedings of the ACM International Conference on Management of Data (SIGMOD), 2017</span>
          </li>
          <li>
            <span class="paper">Schema Independent and Scalable Relational Learning By Castor</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/Castor_VLDB2016.pdf">PDF</a>]<br>
            Jose Picado, Parisa Ataei, Arash Termehchy, Alan Fern<br>
            <span class="conference">Proceedings of the VLDB Endowment (PVLDB), 2016</span>
          </li>
          <li>
            <span class="paper">Markov Logic Networks for Adverse Drug Event Extraction from Text</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/ADEKAIS.pdf">PDF</a>]<br>
            Sriraam Natarajan, Vishal Bangera, Tushar Khot, Jose Picado, Anurag Wazalwar, Vitor Santos Costa, David Page, Michael Caldwell<br>
            <span class="conference">Knowledge and Information Systems Journal (KAIS), 2016</span>
          </li>
          <li>
            <span class="paper">Representation Independent Analytics Over Structured Data</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="https://arxiv.org/abs/1409.2553">Technical Report</a>]<br>
            Jose Picado, Yodsawalai Chodpathumwan, Arash, Termehchy, Alan Fern, Yizhou Sun<br>
            <span class="conference">Technical Report, 2014</span>
          </li>
          <!--li>
            <span class="paper">Schema Independence of Relational Learning Algorithms</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/SchemaIndepLearning_BUDA2014.pdf">PDF</a>]<br>
            Jose Picado, Arash Termehchy, Alan Fern<br>
            <span class="conference">ACM SIGMOD Workshop on Big Uncertain Data (BUDA), 2014</span>
          </li-->
          <!--li>
            <span class="paper">Toward Representation Independent Similarity Search Over Graphs</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/RepIndepGraphs_GRADES2014.pdf">PDF</a>]<br>
            Yodswalai Chodpathumwan, Arash Termehchy, Yizhou Sun, Amirhossein Aleyasin, Jose Picado<br>
            <span class="conference">ACM SIGMOD Workshop on Graph Data Management Experiences and Systems (GRADES), 2014</span>
          </li-->
          <li>
            <span class="paper">Effectively Creating Weakly Labeled Training Examples Via Approximate Domain Knowledge</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/WeakSupervision_ILP2014.pdf">PDF</a>]<br>
            Sriraam Nataranan, Jose Picado, Tushar Khot, Kristian Kersting, Christopher Re, Jude Shavlik<br>
            <span class="conference">International Conference on Inductive Logic Programming (ILP), 2014</span>
          </li>
          <li>
            <span class="paper">Efficient Information Extraction Using Statistical Relational Learning</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="https://wakespace.lib.wfu.edu/handle/10339/38554">Thesis</a>]<br>
            Jose Picado<br>
            <span class="conference">Master's Thesis, 2013</span>
          </li>
          <li>
            <span class="paper">Using Commonsense Knowledge to Automatically Create (Noisy) Training Examples from Text</span>&nbsp;&nbsp;&nbsp;&nbsp;[<a href="papers/WeakSupervision_StarAI2013.pdf">PDF</a>]<br>
            Sriraam Natarajan, Jose Picado, Tushar Khot, Kristian Kersting, Christopher Re, Jude Shavlik<br>
            <span class="conference">International Workshop on Statistical Relational AI (StarAI), 2013</span>
          </li>
        </ul>
      </div><!-- col-lg -->
    </div>
    <!-- row -->
  </div>
  <!-- container -->

  <!-- ==== EDUCATION ==== -->
  <div class="container" id="education" name="education">
    <div class="row">
      <h2 class="centered">Education</h2>
      <div class="col-lg-4">
        <a href="http://oregonstate.edu/"><img src="img/OSU_logo.png" class="school" alt="OSU"/></a>
        <h3>Oregon State University</h3>
        Ph.D. in Computer Science<br>
        Machine Learning and Databases<br>
        Advisor: <a href="http://web.engr.oregonstate.edu/~termehca/">Arash Termehchy</a>
      </div><!-- col-lg-4 -->
      <div class="col-lg-4">
        <a href="http://www.wfu.edu/"><img src="img/WFU_logo.jpg" class="school" alt="WFU"/></a>
        <h3>Wake Forest University</h3>
        M.Sc. in Computer Science<br>
        Machine Learning<br>
        Advisor: <a href="http://utdallas.edu/~sriraam.natarajan/">Sriraam Natarajan</a>
        <br>
        <a href="http://wakespace.lib.wfu.edu/handle/10339/38554">Thesis</a>
      </div><!-- col-lg-4 --> 
      <div class="col-lg-4">
        <a href="http://www.tec.ac.cr/"><img src="img/TEC_logo.png" class="school" alt="TEC"/></a>
        <h3>Costa Rica Institute of Technology</h3>
        B.S. in Computer Science
      </div><!-- col-lg-4 --> 
    </div>
    <!-- row -->
  </div>
  <!-- container -->