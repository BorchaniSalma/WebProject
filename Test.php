<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Meta data -->
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Bootstrap CSS import -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />

  <!-- Google font imports -->
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">

  <!-- Font awesome import -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
  <title>Personality test</title>

  <!-- Styles -->
    <link rel="stylesheet" href="css/test.css">
  <link rel="stylesheet" href="fragments/css/navbarStyling.css">
</head>

<body>
  <?php include_once 'fragments/navbar.php'  ?>

  <div class="start_btn"><button>Start Quiz</button></div>

  <!-- Info Box -->
  <div class="info_box">
      <div class="info-title"><span>Some Rules of this Quiz</span></div>
      <div class="info-list">
          <div class="info">1. This test may take some time let's say <span>30 minutes</span></div>
          <div class="info">2. Answer intuitively don't hesitate.</div>
          <div class="info">3. When answering a question it shouldn't take you more than <span>10 seconds</span> .</div>
          <div class="info">4. This test will reveal your true self and make you understand yourself more.</div>
          <div class="info">5. Enjoy yourself.</div>
      </div>
      <div class="buttons">
          <button class="quit">Exit Quiz</button>
          <button class="restart">Continue</button>
      </div>
  </div>

  <!-- Quiz Box -->
  <div class="quiz_box">
      <header>
          <div class="title">Awesome Quiz Application</div>
          <div class="time_line"></div>
      </header>
      <section>
          <div class="que_text">
              <!-- Here I've inserted question from JavaScript -->
          </div>
          <div class="option_list">
              <!-- Here I've inserted options from JavaScript -->
          </div>
      </section>

      <!-- footer of Quiz Box -->
      <footer>
          <div class="total_que">
              <!-- Here I've inserted Question Count Number from JavaScript -->
          </div>
          <button class="next_btn">Next Que</button>
      </footer>
  </div>


  <!-- Inside this JavaScript file I've inserted Questions and Options only -->
  <!-- <script src="js/questions.js"></script> -->

  <!-- Inside this JavaScript file I've coded all Quiz Codes -->
  <!-- <script src="js/script.js"></script> -->
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
></script>
<script src="js/text.js"></script>
<script src="js/script.js"></script>


</html>