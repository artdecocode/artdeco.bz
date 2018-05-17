(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  list
}) => {
  return React.createElement("div", null, list.map((item, i) => {
    return React.createElement("pre", {
      key: i,
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(item, null, 2)
      }
    });
  }));
};

exports.default = _default;

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

var _default = ({
  list,
  onSelect
}) => {
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
      title
    } = item;
    return React.createElement("div", {
      key: i,
      className: `preview-div s s${i}`
    }, React.createElement("img", {
      className: "preview",
      "data-i": i,
      src: url,
      alt: title,
      onClick: () => {
        console.log('img clicked', item);
        onSelect(item);
      }
    }));
  }))));
};

exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _Tamara = _interopRequireDefault(require("../Components/Tamara.jsx"));

var _JSONList = _interopRequireDefault(require("../Components/JSONList.jsx"));

var _StateInfo = _interopRequireDefault(require("../Components/StateInfo.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */

/* global items, ReactDOM, Redux, ReactRedux */
const {
  hydrate
} = ReactDOM;
const {
  createStore,
  combineReducers
} = Redux;
const {
  connect,
  Provider
} = ReactRedux;
const r = combineReducers({
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
const store = createStore(r);

const mapStateToProps = ({
  items
}) => {
  return {
    list: items
  };
};

const ConnectedTamara = connect(mapStateToProps, dispatch => ({
  onSelect: object => {
    dispatch({
      type: 'SELECTED',
      selected: object
    });
  }
}))(_Tamara.default);
const ConnectedJSONList = connect(({
  items
}) => ({
  list: items
}))(_JSONList.default);
const ConnectedStateInfo = connect(({
  selected
}) => ({
  object: selected
}))(_StateInfo.default);
const C = React.createElement(Provider, {
  store: store
}, React.createElement(ConnectedTamara, null));
const T = React.createElement(Provider, {
  store: store
}, React.createElement(ConnectedJSONList, null));
const S = React.createElement(Provider, {
  store: store
}, React.createElement(ConnectedStateInfo, null));
hydrate(C, document.getElementById('tmr'));
hydrate(T, document.getElementById('json'));
hydrate(S, document.getElementById('info'));

},{"../Components/JSONList.jsx":1,"../Components/StateInfo.jsx":2,"../Components/Tamara.jsx":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29tcG9uZW50cy9KU09OTGlzdC5qc3giLCJzcmMvQ29tcG9uZW50cy9TdGF0ZUluZm8uanN4Iiwic3JjL0NvbXBvbmVudHMvVGFtYXJhLmpzeCIsInNyYy9zY3JpcHRzL3RhbWFyYS1kZS1sZW1waWNrYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7ZUNBZSxDQUFDO0FBQUU7QUFBRixDQUFELEtBQWM7QUFDM0IsU0FDRSxpQ0FDRyxLQUFLLEdBQUwsQ0FBUyxDQUFDLElBQUQsRUFBTyxDQUFQLEtBQWE7QUFDckIsV0FDRTtBQUFLLFdBQUssQ0FBVjtBQUFhLCtCQUF5QjtBQUFFLGdCQUFRLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0I7QUFBVjtBQUF0QyxNQURGO0FBR0QsR0FKQSxDQURILENBREY7QUFTRCxDOzs7Ozs7Ozs7Ozs7ZUNWYyxDQUFDO0FBQUU7QUFBRixDQUFELEtBQWdCO0FBQzdCLE1BQUksVUFBVSxJQUFkLEVBQW9CLE9BQU8sb0VBQVA7QUFDcEIsU0FDRTtBQUFPLGVBQVU7QUFBakIsS0FDRSxtQ0FDRyxPQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLEdBQXBCLENBQXdCLE9BQU87QUFDOUIsV0FDRTtBQUFJLFdBQUs7QUFBVCxPQUNFO0FBQUksYUFBTTtBQUFWLE9BQWlCLEdBQWpCLENBREYsRUFFRSxnQ0FBSyxPQUFPLEdBQVAsQ0FBTCxDQUZGLENBREY7QUFNRCxHQVBBLENBREgsQ0FERixDQURGO0FBY0QsQzs7Ozs7Ozs7Ozs7O2VDaEJjLENBQUM7QUFBRSxNQUFGO0FBQVE7QUFBUixDQUFELEtBQXdCO0FBQ3JDLFNBQ0U7QUFBSyxlQUFVLEtBQWY7QUFBcUIsUUFBRztBQUF4QixLQUNFO0FBQUssZUFBVTtBQUFmLEtBQ0U7QUFBSyxRQUFHO0FBQVIsS0FDRyxLQUFLLEdBQUwsQ0FBUyxDQUFDLElBQUQsRUFBTyxDQUFQLEtBQWE7QUFDckIsVUFBTTtBQUFFLFNBQUY7QUFBTztBQUFQLFFBQWlCLElBQXZCO0FBQ0EsV0FDRTtBQUFLLFdBQUssQ0FBVjtBQUFhLGlCQUFZLGtCQUFpQixDQUFFO0FBQTVDLE9BQ0U7QUFBSyxpQkFBVSxTQUFmO0FBQXlCLGdCQUFRLENBQWpDO0FBQW9DLFdBQUssR0FBekM7QUFBOEMsV0FBSyxLQUFuRDtBQUEwRCxlQUFTLE1BQU07QUFDdkUsZ0JBQVEsR0FBUixDQUFZLGFBQVosRUFBMkIsSUFBM0I7QUFDQSxpQkFBUyxJQUFUO0FBQ0Q7QUFIRCxNQURGLENBREY7QUFRRCxHQVZBLENBREgsQ0FERixDQURGLENBREY7QUFtQkQsQzs7Ozs7OztBQ2xCRDs7QUFDQTs7QUFDQTs7OztBQUpBOztBQUNBO0FBSUEsTUFBTTtBQUFFO0FBQUYsSUFBYyxRQUFwQjtBQUNBLE1BQU07QUFBRSxhQUFGO0FBQWU7QUFBZixJQUFtQyxLQUF6QztBQUNBLE1BQU07QUFBRSxTQUFGO0FBQVc7QUFBWCxJQUF3QixVQUE5QjtBQUVBLE1BQU0sSUFBSSxnQkFBZ0I7QUFDeEIsUUFBTSxRQUFRLEtBQWQsRUFBcUIsTUFBckIsRUFBNkI7QUFDM0IsUUFBSSxPQUFPLElBQVAsSUFBZSxXQUFuQixFQUFnQztBQUM5QixhQUFPLE9BQU8sS0FBZDtBQUNEOztBQUNELFdBQU8sS0FBUDtBQUNELEdBTnVCOztBQU94QixXQUFTLFFBQVEsSUFBakIsRUFBdUIsTUFBdkIsRUFBK0I7QUFDN0IsUUFBSSxPQUFPLElBQVAsSUFBZSxVQUFuQixFQUErQjtBQUM3QixjQUFRLE9BQU8sUUFBZjtBQUNEOztBQUNELFdBQU8sS0FBUDtBQUNEOztBQVp1QixDQUFoQixDQUFWO0FBY0EsTUFBTSxRQUFRLFlBQVksQ0FBWixDQUFkOztBQUVBLE1BQU0sa0JBQWtCLENBQUM7QUFBRTtBQUFGLENBQUQsS0FBZTtBQUNyQyxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFHRCxDQUpEOztBQUtBLE1BQU0sa0JBQWtCLFFBQ3RCLGVBRHNCLEVBRXRCLGFBQWE7QUFDWCxZQUFVLFVBQVU7QUFDbEIsYUFBUztBQUFFLFlBQU0sVUFBUjtBQUFvQixnQkFBVTtBQUE5QixLQUFUO0FBQ0Q7QUFIVSxDQUFiLENBRnNCLEVBT3RCLGVBUHNCLENBQXhCO0FBU0EsTUFBTSxvQkFBb0IsUUFDeEIsQ0FBQztBQUFFO0FBQUYsQ0FBRCxNQUFnQjtBQUFFLFFBQU07QUFBUixDQUFoQixDQUR3QixFQUV4QixpQkFGd0IsQ0FBMUI7QUFJQSxNQUFNLHFCQUFxQixRQUN6QixDQUFDO0FBQUU7QUFBRixDQUFELE1BQW1CO0FBQUUsVUFBUTtBQUFWLENBQW5CLENBRHlCLEVBRXpCLGtCQUZ5QixDQUEzQjtBQUlBLE1BQU0sSUFDSixvQkFBQyxRQUFEO0FBQVUsU0FBTztBQUFqQixHQUNFLG9CQUFDLGVBQUQsT0FERixDQURGO0FBTUEsTUFBTSxJQUNKLG9CQUFDLFFBQUQ7QUFBVSxTQUFPO0FBQWpCLEdBQ0Usb0JBQUMsaUJBQUQsT0FERixDQURGO0FBTUEsTUFBTSxJQUNKLG9CQUFDLFFBQUQ7QUFBVSxTQUFPO0FBQWpCLEdBQ0Usb0JBQUMsa0JBQUQsT0FERixDQURGO0FBTUEsUUFBUSxDQUFSLEVBQVcsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQVg7QUFDQSxRQUFRLENBQVIsRUFBVyxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWDtBQUNBLFFBQVEsQ0FBUixFQUFXLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgKHsgbGlzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtsaXN0Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxwcmUga2V5PXtpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KGl0ZW0sIG51bGwsIDIpIH19IC8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCAoeyBvYmplY3QgfSkgPT4ge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiA8ZGl2PlNlbGVjdCBhbiBpbWFnZSB0byBkaXNwbGF5IGRhdGEuPC9kaXY+XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtPYmplY3Qua2V5cyhvYmplY3QpLm1hcChrZXkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57a2V5fTwvdGg+XG4gICAgICAgICAgICAgIDx0ZD57b2JqZWN0W2tleV19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKHsgbGlzdCwgb25TZWxlY3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJUYW1hcmFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJpbWFnZXNcIj5cbiAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCB0aXRsZSB9ID0gaXRlbVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YHByZXZpZXctZGl2IHMgcyR7aX1gfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXdcIiBkYXRhLWk9e2l9IHNyYz17dXJsfSBhbHQ9e3RpdGxlfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW1nIGNsaWNrZWQnLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgb25TZWxlY3QoaXRlbSlcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG4vKiBnbG9iYWwgaXRlbXMsIFJlYWN0RE9NLCBSZWR1eCwgUmVhY3RSZWR1eCAqL1xuaW1wb3J0IFRhbWFyYSBmcm9tICcuLi9Db21wb25lbnRzL1RhbWFyYS5qc3gnXG5pbXBvcnQgSlNPTkxpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9KU09OTGlzdC5qc3gnXG5pbXBvcnQgU3RhdGVJbmZvIGZyb20gJy4uL0NvbXBvbmVudHMvU3RhdGVJbmZvLmpzeCdcbmNvbnN0IHsgaHlkcmF0ZSB9ID0gUmVhY3RET01cbmNvbnN0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXhcbmNvbnN0IHsgY29ubmVjdCwgUHJvdmlkZXIgfSA9IFJlYWN0UmVkdXhcblxuY29uc3QgciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGl0ZW1zKHN0YXRlID0gaXRlbXMsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PSAnU0VUX0lURU1TJykge1xuICAgICAgcmV0dXJuIGFjdGlvbi5pdGVtc1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfSxcbiAgc2VsZWN0ZWQoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT0gJ1NFTEVDVEVEJykge1xuICAgICAgc3RhdGUgPSBhY3Rpb24uc2VsZWN0ZWRcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlXG4gIH0sXG59KVxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyKVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlzdDogaXRlbXMsXG4gIH1cbn1cbmNvbnN0IENvbm5lY3RlZFRhbWFyYSA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBvblNlbGVjdDogb2JqZWN0ID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFTEVDVEVEJywgc2VsZWN0ZWQ6IG9iamVjdCB9KVxuICAgIH0sXG4gIH0pLFxuKShUYW1hcmEpXG5cbmNvbnN0IENvbm5lY3RlZEpTT05MaXN0ID0gY29ubmVjdChcbiAgKHsgaXRlbXMgfSkgPT4gKHsgbGlzdDogaXRlbXMgfSksXG4pKEpTT05MaXN0KVxuXG5jb25zdCBDb25uZWN0ZWRTdGF0ZUluZm8gPSBjb25uZWN0KFxuICAoeyBzZWxlY3RlZCB9KSA9PiAoeyBvYmplY3Q6IHNlbGVjdGVkIH0pLFxuKShTdGF0ZUluZm8pXG5cbmNvbnN0IEMgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxDb25uZWN0ZWRUYW1hcmEgLz5cbiAgPC9Qcm92aWRlcj5cbilcblxuY29uc3QgVCA9IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvbm5lY3RlZEpTT05MaXN0IC8+XG4gIDwvUHJvdmlkZXI+XG4pXG5cbmNvbnN0IFMgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxDb25uZWN0ZWRTdGF0ZUluZm8gLz5cbiAgPC9Qcm92aWRlcj5cbilcblxuaHlkcmF0ZShDLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG1yJykpXG5oeWRyYXRlKFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc29uJykpXG5oeWRyYXRlKFMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJykpXG4iXX0=
