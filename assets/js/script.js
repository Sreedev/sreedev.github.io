@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
body {
  background: #f7f7f7;
  font-family: "Poppins", sans-serif;
}

*::selection {
  background: #2b3dda;
  color: #fff;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}
html::-webkit-scrollbar {
  width: 0.8rem;
}
html::-webkit-scrollbar-track {
  background: rgb(235, 202, 245);
}
html::-webkit-scrollbar-thumb {
  background: #420177;
}

/* pre loader start */
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background: #e6eff1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.loader-container.fade-out {
  top: -120%;
}
/* pre loader end */

/* navbar starts */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 10%;
  height: 6.5rem;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.3);
}
section {
  min-height: 100vh;
  padding: 2rem 9%;
}
.heading {
  font-size: 3.5rem;
  color: rgb(32, 32, 32);
  font-weight: 800;
  text-align: center;
}
.heading span {
  color: rgb(115, 3, 167);
}
header .logo {
  font-size: 1.9rem;
  font-weight: 800;
  text-decoration: none;
  color: #0e2431;
}
header .logo i {
  font-size: 2.2rem;
}
header .logo:hover {
  color: #fc8c05;
}
header .navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
header .navbar li {
  margin-left: 2.5rem;
}
header .navbar ul li a {
  font-size: 1.57rem;
  color: #0e2431;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.04rem;
  transition: 0.2s;
}
header .navbar ul li a.active,
header .navbar ul li a:hover {
  color: #011aff;
  border-bottom: 0.2rem solid #011aff;
  padding: 0.5rem 0;
}
/* navbar ends */

/* hamburger icon starts*/
#menu {
  font-size: 3rem;
  cursor: pointer;
  color: rgb(24, 2, 63);
  display: none;
}
@media (max-width: 768px) {
  #menu {
    display: block;
  }
  header .navbar {
    position: fixed;
    top: 6.5rem;
    right: -120%;
    width: 75%;
    height: 100%;
    text-align: left;
    align-items: flex-start;
    background-color: #0e0f31;
  }
  header .navbar ul {
    flex-flow: column;
    padding: 1rem;
  }
  header .navbar ul li {
    text-align: center;
    width: 100%;
    margin: 1rem 0;
    border-radius: 0.5rem;
    width: 26rem;
  }
  header .navbar ul li a {
    display: block;
    padding: 1rem;
    text-align: left;
    color: #fff;
    font-size: 2rem;
  }
  header .navbar ul li a.active,
  header .navbar ul li a:hover {
    padding: 1rem;
    color: #fff;
    border-radius: 0.5rem;
    border-bottom: 0.5rem solid #011aff;
  }
  .fa-times {
    transform: rotate(180deg);
  }
  header .navbar.nav-toggle {
    right: 0;
  }
}
/* hamburger icon ends */

