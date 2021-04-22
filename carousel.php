<section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">Testimonials</h2>
            <div class="my-carousel owl-carousel">
                <div class="my-card">
                    <div class="my-box">
                        <img src="ressources/images/portrait-1.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="my-card">
                    <div class="my-box">
                        <img src="ressources/images/portrait-1.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="my-card">
                    <div class="my-box">
                        <img src="ressources/images/portrait-1.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="my-card">
                    <div class="my-box">
                        <img src="ressources/images/portrait-1.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="my-card">
                    <div class="my-box">
                        <img src="ressources/images/portrait-1.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <style>
            
html{
    scroll-behavior: smooth;
}

/* custom scroll bar */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* all similar content styling codes */

.max-width {
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}
.teams{
    font-family: 'Poppins', sans-serif;
}


section .title{
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
}
section .title::before{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 250px;
    height: 3px;
    background-color:yellow;
    transform: translateX(-50%);
}



/* teams section styling */


.teams .my-carousel .my-card{
    background: #1c1427;
    border-radius: 6px;
    padding: 25px 35px;
    text-align: center;
    overflow: hidden;
    transition: all 0.3s ease;
}
.teams .my-carousel{
    margin:50px 0;

}
.teams .my-carousel .my-card:hover{
    background: yellow;
}
.teams .my-carousel .my-card .my-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}
.teams .my-carousel .my-card:hover .my-box{
    transform: scale(1.05);
}
.teams .my-carousel .my-card .text{
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;

}
.teams .my-carousel .my-card img{
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #7eca9c;
    transition: all 0.3s ease;
}
.teams .my-carousel .my-card:hover img{
    border-color: #40394a;
}
.owl-dots{
    text-align: center;
    margin-top: 20px;
}
.owl-dot{
    height: 13px;
    width: 13px;
    margin: 0 5px;
    outline: none!important;
    border-radius: 50%;
    border: 2px solid #7eca9c!important;
    transition: all 0.3s ease;

}
.owl-dot.active{
    width: 35px;
    border-radius: 14px;
}
.owl-dot.active,
.owl-dot:hover{
    background: #7eca9c!important;
}
#testimonials{
    background-color: #40394a;
    height: 90vh;

}
#testimonials .teams .max-width .title{
    padding-top:50px!important;
    color:#ccffbd;


}
#testimonials p{
    color:#ffff;
    transition:color 0.3s ease;
}
#testimonials .teams .my-carousel .my-card:hover p{

    color:#1c1427;

}
#testimonials .teams .my-carousel .my-card:hover .text{
    transition:color 0.3s ease;
}
#testimonials .teams .my-carousel .my-card:hover .text{

    color:mediumseagreen;

}
        </style>