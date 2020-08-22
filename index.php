<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Internet Programming Assignment1">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="Sulthan Auliya">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php include 'external_library.html';?>

        <title>Internet Programming Assignment 1</title>
    </head>

    <body class="index">
        <header>
            <?php include 'header.html';?>
        </header> 

        <section id="greetings">
            <div class="jumbotron">
                <h1>Auckland</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <p>
                            &nbsp Auckland is a metropolitan city in the North Island of New Zealand. The most populous urban 
                            area in the country, Auckland has an urban population of about 1,467,800 (June 2019). It is 
                            located in the Auckland Region—the area governed by Auckland Council—which includes outlying 
                            rural areas and the islands of the Hauraki Gulf, resulting in a total population of 1,642,800. 
                            Auckland is a diverse, multicultural and cosmopolitan city, home to the largest Polynesian 
                            population in the world. The Māori-language name for Auckland is Tāmaki Makaurau, meaning 
                            "Tāmaki desired by many", in reference to the desirability of its natural resources and geography.
                        </p>
                    </div>
                    <div class="col-sm-6">
                        <img src="content/img/harbour bridge.jpg" class="img-responsive" alt="Auckland Harbour Bridge">
                    </div>
                </div>
            </div>
        </section>

        <section id="video">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="content/vid/Springvercargill.mp4"></iframe>
            </div>
        </section>
        
        <section id="contact-us">
            <div class="container-fluid">
                <?php include 'contactus.html';?>
            </div>
        </section>

        <footer>  
            <?php include 'footer.html';?>
            <script src="js/contactusvalidation.js"></script>
        </footer>
    </body>
</html>