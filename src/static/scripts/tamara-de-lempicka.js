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
  object
}) => {
  if (object == null) return React.createElement("div", null, "Select an image to display data.");
  return React.createElement("table", {
    className: "table"
  }, React.createElement("tbody", null, Object.keys(object).map(key => {
    return React.createElement("tr", {
      key: key
    }, React.createElement("th", {
      scope: "row"
    }, key), React.createElement("td", null, object[key]));
  })));
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

var _Tamara = _interopRequireDefault(require("./Tamara.jsx"));

var _StateInfo = _interopRequireDefault(require("./StateInfo.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  }, React.createElement("h1", null, "Art Deco: Tamara de Lempicka"), React.createElement("a", {
    href: "https://artdeco.bz"
  }, "by Art Deco Code")), React.createElement("div", {
    className: "col"
  }, React.createElement("h2", null, "Picture Information"), React.createElement("div", {
    id: "info"
  }, React.createElement(_StateInfo.default, {
    object: selected
  })))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col"
  }, React.createElement("p", null, "This page is generated with ", React.createElement("a", {
    href: "https://npmjs.org/package/photo-partition"
  }, "photo-partition package"), ".", React.createElement("img", {
    src: "/img/images.jpeg",
    alt: "painting"
  })))));
};

exports.default = _default;

},{"./StateInfo.jsx":2,"./Tamara.jsx":3}],5:[function(require,module,exports){
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

var _TamaraDeLempicka = _interopRequireDefault(require("../Components/TamaraDeLempicka.jsx"));

var _reducer = _interopRequireDefault(require("../reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */

/* global ReactDOM, Redux, ReactRedux */
// import Tamara from '../Components/Tamara.jsx'
// import JSONList from '../Components/JSONList.jsx'
// import StateInfo from '../Components/StateInfo.jsx'
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

},{"../Components/TamaraDeLempicka.jsx":4,"../reducer":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsInNyYy9Db21wb25lbnRzL1N0YXRlSW5mby5qc3giLCJzcmMvQ29tcG9uZW50cy9UYW1hcmEuanN4Iiwic3JjL0NvbXBvbmVudHMvVGFtYXJhRGVMZW1waWNrYS5qc3giLCJzcmMvcmVkdWNlci9pbmRleC5qcyIsInNyYy9zY3JpcHRzL3RhbWFyYS1kZS1sZW1waWNrYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7ZUNoRGUsQ0FBQztBQUFFO0FBQUYsQ0FBRCxLQUFnQjtBQUM3QixNQUFJLFVBQVUsSUFBZCxFQUFvQixPQUFPLG9FQUFQO0FBQ3BCLFNBQ0U7QUFBTyxlQUFVO0FBQWpCLEtBQ0UsbUNBQ0csT0FBTyxJQUFQLENBQVksTUFBWixFQUFvQixHQUFwQixDQUF3QixPQUFPO0FBQzlCLFdBQ0U7QUFBSSxXQUFLO0FBQVQsT0FDRTtBQUFJLGFBQU07QUFBVixPQUFpQixHQUFqQixDQURGLEVBRUUsZ0NBQUssT0FBTyxHQUFQLENBQUwsQ0FGRixDQURGO0FBTUQsR0FQQSxDQURILENBREYsQ0FERjtBQWNELEM7Ozs7Ozs7Ozs7OztBQ2hCRDs7OztlQUVlLENBQUM7QUFBRSxNQUFGO0FBQVEsVUFBUjtBQUFrQixVQUFsQjtBQUE0QjtBQUE1QixDQUFELEtB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QUNsQixhQUFTO0FBQUUsWUFBTSxVQUFSO0FBQW9CLGdCQUFVO0FBQTlCLEtBQVQ7QUFDRCxHQUhVO0FBSVgsY0FBWSxNQUFNO0FBQ2hCLGFBQVM7QUFBRSxZQUFNLFVBQVI7QUFBb0IsZ0JBQVU7QUFBOUIsS0FBVDtBQUNEO0FBTlUsQ0FBYixDQVBnQyxFQWVoQyx5QkFmZ0MsQ0FBbEM7QUFpQkEsTUFBTSxJQUNKLG9CQUFDLFFBQUQ7QUFBVSxTQUFPO0FBQWpCLEdBQ0Usb0JBQUMseUJBQUQsT0FERixDQURGO0FBTUEsUUFBUSxDQUFSLEVBQVcsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IG9iamVjdCB9KSA9PiB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuIDxkaXY+U2VsZWN0IGFuIGltYWdlIHRvIGRpc3BsYXkgZGF0YS48L2Rpdj5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge09iamVjdC5rZXlzKG9iamVjdCkubWFwKGtleSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntrZXl9PC90aD5cbiAgICAgICAgICAgICAgPHRkPntvYmplY3Rba2V5XX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApXG59XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgKHsgbGlzdCwgb25TZWxlY3QsIHNlbGVjdGVkLCBvbkRlc2VsZWN0IH0pID0+IHtcbiAgY29uc3QgaWQgPSBzZWxlY3RlZCAmJiBzZWxlY3RlZC5jb250ZW50SWRcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiVGFtYXJhXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICA8ZGl2IGlkPVwiaW1hZ2VzXCI+XG4gICAgICAgICAge2xpc3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgdGl0bGUsIGNvbnRlbnRJZCB9ID0gaXRlbVxuICAgICAgICAgICAgY29uc3QgU2VsZWN0ZWQgPSBpZCA9PSBjb250ZW50SWRcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGN4KHtcbiAgICAgICAgICAgICAgJ3ByZXZpZXctZGl2JzogdHJ1ZSxcbiAgICAgICAgICAgICAgczogdHJ1ZSxcbiAgICAgICAgICAgICAgW2BzJHtpfWBdOiB0cnVlLFxuICAgICAgICAgICAgICBTZWxlY3RlZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJldmlld1wiIHNyYz17dXJsfSBhbHQ9e3RpdGxlfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25EZXNlbGVjdCgpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdChpdGVtKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgVGFtYXJhIGZyb20gJy4vVGFtYXJhLmpzeCdcbmltcG9ydCBTdGF0ZUluZm8gZnJvbSAnLi9TdGF0ZUluZm8uanN4J1xuXG5leHBvcnQgZGVmYXVsdCAoeyBsaXN0LCBvblNlbGVjdCwgb25EZXNlbGVjdCwgc2VsZWN0ZWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGFtYXJhIGxpc3Q9e2xpc3R9IG9uU2VsZWN0PXtvblNlbGVjdH0gb25EZXNlbGVjdD17b25EZXNlbGVjdH0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aDE+QXJ0IERlY286IFRhbWFyYSBkZSBMZW1waWNrYTwvaDE+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXJ0ZGVjby5ielwiPmJ5IEFydCBEZWNvIENvZGU8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGgyPlBpY3R1cmUgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICAgIDxkaXYgaWQ9XCJpbmZvXCI+XG4gICAgICAgICAgICA8U3RhdGVJbmZvIG9iamVjdD17c2VsZWN0ZWR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwianNvblwiPlxuICAgICAgICAgICAgPEpTT05MaXN0IGxpc3Q9e2xpc3R9IC8+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIHsvKiBDaG9vc2UgYW4gaW1hZ2UgdG8gZW1iZWQgbWV0YWRhdGEgdG8gaXQuICovfVxuICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIHBhZ2UgaXMgZ2VuZXJhdGVkIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vbnBtanMub3JnL3BhY2thZ2UvcGhvdG8tcGFydGl0aW9uXCI+cGhvdG8tcGFydGl0aW9uIHBhY2thZ2U8L2E+LlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ltYWdlcy5qcGVnXCIgYWx0PVwicGFpbnRpbmdcIiAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLyogZ2xvYmFsIGl0ZW1zLCBSZWR1eCAqL1xuY29uc3QgeyBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGl0ZW1zKHN0YXRlID0gaXRlbXMsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PSAnU0VUX0lURU1TJykge1xuICAgICAgcmV0dXJuIGFjdGlvbi5pdGVtc1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfSxcbiAgc2VsZWN0ZWQoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT0gJ1NFTEVDVEVEJykge1xuICAgICAgc3RhdGUgPSBhY3Rpb24uc2VsZWN0ZWRcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlXG4gIH0sXG59KVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG4vKiBnbG9iYWwgUmVhY3RET00sIFJlZHV4LCBSZWFjdFJlZHV4ICovXG4vLyBpbXBvcnQgVGFtYXJhIGZyb20gJy4uL0NvbXBvbmVudHMvVGFtYXJhLmpzeCdcbi8vIGltcG9ydCBKU09OTGlzdCBmcm9tICcuLi9Db21wb25lbnRzL0pTT05MaXN0LmpzeCdcbi8vIGltcG9ydCBTdGF0ZUluZm8gZnJvbSAnLi4vQ29tcG9uZW50cy9TdGF0ZUluZm8uanN4J1xuY29uc3QgeyBoeWRyYXRlIH0gPSBSZWFjdERPTVxuY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gUmVkdXhcbmNvbnN0IHsgY29ubmVjdCwgUHJvdmlkZXIgfSA9IFJlYWN0UmVkdXhcbmltcG9ydCBUYW1hcmFEZUxlbXBpY2thIGZyb20gJy4uL0NvbXBvbmVudHMvVGFtYXJhRGVMZW1waWNrYS5qc3gnXG5pbXBvcnQgciBmcm9tICcuLi9yZWR1Y2VyJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHIpXG5cbmNvbnN0IENvbm5lY3RlZFRhbWFyYURlTGVtcGlja2EgPSBjb25uZWN0KFxuICAoeyBpdGVtcywgc2VsZWN0ZWQgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBpdGVtcyxcbiAgICAgIHNlbGVjdGVkLFxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBvblNlbGVjdDogb2JqZWN0ID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFTEVDVEVEJywgc2VsZWN0ZWQ6IG9iamVjdCB9KVxuICAgIH0sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VMRUNURUQnLCBzZWxlY3RlZDogbnVsbCB9KVxuICAgIH0sXG4gIH0pLFxuKShUYW1hcmFEZUxlbXBpY2thKVxuXG5jb25zdCBDID0gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Q29ubmVjdGVkVGFtYXJhRGVMZW1waWNrYSAvPlxuICA8L1Byb3ZpZGVyPlxuKVxuXG5oeWRyYXRlKEMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUYW1hcmEnKSlcbiJdfQ==