/* hero section starts*/
.home {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  min-height: 100vh;
  align-items: center;
}
.home #particles-js {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.home .content {
  flex: 1 1 40rem;
  padding-top: 1rem;
  z-index: 1;
}
.home .image {
  flex: 1 1 40rem;
  z-index: 1;
}
.home .image img {
  width: 70%;
  margin-left: 6rem;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.home .image img:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
.home .content h2 {
  font-size: 5rem;
  font-weight: 800;
  color: #002057;
}
.home .content h2 span {
  font-size: 5rem;
  font-weight: 800;
  color: #ff7b00;
}
.home .content p {
  font-size: 2.5rem;
  color: #000;
  font-weight: 600;
  padding: 1rem 0;
}
.home .content p span {
  font-size: 2.5rem;
  color: rgb(148, 8, 8);
  font-weight: 600;
  padding: 1rem 0;
}
.home .btn {
  margin-top: 1rem;
  position: absolute;
  line-height: 0;
  padding: 1.6rem 3rem;
  border-radius: 4em;
  transition: 0.5s;
  color: #fff;
  background: #2506ad;
  box-shadow: 0px 5px 18px rgba(48, 68, 247, 0.6);
  font-family: "Nunito", sans-serif;
}
.home .btn span {
  font-weight: 700;
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
}
.home .btn i {
  margin-left: 0.3rem;
  font-size: 1.5rem;
  transition: 0.3s;
}
.home .btn:hover {
  background: #1a047e;
}
.home .btn:hover i {
  transform: translateX(5px);
}
/* social icons start */
.socials {
  position: relative;
  margin-top: 9rem;
}
.socials .social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.socials .social-icons li {
  display: inline-block;
  margin-bottom: 14px;
}
.social-icons a {
  font-size: 2rem;
  display: inline-block;
  line-height: 44px;
  color: #00d9ff;
  background-color: #09011b;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #0685da;
}
.social-icons a.github:hover {
  background-color: #0e0e0e;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dev:hover {
  background-color: #070707;
}
.social-icons a.instagram:hover {
  background-color: #ee00da;
}
/* social icons end */

/* hero media queries starts*/
@media (max-width: 450px) {
  .home .btn {
    margin: 4rem 0;
  }
  .socials {
    margin-top: 12rem;
  }
  .home .image img {
    margin-top: -12rem;
  }
  .home .content p {
    font-size: 2.2rem;
  }
  .home .content p span {
    font-size: 2.2rem;
  }
}
/* hero media queries ends*/
/* hero section end */

/* about section starts */
.about {
  background: rgb(255, 255, 255);
}
.about .row {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem;
}
.about .row .image {
  text-align: center;
  flex: 1 1 35rem;
}
.about .row .image img {
  margin: 4rem;
  width: 30rem;
  height: auto;
  border-radius: 5%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  mix-blend-mode: luminosity;
  transition: 0.3s;
  cursor: pointer;
}
.about .row .image img:hover {
  mix-blend-mode: normal;
}
.about .row .content {
  flex: 1 1 45rem;
  padding: 3rem;
}
.about .row .content h3 {
  color: rgb(27, 27, 27);
  font-size: 2.5rem;
}
.about .row .content .tag {
  font-size: 1.4rem;
  color: #020133;
  font-weight: 600;
  margin-top: 1rem;
}
.about .row .content p {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  font-family: "Nunito";
  font-weight: 600;
  text-transform: none;
}
.about .row .content .box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-family: "Nunito";
  font-weight: 600;
}
.about .row .content .box-container .box p {
  text-transform: none;
}
.about .row .content .box-container .box p span {
  color: #011aff;
}
.resumebtn {
  margin-top: 6rem;
}
.resumebtn .btn {
  padding: 1.7rem 3rem;
  border-radius: 0.5em;
  transition: 0.3s;
  color: #fff;
  background: #2506ad;
  box-shadow: 0px 5px 10px rgba(48, 68, 247, 0.6);
  font-family: "Nunito", sans-serif;
}
.resumebtn .btn span {
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
}
.resumebtn .btn i {
  margin-left: 0.3rem;
  font-size: 1.2rem;
  transition: 0.3s;
}
.resumebtn .btn:hover {
  background: #1a047e;
}
.resumebtn .btn:hover i {
  transform: translateX(5px);
}
/* about media queries starts*/
@media screen and (max-width: 600px) {
  .about .row .image {
    margin-top: 2rem;
  }
  .about .row .image img {
    margin: 0 auto;
    width: 80%;
    mix-blend-mode: normal;
  }
  .about .row {
    padding: 0.5rem;
    margin-bottom: 7rem;
  }
  .about .row .content {
    padding: 1rem;
  }
  .about .row .content .box-container {
    gap: 0;
  }
}
/* about media queries ends*/
/* about section ends */

/* skills section starts */
.skills {
  min-height: 90vh;
  background: linear-gradient(to bottom, #57059e, #4a00e0);
}
.skills h2 {
  color: #fff;
}
.skills .heading span {
  color: rgb(255, 230, 0);
}
.skills .container {
  background: rgba(0, 0, 22, 0.4);
  color: #fff;
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  margin: auto;
  margin-top: 2rem;
}
.skills .container .row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  flex-wrap: wrap;
  gap: 1.8rem;
}
.skills .container .bar {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 22, 0.9);
  transition: 0.2s;
}
.skills .container .bar:hover {
  box-shadow: 0 8px 10px rgba(0, 2, 68, 0.8) !important;
  background-color: rgba(0, 0, 0, 0.9) !important;
}
.skills .container .bar .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
.skills .container .bar .info i {
  font-size: 4rem;
}
.skills .container .bar .info span {
  font-size: 2rem;
  font-weight: 500;
  font-family: "Poppins";
  margin-left: 0.5rem;
}
/* skills media queries starts*/
@media screen and (max-width: 600px) {
  .skills .container {
    padding: 0;
    margin: 0;
  }
  .skills .container .row {
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem;
    padding: 2rem 0.2rem 2rem 0.2rem;
    gap: 1rem;
  }
  .skills .container {
    margin-top: 5px;
    width: 100%;
  }
}
/* skills media queries ends*/
/* skills section ends */

