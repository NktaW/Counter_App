(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),s=(n(15),n(7)),l=n(6),i=n(1),u=n(2),m=n(4),h=n(3),b=n(5),p=function(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"," ",r.a.createElement("span",{className:"badge pill badge-secondary"},e.totalCounters)))},d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).styles={fontSize:20,fontWeight:"bold"},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.children,r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},style:{fontSize:20,width:300,height:40},className:"btn btn-success btn-sm btn-block"},"Increment"),r.a.createElement("span",{style:this.styles,className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},style:{fontSize:20,width:300,height:40},className:"btn btn-info btn-sm btn-block"},"Decrement"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},style:{fontSize:20,width:200,height:40},className:"btn btn-danger btn-sm btn-block"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="m-3 badge badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"0":e}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.onReset,className:"btn btn-default btm-sm m-2"},"Reset"),this.props.counters.map((function(t){return r.a.createElement(d,{key:t.id,onDelete:e.props.onDelete,counter:t,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement},r.a.createElement("hr",null),r.a.createElement("h4",null,"Counter @",t.id))})))}}]),t}(a.Component),v=(n(16),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0}]},n.handleIncrement=function(e){var t=Object(l.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(s.a)({},e),t[a].value++,n.setState({counters:t})},n.handleDecrement=function(e){var t=Object(l.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(s.a)({},e),t[a].value--,n.setState({counters:t})},n.handleDelete=function(e){var t=n.state.counters.filter((function(t){return t.id!==e}));n.setState({counters:t})},n.handleReset=function(){var e=n.state.counters.map((function(e){return e.value=0,e}));n.setState({resetCounters:e})},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{style:{backgroundColor:"#fffdd0"},className:"container"},r.a.createElement(f,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete,onDecrement:this.handleDecrement})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.293e4748.chunk.js.map