<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta data -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Styles -->
    <link rel="stylesheet" href="css/StylesHey.css" />
    <link rel="stylesheet" href="fragments/css/navbarStyling.css">

    <!-- Title -->
    <title>HomePage</title>
  </head>

  <body>
    <?php include_once 'fragments/navbar.php'  ?>
    <h1 class="animated">Hey Helper !</h1>
    <script>
      setTimeout(function () {
        window.location.href = "Template.html";
      }, 4000);
    </script>
  </body>
</html>
