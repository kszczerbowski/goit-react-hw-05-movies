"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var s=a(861),n=a(439),r=a(757),i=a.n(r),o=a(791),c="Movies_searchButton__ieSHM",l="Movies_searchInput__8fq2n",m="Movies_moviesForm__Yo2Oo",u="Movies_searchedMoviesList__ZXXYs",h="Movies_poster__Yc3Qb",p="Movies_movieLink__ERyJ6",d="Movies_movieTitle__lz38M",v=a(87),_=a(243),f=a(184),g=function(){var e=(0,o.useState)([]),t=(0,n.Z)(e,2),a=t[0],r=t[1],g=(0,v.lr)(),x=(0,n.Z)(g,2),y=x[0],N=x[1],b=y.get("query");function k(e){return j.apply(this,arguments)}function j(){return(j=(0,s.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.Z.get("https://api.themoviedb.org/3/search/movie?api_key=0943ad551b04628807de14e8fdbef059&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:a=e.sent,r(a.data.results),N({query:t});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){null!==b&&k(b)}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(e.target.elements.movieName.value),e.target.elements.movieName.value=""},className:m,children:[(0,f.jsx)("input",{className:l,name:"movieName"}),(0,f.jsx)("button",{className:c,type:"submit",children:"Search"})]}),a.length?(0,f.jsx)("ul",{className:u,children:a.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsxs)(v.rU,{state:{from:"/movies?query=".concat(b)},className:p,to:"/movies/".concat(e.id),children:[(0,f.jsx)("img",{loading:"lazy",className:h,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",alt:"Poster of ".concat(e.title)}),(0,f.jsx)("p",{className:d,children:e.title})]})},e.id)}))}):(0,f.jsx)("p",{children:"Sorry, we don't have any movies matching the search criteria."})]})}}}]);
//# sourceMappingURL=881.90572076.chunk.js.map