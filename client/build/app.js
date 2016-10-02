webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(58);

	var _routes = __webpack_require__(250);

	var _routes2 = _interopRequireDefault(_routes);

	var _MuiThemeProvider = __webpack_require__(195);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	  _MuiThemeProvider2.default,
	  null,
	  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
	), document.getElementById('react-app'));

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(58);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../styles/app.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Base = function (_React$Component) {
	  _inherits(Base, _React$Component);

	  function Base() {
	    _classCallCheck(this, Base);

	    return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
	  }

	  _createClass(Base, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'top-bar' },
	          _react2.default.createElement(
	            'div',
	            { className: 'top-bar-left' },
	            _react2.default.createElement(
	              _reactRouter.IndexLink,
	              { to: '/' },
	              'React App'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'top-bar-right' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/login' },
	              'Log in'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/signup' },
	              'Sign up'
	            )
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return Base;
	}(_react2.default.Component);

	exports.default = Base;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(67);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: 'render',


	    /**
	     * Render the component.
	     */
	    value: function render() {
	      return _react2.default.createElement(
	        _materialUi.Card,
	        { className: 'container' },
	        _react2.default.createElement(_materialUi.CardTitle, { title: 'React Application', subtitle: 'This is the home page.' })
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(58);

	var _materialUi = __webpack_require__(67);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginForm = function (_React$Component) {
	  _inherits(LoginForm, _React$Component);

	  function LoginForm() {
	    _classCallCheck(this, LoginForm);

	    return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
	  }

	  _createClass(LoginForm, [{
	    key: 'processForm',


	    /**
	     * Process the form.
	     *
	     * @param {object} event - the JavaScript event object
	     */
	    value: function processForm(event) {
	      // prevent default action. in this case, action is the form submission event
	      event.preventDefault();

	      console.log('email:', this.refs.email.getValue());
	      console.log('password:', this.refs.password.getValue());
	    }

	    /**
	     * Process the form.
	     *
	     * @param {object} event - the JavaScript event object
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _materialUi.Card,
	        { 'class': 'container' },
	        _react2.default.createElement(
	          'form',
	          { action: '/', onSubmit: this.processForm.bind(this) },
	          _react2.default.createElement(
	            'h2',
	            { className: 'card-heading' },
	            'Log In'
	          ),
	          _react2.default.createElement(_materialUi.CardTitle, { title: 'Login with Email' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'field-line' },
	            _react2.default.createElement(_materialUi.TextField, { ref: 'email', floatingLabelText: 'Email' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'field-line' },
	            _react2.default.createElement(_materialUi.TextField, { ref: 'password', floatingLabelText: 'Password', type: 'password' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'button-line' },
	            _react2.default.createElement(_materialUi.RaisedButton, { type: 'submit', label: 'Login', primary: true })
	          ),
	          _react2.default.createElement(
	            _materialUi.CardText,
	            null,
	            '\'Don\\\'t have an account? \'',
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/signup' },
	              'Create one'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return LoginForm;
	}(_react2.default.Component);

	exports.default = LoginForm;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(58);

	var _materialUi = __webpack_require__(67);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignUpForm = function (_React$Component) {
	  _inherits(SignUpForm, _React$Component);

	  function SignUpForm() {
	    _classCallCheck(this, SignUpForm);

	    return _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).apply(this, arguments));
	  }

	  _createClass(SignUpForm, [{
	    key: 'processForm',


	    /**
	     * Process the form.
	     *
	     * @param {object} event - the JavaScript event object
	     */
	    value: function processForm(event) {
	      // prevent default action. in this case, action is the form submission event
	      event.preventDefault();

	      console.log('name:', this.refs.name.getValue());
	      console.log('email:', this.refs.email.getValue());
	      console.log('password:', this.refs.password.getValue());
	    }

	    /**
	     * Render the component.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _materialUi.Card,
	        { className: 'container' },
	        _react2.default.createElement(
	          'form',
	          { action: '/', onSubmit: this.processForm.bind(this) },
	          _react2.default.createElement(
	            'h2',
	            { className: 'card-heading' },
	            'Sign Up'
	          ),
	          _react2.default.createElement(_materialUi.CardTitle, { title: 'Sign Up with Email' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'field-line' },
	            _react2.default.createElement(_materialUi.TextField, { ref: 'name', floatingLabelText: 'Name' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'field-line' },
	            _react2.default.createElement(_materialUi.TextField, { ref: 'email', floatingLabelText: 'Email' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'field-line' },
	            _react2.default.createElement(_materialUi.TextField, { ref: 'password', floatingLabelText: 'Password', type: 'password' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'button-line' },
	            _react2.default.createElement(_materialUi.RaisedButton, { type: 'submit', label: 'Create New Account', primary: true })
	          ),
	          _react2.default.createElement(
	            _materialUi.CardText,
	            null,
	            'Already have an account? ',
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/login' },
	              'Log in'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return SignUpForm;
	}(_react2.default.Component);

	exports.default = SignUpForm;

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Base = __webpack_require__(246);

	var _Base2 = _interopRequireDefault(_Base);

	var _Home = __webpack_require__(247);

	var _Home2 = _interopRequireDefault(_Home);

	var _LoginForm = __webpack_require__(248);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	var _SignUpForm = __webpack_require__(249);

	var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = {
	  // base component (wrapper for the whole application).
	  component: _Base2.default,
	  childRoutes: [{
	    path: '/',
	    component: _Home2.default
	  }, {
	    path: '/login',
	    component: _LoginForm2.default
	  }, {
	    path: '/signup',
	    component: _SignUpForm2.default
	  }]
	};

	exports.default = routes;

/***/ }

});