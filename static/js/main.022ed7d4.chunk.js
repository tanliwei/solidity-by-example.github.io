(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/logo.da793b47.svg"},17:function(e,t,n){e.exports=n(225)},225:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=(n(23),n(2)),l=n(3),c=n(5),s=n(4),u=n(6),m=n(227),p=n(228),d=n(229),h=(n(25),n(27),n(14)),b=n.n(h),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:b.a,alt:"logo",className:"Header-logo"})),r.a.createElement("h3",null,r.a.createElement("a",{href:"/"},"Solidity by Example")))}}]),t}(a.Component),g=(n(29),n(31),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{className:"footer"},r.a.createElement("a",{href:"mailto:soliditybyexample@gmail.com"},"soliditybyexample@gmail.com")," | ",r.a.createElement("a",{href:"https://github.com/solidity-by-example/solidity-by-example.github.io"},"source")," | ",r.a.createElement("a",{href:"https://github.com/solidity-by-example/solidity-by-example.github.io#license"},"license"))}}]),t}(a.Component)),y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",{className:"Home-header"},r.a.createElement("a",{href:"/"},"Solidity by Example")),r.a.createElement("div",{className:"Home-main"},r.a.createElement("p",null,"an introduction to ",r.a.createElement("a",{href:"https://solidity.readthedocs.io"},"Solidity")," using example programs"),r.a.createElement("ul",{className:"Home-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"/hello-world"},"Hello World")),r.a.createElement("li",null,r.a.createElement("a",{href:"/simple-storage"},"Simple Storage")),r.a.createElement("li",null,r.a.createElement("a",{href:"/import"},"Import")),r.a.createElement("li",null,r.a.createElement("a",{href:"/safe-math"},"Safe Math")),r.a.createElement("li",null,r.a.createElement("a",{href:"/events"},"Events")),r.a.createElement("li",null,r.a.createElement("a",{href:"/payable"},"Payable")),r.a.createElement("li",null,r.a.createElement("a",{href:"/fallback"},"Fallback")),r.a.createElement("li",null,r.a.createElement("a",{href:"/fallback-gas-limit"},"Fallback Gas Limit")))),r.a.createElement(g,null))}}]),t}(a.Component),E=n(12),v=n.n(E),O=(n(219),n(15)),j=n.n(O),w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){j()(v.a),v.a.initHighlightingOnLoad()}},{key:"render",value:function(){return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.html}})}}]),t}(a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,this.props.title),r.a.createElement(w,{html:this.props.html}),r.a.createElement("p",null,"Try on ",r.a.createElement("a",{href:"https://remix.ethereum.org",target:"__blank"},"Remix")),r.a.createElement(g,null))}}]),t}(a.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Hello World",html:'<pre><code class="language-solidity">/*\npragma specifies what versions of Solidity this file can work on.\nThis file will not compile with a compiler earlier than version 0.5.3\nand it will also not work on a compiler starting from version 0.6.0\n*/\npragma solidity ^0.5.3;\n\ncontract HelloWorld {\n    function hello() public returns (string memory) {\n        return "Hello World!";\n    }\n}\n</code></pre>\n'})}}]),t}(a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Simple Storage",html:'<p>State variables are variables which are permanently stored on the blockchain.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract SimpleStorage {\n    // Variables declared here, inside the contract but outside the\n    // functions will be stored on the blockchain.\n    string public text;\n\n    // Function to get text.\n    function get() public view returns (string memory) {\n        return text;\n    }\n    // Actually we don&#39;t need the function above. The compiler automatically\n    // creates getter functions for all public state variables.\n    // The compiler will create a function called text().\n\n    // Function to set text.\n    function set(string memory _text) public {\n        text = _text;\n    }\n}\n</code></pre>\n'})}}]),t}(a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Safe Math",html:'<p>Solidity overflow integers as if nothing is wrong. It would be nice if it threw an error.</p>\n<p>So we use <code>SafeMath</code> library by <a href="https://openzeppelin.org/">OpenZeppelin</a>.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\n// Import SafeMath library from github (this import only works on Remix).\nimport "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";\n\ncontract Math {\n    // Include the SafeMath library inside this contract\n    using SafeMath for uint;\n\n    // uint is aliase for uint256 (unsigned integer ranging from 0 to 2 ** 256 - 1)\n    uint public max = 2**256 - 1;\n    // Variables initialize to their default value, 0 in this case.\n    uint public min;\n\n    // Try:\n    // add(1, 2)\n    // add(0, -1)\n    function add(uint x, uint y) public view returns (uint) {\n        return x + y;\n    }\n\n    // Arithmetic overflow does not throw any error.\n    function overflow() public view returns (uint) {\n        return max + 1; // returns 0\n    }\n\n    function underflow() public view returns (uint) {\n        return min - 1; // return 2 ** 256 - 1\n    }\n\n    // SafeMath.add throws an error when an integer overflows.\n    // Try:\n    // safeAdd(2 ** 256 - 1, 1)\n    function safeAdd(uint x, uint y) public view returns (uint) {\n        return x.add(y);\n    }\n\n    // SafeMath.sub throws an error when an integer underflows.\n    // Try:\n    // safeSub(0, 1)\n    function safeSub(uint x, uint y) public view returns (uint) {\n        return x.sub(y);\n    }\n}\n</code></pre>\n'})}}]),t}(a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Payable",html:'<p>Functions declared <code>payable</code> can receive <code>ether</code> for the contract.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract ReceiveEther {\n    event Received(address sender, uint amount, uint balance);\n\n    // Get the amount of ethers stored in this contract\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n\n    // Try calling this function along with some ether.\n    // The balance of this contract will be automatically updated.\n    function sendEther() public payable {\n        emit Received(msg.sender, msg.value, address(this).balance);\n    }\n\n    // Try calling this function along with some ether.\n    // The function would throw an error since this function is not payable.\n    function notPayable() public {\n    }\n\n    // Delete this contract and refund all ether stored in this contract to msg.sender.\n    function kill() public {\n        selfdestruct(msg.sender);\n    }\n}\n</code></pre>\n'})}}]),t}(a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Fallback",html:'<p>A <code>fallback function</code> is an anonymous function that does not take any arguments and does not return anything.</p>\n<p>Fallback functions are executed when</p>\n<ul>\n<li>calling a function that does not exist</li>\n<li>sending Ether directly to a contract</li>\n</ul>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Fallback {\n    event EtherReceived(address sender, uint amount);\n\n    // Fallback function must be declared as external.\n    function () external payable {\n        emit EtherReceived(msg.sender, msg.value);\n    }\n\n    // Helper function to check the balance of this contract\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n\ncontract TestFallback {\n    // Try calling test(address of the Fallback contract)\n    function test(Fallback fallback) public payable {\n        // Send Ether to the Fallback contract.\n        address(fallback).transfer(address(this).balance);\n\n        // Calling a function that does not exist in Fallback contract\n        address(fallback).call(abi.encodeWithSignature("nonExistingFunction()"));\n\n        // Check the transaction logs. You will see the event "EtherReceived" emitted twice.\n    }\n}\n</code></pre>\n'})}}]),t}(a.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Fallback Gas Limit",html:'<p><code>Fallback</code> functions have a 2300 gas limit when called by <code>transfer</code> or <code>send</code>.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract FallbackGasLimit {\n    event BurnGas(uint gasLeft);\n\n    // Try:\n    // Send ether to this contract from an account. This should succeed.\n    function () external payable {\n        // Use up gas by emitting events, logging the remaining gas\n        // on each iteration.\n        for (uint i = 0; i &lt; 10; i++) {\n            emit BurnGas(gasleft());\n        }\n    }\n}\n\ncontract TestFallbackGasLimit {\n    // Try:\n    // Execute this function. This function will fail since\n    // the fallback function of FallbackGasLimit is only allowed to use 2300 gas.\n    function test(FallbackGasLimit fallback) public {\n        address(fallback).transfer(0 ether);\n    }\n}\n</code></pre>\n'})}}]),t}(a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Events",html:'<p><code>Events</code> allow logging to the Ethereum blockchain. Some use cass for events are:</p>\n<ul>\n<li>Listening for events and updating user interface</li>\n<li>A cheap form of storage</li>\n</ul>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Event {\n    // Event declaration\n    // Up to 3 parameters can be indexed.\n    // Indexed parameters helps you filter the logs by the indexed parameter\n    event Log(address indexed sender, string message);\n    event AnotherLog();\n\n    function test() public {\n        emit Log(msg.sender, "Hello World!");\n        emit Log(msg.sender, "Hello EVM!");\n        emit AnotherLog();\n    }\n}\n</code></pre>\n'})}}]),t}(a.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"Import",html:'<p>You can import local and external files in Solidity.</p>\n<h3 id="local">Local</h3>\n<p>Here is our folder structure.</p>\n<pre><code>\u251c\u2500\u2500 Import.sol\n\u2514\u2500\u2500 Foo.sol</code></pre><p>Foo.sol</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Foo {\n    string public name = "Foo";\n}\n</code></pre>\n<p>Import.sol</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\n// import Foo.sol from current directory\nimport "./Foo.sol";\n\ncontract Import {\n    // Initialize Foo.sol\n    Foo public foo = new Foo();\n\n    // Test Foo.sol by getting it&#39;s name.\n    function getFooName() public view returns (string memory) {\n        return foo.name();\n    }\n}\n</code></pre>\n<h3 id="external">External</h3>\n<p>You can also import from <a href="https://github.com">GitHub</a>, but you need to drop <code>blob/&lt;branch name&gt;</code> from the URL.</p>\n<pre><code class="language-solidity">// https://github.com/owner/repo/blob/master/path/to/Contract.sol\n\nimport "github.com/owner/repo/path/to/Contract.sol"</code></pre>\n'})}}]),t}(a.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("div",{className:"App-main"},r.a.createElement(m.a,{basename:""},r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/hello-world",component:x}),r.a.createElement(d.a,{path:"/simple-storage",component:F}),r.a.createElement(d.a,{path:"/import",component:M}),r.a.createElement(d.a,{path:"/safe-math",component:S}),r.a.createElement(d.a,{path:"/events",component:L}),r.a.createElement(d.a,{path:"/payable",component:T}),r.a.createElement(d.a,{path:"/fallback",component:C}),r.a.createElement(d.a,{path:"/fallback-gas-limit",component:H}),r.a.createElement(d.a,{component:y})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=document.getElementById("root");N.hasChildNodes()?Object(i.hydrate)(r.a.createElement(I,null),N):Object(i.render)(r.a.createElement(I,null),N),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){}},[[17,2,1]]]);
//# sourceMappingURL=main.022ed7d4.chunk.js.map