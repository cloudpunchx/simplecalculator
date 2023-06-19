import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: [
      {
        title: "Simple Calculator"
      },
      {
        name: "description",
        content: "Calculator"
      },
      {
        name: "keywords",
        content: "calculator, cute, math, functional"
      },
      {
        name: "author",
        content: "Siobhan Bonardi"
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  // Get all meta tags 
  let metaTags = document.querySelectorAll('meta');
  // Loop through the tags and remove each
  // for OF is vanilla Javascript so that's what we have to use (vue is for in loops) and this page is PURE JAVASCRIPT
  for (let tag of metaTags){
    tag.remove();
  }
  // to.meta (navigating TO.meta.title)
  let newTags = to.meta;
  document.querySelector('title').innerText = newTags[0].title;

  // i zero is the title obj that we don't need here
  for (let i = 1; i<newTags.length; i++){
    document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
                                                      `<meta name:"${newTags[i].name}" description="${newTags[i].content}">`);
  }
  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
                                                    `<meta charset="utf-8">
                                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                                    <meta name="viewport" content="width=device-width,initial-scale=1.0">`
                                                    );
  next();
  from;
})

export default router
