<html>
    <head>
        <?php include 'external_library.html';?>
        <title>Internet Programming Assignment 1</title>
    </head>
    
    <body>
        <header>
            <?php include 'header.html';?>
        </header> 

        <section id="tab">
            <div class="tab">
                <button class="tablinks" onclick="openTab(event, 'MoreInfo')">More Information</button>
                <button class="tablinks" onclick="openTab(event, 'Gallery')">Gallery</button>
                <button class="tablinks" onclick="openTab(event, 'Payment')" id="defaultOpen">Payment</button>
            </div>
        </section>

        <section id="tab-content">
            <div id="MoreInfo" class="tabcontent">
                <?php include 'moreinfo.html';?>
            </div>
          
            <div id="Gallery" class="tabcontent">
                  <?php include 'gallery.html';?>
            </div>
          
            <div id="Payment" class="tabcontent">
                  <?php include 'payment.html';?>
            </div>
        </section>
          
        <footer>
            <?php include 'footer.html';?>   
            <script src="js/tab.js"></script>
            <script src="js/paymentvalidation.js"></script>
            <script src="js/hover.js"></script>
          </footer>
    </body>
</html>