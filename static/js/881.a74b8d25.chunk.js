"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var a=s(439),o=s(791),i="Movies_searchButton__ieSHM",r="Movies_searchInput__8fq2n",c="Movies_moviesForm__Yo2Oo",n="Movies_searchedMoviesList__ZXXYs",l="Movies_poster__Yc3Qb",m="Movies_movieLink__ERyJ6",h="Movies_movieTitle__lz38M",u=s(87),v=s(184),_=function(e){var t=e.getSearchedMovies,s=e.searchedMovies,_=e.shouldLoadSearchedMovies,d=(0,u.lr)(),p=(0,a.Z)(d,1)[0].get("query");return(0,o.useEffect)((function(){null!==p&&t(p)}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s=e.target.elements.movieName.value;t(s),e.target.elements.movieName.value=""},className:c,children:[(0,v.jsx)("input",{className:r,name:"movieName"}),(0,v.jsx)("button",{className:i,type:"submit",children:"Search"})]}),_&&!s.length?(0,v.jsx)("p",{children:"Sorry, we don't have any movies matching the search criteria."}):(0,v.jsx)("ul",{className:n,children:s.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsxs)(u.rU,{state:{from:"/movies?query=".concat(p)},className:m,to:"/movies/".concat(e.id),children:[(0,v.jsx)("img",{loading:"lazy",className:l,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",alt:"Poster of ".concat(e.title)}),(0,v.jsx)("p",{className:h,children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=881.a74b8d25.chunk.js.map