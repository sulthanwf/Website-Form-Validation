<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Internet Programming Assignment1">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="Sulthan Auliya">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <?php include 'external_library.html';
        ?>
        <title>Internet Programming Assignment 1</title>

    </head>

    <body class="index">
        <header>
            <?php include 'header.html'
            ?>
        </header> 

        <div class="jumbotron">
            <h1>Welcome</h1>
        </div>

        <section id="content">
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
                        <img src="content/img/harbour bridge.jpg" alt="" height="100%" width="100%">
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
                <div class="contact-us-form">
                    <div class="heading">
                        <h3>Contact Us</h3>
                    </div>
                    <div class="contact-form">
                        <form id="contact-form">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name" id="fname">
                                <i class="fa fa-check-circle"></i>
                                <i class="fa fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name" id="lname">
                                <i class="fa fa-check-circle"></i>
                                <i class="fa fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Contact No." id="contactnum">
                                <i class="fa fa-check-circle"></i>
                                <i class="fa fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" id="email">
                                <i class="fa fa-check-circle"></i>
                                <i class="fa fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div class="form-group">
                                <textarea id="message" class="form-control" placeholder="Your Message"></textarea>
                                <i class="fa fa-check-circle"></i>
                                <i class="fa fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <footer class="page-footer font-small blue pt-4">  
            <script src="js/contactusvalidation.js"></script>
            <script>
                $(document).ready(function(){
                    $(".nav-link").hover(function(){
                        $(this).css("color", "wheat");
                    }, function(){
                        $(this).css("color", "rgba(255,255,255,.5)");
                    });
                });
            </script>
            <?php include 'footer.html';
            ?>
        </footer>
    </body>
</html>