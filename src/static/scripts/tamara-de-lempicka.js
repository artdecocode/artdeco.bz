(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  title,
  description,
  completitionYear
}) => {
  return React.createElement("div", null, React.createElement("h4", null, title), completitionYear && React.createElement("p", null, completitionYear), description && description.split('\n').map(d => React.createElement("p", null, d)));
};

exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  list,
  onSelect,
  selected,
  onDeselect
}) => {
  const id = selected && selected.contentId;
  return React.createElement("div", {
    className: "row",
    id: "Tamara"
  }, React.createElement("div", {
    className: "col-xs-12"
  }, React.createElement("div", {
    id: "images"
  }, list.map((item, i) => {
    const {
      url,
      title,
      contentId
    } = item;
    const Selected = id == contentId;
    const className = (0, _classnames.default)({
      'preview-div': true,
      s: true,
      [`s${i}`]: true,
      Selected
    });
    return React.createElement("div", {
      key: i,
      className: className
    }, React.createElement("img", {
      className: "preview",
      src: url,
      alt: title,
      onClick: () => {
        if (Selected) {
          onDeselect();
        } else {
          onSelect(item);
        }
      }
    }));
  }))));
};

exports.default = _default;

},{"classnames":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tamara = _interopRequireDefault(require("./Tamara"));

var _Information = _interopRequireDefault(require("./Information"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Info = ({
  selected
}) => {
  if (!selected) return 'Please select a picture for description.';
  return React.createElement(_Information.default, selected);
};

var _default = ({
  list,
  onSelect,
  onDeselect,
  selected
}) => {
  return React.createElement("div", null, React.createElement(_Tamara.default, {
    list: list,
    onSelect: onSelect,
    onDeselect: onDeselect,
    selected: selected
  }), React.createElement("div", {
    className: "row",
    style: {
      paddingTop: 20
    }
  }, React.createElement("div", {
    className: "col"
  }, React.createElement(Info, {
    selected: selected
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("h1", null, "Art Deco: Tamara de Lempicka"), React.createElement("blockquote", null, React.createElement("p", {
    className: "mb-0"
  }, "The intriguing events from the life of Tamara de Lempicka often overshadow the significant contribution she made to the development of modern art. Loosely defined as an \u2018Art Deco\u2019 artist, de Lempicka revolutionized the portrait style; more specifically, the role of subject as a liberated and independent woman. Her work is difficult to classify and features elements of traditional Art Deco (such as the nude female body) but also Cubism and other stylistic movements of the early 20th century. Embracing the \u2018synthetic cubist\u2019 method with small geometric planes of strong color, the trained artist created compelling works which are immediately recognizable. Yet more importantly, De Lempicka challenged the limitations imposed on the art and life of a woman."), React.createElement("footer", {
    className: "blockquote-footer"
  }, "Helen Brady for ", React.createElement("cite", {
    title: "Culture Trip"
  }, React.createElement("a", {
    href: "https://theculturetrip.com/europe/poland/articles/art-deco-icon-the-alluring-mystique-of-tamara-de-lempicka/"
  }, "Culture Trip")))))));
};

exports.default = _default;

},{"./Information":2,"./Tamara":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* global items, Redux */
const {
  combineReducers
} = Redux;

var _default = combineReducers({
  items(state = items, action) {
    if (action.type == 'SET_ITEMS') {
      return action.items;
    }

    return state;
  },

  selected(state = null, action) {
    if (action.type == 'SELECTED') {
      state = action.selected;
    }

    return state;
  }

});

exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

var _TamaraDeLempicka = _interopRequireDefault(require("../Components/TamaraDeLempicka"));

var _reducer = _interopRequireDefault(require("../reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global ReactDOM, Redux, ReactRedux */
const {
  hydrate
} = ReactDOM;
const {
  createStore
} = Redux;
const {
  connect,
  Provider
} = ReactRedux;
const store = createStore(_reducer.default);
const ConnectedTamaraDeLempicka = connect(({
  items,
  selected
}) => {
  return {
    list: items,
    selected
  };
}, dispatch => ({
  onSelect: object => {
    dispatch({
      type: 'SELECTED',
      selected: object
    });
  },
  onDeselect: () => {
    dispatch({
      type: 'SELECTED',
      selected: null
    });
  }
}))(_TamaraDeLempicka.default);
const C = React.createElement(Provider, {
  store: store
}, React.createElement(ConnectedTamaraDeLempicka, null));
hydrate(C, document.getElementById('Tamara'));

},{"../Components/TamaraDeLempicka":4,"../reducer":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsInNyYy9Db21wb25lbnRzL0luZm9ybWF0aW9uLmpzeCIsInNyYy9Db21wb25lbnRzL1RhbWFyYS5qc3giLCJzcmMvQ29tcG9uZW50cy9UYW1hcmFEZUxlbXBpY2thLmpzeCIsInNyYy9yZWR1Y2VyL2luZGV4LmpzIiwic3JjL3NjcmlwdHMvdGFtYXJhLWRlLWxlbXBpY2thLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztlQ2hEZSxDQUFDO0FBQUUsT0FBRjtBQUFTLGFBQVQ7QUFBc0I7QUFBdEIsQ0FBRCxLQUE4QztBQUMzRCxTQUNFLGlDQUNFLGdDQUFLLEtBQUwsQ0FERixFQUVHLG9CQUNDLCtCQUFJLGdCQUFKLENBSEosRUFLRyxlQUNDLFlBQVksS0FBWixDQUFrQixJQUFsQixFQUF3QixHQUF4QixDQUE0QixLQUFLLCtCQUFJLENBQUosQ0FBakMsQ0FOSixDQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7O0FDWkQ7Ozs7ZUFFZSxDQUFDO0FBQUUsTUFBRjtBQUFRLFVBQVI7QUFBa0IsVUFBbEI7QUFBNEI7QUFBNUIsQ0FBRCxLQUE4QztBQUMzRCxRQUFNLEtBQUssWUFBWSxTQUFTLFNBQWhDO0FBQ0EsU0FDRTtBQUFLLGVBQVUsS0FBZjtBQUFxQixRQUFHO0FBQXhC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O0FBQ0QsR0FIVTtBQUlYLGNBQVksTUFBTTtBQUNoQixhQUFTO0FBQUUsWUFBTSxVQUFSO0FBQW9CLGdCQUFVO0FBQTlCLEtBQVQ7QUFDRDtBQU5VLENBQWIsQ0FQZ0MsRUFlaEMseUJBZmdDLENBQWxDO0FBaUJBLE1BQU0sSUFDSixvQkFBQyxRQUFEO0FBQVUsU0FBTztBQUFqQixHQUNFLG9CQUFDLHlCQUFELE9BREYsQ0FERjtBQU1BLFFBQVEsQ0FBUixFQUFXLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJleHBvcnQgZGVmYXVsdCAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNvbXBsZXRpdGlvblllYXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICB7Y29tcGxldGl0aW9uWWVhciAmJlxuICAgICAgICA8cD57Y29tcGxldGl0aW9uWWVhcn08L3A+XG4gICAgICB9XG4gICAgICB7ZGVzY3JpcHRpb24gJiZcbiAgICAgICAgZGVzY3JpcHRpb24uc3BsaXQoJ1xcbicpLm1hcChkID0+IDxwPntkfTwvcD4pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBsaXN0LCBvblNlbGVjdCwgc2VsZWN0ZWQsIG9uRGVzZWxlY3QgfSkgPT4ge1xuICBjb25zdCBpZCA9IHNlbGVjdGVkICYmIHNlbGVjdGVkLmNvbnRlbnRJZFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJUYW1hcmFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJpbWFnZXNcIj5cbiAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCB0aXRsZSwgY29udGVudElkIH0gPSBpdGVtXG4gICAgICAgICAgICBjb25zdCBTZWxlY3RlZCA9IGlkID09IGNvbnRlbnRJZFxuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY3goe1xuICAgICAgICAgICAgICAncHJldmlldy1kaXYnOiB0cnVlLFxuICAgICAgICAgICAgICBzOiB0cnVlLFxuICAgICAgICAgICAgICBbYHMke2l9YF06IHRydWUsXG4gICAgICAgICAgICAgIFNlbGVjdGVkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aWV3XCIgc3JjPXt1cmx9IGFsdD17dGl0bGV9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBvbkRlc2VsZWN0KClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBUYW1hcmEgZnJvbSAnLi9UYW1hcmEnXG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSAnLi9JbmZvcm1hdGlvbidcblxuY29uc3QgSW5mbyA9ICh7IHNlbGVjdGVkIH0pID0+IHtcbiAgaWYgKCFzZWxlY3RlZCkgcmV0dXJuICdQbGVhc2Ugc2VsZWN0IGEgcGljdHVyZSBmb3IgZGVzY3JpcHRpb24uJ1xuICByZXR1cm4gKDxJbmZvcm1hdGlvbiB7Li4uc2VsZWN0ZWR9IC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBsaXN0LCBvblNlbGVjdCwgb25EZXNlbGVjdCwgc2VsZWN0ZWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGFtYXJhIGxpc3Q9e2xpc3R9IG9uU2VsZWN0PXtvblNlbGVjdH0gb25EZXNlbGVjdD17b25EZXNlbGVjdH0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxJbmZvIHNlbGVjdGVkPXtzZWxlY3RlZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGgxPkFydCBEZWNvOiBUYW1hcmEgZGUgTGVtcGlja2E8L2gxPlxuICAgICAgICAgIDxibG9ja3F1b3RlPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICBUaGUgaW50cmlndWluZyBldmVudHMgZnJvbSB0aGUgbGlmZSBvZiBUYW1hcmEgZGUgTGVtcGlja2Egb2Z0ZW4gb3ZlcnNoYWRvdyB0aGUgc2lnbmlmaWNhbnQgY29udHJpYnV0aW9uIHNoZSBtYWRlIHRvIHRoZSBkZXZlbG9wbWVudCBvZiBtb2Rlcm4gYXJ0LiBMb29zZWx5IGRlZmluZWQgYXMgYW4g4oCYQXJ0IERlY2/igJkgYXJ0aXN0LCBkZSBMZW1waWNrYSByZXZvbHV0aW9uaXplZCB0aGUgcG9ydHJhaXQgc3R5bGU7IG1vcmUgc3BlY2lmaWNhbGx5LCB0aGUgcm9sZSBvZiBzdWJqZWN0IGFzIGEgbGliZXJhdGVkIGFuZCBpbmRlcGVuZGVudCB3b21hbi4gSGVyIHdvcmsgaXMgZGlmZmljdWx0IHRvIGNsYXNzaWZ5IGFuZCBmZWF0dXJlcyBlbGVtZW50cyBvZiB0cmFkaXRpb25hbCBBcnQgRGVjbyAoc3VjaCBhcyB0aGUgbnVkZSBmZW1hbGUgYm9keSkgYnV0IGFsc28gQ3ViaXNtIGFuZCBvdGhlciBzdHlsaXN0aWMgbW92ZW1lbnRzIG9mIHRoZSBlYXJseSAyMHRoIGNlbnR1cnkuIEVtYnJhY2luZyB0aGUg4oCYc3ludGhldGljIGN1YmlzdOKAmSBtZXRob2Qgd2l0aCBzbWFsbCBnZW9tZXRyaWMgcGxhbmVzIG9mIHN0cm9uZyBjb2xvciwgdGhlIHRyYWluZWQgYXJ0aXN0IGNyZWF0ZWQgY29tcGVsbGluZyB3b3JrcyB3aGljaCBhcmUgaW1tZWRpYXRlbHkgcmVjb2duaXphYmxlLiBZZXQgbW9yZSBpbXBvcnRhbnRseSwgRGUgTGVtcGlja2EgY2hhbGxlbmdlZCB0aGUgbGltaXRhdGlvbnMgaW1wb3NlZCBvbiB0aGUgYXJ0IGFuZCBsaWZlIG9mIGEgd29tYW4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJsb2NrcXVvdGUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIEhlbGVuIEJyYWR5IGZvciA8Y2l0ZSB0aXRsZT1cIkN1bHR1cmUgVHJpcFwiPjxhIGhyZWY9XCJodHRwczovL3RoZWN1bHR1cmV0cmlwLmNvbS9ldXJvcGUvcG9sYW5kL2FydGljbGVzL2FydC1kZWNvLWljb24tdGhlLWFsbHVyaW5nLW15c3RpcXVlLW9mLXRhbWFyYS1kZS1sZW1waWNrYS9cIj5DdWx0dXJlIFRyaXA8L2E+PC9jaXRlPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiBnbG9iYWwgaXRlbXMsIFJlZHV4ICovXG5jb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXhcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgaXRlbXMoc3RhdGUgPSBpdGVtcywgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09ICdTRVRfSVRFTVMnKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLml0ZW1zXG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVxuICB9LFxuICBzZWxlY3RlZChzdGF0ZSA9IG51bGwsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PSAnU0VMRUNURUQnKSB7XG4gICAgICBzdGF0ZSA9IGFjdGlvbi5zZWxlY3RlZFxuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfSxcbn0pXG4iLCIvKiBnbG9iYWwgUmVhY3RET00sIFJlZHV4LCBSZWFjdFJlZHV4ICovXG5jb25zdCB7IGh5ZHJhdGUgfSA9IFJlYWN0RE9NXG5jb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSBSZWR1eFxuY29uc3QgeyBjb25uZWN0LCBQcm92aWRlciB9ID0gUmVhY3RSZWR1eFxuaW1wb3J0IFRhbWFyYURlTGVtcGlja2EgZnJvbSAnLi4vQ29tcG9uZW50cy9UYW1hcmFEZUxlbXBpY2thJ1xuaW1wb3J0IHIgZnJvbSAnLi4vcmVkdWNlcidcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyKVxuXG5jb25zdCBDb25uZWN0ZWRUYW1hcmFEZUxlbXBpY2thID0gY29ubmVjdChcbiAgKHsgaXRlbXMsIHNlbGVjdGVkIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlzdDogaXRlbXMsXG4gICAgICBzZWxlY3RlZCxcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgb25TZWxlY3Q6IG9iamVjdCA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRUxFQ1RFRCcsIHNlbGVjdGVkOiBvYmplY3QgfSlcbiAgICB9LFxuICAgIG9uRGVzZWxlY3Q6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFTEVDVEVEJywgc2VsZWN0ZWQ6IG51bGwgfSlcbiAgICB9LFxuICB9KSxcbikoVGFtYXJhRGVMZW1waWNrYSlcblxuY29uc3QgQyA9IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvbm5lY3RlZFRhbWFyYURlTGVtcGlja2EgLz5cbiAgPC9Qcm92aWRlcj5cbilcblxuaHlkcmF0ZShDLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGFtYXJhJykpXG4iXX0=
