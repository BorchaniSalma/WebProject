<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta data -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Bootstrap CSS import -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />

    <!-- Google font imports -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Train+One&display=swap"
      rel="stylesheet"
    />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">

    <!-- Font awesome import -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
      crossorigin="anonymous"
    />

    <!-- Styles -->
    <link rel="stylesheet" href="css/styles.css" />
    <!--style for navbar -->
      <link rel="stylesheet" href="fragments/css/navbarStyling.css">

    <!-- Title -->
    <title>HomePage</title>
  </head>

  <body>
    <!-- Header section  -->
    <section id="header">
      <!--including nav bar section -->
      	
      <?php include_once 'fragments/navbar.php'  ?>
      
      <div class="header-content row">
        <div class="col col-lg-6 col-sm-12 col-xs-12">
          <p>" Knowing yourself is the beginning of all wisdom. "</p>
          <h2 class="author-name">Aristotle</h2>
        </div>
        
      </div>
      
    </section>
    <section class="about">
      <div class="contentBx">
        <h2 class="heading"> About Us </h2>
        <p class ="text"> 
          The Enneagram’s structure may look complicated, although it is actually simple.
           It will help you understand the Enneagram if you sketch it yourself.

Draw a circle and mark nine equidistant points on its circumference. 
Designate each point by a number from one to nine, with nine at the top, for symmetry and by convention. 
Each point represents one of the nine basic personality types.


        </p>
      </div>
      
    </section>
    <section id="features"></section>

    <!-- Testimonials section  -->
    <section id="testimonials">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="ressources/images/portrait-1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Natalie Portman</h5>
                        <p>My life is really changing after discovering who am I .</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class='frame'>
                        <img src="ressources/images/portrait-5.jpg" class="d-block w-100" alt="...">
                    </div>

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Salma borcheni</h5>
                        <p>I think i am in love with this website .</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="ressources/images/portrait-3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Slim Hammami</h5>
                        <p>I love football .</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </section>

    <!-- Pricing section  -->
    <section id="pricing"></section>

    <!-- includingFooter section  -->
    <?php include_once 'fragments/footer.php'  ?>
    <!-- Bootstrap JS Imports -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
git
    <!-- MY js import -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/script.js"></script>
    
  </body>
</html>
