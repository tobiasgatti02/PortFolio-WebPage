let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}
// Review Swiper

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == "" ){
            emptyerror();
        }
            else{
                sendmail(name.value,email.value,msg.value);
                success();
            }
        
    });
  }
  validate();

  function emptyerror(){
    swal({
        title: "Oh No...!",
        text: "Fields cannot be empty!",
        icon: "error",
      });
  }

  function sendmail(name,email,msg){
    emailjs.send("service_wemzrvj","template_h6sbkvo",{
        to_name: "name",
        from_name: "email",
        message: "msg",
        });
  }

  function success(){
    swal({
        title: "Email sent successfully!",
        text: "I try to reply within 24 hours!",
        icon: "success",
      });
  }

  //Header Background Change On Scroll

let header = document.querySelector("header");

window.addEventListener('scroll',() =>{
  header.classList.toggle('header-active',window.scrollY > 0)
})
//scroll top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll",() =>{
    scrollTop.classList.toggle("scroll-active",window.scrollY > 0); 
});
