const menu = document.querySelector('.menu-bar');

function createMenu() { 
    menu.innerHTML = `
    <ul>
            <li class="active"><a href="../index.html"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>Home</a></li>
            <li><a href="../pkPages/micropk.html"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                microPK</a>
                <div class="sub-menu-1">
                    <ul>
                        <li class="hover-me"><a href="../pkPages/circles.html" class="href">Circle Games</a>
                            <div class="sub-menu-2">
                                <ul>
                                    <li><a href="https://rainsong.itch.io/another-circle-game-with-vector-circles-this-time" target="_break">Circles</a></li>
                                    <li><a href="https://rainsong.itch.io/circle-game-pk-practice" target="_break">Circle Game</a></li>
                                    <li><a href="https://rainsong.itch.io/basic-circle-game" target="_break">Basic Circle Game</a></li>
                                    <li><a href="https://rainsong.itch.io/more-circles" target="_break">More Circles</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="hover-me"><a href="../pkPages/sheep.html" class="href">Sheep-Herding</a>
                            <div class="sub-menu-2">
                                <ul>
                                    <li><a href="https://rainsong.itch.io/sheep-herding-game" target="_break">Sheep!</a></li>
                                    <li><a href="https://rainsong.itch.io/sheep-herding-game-2" target="_break">Sheep! 2</a></li>                               
                                </ul>
                            </div>
                        </li>
                        <li class="hover-me"><a href="../pkPages/fish.html" class="href">Fish</a>
                            <div class="sub-menu-2">
                                <ul>
                                    <li><a href="https://rainsong.itch.io/fishhhhhh" target="_break">Fishhhhh</a></li>
                                    <li><a href="https://rainsong.itch.io/fishhhhh-2" target="_break">Fishhhh 2</a></li>                         
                                </ul>
                            </div>
                        </li>
                        <li class="hover-me"><a href="https://www.fourmilab.ch/rpkp/" target="_break">RetroPsychokinesis Project</a></li>
                        <li class="hover-me"><a href="pkPages/otherpk.html"">Other Resources</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="../espPages/rvrelated.html"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                RV-related</a>
                <div class="sub-menu-1">
                    <ul>
                        <li class="hover-me"><a href="../espPages/dowsing.html" class="href">Dowsing</a>
                            <div class="sub-menu-2">
                                <ul>
                                    <li><a href="https://rainsong.itch.io/map-dowsing-game" target="_break">Map-Dowsing 1</a></li>
                                    <li><a href="https://rainsong.itch.io/map-dowsing-game-2" target="_break">Map-Dowsing 2</a></li> 
                                </ul>
                            </div>
                        </li>
                        <li class="hover-me"><a href="../espPages/ideogram.html" class="href">Ideograms</a>
                            <div class="sub-menu-2">
                                <ul>
                                    <li><a href="https://rainsong.itch.io/ideogram-drills-for-remote-viewers" target="_break">Ideogram Drills</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="hover-me"><a href="../espPages/precog.html" class="href">Precog</a>
                            <div class="sub-menu-2">
                                <ul>
                                    <li><a href="https://rainsong.itch.io/dicebot-and-card-guessing" target="_break">Dicebot and Card-Guessing</a></li>                               
                                </ul>
                            </div>
                        </li>
                        <li class="hover-me"><a href="../espPages/otherrv.html"">Other Resources</a></li>
                    </ul>
                </div>
            </li>           
        </ul>
    `
}

createMenu();
 