import React, { Fragment } from "react";


class Iqro1 extends React.Component{
    render(){
        return(
            <Fragment>
            <header id="menu-bar_iqro-1">
        <div id="search_iqro-1">
            <input type="text"/>
        </div>
        <div id="menu_iqro-1">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
            <li><a href="">FaQ</a></li>
        </ul>
        </div>
    </header>
    <div id="maqro_iqro-1">
        
        <ul>
            <li><a href="">الدرس الأول</a></li>
            <li><a href="">الدرس الثاني</a></li>
            <li><a href="">الدرس الثالث</a></li>
            <li><a href="">الدرس الرابع</a></li>
            <li><a href="">الدرس الخامس</a></li>
            <li><a href="">الدرس السادس</a></li>
            <li><a href="">الدرس السابع</a></li>
        </ul>
    </div>
    <div id="bacaan_iqro-1">
            <table border="1px solid" width="700px">
                <tr>
                    <th height="100px" colspan="5" id="bismillah" onclick="bismillah.play();">بسم الله الرحمن الرحيم</th>
                    <script type="text/javascript">
                        const bismillah = new Audio();
                        bismillah.src = "sound/bismillah.mp3";
                    </script>
                </tr>

                <tr id="awwal_iqro-1">
                    <th colspan="3" id="huruf" onclick="judul.play();">حروف الهجاء المفردة</th>
                    <script type="text/javascript">
                        const judul = new Audio();
                        judul.src = "sound/judul.mp3";
                    </script>

                    <th colspan="2" id="darsu" onclick="darsul.play();">الدرس الأول</th>
                    <script type="text/javascript">
                        const darsul = new Audio();
                        darsul.src = "sound/darsul-awwal.mp3";
                    </script>
                </tr>

                <tr width = "" height="">
                    <td onclick="jim.play();">ج</td>
                    <script type="text/javascript">
                        const jim = new Audio();
                        jim.src = "sound/jim.mp3";
                    </script>

                    <td onclick="tsa.play();">ث</td>
                    <script type="text/javascript">
                        const tsa = new Audio();
                        tsa.src = "sound/tsa.mp3";
                    </script>

                    <td onclick="ta.play();">ت</td>
                    <script type="text/javascript">
                        const ta = new Audio();
                        ta.src = "sound/ta.mp3";
                    </script>

                    <td onclick="ba.play();">ب</td>
                    <script type="text/javascript">
                        
                    </script>

                    <td onclick="alif.play();">ا</td>
                    <script type="text/javascript">
                        const alif = new Audio();
                        alif.src = "sound/alif.mp3";
                    </script>
                </tr>

                <tr width = "" height="">
                    <td>ر</td>
                    <td>د</td>
                    <td>د</td>
                    <td>خ</td>
                    <td>ح</td>
                </tr>
                <tr width = "" height="">
                    <td>ض</td>
                    <td>ص</td>
                    <td>ش</td>
                    <td>س</td>
                    <td>ز</td>
                </tr>
                <tr width = "" height="">
                    <td>ف</td>
                    <td>غ</td>
                    <td>ع</td>
                    <td>ظ</td>
                    <td>ط</td>
                </tr>
                <tr width = "" height="">
                    <td>ن</td>
                    <td>م</td>
                    <td>ل</td>
                    <td>ك</td>
                    <td>ق</td>
                </tr>
                <tr width = "" height="">
                    <td>ي</td>
                    <td>ى</td>
                    <td>ء</td>
                    <td>ه</td>
                    <td>و</td>
                </tr>
                </table>
                </div>

                <div id="arrow_iqro-1">
            <ul>
                <li><a href=""><i class="fa-solid fa-caret-left"></i></a></li>
                <li id="bab_iqro-1">الدرس الأول</li>
                <li><a href=""><i class="fa-solid fa-caret-right"></i></a></li>
            </ul>
        </div>
        <div id="bottom_iqro-1">
            <div id="social-media_iqro-1">
               <p>Follow Our Social Media:</p>
                <ul>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-tiktok"></i></a></li>
                </ul>
                
            </div>
        </div>
             </Fragment>
                )
    }
}

export default Iqro1;