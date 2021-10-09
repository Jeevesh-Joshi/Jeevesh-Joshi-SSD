let current = document.getElementById("sync");
let displayTime;

function startTime() {
    displayTime = document.getElementById("time");
    console.log("here");
    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + '<br>' + time;
    displayTime.innerHTML = dateTime;
    t = setTimeout(function () {
        startTime()
    }, 500);
}

startTime();


let hb = document.getElementById("hb");
let ab = document.getElementById("ab");
let eb = document.getElementById("eb");
let cb = document.getElementById("cb");

let home = `<div id="home">
<h1>HELLO WORLD!</h1>
<img src="images/about.jpg" alt="dp">
<div class="intro">
Myself Jeevesh Chandra Joshi. Currently, I am pursuing my Master's from IIIT Hyderabad with CSE
Major. This website is created by me to give my brief introduction. Do check out
different sections of this website and get to know about me if you are interested 😁.
</div>
<img src="images/sign.png" alt="sign" id="sign">
</div>`;

let about = `<div id="about">
<h1>KNOW ME</h1>
<img id="bio" src="images/jj.png" alt="dp">
<div class="table">
    <table>
        <tr>
            <th>Name</th>
            <td>Jeevesh Chandra Joshi</td>
        </tr>
        <tr>
            <th>DOB</th>
            <td>13 March 1999</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>jeeveshjoshi1999@gmail.com</td>
        </tr>
        <tr>
            <th>Address</th>
            <td>Rudrapur, Uttarkhand</td>
        </tr>
        <tr>
            <th>Hobbies</th>
            <td>Gaming, Singing</td>
        </tr>
        <tr>
            <th>Gaming Alias</th>
            <td>DEVILJEE</td>
        </tr>
        <tr>
            <th>Favourite Sports</th>
            <td>Basketball, Cricket</td>
        </tr>
    </table>
    <br>
    <div id="social">
        <a href="https://www.linkedin.com/in/jeeveshjoshi/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></a>
        <a href="https://github.com/Jeevesh-Joshi" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" alt="LinkedIn"></a>
        <a href="https://drive.google.com/file/d/1rwqVc-81x8V30FK-qgpY4evAUnsjx2H4/view?usp=sharing" target="_blank"><img src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png" alt="Github" alt="LinkedIn"></a>
    </div>
</div>
</div>`;

let education = `<div id="education">
<h1>EDUCATION</h1>
<img src="images/education.png" alt="dp">
<div class="table">
    <table>
        <tr>
            <th>GATE CSE 2021</th>
            <td>AIR : 447</td>
        </tr>
        <tr>
            <th>M.Tech.</th>
            <td><a href="https://www.iiit.ac.in/" target="_blank">IIIT Hyderabad</a></td>
        </tr>
        <tr>
            <th>B.Tech.</th>
            <td><a href="https://gbpuat.ac.in/" target="_blank">COT Pantnagar (GBPUAT)</a></td>
        </tr>
        <tr>
            <th>Intermediate</th>
            <td>APS Jabalpur</td>
        </tr>
        <tr>
            <th>High School</th>
            <td>APS Ambala Cantt</td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <th colspan="2">Skills</th>
        </tr>
        <tr>
            <th>Programming Languages</th>
            <td>C, C++ and Python</td>
        </tr>
        <tr>
            <th>Web Development</th>
            <td>HTML, CSS, Bootstrap, JS, Django</td>
        </tr>
        <tr>
            <th>Data Science</th>
            <td>SkLearn, Pandas, Matplotlib, Numpy</td>
        </tr>
        <tr>
            <th>Others</th>
            <td>Git</td>
        </tr>
    </table>
</div>
</div>`;

hb.addEventListener('click', function () {
    current.innerHTML = home;
});
ab.addEventListener('click', function () {
    current.innerHTML = about;
});
eb.addEventListener('click', function () {
    current.innerHTML = education;
});