/* education section starts */
.education {
  background: #e5ecfb;
  min-height: 80vh;
}
.education .qoute {
  font-size: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  margin-top: 0.5rem;
}
.education .box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.education .box-container .box {
  display: flex;
  flex-direction: row;
  width: 80%;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  margin-top: 2rem;
  overflow: hidden;
  transition: 0.3s;
  background: rgb(252, 252, 252);
}
.education .box-container .box:hover {
  transform: scale(1.03);
  box-shadow: 1rem 0.5rem 1.2rem rgba(0, 0, 0, 0.3);
}
.education .box-container .box .image {
  flex: 1 1 20rem;
  width: 100%;
}
.education .box-container .box img {
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 100%;
}
.education .box-container .box .content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-wrap: wrap;
  flex: 1 1 70rem;
}
.education .box-container .box .content h3 {
  font-size: 2.5rem;
  color: #012970;
  padding: 0.5rem 0;
  font-weight: 600;
  text-align: left;
  margin-left: 1rem;
}
.education .box-container .box .content p {
  font-size: 1.5rem;
  margin-left: 1rem;
  text-align: left;
}
.education h4 {
  font-size: 2rem;
  color: rgb(34, 109, 0);
  text-align: left;
  margin: 1rem;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
}

/* education media queries starts*/
@media screen and (max-width: 600px) {
  .education .box-container .box {
    flex-direction: column;
    width: 100%;
  }
  .education .box-container .box .image {
    width: 100%;
    height: 25rem;
  }
  .education .box-container .box img {
    width: 100%;
  }
  .education .box-container .box .content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex-wrap: wrap;
    flex: 0;
  }
  .education .btns {
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    flex-wrap: wrap;
  }
}
/* education media queries ends*/
/* education section ends */

/* work section starts */
.work {
  /* background: #010124; */
  background: linear-gradient(to bottom, #000031, #00002c);
}
.work h2 {
  color: #fff;
  padding: 1rem;
}
.work .heading span {
  color: rgb(255, 230, 0);
}
.work .box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2rem;
}
.work .box-container .box {
  flex: 1 1 30rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: auto;
  height: 30rem;
}
.work .box-container .box img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.work .box-container .box .content {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 85%;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
}
.work .box-container .box .content .tag {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  width: 100%;
  padding-left: 1rem;
  background: #ffd900;
}
.work .box-container .box .content .tag h3 {
  font-size: 2rem;
}
.work .box-container .box:hover .content {
  top: 25%;
}
.work .desc {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.work .desc p {
  font-size: 1.5rem;

}
.work .desc .btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
}
.work .desc .btns .btn {
  line-height: 0;
  display: inline;
  padding: 1.5rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: #fff;
  background: rgb(12, 12, 12);
  margin-right: 2rem;
}
.work .desc .btns .btn:hover {
  background: #310ae0f5;
}
.work .viewall {
  display: flex;
  justify-content: center;
}
.work .viewall .btn {
  position: relative;
  line-height: 0;
  padding: 1.6rem 3rem;
  border-radius: 0.5em;
  transition: 0.5s;
  color: rgb(255, 255, 255);
  font-weight: 700;
  border: 2px solid #fff;
  box-shadow: 0px 5px 10px rgba(65, 84, 241, 0.4);
  text-align: center;
}
.work .viewall .btn span {
  font-weight: 600;
  font-size: 1.7rem;
  font-family: "Nunito", sans-serif;
}
.work .viewall .btn i {
  margin-left: 0.3rem;
  font-size: 1.5rem;
  transition: 0.3s;
}
.work .viewall .btn:hover {
  background: #fff;
  color: #000;
}
.work .viewall .btn:hover i {
  transform: translateX(5px);
}
/* work section ends */

