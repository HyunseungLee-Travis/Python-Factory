(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2],{396:function(t,e,r){"use strict";r.r(e);var n={props:["title","num"]},v=r(87),_=r(119),l=r.n(_),o=r(254),c=r(176),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n    읽어주기"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-bullhorn ")])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:o.a,VIcon:c.a})},422:function(t,e,r){"use strict";r.r(e);var n={name:"NumberPage",methods:{checkAnswer:function(){document.getElementById("question-1-answers-A").checked?alert("1번 맞았습니다!"):alert("1번 틀렸습니다"),document.getElementById("question-2-answers-A").checked?alert("2번 맞았습니다 :)"):alert("2번 틀렸습니다")}}},v=r(87),_=r(119),l=r.n(_),o=r(254),c=r(176),d=r(153),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),t._v(" "),r("div",[t._m(0),t._v(" "),r("div",{staticStyle:{"text-align":"center"}},[r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"https://blog.shabda.co/wp-content/uploads/2015/10/numbers-truth-morality.png","max-width":"300px"}})],1)]),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),r("Header",{attrs:{num:"14",title:"숫자"}}),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),t._m(1),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),t._m(2),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),t._m(3),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),r("div",[r("a",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{href:"boolean"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n      ")],1)],1),t._v(" "),r("a",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{href:"operator"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n        Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)]),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),r("div",{staticClass:"quiz"},[r("h1",[t._v("퀴즈 풀기!")]),t._v(" "),r("hr"),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v("print(type('1'))을 실행하면 출력되는 값은?")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v("'1'을 1(숫자로)로 바꾸는 방법은?")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("br"),r("br"),t._v(" "),r("v-btn",{on:{click:t.checkAnswer}},[t._v(" 정답 확인 ")])],1),t._v(" "),r("br"),r("br")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("변수 - 숫자 선언 방법")]),t._v(" "),r("p",[t._v("\n        숫자는 우리가 항상 사용하는 것입니다. '사과 2개', '책 3권' 등 다양한\n        상황에서 숫자는 중요한 역할을 합니다."),r("br"),r("br"),t._v("\n\n        컴퓨터에서도 항상 사용되는 데이터의 형태입니다. 다음과 같이 데이터를\n        선언하고 사용할 수 있습니다."),r("br"),r("br"),t._v(" "),r("code",[t._v("\n          age = 12"),r("br"),t._v("\n          print(age)\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("숫자 - 간단한 계산")]),t._v(" "),r("p",[t._v("\n        숫자를 가지고 계산을 하겠습니다."),r("br"),r("br"),t._v("\n\n        옆에서 CODE1 예시는 숫자를 더하고, 빼고, 곱하고, 나누는 방법입니다."),r("br"),r("br"),t._v("\n\n        컴퓨터는 사람과 다르게 곱하기는 '*'를 사용하고 나누기는 '/'를\n        사용합니다."),r("br"),r("br"),r("br"),t._v("\n\n        CODE2에서는 조금 더 복잡한 계산을 할 수 있는 연산자의 예시입니다.\n      ")])]),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/e6f77e0d9a",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("숫자와 '숫자'의 차이")]),t._v(" "),r("p",[t._v("\n        파이썬에서는 숫자를 2가지 방법으로 선언할 수 있습니다."),r("br"),r("br"),t._v("\n\n        하나는 ''안에 숫자를 쓰는 것('숫자')이고 다른 하나는 '' 없이 숫자만\n        선언하는 방법입니다."),r("br"),r("br"),r("br"),r("br"),t._v("\n\n        차이가 있을까요? 네, 차이가 있습니다."),r("br"),r("br"),t._v("\n\n        처음에는 <class 'str'>이 출력되었습니다. 그 이유는 파이썬에서 ''\n        안에 있는 것은 무조건 문자입니다. 아무리 숫자가 '' 안에 있어도\n        문자입니다."),r("br"),r("br"),t._v("\n\n        하지만 두 번째는 <class 'int'>이 출력되었습니다. 그 이유는 숫자는\n        '' 없이 선언해야만 숫자라고 인식이 되기 때문입니다."),r("br"),r("br")])]),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/81191f5590",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("input()을 숫자로")]),t._v(" "),r("p",[t._v("\n        이제 사용자로부터 숫자 2개를 받아 더하기를 해보겠습니다."),r("br"),r("br"),t._v("\n\n        이제 1과 1을 입력하세요. 그러면 짜잔! 2가 나옵니다...?"),r("br"),r("br"),t._v("\n\n        흠... 왜 11이 나올까요? 1+1은 2가 아닌가요? 우리의 코드에는 문제가\n        있습니다."),r("br"),r("br"),r("br"),r("br"),t._v("\n\n        그것은 input() 함수가 돌려주는 정보, 다시 말해 firstNumber와\n        secondNumber에 저장된 데이터 형태는 문자입니다."),r("br"),r("br"),t._v("\n\n        그래서 파이썬 프로그램에서 먼저 숫자로 전환을 하고 계산을 해야 합니다.\n        int(input())을 사용하면 됩니다."),r("br"),r("br"),t._v("\n\n        참고로 문자와 문자를 '+'하면 서로 붙어서 출력이 됩니다. 그래서 문자\n        1과 문자 1을 더하면 문자 11이 나옵니다."),r("br"),r("br"),t._v("\n\n        옆에 있는 코드를 int()를 사용해서 고쳐보세요!\n      ")])]),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/4b9cfba68b",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-A",value:"A"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-A"}},[t._v("A) <class 'str'> ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-B",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-B"}},[t._v("B) <class 'int'> ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-C",value:"C"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-C"}},[t._v("C) None ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-D",value:"D"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-D"}},[t._v("D) 에러가 생깁니다. ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-A",value:"A"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-A"}},[t._v('A) int("1") ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-B",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-B"}},[t._v('B) toInt("1") ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-C",value:"C"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-C"}},[t._v('C) toInteger("1") ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-D",value:"D"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-D"}},[t._v('D) integer("1") ')])])}],!1,null,null,null);e.default=component.exports;l()(component,{Header:r(396).default}),l()(component,{VBtn:o.a,VIcon:c.a,VImg:d.a})}}]);