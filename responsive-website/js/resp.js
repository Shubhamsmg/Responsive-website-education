burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')
linka = document.querySelector('.linka')
link = document.querySelector('.link')
linkb = document.querySelector('.linkb')
linkc = document.querySelector('.linkc')


burger.addEventListener('click', () => {
  navbar.classList.toggle('h-nav-resp');
  rightNav.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
})

link.addEventListener('click', () => {
  navbar.classList.toggle('h-nav-resp');
  rightNav.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
})


linka.addEventListener('click', () => {
  navbar.classList.toggle('h-nav-resp');
  rightNav.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
})

linkb.addEventListener('click', () => {
  navbar.classList.toggle('h-nav-resp');
  rightNav.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
})

linkc.addEventListener('click', () => {
  navbar.classList.toggle('h-nav-resp');
  rightNav.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
})