/* experience section starts */
.experience .timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.experience .timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background: #020133;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  z-index: -2;
}
.experience .container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

}
/*circles on timeline*/
.experience .container::after {
  content: "\f0b1";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: rgb(255, 255, 255);
  border: 4px solid #ff9f55;
  top: 15px;
  border-radius: 50%;
  z-index: 100;
  font-size: 1.89rem;
  text-align: center;
  font-weight: 600;
  color: #02094b;
  font-family: "Font Awesome\ 5 Free";
}
.experience .left {
  left: 0;
}
.experience .right {
  left: 50%;
}
/* arrows pointing right */
.experience .left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #f68c09;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #f68c09;
}
/* arrows pointing left  */
.experience .right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #f68c09;
  border-width: 10px 10px 10px 0;
  border-color: transparent #f68c09 transparent transparent;
}
.experience .right::after {
  left: -16px;
}
.experience .content {
  background-color: #f68c09;
  position: relative;
  border-radius: 6px;
}
.experience .content .tag {
  font-size: 1.3rem;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
}
.experience .content .desc {
  margin-left: 1.5rem;
  padding-bottom: 1rem;
}
.experience .content .desc h3 {
  font-size: 1.5rem;
  font-weight: 600;
}
.experience .content .desc p {
  font-size: 1.2rem;
}
/* view all button */
.morebtn {
  display: flex;
  justify-content: center;
}
.morebtn .btn {
  position: relative;
  line-height: 0;
  padding: 1.6rem 3rem;
  border-radius: 0.5em;
  transition: 0.5s;
  color: #fff;
  background: #2506ad;
  box-shadow: 0px 5px 10px rgba(48, 68, 247, 0.6);
  text-align: center;
}
.morebtn .btn span {
  font-weight: 600;
  font-size: 1.7rem;
  font-family: "Nunito", sans-serif;
}
.morebtn .btn i {
  margin-left: 0.3rem;
  font-size: 1.5rem;
  transition: 0.3s;
}
.morebtn .btn:hover {
  background: #1a047e;
}
.morebtn .btn:hover i {
  transform: translateX(5px);
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  .experience {
    min-height: 80vh;
  }
  .experience .timeline {
    margin-top: 2rem;
  }
  .experience .timeline::after {
    left: 31px;
  }
  .experience .container {
    width: 100%;
    padding-left: 8rem;
    padding-right: 2rem;
  }
  .experience .container::after {
    font-size: 2.2rem;
  }
  .experience .container::before {
    left: 61px;
    border: medium solid #f68c09;
    border-width: 10px 10px 10px 0;
    border-color: transparent #f68c09 transparent transparent;
  }
  .experience .left::after {
    left: 15px;
  }
  .experience .right::after {
    left: 15px;
  }
  .experience .right {
    left: 0%;
  }
  .morebtn {
    margin-top: 3rem;
  }
}
/* experience media queries ends */
/* experience section ends */

/* contact section starts */
.contact {
  background: #e5ecfb;
  min-height: 60vh;
}
.contact .container {
  max-width: 1050px;
  width: 100%;
  background: #fff;
  border-radius: 1.5rem;
  margin: 2rem 5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.contact .container .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 2rem;
}
.contact .content .image-box {
  max-width: 60%;
  margin-left: 4rem;
}
.contact .content .image-box img {
  width: 100%;
  height: 40rem;
  position: relative;
}
.contact .content form {
  width: 45%;
  margin-right: 3.5rem;
}
form .form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-group .field {
  height: 50px;
  display: flex;
  position: relative;
  margin: 1rem;
  width: 100%;
}
form i {
  position: absolute;
  top: 50%;
  left: 18px;
  color: rgb(51, 51, 51);
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
}
form .field input,
form .message textarea {
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0 16px 0 48px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  border: 1px solid rgb(51, 51, 51);
  background: #e5ecfb;
}
.field input::placeholder,
.message textarea::placeholder {
  color: rgb(51, 51, 51);
}
.field input:focus,
.message textarea:focus {
  padding-left: 47px;
  border: 2px solid rgb(115, 3, 167);
}
.field input:focus ~ i,
.message textarea:focus ~ i {
  color: rgb(115, 3, 167);
}
form .message {
  position: relative;
  margin: 1rem;
  width: 100%;
}
form .message i {
  top: 25px;
  font-size: 20px;
  left: 15px;
}
form .message textarea {
  min-height: 130px;
  max-height: 230px;
  max-width: 100%;
  min-width: 100%;
  padding: 12px 20px 0 48px;
}
form .message textarea::-webkit-scrollbar {
  width: 0px;
}
form .button-area {
  display: flex;
  float: right;
  flex-direction: row-reverse;
}
.button-area button {
  color: #fff;
  border: none;
  outline: none;
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 5px;
  padding: 13px 25px;
  background: #2506ad;
  box-shadow: 0px 5px 10px rgba(48, 68, 247, 0.6);
  transition: 0.3s ease;
  font-family: "Nunito", sans-serif;
}
.button-area button:hover {
  background: #421cecf5;
}
.button-area span {
  font-size: 17px;
  padding: 1rem;
  display: none;
}
.button-area button i {
  position: relative;
  top: 6px;
  left: 2px;
  font-size: 1.5rem;
  transition: 0.3s;
  color: #fff;
}
.button-area button:hover i {
  left: 8px;
}
/* contact section media queries starts */
@media (max-width: 900px) {
  .contact {
    min-height: 70vh;
  }
  .contact .container {
    margin: 3rem 0 2rem 0;
  }
  .contact .container .content {
    padding: 18px 12px;
  }
  .contact .content .image-box {
    display: none;
  }
  .contact .content form {
    width: 100%;
    margin-right: 2rem;
  }
}
/* contact section media queries ends */
/* contact section ends */

