<html>
    <header>
        <?php include 'external_library.html'
        ?>
        <title>Internet Programming Assignment 1</title>
    </header>
    <body>
        <header>
            <?php include 'header.html'
            ?>
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
              <div class="container">
                <h3>Auckland</h3>
                <p>Auckland lies between the Hauraki Gulf to the east, then extending in Hunua Ranges to the south-east, 
                    the Manukau Harbour to the south-west, and the Waitakere Ranges and smaller ranges to the west and 
                    north-west. The surrounding hills are covered in rainforest and the landscape is dotted with 53 dormant 
                    volcanic cones. The central part of the urban area occupies a narrow isthmus between the Manukau Harbour 
                    on the Tasman Sea and the Waitemata Harbour on the Pacific Ocean. Auckland is one of the few cities in 
                    the world to have a harbour on each of two separate major bodies of water.
                    <br>
                    <br>
                    The isthmus on which Auckland resides was first settled in 1350 and was valued for its rich and fertile 
                    land. The Maori population in the area is estimated to have peaked at 20,000 before the arrival of 
                    Europeans. After a British colony was established in 1840, William Hobson, then Lieutenant-Governor 
                    of New Zealand, chose the area as his new capital. He named the area for George Eden, Earl of Auckland, 
                    British First Lord of the Admiralty. Maori-European conflict over land in the region led to war in 
                    the mid-19th century. Auckland was replaced as the capital in 1865 by Wellington, but the city 
                    continued to grow, initially because of its port and logging and gold mining in its hinterland,  
                    later from pastoral farming (especially dairy farming), and manufacturing in the city itself. 
                    It has throughout most of its history been the nation's largest city. Today, Auckland's central  
                    business district is New Zealand's leading economic hub.
                    <br>
                    <br>                    
                    The University of Auckland, founded in 1883, is the largest university in New Zealand. The city's 
                    varied cultural institutions-such as the Auckland War Memorial Museum, the Museum of Transport and 
                    Technology, and Auckland Art Gallery Toi o Tamaki—and national historic sites, festivals, performing 
                    arts, and sports activities are significant tourist attractions. Architectural landmarks include the 
                    Harbour Bridge, the Town Hall, the Ferry Building and the Sky Tower. The city is served by Auckland 
                    Airport, which handles around one million international passengers a month. Despite being one of the 
                    most expensive cities in the world, Auckland is recognised as one of the world's most liveable 
                    cities, ranked third in the 2019 Mercer Quality of Living Survey.</p>
              </div>
          </div>
          
          <div id="Gallery" class="tabcontent">
                <?php include 'gallery.html';
                ?>
              </div>
          </div>
          
          <div id="Payment" class="tabcontent">
                <?php include 'payment.html'
                ?>
          </div>
        </section>
          
          <footer>
              <?php 
                include 'footer.html';
              ?>   
            <script src="js/tab.js"></script>
            <script src="js/paymentvalidation.js"></script>
            <script>
                $(document).ready(function(){
                    $(".nav-link").hover(function(){
                        $(this).css("color", "wheat");
                    }, function(){
                        $(this).css("color", "rgba(255,255,255,.5)");
                    });
                });
            </script>
          </footer>
    </body>
</html>