/* footer section starts */
.footer {
  min-height: auto;
  padding-top: 0;
  background: rgb(0, 1, 43);
}
.footer .box-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.footer .box-container .box {
  flex: 1 1 25rem;
  margin: 2.5rem;
}
.footer .box-container .box h3 {
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 1rem;
  font-weight: normal;
}
.footer .box-container .box p {
  font-size: 1.5rem;
  color: #ccc;
  padding: 0.7rem 0;
  text-transform: none;
}
.footer .box-container .box p i {
  padding-right: 1rem;
  color: #ffae00;
}
.footer .box-container .box a {
  font-size: 1.5rem;
  color: rgb(238, 238, 238);
  padding: 0.3rem 0;
  display: block;
}
.footer .box-container .box a:hover {
  color: #ffae00;
}
.footer .box-container .box .share {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
}
.footer .box-container .box .share a {
  height: 4rem;
  width: 4rem;
  padding: 1rem;
  text-align: center;
  border-radius: 5rem;
  font-size: 1.7rem;
  margin-right: 1rem;
  transition: 0.2s;
  background: rgb(230, 230, 230);
  color: #02094b;
  border: none;
}
.footer .box-container .box .share a:hover {
  background: transparent;
  transform: scale(0.98);
  border: 0.1rem solid rgb(180, 178, 178);
  color: #ffae00;
}
.footer .credit {
  padding: 1rem 0 0 0;
  text-align: center;
  font-size: 1.5rem;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: #fff;
  border-top: 0.1rem solid #fff3;
}
.footer .credit a {
  color: #ffae00;
}
.footer .fa {
  color: #e90606;
  margin: 0 0.3rem;
  font-size: 1.5rem;
  animation: pound 0.35s infinite alternate;
}
@-webkit-keyframes pound {
  to {
    transform: scale(1.1);
  }
}
@keyframes pound {
  to {
    transform: scale(1.1);
  }
}
@media (max-width: 450px) {
  .footer .box-container .box {
    margin: 1.5rem;
  }
  .footer .box-container .box p {
    padding: 0.7rem;
  }
  .footer .box-container .box .share a {
    padding: 1.2rem;
  }
}
/* footer section ends */

/* common media queries starts*/
@media (max-width: 450px) {
  html {
    font-size: 55%;
  }
  body {
    padding-right: 0;
  }
  section {
    padding: 2rem;
  }
}
/* common media queries ends*/

/* scroll top starts */
#scroll-top {
  position: fixed;
  top: -140%;
  right: 2rem;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  background: #ffae00;
  color: rgb(13, 0, 44);
  border-radius: 50%;
  transition: 1s linear;
  z-index: 1000;
}
#scroll-top.active {
  top: calc(100% - 12rem);
}
/* scroll top ends */


.hidden {
  display: none;
}
#display-box {
  position: relative;
  top: calc(100% + 10px);
  left: 0;
  width: 500px; /* Adjust as needed */
  background-color: white; /* Background color */
  border: 1px solid #ccc; /* Border */
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); /* Box shadow */


}

  /* Position the display box below the trigger box */

#display-box2 {
  position: relative;
  top: calc(100% + 10px);
  left: 0;
  width: 500px; /* Adjust as needed */
  background-color: white; /* Background color */
  border: 1px solid #ccc; /* Border */
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); /* Box shadow */


}
.hidden1 {
  display: none;

}
