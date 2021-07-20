'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactDom = _interopDefault(require('react-dom'));
var http = _interopDefault(require('http'));
var https = _interopDefault(require('https'));
var url = _interopDefault(require('url'));
var stream = _interopDefault(require('stream'));
var assert = _interopDefault(require('assert'));
var tty = _interopDefault(require('tty'));
var util = _interopDefault(require('util'));
var os = _interopDefault(require('os'));
var zlib = _interopDefault(require('zlib'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

const StyledButton = styled__default.a`
    font-weight: 700;
    border: 0;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
    border-radius: ${props => props.theme.theme_vars.border_radius};
    text-decoration: none !important;
    width: calc(100% - 48px);
    width: -webkit-fill-available;
    text-align: center;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        width: auto;
    }
    &.button--primary {
        color: white !important;
        background-color: ${props => props.colourOverride ? props.colourOverride : props.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${props => props.colourOverride ? (props.colourOverride) : props.theme.theme_vars.colours.action_dark};
        }
        &:focus {
            outline: none;
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
        &:active {
            transform: translateY(2px);
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
    }
    &.button--secondary {
        color: ${props => props.colourOverride ? props.colourOverride : props.theme.theme_vars.colours.action} !important;
        background-color: transparent;
        border: 3px solid ${props => props.colourOverride ? props.colourOverride : props.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${props => props.colourOverride ? props.colourOverride : props.theme.theme_vars.colours.action}1A;
        }
        &:focus {
            outline: none;
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            border-color: transparent;
            box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
        &:active {
            transform: translateY(2px);
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            border-color: transparent !important;
            box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
    }
    &.button--small {
        font-size: 12px;
        padding: 10px 16px;
    }
    &.button--medium {
        font-size: 14px;
        padding: 11px 20px;

        &.button--secondary {
            padding: 8px 12px;
        }
    }
    &.button--large {
        font-size: 16px;
        padding: 12px 24px;
    }
`;

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? true : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, text = _a.text, title = _a.title, url = _a.url, colourOverride = _a.colourOverride, _d = _a.isExternal, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, children = _a.children, props = __rest(_a, ["primary", "size", "text", "title", "url", "colourOverride", "isExternal", "isDisabled", "children"]);
    var mode = primary ? 'button--primary' : 'button--secondary';
    var href = (isDisabled) ? null : { href: url };
    return (React__default.createElement(StyledButton, __assign({ className: ["button--" + size, mode].join(' ') }, href, { title: title ? title : ("Go to " + text), colourOverride: colourOverride && colourOverride }, props), text ?
        text
        :
            children));
};

const H1 = styled__default.h1`
    color: ${props => props.theme.theme_vars.colours.black};
    margin-left: 0;
    font-weight: 700;
    font-family: ${props => props.theme.theme_vars.fontstack};
    margin-bottom: 20px;

    font-size: 32px;
    font-size: 2rem;
    line-height: 1.1;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 44px;
        font-size: 2.6rem;
        max-width: 960px;
        margin-bottom: 30px;
    }
`;
const H2 = styled__default.h2`
    color: ${props => props.theme.theme_vars.colours.black};
    font-weight: 700;
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
    margin-top: 50px;
    margin-bottom: 15px;

    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 36px;
        font-size: 1.75rem;
        max-width: 960px;
    }
`;
const H3 = styled__default.h3`
    color: ${props => props.theme.theme_vars.colours.black};
    font-weight: 600;
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
    margin-top: 25px;
    margin-bottom: 15px;

    font-size: 24px;
    font-size: 1.3rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 36px;
        font-size: 1.5rem;
        max-width: 960px;
    }
`;
const H4 = styled__default.h4`
    color: ${props => props.theme.theme_vars.colours.black};
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
    margin-top: 25px;
    margin-bottom: 15px;

    font-weight: 600;
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
`;

/**
 * A heading of different levels
 */
var Heading = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 2 : _b, text = _a.text, props = __rest(_a, ["level", "text"]);
    if (level === 1)
        return React__default.createElement(H1, __assign({}, props), text);
    if (level === 2)
        return React__default.createElement(H2, __assign({}, props), text);
    if (level === 3)
        return React__default.createElement(H3, __assign({}, props), text);
    if (level === 4)
        return React__default.createElement(H4, __assign({}, props), text);
    return null;
};

const HeadingWrapper = styled__default.div`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;

    h1, h2, h3, h4 {
        margin: 0;
        vertical align: middle;
        display: inline-block;
        width: calc(100% - 65px);
        @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
            width: calc(100% - 85px);
        }
    }
`;

const Icon = styled__default.div`
    vertical-align: middle;
`;
const IconWrapper = styled__default.div`
    width: ${props => props.iconSize === 1 ? "65px" : props.iconSize === 2 ? "45px" : props.iconSize === 3 ? "30px" : "20px"}; 
    height: auto;

    svg {
        width: 100%;
        height: auto;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        width: ${props => props.iconSize === 1 ? "85px" : props.iconSize === 2 ? "70px" : props.iconSize === 3 ? "55px" : "40px"}; 
        height: auto;
    }
`;

var ServiceIcon = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M14.3144 49.7377L9.74592 45.1692C8.76597 44.1893 7.98201 43.0313 7.43609 41.7575L5.19977 36.5395C4.85493 35.7348 4.06375 35.2131 3.18835 35.2131C2.44432 35.2131 1.75127 35.5912 1.34846 36.2167C0.945646 36.8423 0.88827 37.6297 1.19614 38.307L5.11514 46.9288C5.59561 47.9859 6.26228 48.9479 7.08331 49.7689L14.3144 57H23.9975V54.1389C24.0298 51.9974 23.3344 49.9084 22.025 48.2135C21.2929 47.2481 20.2962 46.5161 19.1559 46.1065C16.9362 45.1698 14.89 43.8659 13.1034 42.2494C11.6767 41.0581 9.57595 41.1551 8.26505 42.4728L8.2625 42.4754", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24.9976 57H13.9976C13.4453 57 12.9976 57.4477 12.9976 58V66C12.9976 66.5523 13.4453 67 13.9976 67H24.9976C25.5498 67 25.9976 66.5523 25.9976 66V58C25.9976 57.4477 25.5498 57 24.9976 57Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M22.9976 62H21.9976", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M45.6807 49.7377L50.2492 45.1692C51.2292 44.1893 52.0131 43.0313 52.559 41.7575L54.7954 36.5395C55.1402 35.7348 55.9314 35.2131 56.8068 35.2131C57.5508 35.2131 58.2439 35.5912 58.6467 36.2167C59.0495 36.8423 59.1068 37.6297 58.799 38.307L54.88 46.9288C54.3995 47.9859 53.7328 48.9479 52.9118 49.7689L45.6807 57H35.9977V54.1389C35.9653 51.9974 36.6607 49.9084 37.9701 48.2135C38.7022 47.2481 39.6989 46.5161 40.8392 46.1065C43.059 45.1698 45.1051 43.8659 46.8917 42.2494C48.3184 41.0581 50.4192 41.1551 51.7301 42.4728L51.7326 42.4754", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M34.9976 67H45.9976C46.5498 67 46.9976 66.5523 46.9976 66V58C46.9976 57.4477 46.5498 57 45.9976 57H34.9976C34.4453 57 33.9976 57.4477 33.9976 58V66C33.9976 66.5523 34.4453 67 34.9976 67Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M36.9976 62H37.9976", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M21.4976 22C25.0874 22 27.9976 19.0899 27.9976 15.5C27.9976 11.9101 25.0874 9 21.4976 9C17.9077 9 14.9976 11.9101 14.9976 15.5C14.9976 19.0899 17.9077 22 21.4976 22Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M18.0618 21C18.0618 21 7.06183 26.25 8.06183 42", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M29.8776 25.01C28.517 23.3789 26.8615 22.0185 24.9976 21", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M38.4976 22C42.0874 22 44.9976 19.0899 44.9976 15.5C44.9976 11.9101 42.0874 9 38.4976 9C34.9077 9 31.9976 11.9101 31.9976 15.5C31.9976 19.0899 34.9077 22 38.4976 22Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M35.0572 21C33.1933 22.0185 31.5378 23.3789 30.1772 25.01", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M29.9977 45C29.4292 45 28.8608 44.7887 28.444 44.3469L22.5893 38.4118C22.5703 38.3926 22.5514 38.3734 22.5514 38.3734C20.4672 36.2221 20.4861 32.7455 22.5893 30.6134C23.6124 29.5762 24.9956 29 26.4356 29C27.7619 29 28.9935 29.4802 29.9977 30.3445C30.9829 29.4802 32.2334 29 33.5598 29C35.0187 29 36.3829 29.5762 37.4061 30.6134C39.5281 32.7647 39.5281 36.2413 37.425 38.3926L37.4061 38.4118L31.5703 44.3469C31.1345 44.7695 30.5661 45 29.9977 45ZM23.9345 37.1441L29.7324 43.0216C29.865 43.1561 30.1113 43.1561 30.244 43.0216L36.0608 37.1249C36.0608 37.1056 36.0797 37.1056 36.0987 37.0864L36.1176 37.0672C37.5008 35.6459 37.5008 33.3409 36.0987 31.9196C35.4166 31.2281 34.5071 30.8439 33.5598 30.8439C32.6124 30.8439 31.7029 31.2281 31.0208 31.9004L31.0019 31.9196C30.9829 31.9388 30.9829 31.9388 30.964 31.958L30.6608 32.2845C30.4903 32.4574 30.244 32.5726 29.9977 32.5726C29.7513 32.5726 29.505 32.4766 29.3345 32.3037L29.0124 31.9772C28.9935 31.958 28.9935 31.958 28.9745 31.9388C28.2924 31.2473 27.4019 30.8824 26.4356 30.8824C25.4693 30.8824 24.5598 31.2665 23.8966 31.958C22.4945 33.3794 22.4945 35.6843 23.8966 37.1056C23.8966 37.1056 23.8966 37.1056 23.9156 37.1249C23.9156 37.1056 23.9345 37.1249 23.9345 37.1441Z", fill: colourFill }),
        React__default.createElement("path", { d: "M41.9976 21C41.9976 21 52.9976 26.25 51.9976 42", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M15.9975 30C15.9975 30 12.9975 37 13.9975 43", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M43.9976 30C43.9976 30 46.9976 37 45.9976 43", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24.5 53C26.0621 53 29.9976 53 29.9976 53M36 53H29.9976M29.9976 53V44.5", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M30 30.5V25", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var ServiceIcon$1 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4962 10C35.4586 10 32.9962 12.4624 32.9962 15.5C32.9962 18.5376 35.4586 21 38.4962 21C41.5338 21 43.9962 18.5376 43.9962 15.5C43.9909 12.4646 41.5315 10.0053 38.4962 10ZM21.4962 10C18.4586 10 15.9962 12.4624 15.9962 15.5C15.9962 18.5376 18.4586 21 21.4962 21C24.5338 21 26.9962 18.5376 26.9962 15.5C26.9909 12.4646 24.5315 10.0053 21.4962 10ZM27.8462 24.34C26.811 23.3804 26.0129 22.7664 24.9862 22.13C22.8147 23.2829 20.2143 23.2904 18.0362 22.15C16.0862 23.28 8.66618 28.4 9.01618 40.81C10.2287 40.2902 11.6067 40.3194 12.7962 40.89C12.8363 37.0197 13.61 33.1921 15.0762 29.61C15.2155 29.2813 15.5196 29.0519 15.8739 29.0083C16.2283 28.9646 16.579 29.1132 16.7939 29.3983C17.0089 29.6833 17.0555 30.0613 16.9162 30.39C16.8862 30.4599 14.1862 36.89 14.9362 42.44C16.2943 43.5785 17.8229 44.4964 19.4662 45.16C19.6391 45.2119 19.7843 45.2774 19.9672 45.3599L20.0562 45.4C21.3438 45.9769 22.5 47.16 23 47.83C23.5 48.5 24.8008 52 24.8008 52H29V44.764C28.7972 44.6602 28.6088 44.5216 28.444 44.3469L22.5893 38.4118L22.5514 38.3734C20.4672 36.2221 20.4861 32.7455 22.5893 30.6134C23.6124 29.5762 24.9956 29 26.4356 29C27.3499 29 28.2192 29.2282 29 29.6531V25.5C29 25.5 28.3148 24.7744 27.8462 24.34ZM29 42.2791V31.9646L28.9745 31.9388C28.2924 31.2473 27.4019 30.8824 26.4356 30.8824C25.4693 30.8824 24.5598 31.2665 23.8966 31.958C22.4945 33.3794 22.4945 35.6843 23.8966 37.1056L23.9156 37.1249C23.9156 37.1056 23.9345 37.1249 23.9345 37.1441L29 42.2791ZM21.2462 48.84C20.636 48.0219 19.7975 47.4026 18.8362 47.06C16.874 46.2828 15.053 45.1882 13.4462 43.82C13.3976 43.7858 13.3509 43.749 13.3062 43.7099C13.0262 43.4899 12.7462 43.2599 12.4562 43.0099C11.5198 42.2404 10.1759 42.2196 9.21618 42.9599C9.57606 43.5019 9.99165 44.0046 10.4562 44.46L15.0162 49.03C15.2034 49.2168 15.3086 49.4705 15.3086 49.735C15.3086 49.9995 15.2034 50.2532 15.0162 50.44C14.8317 50.6317 14.5772 50.74 14.3112 50.74C14.0452 50.74 13.7906 50.6317 13.6062 50.44L9.03619 45.88C7.96814 44.807 7.11306 43.5413 6.51619 42.15L4.27619 36.93C4.09017 36.4931 3.66105 36.2096 3.18619 36.21C2.78261 36.2109 2.40706 36.4165 2.18882 36.756C1.97059 37.0955 1.93947 37.5225 2.10619 37.89L6.02619 46.52C6.45413 47.4663 7.05048 48.327 7.78619 49.06L14.7262 56H22.9962V54.14C23.0289 52.2263 22.412 50.358 21.2462 48.84ZM13.9962 58V66H24.9962V58H13.9962ZM22.9962 63H21.9962C21.4439 63 20.9962 62.5523 20.9962 62C20.9962 61.4477 21.4439 61 21.9962 61H22.9962C23.5485 61 23.9962 61.4477 23.9962 62C23.9962 62.5523 23.5485 63 22.9962 63ZM34.9962 66H45.9962V58H34.9962V66ZM37.9962 63H36.9962C36.4439 63 35.9962 62.5523 35.9962 62C35.9962 61.4477 36.4439 61 36.9962 61H37.9962C38.5485 61 38.9962 61.4477 38.9962 62C38.9962 62.5523 38.5485 63 37.9962 63ZM57.8062 36.76C57.5917 36.4147 57.2127 36.2063 56.8062 36.2099C56.3313 36.2096 55.9022 36.493 55.7162 36.93L53.4762 42.1499C52.8793 43.5413 52.0242 44.8069 50.9562 45.88L46.3862 50.4399C46.2017 50.6316 45.9472 50.7399 45.6812 50.7399C45.4152 50.7399 45.1606 50.6316 44.9762 50.4399C44.789 50.2531 44.6837 49.9995 44.6837 49.735C44.6837 49.4704 44.789 49.2168 44.9762 49.0299L49.5362 44.4599C50.0009 44.0011 50.4164 43.495 50.7762 42.95C49.814 42.213 48.4704 42.2378 47.5362 43.0099C47.2462 43.2599 46.9662 43.4899 46.6862 43.7099C46.6415 43.749 46.5947 43.7858 46.5462 43.82C44.9367 45.1846 43.1164 46.2789 41.1562 47.06C40.1948 47.4026 39.3563 48.0219 38.7462 48.84C37.5804 50.358 36.9635 52.2263 36.9962 54.14V56H45.2662L52.2062 49.06C52.9419 48.327 53.5382 47.4663 53.9662 46.52L57.8862 37.89C58.0564 37.5248 58.0262 37.0976 57.8062 36.76ZM32.178 24.36C33.2131 23.4004 34.0112 22.7864 35.038 22.15C37.2095 23.3029 39.8099 23.3104 41.988 22.17C43.938 23.3 51.358 28.42 51.008 40.83C49.7954 40.3102 48.4175 40.3394 47.228 40.91C47.1878 37.0397 46.4142 33.2121 44.948 29.63C44.8086 29.3013 44.5045 29.072 44.1502 29.0283C43.7959 28.9846 43.4452 29.1333 43.2302 29.4183C43.0153 29.7033 42.9687 30.0813 43.108 30.41C43.138 30.48 45.838 36.91 45.088 42.46C43.7299 43.5986 42.2012 44.5164 40.558 45.18C40.3851 45.2319 40.2398 45.2974 40.057 45.38L39.968 45.42C38.6804 45.9969 37.5242 47.18 37.0242 47.85C36.5242 48.52 35.2234 52.02 35.2234 52.02H31.0242V44.7429C31.2205 44.6399 31.4049 44.5073 31.5702 44.3469L37.406 38.4118L37.4249 38.3926C39.5281 36.2413 39.5281 32.7647 37.406 30.6134C36.3828 29.5762 35.0186 29 33.5597 29C32.6599 29 31.795 29.221 31.0242 29.633V25.52C31.0242 25.52 31.7094 24.7944 32.178 24.36ZM36.0607 37.1249L31.0242 42.2306V31.897C31.7059 31.2268 32.6139 30.8439 33.5597 30.8439C34.5071 30.8439 35.4165 31.2281 36.0986 31.9196C37.5007 33.3409 37.5007 35.6459 36.1176 37.0672L36.0986 37.0864C36.0914 37.0938 36.0842 37.0983 36.078 37.1022C36.068 37.1084 36.0607 37.113 36.0607 37.1249Z", fill: colourFill }),
        React__default.createElement("path", { d: "M23.9342 37.144L29.7321 43.0215C29.8647 43.156 30.111 43.156 30.2436 43.0215L36.0605 37.1248C36.0605 37.1056 36.0794 37.1056 36.0984 37.0864L36.1173 37.0672C37.5005 35.6458 37.5005 33.3409 36.0984 31.9195C35.4163 31.228 34.5068 30.8439 33.5594 30.8439C32.6121 30.8439 31.7026 31.228 31.0205 31.9003L31.0015 31.9195C30.9826 31.9387 30.9826 31.9387 30.9636 31.9579L30.6605 32.2844C30.49 32.4573 30.2436 32.5726 29.9973 32.5726C29.751 32.5726 29.5047 32.4765 29.3342 32.3037L29.0121 31.9771C28.9931 31.9579 28.9931 31.9579 28.9742 31.9387C28.2921 31.2472 27.4015 30.8823 26.4352 30.8823C25.4689 30.8823 24.5595 31.2664 23.8963 31.9579C22.4942 33.3793 22.4942 35.6842 23.8963 37.1056C23.8963 37.1056 23.8963 37.1056 23.9152 37.1248C23.9152 37.1056 23.9342 37.1248 23.9342 37.144Z", fill: colourFill })));
};

var ServiceIcon$2 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M14.3144 48.5246L9.74592 43.9561C8.76597 42.9762 7.98201 41.8182 7.43609 40.5444L5.19977 35.3263C4.85493 34.5217 4.06375 34 3.18835 34C2.44432 34 1.75127 34.378 1.34846 35.0036C0.945646 35.6292 0.88827 36.4165 1.19614 37.0939L5.11514 45.7157C5.59561 46.7727 6.26228 47.7347 7.08331 48.5558L14.3144 55.7869H23.9975V52.9258C24.0298 50.7843 23.3344 48.6952 22.025 47.0004C21.2929 46.0349 20.2962 45.303 19.1559 44.8934C16.9362 43.9567 14.89 42.6527 13.1034 41.0363C11.6767 39.8449 9.57595 39.942 8.26505 41.2597L8.2625 41.2622", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24.9976 55.7869H13.9976C13.4453 55.7869 12.9976 56.2346 12.9976 56.7869V64.7869C12.9976 65.3392 13.4453 65.7869 13.9976 65.7869H24.9976C25.5498 65.7869 25.9976 65.3392 25.9976 64.7869V56.7869C25.9976 56.2346 25.5498 55.7869 24.9976 55.7869Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M22.9976 60.7869H21.9976", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M45.6807 48.5246L50.2492 43.9561C51.2292 42.9762 52.0131 41.8182 52.559 40.5444L54.7954 35.3263C55.1402 34.5217 55.9314 34 56.8068 34C57.5508 34 58.2439 34.378 58.6467 35.0036C59.0495 35.6292 59.1068 36.4165 58.799 37.0939L54.88 45.7157C54.3995 46.7727 53.7328 47.7347 52.9118 48.5558L45.6807 55.7869H35.9977V52.9258C35.9653 50.7843 36.6607 48.6952 37.9701 47.0004C38.7022 46.0349 39.6989 45.303 40.8392 44.8934C43.059 43.9567 45.1051 42.6527 46.8917 41.0363C48.3184 39.8449 50.4192 39.942 51.7301 41.2597L51.7326 41.2622", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M34.9976 65.7869H45.9976C46.5498 65.7869 46.9976 65.3392 46.9976 64.7869V56.7869C46.9976 56.2346 46.5498 55.7869 45.9976 55.7869H34.9976C34.4453 55.7869 33.9976 56.2346 33.9976 56.7869V64.7869C33.9976 65.3392 34.4453 65.7869 34.9976 65.7869Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M36.9976 60.7869H37.9976", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24.5942 11C21.2396 11 18.1985 11.6593 15.9226 12.7973C13.6466 13.9353 12 15.6331 12 17.73V37.8807C12 39.9579 13.6285 41.6473 15.9094 42.7872C18.1904 43.9271 21.2357 44.5976 24.5942 44.5976C27.4169 44.5976 30.0142 44.1155 32.1244 43.2857C33.7737 44.1214 35.636 44.5976 37.6081 44.5976C44.3219 44.5976 49.7825 39.1369 49.7825 32.4232C49.7825 25.7094 44.3219 20.2488 37.6081 20.2488C37.4639 20.2488 37.3183 20.257 37.1752 20.262V17.73C37.1752 15.6331 35.5417 13.9353 33.2658 12.7973C30.9898 11.6594 27.9487 11 24.5942 11ZM24.5942 12.6923C27.7315 12.6923 30.5659 13.343 32.5442 14.3322C34.5226 15.3214 35.5222 16.581 35.5222 17.73C35.1319 19.513 33.8257 20.494 32.5442 21.1147C30.5659 22.1039 27.7315 22.7546 24.5942 22.7546C21.4568 22.7546 18.6225 22.1039 16.6441 21.1147C15.1786 20.3555 13.8444 19.1981 13.6661 17.73C13.6661 16.581 14.6657 15.3214 16.6441 14.3322C18.6225 13.343 21.4568 12.6923 24.5942 12.6923ZM13.6792 21.1409C14.3011 21.7139 15.0691 22.2229 15.9226 22.6496C18.1985 23.7876 21.2396 24.4469 24.5942 24.4469C26.049 24.4469 27.4399 24.3131 28.7398 24.0796C27.7495 25.1316 26.9469 26.3624 26.3783 27.7135C25.7976 27.7644 25.2033 27.8053 24.5942 27.8053C21.4617 27.8053 18.6316 27.1527 16.6572 26.1655C14.6829 25.1783 13.6792 23.9369 13.6792 22.7677V21.1409ZM37.6081 21.9281C43.4144 21.9281 48.1033 26.617 48.1033 32.4232C48.1033 38.2294 43.4144 42.9184 37.6081 42.9184C31.8019 42.9184 27.113 38.2294 27.113 32.4232C27.113 26.617 31.8019 21.9281 37.6081 21.9281ZM13.6792 26.1786C14.2973 26.7471 15.0605 27.2497 15.9094 27.6742C18.1894 28.8141 21.2348 29.4846 24.5942 29.4846C25.0044 29.4846 25.4021 29.4657 25.8011 29.4451C25.5612 30.3974 25.4338 31.3973 25.4338 32.4231C25.4338 32.5586 25.4425 32.6953 25.4469 32.8298C25.1653 32.8407 24.8832 32.8428 24.5942 32.8428C21.4617 32.8428 18.6316 32.1901 16.6572 31.203C14.6829 30.216 13.6792 28.9746 13.6792 27.8053V26.1786ZM13.6792 31.2163C14.2973 31.7848 15.0605 32.2874 15.9094 32.7118C18.1894 33.8518 21.2348 34.5222 24.5942 34.5222C24.9386 34.5222 25.2813 34.5122 25.6174 34.4962C25.8168 35.6529 26.1781 36.7548 26.6801 37.7759C26.003 37.8434 25.3105 37.8809 24.5942 37.8809C21.4617 37.8809 18.6316 37.2282 16.6572 36.241C14.6829 35.2537 13.6792 34.0123 13.6792 32.843V31.2163ZM13.6792 36.2539C14.2973 36.8225 15.0605 37.325 15.9094 37.7495C18.1894 38.8895 21.2348 39.5599 24.5942 39.5599C25.6397 39.5599 26.655 39.5006 27.6246 39.3762C28.3624 40.4336 29.2602 41.355 30.2878 42.1312C28.632 42.618 26.6825 42.9184 24.5942 42.9184C21.4627 42.9184 18.6328 42.2657 16.6572 41.2785C14.6816 40.2912 13.6792 39.0494 13.6792 37.8807V36.2539Z", fill: colourFill }),
        React__default.createElement("path", { d: "M40.555 35.2827L40.1209 35.4536C39.8171 35.5817 39.4264 35.539 39.1226 35.3681C38.6017 35.0263 37.9506 34.8982 37.3429 34.9409C37.5165 34.3001 37.5599 33.6593 37.5165 33.0185H39.6868C40.1643 33.0185 40.5116 32.634 40.5116 32.2068C40.5116 31.7795 40.1209 31.3951 39.6868 31.3951H37.2126C37.1258 31.1387 37.039 30.8397 36.9088 30.5833C36.4747 29.6862 36.4313 29.259 36.4313 29.1308C36.4313 28.3191 37.0824 27.721 37.9072 27.721C38.7319 27.721 39.383 28.3619 39.383 29.1736C39.383 29.6862 39.8171 30.0707 40.2945 30.0707C40.8154 30.0707 41.2061 29.6435 41.2061 29.1736C41.2061 27.3793 39.6868 25.884 37.8637 25.884C35.9972 25.884 34.5214 27.2938 34.5214 29.1308C34.5214 29.6862 34.7384 30.4125 35.1725 31.3096C35.1725 31.3096 35.1725 31.3523 35.2159 31.3523H34.8253C34.3478 31.3523 34.0005 31.7368 34.0005 32.164C34.0005 32.5912 34.3912 32.9757 34.8253 32.9757H35.6066C35.65 33.7874 35.5198 34.5991 35.1725 35.3254L34.478 35.4536C33.9571 35.5817 33.6533 36.0516 33.7835 36.5643C33.9137 37.077 34.3912 37.376 34.9121 37.2478L37.2995 36.7352C37.5599 36.6925 37.8637 36.7352 38.0808 36.8633C38.5583 37.1624 39.1226 37.3333 39.6434 37.3333C40.0341 37.3333 40.4248 37.2478 40.772 37.1197L41.2061 36.9488C41.6836 36.7352 41.9006 36.2225 41.6836 35.7526C41.5533 35.3254 41.0325 35.1118 40.555 35.2827Z", fill: colourFill })));
};

var ServiceIcon$3 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.8362 46.0593C19.7975 46.4019 20.636 47.0212 21.2462 47.8393C22.412 49.3572 23.0289 51.2255 22.9962 53.1393V54.9993H14.7262L7.78619 48.0593C7.05048 47.3262 6.45413 46.4656 6.02619 45.5193L2.10619 36.8893C1.93947 36.5217 1.97059 36.0947 2.18882 35.7552C2.40706 35.4158 2.78261 35.2102 3.18619 35.2093C3.66105 35.2089 4.09017 35.4923 4.27619 35.9293L6.51619 41.1493C7.11306 42.5406 7.96814 43.8063 9.03619 44.8793L13.6062 49.4393C13.7906 49.6309 14.0452 49.7392 14.3112 49.7392C14.5772 49.7392 14.8317 49.6309 15.0162 49.4393C15.2034 49.2524 15.3086 48.9988 15.3086 48.7343C15.3086 48.4698 15.2034 48.2161 15.0162 48.0293L10.4562 43.4593C9.99165 43.0039 9.57606 42.5011 9.21618 41.9592C10.1759 41.2189 11.5198 41.2396 12.4562 42.0092C12.7462 42.2592 13.0262 42.4892 13.3062 42.7092C13.3509 42.7483 13.3976 42.785 13.4462 42.8193C15.053 44.1875 16.874 45.2821 18.8362 46.0593ZM13.9962 64.9993V56.9993H24.9962V64.9993H13.9962ZM21.9962 61.9993H22.9962C23.5485 61.9993 23.9962 61.5516 23.9962 60.9993C23.9962 60.447 23.5485 59.9993 22.9962 59.9993H21.9962C21.4439 59.9993 20.9962 60.447 20.9962 60.9993C20.9962 61.5516 21.4439 61.9993 21.9962 61.9993ZM45.9962 64.9993H34.9962V56.9993H45.9962V64.9993ZM36.9962 61.9993H37.9962C38.5485 61.9993 38.9962 61.5516 38.9962 60.9993C38.9962 60.447 38.5485 59.9993 37.9962 59.9993H36.9962C36.4439 59.9993 35.9962 60.447 35.9962 60.9993C35.9962 61.5516 36.4439 61.9993 36.9962 61.9993ZM56.8062 35.2092C57.2127 35.2055 57.5917 35.414 57.8062 35.7593C58.0262 36.0969 58.0564 36.524 57.8862 36.8893L53.9662 45.5193C53.5382 46.4656 52.9419 47.3262 52.2062 48.0593L45.2662 54.9993H36.9962V53.1393C36.9635 51.2255 37.5804 49.3572 38.7462 47.8393C39.3563 47.0212 40.1948 46.4019 41.1562 46.0593C43.1164 45.2781 44.9367 44.1839 46.5462 42.8193C46.5947 42.785 46.6415 42.7483 46.6862 42.7092C46.9662 42.4892 47.2462 42.2592 47.5362 42.0092C48.4704 41.2371 49.814 41.2122 50.7762 41.9492C50.4164 42.4943 50.0009 43.0003 49.5362 43.4592L44.9762 48.0292C44.789 48.2161 44.6837 48.4697 44.6837 48.7342C44.6837 48.9987 44.789 49.2524 44.9762 49.4392C45.1606 49.6309 45.4152 49.7392 45.6812 49.7392C45.9472 49.7392 46.2017 49.6309 46.3862 49.4392L50.9562 44.8792C52.0242 43.8062 52.8793 42.5406 53.4762 41.1492L55.7162 35.9292C55.9022 35.4923 56.3313 35.2088 56.8062 35.2092Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.2079 12C27.4256 12 30.3325 12.6674 32.3615 13.6819C34.3906 14.6964 35.4158 15.9882 35.4158 17.1667C35.0154 18.9953 33.6759 20.0014 32.3615 20.638C30.3325 21.6525 27.4256 22.3199 24.2079 22.3199C20.9902 22.3199 18.0833 21.6525 16.0543 20.638C14.5512 19.8593 13.1828 18.6724 13 17.1667C13 15.9882 14.0252 14.6964 16.0543 13.6819C18.0833 12.6674 20.9902 12 24.2079 12ZM13.0135 20.6649C13.6512 21.2526 14.4389 21.7746 15.3142 22.2122C17.6485 23.3793 20.7675 24.0556 24.2079 24.0556C25.7 24.0556 27.1265 23.9183 28.4596 23.6788C27.444 24.7577 26.6209 26.0201 26.0378 27.4058C25.4422 27.458 24.8326 27.5 24.2079 27.5C20.9952 27.5 18.0926 26.8306 16.0677 25.8181C14.0428 24.8057 13.0135 23.5325 13.0135 22.3333V20.6649ZM37.5551 21.4722C43.51 21.4722 48.319 26.2812 48.319 32.2361C48.319 38.191 43.51 43 37.5551 43C31.6002 43 26.7912 38.191 26.7912 32.2361C26.7912 26.2812 31.6002 21.4722 37.5551 21.4722ZM13.0135 25.8316C13.6473 26.4147 14.4301 26.9301 15.3008 27.3655C17.6391 28.5346 20.7625 29.2223 24.2079 29.2223C24.6286 29.2223 25.0366 29.2029 25.4457 29.1818C25.1996 30.1584 25.069 31.1839 25.069 32.236C25.069 32.3292 25.073 32.4229 25.077 32.5161C25.079 32.5619 25.081 32.6076 25.0824 32.6531C24.7937 32.6643 24.5044 32.6665 24.2079 32.6665C20.9952 32.6665 18.0926 31.9971 16.0677 30.9846C14.0428 29.9724 13.0135 28.6992 13.0135 27.5V25.8316ZM13.0135 30.9983C13.6473 31.5814 14.4301 32.0968 15.3008 32.5321C17.6391 33.7013 20.7625 34.3889 24.2079 34.3889C24.5611 34.3889 24.9126 34.3786 25.2574 34.3622C25.4618 35.5485 25.8324 36.6786 26.3472 37.7259C25.6528 37.7951 24.9426 37.8335 24.2079 37.8335C20.9952 37.8335 18.0926 37.1642 16.0677 36.1517C14.0428 35.139 13.0135 33.8659 13.0135 32.6667V30.9983ZM13.0135 36.1649C13.6473 36.748 14.4301 37.2635 15.3008 37.6988C17.6391 38.868 20.7625 39.5556 24.2079 39.5556C25.2802 39.5556 26.3215 39.4947 27.316 39.3672C28.0726 40.4516 28.9934 41.3966 30.0473 42.1927C28.3492 42.6919 26.3497 43 24.2079 43C20.9962 43 18.0939 42.3307 16.0677 41.3181C14.0415 40.3056 13.0135 39.032 13.0135 37.8333V36.1649ZM40.1328 35.344L40.578 35.1688C41.0677 34.9935 41.6019 35.2126 41.7355 35.6507C41.9581 36.1327 41.7355 36.6585 41.2458 36.8776L40.8006 37.0528C40.4445 37.1843 40.0438 37.2719 39.6431 37.2719C39.1089 37.2719 38.5302 37.0966 38.0405 36.7899C37.8179 36.6585 37.5062 36.6147 37.2391 36.6585L34.7906 37.1843C34.2564 37.3157 33.7667 37.009 33.6331 36.4832C33.4996 35.9574 33.8112 35.4755 34.3454 35.344L35.0577 35.2126C35.4139 34.4677 35.5474 33.6352 35.5029 32.8028H34.7016C34.2564 32.8028 33.8557 32.4084 33.8557 31.9703C33.8557 31.5321 34.2119 31.1378 34.7016 31.1378H35.1022C35.0577 31.1378 35.0577 31.094 35.0577 31.094C34.6125 30.1739 34.3899 29.429 34.3899 28.8594C34.3899 26.9754 35.9036 25.5295 37.8179 25.5295C39.6876 25.5295 41.2458 27.063 41.2458 28.9032C41.2458 29.3852 40.8451 29.8233 40.3109 29.8233C39.8212 29.8233 39.376 29.429 39.376 28.9032C39.376 28.0707 38.7082 27.4135 37.8624 27.4135C37.0165 27.4135 36.3488 28.0269 36.3488 28.8594C36.3488 28.9909 36.3933 29.429 36.8385 30.3491C36.9458 30.5604 37.0244 30.8001 37.0974 31.0225C37.1152 31.0768 37.1326 31.13 37.1501 31.1816H39.6876C40.1328 31.1816 40.5335 31.5759 40.5335 32.0141C40.5335 32.4522 40.1773 32.8466 39.6876 32.8466H37.4617C37.5062 33.5038 37.4617 34.161 37.2836 34.8183C37.9069 34.7744 38.5747 34.9059 39.1089 35.2564C39.4205 35.4317 39.8212 35.4755 40.1328 35.344Z", fill: colourFill })));
};

var ServiceIcon$4 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M42.61 53.03L44 21H10L11.84 63.17C11.9291 65.3094 13.6887 66.9985 15.83 67H42", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M42 67C45.866 67 49 63.866 49 60C49 56.134 45.866 53 42 53C38.134 53 35 56.134 35 60C35 63.866 38.134 67 42 67Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M42 63C43.6569 63 45 61.6569 45 60C45 58.3431 43.6569 57 42 57C40.3431 57 39 58.3431 39 60C39 61.6569 40.3431 63 42 63Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 17H47V19C47 20.1046 46.1046 21 45 21H8C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 13H45C46.1046 13 47 13.8954 47 15V17H9C9 14.7909 10.7909 13 13 13Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 9H31C32.1046 9 33 9.89543 33 11V13H21V11C21 9.89543 21.8954 9 23 9Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M47 15H51C52.1046 15 53 15.8954 53 17C53 18.1046 52.1046 19 51 19H47V15Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M34.0001 41.1231C33.9975 44.2075 31.9747 46.9262 29.021 47.8148C26.0674 48.7035 22.8803 47.5524 21.1761 44.9815C19.472 42.4105 19.6532 39.0268 21.6222 36.6525C23.5911 34.2783 26.8829 33.4741 29.7248 34.6732", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.9048 33L28.6348 37.378L33.0538 36.892L30.9048 33Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var ServiceIcon$5 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M45 19.5C45.5521 19.4996 45.9996 19.0521 46 18.5V17.5H8C7.44772 17.5 7 17.9477 7 18.5C7 19.0523 7.44772 19.5 8 19.5H45Z", fill: colourFill }),
        React__default.createElement("path", { d: "M46 14.5C45.9996 13.9479 45.5521 13.5004 45 13.5H13C11.729 13.5016 10.5963 14.3023 10.1709 15.5H46V14.5Z", fill: colourFill }),
        React__default.createElement("path", { d: "M32 10.5C31.9996 9.94787 31.5521 9.50037 31 9.5H23C22.4479 9.50037 22.0004 9.94787 22 10.5V11.5H32V10.5Z", fill: colourFill }),
        React__default.createElement("path", { d: "M51 15.5H48V17.5H51C51.5523 17.5 52 17.0523 52 16.5C52 15.9477 51.5523 15.5 51 15.5Z", fill: colourFill }),
        React__default.createElement("path", { d: "M41.65 51.52L42.96 21.5H11.04L12.8401 62.63C12.9033 64.2349 14.224 65.5026 15.8301 65.5H36.73C34.2708 63.3522 33.3686 59.9226 34.4525 56.8427C35.5365 53.7628 38.3877 51.6542 41.65 51.52ZM34.37 44.61C33.5652 46.5347 32.0348 48.0651 30.11 48.87C28.1218 49.71 25.8783 49.71 23.89 48.87C21.9653 48.0651 20.4349 46.5347 19.63 44.61C18.79 42.6217 18.79 40.3783 19.63 38.39C21.2469 34.5499 25.5451 32.5989 29.5 33.91L30.02 32.92C30.1851 32.5904 30.5215 32.3817 30.89 32.38H30.9099C31.2712 32.379 31.6045 32.5743 31.7801 32.89L33.93 36.79C34.0932 37.0812 34.097 37.4354 33.94 37.73C33.7907 38.031 33.4948 38.2321 33.16 38.26L28.74 38.75H28.63C28.281 38.7504 27.9573 38.5678 27.7771 38.2689C27.5969 37.9699 27.5867 37.5984 27.75 37.29L28.5701 35.71C27.2736 35.3643 25.8993 35.4556 24.6599 35.97C23.9493 36.2732 23.3041 36.7113 22.76 37.26C21.6312 38.3819 20.9976 39.9085 21 41.5C20.9924 43.0926 21.6268 44.621 22.76 45.74C23.3059 46.2911 23.9549 46.7294 24.6699 47.03C26.1649 47.65 27.8451 47.65 29.3401 47.03C30.0508 46.7268 30.696 46.2887 31.24 45.74C32.3688 44.618 33.0025 43.0915 33 41.5C33 40.9477 33.4478 40.5 34 40.5C34.5523 40.5 35 40.9477 35 41.5C35.0037 42.5687 34.7893 43.627 34.37 44.61Z", fill: colourFill }),
        React__default.createElement("path", { d: "M42.57 53.53H42.56C42.374 53.5098 42.1871 53.4998 42 53.5C38.7246 53.4829 36.0342 56.0829 35.9396 59.357C35.8449 62.631 38.3806 65.3822 41.6514 65.5543C44.9223 65.7264 47.7327 63.2566 47.9822 59.9907C48.2317 56.7248 45.8291 53.8568 42.57 53.53ZM42 63.5C39.7908 63.5 38 61.7092 38 59.5C38 57.2909 39.7908 55.5 42 55.5C44.2091 55.5 46 57.2909 46 59.5C46.0002 60.561 45.5789 61.5786 44.8287 62.3288C44.0785 63.079 43.0609 63.5003 42 63.5Z", fill: colourFill }),
        React__default.createElement("path", { d: "M42 61.5C43.1046 61.5 44 60.6046 44 59.5C44 58.3954 43.1046 57.5 42 57.5C40.8954 57.5 40 58.3954 40 59.5C40 60.6046 40.8954 61.5 42 61.5Z", fill: colourFill }),
        React__default.createElement("path", { d: "M30.9299 35.5L30.3799 36.56L31.4499 36.44L30.9299 35.5Z", fill: colourFill })));
};

var ServiceIcon$6 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M3.99487 12.0012C3.72192 12.0271 3.46847 12.1551 3.28437 12.3598C3.10026 12.5645 2.99883 12.8313 3.00001 13.1076V58.7102C3.00001 61.619 5.35857 64 8.24876 64H44.2624C47.1526 64 49.5111 61.619 49.5111 58.7102V56.8087C49.5111 56.5153 49.3954 56.2339 49.1896 56.0264C48.9837 55.8189 48.7045 55.7024 48.4133 55.7023H45.12V46.2983C45.1545 46.2983 45.1885 46.2986 45.2229 46.2983L46.801 52.1239C46.8525 52.3103 46.9516 52.4798 47.0884 52.6155C47.2252 52.7513 47.3949 52.8485 47.5807 52.8974C47.7664 52.9464 47.9616 52.9455 48.1468 52.8947C48.332 52.8439 48.5008 52.745 48.6363 52.608L50.4202 50.8102L52.5815 51.2423C52.763 51.2798 52.9509 51.2704 53.1278 51.2149C53.3047 51.1595 53.4648 51.0599 53.5932 50.9253C53.7216 50.7907 53.8142 50.6255 53.8622 50.4452C53.9102 50.2649 53.9122 50.0752 53.8679 49.8939L52.1869 43.2731C53.9211 41.4777 55 39.0357 55 36.3411C55 30.855 50.5636 26.3839 45.12 26.3839V13.1076C45.12 12.8142 45.0043 12.5328 44.7984 12.3253C44.5926 12.1178 44.3134 12.0012 44.0222 12.0012H4.09779C4.0635 11.9996 4.02916 11.9996 3.99487 12.0012ZM5.19557 14.2139H42.9244V26.6432C38.5328 27.6537 35.24 31.6154 35.24 36.3411C35.24 39.0357 36.3189 41.4777 38.0531 43.2731L36.3721 49.8939C36.3278 50.0752 36.3298 50.2649 36.3778 50.4452C36.4258 50.6255 36.5184 50.7907 36.6468 50.9253C36.7752 51.0599 36.9353 51.1595 37.1122 51.2149C37.2891 51.2704 37.4771 51.2798 37.6586 51.2423L39.8198 50.8102L41.6037 52.608C41.7726 52.7815 41.9934 52.8941 42.2321 52.9284C42.4708 52.9628 42.7141 52.917 42.9244 52.7981V55.7023H12.3311C12.04 55.7024 11.7608 55.8189 11.5549 56.0264C11.349 56.2339 11.2334 56.5153 11.2333 56.8087V58.7102C11.2329 58.7275 11.2329 58.7448 11.2333 58.7621C11.3018 60.3903 10.0473 61.6805 8.42029 61.77C8.38573 61.7741 8.35139 61.7799 8.31737 61.7873H8.24876C6.53282 61.7873 5.19557 60.4272 5.19557 58.7102V14.2139ZM8.93487 17.533C8.79069 17.5398 8.64924 17.5751 8.51862 17.637C8.38799 17.6989 8.27073 17.7861 8.17355 17.8936C8.07637 18.0012 8.00116 18.127 7.95222 18.2638C7.90328 18.4007 7.88157 18.5459 7.88833 18.6912C7.89509 18.8365 7.93018 18.9791 7.99161 19.1107C8.05304 19.2424 8.13959 19.3605 8.24633 19.4584C8.35307 19.5563 8.47791 19.6321 8.6137 19.6814C8.7495 19.7307 8.89361 19.7526 9.03779 19.7457H39.0822C39.2277 19.7478 39.3721 19.7207 39.5071 19.666C39.6421 19.6114 39.765 19.5302 39.8686 19.4273C39.9722 19.3243 40.0544 19.2017 40.1106 19.0664C40.1667 18.9311 40.1956 18.786 40.1956 18.6394C40.1956 18.4927 40.1667 18.3476 40.1106 18.2123C40.0544 18.0771 39.9722 17.9544 39.8686 17.8515C39.765 17.7485 39.6421 17.6674 39.5071 17.6127C39.3721 17.558 39.2277 17.5309 39.0822 17.533H9.03779C9.0035 17.5314 8.96916 17.5314 8.93487 17.533ZM8.93487 24.1711C8.79069 24.1779 8.64924 24.2133 8.51862 24.2751C8.38799 24.337 8.27073 24.4242 8.17355 24.5318C8.07637 24.6393 8.00116 24.7651 7.95222 24.902C7.90328 25.0388 7.88157 25.1841 7.88833 25.3294C7.89509 25.4747 7.93018 25.6172 7.99161 25.7489C8.05304 25.8805 8.13959 25.9986 8.24633 26.0966C8.35307 26.1945 8.47791 26.2703 8.6137 26.3196C8.7495 26.3688 8.89361 26.3907 9.03779 26.3839H39.0822C39.2277 26.3859 39.3721 26.3588 39.5071 26.3042C39.6421 26.2495 39.765 26.1683 39.8686 26.0654C39.9722 25.9625 40.0544 25.8398 40.1106 25.7045C40.1667 25.5693 40.1956 25.4241 40.1956 25.2775C40.1956 25.1309 40.1667 24.9857 40.1106 24.8505C40.0544 24.7152 39.9722 24.5925 39.8686 24.4896C39.765 24.3867 39.6421 24.3055 39.5071 24.2508C39.3721 24.1962 39.2277 24.1691 39.0822 24.1711H9.03779C9.0035 24.1695 8.96916 24.1695 8.93487 24.1711ZM45.12 28.5966C49.377 28.5966 52.8044 32.0508 52.8044 36.3411C52.8044 40.6314 49.377 44.0856 45.12 44.0856C40.863 44.0856 37.4356 40.6314 37.4356 36.3411C37.4356 32.0508 40.863 28.5966 45.12 28.5966ZM8.93487 30.8093C8.79069 30.8161 8.64924 30.8514 8.51862 30.9133C8.38799 30.9752 8.27073 31.0624 8.17355 31.1699C8.07637 31.2775 8.00116 31.4033 7.95222 31.5401C7.90328 31.677 7.88157 31.8222 7.88833 31.9675C7.89509 32.1128 7.93018 32.2554 7.99161 32.387C8.05304 32.5186 8.13959 32.6368 8.24633 32.7347C8.35307 32.8326 8.47791 32.9084 8.6137 32.9577C8.7495 33.007 8.89361 33.0288 9.03779 33.022H24.4067C24.5521 33.0241 32.7855 32.997 32.9204 32.9423C33.0554 32.8876 33.1783 32.8065 33.2819 32.7035C33.3855 32.6006 33.4678 32.4779 33.5239 32.3427C33.5801 32.2074 33.609 32.0623 33.609 31.9156C33.609 31.769 33.5801 31.6239 33.5239 31.4886C33.4678 31.3533 33.3855 31.2307 33.2819 31.1277C33.1783 31.0248 33.0554 30.9436 32.9204 30.889C32.7855 30.8343 24.5521 30.8072 24.4067 30.8093H9.03779C9.0035 30.8077 8.96916 30.8077 8.93487 30.8093ZM45.12 30.8093C42.1016 30.8093 39.6311 33.299 39.6311 36.3411C39.6311 39.3831 42.1016 41.8729 45.12 41.8729C48.1384 41.8729 50.6089 39.3831 50.6089 36.3411C50.6089 33.299 48.1384 30.8093 45.12 30.8093ZM45.12 33.022C46.9519 33.022 48.4133 34.4949 48.4133 36.3411C48.4133 38.1873 46.9519 39.6601 45.12 39.6601C43.2881 39.6601 41.8267 38.1873 41.8267 36.3411C41.8267 34.4949 43.2881 33.022 45.12 33.022ZM8.93487 37.4474C8.79069 37.4542 8.64924 37.4896 8.51862 37.5514C8.38799 37.6133 8.27073 37.7005 8.17355 37.8081C8.07637 37.9156 8.00116 38.0414 7.95222 38.1783C7.90328 38.3151 7.88157 38.4604 7.88833 38.6057C7.89509 38.751 7.93018 38.8935 7.99161 39.0251C8.05304 39.1568 8.13959 39.2749 8.24633 39.3729C8.35307 39.4708 8.47791 39.5465 8.6137 39.5958C8.7495 39.6451 8.89361 39.667 9.03779 39.6601H24.4067C24.5521 39.6622 32.7855 39.6351 32.9204 39.5805C33.0554 39.5258 33.1783 39.4446 33.2819 39.3417C33.3855 39.2387 33.4678 39.1161 33.5239 38.9808C33.5801 38.8456 33.609 38.7004 33.609 38.5538C33.609 38.4072 33.5801 38.262 33.5239 38.1267C33.4678 37.9915 33.3855 37.8688 33.2819 37.7659C33.1783 37.6629 33.0554 37.5818 32.9204 37.5271C32.7855 37.4724 24.5521 37.4454 24.4067 37.4474H9.03779C9.0035 37.4458 8.96916 37.4458 8.93487 37.4474ZM8.93487 44.0856C8.79069 44.0924 8.64924 44.1277 8.51862 44.1896C8.38799 44.2515 8.27073 44.3387 8.17355 44.4462C8.07637 44.5538 8.00116 44.6796 7.95222 44.8164C7.90328 44.9533 7.88157 45.0985 7.88833 45.2438C7.89509 45.3891 7.93018 45.5317 7.99161 45.6633C8.05304 45.7949 8.13959 45.9131 8.24633 46.011C8.35307 46.1089 8.47791 46.1847 8.6137 46.234C8.7495 46.2833 8.89361 46.3051 9.03779 46.2983H33.5933C33.7388 46.3004 33.8832 46.2733 34.0182 46.2186C34.1532 46.1639 34.2761 46.0828 34.3797 45.9798C34.4833 45.8769 34.5655 45.7542 34.6217 45.619C34.6778 45.4837 34.7067 45.3385 34.7067 45.1919C34.7067 45.0453 34.6778 44.9002 34.6217 44.7649C34.5655 44.6296 34.4833 44.507 34.3797 44.404C34.2761 44.3011 34.1532 44.2199 34.0182 44.1653C33.8832 44.1106 33.7388 44.0835 33.5933 44.0856H9.03779C9.0035 44.084 8.96916 44.084 8.93487 44.0856ZM39.9227 44.8116C40.8058 45.365 41.7832 45.7706 42.8215 46.0217L41.8095 49.6865L40.9519 48.8222C40.8229 48.6944 40.6646 48.6007 40.491 48.5494C40.3175 48.4982 40.134 48.4909 39.957 48.5283L38.9278 48.7357L39.9227 44.8116ZM50.3173 44.8116L51.3122 48.7357L50.283 48.5283C50.106 48.4909 49.9225 48.4982 49.749 48.5494C49.5754 48.6007 49.4171 48.6944 49.2881 48.8222L48.4305 49.6865L47.4185 46.0217C48.4568 45.7706 49.4342 45.365 50.3173 44.8116ZM8.93487 50.7237C8.79069 50.7305 8.64924 50.7658 8.51862 50.8277C8.38799 50.8896 8.27073 50.9768 8.17355 51.0844C8.07637 51.1919 8.00116 51.3177 7.95222 51.4546C7.90328 51.5914 7.88157 51.7366 7.88833 51.8819C7.89509 52.0272 7.93018 52.1698 7.99161 52.3014C8.05304 52.4331 8.13959 52.5512 8.24633 52.6491C8.35307 52.7471 8.47791 52.8228 8.6137 52.8721C8.7495 52.9214 8.89361 52.9433 9.03779 52.9364H33.5933C33.7388 52.9385 33.8832 52.9114 34.0182 52.8567C34.1532 52.8021 34.2761 52.7209 34.3797 52.618C34.4833 52.515 34.5655 52.3924 34.6217 52.2571C34.6778 52.1218 34.7067 51.9767 34.7067 51.8301C34.7067 51.6835 34.6778 51.5383 34.6217 51.403C34.5655 51.2678 34.4833 51.1451 34.3797 51.0422C34.2761 50.9392 34.1532 50.8581 34.0182 50.8034C33.8832 50.7487 33.7388 50.7216 33.5933 50.7237H9.03779C9.0035 50.7221 8.96916 50.7221 8.93487 50.7237ZM13.4289 57.915H47.3156V58.7102C47.3156 60.4272 45.9783 61.7873 44.2624 61.7873H12.3997C13.035 60.9118 13.466 59.8803 13.4289 58.7102C13.4283 58.6925 13.4297 58.6761 13.4289 58.6584V57.915Z", fill: colourFill })));
};

var ServiceIcon$7 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.28699 12.3631C3.4728 12.1565 3.72858 12.0274 4.00405 12.0012C4.03866 11.9996 4.07332 11.9996 4.10792 12.0012H44.4009C44.6947 12.0013 44.9765 12.1189 45.1843 12.3283C45.392 12.5377 45.5088 12.8217 45.5088 13.1178V26.5166C51.0026 26.5166 55.48 31.029 55.48 36.5658C55.48 39.2853 54.3912 41.7499 52.641 43.5618L54.3375 50.2437C54.3822 50.4267 54.3802 50.6181 54.3317 50.8001C54.2832 50.9821 54.1898 51.1488 54.0603 51.2846C53.9307 51.4204 53.7691 51.521 53.5905 51.5769C53.412 51.6329 53.2223 51.6424 53.0391 51.6046L50.8579 51.1684L49.0576 52.9828C48.9208 53.1211 48.7505 53.2209 48.5636 53.2722C48.3766 53.3234 48.1796 53.3244 47.9922 53.275C47.8047 53.2255 47.6334 53.1274 47.4954 52.9905C47.3573 52.8535 47.2573 52.6824 47.2053 52.4943L45.6127 46.6149C45.5895 46.6151 45.5666 46.615 45.5436 46.615L45.5088 46.6149V56.1057H48.8325C49.1264 56.1058 49.4082 56.2234 49.6159 56.4328C49.8237 56.6422 49.9404 56.9262 49.9404 57.2223V59.1414C49.9404 62.077 47.5601 64.48 44.6433 64.48H8.29721C5.38035 64.48 3.00001 62.077 3.00001 59.1414V13.1178C2.99882 12.8389 3.10119 12.5697 3.28699 12.3631ZM5.21797 14.2344H5.21583V59.1414C5.21583 60.8743 6.56543 62.2469 8.29721 62.2469H8.36645L8.36652 62.2468H8.29934C6.56757 62.2468 5.21797 60.8742 5.21797 59.1414V14.2344ZM37.7673 51.6272C37.8387 51.6266 37.9101 51.6191 37.9806 51.6045L40.16 51.1687L40.1597 51.1684L37.9785 51.6046C37.9087 51.619 37.838 51.6265 37.7673 51.6272ZM42.7622 53.3174C42.9472 53.3159 43.1299 53.2676 43.293 53.1759V53.1747C43.13 53.2669 42.9473 53.3155 42.7622 53.3174ZM43.293 56.1057L12.4194 56.1057L12.4173 56.1057H43.293ZM45.579 44.3814C45.5556 44.3816 45.5322 44.3817 45.5088 44.3817C41.2125 44.3817 37.7534 40.8957 37.7534 36.5658C37.7534 32.3605 41.0162 28.9512 45.1399 28.7584C41.0172 28.9523 37.7556 32.3612 37.7556 36.5657C37.7556 40.8956 41.2146 44.3817 45.5109 44.3817L45.579 44.3814ZM39.2633 49.0684L39.2617 49.0744L39.2595 49.0748L39.261 49.0689L39.2583 49.0694L40.2624 45.1091C41.1536 45.6675 42.14 46.077 43.1879 46.3303L42.1666 50.029L41.301 49.1566C41.1709 49.0277 41.0111 48.9331 40.8359 48.8814C40.6608 48.8296 40.4756 48.8223 40.297 48.86L39.2633 49.0684ZM42.1682 50.0327L41.3043 49.162C41.1742 49.0331 41.0144 48.9385 40.8392 48.8868C40.7335 48.8556 40.6242 48.8405 40.5148 48.8418C40.6235 48.8407 40.7321 48.8558 40.8371 48.8868C41.0123 48.9385 41.172 49.0331 41.3022 49.1621L42.1678 50.0344L42.1682 50.0327ZM47.8288 46.3357L47.8273 46.3303C48.8752 46.077 49.8617 45.6675 50.7529 45.1091L51.7569 49.0694L50.7183 48.86C50.5396 48.8223 50.3545 48.8296 50.1793 48.8814C50.0042 48.9331 49.8444 49.0277 49.7142 49.1566L48.8501 50.0275L48.8515 50.0327L48.8499 50.0344L47.8285 46.3357C47.8286 46.3357 47.8287 46.3357 47.8288 46.3357ZM51.758 49.0744L50.7216 48.8655C50.643 48.8489 50.5631 48.841 50.4834 48.8418C50.5624 48.8411 50.6415 48.849 50.7194 48.8655L51.7581 49.0748L51.758 49.0744ZM13.5201 59.1365C13.5575 60.3173 13.1226 61.3583 12.4814 62.2419H12.4901L12.4865 62.2469H44.6433L44.6454 62.2468H12.4886L12.4922 62.2419H44.6382C46.37 62.2419 47.7196 60.8693 47.7196 59.1365V58.3339H13.5201V59.0841C13.5203 59.0892 13.5204 59.0942 13.5204 59.0992C13.5203 59.1034 13.5202 59.1076 13.5202 59.1117C13.52 59.1199 13.5198 59.128 13.5201 59.1365ZM8.99179 17.5841C8.84628 17.5909 8.70353 17.6266 8.57169 17.689C8.43986 17.7515 8.32152 17.8395 8.22344 17.948C8.12536 18.0566 8.04946 18.1835 8.00007 18.3216C7.95068 18.4598 7.92877 18.6063 7.93559 18.753C7.94241 18.8996 7.97783 19.0435 8.03982 19.1763C8.10181 19.3092 8.18917 19.4284 8.29689 19.5273C8.40462 19.6261 8.5306 19.7026 8.66766 19.7523C8.80471 19.802 8.95015 19.8241 9.09566 19.8172H39.4174C39.5642 19.8193 39.71 19.792 39.8462 19.7368C39.9825 19.6816 40.1065 19.5997 40.211 19.4958C40.3156 19.3919 40.3986 19.2681 40.4553 19.1316C40.5119 18.9951 40.5411 18.8486 40.5411 18.7006C40.5411 18.5527 40.5119 18.4062 40.4553 18.2696C40.3986 18.1331 40.3156 18.0093 40.211 17.9055C40.1065 17.8016 39.9825 17.7197 39.8462 17.6645C39.71 17.6093 39.5642 17.582 39.4174 17.5841H9.09566C9.06105 17.5824 9.02639 17.5824 8.99179 17.5841ZM8.99179 24.2835C8.84628 24.2903 8.70353 24.326 8.57169 24.3884C8.43986 24.4509 8.32152 24.5389 8.22344 24.6474C8.12536 24.756 8.04946 24.883 8.00007 25.0211C7.95068 25.1592 7.92877 25.3057 7.93559 25.4524C7.94241 25.599 7.97783 25.7429 8.03982 25.8758C8.10181 26.0086 8.18917 26.1278 8.29689 26.2267C8.40462 26.3255 8.5306 26.402 8.66766 26.4517C8.80471 26.5015 8.95015 26.5235 9.09566 26.5166H39.4174C39.5642 26.5187 39.71 26.4914 39.8462 26.4362C39.9825 26.381 40.1065 26.2991 40.211 26.1952C40.3156 26.0913 40.3986 25.9675 40.4553 25.831C40.5119 25.6945 40.5411 25.548 40.5411 25.4C40.5411 25.2521 40.5119 25.1056 40.4553 24.9691C40.3986 24.8326 40.3156 24.7088 40.211 24.6049C40.1065 24.501 39.9825 24.4191 39.8462 24.3639C39.71 24.3087 39.5642 24.2814 39.4174 24.2835H9.09566C9.06105 24.2818 9.02639 24.2818 8.99179 24.2835ZM8.99179 30.9829C8.84628 30.9897 8.70353 31.0254 8.57169 31.0879C8.43986 31.1503 8.32152 31.2383 8.22344 31.3469C8.12536 31.4554 8.04946 31.5824 8.00007 31.7205C7.95068 31.8586 7.92877 32.0052 7.93559 32.1518C7.94241 32.2985 7.97783 32.4423 8.03982 32.5752C8.10181 32.708 8.18917 32.8273 8.29689 32.9261C8.40462 33.0249 8.5306 33.1014 8.66766 33.1511C8.80471 33.2009 8.95015 33.2229 9.09566 33.216H24.6064C24.7532 33.2181 33.0625 33.1908 33.1988 33.1356C33.335 33.0804 33.459 32.9985 33.5636 32.8946C33.6681 32.7907 33.7511 32.667 33.8078 32.5304C33.8645 32.3939 33.8936 32.2474 33.8936 32.0995C33.8936 31.9515 33.8645 31.805 33.8078 31.6685C33.7511 31.532 33.6681 31.4082 33.5636 31.3043C33.459 31.2004 33.335 31.1185 33.1988 31.0633C33.0625 31.0081 24.7532 30.9808 24.6064 30.9829H9.09566C9.06105 30.9813 9.02639 30.9813 8.99179 30.9829ZM45.5109 30.9829C42.4647 30.9829 39.9714 33.4956 39.9714 36.5657C39.9714 39.6359 42.4647 42.1486 45.5109 42.1486C48.5572 42.1486 51.0505 39.6359 51.0505 36.5657C51.0505 33.4956 48.5572 30.9829 45.5109 30.9829ZM45.5109 33.216C47.3597 33.216 48.8347 34.7025 48.8347 36.5657C48.8347 38.429 47.3597 39.9155 45.5109 39.9155C43.6622 39.9155 42.1872 38.429 42.1872 36.5657C42.1872 34.7025 43.6622 33.216 45.5109 33.216ZM8.99179 37.6823C8.84628 37.6892 8.70353 37.7248 8.57169 37.7873C8.43986 37.8497 8.32152 37.9377 8.22344 38.0463C8.12536 38.1548 8.04946 38.2818 8.00007 38.4199C7.95068 38.558 7.92877 38.7046 7.93559 38.8512C7.94241 38.9979 7.97783 39.1417 8.03982 39.2746C8.10181 39.4074 8.18917 39.5267 8.29689 39.6255C8.40462 39.7243 8.5306 39.8008 8.66766 39.8506C8.80471 39.9003 8.95015 39.9224 9.09566 39.9155H24.6064C24.7532 39.9175 33.0625 39.8902 33.1988 39.835C33.335 39.7799 33.459 39.6979 33.5636 39.5941C33.6681 39.4902 33.7511 39.3664 33.8078 39.2299C33.8645 39.0934 33.8936 38.9469 33.8936 38.7989C33.8936 38.6509 33.8645 38.5044 33.8078 38.3679C33.7511 38.2314 33.6681 38.1076 33.5636 38.0037C33.459 37.8998 33.335 37.8179 33.1988 37.7627C33.0625 37.7076 24.7532 37.6802 24.6064 37.6823H9.09566C9.06105 37.6807 9.02639 37.6807 8.99179 37.6823ZM8.99179 44.3817C8.84628 44.3886 8.70353 44.4242 8.57169 44.4867C8.43986 44.5491 8.32152 44.6372 8.22344 44.7457C8.12536 44.8542 8.04946 44.9812 8.00007 45.1193C7.95068 45.2574 7.92877 45.404 7.93559 45.5506C7.94241 45.6973 7.97783 45.8412 8.03982 45.974C8.10181 46.1069 8.18917 46.2261 8.29689 46.3249C8.40462 46.4238 8.5306 46.5002 8.66766 46.55C8.80471 46.5997 8.95015 46.6218 9.09566 46.6149H33.8779C34.0247 46.617 34.1704 46.5896 34.3067 46.5345C34.4429 46.4793 34.5669 46.3974 34.6715 46.2935C34.776 46.1896 34.859 46.0658 34.9157 45.9293C34.9724 45.7928 35.0016 45.6463 35.0016 45.4983C35.0016 45.3503 34.9724 45.2038 34.9157 45.0673C34.859 44.9308 34.776 44.807 34.6715 44.7031C34.5669 44.5992 34.4429 44.5173 34.3067 44.4621C34.1704 44.407 34.0247 44.3796 33.8779 44.3817H9.09566C9.06105 44.3801 9.02639 44.3801 8.99179 44.3817ZM8.99179 51.0812C8.84628 51.088 8.70353 51.1237 8.57169 51.1861C8.43986 51.2486 8.32152 51.3366 8.22344 51.4451C8.12536 51.5537 8.04946 51.6806 8.00007 51.8187C7.95068 51.9569 7.92877 52.1034 7.93559 52.2501C7.94241 52.3967 7.97783 52.5406 8.03982 52.6734C8.10181 52.8063 8.18917 52.9255 8.29689 53.0243C8.40462 53.1232 8.5306 53.1996 8.66766 53.2494C8.80471 53.2991 8.95015 53.3212 9.09566 53.3143H33.8779C34.0247 53.3164 34.1704 53.289 34.3067 53.2339C34.4429 53.1787 34.5669 53.0968 34.6715 52.9929C34.776 52.889 34.859 52.7652 34.9157 52.6287C34.9724 52.4922 35.0016 52.3457 35.0016 52.1977C35.0016 52.0497 34.9724 51.9033 34.9157 51.7667C34.859 51.6302 34.776 51.5064 34.6715 51.4025C34.5669 51.2987 34.4429 51.2167 34.3067 51.1616C34.1704 51.1064 34.0247 51.0791 33.8779 51.0812H9.09566C9.06105 51.0795 9.02639 51.0795 8.99179 51.0812Z", fill: colourFill })));
};

var ServiceIcon$8 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.46676 12C7.94541 12 8.33343 12.388 8.33343 12.8667V60.5333C8.33343 61.012 7.94541 61.4 7.46676 61.4C6.98812 61.4 6.6001 61.012 6.6001 60.5333V12.8667C6.6001 12.388 6.98812 12 7.46676 12Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.6001 60.5334C6.6001 60.0547 6.98812 59.6667 7.46676 59.6667H55.1334C55.6121 59.6667 56.0001 60.0547 56.0001 60.5334C56.0001 61.012 55.6121 61.4 55.1334 61.4H7.46676C6.98812 61.4 6.6001 61.012 6.6001 60.5334Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0664 35.4H18.7331V57.9334H10.0664V35.4ZM11.7997 37.1334V56.2H16.9997V37.1334H11.7997Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.5034 27.6368H29.0964V57.8965H20.5034V27.6368ZM22.1631 29.2965V56.2368H27.4368V29.2965H22.1631Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.8667 31.9333H39.5334V57.9333H30.8667V31.9333ZM32.6 33.6667V56.2H37.8V33.6667H32.6Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.2666 23.2667H49.9333V57.9333H41.2666V23.2667ZM42.9999 25V56.2H48.1999V25H42.9999Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4933 20.1466C25.7804 20.5296 25.7028 21.0728 25.3199 21.36L14.9199 29.16C14.537 29.4472 13.9938 29.3696 13.7066 28.9866C13.4194 28.6037 13.497 28.0605 13.8799 27.7733L24.2799 19.9733C24.6628 19.6861 25.2061 19.7637 25.4933 20.1466Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 20.3334C24.1841 19.8915 24.6915 19.6826 25.1333 19.8667L35.5333 24.2C35.9752 24.3841 36.1841 24.8915 36 25.3334C35.8159 25.7752 35.3085 25.9841 34.8667 25.8L24.4667 21.4667C24.0248 21.2826 23.8159 20.7752 24 20.3334Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M46.266 15.7785C46.5724 16.1462 46.5227 16.6927 46.155 16.9992L35.755 25.6658C35.3873 25.9722 34.8408 25.9226 34.5344 25.5549C34.228 25.1871 34.2777 24.6407 34.6454 24.3342L45.0454 15.6676C45.4131 15.3611 45.9596 15.4108 46.266 15.7785Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.5332 16.3333C39.5332 15.8547 39.9212 15.4667 40.3999 15.4667H45.5999C46.0785 15.4667 46.4665 15.8547 46.4665 16.3333C46.4665 16.812 46.0785 17.2 45.5999 17.2H40.3999C39.9212 17.2 39.5332 16.812 39.5332 16.3333Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.6001 15.4667C46.0787 15.4667 46.4667 15.8547 46.4667 16.3333V20.6667C46.4667 21.1453 46.0787 21.5333 45.6001 21.5333C45.1214 21.5333 44.7334 21.1453 44.7334 20.6667V16.3333C44.7334 15.8547 45.1214 15.4667 45.6001 15.4667Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M55.746 59.9205C56.0845 60.259 56.0845 60.8077 55.746 61.1462L53.146 63.7462C52.8075 64.0846 52.2588 64.0846 51.9203 63.7462C51.5819 63.4077 51.5819 62.859 51.9203 62.5205L54.5203 59.9205C54.8588 59.5821 55.4075 59.5821 55.746 59.9205Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M51.9203 57.3205C52.2588 56.982 52.8075 56.982 53.146 57.3205L55.746 59.9205C56.0845 60.2589 56.0845 60.8077 55.746 61.1461C55.4075 61.4846 54.8588 61.4846 54.5203 61.1461L51.9203 58.5461C51.5819 58.2077 51.5819 57.6589 51.9203 57.3205Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.85394 12.2538C7.19239 11.9154 7.74114 11.9154 8.07959 12.2538L10.6796 14.8538C11.018 15.1923 11.018 15.741 10.6796 16.0795C10.3411 16.4179 9.79239 16.4179 9.45394 16.0795L6.85394 13.4795C6.51548 13.141 6.51548 12.5923 6.85394 12.2538Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.07949 12.2538C8.41795 12.5923 8.41795 13.141 8.07949 13.4795L5.47949 16.0795C5.14104 16.4179 4.5923 16.4179 4.25384 16.0795C3.91539 15.741 3.91539 15.1923 4.25384 14.8538L6.85384 12.2538C7.1923 11.9154 7.74104 11.9154 8.07949 12.2538Z", fill: colourFill })));
};

var ServiceIcon$9 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.46676 12C7.94541 12 8.33343 12.388 8.33343 12.8667V60.5333C8.33343 61.012 7.94541 61.4 7.46676 61.4C6.98812 61.4 6.6001 61.012 6.6001 60.5333V12.8667C6.6001 12.388 6.98812 12 7.46676 12Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.6001 60.5334C6.6001 60.0547 6.98812 59.6667 7.46676 59.6667H55.1334C55.6121 59.6667 56.0001 60.0547 56.0001 60.5334C56.0001 61.012 55.6121 61.4 55.1334 61.4H7.46676C6.98812 61.4 6.6001 61.012 6.6001 60.5334Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0664 35.4H18.7331V57.9334H10.0664V35.4Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.5034 27.6368H29.0964V57.8965H20.5034V27.6368Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.8667 31.9333H39.5334V57.9333H30.8667V31.9333Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.2666 23.2667H49.9333V57.9333H41.2666V23.2667Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4933 20.1466C25.7804 20.5296 25.7028 21.0728 25.3199 21.36L14.9199 29.16C14.537 29.4472 13.9938 29.3696 13.7066 28.9866C13.4194 28.6037 13.497 28.0605 13.8799 27.7733L24.2799 19.9733C24.6628 19.6861 25.2061 19.7637 25.4933 20.1466Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 20.3334C24.1841 19.8915 24.6915 19.6826 25.1333 19.8667L35.5333 24.2C35.9752 24.3841 36.1841 24.8915 36 25.3334C35.8159 25.7752 35.3085 25.9841 34.8667 25.8L24.4667 21.4667C24.0248 21.2826 23.8159 20.7752 24 20.3334Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M46.266 15.7785C46.5724 16.1462 46.5227 16.6927 46.155 16.9992L35.755 25.6658C35.3873 25.9722 34.8408 25.9226 34.5344 25.5549C34.228 25.1871 34.2777 24.6407 34.6454 24.3342L45.0454 15.6676C45.4131 15.3611 45.9596 15.4108 46.266 15.7785Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.5332 16.3333C39.5332 15.8547 39.9212 15.4667 40.3999 15.4667H45.5999C46.0785 15.4667 46.4665 15.8547 46.4665 16.3333C46.4665 16.812 46.0785 17.2 45.5999 17.2H40.3999C39.9212 17.2 39.5332 16.812 39.5332 16.3333Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.6001 15.4667C46.0787 15.4667 46.4667 15.8547 46.4667 16.3333V20.6667C46.4667 21.1453 46.0787 21.5333 45.6001 21.5333C45.1214 21.5333 44.7334 21.1453 44.7334 20.6667V16.3333C44.7334 15.8547 45.1214 15.4667 45.6001 15.4667Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M55.746 59.9205C56.0845 60.259 56.0845 60.8077 55.746 61.1462L53.146 63.7462C52.8075 64.0846 52.2588 64.0846 51.9203 63.7462C51.5819 63.4077 51.5819 62.859 51.9203 62.5205L54.5203 59.9205C54.8588 59.5821 55.4075 59.5821 55.746 59.9205Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M51.9203 57.3205C52.2588 56.982 52.8075 56.982 53.146 57.3205L55.746 59.9205C56.0845 60.2589 56.0845 60.8077 55.746 61.1461C55.4075 61.4846 54.8588 61.4846 54.5203 61.1461L51.9203 58.5461C51.5819 58.2077 51.5819 57.6589 51.9203 57.3205Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.85394 12.2538C7.19239 11.9154 7.74114 11.9154 8.07959 12.2538L10.6796 14.8538C11.018 15.1923 11.018 15.741 10.6796 16.0795C10.3411 16.4179 9.79239 16.4179 9.45394 16.0795L6.85394 13.4795C6.51548 13.141 6.51548 12.5923 6.85394 12.2538Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.07949 12.2538C8.41795 12.5923 8.41795 13.141 8.07949 13.4795L5.47949 16.0795C5.14104 16.4179 4.5923 16.4179 4.25384 16.0795C3.91539 15.741 3.91539 15.1923 4.25384 14.8538L6.85384 12.2538C7.1923 11.9154 7.74104 11.9154 8.07949 12.2538Z", fill: colourFill })));
};

var ServiceIcon$a = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M30.3979 24.6932C26.6706 24.6932 23.8628 26.251 23.8628 28.3186C23.8628 30.3843 26.6706 31.9421 30.3979 31.9421C34.1233 31.9421 36.9329 30.3843 36.9329 28.3186C36.9329 26.251 34.1233 24.6932 30.3979 24.6932ZM30.3979 30.4145C27.5316 30.4145 25.3922 29.308 25.3922 28.3205C25.3922 27.3311 27.5335 26.2246 30.3979 26.2246C33.2623 26.2246 35.4016 27.3292 35.4016 28.3205C35.4016 29.308 33.2623 30.4145 30.3979 30.4145Z", fill: colourFill }),
        React__default.createElement("path", { d: "M53.4472 18.7492H42.522V14.4441C42.522 12.5446 40.9793 11 39.0779 11H21.7197C19.822 11 18.2775 12.5446 18.2775 14.4441V18.7492H7.34853C4.95051 18.7492 3 20.6978 3 23.0958V33.5414C3 35.8299 4.78058 37.6898 7.03132 37.8559V56.2244C7.03132 58.5997 8.94784 60.5295 11.3138 60.5654V62.565C11.3138 63.358 11.9595 64 12.7507 64H18.9799C19.771 64 20.413 63.358 20.413 62.565V60.5729H40.3864V62.565C40.3864 63.358 41.0303 64 41.8215 64H48.0488C48.8399 64 49.4819 63.358 49.4819 62.565V60.5654C51.8497 60.5295 53.7681 58.5997 53.7681 56.2244V37.8559C56.0151 37.6917 57.7995 35.8299 57.7995 33.5414V23.0958C57.7957 20.6997 55.8452 18.7492 53.4472 18.7492ZM41.914 46.84H45.8169V46.8797C45.3902 48.5885 44.4593 50.5371 43.8645 50.5371C43.3245 50.5371 42.3879 48.7697 41.914 46.8797V46.84ZM46.5514 45.3106H41.1776C40.4072 45.3106 39.7803 44.6837 39.7803 43.9133C39.7803 43.1429 40.4072 42.5141 41.1776 42.5141H46.5514C47.3237 42.5141 47.9506 43.1429 47.9506 43.9133C47.9506 44.6837 47.3237 45.3106 46.5514 45.3106ZM14.9769 46.84H18.8798V46.8797C18.4077 48.7697 17.4712 50.5371 16.9293 50.5371C16.3874 50.5371 15.4508 48.7697 14.9769 46.8797V46.84V46.84ZM19.6143 45.3106H14.2405C13.4701 45.3106 12.8432 44.6837 12.8432 43.9133C12.8432 43.1429 13.4701 42.5141 14.2405 42.5141H19.6143C20.3847 42.5141 21.0135 43.1429 21.0135 43.9133C21.0135 44.6837 20.3847 45.3106 19.6143 45.3106ZM20.4111 20.2786H40.3846V36.3567H20.4111V20.2786ZM37.8827 18.7492H22.9111V16.0547C22.9111 15.6091 23.2736 15.2466 23.7193 15.2466H37.0745C37.5183 15.2466 37.8827 15.6091 37.8827 16.0547V18.7492V18.7492ZM45.8169 40.9847H41.914V20.2786H45.8169V40.9847ZM19.8069 14.446C19.8069 13.3905 20.666 12.5313 21.7197 12.5313H39.0779C40.1353 12.5313 40.9944 13.3905 40.9944 14.446V18.7511H39.4121V16.0547C39.4121 14.7651 38.3642 13.7171 37.0764 13.7171H23.7212C22.4334 13.7171 21.3854 14.767 21.3854 16.0547V18.7492H19.8088V14.446H19.8069ZM18.8798 20.2786V40.9828H14.9769V20.2786H18.8798ZM4.52945 33.5414V23.0958C4.52945 21.5437 5.79454 20.2786 7.34853 20.2786H13.4474V36.3567H7.34853C5.79454 36.3586 4.52945 35.0954 4.52945 33.5414ZM18.8798 62.4706L12.8432 62.5631L12.7488 60.571H18.8798V62.4706ZM41.914 62.5612L41.8196 60.5691H47.9506V62.4687L41.914 62.5612ZM49.4158 59.0397H11.3761C9.82397 59.0397 8.56076 57.7746 8.56076 56.2225V37.888H13.4493V41.1074C12.222 41.4586 11.3138 42.5745 11.3138 43.9133C11.3138 45.252 12.2201 46.3698 13.4493 46.7192V46.9722C13.4493 47.0326 13.4569 47.0911 13.4682 47.1516C13.7477 48.3034 14.8183 52.0647 16.9312 52.0647C19.0422 52.0647 20.1147 48.3052 20.3904 47.1516C20.4055 47.093 20.413 47.0326 20.413 46.9722V46.7192C21.6366 46.368 22.5448 45.252 22.5448 43.9133C22.5448 42.5745 21.6385 41.4567 20.413 41.1074V37.888H40.3864V41.1074C39.1591 41.4586 38.2528 42.5745 38.2528 43.9133C38.2528 45.252 39.1572 46.3698 40.3864 46.7192V46.9722C40.3864 47.0326 40.394 47.0911 40.4072 47.1516C40.6848 48.3034 41.7592 52.0647 43.8664 52.0647C45.9774 52.0647 47.0518 48.3052 47.3275 47.1516C47.3426 47.093 47.3501 47.0326 47.3501 46.9722V46.7173C48.5756 46.368 49.4819 45.2501 49.4819 43.9133C49.4819 42.5764 48.5775 41.4567 47.3501 41.1093V37.888H52.2368V56.2225C52.233 57.7746 50.9717 59.0397 49.4158 59.0397ZM56.2644 33.5414C56.2644 35.0954 54.9993 36.3586 53.4472 36.3586H47.3483V20.2786H53.4472C54.9993 20.2786 56.2644 21.5418 56.2644 23.0958V33.5414Z", fill: colourFill })));
};

var ServiceIcon$b = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.50187 37.3246C6.43679 37.3198 6.37211 37.3136 6.30785 37.306L6.50187 37.5V37.3246ZM41.3846 46.3087H45.2875V46.3483C44.8607 48.0571 43.9299 50.0058 43.3351 50.0058C42.795 50.0058 41.8585 48.2384 41.3846 46.3483V46.3087ZM46.022 44.7792H40.6482C39.8778 44.7792 39.2509 44.1523 39.2509 43.382C39.2509 42.6116 39.8778 41.9828 40.6482 41.9828H46.022C46.7943 41.9828 47.4211 42.6116 47.4211 43.382C47.4211 44.1523 46.7943 44.7792 46.022 44.7792ZM14.4474 46.3087H18.3504V46.3483C17.8783 48.2384 16.9418 50.0058 16.3998 50.0058C15.8579 50.0058 14.9214 48.2384 14.4474 46.3483V46.3087ZM19.0849 44.7792H13.711C12.9406 44.7792 12.3138 44.1523 12.3138 43.382C12.3138 42.6116 12.9406 41.9828 13.711 41.9828H19.0849C19.8553 41.9828 20.484 42.6116 20.484 43.382C20.484 44.1523 19.8553 44.7792 19.0849 44.7792ZM19.8817 19.7473H39.8551V35.8254H19.8817V19.7473ZM37.3532 18.2179H22.3817V15.5234C22.3817 15.0778 22.7442 14.7152 23.1898 14.7152H36.5451C36.9888 14.7152 37.3532 15.0778 37.3532 15.5234V18.2179ZM45.2875 40.4534H41.3846V19.7473H45.2875V40.4534ZM19.2775 13.9146C19.2775 12.8591 20.1366 12 21.1902 12H38.5485C39.6059 12 40.465 12.8591 40.465 13.9146V18.2197H38.8827V15.5234C38.8827 14.2337 37.8347 13.1858 36.547 13.1858H23.1917C21.904 13.1858 20.856 14.2356 20.856 15.5234V18.2179H19.2793V13.9146H19.2775ZM18.3504 19.7473V40.4515H14.4474V19.7473H18.3504ZM4 33.01V22.5645C4 21.0124 5.2651 19.7473 6.81909 19.7473H12.918V35.8254H6.81909C5.2651 35.8272 4 34.564 4 33.01ZM18.3504 61.9392L12.3138 62.0317L12.2194 60.0397H18.3504V61.9392ZM41.3846 62.0299L41.2901 60.0378H47.4211V61.9373L41.3846 62.0299ZM48.8864 58.5084H10.8466C9.29452 58.5084 8.03132 57.2433 8.03132 55.6912V37.3567H12.9199V40.5761C11.6925 40.9273 10.7843 42.0432 10.7843 43.382C10.7843 44.7207 11.6907 45.8385 12.9199 46.1878V46.4408C12.9199 46.5013 12.9274 46.5598 12.9388 46.6202C13.2182 47.772 14.2888 51.5333 16.4017 51.5333C18.5127 51.5333 19.5852 47.7739 19.8609 46.6202C19.876 46.5617 19.8836 46.5013 19.8836 46.4408V46.1878C21.1071 45.8366 22.0154 44.7207 22.0154 43.382C22.0154 42.0432 21.109 40.9254 19.8836 40.5761V37.3567H39.857V40.5761C38.6297 40.9273 37.7233 42.0432 37.7233 43.382C37.7233 44.7207 38.6278 45.8385 39.857 46.1878V46.4408C39.857 46.5013 39.8646 46.5598 39.8778 46.6202C40.1553 47.772 41.2297 51.5333 43.337 51.5333C45.448 51.5333 46.5224 47.7739 46.798 46.6202C46.8131 46.5617 46.8207 46.5013 46.8207 46.4408V46.1859C48.0461 45.8366 48.9525 44.7188 48.9525 43.382C48.9525 42.0451 48.048 40.9254 46.8207 40.578V37.3567H51.7074V55.6912C51.7036 57.2433 50.4423 58.5084 48.8864 58.5084ZM55.7349 33.01C55.7349 34.564 54.4698 35.8272 52.9177 35.8272H46.8188V19.7473H52.9177C54.4698 19.7473 55.7349 21.0105 55.7349 22.5645V33.01ZM23.4706 28.094C23.4706 26.0264 26.2783 24.4687 30.0056 24.4687C33.7311 24.4687 36.5407 26.0264 36.5407 28.094C36.5407 30.1597 33.7311 31.7175 30.0056 31.7175C26.2783 31.7175 23.4706 30.1597 23.4706 28.094ZM25 28.0959C25 29.0834 27.1393 30.1899 30.0056 30.1899C32.87 30.1899 35.0094 29.0834 35.0094 28.0959C35.0094 27.1046 32.87 26 30.0056 26C27.1412 26 25 27.1065 25 28.0959Z", fill: colourFill })));
};

var ServiceIcon$c = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M7.80818 31.7009C5.60495 33.0564 4.09281 35.3425 3.75747 38.0065C3.75123 38.0547 3.74839 38.1029 3.74839 38.1517V64.838C3.74839 65.4797 4.2687 66 4.91044 66H55.325C55.9667 66 56.4871 65.4797 56.4871 64.838V38.2187C56.4871 38.1733 56.4842 38.1285 56.4791 38.0836C56.1687 35.4293 54.6231 33.0876 52.4085 31.7077C55.2915 29.7189 57.1078 26.3894 57.1078 22.8074C57.1078 16.8479 52.2599 12 46.3004 12C40.3415 12 35.4936 16.8479 35.4936 22.8074C35.4936 26.3849 37.3053 29.711 40.1821 31.7009C38.1372 32.9593 36.7006 35.0244 36.2351 37.4446C32.9803 38.8733 30.699 42.1228 30.699 45.8991C30.699 48.8609 32.1522 51.6208 34.4785 53.3355C32.458 54.6956 31.1757 56.997 31.1757 59.5344V63.6759H29.0513V59.5344C29.0513 56.997 27.7689 54.6956 25.7484 53.3355C28.0748 51.6208 29.5279 48.8609 29.5279 45.8991C29.5279 42.1228 27.2466 38.8733 23.9918 37.4446C23.5256 35.0576 22.0686 32.9751 20.0346 31.7077C22.9171 29.7184 24.7333 26.3894 24.7333 22.8074C24.7333 16.8479 19.8854 12 13.9265 12C7.96706 12 3.11914 16.8479 3.11914 22.8074C3.11914 26.3854 4.93087 29.711 7.80818 31.7009ZM43.153 32.9327C43.6416 32.8051 43.9911 32.3761 44.0189 31.8723C44.0461 31.3678 43.7454 30.9037 43.2739 30.7233C40.0102 29.4744 37.8177 26.293 37.8177 22.8074C37.8177 18.1297 41.6233 14.3241 46.3004 14.3241C50.9781 14.3241 54.7837 18.1297 54.7837 22.8074C54.7837 26.293 52.5907 29.4744 49.327 30.7233C48.8554 30.9037 48.5547 31.3678 48.582 31.8723C48.6098 32.3761 48.9593 32.8045 49.4478 32.9327C51.9495 33.5887 53.8373 35.7363 54.163 38.2896V63.6759H48.6869V59.5344C48.6869 56.997 47.4046 54.6956 45.3846 53.3355C47.7104 51.6208 49.1635 48.8609 49.1635 45.8991C49.1635 40.8083 45.0221 36.6668 39.9313 36.6668C39.5693 36.6668 39.2137 36.6931 38.8625 36.7339C39.6088 34.898 41.1872 33.4479 43.153 32.9327ZM33.4997 59.5344C33.4997 57.1961 35.0817 55.1484 37.3462 54.5549C37.8347 54.4272 38.1842 53.9982 38.212 53.4944C38.2393 52.99 37.9386 52.5258 37.467 52.3454C34.8087 51.3286 33.0231 48.7384 33.0231 45.8991C33.0231 42.0901 36.1223 38.9909 39.9313 38.9909C43.7403 38.9909 46.8395 42.0901 46.8395 45.8991C46.8395 48.7378 45.0538 51.3286 42.3961 52.3454C41.9246 52.5258 41.6239 52.99 41.6511 53.4944C41.6789 53.9982 42.0284 54.4272 42.517 54.5549C44.7815 55.1484 46.3628 57.1961 46.3628 59.5344V63.6759H33.4997V59.5344ZM27.2038 45.8991C27.2038 48.7384 25.4182 51.3286 22.7599 52.3454C22.2884 52.5258 21.9877 52.99 22.0149 53.4944C22.0427 53.9982 22.3922 54.4272 22.8807 54.5549C25.1453 55.1484 26.7272 57.1961 26.7272 59.5344V63.6759H13.8641V59.5344C13.8641 57.1961 15.4455 55.1484 17.71 54.5549C18.1985 54.4272 18.548 53.9982 18.5758 53.4944C18.6031 52.99 18.3024 52.5258 17.8308 52.3454C15.1731 51.3286 13.3875 48.7378 13.3875 45.8991C13.3875 42.0901 16.4867 38.9909 20.2956 38.9909C24.1046 38.9909 27.2038 42.0901 27.2038 45.8991ZM13.9265 14.3241C18.6036 14.3241 22.4092 18.1297 22.4092 22.8074C22.4092 26.293 20.2168 29.4744 16.9531 30.7233C16.4815 30.9037 16.1808 31.3678 16.2081 31.8723C16.2359 32.3761 16.5854 32.8045 17.0739 32.9327C19.045 33.4496 20.6219 34.8974 21.3669 36.7343C21.0148 36.6934 20.6585 36.6668 20.2956 36.6668C15.2049 36.6668 11.0634 40.8083 11.0634 45.8991C11.0634 48.8609 12.5165 51.6208 14.8423 53.3355C12.8223 54.6956 11.54 56.997 11.54 59.5344V63.6759H6.07249V38.2278C6.41917 35.7045 8.30239 33.5818 10.7791 32.9327C11.2677 32.8051 11.6172 32.3761 11.645 31.8723C11.6722 31.3678 11.3715 30.9037 10.9 30.7233C7.63626 29.4744 5.44323 26.293 5.44323 22.8074C5.44323 18.1297 9.24882 14.3241 13.9265 14.3241Z", fill: colourFill }),
        React__default.createElement("path", { d: "M43.214 47.6716C42.7374 47.241 42.0026 47.2784 41.5725 47.7539C40.7781 48.6317 39.3204 48.6328 38.5261 47.7539C38.0966 47.2784 37.3612 47.241 36.8846 47.6716C36.4085 48.1017 36.3716 48.8371 36.8023 49.3131C37.633 50.2318 38.8166 50.7589 40.049 50.7589C41.282 50.7589 42.4656 50.2318 43.2963 49.3131C43.7269 48.8371 43.69 48.1017 43.214 47.6716Z", fill: colourFill }),
        React__default.createElement("path", { d: "M13.927 29.1385C15.1594 29.1385 16.343 28.6114 17.1737 27.6928C17.6044 27.2167 17.5675 26.4813 17.0914 26.0513C16.6142 25.6212 15.8789 25.6586 15.4499 26.1335C14.655 27.0124 13.1973 27.0113 12.4035 26.1335C11.974 25.6586 11.2386 25.6212 10.762 26.0513C10.286 26.4813 10.2491 27.2167 10.6797 27.6928C11.5104 28.6114 12.694 29.1385 13.927 29.1385Z", fill: colourFill }),
        React__default.createElement("path", { d: "M49.5477 27.6928C49.9784 27.2167 49.9415 26.4813 49.4654 26.0513C48.9888 25.6212 48.2529 25.6586 47.8239 26.1335C47.0301 27.0113 45.5725 27.0124 44.7775 26.1335C44.348 25.6586 43.6127 25.6212 43.136 26.0513C42.66 26.4813 42.6231 27.2167 43.0538 27.6928C43.8844 28.6114 45.0681 29.1385 46.3005 29.1385C47.5334 29.1385 48.717 28.6114 49.5477 27.6928Z", fill: colourFill }),
        React__default.createElement("path", { d: "M18.5211 47.7545C18.0916 47.2796 17.3574 47.2415 16.8796 47.6711C16.4035 48.1012 16.3661 48.836 16.7962 49.3126C17.6269 50.2318 18.8099 50.7589 20.0435 50.7589C21.2759 50.7589 22.4595 50.2318 23.2902 49.3131C23.7208 48.8371 23.6839 48.1017 23.2079 47.6716C22.7307 47.241 21.9953 47.2784 21.5664 47.7539C20.7714 48.6328 19.3132 48.6311 18.5211 47.7545Z", fill: colourFill })));
};

var ServiceIcon$d = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.8862 30.0911C21.9279 30.0454 21.9693 29.9994 22.0102 29.953L22.0001 30L21.8862 30.0911ZM44.019 31.8723C43.9912 32.3761 43.6417 32.8051 43.1531 32.9327C41.1874 33.4479 39.6089 34.898 38.8626 36.7339C39.2139 36.6931 39.5694 36.6668 39.9314 36.6668C45.0222 36.6668 49.1637 40.8083 49.1637 45.8991C49.1637 48.8609 47.7105 51.6208 45.3848 53.3355C47.4047 54.6956 48.6871 56.997 48.6871 59.5344V63.6759H54.1631V38.2896C53.8374 35.7363 51.9496 33.5887 49.4479 32.9327C48.9594 32.8045 48.6099 32.3761 48.5821 31.8723C48.5548 31.3678 48.8556 30.9037 49.3271 30.7233C52.5908 29.4744 54.7838 26.293 54.7838 22.8074C54.7838 18.1297 50.9782 14.3241 46.3005 14.3241C41.6234 14.3241 37.8178 18.1297 37.8178 22.8074C37.8178 26.293 40.0103 29.4744 43.274 30.7233C43.7455 30.9037 44.0462 31.3678 44.019 31.8723ZM37.3463 54.5549C35.0818 55.1484 33.4999 57.1961 33.4999 59.5344V63.6759H46.363V59.5344C46.363 57.1961 44.7816 55.1484 42.5171 54.5549C42.0285 54.4272 41.679 53.9982 41.6512 53.4944C41.624 52.99 41.9247 52.5258 42.3962 52.3454C45.054 51.3286 46.8396 48.7378 46.8396 45.8991C46.8396 42.0901 43.7404 38.9909 39.9314 38.9909C36.1224 38.9909 33.0233 42.0901 33.0233 45.8991C33.0233 48.7384 34.8089 51.3286 37.4672 52.3454C37.9387 52.5258 38.2394 52.99 38.2122 53.4944C38.1844 53.9982 37.8349 54.4272 37.3463 54.5549ZM22.76 52.3454C25.4183 51.3286 27.2039 48.7384 27.2039 45.8991C27.2039 42.0901 24.1048 38.9909 20.2958 38.9909C16.4868 38.9909 13.3876 42.0901 13.3876 45.8991C13.3876 48.7378 15.1732 51.3286 17.831 52.3454C18.3025 52.5258 18.6032 52.99 18.576 53.4944C18.5482 53.9982 18.1986 54.4272 17.7101 54.5549C15.4456 55.1484 13.8642 57.1961 13.8642 59.5344V63.6759H26.7273V59.5344C26.7273 57.1961 25.1454 55.1484 22.8809 54.5549C22.3923 54.4272 22.0428 53.9982 22.015 53.4944C21.9878 52.99 22.2885 52.5258 22.76 52.3454ZM22.4094 22.8074C22.4094 18.1297 18.6038 14.3241 13.9266 14.3241C9.24895 14.3241 5.44336 18.1297 5.44336 22.8074C5.44336 26.293 7.63638 29.4744 10.9001 30.7233C11.3716 30.9037 11.6723 31.3678 11.6451 31.8723C11.6173 32.3761 11.2678 32.8051 10.7792 32.9327C8.30252 33.5818 6.4193 35.7045 6.07261 38.2278V63.6759H11.5401V59.5344C11.5401 56.997 12.8225 54.6956 14.8424 53.3355C12.5166 51.6208 11.0635 48.8609 11.0635 45.8991C11.0635 40.8083 15.205 36.6668 20.2958 36.6668C20.6586 36.6668 21.015 36.6934 21.367 36.7343C20.622 34.8974 19.0451 33.4496 17.074 32.9327C16.5855 32.8045 16.236 32.3761 16.2082 31.8723C16.1809 31.3678 16.4817 30.9037 16.9532 30.7233C20.2169 29.4744 22.4094 26.293 22.4094 22.8074ZM43.2141 47.6716C42.7375 47.241 42.0027 47.2784 41.5726 47.7539C40.7782 48.6317 39.3205 48.6328 38.5262 47.7539C38.0967 47.2784 37.3613 47.241 36.8847 47.6716C36.4086 48.1017 36.3717 48.8371 36.8024 49.3132C37.6331 50.2318 38.8167 50.7589 40.0491 50.7589C41.2821 50.7589 42.4657 50.2318 43.2964 49.3132C43.727 48.8371 43.6901 48.1017 43.2141 47.6716ZM17.1738 27.6927C16.3432 28.6114 15.1596 29.1385 13.9271 29.1385C12.6942 29.1385 11.5106 28.6114 10.6799 27.6927C10.2492 27.2167 10.2861 26.4813 10.7622 26.0512C11.2388 25.6211 11.9741 25.6586 12.4037 26.1335C13.1975 27.0113 14.6551 27.0124 15.4501 26.1335C15.879 25.6586 16.6144 25.6211 17.0916 26.0512C17.5676 26.4813 17.6045 27.2167 17.1738 27.6927ZM49.5479 27.6927C49.9786 27.2167 49.9417 26.4813 49.4656 26.0512C48.989 25.6211 48.2531 25.6586 47.8241 26.1335C47.0303 27.0113 45.5727 27.0124 44.7777 26.1335C44.3482 25.6586 43.6128 25.6211 43.1362 26.0512C42.6602 26.4813 42.6233 27.2167 43.054 27.6927C43.8846 28.6114 45.0682 29.1385 46.3006 29.1385C47.5336 29.1385 48.7172 28.6114 49.5479 27.6927ZM16.8796 47.6711C17.3574 47.2416 18.0916 47.2796 18.5211 47.7545C19.3132 48.6311 20.7714 48.6328 21.5664 47.7539C21.9953 47.2784 22.7307 47.241 23.2079 47.6716C23.6839 48.1017 23.7208 48.8371 23.2902 49.3132C22.4595 50.2318 21.2759 50.7589 20.0435 50.7589C18.8099 50.7589 17.6269 50.2318 16.7962 49.3126C16.3661 48.836 16.4036 48.1012 16.8796 47.6711Z", fill: colourFill })));
};

var ServiceIcon$e = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 67C0 66.4477 0.447715 66 1 66H59C59.5523 66 60 66.4477 60 67C60 67.5523 59.5523 68 59 68H1C0.447715 68 0 67.5523 0 67Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 64C2 62.8954 2.89543 62 4 62H35C36.1046 62 37 62.8954 37 64V67C37 67.5523 36.5523 68 36 68H3C2.44772 68 2 67.5523 2 67V64ZM35 64H4V66H35V64Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 36C4 35.4477 4.44772 35 5 35H34C34.5523 35 35 35.4477 35 36V63C35 63.5523 34.5523 64 34 64H5C4.44772 64 4 63.5523 4 63V36ZM6 37V62H33V37H6Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.8032 18.2827C19.1913 17.9058 19.8088 17.9058 20.1968 18.2827L37.6968 35.2827C37.9888 35.5664 38.0797 35.9987 37.9267 36.376C37.7736 36.7532 37.4071 37 37 37H2.00003C1.59293 37 1.22647 36.7532 1.0734 36.376C0.920343 35.9987 1.01124 35.5664 1.30325 35.2827L18.8032 18.2827ZM4.46461 35H34.5355L19.5 20.3942L4.46461 35Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25 63C25 62.4477 25.4477 62 26 62H57.0029C58.1045 62.0032 58.9968 62.8955 59 63.9971L59 64L59 67C59 67.5523 58.5523 68 58 68H25C24.4477 68 24 67.5523 24 67C24 66.4477 24.4477 66 25 66H57L57 64.0029C57 64.0028 57 64.003 57 64.0029C57 64.0026 57 64.002 57 64.0018C56.9998 64.0016 56.9995 64.0012 56.9991 64.0009C56.9988 64.0005 56.9984 64.0002 56.9982 64C56.998 64 56.9985 64 56.9982 64L26 64C25.4477 64 25 63.5523 25 63Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33 36C33 35.4477 33.4477 35 34 35H56C56.5523 35 57 35.4477 57 36V63C57 63.5523 56.5523 64 56 64H34C33.4477 64 33 63.5523 33 63V36ZM35 37V62H55V37H35Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.7827 18.3032C41.1675 17.9071 41.8006 17.8979 42.1968 18.2827L59.6968 35.2827C59.9888 35.5664 60.0797 35.9987 59.9266 36.376C59.7736 36.7532 59.4071 37 59 37H24C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35H56.5354L40.8032 19.7173C40.4071 19.3325 40.3979 18.6994 40.7827 18.3032Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 36C4 35.4477 4.44772 35 5 35H34C34.5523 35 35 35.4477 35 36V41C35 41.5523 34.5523 42 34 42H5C4.44772 42 4 41.5523 4 41V36ZM6 37V40H33V37H6Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 41C8 40.4477 8.44772 40 9 40H15C15.5523 40 16 40.4477 16 41V44C16 45.1046 15.1046 46 14 46H10C8.89543 46 8 45.1046 8 44V41ZM10 42V44H14V42H10Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 60C8 58.8954 8.89543 58 10 58H14C15.1046 58 16 58.8954 16 60V63C16 63.5523 15.5523 64 15 64H9C8.44772 64 8 63.5523 8 63V60ZM14 60H10V62H14V60Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 45C9 44.4477 9.44772 44 10 44H14C14.5523 44 15 44.4477 15 45V59C15 59.5523 14.5523 60 14 60H10C9.44772 60 9 59.5523 9 59V45ZM11 46V58H13V46H11Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 41C23 40.4477 23.4477 40 24 40H30C30.5523 40 31 40.4477 31 41V44C31 45.1046 30.1046 46 29 46H25C23.8954 46 23 45.1046 23 44V41ZM25 42V44H29V42H25Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 60C23 58.8954 23.8954 58 25 58H29C30.1046 58 31 58.8954 31 60V63C31 63.5523 30.5523 64 30 64H24C23.4477 64 23 63.5523 23 63V60ZM29 60H25V62H29V60Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 45C24 44.4477 24.4477 44 25 44H29C29.5523 44 30 44.4477 30 45V59C30 59.5523 29.5523 60 29 60H25C24.4477 60 24 59.5523 24 59V45ZM26 46V58H28V46H26Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 27C17.8954 27 17 27.8954 17 29C17 30.1046 17.8954 31 19 31C20.1046 31 21 30.1046 21 29C21 27.8954 20.1046 27 19 27ZM15 29C15 26.7909 16.7909 25 19 25C21.2091 25 23 26.7909 23 29C23 31.2091 21.2091 33 19 33C16.7909 33 15 31.2091 15 29Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5 19C18.5 18.4477 18.9477 18 19.5 18H41.5C42.0523 18 42.5 18.4477 42.5 19C42.5 19.5523 42.0523 20 41.5 20H19.5C18.9477 20 18.5 19.5523 18.5 19Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33 41C33 40.4477 33.4477 40 34 40H56C56.5523 40 57 40.4477 57 41C57 41.5523 56.5523 42 56 42H34C33.4477 42 33 41.5523 33 41Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40 48C39.4477 48 39 48.4477 39 49V54H41V49C41 48.4477 40.5523 48 40 48ZM37 49C37 47.3431 38.3431 46 40 46C41.6569 46 43 47.3431 43 49V55C43 55.5523 42.5523 56 42 56H38C37.4477 56 37 55.5523 37 55V49Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50 48C49.4477 48 49 48.4477 49 49V54H51V49C51 48.4477 50.5523 48 50 48ZM47 49C47 47.3431 48.3431 46 50 46C51.6569 46 53 47.3431 53 49V55C53 55.5523 52.5523 56 52 56H48C47.4477 56 47 55.5523 47 55V49Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.4706 8.11765C27.7965 8.29144 28 8.63069 28 9V13C28 13.5523 27.5523 14 27 14C26.4477 14 26 13.5523 26 13V10.5779C24.6418 11.0073 23.2722 10.9354 22.195 10.7384C21.7553 10.6579 21.3516 10.5545 21 10.4482V19C21 19.5523 20.5523 20 20 20C19.4477 20 19 19.5523 19 19V9C19 8.65298 19.1799 8.33077 19.4753 8.1487C19.7701 7.96701 20.1379 7.95079 20.4475 8.10571L20.4477 8.10582L20.4509 8.1074L20.4743 8.11866C20.4971 8.12944 20.5337 8.14649 20.5831 8.16839C20.682 8.21225 20.8312 8.27519 21.0211 8.34597C21.4028 8.48824 21.9388 8.65829 22.555 8.77102C23.8101 9.00065 25.2521 8.96838 26.4429 8.16955C26.7496 7.96381 27.1447 7.94385 27.4706 8.11765Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.1069 12.6561C19.3548 12.1634 19.9547 11.9646 20.4477 12.2113L20.4479 12.2114L20.4511 12.213L20.4746 12.2242C20.4973 12.235 20.5339 12.2521 20.5833 12.274C20.6822 12.3178 20.8314 12.3808 21.0213 12.4515C21.403 12.5938 21.9391 12.7639 22.5552 12.8766C23.8103 13.1062 25.2523 13.0739 26.4431 12.2751C26.9018 11.9674 27.523 12.0898 27.8307 12.5485C28.1383 13.0071 28.016 13.6283 27.5573 13.936C25.7481 15.1497 23.6901 15.1174 22.1952 14.8439C21.4364 14.7051 20.7849 14.4978 20.3229 14.3256C20.0909 14.2392 19.9041 14.1606 19.7726 14.1023C19.7067 14.0731 19.6545 14.0488 19.6172 14.0311C19.5985 14.0223 19.5835 14.015 19.5724 14.0096L19.5587 14.0028L19.554 14.0005L19.5522 13.9996L19.5514 13.9992C19.5511 13.999 19.5508 13.9989 20.0002 13.1056L19.5508 13.9989C19.0574 13.7506 18.8587 13.1495 19.1069 12.6561Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M49.4706 8.11765C49.7965 8.29144 50 8.63069 50 9V13C50 13.5523 49.5523 14 49 14C48.4477 14 48 13.5523 48 13V10.5779C46.6418 11.0073 45.2722 10.9354 44.195 10.7384C43.7553 10.6579 43.3516 10.5545 43 10.4482V19C43 19.5523 42.5523 20 42 20C41.4477 20 41 19.5523 41 19V9C41 8.65298 41.1799 8.33077 41.4753 8.1487C41.7701 7.96701 42.1379 7.95079 42.4475 8.10571L42.4477 8.10582L42.4509 8.1074L42.4743 8.11866C42.4971 8.12944 42.5337 8.14649 42.5831 8.16839C42.682 8.21225 42.8312 8.27519 43.0211 8.34597C43.4028 8.48824 43.9388 8.65829 44.555 8.77102C45.8101 9.00065 47.2521 8.96838 48.4429 8.16955C48.7496 7.96381 49.1447 7.94385 49.4706 8.11765Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.1069 12.6561C41.3548 12.1634 41.9547 11.9646 42.4477 12.2113L42.4479 12.2114L42.4511 12.213L42.4746 12.2242C42.4973 12.235 42.5339 12.2521 42.5833 12.274C42.6822 12.3178 42.8314 12.3808 43.0213 12.4515C43.403 12.5938 43.9391 12.7639 44.5552 12.8766C45.8103 13.1062 47.2523 13.0739 48.4431 12.2751C48.9018 11.9674 49.523 12.0898 49.8307 12.5485C50.1383 13.0071 50.016 13.6283 49.5573 13.936C47.7481 15.1497 45.6901 15.1174 44.1952 14.8439C43.4364 14.7051 42.7849 14.4978 42.3229 14.3256C42.0909 14.2392 41.9041 14.1606 41.7726 14.1023C41.7067 14.0731 41.6545 14.0488 41.6172 14.0311C41.5985 14.0223 41.5835 14.015 41.5724 14.0096L41.5587 14.0028L41.554 14.0005L41.5522 13.9996L41.5514 13.9992C41.5511 13.999 41.5508 13.9989 42.0002 13.1056L41.5508 13.9989C41.0574 13.7506 40.8587 13.1495 41.1069 12.6561Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.05881 18.0884C4.50555 14.6531 7.44294 12 11 12C14.5571 12 17.4946 14.6533 17.9412 18.0887C18.4745 18.1909 18.9896 18.3802 19.4651 18.6511C19.9449 18.9246 20.1123 19.5352 19.8389 20.0151C19.5654 20.4949 18.9548 20.6623 18.4749 20.3889C18.0261 20.1331 17.5183 19.9991 17.0018 20C16.7362 20.0005 16.4814 19.8953 16.2935 19.7077C16.1056 19.5201 16 19.2655 16 19C16 16.2386 13.7614 14 11 14C8.23858 14 6 16.2386 6 19C6 19.5523 5.55228 20 5 20C3.34315 20 2 21.3431 2 23C2 24.6569 3.34315 26 5 26H11.26C11.8123 26 12.26 26.4477 12.26 27C12.26 27.5523 11.8123 28 11.26 28H5C2.23858 28 0 25.7614 0 23C0 20.5603 1.74733 18.5287 4.05881 18.0884Z", fill: colourFill })));
};

var ServiceIcon$f = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M59 66.0002H57V64.0002H37V66.0002H35V64.0002H4V66.0002H1C0.447715 66.0002 0 66.4479 0 67.0002C0 67.5525 0.447715 68.0002 1 68.0002H59C59.5523 68.0002 60 67.5525 60 67.0002C60 66.4479 59.5523 66.0002 59 66.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M35 62.0002H55V42.0002H35V62.0002ZM47 49.0002C47 47.3433 48.3431 46.0002 50 46.0002C51.6569 46.0002 53 47.3433 53 49.0002V55.0002C52.9984 55.5518 52.5516 55.9986 52 56.0002H48C47.4484 55.9986 47.0016 55.5518 47 55.0002V49.0002ZM37 49.0002C37 47.3433 38.3431 46.0002 40 46.0002C41.6569 46.0002 43 47.3433 43 49.0002V55.0002C42.9984 55.5518 42.5516 55.9986 42 56.0002H38C37.4484 55.9986 37.0016 55.5518 37 55.0002V49.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M19 31.0002C20.1046 31.0002 21 30.1048 21 29.0002C21 27.8956 20.1046 27.0002 19 27.0002C17.8954 27.0002 17 27.8956 17 29.0002C17 30.1048 17.8954 31.0002 19 31.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M21.9702 20.0002L37.4101 35.0002H56.5402L43.0002 21.8502V14.5525C43.9248 14.8402 44.8864 14.9915 45.8547 15.0016C47.168 15.0262 48.4584 14.655 49.5578 13.9362C49.8336 13.7456 49.9933 13.4276 49.9815 13.0926C49.9893 13.0621 49.9955 13.0313 50.0002 13.0002V9.00017C50.0001 8.63076 49.7965 8.29146 49.4705 8.11765C49.1446 7.94384 48.7494 7.96381 48.4426 8.1696C45.9768 9.82781 42.4826 8.12322 42.4494 8.1071C42.1395 7.951 41.7708 7.96681 41.4754 8.14886C41.18 8.33092 41.0001 8.65316 41.0002 9.00017V20.0002H21.9702ZM48.0002 10.5793V12.53C46.3865 13.1573 44.5909 13.1257 43.0002 12.4419V10.4494C44.6175 10.9854 46.3573 11.0306 48.0002 10.5793Z", fill: colourFill }),
        React__default.createElement("path", { d: "M41 49.0002C41 48.4479 40.5523 48.0002 40 48.0002C39.4477 48.0002 39 48.4479 39 49.0002V54.0002H41V49.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M34.54 35.0002L21 21.8502V14.5525C21.9246 14.8402 22.8862 14.9915 23.8545 15.0016C25.1678 15.0262 26.4581 14.655 27.5576 13.9362C27.8334 13.7456 27.9931 13.4276 27.9813 13.0926C27.9891 13.0621 27.9953 13.0313 28 13.0002V9.00017C27.9999 8.63076 27.7963 8.29146 27.4703 8.11765C27.1443 7.94384 26.7491 7.96381 26.4423 8.1696C23.9756 9.82781 20.4833 8.12322 20.4492 8.1071C20.1393 7.951 19.7706 7.96681 19.4751 8.14886C19.1797 8.33092 18.9998 8.65316 19 9.00017V20.8802L4.45996 35.0002H34.54ZM26 10.5793V12.53C24.3862 13.1574 22.5906 13.1258 21 12.442V10.4494C22.6173 10.9854 24.357 11.0306 26 10.5793ZM19 25.0002C21.2091 25.0002 23 26.791 23 29.0002C23 31.2093 21.2091 33.0002 19 33.0002C16.7908 33.0002 15 31.2093 15 29.0002C14.9997 27.9392 15.421 26.9216 16.1712 26.1714C16.9214 25.4212 17.939 24.9999 19 25.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M55 37.0002H35V40.0002H55V37.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M51 49.0002C51 48.4479 50.5523 48.0002 50 48.0002C49.4477 48.0002 49 48.4479 49 49.0002V54.0002H51V49.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M14 60.0002H10V62.0002H14V60.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M13 46.0002H11V58.0002H13V46.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M14 42.0002H10V44.0002H14V42.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M33 62.0002V42.0002H31V44.0002C30.9956 44.7104 30.615 45.365 30 45.7202V58.2802C30.615 58.6354 30.9956 59.29 31 60.0002V62.0002H33Z", fill: colourFill }),
        React__default.createElement("path", { d: "M6 42.0002V62.0002H8V60.0002C8.00442 59.29 8.38501 58.6354 9 58.2802V45.7202C8.38498 45.365 8.00438 44.7104 8 44.0002V42.0002H6Z", fill: colourFill }),
        React__default.createElement("path", { d: "M5 26.0002H10.86L17.03 20.0002H17C16.4484 19.9986 16.0016 19.5518 16 19.0002C16 16.2388 13.7614 14.0002 11 14.0002C8.23858 14.0002 6 16.2388 6 19.0002C5.9984 19.5518 5.55162 19.9986 5 20.0002C3.34315 20.0002 2 21.3433 2 23.0002C2 24.657 3.34315 26.0002 5 26.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M29 60.0002H25V62.0002H29V60.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M33 37.0002H6V40.0002H33V37.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M28 46.0002H26V58.0002H28V46.0002Z", fill: colourFill }),
        React__default.createElement("path", { d: "M23 62.0002V60.0002C23.0044 59.29 23.385 58.6354 24 58.2802V45.7202C23.385 45.365 23.0044 44.7104 23 44.0002V42.0002H16V44.0002C15.9956 44.7104 15.615 45.365 15 45.7202V58.2802C15.615 58.6354 15.9956 59.29 16 60.0002V62.0002H23Z", fill: colourFill }),
        React__default.createElement("path", { d: "M29 42.0002H25V44.0002H29V42.0002Z", fill: colourFill })));
};

var ServiceIcon$g = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M41.8852 64.1476H1", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.6722 35.623L15.2624 20.4099L3.85254 35.623V64.1476H26.6722V35.623Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M53.295 54.6394V35.623L49.4917 30.5551L43.7868 22.9485L41.8852 20.4099H15.2622", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M48.0657 67C52.0041 67 55.1969 63.8073 55.1969 59.8688C55.1969 55.9304 52.0041 52.7377 48.0657 52.7377C44.1273 52.7377 40.9346 55.9304 40.9346 59.8688C40.9346 63.8073 44.1273 67 48.0657 67Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M50.0544 62.1465L49.7454 62.2658C49.5292 62.3552 49.2511 62.3254 49.0348 62.2062C48.664 61.9677 48.2005 61.8783 47.768 61.9081C47.8915 61.4611 47.9224 61.0141 47.8915 60.5671H49.4365C49.7763 60.5671 50.0235 60.2988 50.0235 60.0008C50.0235 59.7028 49.7454 59.4346 49.4365 59.4346H47.6753C47.6135 59.2558 47.5517 59.0472 47.459 58.8683C47.15 58.2425 47.1191 57.9445 47.1191 57.8551C47.1191 57.2889 47.5826 56.8716 48.1696 56.8716C48.7567 56.8716 49.2202 57.3187 49.2202 57.8849C49.2202 58.2425 49.5292 58.5107 49.869 58.5107C50.2398 58.5107 50.5179 58.2127 50.5179 57.8849C50.5179 56.6332 49.4365 55.5901 48.1387 55.5901C46.8101 55.5901 45.7596 56.5736 45.7596 57.8551C45.7596 58.2425 45.9141 58.7491 46.223 59.375C46.223 59.375 46.223 59.4048 46.2539 59.4048H45.9759C45.636 59.4048 45.3888 59.673 45.3888 59.971C45.3888 60.269 45.6669 60.5372 45.9759 60.5372H46.532C46.5629 61.1035 46.4702 61.6697 46.223 62.1763L45.7287 62.2658C45.3579 62.3552 45.1416 62.683 45.2343 63.0406C45.327 63.3982 45.6669 63.6068 46.0377 63.5174L47.7371 63.1598C47.9224 63.13 48.1387 63.1598 48.2932 63.2492C48.6331 63.4578 49.0348 63.577 49.4056 63.577C49.6836 63.577 49.9617 63.5174 50.2089 63.428L50.5179 63.3088C50.8578 63.1598 51.0123 62.8022 50.8578 62.4744C50.7651 62.1763 50.3943 62.0273 50.0544 62.1465Z", fill: colourFill }),
        React__default.createElement("path", { d: "M26.6724 35.6229H53.2953", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.60658 53.6885H12.4099C12.935 53.6885 13.3607 54.1142 13.3607 54.6394V64.1476H7.65576V54.6394C7.65576 54.1142 8.08146 53.6885 8.60658 53.6885Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M12.4099 41.3279H8.60658C8.08146 41.3279 7.65576 41.7536 7.65576 42.2787V46.082C7.65576 46.6071 8.08146 47.0328 8.60658 47.0328H12.4099C12.935 47.0328 13.3607 46.6071 13.3607 46.082V42.2787C13.3607 41.7536 12.935 41.3279 12.4099 41.3279Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M21.9182 41.3279H18.1149C17.5898 41.3279 17.1641 41.7536 17.1641 42.2787V46.082C17.1641 46.6071 17.5898 47.0328 18.1149 47.0328H21.9182C22.4433 47.0328 22.869 46.6071 22.869 46.082V42.2787C22.869 41.7536 22.4433 41.3279 21.9182 41.3279Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M21.9182 53.6885H18.1149C17.5898 53.6885 17.1641 54.1142 17.1641 54.6394V58.4426C17.1641 58.9678 17.5898 59.3935 18.1149 59.3935H21.9182C22.4433 59.3935 22.869 58.9678 22.869 58.4426V54.6394C22.869 54.1142 22.4433 53.6885 21.9182 53.6885Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.9902 30.2984L31.7115 24.5935C31.5319 24.354 31.2501 24.2131 30.9508 24.2131H25.7213C25.3612 24.2131 25.032 24.4166 24.8709 24.7387C24.7098 25.0609 24.7446 25.4463 24.9607 25.7344L29.2394 31.4394C29.4189 31.6788 29.7007 31.8197 30 31.8197H35.2295C35.5897 31.8197 35.9189 31.6162 36.08 31.2941C36.241 30.972 36.2063 30.5865 35.9902 30.2984Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M35.2297 41.3279H31.4264C30.9013 41.3279 30.4756 41.7536 30.4756 42.2787V46.082C30.4756 46.6071 30.9013 47.0328 31.4264 47.0328H35.2297C35.7548 47.0328 36.1805 46.6071 36.1805 46.082V42.2787C36.1805 41.7536 35.7548 41.3279 35.2297 41.3279Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M35.2297 53.6885H31.4264C30.9013 53.6885 30.4756 54.1142 30.4756 54.6394V58.4426C30.4756 58.9678 30.9013 59.3935 31.4264 59.3935H35.2297C35.7548 59.3935 36.1805 58.9678 36.1805 58.4426V54.6394C36.1805 54.1142 35.7548 53.6885 35.2297 53.6885Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M48.5408 41.3279H40.9342C40.4091 41.3279 39.9834 41.7536 39.9834 42.2787V46.082C39.9834 46.6071 40.4091 47.0328 40.9342 47.0328H48.5408C49.0659 47.0328 49.4916 46.6071 49.4916 46.082V42.2787C49.4916 41.7536 49.0659 41.3279 48.5408 41.3279Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M21.4048 20.4098C22.0874 19.2341 22.0895 17.7833 21.4104 16.6056C20.7313 15.4279 19.4744 14.703 18.115 14.7049C18.115 11.5542 15.5608 9 12.41 9C9.25931 9 6.70513 11.5542 6.70513 14.7049C4.60464 14.7049 2.90186 16.4077 2.90186 18.5082C2.90186 20.6087 4.60464 22.3115 6.70513 22.3115H13.8363", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M44.7379 24.2131H52.3445C54.445 24.2131 56.1477 22.5103 56.1477 20.4098C56.1477 18.3093 54.445 16.6065 52.3445 16.6065C52.3445 13.4558 49.7903 10.9016 46.6395 10.9016C43.4888 10.9016 40.9346 13.4558 40.9346 16.6065C39.9258 16.6063 38.9583 17.0069 38.245 17.7202C37.5317 18.4335 37.1311 19.401 37.1313 20.4098", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var ServiceIcon$h = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M17.3794 20.5862L27.5174 34.1035H52.1381L42.0002 20.5862H17.3794ZM37.4526 31.1104C37.1254 31.7644 36.4555 32.176 35.7243 32.1725H30.4139C29.8066 32.1705 29.2351 31.8848 28.8691 31.4001L24.5242 25.6069C24.0832 25.0223 24.0113 24.2383 24.3389 23.5832C24.6664 22.9282 25.3367 22.5152 26.0691 22.5173H31.3794C31.9868 22.5192 32.5583 22.805 32.9243 23.2897L37.2691 29.0828C37.7118 29.6684 37.783 30.4549 37.4526 31.1104Z", fill: colourFill }),
        React__default.createElement("path", { d: "M26.0693 24.4484L30.4142 30.2415H35.7245L31.3797 24.4484H26.0693Z", fill: colourFill }),
        React__default.createElement("path", { d: "M22.2068 54.3795H18.3447V58.2415H22.2068V54.3795Z", fill: colourFill }),
        React__default.createElement("path", { d: "M12.5525 41.8277H8.68994V45.6897H12.5525V41.8277Z", fill: colourFill }),
        React__default.createElement("path", { d: "M35.7244 41.8277H31.8618V45.6897H35.7244V41.8277Z", fill: colourFill }),
        React__default.createElement("path", { d: "M22.2073 41.8277H18.3447V45.6897H22.2073V41.8277Z", fill: colourFill }),
        React__default.createElement("path", { d: "M6.75838 20.5862H13.5171L14.6758 19.0413C14.6871 19.0262 14.7063 19.0216 14.7184 19.0074C14.8969 18.787 15.1645 18.6578 15.4481 18.6552H21.051C21.1702 18.3469 21.2346 18.0202 21.2412 17.6897C21.2394 16.0907 19.9436 14.7949 18.3446 14.7931C18.0885 14.7932 17.8429 14.6915 17.6618 14.5104C17.4807 14.3293 17.379 14.0837 17.3791 13.8276C17.3791 11.1614 15.2177 9 12.5515 9C9.88529 9 7.7239 11.1614 7.7239 13.8276C7.72396 14.0837 7.62226 14.3293 7.44118 14.5104C7.26009 14.6915 7.01447 14.7932 6.75838 14.7931C5.15865 14.7931 3.86182 16.09 3.86182 17.6897C3.86182 19.2894 5.15865 20.5862 6.75838 20.5862Z", fill: colourFill }),
        React__default.createElement("path", { d: "M35.7239 54.3795H31.8618V58.2415H35.7239V54.3795Z", fill: colourFill }),
        React__default.createElement("path", { d: "M49.2422 41.8277H41.5176V45.6897H49.2422V41.8277Z", fill: colourFill }),
        React__default.createElement("path", { d: "M43.2557 19.0418L45.8622 22.5173H53.1032C54.703 22.5173 55.9998 21.2204 55.9998 19.6207C55.9998 18.021 54.703 16.7242 53.1032 16.7242C52.8471 16.7242 52.6015 16.6225 52.4204 16.4414C52.2393 16.2603 52.1376 16.0147 52.1377 15.7586C52.1377 13.0924 49.9763 10.931 47.3101 10.931C44.6439 10.931 42.4825 13.0924 42.4825 15.7586C42.4826 16.0147 42.3809 16.2603 42.1998 16.4414C42.0187 16.6225 41.7731 16.7242 41.517 16.7242C40.2935 16.7279 39.2048 17.5012 38.7983 18.6552H42.4825C42.7867 18.6552 43.0731 18.7985 43.2557 19.0418Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.5014 65.0002C42.0087 64.4203 41.5953 63.7711 41.2777 63.0692C40.8115 62.0386 40.5519 60.8945 40.5519 59.6898C40.5519 55.1572 44.2263 51.4829 48.7588 51.4829C50.3544 51.4829 51.8436 51.9382 53.1036 52.726V36.0346H28.0001V63.0692H26.069V35.3877L15.4483 21.2332L4.8276 35.3877V63.0692H0.96552C0.432278 63.0692 0 63.5014 0 64.0347C0 64.5679 0.432278 65.0002 0.96552 65.0002H42.5014ZM41.5174 39.8967C40.4522 39.8998 39.5894 40.7625 39.5863 41.8277V45.6898C39.5895 46.755 40.4522 47.6177 41.5174 47.6208H49.2415C50.3067 47.6177 51.1694 46.755 51.1726 45.6898V41.8277C51.1695 40.7625 50.3067 39.8998 49.2415 39.8967H41.5174ZM31.8622 39.8967C30.797 39.8998 29.9342 40.7625 29.9311 41.8277V45.6898C29.9343 46.755 30.797 47.6177 31.8622 47.6208H35.7243C36.7894 47.6177 37.6522 46.755 37.6553 45.6898V41.8277C37.6522 40.7625 36.7894 39.8998 35.7243 39.8967H31.8622ZM31.8622 52.4484C30.797 52.4515 29.9342 53.3143 29.9311 54.3795V58.2416C29.9343 59.3067 30.797 60.1695 31.8622 60.1726H35.7243C36.7894 60.1695 37.6522 59.3067 37.6553 58.2416V54.3795C37.6522 53.3143 36.7894 52.4515 35.7243 52.4484H31.8622ZM18.3449 39.8967C17.2797 39.8998 16.417 40.7625 16.4138 41.8277V45.6898C16.417 46.755 17.2797 47.6177 18.3449 47.6208H22.207C23.2722 47.6177 24.1349 46.755 24.138 45.6898V41.8277C24.1349 40.7625 23.2722 39.8998 22.207 39.8967H18.3449ZM18.3449 52.4484C17.2797 52.4515 16.417 53.3143 16.4138 54.3795V58.2416C16.417 59.3067 17.2797 60.1695 18.3449 60.1726H22.207C23.2722 60.1695 24.1349 59.3067 24.138 58.2416V54.3795C24.1349 53.3143 23.2722 52.4515 22.207 52.4484H18.3449ZM8.68968 39.8967C7.62449 39.8998 6.76176 40.7625 6.75864 41.8277V45.6898C6.76178 46.755 7.6245 47.6177 8.68968 47.6208H12.5518C13.6169 47.6177 14.4797 46.755 14.4828 45.6898V41.8277C14.4797 40.7625 13.617 39.8998 12.5518 39.8967H8.68968ZM8.68968 52.4484C7.62449 52.4515 6.76176 53.3143 6.75864 54.3795V63.0692H8.68968V54.3795H12.5518V63.0692H14.4828V54.3795C14.4797 53.3143 13.617 52.4515 12.5518 52.4484H8.68968ZM48.7588 65.9657C52.2248 65.9657 55.0346 63.1559 55.0346 59.6898C55.0346 56.2238 52.2248 53.4139 48.7588 53.4139C45.2927 53.4139 42.4829 56.2238 42.4829 59.6898C42.4829 63.1559 45.2927 65.9657 48.7588 65.9657ZM50.4647 62.1238L50.7785 62.0027C51.1236 61.8817 51.5001 62.033 51.5942 62.3356C51.7511 62.6685 51.5942 63.0317 51.2491 63.183L50.9354 63.304C50.6843 63.3948 50.402 63.4553 50.1196 63.4553C49.7431 63.4553 49.3352 63.3343 48.99 63.1225C48.8332 63.0317 48.6135 63.0014 48.4253 63.0317L46.6996 63.3948C46.3231 63.4856 45.9779 63.2738 45.8838 62.9106C45.7897 62.5475 46.0093 62.2146 46.3858 62.1238L46.8879 62.033C47.1389 61.5185 47.233 60.9436 47.2016 60.3686H46.6368C46.3231 60.3686 46.0407 60.0962 46.0407 59.7936C46.0407 59.491 46.2917 59.2186 46.6368 59.2186H46.9192C46.8879 59.2186 46.8879 59.1883 46.8879 59.1883C46.5741 58.5528 46.4172 58.0383 46.4172 57.6449C46.4172 56.3436 47.484 55.345 48.8332 55.345C50.151 55.345 51.2491 56.4042 51.2491 57.6752C51.2491 58.0081 50.9667 58.3107 50.5902 58.3107C50.2451 58.3107 49.9313 58.0383 49.9313 57.6752C49.9313 57.1002 49.4607 56.6463 48.8645 56.6463C48.2684 56.6463 47.7978 57.0699 47.7978 57.6449C47.7978 57.7357 47.8291 58.0383 48.1429 58.6739C48.2186 58.8198 48.2739 58.9853 48.3254 59.139C48.3379 59.1765 48.3502 59.2132 48.3625 59.2489H50.151C50.4647 59.2489 50.7471 59.5212 50.7471 59.8238C50.7471 60.1265 50.4961 60.3988 50.151 60.3988H48.5822C48.6135 60.8528 48.5822 61.3067 48.4566 61.7606C48.8959 61.7304 49.3666 61.8212 49.7431 62.0633C49.9627 62.1843 50.2451 62.2146 50.4647 62.1238Z", fill: colourFill })));
};

var ServiceIcon$i = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M30.0002 47.2273C35.0963 47.2273 39.2275 43.0961 39.2275 38C39.2275 32.904 35.0963 28.7728 30.0002 28.7728C24.9041 28.7728 20.7729 32.904 20.7729 38C20.7729 43.0961 24.9041 47.2273 30.0002 47.2273Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M30 27.4545L30 18.2272", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M30 57.7727L30 48.5455", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M40.5457 38L49.7729 38", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M10.2273 38L19.4546 38", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M16.8181 24.8182L23.3428 31.3428", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M36.5906 45.909L43.1152 52.4337", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M43.1155 24.8182L36.5908 31.3428", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M23.3425 44.5909L16.8179 51.1155", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M47.1367 24.8182C49.3207 24.8182 51.0912 23.0477 51.0912 20.8637C51.0912 18.6796 49.3207 16.9091 47.1367 16.9091C44.9526 16.9091 43.1821 18.6796 43.1821 20.8637C43.1821 23.0477 44.9526 24.8182 47.1367 24.8182Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M55.0454 41.9546C57.2294 41.9546 58.9999 40.1841 58.9999 38C58.9999 35.816 57.2294 34.0455 55.0454 34.0455C52.8613 34.0455 51.0908 35.816 51.0908 38C51.0908 40.1841 52.8613 41.9546 55.0454 41.9546Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M47.1367 59.0909C49.3207 59.0909 51.0912 57.3203 51.0912 55.1363C51.0912 52.9523 49.3207 51.1818 47.1367 51.1818C44.9526 51.1818 43.1821 52.9523 43.1821 55.1363C43.1821 57.3203 44.9526 59.0909 47.1367 59.0909Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M30 67C32.184 67 33.9545 65.2295 33.9545 63.0454C33.9545 60.8614 32.184 59.0909 30 59.0909C27.8159 59.0909 26.0454 60.8614 26.0454 63.0454C26.0454 65.2295 27.8159 67 30 67Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M12.8637 59.0909C15.0478 59.0909 16.8183 57.3203 16.8183 55.1363C16.8183 52.9523 15.0478 51.1818 12.8637 51.1818C10.6797 51.1818 8.90918 52.9523 8.90918 55.1363C8.90918 57.3203 10.6797 59.0909 12.8637 59.0909Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M4.95455 41.9546C7.13858 41.9546 8.90909 40.1841 8.90909 38C8.90909 35.816 7.13858 34.0455 4.95455 34.0455C2.77051 34.0455 1 35.816 1 38C1 40.1841 2.77051 41.9546 4.95455 41.9546Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M12.8637 24.8182C15.0478 24.8182 16.8183 23.0477 16.8183 20.8637C16.8183 18.6796 15.0478 16.9091 12.8637 16.9091C10.6797 16.9091 8.90918 18.6796 8.90918 20.8637C8.90918 23.0477 10.6797 24.8182 12.8637 24.8182Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M30 16.9091C32.184 16.9091 33.9545 15.1386 33.9545 12.9545C33.9545 10.7705 32.184 9 30 9C27.8159 9 26.0454 10.7705 26.0454 12.9545C26.0454 15.1386 27.8159 16.9091 30 16.9091Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var ServiceIcon$j = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M29.9999 45.9091C34.368 45.9091 37.909 42.368 37.909 38C37.909 33.6319 34.368 30.0909 29.9999 30.0909C25.6318 30.0909 22.0908 33.6319 22.0908 38C22.0908 42.368 25.6318 45.9091 29.9999 45.9091Z", fill: colourFill }),
        React__default.createElement("path", { d: "M47.1367 24.8182C49.3207 24.8182 51.0912 23.0477 51.0912 20.8637C51.0912 18.6796 49.3207 16.9091 47.1367 16.9091C44.9526 16.9091 43.1821 18.6796 43.1821 20.8637C43.1821 23.0477 44.9526 24.8182 47.1367 24.8182Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M55.0454 41.9546C57.2294 41.9546 58.9999 40.1841 58.9999 38C58.9999 35.816 57.2294 34.0455 55.0454 34.0455C52.8613 34.0455 51.0908 35.816 51.0908 38C51.0908 40.1841 52.8613 41.9546 55.0454 41.9546Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M47.1367 59.0909C49.3207 59.0909 51.0912 57.3203 51.0912 55.1363C51.0912 52.9523 49.3207 51.1818 47.1367 51.1818C44.9526 51.1818 43.1821 52.9523 43.1821 55.1363C43.1821 57.3203 44.9526 59.0909 47.1367 59.0909Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M30 67C32.184 67 33.9545 65.2295 33.9545 63.0454C33.9545 60.8614 32.184 59.0909 30 59.0909C27.8159 59.0909 26.0454 60.8614 26.0454 63.0454C26.0454 65.2295 27.8159 67 30 67Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M12.8637 59.0909C15.0478 59.0909 16.8183 57.3203 16.8183 55.1363C16.8183 52.9523 15.0478 51.1818 12.8637 51.1818C10.6797 51.1818 8.90918 52.9523 8.90918 55.1363C8.90918 57.3203 10.6797 59.0909 12.8637 59.0909Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M4.95455 41.9546C7.13858 41.9546 8.90909 40.1841 8.90909 38C8.90909 35.816 7.13858 34.0455 4.95455 34.0455C2.77051 34.0455 1 35.816 1 38C1 40.1841 2.77051 41.9546 4.95455 41.9546Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M12.8637 24.8182C15.0478 24.8182 16.8183 23.0477 16.8183 20.8637C16.8183 18.6796 15.0478 16.9091 12.8637 16.9091C10.6797 16.9091 8.90918 18.6796 8.90918 20.8637C8.90918 23.0477 10.6797 24.8182 12.8637 24.8182Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M30 16.9091C32.184 16.9091 33.9545 15.1386 33.9545 12.9545C33.9545 10.7705 32.184 9 30 9C27.8159 9 26.0454 10.7705 26.0454 12.9545C26.0454 15.1386 27.8159 16.9091 30 16.9091Z", fill: colourFill, stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3183 18.2273C31.3183 17.4993 30.7281 16.9091 30.0001 16.9091C29.2721 16.9091 28.6819 17.4993 28.6819 18.2273V27.4546C28.6819 27.4819 28.6827 27.5089 28.6844 27.5358C29.1153 27.4822 29.5543 27.4546 29.9998 27.4546C30.4455 27.4546 30.8847 27.4822 31.3158 27.5359C31.3174 27.509 31.3183 27.4819 31.3183 27.4546V18.2273ZM38.3016 31.4964C37.7573 30.8026 37.1279 30.1787 36.4291 29.6405L42.1836 23.8861C42.6984 23.3713 43.533 23.3713 44.0478 23.8861C44.5625 24.4008 44.5625 25.2355 44.0478 25.7503L38.3016 31.4964ZM40.464 39.3157C40.5176 38.8847 40.5453 38.4456 40.5453 38C40.5453 37.5545 40.5176 37.1154 40.464 36.6843C40.491 36.6827 40.5182 36.6818 40.5455 36.6818H49.7728C50.5008 36.6818 51.091 37.272 51.091 38C51.091 38.728 50.5008 39.3182 49.7728 39.3182H40.5455C40.5182 39.3182 40.491 39.3174 40.464 39.3157ZM35.6947 46.877C36.4411 46.3972 37.1231 45.8258 37.7247 45.1787L44.0477 51.5016C44.5625 52.0164 44.5625 52.851 44.0477 53.3658C43.5329 53.8806 42.6983 53.8806 42.1835 53.3658L35.6947 46.877ZM28.6844 48.4642C29.1153 48.5178 29.5543 48.5455 29.9998 48.5455C30.4455 48.5455 30.8847 48.5178 31.3158 48.4641C31.3174 48.491 31.3183 48.5182 31.3183 48.5455V57.7728C31.3183 58.5008 30.7281 59.0909 30.0001 59.0909C29.2721 59.0909 28.6819 58.5008 28.6819 57.7728V48.5455C28.6819 48.5182 28.6827 48.4911 28.6844 48.4642ZM21.6403 44.4293C22.1785 45.1281 22.8024 45.7575 23.4962 46.3018L17.7504 52.0476C17.2356 52.5624 16.401 52.5624 15.8862 52.0476C15.3714 51.5329 15.3714 50.6982 15.8862 50.1835L21.6403 44.4293ZM19.5356 36.6843C19.482 37.1153 19.4544 37.5544 19.4544 38C19.4544 38.4456 19.482 38.8847 19.5356 39.3158C19.5088 39.3174 19.4818 39.3182 19.4546 39.3182H10.2274C9.49935 39.3182 8.90918 38.728 8.90918 38C8.90918 37.272 9.49935 36.6818 10.2274 36.6818H19.4546C19.4818 36.6818 19.5088 36.6827 19.5356 36.6843ZM23.5334 29.6692C22.8371 30.2104 22.2105 30.837 21.6692 31.5333L15.8861 25.7503C15.3713 25.2355 15.3713 24.4008 15.8861 23.8861C16.4009 23.3713 17.2355 23.3713 17.7503 23.8861L23.5334 29.6692Z", fill: colourFill })));
};

var Icon$1 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M17.0836 14.5189C17.1498 14.9699 17.4743 15.3369 17.9021 15.4649V15.6682C17.9021 16.4318 18.521 17.0507 19.2845 17.0507C20.048 17.0507 20.667 16.4318 20.667 15.6682V15.5322C20.667 15.5282 20.6677 15.5264 20.6681 15.5252C20.6684 15.5245 20.6688 15.5237 20.6694 15.5229C20.6701 15.5217 20.6711 15.5204 20.6724 15.5191C20.6747 15.5168 20.6769 15.5155 20.6786 15.5148C20.6797 15.5143 20.6816 15.5136 20.6855 15.5136H23.5944C23.5984 15.5136 23.6002 15.5143 23.6014 15.5148C23.6031 15.5155 23.6053 15.5168 23.6075 15.5191C23.6084 15.5199 23.6091 15.5208 23.6097 15.5216C23.6107 15.5229 23.6114 15.5242 23.6118 15.5252C23.6123 15.5264 23.613 15.5282 23.613 15.5322V15.6682C23.613 16.4318 24.2319 17.0507 24.9955 17.0507C25.759 17.0507 26.3779 16.4318 26.3779 15.6682V15.4458C26.7681 15.3027 27.0561 14.948 27.103 14.5208C27.4342 14.6286 27.8215 14.5679 28.1117 14.2754C28.296 14.0896 28.3994 13.8385 28.3994 13.5768V12.9791C28.3994 12.9309 28.4124 12.8917 28.4279 12.8657C28.4424 12.8415 28.4575 12.8303 28.4713 12.8241C29.2391 12.4786 30.2726 12.2127 31.4694 12.087V12.2709C31.4694 12.9369 32.0093 13.4767 32.6752 13.4767C33.3411 13.4767 33.881 12.9369 33.881 12.2709V12.034C35.4035 12.1248 36.7124 12.4443 37.6222 12.8764C37.6343 12.8821 37.6483 12.8926 37.6619 12.9158C37.6765 12.941 37.6889 12.9791 37.6889 13.0263V13.3636C37.6889 13.7024 37.8486 14.0215 38.1199 14.2245L38.2554 14.326C38.4475 14.4698 38.6638 14.531 38.8733 14.525V30.4762C38.8733 30.6525 38.6764 30.8015 38.4812 30.7137C34.5802 28.9589 30.3848 27.6566 25.9731 26.8812C25.8403 26.8579 25.7517 26.7456 25.7517 26.6256V24.3717C25.7517 24.1744 25.7189 23.9683 25.6416 23.7672C25.0724 22.2853 24.0872 21.0513 22.8207 20.3643C22.3641 20.1167 21.8134 20.1153 21.3554 20.3618C20.0861 21.0448 19.0949 22.2814 18.5301 23.7725C18.4548 23.9713 18.4229 24.1748 18.4229 24.3692V25.823C18.4229 25.9625 18.3043 26.0844 18.15 26.079C17.5932 26.0597 17.0332 26.0478 16.4694 26.0478C12.7456 26.0478 9.11696 26.427 5.63294 27.1313C5.45669 27.1669 5.30762 27.0322 5.30762 26.8769V14.5249C5.51713 14.531 5.73337 14.4698 5.92556 14.3259L6.06097 14.2246C6.33226 14.0215 6.49198 13.7024 6.49198 13.3635V13.0263C6.49198 12.9791 6.50436 12.9409 6.51901 12.9158C6.53258 12.8926 6.54659 12.8821 6.55863 12.8764C7.4684 12.4443 8.77736 12.1248 10.2999 12.034V12.271C10.2999 12.9369 10.8397 13.4767 11.5056 13.4767C12.1715 13.4767 12.7114 12.9369 12.7114 12.271V12.085C13.9051 12.2085 14.9364 12.4767 15.7077 12.8238C15.7221 12.8303 15.7379 12.8421 15.7526 12.8667C15.7684 12.8931 15.7814 12.9325 15.7814 12.9808V13.5768C15.7814 13.8386 15.8848 14.0897 16.0692 14.2755C16.3611 14.5696 16.7511 14.6293 17.0836 14.5189Z", stroke: colourFill, strokeWidth: "1.5" }),
        React__default.createElement("path", { d: "M53.7861 15.6196C54.1643 15.2009 54.5425 14.7886 54.9207 14.3699C54.9517 14.3886 54.9889 14.4074 55.0199 14.4324C54.8712 14.6636 54.7223 14.901 54.5674 15.1322C54.5797 15.1384 54.5858 15.1509 54.5984 15.1572C54.5923 15.1447 54.5858 15.1322 54.5797 15.1197C54.7658 14.9885 54.9579 14.8635 55.144 14.7323C55.3671 14.5761 55.5843 14.4137 55.8074 14.2512L55.7951 14.2387C55.6338 14.5386 55.4728 14.8385 55.2989 15.1759C55.6338 14.9323 55.9564 14.6948 56.2787 14.4574C56.3097 14.4886 56.3407 14.5261 56.3717 14.5574C56.1548 14.8323 55.9376 15.1072 55.6648 15.4571C55.9997 15.3009 56.2725 15.1759 56.5392 15.051C55.7828 15.8945 55.6215 16.9879 55.2494 17.9814C55.0448 18.525 54.9394 19.1124 54.772 19.6747C54.5053 20.5494 54.2264 21.4242 53.9099 22.4364C55.1192 22.4364 56.2725 22.4364 57.4258 22.4364C57.4756 22.5052 57.5251 22.5801 57.5684 22.6489C55.8074 22.955 55.9812 24.2922 55.913 25.5793C55.7456 25.4793 55.6338 25.4293 55.541 25.3606C54.8835 24.8545 54.2325 24.3422 53.5815 23.8298C53.3087 23.6173 53.1412 23.6111 52.893 23.9485C52.4715 24.5296 51.932 25.0295 51.4607 25.5793C50.7228 26.4353 49.9912 27.3038 49.2594 28.1661C49.0797 28.3785 48.8935 28.5972 48.7387 28.8222C48.472 29.2033 48.2302 29.6032 47.9138 30.0843C47.8705 29.7844 47.8333 29.5407 47.7899 29.2221C47.6348 29.5157 47.4984 29.7594 47.362 30.0093C47.3187 29.9968 47.2689 29.9844 47.2256 29.9719C47.2566 29.6407 47.2876 29.3158 47.3248 28.9159C47.1141 29.1783 46.9405 29.4033 46.7666 29.6219C46.7294 29.6032 46.6861 29.5844 46.6489 29.5657C46.7666 29.1971 46.8784 28.8222 47.0271 28.3536C46.8038 28.5285 46.6551 28.6472 46.5064 28.7659C46.4753 28.7472 46.4505 28.7284 46.4194 28.716C46.6117 28.3411 46.8038 27.9599 47.0271 27.5163C46.8597 27.5787 46.7666 27.61 46.6738 27.6475L46.6612 27.635C47.4923 26.3479 48.0379 24.867 49.2843 23.8673C49.6564 23.5736 49.9415 23.1737 50.3633 22.7301C49.9725 22.5177 49.6748 22.3552 49.371 22.1928C49.5199 21.7616 49.861 21.5304 50.3633 21.5429C50.9212 21.5617 51.2066 21.2555 51.343 20.7494C51.4358 20.412 51.5848 20.0871 51.6343 19.7497C51.8699 17.9814 53.0853 16.7068 53.8233 15.1947C53.8728 15.2134 53.9164 15.2322 53.9658 15.2572C53.9038 15.3884 53.8417 15.5258 53.7861 15.657C53.7923 15.6633 53.8046 15.6633 53.8107 15.6696C53.7984 15.6446 53.7923 15.6321 53.7861 15.6196Z", fill: colourFill }),
        React__default.createElement("path", { d: "M42.8226 31.2715C42.8103 31.3028 42.7915 31.3278 42.7792 31.359C42.7605 31.3402 42.7421 31.3215 42.7295 31.3028C42.7605 31.2903 42.7854 31.2715 42.8164 31.259C42.8103 31.259 42.8226 31.2715 42.8226 31.2715Z", fill: colourFill }),
        React__default.createElement("path", { d: "M51.9566 17.8814C51.969 17.8626 51.9751 17.8439 51.9877 17.8251C51.9877 17.8376 51.9938 17.8564 51.9877 17.8564C51.9751 17.8626 51.9628 17.8689 51.9443 17.8751L51.9566 17.8814Z", fill: colourFill }),
        React__default.createElement("path", { d: "M0.855469 65.1272V61.4295C0.855469 61.2672 0.992224 61.1516 1.14517 61.1721C19.5285 63.6329 52.6075 60.6756 58.9804 60.0664C59.1207 60.0529 59.25 60.1612 59.25 60.3204V65.1272C59.25 65.2653 59.1381 65.3772 59 65.3772H1.10547C0.967397 65.3772 0.855469 65.2653 0.855469 65.1272Z", stroke: colourFill, strokeWidth: "1.5" }),
        React__default.createElement("path", { d: "M47.1177 40.2118C42.0736 42.0379 37.5872 44.422 33.8566 47.2375C33.8134 47.2701 33.7644 47.2876 33.7163 47.2907C22.7622 47.9942 11.8543 48.2558 0.956827 46.6967C0.840673 46.6801 0.75 46.5791 0.75 46.4541V32.2957C0.75 32.1848 0.820575 32.0948 0.914519 32.0659C5.78737 30.5653 11.0183 29.75 16.4693 29.75C28.2071 29.75 38.9333 33.5393 47.2117 39.793C47.283 39.8469 47.3091 39.9196 47.2942 40.0051C47.2786 40.095 47.2198 40.1749 47.1177 40.2118Z", stroke: colourFill, strokeWidth: "1.5" }),
        React__default.createElement("path", { d: "M40.7444 46.4166C45.2403 43.5872 49.9105 41.5436 58.9727 40.1241C59.1162 40.1017 59.25 40.2122 59.25 40.3649V40.3738V40.3828V40.3918V40.4008V40.4098V40.4188V40.4278V40.4368V40.4459V40.455V40.4641V40.4732V40.4823V40.4914V40.5006V40.5097V40.5189V40.5281V40.5373V40.5465V40.5557V40.565V40.5742V40.5835V40.5928V40.602V40.6114V40.6207V40.63V40.6394V40.6487V40.6581V40.6675V40.6769V40.6863V40.6957V40.7051V40.7146V40.724V40.7335V40.743V40.7525V40.762V40.7715V40.7811V40.7906V40.8002V40.8097V40.8193V40.8289V40.8385V40.8481V40.8577V40.8674V40.877V40.8867V40.8963V40.906V40.9157V40.9254V40.9351V40.9449V40.9546V40.9643V40.9741V40.9839V40.9936V41.0034V41.0132V41.023V41.0328V41.0427V41.0525V41.0623V41.0722V41.0821V41.0919V41.1018V41.1117V41.1216V41.1315V41.1415V41.1514V41.1613V41.1713V41.1812V41.1912V41.2012V41.2112V41.2212V41.2312V41.2412V41.2512V41.2612V41.2713V41.2813V41.2913V41.3014V41.3115V41.3216V41.3316V41.3417V41.3518V41.3619V41.3721V41.3822V41.3923V41.4024V41.4126V41.4227V41.4329V41.4431V41.4532V41.4634V41.4736V41.4838V41.494V41.5042V41.5144V41.5246V41.5349V41.5451V41.5553V41.5656V41.5758V41.5861V41.5964V41.6066V41.6169V41.6272V41.6375V41.6478V41.6581V41.6684V41.6787V41.689V41.6993V41.7096V41.72V41.7303V41.7406V41.751V41.7613V41.7717V41.7821V41.7924V41.8028V41.8132V41.8235V41.8339V41.8443V41.8547V41.8651V41.8755V41.8859V41.8963V41.9067V41.9171V41.9276V41.938V41.9484V41.9588V41.9693V41.9797V41.9902V42.0006V42.011V42.0215V42.0319V42.0424V42.0529V42.0633V42.0738V42.0842V42.0947V42.1052V42.1157V42.1261V42.1366V42.1471V42.1576V42.1681V42.1786V42.189V42.1995V42.21V42.2205V42.231V42.2415V42.252V42.2625V42.273V42.2835V42.294V42.3045V42.315V42.3256V42.3361V42.3466V42.3571V42.3676V42.3781V42.3886V42.3991V42.4096V42.4202V42.4307V42.4412V42.4517V42.4622V42.4727V42.4832V42.4938V42.5043V42.5148V42.5253V42.5358V42.5463V42.5568V42.5674V42.5779V42.5884V42.5989V42.6094V42.6199V42.6304V42.6409V42.6514V42.6619V42.6724V42.6829V42.6934V42.7039V42.7144V42.7249V42.7354V42.7459V42.7564V42.7669V42.7773V42.7878V42.7983V42.8088V42.8193V42.8297V42.8402V42.8507V42.8611V42.8716V42.882V42.8925V42.903V42.9134V42.9239V42.9343V42.9447V42.9552V42.9656V42.976V42.9865V42.9969V43.0073V43.0177V43.0281V43.0386V43.049V43.0594V43.0698V43.0802V43.0905V43.1009V43.1113V43.1217V43.1321V43.1424V43.1528V43.1631V43.1735V43.1838V43.1942V43.2045V43.2149V43.2252V43.2355V43.2458V43.2561V43.2664V43.2767V43.287V43.2973V43.3076V43.3179V43.3282V43.3384V43.3487V43.3589V43.3692V43.3794V43.3897V43.3999V43.4101V43.4203V43.4305V43.4407V43.4509V43.4611V43.4713V43.4815V43.4917V43.5018V43.512V43.5221V43.5323V43.5424V43.5525V43.5626V43.5727V43.5828V43.5929V43.603V43.6131V43.6232V43.6332V43.6433V43.6533V43.6634V43.6734V43.6834V43.6934V43.7035V43.7134V43.7234V43.7334V43.7434V43.7533V43.7633V43.7732V43.7832V43.7931V43.803V43.8129V43.8228V43.8327V43.8426V43.8525V43.8623V43.8722V43.882V43.8918V43.9017V43.9115V43.9213V43.9311V43.9408V43.9506V43.9604V43.9701V43.9799V43.9896V43.9993V44.009V44.0187V44.0284V44.0381V44.0477V44.0574V44.067V44.0766V44.0863V44.0959V44.1055V44.115V44.1246V44.1342V44.1437V44.1533V44.1628V44.1723V44.1818V44.1913V44.2008V44.2102V44.2197V44.2291V44.2385V44.248V44.2574V44.2667V44.2761V44.2855V44.2948V44.3042V44.3135V44.3228V44.3321V44.3414V44.3507V44.3599V44.3692V44.3784V44.3876V44.3968V44.406V44.4152V44.4244V44.4335V44.4426V44.4518V44.4609V44.47V44.479V44.4881V44.4972V44.5062V44.5152V44.5242V44.5332V44.5422V44.5511V44.5601V44.569V44.5779V44.5868V44.5957V44.6046V44.6134V44.6223V44.6311V44.6399V44.6487V44.6575V44.6663V44.675V44.6837V44.6924V44.7011V44.7098V44.7185V44.7271V44.7358V44.7444V44.753V44.7616V44.7701V44.7787V44.7872V44.7957V44.8042V44.8127V44.8212V44.8296V44.8381V44.8465V44.8549V44.8632V44.8716V44.8799V44.8883V44.8966V44.9049V44.9131V44.9214V44.9296V44.9378V44.946V44.9542V44.9624V44.9705V44.9787V44.9868V44.9949V45.0029V45.011V45.019V45.027V45.035V45.043V45.051V45.0589V45.0668V45.0747V45.0826V45.0904V45.0983V45.1061V45.1139V45.1217V45.1295V45.1372V45.1449V45.1526V45.1603V45.168V45.1756V45.1832V45.1908V45.1984V45.206V45.2135V45.221V45.2285V45.236V45.2435V45.2509V45.2583V45.2657V45.2731V45.2804V45.2877V45.2951V45.3023V45.3096C59.25 45.4406 59.147 45.5523 59.0087 45.559C53.949 45.805 48.8885 46.1884 43.8398 46.5708C42.8564 46.6453 41.8734 46.7198 40.891 46.7932C40.8068 46.7995 40.7597 46.7782 40.7314 46.7585C40.6978 46.7351 40.668 46.6972 40.6514 46.6492C40.6349 46.6011 40.6365 46.5577 40.6467 46.5261C40.6546 46.5015 40.6745 46.4606 40.7444 46.4166Z", stroke: colourFill, strokeWidth: "1.5" }),
        React__default.createElement("path", { d: "M0.755859 57.757V50.1325C0.755859 49.9701 0.892587 49.8546 1.04545 49.875C19.4593 52.3377 52.6004 49.375 58.9802 48.7651C59.1207 48.7517 59.25 48.8601 59.25 49.0192V56.6562C59.25 56.8002 59.1543 56.8889 59.0455 56.8994C56.1074 57.1824 46.1666 58.0919 34.6589 58.6122C23.1365 59.133 10.1002 59.2605 0.946619 57.9952C0.845877 57.9813 0.755859 57.8953 0.755859 57.757Z", stroke: colourFill, strokeWidth: "1.5" })));
};

var Icon$2 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M16.4694 26.7978C17.3747 26.7978 18.2738 26.8291 19.1729 26.8728V24.1985C19.731 22.6115 20.7913 21.3806 22.0873 20.8432C23.3833 21.3868 24.4374 22.6177 25.0017 24.1985V27.4789C30.2166 28.3099 35.1338 29.8845 39.6233 32.0776V13.7827H39.5923C39.524 13.4952 39.3502 13.2141 39.0899 12.9579V14.0139L38.4389 13.5265V12.4643C37.2669 11.752 35.3323 11.2771 33.131 11.2584V12.7267H32.2194V11.2771C30.3469 11.3708 28.7097 11.7895 27.6494 12.4018V13.6765L27.1658 14.1638V12.7267C26.7502 13.0454 26.4835 13.4078 26.3907 13.7889H26.3597V14.7636H25.6279V16.3007H24.363V14.7636H19.917V16.3007H18.6521V14.7636H17.8211V13.7889H17.7901C17.6971 13.4078 17.4305 13.0516 17.015 12.7267V14.1638L16.5314 13.6765V12.4018C15.4648 11.7895 13.834 11.3646 11.9614 11.2771V12.7267H11.0499V11.2584C8.84856 11.2771 6.91392 11.752 5.74198 12.4643V13.5265L5.0909 14.0139V12.9579C4.83046 13.2141 4.65682 13.4952 4.58862 13.7827H4.55762V28.1287C8.3649 27.2664 12.3582 26.7978 16.4694 26.7978Z", fill: colourFill }),
        React__default.createElement("path", { d: "M53.7861 15.6196C54.1643 15.2009 54.5425 14.7886 54.9207 14.3699C54.9517 14.3886 54.9889 14.4074 55.0199 14.4324C54.8712 14.6636 54.7223 14.901 54.5674 15.1322C54.5797 15.1384 54.5858 15.1509 54.5984 15.1572C54.5923 15.1447 54.5858 15.1322 54.5797 15.1197C54.7658 14.9885 54.9579 14.8635 55.144 14.7323C55.3671 14.5761 55.5843 14.4137 55.8074 14.2512L55.7951 14.2387C55.6338 14.5386 55.4728 14.8385 55.2989 15.1759C55.6338 14.9323 55.9564 14.6948 56.2787 14.4574C56.3097 14.4886 56.3407 14.5261 56.3717 14.5574C56.1548 14.8323 55.9376 15.1072 55.6648 15.4571C55.9997 15.3009 56.2725 15.1759 56.5392 15.051C55.7828 15.8945 55.6215 16.9879 55.2494 17.9814C55.0448 18.525 54.9394 19.1124 54.772 19.6747C54.5053 20.5494 54.2264 21.4242 53.9099 22.4364C55.1192 22.4364 56.2725 22.4364 57.4258 22.4364C57.4756 22.5052 57.5251 22.5801 57.5684 22.6489C55.8074 22.955 55.9812 24.2922 55.913 25.5793C55.7456 25.4793 55.6338 25.4293 55.541 25.3606C54.8835 24.8545 54.2325 24.3422 53.5815 23.8298C53.3087 23.6173 53.1412 23.6111 52.893 23.9485C52.4715 24.5296 51.932 25.0295 51.4607 25.5793C50.7228 26.4353 49.9912 27.3038 49.2594 28.1661C49.0797 28.3785 48.8935 28.5972 48.7387 28.8222C48.472 29.2033 48.2302 29.6032 47.9138 30.0843C47.8705 29.7844 47.8333 29.5407 47.7899 29.2221C47.6348 29.5157 47.4984 29.7594 47.362 30.0093C47.3187 29.9968 47.2689 29.9844 47.2256 29.9719C47.2566 29.6407 47.2876 29.3158 47.3248 28.9159C47.1141 29.1783 46.9405 29.4033 46.7666 29.6219C46.7294 29.6032 46.6861 29.5844 46.6489 29.5657C46.7666 29.1971 46.8784 28.8222 47.0271 28.3536C46.8038 28.5285 46.6551 28.6472 46.5064 28.7659C46.4753 28.7472 46.4505 28.7284 46.4194 28.716C46.6117 28.3411 46.8038 27.9599 47.0271 27.5163C46.8597 27.5787 46.7666 27.61 46.6738 27.6475L46.6612 27.635C47.4923 26.3479 48.0379 24.867 49.2843 23.8673C49.6564 23.5736 49.9415 23.1737 50.3633 22.7301C49.9725 22.5177 49.6748 22.3552 49.371 22.1928C49.5199 21.7616 49.861 21.5304 50.3633 21.5429C50.9212 21.5617 51.2066 21.2555 51.343 20.7494C51.4358 20.412 51.5848 20.0871 51.6343 19.7497C51.8699 17.9814 53.0853 16.7068 53.8233 15.1947C53.8728 15.2134 53.9164 15.2322 53.9658 15.2572C53.9038 15.3884 53.8417 15.5258 53.7861 15.657C53.7923 15.6633 53.8046 15.6633 53.8107 15.6696C53.7984 15.6446 53.7923 15.6321 53.7861 15.6196Z", fill: colourFill }),
        React__default.createElement("path", { d: "M42.8226 31.2715C42.8103 31.3028 42.7915 31.3278 42.7792 31.359C42.7605 31.3402 42.7421 31.3215 42.7295 31.3028C42.7605 31.2903 42.7854 31.2715 42.8164 31.259C42.8103 31.259 42.8226 31.2715 42.8226 31.2715Z", fill: colourFill }),
        React__default.createElement("path", { d: "M51.9566 17.8814C51.969 17.8626 51.9751 17.8439 51.9877 17.8251C51.9877 17.8376 51.9938 17.8564 51.9877 17.8564C51.9751 17.8626 51.9628 17.8689 51.9443 17.8751L51.9566 17.8814Z", fill: colourFill }),
        React__default.createElement("path", { d: "M0.105469 59.3137V65.1747H60V58.2604C60 58.2604 20.0732 62.3455 0.105469 59.3137Z", fill: colourFill }),
        React__default.createElement("path", { d: "M34.0672 47.0671C38.1908 43.9057 43.2941 41.2752 49.0979 39.3694C40.5097 32.3463 29.0569 28.0475 16.4693 28.0475C10.684 28.0475 5.14046 28.9535 0 30.6155V46.3612C11.3599 48.0856 22.7135 47.8045 34.0672 47.0671Z", fill: colourFill }),
        React__default.createElement("path", { d: "M60 38.2582C48 40 43.2424 42.7521 37.2979 46.8547C44.8652 46.3205 52.4326 45.6521 60 45.3109C60 45.3109 60 40 60 38.2582Z", fill: colourFill }),
        React__default.createElement("path", { d: "M60 56.6066C60 56.6066 20.0054 60.6976 0.00585938 57.6642V48.0168C20.0054 51.0502 60 46.9592 60 46.9592V56.6066Z", fill: colourFill })));
};

var Icon$3 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M24.9012 48.1605C24.9775 48.3131 25.0573 48.4638 25.1389 48.611C27.2672 48.5011 29.188 47.4085 30.3621 45.6597C30.3284 45.5959 30.2947 45.5338 30.2628 45.4682C29.071 43.0951 29.2093 40.3957 30.3958 38.223C29.7804 37.2883 28.9237 36.4937 27.8596 35.9475C27.0189 35.5165 26.125 35.2735 25.1938 35.2203C24.7699 35.9794 24.4152 36.7828 24.135 37.6271C22.9751 41.1246 23.2464 44.8669 24.9012 48.1605Z", fill: colourFill }),
        React__default.createElement("path", { d: "M49.5652 35.7789C47.9122 32.4854 45.0744 30.0325 41.5751 28.8725C38.5245 27.8616 35.2912 27.9396 32.3293 29.0712C34.4824 30.3304 36.256 32.081 37.5259 34.1792C40.2733 34.2873 42.884 35.8446 44.2036 38.4713C46.1333 42.3147 44.576 47.0112 40.7326 48.9409C39.6791 49.4694 38.5599 49.7373 37.4532 49.7656C36.1461 51.8798 34.3547 53.6091 32.2246 54.8275C32.4445 54.9127 32.6662 54.9925 32.8915 55.067C36.3908 56.2269 40.1314 55.9555 43.425 54.3008C46.7186 52.6478 49.1715 49.81 50.3314 46.3106C51.4913 42.8131 51.2182 39.0725 49.5652 35.7789Z", fill: colourFill }),
        React__default.createElement("path", { d: "M36.6533 34.846C35.3426 32.6379 33.436 30.8377 31.0948 29.6369C29.1988 28.665 27.1503 28.1542 25.0805 28.1134C24.1547 29.9473 24.0837 32.1714 25.0521 34.1206C26.1695 34.1561 27.2975 34.431 28.3563 34.9755C29.6759 35.653 30.7206 36.6569 31.4424 37.8381C32.4711 37.7814 33.4803 37.4852 34.3813 36.9708C35.3089 36.4423 36.0786 35.7186 36.6533 34.846Z", fill: colourFill }),
        React__default.createElement("path", { d: "M31.4212 46.034C29.3035 49.4446 24.873 50.7181 21.2389 48.854C17.4132 46.8906 15.8968 42.1817 17.8584 38.3543C17.8868 38.2993 17.9152 38.2443 17.9453 38.1911C16.7623 35.9918 16.1611 33.5815 16.1664 31.141C14.6659 32.3417 13.4244 33.8564 12.5216 35.6176C10.8385 38.897 10.5352 42.6358 11.665 46.144C12.7948 49.6522 15.2228 52.5112 18.5022 54.1926C21.7816 55.8758 25.5204 56.179 29.0286 55.0493C32.5368 53.9195 35.3959 51.4914 37.0772 48.212C37.753 46.8942 38.2053 45.5019 38.4341 44.0812C36.2827 45.3068 33.8652 45.9772 31.4212 46.034Z", fill: colourFill }),
        React__default.createElement("path", { d: "M34.9239 37.9197C33.764 38.5813 32.503 38.9094 31.2526 38.9378C30.3303 40.761 30.2487 42.9816 31.2224 44.9468C33.5388 44.9237 35.8249 44.3118 37.893 43.1324C39.9628 41.9529 41.6548 40.2981 42.8555 38.3152C41.708 36.5434 39.7996 35.4189 37.6713 35.2788C37.0115 36.3412 36.0857 37.2582 34.9239 37.9197Z", fill: colourFill }),
        React__default.createElement("path", { d: "M23.0996 37.283C23.387 36.4157 23.7488 35.5874 24.1762 34.8035C22.2057 31.0984 23.5306 26.4586 27.202 24.3658C30.8698 22.2747 35.538 23.4985 37.7213 27.0794C39.1419 27.1273 40.5537 27.3809 41.9212 27.8332C42.9038 28.1595 43.8385 28.5799 44.7146 29.0871C44.4645 27.427 43.9094 25.8113 43.0527 24.309C41.2277 21.1059 38.2658 18.8073 34.7097 17.8336C31.1554 16.8599 27.4343 17.3281 24.2312 19.1531C21.0281 20.9782 18.7295 23.9401 17.7557 27.4962C16.782 31.0523 17.2503 34.7715 19.0753 37.9747C19.9302 39.4769 21.0387 40.7788 22.3388 41.8394C22.3512 40.3105 22.603 38.7764 23.0996 37.283Z", fill: colourFill }),
        React__default.createElement("path", { d: "M55.2135 46.5237C54.9117 46.945 54.7045 47.4369 54.6134 47.9604C53.9186 51.902 53.4452 54.9658 50.373 56.6069C48.4619 57.6276 46.3435 57.7475 44.4109 57.1164C44.193 58.925 43.4785 60.7054 42.2514 62.1968C39.574 65.4526 35.6338 65.3804 32.0704 64.3245C31.5935 64.1834 31.0898 64.1623 30.6057 64.268C26.9423 65.0613 24.1202 65.7418 21.5482 63.3038C19.8085 61.6556 18.8993 59.3622 18.8368 57.0018C16.956 57.5782 14.8555 57.4778 12.8871 56.5576C9.17911 54.8247 8.02883 50.7774 7.86986 46.8128C7.84842 46.2822 7.71089 45.7622 7.46976 45.2986C5.63896 41.7994 4.16717 39.127 5.53715 35.7495C6.5106 33.3486 8.39677 31.6633 10.608 30.923C9.59528 29.2025 9.0898 27.0889 9.30235 24.8695C9.71495 20.5489 12.9604 18.1462 16.4309 16.7818C16.8953 16.5985 17.315 16.3006 17.6544 15.9127C20.205 12.9794 22.1305 10.6631 25.5438 11.0404C27.789 11.2889 29.727 12.5229 31.0559 14.3209C32.2651 12.7908 33.9619 11.6485 35.966 11.1884C39.9205 10.2806 43.0498 12.8543 45.3272 15.9797C45.6326 16.3993 46.0256 16.736 46.4739 16.9616C49.8586 18.6645 52.5039 19.9178 53.2202 23.521C53.7346 26.107 53.0969 28.6789 51.6698 30.6709C53.9721 31.3407 56.0369 33.0665 57.2122 35.5997C59.0109 39.4849 57.4676 43.3771 55.2135 46.5237ZM54.8706 35.8165C53.8025 33.5125 51.9252 31.9454 49.8318 31.3355C51.1286 29.5251 51.7091 27.1876 51.2411 24.836C50.5892 21.5607 48.185 20.4202 45.1093 18.8742C44.702 18.6698 44.3448 18.363 44.0662 17.9823C41.9942 15.1424 39.1525 12.8014 35.5569 13.6264C33.7351 14.0442 32.1936 15.0807 31.0951 16.4733C29.8877 14.8374 28.1266 13.7163 26.085 13.4907C22.9825 13.1487 21.232 15.2535 18.9136 17.9206C18.6064 18.2731 18.2242 18.5446 17.8026 18.7103C14.6483 19.9513 11.6994 22.1354 11.3225 26.0629C11.1296 28.0813 11.5886 30.0028 12.5103 31.5664C10.4991 32.238 8.78615 33.7699 7.90022 35.9522C6.65528 39.023 7.9931 41.4522 9.65779 44.6322C9.87749 45.0536 10.0025 45.526 10.0222 46.009C10.1668 49.6139 11.2117 53.2929 14.584 54.867C16.3737 55.7026 18.2831 55.7943 19.9924 55.2707C20.0496 57.4161 20.8766 59.5014 22.4573 60.9998C24.7954 63.2157 27.3603 62.5969 30.6897 61.8759C31.1309 61.7807 31.5881 61.7984 32.0222 61.9271C35.2604 62.8878 38.8435 62.953 41.2762 59.9933C42.3907 58.6377 43.0409 57.0194 43.2392 55.3747C44.995 55.9476 46.9204 55.8401 48.6583 54.9129C51.4501 53.4216 51.8823 50.6363 52.5129 47.0526C52.5968 46.5784 52.7844 46.1306 53.0594 45.7463C55.1046 42.8888 56.5085 39.3491 54.8706 35.8165Z", fill: colourFill })));
};

var Icon$4 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.0003 22L17.5005 17L24.0005 11.52L31.0003 15L39.6845 11.52L45.5003 17L52.5003 23.5L51.5003 31L57.0003 38.5L54.5003 47L52.5003 53.5L47.8687 56.4L43.2371 56.98L39.6845 63.5H31.0003H22.0003L19.5003 56.4L14.5005 55.5L11.0003 52.5L7 40.5L7.00049 34.5L11.0003 31V22ZM24.9012 48.1605C24.9775 48.3131 25.0573 48.4638 25.1389 48.611C27.2672 48.5011 29.188 47.4085 30.3621 45.6597L30.3415 45.6207C30.3147 45.5704 30.2882 45.5204 30.2628 45.4682C29.071 43.0951 29.2093 40.3957 30.3958 38.223C29.7804 37.2883 28.9237 36.4937 27.8596 35.9475C27.0189 35.5165 26.125 35.2735 25.1938 35.2203C24.7699 35.9794 24.4152 36.7828 24.135 37.6271C22.9751 41.1246 23.2464 44.8669 24.9012 48.1605ZM41.5751 28.8725C45.0744 30.0325 47.9122 32.4854 49.5652 35.7789C51.2182 39.0725 51.4913 42.8131 50.3314 46.3106C49.1715 49.81 46.7186 52.6478 43.425 54.3008C40.1314 55.9555 36.3908 56.2269 32.8915 55.067C32.6662 54.9925 32.4445 54.9127 32.2246 54.8275C34.3547 53.6091 36.1461 51.8798 37.4532 49.7656C38.5599 49.7373 39.6791 49.4694 40.7326 48.9409C44.576 47.0112 46.1333 42.3147 44.2036 38.4713C42.884 35.8446 40.2733 34.2873 37.5259 34.1792C36.256 32.081 34.4824 30.3304 32.3293 29.0712C35.2912 27.9396 38.5245 27.8616 41.5751 28.8725ZM36.6533 34.846C35.3426 32.6379 33.436 30.8377 31.0948 29.6369C29.1988 28.665 27.1503 28.1542 25.0805 28.1134C24.1547 29.9473 24.0837 32.1714 25.0521 34.1206C26.1695 34.1561 27.2975 34.431 28.3563 34.9755C29.6759 35.653 30.7206 36.6569 31.4424 37.8381C32.4711 37.7814 33.4803 37.4852 34.3813 36.9708C35.3089 36.4423 36.0786 35.7186 36.6533 34.846ZM21.2389 48.854C24.873 50.7181 29.3035 49.4446 31.4212 46.034C33.8652 45.9772 36.2827 45.3068 38.4341 44.0812C38.2053 45.5019 37.753 46.8942 37.0772 48.212C35.3959 51.4914 32.5368 53.9195 29.0286 55.0493C25.5204 56.179 21.7816 55.8758 18.5022 54.1926C15.2228 52.5112 12.7948 49.6522 11.665 46.144C10.5352 42.6358 10.8385 38.897 12.5216 35.6176C13.4244 33.8564 14.6659 32.3417 16.1664 31.141C16.1611 33.5815 16.7623 35.9918 17.9453 38.1911C17.9152 38.2443 17.8868 38.2993 17.8584 38.3543C15.8968 42.1817 17.4132 46.8906 21.2389 48.854ZM34.9239 37.9197C33.764 38.5813 32.503 38.9094 31.2526 38.9378C30.3303 40.761 30.2487 42.9816 31.2224 44.9468C33.5387 44.9237 35.8249 44.3118 37.893 43.1324C39.9628 41.9529 41.6548 40.2981 42.8555 38.3152C41.708 36.5434 39.7996 35.4189 37.6713 35.2788C37.0115 36.3412 36.0857 37.2582 34.9239 37.9197ZM24.1762 34.8035C23.7488 35.5874 23.387 36.4157 23.0996 37.283C22.603 38.7764 22.3512 40.3105 22.3388 41.8394C21.0387 40.7788 19.9302 39.4769 19.0753 37.9747C17.2503 34.7715 16.782 31.0523 17.7557 27.4962C18.7295 23.9401 21.0281 20.9782 24.2312 19.1531C27.4343 17.3281 31.1554 16.8599 34.7097 17.8336C38.2658 18.8073 41.2277 21.1059 43.0527 24.309C43.9094 25.8113 44.4645 27.427 44.7146 29.0871C43.8385 28.5799 42.9038 28.1595 41.9212 27.8332C40.5537 27.3809 39.1419 27.1273 37.7213 27.0794C35.538 23.4985 30.8698 22.2747 27.202 24.3658C23.5306 26.4586 22.2057 31.0984 24.1762 34.8035Z", fill: colourFill }),
        React__default.createElement("path", { d: "M55.2135 46.5237C54.9117 46.945 54.7045 47.4369 54.6134 47.9604C53.9186 51.902 53.4452 54.9658 50.373 56.6069C48.4619 57.6276 46.3435 57.7475 44.4109 57.1164C44.193 58.925 43.4785 60.7054 42.2514 62.1968C39.574 65.4526 35.6338 65.3804 32.0704 64.3245C31.5935 64.1834 31.0898 64.1623 30.6057 64.268C26.9423 65.0613 24.1202 65.7418 21.5482 63.3038C19.8085 61.6556 18.8993 59.3622 18.8368 57.0018C16.956 57.5782 14.8555 57.4778 12.8871 56.5576C9.17911 54.8247 8.02883 50.7774 7.86986 46.8128C7.84842 46.2822 7.71089 45.7622 7.46976 45.2986C5.63896 41.7994 4.16717 39.127 5.53715 35.7495C6.5106 33.3486 8.39677 31.6633 10.608 30.923C9.59528 29.2025 9.0898 27.0889 9.30235 24.8695C9.71495 20.5489 12.9604 18.1462 16.4309 16.7818C16.8953 16.5985 17.315 16.3006 17.6544 15.9127C20.205 12.9794 22.1305 10.6631 25.5438 11.0404C27.789 11.2889 29.727 12.5229 31.0559 14.3209C32.2651 12.7908 33.9619 11.6485 35.966 11.1884C39.9205 10.2806 43.0498 12.8543 45.3272 15.9797C45.6326 16.3993 46.0256 16.736 46.4739 16.9616C49.8586 18.6645 52.5039 19.9178 53.2202 23.521C53.7346 26.107 53.0969 28.6789 51.6698 30.6709C53.9721 31.3407 56.0369 33.0665 57.2122 35.5997C59.0109 39.4849 57.4676 43.3771 55.2135 46.5237ZM54.8706 35.8165C53.8025 33.5125 51.9252 31.9454 49.8318 31.3355C51.1286 29.5251 51.7091 27.1876 51.2411 24.836C50.5892 21.5607 48.185 20.4202 45.1093 18.8742C44.702 18.6698 44.3448 18.363 44.0662 17.9823C41.9942 15.1424 39.1525 12.8014 35.5569 13.6264C33.7351 14.0442 32.1936 15.0807 31.0951 16.4733C29.8877 14.8374 28.1266 13.7163 26.085 13.4907C22.9825 13.1487 21.232 15.2535 18.9136 17.9206C18.6064 18.2731 18.2242 18.5446 17.8026 18.7103C14.6483 19.9513 11.6994 22.1354 11.3225 26.0629C11.1296 28.0813 11.5886 30.0028 12.5103 31.5664C10.4991 32.238 8.78615 33.7699 7.90022 35.9522C6.65528 39.023 7.9931 41.4522 9.65779 44.6322C9.87749 45.0536 10.0025 45.526 10.0222 46.009C10.1668 49.6139 11.2117 53.2929 14.584 54.867C16.3737 55.7026 18.2831 55.7943 19.9924 55.2707C20.0496 57.4161 20.8766 59.5014 22.4573 60.9998C24.7954 63.2157 27.3603 62.5969 30.6897 61.8759C31.1309 61.7807 31.5881 61.7984 32.0222 61.9271C35.2604 62.8878 38.8435 62.953 41.2762 59.9933C42.3907 58.6377 43.0409 57.0194 43.2392 55.3747C44.995 55.9476 46.9204 55.8401 48.6583 54.9129C51.4501 53.4216 51.8823 50.6363 52.5129 47.0526C52.5968 46.5784 52.7844 46.1306 53.0594 45.7463C55.1046 42.8888 56.5085 39.3491 54.8706 35.8165Z", fill: colourFill })));
};

var ServiceIcon$k = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.7666 38.3833C6.7666 37.8955 7.16208 37.5 7.64993 37.5H51.8166C52.3044 37.5 52.6999 37.8955 52.6999 38.3833V61.35C52.6999 62.8136 51.5135 64 50.0499 64H9.4166C7.95305 64 6.7666 62.8136 6.7666 61.35V38.3833ZM8.53327 39.2667V61.35C8.53327 61.8379 8.92875 62.2333 9.4166 62.2333H50.0499C50.5378 62.2333 50.9333 61.8379 50.9333 61.35V39.2667H8.53327Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 33.0833C5 32.5955 5.39548 32.2 5.88333 32.2H53.5833C54.0712 32.2 54.4667 32.5955 54.4667 33.0833V37.5C54.4667 38.4757 53.6757 39.2667 52.7 39.2667H6.76667C5.79096 39.2667 5 38.4757 5 37.5V33.0833ZM6.76667 33.9667V37.5H52.7V33.9667H6.76667Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9055 20.1709C15.0729 19.9578 15.329 19.8333 15.6 19.8333H19.1334C19.6212 19.8333 20.0167 20.2288 20.0167 20.7167C20.0167 21.2045 19.6212 21.6 19.1334 21.6H16.0294L6.57795 33.6291C6.27655 34.0127 5.72124 34.0793 5.33763 33.7779C4.95402 33.4765 4.88738 32.9212 5.18879 32.5376L14.9055 20.1709Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.4502 20.7167C39.4502 20.2288 39.8457 19.8333 40.3335 19.8333H43.8669C44.1379 19.8333 44.394 19.9578 44.5614 20.1709L54.2781 32.5376C54.5795 32.9212 54.5129 33.4765 54.1293 33.7779C53.7457 34.0793 53.1904 34.0127 52.8889 33.6291L43.4375 21.6H40.3335C39.8457 21.6 39.4502 21.2045 39.4502 20.7167Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.7334 35.7333C30.2213 35.7333 30.6168 36.1288 30.6168 36.6167V43.6833C30.6168 44.1712 30.2213 44.5667 29.7334 44.5667C29.2456 44.5667 28.8501 44.1712 28.8501 43.6833V36.6167C28.8501 36.1288 29.2456 35.7333 29.7334 35.7333Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6597 24.6033C16.8265 24.3809 17.0883 24.25 17.3663 24.25H19.133C19.6209 24.25 20.0163 24.6455 20.0163 25.1333C20.0163 25.6212 19.6209 26.0167 19.133 26.0167H17.808L16.483 27.7833H42.983L41.658 26.0167H40.333C39.8452 26.0167 39.4497 25.6212 39.4497 25.1333C39.4497 24.6455 39.8452 24.25 40.333 24.25H42.0997C42.3777 24.25 42.6395 24.3809 42.8063 24.6033L45.4563 28.1367C45.6571 28.4043 45.6894 28.7624 45.5398 29.0617C45.3901 29.361 45.0843 29.55 44.7497 29.55H14.7163C14.3818 29.55 14.0759 29.361 13.9263 29.0617C13.7766 28.7624 13.8089 28.4043 14.0097 28.1367L16.6597 24.6033Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9 12.7667C20.4121 12.7667 20.0167 13.1621 20.0167 13.65V27.7833H39.45V13.65C39.45 13.1621 39.0545 12.7667 38.5667 12.7667H20.9ZM18.25 13.65C18.25 12.1864 19.4364 11 20.9 11H38.5667C40.0302 11 41.2167 12.1864 41.2167 13.65V28.6667C41.2167 29.1545 40.8212 29.55 40.3333 29.55H19.1333C18.6455 29.55 18.25 29.1545 18.25 28.6667V13.65Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.7336 42.8C28.27 42.8 27.0836 43.9865 27.0836 45.45V48.1H32.3836V45.45C32.3836 43.9865 31.1971 42.8 29.7336 42.8ZM25.3169 45.45C25.3169 43.0108 27.2943 41.0334 29.7336 41.0334C32.1728 41.0334 34.1502 43.0108 34.1502 45.45V48.9834C34.1502 49.4712 33.7547 49.8667 33.2669 49.8667H26.2002C25.7124 49.8667 25.3169 49.4712 25.3169 48.9834V45.45Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.317 49.8667C24.8291 49.8667 24.4337 50.2622 24.4337 50.75V57.8167C24.4337 58.3045 24.8291 58.7 25.317 58.7H34.1503C34.6382 58.7 35.0337 58.3045 35.0337 57.8167V50.75C35.0337 50.2622 34.6382 49.8667 34.1503 49.8667H25.317ZM22.667 50.75C22.667 49.2865 23.8534 48.1 25.317 48.1H34.1503C35.6139 48.1 36.8003 49.2865 36.8003 50.75V57.8167C36.8003 59.2802 35.6139 60.4667 34.1503 60.4667H25.317C23.8534 60.4667 22.667 59.2802 22.667 57.8167V50.75Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.733 53.4C29.2452 53.4 28.8497 53.7955 28.8497 54.2833C28.8497 54.7712 29.2452 55.1667 29.733 55.1667C30.2209 55.1667 30.6163 54.7712 30.6163 54.2833C30.6163 53.7955 30.2209 53.4 29.733 53.4ZM27.083 54.2833C27.083 52.8198 28.2695 51.6333 29.733 51.6333C31.1966 51.6333 32.383 52.8198 32.383 54.2833C32.383 55.7469 31.1966 56.9333 29.733 56.9333C28.2695 56.9333 27.083 55.7469 27.083 54.2833Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.7832 25.1319C21.784 20.7419 25.3431 17.1833 29.7332 17.1833C34.1234 17.1833 37.6825 20.7419 37.6832 25.1319C37.6876 26.5315 37.3162 27.9067 36.6077 29.1138C36.3608 29.5345 35.8195 29.6754 35.3988 29.4285C34.9781 29.1816 34.8372 28.6403 35.0841 28.2196C35.6327 27.2849 35.9202 26.22 35.9166 25.1363L35.9166 25.1333C35.9166 21.7184 33.1482 18.95 29.7332 18.95C26.3183 18.95 23.5499 21.7184 23.5499 25.1333V25.1363H23.5499C23.5463 26.22 23.8338 27.2849 24.3824 28.2196C24.6293 28.6403 24.4884 29.1816 24.0677 29.4285C23.647 29.6754 23.1057 29.5345 22.8588 29.1138C22.1503 27.9067 21.7789 26.5315 21.7832 25.1319Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.7546 20.1512C24.0669 19.7764 24.6239 19.7258 24.9987 20.0381L34.5387 27.9881C34.9134 28.3004 34.9641 28.8574 34.6518 29.2322C34.3394 29.6069 33.7824 29.6576 33.4077 29.3453L23.8677 21.3953C23.4929 21.0829 23.4422 20.526 23.7546 20.1512Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.7546 20.1512C24.0669 19.7764 24.6239 19.7258 24.9987 20.0381L34.5387 27.9881C34.9134 28.3004 34.9641 28.8574 34.6518 29.2322C34.3394 29.6069 33.7824 29.6576 33.4077 29.3453L23.8677 21.3953C23.4929 21.0829 23.4422 20.526 23.7546 20.1512Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.7118 20.1512C36.0241 20.526 35.9735 21.0829 35.5987 21.3953L26.0587 29.3453C25.6839 29.6576 25.1269 29.6069 24.8146 29.2322C24.5023 28.8574 24.5529 28.3004 24.9277 27.9881L34.4677 20.0381C34.8425 19.7258 35.3995 19.7764 35.7118 20.1512Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.7118 20.1512C36.0241 20.526 35.9735 21.0829 35.5987 21.3953L26.0587 29.3453C25.6839 29.6576 25.1269 29.6069 24.8146 29.2322C24.5023 28.8574 24.5529 28.3004 24.9277 27.9881L34.4677 20.0381C34.8425 19.7258 35.3995 19.7764 35.7118 20.1512Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.667 15.4167C22.667 14.9288 23.0625 14.5334 23.5503 14.5334H35.917C36.4048 14.5334 36.8003 14.9288 36.8003 15.4167C36.8003 15.9045 36.4048 16.3 35.917 16.3H23.5503C23.0625 16.3 22.667 15.9045 22.667 15.4167Z", fill: colourFill })));
};

var ServiceIcon$l = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M34.0303 19.3319C31.5207 17.0561 27.6938 17.056 25.1841 19.3318L29.6073 23.0178L34.0303 19.3319Z", fill: colourFill }),
        React__default.createElement("path", { d: "M42.3839 25.1964H41.9106V27.0893H43.8035L42.3839 25.1964Z", fill: colourFill }),
        React__default.createElement("path", { d: "M29.6071 25.4823L27.6792 27.0893H31.535L29.6071 25.4823Z", fill: colourFill }),
        React__default.createElement("path", { d: "M35.5747 27.0893C36.559 25.0726 36.4315 22.6905 35.2375 20.7904L31.0859 24.25L34.4929 27.0893H35.5747Z", fill: colourFill }),
        React__default.createElement("path", { d: "M22.9824 24.25C22.9848 25.2339 23.2096 26.2045 23.64 27.0893H24.7217L28.1287 24.2501L23.9774 20.7906C23.3273 21.8274 22.9825 23.0263 22.9824 24.25Z", fill: colourFill }),
        React__default.createElement("path", { d: "M39.0713 11H20.1427C19.6207 11.0016 19.1978 11.4244 19.1963 11.9464V27.0893H21.5908C20.3212 23.5557 21.5151 19.6077 24.5299 17.3697C27.5447 15.1317 31.6693 15.1317 34.6841 17.3697C37.699 19.6077 38.8928 23.5557 37.6233 27.0893H40.0177V11.9464C40.0162 11.4244 39.5933 11.0016 39.0713 11ZM36.232 14.7857H22.982C22.4593 14.7857 22.0356 14.362 22.0356 13.8393C22.0356 13.3166 22.4593 12.8929 22.982 12.8929H36.232C36.7547 12.8929 37.1784 13.3166 37.1784 13.8393C37.1784 14.362 36.7547 14.7857 36.232 14.7857Z", fill: colourFill }),
        React__default.createElement("path", { d: "M44.2903 20.4643H41.9108V23.3035H42.8573C43.1552 23.3035 43.4357 23.4439 43.6142 23.6825L46.4535 27.4682C46.6687 27.7549 46.7034 28.1386 46.5431 28.4592C46.3828 28.7798 46.055 28.9823 45.6966 28.9821H13.518C13.1595 28.9823 12.8318 28.7798 12.6715 28.4592C12.5112 28.1386 12.5458 27.7549 12.761 27.4682L15.6003 23.6825C15.7788 23.4439 16.0593 23.3035 16.3573 23.3035H17.3037V20.4643H14.9242L6.00098 31.8214H53.2136L44.2903 20.4643Z", fill: colourFill }),
        React__default.createElement("path", { d: "M34.3394 50.75H24.8751C24.3531 50.7516 23.9303 51.1744 23.9287 51.6964V59.2679C23.9303 59.7899 24.3531 60.2127 24.8751 60.2143H34.3394C34.8615 60.2127 35.2843 59.7899 35.2859 59.2679V51.6964C35.2843 51.1744 34.8615 50.7516 34.3394 50.75ZM29.6073 58.3214C28.0392 58.3214 26.768 57.0502 26.768 55.4821C26.768 53.914 28.0392 52.6429 29.6073 52.6429C31.1754 52.6429 32.4466 53.914 32.4466 55.4821C32.442 57.0483 31.1735 58.3168 29.6073 58.3214Z", fill: colourFill }),
        React__default.createElement("path", { d: "M54.2147 33.7143H5V37.5H28.6607V36.5535C28.6607 36.0309 29.0844 35.6071 29.6071 35.6071C30.1298 35.6071 30.5536 36.0309 30.5536 36.5535V37.5H54.2157L54.2147 33.7143Z", fill: colourFill }),
        React__default.createElement("path", { d: "M29.6071 56.4286C30.1298 56.4286 30.5535 56.0048 30.5535 55.4821C30.5535 54.9594 30.1298 54.5357 29.6071 54.5357C29.0844 54.5357 28.6606 54.9594 28.6606 55.4821C28.6606 56.0048 29.0844 56.4286 29.6071 56.4286Z", fill: colourFill }),
        React__default.createElement("path", { d: "M30.5533 41.3814C32.7548 41.8339 34.3359 43.7703 34.339 46.0179V48.8571C35.9064 48.8588 37.1766 50.129 37.1783 51.6964V59.2679C37.1766 60.8352 35.9064 62.1054 34.339 62.1071H24.8747C23.3073 62.1054 22.0371 60.8352 22.0354 59.2679V51.6964C22.0371 50.129 23.3073 48.8588 24.8747 48.8571V46.0179C24.8778 43.7703 26.4589 41.8339 28.6604 41.3814V39.3929H6.89258V63.0536C6.8931 63.576 7.31652 63.9995 7.83901 64H51.3747C51.8972 63.9995 52.3206 63.576 52.3212 63.0536V39.3929H30.5533V41.3814Z", fill: colourFill }),
        React__default.createElement("path", { d: "M17.3035 27.0893V25.1964H16.8303L15.4106 27.0893H17.3035Z", fill: colourFill }),
        React__default.createElement("path", { d: "M30.5533 43.353V44.125C30.5533 44.6477 30.1296 45.0714 29.6069 45.0714C29.0842 45.0714 28.6604 44.6477 28.6604 44.125V43.353C27.5293 43.7514 26.7713 44.8186 26.7676 46.0179V48.8571H32.4461V46.0179C32.4425 44.8186 31.6845 43.7514 30.5533 43.353Z", fill: colourFill })));
};

var ServiceIcon$m = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M4.00006 19.0004C4.46125 19.0005 4.91897 18.9208 5.35294 18.7647C6.39986 19.5661 7.68161 20.0004 9.00006 20.0004C10.3185 20.0004 11.6003 19.5661 12.6472 18.7647C13.1883 18.9591 13.7649 19.0347 14.3379 18.9861C14.9108 18.9376 15.4665 18.7661 15.9672 18.4833C16.4678 18.2006 16.9016 17.8132 17.239 17.3476C17.5764 16.882 17.8095 16.3492 17.9223 15.7854C18.0352 15.2216 18.0251 14.6401 17.8929 14.0805C17.7607 13.5209 17.5094 12.9964 17.1561 12.5428C16.8028 12.0891 16.3559 11.717 15.8458 11.4517C15.3356 11.1864 14.7743 11.0342 14.2001 11.0054C13.6737 10.0918 12.916 9.33301 12.0031 8.8054C11.0902 8.27779 10.0544 8 9.00006 8C7.94569 8 6.90992 8.27779 5.99704 8.8054C5.08417 9.33301 4.32641 10.0918 3.80006 11.0054C2.75781 11.0576 1.77722 11.515 1.0675 12.28C0.357786 13.0451 -0.0248446 14.0572 0.00125238 15.1005C0.0273494 16.1437 0.460107 17.1354 1.20719 17.864C1.95427 18.5926 2.95651 19.0004 4.00006 19.0004V19.0004ZM4.00006 13.0004C4.08874 13.0001 4.17733 13.006 4.26519 13.018C4.48256 13.0488 4.704 13.0071 4.89535 12.8995C5.08669 12.7919 5.2373 12.6243 5.32394 12.4225C5.63269 11.7036 6.1455 11.0909 6.7989 10.6604C7.4523 10.2299 8.21759 10.0004 9.00006 10.0004C9.78254 10.0004 10.5478 10.2299 11.2012 10.6604C11.8546 11.0909 12.3674 11.7036 12.6762 12.4225C12.7628 12.6243 12.9134 12.7919 13.1048 12.8995C13.2961 13.0071 13.5176 13.0488 13.7349 13.018C13.8228 13.006 13.9114 13.0001 14.0001 13.0004C14.5305 13.0004 15.0392 13.2111 15.4143 13.5862C15.7894 13.9613 16.0001 14.47 16.0001 15.0004C16.0001 15.5309 15.7894 16.0396 15.4143 16.4146C15.0392 16.7897 14.5305 17.0004 14.0001 17.0004C13.6457 17.0011 13.2977 16.9064 12.9924 16.7264C12.8035 16.6144 12.5829 16.5678 12.3647 16.5937C12.1466 16.6196 11.9431 16.7166 11.7856 16.8697C11.0396 17.5948 10.0404 18.0004 9.00006 18.0004C7.95978 18.0004 6.9605 17.5948 6.21457 16.8697C6.05706 16.7166 5.85352 16.6196 5.63539 16.5937C5.41725 16.5678 5.19666 16.6144 5.00769 16.7264C4.70246 16.9064 4.35443 17.0011 4.00006 17.0004C3.46963 17.0004 2.96092 16.7897 2.58585 16.4146C2.21078 16.0396 2.00006 15.5309 2.00006 15.0004C2.00006 14.47 2.21078 13.9613 2.58585 13.5862C2.96092 13.2111 3.46963 13.0004 4.00006 13.0004V13.0004Z", fill: colourFill }),
        React__default.createElement("path", { d: "M27.9995 12C28.537 12 28.7239 12.2072 28.8355 12.41C28.9299 12.5934 28.9857 12.7942 28.9995 13C28.9982 13.2652 29.1022 13.5201 29.2888 13.7086C29.4754 13.8971 29.7292 14.0038 29.9944 14.0051C30.2596 14.0065 30.5145 13.9024 30.703 13.7159C30.8915 13.5293 30.9982 13.2755 30.9995 13.0103C31.0118 12.801 31.0676 12.5966 31.1635 12.4103C31.2751 12.2073 31.462 12 31.9995 12C32.2647 12 32.5191 11.8946 32.7066 11.7071C32.8942 11.5196 32.9995 11.2652 32.9995 11C32.9995 10.7348 32.8942 10.4804 32.7066 10.2929C32.5191 10.1054 32.2647 10 31.9995 10C31.1233 10 30.4694 10.2842 29.9995 10.7026C29.5296 10.2842 28.8758 10 27.9995 10C27.7343 10 27.4799 10.1054 27.2924 10.2929C27.1049 10.4804 26.9995 10.7348 26.9995 11C26.9995 11.2652 27.1049 11.5196 27.2924 11.7071C27.4799 11.8946 27.7343 12 27.9995 12Z", fill: colourFill }),
        React__default.createElement("path", { d: "M23 18.7026C22.5301 18.2843 21.8762 18 21 18C20.7348 18 20.4804 18.1054 20.2929 18.2929C20.1054 18.4804 20 18.7348 20 19C20 19.2652 20.1054 19.5196 20.2929 19.7071C20.4804 19.8946 20.7348 20 21 20C21.5375 20 21.7244 20.2072 21.836 20.41C21.9304 20.5934 21.9862 20.7942 22 21C21.9986 21.2652 22.1027 21.5201 22.2893 21.7086C22.4758 21.8971 22.7297 22.0038 22.9949 22.0051C23.2601 22.0065 23.515 21.9024 23.7035 21.7159C23.892 21.5293 23.9986 21.2755 24 21.0103C24.0123 20.801 24.0681 20.5966 24.164 20.4102C24.2756 20.2075 24.4622 20.0002 25 20.0002C25.2652 20.0002 25.5196 19.8949 25.7071 19.7074C25.8946 19.5198 26 19.2655 26 19.0002C26 18.735 25.8946 18.4807 25.7071 18.2931C25.5196 18.1056 25.2652 18.0002 25 18.0002C24.1237 18 23.4699 18.2843 23 18.7026Z", fill: colourFill }),
        React__default.createElement("path", { d: "M30 68C37.9565 68 45.5871 64.8393 51.2132 59.2132C56.8393 53.5871 60 45.9565 60 38C60 37.7348 59.8946 37.4804 59.7071 37.2929C59.5196 37.1054 59.2652 37 59 37H51V32.5806C51.7836 32.8596 52.6094 33.0014 53.4411 33C57.0577 33 60 30.3775 60 27.1539C59.9955 25.9298 59.5753 24.7435 58.8084 23.7894C59.2423 23.0623 59.4712 22.2313 59.4709 21.3846C59.4709 19.2544 58.0489 17.391 55.8809 16.6088C54.9602 14.4595 52.6221 13 50 13C47.3779 13 45.0397 14.4595 44.1194 16.6088C42.9008 17.0293 41.867 17.8617 41.1961 18.9625C40.2575 17.7611 38.7021 17 37 17C34.9079 17 33.0375 18.15 32.2614 19.8534C30.5364 20.5116 29.4114 22.0205 29.4114 23.7438C29.4109 24.3909 29.5732 25.0279 29.8834 25.5959C29.3124 26.3561 29.0025 27.2805 29 28.2313C29 30.8608 31.3881 33 34.3237 33C34.8912 33.0008 35.4557 32.9197 36 32.7593V37H31.5107L25.3 28.4159C24.9891 27.9935 24.5868 27.647 24.123 27.4022C23.6593 27.1573 23.1461 27.0206 22.622 27.0022C22.0979 26.9837 21.5765 27.0841 21.0967 27.2957C20.6169 27.5074 20.1911 27.8248 19.8514 28.2243L16.9904 24.4464C16.6334 23.9954 16.179 23.6311 15.6612 23.3806C15.1435 23.1301 14.5758 23 14.0006 23C13.4255 23 12.8578 23.1301 12.34 23.3806C11.8223 23.6311 11.3679 23.9954 11.0109 24.4464L1.50288 37H1C0.734784 37 0.48043 37.1054 0.292893 37.2929C0.105357 37.4804 0 37.7348 0 38C0 45.9565 3.16071 53.5871 8.7868 59.2132C14.4129 64.8393 22.0435 68 30 68V68ZM40.0345 51.3638C39.2438 47.9325 37.1879 45.278 34.3939 44.0809C30.3633 42.3534 28.4646 40.2914 27.6108 39H44.8391C45.3334 39.1761 47.2608 39.9664 48.2016 41.8524C48.9728 43.3984 48.9266 45.3486 48.0641 47.6489C46.2841 52.3955 46.3069 55.7345 48.2036 59.2768C44.9504 62.0765 41.092 64.0833 36.9319 65.1393C39.8946 60.7681 41.0508 55.7733 40.0345 51.3638V51.3638ZM49.799 57.799C49.7765 57.8215 49.7535 57.843 49.731 57.8654C48.1685 54.6164 48.6245 51.8494 49.9362 48.3511C51.0065 45.4974 51.0206 43.0019 49.9782 40.934C49.6124 40.2134 49.1278 39.5596 48.5448 39H57.9823C57.7493 46.0801 54.8223 52.8042 49.799 57.799V57.799ZM43.1603 24.5941C43.3469 24.4179 43.4586 24.1766 43.4722 23.9202C43.4859 23.6639 43.4004 23.4121 43.2335 23.217C42.7854 22.7112 42.5353 22.0604 42.5294 21.3846C42.5294 20.0096 43.5814 18.8019 45.1471 18.3804C45.3104 18.3365 45.4598 18.2519 45.5815 18.1345C45.7031 18.0172 45.7931 17.8709 45.8429 17.7094C46.3345 16.1141 48.0441 15 50 15C51.9559 15 53.6655 16.1141 54.1571 17.7094C54.2069 17.8709 54.2969 18.0172 54.4185 18.1345C54.5402 18.2519 54.6896 18.3365 54.8529 18.3804C56.4186 18.8019 57.4706 20.0091 57.4706 21.3846C57.4647 22.0604 57.2146 22.7112 56.7665 23.217C56.5996 23.4121 56.5141 23.6639 56.5278 23.9202C56.5414 24.1766 56.6531 24.4179 56.8397 24.5941C57.1985 24.9183 57.4866 25.3129 57.6862 25.7533C57.8858 26.1937 57.9927 26.6704 58 27.1539C58 29.275 55.955 31 53.4411 31C52.59 31.0054 51.7509 30.7983 51 30.3975V28.535L53.5547 26.8319C53.7739 26.6841 53.9256 26.4556 53.9767 26.1963C54.0278 25.937 53.9742 25.668 53.8276 25.4481C53.681 25.2282 53.4533 25.0753 53.1942 25.0228C52.9352 24.9703 52.6659 25.0224 52.4453 25.1679L51 26.1315V24C51 23.7348 50.8946 23.4804 50.7071 23.2929C50.5196 23.1054 50.2652 23 50 23C49.7348 23 49.4804 23.1054 49.2929 23.2929C49.1054 23.4804 49 23.7348 49 24V26.1315L47.5547 25.168C47.4455 25.0943 47.3228 25.043 47.1936 25.0169C47.0645 24.9908 46.9314 24.9904 46.8021 25.0159C46.6728 25.0414 46.5499 25.0922 46.4403 25.1654C46.3307 25.2385 46.2367 25.3327 46.1636 25.4423C46.0905 25.5519 46.0397 25.6749 46.0143 25.8042C45.9889 25.9335 45.9893 26.0666 46.0155 26.1957C46.0417 26.3248 46.0931 26.4475 46.1669 26.5567C46.2406 26.6659 46.3352 26.7595 46.4453 26.832L49 28.5351V30.3976C48.2491 30.7984 47.41 31.0054 46.5589 31C44.045 31 42 29.275 42 27.1539C42.0073 26.6704 42.1142 26.1937 42.3138 25.7533C42.5134 25.3129 42.8015 24.9183 43.1603 24.5941V24.5941ZM34.3237 31C32.491 31 31 29.7579 31 28.2313C31.0058 27.8856 31.0827 27.5448 31.2259 27.2301C31.3692 26.9154 31.5757 26.6336 31.8326 26.4023C32.0193 26.2261 32.131 25.9849 32.1448 25.7287C32.1586 25.4724 32.0733 25.2206 31.9066 25.0255C31.5924 24.6719 31.4165 24.2167 31.4113 23.7438C31.4113 22.7754 32.1636 21.9228 33.2832 21.622C33.4466 21.5781 33.5962 21.4935 33.718 21.376C33.8397 21.2586 33.9297 21.1122 33.9795 20.9505C34.3332 19.8021 35.575 19 37 19C38.425 19 39.6668 19.8021 40.0205 20.95C40.0608 21.08 40.1272 21.2003 40.2157 21.3037C40.3041 21.407 40.4128 21.4912 40.535 21.551C40.562 22.3402 40.7879 23.1098 41.1916 23.7885C40.4024 24.7621 39.9808 25.9823 40.0007 27.2355C40.0205 28.4886 40.4806 29.6949 41.3003 30.643C40.7915 30.8792 40.2372 31.0011 39.6763 31C39.0957 31.0035 38.5221 30.8733 38 30.6194V26C38 25.7348 37.8946 25.4804 37.7071 25.2929C37.5196 25.1054 37.2652 25 37 25C36.7348 25 36.4804 25.1054 36.2929 25.2929C36.1054 25.4804 36 25.7348 36 26V27.382L35.4473 27.1056C35.2103 26.9895 34.9371 26.9716 34.6871 27.056C34.4371 27.1404 34.2306 27.3202 34.1126 27.5562C33.9946 27.7922 33.9746 28.0653 34.057 28.316C34.1395 28.5666 34.3177 28.7745 34.5527 28.8944L36 29.618V30.6194C35.4779 30.8733 34.9043 31.0035 34.3237 31V31ZM38 32.7593C38.5443 32.9197 39.1088 33.0008 39.6763 33C40.8314 33.0035 41.9609 32.66 42.9186 32.0141C44.0209 32.6651 45.2787 33.0058 46.5589 33C47.3906 33.0014 48.2164 32.8596 49 32.5806V37H38V32.7593ZM22.5 29C22.7293 28.9966 22.9561 29.0483 23.1614 29.1506C23.3666 29.253 23.5443 29.4031 23.6795 29.5884L29.042 37H15.9578L21.3202 29.5884C21.4555 29.4031 21.6332 29.253 21.8385 29.1506C22.0438 29.0482 22.2706 28.9966 22.5 29V29ZM12.6053 25.6536C12.7757 25.4491 12.989 25.2845 13.2301 25.1715C13.4712 25.0586 13.7342 25 14.0005 25C14.2668 25 14.5298 25.0586 14.7709 25.1715C15.012 25.2845 15.2253 25.4491 15.3958 25.6536L18.6192 29.9103L13.4893 37H4.01175L12.6053 25.6536ZM25.3174 39C25.9728 40.4125 27.9799 43.5079 33.6063 45.9193C35.8071 46.8623 37.4399 49.0104 38.0856 51.8129C39.1092 56.2545 37.5798 61.4275 33.9931 65.7178C32.6704 65.9056 31.336 65.9999 30 66C22.747 66.0001 15.777 63.1858 10.5575 58.1496C5.3381 53.1134 2.27653 46.2484 2.0175 39H25.3174Z", fill: colourFill })));
};

var ServiceIcon$n = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M4 13.0004C4.08868 13.0001 4.17727 13.006 4.26513 13.018C4.4825 13.0488 4.70394 13.0071 4.89528 12.8995C5.08662 12.7918 5.23723 12.6242 5.32388 12.4225C5.63263 11.7036 6.14544 11.0909 6.79884 10.6604C7.45223 10.2299 8.21753 10.0004 9 10.0004C9.78247 10.0004 10.5478 10.2299 11.2012 10.6604C11.8546 11.0909 12.3674 11.7036 12.6761 12.4225C12.7628 12.6242 12.9134 12.7918 13.1047 12.8995C13.2961 13.0071 13.5175 13.0488 13.7349 13.018C13.8227 13.006 13.9113 13.0001 14 13.0004C14.5304 13.0004 15.0391 13.2111 15.4142 13.5862C15.7893 13.9613 16 14.47 16 15.0004C16 15.5308 15.7893 16.0396 15.4142 16.4146C15.0391 16.7897 14.5304 17.0004 14 17.0004C13.6456 17.0011 13.2976 16.9064 12.9924 16.7264C12.8034 16.6144 12.5828 16.5678 12.3647 16.5937C12.1465 16.6196 11.943 16.7165 11.7855 16.8697C11.0396 17.5948 10.0403 18.0004 9 18.0004C7.95971 18.0004 6.96043 17.5948 6.2145 16.8697C6.057 16.7165 5.85346 16.6196 5.63532 16.5937C5.41719 16.5678 5.1966 16.6144 5.00763 16.7264C4.70239 16.9064 4.35437 17.0011 4 17.0004C3.46957 17.0004 2.96086 16.7897 2.58579 16.4146C2.21071 16.0396 2 15.5308 2 15.0004C2 14.47 2.21071 13.9613 2.58579 13.5862C2.96086 13.2111 3.46957 13.0004 4 13.0004Z", fill: colourFill }),
        React__default.createElement("path", { d: "M27.9995 12C28.537 12 28.7239 12.2072 28.8355 12.41C28.9299 12.5934 28.9857 12.7942 28.9995 13C28.9982 13.2652 29.1022 13.5201 29.2888 13.7086C29.4754 13.8971 29.7292 14.0038 29.9944 14.0051C30.2596 14.0065 30.5145 13.9024 30.703 13.7159C30.8915 13.5293 30.9982 13.2755 30.9995 13.0103C31.0118 12.801 31.0676 12.5966 31.1635 12.4103C31.2751 12.2073 31.462 12 31.9995 12C32.2647 12 32.5191 11.8946 32.7066 11.7071C32.8942 11.5196 32.9995 11.2652 32.9995 11C32.9995 10.7348 32.8942 10.4804 32.7066 10.2929C32.5191 10.1054 32.2647 10 31.9995 10C31.1233 10 30.4694 10.2842 29.9995 10.7026C29.5296 10.2842 28.8758 10 27.9995 10C27.7343 10 27.4799 10.1054 27.2924 10.2929C27.1049 10.4804 26.9995 10.7348 26.9995 11C26.9995 11.2652 27.1049 11.5196 27.2924 11.7071C27.4799 11.8946 27.7343 12 27.9995 12Z", fill: colourFill }),
        React__default.createElement("path", { d: "M23 18.7026C22.5301 18.2843 21.8762 18 21 18C20.7348 18 20.4804 18.1054 20.2929 18.2929C20.1054 18.4804 20 18.7348 20 19C20 19.2652 20.1054 19.5196 20.2929 19.7071C20.4804 19.8946 20.7348 20 21 20C21.5375 20 21.7244 20.2072 21.836 20.41C21.9304 20.5934 21.9862 20.7942 22 21C21.9986 21.2652 22.1027 21.5201 22.2893 21.7086C22.4758 21.8971 22.7297 22.0038 22.9949 22.0051C23.2601 22.0065 23.515 21.9024 23.7035 21.7159C23.892 21.5293 23.9986 21.2755 24 21.0103C24.0123 20.801 24.0681 20.5966 24.164 20.4102C24.2756 20.2075 24.4622 20.0002 25 20.0002C25.2652 20.0002 25.5196 19.8949 25.7071 19.7074C25.8946 19.5198 26 19.2655 26 19.0002C26 18.735 25.8946 18.4807 25.7071 18.2931C25.5196 18.1056 25.2652 18.0002 25 18.0002C24.1237 18 23.4699 18.2843 23 18.7026Z", fill: colourFill }),
        React__default.createElement("path", { d: "M40.0345 51.3638C39.2438 47.9325 37.1879 45.278 34.3939 44.0809C30.3633 42.3534 28.4646 40.2914 27.6108 39H44.8391C45.3334 39.1762 47.2608 39.9664 48.2016 41.8524C48.9728 43.3984 48.9266 45.3487 48.0641 47.6489C46.2841 52.3955 46.3069 55.7345 48.2036 59.2768C44.9504 62.0765 41.092 64.0833 36.9319 65.1393C39.8946 60.7682 41.0508 55.7733 40.0345 51.3638ZM49.799 57.799C49.7892 57.8089 49.7792 57.8185 49.7692 57.8282C49.7673 57.83 49.7654 57.8319 49.7635 57.8337C49.7526 57.8442 49.7417 57.8547 49.731 57.8654C48.1685 54.6164 48.6245 51.8494 49.9362 48.3512C51.0065 45.4974 51.0206 43.0019 49.9782 40.934C49.6124 40.2134 49.1278 39.5596 48.5448 39H57.9823C57.7493 46.0801 54.8223 52.8042 49.799 57.799ZM22.5 29C22.7293 28.9966 22.9561 29.0483 23.1614 29.1507C23.3666 29.253 23.5443 29.4032 23.6795 29.5884L29.042 37H15.9578L21.3202 29.5884C21.4555 29.4031 21.6332 29.253 21.8385 29.1506C22.0438 29.0482 22.2706 28.9966 22.5 29ZM12.6053 25.6537C12.7757 25.4491 12.989 25.2845 13.2301 25.1715C13.4712 25.0586 13.7342 25 14.0005 25C14.2668 25 14.5298 25.0586 14.7709 25.1715C15.012 25.2845 15.2253 25.4491 15.3958 25.6537L18.6192 29.9103L13.4893 37H4.01175L12.6053 25.6537ZM25.3174 39C25.9728 40.4125 27.9799 43.5079 33.6063 45.9193C35.8071 46.8623 37.4399 49.0104 38.0856 51.8129C39.1092 56.2545 37.5798 61.4275 33.9931 65.7178C32.6704 65.9056 31.336 66 30 66C22.747 66.0001 15.777 63.1858 10.5575 58.1496C5.3381 53.1134 2.27653 46.2484 2.0175 39H25.3174Z", fill: colourFill }),
        React__default.createElement("path", { d: "M36 32.7593V37H38V32.7593C38 32.7593 37.6792 32.3065 37.5 32C37.2796 31.6231 37 31 37 31C37 31 36.7204 31.6231 36.5 32C36.3208 32.3065 36 32.7593 36 32.7593Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M49.7635 57.8337L49.7692 57.8282C49.7792 57.8185 49.7892 57.8089 49.799 57.799C49.7873 57.8108 49.7754 57.8223 49.7635 57.8337Z", fill: colourFill }),
        React__default.createElement("path", { d: "M43.1603 24.5941C43.3469 24.4179 43.4586 24.1766 43.4722 23.9202C43.4859 23.6639 43.4004 23.4121 43.2335 23.217C42.7854 22.7112 42.5353 22.0604 42.5294 21.3846C42.5294 20.0096 43.5814 18.8019 45.1471 18.3804C45.3104 18.3365 45.4598 18.2519 45.5815 18.1345C45.7031 18.0172 45.7931 17.8709 45.8429 17.7094C46.3345 16.1141 48.0441 15 50 15C51.9559 15 53.6655 16.1141 54.1571 17.7094C54.2069 17.8709 54.2969 18.0172 54.4185 18.1345C54.5402 18.2519 54.6896 18.3365 54.8529 18.3804C56.4186 18.8019 57.4706 20.0091 57.4706 21.3846C57.4647 22.0604 57.2146 22.7112 56.7665 23.217C56.5996 23.4121 56.5141 23.6639 56.5278 23.9202C56.5414 24.1766 56.6531 24.4179 56.8397 24.5941C57.1985 24.9183 57.4866 25.3129 57.6862 25.7533C57.8858 26.1937 57.9927 26.6704 58 27.1539C58 29.275 55.955 31 53.4411 31C52.59 31.0054 51.7509 30.7983 51 30.3975V28.535L53.5547 26.8319C53.7739 26.6841 53.9256 26.4556 53.9767 26.1963C54.0278 25.937 53.9742 25.668 53.8276 25.4481C53.681 25.2282 53.4533 25.0753 53.1942 25.0228C52.9352 24.9703 52.6659 25.0224 52.4453 25.1679L51 26.1315V24C51 23.7348 50.8946 23.4804 50.7071 23.2929C50.5196 23.1054 50.2652 23 50 23C49.7348 23 49.4804 23.1054 49.2929 23.2929C49.1054 23.4804 49 23.7348 49 24V26.1315L47.5547 25.168C47.4455 25.0943 47.3228 25.043 47.1936 25.0169C47.0645 24.9908 46.9314 24.9904 46.8021 25.0159C46.6728 25.0414 46.5499 25.0922 46.4403 25.1654C46.3307 25.2385 46.2367 25.3327 46.1636 25.4423C46.0905 25.5519 46.0397 25.6749 46.0143 25.8042C45.9889 25.9335 45.9893 26.0666 46.0155 26.1957C46.0417 26.3248 46.0931 26.4475 46.1669 26.5567C46.2406 26.6659 46.3352 26.7595 46.4453 26.832L49 28.5351V30.3976C48.2491 30.7984 47.41 31.0054 46.5589 31C44.045 31 42 29.275 42 27.1539C42.0073 26.6704 42.1142 26.1937 42.3138 25.7533C42.5134 25.3129 42.8015 24.9183 43.1603 24.5941ZM34.3237 31C32.491 31 31 29.7579 31 28.2313C31.0058 27.8856 31.0827 27.5448 31.2259 27.2301C31.3692 26.9154 31.5757 26.6336 31.8326 26.4023C32.0193 26.2261 32.131 25.9849 32.1448 25.7287C32.1586 25.4724 32.0733 25.2206 31.9066 25.0255C31.5924 24.6719 31.4165 24.2167 31.4113 23.7438C31.4113 22.7754 32.1636 21.9228 33.2832 21.622C33.4466 21.5781 33.5962 21.4935 33.718 21.376C33.8397 21.2586 33.9297 21.1122 33.9795 20.9505C34.3332 19.8021 35.575 19 37 19C38.425 19 39.6668 19.8021 40.0205 20.95C40.0608 21.08 40.1272 21.2003 40.2157 21.3037C40.3041 21.407 40.4128 21.4912 40.535 21.551C40.562 22.3402 40.7879 23.1098 41.1916 23.7885C40.4024 24.7621 39.9808 25.9823 40.0007 27.2355C40.0205 28.4886 40.4806 29.6949 41.3003 30.643C40.7915 30.8792 40.2372 31.0011 39.6763 31C39.0957 31.0035 38.5221 30.8733 38 30.6194V26C38 25.7348 37.8946 25.4804 37.7071 25.2929C37.5196 25.1054 37.2652 25 37 25C36.7348 25 36.4804 25.1054 36.2929 25.2929C36.1054 25.4804 36 25.7348 36 26V27.382L35.4473 27.1056C35.2103 26.9895 34.9371 26.9716 34.6871 27.056C34.4371 27.1404 34.2306 27.3202 34.1126 27.5562C33.9946 27.7922 33.9746 28.0653 34.057 28.316C34.1395 28.5666 34.3177 28.7745 34.5527 28.8944L36 29.618V30.6194C35.4779 30.8733 34.9043 31.0035 34.3237 31Z", fill: colourFill }),
        React__default.createElement("path", { d: "M36 37V32.7593C36 32.7593 36.3208 32.3065 36.5 32C36.7204 31.6231 37 31 37 31C37 31 37.2796 31.6231 37.5 32C37.6792 32.3065 38 32.7593 38 32.7593V37H36Z", fill: colourFill }),
        React__default.createElement("path", { d: "M49 37V32.7593C49 32.7593 49.3208 32.3065 49.5 32C49.7204 31.6231 50 31 50 31C50 31 50.2796 31.6231 50.5 32C50.6792 32.3065 51 32.7593 51 32.7593V37H49Z", fill: colourFill })));
};

var ServiceIcon$o = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M23.7392 15.3448C19.2806 15.3448 15.2386 16.2211 12.2136 17.7336C9.18855 19.2461 7 21.5027 7 24.2898V51.0724C7 53.8333 9.16446 56.0787 12.1961 57.5937C15.2278 59.1088 19.2754 60 23.7392 60C27.4909 60 30.943 59.3592 33.7478 58.2563C35.9398 59.3671 38.415 60 41.0363 60C49.9597 60 57.2175 52.7422 57.2175 43.8188C57.2175 34.8954 49.9597 27.6376 41.0363 27.6376C40.8445 27.6376 40.651 27.6485 40.4609 27.655V24.2898C40.4609 21.5027 38.2898 19.2461 35.2648 17.7336C32.2398 16.2212 28.1977 15.3448 23.7392 15.3448ZM23.7392 17.5941C27.909 17.5941 31.6763 18.459 34.3058 19.7737C36.9352 21.0885 38.2639 22.7626 38.2639 24.2898C37.745 26.6595 36.009 27.9635 34.3058 28.7884C31.6763 30.1032 27.909 30.968 23.7392 30.968C19.5693 30.968 15.8021 30.1032 13.1726 28.7884C11.2247 27.7793 9.45141 26.2411 9.21445 24.2898C9.21445 22.7626 10.5431 21.0885 13.1726 19.7737C15.8021 18.459 19.5693 17.5941 23.7392 17.5941ZM9.23189 28.8233C10.0584 29.5849 11.0792 30.2613 12.2136 30.8285C15.2386 32.341 19.2806 33.2173 23.7392 33.2173C25.6729 33.2173 27.5215 33.0395 29.2491 32.7291C27.9329 34.1273 26.8662 35.7633 26.1105 37.5591C25.3387 37.6267 24.5488 37.6811 23.7392 37.6811C19.5757 37.6811 15.8142 36.8136 13.19 35.5015C10.5658 34.1894 9.23189 32.5395 9.23189 30.9854V28.8233ZM41.0363 29.8695C48.7535 29.8695 54.9856 36.1016 54.9856 43.8188C54.9856 51.5359 48.7535 57.7681 41.0363 57.7681C33.3191 57.7681 27.087 51.5359 27.087 43.8188C27.087 36.1016 33.3191 29.8695 41.0363 29.8695ZM9.23189 35.519C10.0533 36.2746 11.0678 36.9426 12.1961 37.5067C15.2264 39.0219 19.2742 39.9131 23.7392 39.9131C24.2844 39.9131 24.8131 39.8879 25.3433 39.8606C25.0244 41.1262 24.8551 42.4552 24.8551 43.8186C24.8551 43.9988 24.8667 44.1805 24.8725 44.3592C24.4983 44.3737 24.1234 44.3765 23.7392 44.3765C19.5757 44.3765 15.8142 43.509 13.19 42.197C10.5659 40.8852 9.23189 39.2352 9.23189 37.6811V35.519ZM9.23189 42.2146C10.0533 42.9703 11.0678 43.6382 12.1961 44.2024C15.2264 45.7176 19.2742 46.6087 23.7392 46.6087C24.1969 46.6087 24.6524 46.5953 25.0992 46.5741C25.3641 48.1114 25.8444 49.576 26.5116 50.9332C25.6116 51.0228 24.6912 51.0727 23.7392 51.0727C19.5757 51.0727 15.8142 50.2052 13.19 48.8932C10.5658 47.5808 9.23189 45.9308 9.23189 44.3768V42.2146ZM9.23189 48.9103C10.0533 49.666 11.0678 50.3339 12.1961 50.8981C15.2264 52.4132 19.2742 53.3043 23.7392 53.3043C25.1288 53.3043 26.4782 53.2255 27.767 53.0602C28.7476 54.4656 29.9408 55.6902 31.3067 56.7219C29.106 57.3689 26.5148 57.7681 23.7392 57.7681C19.577 57.7681 15.8158 56.9007 13.19 55.5885C10.5642 54.2763 9.23189 52.6258 9.23189 51.0724V48.9103Z", fill: colourFill }),
        React__default.createElement("path", { d: "M44.9532 47.6194L44.3763 47.8465C43.9724 48.0168 43.4532 47.96 43.0493 47.7329C42.357 47.2787 41.4916 47.1083 40.6839 47.1651C40.9147 46.3134 40.9724 45.4617 40.9147 44.6099H43.7993C44.4339 44.6099 44.8955 44.0989 44.8955 43.5311C44.8955 42.9633 44.3763 42.4522 43.7993 42.4522H40.5108C40.3954 42.1116 40.28 41.7141 40.107 41.3734C39.53 40.181 39.4723 39.6132 39.4723 39.4428C39.4723 38.364 40.3377 37.569 41.4339 37.569C42.5301 37.569 43.3955 38.4208 43.3955 39.4996C43.3955 40.181 43.9724 40.692 44.607 40.692C45.2993 40.692 45.8186 40.1242 45.8186 39.4996C45.8186 37.1148 43.7993 35.1274 41.3762 35.1274C38.8954 35.1274 36.9338 37.0012 36.9338 39.4428C36.9338 40.181 37.2223 41.1463 37.7992 42.3387C37.7992 42.3387 37.7992 42.3955 37.8569 42.3955H37.3377C36.7031 42.3955 36.2415 42.9065 36.2415 43.4743C36.2415 44.0421 36.7608 44.5532 37.3377 44.5532H38.3762C38.4339 45.632 38.2608 46.7109 37.7992 47.6761L36.8762 47.8465C36.1838 48.0168 35.78 48.6414 35.9531 49.3228C36.1261 50.0042 36.7608 50.4016 37.4531 50.2313L40.6262 49.5499C40.9724 49.4931 41.3762 49.5499 41.6647 49.7203C42.2993 50.1177 43.0493 50.3449 43.7416 50.3449C44.2609 50.3449 44.7801 50.2313 45.2416 50.061L45.8186 49.8338C46.4532 49.5499 46.7417 48.8685 46.4532 48.244C46.2801 47.6761 45.5878 47.3922 44.9532 47.6194Z", fill: colourFill })));
};

var ServiceIcon$p = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.67 17.7659C28.8815 17.7659 32.6864 18.6394 35.3422 19.9672C37.998 21.2952 39.3399 22.986 39.3399 24.5285C38.8159 26.9219 37.0625 28.2389 35.3422 29.0721C32.6864 30.4 28.8815 31.2735 24.67 31.2735C20.4584 31.2735 16.6535 30.4 13.9977 29.0721C12.0304 28.0529 10.2393 26.4993 10 24.5285C10 22.986 11.3419 21.2952 13.9977 19.9672C16.6535 18.6394 20.4584 17.7659 24.67 17.7659ZM10.0176 29.1073C10.8524 29.8766 11.8834 30.5598 13.0291 31.1326C16.0843 32.6602 20.1668 33.5453 24.67 33.5453C26.623 33.5453 28.4901 33.3657 30.235 33.0522C28.9057 34.4644 27.8283 36.1167 27.065 37.9305C26.2855 37.9987 25.4877 38.0537 24.67 38.0537C20.4649 38.0537 16.6657 37.1776 14.0153 35.8524C11.3649 34.5272 10.0176 32.8607 10.0176 31.2911V29.1073ZM42.1401 30.164C49.9344 30.164 56.2288 36.4584 56.2288 44.2528C56.2288 52.0471 49.9344 58.3416 42.1401 58.3416C34.3457 58.3416 28.0513 52.0471 28.0513 44.2528C28.0513 36.4584 34.3457 30.164 42.1401 30.164ZM10.0176 35.87C10.8473 36.6332 11.8718 37.3078 13.0115 37.8776C16.0721 39.4079 20.1603 40.308 24.67 40.308C25.2206 40.308 25.7546 40.2826 26.2902 40.255C25.968 41.5333 25.7971 42.8756 25.7971 44.2526C25.7971 44.3746 25.8023 44.4972 25.8076 44.6192L25.8076 44.6193C25.8101 44.6793 25.8127 44.7391 25.8146 44.7986C25.4367 44.8133 25.058 44.8161 24.67 44.8161C20.4649 44.8161 16.6657 43.9399 14.0153 42.6147C11.3649 41.2899 10.0176 39.6233 10.0176 38.0537V35.87ZM10.0176 42.6326C10.8473 43.3958 11.8718 44.0704 13.0115 44.6402C16.0721 46.1706 20.1603 47.0706 24.67 47.0706C25.1323 47.0706 25.5923 47.057 26.0436 47.0356C26.3112 48.5883 26.7963 50.0676 27.4701 51.4384C26.5611 51.5289 25.6315 51.5792 24.67 51.5792C20.4649 51.5792 16.6657 50.7031 14.0153 49.3779C11.3649 48.0524 10.0176 46.386 10.0176 44.8164V42.6326ZM10.0176 49.3952C10.8473 50.1584 11.8718 50.8331 13.0115 51.4029C16.0721 52.9332 20.1603 53.8332 24.67 53.8332C26.0735 53.8332 27.4364 53.7536 28.7381 53.5866C29.7284 55.006 30.9336 56.2429 32.3131 57.2849C30.0904 57.9384 27.4734 58.3416 24.67 58.3416C20.4662 58.3416 16.6673 57.4655 14.0153 56.1402C11.3633 54.8149 10.0176 53.1479 10.0176 51.579V49.3952ZM45.5134 48.3207L46.0961 48.0914C46.7371 47.862 47.4363 48.1487 47.6111 48.7222C47.9025 49.353 47.6111 50.0412 46.9702 50.328L46.3875 50.5574C45.9213 50.7294 45.3969 50.8441 44.8724 50.8441C44.1732 50.8441 43.4157 50.6147 42.7747 50.2133C42.4834 50.0412 42.0755 49.9839 41.7259 50.0412L38.521 50.7294C37.8218 50.9015 37.1808 50.5 37.006 49.8118C36.8312 49.1236 37.2391 48.4928 37.9383 48.3207L38.8706 48.1487C39.3368 47.1738 39.5116 46.0841 39.4533 44.9945H38.4045C37.8218 44.9945 37.2973 44.4784 37.2973 43.9049C37.2973 43.3314 37.7635 42.8152 38.4045 42.8152H38.9289C38.8706 42.8152 38.8706 42.7579 38.8706 42.7579C38.2879 41.5535 37.9966 40.5786 37.9966 39.8331C37.9966 37.367 39.9778 35.4745 42.4834 35.4745C44.9307 35.4745 46.9702 37.4817 46.9702 39.8904C46.9702 40.5213 46.4457 41.0947 45.7465 41.0947C45.1055 41.0947 44.5228 40.5786 44.5228 39.8904C44.5228 38.8008 43.6488 37.9405 42.5416 37.9405C41.4345 37.9405 40.5605 38.7434 40.5605 39.8331C40.5605 40.0051 40.6187 40.5786 41.2014 41.7829C41.3419 42.0595 41.4448 42.3732 41.5403 42.6643C41.5636 42.7354 41.5865 42.8051 41.6093 42.8726H44.9307C45.5134 42.8726 46.0378 43.3887 46.0378 43.9622C46.0378 44.5357 45.5717 45.0518 44.9307 45.0518H42.0172C42.0755 45.9121 42.0172 46.7723 41.7841 47.6326C42.5999 47.5752 43.474 47.7473 44.1732 48.2061C44.5811 48.4354 45.1055 48.4928 45.5134 48.3207Z", fill: colourFill })));
};

var ServiceIcon$q = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M14.3144 49.7377L9.74592 45.1692C8.76597 44.1893 7.98201 43.0313 7.43609 41.7575L5.19977 36.5395C4.85493 35.7348 4.06375 35.2131 3.18835 35.2131C2.44432 35.2131 1.75127 35.5912 1.34846 36.2167C0.945646 36.8423 0.88827 37.6297 1.19614 38.307L5.11514 46.9288C5.59561 47.9859 6.26228 48.9479 7.08331 49.7689L14.3144 57H23.9975V54.1389C24.0298 51.9974 23.3344 49.9084 22.025 48.2135C21.2929 47.2481 20.2962 46.5161 19.1559 46.1065C16.9362 45.1698 14.89 43.8659 13.1034 42.2494C11.6767 41.0581 9.57595 41.1551 8.26505 42.4728L8.2625 42.4754", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24.9976 57H13.9976C13.4453 57 12.9976 57.4477 12.9976 58V66C12.9976 66.5523 13.4453 67 13.9976 67H24.9976C25.5498 67 25.9976 66.5523 25.9976 66V58C25.9976 57.4477 25.5498 57 24.9976 57Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M22.9976 62H21.9976", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M45.6807 49.7377L50.2492 45.1692C51.2292 44.1893 52.0131 43.0313 52.559 41.7575L54.7954 36.5395C55.1402 35.7348 55.9314 35.2131 56.8068 35.2131C57.5508 35.2131 58.2439 35.5912 58.6467 36.2167C59.0495 36.8423 59.1068 37.6297 58.799 38.307L54.88 46.9288C54.3995 47.9859 53.7328 48.9479 52.9118 49.7689L45.6807 57H35.9977V54.1389C35.9653 51.9974 36.6607 49.9084 37.9701 48.2135C38.7022 47.2481 39.6989 46.5161 40.8392 46.1065C43.059 45.1698 45.1051 43.8659 46.8917 42.2494C48.3184 41.0581 50.4192 41.1551 51.7301 42.4728L51.7326 42.4754", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M34.9976 67H45.9976C46.5498 67 46.9976 66.5523 46.9976 66V58C46.9976 57.4477 46.5498 57 45.9976 57H34.9976C34.4453 57 33.9976 57.4477 33.9976 58V66C33.9976 66.5523 34.4453 67 34.9976 67Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M36.9976 62H37.9976", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M46.9976 42.16V34V23H49.9976L46.9976 20.9L45.7076 20L29.9976 9L12.9976 20.9L9.99756 23H12.9976V34V42.16", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M23.1177 50H34.9977H36.8777", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M29.9976 28H17.9976C17.4453 28 16.9976 28.4477 16.9976 29V34C16.9976 34.5523 17.4453 35 17.9976 35H29.9976C30.5498 35 30.9976 34.5523 30.9976 34V29C30.9976 28.4477 30.5498 28 29.9976 28Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M41.9976 28H35.9976C35.4453 28 34.9976 28.4477 34.9976 29V34C34.9976 34.5523 35.4453 35 35.9976 35H41.9976C42.5498 35 42.9976 34.5523 42.9976 34V29C42.9976 28.4477 42.5498 28 41.9976 28Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M36.8776 50H34.9976V41C34.9992 40.4484 35.4459 40.0016 35.9976 40H39.9976C40.5492 40.0016 40.9959 40.4484 40.9976 41V46.05", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var ServiceIcon$r = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M41.999 28.78H35.998V33.78H41.999V28.78Z", fill: colourFill }),
        React__default.createElement("path", { d: "M13.998 57.78V65.78H24.998V57.78H13.998ZM22.998 62.78H21.998C21.4458 62.78 20.998 62.3323 20.998 61.78C20.998 61.2277 21.4458 60.78 21.998 60.78H22.998C23.5503 60.78 23.998 61.2277 23.998 61.78C23.998 62.3323 23.5503 62.78 22.998 62.78Z", fill: colourFill }),
        React__default.createElement("path", { d: "M22.9979 55.78V53.9187C23.0282 52.0049 22.4104 50.1371 21.2449 48.6189C20.6338 47.803 19.7979 47.1833 18.8397 46.8357C16.4897 45.8782 14.3293 44.5094 12.4598 42.7937C11.5241 42.0238 10.1808 42.002 9.22052 42.7409C9.58127 43.2803 9.99405 43.7831 10.4529 44.2419L15.0223 48.8103C15.4128 49.2008 15.4128 49.8339 15.0223 50.2244C14.6318 50.6148 13.9987 50.6148 13.6082 50.2244L9.03886 45.656C7.968 44.5871 7.11205 43.3227 6.51737 41.9314L4.28106 36.7126C4.09392 36.2754 3.66386 35.9922 3.18829 35.9929C2.78435 35.9929 2.40809 36.1982 2.18935 36.5377C1.9706 36.8773 1.93932 37.3048 2.10629 37.6726L6.02621 46.2946C6.4556 47.243 7.0535 48.1056 7.79086 48.8406L14.7293 55.78H22.9979Z", fill: colourFill }),
        React__default.createElement("path", { d: "M29.999 28.78H17.998V33.78H29.999V28.78Z", fill: colourFill }),
        React__default.createElement("path", { d: "M29.9978 10L13.1577 21.79C13.6409 21.8724 13.9952 22.2898 13.9978 22.78V41.47C15.6151 42.9233 17.4639 44.0961 19.4678 44.94C20.795 45.4057 21.9563 46.2506 22.8079 47.37C23.1589 47.8116 23.47 48.2835 23.7378 48.78H33.9978V40.78C34.001 39.6768 34.8946 38.7832 35.9978 38.78H39.9978C41.101 38.7832 41.9946 39.6768 41.9978 40.78V44.27C43.4194 43.4696 44.7591 42.5318 45.9978 41.47V22.78C46.0004 22.2898 46.3547 21.8724 46.8379 21.79L29.9978 10ZM29.9978 35.78H17.9978C16.8946 35.7768 16.0011 34.8832 15.9978 33.78V28.78C16.001 27.6768 16.8946 26.7832 17.9978 26.78H29.9978C31.101 26.7832 31.9946 27.6768 31.9978 28.78V33.78C31.9946 34.8832 31.101 35.7768 29.9978 35.78ZM41.9978 35.78H35.9978C34.8946 35.7768 34.0011 34.8832 33.9978 33.78V28.78C34.001 27.6768 34.8946 26.7832 35.9978 26.78H41.9978C43.101 26.7832 43.9946 27.6768 43.9978 28.78V33.78C43.9946 34.8832 43.101 35.7768 41.9978 35.78Z", fill: colourFill }),
        React__default.createElement("path", { d: "M34.998 57.78V65.78H45.998V57.78H34.998ZM37.998 62.78H36.998C36.4458 62.78 35.998 62.3323 35.998 61.78C35.998 61.2277 36.4458 60.78 36.998 60.78H37.998C38.5503 60.78 38.998 61.2277 38.998 61.78C38.998 62.3323 38.5503 62.78 37.998 62.78Z", fill: colourFill }),
        React__default.createElement("path", { d: "M57.8062 36.5378C57.5901 36.1954 57.2121 35.9893 56.8072 35.9929C56.3317 35.9922 55.9016 36.2754 55.7145 36.7126L53.4781 41.9314C52.8835 43.3227 52.0275 44.5871 50.9566 45.656L46.3873 50.2244C45.9968 50.6149 45.3637 50.6149 44.9732 50.2244C44.5828 49.8339 44.5828 49.2008 44.9733 48.8103L49.5426 44.2419C50.0014 43.7837 50.4139 43.2812 50.774 42.7419C49.8141 42.002 48.4701 42.0239 47.5348 42.7947C45.7224 44.4405 43.6497 45.7743 41.401 46.7419C41.3888 46.7474 41.3764 46.751 41.364 46.7559C41.2954 46.7808 41.2232 46.8123 41.1559 46.8347C40.1981 47.1828 39.3627 47.8025 38.7516 48.6179C37.5855 50.1363 36.9674 52.0045 36.9976 53.9187V55.78H45.2662L52.2046 48.8415C52.9418 48.1061 53.5397 47.2432 53.9693 46.2947L57.8892 37.6726C58.0597 37.3054 58.0283 36.8763 57.8062 36.5378Z", fill: colourFill }),
        React__default.createElement("path", { d: "M35.998 48.78H36.2584C36.5262 48.2826 36.8381 47.8104 37.1904 47.3689C37.9313 46.4138 38.8954 45.6553 39.998 45.16V40.78H35.998V48.78Z", fill: colourFill })));
};

var ServiceIcon$s = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.7357 21H7.33925C7.81855 21 8.2071 21.388 8.2071 21.8667C8.2071 22.3453 7.81855 22.7333 7.33925 22.7333H4.73791C4.73765 22.7333 4.73744 22.7333 4.73727 22.7334C4.73707 22.7335 4.73678 22.7337 4.73644 22.7341C4.73611 22.7344 4.73587 22.7347 4.73573 22.7349C4.73571 22.7351 4.73571 22.7353 4.7357 22.7355V58.2645C4.7357 58.2647 4.73572 58.2649 4.73573 58.2651C4.73588 58.2653 4.73611 58.2656 4.73644 58.2659C4.73678 58.2663 4.73708 58.2665 4.73729 58.2666C4.73745 58.2667 4.73765 58.2667 4.7379 58.2667C4.738 58.2667 4.73778 58.2667 4.7379 58.2667H24.1321C24.6114 58.2667 25 58.6547 25 59.1333C25 59.612 24.6114 60 24.1321 60H4.73316C3.77713 59.9972 3.0028 59.2239 3 58.2692L3 58.2667V22.7308C3.0028 21.7761 3.77713 21.0028 4.73316 21L4.7357 21Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.7929 21.8667C50.7929 21.388 51.1814 21 51.6607 21H54.2668C55.2229 21.0028 55.9972 21.7761 56 22.7308L56 22.7333L56 58.2692C55.9972 59.2239 55.2229 59.9972 54.2668 60H34.8678C34.3885 60 34 59.612 34 59.1333C34 58.6547 34.3885 58.2667 34.8678 58.2667L54.2618 58.2667C54.2619 58.2667 54.2617 58.2667 54.2618 58.2667C54.262 58.2667 54.2626 58.2666 54.2627 58.2666C54.2629 58.2665 54.2632 58.2663 54.2636 58.2659C54.2639 58.2656 54.2641 58.2653 54.2643 58.2651C54.2643 58.2649 54.2643 58.2647 54.2643 58.2645V22.7355C54.2643 22.7353 54.2643 22.7351 54.2643 22.7349C54.2641 22.7347 54.2639 22.7344 54.2636 22.7341C54.2632 22.7337 54.2629 22.7335 54.2627 22.7334C54.2626 22.7333 54.2623 22.7333 54.2621 22.7333H51.6607C51.1814 22.7333 50.7929 22.3453 50.7929 21.8667Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.5525 59.0476C24.9833 58.8947 25.4555 59.1226 25.6073 59.5567C26.189 61.2204 27.7492 62.3334 29.5 62.3334C31.2508 62.3334 32.811 61.2204 33.3927 59.5567C33.5445 59.1226 34.0167 58.8947 34.4475 59.0476C34.8783 59.2005 35.1045 59.6763 34.9528 60.1104C34.138 62.441 31.9524 64 29.5 64C27.0476 64 24.862 62.441 24.0472 60.1104C23.8954 59.6763 24.1217 59.2005 24.5525 59.0476Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.77778 15H12.3333C12.8243 15 13.2222 15.4001 13.2222 15.8936C13.2222 16.3871 12.8243 16.7872 12.3333 16.7872H8.78004C8.77978 16.7872 8.77956 16.7872 8.77939 16.7873C8.77918 16.7874 8.77889 16.7877 8.77854 16.788C8.77819 16.7883 8.77796 16.7886 8.7778 16.7889C8.77779 16.789 8.77778 16.7892 8.77778 16.7895V55.2105C8.77778 55.2108 8.7778 55.211 8.77781 55.2111C8.77796 55.2114 8.7782 55.2117 8.77854 55.212C8.77888 55.2123 8.77919 55.2126 8.7794 55.2127C8.77957 55.2128 8.77977 55.2128 8.78002 55.2128C8.78013 55.2128 8.7799 55.2128 8.78002 55.2128H30.1111C30.602 55.2128 31 55.6129 31 56.1064C31 56.5999 30.602 57 30.1111 57H8.77778L8.77518 57C7.79596 56.9971 7.00287 56.1998 7 55.2154L7 55.2128V16.7846C7.00287 15.8002 7.79596 15.0029 8.77518 15L8.77778 15Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 15.8837C20 15.3957 20.4104 15 20.9167 15H24.5841C28.1263 15.0027 30.9972 17.7704 31 21.1853L31 21.186L31 52.1163C31 52.6043 30.5896 53 30.0833 53C29.5771 53 29.1667 52.6043 29.1667 52.1163V21.1867C29.1647 18.7469 27.1137 16.7695 24.5829 16.7674H20.9167C20.4104 16.7674 20 16.3718 20 15.8837Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.9623 15L50.2988 15C51.2372 15.0029 51.9972 15.8002 52 16.7846L52 16.7872L52 55.2128L52 55.2154C51.9972 56.1998 51.2372 56.9971 50.2988 57L50.2963 57H29.8519C29.3814 57 29 56.5999 29 56.1064C29 55.6129 29.3814 55.2128 29.8519 55.2128L50.2938 55.2128C50.2939 55.2128 50.2937 55.2128 50.2938 55.2128C50.294 55.2128 50.2946 55.2127 50.2948 55.2127C50.295 55.2126 50.2952 55.2123 50.2956 55.212C50.2959 55.2117 50.2961 55.2114 50.2963 55.2111C50.2963 55.211 50.2963 55.2108 50.2963 55.2105V16.7895C50.2963 16.7892 50.2963 16.789 50.2963 16.7889C50.2961 16.7886 50.2959 16.7883 50.2956 16.788C50.2952 16.7877 50.2949 16.7874 50.2947 16.7873C50.2946 16.7872 50.2944 16.7872 50.2941 16.7872H34.9633C32.6116 16.7894 30.7057 18.7887 30.7037 21.2557V52.5319C30.7037 53.0254 30.3223 53.4255 29.8519 53.4255C29.3814 53.4255 29 53.0254 29 52.5319L29 21.2546C29.0026 17.8014 31.6705 15.0027 34.9623 15Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.77778 46H24.7785C28.2134 46.0028 30.9973 48.8499 31 52.3629C31.0004 52.865 30.6027 53.2723 30.1118 53.2727C29.6209 53.2731 29.2226 52.8664 29.2222 52.3644C29.2203 49.8545 27.2314 47.8203 24.7774 47.8182H8.78004C8.77978 47.8182 8.77956 47.8182 8.77939 47.8182C8.77918 47.8184 8.77889 47.8186 8.77854 47.819C8.77819 47.8193 8.77796 47.8196 8.7778 47.8198C8.77779 47.82 8.77778 47.8202 8.77778 47.8205V55.0909C8.77778 55.593 8.37981 56 7.88889 56C7.39797 56 7 55.593 7 55.0909V47.8155C7.00287 46.8141 7.79596 46.0029 8.77518 46L8.77778 46Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.9623 46L50.2988 46C51.2372 46.0029 51.9972 46.8141 52 47.8155L52 47.8182L52 55.0909C52 55.593 51.6186 56 51.1481 56C50.6777 56 50.2963 55.593 50.2963 55.0909V47.8205C50.2963 47.8202 50.2963 47.82 50.2963 47.8198C50.2961 47.8196 50.2959 47.8193 50.2956 47.819C50.2952 47.8186 50.2949 47.8184 50.2947 47.8182C50.2946 47.8182 50.2944 47.8182 50.2941 47.8182H34.9633C32.6116 47.8203 30.7056 49.8545 30.7037 52.3644C30.7033 52.8664 30.3216 53.2731 29.8512 53.2727C29.3807 53.2723 28.9996 52.865 29 52.3629C29.0026 48.8499 31.6705 46.0028 34.9623 46Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 51.5C7 51.2239 7.38376 51 7.85714 51H24.1429C24.6162 51 25 51.2239 25 51.5C25 51.7761 24.6162 52 24.1429 52H7.85714C7.38376 52 7 51.7761 7 51.5Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34 51.5C34 51.2239 34.3838 51 34.8571 51H51.1429C51.6162 51 52 51.2239 52 51.5C52 51.7761 51.6162 52 51.1429 52H34.8571C34.3838 52 34 51.7761 34 51.5Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 12.7778C11 11.7959 11.8208 11 12.8333 11H20.1667C21.1792 11 22 11.7959 22 12.7778V33.2222C22 34.2041 21.1792 35 20.1667 35H12.8333C11.8208 35 11 34.2041 11 33.2222V12.7778ZM20.1667 12.7778L12.8333 12.7778V33.2222H20.1667V12.7778Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 33C13.5523 33 14 33.4477 14 34V38C14 38.5523 13.5523 39 13 39C12.4477 39 12 38.5523 12 38V34C12 33.4477 12.4477 33 13 33Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.5 33C16.7761 33 17 33.4477 17 34V38C17 38.5523 16.7761 39 16.5 39C16.2239 39 16 38.5523 16 38V34C16 33.4477 16.2239 33 16.5 33Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 33C20.5523 33 21 33.4477 21 34V38C21 38.5523 20.5523 39 20 39C19.4477 39 19 38.5523 19 38V34C19 33.4477 19.4477 33 20 33Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35 21C35 20.4477 35.3918 20 35.875 20H48.125C48.6082 20 49 20.4477 49 21C49 21.5523 48.6082 22 48.125 22H35.875C35.3918 22 35 21.5523 35 21Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35 25C35 24.4477 35.3918 24 35.875 24H48.125C48.6082 24 49 24.4477 49 25C49 25.5523 48.6082 26 48.125 26H35.875C35.3918 26 35 25.5523 35 25Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35 30C35 29.4477 35.3918 29 35.875 29H48.125C48.6082 29 49 29.4477 49 30C49 30.5523 48.6082 31 48.125 31H35.875C35.3918 31 35 30.5523 35 30Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35 34C35 33.4477 35.3918 33 35.875 33H48.125C48.6082 33 49 33.4477 49 34C49 34.5523 48.6082 35 48.125 35H35.875C35.3918 35 35 34.5523 35 34Z", fill: colourFill })));
};

var ServiceIcon$t = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M35.1786 52.6964H52.2143V49.8571H35.1786C32.5655 49.8581 30.4474 51.9762 30.4464 54.5893C30.4464 55.112 30.0227 55.5357 29.5 55.5357C28.9773 55.5357 28.5536 55.112 28.5536 54.5893C28.5526 51.9762 26.4345 49.8581 23.8214 49.8571H6.78571V52.6964H23.8214C24.3441 52.6964 24.7679 53.1202 24.7679 53.6429C24.7679 54.1656 24.3441 54.5893 23.8214 54.5893H6.78571V57.4286H52.2143V54.5893H35.1786C34.6559 54.5893 34.2321 54.1656 34.2321 53.6429C34.2321 53.1202 34.6559 52.6964 35.1786 52.6964ZM35.1786 16.7321C32.5655 16.7331 30.4474 18.8512 30.4464 21.4643V49.9613C31.6892 48.6836 33.3962 47.9633 35.1786 47.9643H52.2143V16.7321H35.1786ZM49.375 35.6607H36.125C35.6023 35.6607 35.1786 35.237 35.1786 34.7143C35.1786 34.1916 35.6023 33.7679 36.125 33.7679H49.375C49.8977 33.7679 50.3214 34.1916 50.3214 34.7143C50.3214 35.237 49.8977 35.6607 49.375 35.6607ZM49.375 30.9286H36.125C35.6023 30.9286 35.1786 30.5048 35.1786 29.9821C35.1786 29.4594 35.6023 29.0357 36.125 29.0357H49.375C49.8977 29.0357 50.3214 29.4594 50.3214 29.9821C50.3214 30.5048 49.8977 30.9286 49.375 30.9286ZM49.375 26.1964H36.125C35.6023 26.1964 35.1786 25.7727 35.1786 25.25C35.1786 24.7273 35.6023 24.3036 36.125 24.3036H49.375C49.8977 24.3036 50.3214 24.7273 50.3214 25.25C50.3214 25.7727 49.8977 26.1964 49.375 26.1964ZM49.375 21.4643H36.125C35.6023 21.4643 35.1786 21.0406 35.1786 20.5179C35.1786 19.9952 35.6023 19.5714 36.125 19.5714H49.375C49.8977 19.5714 50.3214 19.9952 50.3214 20.5179C50.3214 21.0406 49.8977 21.4643 49.375 21.4643ZM11.5179 12V33.7679H19.0893V12H11.5179ZM23.8214 16.7321H20.9821V33.7679C20.978 34.44 20.6178 35.0595 20.0357 35.3957V38.5C20.0357 39.0227 19.612 39.4464 19.0893 39.4464C18.5666 39.4464 18.1429 39.0227 18.1429 38.5V35.6607H16.25V38.5C16.25 39.0227 15.8263 39.4464 15.3036 39.4464C14.7809 39.4464 14.3571 39.0227 14.3571 38.5V35.6607H12.4643V38.5C12.4643 39.0227 12.0406 39.4464 11.5179 39.4464C10.9952 39.4464 10.5714 39.0227 10.5714 38.5V35.3957C9.98937 35.0595 9.62917 34.44 9.625 33.7679V16.7321H6.78571V47.9643H23.8214C25.6038 47.9633 27.3108 48.6836 28.5536 49.9613V21.4643C28.5526 18.8512 26.4345 16.7331 23.8214 16.7321ZM35.1786 52.6964H52.2143V49.8571H35.1786C32.5655 49.8581 30.4474 51.9762 30.4464 54.5893C30.4464 55.112 30.0227 55.5357 29.5 55.5357C28.9773 55.5357 28.5536 55.112 28.5536 54.5893C28.5526 51.9762 26.4345 49.8581 23.8214 49.8571H6.78571V52.6964H23.8214C24.3441 52.6964 24.7679 53.1202 24.7679 53.6429C24.7679 54.1656 24.3441 54.5893 23.8214 54.5893H6.78571V57.4286H52.2143V54.5893H35.1786C34.6559 54.5893 34.2321 54.1656 34.2321 53.6429C34.2321 53.1202 34.6559 52.6964 35.1786 52.6964ZM52.2143 57.4286V54.5893H35.1786C34.6559 54.5893 34.2321 54.1656 34.2321 53.6429C34.2321 53.1202 34.6559 52.6964 35.1786 52.6964H52.2143V49.8571H35.1786C32.5655 49.8581 30.4474 51.9762 30.4464 54.5893C30.4464 55.112 30.0227 55.5357 29.5 55.5357C28.9773 55.5357 28.5536 55.112 28.5536 54.5893C28.5526 51.9762 26.4345 49.8581 23.8214 49.8571H6.78571V52.6964H23.8214C24.3441 52.6964 24.7679 53.1202 24.7679 53.6429C24.7679 54.1656 24.3441 54.5893 23.8214 54.5893H6.78571V57.4286H52.2143ZM54.1071 22.4107V57.4286C54.1041 58.4727 53.2584 59.3184 52.2143 59.3214H6.78571C5.74159 59.3184 4.89593 58.4727 4.89286 57.4286V22.4107H3V61.2143H24.1527C24.1621 61.2143 24.1716 61.2238 24.1811 61.2238C24.2519 61.2263 24.3221 61.239 24.3893 61.2616C24.4408 61.2698 24.4914 61.2824 24.5407 61.2995C24.5918 61.3287 24.6394 61.3636 24.6827 61.4036C24.7381 61.4304 24.7892 61.4655 24.8341 61.5077C24.8658 61.5496 24.8943 61.5939 24.9193 61.6402C24.9659 61.6942 25.0042 61.7548 25.0329 61.82C25.0329 61.8295 25.0423 61.8389 25.0423 61.8484C25.7105 63.7372 27.4965 64.9999 29.5 64.9999C31.5035 64.9999 33.2895 63.7372 33.9577 61.8484C33.9577 61.8389 33.9672 61.8295 33.9672 61.82C33.9959 61.7548 34.0342 61.6942 34.0808 61.6402C34.1013 61.5942 34.1301 61.5525 34.166 61.5171C34.2141 61.4733 34.2646 61.4322 34.3174 61.3941C34.3647 61.3657 34.4026 61.3279 34.4594 61.2995C34.5115 61.2814 34.5655 61.2687 34.6202 61.2616C34.6844 61.2399 34.7513 61.2272 34.819 61.2238C34.8285 61.2238 34.8379 61.2143 34.8474 61.2143H56V22.4107H54.1071ZM35.1786 52.6964H52.2143V49.8571H35.1786C32.5655 49.8581 30.4474 51.9762 30.4464 54.5893C30.4464 55.112 30.0227 55.5357 29.5 55.5357C28.9773 55.5357 28.5536 55.112 28.5536 54.5893C28.5526 51.9762 26.4345 49.8581 23.8214 49.8571H6.78571V52.6964H23.8214C24.3441 52.6964 24.7679 53.1202 24.7679 53.6429C24.7679 54.1656 24.3441 54.5893 23.8214 54.5893H6.78571V57.4286H52.2143V54.5893H35.1786C34.6559 54.5893 34.2321 54.1656 34.2321 53.6429C34.2321 53.1202 34.6559 52.6964 35.1786 52.6964ZM35.1786 52.6964H52.2143V49.8571H35.1786C32.5655 49.8581 30.4474 51.9762 30.4464 54.5893C30.4464 55.112 30.0227 55.5357 29.5 55.5357C28.9773 55.5357 28.5536 55.112 28.5536 54.5893C28.5526 51.9762 26.4345 49.8581 23.8214 49.8571H6.78571V52.6964H23.8214C24.3441 52.6964 24.7679 53.1202 24.7679 53.6429C24.7679 54.1656 24.3441 54.5893 23.8214 54.5893H6.78571V57.4286H52.2143V54.5893H35.1786C34.6559 54.5893 34.2321 54.1656 34.2321 53.6429C34.2321 53.1202 34.6559 52.6964 35.1786 52.6964Z", fill: colourFill })));
};

var ServiceIcon$u = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M62.0982 56.6885H35.4752C35.2231 56.6885 34.9812 56.7887 34.8029 56.967C34.6246 57.1453 34.5244 57.3872 34.5244 57.6394V69.0492C34.5244 69.3014 34.6246 69.5432 34.8029 69.7215C34.9812 69.8998 35.2231 70 35.4752 70H62.0982C62.3504 70 62.5922 69.8998 62.7705 69.7215C62.9488 69.5432 63.049 69.3014 63.049 69.0492V57.6394C63.049 57.3872 62.9488 57.1453 62.7705 56.967C62.5922 56.7887 62.3504 56.6885 62.0982 56.6885ZM61.1474 68.0984H36.4261V58.5902H61.1474V68.0984Z", fill: colourFill }),
        React__default.createElement("path", { d: "M62.0982 69.0492L10.7539 69.0492", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M62.0984 44.3279H49.7377V41.3004C50.2935 41.1068 50.7753 40.745 51.1162 40.2652C51.4571 39.7855 51.6402 39.2115 51.6402 38.6229C51.6402 38.0344 51.4571 37.4604 51.1162 36.9806C50.7753 36.5009 50.2935 36.1391 49.7377 35.9454V31.9672H60.1967C60.4489 31.9672 60.6907 31.867 60.8691 31.6887C61.0474 31.5104 61.1475 31.2686 61.1475 31.0164V23.4098C61.1475 23.3946 61.1295 23.2729 61.12 23.2254C61.112 23.1792 61.1006 23.1338 61.0857 23.0894C61.081 23.0751 61.043 22.9943 61.0287 22.9686C61.0073 22.9255 60.9825 22.8842 60.9545 22.845C60.9252 22.809 60.8934 22.775 60.8594 22.7433C60.828 22.7091 60.7939 22.6773 60.7577 22.6482C60.7183 22.6206 60.677 22.5958 60.6341 22.5741C60.6075 22.5598 60.5276 22.5218 60.5133 22.517C60.4687 22.502 60.4229 22.4906 60.3764 22.4828C60.3336 22.4771 60.2119 22.459 60.1967 22.459H52.7195L18.6155 12.986C18.5363 12.9634 18.4544 12.9516 18.3721 12.9508H18.3607C18.3445 12.9508 18.3293 12.9575 18.3131 12.9584C18.2463 12.961 18.18 12.9709 18.1153 12.9879C18.0849 12.9964 18.0573 13.0069 18.0288 13.0174C17.9762 13.0369 17.9256 13.0614 17.8776 13.0906C17.8501 13.1062 17.8234 13.1234 17.7978 13.1419C17.7826 13.1524 17.7664 13.159 17.7512 13.1714L6.34134 22.6796C6.32993 22.6891 6.2301 22.8127 6.19016 22.8698C6.15437 22.9141 6.12256 22.9615 6.09508 23.0114C6.05436 23.1281 6.02538 23.2485 6.00856 23.3708C6.00856 23.3851 6 23.3975 6 23.4117V31.0183C6 31.0335 6.0057 31.0468 6.00666 31.062C6.0099 31.1094 6.01689 31.1565 6.02757 31.2027C6.0355 31.2489 6.04694 31.2943 6.0618 31.3387C6.0618 31.353 6.0618 31.3682 6.07226 31.3824C6.08462 31.411 6.10459 31.4328 6.11885 31.4595C6.14025 31.5026 6.16505 31.5439 6.19302 31.5831C6.22237 31.6191 6.25414 31.6531 6.2881 31.6848C6.31958 31.719 6.35359 31.7508 6.38984 31.7799C6.42922 31.8075 6.47053 31.8323 6.51344 31.8541C6.54007 31.8683 6.56193 31.8883 6.59046 31.9006C6.60187 31.9006 6.61423 31.9006 6.62564 31.9073C6.72963 31.9464 6.83974 31.9666 6.95082 31.9672H13.6066V69.0492C13.6066 69.0644 13.6123 69.0777 13.6132 69.0929C13.6165 69.1403 13.6235 69.1873 13.6341 69.2336C13.6421 69.2798 13.6535 69.3252 13.6684 69.3696C13.6731 69.3839 13.6731 69.3991 13.6788 69.4133C13.6845 69.4276 13.7111 69.4637 13.7254 69.4903C13.7468 69.5335 13.7716 69.5748 13.7996 69.614C13.8289 69.65 13.8607 69.684 13.8947 69.7157C13.9261 69.7499 13.9601 69.7817 13.9964 69.8108C14.0358 69.8384 14.0771 69.8632 14.12 69.8849C14.1466 69.8992 14.1685 69.9192 14.197 69.9315C14.2084 69.9363 14.2208 69.9315 14.2322 69.9382C14.3361 69.9779 14.4462 69.9988 14.5574 70H22.1639C22.4161 70 22.658 69.8998 22.8363 69.7215C23.0146 69.5432 23.1148 69.3013 23.1148 69.0492V47.1803H27.8689C28.121 47.1803 28.3629 47.0801 28.5412 46.9018C28.7195 46.7235 28.8197 46.4817 28.8197 46.2295V31.9672H47.8361V35.9454C47.2803 36.1391 46.7985 36.5009 46.4576 36.9806C46.1167 37.4604 45.9335 38.0344 45.9335 38.6229C45.9335 39.2115 46.1167 39.7855 46.4576 40.2652C46.7985 40.745 47.2803 41.1068 47.8361 41.3004V44.3279H35.4754C35.2232 44.3279 34.9814 44.428 34.8031 44.6063C34.6248 44.7847 34.5246 45.0265 34.5246 45.2787V49.082C34.5246 49.3341 34.6248 49.576 34.8031 49.7543C34.9814 49.9326 35.2232 50.0328 35.4754 50.0328H62.0984C62.3505 50.0328 62.5924 49.9326 62.7707 49.7543C62.949 49.576 63.0492 49.3341 63.0492 49.082V45.2787C63.0492 45.0265 62.949 44.7847 62.7707 44.6063C62.5924 44.428 62.3505 44.3279 62.0984 44.3279ZM24.4592 30.0656L28.8197 25.7051V30.0656H24.4592ZM16.8527 30.0656L21.2131 25.7051V30.0656H16.8527ZM44.9836 22.459H22.8076L19.9552 15.3326L45.615 22.459H44.9836ZM15.5082 24.3606H19.8687L15.5082 28.7211V24.3606ZM15.9617 22.459L18.3607 16.4612L20.7596 22.459H15.9617ZM23.1148 24.3606H27.4752L23.1148 28.7211V24.3606ZM13.9137 22.459H9.57698L16.0787 17.0393L13.9137 22.459ZM7.90164 24.3606H12.2621L7.90164 28.7211V24.3606ZM30.7213 24.3606H35.0818L30.7213 28.7211V24.3606ZM38.3279 24.3606H42.6883L38.3279 28.7211V24.3606ZM45.9344 24.3606H50.2949L45.9344 28.7211V24.3606ZM59.2459 30.0656H54.8854L59.2459 25.7051V30.0656ZM53.541 28.7211V24.3606H57.9014L53.541 28.7211ZM13.6066 25.7051V30.0656H9.2461L13.6066 25.7051ZM21.2131 60.4918H16.8527L21.2131 56.1313V60.4918ZM15.5082 59.1473V54.7869H19.8687L15.5082 59.1473ZM15.5082 62.3934H19.8687L15.5082 66.7539V62.3934ZM21.2131 52.8852H16.8527L21.2131 48.5248V52.8852ZM15.5082 51.5408V47.1803H19.8687L15.5082 51.5408ZM21.2131 68.0983H16.8527L21.2131 63.7379V68.0983ZM22.1639 45.2787H15.5082V31.9672H17.4098V42.4262C17.4104 42.5509 17.4353 42.6743 17.483 42.7894C17.5795 43.0223 17.7646 43.2073 17.9974 43.3038C18.1126 43.3516 18.236 43.3764 18.3607 43.377H26.918V45.2787H22.1639ZM26.918 41.4754H24.4592L25.6886 40.246C25.8618 40.0667 25.9577 39.8265 25.9555 39.5772C25.9533 39.3279 25.8533 39.0894 25.677 38.9131C25.5008 38.7368 25.2623 38.6368 25.013 38.6347C24.7637 38.6325 24.5235 38.7283 24.3442 38.9015L21.7703 41.4754H20.6559L23.787 38.3443C23.9602 38.165 24.056 37.9248 24.0539 37.6755C24.0517 37.4262 23.9517 37.1878 23.7754 37.0115C23.5991 36.8352 23.3606 36.7352 23.1113 36.733C22.862 36.7309 22.6219 36.8267 22.4425 36.9999L19.3115 40.1309V31.9672H26.918V41.4754ZM36.4262 25.7051V30.0656H32.0658L36.4262 25.7051ZM44.0328 25.7051V30.0656H39.6723L44.0328 25.7051ZM51.6393 25.7051V30.0656H47.2789L51.6393 25.7051ZM48.7869 37.6721C48.9749 37.6721 49.1588 37.7279 49.3151 37.8324C49.4715 37.9368 49.5934 38.0853 49.6653 38.2591C49.7373 38.4328 49.7561 38.624 49.7194 38.8084C49.6827 38.9929 49.5922 39.1623 49.4592 39.2953C49.3262 39.4282 49.1568 39.5188 48.9724 39.5555C48.7879 39.5922 48.5968 39.5733 48.423 39.5014C48.2493 39.4294 48.1008 39.3075 47.9963 39.1512C47.8918 38.9948 47.8361 38.811 47.8361 38.6229C47.8361 38.3708 47.9362 38.1289 48.1146 37.9506C48.2929 37.7723 48.5347 37.6721 48.7869 37.6721ZM61.1475 48.1311H36.4262V46.2295H61.1475V48.1311Z", fill: colourFill }),
        React__default.createElement("path", { d: "M18 15C18.6826 13.8243 20.1877 14.7833 19.5085 13.6056C18.8294 12.4279 17.5726 11.703 16.2131 11.7049C16.2131 8.55418 13.6589 6 10.5082 6C7.35746 6 4.80328 8.55418 4.80328 11.7049C2.70279 11.7049 1 13.4077 1 15.5082C1 17.6087 2.70279 19.3115 4.80328 19.3115H11.9344", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M39.2785 66.1967H43.0817C43.3339 66.1967 43.5758 66.0966 43.7541 65.9183C43.9324 65.7399 44.0326 65.4981 44.0326 65.2459V61.4426C44.0326 61.1905 43.9324 60.9486 43.7541 60.7703C43.5758 60.592 43.3339 60.4918 43.0817 60.4918H39.2785C39.0263 60.4918 38.7844 60.592 38.6061 60.7703C38.4278 60.9486 38.3276 61.1905 38.3276 61.4426V65.2459C38.3276 65.4981 38.4278 65.7399 38.6061 65.9183C38.7844 66.0966 39.0263 66.1967 39.2785 66.1967ZM40.2293 62.3935H42.1309V64.2951H40.2293V62.3935Z", fill: colourFill }),
        React__default.createElement("path", { d: "M46.8854 66.1967H50.6887C50.9408 66.1967 51.1827 66.0966 51.361 65.9183C51.5393 65.7399 51.6395 65.4981 51.6395 65.2459V61.4426C51.6395 61.1905 51.5393 60.9486 51.361 60.7703C51.1827 60.592 50.9408 60.4918 50.6887 60.4918H46.8854C46.6332 60.4918 46.3914 60.592 46.2131 60.7703C46.0347 60.9486 45.9346 61.1905 45.9346 61.4426V65.2459C45.9346 65.4981 46.0347 65.7399 46.2131 65.9183C46.3914 66.0966 46.6332 66.1967 46.8854 66.1967ZM47.8362 62.3935H49.7378V64.2951H47.8362V62.3935Z", fill: colourFill }),
        React__default.createElement("path", { d: "M54.4918 66.1967H58.2951C58.5473 66.1967 58.7891 66.0966 58.9674 65.9183C59.1458 65.7399 59.2459 65.4981 59.2459 65.2459V61.4426C59.2459 61.1905 59.1458 60.9486 58.9674 60.7703C58.7891 60.592 58.5473 60.4918 58.2951 60.4918H54.4918C54.2397 60.4918 53.9978 60.592 53.8195 60.7703C53.6412 60.9486 53.541 61.1905 53.541 61.4426V65.2459C53.541 65.4981 53.6412 65.7399 53.8195 65.9183C53.9978 66.0966 54.2397 66.1967 54.4918 66.1967ZM55.4427 62.3935H57.3443V64.2951H55.4427V62.3935Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.3829 20.6062C43.8811 20.7722 44.1504 21.3107 43.9843 21.8089C43.8328 22.2635 43.94 22.4938 44.0419 22.6128C44.1708 22.7631 44.4669 22.9344 44.984 22.9344C45.5091 22.9344 45.9348 23.3601 45.9348 23.8853C45.9348 24.4104 45.5091 24.8361 44.984 24.8361C44.0748 24.8361 43.1824 24.532 42.5981 23.8504C41.9869 23.1373 41.8564 22.1791 42.1802 21.2075C42.3463 20.7094 42.8848 20.4401 43.3829 20.6062Z", fill: colourFill })));
};

var ServiceIcon$v = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M35.9722 23.3005H29.6157V29.59L35.9722 23.3005Z", fill: colourFill }),
        React__default.createElement("path", { d: "M42.9306 32.1995V26.1776L36.8418 32.1995H42.9306Z", fill: colourFill }),
        React__default.createElement("path", { d: "M59.19 23.3674C59.1231 23.3674 59.0562 23.3005 58.9893 23.3005H52.499V29.59L58.8555 23.5012C58.9224 23.4343 59.0562 23.3674 59.19 23.3674Z", fill: colourFill }),
        React__default.createElement("path", { d: "M60.2606 30.9282V24.5718C60.2606 24.5049 60.2606 24.4379 60.1937 24.371C60.1268 24.5049 60.0599 24.6387 59.993 24.7725L52.2314 32.1995H58.9224C59.6585 32.1995 60.2606 31.5973 60.2606 30.9282Z", fill: colourFill }),
        React__default.createElement("path", { d: "M37.1094 23.3005V29.59L43.3989 23.3005H37.1094Z", fill: colourFill }),
        React__default.createElement("path", { d: "M35.437 26.1776L29.3481 32.1995H35.437V26.1776Z", fill: colourFill }),
        React__default.createElement("path", { d: "M8.27176 32.1995H12.8216V26.0438L7.06738 31.1959C7.2012 31.7981 7.66957 32.1995 8.27176 32.1995Z", fill: colourFill }),
        React__default.createElement("path", { d: "M20.5158 16.208L44.6034 23.5012V29.6569L51.3613 23.3005H49.5547C49.4878 23.3005 49.4878 23.2336 49.4209 23.2336L18.9769 14C18.8877 14 18.6775 13.9437 18.5 14C18.3575 14.0452 18.174 14.2007 18.174 14.2007L7.33455 23.5012C7.06691 23.702 7 24.1034 7.06691 24.3711C7.06691 24.438 7 24.5049 7 24.5718V28.9878L13.2895 23.3005H10.0779L17.1034 17.3455L15.2968 23.3005H14.5608V29.5231L20.5827 23.3005H17.0365L19.0438 16.8771L22.7908 23.3005H21.7871V29.6569L28.4781 23.3005H24.6642L20.5158 16.208Z", fill: colourFill }),
        React__default.createElement("path", { d: "M4.89656 18.5862H11.6553L16 15L18 13.5C18 13.5 17.0027 12.7937 16.4828 12.7931C16.2267 12.7932 15.9811 12.6915 15.8 12.5104C15.6189 12.3293 15.5172 12.0837 15.5173 11.8276C15.5173 9.16139 13.3559 7 10.6897 7C8.02347 7 5.86208 9.16139 5.86208 11.8276C5.86215 12.0837 5.76045 12.3293 5.57936 12.5104C5.39828 12.6915 5.15265 12.7932 4.89656 12.7931C3.29683 12.7931 2 14.09 2 15.6897C2 17.2894 3.29683 18.5862 4.89656 18.5862Z", fill: colourFill }),
        React__default.createElement("path", { d: "M22.9248 53.8784V48.5925L16.4346 53.8784H22.9248Z", fill: colourFill }),
        React__default.createElement("path", { d: "M14.4268 55.5511V60.3017L19.9803 55.5511H14.4268Z", fill: colourFill }),
        React__default.createElement("path", { d: "M22.9249 60.9039V55.2166L16.3008 60.9039H22.9249Z", fill: colourFill }),
        React__default.createElement("path", { d: "M14.4268 62.5767V67.1934L19.9134 62.5767H14.4268Z", fill: colourFill }),
        React__default.createElement("path", { d: "M14.4268 48.5255V53.3431L20.3148 48.5255H14.4268Z", fill: colourFill }),
        React__default.createElement("path", { d: "M15.4308 69H21.921C22.4563 69 22.9247 68.5316 22.9247 67.9964V62.2421L14.9624 68.8662C15.0962 69 15.297 69 15.4308 69Z", fill: colourFill }),
        React__default.createElement("path", { d: "M27.9431 32.1326V26.1107L21.5197 32.1326H20.0477V26.1776L14.2266 32.1995H14.4273V46.9197H22.9249H27.4078C27.9431 46.9197 28.4115 46.4514 28.4115 45.9161V43.1728H19.0441C18.5088 43.1728 18.0404 42.8382 17.9735 42.3029C17.9735 42.236 17.9735 42.236 17.9735 42.1691C17.9735 42.1022 17.9735 42.1022 17.9735 42.0353V32.1326H19.6463V34.5414V40.0949L22.9918 37.084C23.3263 36.7494 23.8616 36.8163 24.1961 37.1509C24.5307 37.4854 24.4638 38.0207 24.1292 38.3552L20.583 41.4331H22.3896L24.6645 39.3589C24.9991 39.0243 25.5343 39.0913 25.8689 39.4258C26.2034 39.7604 26.1365 40.2956 25.802 40.6302L24.8652 41.4331H28.4115V34.5414V33.1363V32.0657H27.9431V32.1326Z", fill: colourFill }),
        React__default.createElement("path", { d: "M47.4807 34.073C47.7483 34.0061 48.016 34.0061 48.2836 34.0061C48.5513 34.0061 48.8858 34.0061 49.1535 34.073V32.1995H50.8262V26.0438L44.3359 32.1326H47.4807V34.073Z", fill: colourFill }),
        React__default.createElement("path", { d: "M51.7628 38.489C51.7628 36.6156 50.2239 35.0766 48.3504 35.0766C47.4137 35.0766 46.5438 35.4781 45.9416 36.0803C45.8078 36.2141 45.674 36.4148 45.5402 36.5486C45.5402 36.5486 45.5402 36.5486 45.5402 36.6156C45.2056 37.1508 44.938 37.8199 44.938 38.489C44.938 40.3625 46.4769 41.9014 48.3504 41.9014C50.2239 41.9684 51.7628 40.4294 51.7628 38.489Z", fill: colourFill }),
        React__default.createElement("path", { d: "M60.7956 44.444H49.1532V42.972C48.8856 43.0389 48.6179 43.0389 48.2834 43.0389C48.0158 43.0389 47.7481 42.972 47.4805 42.972V44.444H35.972C35.3029 44.444 34.7676 44.9793 34.7676 45.6484V48.5925C34.7676 49.2616 35.3029 49.7968 35.972 49.7968H60.7956C61.4647 49.7968 61.9999 49.2616 61.9999 48.5925V45.6484C61.9999 44.9793 61.4647 44.444 60.7956 44.444Z", fill: colourFill }),
        React__default.createElement("path", { d: "M62.3443 69L11 69", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M60.8628 57.6922H35.6378C35.437 57.6922 35.3032 57.826 35.3032 58.0267V68.1302C35.3032 68.3309 35.437 68.4647 35.6378 68.4647H60.7959C60.9967 68.4647 61.1305 68.3309 61.1305 68.1302V58.0267C61.1974 57.826 60.9967 57.6922 60.8628 57.6922ZM43.0648 64.8516C43.0648 65.0523 42.931 65.1861 42.7302 65.1861H39.184C38.9833 65.1861 38.8495 65.0523 38.8495 64.8516V61.3053C38.8495 61.1046 38.9833 60.9708 39.184 60.9708H42.7302C42.931 60.9708 43.0648 61.1046 43.0648 61.3053V64.8516ZM50.4918 64.8516C50.4918 65.0523 50.358 65.1861 50.1572 65.1861H46.611C46.4103 65.1861 46.2765 65.0523 46.2765 64.8516V61.3053C46.2765 61.1046 46.4103 60.9708 46.611 60.9708H50.1572C50.358 60.9708 50.4918 61.1046 50.4918 61.3053V64.8516ZM57.9188 64.7177C57.9188 64.9185 57.785 65.0523 57.5842 65.0523H54.038C53.8373 65.0523 53.7035 64.9185 53.7035 64.7177V61.1715C53.7035 60.9708 53.8373 60.837 54.038 60.837H57.5842C57.785 60.837 57.9188 60.9708 57.9188 61.1715V64.7177Z", fill: colourFill })));
};

var ServiceIcon$w = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M48.6575 25.6721L58.0938 16.2359L62.3197 20.4618L63.7116 19.0699L58.7897 14.148C58.4048 13.7632 57.7827 13.7632 57.3978 14.148L53.1719 18.374L46.9772 12.1793C46.5923 11.7944 45.9702 11.7944 45.5853 12.1793L39.3906 18.374L32.2116 11.1949C31.8267 10.81 31.2046 10.81 30.8197 11.1949L28.0703 13.9443L19.4147 5.28867C19.0298 4.90378 18.4077 4.90378 18.0228 5.28867L5.92188 17.3896L3.6647 15.1324C3.47964 14.9483 3.23059 14.844 2.96875 14.844H1V16.8127H2.56122L9.65561 23.9071C10.0405 24.292 10.6626 24.292 11.0475 23.9071L18.7188 16.2359L22.9447 20.4618C23.3296 20.8467 23.9517 20.8467 24.3366 20.4618L31.5156 13.2828L43.905 25.6721H1V27.6409H7.01355C6.31169 28.8182 5.92188 30.3233 5.92188 31.5784C5.92188 33.6938 7.01059 35.069 8.875 35.4204V38.469H10.8438V35.4204C12.7082 35.0699 13.7969 33.6938 13.7969 31.5784C13.7969 30.3233 13.4071 28.8182 12.7052 27.6409H29.1551L15.8188 66.6979C15.7843 66.8003 15.7656 66.9076 15.7656 67.0159V68.0002H17.7344V67.1793L31.2351 27.6409H33.7649L47.2656 67.1793V68.0002H49.2344V67.0159C49.2344 66.9076 49.2157 66.8003 49.1812 66.6979L35.8449 27.6409H52.2948C51.5929 28.8182 51.2031 30.3233 51.2031 31.5784C51.2031 33.6938 52.2918 35.069 54.1562 35.4204V38.469H56.125V35.4204C57.9894 35.0699 59.0781 33.6938 59.0781 31.5784C59.0781 30.3233 58.6883 28.8182 57.9865 27.6409H64V25.6721H48.6575ZM23.6406 18.374L19.4147 14.148C19.0298 13.7632 18.4077 13.7632 18.0228 14.148L10.3516 21.8193L7.31378 18.7815L18.7188 7.37653L26.6784 15.3362L23.6406 18.374ZM46.2812 14.2672L51.78 19.7659L46.2812 25.2646L40.7825 19.7659L46.2812 14.2672ZM11.8281 31.5784C11.8281 32.9398 11.2208 33.5471 9.85938 33.5471C8.49798 33.5471 7.89062 32.9398 7.89062 31.5784C7.89062 29.6775 9.04628 27.6409 9.85938 27.6409C10.6725 27.6409 11.8281 29.6775 11.8281 31.5784ZM57.1094 31.5784C57.1094 32.9398 56.502 33.5471 55.1406 33.5471C53.7792 33.5471 53.1719 32.9398 53.1719 31.5784C53.1719 29.6775 54.3275 27.6409 55.1406 27.6409C55.9537 27.6409 57.1094 29.6775 57.1094 31.5784Z", fill: colourFill }),
        React__default.createElement("path", { d: "M39.3906 12.8752C41.5622 12.8752 43.3281 11.1092 43.3281 8.93765C43.3281 6.76612 41.5622 5.00015 39.3906 5.00015C37.2191 5.00015 35.4531 6.76612 35.4531 8.93765C35.4531 11.1092 37.2191 12.8752 39.3906 12.8752ZM39.3906 6.9689C40.4754 6.9689 41.3594 7.85189 41.3594 8.93765C41.3594 10.0234 40.4754 10.9064 39.3906 10.9064C38.3049 10.9064 37.4219 10.0234 37.4219 8.93765C37.4219 7.85189 38.3049 6.9689 39.3906 6.9689Z", fill: colourFill }),
        React__default.createElement("path", { d: "M33.4844 31.5783H31.5156V35.5158H33.4844V31.5783Z", fill: colourFill }),
        React__default.createElement("path", { d: "M33.4844 37.4845H31.5156V42.4064H33.4844V37.4845Z", fill: colourFill }),
        React__default.createElement("path", { d: "M33.4844 45.3595H31.5156V51.2658H33.4844V45.3595Z", fill: colourFill }),
        React__default.createElement("path", { d: "M33.4844 55.2033H31.5156V62.0939H33.4844V55.2033Z", fill: colourFill }),
        React__default.createElement("path", { d: "M33.4844 66.0314H31.5156V68.0002H33.4844V66.0314Z", fill: colourFill }),
        React__default.createElement("path", { d: "M46.2812 42.4064V39.3578C48.1457 39.0074 49.2344 37.6312 49.2344 35.5158C49.2344 33.0499 47.7362 29.6095 45.2969 29.6095C42.8566 29.6095 41.3594 33.0499 41.3594 35.5158C41.3594 37.6312 42.4481 39.0064 44.3125 39.3578V42.4064H46.2812ZM43.3281 35.5158C43.3281 33.6149 44.4838 31.5783 45.2969 31.5783C46.11 31.5783 47.2656 33.6149 47.2656 35.5158C47.2656 36.8772 46.6583 37.4845 45.2969 37.4845C43.9355 37.4845 43.3281 36.8772 43.3281 35.5158Z", fill: colourFill }),
        React__default.createElement("path", { d: "M54.1562 49.297C54.1562 46.8312 52.658 43.3908 50.2188 43.3908C47.7785 43.3908 46.2812 46.8312 46.2812 49.297C46.2812 51.4124 47.37 52.7876 49.2344 53.139V56.1877H51.2031V53.139C53.0675 52.7876 54.1562 51.4124 54.1562 49.297ZM50.2188 51.2658C48.8574 51.2658 48.25 50.6584 48.25 49.297C48.25 47.3962 49.4057 45.3595 50.2188 45.3595C51.0318 45.3595 52.1875 47.3962 52.1875 49.297C52.1875 50.6584 51.5801 51.2658 50.2188 51.2658Z", fill: colourFill }),
        React__default.createElement("path", { d: "M58.0938 55.2033C55.6535 55.2033 54.1562 58.6427 54.1562 61.1095C54.1562 63.2249 55.245 64.6001 57.1094 64.9515V68.0002H59.0781V64.9515C60.9425 64.6011 62.0312 63.2249 62.0312 61.1095C62.0312 58.6427 60.533 55.2033 58.0938 55.2033ZM58.0938 63.0783C56.7324 63.0783 56.125 62.4709 56.125 61.1095C56.125 59.2077 57.2807 57.172 58.0938 57.172C58.9068 57.172 60.0625 59.2077 60.0625 61.1095C60.0625 62.4709 59.4551 63.0783 58.0938 63.0783Z", fill: colourFill }),
        React__default.createElement("path", { d: "M60.0625 39.4533C57.6222 39.4533 56.125 42.8937 56.125 45.3595C56.125 47.4749 57.2137 48.8501 59.0781 49.2015V52.2502H61.0469V49.2015C62.9113 48.8511 64 47.4749 64 45.3595C64 42.8937 62.5018 39.4533 60.0625 39.4533ZM60.0625 47.3283C58.7011 47.3283 58.0938 46.7209 58.0938 45.3595C58.0938 43.4587 59.2494 41.422 60.0625 41.422C60.8756 41.422 62.0312 43.4587 62.0312 45.3595C62.0312 46.7209 61.4239 47.3283 60.0625 47.3283Z", fill: colourFill }),
        React__default.createElement("path", { d: "M20.6875 42.4064V39.3578C22.5519 39.0074 23.6406 37.6312 23.6406 35.5158C23.6406 33.0499 22.1424 29.6095 19.7031 29.6095C17.2629 29.6095 15.7656 33.0499 15.7656 35.5158C15.7656 37.6312 16.8543 39.0064 18.7188 39.3578V42.4064H20.6875ZM17.7344 35.5158C17.7344 33.6149 18.89 31.5783 19.7031 31.5783C20.5162 31.5783 21.6719 33.6149 21.6719 35.5158C21.6719 36.8772 21.0645 37.4845 19.7031 37.4845C18.3417 37.4845 17.7344 36.8772 17.7344 35.5158Z", fill: colourFill }),
        React__default.createElement("path", { d: "M15.7656 56.1877V53.139C17.63 52.7886 18.7188 51.4124 18.7188 49.297C18.7188 46.8312 17.2205 43.3908 14.7812 43.3908C12.341 43.3908 10.8438 46.8312 10.8438 49.297C10.8438 51.4124 11.9325 52.7876 13.7969 53.139V56.1877H15.7656ZM12.8125 49.297C12.8125 47.3962 13.9682 45.3595 14.7812 45.3595C15.5943 45.3595 16.75 47.3962 16.75 49.297C16.75 50.6584 16.1426 51.2658 14.7812 51.2658C13.4199 51.2658 12.8125 50.6584 12.8125 49.297Z", fill: colourFill }),
        React__default.createElement("path", { d: "M6.90625 55.2033C4.46598 55.2033 2.96875 58.6427 2.96875 61.1095C2.96875 63.2249 4.05747 64.6001 5.92188 64.9515V68.0002H7.89062V64.9515C9.75503 64.6011 10.8438 63.2249 10.8438 61.1095C10.8438 58.6427 9.34553 55.2033 6.90625 55.2033ZM6.90625 63.0783C5.54486 63.0783 4.9375 62.4709 4.9375 61.1095C4.9375 59.2077 6.09316 57.172 6.90625 57.172C7.71934 57.172 8.875 59.2077 8.875 61.1095C8.875 62.4709 8.26764 63.0783 6.90625 63.0783Z", fill: colourFill }),
        React__default.createElement("path", { d: "M3.95312 52.2502H5.92188V49.2015C7.78628 48.8501 8.875 47.4749 8.875 45.3595C8.875 42.8937 7.37678 39.4533 4.9375 39.4533C2.49723 39.4533 1 42.8937 1 45.3595C1 47.4749 2.08872 48.8501 3.95312 49.2015V52.2502ZM2.96875 45.3595C2.96875 43.4587 4.12441 41.422 4.9375 41.422C5.75059 41.422 6.90625 43.4587 6.90625 45.3595C6.90625 46.7209 6.29889 47.3283 4.9375 47.3283C3.57611 47.3283 2.96875 46.7209 2.96875 45.3595Z", fill: colourFill })));
};

var ServiceIcon$x = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.6252 16.7044L48.6575 25.6721H63.8279L64 25.5L58 16.5L57.6252 16.7044ZM1.5 16.8127H2.56122L9.65561 23.9071C10.0405 24.292 10.6626 24.292 11.0475 23.9071L18.7188 16.2359L22.9447 20.4618C23.3296 20.8467 23.9517 20.8467 24.3366 20.4618L31.5156 13.2828L43.905 25.6721H1.5V16.8127ZM33.4845 68H47.2656V67.1793L33.7649 27.6409H31.2351L17.7344 67.1793V68H31.5157V66.0314H33.4845V68ZM19.4147 14.148L23.6406 18.374L26.6784 15.3362L18.7188 7.37653L7.31378 18.7815L10.3516 21.8193L18.0228 14.148C18.4077 13.7632 19.0298 13.7632 19.4147 14.148ZM51.78 19.7659L46.2812 14.2671L40.7825 19.7659L46.2812 25.2646L51.78 19.7659ZM31.5157 31.5783H33.4845V35.5158H31.5157V31.5783ZM33.4845 37.4845H31.5157V42.4064H33.4845V37.4845ZM31.5157 45.3595H33.4845V51.2658H31.5157V45.3595ZM33.4845 55.2033H31.5157V62.0939H33.4845V55.2033Z", fill: colourFill }),
        React__default.createElement("path", { d: "M39.3906 12.875C41.5622 12.875 43.3281 11.109 43.3281 8.9375C43.3281 6.76597 41.5622 5 39.3906 5C37.2191 5 35.4531 6.76597 35.4531 8.9375C35.4531 11.109 37.2191 12.875 39.3906 12.875Z", fill: colourFill }),
        React__default.createElement("path", { d: "M46.2812 42.4062V39.3576C48.1457 39.0072 49.2344 37.631 49.2344 35.5156C49.2344 33.0498 47.7362 29.6094 45.2969 29.6094C42.8566 29.6094 41.3594 33.0498 41.3594 35.5156C41.3594 37.631 42.4481 39.0062 44.3125 39.3576V42.4062H46.2812Z", fill: colourFill }),
        React__default.createElement("path", { d: "M54.1562 49.2969C54.1562 46.831 52.658 43.3906 50.2188 43.3906C47.7785 43.3906 46.2812 46.831 46.2812 49.2969C46.2812 51.4123 47.37 52.7875 49.2344 53.1389V56.1875H51.2031V53.1389C53.0675 52.7875 54.1562 51.4123 54.1562 49.2969Z", fill: colourFill }),
        React__default.createElement("path", { d: "M58.0938 55.2031C55.6535 55.2031 54.1562 58.6425 54.1562 61.1094C54.1562 63.2248 55.245 64.6 57.1094 64.9514V68H59.0781V64.9514C60.9425 64.601 62.0312 63.2248 62.0312 61.1094C62.0312 58.6425 60.533 55.2031 58.0938 55.2031Z", fill: colourFill }),
        React__default.createElement("path", { d: "M55.1377 25.7C52.6974 25.7 51.2002 29.1394 51.2002 31.6063C51.2002 33.7217 52.2889 35.0969 54.1533 35.4483V38.4969H56.1221V35.4483C57.9865 35.0978 59.0752 33.7217 59.0752 31.6063C59.0752 29.1394 57.577 25.7 55.1377 25.7Z", fill: colourFill }),
        React__default.createElement("path", { d: "M60.0625 39.4531C57.6222 39.4531 56.125 42.8935 56.125 45.3594C56.125 47.4748 57.2137 48.85 59.0781 49.2014V52.25H61.0469V49.2014C62.9113 48.851 64 47.4748 64 45.3594C64 42.8935 62.5018 39.4531 60.0625 39.4531Z", fill: colourFill }),
        React__default.createElement("path", { d: "M20.6875 42.4062V39.3576C22.5519 39.0072 23.6406 37.631 23.6406 35.5156C23.6406 33.0498 22.1424 29.6094 19.7031 29.6094C17.2629 29.6094 15.7656 33.0498 15.7656 35.5156C15.7656 37.631 16.8543 39.0062 18.7188 39.3576V42.4062H20.6875Z", fill: colourFill }),
        React__default.createElement("path", { d: "M10.772 38.5969V35.5483C12.6364 35.1978 13.7251 33.8217 13.7251 31.7062C13.7251 29.2404 12.2269 25.8 9.7876 25.8C7.34733 25.8 5.8501 29.2404 5.8501 31.7062C5.8501 33.8217 6.93882 35.1968 8.80322 35.5483V38.5969H10.772Z", fill: colourFill }),
        React__default.createElement("path", { d: "M15.7656 56.1875V53.1389C17.63 52.7885 18.7188 51.4123 18.7188 49.2969C18.7188 46.831 17.2205 43.3906 14.7812 43.3906C12.341 43.3906 10.8438 46.831 10.8438 49.2969C10.8438 51.4123 11.9325 52.7875 13.7969 53.1389V56.1875H15.7656Z", fill: colourFill }),
        React__default.createElement("path", { d: "M6.90625 55.2031C4.46598 55.2031 2.96875 58.6425 2.96875 61.1094C2.96875 63.2248 4.05747 64.6 5.92188 64.9514V68H7.89062V64.9514C9.75503 64.601 10.8438 63.2248 10.8438 61.1094C10.8438 58.6425 9.34553 55.2031 6.90625 55.2031Z", fill: colourFill }),
        React__default.createElement("path", { d: "M3.95312 52.25H5.92188V49.2014C7.78628 48.85 8.875 47.4748 8.875 45.3594C8.875 42.8935 7.37678 39.4531 4.9375 39.4531C2.49723 39.4531 1 42.8935 1 45.3594C1 47.4748 2.08872 48.85 3.95312 49.2014V52.25Z", fill: colourFill })));
};

var ServiceIcon$y = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M56.6401 22.9311C56.6307 22.6971 56.5312 22.4758 56.3622 22.3136C56.1933 22.1515 55.9682 22.061 55.734 22.0612H31.6314C31.4234 21.037 30.8677 20.1162 30.0586 19.4549C29.2494 18.7935 28.2365 18.4322 27.1914 18.4322C26.1463 18.4322 25.1334 18.7935 24.3242 19.4549C23.515 20.1162 22.9594 21.037 22.7514 22.0612H21.3017C21.0613 22.0612 20.8309 22.1567 20.6609 22.3266C20.491 22.4965 20.3955 22.727 20.3955 22.9673V27.4979H11.7875C9.59466 27.4979 7.57403 29.215 6.99864 31.5437L5.12299 37.8004L3.70492 38.779C2.97336 39.2867 2.47314 40.0639 2.31403 40.9401L0.0487476 53.236C-0.304637 55.0483 1.31731 56.9466 3.16578 56.9466H5.88412C6.12444 56.9466 6.35491 56.8511 6.52484 56.6812C6.69477 56.5113 6.79024 56.2808 6.79024 56.0405C6.79024 55.8002 6.69477 55.5697 6.52484 55.3997C6.35491 55.2298 6.12444 55.1344 5.88412 55.1344H3.17937C2.79179 55.1053 2.43141 54.9243 2.1768 54.6306C1.92219 54.337 1.794 53.9546 1.8202 53.5668L3.04799 46.9793H17.2241C17.4645 46.9793 17.6949 46.8839 17.8649 46.7139C18.0348 46.544 18.1303 46.3135 18.1303 46.0732C18.1303 45.8329 18.0348 45.6024 17.8649 45.4325C17.6949 45.2626 17.4645 45.1671 17.2241 45.1671H3.38325L4.08549 41.2663C4.12121 41.0663 4.19602 40.8753 4.30563 40.7043C4.41525 40.5333 4.55752 40.3855 4.7243 40.2696L6.17408 39.2774H20.3955V51.4374C19.3471 50.3024 17.9431 49.5585 16.4152 49.3285C14.8872 49.0985 13.3265 49.3961 11.9903 50.1721C10.6542 50.9482 9.62238 52.1564 9.06508 53.5976C8.50779 55.0388 8.45826 56.6268 8.92466 58.0999C9.39106 59.573 10.3455 60.8432 11.6307 61.7011C12.9159 62.5589 14.4551 62.9531 15.9944 62.8188C17.5337 62.6844 18.9813 62.0295 20.0985 60.962C21.2156 59.8945 21.9356 58.4782 22.1398 56.9466H34.8934C35.1337 56.9466 35.3642 56.8511 35.5341 56.6812C35.704 56.5113 35.7995 56.2808 35.7995 56.0405C35.7995 55.8002 35.704 55.5697 35.5341 55.3997C35.3642 55.2298 35.1337 55.1344 34.8934 55.1344H27.1914V34.7468H37.6117V56.0405C37.6246 57.7553 38.2854 59.4019 39.4615 60.6499C40.6376 61.898 42.242 62.6553 43.9531 62.7699C45.6641 62.8846 47.3552 62.3481 48.6873 61.2681C50.0194 60.1881 50.8939 58.6444 51.1355 56.9466H57.0932C57.2153 56.9467 57.3361 56.9221 57.4485 56.8743C57.5609 56.8265 57.6624 56.7565 57.747 56.6685C57.8317 56.5805 57.8976 56.4763 57.941 56.3621C57.9843 56.248 58.0042 56.1262 57.9993 56.0042L56.6401 22.9311ZM27.1914 20.249C27.753 20.2496 28.3006 20.4242 28.759 20.7487C29.2174 21.0732 29.564 21.5317 29.7512 22.0612H24.6316C24.8188 21.5317 25.1654 21.0732 25.6238 20.7487C26.0822 20.4242 26.6298 20.2496 27.1914 20.249V20.249ZM18.1303 37.4651V32.0284C18.1303 31.7881 18.0348 31.5577 17.8649 31.3877C17.6949 31.2178 17.4645 31.1223 17.2241 31.1223H11.7875C11.5471 31.1223 11.3167 31.2178 11.1467 31.3877C10.9768 31.5577 10.8813 31.7881 10.8813 32.0284C10.8813 32.2688 10.9768 32.4992 11.1467 32.6692C11.3167 32.8391 11.5471 32.9346 11.7875 32.9346H16.318V37.4651H7.11644L8.74744 32.0284C9.12801 30.4835 10.4373 29.3101 11.7875 29.3101H20.3955V37.4651H18.1303ZM15.4119 61.0241C14.4262 61.0241 13.4627 60.7318 12.6432 60.1842C11.8236 59.6366 11.1848 58.8583 10.8076 57.9476C10.4304 57.037 10.3317 56.0349 10.524 55.0682C10.7163 54.1015 11.191 53.2135 11.888 52.5165C12.5849 51.8195 13.4729 51.3449 14.4397 51.1526C15.4064 50.9603 16.4084 51.059 17.3191 51.4362C18.2297 51.8134 19.008 52.4522 19.5556 53.2717C20.1033 54.0913 20.3955 55.0548 20.3955 56.0405C20.3955 57.3622 19.8705 58.6298 18.9359 59.5644C18.0013 60.499 16.7337 61.0241 15.4119 61.0241ZM44.4076 61.0241C43.4219 61.0241 42.4584 60.7318 41.6388 60.1842C40.8193 59.6366 40.1805 58.8583 39.8033 57.9476C39.4261 57.037 39.3274 56.0349 39.5197 55.0682C39.712 54.1015 40.1866 53.2135 40.8836 52.5165C41.5806 51.8195 42.4686 51.3449 43.4353 51.1526C44.402 50.9603 45.4041 51.059 46.3147 51.4362C47.2254 51.8134 48.0037 52.4522 48.5513 53.2717C49.0989 54.0913 49.3912 55.0548 49.3912 56.0405C49.3912 57.3622 48.8661 58.6298 47.9315 59.5644C46.9969 60.499 45.7293 61.0241 44.4076 61.0241V61.0241ZM51.1355 55.1344C50.9598 53.8602 50.4262 52.662 49.5966 51.6791C48.767 50.6962 47.6755 49.9689 46.449 49.5817C45.2224 49.1945 43.9112 49.1634 42.6676 49.4919C41.4241 49.8203 40.2993 50.495 39.4239 51.4374V33.8407C39.4239 33.6004 39.3285 33.3699 39.1585 33.2C38.9886 33.03 38.7581 32.9346 38.5178 32.9346H26.2853C26.045 32.9346 25.8145 33.03 25.6446 33.2C25.4746 33.3699 25.3792 33.6004 25.3792 33.8407V55.1344H22.2078V23.8734H54.8641L55.734 45.1671H42.1423C41.902 45.1671 41.6715 45.2626 41.5016 45.4325C41.3316 45.6024 41.2362 45.8329 41.2362 46.0732C41.2362 46.3135 41.3316 46.544 41.5016 46.7139C41.6715 46.8839 41.902 46.9793 42.1423 46.9793H55.8155L56.1508 55.1344H51.1355Z", fill: colourFill }),
        React__default.createElement("path", { d: "M29.9095 45.167C29.6692 45.167 29.4387 45.2625 29.2688 45.4324C29.0989 45.6023 29.0034 45.8328 29.0034 46.0731C29.0034 46.3134 29.0989 46.5439 29.2688 46.7138C29.4387 46.8838 29.6692 46.9792 29.9095 46.9792H34.8932C35.1335 46.9792 35.3639 46.8838 35.5339 46.7138C35.7038 46.5439 35.7993 46.3134 35.7993 46.0731C35.7993 45.8328 35.7038 45.6023 35.5339 45.4324C35.3639 45.2625 35.1335 45.167 34.8932 45.167H29.9095Z", fill: colourFill }),
        React__default.createElement("path", { d: "M42.5954 34.7467H44.4077V36.5589C44.3993 36.7396 44.4287 36.9201 44.494 37.0888C44.5594 37.2575 44.6592 37.4107 44.7871 37.5386C44.915 37.6666 45.0682 37.7664 45.2369 37.8317C45.4056 37.8971 45.5861 37.9265 45.7668 37.9181H48.4852C48.6659 37.9265 48.8464 37.8971 49.0151 37.8317C49.1838 37.7664 49.337 37.6666 49.4649 37.5386C49.5928 37.4107 49.6926 37.2575 49.758 37.0888C49.8233 36.9201 49.8527 36.7396 49.8443 36.5589V34.7467H51.6566C51.8373 34.7551 52.0178 34.7257 52.1865 34.6603C52.3552 34.595 52.5084 34.4952 52.6363 34.3672C52.7642 34.2393 52.864 34.0861 52.9294 33.9174C52.9947 33.7487 53.0241 33.5682 53.0157 33.3875V30.6692C53.0241 30.4885 52.9947 30.308 52.9294 30.1393C52.864 29.9706 52.7642 29.8174 52.6363 29.6894C52.5084 29.5615 52.3552 29.4617 52.1865 29.3964C52.0178 29.331 51.8373 29.3016 51.6566 29.31H49.8443V27.4978C49.8527 27.3171 49.8233 27.1366 49.758 26.9679C49.6926 26.7992 49.5928 26.646 49.4649 26.518C49.337 26.3901 49.1838 26.2903 49.0151 26.225C48.8464 26.1596 48.6659 26.1302 48.4852 26.1386H45.7668C45.5861 26.1302 45.4056 26.1596 45.2369 26.225C45.0682 26.2903 44.915 26.3901 44.7871 26.518C44.6592 26.646 44.5594 26.7992 44.494 26.9679C44.4287 27.1366 44.3993 27.3171 44.4077 27.4978V29.31H42.5954C42.4147 29.3016 42.2342 29.331 42.0655 29.3964C41.8968 29.4617 41.7436 29.5615 41.6157 29.6894C41.4878 29.8174 41.388 29.9706 41.3226 30.1393C41.2573 30.308 41.2279 30.4885 41.2363 30.6692V33.3875C41.2279 33.5682 41.2573 33.7487 41.3226 33.9174C41.388 34.0861 41.4878 34.2393 41.6157 34.3672C41.7436 34.4952 41.8968 34.595 42.0655 34.6603C42.2342 34.7257 42.4147 34.7551 42.5954 34.7467V34.7467ZM43.0485 31.1222H45.3138C45.5541 31.1222 45.7846 31.0268 45.9545 30.8568C46.1244 30.6869 46.2199 30.4564 46.2199 30.2161V27.9508H48.0321V30.2161C48.0321 30.4564 48.1276 30.6869 48.2975 30.8568C48.4674 31.0268 48.6979 31.1222 48.9382 31.1222H51.2035V32.9345H48.9382C48.6979 32.9345 48.4674 33.0299 48.2975 33.1999C48.1276 33.3698 48.0321 33.6003 48.0321 33.8406V36.1059H46.2199V33.8406C46.2199 33.6003 46.1244 33.3698 45.9545 33.1999C45.7846 33.0299 45.5541 32.9345 45.3138 32.9345H43.0485V31.1222Z", fill: colourFill }),
        React__default.createElement("path", { d: "M27.223 16.6245C27.4633 16.6245 27.6938 16.529 27.8637 16.3591C28.0337 16.1891 28.1291 15.9587 28.1291 15.7183V13.9061C28.1291 13.6658 28.0337 13.4353 27.8637 13.2654C27.6938 13.0955 27.4633 13 27.223 13C26.9827 13 26.7522 13.0955 26.5823 13.2654C26.4124 13.4353 26.3169 13.6658 26.3169 13.9061V15.7183C26.3169 15.9587 26.4124 16.1891 26.5823 16.3591C26.7522 16.529 26.9827 16.6245 27.223 16.6245Z", fill: colourFill }),
        React__default.createElement("path", { d: "M32.2973 17.9429L33.6972 16.6517C33.8738 16.4883 33.9783 16.2614 33.9877 16.0209C33.997 15.7805 33.9105 15.5461 33.747 15.3695C33.5836 15.1929 33.3567 15.0884 33.1163 15.0791C32.8758 15.0697 32.6415 15.1563 32.4649 15.3197L31.0695 16.6245C30.9782 16.7041 30.9038 16.8011 30.8507 16.91C30.7975 17.0188 30.7667 17.1372 30.7601 17.2581C30.7535 17.379 30.7712 17.5001 30.8122 17.614C30.8532 17.728 30.9166 17.8326 30.9987 17.9216C31.0807 18.0107 31.1798 18.0824 31.2901 18.1325C31.4004 18.1826 31.5195 18.21 31.6406 18.2133C31.7617 18.2165 31.8822 18.1955 31.9949 18.1514C32.1077 18.1073 32.2105 18.041 32.2973 17.9565V17.9429Z", fill: colourFill }),
        React__default.createElement("path", { d: "M22.0856 17.9428C22.1688 18.0392 22.2714 18.1169 22.3866 18.1709C22.5018 18.225 22.6272 18.2541 22.7544 18.2565C22.8817 18.2589 23.008 18.2344 23.1252 18.1847C23.2423 18.135 23.3477 18.0612 23.4345 17.9681C23.5212 17.8749 23.5873 17.7646 23.6286 17.6442C23.6698 17.5237 23.6852 17.396 23.6738 17.2692C23.6624 17.1425 23.6244 17.0195 23.5623 16.9084C23.5002 16.7973 23.4154 16.7006 23.3134 16.6244L21.918 15.3332C21.7414 15.1698 21.507 15.0833 21.2666 15.0926C21.0261 15.102 20.7993 15.2064 20.6358 15.3831C20.4724 15.5597 20.3859 15.794 20.3952 16.0345C20.4046 16.2749 20.509 16.5018 20.6857 16.6652L22.0856 17.9428Z", fill: colourFill })));
};

var ServiceIcon$z = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.8456 15.8471C27.6705 16.0223 27.4329 16.1207 27.1853 16.1207C26.9376 16.1207 26.7 16.0223 26.5249 15.8471C26.3498 15.672 26.2514 15.4345 26.2514 15.1868V13.319C26.2514 13.0713 26.3498 12.8337 26.5249 12.6586C26.7 12.4835 26.9376 12.3851 27.1853 12.3851C27.4329 12.3851 27.6705 12.4835 27.8456 12.6586C28.0208 12.8337 28.1192 13.0713 28.1192 13.319V15.1868C28.1192 15.4345 28.0208 15.672 27.8456 15.8471ZM25.7359 20.2428L25.3725 20.4971C24.9815 20.8198 24.6842 21.2436 24.5144 21.7241H29.7909C29.5979 21.1784 29.2407 20.7058 28.7683 20.3713C28.2959 20.0369 27.7315 19.8569 27.1526 19.8563C26.653 19.8569 26.1641 19.991 25.7359 20.2428ZM37.8925 56.7453C37.8945 57.0182 37.9125 57.2895 37.9459 57.5578H35.5512C35.6238 57.5167 35.6911 57.4657 35.7511 57.4057C35.9263 57.2305 36.0247 56.993 36.0247 56.7453C36.0247 56.4976 35.9263 56.2601 35.7511 56.0849C35.576 55.9098 35.3385 55.8114 35.0908 55.8114H27.1526V34.7987H37.8925V56.7453ZM20.8153 60.6628L20.8337 60.6352L20.8281 60.6579L20.8153 60.6628ZM8.47049 54.2275C8.05851 55.2929 7.91576 56.4362 8.04536 57.5578H5.65247C5.72502 57.5167 5.79235 57.4657 5.85236 57.4057C6.0275 57.2305 6.12589 56.993 6.12589 56.7453C6.12589 56.4976 6.0275 56.2601 5.85236 56.0849C5.67722 55.9098 5.43968 55.8114 5.19199 55.8114H2.4043C2.00484 55.7815 1.6334 55.5949 1.37098 55.2922C1.10857 54.9896 0.976453 54.5954 1.00345 54.1958L2.26889 47.4063H16.8797C17.1274 47.4063 17.365 47.3079 17.5401 47.1328C17.7152 46.9576 17.8136 46.7201 17.8136 46.4724C17.8136 46.2247 17.7152 45.9872 17.5401 45.812C17.365 45.6369 17.1274 45.5385 16.8797 45.5385H2.61443L3.3382 41.5181C3.37502 41.312 3.45212 41.1151 3.5651 40.9389C3.67807 40.7626 3.82471 40.6103 3.9966 40.4908L5.49084 39.4682H20.1484V52.0011C19.0678 50.8312 17.6208 50.0646 16.046 49.8275C14.4711 49.5905 12.8626 49.8971 11.4854 50.697C10.1083 51.4969 9.04488 52.7421 8.47049 54.2275ZM8.14311 31.997C8.18281 31.8358 8.23231 31.6786 8.29067 31.5261L8.50528 31.0579C9.10024 29.9527 10.1751 29.1953 11.2763 29.1953H20.1484V37.6004H17.8136V31.997C17.8136 31.7493 17.7152 31.5117 17.5401 31.3366C17.365 31.1615 17.1274 31.0631 16.8797 31.0631H11.2763C11.0287 31.0631 10.7911 31.1615 10.616 31.3366C10.4408 31.5117 10.3424 31.7493 10.3424 31.997C10.3424 32.2447 10.4408 32.4822 10.616 32.6573C10.7911 32.8325 11.0287 32.9309 11.2763 32.9309H15.9458V37.6004H6.46209L8.14311 31.997ZM15.0119 61.8817C13.996 61.8817 13.003 61.5805 12.1583 61.0161C11.3136 60.4517 10.6552 59.6495 10.2665 58.7109C9.87772 57.7724 9.776 56.7396 9.97419 55.7432C10.1724 54.7468 10.6616 53.8316 11.3799 53.1133C12.0983 52.3949 13.0135 51.9057 14.0099 51.7075C15.0062 51.5094 16.039 51.6111 16.9776 51.9998C17.9161 52.3886 18.7183 53.047 19.2827 53.8916C19.8471 54.7363 20.1484 55.7294 20.1484 56.7453C20.1484 58.1076 19.6072 59.414 18.644 60.3773C17.6807 61.3406 16.3742 61.8817 15.0119 61.8817ZM44.8967 61.8817C43.8808 61.8817 42.8877 61.5805 42.0431 61.0161C41.1984 60.4517 40.54 59.6495 40.1513 58.7109C39.7625 57.7724 39.6608 56.7396 39.859 55.7432C40.0572 54.7468 40.5463 53.8316 41.2647 53.1133C41.983 52.3949 42.8983 51.9057 43.8946 51.7075C44.891 51.5094 45.9238 51.6111 46.8623 51.9998C47.8009 52.3886 48.6031 53.047 49.1675 53.8916C49.7319 54.7363 50.0332 55.7294 50.0332 56.7453C50.0332 58.1076 49.492 59.414 48.5287 60.3773C47.5655 61.3406 46.259 61.8817 44.8967 61.8817ZM51.8309 55.8114C51.6499 54.4982 51.0999 53.2633 50.2449 52.2502C49.3899 51.2371 48.2649 50.4875 47.0007 50.0885C45.7366 49.6894 44.3851 49.6573 43.1034 49.9959C41.8217 50.3344 40.6624 51.0298 39.7603 52.0011V33.8648C39.7603 33.6171 39.6619 33.3795 39.4867 33.2044C39.3116 33.0293 39.0741 32.9309 38.8264 32.9309H26.2187C25.971 32.9309 25.7335 33.0293 25.5584 33.2044C25.3832 33.3795 25.2848 33.6171 25.2848 33.8648V55.8114H22.0162V23.5919H55.6739L56.5704 45.5385H42.562C42.3143 45.5385 42.0767 45.6369 41.9016 45.812C41.7265 45.9872 41.6281 46.2247 41.6281 46.4724C41.6281 46.7201 41.7265 46.9576 41.9016 47.1328C42.0767 47.3079 42.3143 47.4063 42.562 47.4063H56.6545L57 55.8114H51.8309ZM29.2937 45.812C29.4688 45.6369 29.7064 45.5385 29.9541 45.5385H35.0905C35.3382 45.5385 35.5757 45.6369 35.7509 45.812C35.926 45.9872 36.0244 46.2247 36.0244 46.4724C36.0244 46.7201 35.926 46.9576 35.7509 47.1328C35.5757 47.3079 35.3382 47.4063 35.0905 47.4063H29.9541C29.7064 47.4063 29.4688 47.3079 29.2937 47.1328C29.1186 46.9576 29.0202 46.7201 29.0202 46.4724C29.0202 46.2247 29.1186 45.9872 29.2937 45.812ZM43.0287 34.7987H44.8965V36.6665C44.8878 36.8527 44.9181 37.0387 44.9855 37.2126C45.0528 37.3865 45.1557 37.5444 45.2875 37.6762C45.4194 37.8081 45.5773 37.9109 45.7512 37.9783C45.925 38.0456 46.1111 38.0759 46.2973 38.0673H49.099C49.2853 38.0759 49.4713 38.0456 49.6452 37.9783C49.819 37.9109 49.9769 37.8081 50.1088 37.6762C50.2406 37.5444 50.3435 37.3865 50.4109 37.2126C50.4782 37.0387 50.5085 36.8527 50.4999 36.6665V34.7987H52.3677C52.5539 34.8073 52.7399 34.777 52.9138 34.7096C53.0877 34.6423 53.2456 34.5394 53.3774 34.4076C53.5093 34.2757 53.6122 34.1178 53.6795 33.9439C53.7468 33.7701 53.7772 33.5841 53.7685 33.3978V30.5961C53.7772 30.4099 53.7468 30.2238 53.6795 30.05C53.6122 29.8761 53.5093 29.7182 53.3774 29.5863C53.2456 29.4545 53.0877 29.3516 52.9138 29.2843C52.7399 29.2169 52.5539 29.1866 52.3677 29.1953H50.4999V27.3275C50.5085 27.1412 50.4782 26.9552 50.4109 26.7813C50.3435 26.6074 50.2406 26.4495 50.1088 26.3177C49.9769 26.1858 49.819 26.083 49.6452 26.0156C49.4713 25.9483 49.2853 25.918 49.099 25.9266H46.2973C46.1111 25.918 45.925 25.9483 45.7512 26.0156C45.5773 26.083 45.4194 26.1858 45.2875 26.3177C45.1557 26.4495 45.0528 26.6074 44.9855 26.7813C44.9181 26.9552 44.8878 27.1412 44.8965 27.3275V29.1953H43.0287C42.8424 29.1866 42.6564 29.2169 42.4825 29.2843C42.3087 29.3516 42.1507 29.4545 42.0189 29.5863C41.8871 29.7182 41.7842 29.8761 41.7168 30.05C41.6495 30.2238 41.6192 30.4099 41.6278 30.5961V33.3978C41.6192 33.5841 41.6495 33.7701 41.7168 33.9439C41.7842 34.1178 41.8871 34.2757 42.0189 34.4076C42.1507 34.5394 42.3087 34.6423 42.4825 34.7096C42.6564 34.777 42.8424 34.8073 43.0287 34.7987ZM43.4956 31.0631H45.8304C46.0781 31.0631 46.3156 30.9647 46.4907 30.7895C46.6659 30.6144 46.7643 30.3768 46.7643 30.1292V27.7944H48.6321V30.1292C48.6321 30.3768 48.7305 30.6144 48.9056 30.7895C49.0807 30.9647 49.3183 31.0631 49.566 31.0631H51.9007V32.9309H49.566C49.3183 32.9309 49.0807 33.0292 48.9056 33.2044C48.7305 33.3795 48.6321 33.6171 48.6321 33.8648V36.1995H46.7643V33.8648C46.7643 33.6171 46.6659 33.3795 46.4907 33.2044C46.3156 33.0292 46.0781 32.9309 45.8304 32.9309H43.4956V31.0631ZM32.4149 17.4795L33.8578 16.1487C34.0398 15.9803 34.1475 15.7464 34.1572 15.4986C34.1668 15.2508 34.0776 15.0093 33.9092 14.8272C33.7407 14.6452 33.5069 14.5375 33.2591 14.5278C33.0112 14.5182 32.7697 14.6074 32.5877 14.7758L31.1495 16.1207C31.0554 16.2027 30.9787 16.3027 30.924 16.4149C30.8692 16.5271 30.8375 16.6491 30.8307 16.7737C30.8239 16.8983 30.8421 17.0231 30.8843 17.1405C30.9265 17.258 30.9919 17.3658 31.0765 17.4576C31.1611 17.5494 31.2632 17.6233 31.3769 17.6749C31.4905 17.7265 31.6133 17.7548 31.7381 17.7582C31.8629 17.7615 31.9871 17.7398 32.1033 17.6944C32.2196 17.6489 32.3255 17.5806 32.4149 17.4935V17.4795ZM22.2004 17.7145C22.0816 17.6588 21.9759 17.5788 21.8901 17.4795L20.4473 16.1627C20.2652 15.9943 20.1575 15.7604 20.1479 15.5126C20.1383 15.2648 20.2275 15.0233 20.3959 14.8412C20.5643 14.6592 20.7982 14.5515 21.046 14.5418C21.2938 14.5322 21.5353 14.6214 21.7174 14.7899L23.1556 16.1207C23.2607 16.1991 23.3481 16.2989 23.4121 16.4134C23.4761 16.5279 23.5153 16.6546 23.527 16.7852C23.5388 16.9159 23.5229 17.0475 23.4804 17.1716C23.4379 17.2957 23.3697 17.4095 23.2803 17.5055C23.1909 17.6015 23.0823 17.6776 22.9616 17.7288C22.8408 17.78 22.7106 17.8052 22.5794 17.8028C22.4483 17.8003 22.3191 17.7702 22.2004 17.7145Z", fill: colourFill })));
};

var ServiceIcon$A = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M59 67H1", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M47.0002 32H55.0002C57.2093 32 59.0002 30.2091 59.0002 28C59.0002 25.7909 57.2093 24 55.0002 24C55.0002 20.6863 52.3139 18 49.0002 18C45.6865 18 43.0002 20.6863 43.0002 24C42.1675 24.0018 41.3563 24.264 40.6802 24.75", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24 32V67H2V32", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M37 47H24V67H37V47Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24 32L13 17L2 32", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24 32V47V67H37H46", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M46 47V32", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M46 47H59V67H46", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M24 32H46L35 17", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M13 37C15.7614 37 18 34.7614 18 32C18 29.2386 15.7614 27 13 27C10.2386 27 8 29.2386 8 32C8 34.7614 10.2386 37 13 37Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 56H19C19.5523 56 20 56.4477 20 57V67H6V57C6 56.4477 6.44772 56 7 56Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M10 41H7C6.44772 41 6 41.4477 6 42V44C6 44.5523 6.44772 45 7 45H10C10.5523 45 11 44.5523 11 44V42C11 41.4477 10.5523 41 10 41Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M19 41H16C15.4477 41 15 41.4477 15 42V44C15 44.5523 15.4477 45 16 45H19C19.5523 45 20 44.5523 20 44V42C20 41.4477 19.5523 41 19 41Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M32 37H29C28.4477 37 28 37.4477 28 38V40C28 40.5523 28.4477 41 29 41H32C32.5523 41 33 40.5523 33 40V38C33 37.4477 32.5523 37 32 37Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M41 37H38C37.4477 37 37 37.4477 37 38V40C37 40.5523 37.4477 41 38 41H41C41.5523 41 42 40.5523 42 40V38C42 37.4477 41.5523 37 41 37Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M10 48H7C6.44772 48 6 48.4477 6 49V51C6 51.5523 6.44772 52 7 52H10C10.5523 52 11 51.5523 11 51V49C11 48.4477 10.5523 48 10 48Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M19 48H16C15.4477 48 15 48.4477 15 49V51C15 51.5523 15.4477 52 16 52H19C19.5523 52 20 51.5523 20 51V49C20 48.4477 19.5523 48 19 48Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M35 17H13V9", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M37 47H46", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M45 52H42C41.4477 52 41 52.4477 41 53V61C41 61.5523 41.4477 62 42 62H45C45.5523 62 46 61.5523 46 61V53C46 52.4477 45.5523 52 45 52Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M54 52H51C50.4477 52 50 52.4477 50 53V61C50 61.5523 50.4477 62 51 62H54C54.5523 62 55 61.5523 55 61V53C55 52.4477 54.5523 52 54 52Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29 56H32C32.5523 56 33 56.4477 33 57V67H28V57C28 56.4477 28.4477 56 29 56Z", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M13 10C13 10 16 12 18 10", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M35 17V9", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M35 10C35 10 38 12 40 10", stroke: colourFill, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var ServiceIcon$B = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M59 66H58V48H38V66H36V48H25V66H23V32.33L13 18.69L3 32.33V66H1C0.447715 66 0 66.4477 0 67C0 67.5523 0.447715 68 1 68H59C59.5523 68 60 67.5523 60 67C60 66.4477 59.5523 66 59 66ZM13 26C16.3137 26 19 28.6863 19 32C19 35.3137 16.3137 38 13 38C9.68629 38 7 35.3137 7 32C7.00262 28.6874 9.68738 26.0026 13 26ZM5 42C5.00322 40.8968 5.89677 40.0032 7 40H10C11.1032 40.0032 11.9968 40.8968 12 42V44C11.9968 45.1032 11.1032 45.9968 10 46H7C5.89678 45.9968 5.00325 45.1032 5 44V42ZM5 49C5.00322 47.8968 5.89677 47.0032 7 47H10C11.1032 47.0032 11.9968 47.8968 12 49V51C11.9968 52.1032 11.1032 52.9968 10 53H7C5.89678 52.9968 5.00325 52.1032 5 51V49ZM21 66H19V57H7V66H5V57C5.00322 55.8968 5.89677 55.0032 7 55H19C20.1032 55.0032 20.9968 55.8968 21 57V66ZM21 51C20.9968 52.1032 20.1032 52.9968 19 53H16C14.8968 52.9968 14.0032 52.1032 14 51V49C14.0032 47.8968 14.8968 47.0032 16 47H19C20.1032 47.0032 20.9968 47.8968 21 49V51ZM21 44C20.9968 45.1032 20.1032 45.9968 19 46H16C14.8968 45.9968 14.0032 45.1032 14 44V42C14.0032 40.8968 14.8968 40.0032 16 40H19C20.1032 40.0032 20.9968 40.8968 21 42V44ZM34 66H32V57H29V66H27V57C27.0032 55.8968 27.8968 55.0032 29 55H32C33.1032 55.0032 33.9968 55.8968 34 57V66ZM47 61C46.9968 62.1032 46.1032 62.9968 45 63H42C40.8968 62.9968 40.0032 62.1032 40 61V53C40.0032 51.8968 40.8968 51.0032 42 51H45C46.1032 51.0032 46.9968 51.8968 47 53V61ZM56 61C55.9968 62.1032 55.1032 62.9968 54 63H51C49.8968 62.9968 49.0032 62.1032 49 61V53C49.0032 51.8968 49.8968 51.0032 51 51H54C55.1032 51.0032 55.9968 51.8968 56 53V61Z", fill: colourFill }),
        React__default.createElement("path", { d: "M10.0005 42H7V44H10.0005V42Z", fill: colourFill }),
        React__default.createElement("path", { d: "M32.0005 38H29V40H32.0005V38Z", fill: colourFill }),
        React__default.createElement("path", { d: "M16.3802 19.92L24.5102 31H44.0302L39.8802 25.34C39.8736 25.3333 39.8669 25.3266 39.8602 25.32L35.0002 18.7V11.5666C35.5837 11.7663 36.1951 11.8721 36.8117 11.8804C37.8967 11.9017 38.9431 11.4776 39.7072 10.707C40.0917 10.3155 40.0888 9.68736 39.7008 9.29937C39.3129 8.91139 38.6847 8.90855 38.2932 9.293C37.2597 10.3265 35.7468 9.7861 35.0002 9.41629V9C35.0002 8.44772 34.5525 8 34.0002 8C33.4479 8 33.0002 8.44772 33.0002 9V18H17.0002V11.5666C17.5837 11.7663 18.1951 11.8721 18.8117 11.8804C19.8967 11.9017 20.9431 11.4776 21.7072 10.707C21.9636 10.4552 22.0652 10.0851 21.9732 9.73772C21.8812 9.39031 21.6099 9.11897 21.2625 9.027C20.9151 8.93503 20.545 9.03659 20.2932 9.293C19.2604 10.3265 17.7469 9.7861 17.0002 9.41623V9C17.0002 8.44772 16.5525 8 16.0002 8C15.4479 8 15.0002 8.44772 15.0002 9V18H14.9702L15.0002 18.04L16.3802 19.92Z", fill: colourFill }),
        React__default.createElement("path", { d: "M19.0005 49H16V51H19.0005V49Z", fill: colourFill }),
        React__default.createElement("path", { d: "M13 36C15.2091 36 17 34.2091 17 32C17 29.7909 15.2091 28 13 28C10.7909 28 9 29.7909 9 32C9 34.2091 10.7909 36 13 36Z", fill: colourFill }),
        React__default.createElement("path", { d: "M10.0005 49H7V51H10.0005V49Z", fill: colourFill }),
        React__default.createElement("path", { d: "M46.5099 31H54.9999C56.6568 31 57.9999 29.6569 57.9999 28C57.9999 26.3431 56.6568 25 54.9999 25C54.4483 24.9984 54.0016 24.5516 53.9999 24C53.9999 21.2386 51.7614 19 48.9999 19C46.2385 19 43.9999 21.2386 43.9999 24C43.9983 24.5516 43.5515 24.9984 42.9999 25C42.7256 25.0006 42.4527 25.0411 42.1899 25.12L46.4999 31H46.5099Z", fill: colourFill }),
        React__default.createElement("path", { d: "M45.0005 53H42V61H45.0005V53Z", fill: colourFill }),
        React__default.createElement("path", { d: "M41.0005 38H38V40H41.0005V38Z", fill: colourFill }),
        React__default.createElement("path", { d: "M54.0005 53H51V61H54.0005V53Z", fill: colourFill }),
        React__default.createElement("path", { d: "M19.0005 42H16V44H19.0005V42Z", fill: colourFill }),
        React__default.createElement("path", { d: "M25 46H45V33H25V46ZM36 38C36.0032 36.8968 36.8968 36.0032 38 36H41C42.1032 36.0032 42.9968 36.8968 43 38V40C42.9968 41.1032 42.1032 41.9968 41 42H38C36.8968 41.9968 36.0032 41.1032 36 40V38ZM27 38C27.0032 36.8968 27.8968 36.0032 29 36H32C33.1032 36.0032 33.9968 36.8968 34 38V40C33.9968 41.1032 33.1032 41.9968 32 42H29C27.8968 41.9968 27.0032 41.1032 27 40V38Z", fill: colourFill })));
};

var SportsIcon = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.000976562 67C0.000976562 66.4477 0.448692 66 1.00098 66H59.001C59.5533 66 60.001 66.4477 60.001 67C60.001 67.5523 59.5533 68 59.001 68H1.00098C0.448692 68 0.000976562 67.5523 0.000976562 67Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.001 54.81C16.5533 54.81 17.001 55.2577 17.001 55.81V66H19.001V55.81C19.001 55.2577 19.4487 54.81 20.001 54.81C20.5533 54.81 21.001 55.2577 21.001 55.81V67C21.001 67.5523 20.5533 68 20.001 68H16.001C15.4487 68 15.001 67.5523 15.001 67V55.81C15.001 55.2577 15.4487 54.81 16.001 54.81Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.9863 13.9232C17.9961 13.923 18.0059 13.923 18.0157 13.9232C22.2295 13.9851 25.5962 17.4487 25.5394 21.6619C25.5368 22.7707 25.2978 23.8597 24.8457 24.8586C29.0166 25.6743 32.1365 29.3764 32.0779 33.7747C32.0821 35.7459 31.4508 37.6521 30.298 39.22C33.7834 40.9824 36.0296 44.5876 36.001 48.5739C36.076 54.2503 31.5395 58.9164 25.8618 58.9999L25.8414 59C22.7594 58.9825 19.8854 57.5605 18.001 55.1911C16.1165 57.5605 13.2425 58.9825 10.1605 59L10.1401 58.9999C4.4624 58.9164 -0.0740555 54.2503 0.000916024 48.5739C-0.0276602 44.5875 2.21855 40.9824 5.70403 39.22C4.55123 37.6521 3.91993 35.7459 3.92403 33.7748C3.86534 29.3765 6.98529 25.6743 11.1562 24.8586C10.7041 23.8596 10.4651 22.7706 10.4625 21.6617C10.4058 17.4487 13.7725 13.9851 17.9863 13.9232ZM12.7523 26.6927C8.92294 26.7666 5.86917 29.9212 5.92395 33.7549L5.92404 33.7722C5.91823 35.6969 6.68754 37.5429 8.05846 38.8939C8.30524 39.137 8.40856 39.4906 8.33155 39.8284C8.25455 40.1662 8.00818 40.4401 7.68039 40.5523C4.25902 41.7233 1.97113 44.9526 2.00093 48.5687L2.00087 48.5912C1.93556 53.1652 5.58675 56.9272 10.1593 56.9999C13.0452 56.9799 15.7024 55.4243 17.1323 52.9169C17.3102 52.6049 17.6418 52.4123 18.001 52.4123C18.3601 52.4123 18.6917 52.6049 18.8696 52.9169C20.2996 55.4243 22.9567 56.9799 25.8426 56.9999C30.4152 56.9272 34.0664 53.1652 34.0011 48.5912L34.001 48.5687C34.0308 44.9526 31.7429 41.7233 28.3216 40.5523C27.9938 40.4401 27.7475 40.1663 27.6705 39.8285C27.5934 39.4907 27.6968 39.1371 27.9435 38.8939C29.3145 37.543 30.0838 35.697 30.0779 33.7723L30.078 33.7549C30.1328 29.9212 27.079 26.7666 23.2497 26.6927C22.8644 26.7116 22.5024 26.5071 22.3198 26.167C22.1365 25.8257 22.1669 25.4092 22.3978 25.0981C23.1374 24.1013 23.5375 22.8935 23.5394 21.6523L23.5394 21.6396L23.5395 21.6396C23.5839 18.5326 21.1059 15.9768 18.001 15.9232C14.896 15.9768 12.418 18.5326 12.4624 21.6396L12.4626 21.6523H12.4625C12.4644 22.8935 12.8646 24.1013 13.6042 25.0981C13.835 25.4092 13.8654 25.8257 13.6821 26.167C13.4995 26.5071 13.1376 26.7116 12.7523 26.6927Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.001 54C36.001 53.4477 36.4487 53 37.001 53H59.001C59.5533 53 60.001 53.4477 60.001 54C60.001 54.5523 59.5533 55 59.001 55H37.001C36.4487 55 36.001 54.5523 36.001 54Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.001 59C36.001 58.4477 36.4487 58 37.001 58H59.001C59.5533 58 60.001 58.4477 60.001 59C60.001 59.5523 59.5533 60 59.001 60H37.001C36.4487 60 36.001 59.5523 36.001 59Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.001 62C36.001 61.4477 36.4487 61 37.001 61H59.001C59.5533 61 60.001 61.4477 60.001 62C60.001 62.5523 59.5533 63 59.001 63H37.001C36.4487 63 36.001 62.5523 36.001 62Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.001 52C39.5533 52 40.001 52.4477 40.001 53V67C40.001 67.5523 39.5533 68 39.001 68C38.4487 68 38.001 67.5523 38.001 67V53C38.001 52.4477 38.4487 52 39.001 52Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.001 52C57.5533 52 58.001 52.4477 58.001 53V67C58.001 67.5523 57.5533 68 57.001 68C56.4487 68 56.001 67.5523 56.001 67V53C56.001 52.4477 56.4487 52 57.001 52Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M49.001 19C46.2396 19 44.001 21.2386 44.001 24C44.001 24.5523 43.5533 25 43.001 25C41.3441 25 40.001 26.3431 40.001 28C40.001 29.6569 41.3441 31 43.001 31H55.001C56.6578 31 58.001 29.6569 58.001 28C58.001 26.3431 56.6578 25 55.001 25C54.4487 25 54.001 24.5523 54.001 24C54.001 21.2386 51.7624 19 49.001 19ZM42.0598 23.0884C42.5065 19.6531 45.4439 17 49.001 17C52.558 17 55.4954 19.6531 55.9422 23.0884C58.2536 23.5287 60.001 25.5603 60.001 28C60.001 30.7614 57.7624 33 55.001 33H43.001C40.2396 33 38.001 30.7614 38.001 28C38.001 25.5603 39.7483 23.5287 42.0598 23.0884Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.05979 14.0884C4.50653 10.6531 7.44392 8 11.001 8C14.7542 8 17.8176 10.9539 17.993 14.6638C18.0306 14.7688 18.051 14.882 18.051 15C18.051 15.5523 17.6033 16 17.051 16H17.001C16.4487 16 16.001 15.5523 16.001 15C16.001 12.2386 13.7624 10 11.001 10C8.23955 10 6.00098 12.2386 6.00098 15C6.00098 15.5523 5.55326 16 5.00098 16C3.34412 16 2.00098 17.3431 2.00098 19C2.00098 20.6569 3.34412 22 5.00098 22H11.601C12.1533 22 12.601 22.4477 12.601 23C12.601 23.5523 12.1533 24 11.601 24H5.00098C2.23955 24 0.000976562 21.7614 0.000976562 19C0.000976562 16.5603 1.74831 14.5287 4.05979 14.0884Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.001 32C18.5533 32 19.001 32.4477 19.001 33V53C19.001 53.5523 18.5533 54 18.001 54C17.4487 54 17.001 53.5523 17.001 53V33C17.001 32.4477 17.4487 32 18.001 32Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.2939 34.2929C12.6844 33.9024 13.3176 33.9024 13.7081 34.2929L18.001 38.5858L22.2939 34.2929C22.6844 33.9024 23.3176 33.9024 23.7081 34.2929C24.0986 34.6834 24.0986 35.3166 23.7081 35.7071L18.7081 40.7071C18.3176 41.0976 17.6844 41.0976 17.2939 40.7071L12.2939 35.7071C11.9033 35.3166 11.9033 34.6834 12.2939 34.2929Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.2939 45.2929C10.6844 44.9024 11.3176 44.9024 11.7081 45.2929L18.7081 52.2929C19.0986 52.6834 19.0986 53.3166 18.7081 53.7071C18.3176 54.0976 17.6844 54.0976 17.2939 53.7071L10.2939 46.7071C9.90335 46.3166 9.90335 45.6834 10.2939 45.2929Z", fill: colourFill }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.7081 45.2929C26.0986 45.6834 26.0986 46.3166 25.7081 46.7071L18.7081 53.7071C18.3176 54.0976 17.6844 54.0976 17.2939 53.7071C16.9033 53.3166 16.9033 52.6834 17.2939 52.2929L24.2939 45.2929C24.6844 44.9024 25.3176 44.9024 25.7081 45.2929Z", fill: colourFill })));
};

var ServiceIcon$C = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "76", height: "76", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M59 60.0008C59.5523 60.0008 60 59.553 60 59.0008C60 58.4485 59.5523 58.0008 59 58.0008H58V55.0008H59C59.5523 55.0008 60 54.553 60 54.0008C60 53.4485 59.5523 53.0008 59 53.0008H58C58 52.4485 57.5523 52.0008 57 52.0008C56.4477 52.0008 56 52.4485 56 53.0008H40C40 52.4485 39.5523 52.0008 39 52.0008C38.4477 52.0008 38 52.4485 38 53.0008H37C36.4477 53.0008 36 53.4485 36 54.0008C36 54.553 36.4477 55.0008 37 55.0008H38V58.0008H37C36.4477 58.0008 36 58.4485 36 59.0008C36 59.553 36.4477 60.0008 37 60.0008H38V61.0008H37C36.4477 61.0008 36 61.4485 36 62.0008C36 62.553 36.4477 63.0008 37 63.0008H38V66.0008H20V57.4008C19.2024 56.7196 18.5261 55.9081 18 55.0008C17.4739 55.9081 16.7976 56.7196 16 57.4008V66.0008H1C0.447715 66.0008 0 66.4485 0 67.0008C0 67.553 0.447715 68.0008 1 68.0008H59C59.5523 68.0008 60 67.553 60 67.0008C60 66.4485 59.5523 66.0008 59 66.0008H58V63.0008H59C59.5523 63.0008 60 62.553 60 62.0008C60 61.4485 59.5523 61.0008 59 61.0008H58V60.0008H59ZM56 66.0008H40V63.0008H56V66.0008ZM56 61.0008H40V60.0008H56V61.0008ZM56 58.0008H40V55.0008H56V58.0008Z", fill: colourFill }),
        React__default.createElement("path", { d: "M5 22.0008H10.48C10.47 21.8808 10.46 21.7708 10.46 21.6508C10.4394 18.2423 12.6597 15.225 15.92 14.2308C15.5232 11.651 13.2051 9.81317 10.6029 10.0152C8.00067 10.2171 5.99395 12.3907 6 15.0008C5.99835 15.5524 5.5516 15.9991 5 16.0008C3.34315 16.0008 2 17.3439 2 19.0008C2 20.6576 3.34315 22.0008 5 22.0008Z", fill: colourFill }),
        React__default.createElement("path", { d: "M43 31.0008H55C56.6569 31.0008 58 29.6576 58 28.0008C58 26.3439 56.6569 25.0008 55 25.0008C54.4484 24.9991 54.0016 24.5524 54 24.0008C54 21.2393 51.7614 19.0008 49 19.0008C46.2386 19.0008 44 21.2393 44 24.0008C43.9984 24.5524 43.5516 24.9991 43 25.0008C41.3431 25.0008 40 26.3439 40 28.0008C40 29.6576 41.3431 31.0008 43 31.0008Z", fill: colourFill }),
        React__default.createElement("path", { d: "M10.1499 57.0008C12.8776 56.9959 15.4162 55.6061 16.8899 53.3108L10.2899 46.7108C9.90051 46.3182 9.9018 45.6847 10.2928 45.2937C10.6838 44.9027 11.3173 44.9014 11.7099 45.2908L16.9999 50.5908V40.4108L12.2899 35.7108C12.0345 35.4575 11.9341 35.0869 12.0268 34.7393C12.1194 34.3917 12.3909 34.1203 12.7384 34.0276C13.086 33.935 13.4566 34.0354 13.7099 34.2908L16.9999 37.5908V33.0008C16.9999 32.4485 17.4476 32.0008 17.9999 32.0008C18.5522 32.0008 18.9999 32.4485 18.9999 33.0008V37.5908L22.2899 34.2908C22.5432 34.0354 22.9138 33.935 23.2614 34.0276C23.6089 34.1203 23.8804 34.3917 23.973 34.7393C24.0657 35.0869 23.9653 35.4575 23.7099 35.7108L18.9999 40.4108V50.5908L24.2899 45.2908C24.6825 44.9014 25.316 44.9027 25.707 45.2937C26.098 45.6847 26.0993 46.3182 25.7099 46.7108L19.1099 53.3108C20.5836 55.6061 23.1222 56.9959 25.8499 57.0008C30.4218 56.9175 34.0657 53.153 33.9999 48.5808C33.9999 48.4808 33.9999 48.3708 33.9899 48.2708C33.9144 45.5181 32.4995 42.9757 30.1999 41.4608C29.6179 41.0816 28.9894 40.7791 28.3299 40.5608C27.9987 40.4476 27.7492 40.1717 27.6699 39.8308C27.5894 39.4918 27.6918 39.1354 27.9399 38.8908C29.3028 37.5593 30.0738 35.7362 30.0799 33.8308V33.7708C30.1175 30.3966 27.7486 27.4733 24.4399 26.8108C24.0416 26.7303 23.6362 26.6901 23.2299 26.6908C22.8473 26.693 22.4958 26.4805 22.3199 26.1408C22.1466 25.8084 22.1736 25.407 22.3899 25.1008C23.0517 24.2175 23.4441 23.1618 23.5199 22.0608C23.5368 21.9248 23.5434 21.7877 23.5399 21.6508C23.5864 18.541 21.1095 15.9791 17.9999 15.9208C14.8903 15.9791 12.4134 18.541 12.4599 21.6508C12.4564 21.7877 12.463 21.9248 12.4799 22.0608C12.5557 23.1618 12.9481 24.2175 13.6099 25.1008C13.8295 25.4087 13.8603 25.8131 13.6899 26.1508C13.4953 26.5153 13.1014 26.728 12.6899 26.6908C12.3104 26.6867 11.9315 26.7236 11.5599 26.8008C8.24704 27.4633 5.87669 30.3926 5.9199 33.7708V33.8308C5.92598 35.7361 6.69701 37.5592 8.0599 38.8908C8.30805 39.1353 8.41043 39.4918 8.3299 39.8307C8.25062 40.1717 8.00114 40.4476 7.6699 40.5607C7.01045 40.779 6.38192 41.0815 5.7999 41.4607C3.50029 42.9756 2.08536 45.518 2.0099 48.2707C1.9999 48.3707 1.9999 48.4807 1.9999 48.5807C1.93412 53.1529 5.57797 56.9175 10.1499 57.0008Z", fill: colourFill })));
};

var components = {
    adults: ServiceIcon,
    adultsHover: ServiceIcon$1,
    benefits: ServiceIcon$2,
    benefitsHover: ServiceIcon$3,
    bins: ServiceIcon$4,
    binsHover: ServiceIcon$5,
    births: ServiceIcon$6,
    birthsHover: ServiceIcon$7,
    business: ServiceIcon$8,
    businessHover: ServiceIcon$9,
    careers: ServiceIcon$a,
    careersHover: ServiceIcon$b,
    children: ServiceIcon$c,
    childrenHover: ServiceIcon$d,
    council: ServiceIcon$e,
    councilHover: ServiceIcon$f,
    counciltax: ServiceIcon$g,
    counciltaxHover: ServiceIcon$h,
    covid: ServiceIcon$i,
    covidHover: ServiceIcon$j,
    culturenorth: Icon$1,
    culturenorthHover: Icon$2,
    culturewest: Icon$3,
    culturewestHover: Icon$4,
    democracy: ServiceIcon$k,
    democracyHover: ServiceIcon$l,
    environment: ServiceIcon$m,
    environmentHover: ServiceIcon$n,
    finance: ServiceIcon$o,
    financeHover: ServiceIcon$p,
    housing: ServiceIcon$q,
    housingHover: ServiceIcon$r,
    libraries: ServiceIcon$s,
    librariesHover: ServiceIcon$t,
    planning: ServiceIcon$u,
    planningHover: ServiceIcon$v,
    roads: ServiceIcon$w,
    roadsHover: ServiceIcon$x,
    safety: ServiceIcon$y,
    safetyHover: ServiceIcon$z,
    schools: ServiceIcon$A,
    schoolsHover: ServiceIcon$B,
    sports: SportsIcon,
    sportsHover: ServiceIcon$C,
};

/**
 * A Heading With an Icon - used for service landing pages
 */
var HeadingWithIcon = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 2 : _b, text = _a.text, icon = _a.icon;
    var themeContext = React.useContext(styled.ThemeContext);
    var DynamicComponent = function (_a) {
        var name = _a.name, _b = _a.isHover, isHover = _b === void 0 ? false : _b;
        var DynamicIcon;
        if (name === "culture") {
            var newName = name + themeContext.cardinal_name;
            DynamicIcon = components[newName + (isHover ? "Hover" : "")];
        }
        else {
            DynamicIcon = components[name + (isHover ? "Hover" : "")];
        }
        return React__default.createElement(DynamicIcon, { colourFill: themeContext.theme_vars.colours.action_dark });
    };
    return (React__default.createElement(HeadingWrapper, null,
        React__default.createElement(IconWrapper, { iconSize: level },
            React__default.createElement(Icon, { className: "service-icon", iconSize: level },
                React__default.createElement(DynamicComponent, { name: icon, isHover: false }))),
        React__default.createElement(Heading, { text: text, level: level })));
};

const Container = styled__default.div`
  ${props => props.theme.fontStyles};
  display: block;
  border-top: 1px solid ${props => props.theme.theme_vars.colours.grey};
  padding-top: ${props => props.theme.theme_vars.spacingSizes.small};
`;

const resetButtonStyles = `
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 15px;
`;

const Previous = styled__default.button`
  ${resetButtonStyles}
  ${props => props.theme.fontStyles}
  ${props => props.theme.linkStyles}

  &:hover {
    ${props => props.theme.linkStylesHover}
  }
  &:focus {
    ${props => props.theme.linkStylesFocus}
  }
  &:active {
    ${props => props.theme.linkStylesActive}
  }
`;

const Next = styled__default.button`
  ${resetButtonStyles}
  ${props => props.theme.fontStyles}
  ${props => props.theme.linkStyles}

  &:hover {
    ${props => props.theme.linkStylesHover}
  }
  &:focus {
    ${props => props.theme.linkStylesFocus}
  }
  &:active {
    ${props => props.theme.linkStylesActive}
  }
`;

const NumbersContainer = styled__default.ul`
  margin: 0 !important;
  padding: 0;
  display: inline-block;
  list-style: none;
`;

const NumberContainer = styled__default.li`
  display: inline-block;
  padding-left: 0 !important;

  &:before {
    display: none;
  }
`;


const Number$1 = styled__default.button`
  ${resetButtonStyles}
  padding: 8px 12px;
  ${props => props.theme.fontStyles}
  ${props => props.theme.linkStyles}

  &:hover {
    ${props => props.theme.linkStylesHover}
  }
  &:focus {
    ${props => props.theme.linkStylesFocus}
  }
  &:active {
    ${props => props.theme.linkStylesActive}
  }

  text-decoration: ${props => props.isCurrent ? 'none' : 'underline'};
  font-weight: ${props => props.isCurrent ? 'normal' : '700'};
`;

const VisuallyHidden = styled__default.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var Uri = createCommonjsModule(function (module) {
/*!
 * jsUri
 * https://github.com/derek-watson/jsUri
 *
 * Copyright 2013, Derek Watson
 * Released under the MIT license.
 *
 * Includes parseUri regular expressions
 * http://blog.stevenlevithan.com/archives/parseuri
 * Copyright 2007, Steven Levithan
 * Released under the MIT license.
 */

 /*globals define, module */

(function(global) {

  var re = {
    starts_with_slashes: /^\/+/,
    ends_with_slashes: /\/+$/,
    pluses: /\+/g,
    query_separator: /[&;]/,
    uri_parser: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@]*))?)?@)?(\[[0-9a-fA-F:.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?(:)?)((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  };

  /**
   * Define forEach for older js environments
   * @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach#Compatibility
   */
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
      var T, k;

      if (this == null) {
        throw new TypeError(' this is null or not defined');
      }

      var O = Object(this);
      var len = O.length >>> 0;

      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }

      if (arguments.length > 1) {
        T = thisArg;
      }

      k = 0;

      while (k < len) {
        var kValue;
        if (k in O) {
          kValue = O[k];
          callback.call(T, kValue, k, O);
        }
        k++;
      }
    };
  }

  /**
   * unescape a query param value
   * @param  {string} s encoded value
   * @return {string}   decoded value
   */
  function decode(s) {
    if (s) {
        s = s.toString().replace(re.pluses, '%20');
        s = decodeURIComponent(s);
    }
    return s;
  }

  /**
   * Breaks a uri string down into its individual parts
   * @param  {string} str uri
   * @return {object}     parts
   */
  function parseUri(str) {
    var parser = re.uri_parser;
    var parserKeys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "isColonUri", "relative", "path", "directory", "file", "query", "anchor"];
    var m = parser.exec(str || '');
    var parts = {};

    parserKeys.forEach(function(key, i) {
      parts[key] = m[i] || '';
    });

    return parts;
  }

  /**
   * Breaks a query string down into an array of key/value pairs
   * @param  {string} str query
   * @return {array}      array of arrays (key/value pairs)
   */
  function parseQuery(str) {
    var i, ps, p, n, k, v, l;
    var pairs = [];

    if (typeof(str) === 'undefined' || str === null || str === '') {
      return pairs;
    }

    if (str.indexOf('?') === 0) {
      str = str.substring(1);
    }

    ps = str.toString().split(re.query_separator);

    for (i = 0, l = ps.length; i < l; i++) {
      p = ps[i];
      n = p.indexOf('=');

      if (n !== 0) {
        k = decode(p.substring(0, n));
        v = decode(p.substring(n + 1));
        pairs.push(n === -1 ? [p, null] : [k, v]);
      }

    }
    return pairs;
  }

  /**
   * Creates a new Uri object
   * @constructor
   * @param {string} str
   */
  function Uri(str) {
    this.uriParts = parseUri(str);
    this.queryPairs = parseQuery(this.uriParts.query);
    this.hasAuthorityPrefixUserPref = null;
  }

  /**
   * Define getter/setter methods
   */
  ['protocol', 'userInfo', 'host', 'port', 'path', 'anchor'].forEach(function(key) {
    Uri.prototype[key] = function(val) {
      if (typeof val !== 'undefined') {
        this.uriParts[key] = val;
      }
      return this.uriParts[key];
    };
  });

  /**
   * if there is no protocol, the leading // can be enabled or disabled
   * @param  {Boolean}  val
   * @return {Boolean}
   */
  Uri.prototype.hasAuthorityPrefix = function(val) {
    if (typeof val !== 'undefined') {
      this.hasAuthorityPrefixUserPref = val;
    }

    if (this.hasAuthorityPrefixUserPref === null) {
      return (this.uriParts.source.indexOf('//') !== -1);
    } else {
      return this.hasAuthorityPrefixUserPref;
    }
  };

  Uri.prototype.isColonUri = function (val) {
    if (typeof val !== 'undefined') {
      this.uriParts.isColonUri = !!val;
    } else {
      return !!this.uriParts.isColonUri;
    }
  };

  /**
   * Serializes the internal state of the query pairs
   * @param  {string} [val]   set a new query string
   * @return {string}         query string
   */
  Uri.prototype.query = function(val) {
    var s = '', i, param, l;

    if (typeof val !== 'undefined') {
      this.queryPairs = parseQuery(val);
    }

    for (i = 0, l = this.queryPairs.length; i < l; i++) {
      param = this.queryPairs[i];
      if (s.length > 0) {
        s += '&';
      }
      if (param[1] === null) {
        s += param[0];
      } else {
        s += param[0];
        s += '=';
        if (typeof param[1] !== 'undefined') {
          s += encodeURIComponent(param[1]);
        }
      }
    }
    return s.length > 0 ? '?' + s : s;
  };

  /**
   * returns the first query param value found for the key
   * @param  {string} key query key
   * @return {string}     first value found for key
   */
  Uri.prototype.getQueryParamValue = function (key) {
    var param, i, l;
    for (i = 0, l = this.queryPairs.length; i < l; i++) {
      param = this.queryPairs[i];
      if (key === param[0]) {
        return param[1];
      }
    }
  };

  /**
   * returns an array of query param values for the key
   * @param  {string} key query key
   * @return {array}      array of values
   */
  Uri.prototype.getQueryParamValues = function (key) {
    var arr = [], i, param, l;
    for (i = 0, l = this.queryPairs.length; i < l; i++) {
      param = this.queryPairs[i];
      if (key === param[0]) {
        arr.push(param[1]);
      }
    }
    return arr;
  };

  /**
   * removes query parameters
   * @param  {string} key     remove values for key
   * @param  {val}    [val]   remove a specific value, otherwise removes all
   * @return {Uri}            returns self for fluent chaining
   */
  Uri.prototype.deleteQueryParam = function (key, val) {
    var arr = [], i, param, keyMatchesFilter, valMatchesFilter, l;

    for (i = 0, l = this.queryPairs.length; i < l; i++) {

      param = this.queryPairs[i];
      keyMatchesFilter = decode(param[0]) === decode(key);
      valMatchesFilter = param[1] === val;

      if ((arguments.length === 1 && !keyMatchesFilter) || (arguments.length === 2 && (!keyMatchesFilter || !valMatchesFilter))) {
        arr.push(param);
      }
    }

    this.queryPairs = arr;

    return this;
  };

  /**
   * adds a query parameter
   * @param  {string}  key        add values for key
   * @param  {string}  val        value to add
   * @param  {integer} [index]    specific index to add the value at
   * @return {Uri}                returns self for fluent chaining
   */
  Uri.prototype.addQueryParam = function (key, val, index) {
    if (arguments.length === 3 && index !== -1) {
      index = Math.min(index, this.queryPairs.length);
      this.queryPairs.splice(index, 0, [key, val]);
    } else if (arguments.length > 0) {
      this.queryPairs.push([key, val]);
    }
    return this;
  };

  /**
   * test for the existence of a query parameter
   * @param  {string}  key        add values for key
   * @param  {string}  val        value to add
   * @param  {integer} [index]    specific index to add the value at
   * @return {Uri}                returns self for fluent chaining
   */
  Uri.prototype.hasQueryParam = function (key) {
    var i, len = this.queryPairs.length;
    for (i = 0; i < len; i++) {
      if (this.queryPairs[i][0] == key)
        return true;
    }
    return false;
  };

  /**
   * replaces query param values
   * @param  {string} key         key to replace value for
   * @param  {string} newVal      new value
   * @param  {string} [oldVal]    replace only one specific value (otherwise replaces all)
   * @return {Uri}                returns self for fluent chaining
   */
  Uri.prototype.replaceQueryParam = function (key, newVal, oldVal) {
    var index = -1, len = this.queryPairs.length, i, param;

    if (arguments.length === 3) {
      for (i = 0; i < len; i++) {
        param = this.queryPairs[i];
        if (decode(param[0]) === decode(key) && decodeURIComponent(param[1]) === decode(oldVal)) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        this.deleteQueryParam(key, decode(oldVal)).addQueryParam(key, newVal, index);
      }
    } else {
      for (i = 0; i < len; i++) {
        param = this.queryPairs[i];
        if (decode(param[0]) === decode(key)) {
          index = i;
          break;
        }
      }
      this.deleteQueryParam(key);
      this.addQueryParam(key, newVal, index);
    }
    return this;
  };

  /**
   * Define fluent setter methods (setProtocol, setHasAuthorityPrefix, etc)
   */
  ['protocol', 'hasAuthorityPrefix', 'isColonUri', 'userInfo', 'host', 'port', 'path', 'query', 'anchor'].forEach(function(key) {
    var method = 'set' + key.charAt(0).toUpperCase() + key.slice(1);
    Uri.prototype[method] = function(val) {
      this[key](val);
      return this;
    };
  });

  /**
   * Scheme name, colon and doubleslash, as required
   * @return {string} http:// or possibly just //
   */
  Uri.prototype.scheme = function() {
    var s = '';

    if (this.protocol()) {
      s += this.protocol();
      if (this.protocol().indexOf(':') !== this.protocol().length - 1) {
        s += ':';
      }
      s += '//';
    } else {
      if (this.hasAuthorityPrefix() && this.host()) {
        s += '//';
      }
    }

    return s;
  };

  /**
   * Same as Mozilla nsIURI.prePath
   * @return {string} scheme://user:password@host:port
   * @see  https://developer.mozilla.org/en/nsIURI
   */
  Uri.prototype.origin = function() {
    var s = this.scheme();

    if (this.userInfo() && this.host()) {
      s += this.userInfo();
      if (this.userInfo().indexOf('@') !== this.userInfo().length - 1) {
        s += '@';
      }
    }

    if (this.host()) {
      s += this.host();
      if (this.port() || (this.path() && this.path().substr(0, 1).match(/[0-9]/))) {
        s += ':' + this.port();
      }
    }

    return s;
  };

  /**
   * Adds a trailing slash to the path
   */
  Uri.prototype.addTrailingSlash = function() {
    var path = this.path() || '';

    if (path.substr(-1) !== '/') {
      this.path(path + '/');
    }

    return this;
  };

  /**
   * Serializes the internal state of the Uri object
   * @return {string}
   */
  Uri.prototype.toString = function() {
    var path, s = this.origin();

    if (this.isColonUri()) {
      if (this.path()) {
        s += ':'+this.path();
      }
    } else if (this.path()) {
      path = this.path();
      if (!(re.ends_with_slashes.test(s) || re.starts_with_slashes.test(path))) {
        s += '/';
      } else {
        if (s) {
          s.replace(re.ends_with_slashes, '/');
        }
        path = path.replace(re.starts_with_slashes, '/');
      }
      s += path;
    } else {
      if (this.host() && (this.query().toString() || this.anchor())) {
        s += '/';
      }
    }
    if (this.query().toString()) {
      s += this.query().toString();
    }

    if (this.anchor()) {
      if (this.anchor().indexOf('#') !== 0) {
        s += '#';
      }
      s += this.anchor();
    }

    return s;
  };

  /**
   * Clone a Uri object
   * @return {Uri} duplicate copy of the Uri
   */
  Uri.prototype.clone = function() {
    return new Uri(this.toString());
  };

  /**
   * export via AMD or CommonJS, otherwise leak a global
   */
  {
    module.exports = Uri;
  }
}());
});

/**
 * We're currently working by sending a request to the server to display what we want on the page.
 * This means that url params are important and we dont want to be getting confused.
 * I'm proposing we use this helper to route all window.location redirects through to keep our sanity!
 */

 // https://github.com/derek-watson/jsUri

 const handleParams = (postTo, newParams) => {
   var uri = new Uri(window.location);

    // check where we're posting to (news / search etc)
   const path = (uri.path().substring(0,1) === '/') ? uri.path().substring(1) : uri.path();
   if(postTo !== path) {
      postTo = (postTo.substring(0,1) === '/') ? postTo.substring(1) : postTo;
      // console.log('updating path to /' + postTo)
      uri.setPath(`/${postTo}`);
   }

   // first check for existance of any query params
   if(uri.query() === '') {
      newParams.forEach(param => {
         // console.info('No existing params adding new ' + param.key + ' value with ' + param.value)
         uri.addQueryParam(param.key, param.value); 
      });
   } else {
      // we already have params
      newParams.forEach(param => {    
            if(uri.hasQueryParam(param.key)) {
               // param already exists but value not null
               if(uri.getQueryParamValue(param.key) !== param.value) {
                     // param not the same - update it
                     // console.info('Updating ' + param.key + ' value with ' + param.value)
                     uri.replaceQueryParam(param.key, param.value);
               }
            } else {
               // param doesnt exist - add it
               // console.info('Adding new ' + param.key + ' value with ' + param.value)
               uri.addQueryParam(param.key, param.value);
            }
      });


   }

   // if anything has no value remove the url param for it
   const removeEmpty = uri.queryPairs.filter(query => query[1] === "");
   removeEmpty.map(emptyQuery => uri.deleteQueryParam(emptyQuery[0]));

   // console.log(uri.toString());
   window.location.href = uri.toString();

 };

 /**
  * Remove specific key from the url
  * @param {array of values to remove} params 
  */
 const removeParams = (params) => {
   var uri = new Uri(window.location);
    [...params].map(param => {
      uri.deleteQueryParam(param);
    });
   //  console.log(uri.toString());
    window.location.href = uri.toString();
 };

 /**
  * Removes a specific value from a given parameter
  * @param {*} param 
  * @param {*} value 
  */
 const removeValueFromParam = (param, searchValue) => {
   var uri = new Uri(window.location);
   if(uri.hasQueryParam(param)) {
      let vals = uri.getQueryParamValues(param);

      if(vals.length === 1 && vals[0].includes(',')) {
         vals = vals[0].split(',');
      }

      let removedVal = vals.filter(val => val !== searchValue);

      if(removedVal.length === 0) {
         uri.deleteQueryParam(param);
         window.location.href = uri.toString();
      }
      else {
         uri.replaceQueryParam(param, removedVal);
         window.location.href = uri.toString();
      }

   }
 };

 /**
  * From a list of params - returns how many of them are set in the url
  * @param {*} params 
  */
 const countParams = (params) => {
   let count = 0;
   var uri = new Uri(window.location);
   [...params].map(param => {
     if(uri.hasQueryParam(param)) count++;
   });
   return count;
 };

  /**
  * 
  * Get plain values from url
  * @param {*} param 
  * @returns 
  */
   const getParamValue = (param) => {
      const uri = new Uri(window.location);
      if(uri.hasQueryParam(param)) {
         return uri.getQueryParamValues(param);
      }
      return []
    };

 /**
  * 
  * Get an array of all the values for a given dropdown parameter
  * @param {*} param 
  * @returns 
  */
 const getDropDownValues = (param) => {
   const uri = new Uri(window.location);
   if(uri.hasQueryParam(param)) {
      return uri.getQueryParamValues(param);
   }
   return []
 };

  /**
  * 
  * Get an array of all the values for a given checkbox parameter
  * @param {*} param 
  * @returns 
  */
   const getCheckboxValues = (param) => {
      const uri = new Uri(window.location);
      if(uri.hasQueryParam(param)) {
         return uri.getQueryParamValues(param)[0].split(',');
      }
      return []
    };
   


 const deSlug = (slug) => {
   var words = slug.split('-');
 
   for (var i = 0; i < words.length; i++) {
     var word = words[i];
     words[i] = word.charAt(0).toUpperCase() + word.slice(1);
   }
 
   return words.join(' ');
 };

var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalResults = _a.totalResults, resultsPerPage = _a.resultsPerPage, _b = _a.postTo, postTo = _b === void 0 ? "search" : _b;
    // support for ...
    var pagination = function (c, m) {
        var current = c, last = m, delta = 2, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [], l;
        for (var i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var i = range_1[_i];
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                }
                else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    };
    if (resultsPerPage === undefined)
        resultsPerPage = 10;
    var numberOfNumbers = Math.ceil(totalResults / resultsPerPage);
    var numbers = pagination(currentPage, numberOfNumbers);
    // const numbers = allNumbers;
    var buttonClick = function (pageNo) {
        handleParams(postTo, [{ key: 'page', value: pageNo }]);
    };
    if (numbers.length > 1) {
        return (React__default.createElement(Container, { "data-testid": "Pagination", role: "navigation", "aria-label": "Pagination" },
            currentPage !== 1 &&
                React__default.createElement(Previous, { onClick: function () { return buttonClick(currentPage - 1); }, title: "Go back a page" }, "Previous"),
            React__default.createElement(NumbersContainer, null, numbers.map(function (v, i) {
                return React__default.createElement(NumberContainer, { key: i },
                    React__default.createElement(Number$1, { onClick: function () { return buttonClick(v); }, isCurrent: currentPage === v, title: currentPage === v ? "This is the current page" : v === "..." ? "See more pages" : ("Go to page " + v) },
                        React__default.createElement(VisuallyHidden, null, "Page "),
                        v));
            })),
            currentPage < numberOfNumbers &&
                React__default.createElement(Next, { onClick: function () { return buttonClick(currentPage + 1); }, title: "Go forward a page" }, "Next")));
    }
    return null;
};

const VisuallyHidden$1 = styled.css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;

// const hideLabel = props => {
//   if(props.labelHidden === true) {
//     return VisuallyHidden;
//   }
// }


// export const Label = styled.label`
//     display: block;
//     margin-bottom: 5px;
//     ${hideLabel}
// `

const Container$1 = styled__default.div`
${props => props.theme.fontStyles};
  margin-bottom: 30px;
`;

const Fieldset = styled__default.fieldset`
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
`;

const hideLabel = props => {
  if(props.labelHidden === true) {
    return VisuallyHidden$1;
  }
};


const Legend = styled__default.legend`
    color: #0b0c0c;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: table;
    max-width: 100%;
    margin-bottom: 10px;
    padding: 0;
    white-space: normal;
    ${hideLabel}
`;

const hideHint = props => {
  if(props.hintHidden === true) {
    return VisuallyHidden$1;
  }
};


const Hint = styled__default.div`
    font-size: ${props => props.theme.theme_vars.fontSizes.small};
    display: block;
    margin-bottom: 15px;
    color: #505a5f;
    margin-top: -5px;
    ${hideHint}
`;

const Checkboxes = styled__default.div`
  display: block; 
  `;



const Checkbox = styled__default.div`
     
    font-size: ${props => props.theme.theme_vars.fontSizes.small};
    display: block;
    position: relative;
    min-height: 40px;
    margin-bottom: 10px;
    padding-left: 40px;
    clear: left;
  `;

const CheckboxInput = styled__default.input`
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: -2px;
    left: -2px;
    width: 44px;
    height: 44px;
    margin: 0;
    opacity: 0;
`;

const CheckboxLabel = styled__default.label`
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 15px 5px;
    cursor: pointer;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;


    &:before {
      content: "";
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border: 2px solid currentColor;
      background: transparent;
    }


    &:after {
      content: "";
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      top: 11px;
      left: 9px;
      width: 23px;
      height: 12px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border: solid;
      border-width: 0 0 5px 5px;
      border-top-color: transparent;
      opacity: ${props => props.isChecked ? 1 : 0};
      background: transparent;
    }
`;

const NewsArticleFilterFields = {
    search: {
        title: "Search articles",
        queryParamKey: "searchTerm"
    },
    services: {
        title: "Services",
        queryParamKey: "services"
    },
    articleType: {
        title: "Type of Article",
        queryParamKey: "articleType"
    },
    sortBy: {
        title: "Sort by",
        queryParamKey: "sortBy"
    },
    // what is included in the filter removal
    removeFiltersList: ['searchTerm', 'services', 'articleType']
};

var CheckboxListFilter = function (_a) {
    var options = _a.options, checked = _a.checked, label = _a.label, _b = _a.hint, hint = _b === void 0 ? null : _b, displayLegend = _a.displayLegend;
    var labelHidden = (label === null || !displayLegend) ? true : false;
    var hintHidden = (hint === null) ? true : false;
    var setupCheckboxes = function () {
        return options.map(function (option) { return (__assign(__assign({}, option), { checked: (checked.includes(option.value) ? true : false) })); });
    };
    var _c = React.useState(setupCheckboxes()), checkboxState = _c[0], setCheckboxState = _c[1];
    var optionChecked = function (e) {
        var checkedVal = e.target.value;
        var newCheckboxState = __spreadArrays(checkboxState);
        // update the state so it looks correct
        newCheckboxState.find(function (val) {
            if (val.value === checkedVal) {
                val.checked = !val.checked;
            }
        });
        setCheckboxState(newCheckboxState);
        // take our new state and send a smooshed list to the handleParams method
        var checked = __spreadArrays(checkboxState);
        checked = newCheckboxState.filter(function (c) { return c.checked === true; });
        var articleTypes = checked.map(function (c) { return c.value; }).join(',');
        handleParams('news', [{ key: NewsArticleFilterFields.articleType.queryParamKey, value: articleTypes }]);
    };
    var backupLabel = Math.random().toString(36).substring(7);
    return (React__default.createElement(Container$1, { "data-testid": "CheckboxListFilter" },
        React__default.createElement(Fieldset, { "aria-describedby": "waste-hint" },
            React__default.createElement(Legend, { labelHidden: labelHidden }, label),
            React__default.createElement(Hint, { id: "waste-hint", hintHidden: hintHidden }, hint),
            React__default.createElement(Checkboxes, null, checkboxState.map(function (option, i) {
                return React__default.createElement(Checkbox, { key: i },
                    React__default.createElement(CheckboxInput, { id: option.value, name: labelHidden ? backupLabel : label, type: "checkbox", onChange: optionChecked, value: option.value, checked: option.checked }),
                    React__default.createElement(CheckboxLabel, { isChecked: option.checked, htmlFor: option.value }, option.title));
            })))));
};

const Container$2 = styled__default.div`  
  ${props => props.theme.fontStyles};
`;

const hideLabel$1 = props => {
  if(props.hideLabel === true) {
    return VisuallyHidden$1;
  }
};


const Label = styled__default.label`
    display: block;
    margin-bottom: 5px;
    ${hideLabel$1}
`;

const Select = styled__default.select`

  ${props => props.theme.fontStyles};
  border-radius: ${props => props.theme.theme_vars.border_radius};
  box-sizing: border-box;
  max-width: 100%;
  height: 40px;
  height: 2.5rem;
  padding: 5px;
  border: 2px solid ${props => props.theme.theme_vars.colours.black};

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;
  }
`;

const Option = styled__default.option`
  :active, :checked,:focus::-ms-value {
    color: #fff;
    background-color: #1d70b8
  }

`;

var DropDownSelect = function (_a) {
    var id = _a.id, label = _a.label, options = _a.options, onChange = _a.onChange, selected = _a.selected, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b;
    return (React__default.createElement(Container$2, null,
        React__default.createElement(Label, { htmlFor: id, hideLabel: hideLabel }, label),
        React__default.createElement(Select, { id: id, name: id, onChange: onChange && onChange, defaultValue: selected && selected }, options.map(function (option, i) {
            return React__default.createElement(Option, { key: i, value: option.value }, option.title);
        }))));
};

var DropDownFilter = function (_a) {
    var id = _a.id, label = _a.label, options = _a.options, selected = _a.selected, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b;
    var _c = React.useState(selected), value = _c[0], setValue = _c[1];
    var optionPicked = function (e) {
        setValue(e.target.value);
        handleParams('news', [{ key: NewsArticleFilterFields.services.queryParamKey, value: e.target.value }]);
    };
    return (React__default.createElement(DropDownSelect, { id: id, label: label, options: options, onChange: optionPicked, selected: value, hideLabel: hideLabel }));
};

const PromotedLinks = styled__default.div`
  ${props => props.theme.fontStyles}
    margin-top: 30px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
        margin-top: 60px;
    }
    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-top: 90px;
    }
    flex-direction: ${prop => prop.oneCol ? 'column' : 'inherit'};
`;

const PromotedLink = styled__default.a`
    display: block;

    box-sizing: border-box;
    background: ${props => props.theme.theme_vars.colours.white};
    background: ${props => props.theme.theme_vars.colours.white}F2;
    border-radius: 3px;
    box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    
    padding: 20px 15px;
    width: calc(100% - 30px);
    margin-bottom: 15px;

    span {
        ${props => props.theme.linkStyles};
    }

    &:hover {
        background: ${props => props.theme.theme_vars.colours.white};
    }

    &:focus {
        ${props => props.theme.linkStylesFocus};
        box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    }
    &:active {
        ${props => props.theme.linkStylesActive};
        transform: translateY(3px);
        box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        width: 100%;
        margin-right: 15px;
        flex: 0 0 calc(50% - 38px);
        &:nth-of-type(2n) {
            margin-right: 0;
        }
    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: 100%;
        margin-right: 30px;

        margin-bottom: ${prop => prop.oneCol ? '20px' : '0px'};
        padding: 30px;
        flex: 1;

        &:nth-of-type(2n) {
            margin-right: 30px;
        }
        &:last-of-type {
            margin-right: 0;
        }


    }


  `;

var PromotedLinks$1 = function (_a) {
    var promotedLinksArray = _a.promotedLinksArray, oneCol = _a.oneCol;
    if (promotedLinksArray.length > 0) {
        return (React__default.createElement(PromotedLinks, { "data-testid": "PromotedLinks", oneCol: oneCol }, promotedLinksArray.map(function (link, i) {
            return React__default.createElement(PromotedLink, { key: i, oneCol: oneCol, href: link.url, title: "Go to " + link.title },
                React__default.createElement("span", null, link.title));
        })));
    }
    else {
        return null;
    }
};

// Accordion

const Container$3 = styled__default.div`
  ${props => props.theme.fontStyles}
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey};

  @media (min-width: 40.0625em) {
        margin-bottom: 30px
  }
`;

const AccordionControls = styled__default.div`
    text-align: right;
`;

const OpenAllButton = styled__default.button`
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};
    position: relative;
    z-index: 1;
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
    border-width: 0;
    color: ${props => props.theme.theme_vars.colours.action};
    background: none;
    cursor: pointer;
    &:hover {
        ${props => props.theme.linkStylesHover};
    }
    &:focus {
        ${props => props.theme.linkStylesFocus};
    }
    &:active {
        ${props => props.theme.linkStylesActive};
    }
`;

const VisuallyHidden$2 = styled__default.span`
    ${props => props.theme.visuallyHidden}
`;

// AccordionSection

const Section = styled__default.div`
  padding-top: 0;
`;

const SectionHeader = styled__default.div`
    ${props => props.theme.headingStyles}
    position: relative;
    padding-right: 40px;
    border-top: 1px solid ${props => props.theme.theme_vars.colours.grey};
    color: ${props => props.theme.theme_vars.colours.action};
    cursor: pointer;
    padding-bottom: 15px;

    &:hover {
        border-top-color: ${props => props.theme.theme_vars.colours.action};
        -webkit-box-shadow: inset 0 2px 0 0 ${props => props.theme.theme_vars.colours.action};
        box-shadow: inset 0 2px 0 0 ${props => props.theme.theme_vars.colours.action}
    }
`;

const SectionHeading = styled__default.div`
    margin-top: 10px;
    margin-bottom: 5px;
`;


const SectionButtonIsFilteredStyles = props => {
    if(props.isFilter) {
        return styled.css`
            ${props => props.theme.theme_vars.h4}
        `
    } else {
        return styled.css`
            ${props => props.theme.theme_vars.h3}
        `
    }
};


const SectionButton = styled__default.button`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding: 0;
    border-width: 0;
    color: inherit;
    background: none;
    text-align: left;
    cursor: pointer;
    -webkit-appearance: none;
    text-decoration: underline;

    ${SectionButtonIsFilteredStyles}

    &:focus {
        outline: 3px solid transparent;
        color: ${props => props.theme.theme_vars.colours.black};
        background-color: ${props => props.theme.theme_vars.colours.focus};
        -webkit-box-shadow: 0 -2px ${props => props.theme.theme_vars.colours.focus}, 0 4px ${props => props.theme.theme_vars.colours.black};
        box-shadow: 0 -2px ${props => props.theme.theme_vars.colours.focus}, 0 4px ${props => props.theme.theme_vars.colours.black};
        text-decoration: none
    }

    &::-moz-focus-inner {
        padding: 0;
        border: 0
    }

    &:after {
    content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }

    &:hover:not(:focus) {
        text-decoration: underline;
        text-decoration-style: dotted;
    }

    &:hover {
        text-decoration: none;
    }
`;

const ReadMore = styled__default.button`
    ${props => props.theme.linkStyles}
    background: none;
    border: none;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0;
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small}; 
`;
const ShowLessButton = styled__default.button`
    ${props => props.theme.linkStyles}
    background: none;
    border: none;
    margin-top: 15px;
    padding: 0;
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small}; 
    cursor: pointer;
    
    &:hover {
        ${props => props.theme.linkStylesHover}
    }
    &:focus {
        ${props => props.theme.linkStylesFocus}
    }
    &:active {
        ${props => props.theme.linkStylesActive}
    }
`;


const AccordionIcon = styled__default.span`
    position: absolute;
    top: 50%;
    right: 15px;
    width: 16px;
    height: 16px;
    margin-top: -8px;

    &:after,
    &:before {
    content: "";
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 25%;
        height: 25%;
        margin: auto;
        border: 2px solid transparent;
        background-color: ${props => props.theme.theme_vars.colours.black};
    }

    &:before {
        width: 100%;
    }

    &:after {
        height: 100%;

        .accordion__section--expanded & {
            content: " ";
            display: none;
        }
    }
`;

const SectionSummary = styled__default.div`
    margin-top: 10px;
    margin-bottom: 0;
    color: ${props => props.theme.theme_vars.colours.black};
`;

const SectionContent = styled__default.div`
    display: none;
    padding-top: 5px;
    padding-bottom: 15px;

    h2, h3, h4, h5 {
        &:first-child {
            margin-top: 0;
        }
    }

    @media (min-width: 40.0625em) {
        padding-bottom: 25px
    }

    >:last-child {
        margin-bottom: 0
    }

    .accordion__section--expanded & {
        display: block;
    }
`;

const uniqueID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

var AccordionSection = function (_a) {
    var title = _a.title, content = _a.content, summary = _a.summary, isExpanded = _a.isExpanded, accordionSectionId = _a.accordionSectionId, onToggle = _a.onToggle, _b = _a.isFilter, isFilter = _b === void 0 ? false : _b, withReadMore = _a.withReadMore, _c = _a.sectionId, sectionId = _c === void 0 ? false : _c;
    var onSectionToggle = function () { return (isExpanded === true) ? onToggle(accordionSectionId, false) : onToggle(accordionSectionId, true); };
    var thisSectionId = (sectionId === false) ? "accordion_section" + uniqueID() : sectionId;
    return (React__default.createElement(Section, { id: thisSectionId, className: isExpanded && "accordion__section--expanded" },
        React__default.createElement(SectionHeader, { onClick: onSectionToggle },
            React__default.createElement(SectionHeading, { as: isFilter ? "h3" : "h2" },
                React__default.createElement(SectionButton, { title: isExpanded ? "Collapse section" : "Expand section", isFilter: isFilter, type: "button", id: thisSectionId + "_" + accordionSectionId + "-heading", "aria-controls": thisSectionId + "_" + accordionSectionId + "-content", "aria-expanded": isExpanded ? "true" : "false" },
                    title,
                    React__default.createElement(AccordionIcon, { "aria-hidden": "true" }))),
            summary &&
                React__default.createElement(SectionSummary, { id: thisSectionId + "_" + accordionSectionId + "-summary" }, summary),
            !isExpanded && withReadMore &&
                React__default.createElement(ReadMore, { title: "Read more about " + title }, "Read more")),
        React__default.createElement(SectionContent, { id: thisSectionId + "_" + accordionSectionId + "-content", "aria-labelledby": thisSectionId + "_" + accordionSectionId + "-heading" },
            content,
            isExpanded && withReadMore &&
                React__default.createElement(ShowLessButton, { onClick: onSectionToggle }, "Show less"))));
};

var Accordion = function (_a) {
    var sections = _a.sections, _b = _a.isFilter, isFilter = _b === void 0 ? false : _b, _c = _a.withReadMore, withReadMore = _c === void 0 ? true : _c;
    sections.map(function (section, i) {
        section.accordionSectionId = i;
    });
    var _d = React.useState(false), showControls = _d[0], setShowControls = _d[1];
    var _e = React.useState(true), openAll = _e[0], setOpenAll = _e[1];
    var _f = React.useState(sections), accordionStates = _f[0], setAccordionStates = _f[1];
    React.useEffect(function () {
        var anyOpen = accordionStates.find(function (accordionState) { return accordionState.isExpanded === true; });
        (anyOpen) ? setOpenAll(false) : setOpenAll(true);
        setShowControls(true);
    });
    var updateAccordionState = function (accordionSectionId, value) {
        // when a section is toggled update the parent (this) isExpanded value
        var newStatus = accordionStates.map(function (accordionState) {
            if (accordionState.accordionSectionId === accordionSectionId) {
                accordionState.isExpanded = value;
            }
            return accordionState;
        });
        setAccordionStates(newStatus);
        // update the text that shows open all / close all
        (value) ? setOpenAll(false) : setOpenAll(true);
    };
    var toggleAll = function () {
        setOpenAll(!openAll);
        var newStatus = accordionStates.map(function (accordionState) {
            accordionState.isExpanded = openAll;
            return accordionState;
        });
        setAccordionStates(newStatus);
    };
    var accordionId = "accordion" + uniqueID();
    return (React__default.createElement(Container$3, { "data-testid": "Accordion", id: accordionId },
        showControls && sections.length > 1 && React__default.createElement(AccordionControls, null,
            React__default.createElement(OpenAllButton, { onClick: toggleAll, type: "button", "aria-expanded": !openAll },
                openAll ? "Open all" : "Close all",
                React__default.createElement(VisuallyHidden$2, null, " sections"))),
        accordionStates.map(function (section, i) {
            return React__default.createElement(AccordionSection, __assign({}, section, { key: i, onToggle: updateAccordionState, isFilter: isFilter, withReadMore: withReadMore }));
        })));
};

const Blockquote = styled__default.blockquote `
    ${props => props.theme.fontStyles}
    margin: 20px 0px;
    padding: 15px 0px 15px 40px;
    border-left: 5px solid ${props => props.theme.theme_vars.colours.action};
    max-width: 750px;
`;

const Quote = styled__default.q `
    color: ${props => props.theme.theme_vars.colours.black};
    display: block;
    font-weight: bold;
    font-size: 1.2em; 
    quotes: inherit;

    p {
      margin-bottom: 15px;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
`;



const Citation = styled__default.cite `
      color: ${props => props.theme.theme_vars.colours.black};
      display: block;
      margin-top: 10px;
      line-height: 1.5;
      font-size: 1.05em;
      font-style: italic;
`;

// @TODO this needs to fit within the content border 
var BlockQuote = function (_a) {
    var quote = _a.quote, citation = _a.citation;
    return (React__default.createElement(Blockquote, { "data-testid": "BlockQuote" },
        React__default.createElement(Quote, null, quote),
        citation && React__default.createElement(Citation, null, citation)));
};

const Container$4 = styled__default.div`
    margin-bottom: 30px;
    display: block;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: inline-block;
        margin-right: 25px;
    }
`;

/**
 * A button wrapped in a div used as a slice in the content management system
 */
var CallToAction = function (_a) {
    var primary = _a.primary, size = _a.size, text = _a.text, url = _a.url, isExternal = _a.isExternal, isDisabled = _a.isDisabled, props = __rest(_a, ["primary", "size", "text", "url", "isExternal", "isDisabled"]);
    return (React__default.createElement(Container$4, null,
        React__default.createElement(Button, { primary: primary, size: "large", text: text, url: url, isExternal: isExternal, isDisabled: isDisabled })));
};

const Container$5 = styled__default.div`
  margin: 25px 0;
`;

const Outer = styled__default.div`
   ${props => props.theme.fontStyles}
    max-width: 725px;
    &:not(:first-child) {
        a {
            margin-top: 30px;
            &:before {
                content: "";
                height: 1px;
                width: 100%;
                position: absolute;
                left: 0;
                top: -15px;
                background: ${props => props.theme.theme_vars.colours.grey_dark}80;
            }
        }
   }
`;
const Link = styled__default.a`
    margin-bottom: 15px;
    display: block;
    width: fit-content;
    position: relative;
    min-width: 300px;

    svg {
        margin-right: 10px;
        vertical-align: top;
        margin-left: 5px;
        margin-top: 5px;
        g {
            fill: ${props => props.theme.theme_vars.colours.grey_dark};
        }
    }

    &:hover {
        .file-title {
            color: ${props => props.theme.theme_vars.colours.action};
        }
        .file-details {
            transform: translate(3px, 0px);   
        }
        svg {
            g {
                fill: ${props => props.theme.theme_vars.colours.action};
            }
        }
    }

    &:focus {
        outline: none;
        background: ${props => props.theme.theme_vars.colours.focus};
        box-shadow: 0px 0px 0px 3px ${props => props.theme.theme_vars.colours.focus}, 0px 3px 0px 3px ${props => props.theme.theme_vars.colours.black};
        svg {
            g {
                fill: ${props => props.theme.theme_vars.colours.black};
            }
        }
    }
    &:active {
        transform: translateY(2px);   
        box-shadow: 0px 0px 0px 3px ${props => props.theme.theme_vars.colours.focus}, 0px 1px 0px 3px ${props => props.theme.theme_vars.colours.black};
    }
`;

const FileDetails= styled__default.div`
    display: inline-block;
    max-width: calc(100% - 45px);
    transition: transform 0.3s;
`;
const Title = styled__default.span`
    display: block;
    color: ${props => props.theme.theme_vars.colours.action};
    font-weight: 700;
    
`;
const Type = styled__default.span`
    color: ${props => props.theme.theme_vars.colours.black};
    margin-right: 5px;
    font-weight: 400 !important;
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};
`;
const Size = styled__default.span`
    color: ${props => props.theme.theme_vars.colours.black}80;
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};
    font-weight: 400 !important;
`;

var IconDownload = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "40", viewBox: "0 0 30 40" },
        React__default.createElement("g", { fill: "none", fillRule: "evenodd", stroke: "none", strokeWidth: "1" },
            React__default.createElement("g", { fill: colourFill, fillRule: "nonzero", transform: "translate(-80 -1189)" },
                React__default.createElement("g", { transform: "translate(80 1189)" },
                    React__default.createElement("g", null,
                        React__default.createElement("path", { d: "M16.875 18.443a.937.937 0 00-.938-.938h-1.874a.937.937 0 00-.938.938v6.563H9.306c-.836 0-1.254 1.014-.66 1.603l5.65 5.607a1 1 0 001.408 0l5.65-5.607c.593-.589.176-1.603-.661-1.603h-3.818v-6.563zM28.893 7.655l-6.554-6.553A3.75 3.75 0 0019.691 0H3.75A3.762 3.762 0 000 3.757v32.494A3.75 3.75 0 003.75 40h22.495C28.315 40 30 38.32 30 36.25V10.31c0-.991-.404-1.952-1.107-2.655zm-8.897-3.593l5.945 5.943h-5.945V4.062zM26.25 36.25H3.75V3.757h12.497v8.123a1.87 1.87 0 001.875 1.875h8.128V36.25z" })))))));
};

var FileDownload = function (_a) {
    var title = _a.title, type = _a.type, url = _a.url, size = _a.size, props = __rest(_a, ["title", "type", "url", "size"]);
    var _b = React.useState(false), isHovered = _b[0], setIsHovered = _b[1];
    return (React__default.createElement(Outer, null,
        React__default.createElement(Link, { href: url, download: true, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } },
            React__default.createElement(IconDownload, null),
            React__default.createElement(FileDetails, { className: "file-details" },
                React__default.createElement(Title, { className: "file-title" }, title),
                React__default.createElement(Type, null, type == "Microsoft Office - OOXML - Word Document" ? "Word Document" : type == "Adobe Portable Document Format" ? "PDF" : type),
                React__default.createElement(Size, null, size)))));
};

var DownloadableFiles = function (_a) {
    var files = _a.files;
    return (React__default.createElement(Container$5, { "data-testid": "DownloadableFiles" }, files.length > 0 ?
        files.map(function (file) { return React__default.createElement(FileDownload, __assign({ key: file.title }, file)); })
        :
            React__default.createElement("i", null, "No file to show")));
};

const Divider = styled__default.hr`
  display: block;
  width: 100%;
  height: 1px;
  margin: ${props => props.theme.theme_vars.spacingSizes.medium} 0;
  background-color: ${props => props.theme.theme_vars.colours.grey_dark};
  border: none;
`;

// @TODO this needs to fit within the content border 
var Divider$1 = function () { return (React__default.createElement(Divider, { "data-testid": "Divider" })); };

const WarningText = styled__default.div`
  max-width: 750px;
  margin: 20px 0px;
  margin-top: 65px;
  padding: 25px;
  padding-top: 0;
  background: ${props => props.isWarning ? props.theme.theme_vars.colours.focus : props.theme.theme_vars.colours.secondary}80;
  border-radius: ${props => props.theme.theme_vars.border_radius};

  a {
    color: ${props => props.theme.theme_vars.colours.black} !important;
  }
`;

const Title$1 = styled__default.div`
  background: ${props => props.isWarning ? props.theme.theme_vars.colours.focus : props.theme.theme_vars.colours.secondary};
  position: relative;
  margin-left: -25px;
  margin-bottom: 0;
  top: -20px;
  display: inline-block;
  padding: 8px 25px;
  font-weight: 600;
  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.25;
  border-radius: ${props => props.theme.theme_vars.border_radius};

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
      font-size: 36px;
      font-size: 1.5rem;
      max-width: 960px;
  }
`;
const Content = styled__default.div``;

// @TODO this needs to fit within the content border 
var WarningText$1 = function (_a) {
    var title = _a.title, _b = _a.isWarning, isWarning = _b === void 0 ? false : _b, children = _a.children;
    return (React__default.createElement(WarningText, { isWarning: isWarning },
        React__default.createElement(Title$1, { isWarning: isWarning }, title),
        React__default.createElement(Content, null, children)));
};

var WarningTextDisclaimer = function () {
    return (React__default.createElement(WarningText$1, { title: "Why information is on a different website", isWarning: true },
        "We are in the process of adding information to this new unitary council website. Some pages will give you a link back to a previous council website to help you find what you need. ",
        React__default.createElement("a", { href: "/your-council/about-website", title: "Read the article" }, "Read more about the changes"),
        "."));
};

const AccessibleLinks = styled__default.a`
  ${props => props.theme.fontStyles}

  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  display: block;
  padding: 10px 15px;
 
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: inherit;
    overflow: visible;
    clip: auto;
    -webkit-clip-path: none;
    clip-path: none;
    white-space: inherit
  }

  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.theme_vars.colours.black};
  }



  @media (min-width: 40.0625em) {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25
  }



  &:focus {
    outline: 3px solid ${props => props.theme.theme_vars.colours.focus};
    outline-offset: 0;
    background-color: ${props => props.theme.theme_vars.colours.focus};
  }




`;

var AccessibleLink = function (_a) {
    var _b = _a.AccessibleLinksArray, AccessibleLinksArray = _b === void 0 ? null : _b;
    return (React__default.createElement(React__default.Fragment, null, AccessibleLinksArray && AccessibleLinksArray.map(function (link, i) {
        return React__default.createElement(AccessibleLinks, { key: 'accessible-link-' + i, href: link.url }, link.title);
    })));
};

const Container$6 = styled__default.div`
    padding: 15px 0;
    background: ${props => props.alertType === "alert" ? props.theme.theme_vars.colours.negative : 
                            props.alertType === "warning" ? props.theme.theme_vars.colours.focus :
                            props.alertType === "positive" ? props.theme.theme_vars.colours.positive :
                            props.alertType === "london_bridge" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.negative
                        };
    p, button {
        line-height: 1.3;
        color: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white
                    } !important;
    }

    a {
        ${props => props.theme.linkStyles}
        color: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white
                    } !important;

        &:hover {
            ${props => props.theme.linkStylesHover}
        }
        &:focus {
            ${props => props.theme.linkStylesFocus}
            color: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black
                } !important;
            background: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.focus
            } !important;
        }
        &:active {
            ${props => props.theme.linkStylesActive}
        }
    }

    svg {
        fill: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white
            } !important;
    }
`;
const InnerContainer = styled__default.div`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const BannerContentContainer = styled__default.div`
    max-width: calc(100% - 85px);
`;
const BannerTitle = styled__default.p`
    font-weight: bold;
    margin-bottom: 10px;
`;
const BannerContent = styled__default.div`
`;

const HideLink = styled__default.button`
    ${props => props.theme.fontStyles}
    border: none;
    background: none;
    cursor: pointer;

    &:focus {
        outline: none;
        border-radius: ${props => props.theme.theme_vars.border_radius};
        color: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black
                } !important;
        background: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.focus
        } !important;
        border-bottom: 3px solid ${props => props.theme.theme_vars.colours.black};

        svg {
            path {
                fill: ${props => props.alertType === "warning" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black
                } !important;
            }
        }
    }
    &:active {
        transform: translateY(2px);
        border-bottom: 1px solid ${props => props.theme.theme_vars.colours.black};
    }
`;

var IconDownload$1 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0539 1.33944C11.3142 0.599744 10.1149 0.599744 9.37521 1.33944L6.69648 4.01817L4.01791 1.3396C3.27821 0.5999 2.07893 0.5999 1.33923 1.3396C0.599539 2.07929 0.599539 3.27857 1.33923 4.01827L4.01781 6.69684L1.3392 9.37545C0.5995 10.1151 0.5995 11.3144 1.33919 12.0541C2.07889 12.7938 3.27817 12.7938 4.01787 12.0541L6.69648 9.37551L9.37525 12.0543C10.1149 12.794 11.3142 12.794 12.0539 12.0543C12.7936 11.3146 12.7936 10.1153 12.0539 9.37561L9.37515 6.69684L12.0539 4.01811C12.7936 3.27842 12.7936 2.07913 12.0539 1.33944Z", fill: colourFill })));
};

const handleContainerPadding = (noBackground, noPadding) => {
    if(noPadding || noBackground) {
        return 0
    } else {
        return "50px";
    }
  };


const Container$7 = styled__default.div`
    background: ${props => props.noBackground ? "transparent" : 
        props.theme.cardinal_name === "north" ?  (props.theme.theme_vars.colours.grey_light+"7a") : props.theme.theme_vars.colours.white};
    overflow: ${props => props.noPadding ? "hidden" : "visible"};
    padding-bottom: ${({ noBackground, noPadding }) => handleContainerPadding(noBackground, noPadding)};
`;

const MaxWidth = styled__default.div`
    ${props => props.theme.fontStyles}
    margin-right: 15px;
    margin-left: 15px;
    overflow: hidden;

    pre {
        font-family: monospace;
        white-space: pre;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.theme_vars.breakpoints.l};
    }
`;

/**
 * A container for holding the main content of a page
 */
var MaxWidthContainer = function (_a) {
    var children = _a.children, classes = _a.classes, _b = _a.noBackground, noBackground = _b === void 0 ? false : _b, _c = _a.noPadding, noPadding = _c === void 0 ? false : _c, props = __rest(_a, ["children", "classes", "noBackground", "noPadding"]);
    return (React__default.createElement(Container$7, { noBackground: noBackground, noPadding: noPadding },
        React__default.createElement(MaxWidth, __assign({ className: classes }, props), children)));
};

var AlertBanner = function (_a) {
    var uid = _a.uid, title = _a.title, _b = _a.alertType, alertType = _b === void 0 ? "alert" : _b, children = _a.children;
    var themeContext = React.useContext(styled.ThemeContext);
    var _c = useLocalStorage(("alert_" + uid), true), hideAlert = _c[0], setHideAlert = _c[1];
    var hideClickHandler = function () {
        setHideAlert(false);
    };
    return (hideAlert &&
        React__default.createElement(Container$6, { alertType: alertType },
            React__default.createElement(MaxWidthContainer, { noBackground: true },
                React__default.createElement(InnerContainer, null,
                    React__default.createElement(BannerContentContainer, null,
                        React__default.createElement(BannerTitle, null, title),
                        React__default.createElement(BannerContent, null, children)),
                    React__default.createElement(HideLink, { title: "Click to hide this alert banner", onClick: hideClickHandler, alertType: alertType },
                        React__default.createElement(IconDownload$1, { colourFill: alertType === "warning" ? themeContext.theme_vars.colours.black : themeContext.theme_vars.colours.white }),
                        React__default.createElement("br", null),
                        "Hide")))));
};
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = React.useState(function () {
        try {
            // Get from local storage by key
            var item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function (value) {
        try {
            // Allow value to be a function so we have same API as useState
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

const Container$8 = styled__default.div`
    border: solid 4px;
    border-radius: ${props => props.theme.theme_vars.border_radius};
    border-color: ${props => props.alertType === "alert" ? props.theme.theme_vars.colours.negative : 
                props.alertType === "warning" ? props.theme.theme_vars.colours.focus :
                props.alertType === "positive" ? props.theme.theme_vars.colours.positive :
                props.alertType === "london_bridge" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.negative
    };

    padding: 15px;
    margin-bottom: 25px;
    p {
        margin-bottom: 15px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
    h2 {
        margin-top: 0;
    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        padding: 20px;
        border-width: 6px;
    }
`;

/**
 * A container for holding the main content of a page
 */
var AlertBannerService = function (_a) {
    var title = _a.title, _b = _a.alertType, alertType = _b === void 0 ? "alert" : _b, children = _a.children;
    return (React__default.createElement(Container$8, { alertType: alertType },
        React__default.createElement(Heading, { text: title }),
        children));
};

const Container$9 = styled__default.div`
    padding-top: 20px;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey}80;
`;

const List = styled__default.ol`
    list-style: none;
    padding-left: 0px;
    margin-top: 0;
    display: none;
    margin-bottom: 20px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: block;
    }
`;

const Crumb = styled__default.li`
    display: inline;
    margin-right: 10px;
    &:last-of-type svg {
        display: none;
    }
`;
const IconWrapper$1 = styled__default.div`
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
`;
const MobileCrumb = styled__default.div`
    display: block;
    padding: 15px 0;
    margin-top: -15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: none;
    }
`;
const BackIconWrapper = styled__default.div`
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
`;
const BreadcrumbLink = styled__default.a`
    ${props => props.theme.linkStyles}
    font-weight: 400;

    svg {
        fill: ${props => props.theme.theme_vars.colours.action};
    }

    &:hover{
        ${props => props.theme.linkStylesHover}
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
        svg {
            fill: ${props => props.theme.theme_vars.colours.black};
        }
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`;

const StyledSVG = styled__default.svg`
    -webkit-transition: transform 0.2s ease-in-out;
    -moz-transition: transform 0.2s ease-in-out;
    -o-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    &.icon-direction-down {
        transform: rotate(90deg);
    }
    &.icon-direction-up {
        transform: rotate(-90deg);
    }
    &.icon-direction-left {
        transform: rotate(180deg);
    }
`;

var ChevronIcon = function (_a) {
    var _b = _a.colourFill, colourFill = _b === void 0 ? "" : _b, _c = _a.direction, direction = _c === void 0 ? "right" : _c;
    return (React__default.createElement(StyledSVG, { width: "7", height: "13", viewBox: "0 0 7 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "icon-direction-" + direction },
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.265759 10.6362C-0.0886068 10.9905 -0.0886069 11.5651 0.265758 11.9194C0.620124 12.2738 1.19466 12.2738 1.54903 11.9194L6.73423 6.73424C7.08859 6.37988 7.08859 5.80534 6.73423 5.45097L1.54903 0.265774C1.19466 -0.0885916 0.620124 -0.0885917 0.265759 0.265774C-0.0886064 0.620139 -0.0886064 1.19468 0.265759 1.54904L4.8118 6.09509L0.265759 10.6362Z", fill: colourFill })));
};

var Breadcrumbs = function (_a) {
    var breadcrumbsArray = _a.breadcrumbsArray;
    return (React__default.createElement(Container$9, null,
        React__default.createElement(List, null, breadcrumbsArray.map(function (crumb) {
            return React__default.createElement(Crumb, { key: crumb.title }, React__default.createElement(React__default.Fragment, null,
                React__default.createElement(BreadcrumbLink, { href: crumb.url, title: crumb.title }, crumb.title),
                React__default.createElement(IconWrapper$1, null,
                    React__default.createElement(ChevronIcon, { direction: "right", colourFill: "#C6C6C6" }))));
        })),
        React__default.createElement(MobileCrumb, null,
            React__default.createElement(BreadcrumbLink, { href: breadcrumbsArray[breadcrumbsArray.length - 1].url, title: "Go back to previous page" },
                React__default.createElement(BackIconWrapper, null,
                    React__default.createElement(ChevronIcon, { direction: "left" })),
                "Back"))));
};

const Container$a = styled__default.div`
  ${props => props.theme.fontStyles}
  background-color: ${props => props.theme.theme_vars.colours.grey_light};
  padding: ${props => props.theme.theme_vars.spacingSizes.medium} 0;
  padding-bottom: 25px;
  width: 100%;
  display: block;
  box-sizing: border-box;
`;

const CookieHide = styled__default.button`
    border: 0;
    background: transparent;

  ${props => props.theme.fontStyles}
    ${props => props.theme.linkStyles}
      &:hover{
          ${props => props.theme.linkStylesHover}
      }
      &:focus{
          ${props => props.theme.linkStylesFocus}
      }
      &:active{
          ${props => props.theme.linkStylesActive}
      }
`;

const CookieMessage = styled__default.div`
    display: ${props => props.isInline ? 'grid' : 'block'};
    grid-template-columns: 1fr auto;
    align-items: baseline;
    margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.theme_vars.breakpoints.l};
    }
`;

const CookieHeading = styled__default.p`
  ${props => props.theme.theme_vars.h3}

`;

const CookieParagraph = styled__default.div`
    margin: ${props => props.theme.theme_vars.spacingSizes.medium} 0;

     a {
        ${props => props.theme.linkStyles}
        &:hover{
            ${props => props.theme.linkStylesHover}
        }
        &:focus{
            ${props => props.theme.linkStylesFocus}
        }
        &:active{
            ${props => props.theme.linkStylesActive}
        }
    }
`;
const ButtonsContainer = styled__default.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: left;

  .button--primary {
    margin-right: 10px;
    line-height: 1.3;
    width: 50%;

    &:last-of-type {
      margin-right: 0;
      line-height: 36px;
    }
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: block;

    .button--primary {
      width: auto;
      &:last-of-type {
        line-height: 1.3;

      }
    }
  }
`;

const StyledButton$1 = styled__default.button`
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
    border-radius: ${props => props.theme.theme_vars.border_radius};
    text-decoration: none;

    &.button--primary {
        color: white;
        background-color: ${props => props.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${props => props.theme.theme_vars.colours.action_dark};
        }
        &:focus {
            outline: none;
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
        &:active {
            transform: translateY(2px);
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
    }
    &.button--secondary {
        color: ${props => props.theme.theme_vars.colours.action};
        background-color: transparent;
        border: 2px solid ${props => props.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${props => props.theme.theme_vars.colours.action}1A;
        }
        &:focus {
            outline: none;
            border: 2px solid ${props => props.theme.theme_vars.colours.focus};
            background-color: ${props => props.theme.theme_vars.colours.action}1A;
        }
    }
    &.button--small {
        font-size: 12px;
        padding: 10px 16px;
    }
    &.button--medium {
        font-size: 14px;
        padding: 11px 20px;
    }
    &.button--large {
        font-size: 16px;
        padding: 12px 24px;
    }
`;

/**
 * Primary UI component for user interaction
 */
var FormButton = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? true : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, text = _a.text, _d = _a.type, _e = _a.isDisabled, props = __rest(_a, ["primary", "size", "text", "type", "isDisabled"]);
    var mode = primary ? 'button--primary' : 'button--secondary';
    return (React__default.createElement(StyledButton$1, __assign({ className: ["button--" + size, mode].join(' ') }, props), text));
};

const cookieName = "fn-cookie";

const getCookie = (name) => {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }

    return decodeURI(dc.substring(begin + prefix.length, end));
};

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
});

var utc = createCommonjsModule(function (module, exports) {
!function(t,i){module.exports=i();}(commonjsGlobal,function(){return function(t,i,e){var s=i.prototype;e.utc=function(t){return new i({date:t,utc:!0,args:arguments})},s.utc=function(t){var i=e(this.toDate(),{locale:this.$L,utc:!0});return t?i.add(this.utcOffset(),"minute"):i},s.local=function(){return e(this.toDate(),{locale:this.$L,utc:!1})};var f=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),f.call(this,t);};var n=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds();}else n.call(this);};var u=s.utcOffset;s.utcOffset=function(t,i){var e=this.$utils().u;if(e(t))return this.$u?0:e(this.$offset)?u.call(this):this.$offset;var s=Math.abs(t)<=16?60*t:t,f=this;if(i)return f.$offset=s,f.$u=0===t,f;if(0!==t){var n=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(f=this.local().add(s+n,"minute")).$offset=s,f.$x.$localOffset=n;}else f=this.utc();return f};var o=s.format;s.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return o.call(this,i)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return !!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var r=s.toDate;s.toDate=function(t){return "s"===t&&this.$offset?e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():r.call(this)};var a=s.diff;s.diff=function(t,i,s){if(t&&this.$u===t.$u)return a.call(this,t,i,s);var f=this.local(),n=e(t).local();return a.call(f,n,i,s)};}});
});

var CookieBanner = function (_a) {
    var title = _a.title, paragraph = _a.paragraph, acceptButtonText = _a.acceptButtonText, _b = _a.acceptConfirmationText, acceptConfirmationText = _b === void 0 ? "You've accepted all cookies." : _b, rejectButtonText = _a.rejectButtonText, _c = _a.rejectConfirmationText, rejectConfirmationText = _c === void 0 ? "You've rejected all cookies." : _c, acceptCallback = _a.acceptCallback;
    dayjs_min.extend(utc);
    // on page load - look for a cookie
    React.useEffect(function () {
        checkCookie();
    });
    var _d = React.useState(false), showCookieBanner = _d[0], setShowCookieBanner = _d[1];
    var _e = React.useState(false), showCookiesRejectedBanner = _e[0], setShowCookiesRejectedBanner = _e[1];
    var _f = React.useState(false), showCookiesAcceptedBanner = _f[0], setShowCookiesAcceptedBanner = _f[1];
    var checkCookie = function () {
        // on every page load run this.
        var myCookie = getCookie(cookieName);
        if (myCookie == null) {
            // no cookie - show banner
            setShowCookieBanner(true);
        }
        else {
            // we have cookie		
            var cookiesAccepted = myCookie.includes('"cookiesAccepted":true');
            var bannerDismissed = myCookie.includes('"bannerDismissed":true');
            var cookiesAcceptedConfirmationBanner = myCookie.includes('"cookiesAcceptedConfirmationBanner":true');
            // banner already dismissed - hide the banner
            if (!bannerDismissed) {
                setShowCookieBanner(false);
            }
            // if we have accepted the cookies the page reloads, so we check acceptedConfirmationBannerDismissed
            if (cookiesAccepted && !cookiesAcceptedConfirmationBanner) {
                // if 1 minute has passed from setting of the cookie then dont show it on page reload
                var cookieVals = JSON.parse(myCookie);
                // subtracting a year because I'm a plum and didn't notice a bug below - but its safer to minus a year than to fix it!
                var cookieWasActuallyCreated = dayjs_min(cookieVals.cookieCreated).utc().subtract(1, 'year');
                var currentDateTime = dayjs_min().utc();
                var timeBetweenNowAndCreated = currentDateTime.diff(cookieWasActuallyCreated, 'milliseconds');
                if (timeBetweenNowAndCreated <= 60000) {
                    setShowCookiesAcceptedBanner(true);
                }
                else {
                    hideCookiesAcceptedConfirmationBanner();
                }
            }
            if (cookiesAccepted) {
                // we've accepted cookies so load all the things
                acceptCallback();
            }
        }
    };
    var toggleCookie = function (accepted) {
        var cookie = {};
        var date = new Date();
        // Cookie is valid 1 year
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        if (accepted === true) {
            // NB cookie created is actually cookie expiry - safer to minus a year from the value in calculations than change it.
            cookie = {
                "bannerDismissed": true,
                "cookiesAccepted": true,
                "cookiesAcceptedConfirmationBanner": false,
                "cookieCreated": date.toUTCString()
            };
            document.cookie = cookieName + "=" + JSON.stringify(cookie) + ";expires=" + date.toUTCString() + ";path=/";
            location.reload(); // reload to load the cookiesss
        }
        else {
            cookie = {
                "bannerDismissed": true,
                "cookiesAccepted": false,
                "cookiesAcceptedConfirmationBanner": false,
                "cookieCreated": date.toUTCString()
            };
            document.cookie = cookieName + "=" + JSON.stringify(cookie) + ";expires=" + date.toUTCString() + ";path=/";
            setShowCookieBanner(false);
            setShowCookiesRejectedBanner(true);
        }
    };
    // on reject
    var rejectCookies = function (e) {
        toggleCookie(false);
    };
    // on accept
    var acceptCookies = function (e) {
        toggleCookie(true);
    };
    var hideCookiesAcceptedConfirmationBanner = function () {
        setShowCookiesAcceptedBanner(false);
        var myCookie = getCookie(cookieName);
        var cookieVals = JSON.parse(myCookie);
        cookieVals.cookiesAcceptedConfirmationBanner = true;
        document.cookie = cookieName + "=" + JSON.stringify(cookieVals) + ";expires=" + cookieVals.cookieCreated + ";path=/";
    };
    var hideCookiesConfirmationBanner = function (e) {
        setShowCookiesRejectedBanner(false);
        hideCookiesAcceptedConfirmationBanner();
    };
    return (React__default.createElement(React__default.Fragment, null,
        showCookieBanner &&
            React__default.createElement(Container$a, { "data-testid": "CookieBanner" },
                React__default.createElement(CookieMessage, null,
                    React__default.createElement(CookieHeading, null, title),
                    React__default.createElement(CookieParagraph, null, paragraph),
                    React__default.createElement(ButtonsContainer, null,
                        React__default.createElement(FormButton, { primary: true, text: acceptButtonText, isDisabled: true, onClick: acceptCookies }),
                        React__default.createElement(FormButton, { primary: true, text: rejectButtonText, isDisabled: true, onClick: rejectCookies })))),
        showCookiesRejectedBanner &&
            React__default.createElement(Container$a, { "data-testid": "CookieBannerRejected", id: "CookieBannerRejected" },
                React__default.createElement(CookieMessage, { isInline: true },
                    React__default.createElement(CookieParagraph, null, rejectConfirmationText),
                    React__default.createElement(CookieHide, { onClick: hideCookiesConfirmationBanner, "aria-controls": "CookieBannerRejected", "aria-hidden": "false" }, "Hide"))),
        showCookiesAcceptedBanner &&
            React__default.createElement(Container$a, { "data-testid": "CookieBannerAccepted", id: "CookieBannerAccepted" },
                React__default.createElement(CookieMessage, { isInline: true },
                    React__default.createElement(CookieParagraph, null, acceptConfirmationText),
                    React__default.createElement(CookieHide, { onClick: hideCookiesConfirmationBanner, "aria-controls": "CookieBannerAccepted", "aria-hidden": "false" }, "Hide")))));
};

const Container$b = styled__default.footer`
  background-color: ${props => props.theme.theme_vars.colours.black};
  padding: 25px 0;
`;
const StyledMaxWidthContainer = styled__default(MaxWidthContainer)`
  color: ${props => props.theme.theme_vars.colours.white};
`;
const FooterList = styled__default.ul`
  padding: 0px;
  margin-bottom: 25px;
  list-style-type: none;

  li:last-of-type {
      margin-bottom: 0;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    margin-bottom: 0px;
  }
`;
const FooterListItem = styled__default.li`
  display: inline-block;
  margin-right: 25px;
  margin-bottom: 15px;
`;
const SocialLinks = styled__default.div`
  margin-bottom: 15px;
  margin-top: 5px;
`;
const SocialLinkSingle = styled__default.a`
  display: inline-block;
  margin-right: 15px;
  height: 36px;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;

    svg {
      path {
        fill: ${props => props.theme.theme_vars.colours.focus} !important;
      }
    }
  }
  &:active{
    opacity: 1;

    svg {
      path {
        fill: ${props => props.theme.theme_vars.colours.focus} !important;
      }
    }
  }
`;
const FooterLink = styled__default.a`
  ${props => props.theme.linkStyles}
  color: ${props => props.theme.theme_vars.colours.white};
  font-weight: 400;

  &:hover{
      ${props => props.theme.linkStylesHover}
      color: ${props => props.theme.theme_vars.colours.white};
      opacity: 0.8;
    }
  &:focus{
      ${props => props.theme.linkStylesFocus}
      box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
      -webkit-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
      -moz-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
  }
  &:active{
    ${props => props.theme.linkStylesActive}
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
  }
`;
const FooterCopy = styled__default.p`
  
`;
const FooterAlignment = styled__default.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const LogoWhite = styled__default.div`
  svg {
    width: 240px;
    height: auto;
    vertical-align: middle;
  }
`;

var GDSLogo = function () {
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "974", height: "327", fill: "none", viewBox: "0 0 974 327" },
        React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M53.724 121.514c7.806 3.216 16.672-.461 19.847-8.184 3.2-7.698-.46-16.647-8.266-19.846-7.657-3.15-16.557.6-19.74 8.331-3.183 7.691.502 16.557 8.16 19.699M19.373 141.654c7.814 3.225 16.664-.46 19.847-8.183 3.2-7.699-.46-16.647-8.274-19.855-7.65-3.142-16.549.617-19.732 8.348-3.183 7.682.502 16.549 8.16 19.69M29.16 171.696c3.199-7.698-.461-16.647-8.267-19.855-7.657-3.142-16.556.609-19.748 8.34-3.183 7.691.502 16.557 8.16 19.691 7.813 3.224 16.671-.461 19.854-8.176M92.109 133.624c7.805 3.216 16.671-.461 19.846-8.184 3.2-7.698-.46-16.647-8.266-19.855-7.657-3.141-16.556.609-19.74 8.349-3.182 7.682.502 16.548 8.16 19.69M231.092 121.514c7.658-3.142 11.342-12.008 8.151-19.699-3.183-7.73-12.074-11.481-19.74-8.331-7.805 3.2-11.457 12.148-8.266 19.846 3.183 7.723 12.042 11.4 19.855 8.184M265.466 141.654c7.658-3.141 11.342-12.008 8.159-19.69-3.183-7.731-12.082-11.49-19.739-8.348-7.806 3.208-11.466 12.156-8.266 19.855 3.174 7.723 12.041 11.408 19.846 8.183M283.666 160.181c-3.183-7.731-12.082-11.482-19.739-8.34-7.806 3.208-11.466 12.157-8.266 19.855 3.174 7.715 12.041 11.4 19.846 8.176 7.666-3.126 11.351-12 8.159-19.691M192.734 133.624c7.658-3.142 11.343-12.008 8.151-19.69-3.174-7.74-12.074-11.49-19.731-8.349-7.806 3.208-11.466 12.157-8.274 19.855 3.183 7.723 12.041 11.4 19.854 8.184M134.335 94.443a10 10 0 001.982 1.966l-11.021 33.245c-.008.041-.025.082-.033.123l-.016.033.008.008a17.553 17.553 0 00-.798 5.248c0 8.99 6.646 16.417 15.282 17.691.123.017.255.042.386.058.741.099 1.481.156 2.246.156.765 0 1.513-.057 2.245-.156.132-.016.263-.041.387-.058 8.636-1.274 15.282-8.701 15.282-17.691 0-1.826-.28-3.595-.79-5.248v-.008l-.008-.033c-.008-.041-.025-.082-.041-.123l-11.022-33.245a10.236 10.236 0 001.991-1.966l.041-.041 19.189 10.075V76.192l-19.164 6.07-.058-.058a10.3 10.3 0 00-1.859-1.875l-.057-.057L156.222 56l-13.851.008L128.52 56l7.715 24.272-.057.057c-.7.543-1.325 1.176-1.859 1.876l-.058.057-19.164-6.07v28.285l19.197-10.075.041.041zM253.762 206.105c-3.405-3.323-6.63-9.45-9.146-18.802l-10.002 33.303c6.087-4.187 10.775-6.893 16.146-7.016-9.517 20.496-21.41 25.777-29.116 24.354-9.41-1.728-13.736-10.117-12.272-17.231 2.163-10.084 12.51-12.708 17.338-.979 9.253-18.852-6.432-24.732-16.524-19.148 15.496-15.463 17.273-29.206 4.762-45.837-17.436 13.324-17.634 26.525-9.795 45.089-10.183-11.655-26.016-5.396-20.291 13.431 7.336-11.367 17.058-4.219 15.528 6.58-1.291 9.401-13.702 17.001-29.173 15.652-22.158-2.007-23.474-17.305-24.033-29.963 5.445-1.012 15.257 4.046 23.622 15.791l3.084-35.325c-9.097 9.483-17.371 11.284-26.558 11.58 3.059-9.541 17.116-25.176 17.116-25.176H120.354s14.057 15.635 17.116 25.176c-9.187-.296-17.461-2.097-26.558-11.58l3.076 35.325c8.373-11.745 18.177-16.795 23.63-15.791-.551 12.658-1.867 27.956-24.033 29.963-15.47 1.349-27.89-6.251-29.173-15.652-1.53-10.799 8.191-17.947 15.536-6.58 5.717-18.827-10.124-25.086-20.299-13.431 7.839-18.564 7.633-31.765-9.796-45.089-12.51 16.631-10.733 30.374 4.763 45.837-10.092-5.584-25.769.296-16.532 19.148 4.836-11.729 15.191-9.105 17.346.979 1.456 7.114-2.87 15.512-12.272 17.231-7.706 1.423-19.591-3.858-29.116-24.354 5.371.123 10.06 2.829 16.146 7.016l-10.002-33.303c-2.517 9.352-5.74 15.479-9.146 18.802-2.303-6.736-1.974-11.613.074-22.1l-20.628 7.353c10.956 14.961 21.574 35.967 30.293 72.634 30.711-4.392 65.173-6.86 101.601-6.86S213.295 259.6 244.023 264c8.719-36.675 19.329-57.681 30.293-72.642l-20.637-7.353c2.057 10.487 2.377 15.364.083 22.1", clipRule: "evenodd" }),
        React__default.createElement("path", { fill: "#fff", d: "M373.245 176.772c0 5.118.639 10.041 1.919 14.77 1.279 4.728 3.226 8.9 5.841 12.516 2.615 3.616 5.952 6.537 10.013 8.762 4.061 2.169 8.901 3.254 14.52 3.254 5.396 0 9.874-.862 13.434-2.587 3.616-1.724 6.481-3.866 8.595-6.425 2.169-2.614 3.671-5.424 4.506-8.428.89-3.004 1.335-5.785 1.335-8.344v-1.168h-30.624v-18.441h54.155v65.587h-21.195v-14.019c-1.502 2.336-3.365 4.478-5.59 6.425-2.226 1.892-4.729 3.533-7.51 4.923-2.782 1.335-5.842 2.392-9.179 3.171-3.282.779-6.787 1.168-10.514 1.168-8.734 0-16.494-1.585-23.281-4.756-6.787-3.171-12.517-7.538-17.19-13.101-4.617-5.563-8.149-12.071-10.597-19.525-2.392-7.455-3.588-15.493-3.588-24.116 0-8.567 1.335-16.577 4.005-24.032 2.726-7.51 6.564-14.018 11.516-19.526 5.006-5.563 11.014-9.929 18.023-13.1 7.065-3.227 14.965-4.84 23.699-4.84 5.674 0 11.042.667 16.104 2.003 5.118 1.279 9.763 3.143 13.935 5.59 4.228 2.392 7.955 5.313 11.182 8.762a44.05 44.05 0 017.844 11.348l-21.195 11.933a40.456 40.456 0 00-4.506-7.093 26.427 26.427 0 00-6.008-5.674c-2.225-1.613-4.784-2.865-7.677-3.755-2.893-.946-6.119-1.419-9.679-1.419-5.619 0-10.459 1.113-14.52 3.338-4.061 2.17-7.398 5.062-10.013 8.678-2.615 3.616-4.562 7.816-5.841 12.6-1.28 4.729-1.919 9.624-1.919 14.687v.834zM529.368 114.94c8.901 0 16.884 1.613 23.949 4.84 7.065 3.171 13.045 7.537 17.94 13.1 4.951 5.508 8.706 12.016 11.265 19.526 2.615 7.455 3.922 15.465 3.922 24.032 0 8.623-1.307 16.661-3.922 24.116-2.559 7.454-6.314 13.962-11.265 19.525-4.895 5.563-10.875 9.93-17.94 13.101-7.065 3.171-15.048 4.756-23.949 4.756-8.956 0-16.967-1.585-24.031-4.756-7.01-3.171-12.99-7.538-17.941-13.101-4.895-5.563-8.65-12.071-11.265-19.525-2.559-7.455-3.838-15.493-3.838-24.116 0-8.567 1.279-16.577 3.838-24.032 2.615-7.51 6.37-14.018 11.265-19.526 4.951-5.563 10.931-9.929 17.941-13.1 7.064-3.227 15.075-4.84 24.031-4.84zm0 101.134c5.23 0 9.819-.973 13.769-2.92 4.005-2.003 7.371-4.757 10.096-8.261 2.726-3.505 4.785-7.649 6.175-12.434 1.391-4.784 2.086-10.013 2.086-15.687v-.668c0-5.618-.695-10.819-2.086-15.604-1.39-4.839-3.449-9.012-6.175-12.516a28.285 28.285 0 00-10.096-8.178c-3.95-2.002-8.539-3.004-13.769-3.004-5.229 0-9.846 1.002-13.851 3.004a28.288 28.288 0 00-10.097 8.178c-2.67 3.504-4.701 7.677-6.091 12.516-1.391 4.785-2.087 9.986-2.087 15.604v.668c0 5.674.696 10.903 2.087 15.687 1.39 4.785 3.421 8.929 6.091 12.434 2.726 3.504 6.091 6.258 10.097 8.261 4.005 1.947 8.622 2.92 13.851 2.92zM629.501 236.268l-33.795-119.659h27.12l23.114 89.952h.834l22.614-89.952h26.785l-33.795 119.659h-32.877zM699.594 222.75c0-2.059.39-3.978 1.168-5.758.835-1.836 1.947-3.421 3.338-4.756a15.138 15.138 0 014.84-3.255 14.528 14.528 0 015.925-1.251c2.058 0 4.005.417 5.841 1.251a15.134 15.134 0 014.839 3.255 14.197 14.197 0 013.255 4.756c.834 1.78 1.251 3.699 1.251 5.758 0 2.114-.417 4.088-1.251 5.924a15.138 15.138 0 01-3.255 4.84 15.131 15.131 0 01-4.839 3.254 14.799 14.799 0 01-5.841 1.168c-2.059 0-4.034-.389-5.925-1.168a15.136 15.136 0 01-4.84-3.254 16.354 16.354 0 01-3.338-4.84c-.778-1.836-1.168-3.81-1.168-5.924zM798.142 216.074c3.504 0 6.759-.501 9.763-1.502 3.059-1.057 5.674-2.614 7.843-4.673 2.225-2.114 3.978-4.756 5.257-7.927 1.28-3.226 1.92-7.009 1.92-11.348v-74.182h23.864v77.77c0 6.675-1.223 12.711-3.671 18.107-2.392 5.396-5.758 9.986-10.097 13.768-4.283 3.783-9.401 6.704-15.353 8.762-5.953 2.058-12.461 3.087-19.526 3.087-7.065 0-13.574-1.029-19.526-3.087-5.953-2.058-11.098-4.979-15.437-8.762-4.34-3.782-7.733-8.372-10.181-13.768-2.392-5.396-3.588-11.432-3.588-18.107v-77.77h23.949v74.182c0 4.339.639 8.122 1.919 11.348 1.279 3.171 3.004 5.813 5.174 7.927 2.225 2.059 4.839 3.616 7.843 4.673 3.06 1.001 6.342 1.502 9.847 1.502zM870.488 116.609h24.198v51.819l42.724-51.819h29.789l-41.555 47.563 44.225 72.096h-28.12l-31.625-53.655-15.438 17.273v36.382h-24.198V116.609z" })));
};

var WestWhiteLogo = function () {
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "974", height: "327", fill: "none", viewBox: "0 0 974 327" },
        React__default.createElement("path", { fill: "#fff", d: "M104.502 216.15c.403.805.823 1.593 1.253 2.373 11.208-.578 21.322-6.331 27.495-15.543-.175-.333-.35-.666-.525-1.007-6.279-12.496-5.543-26.707.7-38.143a35.12 35.12 0 00-13.354-11.979c-4.422-2.268-9.133-3.556-14.036-3.827a72.937 72.937 0 00-5.569 12.671c-6.095 18.415-4.668 38.108 4.036 55.455zM234.361 150.958c-8.704-17.347-23.642-30.254-42.066-36.366-16.059-5.324-33.082-4.913-48.677 1.042 11.339 6.628 20.665 15.84 27.355 26.891 14.466.569 28.213 8.774 35.157 22.601 10.158 20.236 1.962 44.964-18.275 55.122a40.89 40.89 0 01-17.267 4.343c-6.883 11.13-16.305 20.228-27.531 26.655 1.156.446 2.329.867 3.511 1.261 18.424 6.103 38.118 4.676 55.456-4.028 17.346-8.704 30.253-23.643 36.365-42.066 6.112-18.415 4.676-38.109-4.028-55.455z" }),
        React__default.createElement("path", { fill: "#fff", d: "M166.385 146.054c-6.9-11.62-16.935-21.103-29.264-27.417-9.982-5.122-20.77-7.811-31.664-8.021-4.868 9.65-5.245 21.366-.148 31.629a40.795 40.795 0 0117.399 4.501 40.85 40.85 0 0116.252 15.07 35.4 35.4 0 0015.473-4.563c4.868-2.793 8.923-6.602 11.952-11.199zM138.828 204.959c-11.147 17.96-34.474 24.658-53.607 14.851-20.149-10.333-28.126-35.131-17.793-55.28.149-.289.297-.578.455-.867-6.226-11.576-9.396-24.273-9.37-37.119-7.898 6.323-14.439 14.3-19.194 23.564-8.853 17.268-10.464 36.953-4.51 55.42 5.946 18.468 18.73 33.52 35.999 42.382 17.268 8.853 36.952 10.464 55.42 4.509 18.467-5.945 33.52-18.73 42.381-35.998 3.555-6.935 5.946-14.264 7.146-21.742-11.331 6.453-24.046 9.982-36.927 10.28z" }),
        React__default.createElement("path", { fill: "#fff", d: "M157.278 162.236a40.768 40.768 0 01-19.325 5.359c-4.852 9.597-5.281 21.287-.158 31.628 12.198-.122 24.229-3.345 35.122-9.553s19.808-14.921 26.13-25.359c-6.042-9.334-16.095-15.245-27.294-15.989a40.828 40.828 0 01-14.475 13.914zM95.02 158.882a79.279 79.279 0 015.674-13.056c-10.377-19.509-3.398-43.94 15.928-54.947 19.317-11.007 43.879-4.57 55.385 14.291a78.519 78.519 0 0122.11 3.975 78.955 78.955 0 0114.711 6.603c-1.313-8.739-4.247-17.25-8.748-25.158-9.606-16.856-25.21-28.967-43.922-34.098-18.713-5.131-38.31-2.662-55.167 6.944-16.873 9.606-28.984 25.21-34.115 43.923-5.131 18.712-2.662 38.31 6.944 55.166 4.5 7.907 10.333 14.763 17.18 20.341a78.503 78.503 0 014.02-23.984zM369.195 76.43l-10.894 42.724h-11.838l-6.901-26.427-6.698 26.427h-11.848l-10.893-42.723h11.208l5.92 28.66 7.224-28.66h10.718l6.848 28.66 6.243-28.66h10.911zM390.543 120.012c-6.121 0-10.814-1.454-14.08-4.361s-4.895-7.049-4.895-12.425c0-5.263 1.523-9.457 4.562-12.592 3.047-3.135 7.303-4.703 12.767-4.703 4.965 0 8.704 1.332 11.208 3.985 2.505 2.662 3.757 6.462 3.757 11.418v3.617h-22.154c.096 1.488.411 2.74.954 3.747.543 1.007 1.253 1.804 2.137 2.4.867.595 1.874 1.016 3.03 1.278 1.156.254 2.417.385 3.783.385 1.173 0 2.329-.131 3.467-.385a16.208 16.208 0 003.117-1.016 19.443 19.443 0 002.295-1.173c.7-.42 1.278-.797 1.716-1.121h1.068v8.293c-.832.324-1.585.63-2.268.902-.683.28-1.62.56-2.819.849a29.815 29.815 0 01-3.398.674c-1.147.149-2.565.228-4.247.228zm3.354-21.112c-.061-2.12-.552-3.74-1.489-4.851-.937-1.112-2.364-1.664-4.29-1.664-1.962 0-3.503.587-4.606 1.751-1.104 1.165-1.716 2.759-1.83 4.764h12.215zM418.94 120.038c-2.39 0-4.65-.254-6.777-.77-2.128-.517-3.888-1.121-5.272-1.804v-8.494h.841c.481.368 1.033.762 1.646 1.208.613.438 1.471.902 2.574 1.375.946.438 2.006.815 3.197 1.13 1.182.315 2.469.473 3.852.473 1.428 0 2.68-.219 3.774-.657 1.086-.438 1.629-1.138 1.629-2.093 0-.744-.254-1.313-.753-1.69-.499-.385-1.471-.744-2.916-1.094a49.963 49.963 0 00-2.916-.613 25.87 25.87 0 01-3.117-.762c-2.539-.788-4.457-1.944-5.736-3.485-1.278-1.542-1.917-3.564-1.917-6.069 0-1.436.332-2.784.998-4.063.665-1.27 1.637-2.408 2.933-3.397 1.288-.972 2.881-1.752 4.781-2.32 1.901-.579 4.037-.859 6.428-.859 2.276 0 4.361.228 6.269.674 1.909.447 3.512.99 4.825 1.62v8.153h-.805c-.351-.272-.894-.63-1.647-1.077a22.4 22.4 0 00-2.197-1.165c-.85-.385-1.796-.7-2.846-.946a14.162 14.162 0 00-3.223-.376c-1.462 0-2.705.245-3.712.744-1.016.5-1.515 1.156-1.515 1.98 0 .726.254 1.304.753 1.724.499.42 1.585.832 3.266 1.235.867.21 1.865.42 2.995.613a23.84 23.84 0 013.248.814c2.33.744 4.098 1.839 5.298 3.284 1.2 1.445 1.804 3.362 1.804 5.753a9.24 9.24 0 01-1.068 4.317c-.71 1.366-1.725 2.522-3.03 3.459-1.384 1.015-3.021 1.795-4.895 2.355-1.9.552-4.151.823-6.769.823zM451.935 119.784c-4.124 0-7.119-.84-9.002-2.522-1.883-1.681-2.819-4.439-2.819-8.266V93.935h-3.871v-6.996h3.871v-9.212h10.113v9.212h9.738v6.996h-9.738v11.419c0 1.129.009 2.11.027 2.95.017.841.175 1.594.464 2.268.271.666.744 1.2 1.427 1.594.683.394 1.681.587 2.995.587.543 0 1.243-.114 2.128-.342.875-.227 1.488-.438 1.83-.63h.867v7.084c-1.095.289-2.26.508-3.494.674-1.235.166-2.741.245-4.536.245zM350.561 189.661h-10.403l-16.585-29.781v29.781h-9.877v-42.723h13.257l13.722 24.475v-24.475h9.877v42.723h.009zM389.851 173.567c0 5.298-1.462 9.474-4.378 12.522-2.916 3.047-7.04 4.579-12.382 4.579-5.298 0-9.413-1.523-12.347-4.579-2.933-3.048-4.404-7.224-4.404-12.522 0-5.359 1.471-9.554 4.404-12.583 2.934-3.03 7.049-4.545 12.347-4.545 5.315 0 9.44 1.524 12.364 4.58 2.934 3.047 4.396 7.233 4.396 12.548zm-10.368.052c0-1.909-.157-3.502-.473-4.781-.315-1.269-.753-2.294-1.313-3.056-.595-.805-1.27-1.366-2.023-1.681-.753-.315-1.611-.473-2.574-.473-.902 0-1.725.14-2.452.421-.736.28-1.41.805-2.023 1.593-.578.744-1.042 1.769-1.383 3.074-.351 1.304-.517 2.933-.517 4.903 0 1.971.166 3.564.49 4.781.324 1.218.753 2.19 1.27 2.916a4.868 4.868 0 002.023 1.638c.805.35 1.707.516 2.688.516.806 0 1.629-.175 2.469-.516.841-.342 1.507-.858 2.006-1.55.595-.823 1.051-1.813 1.357-2.969.298-1.164.455-2.767.455-4.816zM417.005 166.938h-.84c-.385-.131-.946-.236-1.673-.298a25.849 25.849 0 00-2.425-.096c-1.06 0-2.172.158-3.336.455a31.463 31.463 0 00-3.398 1.095v21.576h-10.114v-32.215h10.114v4.623c.464-.42 1.103-.954 1.918-1.593.814-.64 1.567-1.156 2.241-1.533.736-.438 1.585-.814 2.557-1.129.972-.316 1.892-.473 2.759-.473.324 0 .691.009 1.094.026.403.018.771.044 1.095.088v9.474h.008zM433.301 190.292c-4.124 0-7.119-.841-9.002-2.522-1.882-1.681-2.819-4.44-2.819-8.266v-15.061h-3.871v-6.997h3.871v-9.212h10.114v9.212h9.737v6.997h-9.737v11.418c0 1.13.008 2.11.026 2.951.017.841.175 1.594.464 2.268.271.665.744 1.2 1.427 1.594.683.394 1.681.586 2.995.586.543 0 1.243-.113 2.128-.341.875-.228 1.488-.438 1.83-.631h.867v7.084a28.856 28.856 0 01-3.494.675c-1.235.166-2.741.245-4.536.245zM475.858 189.661h-10.167v-15.98c0-1.305-.052-2.601-.157-3.888-.105-1.288-.307-2.242-.596-2.855-.35-.727-.849-1.252-1.506-1.567-.656-.316-1.532-.473-2.627-.473-.832 0-1.663.157-2.513.455-.849.307-1.751.797-2.714 1.462v22.837h-10.114v-44.64h10.114v15.98c1.655-1.392 3.266-2.486 4.842-3.275 1.567-.788 3.31-1.173 5.219-1.173 3.31 0 5.849 1.033 7.601 3.109 1.751 2.075 2.626 5.078 2.626 9.019v20.989h-.008zM501.217 186.246a382.24 382.24 0 01-1.865 1.55c-.552.455-1.287.92-2.207 1.375-.902.438-1.786.77-2.644 1.007-.858.228-2.058.341-3.599.341-2.872 0-5.254-.954-7.145-2.872-1.901-1.909-2.846-4.325-2.846-7.233 0-2.39.481-4.325 1.444-5.796.964-1.472 2.347-2.636 4.16-3.503 1.83-.876 4.019-1.489 6.558-1.839 2.54-.35 5.281-.613 8.205-.806v-.175c0-1.777-.656-3.003-1.979-3.686-1.322-.674-3.301-1.016-5.937-1.016-1.19 0-2.592.219-4.185.648a32.575 32.575 0 00-4.676 1.646h-.867v-7.776c.998-.288 2.618-.63 4.851-1.015a38.798 38.798 0 016.76-.587c5.587 0 9.65.919 12.207 2.767 2.548 1.848 3.826 4.659 3.826 8.45v21.918h-10.052v-3.398h-.009zm0-4.991v-6.716c-1.716.175-3.1.324-4.159.446a13.81 13.81 0 00-3.118.736c-.884.306-1.576.77-2.066 1.392-.491.622-.736 1.445-.736 2.478 0 1.515.412 2.548 1.226 3.109.815.56 2.023.849 3.625.849.885 0 1.795-.201 2.715-.604a8.409 8.409 0 002.513-1.69zM557.521 189.661v-16.094c0-1.585-.026-2.925-.087-4.019-.061-1.095-.228-1.979-.517-2.671-.289-.692-.735-1.191-1.339-1.506-.605-.316-1.463-.473-2.557-.473-.771 0-1.533.166-2.286.499-.753.333-1.567.806-2.452 1.418v22.837h-10.166v-16.094c0-1.567-.035-2.898-.105-4.002-.07-1.103-.245-1.996-.534-2.679-.289-.683-.736-1.191-1.34-1.506-.604-.316-1.445-.473-2.531-.473-.831 0-1.637.192-2.425.578-.788.385-1.559.832-2.312 1.348v22.837h-10.114v-32.215h10.114v3.555c1.655-1.392 3.214-2.487 4.676-3.275 1.462-.788 3.109-1.173 4.939-1.173 1.987 0 3.73.473 5.227 1.41 1.507.937 2.645 2.338 3.442 4.185 1.944-1.795 3.783-3.178 5.499-4.142 1.725-.963 3.467-1.444 5.245-1.444 1.506 0 2.855.236 4.046.718a7.8 7.8 0 013.029 2.154c.902 1.033 1.585 2.259 2.041 3.686.455 1.428.674 3.284.674 5.578v20.972h-10.167v-.009zM606.978 173.103c0 5.149-1.313 9.299-3.94 12.451-2.627 3.153-5.867 4.738-9.72 4.738-1.62 0-3.021-.184-4.221-.543-1.191-.359-2.469-.928-3.809-1.69v13.424h-10.114v-44.037h10.114v3.354c1.48-1.261 2.995-2.286 4.536-3.074 1.541-.788 3.319-1.173 5.341-1.173 3.757 0 6.664 1.48 8.722 4.448 2.066 2.96 3.091 6.997 3.091 12.102zm-10.341.201c0-3.135-.491-5.411-1.463-6.83-.972-1.419-2.487-2.119-4.553-2.119-.902 0-1.804.14-2.706.429-.893.289-1.778.718-2.644 1.287v16.209a7.356 7.356 0 001.777.49c.648.096 1.41.14 2.294.14 2.47 0 4.291-.797 5.491-2.399 1.208-1.585 1.804-3.993 1.804-7.207zM624.832 190.292c-4.124 0-7.119-.841-9.001-2.522-1.883-1.681-2.82-4.44-2.82-8.266v-15.061h-3.87v-6.997h3.87v-9.212h10.114v9.212h9.737v6.997h-9.737v11.418c0 1.13.009 2.11.026 2.951.018.841.175 1.594.464 2.268.272.665.744 1.2 1.427 1.594.684.394 1.682.586 2.995.586.543 0 1.244-.113 2.128-.341.876-.228 1.489-.438 1.83-.631h.867v7.084a28.856 28.856 0 01-3.494.675c-1.226.166-2.741.245-4.536.245zM668.142 173.567c0 5.298-1.462 9.474-4.378 12.522-2.916 3.047-7.04 4.579-12.382 4.579-5.298 0-9.413-1.523-12.347-4.579-2.933-3.048-4.404-7.224-4.404-12.522 0-5.359 1.471-9.554 4.404-12.583 2.934-3.03 7.049-4.545 12.347-4.545 5.315 0 9.44 1.524 12.364 4.58 2.934 3.047 4.396 7.233 4.396 12.548zm-10.376.052c0-1.909-.158-3.502-.473-4.781-.315-1.269-.753-2.294-1.314-3.056-.595-.805-1.269-1.366-2.022-1.681-.754-.315-1.612-.473-2.575-.473-.902 0-1.725.14-2.452.421-.735.28-1.41.805-2.022 1.593-.578.744-1.043 1.769-1.384 3.074-.35 1.304-.517 2.933-.517 4.903 0 1.971.167 3.564.491 4.781.324 1.218.753 2.19 1.269 2.916a4.874 4.874 0 002.023 1.638c.806.35 1.708.516 2.688.516.806 0 1.629-.175 2.47-.516.84-.342 1.506-.858 2.005-1.55.595-.823 1.051-1.813 1.357-2.969.307-1.164.456-2.767.456-4.816zM703.904 189.661h-10.167v-15.98c0-1.305-.052-2.601-.157-3.888-.105-1.287-.307-2.242-.596-2.855-.35-.727-.849-1.252-1.506-1.567-.657-.315-1.532-.473-2.627-.473-.832 0-1.664.158-2.513.455-.849.307-1.751.797-2.714 1.463v22.837H673.51v-32.216h10.114v3.556c1.655-1.393 3.266-2.487 4.842-3.275 1.567-.789 3.31-1.174 5.219-1.174 3.31 0 5.849 1.033 7.6 3.109 1.752 2.075 2.627 5.079 2.627 9.019v20.989h-.008zM721.268 190.546c-2.39 0-4.649-.254-6.777-.771-2.128-.516-3.888-1.121-5.272-1.804v-8.494h.841c.481.368 1.033.762 1.646 1.209.613.438 1.471.902 2.575 1.375.945.437 2.005.814 3.196 1.129 1.182.315 2.469.473 3.853.473 1.427 0 2.679-.219 3.774-.657 1.085-.437 1.628-1.138 1.628-2.092 0-.745-.254-1.314-.753-1.69-.499-.386-1.471-.745-2.916-1.095a50.81 50.81 0 00-2.916-.613 25.87 25.87 0 01-3.117-.762c-2.539-.788-4.457-1.944-5.735-3.485-1.279-1.541-1.918-3.564-1.918-6.068 0-1.436.333-2.785.998-4.063.666-1.27 1.638-2.408 2.934-3.398 1.287-.972 2.88-1.751 4.781-2.32 1.9-.578 4.036-.858 6.427-.858 2.277 0 4.361.227 6.27.674 1.908.446 3.511.989 4.824 1.62v8.152h-.805c-.35-.271-.893-.63-1.646-1.077a22.337 22.337 0 00-2.198-1.164 15.22 15.22 0 00-2.846-.946 14.174 14.174 0 00-3.223-.377c-1.462 0-2.705.245-3.712.745-1.016.499-1.515 1.155-1.515 1.979 0 .726.254 1.304.753 1.725.499.42 1.585.831 3.266 1.234.867.21 1.865.421 2.995.613a23.84 23.84 0 013.248.815c2.33.744 4.098 1.838 5.298 3.283 1.2 1.445 1.804 3.363 1.804 5.753a9.24 9.24 0 01-1.068 4.317c-.71 1.366-1.725 2.522-3.03 3.459-1.384 1.016-3.021 1.795-4.895 2.356-1.9.551-4.151.823-6.769.823zM772.231 189.661h-10.166v-15.98c0-1.305-.053-2.601-.158-3.888-.105-1.288-.306-2.242-.595-2.855-.35-.727-.849-1.252-1.506-1.567-.657-.316-1.533-.473-2.627-.473-.832 0-1.664.157-2.513.455-.85.307-1.752.797-2.715 1.462v22.837h-10.114v-44.64h10.114v15.98c1.655-1.392 3.266-2.486 4.843-3.275 1.567-.788 3.31-1.173 5.218-1.173 3.31 0 5.85 1.033 7.601 3.109 1.751 2.075 2.627 5.078 2.627 9.019v20.989h-.009zM790.112 152.849H779.42v-7.828h10.692v7.828zm-.289 36.812h-10.114v-32.215h10.114v32.215zM819.35 166.938h-.84c-.386-.131-.946-.236-1.673-.298a25.849 25.849 0 00-2.425-.096c-1.06 0-2.172.158-3.337.455a31.517 31.517 0 00-3.397 1.095v21.576h-10.114v-32.215h10.114v4.623a36.92 36.92 0 011.917-1.593c.815-.64 1.568-1.156 2.242-1.533.736-.438 1.585-.814 2.557-1.129.972-.316 1.891-.473 2.758-.473.324 0 .692.009 1.095.026.403.018.77.044 1.094.088v9.474h.009zM839.832 190.519c-6.121 0-10.815-1.453-14.081-4.36s-4.895-7.049-4.895-12.426c0-5.262 1.524-9.457 4.563-12.592 3.047-3.135 7.303-4.702 12.767-4.702 4.965 0 8.704 1.331 11.208 3.984 2.504 2.662 3.756 6.463 3.756 11.419v3.616h-22.154c.097 1.489.412 2.741.955 3.748.543 1.007 1.252 1.804 2.137 2.399.866.596 1.873 1.016 3.029 1.279 1.156.254 2.417.385 3.783.385 1.173 0 2.329-.131 3.468-.385a16.3 16.3 0 003.117-1.016 19.35 19.35 0 002.294-1.173 22.193 22.193 0 001.717-1.121h1.068v8.292c-.832.324-1.585.631-2.268.902-.683.28-1.62.561-2.82.85a30.017 30.017 0 01-3.397.674c-1.156.149-2.575.227-4.247.227zm3.345-21.112c-.061-2.119-.552-3.739-1.489-4.851s-2.364-1.663-4.291-1.663c-1.961 0-3.502.586-4.605 1.751-1.104 1.165-1.717 2.758-1.831 4.763h12.216zM332.251 261.001c-6.453 0-11.576-1.935-15.367-5.806-3.792-3.87-5.692-9.317-5.692-16.34 0-6.768 1.9-12.171 5.709-16.199 3.8-4.028 8.932-6.042 15.385-6.042 1.717 0 3.258.096 4.624.289 1.366.193 2.679.455 3.931.805.981.289 2.049.683 3.205 1.174 1.156.499 2.093.928 2.802 1.287v10.184h-1.094a65.233 65.233 0 00-1.962-1.646 24.291 24.291 0 00-2.688-1.883 18.247 18.247 0 00-3.31-1.567 11.12 11.12 0 00-3.765-.648c-1.559 0-2.995.245-4.291.735-1.305.491-2.539 1.331-3.713 2.54-1.077 1.094-1.961 2.565-2.644 4.422-.683 1.856-1.025 4.045-1.025 6.567 0 2.662.359 4.895 1.069 6.699.709 1.804 1.646 3.266 2.802 4.378 1.121 1.068 2.364 1.848 3.739 2.32 1.375.482 2.749.718 4.115.718 1.428 0 2.785-.236 4.072-.7 1.287-.464 2.382-.99 3.266-1.567.964-.596 1.813-1.2 2.54-1.804a79.34 79.34 0 001.909-1.638h.98v10.044c-.788.368-1.707.779-2.74 1.252a24.727 24.727 0 01-3.205 1.191 34.57 34.57 0 01-3.783.919c-1.173.211-2.811.316-4.869.316zM383.757 244.074c0 5.298-1.463 9.475-4.378 12.522-2.916 3.047-7.041 4.58-12.382 4.58-5.298 0-9.413-1.524-12.347-4.58-2.933-3.047-4.404-7.224-4.404-12.522 0-5.359 1.471-9.544 4.404-12.583 2.934-3.03 7.049-4.544 12.347-4.544 5.315 0 9.439 1.523 12.364 4.579 2.933 3.047 4.396 7.233 4.396 12.548zm-10.368.062c0-1.909-.158-3.503-.473-4.773-.315-1.269-.753-2.294-1.313-3.056-.596-.805-1.27-1.366-2.023-1.681-.753-.315-1.611-.473-2.574-.473-.902 0-1.725.14-2.452.412-.736.28-1.41.805-2.023 1.593-.578.745-1.042 1.769-1.384 3.074-.35 1.305-.516 2.933-.516 4.904 0 1.97.166 3.563.49 4.772.324 1.217.753 2.189 1.27 2.916a4.873 4.873 0 002.023 1.637c.805.342 1.707.517 2.688.517.806 0 1.629-.175 2.469-.517.841-.341 1.506-.858 2.006-1.55.595-.823 1.05-1.812 1.357-2.968.297-1.165.455-2.767.455-4.807zM419.264 260.169h-10.113v-3.555c-1.752 1.453-3.363 2.557-4.825 3.31-1.462.753-3.205 1.129-5.228 1.129-3.213 0-5.727-1.007-7.522-3.03-1.803-2.014-2.705-5.052-2.705-9.106v-20.972h10.166v15.98c0 1.664.044 3.021.131 4.072.088 1.051.298 1.944.622 2.671a3.26 3.26 0 001.427 1.524c.648.341 1.541.516 2.697.516.71 0 1.559-.175 2.531-.516a10.79 10.79 0 002.706-1.41v-22.837h10.113v32.224zM457.399 260.169h-10.166v-15.981a47.96 47.96 0 00-.158-3.888c-.105-1.287-.306-2.241-.595-2.854-.35-.727-.849-1.244-1.506-1.568-.657-.315-1.533-.473-2.627-.473-.832 0-1.664.149-2.513.456-.85.306-1.752.797-2.715 1.462v22.837h-10.114v-32.215h10.114v3.555c1.655-1.392 3.266-2.487 4.843-3.275 1.576-.788 3.309-1.173 5.218-1.173 3.31 0 5.85 1.042 7.601 3.117 1.751 2.075 2.627 5.079 2.627 9.019v20.981h-.009zM480.797 261.027c-2.68 0-5.132-.333-7.356-1.007-2.224-.666-4.159-1.699-5.796-3.1-1.62-1.392-2.881-3.152-3.783-5.263-.902-2.11-1.358-4.605-1.358-7.469 0-3.082.491-5.7 1.472-7.863.98-2.163 2.311-3.941 3.984-5.333 1.62-1.34 3.52-2.329 5.709-2.968a24.217 24.217 0 016.83-.964c1.795 0 3.581.211 5.377.613 1.795.412 3.59 1.069 5.402 1.962v8.608h-1.296a19.037 19.037 0 00-1.488-1.261 15.028 15.028 0 00-1.918-1.261 12.346 12.346 0 00-2.487-1.016c-.928-.28-1.952-.42-3.091-.42-2.583 0-4.579.893-5.998 2.679-1.419 1.786-2.128 4.194-2.128 7.215 0 3.232.753 5.64 2.268 7.233 1.515 1.594 3.52 2.382 6.025 2.382 1.269 0 2.39-.14 3.353-.429.964-.289 1.795-.63 2.487-1.033.674-.403 1.252-.815 1.734-1.252.482-.43.893-.815 1.243-1.165h1.296v8.608c-.578.245-1.243.534-2.005.858-.762.324-1.532.595-2.329.805-.981.272-1.9.473-2.758.613-.85.158-1.988.228-3.389.228zM506.479 223.356h-10.691v-7.828h10.691v7.828zm-.289 36.813h-10.113v-32.215h10.113v32.215zM524.045 260.169h-10.114v-44.641h10.114v44.641z" }),
        React__default.createElement("path", { fill: "#fff", d: "M262.505 208.68a18.812 18.812 0 00-3.135 7.61c-3.634 20.884-6.112 37.11-22.171 45.805-9.991 5.412-21.068 6.033-31.165 2.697-1.138 9.58-4.868 19.011-11.287 26.909-13.993 17.242-34.597 16.865-53.222 11.27a15.164 15.164 0 00-7.662-.298c-19.15 4.203-33.905 7.811-47.346-5.105-9.098-8.73-13.853-20.884-14.177-33.38-9.834 3.047-20.814 2.522-31.103-2.355-19.387-9.177-25.394-30.613-26.235-51.62-.114-2.811-.823-5.569-2.093-8.021-9.57-18.529-17.259-32.688-10.105-50.578 5.088-12.723 14.948-21.646 26.515-25.56-5.298-9.116-7.942-20.306-6.83-32.066 2.163-22.881 19.116-35.613 37.268-42.846 2.434-.972 4.623-2.548 6.392-4.606 13.336-15.534 23.397-27.802 41.243-25.814 11.743 1.313 21.874 7.846 28.818 17.381 6.322-8.108 15.192-14.15 25.665-16.584 20.674-4.808 37.032 8.826 48.94 25.376 1.594 2.215 3.652 4.002 5.999 5.201 17.688 9.02 31.523 15.666 35.271 34.746 2.688 13.695-.648 27.329-8.109 37.872 12.041 3.547 22.837 12.688 28.976 26.112 9.404 20.569 1.331 41.191-10.447 57.854zm-1.795-56.724c-5.578-12.198-15.394-20.508-26.339-23.73 6.786-9.589 9.816-21.971 7.373-34.422-3.407-17.347-15.981-23.389-32.058-31.585-2.128-1.086-4.002-2.706-5.447-4.729-10.831-15.043-25.691-27.443-44.492-23.073-9.518 2.215-17.583 7.706-23.327 15.079-6.313-8.66-15.525-14.606-26.191-15.797-16.217-1.813-25.376 9.343-37.495 23.459a14.95 14.95 0 01-5.814 4.185c-16.498 6.576-31.91 18.144-33.87 38.949-1.008 10.692 1.392 20.867 6.208 29.151-10.508 3.555-19.475 11.672-24.098 23.24-6.506 16.269.49 29.132 9.185 45.98 1.156 2.233 1.804 4.737 1.91 7.294.761 19.089 6.216 38.581 23.843 46.926 9.352 4.431 19.335 4.913 28.275 2.137.298 11.366 4.624 22.408 12.89 30.341 12.224 11.743 25.63 8.459 43.038 4.641a13.8 13.8 0 016.961.272c16.936 5.087 35.657 5.429 48.38-10.245 5.832-7.181 9.23-15.753 10.263-24.457 9.177 3.038 19.247 2.469 28.327-2.452 14.597-7.907 16.857-22.653 20.149-41.637a17.075 17.075 0 012.855-6.918c10.691-15.14 18.038-33.888 9.474-52.609z" })));
};

var NorthWhiteLogo = function () {
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "974", height: "327", fill: "none", viewBox: "0 0 974 327" },
        React__default.createElement("path", { fill: "#fff", d: "M64.23 117.143c3.531 0 7.038.121 10.544.291v-10.351c2.177-6.142 6.312-10.906 11.367-12.986 5.054 2.104 9.165 6.868 11.366 12.986v12.696c20.338 3.217 39.515 9.311 57.023 17.799V66.77h-.12c-.266-1.112-.944-2.2-1.959-3.192v4.087l-2.54-1.887v-4.11c-4.57-2.758-12.115-4.596-20.7-4.668v5.683h-3.555v-5.61c-7.303.362-13.688 1.983-17.823 4.352v4.934l-1.886 1.886v-5.562c-1.621 1.233-2.661 2.636-3.023 4.111h-.121v3.773h-2.854v5.949h-4.933v-5.95h-17.34v5.95h-4.933v-5.95h-3.24v-3.772h-.121c-.363-1.475-1.403-2.853-3.023-4.111v5.562l-1.886-1.886v-4.933c-4.16-2.37-10.52-4.015-17.823-4.353v5.61h-3.555V57c-8.585.072-16.13 1.91-20.701 4.667v4.111l-2.54 1.887v-4.087c-1.015.991-1.692 2.08-1.958 3.192h-.121v55.524a211.858 211.858 0 0146.456-5.151zM263.5 161.157c16.427 0 29.745-13.318 29.745-29.746 0-16.427-13.318-29.745-29.745-29.745-16.428 0-29.746 13.318-29.746 29.745 0 16.428 13.318 29.746 29.746 29.746z" }),
        React__default.createElement("path", { fill: "#fff", d: "M311.164 161.665c11.446 0 20.725-9.279 20.725-20.725 0-11.446-9.279-20.725-20.725-20.725-11.446 0-20.725 9.279-20.725 20.725 0 11.446 9.279 20.725 20.725 20.725zM209.765 73.88c1.475-1.62 2.951-3.216 4.426-4.837.121.073.266.145.387.242-.581.895-1.161 1.814-1.766 2.709.049.024.073.072.121.096l-.072-.145c.725-.508 1.475-.991 2.2-1.5.871-.604 1.717-1.232 2.588-1.861l-.048-.049c-.629 1.161-1.258 2.322-1.935 3.628 1.306-.943 2.563-1.862 3.821-2.781.121.12.242.266.363.387a659.476 659.476 0 00-2.757 3.482c1.306-.605 2.37-1.088 3.409-1.572-2.95 3.265-3.579 7.497-5.03 11.342-.798 2.104-1.209 4.377-1.862 6.554-1.04 3.385-2.128 6.771-3.361 10.689h13.712c.193.266.387.556.556.822-6.868 1.185-6.191 6.36-6.457 11.342-.653-.387-1.088-.581-1.451-.847-2.563-1.958-5.103-3.942-7.642-5.925-1.064-.822-1.717-.846-2.684.46-1.645 2.249-3.749 4.184-5.586 6.312-2.878 3.313-5.732 6.674-8.585 10.012-.702.822-1.427 1.668-2.032 2.539-1.04 1.475-1.983 3.023-3.216 4.885-.169-1.161-.315-2.104-.484-3.337-.604 1.136-1.137 2.079-1.669 3.047-.169-.049-.362-.097-.532-.146.121-1.281.242-2.539.387-4.086-.822 1.015-1.499 1.886-2.176 2.732-.145-.072-.314-.145-.46-.217.46-1.427.895-2.878 1.476-4.692-.871.677-1.451 1.137-2.032 1.596-.121-.072-.217-.145-.338-.193a736.794 736.794 0 002.37-4.643c-.653.241-1.016.362-1.379.507l-.048-.048c3.24-4.982 5.368-10.713 10.229-14.582 1.451-1.137 2.564-2.685 4.208-4.402-1.523-.822-2.684-1.45-3.869-2.08.58-1.668 1.91-2.563 3.869-2.514 2.177.072 3.289-1.113 3.821-3.072.363-1.306.943-2.563 1.137-3.87.919-6.843 5.659-11.776 8.536-17.629.194.073.363.145.556.242-.241.508-.483 1.04-.701 1.548.024.024.073.024.097.048l-.097-.193zM167.009 134.459c-.048.121-.121.217-.169.338a1.58 1.58 0 01-.194-.217c.121-.049.218-.121.339-.17-.024 0 .024.049.024.049zM202.631 82.634c.048-.072.072-.145.121-.218 0 .049.024.121 0 .121-.049.025-.097.049-.169.073l.048.024zM.41 242.992v22.684h341.781v-22.684c-113.903-17.145-227.83 17.17-341.78 0zM132.862 195.594c16.082-12.237 35.985-22.418 58.62-29.794-33.494-27.182-78.16-43.82-127.252-43.82-22.563 0-44.182 3.507-64.23 9.939v60.942c44.303 6.674 88.583 5.586 132.862 2.733z" }),
        React__default.createElement("path", { fill: "#fff", d: "M280.524 157.819c-53.783 0-101.98 14.292-135.063 36.952 65.585-4.595 131.17-11.753 196.754-1.886v-28.512c-19.249-4.232-40.023-6.554-61.691-6.554z" }),
        React__default.createElement("path", { fill: "#fff", d: "M342.215 236.608c-114.072-17.17-228.119 17.17-342.191 0v-37.339c114.072 17.17 228.119-17.17 342.191 0v37.339zM411.838 122.367l-21.063-36.59v36.59h-9.335v-50.35h10.64l20.846 36.662V72.018h9.335v50.349h-10.423zM449.999 123.262c-11.051 0-20.047-8.851-20.047-19.758 0-10.834 8.996-19.758 19.975-19.758 11.39 0 20.169 8.779 20.169 20.024 0 10.616-9.117 19.492-20.097 19.492zm0-31.22c-5.924 0-10.906 5.102-10.906 11.317 0 6.481 4.837 11.584 10.979 11.584 5.997 0 10.907-5.103 10.907-11.439 0-6.288-4.91-11.463-10.98-11.463zM484.968 101.376v20.991h-9.069v-37.75h8.319v3.676c2.395-3.483 4.305-4.57 8.174-4.57h.677v8.73c-5.465.144-8.101 3.07-8.101 8.923zM509.829 92.863v29.504h-9.069V92.863h-4.425v-8.246h4.425v-12.6h9.069v12.6h5.441v8.246h-5.441zM545.595 122.367v-19.274c0-7.908-2.055-11.052-7.352-11.052-5.175 0-7.98 2.854-7.98 11.173v19.153h-9.069v-50.35h9.069v15.188c2.733-2.443 5.731-3.555 9.601-3.555 9.068 0 14.8 4.981 14.8 17.387v21.33h-9.069zM411.838 195.376l-21.063-36.59v36.59h-9.335v-50.35h10.64l20.846 36.662v-36.662h9.335v50.35h-10.423zM449.999 196.271c-11.051 0-20.047-8.851-20.047-19.758 0-10.834 8.996-19.758 19.975-19.758 11.39 0 20.169 8.779 20.169 20.024 0 10.641-9.117 19.492-20.097 19.492zm0-31.221c-5.924 0-10.906 5.103-10.906 11.318 0 6.481 4.837 11.584 10.979 11.584 5.997 0 10.907-5.103 10.907-11.439 0-6.288-4.91-11.463-10.98-11.463zM484.968 174.385v20.991h-9.069v-37.75h8.319v3.676c2.395-3.483 4.305-4.571 8.174-4.571h.677v8.73c-5.465.145-8.101 3.071-8.101 8.924zM509.829 165.872v29.504h-9.069v-29.504h-4.425v-8.246h4.425v-12.6h9.069v12.6h5.441v8.246h-5.441zM545.595 195.376v-19.274c0-7.908-2.055-11.052-7.352-11.052-5.175 0-7.98 2.853-7.98 11.172v19.154h-9.069v-50.35h9.069v15.187c2.733-2.442 5.731-3.555 9.601-3.555 9.068 0 14.8 4.982 14.8 17.388v21.33h-9.069zM592.705 195.376v-4.909c-3.604 4.086-7.231 5.803-12.527 5.803-11.052 0-19.008-8.246-19.008-19.636 0-11.511 8.029-19.903 19.226-19.903 5.441 0 9.189 1.765 12.333 5.925v-5.054h8.319v37.75h-8.343v.024zm-11.391-30.326c-6.481 0-11.051 4.909-11.051 11.777 0 6.602 4.57 11.1 11.172 11.1 6.893 0 10.98-4.909 10.98-11.172 0-6.868-4.619-11.705-11.101-11.705zM655.992 195.376v-20.725c0-7.57-2.854-9.601-7.086-9.601-5.03 0-7.641 2.733-7.641 11.729v18.597h-9.069v-20.725c0-7.424-2.588-9.601-7.352-9.601-5.248 0-7.352 2.805-7.352 11.729v18.597h-9.068v-37.75h8.319v3.531c2.66-3.193 5.393-4.426 9.818-4.426 5.175 0 8.513 1.765 11.1 5.852 3.072-4.087 6.82-5.852 12.14-5.852 9.939 0 15.26 5.514 15.26 16.832v21.813h-9.069zM694.516 196.27c-4.643 0-8.174-1.354-11.584-4.425v16.154h-9.069v-50.373h8.319v4.425c2.926-3.409 7.304-5.32 12.406-5.32 10.907 0 18.815 8.247 18.815 19.637-.024 11.463-8.005 19.902-18.887 19.902zm-1.113-31.22c-6.263 0-11.051 4.909-11.051 11.39 0 6.602 4.764 11.511 11.172 11.511 5.998 0 10.689-4.981 10.689-11.39.049-6.529-4.667-11.511-10.81-11.511zM729.944 165.872v29.504h-9.069v-29.504h-4.425v-8.246h4.425v-12.6h9.069v12.6h5.441v8.246h-5.441zM758.359 196.271c-11.051 0-20.047-8.851-20.047-19.758 0-10.834 8.996-19.758 19.975-19.758 11.39 0 20.168 8.779 20.168 20.024 0 10.641-9.117 19.492-20.096 19.492zm0-31.221c-5.925 0-10.906 5.103-10.906 11.318 0 6.481 4.836 11.584 10.979 11.584 5.997 0 10.906-5.103 10.906-11.439 0-6.288-4.909-11.463-10.979-11.463zM808.708 195.376V176.9c0-10.085-2.733-11.85-7.231-11.85-2.854 0-5.248 1.233-6.675 3.482-1.16 1.838-1.499 4.015-1.499 9.069v17.775h-9.069v-37.75h8.392v3.603c3.337-3.192 6.336-4.498 10.64-4.498 5.248 0 9.335 1.911 11.778 5.441 2.055 2.926 2.732 6.191 2.732 12.938v20.242h-9.068v.024zM837.268 196.271c-7.497 0-12.89-4.087-13.833-12.89h9.141c.895 3.192 2.394 4.571 5.055 4.571 2.321 0 4.086-1.572 4.086-3.676 0-2.177-.338-2.805-6.408-4.837-7.497-2.515-10.495-5.659-10.495-11.172 0-6.482 5.513-11.512 12.551-11.512 6.408 0 12.067 4.232 12.406 11.318h-8.852c-.411-1.983-1.644-2.999-3.554-2.999-1.983 0-3.483 1.355-3.483 3.193 0 1.983.194 2.103 6.409 4.086 7.908 2.443 10.495 5.442 10.495 11.052-.024 7.207-5.949 12.866-13.518 12.866zM880.894 195.376v-19.274c0-7.908-2.056-11.052-7.352-11.052-5.175 0-7.98 2.853-7.98 11.172v19.154h-9.069v-50.35h9.069v15.187c2.733-2.442 5.731-3.555 9.601-3.555 9.068 0 14.8 4.982 14.8 17.388v21.33h-9.069zM898.065 195.376v-37.75h9.069v37.75h-9.069zm.049-43.191v-9.069h9.068v9.069h-9.068zM924.159 174.385v20.991h-9.069v-37.75h8.319v3.676c2.394-3.483 4.305-4.571 8.174-4.571h.677v8.73c-5.441.145-8.101 3.071-8.101 8.924zM973.637 180.527H944.4c1.088 4.571 5.054 7.424 10.423 7.424 3.748 0 5.997-1.015 8.319-3.748h9.89c-2.515 7.763-10.35 12.067-17.992 12.067-11.511 0-20.435-8.585-20.435-19.636 0-11.1 8.803-19.903 19.903-19.903 11.245 0 19.492 8.585 19.492 20.314-.024 1.378-.097 2.176-.363 3.482zm-19.032-15.477c-5.393 0-9.069 2.66-10.496 7.497h20.919c-1.137-4.837-4.813-7.497-10.423-7.497zM405.358 269.279c-14.728 0-26.505-11.729-26.505-26.238 0-14.244 11.656-25.9 25.9-25.9 10.351 0 19.419 5.586 23.845 15.332h-10.423c-3.41-4.426-7.352-6.336-13.228-6.336-9.601 0-16.687 7.496-16.687 16.976 0 9.407 7.642 17.17 16.904 17.17 4.837 0 8.392-1.644 12.479-5.925h10.979c-3.966 9.19-12.962 14.921-23.264 14.921zM452.732 269.279c-11.052 0-20.048-8.851-20.048-19.757 0-10.834 8.996-19.758 19.975-19.758 11.391 0 20.169 8.779 20.169 20.048 0 10.616-9.141 19.467-20.096 19.467zm0-31.196c-5.925 0-10.907 5.103-10.907 11.318 0 6.481 4.837 11.584 10.979 11.584 5.998 0 10.907-5.103 10.907-11.439-.024-6.288-4.933-11.463-10.979-11.463zM503.831 268.409v-3.603c-3.409 3.337-6.263 4.498-10.834 4.498-8.802 0-14.389-5.103-14.389-18.404v-20.241h9.069v18.476c0 10.012 2.781 11.85 7.158 11.85 3.072 0 5.514-1.306 6.892-3.483 1.016-1.693 1.427-4.014 1.427-9.068v-17.775h9.069v37.75h-8.392zM544.653 268.409v-18.476c0-10.085-2.733-11.85-7.231-11.85-2.854 0-5.248 1.233-6.675 3.482-1.161 1.838-1.499 4.015-1.499 9.069v17.775h-9.069v-37.774h8.392v3.603c3.337-3.192 6.336-4.498 10.64-4.498 5.248 0 9.335 1.91 11.778 5.441 2.055 2.926 2.732 6.191 2.732 12.938v20.241h-9.068v.049zM580.299 269.279c-11.173 0-20.169-8.802-20.169-19.757 0-11.1 8.73-19.758 19.903-19.758 8.585 0 16.081 4.837 19.008 13.494h-10.23c-1.838-3.482-4.691-5.175-8.803-5.175-6.263 0-10.761 4.764-10.761 11.39 0 6.602 4.691 11.512 10.979 11.512 3.748 0 6.336-1.5 8.585-4.982h10.23c-3.144 8.44-9.964 13.276-18.742 13.276zM606.054 268.409v-37.774h9.068v37.749h-9.068v.025zm.072-43.216v-9.068h9.069v9.068h-9.069zM623.079 268.409v-50.374h9.068v50.35h-9.068v.024z" })));
};

var ServiceIcon$D = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M32.1429 0H3.85714C2.83416 0 1.85309 0.406377 1.12973 1.12973C0.406376 1.85309 0 2.83416 0 3.85714L0 32.1429C0 33.1658 0.406376 34.1469 1.12973 34.8703C1.85309 35.5936 2.83416 36 3.85714 36H14.8862V23.7608H9.82366V18H14.8862V13.6093C14.8862 8.61509 17.8594 5.85643 22.4132 5.85643C24.5941 5.85643 26.8746 6.24536 26.8746 6.24536V11.1471H24.3619C21.8861 11.1471 21.1138 12.6836 21.1138 14.2594V18H26.6408L25.7569 23.7608H21.1138V36H32.1429C33.1658 36 34.1469 35.5936 34.8703 34.8703C35.5936 34.1469 36 33.1658 36 32.1429V3.85714C36 2.83416 35.5936 1.85309 34.8703 1.12973C34.1469 0.406377 33.1658 0 32.1429 0V0Z", fill: colourFill })));
};

var ServiceIcon$E = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M32.1429 0H3.85714C1.72768 0 0 1.72768 0 3.85714V32.1429C0 34.2723 1.72768 36 3.85714 36H32.1429C34.2723 36 36 34.2723 36 32.1429V3.85714C36 1.72768 34.2723 0 32.1429 0ZM28.2134 12.7607C28.2295 12.9857 28.2295 13.2188 28.2295 13.4438C28.2295 20.4107 22.9259 28.4384 13.2348 28.4384C10.2455 28.4384 7.47321 27.5705 5.14286 26.0759C5.56875 26.1241 5.97857 26.1402 6.4125 26.1402C8.87946 26.1402 11.1455 25.3045 12.9536 23.8902C10.6393 23.842 8.69464 22.3232 8.02768 20.2339C8.83929 20.3545 9.57054 20.3545 10.4062 20.1375C7.99554 19.6473 6.1875 17.5259 6.1875 14.9625V14.8982C6.88661 15.292 7.70625 15.533 8.56607 15.5652C7.8432 15.0843 7.25061 14.432 6.84118 13.6665C6.43175 12.9009 6.21822 12.0459 6.21964 11.1777C6.21964 10.1973 6.47679 9.29732 6.93482 8.51786C9.53036 11.7161 13.4277 13.8054 17.7991 14.0304C17.0518 10.4545 19.7277 7.55357 22.942 7.55357C24.4607 7.55357 25.8268 8.18839 26.7911 9.21696C27.9804 8.99196 29.1214 8.55 30.1339 7.94732C29.7402 9.16875 28.9125 10.1973 27.8196 10.8482C28.8804 10.7357 29.9089 10.4384 30.8571 10.0286C30.142 11.0813 29.242 12.0134 28.2134 12.7607Z", fill: colourFill })));
};

var ServiceIcon$F = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M33.4286 0H2.56339C1.14911 0 0 1.16518 0 2.59554V33.4045C0 34.8348 1.14911 36 2.56339 36H33.4286C34.8429 36 36 34.8348 36 33.4045V2.59554C36 1.16518 34.8429 0 33.4286 0ZM10.8804 30.8571H5.54464V13.6768H10.8884V30.8571H10.8804ZM8.2125 11.3304C6.50089 11.3304 5.11875 9.94018 5.11875 8.23661C5.11875 6.53304 6.50089 5.14286 8.2125 5.14286C9.91607 5.14286 11.3062 6.53304 11.3062 8.23661C11.3062 9.94821 9.92411 11.3304 8.2125 11.3304ZM30.8812 30.8571H25.5455V22.5C25.5455 20.5071 25.5054 17.9438 22.7732 17.9438C19.9929 17.9438 19.567 20.1134 19.567 22.3554V30.8571H14.2313V13.6768H19.35V16.0232H19.4223C20.1375 14.6732 21.8813 13.2509 24.4768 13.2509C29.8768 13.2509 30.8812 16.8107 30.8812 21.4393V30.8571Z", fill: colourFill })));
};

var ServiceIcon$G = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M15.0107 13.6688L22.6607 18.0161L15.0107 22.3634V13.6688ZM36 3.85714V32.1429C36 34.2723 34.2723 36 32.1429 36H3.85714C1.72768 36 0 34.2723 0 32.1429V3.85714C0 1.72768 1.72768 0 3.85714 0H32.1429C34.2723 0 36 1.72768 36 3.85714ZM32.625 18.0241C32.625 18.0241 32.625 13.2348 32.0143 10.9366C31.6768 9.66696 30.6884 8.67054 29.4268 8.33304C27.1527 7.71429 18 7.71429 18 7.71429C18 7.71429 8.84732 7.71429 6.57321 8.33304C5.31161 8.67054 4.32321 9.66696 3.98571 10.9366C3.375 13.2268 3.375 18.0241 3.375 18.0241C3.375 18.0241 3.375 22.8134 3.98571 25.1116C4.32321 26.3813 5.31161 27.3375 6.57321 27.675C8.84732 28.2857 18 28.2857 18 28.2857C18 28.2857 27.1527 28.2857 29.4268 27.667C30.6884 27.3295 31.6768 26.3732 32.0143 25.1036C32.625 22.8134 32.625 18.0241 32.625 18.0241Z", fill: colourFill })));
};

var Footer = function (_a) {
    var _b = _a.footerLinksArray, footerLinksArray = _b === void 0 ? null : _b, _c = _a.year, year = _c === void 0 ? "2021" : _c;
    var themeContext = React.useContext(styled.ThemeContext);
    return (React__default.createElement(Container$b, null,
        React__default.createElement(StyledMaxWidthContainer, { noBackground: true },
            React__default.createElement(FooterAlignment, null,
                React__default.createElement("div", null,
                    footerLinksArray &&
                        React__default.createElement(FooterList, null, footerLinksArray.map(function (link, i) {
                            return React__default.createElement(FooterListItem, { key: i },
                                React__default.createElement(FooterLink, { key: link.title, href: link.url, title: "Go to " + link.title }, link.title));
                        })),
                    React__default.createElement(SocialLinks, null,
                        themeContext.theme_vars.twitter_link &&
                            React__default.createElement(SocialLinkSingle, { href: themeContext.theme_vars.twitter_link, title: "View our Twitter page" },
                                React__default.createElement(ServiceIcon$E, { colourFill: themeContext.theme_vars.colours.white })),
                        themeContext.theme_vars.facebook_link &&
                            React__default.createElement(SocialLinkSingle, { href: themeContext.theme_vars.facebook_link, title: "View our Facebook page" },
                                React__default.createElement(ServiceIcon$D, { colourFill: themeContext.theme_vars.colours.white })),
                        themeContext.theme_vars.youtube_link &&
                            React__default.createElement(SocialLinkSingle, { href: themeContext.theme_vars.youtube_link, title: "View our YouTube page" },
                                React__default.createElement(ServiceIcon$G, { colourFill: themeContext.theme_vars.colours.white })),
                        themeContext.theme_vars.linkedin_link &&
                            React__default.createElement(SocialLinkSingle, { href: themeContext.theme_vars.linkedin_link, title: "View our LinkedIn page" },
                                React__default.createElement(ServiceIcon$F, { colourFill: themeContext.theme_vars.colours.white }))),
                    React__default.createElement(FooterCopy, null,
                        "\u00A9\u00A0",
                        themeContext.full_name,
                        " Council \u00A0",
                        year)),
                React__default.createElement(LogoWhite, { className: themeContext.theme_vars.theme_name === "Memorial theme North" || themeContext.theme_vars.theme_name === "Memorial theme West" ? "black_logo" : "" }, themeContext.cardinal_name === "north" ? React__default.createElement(NorthWhiteLogo, null) : (themeContext.cardinal_name === "west" ? React__default.createElement(WestWhiteLogo, null) : React__default.createElement(GDSLogo, null)))))));
};

const Container$c = styled__default.header`
    font-family: ${props => props.theme.theme_vars.fontstack};
    color: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white};
    background-color: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? props.theme.theme_vars.colours.white
                        : props.theme.name === "GDS theme" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.action};
    border-bottom: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? "5px solid "+(props.theme.name === "GDS theme" ? props.theme.theme_vars.colours.black 
                        : props.theme.theme_vars.colours.action) : "none"};
    padding: 3px 0;
`;

const StyledMaxWidthContainer$1 = styled__default(MaxWidthContainer)`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const LogoStyles = `
    svg {
        width: 240px;
        height: auto;
        vertical-align: middle;
    }
    &.black_logo {
        svg {
            fill: black !important;
            path {
                fill: black !important;
            }
        }
    }
`;
const LogoColoured = styled__default.div`
    ${LogoStyles}
`;
const LogoWhite$1 = styled__default.div`
    ${LogoStyles}
`;
const LogoWrapper = styled__default.div`
    display: inline-block;
    
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        flex-grow: 1;
        display: block;
    }
`;
const HomeLink = styled__default.a`
    display: inline-block;

    &:hover {
        opacity: 0.8;

        svg {
            opacity: 0.8;
        }
    }
    &:focus {
        outline: none;
        box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }
`;

const AllServicesLink = styled__default.a`
    ${props => props.theme.linkStyles};
    color: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.white};
    padding: 0 ${props => props.theme.theme_vars.spacingSizes.small};
    vertical-align: middle;
    margin-top: -10px;

    &:hover {
        ${props => props.theme.linkStylesHover};
        color: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? props.theme.theme_vars.colours.action_dark : props.theme.theme_vars.colours.white};
        opacity: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? "1" : "0.8"};
    }
    &:focus {
        ${props => props.theme.linkStylesFocus};
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }

    display: inline-block;
    padding-bottom: 15px;
    padding-top: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: none;
        padding-bottom: 0px;
        padding-top: 0px;
        margin-top: 0px;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: inline-block;
    }
`;

const SearchWrapper = styled__default.div`
    padding-bottom: ${props => props.theme.theme_vars.spacingSizes.small};
    flex: 0 0 100%;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        flex: auto;
        max-width: 320px;
        margin-left: 15px;
        padding: ${props => props.theme.theme_vars.spacingSizes.small} 0;
    }
`;

var NorthColouredLogo = function () {
    var randomId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "974", height: "327", fill: "none", viewBox: "0 0 974 327" },
        React__default.createElement("g", { clipPath: "url(#" + randomId + ")" },
            React__default.createElement("path", { fill: "#3C3C3B", d: "M64.23 117.143c3.531 0 7.038.121 10.545.291v-10.351c2.176-6.142 6.311-10.906 11.366-12.986 5.054 2.104 9.165 6.868 11.366 12.986v12.696c20.338 3.217 39.515 9.311 57.024 17.799V66.77h-.121c-.266-1.112-.944-2.2-1.959-3.192v4.087l-2.539-1.887v-4.11c-4.571-2.758-12.116-4.596-20.701-4.668v5.683h-3.555v-5.61c-7.303.362-13.688 1.983-17.823 4.352v4.934l-1.886 1.886v-5.562c-1.621 1.233-2.661 2.636-3.023 4.111h-.121v3.773h-2.854v5.949h-4.933v-5.95h-17.34v5.95h-4.933v-5.95h-3.24v-3.772h-.121c-.363-1.475-1.403-2.853-3.023-4.111v5.562l-1.886-1.886v-4.933c-4.16-2.37-10.52-4.015-17.823-4.353v5.61h-3.555V57c-8.585.072-16.13 1.91-20.701 4.667v4.111l-2.54 1.887v-4.087c-1.015.991-1.692 2.08-1.958 3.192h-.121v55.524a211.858 211.858 0 0146.456-5.151z" }),
            React__default.createElement("path", { fill: "#3CAA36", d: "M263.5 161.157c16.427 0 29.745-13.318 29.745-29.746 0-16.427-13.318-29.745-29.745-29.745-16.428 0-29.746 13.318-29.746 29.745 0 16.428 13.318 29.746 29.746 29.746z" }),
            React__default.createElement("path", { fill: "#3CAA36", d: "M311.164 161.665c11.446 0 20.725-9.279 20.725-20.725 0-11.446-9.279-20.725-20.725-20.725-11.446 0-20.725 9.279-20.725 20.725 0 11.446 9.279 20.725 20.725 20.725z" }),
            React__default.createElement("path", { fill: "#E30613", d: "M209.766 73.88c1.475-1.62 2.95-3.216 4.425-4.837.121.073.266.145.387.242-.58.895-1.161 1.814-1.765 2.709.048.024.072.072.121.096l-.073-.145c.726-.508 1.475-.991 2.201-1.5.87-.604 1.717-1.232 2.587-1.861l-.048-.049a224.687 224.687 0 00-1.935 3.628 803.125 803.125 0 003.821-2.781c.121.12.242.266.363.387-.846 1.064-1.693 2.128-2.757 3.482 1.306-.605 2.37-1.088 3.41-1.572-2.95 3.265-3.579 7.497-5.03 11.342-.798 2.104-1.209 4.377-1.862 6.554-1.04 3.385-2.128 6.771-3.362 10.689h13.712c.194.266.387.556.556.822-6.868 1.185-6.19 6.36-6.456 11.342-.653-.387-1.089-.581-1.451-.847-2.564-1.958-5.103-3.941-7.642-5.924-1.064-.823-1.717-.847-2.685.459-1.644 2.249-3.748 4.184-5.586 6.312-2.878 3.313-5.731 6.674-8.585 10.012-.701.822-1.427 1.668-2.031 2.539-1.04 1.475-1.983 3.023-3.217 4.885-.169-1.161-.314-2.104-.483-3.337-.605 1.136-1.137 2.079-1.669 3.047-.169-.049-.363-.097-.532-.145.121-1.282.242-2.54.387-4.087-.822 1.015-1.499 1.886-2.177 2.732-.145-.072-.314-.145-.459-.217.459-1.427.895-2.878 1.475-4.692-.871.677-1.451 1.137-2.031 1.596-.121-.072-.218-.145-.339-.193.75-1.451 1.499-2.926 2.37-4.643-.653.241-1.016.362-1.378.507l-.049-.048c3.241-4.982 5.369-10.713 10.23-14.582 1.451-1.137 2.563-2.685 4.208-4.402-1.524-.822-2.685-1.45-3.87-2.08.581-1.668 1.911-2.563 3.87-2.514 2.176.072 3.289-1.113 3.821-3.072.362-1.306.943-2.563 1.136-3.87.919-6.843 5.659-11.776 8.537-17.629.193.073.363.145.556.242-.242.508-.484 1.04-.701 1.548.024.024.072.024.096.048l-.096-.193zM167.009 134.459c-.048.121-.121.217-.169.338a1.58 1.58 0 01-.194-.217c.121-.049.218-.121.339-.17-.024 0 .024.049.024.049zM202.631 82.634c.048-.072.072-.145.121-.218 0 .049.024.121 0 .121-.049.025-.097.049-.169.073l.048.024z" }),
            React__default.createElement("path", { fill: "#07873A", d: "M.411 242.993v22.683h341.78v-22.683c-113.902-17.146-227.829 17.17-341.78 0z" }),
            React__default.createElement("path", { fill: "#3CAA36", d: "M132.862 195.594c16.082-12.237 35.985-22.418 58.62-29.794-33.494-27.182-78.16-43.82-127.252-43.82-22.563 0-44.182 3.507-64.23 9.939v60.942c44.303 6.674 88.583 5.586 132.862 2.733z" }),
            React__default.createElement("path", { fill: "#07873A", d: "M280.524 157.819c-53.783 0-101.98 14.293-135.063 36.952 65.585-4.595 131.17-11.753 196.754-1.886v-28.512c-19.249-4.232-40.023-6.554-61.691-6.554z" }),
            React__default.createElement("path", { fill: "#1A9DD9", d: "M342.215 236.608c-114.072-17.17-228.12 17.17-342.192 0v-37.339c114.072 17.17 228.12-17.17 342.192 0v37.339z" }),
            React__default.createElement("path", { fill: "#000", d: "M411.839 122.367l-21.063-36.59v36.59h-9.335v-50.35h10.64l20.846 36.662V72.018h9.335v50.349h-10.423zM450 123.262c-11.052 0-20.048-8.851-20.048-19.758 0-10.834 8.996-19.758 19.975-19.758 11.391 0 20.169 8.779 20.169 20.024 0 10.616-9.117 19.492-20.096 19.492zm0-31.22c-5.925 0-10.907 5.102-10.907 11.317 0 6.481 4.837 11.584 10.98 11.584 5.997 0 10.906-5.103 10.906-11.439 0-6.288-4.909-11.463-10.979-11.463zM484.969 101.376v20.991H475.9v-37.75h8.319v3.676c2.395-3.483 4.305-4.57 8.174-4.57h.677v8.73c-5.465.144-8.101 3.07-8.101 8.923zM509.83 92.864v29.503h-9.069V92.864h-4.426v-8.247h4.426v-12.6h9.069v12.6h5.441v8.247h-5.441zM545.596 122.367v-19.274c0-7.908-2.055-11.052-7.352-11.052-5.175 0-7.98 2.854-7.98 11.173v19.153h-9.069v-50.35h9.069v15.188c2.733-2.443 5.731-3.555 9.601-3.555 9.068 0 14.8 4.981 14.8 17.387v21.33h-9.069zM411.839 195.376l-21.063-36.589v36.589h-9.335v-50.35h10.64l20.846 36.662v-36.662h9.335v50.35h-10.423zM450 196.271c-11.052 0-20.048-8.851-20.048-19.758 0-10.834 8.996-19.758 19.975-19.758 11.391 0 20.169 8.779 20.169 20.024 0 10.641-9.117 19.492-20.096 19.492zm0-31.221c-5.925 0-10.907 5.103-10.907 11.318 0 6.481 4.837 11.584 10.98 11.584 5.997 0 10.906-5.103 10.906-11.439 0-6.287-4.909-11.463-10.979-11.463zM484.969 174.385v20.991H475.9v-37.75h8.319v3.676c2.395-3.482 4.305-4.571 8.174-4.571h.677v8.73c-5.465.146-8.101 3.072-8.101 8.924zM509.83 165.872v29.504h-9.069v-29.504h-4.426v-8.246h4.426v-12.6h9.069v12.6h5.441v8.246h-5.441zM545.596 195.376v-19.274c0-7.908-2.055-11.052-7.352-11.052-5.175 0-7.98 2.854-7.98 11.173v19.153h-9.069v-50.35h9.069v15.187c2.733-2.442 5.731-3.554 9.601-3.554 9.068 0 14.8 4.981 14.8 17.387v21.33h-9.069zM592.705 195.376v-4.909c-3.603 4.087-7.231 5.804-12.527 5.804-11.051 0-19.008-8.247-19.008-19.637 0-11.511 8.029-19.903 19.226-19.903 5.441 0 9.19 1.766 12.333 5.925v-5.054h8.319v37.75h-8.343v.024zm-11.39-30.326c-6.481 0-11.052 4.909-11.052 11.778 0 6.601 4.571 11.1 11.173 11.1 6.892 0 10.979-4.91 10.979-11.173 0-6.868-4.619-11.705-11.1-11.705zM655.993 195.376v-20.725c0-7.569-2.854-9.601-7.086-9.601-5.03 0-7.642 2.733-7.642 11.729v18.597h-9.069v-20.725c0-7.424-2.587-9.601-7.351-9.601-5.248 0-7.352 2.806-7.352 11.729v18.597h-9.069v-37.75h8.319v3.531c2.66-3.192 5.393-4.426 9.819-4.426 5.175 0 8.512 1.766 11.1 5.853 3.071-4.087 6.819-5.853 12.14-5.853 9.939 0 15.259 5.514 15.259 16.832v21.813h-9.068zM694.517 196.271c-4.643 0-8.174-1.355-11.584-4.426V208h-9.069v-50.374h8.319v4.426c2.926-3.41 7.304-5.321 12.406-5.321 10.907 0 18.815 8.247 18.815 19.637-.024 11.463-8.005 19.903-18.887 19.903zm-1.113-31.221c-6.263 0-11.051 4.909-11.051 11.391 0 6.602 4.764 11.511 11.172 11.511 5.998 0 10.689-4.982 10.689-11.391.049-6.529-4.667-11.511-10.81-11.511zM729.944 165.872v29.504h-9.068v-29.504h-4.426v-8.246h4.426v-12.6h9.068v12.6h5.442v8.246h-5.442zM758.36 196.271c-11.052 0-20.048-8.851-20.048-19.758 0-10.834 8.996-19.758 19.975-19.758 11.39 0 20.169 8.779 20.169 20.024 0 10.641-9.117 19.492-20.096 19.492zm0-31.221c-5.925 0-10.907 5.103-10.907 11.318 0 6.481 4.837 11.584 10.979 11.584 5.998 0 10.907-5.103 10.907-11.439 0-6.287-4.909-11.463-10.979-11.463zM808.709 195.376V176.9c0-10.084-2.733-11.85-7.231-11.85-2.854 0-5.248 1.234-6.675 3.483-1.16 1.838-1.499 4.014-1.499 9.068v17.775h-9.069v-37.75h8.392v3.603c3.337-3.192 6.336-4.498 10.64-4.498 5.248 0 9.335 1.911 11.778 5.442 2.055 2.926 2.732 6.19 2.732 12.938v20.241h-9.068v.024zM837.269 196.271c-7.497 0-12.89-4.087-13.833-12.89h9.141c.895 3.192 2.394 4.571 5.055 4.571 2.321 0 4.086-1.572 4.086-3.676 0-2.177-.338-2.805-6.408-4.837-7.497-2.515-10.496-5.659-10.496-11.172 0-6.481 5.514-11.512 12.552-11.512 6.408 0 12.067 4.233 12.406 11.318h-8.852c-.411-1.983-1.644-2.999-3.554-2.999-1.983 0-3.483 1.355-3.483 3.193 0 1.983.194 2.104 6.409 4.087 7.908 2.442 10.495 5.441 10.495 11.051-.024 7.207-5.949 12.866-13.518 12.866zM880.895 195.376v-19.274c0-7.908-2.056-11.052-7.352-11.052-5.175 0-7.98 2.854-7.98 11.173v19.153h-9.069v-50.35h9.069v15.187c2.733-2.442 5.731-3.554 9.601-3.554 9.068 0 14.8 4.981 14.8 17.387v21.33h-9.069zM898.066 195.376v-37.75h9.069v37.75h-9.069zm.048-43.191v-9.069h9.069v9.069h-9.069zM924.159 174.385v20.991h-9.068v-37.75h8.319v3.676c2.394-3.482 4.304-4.571 8.174-4.571h.677v8.73c-5.441.146-8.102 3.072-8.102 8.924zM973.638 180.528H944.4c1.088 4.57 5.054 7.424 10.423 7.424 3.748 0 5.998-1.016 8.319-3.749h9.891c-2.515 7.763-10.35 12.068-17.992 12.068-11.511 0-20.435-8.585-20.435-19.637 0-11.1 8.803-19.903 19.903-19.903 11.245 0 19.491 8.585 19.491 20.314-.024 1.379-.096 2.177-.362 3.483zm-19.033-15.478c-5.392 0-9.068 2.66-10.495 7.497h20.918c-1.136-4.837-4.812-7.497-10.423-7.497zM405.358 269.28c-14.727 0-26.504-11.729-26.504-26.239 0-14.244 11.656-25.9 25.9-25.9 10.35 0 19.419 5.586 23.844 15.332h-10.423c-3.41-4.426-7.351-6.336-13.228-6.336-9.601 0-16.686 7.497-16.686 16.976 0 9.408 7.642 17.17 16.904 17.17 4.836 0 8.391-1.644 12.478-5.924h10.979c-3.966 9.189-12.962 14.921-23.264 14.921zM452.732 269.28c-11.051 0-20.047-8.852-20.047-19.758 0-10.834 8.996-19.758 19.975-19.758 11.39 0 20.169 8.779 20.169 20.048 0 10.617-9.142 19.468-20.097 19.468zm0-31.197c-5.924 0-10.906 5.103-10.906 11.318 0 6.481 4.836 11.584 10.979 11.584 5.997 0 10.907-5.103 10.907-11.439-.025-6.288-4.934-11.463-10.98-11.463zM503.832 268.409v-3.603c-3.41 3.337-6.264 4.498-10.834 4.498-8.803 0-14.389-5.103-14.389-18.404v-20.241h9.069v18.476c0 10.012 2.781 11.85 7.158 11.85 3.071 0 5.514-1.306 6.892-3.483 1.016-1.692 1.427-4.014 1.427-9.068v-17.775h9.068v37.75h-8.391zM544.653 268.409v-18.476c0-10.084-2.733-11.85-7.231-11.85-2.853 0-5.247 1.234-6.674 3.483-1.161 1.837-1.5 4.014-1.5 9.068v17.775h-9.068v-37.774h8.391v3.603c3.338-3.192 6.336-4.498 10.641-4.498 5.248 0 9.335 1.91 11.777 5.441 2.056 2.926 2.733 6.191 2.733 12.938v20.241h-9.069v.049zM580.299 269.28c-11.173 0-20.169-8.803-20.169-19.758 0-11.1 8.73-19.758 19.903-19.758 8.585 0 16.082 4.837 19.008 13.494h-10.229c-1.838-3.482-4.692-5.175-8.803-5.175-6.264 0-10.762 4.764-10.762 11.391 0 6.602 4.692 11.511 10.98 11.511 3.748 0 6.336-1.5 8.585-4.982h10.229c-3.144 8.44-9.963 13.277-18.742 13.277zM606.055 268.409v-37.774h9.068v37.75h-9.068v.024zm.072-43.215v-9.069h9.069v9.069h-9.069zM623.08 268.409v-50.373h9.068v50.349h-9.068v.024z" })),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: randomId },
                React__default.createElement("path", { fill: "#fff", d: "M0 0H974V327H0z" })))));
};

var WestColouredLogo = function () {
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "974", height: "327", fill: "none", viewBox: "0 0 974 327" },
        React__default.createElement("path", { fill: "url(#paint0_linear)", d: "M104.506 216.165c.4.799.823 1.591 1.254 2.376 11.203-.577 21.323-6.329 27.497-15.541-.177-.33-.353-.669-.523-1.007-6.274-12.495-5.544-26.713.7-38.147a35.024 35.024 0 00-13.356-11.98c-4.422-2.269-9.136-3.553-14.034-3.83a73.7 73.7 0 00-5.575 12.673c-6.097 18.423-4.667 38.116 4.037 55.456z" }),
        React__default.createElement("path", { fill: "url(#paint1_linear)", d: "M234.358 150.981c-8.705-17.339-23.645-30.257-42.062-36.363-16.055-5.321-33.087-4.913-48.674 1.046 11.335 6.628 20.67 15.84 27.359 26.89 14.464.569 28.213 8.773 35.156 22.599 10.158 20.239 1.961 44.96-18.277 55.118a40.82 40.82 0 01-17.271 4.344c-6.882 11.135-16.309 20.231-27.528 26.652 1.153.446 2.322.869 3.514 1.261 18.416 6.106 38.117 4.675 55.456-4.029 17.34-8.705 30.258-23.645 36.364-42.061 6.105-18.424 4.675-38.117-4.037-55.457z" }),
        React__default.createElement("path", { fill: "url(#paint2_linear)", d: "M166.383 146.068c-6.897-11.627-16.94-21.1-29.258-27.421-9.981-5.121-20.769-7.812-31.665-8.027-4.876 9.65-5.245 21.369-.154 31.634a40.898 40.898 0 0117.401 4.498 40.798 40.798 0 0116.248 15.072 35.162 35.162 0 0015.471-4.568 34.839 34.839 0 0011.957-11.188z" }),
        React__default.createElement("path", { fill: "url(#paint3_linear)", d: "M138.832 204.977c-11.15 17.954-34.48 24.66-53.61 14.848-20.147-10.335-28.129-35.133-17.794-55.279.146-.293.3-.577.453-.862-6.228-11.572-9.388-24.275-9.365-37.116-7.897 6.32-14.441 14.294-19.193 23.568-8.858 17.27-10.458 36.947-4.514 55.417s18.732 33.526 35.994 42.377c17.27 8.858 36.948 10.457 55.418 4.514 18.47-5.944 33.518-18.732 42.377-35.995a72.811 72.811 0 007.143-21.745c-11.319 6.443-24.037 9.973-36.909 10.273z" }),
        React__default.createElement("path", { fill: "url(#paint4_linear)", d: "M157.278 162.254a40.759 40.759 0 01-19.323 5.359c-4.852 9.605-5.283 21.285-.162 31.635 12.203-.123 24.23-3.345 35.126-9.55 10.896-6.214 19.8-14.926 26.128-25.36-6.044-9.335-16.094-15.248-27.297-15.987a40.85 40.85 0 01-14.472 13.903z" }),
        React__default.createElement("path", { fill: "url(#paint5_linear)", d: "M95.017 158.901a79.411 79.411 0 015.675-13.056c-10.38-19.508-3.391-43.938 15.925-54.949 19.316-11.004 43.883-4.567 55.379 14.287a78.728 78.728 0 0122.107 3.968 79.054 79.054 0 0114.71 6.605c-1.315-8.735-4.245-17.247-8.751-25.152-9.604-16.863-25.205-28.966-43.922-34.095-18.716-5.129-38.308-2.66-55.164 6.944-16.862 9.611-28.966 25.206-34.094 43.922-5.13 18.716-2.661 38.308 6.943 55.171a72.678 72.678 0 0017.178 20.346 78.529 78.529 0 014.014-23.991z" }),
        React__default.createElement("path", { fill: "#000", d: "M369.2 76.448l-10.889 42.722H346.47l-6.905-26.42-6.706 26.42h-11.841l-10.889-42.722h11.212l5.92 28.658 7.221-28.658h10.719l6.843 28.658 6.244-28.658H369.2zM390.546 120.031c-6.121 0-10.819-1.453-14.087-4.36-3.261-2.906-4.898-7.051-4.898-12.426 0-5.26 1.522-9.458 4.567-12.595 3.045-3.137 7.297-4.706 12.772-4.706 4.968 0 8.705 1.33 11.211 3.99 2.507 2.662 3.753 6.468 3.753 11.42v3.614h-22.161c.1 1.492.415 2.737.953 3.745a6.612 6.612 0 002.138 2.399c.869.592 1.876 1.015 3.03 1.276 1.153.261 2.414.385 3.783.385 1.176 0 2.33-.131 3.468-.385s2.176-.6 3.122-1.015c.83-.361 1.591-.754 2.299-1.176.7-.423 1.276-.792 1.722-1.123h1.069v8.289c-.83.323-1.584.631-2.268.907-.685.277-1.623.562-2.815.846-1.099.285-2.23.515-3.391.677-1.168.154-2.591.238-4.267.238zm3.352-21.115c-.061-2.122-.553-3.737-1.491-4.852-.931-1.107-2.361-1.66-4.291-1.66-1.961 0-3.499.584-4.606 1.752-1.107 1.17-1.715 2.753-1.838 4.76h12.226zM418.942 120.062c-2.391 0-4.644-.261-6.774-.777-2.13-.515-3.883-1.122-5.275-1.807v-8.489h.838c.485.362 1.031.761 1.646 1.207.615.439 1.476.9 2.568 1.377.946.438 2.007.815 3.191 1.13 1.184.315 2.468.477 3.86.477 1.423 0 2.684-.223 3.768-.661 1.084-.439 1.63-1.138 1.63-2.092 0-.746-.254-1.307-.753-1.692-.5-.384-1.477-.745-2.915-1.091a48.62 48.62 0 00-2.914-.616 27.756 27.756 0 01-3.122-.761c-2.545-.784-4.452-1.945-5.736-3.483-1.284-1.538-1.923-3.56-1.923-6.067 0-1.438.331-2.784 1-4.06.661-1.269 1.638-2.407 2.93-3.399 1.292-.976 2.883-1.753 4.783-2.322 1.899-.577 4.037-.861 6.428-.861 2.276 0 4.36.223 6.267.676 1.907.446 3.514.992 4.821 1.623v8.15h-.807c-.346-.269-.892-.622-1.646-1.076a22.645 22.645 0 00-2.199-1.161c-.846-.385-1.799-.7-2.845-.946a14.096 14.096 0 00-3.222-.377c-1.461 0-2.699.246-3.714.746-1.015.5-1.515 1.161-1.515 1.977 0 .73.254 1.299.754 1.722.5.423 1.592.83 3.268 1.23.869.208 1.861.416 2.991.615 1.123.2 2.207.477 3.253.815 2.33.746 4.098 1.838 5.298 3.284 1.199 1.445 1.807 3.36 1.807 5.752a9.198 9.198 0 01-1.069 4.321c-.715 1.369-1.723 2.522-3.03 3.46-1.384 1.015-3.022 1.8-4.898 2.353-1.876.546-4.122.823-6.744.823zM451.938 119.801c-4.122 0-7.121-.839-8.997-2.523-1.876-1.684-2.814-4.436-2.814-8.266V93.949h-3.868V86.95h3.868V77.74h10.111v9.212h9.735v6.998h-9.735v11.419c0 1.13.008 2.114.031 2.952.023.838.177 1.6.461 2.269.269.669.746 1.199 1.431 1.591.684.393 1.684.585 2.991.585.538 0 1.245-.116 2.122-.346.877-.231 1.484-.439 1.838-.631h.869v7.09c-1.1.284-2.261.515-3.499.677-1.246.161-2.753.246-4.544.246zM350.561 189.675h-10.404l-16.586-29.782v29.782h-9.881v-42.723h13.257l13.725 24.475v-24.475h9.881v42.723h.008zM389.854 173.581c0 5.298-1.461 9.473-4.375 12.526-2.922 3.052-7.044 4.575-12.38 4.575-5.298 0-9.412-1.523-12.35-4.575-2.937-3.053-4.406-7.228-4.406-12.526 0-5.352 1.469-9.551 4.406-12.58 2.938-3.03 7.052-4.545 12.35-4.545 5.313 0 9.434 1.523 12.364 4.575 2.93 3.053 4.391 7.236 4.391 12.55zm-10.373.061c0-1.915-.162-3.506-.477-4.775-.315-1.269-.754-2.292-1.315-3.053-.6-.799-1.269-1.361-2.022-1.676-.754-.315-1.607-.477-2.568-.477-.908 0-1.723.139-2.453.415-.731.277-1.408.808-2.023 1.592-.576.746-1.038 1.769-1.384 3.068-.346 1.3-.523 2.938-.523 4.906 0 1.969.162 3.56.492 4.775.331 1.215.754 2.184 1.269 2.914a4.787 4.787 0 002.023 1.638c.807.346 1.707.516 2.683.516.808 0 1.63-.17 2.468-.516.839-.346 1.508-.861 2.007-1.545.6-.823 1.054-1.815 1.361-2.968.308-1.169.462-2.769.462-4.814zM417.005 166.952h-.838c-.384-.13-.946-.23-1.676-.3-.731-.069-1.538-.1-2.43-.1-1.061 0-2.168.154-3.337.462a31.59 31.59 0 00-3.391 1.092v21.576h-10.112v-32.219h10.112v4.622a31.29 31.29 0 011.922-1.592c.815-.638 1.561-1.153 2.238-1.538.73-.438 1.584-.815 2.56-1.13.969-.315 1.892-.477 2.761-.477.33 0 .692.008 1.099.031.408.015.769.046 1.1.084v9.489h-.008zM433.299 190.313c-4.122 0-7.121-.838-8.997-2.522-1.876-1.684-2.814-4.437-2.814-8.267v-15.063h-3.868v-6.998h3.868v-9.212H431.6v9.212h9.734v6.998H431.6v11.419c0 1.13.007 2.114.03 2.952.023.838.177 1.6.462 2.269.269.669.746 1.199 1.43 1.591.684.393 1.684.585 2.991.585.538 0 1.246-.116 2.122-.346.877-.231 1.484-.438 1.838-.631h.869v7.09c-1.1.284-2.261.515-3.499.677-1.238.161-2.753.246-4.544.246zM475.853 189.675h-10.166v-15.979c0-1.3-.054-2.599-.161-3.891-.108-1.292-.3-2.245-.592-2.853-.347-.73-.846-1.245-1.5-1.561-.654-.315-1.53-.476-2.63-.476a7.31 7.31 0 00-2.514.461c-.846.307-1.753.792-2.715 1.461v22.838h-10.111V145.03h10.111v15.978c1.654-1.399 3.268-2.483 4.837-3.268 1.569-.784 3.307-1.176 5.214-1.176 3.314 0 5.844 1.038 7.597 3.114 1.753 2.076 2.63 5.083 2.63 9.02v20.977zM501.22 186.26c-.692.577-1.315 1.092-1.861 1.546-.546.461-1.284.915-2.207 1.376-.907.439-1.784.777-2.645 1.008-.861.23-2.053.346-3.599.346-2.868 0-5.252-.954-7.151-2.869-1.899-1.914-2.845-4.321-2.845-7.228 0-2.391.485-4.321 1.446-5.797.961-1.477 2.353-2.638 4.16-3.499 1.83-.877 4.014-1.492 6.559-1.838a114.58 114.58 0 018.204-.8v-.169c0-1.776-.661-3.006-1.976-3.683-1.322-.677-3.299-1.015-5.936-1.015-1.192 0-2.591.215-4.191.646-1.599.431-3.16.976-4.683 1.653h-.869v-7.774c1-.284 2.623-.623 4.852-1.015a39.101 39.101 0 016.76-.584c5.582 0 9.65.922 12.203 2.768 2.553 1.845 3.829 4.66 3.829 8.451v21.922h-10.05v-3.445zm0-4.99v-6.713a239.98 239.98 0 00-4.16.446 14.299 14.299 0 00-3.122.73c-.884.308-1.576.769-2.068 1.392-.493.623-.739 1.446-.739 2.484 0 1.515.408 2.545 1.231 3.114.815.562 2.03.846 3.621.846.885 0 1.792-.2 2.715-.6a8.485 8.485 0 002.522-1.699zM557.522 189.674V173.58c0-1.584-.031-2.929-.085-4.013-.061-1.092-.23-1.977-.523-2.669-.292-.692-.738-1.192-1.345-1.507-.608-.315-1.461-.477-2.561-.477-.769 0-1.53.17-2.284.5-.753.339-1.568.808-2.453 1.423v22.837h-10.165V173.58a65.59 65.59 0 00-.1-3.998c-.069-1.1-.246-1.992-.538-2.684-.292-.692-.738-1.192-1.346-1.507-.607-.315-1.445-.477-2.53-.477-.83 0-1.638.193-2.43.577-.792.385-1.561.831-2.314 1.346v22.837h-10.112v-32.218h10.112v3.56c1.653-1.4 3.214-2.484 4.683-3.268 1.461-.784 3.106-1.177 4.936-1.177 1.984 0 3.73.469 5.229 1.408 1.5.938 2.645 2.337 3.437 4.19 1.946-1.799 3.776-3.183 5.506-4.144 1.722-.969 3.476-1.446 5.244-1.446 1.5 0 2.853.238 4.045.715a7.675 7.675 0 013.029 2.153c.908 1.031 1.584 2.261 2.038 3.683.454 1.423.677 3.284.677 5.583v20.969h-10.15v-.008zM606.981 173.127c0 5.144-1.315 9.296-3.945 12.449-2.63 3.153-5.867 4.737-9.719 4.737-1.615 0-3.022-.185-4.222-.546-1.192-.362-2.468-.931-3.814-1.692v13.426h-10.112v-44.038h10.112v3.361c1.484-1.261 2.991-2.284 4.537-3.068 1.538-.785 3.322-1.177 5.344-1.177 3.752 0 6.667 1.484 8.727 4.445 2.061 2.96 3.092 6.989 3.092 12.103zm-10.343.2c0-3.138-.484-5.414-1.461-6.829-.976-1.414-2.491-2.122-4.552-2.122-.907 0-1.807.146-2.699.431a10.61 10.61 0 00-2.645 1.292v16.209c.538.231 1.13.392 1.776.484.646.093 1.415.146 2.299.146 2.469 0 4.299-.799 5.491-2.399 1.199-1.599 1.791-3.998 1.791-7.212zM624.835 190.313c-4.122 0-7.12-.838-8.997-2.522-1.876-1.684-2.814-4.437-2.814-8.267v-15.063h-3.868v-6.998h3.868v-9.212h10.112v9.212h9.734v6.998h-9.734v11.419c0 1.13.007 2.114.03 2.952.023.838.177 1.6.462 2.269.269.669.746 1.199 1.43 1.591.684.393 1.684.585 2.991.585.538 0 1.246-.116 2.122-.346.877-.231 1.485-.438 1.838-.631h.869v7.09a28.973 28.973 0 01-3.499.677c-1.238.161-2.752.246-4.544.246zM668.142 173.581c0 5.298-1.461 9.473-4.375 12.526-2.922 3.052-7.044 4.575-12.38 4.575-5.298 0-9.412-1.523-12.35-4.575-2.937-3.053-4.406-7.228-4.406-12.526 0-5.352 1.469-9.551 4.406-12.58 2.938-3.03 7.052-4.545 12.35-4.545 5.313 0 9.435 1.523 12.364 4.575 2.93 3.053 4.391 7.236 4.391 12.55zm-10.373.061c0-1.915-.162-3.506-.477-4.775-.315-1.269-.753-2.292-1.315-3.053-.6-.799-1.269-1.361-2.022-1.676-.754-.315-1.607-.477-2.568-.477-.908 0-1.723.139-2.453.415-.731.277-1.407.808-2.023 1.592-.576.746-1.038 1.769-1.384 3.068-.346 1.3-.523 2.938-.523 4.906 0 1.969.162 3.56.493 4.775.33 1.215.753 2.184 1.268 2.914a4.793 4.793 0 002.023 1.638c.807.346 1.707.516 2.683.516.808 0 1.63-.17 2.469-.516.838-.346 1.507-.861 2.006-1.545.6-.823 1.054-1.815 1.361-2.968.308-1.169.462-2.769.462-4.814zM703.906 189.674H693.74v-15.978c0-1.3-.054-2.599-.161-3.891-.108-1.292-.3-2.245-.592-2.853-.346-.73-.846-1.246-1.5-1.561-.653-.315-1.53-.477-2.629-.477-.831 0-1.669.154-2.515.462-.846.307-1.753.792-2.714 1.461v22.837h-10.112v-32.218h10.112v3.56c1.653-1.4 3.268-2.484 4.836-3.268 1.569-.784 3.307-1.177 5.214-1.177 3.314 0 5.844 1.038 7.597 3.115 1.753 2.076 2.63 5.082 2.63 9.019v20.969zM721.268 190.566c-2.392 0-4.645-.261-6.775-.776-2.13-.515-3.883-1.123-5.275-1.807v-8.489h.838c.485.361 1.031.761 1.646 1.207.615.438 1.476.9 2.568 1.376.946.439 2.007.815 3.191 1.131 1.185.315 2.469.476 3.86.476 1.423 0 2.684-.223 3.768-.661 1.084-.438 1.63-1.138 1.63-2.091 0-.746-.253-1.308-.753-1.692-.5-.385-1.477-.746-2.914-1.092-.769-.192-1.746-.4-2.915-.615a27.976 27.976 0 01-3.122-.761c-2.545-.785-4.452-1.946-5.736-3.484-1.284-1.538-1.922-3.56-1.922-6.067 0-1.438.33-2.783.999-4.06.662-1.269 1.638-2.407 2.93-3.398 1.292-.977 2.884-1.754 4.783-2.323 1.899-.576 4.037-.861 6.428-.861 2.276 0 4.36.223 6.267.677 1.907.446 3.514.992 4.821 1.622v8.151h-.807c-.346-.269-.892-.623-1.646-1.076a22.66 22.66 0 00-2.199-1.162 15.457 15.457 0 00-2.845-.945 14.09 14.09 0 00-3.222-.377c-1.461 0-2.699.246-3.714.746-1.015.5-1.515 1.161-1.515 1.976 0 .73.254 1.299.754 1.722.5.423 1.592.831 3.268 1.231.869.207 1.861.415 2.991.615 1.123.2 2.207.477 3.253.815 2.33.746 4.098 1.838 5.298 3.283 1.199 1.446 1.807 3.361 1.807 5.752a9.192 9.192 0 01-1.069 4.321c-.715 1.369-1.722 2.523-3.03 3.461-1.384 1.015-3.022 1.799-4.898 2.353-1.876.546-4.121.822-6.743.822zM772.226 189.675H762.06v-15.979c0-1.3-.054-2.599-.161-3.891-.108-1.292-.3-2.245-.592-2.853-.346-.73-.846-1.245-1.5-1.561-.653-.315-1.53-.476-2.63-.476a7.31 7.31 0 00-2.514.461c-.846.307-1.753.792-2.714 1.461v22.838h-10.112V145.03h10.112v15.978c1.653-1.399 3.268-2.483 4.836-3.268 1.569-.784 3.307-1.176 5.214-1.176 3.314 0 5.844 1.038 7.597 3.114 1.753 2.076 2.63 5.083 2.63 9.02v20.977zM790.112 152.865h-10.689v-7.835h10.689v7.835zm-.293 36.81h-10.111v-32.219h10.111v32.219zM819.347 166.952h-.838c-.384-.13-.946-.23-1.676-.3-.731-.069-1.538-.1-2.43-.1-1.061 0-2.169.154-3.337.462a31.59 31.59 0 00-3.391 1.092v21.576h-10.112v-32.219h10.112v4.622a31.29 31.29 0 011.922-1.592c.815-.638 1.561-1.153 2.238-1.538.73-.438 1.584-.815 2.56-1.13.969-.315 1.892-.477 2.761-.477.33 0 .692.008 1.099.031.408.015.769.046 1.1.084v9.489h-.008zM839.831 190.536c-6.12 0-10.819-1.454-14.087-4.36-3.26-2.907-4.898-7.051-4.898-12.426 0-5.26 1.523-9.458 4.568-12.596 3.045-3.137 7.297-4.706 12.772-4.706 4.967 0 8.704 1.331 11.211 3.991 2.507 2.661 3.753 6.467 3.753 11.419v3.614h-22.161c.1 1.492.415 2.737.953 3.745a6.594 6.594 0 002.138 2.399c.869.592 1.876 1.015 3.029 1.276 1.154.262 2.415.385 3.784.385 1.176 0 2.33-.131 3.468-.385a16.747 16.747 0 003.121-1.015 20.013 20.013 0 002.3-1.176c.699-.423 1.276-.792 1.722-1.123h1.069v8.289c-.831.323-1.584.631-2.269.908-.684.277-1.622.561-2.814.846-1.099.284-2.23.515-3.391.676-1.176.162-2.599.239-4.268.239zm3.345-21.116c-.061-2.122-.553-3.737-1.491-4.852-.931-1.107-2.361-1.661-4.291-1.661-1.961 0-3.499.585-4.606 1.754-1.107 1.168-1.715 2.753-1.838 4.759h12.226zM332.252 261.017c-6.451 0-11.572-1.938-15.371-5.813-3.791-3.876-5.69-9.32-5.69-16.34 0-6.775 1.899-12.173 5.705-16.194 3.807-4.029 8.928-6.036 15.387-6.036 1.715 0 3.253.092 4.621.284 1.369.192 2.676.462 3.93.8.984.284 2.053.677 3.206 1.176 1.154.5 2.092.931 2.799 1.292v10.189h-1.099a78.729 78.729 0 00-1.961-1.654 24.862 24.862 0 00-2.684-1.876 18.257 18.257 0 00-3.306-1.561 11.14 11.14 0 00-3.768-.646c-1.561 0-2.991.246-4.291.731-1.299.484-2.537 1.33-3.714 2.537-1.076 1.092-1.961 2.561-2.645 4.422-.684 1.853-1.023 4.044-1.023 6.567 0 2.66.354 4.89 1.069 6.697.715 1.807 1.646 3.268 2.799 4.375 1.115 1.069 2.361 1.846 3.745 2.323a12.51 12.51 0 004.114.715c1.422 0 2.783-.231 4.075-.7 1.292-.469 2.376-.992 3.268-1.561a21.955 21.955 0 002.545-1.807 77.258 77.258 0 001.907-1.638h.985v10.043c-.792.361-1.708.776-2.746 1.245a24.695 24.695 0 01-3.206 1.192c-1.346.4-2.607.708-3.783.915-1.177.208-2.807.323-4.868.323zM383.756 244.092c0 5.299-1.461 9.474-4.375 12.527-2.922 3.052-7.044 4.575-12.38 4.575-5.298 0-9.412-1.523-12.349-4.575-2.938-3.053-4.406-7.228-4.406-12.527 0-5.351 1.468-9.55 4.406-12.579 2.937-3.03 7.051-4.545 12.349-4.545 5.313 0 9.435 1.523 12.364 4.575 2.93 3.045 4.391 7.228 4.391 12.549zm-10.373.054c0-1.914-.161-3.506-.477-4.775-.315-1.269-.753-2.291-1.315-3.053-.599-.799-1.268-1.361-2.022-1.676-.753-.315-1.607-.477-2.568-.477-.907 0-1.723.139-2.453.416-.731.276-1.407.807-2.022 1.591-.577.746-1.038 1.769-1.384 3.068-.346 1.3-.523 2.938-.523 4.906 0 1.969.161 3.561.492 4.775.33 1.215.753 2.184 1.269 2.915a4.784 4.784 0 002.022 1.638c.807.346 1.707.515 2.683.515.808 0 1.631-.169 2.469-.515.838-.346 1.507-.862 2.007-1.546.599-.823 1.053-1.815 1.361-2.968.307-1.161.461-2.761.461-4.814zM419.266 260.187h-10.112v-3.561c-1.753 1.454-3.36 2.561-4.821 3.315-1.461.753-3.207 1.13-5.229 1.13-3.214 0-5.729-1.007-7.528-3.03-1.799-2.014-2.699-5.052-2.699-9.112V227.96h10.165v15.979c0 1.661.047 3.022.131 4.075.085 1.054.292 1.938.623 2.668a3.2 3.2 0 001.43 1.523c.646.346 1.546.515 2.699.515.715 0 1.553-.169 2.53-.515a10.865 10.865 0 002.699-1.407V227.96h10.112v32.227zM457.397 260.186h-10.165v-15.978c0-1.3-.054-2.599-.161-3.891-.108-1.292-.3-2.245-.593-2.853-.346-.73-.845-1.245-1.499-1.561-.654-.315-1.53-.476-2.63-.476a7.31 7.31 0 00-2.514.461c-.846.307-1.753.792-2.715 1.461v22.837h-10.111v-32.218h10.111v3.56c1.654-1.399 3.268-2.484 4.837-3.268 1.569-.784 3.307-1.177 5.214-1.177 3.314 0 5.843 1.039 7.597 3.115 1.753 2.076 2.629 5.082 2.629 9.019v20.969zM480.796 261.048c-2.676 0-5.129-.339-7.351-1.008-2.222-.669-4.152-1.699-5.79-3.098-1.615-1.4-2.876-3.153-3.783-5.268-.908-2.114-1.361-4.606-1.361-7.474 0-3.076.492-5.698 1.476-7.858.984-2.161 2.315-3.937 3.983-5.337 1.615-1.338 3.522-2.33 5.706-2.968a24.228 24.228 0 016.828-.961c1.792 0 3.583.207 5.375.615 1.792.415 3.591 1.069 5.406 1.968v8.605h-1.3c-.407-.385-.9-.8-1.492-1.261a14.268 14.268 0 00-1.922-1.261c-.731-.4-1.561-.738-2.484-1.015-.922-.277-1.953-.415-3.091-.415-2.584 0-4.583.892-5.998 2.683-1.414 1.792-2.122 4.191-2.122 7.213 0 3.229.754 5.644 2.268 7.228 1.515 1.584 3.522 2.384 6.021 2.384 1.269 0 2.392-.146 3.353-.431.961-.284 1.792-.63 2.484-1.03a10.71 10.71 0 001.73-1.246c.484-.431.892-.815 1.245-1.161h1.3v8.604c-.577.246-1.246.539-2.007.862-.761.323-1.538.592-2.322.799-.985.269-1.9.477-2.761.615-.853.147-1.984.216-3.391.216zM506.479 223.377h-10.688v-7.835h10.688v7.835zm-.292 36.81h-10.111v-32.219h10.111v32.219zM524.042 260.187H513.93v-44.645h10.112v44.645zM262.509 208.698a18.736 18.736 0 00-3.138 7.605c-3.629 20.885-6.105 37.109-22.168 45.798-9.996 5.406-21.069 6.037-31.166 2.692-1.138 9.581-4.875 19.008-11.288 26.913-13.994 17.247-34.594 16.863-53.218 11.265a15.211 15.211 0 00-7.659-.3c-19.154 4.198-33.903 7.805-47.351-5.106-9.097-8.735-13.849-20.877-14.18-33.38-9.834 3.053-20.807 2.522-31.103-2.353-19.393-9.181-25.399-30.619-26.237-51.619a19.31 19.31 0 00-2.091-8.02c-9.566-18.532-17.263-32.688-10.104-50.581 5.09-12.718 14.948-21.646 26.513-25.56-5.298-9.112-7.936-20.308-6.828-32.065 2.16-22.883 19.116-35.61 37.263-42.845 2.43-.97 4.621-2.546 6.39-4.606 13.325-15.54 23.399-27.805 41.238-25.814 11.742 1.315 21.869 7.851 28.812 17.378 6.321-8.112 15.195-14.156 25.668-16.586 20.677-4.806 37.032 8.828 48.943 25.383 1.599 2.215 3.652 4.006 5.998 5.198 17.693 9.02 31.519 15.664 35.271 34.749 2.691 13.695-.646 27.328-8.112 37.87 12.034 3.545 22.837 12.688 28.974 26.106 9.427 20.592 1.353 41.215-10.427 57.878zm-1.8-56.725c-5.582-12.203-15.394-20.507-26.336-23.729 6.782-9.589 9.819-21.977 7.374-34.426-3.406-17.347-15.978-23.383-32.057-31.58-2.13-1.085-3.999-2.707-5.452-4.73-10.827-15.048-25.69-27.443-44.491-23.068-9.519 2.215-17.586 7.705-23.33 15.08-6.313-8.667-15.525-14.603-26.19-15.795-16.217-1.815-25.375 9.343-37.493 23.46-1.608 1.87-3.6 3.307-5.814 4.184-16.494 6.574-31.91 18.147-33.872 38.947-1.007 10.688 1.392 20.869 6.206 29.15-10.512 3.56-19.478 11.673-24.099 23.238-6.505 16.263.484 29.135 9.181 45.975 1.154 2.23 1.8 4.737 1.907 7.289.761 19.093 6.22 38.578 23.845 46.921 9.358 4.43 19.331 4.914 28.274 2.138.3 11.365 4.622 22.407 12.888 30.343 12.226 11.741 25.629 8.458 43.045 4.644a13.89 13.89 0 016.967.269c16.932 5.091 35.656 5.437 48.382-10.242 5.828-7.182 9.227-15.756 10.257-24.46 9.182 3.037 19.247 2.468 28.328-2.453 14.602-7.905 16.855-22.653 20.154-41.631a17.032 17.032 0 012.853-6.913c10.696-15.14 18.039-33.887 9.473-52.611z" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "96.75", x2: "133.352", y1: "183.253", y2: "183.413", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { offset: "0.001", stopColor: "#234E7B" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#386092" })),
            React__default.createElement("linearGradient", { id: "paint1_linear", x1: "143.325", x2: "242.122", y1: "183.462", y2: "183.891", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { offset: "0.001", stopColor: "#234E7B" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#386092" })),
            React__default.createElement("linearGradient", { id: "paint2_linear", x1: "101.602", x2: "166.426", y1: "136.133", y2: "136.415", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { offset: "0.001", stopColor: "#9D1920" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#7F1724" })),
            React__default.createElement("linearGradient", { id: "paint3_linear", x1: "31.244", x2: "175.761", y1: "191.054", y2: "191.683", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { offset: "0.001", stopColor: "#9D1920" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#7F1724" })),
            React__default.createElement("linearGradient", { id: "paint4_linear", x1: "134.171", x2: "199.004", y1: "173.709", y2: "173.99", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { offset: "0", stopColor: "#6C9A36" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#008C49" })),
            React__default.createElement("linearGradient", { id: "paint5_linear", x1: "64.302", x2: "208.804", y1: "118.177", y2: "118.806", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { offset: "0", stopColor: "#6C9A36" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#008C49" })))));
};

const Container$d = styled__default.div`
  ${props => props.theme.fontStyles}
  width: 100%;
`;

const Form = styled__default.form`
`;

const Search = styled__default.div`

`;

const Label$1 = styled__default.label`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;


const InputWrapper = styled__default.div`
  /* display: grid;
  grid-template-columns: 1fr minmax(33px, auto); */
  /* justify-content: flex-start; */
  position: relative;
  width: auto;
  border-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  max-width: 750px;

  &:focus {
    outline: none;
  }

  
`;


const Input = styled__default.input`
  margin: 0;
  border: none;
  padding:  ${props => props.theme.theme_vars.spacingSizes.small} 60px ${props => props.theme.theme_vars.spacingSizes.small} 12px;
  background: ${props => props.theme.theme_vars.colours.white};
  /* border-top-left-radius: calc(${props => props.theme.theme_vars.border_radius} * 2); */
  border-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  font-size: ${props => props.theme.theme_vars.fontSizes.small};
  border: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
  border-right: transparent;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.theme_vars.colours.focus} !important;
    box-shadow: 0px 0px 0px 2px ${props => props.theme.theme_vars.colours.focus};
    -webkit-box-shadow: 0px 0px 0px 2px ${props => props.theme.theme_vars.colours.focus};
    -moz-box-shadow: 0px 0px 0px 2px ${props => props.theme.theme_vars.colours.focus};
  }

  .is-light & {
    border-top: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-left: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-right: 0;
  }

  .is-large & { 
    padding: 15px 80px 15px 15px;
  }
`;

const Button$1 = styled__default.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  margin: 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small} 12px;
  background: ${props => props.theme.theme_vars.colours.grey_darkest};
  color: ${props => props.theme.theme_vars.colours.white};
  border: 1px solid transparent;
  border-top-right-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  border-bottom-right-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  width: 50px;
  text-align: center;
  height: 100%;

  &:hover {
    background: ${props => props.theme.theme_vars.colours.black};
  }

  .is-light & { 
    background: ${props => props.theme.theme_vars.colours.action};
    &:hover {
      background: ${props => props.theme.theme_vars.colours.action_dark};
    }
  }

  .is-large & { 
    padding: 15px;
    /* padding: 10px 15px;
    padding-top: 12px; */
    width: 70px;
  }

  &:focus {
    outline: none;
    background: ${props => props.theme.theme_vars.colours.focus};

    svg {
      path{
        fill: ${props => props.theme.theme_vars.colours.black};
      }
    }
  }
  &:active {
    transform: translateY(1px);
    background-color: ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black};
    border-top-color: ${props => props.theme.theme_vars.colours.black};
    border-bottom-color: transparent;
  }
`;

const ButtonText = styled__default.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;

var IconDownload$2 = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M15.7345 14.4865L12.8629 11.6364C15.1051 8.76659 14.8691 4.67813 12.2926 2.10319C10.9355 0.746929 9.126 0 7.19852 0C5.27105 0 3.46159 0.746929 2.10449 2.10319C0.747388 3.45946 0 5.26781 0 7.1941C0 9.12039 0.747388 10.9287 2.10449 12.285C3.46159 13.6413 5.27105 14.3882 7.19852 14.3882C8.79164 14.3882 10.3651 13.8575 11.6238 12.855L14.4757 15.7445C14.6527 15.9214 14.8691 16 15.1051 16C15.3411 16 15.5575 15.9017 15.7345 15.7445C16.0885 15.4103 16.0885 14.8403 15.7345 14.4865ZM12.6269 7.1941C12.6269 8.64865 12.0565 10.0049 11.0338 11.027C10.0111 12.0491 8.6343 12.6192 7.19852 12.6192C5.76275 12.6192 4.38599 12.0491 3.36325 11.027C2.3405 10.0049 1.77013 8.62899 1.77013 7.1941C1.77013 5.73956 2.3405 4.38329 3.36325 3.36118C4.38599 2.33907 5.76275 1.76904 7.19852 1.76904C8.65396 1.76904 10.0111 2.33907 11.0338 3.36118C12.0565 4.38329 12.6269 5.73956 12.6269 7.1941Z", fill: colourFill })));
};

var Searchbar = function (_a) {
    var placeholder = _a.placeholder, isLight = _a.isLight, isLarge = _a.isLarge, searchTerm = _a.searchTerm, submitInfo = _a.submitInfo, _b = _a.id, id = _b === void 0 ? "search" : _b;
    var classes = '';
    classes += (isLight) ? " is-light" : "";
    classes += (isLarge) ? " is-large" : "";
    var _c = submitInfo[0], postTo = _c.postTo, params = _c.params;
    var initialValues = { searchTerm: (searchTerm === undefined) ? "" : searchTerm };
    var _d = React.useState(initialValues), inputs = _d[0], setInputs = _d[1];
    var handleSubmit = function (event) {
        if (event)
            event.preventDefault();
        var submitParams = params;
        if (inputs.searchTerm !== searchTerm || !(NewsArticleFilterFields.search.queryParamKey in submitParams)) {
            submitParams = __assign(__assign({}, submitParams), { searchTerm: inputs.searchTerm });
            var keyValueFormat = Object.keys(submitParams).map(function (key) {
                return { key: key, value: submitParams[key] };
            });
            handleParams(postTo, keyValueFormat);
        }
    };
    var handleInputChange = function (event) {
        event.persist();
        setInputs(function (inputs) {
            var _a;
            return (__assign(__assign({}, inputs), (_a = {}, _a[event.target.name] = event.target.value, _a)));
        });
    };
    return (React__default.createElement(Container$d, { "data-testid": "Searchbar", className: classes },
        React__default.createElement(Form, { onSubmit: handleSubmit },
            React__default.createElement(Search, { role: "search" },
                React__default.createElement(Label$1, { htmlFor: id }, placeholder ? placeholder : 'Header site search'),
                React__default.createElement(InputWrapper, null,
                    React__default.createElement(Input, { id: id, type: "text", name: NewsArticleFilterFields.search.queryParamKey, placeholder: placeholder ? placeholder : 'Search', onChange: handleInputChange, value: inputs.searchTerm }),
                    React__default.createElement(Button$1, { type: "submit", value: "Search" },
                        React__default.createElement(IconDownload$2, { colourFill: "#fff" }),
                        React__default.createElement(ButtonText, null, "Search")))))));
};

/**
 * The header that should appear at the top of every page.
 */
var Header = function (_a) {
    var children = _a.children, _b = _a.hideSearchBar, hideSearchBar = _b === void 0 ? false : _b, _c = _a.homeLink, homeLink = _c === void 0 ? "/" : _c, _d = _a.allServicesLink, allServicesLink = _d === void 0 ? "/" : _d, props = __rest(_a, ["children", "hideSearchBar", "homeLink", "allServicesLink"]);
    var themeContext = React.useContext(styled.ThemeContext);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Container$c, __assign({ isHomepage:  "false" }, props),
            React__default.createElement(StyledMaxWidthContainer$1, { noBackground: true },
                React__default.createElement(LogoWrapper, null,
                    React__default.createElement(HomeLink, { href: homeLink, title: "Go to the homepage", id: "logo" }, 
                            React__default.createElement(LogoWhite$1, { className: themeContext.theme_vars.theme_name === "Memorial theme North" ? "black_logo" : "" }, themeContext.cardinal_name === "north" ? React__default.createElement(NorthColouredLogo, null) : (themeContext.cardinal_name === "west" ? React__default.createElement(WestWhiteLogo, null) : React__default.createElement(GDSLogo, null))))),
                allServicesLink &&
                    React__default.createElement(AllServicesLink, { href:  allServicesLink + "#all-services", title: "See all services", isHomepage:  "false" }, "All services"),
                !hideSearchBar &&
                    React__default.createElement(SearchWrapper, null,
                        React__default.createElement(Searchbar, { isLight: themeContext.cardinal_name === "north" ? true : false, submitInfo: [{
                                    postTo: "/search",
                                    params: {
                                        type: "search"
                                    }
                                }] }))))));
};

const Wrapper = styled__default.header`
    background: ${props => props.noBackground ? "transparent" : 
        props.theme.cardinal_name === "north" ?  (props.theme.theme_vars.colours.grey_light+"7a") : props.theme.theme_vars.colours.white};
`;

const Container$e = styled__default.div`
    font-family: ${props => props.theme.theme_vars.fontstack};
    overflow: hidden;
    background: ${props => props.theme.theme_vars.colours.action}5A;
    padding: 30px 0;
    padding-bottom: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        background-image: url("${props => props.image}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &.loading {
            background-image: none;
        }
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        padding: 60px 0;
    }
    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        padding: 90px 0;
        max-width: 1680px;
    }
`;

const StyledMaxWidthContainer$2 = styled__default.div`
    ${props => props.theme.fontStyles}
    margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.theme_vars.breakpoints.l};
    }
`;
const HiddenH1 = styled__default.h1`
    visibility: hidden;
`;

const MainBox = styled__default.div`
    padding: 30px;
    background: ${props => props.theme.theme_vars.colours.white};
    background: ${props => props.theme.theme_vars.colours.white}F2;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    border-radius: 5px;


    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        max-width: calc(50% - 60px);
    }
`;

const Topline = styled__default.p`
    color: ${props => props.theme.theme_vars.colours.grey_dark};
`;

const LogoColoured$1 = styled__default.div`
    svg {
        margin-top: -45px;
        max-width: 450px;
        width: 95%;
        height: auto;
    }
    &.black_logo {
        svg {
            fill: black !important;
            path {
                fill: black !important;
            }
        }
    }
`;

const Strapline = styled__default.p`
    margin-bottom: 20px;
    margin-top: -10px;
`;

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var visibilitySensor = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(React__default, reactDom);
})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value; // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.

  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibilitySensor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    var _this;

    _classCallCheck(this, VisibilitySensor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilitySensor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return _this.props.containment || window;
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout;
      var func;

      var later = function later() {
        timeout = null;

        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };
      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    });

    _defineProperty(_assertThisInitialized(_this), "startWatching", function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      } // if dont need delayed call, check on load ( before the first interval fires )


      !_this.props.delayedCall && _this.check();
    });

    _defineProperty(_assertThisInitialized(_this), "stopWatching", function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];
            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);
            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }

      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      var el = _this.node;
      var rect;
      var containmentRect; // if the component has rendered to null, dont update visibility

      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();

        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      } // Check if visibility is wanted via offset?


      var offset = _this.props.offset || {};
      var hasValidOffset = _typeof(offset) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      }; // https://github.com/joshwnj/react-visibility-sensor/pull/114

      var hasSize = rect.height > 0 && rect.width > 0;
      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right; // check for partial visibility

      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left; // account for partial visibility on a single edge

        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        } // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.


        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      } // Deprecated options for calculating offset.


      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);
        isVisible = _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default()(offset, rect, containmentRect);
      }

      var state = _this.state; // notify the parent when the value changes

      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };

        _this.setState(state);

        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    });

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });
        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }
    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(VisibilitySensor, "defaultProps", {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
});

_defineProperty(VisibilitySensor, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  partialVisibility: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }), // deprecated offset property
  prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  })]),
  scrollCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scrollThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  resizeDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  intervalCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  containment: typeof window !== "undefined" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(window.Element) : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  minTopValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
});



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })
/******/ ]);
});
});

unwrapExports(visibilitySensor);

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(React__default),_propTypes=_interopRequireDefault(propTypes),_reactVisibilitySensor=_interopRequireDefault(visibilitySensor);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return {default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e];}return c.default=a,b&&b.set(a,c),c}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c);}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b);}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var LazyImage=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),_defineProperty(_assertThisInitialized(c),"loadImage",function(a){c.image&&(c.image.onload=null,c.image.onerror=null);var b=new Image;c.image=b,b.onload=c.onLoad,b.onerror=c.onError,b.src=a;}),_defineProperty(_assertThisInitialized(c),"handleVisibilityChange",function(a){c.setState({isVisible:a},function(){c.state.loading&&c.state.isVisible&&c.loadImage(c.props.src);});}),_defineProperty(_assertThisInitialized(c),"onLoad",function(){c.setState({image:c.image.src,loading:!1});}),_defineProperty(_assertThisInitialized(c),"onError",function(a){var b=c.props.onError;b&&b(a);}),c.image=null,c.state={image:a.placeholder,isVisible:!1,loading:!0},c}return _inherits(b,a),_createClass(b,[{key:"componentDidUpdate",value:function componentDidUpdate(a){var b=this.props,c=b.src,d=b.placeholder;// We only invalidate the current image if the src has changed.
c!==a.src&&(this.state.isVisible?this.loadImage(c):this.setState({image:d,loading:!0}));}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.image&&(this.image.onload=null,this.image.onerror=null);}},{key:"render",value:function render(){var a=this.state,b=a.image,c=a.loading,d=a.isVisible,e=this.props,f=e.children,g=e.visibilitySensorProps;if(!f||"function"!=typeof f)throw new Error("LazyProgressiveImage requires a function as its only child");return _react.default.createElement(_reactVisibilitySensor.default,_extends({},g,{onChange:this.handleVisibilityChange}),f(b,c,d))}}]),b}(_react.Component);LazyImage.propTypes={children:_propTypes.default.func,onError:_propTypes.default.func,placeholder:_propTypes.default.string,src:_propTypes.default.string,visibilitySensorProps:_propTypes.default.any};var _default=LazyImage;exports.default=_default;
});

var LazyImage = unwrapExports(lib);

/**
 * The Hero that should appear at the top of the home page.
 */
var HomeHero = function (_a) {
    var topline = _a.topline, strapline = _a.strapline, imagesArray = _a.imagesArray, promotedLinksArray = _a.promotedLinksArray;
    var themeContext = React.useContext(styled.ThemeContext);
    var _b = React.useState(999), random = _b[0], setRandom = _b[1];
    React.useEffect(function () {
        setRandom(Math.floor(Math.random() * imagesArray.length));
    }, []);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(SkipToMainContent$1, null),
        React__default.createElement(Wrapper, null,
            React__default.createElement(LazyImage, { src: random !== 999 && imagesArray[random].image1440x810, placeholder: random !== 999 && imagesArray[random].image144x81, visibilitySensorProps: {
                    partialVisibility: true
                } }, function (src) {
                return React__default.createElement(Container$e, { className: random !== 999 ? "loaded" : "loading", image: src, title: random !== 999 && imagesArray[random].imageAltText ? imagesArray[random].imageAltText : "" },
                    React__default.createElement(StyledMaxWidthContainer$2, null,
                        React__default.createElement(MainBox, null,
                            topline &&
                                React__default.createElement(Topline, null, topline),
                            React__default.createElement(HiddenH1, null,
                                themeContext.full_name,
                                " Council"),
                            React__default.createElement(LogoColoured$1, { className: themeContext.theme_vars.theme_name === "Memorial theme North" || themeContext.theme_vars.theme_name === "Memorial theme West" ? "black_logo" : "" }, themeContext.cardinal_name === "north" ? React__default.createElement(NorthColouredLogo, null) : (themeContext.cardinal_name === "west" ? React__default.createElement(WestColouredLogo, null) : React__default.createElement(GDSLogo, null))),
                            strapline &&
                                React__default.createElement(Strapline, null, strapline),
                            React__default.createElement(Searchbar, { isLight: true, isLarge: true, placeholder: "Search the site", submitInfo: [{
                                        postTo: "/search",
                                        params: {
                                            type: "search"
                                        }
                                    }] })),
                        promotedLinksArray.length > 0 &&
                            React__default.createElement(PromotedLinks$1, { promotedLinksArray: promotedLinksArray })));
            }))));
};

const Wrapper$1 = styled__default.div`
background-color: ${props => props.theme.theme_vars.colours.grey};
`;



const Container$f = styled__default.div `
   background-color: ${props => props.theme.theme_vars.colours.grey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
    flex-wrap: nowrap;
    flex-direction: column-reverse;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
      flex-direction: row;
    }

`;

const Left = styled__default.div `

  padding: 10px 30px;
  width: 100%;

  box-sizing: border-box;
  
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
     width: 60%;
    }
`;

const Image$1 = styled__default.div `

  transition: all 0.25s ease;
  opacity: ${props => (props.loading ? 0.2 : 1)};

  background-image: url("${props => props.image}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 300px;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    height: 500px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
    height: 700px;
  }

`;


const StyledMaxWidthContainer$3 = styled__default.div`

    ${props => props.theme.fontStyles}
    margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.theme_vars.breakpoints.l};
    }
`;

var MemorialHero = function (_a) {
    var src = _a.src, placeholder = _a.placeholder, alt = _a.alt, theme = _a.theme, children = _a.children, councilServices = _a.councilServices;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Wrapper$1, { "data-testid": "MemorialHero" },
            React__default.createElement(StyledMaxWidthContainer$3, null,
                React__default.createElement(Container$f, null,
                    React__default.createElement(Left, null,
                        children,
                        React__default.createElement(styled.ThemeProvider, { theme: theme }, councilServices)),
                    React__default.createElement(LazyImage, { src: src, placeholder: placeholder, visibilitySensorProps: {
                            partialVisibility: true
                        } }, function (src, loading, isVisible) { return React__default.createElement(Image$1, { image: src, src: src, title: alt, loading: loading.toString() }); }))))));
};

const Container$g = styled__default.div`
    h2 {
        border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey_dark};
        max-width: none;
        padding-bottom: 15px;
        margin-bottom: 20px;
    }
`;

const MapSection = styled__default.div`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 10px;
    margin-bottom: 45px;
`;
const Map = styled__default.div`
    width: 60%;
    order: -1;
    margin: 0 auto;
    text-align: center; 
    svg {
        width: 100%;
        max-width: 200px;
        height: auto;
    }
    @media screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
        font-size: 0.8rem;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        order: 2;
        width: calc(33.333% - 21px);
        max-width: none;

        svg {
            max-width: none;
        }
    }
`;

const West = styled__default.div`
    width: calc(50% - 10px);
    order: 1;
    padding-right: 10px;
    svg {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin-bottom: 5px;
    }
    @media screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
        font-size: 0.8rem;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        order: 1;
        width: calc(33.333% - 21px);
        padding-right: 0px;

        svg {
            margin-bottom: 15px;
        }
    }
`;

const North = styled__default.div`
    width: calc(50% - 10px);
    order: 3;
    padding-left: 10px;

    svg {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin-bottom: 5px;
    }
    @media screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
        font-size: 0.8rem;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: calc(33.333% - 21px);
        padding-left: 0px;

        svg {
            margin-bottom: 15px;
        }
    }
`;
const CouncilLink = styled__default.a`
    color: ${props => props.colour} !important;

    &:active, &:focus {
        color: ${props => props.theme.theme_vars.colours.black} !important;
    }
`;

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/**
 * Helpers.
 */

var s = 1000;
var m$1 = s * 60;
var h$1 = m$1 * 60;
var d$1 = h$1 * 24;
var w$1 = d$1 * 7;
var y$1 = d$1 * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y$1;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w$1;
    case 'days':
    case 'day':
    case 'd':
      return n * d$1;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h$1;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m$1;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d$1) {
    return Math.round(ms / d$1) + 'd';
  }
  if (msAbs >= h$1) {
    return Math.round(ms / h$1) + 'h';
  }
  if (msAbs >= m$1) {
    return Math.round(ms / m$1) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d$1) {
    return plural(ms, msAbs, d$1, 'day');
  }
  if (msAbs >= h$1) {
    return plural(ms, msAbs, h$1, 'hour');
  }
  if (msAbs >= m$1) {
    return plural(ms, msAbs, m$1, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

var browser = createCommonjsModule(function (module, exports) {
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});
var browser_1 = browser.log;
var browser_2 = browser.formatArgs;
var browser_3 = browser.save;
var browser_4 = browser.load;
var browser_5 = browser.useColors;
var browser_6 = browser.storage;
var browser_7 = browser.colors;

var hasFlag = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};
});
var node_1 = node.init;
var node_2 = node.log;
var node_3 = node.formatArgs;
var node_4 = node.save;
var node_5 = node.load;
var node_6 = node.useColors;
var node_7 = node.colors;
var node_8 = node.inspectOpts;

var src = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = browser;
} else {
	module.exports = node;
}
});

var debug;
try {
  /* eslint global-require: off */
  debug = src("follow-redirects");
}
catch (error) {
  debug = function () { /* */ };
}
var debug_1 = debug;

var URL = url.URL;


var Writable = stream.Writable;



// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "connect", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  ""
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  if (callback) {
    this.once("timeout", callback);
  }

  if (this.socket) {
    startTimer(this, msecs);
  }
  else {
    var self = this;
    this._currentRequest.once("socket", function () {
      startTimer(self, msecs);
    });
  }

  this.once("response", clearTimer);
  this.once("error", clearTimer);

  return this;
};

function startTimer(request, msecs) {
  clearTimeout(request._timeout);
  request._timeout = setTimeout(function () {
    request.emit("timeout");
  }, msecs);
}

function clearTimer() {
  clearTimeout(this._timeout);
}

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      statusCode >= 300 && statusCode < 400) {
    // Abort the current request
    this._currentRequest.removeAllListeners();
    this._currentRequest.on("error", noop);
    this._currentRequest.abort();
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
        // RFC7231§6.4.4: The 303 (See Other) status code indicates that
        // the server is redirecting the user agent to a different resource […]
        // A user agent can perform a retrieval request targeting that URI
        // (a GET or HEAD request if using HTTP) […]
        (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) ||
      url.parse(this._currentUrl).hostname;

    // Create the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug_1("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url.parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);

    // Drop the Authorization header if redirecting to another host
    if (redirectUrlParts.hostname !== previousHostName) {
      removeMatchingHeaders(/^authorization$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (typeof this._options.beforeRedirect === "function") {
      var responseDetails = { headers: response.headers };
      try {
        this._options.beforeRedirect.call(null, this._options, responseDetails);
      }
      catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    try {
      this._performRequest();
    }
    catch (cause) {
      var error = new RedirectionError("Redirected request failed: " + cause.message);
      error.cause = cause;
      this.emit("error", error);
    }
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url.parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug_1("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue;
}

function createErrorType(code, defaultMessage) {
  function CustomError(message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message || defaultMessage;
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

// Exports
var followRedirects = wrap({ http: http, https: https });
var wrap_1 = wrap;
followRedirects.wrap = wrap_1;

const name="axios";const version="0.21.1";const description="Promise based HTTP client for the browser and node.js";const main="index.js";const scripts={test:"grunt test && bundlesize",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"};const repository={type:"git",url:"https://github.com/axios/axios.git"};const keywords=["xhr","http","ajax","promise","node"];const author="Matt Zabriskie";const license="MIT";const bugs={url:"https://github.com/axios/axios/issues"};const homepage="https://github.com/axios/axios";const devDependencies={bundlesize:"^0.17.0",coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^5.2.0",sinon:"^4.5.0",typescript:"^2.8.1","url-search-params":"^0.10.0",webpack:"^1.13.1","webpack-dev-server":"^1.14.1"};const browser$1={"./lib/adapters/http.js":"./lib/adapters/xhr.js"};const jsdelivr="dist/axios.min.js";const unpkg="dist/axios.min.js";const typings="./index.d.ts";const dependencies={"follow-redirects":"^1.10.0"};const bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var _package = {name:name,version:version,description:description,main:main,scripts:scripts,repository:repository,keywords:keywords,author:author,license:license,bugs:bugs,homepage:homepage,devDependencies:devDependencies,browser:browser$1,jsdelivr:jsdelivr,unpkg:unpkg,typings:typings,dependencies:dependencies,bundlesize:bundlesize};

var _package$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    name: name,
    version: version,
    description: description,
    main: main,
    scripts: scripts,
    repository: repository,
    keywords: keywords,
    author: author,
    license: license,
    bugs: bugs,
    homepage: homepage,
    devDependencies: devDependencies,
    browser: browser$1,
    jsdelivr: jsdelivr,
    unpkg: unpkg,
    typings: typings,
    dependencies: dependencies,
    bundlesize: bundlesize,
    'default': _package
});

var pkg = getCjsExportFromNamespace(_package$1);

var httpFollow = followRedirects.http;
var httpsFollow = followRedirects.https;






var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios_1;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

var axios_1 = axios;

// Allow use of default import syntax in TypeScript
var _default = axios;
axios_1.default = _default;

var axios$1 = axios_1;

const Container$h = styled__default.div`
    strong {
        font-weight: bold;
    }

    p {
        margin-bottom: 15px;
    }
`;
const IconWrapper$2 = styled__default.span`
    display: inline-block;
    margin-right: 15px;
    padding-left: 3px;
`;
const DropDownButton = styled__default.button`
    background: transparent;
    border: 0;    
    ${props => props.theme.linkStyles}
    font-weight: 400;
    padding-left: 0;
    color: ${props => props.theme.theme_vars.colours.black};
    text-align: left;
    
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.45;
    }

    &:hover{
        ${props => props.theme.linkStylesHover}
        cursor: pointer;
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`;

const DropDownContent = styled__default.div`
    margin-top: 10px;
    
    input {
        margin-top: 15px;
        margin-bottom: 15px;
    }
`;

const Label$2 = styled__default.label`
    margin-bottom: 5px;
    display: block;
`;

const PostcodeResult = styled__default.div`
    margin-top: 15px;

    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: left;

    .result {
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 12px;
        max-width: calc(100% - 30px);
    }
`;
const Line = styled__default.div`
    background: ${props => props.theme.theme_vars.colours.grey_dark};
    width: 5px;
    border-radius: 2px;
`;

const StartAgain = styled__default.button`
    background: transparent;
    border: 0;    
    margin-top: 15px;
    margin-left: -6px;
    ${props => props.theme.linkStyles}
    &:hover{
        ${props => props.theme.linkStylesHover}
        cursor: pointer;
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }

    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.45;
    }
`;

const LoadingContainer = styled__default.div`
    padding-left: 30px;
`;

const HintText = styled__default.p`
    color: ${props => props.theme.theme_vars.colours.grey_dark};
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.1;
    margin-bottom: 10px;
    margin-top: 5px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 18px;
        font-size: 1rem;
        line-height: 1.25;
    }
`;

/**
 * Form element - hint text
 */
var HintText$1 = function (_a) {
    var text = _a.text;
    return (React__default.createElement(HintText, null, text));
};

const Container$i = styled__default.div`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: left;
`;
const Form$1 = styled__default.form`
    padding-top: 10px;
    padding-bottom: 12px;
    padding-left: ${props => props.hideLine ? "0" : "15px"};
    max-width: calc(100% - 30px);
`;
const Line$1 = styled__default.div`
    background: ${props => props.isError ? props.theme.theme_vars.colours.negative : props.lineColour};
    display: ${props => props.hideLine ? "none" : "block"};
    width: 5px;
    border-radius: 2px;
`;

const ErrorSummary = styled__default.div`
    color: ${props => props.theme.theme_vars.colours.negative};
    font-weight: bold;
    border-radius: ${props => props.theme.theme_vars.border_radius};
    border: 3px solid ${props => props.theme.theme_vars.colours.negative};
    margin-bottom: 15px;
    padding: 15px;
`;

/**
 * Form element - a container with a line on the left
 */
var FormWithLine = function (_a) {
    var _b = _a.lineColour, lineColour = _b === void 0 ? "#C6C6C6" : _b, _c = _a.hideLine, hideLine = _c === void 0 ? false : _c, formRole = _a.formRole, formMethod = _a.formMethod, formURL = _a.formURL, _d = _a.isError, isError = _d === void 0 ? false : _d, errorSummary = _a.errorSummary, onSubmit = _a.onSubmit, children = _a.children;
    return (React__default.createElement(Container$i, null,
        React__default.createElement(Line$1, { lineColour: lineColour, hideLine: hideLine, isError: isError }),
        React__default.createElement(Form$1, { onSubmit: onSubmit, hideLine: hideLine, role: formRole, method: formMethod, url: formURL },
            errorSummary && React__default.createElement(ErrorSummary, null, errorSummary),
            children)));
};

const StyledInput = styled__default.input`
    ${props => props.theme.fontStyles}
    margin-top: 0 !important;
    margin-bottom: 25px;
    padding: 5px;
    border: 2px solid ${props => props.isErrored ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.black};
    border-width: ${props => props.isErrored ? "3px" : "2px"};
    border-radius: ${props => props.theme.theme_vars.border_radius};
    display: block;

    &:focus {
        outline: none;
        box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }
`;
const ErrorText = styled__default.p`
    color: ${props => props.theme.theme_vars.colours.negative};
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.1;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 18px;
        font-size: 1rem;
        line-height: 1.25;
    }
`;

/**
 * Primary UI component for user interaction
 */
var Input$1 = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.placeholder, placeholder = _c === void 0 ? "" : _c, _d = _a.isErrored, isErrored = _d === void 0 ? false : _d, errorText = _a.errorText, name = _a.name;
    return (React__default.createElement(React__default.Fragment, null,
        errorText && React__default.createElement(ErrorText, null, errorText),
        React__default.createElement(StyledInput, { type: type, placeholder: isErrored ? "Enter a postcode" : placeholder, name: name, isErrored: isErrored })));
};

const Spinner = styled__default.div`  
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${props => props.theme.theme_vars.colours.action};
    border-color: ${props => props.theme.theme_vars.colours.action} transparent ${props => props.theme.theme_vars.colours.action} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;

var LoadingSpinner = function () {
    return React__default.createElement(Spinner, null);
};

const PostCodeSearchApiUrl = `https://api.westnorthants.digital/check-postcode/`;

/**
 * The functionality for searching for a postcode
 */
var PostCodeSearch = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Enter your postcode to find your area" : _b, _c = _a.formError, formError = _c === void 0 ? false : _c, otherCouncilLink = _a.otherCouncilLink, signPostLinks = _a.signPostLinks, _d = _a.isUnitary, isUnitary = _d === void 0 ? false : _d;
    var themeContext = React.useContext(styled.ThemeContext);
    var _e = React.useState(false), open = _e[0], setOpen = _e[1];
    var _f = React.useState(false), isLoading = _f[0], setIsLoading = _f[1];
    var _g = React.useState(formError), isError = _g[0], setisError = _g[1];
    var _h = React.useState(""), errorText = _h[0], setErrorText = _h[1];
    var _j = React.useState(""), currentPostcode = _j[0], setCurrentPostcode = _j[1];
    var _k = React.useState(false), isMultiple = _k[0], setIsMultiple = _k[1];
    var _l = React.useState([]), addressArray = _l[0], setAddressArray = _l[1];
    var defaultArray = {
        numOfSovereign: 0,
        sovereign: [{
                sovereignName: "",
                sovereignCode: 0
            }],
        numOfUnitary: 0,
        unitary: [{
                unitary: "",
                unitaryCode: 0
            }],
        addresses: []
    };
    var _m = React.useState(defaultArray), responseData = _m[0], setResponseData = _m[1];
    var clearData = function () {
        setResponseData(defaultArray);
        setCurrentPostcode("");
        setAddressArray([]);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        setCurrentPostcode(e.target.postcode.value);
        if (e.target.postcode.value === "") {
            setIsLoading(true);
            handleError(true, "You need to enter a postcode");
        }
        else {
            checkPostcode(e.target.postcode.value);
        }
    };
    var checkPostcode = function (postcode) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            axios$1({
                method: "GET",
                url: "" + PostCodeSearchApiUrl + postcode.replace(/ /g, '')
                // headers: { 'x-api-key': `${PostCodeSearchApiKey}` }
            })
                .then(function (response) {
                setIsLoading(false);
                if (response.data.numOfUnitary > 0) {
                    setResponseData(response.data);
                }
                else {
                    // console.log(response)
                    handleError(true);
                }
            })
                .catch(function (error) {
                setIsLoading(false);
                handleError(true);
                console.log(error);
            });
            return [2 /*return*/];
        });
    }); };
    var handleError = function (error, errorMsg) {
        if (errorMsg === void 0) { errorMsg = "There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new post codes."; }
        setErrorText(errorMsg);
        setisError(error);
    };
    React.useEffect(function () {
        if (responseData.numOfUnitary > 0) {
            if (isError) {
                handleError(false, "");
            }
            if (responseData.numOfUnitary > 1) {
                setIsMultiple(true);
                responseData.addresses.map(function (address) {
                    setAddressArray(function (addressArray) { return __spreadArrays(addressArray, [{
                            title: address.DPA.ADDRESS.split(',')[0].toLowerCase().replace(/\w\S*/g, function (w) { return (w.replace(/^\w/, function (c) { return c.toUpperCase(); })); }) + ", " + address.DPA.ADDRESS.split(',')[1].toLowerCase().replace(/\w\S*/g, function (w) { return (w.replace(/^\w/, function (c) { return c.toUpperCase(); })); }),
                            value: address.DPA.UPRN,
                            info: [{
                                    numOfSovereign: 1,
                                    sovereign: [{
                                            sovereignName: address.DPA.SOVEREIGN_COUNCIL_NAME,
                                            sovereignCode: address.DPA.SOVEREIGN_COUNCIL_CODE,
                                        }],
                                    numOfUnitary: 1,
                                    unitary: [{
                                            unitary: address.DPA.UNITARY_COUNCIL_NAME,
                                            unitaryCode: address.DPA.UNITARY_COUNCIL_CODE
                                        }],
                                    addresses: []
                                }]
                        }]); });
                });
            }
        }
    }, [responseData]);
    function handleAddressChange(e) {
        if (e.target.value !== "") {
            var singleAddress = addressArray.find(function (address) { return address.value === e.target.value; });
            setIsMultiple(false);
            setResponseData(singleAddress.info[0]);
            setCurrentPostcode(currentPostcode + " (" + singleAddress.title + ")");
        }
    }
    return (React__default.createElement(Container$h, null,
        React__default.createElement(DropDownButton, { onClick: function () { return setOpen(open ? false : true); } },
            React__default.createElement(IconWrapper$2, null,
                React__default.createElement(ChevronIcon, { direction: open ? "down" : "right", colourFill: themeContext.theme_vars.colours.black })),
            title),
        open &&
            React__default.createElement(DropDownContent, null, responseData.numOfUnitary === 0 ?
                React__default.createElement(FormWithLine, { onSubmit: function (e) { handleSubmit(e); }, isError: isError, lineColour: themeContext.theme_vars.colours.grey_dark }, isLoading ?
                    React__default.createElement(LoadingContainer, null,
                        React__default.createElement(LoadingSpinner, null),
                        React__default.createElement("p", null, "Loading..."))
                    :
                        React__default.createElement(React__default.Fragment, null,
                            React__default.createElement(Label$2, { htmlFor: "postcode" },
                                "Enter your postcode",
                                React__default.createElement(HintText$1, { text: themeContext.cardinal_name === "north" ? "For example NN16 0AP" : "For example NN1 1DE" }),
                                React__default.createElement(Input$1, { type: "text", placeholder: "Search", name: "postcode", errorText: errorText, isErrored: isError })),
                            React__default.createElement(FormButton, { type: "submit", "aria-label": "Submit", text: "Find" })))
                :
                    React__default.createElement(PostcodeResult, null,
                        React__default.createElement(Line, null),
                        isMultiple ?
                            React__default.createElement("div", { className: "result" },
                                React__default.createElement("p", null,
                                    "This postcode ",
                                    React__default.createElement("strong", null, currentPostcode),
                                    " includes addresses that are in multiple areas, please select your address so that we can tell you which area you are in."),
                                React__default.createElement(DropDownSelect, { onChange: handleAddressChange, id: "address", label: "Select your address", options: __spreadArrays([{ title: "Select an address to continue", value: "" }], addressArray) }))
                            :
                                isUnitary ?
                                    React__default.createElement("div", { className: "result" },
                                        React__default.createElement("p", null,
                                            "This postcode ",
                                            React__default.createElement("strong", null, currentPostcode),
                                            " is in ",
                                            React__default.createElement("strong", null,
                                                responseData.unitary[0].unitary,
                                                " Northamptonshire"),
                                            ", in the ",
                                            React__default.createElement("strong", null, responseData.sovereign[0].sovereignName),
                                            " area."),
                                        themeContext.theme_vars.cardinal_name !== responseData.unitary[0].unitary.toLowerCase() ?
                                            React__default.createElement("p", null,
                                                "In order to find the right information for you, please visit the ",
                                                React__default.createElement("a", { href: themeContext.theme_vars.other_council_link, title: "Go to the other council" },
                                                    responseData.unitary[0].unitary,
                                                    " Northamptonshire website."))
                                            :
                                                React__default.createElement("p", null,
                                                    "You are on the ",
                                                    React__default.createElement("strong", null, "correct website for this postcode"),
                                                    "."),
                                        React__default.createElement(StartAgain, { onClick: function () { return clearData(); } }, "Check another postcode"))
                                    :
                                        themeContext.theme_vars.cardinal_name !== responseData.unitary[0].unitary.toLowerCase() ?
                                            React__default.createElement("div", { className: "result" },
                                                React__default.createElement("p", null,
                                                    "This postcode ",
                                                    React__default.createElement("strong", null, currentPostcode),
                                                    " is in ",
                                                    React__default.createElement("strong", null,
                                                        responseData.unitary[0].unitary,
                                                        " Northamptonshire"),
                                                    ", in the ",
                                                    React__default.createElement("strong", null, responseData.sovereign[0].sovereignName),
                                                    " area."),
                                                React__default.createElement("p", null,
                                                    "In order to find the right information for you, please visit the ",
                                                    responseData.unitary[0].unitary,
                                                    " Northamptonshire website and find your local area (",
                                                    responseData.sovereign[0].sovereignName,
                                                    ") for this service."),
                                                React__default.createElement(Button, { size: "large", colourOverride: themeContext.theme_vars.other_council_action, text: "Go to " + (responseData.unitary[0].unitary) + " Northamptonshire's website", url: otherCouncilLink, isExternal: true }),
                                                React__default.createElement("br", null),
                                                React__default.createElement(StartAgain, { onClick: function () { return clearData(); } }, "Check another postcode"))
                                            :
                                                React__default.createElement("div", { className: "result" },
                                                    React__default.createElement("p", null,
                                                        "The postcode ",
                                                        React__default.createElement("strong", null, currentPostcode),
                                                        " is in the ",
                                                        React__default.createElement("strong", null, responseData.sovereign[0].sovereignName),
                                                        " area."),
                                                    signPostLinks.find(function (link) { return link.sovereignCode === responseData.sovereign[0].sovereignCode; }) &&
                                                        React__default.createElement(Button, { size: "large", text: "Go to " + responseData.sovereign[0].sovereignName, url: signPostLinks.find(function (link) { return link.sovereignCode === responseData.sovereign[0].sovereignCode; }).url }),
                                                    React__default.createElement("br", null),
                                                    React__default.createElement(StartAgain, { onClick: function () { return clearData(); } }, "Check another postcode"))))));
};

function Icon$5() {
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "322", height: "353", fill: "none", viewBox: "0 0 322 353" },
        React__default.createElement("path", { fill: "#017F34", d: "M199.63 91.333h-.328v.274h-.164l-.164.274-.164.276h-.164v.274h-.164l-.162.274h-.656v.275h-.329l-.82.55-.492.273-.983.275h-.164v-.275h-.164v-.274l-.164-.275-.164-.275h-.164v-.274l-.82.275-.328.273h-.655l-.656.276h-.164l-.492-.275-.164.275H189.63V91.881l-.164-.548v-.55h-.164v-.274h-.164v-1.098l-.164-.548h-.164v-.55l-.164-.274v-.548h-1.803l-.164.274h-.656l-.164-.274h-2.296l-.164-.276h-.328v-.274H182.253l-.164-.274h-1.149l-.328-.274H179.466v-.276l.164-.274h-.164v-.55h-.164l-.164-.548-.329-.274v-.275l-.164-.275h-.164l-.164-.274-.164.274h-.654l-.164-.274h-.164l-.164-.275h-.164v-.274h-.165v-.275l.329-.274.328-.275.164-.274.162-.276.166-.274-.166-.274-.162-.274.162-.276h-.162l-.328-.274v-.274h-.164l-.164-.274-.165-.274-.328-.276.164-.274-.164-.274.328-.276h.329v-.274l-.164-.274h-.165l.165-.274-.329-.276-.164-.274v-.274l-.492-.274h-.164v-.274h-.164v-.276h-.164V75.138l-.162-.276h-.166v-.274H173.071v-.274h-.162v-.274h-.166v-.276l-.162-.274h-.164v-.274h-.657v-.276h-.164l-.328-.274-.164-.275-.164-.274-.164-.274-.164-.276-.164-.274-.162-.274h-.164l-.164-.274-.165-.276-.328-.274h-.164v-.274h-.164l-.328-.824h-.164l.164-.274h.164l.164-.55h.164V68l.164-.274v-.548h.164l.493.274h.164v-1.098h.162v-.55h.164l.492.274h.164v-.274l.164-.274.328-.55.164-.274v-.274h.164l.165-.274v.548H173.399l.164.274h.164l.164.276h.328v.274h.493v-.274h-.164v-.55h.164l.164.274h-.164.326v-.274h-.162.162l.166-.274h.162v.274h.328l.164-.274.164-.274h.328l-.164-.274h.164l.164-.276h.164l.165.276h.164v-.55H177.989l-.162.274h.162l.164-.274v.274h.328v-.274h.328v.274h.164v.276h.165v.274h.164v.274h.492l.164.274h.326v.274h.328l.164.276h.328v.548h.164l.165-.274h.656l.328-.274h.328l.162.274v.274l.164.274.164.276h.164v.274h.164v.274H184.384v-.274h.164v-.274H185.694v-.276l-.164-.274h.329v-.274h.328v-.55h.164v.276h.328v-.276h.164v-.548l-.164-.274h.164v-.274h.328v.274H188.154v-.274h.492l.164-.276h.492v-.548l.654-.55h.328l.329-.275h.328v-.273h.492l.328-.275v.275h.164v-.275h.164l-.164.275h.328v-.275h-.164v-.276h.164v-.274h.491l.328-.274h.656l.164.274H194.712l.164-.274h1.311v.274h.164v-.274h.164v-.274h.164v-.276h.328v-.548l.164-.274h.328v-.274h.327l.164-.276v-.274h.164v-.274h.492v-.55h-.164.164-.164l-.164-.274v-.274h.656v-.276h-.164v-.274.274l.164-.274h.164v.274h.164v-.274h.164-.164.491-.163v-.274h.163l.166-.274h.326v-.274l-.164-.276h.492v-.548h.328v-.274h.164v-.276h-.164V54h.164-.164v-.274h-.328v-.276H201.433v-.548h.164l.164.274h.328v-.274l-.164-.274h-.328.164v-.276h.493l-.165-.274h-.164l-.328-.275-.164-.273v-.275h-.164l.164-.276h.328l.164.276h.164v-.276h-.164v-.274h-.164v-.274h.164v-.275h.164-.164l-.164-.275v-.274h-.164l.164-.274h.164v-.274h.329v.274h.326l.164.274h.164l.164-.274v-.274h-.164.164l.164-.276.164.276v.548l.164-.274h.492l.164-.274h.329v.274-.55h.328l-.166-.274h.166v-.274h.326v-.274h.164l.164-.276h.164-.328l-.164-.274h.164v-.274h.164l.328-.824.164-.274.492.274.165-.274h.164l.164-.274.164-.274h-.821l.164-.276.493-.822.49-.55.164-.274.164-.274v-.276H208.81l.165.276.164.274.328.274.328.55.162.274 1.477 1.372-.164.274-.165.274v.55l-.164.274V48.235l-.164.274v.274l-.164.55h-.164v.274h-.164v.274h.164l.164.275h.164l.164.275h.329l.164-.275h.492l.164.275h.328l.162.274h.656l.164.275h.165v.549h.164l.164.274H215.039v.275h.164l.164.274h.164l.165.276h.328l.328.274.164.274.328.274h.326v.276h.166l.162.274h.657l.164.274v.274h.164l.164.276.164.274h.164l.164.274h.164l.164.274h.164v.276h-.164l-.164.548v.274h-.164l-.164.274v.276l.164.274.164.274h-.492l.164.274.328.55.328.548.162.276h.166v.274h.162v.274l.165.274v.55h-.165l-.162.274h-.166l-.162.274h-.164l-.328.276h-.164l-.164.275h-.492v.273H217.498v.275h-.654l-.164.276h-.656l-.164.274h-.329v-.274h-.164v.274l-.164-.274H212.254v.274h-.492l-.164.274h-.164l-.164.274-.165.276h-.164l-.328.274v.274h-.164v.274l-.162.274-.166.276h-.326v.274H208.975l-.165.274h-.164v.274l.164.276v1.098h.165v.548l.164.274.164.276v.274h.164v.274h.164v-.274h.49v-.274h1.149v-.276h1.474V68h.328l.164-.274h.329v-.274h.164v-.55h.164v-.274h.328l.164-.274h.49l.164-.276h.164l.164-.274h.164v-.274h.493l.164-.274h1.474v-.276h.657l.164-.274v.274H219.467l.164-.274h.162l.164-.274h1.149l.164.274v-.274h.164v.274h.164v.55l.164.274v.274l.164.274v.276l.162.274h.493v-.274h.328v-.276H223.893v.55H224.876v-.274h.492l.328-.276h.164l.164-.274h.492l.164-.274H227.663v.274h.328l.164-.274H229.139v-.274h.655v.274h.492v.274h.328v.274h.492v.276h.328v-.276l.164.276h.163-.163v.274h.163l-.163.274h-.328v.55H230.286v.274h-1.147v-.274h-.164v.274l-.164-.274v.274h-.328l-.164.274v.274h.164v.276h.164V69.371h.164v.276h.328v.274l.164.274.163.274.328.276v.274h.164l.164.274v.274h.492l.164.276h.164v.548h.164v.275l.164.274v.276l.164.274v.274h.164v.276h.655-.164v.274l-.163.274V75.686l-.165.274V76.784h-.163l-.164.548v.276l-.164.274v.274h-.164v.274h-.164l-.164.276v.274h-.328l-.492.274-1.147.276H227.991v.274h-.656v.274l.164.274h-.328l-.493.274h-.328v.276H225.532l-.164.274h-.821l-.164.274h-.328l-.162.274h-.164V82h-.328v.274h-.164l-.164.275h-.328v.273h-.164v.276h-.165v.549l-.164.274-.164.275-.164.275v.274h-.162l-.164.274h-.164v.55h-.164v.274l-.164.274v.55h-.164v.274h-.164v.274h-.164v.55h-.164.164l.328.274.164.274v.274h.164V89.411h.164v.274h.164v.276l-.164.274-.164.274h-.164l-.164.274h-.492l-.164-.274h-.493v-.274h-.164v-.274h-.162l-.328-.276h-.328l-.328.276-.164.274v.274h-.328l-.165.274h-.656l-.164.276h-.654v.274l-.328.274h-.164l-.164.274h-.165l-.164.276h-.656l-.328.274h-.654l-.164.274h-.165v.275h-.328v.275h-.164l-.164.274-.164.275h-.164l-.164.274h-.164v.275l-.164.275v.548h-1.639l-.164-.274h-.164.164v-.275l.164-.273V93.528h-.328v-.274h-.164v-.55h-.164v-.274l-.164-.274v-.276l-.164-.274h.328l.164-.274h.492v-.55h-.164v-.274h-.164l-.164.274H208.81l-.164.276h-.328l-.164.274v.274h-1.148v-.274h-1.147.164l.492-.274v-.276h.983l.492-.274h.328l.164-.274h.493v-.274h.328v-.276h-.164l-.164-.274h-.329v-.274h-.164l-.164-.274h-.164.164v-.276l.164-.274h.491v-.274h.656v-.548h-.164v-.276h-.164v-.274h-.162v-.274h-.166v-.274h-.491v-.276l-.328-.274h-.164v-.274h.164v-.276h.328v-.274h.328-.164l-.328-.274h-.164l-.328-.274-.328-.275h-.492v-.275h-.491v-.274h-.656v-.275h-.164l-.328.549h-.164l-.164.275h-.164l-.164-.275-.164.275-.328.549-.164-.274h-.491l-.164-.275h-.328l-.164.549-.164.548-.164.55v.274l-.164.276-.164.548v.274l-.164.276-.164.274-.327.822-.166.274-.162.276h-.164v.274h-.164l-.164.274-.164.276-.164.274-.164.274-.328.274-.328.276.001.274z" }),
        React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M207.648 42.84h1.264l.215.363.149.248.328.275.344.576.149.252 1.563 1.453-.238.398-.139.231v.55l-.164.274v.824l-.164.275v.25l-.209.702h-.119v.274h-.028l.115.193h.164l.165.276h.125l.164-.276h.695l.164.276h.328l.163.274h.655l.164.274h.241v.55h.087l.164.274h1.224v.274h.087l.164.274h.165l.164.276h.291l.401.334.164.275.255.213h.44v.276h.089l.163.274h.655l.241.403v.145h.088l.215.362.113.188h.164l.164.274h.164l.164.274h.241v.632h-.21l-.118.396v.426h-.241l-.087.145v.178l.464.775h-.492l.002.005h.001l.328.55.328.548v.001l.111.188h.242v.274h.162v.403l.164.274v.777h-.24l-.162.275h-.166l-.163.274h-.2l-.328.276h-.128l-.164.273h-.416v.275h-.82v.274h-.731l-.164.276h-.657l-.164.274h-.415v.465l-.443-.74h-2.67v.275h-.57l-.164.274h-.164l-.112.187-.215.363h-.201l-.215.179v.369h-.164v.145l-.187.316h-.001l-.217.363h-.249v.274h-.898l-.164.274h-.087v.047l.164.276v.97h.164v.676l.139.232.19.318v.145h.462v-.274h1.148v-.276h1.475v-.274h.405l.164-.274h.251v-.274h.165v-.55h.164v-.274h.405l.164-.274h.49l.164-.276h.164l.164-.274h.087v-.274h.57l.164-.274h1.397V64.8h.734l.443-.74v.74h.705l.164-.274h.162l.164-.274h1.756v.274h.164v.679l.164.274v.274l.164.274v.276l.086.145h.212v-.274h.329v-.276h1.34v.55h.626v-.274h.606l.328-.276h.128l.164-.274h.492l.164-.274h1.262v.274h.049l.164-.274h.907v-.274h1.011v.274h.492v.274h.328v.274h.464v-.47l.443.746h.061v.178h.016v.096h.297l-.373.63h-.252v.55h-.984v.274h-1.311v.466l-.279-.466h-.29l-.087.145v.047h.164v.276h.164v.822h.164v.276h.328v.403l.139.233.147.248.369.31v.178h.087l.241.403v.145h.415l.164.276h.241v.549h.164v.402l.164.275v.275l.164.275v.145h.164v.276h.477v.178h.014v.322l-.163.275v1.099l-.166.274v.952h-.207l-.119.396v.3l-.164.273v.403h-.164v.274h-.241l-.087.147v.403h-.46l-.473.263-1.191.287h-.663v.274h-.657v.047l.301.501h-.596l-.493.274h-.196v.276h-.895l-.165.274h-.82l-.164.274h-.327l-.163.274h-.087v.276h-.328v.274h-.241l-.165.275h-.251V83h-.164v.276h-.164v.42l-.189.316-.164.275v.001l-.139.232v.403h-.239l-.164.274h-.087v.55h-.164v.145l-.164.274v.679h-.164v.274h-.164v.274h-.165v.289l.288.24.205.342v.145h.164v.824h.164v.274h.164v.503l-.405.677h-.164l-.164.274h-.694l-.164-.274h-.57v-.274h-.164v-.274h-.049l-.328-.276h-.198l-.256.215-.124.206v.403h-.405l-.164.274h-.656l-.164.276h-.577v.18l-.442.368h-.128l-.164.274h-.163l-.165.276h-.692l-.329.274h-.618l-.164.274h-.087v.275h-.328v.275h-.241l-.328.548h-.164l-.164.275h-.087v.147l-.164.274v.677h-1.918l-.164-.274h-.063v-.178h-.014v-.324l.164-.274v-.597h-.328v-.274h-.164v-.55h-.164v-.402l-.164-.274v-.276l-.3-.502h.541l.164-.274h.415v-.194h-.164v-.082l-.049.082h-.982l-.164.276h-.329l-.087.145v.403h-1.504v-.274h-.969v-.356h.118l.36-.2v-.35h1.115l.492-.274h.273l.164-.274h.415v-.274h.194l-.116-.194h-.406v-.274h-.087l-.164-.274h-.063v-.178h-.014v-.325l.241-.403h.414v-.274h.656v-.192h-.164v-.276h-.164v-.274h-.163v-.274h-.165v-.274h-.491v-.37l-.214-.18h-.278v-.63h.164v-.276h.328v-.15l-.05-.042h-.164l-.657-.548h-.605v-.276h-.491v-.274h-.656v-.083l-.213.357h-.164l-.164.276h-.367l-.062-.106-.011.018-.482.804-.264-.442h-.491l-.164-.274h-.095l-.29.969-.156.525v.297l-.178.299-.15.502v.297l-.19.318-.156.262-.327.823-.172.284-.001.002-.213.362h-.088v.274h-.241l-.112.188-.164.275-.344.574-.351.293-.264.223.002.37h-.329v.273h-.241l-.112.187-.216.363h-.087v.274h-.241l-.162.274h-.58v.275h-.452l-.781.523-.517.288-1.026.287h-.367v-.275h-.164v-.403l-.139-.234-.112-.186h-.241v-.205l-.554.185-.352.293h-.683l-.656.276h-.247l-.381-.213-.127.213h-1.59v-1.8l-.164-.548v-.398h-.164v-.274h-.164v-1.25l-.119-.396h-.209v-.679l-.164-.274v-.42h-1.524l-.164.275h-.858l-.164-.274h-2.296l-.164-.276h-.405v-.274h-.741l-.164-.274h-1.112l-.328-.274h-1.26v-.503l.028-.047h-.028v-.55h-.119l-.187-.624-.351-.293v-.308l-.087-.147h-.164l-.063-.106-.063.106h-.856l-.164-.274h-.164l-.164-.275h-.242v-.273h-.164v-.538l.697-.582.148-.247.001-.001.161-.275.002-.002.11-.182-.11-.181-.001-.002-.216-.364.086-.146-.385-.322v-.179h-.087l-.365-.609-.421-.354.187-.313-.187-.313.493-.415h.216v-.047l-.087-.145h-.378l.248-.413-.235-.198-.205-.342v-.218l-.36-.201h-.296v-.274h-.164v-.276h-.164v-.952l-.086-.146h-.242v-.274h-1.967v-.274h-.162v-.274h-.166v-.406l-.086-.144h-.241v-.274h-.656v-.276h-.05l-.401-.335-.508-.848-.164-.276-.164-.274-.111-.188h-.163l-.216-.36-.149-.25-.255-.214h-.278V70.1h-.107l-.328-.824h-.357l.377-.63h.132l.164-.55h.119v-.145l.164-.274v-.677h.388l.433.24v-1.064h.162v-.55h.388l.432.24v-.111l.189-.317.328-.55.139-.231v-.403h.241l.443-.74v1.014h1.07l.164.274h.164l.164.276h.377v-.55h.443l.064.105v-.105h.061l.166-.274h.441v.274h.049l.328-.548h.115l-.164-.274h.377l.164-.276h.367l.049.082v-.356h1.223l.279-.466v.466h.656v.274h.164v.276h.164v.274h.164v.274h.416l.164.274h.403v.274h.251l.164.276h.405v.356l.05-.082h.692l.328-.274h.494l.239.403v.274l.139.232.112.189h.241v.274h.164v.274h.465v-.274h.164v-.274h1.146v-.049l-.3-.501h.464v-.274h.329v-.55h.656v-.321l-.3-.501h.3v-.274h.684v.274h.626v-.274h.569l.164-.276h.416v-.453l.767-.645h.329l.328-.274h.215v-.274h.605l.543-.454v-.096h.164v-.274h.604l.328-.275h.822l.164.275h.618l.164-.275h1.562v-.274h.164v-.275h.328v-.42l.241-.403h.251v-.274h.403l.088-.147v-.403h.164v-.274h.492v-.194h-.087l-.241-.403v-.5h.492v-.373h.135l.106-.178h.579v-.274h.24l.166-.274h.249v-.047l-.299-.503h.627v-.548h.328v-1.016h-.328v-.632h.82v-.548h.342v-.096h-.014v-.454h.18l-.303-.253-.205-.342v-.146h-.299l.376-.631h.251v-.548h.164v-.05l-.164-.273v-.146h-.3l.377-.63h.087v-.274h.684v.274h.25l.145.243.068-.114v-.225h.014v-.178h.063l.265-.446.342.575v.145h.377l.164-.274h.251v-.276h.191l-.166-.274h.304v-.274h.326v-.274h.193l-.329-.55h.3v-.274h.221l.289-.725.26-.434.492.274.127-.213h.165l.115-.192h-.82l.324-.545h.001l.5-.837.491-.55.294-.492v-.404zm-2.016 5.023l-.164.276h-.087v.274h-.326v.274h-.029l.166.274h-.466v.372h-.356v-.096h-.049l-.164.274h-.492l-.443.74v-.822l-.213.356h-.366l-.164-.274h-.54v.321l.087.145h.063v.179h.014v.646h.164v.631h-.443l-.164-.276h-.049v.323l.123.206.256.214h.2l.377.63h-.493l.193.322v.502h-.607l-.049-.083v.357h-.492v.742h.164v.632h-.164v.274h-.328v.548h-.357l.029.049v.501h-.404l-.166.274h-.085v.096h-.015v.178h-.313v.274h-.328v.276h-.406l-.114.19v-.19h-.136v.047l.087.145h.241v.906h-.492v.274h-.164v.145l-.241.405h-.25v.274h-.405l-.087.145v.677h-.328v.276h-.164v.274h-.164v.275h-.52v-.275h-1.032l-.164.275h-1.022l-.164-.275h-.491l-.328.275h-.377v.824h-.848v-.072l-.086.072h-.378v.274h-.442l-.328.274h-.328l-.541.455v.643h-.569l-.164.276h-.416v.274h-1.338l.028.047v.775h-.164v.276h-.493v.274h-.328v.274h-.192l.028.047v.503h-1.146v.274h-.164v.274h-1.177v-.274h-.164v-.274h-.087l-.215-.363h-.001l-.189-.316v-.274l-.086-.145h-.162l-.328.274h-.62l-.164.274h-.443v-.548h-.251l-.164-.276h-.405v-.274h-.249l-.164-.274h-.569v-.274h-.165v-.274h-.164v-.276h-1.28l.162-.274h-.493v.55h-.443l-.145-.244-.12.203.188.315h-.541l-.328.548h-.579v.274h-.327v.55h-.848v-.274h-.251l-.164-.276h-.164l-.164-.274h-1.224V64.8l-.161.27-.328.55-.139.231v.403h-.388l-.432-.24v.516h-.163v1.098h-.388l-.432-.24v.385l-.164.274v.403h-.209l-.164.55h-.144l.296.742h.221v.274h.051l.401.335.179.302.112.187h.165l.213.361h.001l.163.274.165.276.476.796.256.214h.277v.276h.656v.274h.088l.239.403v.147h.166v.274h.162v.274h1.967v.274h.089l.239.405v.693h.164v.276h.164v.274h.032l.624.347v.33l.124.206.421.354-.105.176.216.362v.501h-.441l-.162.137.141.235-.141.236.235.197.291.487h.242v.37l.214.178h.409l-.267.454.108.182.001.002.221.364-.221.365-.001.002-.161.274h-.001l-.179.3-.616.515v.014h.164v.275h.087l.164.274h.164l.165.274h.452l.265-.443.265.443h.164l.241.405v.24l.306.254.141.473h.21v.55h.3l-.3.501v.049h1.033l.328.274h1.185l.164.274h.895v.274h.252l.164.276h2.294l.164.274h.455l.164-.274h2.082v.677l.164.274v.421h.118l.21.7v.946h.164v.274h.164v.702l.164.548v1.496h1.031l.201-.338.603.338h.082l.656-.275h.626l.304-.255 1.087-.363v.344h.087l.216.36.189.319v.145h.164v.263l.901-.251.467-.26.859-.576h.204v-.275h.733l.162-.274h.088v-.274h.241l.112-.189.216-.36h.087v-.275h.327l-.001-.178.392-.33.305-.255.313-.522.164-.276.216-.36h.087v-.275h.24l.111-.188.001-.002.158-.261.326-.822.172-.286.139-.234v-.251l.177-.594.151-.253v-.251l.171-.575.366-1.223h.562l.164.274h.49l.063.105.176-.293.317-.533.246.414.145-.243h.164l.328-.548h.443v.274h.656v.274h.491v.276h.378l.657.548h.164l.328.274h.099v.356h-.15v.274h-.328v.276h-.015l.343.287v.18h.491v.275h.165v.274h.163v.274h.164v.276h.164v.904h-.656v.274h-.568l-.087.145v.178l.087.145h.241v.274h.251l.164.274h.242v.632h-.329v.274h-.569l-.164.274h-.383l-.492.274h-.851v.194h.491v.274h.792v-.145l.241-.403h.328l.164-.276h.983l.164-.274h.443v.274h.164v.906h-.569l-.164.274h-.115l.028.047v.276l.164.274v.145h.164v.55h.164v.275h.328v1.05l-.164.275v.175l.087.146h1.36v-.42l.164-.274V93.9h.241l.164-.274h.164l.328-.549h.087v-.275h.328v-.275h.242l.164-.274h.69l.328-.274h.62l.164-.275h.164l.165-.275h.2l.215-.179v-.369h.731l.164-.276h.656l.165-.274h.251v-.145l.204-.342.401-.337h.458l.328.276h.275v.274h.164v.274h.415l.164.274h.291l.164-.274h.164l.251-.42v-.048h-.164v-.274h-.164v-.824h-.164v-.403l-.124-.206-.255-.213h-.1v-.178h-.013v-.728h.164v-.274h.164v-.274h.164v-.421l.164-.274v-.403h.164v-.55h.241l.164-.274h.085v-.145l.189-.316h.001l.163-.276h.001l.138-.233v-.676h.164v-.276h.164v-.274h.406l.164-.274h.087v-.275h.328v-.276h.24l.163-.274h.328l.164-.274h.821l.164-.274h.741v-.276h.46l.492-.274h.061l-.028-.047v-.5h.656v-.275h.977l1.102-.265.512-.285h.196v-.145l.241-.405h.087v-.274h.164v-.145l.164-.274v-.253l.21-.7h.116v-.696l.166-.274V74.54l.163-.274v-.047h-.491v-.276h-.164v-.403l-.164-.274v-.276l-.164-.274v-.145h-.164v-.549h-.087l-.164-.275h-.569v-.403l-.087-.146h-.241v-.369l-.288-.242-.177-.3h-.001l-.189-.316v-.145h-.328v-.276h-.164v-.822h-.164v-.276h-.164v-.501l.241-.403h.251v-.74l.279.466h.405v.274h.791v-.274h.984v-.55h.328v-.192h-.492v-.276h-.492v-.274h-.328v-.274h-.492v-.274h-.299v.274h-1.061l-.164.274h-.607v-.274h-.704l-.164.274h-.492l-.164.274h-.2l-.329.276h-.379v.274h-1.338v-.55h-.629v.276h-.328v.274h-.771l-.239-.403v-.276l-.164-.274v-.274l-.164-.274v-.002l-.415-.693h-.947l-.164.274h-.162l-.164.274h-1.728v.276h-1.552l-.164.274h-.415v.274h-.241l-.164.274h-.164l-.164.276h-.49l-.164.274h-.251v.274h-.165v.55h-.164v.274h-.405l-.164.274h-.251v.274h-1.475v.276h-1.148v.274h-.49v.274h-.52v-.274h-.164v-.403l-.139-.233h-.001l-.189-.317v-.419h-.164v-1.227l-.164-.276v-.501h.241l.165-.274h.743v-.274h.403l.114-.189.137-.232v-.403h.164v-.18l.442-.368h.127l.112-.19h.001l.216-.36h.164l.164-.274h.415v-.274h3.633v.274h.05l.164-.274h.656l.164-.276h.577v-.274h.821v-.274h.569l.164-.275h.2l.328-.275h.128l.162-.274h.166l.162-.275h.087v-.322l-.164-.274v-.146h-.162v-.274h-.09l-.213-.362v-.002l-.328-.547-.328-.55-.325-.543h.492l-.192-.32v-.375l.241-.403h.087v-.122l.204-.682-.127-.212h-.164l-.164-.274h-.164l-.216-.361-.113-.19h-.24v-.402l-.087-.145h-.657l-.162-.274h-.243v-.276h-.213l-.401-.335-.164-.274-.255-.213h-.365l-.164-.276h-.164l-.164-.274h-.241v-.274h-1.069l-.164-.274h-.242v-.55h-.087l-.164-.275h-.656l-.163-.274h-.328l-.164-.276h-.289l-.164.276h-.531l-.164-.276h-.164l-.164-.274h-.241v-.63h.164v-.274h.21l.118-.398v-.297l.164-.274v-.824l.164-.274v-.55l.28-.467-1.39-1.291-.175-.296-.313-.524-.328-.274-.18-.3-.112-.19h-.705v.148l-.362.605-.49.55-.484.807-.004.007h.822l-.542.904h-.164l-.201.336-.492-.275-.068.114-.367.923h-.107v.192h.15v.356h-.063zm-3.808 4.943h-.077l.115.192h.049v-.047l-.087-.145z", clipRule: "evenodd" }),
        React__default.createElement("path", { fill: "#017F34", d: "M255.229 164.104v.274l-.164.274h.328l.164.276h.492l.164.274h.164l.164.274h.329l-.165.274-.328.276-.164.274-.164.275h-.164l-.164.275v.275l-.164.274h-.164l-.164.55-.492.548-.328.276-.491.822-.328.824-.164.276-.164.274h-.164l-.164.274-.164.274-.164.276h-.164l-.164.548-.657.824-.164.274-.164.276-.328.548-.162.276-.166.274-.326.548-.492.824h-.164l-.329.55h-.164v.274l-.164.274-.164.276-.164.274-.164.274v.55l.164.274.164.274h.164v.276h.164v.274h.164l.164.275.165.274v.275l.328.549h.164v.276h.164v.274h.326v.274l.166.276.162.274v.274l-.162.274v1.1l.162.548v.274l.164.276v.274l.164.274v1.098h.164l.164.276v.548h.164v.274h-.328l-.164.276-.328.274h-.162l-.166.274h-.326l-.164.276h-.164l-.164.274v.274h-.164v.274h-.329v.55l.164.274.165.55.164.274V192.386l-.164.274v.275h-.165v.549l-.164.275v.275l-.164.275v.274h-.164l-.164.274h-.164v.276H247.85l-.162-.276H245.719l-.164-.274h-.328l-.328-.274v-.275h-.163l-.328.275-.328.274-.164.274h-.164l-.164.276h-.328l-.164.274-.328.274h-.328l-.329.276-.328.274h-.328v.274l-.162-.274-.164-.274-.164-.276-.164-.274h-.164l-.164-.274-.329-.276-.328-.548-.164-.275-.164-.275-.164-.275-.164-.274-.164-.275v-.275l-.164-.274h-.164l-.164-.55-.328-.548-.162-.276-.165-.274-.164-.274-.164-.274-.164-.276-.328.276-.164.274-.164-.274h-.164l-.164-.276-.164-.274h-.164l-.164-.274-.164-.274-.163-.276h-.164v-.274l-.328-.274-.164-.276-.164-.274.164-.274.164-.55.164-.274h-.164l-.164-.274-.328-.276h-.164l-.328-.274h-.492v-.274h-.657l-.164-.274h-.164l-.162-.276h-.328l-.656-.548h-.164l-.164-.274h-.164l-.164-.276h-.329l-.164-.274H228.504l-.329-.274h-.328v-.276h-.164v-.274l-.492-.548h-.164l-.164-.276v-.274h-.164v-.274h-.164V180.305h-.162l-.329-.55-.164-.274h-.164l-.328-.276-.164-.274-.164-.274-.164-.274v-.276h-.164v-.274h-.164l-.164-.274h-.164l-.492-.276h-.164l-.165-.274h-.654l-.164-.274-.492-.276-.492-.548h-.328l-.329-.274-.328-.276-.328-.548h-.162v-.276h-.164v-.548h-.164l-.164-.55V171.793h.164v-.55h.164V170.419l-.164-.824-.164-.822v-.55l-.164-.55-.164-.823v-.824h-.164v-.274l-.165-.276-.164-.274v-.274l-.164-.276v-.274h.164l.164-.274v-.274l.165-.276v-.274l.164-.55v-.274l.328-.548v-.276l.164-.274v-.274l.164-.55v-.548l.164-.276.162-.822h.166v-.276l.162-.274V156.142l.164-.55.164-.274v-.55l.164-.274h.329l.164-.274.164-.276.164-.274.164-.275h.164l.164-.274.492-.276.49-.274.165-.274h.164l.328-.276.164-.274h-.164l-.164-.274h-.328l-.327-.55h-.166l-.162-.274.162-.274.166-.55h.162v-.274h.165v-.55h.164v-.548l.164-.824v-.274l.164-.276v-.274l.164-.274v-.274l-.328-.276-.493-.274-.328-.274v-.276h-.162l-.164-.274-.492-.548.164-.276.328-.548.164-.274h-.164l-.164-.276-.328-.274-.656-.55h-.164l.164-.274.164-.274.164-.274h.164v-.276h.656l-.164-.274-.164-.275.164-.275.328-.275.328-.274h.162l.165-.274h.164l.164-.276.328-.274h.164l.164-.274.164-.55V137.194h.164v-.274l-.328-.548v-.276l-.328-.548h-.164l-.164-.276v-1.098l-.164-.274V132.252v.276-.276h-.657v-.274h-.162v-.274h-.328.164-.164l.164-.276h-.164.164v-.274h.164l.162-.274v-.274h.164l-.164-.276v-.548l-.162-.276h.162v-.548h.164v-.274h.164v-.55h.165v-.55l.164-.274v-.549h.164v-.275l.164-.275v-.274h.164v-.55h.164v-.274l.164-.276h.164v-.274l.164-.274.656-.55v-.274h.162l.329-.55h.164v-.274h-.164l-.491-.274.328-.274v-.276h.163l.164-.274-.819-.548-.984-.824h-.164l-.328-.276-.328-.274h.164V118.797l.164-.274.164-.274h.492v.274h.164v-.274h.164V117.425h-.164V116.601h.656v.274-.274h.164v-.274h.327v-.276h-.165v-1.372l.165-.549v-.275h.492l.164-.274.492-.825h-2.131V111.932h.164v-.274h-.164v-1.372l-.164-.276h-.164l-.164-.274-.328-.274h-.164l-.164-.276-.164-.274h-.165l-.164-.274h-.164l-.164-.274-.162-.276-.164-.274v-1.098l.164-.274v-.55l.162-.274v-.274l-.162-.276h-.984l-.164.276h-.164l-.164.274-.329.274h-.492v-.274h-.328l-.164-.274h-.656l-.162-.276H218.337l-.164-.274h-.328l-.164-.274h-.164l-.164-.276h-.492l-.163.276h-.328v.274h-.492l-.164.274h-.328v.276h-1.967v-.55h.164v-.274h-.164v-.276h-.164V103.422h-.164V101.5h.164v-.55l-.164-.274V99.577h.328v-.275h.326l.328-.275h.165v-.274h.328l.164-.275-.164-.275-.328-.274-.329-.274-.326-.276v-.274h-.164l-.328-.548h-.164l-.328-.55-.164-.274-.328-.276-.329-.274h.165v-.55l.164-.274v-.274h.164l.164-.274h.164l.164-.276.164-.274h.164v-.274h.328v-.276h.162l.164-.274h.657l.328-.274h.656l.164-.274h.164l.164-.276h.164l.328-.274v-.274h.655l.164-.276h.656l.164-.274h.328v-.274l.164-.274.328-.276h.329l.328.276h.164v.274h.162v.274h.492l.164.274h.492l.164-.274h.165l.164-.274.164-.274v-.276h-.164v-.274h-.164V88.593h-.165v-.274l-.164-.274-.328-.276h-.164.164v-.549h.164v-.275h.164v-.274h.164v-.549l.165-.275v-.274h.164v-.551h.164l.164-.274h.164v-.274l.164-.274.164-.276.162-.274v-.548h.166v-.276h.162v-.274h.328l.164-.274h.164v-.276h.329v-.274h.164l.164-.274h.328l.164-.274H225.388l.162-.276H226.371v-.274h.328l.492-.274h.328l-.164-.276v-.274h.656v-.274h.819l.328-.274h.82l.492-.276h.329v-.274l.164-.274h.164v-.276h.164v-.274l.164-.274v-.274l.164-.55h.164V75.962l.162-.274V74.59l.164-.276v-.274h.164-.654v-.274h-.164v-.275l-.164-.275v-.274l-.164-.274v-.277h-.164v-.548h-.164l-.165-.276h-.492v-.274l-.164-.274h-.164v-.274l-.328-.276-.164-.274-.164-.274v-.276h-.328v-.274h-.162V68.547h-.164v-.274h-.165V68l.165-.274h.326v-.276l.164.276v-.276h.164v.276H230.306v-.276H231.291v-.548h.328l.164-.276h-.164v-.274h.164-.164l-.164-.274v.274h-.328v-.274h-.493v-.276h-.328v-.274h-.492v-.274h-.656v.274H228.175l-.164.274h-.328v-.274h-.984l-.164.274h-.492l-.163.276h-.166l-.326.274h-.492v.274H223.912v-.548H222.927v.274h-.326v.274h-.492l-.164-.274v-.274l-.164-.276v-.274l-.164-.274v-.55h-.164v-.274h-.164v.274l-.165-.274H219.978l-.166.274h-.162l-.164.276H218.501v-.276l-.164.276h-.656v.274H216.206l-.164.274h-.492v.274h-.164l-.164.276h-.164l-.164.274h-.492l-.163.274h-.33v.276h-.162v.548h-.164v.276h-.328l-.164.274h-.328v.274H211.288v.274H210.14v.276h-.492v.274h-.165v-.274h-.164v-.276l-.164-.274-.164-.274v-.55h-.164v-1.098l-.162-.274v-.276h.162l.164-.274H209.812v-.274h.328l.164-.274.164-.276v-.274h.164v-.274l.328-.274h.164l.164-.276.164-.274h.162l.166-.274h.491v-.276h2.951l.164.276v-.276h.164v.276h.328l.164-.276h.656l.165-.274h.654v-.274H218.337v-.274h.492l.164-.276h.165l.328-.274h.164l.164-.274h.164l.164-.276h.162v-.548l-.162-.275v-.275h-.164v-.275h-.164l-.164-.273-.328-.55-.329-.549-.164-.275h.493l-.164-.275-.165-.274v-.274l.165-.276h.164v-.274l.164-.55h.164v-.274h-.164l-.164-.274h-.164l-.165-.274h-.164l-.164-.276-.164-.274h-.164v-.274l-.164-.276h-.656l-.162-.274h-.164v-.274h-.328l-.329-.274-.164-.276-.328-.274h-.328l-.164-.274h-.164l-.164-.274h-.164v-.276h-1.149l-.162-.274h-.164v-.55h-.164l-.164-.274h-.656l-.164-.274h-.328l-.164-.276h-.493l-.162.276h-.328l-.164-.276h-.164l-.164-.274h-.164v-.274h.164v-.274h.164l.164-.55v-.274l.164-.274V47.406l.162-.276v-.549l.166-.274.162-.275-1.474-1.373-.164-.274-.329-.55-.328-.274-.164-.274-.164-.276h-.164v-.274l.164-.274.164.274h.328l-.164-.274h.164l-.164-.274.164-.276-.328.276v-.55h.164v-.274h.328v-.276h.165v-.274h.328v.274-.274h-.164.164v-.274h-.164v.274h-.164v-.274.274h-.165v-.274h.165v-.274h.164-.164l.164-.276h.164v.276h.164l.164-.276h-.164.164v-.274h.164v-.274h.49v-.276h.164v-.274H212.107v-.274l.164-.274h.164l.164-.276v-.274h.492l.492.274.164-.274.491-.274.164-.274.328-.276h.164v.276H215.878v-.276h.492l.164-.274h.164v-.274l.163-.276v-.274h-.163.327v-.274h-.164v-.274H218.009v.274-.274h.328v.274h.164v.274-.274h.164v.548h.164v.276h.164v-.276l.165.276h.492l.162-.276h.164v-.274h.328l.164-.274h.328l.164-.274h.164l-.164-.276h.164v-.274h.165V34.5h-.329.164v-.276.276-.276h.165v-.274h.492l.164.274.164-.274h.654v-.275l-.162-.273h.162v-.276h.656v-.275h.165-.165v-.274h.657l.164-.274H225.06l.162-.276v-.274h.166v-.274h.491v-.276h-.165l.165-.274h.164v.274-.274h.164-.164v-.274h-.164v-.274h.656l.164-.276H227.519v-.274l.164.274h.328v-.274h.491l.164-.274h.164v-.276h.164v-.274h.492l.164-.274v-.274h-.164.328v-.276h.328v-.274h.328v-.274h.164v.274h.165l.164-.274h.328v.274h.162l.164-.274h.164v.274H232.929l.165.274h.164v.276H234.078l.162.274h.328l.164-.274h.328l.164-.276h.165v-.274h.164v-.274l.164-.276h.164v-.274l.164-.274v-.274l.164-.276V25.44h-.492v-.276h.164v-.548h.492v-.276l.328-.274h.164l.328.274h.164l.162.276.165.274v.274l.164.276v.548h-.164v.55h-.327v.548h.162l.165-.274v.274h-.165v.274h-.162.162v.55l.165.274h.492v.276h-.164v.274h.164l.328.274h.656v.274H239.98v-.274h.164l.163.274h.328v-.274H241.619l.164.274.164-.274h.493v-.274h.164l.164-.274v-.55l.164-.274V26.812h-.164v-.274h.164-.164v-.55h-.164.164v-.274h.164v-.274h.162l.166-.276h.162v-.274H245.719l.164.274h.654l.164.276h.329v.274h.328l.164-.274h.164v.274h.164l.164-.274.164-.276.164-.274v-.55h-.164v-.274h-.492v-.274h-.164l-.164-.274h-.164l-.164-.276h-.165l-.164-.274h-.326v-.55h-.492l-.164-.274h-.328v-.274h-.164v-.55h.164v-.274h.164v-.548l.164-.276v-.274h.164v-.275h.164l.162-.275v-.274h.166l.162-.275h.328v-.55l-.164-.274h-.164l.164-.274v-.276h-.164v-.548h-.162v-.55h-.328v-.548h.162l.166-.274h.326l.164-.276.329-.274h.328l.164-.274v-.276h.164v.276h.328v-.276h.164v-.274h-.164v-.274h.492v-.274l.164-.276h.491v-.274h.164v-.55h-.164v-.548l.164-.274h.164V10.887h-.164v-.276h-.164v-.274h-.329v-.548h-.162v-.276l.162-.274v-.274h.329V8.69h.164l.164-.276V8.14h.328v.55h-.164v.274h.328l.328-.55.164-.274h.164v-.274h-.164l.164-.276h.164-.164l-.164-.274h-.164v-.274h.164v-.275h.328v-.275l.164-.275.328-.274h1.147v-.276h.328l.164-.274h.164l.164-.274.164-.274h.164l.164-.276h.164v-.274h.165l.164-.274.164-.274h.164v-.276h.162V2.374h-.162V2.1h.162v-.274l-.162-.276h.162l.166-.274h.49l.164-.274h.164V.728h.164l.164.274h.164l.165-.274V.452h.492v.276h.164l.164-.276h.164V.178h.164v.274h.164V.178h.162v.274h.328v.276h-.164.328v.274h.165v.274h.328v.274h.328l.164.276h.492l.164.274v-.274h.654V2.1h.493v.274h.328V2.1h.328v-.274H262.77V2.1l.164-.274.164.274v.548h.164v.55h.164v.274h.163v.276h.164v.274h.164v.274l.164.274v.276h.164v.274h.164v.274h.164v.274h.328v-.274h.164V5.12h.164v-.274h.164v.548h.164v.274l.821.276h.164v.274h.654l.164.275h.656l.165.275v.275l.164.274.164.274h.328l.164.276h.164l.164.548v.276h.162v.548l.166.274v.276h.162v1.646h-.328l.166.276v.548l.162.55v.274l-.49.274-.656.276.164.274.164.548v.276h-1.805V17.201l-.164 1.374v.549l-.164.55v1.097H265.886l-.165.275h-.328l.164.274V22.144h-.164v.55l-.328.274-.328.55-.164.274-.164.274V24.89l-.164.274v.276h-.164v1.098l-.164.274-.164.274h-.655l-.164.274h-.164v.55h-.328l-.328.55-.328.274.164.274.328.274.82 1.374.164.274v.274h.164l.163.276h.164v.274h.492l.328.274h.656l.328.276.657.274.164.274.492.275.326.276h.328-.328v.273h-.326l-.166.275.166.274h.162v.55h.164l.164.55h.328l.328-.276h1.149l.492-.274H270.64l.328-.274h.656l.328-.276H272.936l.327-.274h.164l.328-.275h.164l1.641-.55h.656l.326-.273h.492l.492-.275h.821l.328-.274.82-.276H280.478l.328-.274h.492l.164-.274h.328l.655-.276H283.265l.164-.274h.164l.164.274v.276h1.477l.164.274v.274h.162v.276h.328l.164.274.492.274V33.951h.164v.274l-.164.276V35.325h-.164v.274h.164v.274h.164v.55l-.164.274v.274h-.164v.276h.328v.274h.657l.164.274h.164v.274h.164l.164.276.164.274h.162l.166.274h.162v.274h.328v1.1h-.164v.548h-.164l-.162.274-.166.276h-1.639v-.276h-.492v.276h-.164v.548l-.162.276h-.166l-.164.274h-.162v.274h-.164l.164.274.162.276v.274h.164l.166.548.162.276h.164v.274l.164.275v1.374h.164v.273H287.365v.275h.328v.274l.164.276.164-.276.164.276h.654l.328.274H290.152l.164.274h.164v.276h.164l-.164.274v.548h-.164v.276h-.164v.274h-.164v1.372h.164v.276h.328V52.074l.164.274.164.274v.55l-.164.548v.55h-.164v.274l-.164.274v.276h-.164l-.164.274h-.164V56.192h-.492l-.165.274H288.347v.274h-.326v.276h-.164l-.164.274-.164.274v.275l-.164.275h-.164l-.165.274v1.098h.165v.275h.164l.164-.275h.164v.55l.164.275h.164l.164.274h.162v.274h.166v.276H289.332h-.165v.274H291.136v.274h.326l.165.276h.492l.164.274h.328l.164.274H293.923v.55h.164l.163.274h.328v.274h.164l.164.276h.328l-.328.274.164.274.164.274.492.276h.164v.274h.328v.274h.164l.165.274.328.276h.164l.164.274h.162v.274h.164l.164.276.164.274.164-.274h1.313l.164.274h.328l.164.274h.162l.166.276.162.274h.492l.329.274h.492l.164.274h.164l.328.276h.328l.328.274h.164l.163.274h.492v.276h.164v-.276h.656l-.164-.274h.328V69.921l.164.274h.164v.274h.164v.276h.164-.164l-.164.274v.274h-.328l-.164.276h-.164v.274h-.164v.275h-.164v.273h-.328.164l-.164.276h-.164v.275h.164l-.164.274h.164-.327v.276l-.165.274v.549h-.163v.275h.163v.548l.165.276h.163v.274l-.163.274h.163v.276h.164l-.164.274v.274l-.163.274h-.165l.165.276h-.328.163v.274h.328v.274l.164.276h-.164.164v.274h.164v.274h.164v.274h.164v.276h.164v.274h.164v.274l.164.274v-.274h.164v.274h.164v.276h.164l.164.274h.328v.274l.327.276v.548l-.162.274h.162-.162l.162.276v.274h.166v.274h.326v.276l.164.274V84.2h-.164v.274l-.164.274v.55l-.162.275h.162v.274h-.162l-.166.275h.166l.162.549.164.274h.328l.328.276.492.274h.164l.165.274.328.276h-.164v.274l.164.274v.274l.164.276h-.164l-.164.274h-.493l-.164.274h-.164l-.164.276-.164.274-.164.274-.164.276-.328.274h-.162v.274h-.166l-.162-.274-.165.274h-.164v.274l-.328.276-.164.274-.164.274v1.098h-.164v.276l-.164.274-.164.274-.328.55h-.164l-.164.274-.655.824-.164.274-.492.55h-.164l-.328.274.164.274v.274l.164.276h.164v.549l-.164.275h-.164l-.164.274.164.275-.164.275-.164.275h-.164l-.164.274-.328.274h-.164v.276h-.165v.274l-.164.274-.164.55-.162.274v.274h-.164v.276h-.164l.328.274-.164.55-.164.274-.328-.274v.274l-.164.274v.274l.328-.274.164.274v.276h.164v.548h.164l.162.276h.328v-.276h.329l.164.276.328.274h.328l.328.274h-.164l-.164.274h-.164v.276h-.164l-.328.274-.328.274H300.318v.276H299.498v.274h-.164l-.492.274h-.165l-.328.274-.328.276h-.328l-.164.274h-.164l-.49.548-.328.276-.493.274-.164.274-.328.276h-.164v.274h-.328l-.164.274v.274l-.164.276-.326.274h-.166l-.163.274-.164.276-.328.274-.164.274h-.492l-.164.275h-.328l-.164.275h-.328l-.164.275-.164.274-.329.275-.162.275v.274h-.166v.274h-.162l-.328.276-.492.274h-.164l-.328.274h-.493l-.164.276h-.492l-.164.274h-1.147l-.164.274h-.164l-.656.274v.55l-.328.55v.274l-.164.274-.164.55h-.164v.548l-.164.276v.274h.164l.328.274h.328v.276h.492v.274h-.328l-.492.548-.492.55h-.164l-.328.274h.166l-.329.276-.656.274-.328.274-.328.274-.656.276-.164.274h-.329l-.328.548h-.328v.276l-.162.548-.164.276-.164.823-.164.275-.164.549v.274l-.164.276v.274l-.164.274-.164.276v.274h-.165l-.492.55-.328.274v.274l-.328.274-.328.276h-.164l-.162.274h-.328l-.329.274h-.328l-.164-.274h-.492l-.164-.274-.328-.276h-.164l-.492-.274h-.329l-.162-.274v.548l-.656.276v1.098l-.328-.276h-.656l-.164-.274h-.493v.274h-.162l-.166.276h-.162v.274l-1.312-.548-.164.274v.274l-.165.274-.164.55h-.984l-.164-.274h-.49l-.164.274-.164-.274h-.329l-.164-.276v.276l-.164.274-.82-.55h-.492l-.492-.274h-.164l-.163.274v.276l-.166.274v.274l-.162.274-.164-.274h-.656l-.328-.274h-.164l-.492-.55h-.493v.276l-.162.274h-.166l-.162.274.328.274.326.276v.274l.329.274h.164l.164.276.164.274.164.274v.274h.164l.164.276h.164l.164.274-.164.274-.164.276h-.328v.274h-.328l-.164.274-.164.274-.165.276h-.164l-.164.274v.274h-.162v.276h-.328v.274l-.328.274h-.164v.274h-.164v.276h-.328l-.164.274v.549l.164.275v.549l.164.276v1.372l.164.274.328.276h.164v.274h.164l.328.274h.326l.164.274h.165l.164.276.164.274h.164l.164.274v.274h.164l.164.276.164.274.328.274.164.276h.164l.328.274h.493v.55h.162l.164.274h.164l.164.274.328.274h.164l.328.276h.328l.164.274.164.274h-.164v.55h-.164v.274l-.164.274-.164.276-.164.274-.164.274-.164.276-.164.274-.164.548-.164.276-.164.274 1.969.55H268.999v.274h.656l.328.274h.164l.329.276h.328l.164-.276h.164v.825l-.164 1.098.328.824.328.274v1.098l.164.276v.548l-.164.274v.276h.164V160.534l-.164.276v.548h-.164l-.656.55-.821.274-.654.55-.33.274h-.162v.274h-.164l-.328.55h-.164l-.493-.55-.164-.274-.492-.274h-.164l-.328-.274h-2.951l-1.311.274H260.473l-1.148.274h-.49l-.493.274-.82.276h-.328l-.164.274-.985.274H255.227h.002z" }),
        React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M257.346 0h.846v.274h.328V.55h.164v.274h.164v.274h.329v.274h.251l.164.276h1.387v.274h.793v-.274h1.061l.101-.168.342.57v.42h.164v.55h.164v.274h.163v.276h.164v.274h.164v.403l.164.274v.147h.164v.274h.164v.274h.3v-.274h.164v-.274h.52v.548h.164v.325l.672.225h.313v.274h.577l.164.275h.657l.24.405v.273l.251.42h.329l.164.276h.195l.21.7v.124h.162v.676l.166.274v.148h.162v2.002h-.191l.029.048v.572l.162.55v.404l-.59.33-.476.2.07.118.178.594v.48h-1.805v2.303l-.164 1.374v.563l-.164.55v1.25h-1.06l-.164.275h-.115l.028.046v1.052h-.164v.455l-.369.308-.312.524-.303.506v.824l-.164.274v.405h-.164v.97l-.405.676h-.655l-.164.274h-.087v.55h-.405l-.292.49-.234.195.07.118.328.274.836 1.4.189.316v.145h.088l.162.276h.241v.274h.378l.328.274h.657l.357.3.685.287.17.283.466.26.289.245h.263v.355h-.15v.275h-.404l-.058.096.058.096h.24v.55h.119l.164.55h.13l.328-.276h1.168l.492-.274h.964l.328-.274h.656l.328-.276h.985l.326-.274h.164l.328-.274h.2l1.641-.55h.62l.326-.274h.511l.492-.274h.802l.304-.255.88-.296h.947l.328-.274h.456l.164-.274h.393l.655-.276h.755l.164-.274h.366l.241.403v.147h1.4l.241.403v.146h.162v.275h.251l.191.32.542.302v1.025h.164v.5l-.164.276v1.146h.164v.777l-.164.274v.323h.164v.274h.579l.165.274h.241v.274h.087l.216.362.112.188h.161l.166.274h.24v.274h.328v1.456h-.164v.548h-.24l-.111.188-.218.362h-1.918v-.276h-.136v.276h-.164v.419l-.238.405h-.167l-.164.274h-.085v.274h-.028l.002.005.001.001.187.318v.144h.118l.198.654.1.17h.24v.403l.164.274v1.245h.164v.275h.821v.274h.328v.356l.15-.253.265.447h.618l.328.274h1.021l.164.274h.241v.276h.3l-.3.5v.678h-.164v.276h-.164v.274h-.164v1.016h.164v.276h.328v.953l.328.548v.625l-.164.548v.702h-.164v.145l-.164.274v.405h-.241l-.164.274h-.087v.824h-.57l-.164.274h-.743v.274h-.326v.276h-.241l-.251.42v.273l-.241.405h-.165l-.087.146v.87h.164v.083l.05-.082h.443v.678l.087.146h.164l.164.274h.239v.274h.166v.276h.64v.178h.014v.096h1.969v.274h.25l.164.276h.492l.164.274h.328l.164.274h1.225v.55h.088l.162.274h.405v.274h.087l.164.276h.718l-.588.49.225.378.411.23h.295v.274h.328v.274h.087l.201.335.255.215h.201l.164.274h.239v.274h.087l.216.363.011.019.063-.106h1.515l.164.274h.328l.164.274h.162l.218.362v.001l.111.187h.455l.328.274h.529l.164.274h.128l.328.276h.328l.328.274h.201l.162.274h.897l-.164-.274h.82v.953l.087.145h.241v.274h.164v.454h-.014v.178h-.063l-.087.146v.402h-.405l-.164.276h-.087v.274h-.164v.274h-.164v.275h-.241l-.115.194h.164l-.314.524v.106h-.149v.147l-.166.274v1.273l.089.148h.24v.5l-.028.048h.028v.276h.3l-.3.5v.275l-.216.363.141.234h.075v.403l.087.147h.077v.129l.086.145h.078v.274h.164v.274h.164v.276h.164v.274h.164v.274h.328v.274h.164v.276h.087l.164.274h.405v.37l.327.275v.68l-.134.225.134.228v.144h.166v.274h.326v.405l.164.274v1.051h-.164v.145l-.164.275v.55l-.028.046h.028v.63h-.184l.17.575.101.168h.292l.365.306.437.244h.218l.201.335.679.57h-.475v.047l.165.274v.275l.299.503h-.377l-.164.274h-.492l-.164.274h-.164l-.112.189-.328.548-.18.302-.401.335h-.048v.274h-.446l-.061-.104-.063.104h-.087v.179l-.368.31-.288.48v1.227h-.164v.147l-.353.59-.38.637h-.164l-.119.198-.654.824-.167.278-.556.622h-.179l-.162.135.111.186v.275l.087.146h.241v.775l-.241.405h-.164l-.058.096.164.274-.218.367-.216.361h-.164l-.128.214-.401.335h-.051v.275h-.164v.146l-.177.297-.164.549-.149.251v.404h-.164v.151l.19.159-.204.684-.282.472-.01-.008.142.237v.147h.164v.548h.088l.162.276h.048v-.276h.608l.2.337.255.213h.328l.755.63h-.554l-.164.274h-.087v.276h-.278l-.656.548h-.705v.276h-.82v.274h-.296l-.492.274h-.146l-.278.232-.001.001-.377.317h-.292l-.164.274h-.186l-.445.498-.351.295-.466.26-.154.258-.401.337h-.051v.274h-.405l-.087.146v.273l-.205.344-.399.335h-.129l-.11.187h-.001l-.179.302-.329.275-.2.334h-.492l-.164.274h-.328l-.164.276h-.329l-.291.488-.328.275-.122.206v.404h-.166v.274h-.275l-.292.245-.547.305h-.146l-.328.274h-.455l-.165.276h-.492l-.164.274h-1.147l-.164.274h-.229l-.514.214v.481l-.328.55v.274l-.178.297-.196.656h-.118v.419l-.164.276v.047h.05l.328.274h.442v.276h.492v.63h-.427l-.438.489h-.001l-.471.527h.009l-.037.031-.046.051h-.015l-.625.526-.657.274-.656.548-.627.264-.186.31h-.328l-.328.548h-.251v.124l-.176.594-.16.269-.164.822-.168.283-.15.503v.297l-.164.275v.275l-.189.316h-.001l-.139.233v.404h-.262l-.448.5-.274.229v.274l-.391.327h-.001l-.377.318h-.128l-.162.274h-.365l-.328.274h-.494l-.164-.274h-.492l-.2-.335-.256-.215h-.145l-.493-.274h-.266v.214l-.656.276v1.362l-.571-.48h-.692l-.164-.274h-.214v.274h-.239l-.166.276h-.085v.363l-1.417-.592-.06.1v.274l-.177.297-.196.656h-1.218l-.164-.274h-.289l-.264.442-.265-.442h-.291l-.208.348-.931-.624h-.485l-.492-.274h-.016l-.086.145v.277l-.166.274v.273l-.339.573-.266-.444h-.62l-.328-.274h-.179l-.492-.55h-.235v.147l-.238.403h-.166l-.034.056.212.177.001.001.389.329v.274l.215.179h.201l.215.363h.001l.353.59v.145h.087l.164.276h.164l.27.452-.218.365v.001l-.216.362h-.251v.274h-.406l-.276.461v.001l-.215.362h-.165l-.087.145v.403h-.162v.276h-.328v.18l-.442.368h-.05v.274h-.164v.276h-.406l-.087.146v.45l.165.276v.548l.164.276v1.371l.123.207.256.215h.277v.274h.05l.329.274h.362l.164.274h.165l.215.362v.001l.112.187h.165l.241.403v.145h.087l.216.362v.001l.148.248.328.274.128.215h.128l.328.274h.605v.55h.086l.164.274h.164l.2.335.256.213h.164l.328.276h.364l.541.904h-.3v.55h-.164v.145l-.189.316v.001l-.164.275v.001l-.328.547v.001l-.164.275v.001l-.153.255-.164.547-.175.295-.001.001-.044.074 1.721.48h.972v.274h.543l.328.274h.164l.328.276h.162l.164-.276h.444v1.016l-.159 1.063.293.738.358.298v1.133l.164.276v.646l-.164.274v.049h.164v1.873l-.164.276v.677h-.277l-.633.53-.82.274-.629.528v.001l-.38.315h-.048v.274h-.241l-.328.55h-.345l-.557-.622-.148-.248-.41-.228h-.183l-.328-.274h-2.868l-1.311.274h-1.802l-1.148.274h-.465l-.466.26-.864.29h-.256l-.149.249-1.076.299h-.663v.146l-.028.046h.115l.164.276h.492l.164.274h.164l.164.274h.541l-.34.569-.328.276-.365.609h-.164l-.087.147v.275l-.241.403h-.132l-.138.461-.527.587-.315.264-.468.785-.328.824-.171.288-.216.361h-.164l-.276.461h-.001l-.215.363h-.133l-.136.454-.67.842-.158.263-.164.276-.327.547-.001.001-.162.275-.001.002-.166.274-.325.547h-.001l-.543.911h-.165l-.328.55h-.087v.145l-.189.316v.001l-.164.275v.001l-.303.506v.451l.251.419h.241v.276h.164v.274h.087l.405.677v.276l.251.42h.242v.276h.164v.274h.326v.402l.141.235.187.316v.371l-.162.274v1.026l.162.548v.251l.164.276v.274l.164.274v.969h.088l.24.405v.419h.164v.63h-.404l-.128.215-.401.335h-.127l-.166.274h-.325l-.164.276h-.165l-.087.145v.403h-.164v.274h-.328v.323l.151.251.164.55.177.297v.923l-.164.274v.402h-.164v.422l-.164.274v.276l-.164.274v.403h-.241l-.164.274h-.087v.276h-1.1l-.162-.276h-1.968l-.164-.274h-.292l-.441-.369v-.112l-.504.42-.2.335h-.164l-.164.276h-.328l-.128.213-.401.335h-.328l-.278.234h-.001l-.377.316h-.215v.746l-.493-.834-.164-.273-.164-.276-.112-.187h-.164l-.201-.335-.328-.276-.507-.848-.165-.276-.328-.549-.189-.318v-.273l-.087-.146h-.196l-.195-.655-.317-.529-.162-.276-.001-.001-.491-.821-.058-.097-.145.122-.301.504-.265-.443h-.164l-.216-.362v-.001l-.112-.187h-.164l-.38-.635-.001-.001-.11-.188h-.241v-.369l-.287-.24-.18-.302-.218-.365.207-.346.164-.55.039-.065-.176-.294-.256-.215h-.164l-.328-.274h-.605v-.274h-.579l-.165-.274h-.165l-.162-.276h-.291l-.656-.548h-.2l-.164-.274h-.165l-.164-.276h-.328l-.164-.274h-1.766l-.328-.274h-.442v-.276h-.164v-.384l-.393-.438h-.186l-.241-.405v-.145h-.164v-.275h-.164v-1.098h-.086l-.379-.636-.113-.188h-.128l-.4-.337-.533-.89v-.147h-.164v-.274h-.087l-.164-.274h-.11l-.492-.276h-.218l-.165-.274h-.654l-.191-.32-.477-.267-.459-.511h-.313l-.378-.315v-.001l-.351-.295-.292-.487h-.239v-.276h-.164v-.548h-.119l-.209-.702v-1.85h.164v-.55h.164v-.629l-.328-1.646v-.541l-.159-.533-.169-.848v-.664h-.164v-.403l-.14-.234-.189-.315v-.275l-.164-.276v-.501h.241l.087-.145v-.274l.165-.276v-.251l.164-.55v-.297l.328-.548v-.276l.164-.274v-.251l.164-.55v-.571l.173-.292.185-.935h.134v-.147l.162-.274v-2.173l.178-.597.15-.251v-.55l.241-.402h.329l.112-.187v-.001l.164-.275v-.001l.38-.635h.164l.137-.228.533-.299.449-.251.192-.32h.2l.255-.215.012-.02-.139-.233h-.329l-.326-.55h-.166l-.268-.452.205-.346.198-.656h.116v-.274h.164v-.55h.165v-.387l.164-.825v-.305l.164-.276v-.274l.164-.274v-.142l-.252-.212-.492-.274-.405-.338v-.181h-.085l-.207-.346-.568-.633.231-.388v-.001l.356-.593-.176-.296-.305-.255h-.001l-.606-.508h-.413l.705-1.178h.087v-.276h.52l-.221-.37.233-.394.73-.609h.125l.165-.274h.163l.128-.215.401-.335h.128l.101-.168.15-.504v-.976h.164v-.047l-.328-.548v-.276l-.251-.419h-.165l-.24-.405v-1.098l-.164-.274v-1.519h-.657v-.274h-.162v-.274h-.463l.299-.503v-.403h.241l.085-.145v-.403h.029l-.029-.049v-.549l-.295-.502h.295v-.548h.164v-.274h.164v-.55h.164v-.422l.165-.274v-.677h.164v-.147l.164-.274v-.403h.164v-.55h.164v-.145l.241-.405h.087v-.145l.205-.342.615-.516v-.369h.239l.306-.511-.679-.38.462-.386v-.371h.24l.025-.042-.686-.459-.942-.789h-.164l-.378-.317v-.001l-.704-.588h.477v-.695l.405-.677h.743v-.468h-.164v-1.18h.82v-.274h.162v-1.496l.164-.549v-.427h.57l.112-.188.331-.555h-1.995v-2.599l-.087-.147h-.164l-.2-.335-.256-.213h-.201l-.215-.362v-.001l-.112-.187h-.165l-.164-.274h-.164l-.216-.361v-.001l-.162-.274v-.002l-.189-.315v-1.196l.164-.274v-.55l.162-.274v-.177l-.086-.146h-.781l-.164.276h-.165l-.127.213-.401.335h-.735v-.274h-.251l-.164-.274h-.657l-.162-.276h-.82l-.164-.274h-.328l-.164-.274h-.164l-.164-.276h-.29l-.162.276h-.252v.274h-.569l-.164.274h-.251v.276h-2.323v-1.1h-.164v-.822h-.164v-2.278h.164v-.323l-.164-.274v-1.326h.328v-.275h.44l.328-.275h.051v-.274h.404l.058-.097-.094-.157-.633-.53-.39-.33v-.178h-.087l-.328-.548h-.164l-.38-.636-.149-.249-.305-.256-.704-.589h.477v-.421l.164-.274v-.403h.241l.164-.274h.163l.113-.19.216-.36h.087v-.274h.328v-.276h.239l.164-.274h.693l.328-.274h.62l.164-.274h.164l.164-.276h.201l.214-.18v-.368h.731l.165-.276h.656l.164-.274h.251v-.145l.205-.342.4-.337h.458l.328.276h.278v.274h.162v.274h.415l.164.274h.29l.164-.274h.165l.251-.42v-.048h-.164v-.274h-.165v-.824h-.164v-.403l-.123-.206-.256-.215h-.099v-.178h-.014v-.726h.164v-.276h.164v-.274h.164v-.42l.164-.275v-.404h.165v-.55h.241l.164-.274h.087v-.145l.189-.316.164-.275.137-.232v-.678h.166v-.276h.162v-.274h.405l.164-.274h.087v-.276h.329v-.274h.241l.164-.274h.328l.164-.274h.819l.163-.276h.744v-.274h.46l.492-.274h.061l-.029-.049v-.5h.656v-.275h.932l.328-.274h.839l.492-.276h.197v-.145l.241-.403h.087v-.276h.164v-.145l.164-.274v-.251l.209-.702h.119v-.695l.162-.274v-1.098l.164-.276v-.047h-.49v-.275h-.164v-.403l-.164-.276v-.273l-.164-.274v-.147h-.164v-.549h-.088l-.164-.275h-.569v-.403l-.087-.146h-.241v-.369l-.287-.242-.369-.615v-.148h-.328v-.274h-.162v-.824h-.165v-.274h-.164v-.501l.242-.403h.249v-.745l.279.47h.405v.275h.792v-.276h.985v-.548h.328v-.194h-.492v-.274h-.493v-.276h-.328v-.274h-.492v-.274h-.3v.274h-1.06l-.164.274h-.607v-.274h-.705l-.164.274h-.492l-.162.276h-.203l-.326.274h-.379v.274h-1.34v-.548h-.629v.274h-.326v.274h-.771l-.241-.403v-.274l-.164-.276v-.274l-.164-.274V65.3l-.416-.693h-.945l-.166.274h-.161l-.164.276h-1.728v.274h-1.552l-.164.274h-.415v.274h-.241l-.164.276h-.164l-.164.274h-.492l-.162.274h-.254v.276h-.162v.548h-.164v.276h-.405l-.164.274h-.251v.274h-1.475v.274h-1.148v.276h-.493v.274h-.52v-.274h-.164v-.405l-.328-.548v-.42h-.164V66.4l-.162-.274v-.503h.239l.164-.274h.744v-.274h.405l.112-.188.139-.233v-.403h.164v-.18l.441-.368h.128l.112-.19.216-.36h.163l.166-.274h.413v-.276h3.635v.276h.049l.164-.276h.657l.164-.274h.577v-.274h.82v-.274h.569l.164-.276h.201l.328-.274h.128l.164-.274h.164l.164-.276h.085v-.322l-.162-.274v-.146h-.164v-.275h-.087l-.216-.36-.328-.55-.329-.549-.324-.544h.492l-.193-.322v-.372l.241-.405h.088v-.122l.203-.682-.126-.212h-.164l-.164-.274h-.165l-.216-.363-.112-.187h-.241v-.403l-.087-.147h-.657l-.162-.274h-.24v-.274h-.215l-.401-.335-.164-.276-.255-.213h-.365l-.164-.274h-.164l-.164-.274h-.241v-.276h-1.072l-.162-.274h-.241v-.55h-.087l-.164-.274h-.656l-.164-.274h-.329l-.164-.276h-.289l-.162.276h-.531l-.164-.276h-.164l-.164-.274h-.241v-.63h.164v-.274h.209l.119-.398v-.297l.164-.275v-.823l.162-.276v-.55l.191-.314.001-.002.088-.15-1.388-1.292-.177-.296-.313-.524-.328-.274-.179-.3-.113-.19h-.241v-.501l.328-.548v-.679h.164v-.274h.328v-.824h.078l.086-.145v-.129h.077l.164-.276h.416v-.274h.164v-.274h.49v-.276h.164v-.274h.985v-.145l.241-.403h.163l.088-.147v-.403h.716l.382.213.1-.167.49-.274.155-.26.401-.336h.407v.276h.628v-.276h.569l.164-.274h.087v-.145l.163-.276v-.225h.015v-.096h-.015v-.63h1.832v.274h.328v.125l.416.699h.289l.162-.276h.088v-.274h.405l.164-.274h.328l.14-.234-.188-.316h.299v-.274h.014V34.5h-.014v-.454h.164v-.274h.771l.064.105.063-.105h.577v-.048l-.296-.5h.296v-.276h.656V32.4h.734l.164-.275h.819l.086-.146v-.404h.166v-.274h.238l.281-.468h-.029v-.63h.733l.165-.276h.743v-.74l.443.74h.049v-.274h.568l.164-.274h.087v-.276h.164v-.274h.569l.087-.145v-.225h.014v-.178h.15v-.276h.328v-.274h.328v-.274h.52v.082l.05-.082h.607v.08l.047-.08h.443v.274h1.071l.164.274h.242v.276h.743l.163.274h.125l.164-.274h.328l.164-.276h.088v-.274h.164v-.145l.24-.405h.088v-.145l.164-.274v-.274l.164-.276v-.595h-.492v-.632h.164v-.548h.492v-.181l.441-.37h.294l.328.275h.201l.213.362.001.002.188.315v.274l.165.276v.775h-.165v1.098h-.164v.597l.087.145h.57v.632h-.016l.23.192h.77v.274h.464v-.274h.444l.162.274h.049v-.274h1.263l.063.106.063-.106h.415v-.274h.242l.087-.145v-.55l.164-.274v-.597h-.164v-1.454h.164v-.274h.239l.166-.276h.085v-.274h2.576l.164.274h.654l.165.276h.404v.274h.05l.164-.274h.443v.082l.161-.271.139-.232v-.323H248v-.274h-.492v-.274h-.087l-.164-.274h-.165l-.164-.276h-.163l-.165-.274h-.403v-.55h-.415l-.164-.274h-.405v-.274h-.164v-.906h.164v-.274h.164v-.42l.164-.275v-.403h.164v-.274h.24l.086-.147v-.404h.243l.162-.274h.251v-.322l-.087-.146h-.377l.3-.5v-.05h-.164v-.548h-.162v-.55h-.328v-.904h.24l.166-.274h.325l.128-.215.401-.335h.292l.087-.145v-.405H248v-.548h.492v-.145l.241-.405h.414v-.274h.164v-.194h-.164v-.775l.241-.403h.087v-.468h-.164v-.276h-.164v-.274h-.329v-.548h-.162v-.503l.162-.274v-.403h.329v-.274h.24l.088-.147v-.403h.684v.631l.161-.27.167-.28h-.163l.27-.453-.058-.096h-.241v-.63h.164V6.59h.328v-.147l.205-.342.401-.335h1.033V5.49h.405l.164-.274h.164l.328-.548h.164l.164-.276h.087v-.274h.242l.328-.548h.087v-.276h.162v-.742h-.162v-.63h.162v-.048l-.295-.502h.373l.165-.274h.49l.164-.274h.087V.55h.443l.145.243.069-.114V.274h.848v.082l.049-.082h.087V0zm.115.63l-.164.276h-.443V.63h-.137v.147l-.241.403h-.366l-.049-.082v.082h-.241l-.164.274h-.491l-.141.233.053.09V3.65h-.162v.276h-.242l-.328.548h-.087v.274h-.24l-.164.276h-.165l-.328.548h-.164l-.164.274h-.251v.276h-1.26l-.256.214-.123.206v.404h-.328v.274h-.028l.115.193h.063v.276h.014v.63h-.241l-.112.187-.38.637h-.607v-.357l-.049.083h-.088v.274h-.328v.144l-.162.274v.05h.162v.548h.328v.274h.165v.276h.164v1.18h-.242l-.087.145v.321h.165v.906h-.165v.274h-.567l-.087.147v.403h-.328v.548h-.164v.276h-.569l-.164.274h-.365l-.255.213-.2.337h-.328l-.166.274h-.084v.192h.328v.55h.162v.548h.164v.503l-.052.088.216.362v.777h-.404l-.162.274h-.09v.145l-.238.405h-.088v.274h-.164v.145l-.164.276v.678h-.164v.274h-.164v.194h.164v.274h.251l.164.274h.569v.55h.249l.164.274h.165l.164.276h.163l.165.274h.241v.274h.492v.274h.164v.777l-.189.316-.164.276-.216.36h-.443v-.081l-.05.082h-.607v-.274h-.251l-.164-.276h-.654l-.164-.274H243.6v.274h-.24l-.166.276h-.084v.274h-.164v.742h.164v1.051l-.164.274v.55l-.242.403h-.087v.274h-.569l-.265.443-.265-.443h-.705v.274h-.608l-.047-.079v.08h-1.176v-.275h-.543l-.328-.274h-.277v-.55h-.251l-.242-.403v-.695h-.162v-.904h.327v-.55h.164v-.321l-.164-.276v-.274l-.139-.232-.001-.001-.111-.188h-.126l-.329-.274h-.034l-.215.18v.37h-.492v.468h.328v1.049l-.164.276v.274l-.164.274v.403h-.241l-.087.147v.403h-.165v.274h-.24l-.164.276h-.329l-.164.274h-.53l-.163-.274h-.896v-.276h-.087l-.164-.274h-1.226v-.082l-.049.082h-.441v-.274h-.05l-.164.274h-.579v.274h-.328v.276h-.164v.145l-.241.403h-.415v.274h-.164v.276h-.241l-.165.274h-.413v.274H226.8l-.164.276h-.416v.644h-.164v.454h-.49v.274h-.166v.145l-.238.405h-.821l-.164.274h-.58v.548h-.656v.276h-.028l.028.048v.5h-.731l-.265.443-.265-.442h-.214v.824h-.164v.274h-.029l.164.276h-.376l-.164.274h-.328l-.164.274h-.251v.274h-.24l-.162.276h-1.101v-.276h-.164v-.452h-.164v-.096h-.164v-.178h-.328v-.096h-.628v.548h-.164v.144l-.163.276v.404h-.241l-.164.274h-.415v.276h-1.34v-.21l-.177.149-.173.289-.491.274-.228.381-.602-.335h-.268v.145l-.241.405h-.165l-.086.145v.403h-.985v.274h-.164v.276h-.49v.274h-.078l-.086.145v.129h-.077l-.164.276h-.087v.644h-.329v.178h-.164v.276h-.328v.274h-.081l.22.187-.109.185.27.452h-.164l.164.274h-.656l.167.281.148.248.329.274.343.576.151.252L211.676 46l-.234.399-.002.002-.14.231v.547l-.162.276v.825l-.164.274v.25l-.21.703h-.118v.274h-.028l.115.192h.164l.164.276h.125l.162-.276h.696l.164.276h.328l.164.274h.656l.164.274h.241v.55h.088l.162.274h1.225v.276h.087l.164.274h.164l.164.274h.292l.401.335.164.276.255.213h.442v.274h.087l.162.274h.656l.241.405v.145h.087l.216.36v.001l.113.19h.163l.164.273h.164l.164.274h.242v.63h-.21l-.118.398v.426h-.241l-.088.147v.176l.465.775h-.494l.004.007.328.548.328.55.113.188h.241v.274h.164v.405l.162.274v.775h-.239l-.164.276h-.164l-.164.274h-.201l-.328.274h-.127l-.164.276h-.416v.274h-.82v.274h-.732l-.164.274h-.656l-.164.276h-.415v.47l-.443-.746h-2.672v.276h-.568l-.166.274h-.162l-.112.187-.216.363h-.2l-.215.18v.368h-.164v.145l-.189.318-.216.36h-.252v.275h-.897l-.164.274h-.085v.05l.162.273v.97h.164v.678l.328.548v.147h.465v-.276h1.148v-.274h1.475v-.274h.405l.164-.274h.251v-.276h.164v-.548h.162v-.276h.407l.162-.274h.493l.164-.274h.164l.164-.276h.087v-.274h.569l.164-.274h1.398v-.274h.733l.443-.746v.746h.705l.164-.276h.164l.166-.274h1.752v.274h.165v.679l.164.274v.274l.164.276v.274l.087.145h.213v-.274h.326V65.9h1.341v.548h.628v-.274h.605l.327-.274h.129l.162-.276h.493l.164-.274h1.263v.274h.049l.164-.274h.906v-.274h1.012v.274h.492v.274h.328v.276h.465v-.466l.443.74h.063v.178h.014v.096h.299l-.376.632h-.251v.548h-.985v.276h-1.312v.47l-.279-.47h-.289l-.087.145v.047h.164v.274h.164v.824h.163v.274h.328v.405l.287.48.369.31v.18h.087l.241.402v.145h.416l.164.276h.24v.549h.165v.404l.164.274v.275l.164.276v.145h.164v.274h.476v.178h.014v.323l-.164.275v1.098l-.162.274v.954h-.21l-.118.398v.297l-.164.274v.403h-.164v.276h-.242l-.087.145v.403h-.459l-.492.276h-.803l-.328.274h-.705v.274h-.656v.047l.299.503h-.595l-.492.274h-.196v.274h-.897l-.162.276h-.821l-.164.274h-.328l-.165.274h-.087v.274h-.328v.276h-.241l-.164.274h-.251v.274h-.162v.276h-.166v.419l-.187.316-.165.277-.138.231v.403h-.242l-.164.274h-.087v.55h-.164v.145l-.164.276v.677h-.164v.275h-.164v.275h-.164v.288l.288.242.204.341v.146h.164v.824h.164v.274h.165v.503l-.406.677h-.164l-.164.274h-.694l-.164-.274h-.569v-.274h-.162v-.274h-.051l-.328-.276h-.199l-.255.215-.124.206v.403h-.405l-.164.274h-.656l-.164.276h-.578v.18l-.441.368h-.128l-.164.276h-.164l-.164.274h-.693l-.328.274h-.62l-.164.274h-.085v.276h-.328v.274h-.241l-.112.187-.216.363h-.164l-.165.274h-.086v.145l-.165.274v.555l.101.084.351.295.18.3.276.463h.164l.328.548h.241v.37l.263.222.679.567.234.391-.27.454h-.252v.274h-.277l-.328.275h-.213v.275h-.328v.871l.164.274v.778h-.164v1.566h.164v.822h.164v.276h.164v.63h-.164v.194h1.611v-.276h.405l.164-.274h.415v-.274h.405l.162-.276h.695l.164.276h.164l.164.274h.328l.164.274h.821l.163.276h.655l.164.274h.405v.274h.25l.255-.213.201-.335h.163l.164-.276h1.188l.238.405v.372l-.162.274v.55l-.164.274v1l.139.233.162.275.001.001.111.186h.164l.164.274h.164l.216.361.113.189h.127l.401.335.128.213h.164l.241.405v1.243h.164v.63h-.164v.468h2.266l-.653 1.094-.215.361h-.416v.124l-.164.548v1.168h.164v.632h-.326v.274h-.164v.096h-.356v-.096h-.3v.468h.164v1.18h-.164v.274h-.52v-.274h-.213l-.252.419v.829l.101.083.279.235h.163l1.027.859.951.637-.303.506h-.085v.181l-.193.162.224.125h.296v.63h-.241l-.329.55h-.085v.179l-.697.584-.123.207v.402h-.241l-.087.147v.403h-.164v.55h-.164v.146l-.164.274v.404h-.165v.42l-.164.274v.679h-.164v.55h-.164v.274h-.164v.548h-.029l.029.049v.548l.299.503h-.299v.144l-.238.404h-.002l-.086.145v.049h.164v.274h.162v.274h.656v1.777l.165.274v1.098l.087.147h.164l.405.677v.276l.328.548v.501h-.164v.672l-.178.597-.227.379h-.201l-.255.214-.2.336h-.165l-.164.274h-.198l-.584.488-.094.158.435.727h-.792v.275h-.241l-.308.514.649.544.351.294.128.215h.377l-.653 1.091-.097.163.416.464.121.202h.239v.371l.252.21.492.274.405.34v.406l-.164.274v.274l-.164.276v.243l-.165.824v.708h-.164v.55h-.164v.274h-.208l-.134.444-.119.202.057.096h.166l.326.55h.327l.165.274h.377l-.341.569-.401.337h-.128l-.136.229-.532.297-.451.252-.191.32h-.164l-.276.462h-.001l-.163.275-.001.001-.216.361h-.328l-.087.145v.55l-.178.297-.15.504v2.219l-.162.274v.405h-.198l-.139.709-.155.26v.525l-.164.55v.297l-.164.274v.276l-.328.548v.251l-.165.55v.297l-.164.276v.274l-.241.403h-.087v.047l.164.276v.274l.139.232.189.318v.145h.165v.985l.159.797.169.567v.558l.16.805.168.841v1.02h-.164v.55h-.164v1.442l.118.398h.21v.548h.164v.276h.085l.365.609.304.257h.001l.278.232h.343l.525.585.508.285.137.228h.654l.164.274h.11l.492.276h.219l.164.274h.241v.274h.164v.405l.452.754.255.215h.2l.216.361.277.463h.239v1.099h.164v.274h.164v.403l.087.147h.142l.591.657v.165h.164v.276h.215l.328.274h1.839l.164.274h.329l.164.276h.163l.165.274h.127l.657.548h.365l.162.276h.163l.164.274h.734v.274h.378l.329.274h.164l.401.337.127.213h.377l-.314.524-.164.55-.12.202.109.183.149.25.368.308v.179h.088l.213.363.001.001.276.46h.164l.216.361.112.189h.164l.063.106.027-.045.511-.43.271.456.492.822.001.001.162.276.339.566.132.444h.133l.241.403v.275l.139.233.328.549.164.275.477.797.328.276.127.213h.165l.215.36.164.276.113.188h.325l.278-.233.378-.317h.328l.255-.214.201-.334h.328l.164-.276h.164l.128-.214.729-.609h.404v.369l.215.18h.365l.164.274h1.969l.163.276h.54v-.276h.241l.164-.274h.087v-.146l.164-.274v-.276l.164-.274v-.678h.164v-.146l.165-.274v-.725l-.151-.251-.164-.55-.178-.298v-.777h.328v-.274h.165v-.145l.241-.403h.163l.164-.276h.328l.166-.274h.198l.255-.213.2-.337h.087v-.595l-.087-.147h-.241v-1.227l-.164-.274v-.274l-.164-.276v-.297l-.162-.549v-1.174l.162-.274v-.177l-.137-.231v-.001l-.191-.317v-.145h-.326v-.275h-.164v-.275h-.087l-.406-.677v-.276l-.251-.42h-.241v-.274h-.164v-.276h-.087l-.405-.676v-.649l.353-.59.164-.276h.001l.138-.232v-.403h.241l.328-.55h.165l.44-.737.326-.548.165-.273.002-.002.161-.274v-.001l.329-.548.163-.276h.001l.17-.285.642-.806.192-.642h.195l.113-.189v-.001l.38-.634h.164l.112-.187v-.001l.157-.263.328-.824.513-.86.342-.288.457-.509.19-.638h.196l.087-.146v-.273l.241-.405h.164l.292-.488.303-.255h-.103l-.164-.274h-.164l-.164-.274h-.492l-.164-.276h-.541l.3-.501v-.225h.176v-.178h.794l.893-.248.179-.3h.4l.777-.261.518-.289h.516l1.148-.274h1.808l1.31-.274h3.034l.329.274h.145l.574.32.18.3.418.467.322-.539h.087v-.274h.276l.279-.232.001-.001.68-.571.82-.274.68-.57h.051v-.419l.164-.276v-1.419h-.164v-.503l.164-.274v-.45l-.164-.276v-1.064l-.299-.25-.362-.91.169-1.133v-.439l-.049.082h-.494l-.329-.276h-.163l-.328-.274h-.77v-.274h-.665l-2.217-.619.284-.474.153-.257.164-.548.175-.293.164-.276.328-.548.164-.276h.001l.138-.232v-.403h.164v-.55h.028l-.115-.192h-.292l-.328-.276h-.164l-.4-.335-.128-.213h-.164l-.164-.274h-.24v-.55h-.378l-.328-.274h-.201l-.2-.337-.328-.274-.18-.3-.112-.189h-.241v-.403l-.087-.145h-.164l-.216-.361-.113-.189h-.163l-.165-.274h-.289l-.329-.274h-.277v-.274h-.051l-.401-.337-.204-.342v-1.373l-.164-.276v-.548l-.164-.276v-.646l.241-.403h.251v-.276h.164v-.274h.277l.215-.179v-.369h.328v-.276h.162v-.145l.241-.403h.164l.112-.189h.001l.38-.635h.251v-.274h.405l.112-.189.11-.183-.058-.096h-.164l-.164-.276h-.241v-.403l-.303-.506-.113-.189h-.127l-.442-.369v-.274l-.262-.222-.001-.001-.443-.37.291-.492h.166l.085-.145v-.405h.75l.492.55h.149l.328.274h.693l.047.079v-.225l.166-.274v-.275l.239-.403h.312l.492.274h.5l.71.476.042-.071v-.875l.444.746h.327l.064.105.063-.105h.692l.164.274h.751l.132-.444.15-.251v-.274l.269-.449 1.208.505v-.185h.24l.166-.276h.084v-.274h.771l.164.274h.621l.085.072v-.835l.656-.275v-1.08l.442.746h.273l.492.274h.183l.4.337.128.213h.492l.164.274h.163l.328-.274h.291l.162-.274h.201l.278-.234.001-.001.264-.221v-.274l.382-.319.537-.599h.066v-.145l.189-.318v-.001l.139-.232v-.273l.164-.276v-.252l.178-.594.159-.268.164-.822.169-.283.148-.503v-.428h.405l.328-.548h.329l.142-.237.685-.288.657-.549.522-.218h-.101l.754-.63h.149l.439-.491.472-.525h-.189v-.276h-.215l-.328-.274h-.277v-.501l.164-.276v-.677h.209l.133-.444.15-.251v-.274l.328-.55v-.62l.799-.333h.098l.165-.274h1.146l.164-.274h.492l.164-.276h.529l.328-.274h.182l.437-.244.365-.306h.049v-.274h.166v-.145l.203-.342.328-.276.365-.61h.327l.165-.275h.328l.164-.275h.492l.128-.213.328-.274.148-.249v-.001l.214-.361h.203l.253-.213.124-.208v-.274l.241-.403h.251v-.274h.277l.256-.215.173-.289.519-.289.305-.257.535-.598h.143l.164-.274h.364l.279-.234.378-.316h.182l.492-.274h.033v-.274h.82v-.276h.932l.656-.548h.051v-.276h.241l.089-.148-.053-.044h-.328l-.401-.335-.128-.215h-.049v.276h-.608l-.162-.276h-.24v-.548h-.164v-.405l-.032-.053-.46.384v-.703l.164-.274v-.606l.46.385.046-.077.124-.416-.615-.513h.477v-.276h.164v-.145l.176-.297.164-.551.15-.251v-.402h.165v-.276h.277l.255-.214.201-.334h.164l.112-.188.11-.184-.165-.275.271-.452h.164l.087-.147v-.32h-.087l-.241-.406v-.273l-.217-.363.494-.413h.149l.428-.478.162-.27.654-.823.21-.35h.164l.276-.464.164-.274.139-.232v-.405h.164v-.97l.369-.615.287-.242v-.37h.242l.265-.443.15.252v-.082h.275l.256-.213.148-.25.328-.549.216-.362h.164l.164-.274h.493l.14-.234-.053-.09v-.273l-.164-.274v-.378l-.124-.104-.128-.213h-.109l-.547-.305-.292-.245h-.364l-.227-.38-.131-.443h-.348l.331-.55h-.163l.297-.5v-.55l.164-.275v-.403h.164v-.597l-.164-.274v-.147h-.326v-.274h-.166v-.403l-.086-.147h-.211l.106-.178-.105-.178h.21l.086-.145v-.416l-.327-.276v-.179h-.251l-.164-.274h-.213v.19l-.52-.869v-.145h-.164v-.274h-.164v-.276h-.164v-.274h-.164v-.274h-.164v-.403l-.164-.276v-.145h-.328v-.452h.015v-.178h.014l-.166-.276h.379l.086-.145v-.274l.028-.047h-.028v-.276h-.297l.297-.501v-.047h-.085l-.243-.405v-.42h-.163v-.63h.163v-.421l.165-.274v-.404h.163v-.548h.24l.102-.17v-.106h.15v-.275h.164v-.274h.164v-.274h.241l.164-.276h.251v-.145l.164-.274v-.049h-.164v-.274h-.087l-.241-.403v-.42h-.464v.275h-.52v-.276h-.416l-.162-.274h-.127l-.328-.274h-.329l-.328-.276h-.2l-.164-.274h-.456l-.328-.274h-.529l-.213-.36-.001-.001-.114-.189h-.162l-.164-.274h-.328l-.164-.274h-1.111l-.265.443-.317-.53-.112-.189h-.241v-.274h-.085l-.164-.274h-.128l-.401-.337-.127-.213h-.242v-.274h-.328v-.274h-.032l-.574-.322-.431-.72.109-.09-.143-.242h-.241v-.274h-.252l-.162-.274h-.241v-.55h-1.071l-.164-.274h-.328l-.164-.274h-.493l-.164-.276h-.403v-.274h-1.969v-.274h-.654v-.276h-.166v-.274h-.085l-.164-.274h-.164l-.241-.403v-.23l-.05.083h-.442v-.275h-.165V58.34l.242-.403h.163l.088-.147v-.274l.405-.677h.087v-.276h.326v-.274h.898l.164-.274h.415v-.824h.241l.164-.274h.087v-.147l.164-.274v-.403h.164v-.398l.164-.548v-.475l-.328-.548v-.695h-.328v-.276h-.164v-1.728h.164v-.274h.164v-.276h.164v-.42l.028-.046h-.028v-.276h-.087l-.164-.274h-.948l-.328-.274h-.691l-.063-.106-.164.276-.342-.575v-.145h-.328v-.274h-.821v-.275h-.164v-1.502l-.164-.274v-.146h-.088l-.224-.382-.134-.442h-.21v-.403l-.137-.233-.001-.002-.324-.542h.3v-.274h.239l.164-.274h.165l.086-.146v-.678h.164v-.276h.848v.276h1.36l.114-.188.214-.362h.087v-.548h.164v-.744h-.328v-.274h-.084l-.166-.274h-.163l-.216-.36v-.001l-.112-.19h-.241v-.273h-.087l-.164-.274h-.734v-.274h-.328v-.632h.164v-.145l.164-.275v-.322h-.164v-.274h-.164v-.63h.164v-.695l.164-.276v-.047h-.164v-1.172l-.442-.246-.137-.229h-.405v-.276h-.162v-.402l-.087-.146h-1.554v-.404l-.068-.114-.145.242h-.885l-.655.276h-.263l-.164.274h-.529l-.328.274h-1.018l-.761.256-.352.294h-.838l-.493.275h-.473l-.326.273h-.692l-1.641.55h-.129l-.328.275h-.164l-.326.274h-.984l-.328.276h-.657l-.328.274h-1.001l-.492.274h-1.13l-.328.276h-.525l-.165-.55h-.209v-.55h-.084l-.274-.452.274-.452h.248v-.014l-.25-.211-.519-.29-.158-.264-.627-.262-.3-.252h-.656l-.328-.274h-.605v-.274h-.088l-.162-.276h-.241v-.402l-.138-.232h-.001l-.804-1.349-.328-.274-.258-.43.422-.352.364-.61h.251v-.55h.241l.164-.275h.655l.251-.42v-1.226h.164v-.147l.164-.274v-.824l.353-.59.344-.576.287-.24v-.645h.164v-.597l-.3-.501h.541l.165-.274h.905v-.947l.164-.55v-.532l.164-1.374v-2.638h1.805v-.072l-.15-.502-.258-.43.836-.352.39-.218v-.144l-.162-.55v-.525l-.303-.503h.465v-1.29h-.162v-.405l-.166-.274v-.42h-.162v-.427l-.119-.397h-.132l-.165-.275h-.327l-.406-.677v-.275l-.087-.147h-.656l-.164-.274h-.731v-.274h-.015l-.97-.326v-.224h-.3v.274h-.684v-.274h-.164v-.274h-.164v-.274h-.164V4.62l-.164-.274V4.2h-.164v-.274h-.164V3.65h-.163v-.274h-.164v-.55h-.164v-.63l-.328.548v-.74h-.464v.274h-.328v.274h-.684v-.274h-.493v-.274h-.298v.74l-.443-.74h-.493l-.164-.276h-.404v-.274h-.329V1.18h-.164V.906h-.15V.728h-.014V.63h-.703zm-48.62 42.203zm40.96-34.32h.002V8.51l-.002.003z", clipRule: "evenodd" }),
        React__default.createElement("path", { fill: "#017F34", d: "M174.374 149.272v-.549l-.162-.55v-.274l-.164-.824v-1.098l-.164-.274-.164-.548v-.276h-.164v-.274h-.164l-.165-.55-.164-.274-.164-.274-.164-.274-.164-.55-.164-.274-.164-.274-.164-.276-.326-.274-.166-.274-.162-.276h-.164l-.164-.274h-.329v-.274h-.164l-.328-.274-.328-.276h-.328l-.328-.274-.164-.274h-.328l-.328-.276-.327-.274-.984-.548-.328-.276h-.328l-.329-.274h-.164v-.274h-.328l-.326-.275v-.274h-.328l-.656-.276h-.164v-.274h-.657l-.492-.274v-.274h-.328l-.49-.55-.164-.274h-.164l-.164-.274-.165-.276h-.164v-.274l-.164-1.098v-.55l-.164-.274V131.426l-.164-.274v-.55l-.164-.274v-.274h-.164l-.164-.274-.328-.824-.164-.274-.164-.276-.164-.274-.162-.274-.166-.55-.163-.274-.164-.274-.164-.55h-1.312l-.492-.274h-1.639l-.328-.274h-.492l-.165-.275h-.164l-.164-.275h-.328l-.326-.275h-.656l-.164-.274h-.328v-.276h-.165v-.274l-.164-.274h-.164l-.164-.274-.164-.276-.164-.274h-.164l-.164-.274-.818-.55h-.329l-.164-.274h-.328l-.164-.274h-.164v-.276h-.328l-.164.276h-.328v.274H147.322l-.164.274h-.164l-.164-.274h-.164v.274h-.492v.276h-.656v.274h-.328l-.163.274h-.164v.274h-.492v.276h.164v.274h-.328v-.274.274-.274h-.328v-.276h-.164.164v-2.744h.164v-.55h.164v-1.098h.164v-.274l-.164-.276v-.548h.164v-.274l.164-.276v-1.372l-.164-.274v-.55l.164-.274v-.274l.164-.274V113.306l.164-.274v-.275h.164v-.549h.163l-.163-.276v-.548h-.164v-.55h.655l.164.276h.328l.328.274h.164v-.274l.164.274h.328v-.274h.657l.162-.276h.656l.164-.274v-.548h.164v-.276h.164v-.548l.164-.276.164-.274.164-.274.164-.274h.164v-.55l.165-.274.164-.276.164-.548.164-.274h.162l.492-.276.164-.274h.492l-.164-.274h-.164l-.164-.274h-.328l-.328-.276h-.162l-.492-.274h-.329l-.492-.274h-.164l-.328-.274-.164-.276h-.328l-.162-.274h-.166l-.162-.274-.329-.274h-.984l-.328-.276h-.328l-.328-.274H144.535l-.492-.274h-.328l-.328-.276h-2.952v-.274H139.615l.164-.274V100.401l.164-.274h-.164v-.55l-.164-.274v-.274h-.164V98.205l-.164-.274v-1.374l-.164-.548h.164v-.274h-.164v-.276h.164v-.274h.328v-.55h.164v-.274l.164-.274h.164v-.274h.328v-.276h.165v-.274h.164v-.274h-.164.164v-.274h-.164.164v-.276h.164l.164-.274h.164v-.274l.328-.276.162-.274v-.274l.328-.55v-.274l.328-.548h.164l.164-.274h.165l.164-.276v-.274h.164l.164-.274v-.276l.164-.275h.164l.164-.274.164-.274.164-.276.49.276.328.274h.165v-.274h.164v-.276h.164v-.548h.164l.164.274h.492v-2.47l-.164-.276h-.164v-.274h-.164v-.274l-.164-.274h-.164V82.556h-.164v-.276h.164l.164-.548-.657-.274-.164-.276-.326-.274h-.164.164v-.274h.162-.326l-.164-.274h-.328v-.276H143.059v-.274h-1.311v-.274h-.164v-.276h.164v-.274h-.164v-.274h.492v-.274h.326v-.274h.164v-.276l-.164-.274-.164-.275v-.275l-.162.276v-.276h-.166.166v-.274h.162v-.275l.164-.274h1.149l.164.275h1.475l.164-.275h.656l.164-.275h.164V74.593l.164-.274v-.274h.164v-.276h.164l.164-.274h.328v-.274h-.164v-.274h.164-.164v-.55h-.328l-.164-.274h-.164v.274-.55h.328v-.274h-.328.164V71.3h-.328l-.164-.274v-.55h.328v-.274h.492V69.377h-.328l.164-.274v-.276h-.164v-.274h-.164.164v-.274h.164v-.55h-.164.164v-.274h.164v-.55h-.164v-.274h.164v-.274h-.328.164-.164v-.274h-.164v.274h-.164v-.274h.164v-.276h-.328v-.274h-.164v-.274h.164v-.275l.164-.275.164.275h.164v-.275h.164v-.275h-.328.328v-.273l.164.273h.492l.163-.273-.163-.276v-.274H148.305v-.275h.164v.275h.328v-.549h.492v-.274h.164v-.276h-.164v-.548h.328v-.55h.164V60.59h-.164v-.548h.164v-.274h.327l.166-.276h.162v-.274l-.162-.274h.49l.164.274h.164v-.274h.656l.164-.274v-.55h.164l.165.274h.328v.276h-.164l.164.274h.164v-.274.274h.328v-.274h.326v.274h-.164v.274h.164-.326v.274h.49l-.164.276h.164v.274h-.164l.164.274h.492v-.274h.164v.274h.493l.328.274v-.274h.164l.328.274-.164.276h.164l.164.274.164.274h.49l-.162.55h.326l-.164.274h.328v-.55h.657v-.274h.164v.274h-.164v.276h-.164v.274h.164v.548h.164v-.274h.656v-.274h.164v.274h.164v-.274h.162v-.274h.166v.274h.327v.274h-.165v.55h.493l.164-.276.164.276.164-.276h.328v.276h.164v.274h.328v-.274l.164.274v-.274h.164-.164v-.276h.656-.165v-.274h.165l.163.274h-.163.163v-.274l.164.274h-.164v.276h.164v.274-.274h.164l-.164-.276h.328v.276h.164-.164v.274h.492v-.274h.164v.549h-.164.164v.274l.164-.274v.274h.164l.164-.274h.164v-.275l.328.275v-.275h.491v.275h-.162.326v.55l.164-.276h.164v.549h.328l.328.275v-.275h.164l.164-.273h.493v.273h.164v.275l.164-.275h.654v-.273h.164-.328v-.276h.164v-.274h.164v-.275h.164v-.55h.656l.165.276h.328v-.276h.164l.164.276.164.274h.328v.275h.164v-.275h.326v.275h-.326v.274h.654v.276h.164v-.276h-.164v-.274h.164v.274h.165v-.274h-.165v-.275h.329v.275h.328l.164.274h.492l.164.276h.162l-.162.273h-.164v.275l-.164.275-.328.549-.164.274v.276h-.164l-.493-.276h-.164v.55h-.164v1.098h-.164l-.49-.274h-.164v.548l-.164.274v.276h-.164l-.164.548h-.164l-.164.276h.164l.328.822h.164v.276h.164l.328.274.162.274.164.276h.164l.164.274.164.274.165.274.164.276.164.274.164.274.328.274h.164v.276h.656v.274h.164l.162.274v.274h.164v.276h.165v.274H175.03v.274h.164l.163.274V75.966h.164v.274h.164v.276h.164l.492.274v.274l.164.274.328.276-.164.274h.164l.164.274v.276h-.328l-.328.274.164.274-.164.274.328.276.164.274.164.274h.164v.276l.328.274h.164l-.164.274.164.274.164.276-.164.274-.164.274-.164.274-.328.276-.328.274v.274h.164v.276h.164l.164.274h.164l.164.274h.655l.164-.274.164.274h.164l.164.274v.276l.328.274.164.55h.164v.548h.164l-.164.274v.274h1.149l.326.276h1.148l.164.274H183.064v.274h.328l.162.275H185.851l.164.275h.654l.164-.276h1.805v.55l.164.274v.55h.164l.164.549v1.098h.164v.276h.164v.548l.165.55V93.537H190.933l.164-.274.492.274h.164l.657-.274h.654l.328-.274.821-.274v.274h.164l.164.274.164.274v.276h.164v.274h.164l.982-.274.493-.276.82-.548h.328v-.274h.656l.162-.276h.164v-.274h.166l.163-.274.164-.276h.164v-.274h.328v-.274l.328-.274.328-.276.164-.274.164-.274.164-.276.164-.274h.164v-.274h.164l.163-.274.164-.276.328-.823.164-.276.164-.274v-.274l.164-.55.164-.274v-.274l.164-.55.164-.548.164-.55h.328l.164.276h.493l.164.274.326-.55.164-.274.164.274h.164l.164-.274h.164l.328-.548h.165v.274h.656v.274h.492v.274h.49l.328.276.329.274h.164l.328.274h.164-.328v.276h-.328v.274h-.165v.274h.165l.328.274v.274h.492v.276h.164v.274h.164v.274h.164v.275h.164v.549h-.656v.274h-.492l-.164.275v.276h-.164.164l.164.274h.164v.274h.328l.164.276h.164v.274h-.328v.274h-.492l-.164.274h-.329l-.49.276h-.984v.274l-.492.274h-.164H207.002v.274h1.147v-.274l.164-.274h.328l.164-.274H209.789l.164-.276h.164v.276h.162v.548h-.49l-.164.274h-.328l.164.276v.274l.164.274v.276h.164v.548h.162v.274h.328V94.361l-.162.274v.276h-.164.164l.162.274H211.756l.328.274.328.276.164.274.328.548h.165l.328.55h.162v.274l.328.274.328.276.328.274.164.274-.164.276h-.328v.274h-.164l-.328.274h-.326v.274h-.328V100.676l.162.275v.549h-.162V103.422h.162V104.246h.166v.274h.162v.274h-.162v.55h1.967v-.274h.328l.164-.276h.49v-.274h.328l.164-.274h.492l.164.274h.165l.164.274h.328l.164.276H219.133l.164.274h.657l.164.274h.328v.274h.492l.328-.274.164-.274h.164l.162-.274h.985l.164.274v.274l-.164.274v.55l-.164.274v1.098l.164.276.164.274.164.274h.164l.164.274h.164l.164.276.164.274h.164l.328.274.163.274h.165l.163.276v1.372h.164v.274h-.164V112.757H227.004l-.492.824-.164.274h-.492v.274l-.164.55v1.372h.164v.274h-.328v.276h-.164v.274-.274h-.655V117.425h.163V118.247h-.163v.276h-.165v-.276h-.491l-.164.276-.164.274V119.621h-.164l.328.274.328.274h.164l.983.824.82.55-.164.274h-.164v.274l-.328.274.492.276h.164v.274h-.164l-.328.548h-.164v.274l-.654.55-.165.275v.275h-.164l-.164.275v.274h-.164v.55h-.164v.274l-.164.274v.274h-.164v.55l-.164.274v.55h-.164v.548h-.164v.276h-.164v.548h-.164l.164.276v.548l.164.274h-.164v.276l-.164.274h-.164v.274h-.164.164l-.164.274h.164-.164.328v.276h.164v.274h.656v.274-.274V133.898l.164.274v1.098l.164.274h.164l.328.549v.275l.329.549v.275h-.165V138.015l-.164.55-.164.274h-.164l-.328.274-.164.276h-.164l-.164.274h-.164l-.328.274-.328.276-.164.274.164.274.164.274h-.655v.276h-.166l-.162.274-.164.274-.164.274h-.164l-.328.276-.164.274-.328.548v.276h-.164v.274h-.164l-.329.274-.49.55h-.166l-.326.274-.164.274h-.328l-.821.55v.274l-.164-.274v.274l-.492.548h-.328v.55h-.164l-.328.274v.276l-.819.274h-.164v.824h-.984l-.328.275-.164-.275-.164-.275v-.275h-.326l-.165.275v-.549H212.084v.274l-.164.275h-.164v-.275H210.936l-.164.275-.164-.549-.491.274h-.656l-.656.275h-.164v.275l-.328-.275h-.329l-.164-.275v-.274l-.164-.274H206.51l-.164.274-.164.274v-.274h-.164l-.164.274v-.274h-.493v-.274h-.164v-1.1h-.164l-.164-.274h-.328v-.274H203.723v-.274h.164v-.276h-.164v-.274h.164-.164v-.274h.164v-.274h-.329l-.164.274-.164-.274h.328l.165-.276h-.165v-.548l-.164.274-.164-.274h-.164v-.274h.164l-.164-.276h-.164l-.164.276-.164-.276h-.164v-.274h-.164v-.274l-.164-.276V141.585h.164v-.55l-.164-.274-.656.824-.163-.276-.164-.274v-.274h-.164v-.274.274h-.492v.274H199.295v.274H198.312l-.164-.274h-.492.164v.274h-.164v-.274h-.164v.274H197v-.274H196.181h.162H195.361v.274h-.656v.276h-.492v.274h-.165v-.274.274h-.328v.274H192.902v.274h-.328v.276h-.164l-.164.274-.164.274h-.329v.276h-.328l-.164.274h-.492v.274h-.49.162v.274h-.162v.276h-.164v.274h-.164v.274h-.164v.274h-.329v.276l-.164.274h-.164v.548h-.328v.276h-.328v.274h-.164.164-.164v.274h-.164v-.274h-.162v.274h-.328v.276h-.164v.274h-.164v.274h.164v.55h-.164v.275h-.493v.274h-.656l-.164-.274h-.164v-.275H184.868l-.164.275-.328-.275h-.656l-.164-.275H182.736l-.164-.275h-.165v-.274h-.326v-.274H181.097l-.164.274H180.112l-.164.274-.164-.274v-.274h-.164l-.162-.276v.276h-.656l-.328.274h-.328v-.274l-.164-.276-.165-.274-.164-.274v-.276l-.328-.548h-.164l.164.274v.274h-.164v.276h-.164v.274l-.164.274h-.654l-.164.276-.164.274h-.164l-.165.274-.164.275h-.164l-.164.275-.164.275h-.164l-.164.274h-.164z" }),
        React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M151.735 57.942h.442l.164.274h.406v.454h.136v-.178h.682v.63h-.164v.096h-.014v.096h.477l-.164.276h.029v.548h.136v-.274h.52v.274h.379l.086.072v-.072h.406l.494.413-.105.177.304.508h.627l-.08.274h.649v-.274h.52v.63h-.164v.468h.464v-.274h.49v-.274h.522v.274h.327v.63h-.164v.194h.213l.265-.446.164.276.063-.106h.607v.276h.136v-.465l.164.274v-.085h.491v-.274h.328v-.466l.443.74h.405v.55h.136v-.274h.52v.357l.164-.274v.548l.05-.083h.086v-.476l.329.274v-.072h.846v.274h.164v.274h.328v.55h.215l.085.072v-.072h.242l.164-.274h.771v.275h.462v-.55h.164v-.275h.164v-.274h.164v-.55h.936l.164.276h.049v-.276h.443l.216.363.112.187h.895v.274h.137v-.274h.684v.274h.251l.164.274h.492l.164.276h.373l-.372.63h-.088v.145l-.189.318-.467.78v.405h-.389l-.432-.242v.517h-.164v1.098h-.388l-.43-.24v.385l-.164.274v.405h-.21l-.164.548h-.144l.296.742h.222v.276h.051l.401.335.177.3.113.189h.163l.545.91.163.275.313.522.255.213h.278v.276h.656v.274h.088l.238.404v.144h.165v.276h.164v.274h1.968v.274h.088l.239.404v.694h.164v.274h.164v.276h.032l.624.348v.33l.123.206.422.354-.105.175.216.362v.504h-.441l-.162.135.14.235-.14.235.234.198.292.487h.241v.37l.215.18h.413l-.27.452.109.183.219.367-.562.939-.351.295h-.001l-.264.221v.013h.164v.276h.087l.164.274h.164l.164.274h.453l.265-.442.265.442h.164l.241.403v.242l.305.255.142.474h.209v.548h.3l-.3.502v.046h1.036l.326.276h1.184l.164.274h.898v.274h.251l.163.274h2.296l.164.276h.452l.164-.276h2.084v.68l.164.273v.421h.119l.209.7v.947h.164v.276h.164v.7l.165.55v1.494h1.031l.201-.336.603.336h.082l.656-.274H193l.304-.254 1.087-.363v.343h.087l.405.677v.147h.164v.263l.9-.25.468-.263.859-.574h.204v-.274h.732l.163-.276h.088v-.274h.242l.111-.187.216-.363h.087v-.274h.328v-.18l.392-.327.305-.256.312-.522h.001l.163-.276h.001l.216-.361h.087v-.275h.24l.111-.186.157-.264.328-.823.171-.287v-.001l.139-.232v-.25l.178-.597.15-.25v-.252l.172-.575.164-.548.202-.677h.562l.164.276h.492l.062.104.174-.293.317-.53.246.412.145-.243h.165l.328-.548h.443v.274h.656v.274h.492v.274h.377l.378.318.278.232h.164l.328.274h.1v.356h-.15v.276h-.328v.274h-.016l.344.287v.18h.492v.275h.164v.274h.164v.274h.164v.274h.164v.906h-.656v.274h-.569l-.087.146v.177l.087.145h.241v.275h.251l.164.275h.241v.63h-.328v.275h-.569l-.164.274h-.383l-.49.276h-.853v.192h.492v.274h.791v-.145l.241-.403h.328l.164-.274h.984l.164-.276h.443v.276h.163v.904h-.568l-.164.274h-.116l.029.049v.273l.164.275v.147h.164v.548h.162v.274h.329v1.05l-.163.275v.178l.086.145h1.44l.377.316h.001l.351.295.455.761h.165l.328.55h.239v.369l.264.22.001.001.327.276h.001l.351.293.234.391-.27.454h-.252v.274h-.277l-.328.274h-.213v.274h-.328v.872l.162.276v.774h-.162v1.567h.162v.824h.166v.274h.162v.63h-.162v.194h1.611v-.274h.405l.164-.276h.413v-.274h.405l.164-.274h.694l.164.274h.164l.165.274h.328l.164.276h.818l.164.274h.657l.164.274h.405v.274h.249l.256-.213.2-.335h.164l.162-.274h1.187l.241.403v.372l-.164.274v.55l-.164.274v1l.139.234.276.461h.164l.164.274h.164l.216.363.112.187h.128l.401.335.126.213h.166l.239.406v1.242h.164v.63h-.164v.468h2.268l-.653 1.094-.216.361h-.415v.122l-.164.55v1.168h.164v.63h-.328v.276h-.164v.096h-.356v-.096h-.298v.468h.162v1.178h-.162v.276h-.522v-.276h-.211l-.113.189-.139.232v.829l.379.316h.164l1.025.86.953.638-.303.506h-.087v.179l-.194.162.227.127h.295v.63h-.241l-.328.548h-.087v.179l-.695.584-.123.207v.404h-.242l-.087.146v.402h-.164v.55h-.164v.146l-.164.274v.403h-.164v.421l-.164.274v.679h-.164v.548h-.164v.276h-.164v.548h-.029l.029.049v.548l.3.501h-.3v.147l-.328.548v.047h.164v.276h.164v.274h.656v1.777l.164.274v1.098l.087.145h.164l.405.677v.276l.329.548v.503h-.164v.671l-.178.596-.228.38h-.2l-.255.213-.201.337h-.164l-.164.274h-.2l-.279.232-.305.257-.094.157.435.726h-.791v.276h-.242l-.111.187-.38.635h-.2l-.256.215-.451.754v.405h-.164v.274h-.278l-.268.224-.535.6h-.181l-.254.213-.2.335h-.375l-.696.467v.823l-.273-.455-.482.537h-.23v.55h-.277l-.215.18v.32l-.967.324h-.016v.824h-1.097l-.439.367-.271-.453v-.001l-.189-.318v-.145h-.048l-.442.74v-1.014h-.465v.146l-.241.402h-.443v-.274h-.541l-.32.534-.216-.722-.337.188h-.667l-.656.274h-.022v.481l-.571-.481h-.364l-.241-.402v-.274l-.087-.146h-.945l-.607 1.014v-.548l-.328.548v-.74h-.493v-.274h-.164v-1.1h-.087l-.164-.274h-.405v-.274h-.818v-1.18l-.15.251-.479-.799h.465v-.049l-.251-.419h-.242v-.356l-.15.252-.265-.446h-.241v-.274h-.164v-.403l-.164-.276v-1.049h.164v-.323l-.007-.011-.657.825-.293-.498-.001-.001-.188-.315v-.145h-.301v.274h-1.148v.274h-1.262l-.164-.274h-.049v.274h-1.176v-.274h-1.283v.274h-.656v.276h-.492v.274h-.493v.274h-.818v.274h-.328v.276h-.241l-.328.548h-.251v.276h-.406l-.164.274h-.415v.274h-.328v.274h-.162v.276h-.164v.274h-.164v.274h-.164v.274h-.329v.147l-.241.403h-.087v.548h-.328v.276h-.328v.274h-.164v.274h-.654v.276h-.164v1.098h-.164v.274h-.493v.274h-.935l-.164-.274h-.241v-.274h-.704l-.219.367-.438-.367h-.693l-.164-.276h-.82l-.164-.274h-.241v-.274h-.327v-.274h-.705l-.164.274h-.821l-.264.443-.343-.571v-.146h-.74l-.328.274h-.57v-.403l-.139-.233v-.001l-.353-.59v-.147h-.137v.276h-.164v.146l-.241.402h-.654l-.112.189-.001.001-.215.36h-.165l-.328.548h-.163l-.113.19-.216.36h-.164l-.164.274h-.443v-.7l-.162-.55v-.282l-.164-.824v-1.067l-.15-.251-.178-.594v-.124h-.164v-.274h-.119l-.196-.656-.492-.822-.164-.55-.317-.529-.148-.25-.326-.274-.181-.299-.002-.002-.11-.188h-.163l-.164-.274h-.406v-.274h-.05l-.378-.316-.279-.234h-.328l-.4-.335-.128-.213h-.292l-.378-.318-.313-.263-.985-.548-.291-.245h-.328l-.328-.275h-.277v-.274h-.215l-.44-.369v-.179h-.186l-.656-.276h-.306v-.274h-.525l-.624-.347v-.201h-.23l-.554-.622-.121-.202h-.164l-.216-.361-.113-.189h-.24v-.439l-.165-1.098v-.514l-.164-.274v-.824l-.164-.274v-.55l-.164-.274v-.145h-.087l-.223-.373-.328-.824-.157-.262-.164-.276-.164-.274v-.001l-.174-.292-.165-.55-.151-.255-.001-.001-.175-.292-.132-.444h-1.226l-.493-.275h-1.657l-.328-.274h-.528l-.164-.274h-.165l-.164-.276h-.292l-.326-.274h-.692l-.164-.274h-.405v-.276h-.164v-.402l-.087-.146h-.164l-.216-.36-.001-.001-.163-.275-.001-.001-.112-.187h-.164l-.195-.326-.741-.498h-.374l-.164-.274h-.329l-.164-.274h-.241v-.276h-.049l-.164.276h-.251v.274h-.896l-.164.274h-.366l-.049-.082v.082h-.492v.276h-.656v.274h-.405l-.162.274h-.088v.274h-.328v.55h-.684v-.274h-.328v-3.376h.164v-.55h.164v-1.098h.164v-.047l-.164-.276v-.775h.164v-.145l.164-.276v-1.274l-.164-.274v-.649l.164-.274v-.274l.164-.274v-.824l.164-.274v-.405h.164v-.548h.03l-.03-.049v-.419h-.164v-.906h.934l.164.276h.292l.249.209v-.675l.443.74h.049v-.274h.733l.162-.276h.657l.087-.145v-.677h.164v-.276h.164v-.419l.189-.318h.001l.544-.909h.087v-.421l.189-.316.152-.257.165-.548.227-.38h.216l.411-.23.191-.32h.115l-.115-.192h-.292l-.328-.276h-.143l-.493-.274h-.328l-.492-.274h-.182l-.401-.335-.128-.215h-.329l-.162-.274h-.166l-.198-.335-.255-.213h-.985l-.328-.276h-.328l-.328-.274h-.8l-.492-.275h-.347l-.328-.275h-3.064v-.275h-.957l.3-.501v-.824l.028-.047h-.028v-.678l-.164-.274v-.146h-.164v-.953l-.164-.274v-1.397l-.225-.752h.061v-.55h.164v-.274h.328v-.55h.164v-.145l.241-.403h.087v-.274h.329v-.276h.164v-.274h.164v-.824h.241l.164-.274h.087v-.18l.368-.309.122-.206v-.274l.328-.55v-.275l.406-.677h.164l.164-.273h.163l.088-.147v-.404h.241l.087-.145v-.276l.241-.403h.164l.276-.461.253-.425.656.37.213.177v-.209h.164v-.276h.164v-.548h.443l.164.274h.213v-2.243l-.087-.147h-.241v-.274h-.164v-.403l-.087-.145h-.241v-.824h-.164v-.632h.209l.08-.268-.562-.235-.179-.3-.254-.213h-.099v-.178h-.014v-.096h-.087l-.164-.274h-.405v-.276h-.82v-.274h-1.311v-.274h-.164v-1.18h.492v-.274h.326v-.275h.165v-.048l-.231-.385-.26.441v-1.381h.162v-.146l.242-.403h1.35l.164.275h1.273l.164-.275h.656l.164-.276h.087v-1.243l.164-.274v-.403h.164v-.276h.241l.164-.274h.087v-.742h-.251l-.106-.178h-.299v-.728h.178v-.096h-.014v-.096h-.251l-.241-.403v-.777h.328v-.274h.492v-.468h-.464l.3-.501v-.05h-.164v-.903h.164v-.824h.164v-.194h-.164v-.548h-.492v-.55h-.164v-.275h-.164v-.63h.164v-.144l.342-.576.15.253v-.082h.014v-.275h.15v-.74l.443.74h.29l.057-.096-.133-.227v-.5h.818v-.275h.492v-.274h.492v-1.098h.329v-.55h.164v-.468h-.164v-.904h.164v-.274h.403l.166-.276h.085v-.047l-.296-.501h.903l.049.082v-.082h.734l.087-.145v-.679zm-.465 1.18v.274h-.443l-.164-.274h-.077l.028.047v.501h-.24l-.166.276h-.248v.274h-.165v.192h.165v1.18h-.165v.55h-.328v.192h.164v.632h-.164v.274h-.492v.548h-1.311v.048l.191.325-.267.451h-.58v.275h-.164v.275h-.443l-.049-.082v.549h.328v.276h.164v.274h.328v1.454h-.164v.824h-.164v.192h.164v.503l-.028.047h.192v1.18h-.492v.274h-.328v.323l.087.145h.405v.274h.164v.63h-.193l.116.194h.405v.824h.164v.63h-.405l-.164.274h-.087v.276h-.164v.145l-.164.275v1.5h-.241l-.164.276h-.656l-.164.274h-1.677l-.164-.274h-.947l-.087.146v.725l.328.548v.504h-.164v.273h-.326v.275h-.328v.742h1.311v.274h.82v.276h.251l.164.274h.225v.178h.016v.19l.286.241.149.251.75.313-.224.749h.022v.824h.087l.241.403v.145h.164v.274h.087l.241.405v2.697h-.771l-.049-.082v.356h-.164v.276h-.164v.274h-.407l-.365-.305-.325-.182-.075.126-.164.275-.216.36h-.164l-.087.146v.276l-.241.402h-.087v.145l-.241.405h-.165l-.164.275h-.164l-.251.419v.274l-.328.55v.273l-.202.343-.288.242v.369h-.241l-.164.274h-.087v.824h-.164v.274h-.164v.276h-.329v.274h-.241l-.087.145v.403h-.164v.55h-.328v.824h-.103l.103.344v1.351l.164.274v.695h.164v.403l.164.274v.421h.3l-.3.502v.824l-.028.047h.685v.274h2.838l.328.276h.309l.492.274h.837l.328.274h.329l.328.276h.984l.401.335.126.213h.166l.162.274h.328l.201.337.255.213h.145l.493.274h.328l.492.274h.181l.328.276h.364l.164.274h.164l.377.63h-.705l-.136.228-.575.322h-.107l-.101.168-.164.548-.176.295-.138.232v.679h-.242l-.44.735v.001l-.139.233v.677h-.164v.276h-.164v.419l-.241.403h-.655l-.163.276h-.58v.274h-.898l-.329-.274h-.364l-.164-.276h-.376v.194h.164v.678l.296.502h-.296v.548h-.164v.148l-.164.274v.824l-.164.274v.274l-.164.274v.451l.164.274v1.471l-.164.276v.403h-.164v.321l.164.276v.501h-.164v1.098h-.164v.55h-.164v2.664h.136v-.276h.492v-.274h.241l.162-.274h.252v-.274h.656v-.276h.492v-.274h.443l.145.243.146-.243h.741v-.274h.405l.164-.276h.607v.276h.087l.164.274h.328l.164.274h.282l.896.603.133.221h.164l.216.361.164.276.112.187h.164l.242.403v.145h.164v.276h.251l.164.274h.62l.326.274h.365l.164.276h.163l.165.274h.455l.328.275h1.621l.492.274h1.399l.196.655.152.255.001.001.173.293.166.55.151.254v.001l.164.274.164.275v.001l.171.286.328.824.105.175h.241v.403l.164.274v.55l.164.274v.824l.164.274v.586l.164 1.098v.109h.088l.215.363.113.187h.164l.207.346.426.478h.426v.348l.361.2h.788v.274h.022l.656.276h.47v.369l.213.179h.442v.275h.05l.328.274h.329l.364.306.985.548.339.285.279.235h.364l.2.334.256.214h.328l.377.317h.001l.278.233h.277v.274h.251l.165.274h.165l.212.362.001.002.15.246.327.275.179.301v.001l.339.567.165.55.492.822.132.444h.21v.274h.164v.428l.15.502.178.297v1.13l.164.824v.266l.162.55v.204l.049-.083h.164l.112-.187.216-.363h.165l.328-.548h.164l.112-.187.216-.363h.654l.087-.145v-.403h.164v-.276h.164v-.047l-.3-.501h.579l.405.677v.276l.304.506.189.318v.145h.085l.328-.274h.543v-.752l.442.752h.24v.357l.05-.083h.82l.164-.274h1.263v.274h.327v.274h.087l.164.274h.82l.164.276h.62l.218.182.109-.182h1.261v.274h.087l.164.275h.377v-.275h.493v-.274h.164v-.194h-.164v-.63h.164v-.274h.164v-.276h.328v-.274h.49v-.274h.328v-.276h.328v-.548h.242l.087-.145v-.405h.328v-.274h.164v-.274h.164v-.274h.164v-.276h.162v-.096h.016v-.178h.312v-.274h.569l.165-.274h.251v-.276h.405l.328-.548h.087v-.276h.328v-.274h.818v-.274h.329v-.096h.164v-.178h.492v-.276h.656v-.274h1.995v.274h.136v-.274h.935l.164.274h.704v-.274h1.148v-.274h.492v-.096h.356v.096h.164v.403l.139.231.001.002.031.052.655-.822.321.537v.777h-.164v.595l.164.276v.145h.164v.274h.087l.063.106.063-.106h.367l.308.519.261-.435v1.014h.299l-.165.276h.194v.63h-.164v.192h.164v.55h.654v.274h.251l.164.274h.241v1.1h.164v.274h.706l.164-.274h1.348l.241.403v.274l.087.145h.293l.085.072v-.072h.306l.656-.274h.646l.644-.359.111.374.009-.015h1.071v-.274h1.176v.274h.491v.404l.139.233.057.095.218-.182h.871v-.824h.313l.669-.224v-.231l.442-.369h.05v-.55h.427l.394-.438v-.85l.281.471.827-.555h.281l.128-.213.398-.335h.151l.446-.5.388-.324h.051v-.274h.164v-.147l.533-.89.4-.337h.128l.276-.461.214-.361h.089v-.276h.519l-.222-.37.234-.391.351-.295.001-.001.377-.315h.128l.164-.274h.164l.128-.215.401-.335h.128l.1-.169.151-.503v-.975h.164v-.048l-.328-.548v-.276l-.251-.42h-.165l-.241-.403v-1.098l-.164-.274v-1.519h-.656v-.274h-.164v-.276h-.464l.3-.501v-.403h.241l.087-.145v-.405h.028l-.028-.047v-.548l-.299-.503h.299v-.548h.164v-.276h.164v-.548h.164v-.421l.164-.275v-.678h.164v-.146l.164-.274v-.402h.164v-.55h.164v-.146l.242-.403h.087v-.147l.204-.342.614-.515v-.37h.241l.305-.509-.68-.382.462-.386v-.369h.241l.026-.042-.688-.461-.94-.789h-.164l-1.083-.904h.477v-.695l.189-.316.001-.001.215-.362h.742v-.466h-.162v-1.18h.818v-.276h.164v-1.494l.164-.55v-.426h.569l.113-.188.331-.555h-1.997v-2.599l-.086-.147h-.166l-.198-.335-.255-.213h-.201l-.216-.361-.112-.189h-.164l-.164-.274h-.164l-.38-.635-.189-.318v-1.196l.164-.274v-.55l.164-.274v-.176l-.087-.145h-.782l-.162.274h-.165l-.128.213-.4.335h-.735v-.274h-.251l-.164-.274h-.657l-.164-.274h-.818l-.164-.276h-.328l-.164-.274h-.164l-.164-.274h-.291l-.164.274h-.251v.274h-.567l-.164.276h-.251v.274h-2.323v-1.098h-.166v-.824h-.162v-2.278h.162V101l-.162-.276v-1.325h.328v-.274h.439l.329-.274h.05v-.274h.405l.058-.097-.094-.157-.305-.255-.328-.276-.392-.328v-.179h-.085l-.328-.55h-.164l-.529-.883-.305-.256-.278-.233h-1.514l-.162-.274h-.063v-.178h-.014v-.325l.163-.274v-.597h-.329v-.274h-.162v-.548h-.164v-.405l-.164-.274v-.274l-.299-.503h.54l.164-.274h.414v-.192h-.163v-.083l-.049.083h-.984l-.164.274h-.328l-.087.145v.403h-1.503v-.274h-.97v-.356h.117l.361-.201v-.347h1.116l.49-.276h.274l.164-.274h.415v-.274h.192l-.115-.194h-.405v-.274h-.087l-.164-.275h-.063v-.178h-.014v-.325l.241-.403h.415v-.274h.656v-.194h-.164V87.4h-.164v-.274h-.164v-.274h-.164v-.276h-.492v-.368l-.215-.18h-.277v-.63h.164v-.274h.328v-.152l-.051-.042h-.164l-.378-.315-.279-.235h-.603v-.274h-.492v-.274h-.656v-.082l-.214.356h-.164l-.164.274h-.366l-.063-.105-.011.018-.478.807-.266-.444h-.493l-.164-.276h-.094l-.126.423-.164.548-.157.525v.297l-.178.298-.15.503v.298l-.189.315-.157.264-.328.823-.171.287-.214.362h-.088v.274h-.241l-.112.187-.164.275v.001l-.343.574-.351.295h-.001l-.264.22v.37h-.328v.274h-.241l-.112.188-.214.362h-.089v.274h-.241l-.162.276h-.58v.274h-.452l-.781.522-.517.29-1.027.286h-.366v-.274h-.164v-.405l-.251-.42h-.241v-.204l-.554.185-.352.294h-.684l-.656.274h-.246l-.382-.213-.127.213h-1.589v-1.798l-.164-.55v-.396h-.165v-.276h-.164v-1.25l-.118-.397h-.21v-.678l-.164-.274v-.422h-1.525l-.164.276h-.857l-.164-.276h-2.297l-.163-.274h-.404v-.274h-.743l-.164-.274h-1.113l-.326-.276h-1.262v-.5l.028-.048h-.028v-.548h-.118l-.187-.626-.351-.293v-.31l-.087-.145h-.164l-.063-.105-.063.105h-.856l-.165-.274h-.164l-.164-.274h-.241v-.276h-.164v-.535l.392-.327.305-.257.422-.706-.109-.184-.219-.365.086-.144-.385-.321v-.181h-.087l-.364-.61-.422-.354.188-.312-.188-.314.495-.412h.214v-.05l-.087-.144h-.377l.248-.414-.235-.197-.205-.342v-.219l-.36-.2h-.296v-.276h-.164v-.275h-.164v-.953l-.086-.145h-.241v-.274h-1.968v-.274h-.164v-.276h-.164v-.403l-.086-.145h-.241V73.4h-.656v-.276h-.051l-.4-.335-.344-.574-.164-.275-.44-.736h-.165l-.216-.363-.146-.248-.256-.213h-.277v-.276h-.107l-.328-.822h-.356l.375-.632h.133l.164-.548h.119v-.147l.164-.274v-.677h.388l.43.24v-1.064h.165v-.55h.388l.432.242v-.114l.517-.864.139-.233v-.403h.192l-.115-.195h-.492l-.164-.274h-.213v.275h-.164v.275h-.52v-.275h-.655v-.275h-.164v-.274h-.251l-.213-.356v.082h-.608l-.164-.276h-.377v.55h-.164v.274h-.164v.275h-.014v.097h.014v.452h-.731l-.443.74v-.74h-.164v-.274h-.214l-.164.274h-.087v.477l-.57-.477h-.442v-.356l-.328.552v-1.02h-.148v-.178h-.016v-.096h-.134v.477l-.329-.274v.071h-.241l-.164.275h-.328l-.279.465v-1.014h-.656v-.178h-.328v-.096h-.164v-.276h-.463v1.016l-.279-.466h-.569v-.274h-.164v-.276h-.049l-.265.447-.164-.276-.063.105h-.771v-.824h-.135v.274h-.984v.274h-.52v-.548h-.164v-.55h-.136v.55h-.821l.165-.274h-.251l.162-.55h-.353l-.216-.36-.112-.188h-.376l.083-.14-.491-.41h-1.185l-.328-.548h-.048l.024-.04-.025-.042h.05l.115-.194h-.355v-.548h-.415l-.377-.63h.001l-.002-.002v.23l-.241.402h-.579zm3.936 1.648l.084-.14-.084-.07v.21zm1.283 1.016v-.252l-.075.252h.075zm46.92 81.899h-.029l.015.024.014-.024z", clipRule: "evenodd" }),
        React__default.createElement("path", { fill: "#017F34", d: "M174.382 149.29h.162l.164-.274h.164l.164-.276.164-.274h.164l.164-.274.164-.274h.164l.164-.276.164-.274h.657l.164-.274v-.274h.164v-.276h.162v-.274l-.162-.274h.162l.328.548v.276l.164.274.164.274.164.274v.276h.328l.328-.276h.655v-.274l.166.274h.162v.276l.164.274.164-.274H180.938l.165-.276H182.085v.276h.328v.274h.164l.164.274H183.562l.164.274h.654l.328.276.164-.276h.985v.276h.164l.164.274h.656v-.274h.49v-.276h.164v-.548h-.164v-.274h.164v-.276h.164v-.274h.329v-.274h.164v.274h.164v-.274h.164-.164.164v-.274h.328v-.276h.326v-.548h.164l.164-.276v-.274h.328v-.274h.164v-.274h.164v-.276h.165v-.274h.164v-.274h-.164.492v-.274h.492l.164-.276h.326v-.274h.328l.164-.274.165-.274h.164v-.276h.328v-.274H193.726v-.274h.326v-.275.275h.164v-.275h.493v-.275h.656v-.274H196.347h-.162H197.004v.274h.492v-.274h.164v.274h.164v-.274h-.164.492l.164.274H199.299v-.274H200.447v-.275h.492v-.275.275h.162v.275l.166.274.162.275.657-.824.164.275v.549h-.164V142.426l.164.276v.274h.164v.274h.164l.164.274.164-.274h.164l.164.274h-.164v.276h.164l.162.274.166-.274v.548h.162l-.162.274h-.328l.162.276.166-.276h.327v.276h-.165v.274h.165-.165v.274h.165v.274h-.165v.276H204.545v.274h.328l.164.274h.164v1.098h.164v.276h.49v.274l.165-.274h.164v.274l.164-.274.164-.276h1.148l.164.276v.274l.164.274h.328l.327.274v-.274h.164l.656-.274h.656l.492-.274.164.548.163-.274H211.758v.274h.164l.164-.274v-.274H212.906v.548l.164-.274h.329v.274l.162.274.164.276.328-.276h.984v-.822h.164l.821-.276v-.274l.326-.274h.164v-.55h.328l.492-.548v-.276l.164.276v-.276l.821-.548h.328l.162-.274.328-.274h.164l.492-.55.329-.274h.164v-.274h.164v-.276l.328-.548.164-.274.326-.276h.328l.656.55.329.274.164.274h.164l-.164.276-.328.548-.165.274.493.55.164.274h.164v.274l.328.274.49.276.328.274v.274l-.162.276v.274l-.166.274v.274l-.162.824v.55h-.164v.548h-.164v.276h-.164l-.164.548-.164.274.164.276h.164l.328.548h.326l.166.274h.162l-.162.276-.328.274h-.164l-.164.274-.492.275-.492.275-.165.275h-.164l-.164.274-.164.274-.164.276-.162.274h-.328l-.164.274v.55l-.164.274-.164.548V158.351l-.164.274v.274h-.164l-.164.824-.165.274v.55l-.164.548v.276l-.164.274v.274l-.328.55v.274l-.162.548v.274l-.166.276v.274l-.162.275h-.164v.275l.164.275v.274l.162.274.166.276v.274h.162v.824l.164.824.164.548v.55l.164.822.164.824V171.254h-.164v.548h-.164V173.45l.164.55h.164v.548h.165v.274h.164l.328.55.328.274.326.275h.328l.492.549.493.275.164.275h.656l.164.275h.164l.49.274h.164l.165.274h.164v.276h.164v.274l.164.274.164.274.164.276.328.274h.164l.164.274.328.55h.162v1.098h.164v.274h.165v.274l.164.274h.164l.492.55v.274h.164v.274h.164v.276h-.164v.274h-.656l-.493.274h-.49l-.164.276h-.656l-.164.274h-.328l-.493.274-.492.274h-.326l-.164.276h-.492l.164.274v.55l-.656.822-.821.824h-.162v-.274h-.166l-.326-.274-.328-.276h-.164l-.328-.274H218.809l-.164.274H217.825v.276H216.84v.274h-.164l-.162.274h-.328l-.164.275-.164.275h-.164l-.329.275h-.328v.548l.164.276v.274l.164.274V191.022l.165.274v1.098l.164.55v.274l.164.274v.55l.164.274V195.964h.164v.548l.162.276v.274l.166.274V198.16l.162.274v.274h.164v.55h.164V200.082l.164.274V201.181h.164v.548l.164.276.164.548.165.548.164.276v.274h.164V204.475l-.164.274V205.573h.164v.55l.164.274v.274h.164v.274l.164.276v.274l.162.548.164.276.164.274.164.548h.164l.164.276h.328l-.492.548-.164.274-.164.276h-.328v.274h-.162l-.166.274h-.162l-.164.274-.164.276-.164.274h-.165l-.328.275h-.164l-.328.274-.164.276h-.164l-.164.274-.164.274-.162.276-.164.548h-.164l-.164.274-.165.276-.164.274-.164.548v.276h-.164v.274h-.164l-.164.55h-.164l-.164.274v.274l-.164.274h-.162l-.164.276-.164.274v.274l-.164.274-.329.276-.328.274-.164.274-.164.274-.164.276-.164.548v.276l-.328.274-.164.548v.274h-.164v.276l-.164.274-.162.274-.164.55-.165.274-.164.55-.164.274v.549l.164.55v.55h-.328l-.164-.276-.656-.274H206.185l-.492-.274-.164.274H204.381l-.164.274H202.742v.276h-.328v.274H201.594v.274h-.655l-.328.274h-.328l-.164.276-.328.274h-.164l-.164.274h-.164l-.165-.548h-.326v-.276h-.164l-.164-.274-.164-.548-.328-.55-.164-.274-.164-.276v-.274h-.164v-.275l-.164-.549v-.549l-.164-.274v-.276l-.164-.274v-.274l-.165-.55v-.548l-.164-.55v-.274l-.162-.548v-.55l-.328-1.648v-.274l-.164-.274v-.274l-.164-.276V214.634h.164v-.55l.164-.274v-.274l.162-.276.166-.274v-.274h.162l.164-.275h-.492l-.49-.55-.164-.274V210.789l-.164-.274-.164-.276h-.164l-.164-.274-.164-.274v-.548l-.164-.276-.329-.274-.328-.55-.164-.548-.162-.274v-.55h-.164l.164-.274v-.274h-.164v-.276h-.164l-.164-.274v-.274l-.164-.276v-.274l-.164-.274v-.274h-.164v-.276h-.328v-.274h-.165l-.164-.274h-.164l-.492-.276-.162-.274-.328-.274-.492-.55h-.329v-.274h-.492l-.164-.274h-.49l-.492-.274h-.492l-.165.274v-.274h-.328l-.164-.276h-.164v-.274h-.164l-.328-.275-.164-.274h-.49l-.164-.275h-.329l-.164-.275h-.164l-.164-.274H183.888l-.655.274v-.274h-.328l-.164-.274v-.276h-.656v.276h-.492v.274h-.162l-.164.274h-.164v.55h-.165v-.275h-.328v.275h-.164l-.164.274v-.274h-.164l-.492.274H178.807v.275h-.164v-.275h-.164v-.274H177.659v-.275l-.164.275-.164-.275-.164.275-.164.274h-.326v.549h-.493v.276l-.164-.276v.276h-.328v.274h-.656l-.164.274h-.49l-.329.274h-.492v-.548l-.164-.824v-.275l-.164-.274v-.824l-.164-.824h-.164v-.548l-.164-.55-.164-.824v-.548l-.656.274-.491.274h-.492l-.164.276h-.164V194.316h.164v-.274h-.164v-.274h-.164.164v-.276h-.164.164V192.67v.274-.274h-.164v-.276h.164l-.164-.274v-.274h-.164v-.274h-.164v-1.374h-.164v-.274h.164v-.549h-.164v-.275l-.164-.274-.164-.275v-.275h-.163v-.275l-.166-.274-.162-.274-.164-.276-.164-.274v-.274h-.164v-.274l-.164-.276v-.274h-.164V184.981l.164-.274v-.274l.164-.55h.164l-.164-.274h.164v-.55l.164-.822-.164-.276-.164-.274v-.548l.164-.276v-.274l.164-.274-.164-.55h.164l.164-.274h.162v-.548l-.162-.276v-.274l-.328-.824v-.274h-.164v-.55l-.164-.275-.164-.274-.164-.275-.164-.275h-.164l-.164-.274h.164l-.164-.274v-.276l-.164-.274v-.274l-.164-.274v-.55l-.163-.274-.166-.276v-.274h-.162V171.802h-.164v-.274h-.164.164v-.274l-.164-.274v-.55h-.164v-.274h-.164v-.274l.164-.276h-.164l-.164-.274-.164-.274.164-.274-.164-.276h-.164v-.274l.164-.274h.328l.164-.274.164-.276.164-.274.326-.274.166-.274h.163l.164-.55h.164l.164-.274.328-.276.164-.274h.164l.164-.274.328-.275h.328v-.275h.164l.163-.275h.164l.328-.55.656-.548h.164l.164-.274.164-.276.328-.274h.164l.163-.274h.166l.162-.276.328-.274h.328l.328-.274-.164-.274v-.276h.164V159.723h.164l.164-.274.164-.276h.164l.164-.274v-.274l.164-.274.165-.276h.162l.164-.274h.492l.164-.274h-.328v-.274h-.164v-.55l-.164-.274.164-.276v-.548l.164-.55v-.548l.164-.274v-2.747l-.164-.824v-.274h-.328v-.274l-.164-.276v-.548h-.162z" }),
        React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M202.106 140.468l.322.536v.777h-.164v.596l.164.276v.145h.164v.274h.087l.063.105.063-.105h.366l.31.518.259-.428v1.008h.297l-.163.274h.192v.632h-.164v.192h.164v.55h.657v.274h.251l.164.274h.241v1.098h.164v.276h.703l.164-.276h1.351l.241.405v.274l.087.145h.292l.084.07v-.07h.306l.656-.274h.646l.645-.359.111.371.007-.012h1.072v-.274h1.176v.274h.492v.403l.138.232.057.096.217-.183h.871v-.822h.313l.672-.226v-.229l.439-.369h.051v-.55h.427l.393-.438v-.856l.282.474.827-.552h.28l.126-.213.402-.335h.149l.447-.501.388-.323h.051v-.274h.164v-.148l.532-.889.399-.337h.458l.705.591.352.293.127.214h.377l-.324.545h-.001l-.425.71.417.465.121.202h.241v.369l.251.21.491.276.404.338v.405l-.162.276v.276l-.166.274v.241l-.162.824v.711h-.164v.548h-.164v.276h-.21l-.132.443-.121.202.058.097h.164l.328.548h.325l.166.274h.373l-.335.571-.401.335h-.128l-.137.229-.534.297-.45.253-.192.319h-.164l-.276.462-.164.275v.001l-.214.361h-.328l-.087.145v.55l-.178.297-.15.502v2.221l-.164.274v.403h-.196l-.142.711-.155.258v.527l-.164.548v.299l-.164.274v.274l-.328.55v.251l-.162.548v.298l-.166.276v.273l-.239.403h-.087v.049l.164.274v.275l.137.231v.001l.191.317v.146h.162v.984l.159.799.169.565v.558l.161.805.167.841v1.02h-.164v.548h-.164v1.444l.119.398h.209v.548h.164v.274h.088l.364.611.305.255.277.233h.343l.525.587.508.282.137.23h.656l.164.275h.109l.491.274h.218l.164.274h.241v.276h.165v.402l.303.507.148.25.255.213h.201l.216.36v.001l.276.463h.239v1.098h.164v.274h.164v.403l.087.145h.143l.591.66v.164h.164v.274h.164v.632h-.164v.274h-.788l-.492.274h-.436l-.164.276h-.656l-.164.274h-.383l-.985.548h-.271l-.164.276h-.279l.028.047v.662l-.702.878-.879.883h-.414v-.274h-.053l-.376-.315-.278-.235h-.164l-.328-.274h-1.145l-.164.274h-.744v.276h-.984v.274h-.24l-.163.274h-.328l-.112.187-.001.001-.215.362h-.201l-.328.274h-.215v.322l.164.276v.273l.164.274v.824l.164.275v1.121l.164.55v.251l.165.274v.55l.164.274v1.519h.164v.678l.162.276v.272l.166.275v.825l.162.274v.144h.164v.55h.164v.953l.164.274v.696h.164v.677l.151.252.328 1.097.177.299v.145h.165v1.051l-.165.274v.597h.165v.679l.164.274v.145h.164v.403l.164.276v.297l.148.502.153.257.175.293.133.442h.132l.165.276h.625l-.747.832-.155.259v.001l-.216.362h-.251v.274h-.24l-.166.274h-.161l-.112.187-.001.001-.164.275v.001l-.216.36h-.2l-.328.274h-.164l-.255.214-.201.336h-.164l-.276.461v.001l-.151.256-.196.655h-.196l-.112.187-.164.276-.153.255-.15.502v.428h-.164v.274h-.209l-.164.55h-.196l-.087.145v.274l-.241.403h-.162l-.112.189h-.001l-.138.232v.274l-.205.342-.351.295-.001.001-.305.254-.312.523-.153.256-.15.502v.333l-.351.293-.141.472v.426h-.164v.147l-.189.316-.001.001-.15.254-.164.551-.164.274-.165.55-.15.251v.473l.164.55v.753h-.607l-.186-.312-.569-.237h-3.288l-.382-.213-.127.213h-1.148l-.165.274h-1.397v.275h-.328v.275h-.821v.274h-.767l-.328.274h-.292l-.128.215-.401.335h-.128l-.164.274h-.397l-.164-.548h-.372v-.276h-.087l-.227-.38-.164-.548-.317-.531-.164-.275-.189-.318v-.145h-.164v-.426l-.164-.55v-.524l-.164-.275v-.275l-.165-.274v-.298l-.164-.55v-.548l-.164-.55v-.274l-.162-.548v-.558l-.328-1.649v-.242l-.164-.274v-.274l-.164-.276v-1.873h.164v-.422l.164-.274v-.273l.187-.318.001-.002.14-.231v-.321h-.068l-.554-.622-.198-.33v-.824l-.139-.233-.113-.189h-.163l-.405-.677v-.548l-.124-.208-.328-.274-.355-.595-.164-.548-.176-.297v-.421h-.3l.3-.501v-.047h-.164v-.276h-.087l-.241-.403v-.274l-.164-.276v-.274l-.164-.274v-.145h-.164v-.276h-.329v-.274h-.087l-.164-.274h-.109l-.575-.322-.171-.289-.314-.263-.448-.5h-.427v-.274h-.415l-.164-.274h-.435l-.493-.275h-.345l-.443.74v-.74h-.251l-.164-.275h-.241v-.275h-.05l-.401-.334-.128-.214h-.491l-.164-.276h-.327l-.165-.274h-.164l-.164-.274h-1.011l-.869.364v-.364h-.251l-.241-.403v-.147h-.3v.276h-.492v.274h-.24l-.164.274h-.087v.55h-.733l-.443.74v-.706l-.432.24h-.687v.274h-.52v-.274h-.164v-.274h-.705l-.101.171-.164-.276-.011.018v.001l-.216.36h-.25v.549h-.492v.745l-.279-.47h-.213v.275h-.733l-.164.274h-.527l-.328.274h-.735v-.709l-.164-.824v-.242l-.164-.274v-.856l-.132-.664h-.196v-.7l-.159-.533-.169-.849v-.299l-.401.167-.521.292h-.438l-.164.276h-.443v-4.118h-.164v-.632h.028l-.028-.047v-.145h-.164v-.274h-.164v-1.374h-.164v-.63h.164v-.193h-.164v-.404l-.328-.548v-.148h-.163v-.402l-.14-.231-.001-.002-.162-.274-.164-.275-.189-.316v-.146h-.164v-.403l-.164-.276v-.145h-.164v-1.051l.164-.274v-.251l.204-.683-.176-.293h.3v-.39l.154-.772-.129-.217-.189-.316v-.646l.164-.276v-.274l.149-.249-.21-.704h.302l.164-.274h.085v-.322l-.162-.276v-.288l-.328-.824v-.131h-.164v-.678l-.303-.507-.164-.275-.112-.188h-.164l-.377-.63h.164l-.028-.046v-.276l-.164-.274v-.275l-.164-.274v-.55l-.137-.231-.001-.001-.191-.317v-.146h-.162v-.824h-.164v-.677l-.164-.274v-.421h-.164v-.274h-.164v-.501l.053-.089-.192-.321-.219-.365.165-.275-.058-.097h-.241v-.501l.241-.403h.328l.112-.188.164-.275.18-.3.326-.275.203-.334h.13l.164-.55h.196l.127-.213.328-.276.201-.335h.164l.128-.214.401-.335h.214v-.275h.241l.162-.275h.165l.291-.489.729-.609h.128l.112-.187.18-.302.401-.335h.127l.162-.274h.166l.126-.214.401-.336h.328l.162-.135-.111-.186v-.503h.164v-.822h.241l.112-.187.216-.363h.164l.087-.145v-.274l.189-.316.216-.363h.163l.164-.274h.251v-.192h-.164v-.679l-.194-.323.194-.325v-.525l.164-.55v-.572l.164-.274v-2.679l-.164-.824v-.114h-.328v-.403l-.164-.276v-.597h.015v-.178h.062l.164-.274h.164l.112-.189.216-.361h.164l.328-.548h.164l.113-.189.215-.361h.657l.087-.145v-.403h.164v-.276h.162v-.047l-.296-.501h.575l.405.677v.276l.492.822v.147h.085l.329-.276h.541v-.734l.444.734h.24v.358l.049-.082h.82l.164-.276h1.262v.276h.328v.274h.087l.164.274h.82l.164.274h.619l.217.183.109-.183h1.264v.276h.086l.165.274h.377v-.274h.49v-.276h.164v-.192h-.164v-.63h.164v-.276h.164v-.274h.329v-.274h.492v-.274h.328v-.276h.326v-.548h.241l.087-.147v-.403h.328v-.274h.164v-.274h.164v-.276h.165v-.274h.164v-.096h.013v-.178h.315v-.274h.569l.164-.276h.249v-.274h.405l.329-.548h.087v-.276h.328v-.274h.82v-.274h.326v-.097h.164v-.178h.492v-.275h.657v-.274h1.994v.274h.137v-.274h.935l.164.274h.703v-.274h1.149v-.275h.492v-.097h.356v.097h.162v.403l.142.233.031.053.654-.822zm-1.183.489v.146l.191.315.001.002.292.497.658-.826.007.012v.322h-.164v1.05l.164.275v.404h.164v.274h.241l.265.442.15-.251v.359h.241l.251.425v.041h-.461l.472.802.151-.253v1.181h.821v.274h.405l.164.274h.087v1.098h.164v.276h.49v.74l.329-.548v.548l.494-.827h.001l.112-.189h.946l.087.147v.274l.241.403h.364l.57.478v-.478h.021l.657-.274h.666l.339-.189.217.726.318-.537h.541v.274h.443l.241-.403v-.145h.464v1.014l.443-.74h.05v.145l.187.316.271.456.439-.369h1.097v-.822h.015l.97-.326v-.319l.213-.179h.277v-.55h.229l.483-.537.272.458v-.828l.697-.465h.375l.199-.335.255-.213h.179l.536-.6.269-.224h.278v-.274h.164v-.405l.451-.755.254-.214h.198l.607.508.305.255.177.294-.028.047v.001l-.56.934.569.635.207.346h.087v.179l.404.338.491.276.251.21v.143l-.162.275v.273l-.166.274v.307l-.162.824v.389h-.164v.548h-.164v.276h-.119l-.195.654-.208.346.27.454h.165l.328.548h.327l.141.234-.013.022-.255.212h-.2l-.191.32-.451.251-.534.299-.136.229h-.165l-.379.634-.165.277-.111.187h-.327l-.241.402v.55l-.15.251-.178.595v2.175l-.164.274v.145h-.132l-.187.937-.174.29v.573l-.164.548v.253l-.164.274v.274l-.328.55v.297l-.162.549v.25l-.166.276v.275l-.086.145h-.24v.503l.164.274v.273l.187.316.001.001.14.234v.403h.162v.663l.169.85.159.531v.541l.168.84.16.807v.628h-.164v.548h-.164v1.852l.21.702h.118v.548h.165V175h.24l.292.49.352.293.375.315h.314l.459.513.476.266.191.321h.657l.164.274h.219l.49.275h.109l.165.274h.087v.276h.164v.145l.353.59.179.302.401.335h.128l.112.187.38.637h.085v1.098h.164v.274h.164v.145l.242.403h.185l.394.44v.384h.164v.468h-.525l-.492.274h-.545l-.164.276h-.656l-.164.274h-.274l-.984.548h-.381l-.164.276h-.705l.3.501v.439l-.612.766-.671.674v-.184h-.279l-.277-.232-.377-.318h-.165l-.328-.274h-1.476l-.164.274h-.898v.276h-.984v.274h-.087l-.163.274h-.327l-.216.361v.001l-.113.188h-.127l-.328.275h-.442v.774l.164.276v.275l.164.274v.824l.164.274v1.075l.165.55v.297l.164.274v.55l.164.274v1.777h.164v.419l.162.276v.275l.166.274v.823l.162.274v.403h.164v.55h.164v.696l.164.274v.952h.164v.42l.178.299.328 1.096.151.253v.403h.164v.597l-.164.274v1.051h.164v.421l.164.274v.403h.164v.145l.164.276v.251l.176.594.175.295.153.255.196.654h.195l.164.276h.03l-.237.264-.173.289-.112.189h-.405v.274h-.085l-.165.274h-.163l-.216.361-.164.276-.112.187h-.128l-.328.275h-.164l-.401.334-.128.216h-.164l-.38.634-.001.001-.173.295-.132.442h-.132l-.216.36-.001.001-.164.276-.175.292-.178.595v.124h-.164v.274h-.118l-.165.55h-.132l-.241.403v.274l-.087.145h-.163l-.215.362v.001l-.189.316v.274l-.124.206-.305.256v.001l-.351.293-.344.574-.175.295-.178.594v.219l-.305.255-.187.624v.122h-.164v.405l-.139.232v.001l-.174.293-.164.549-.164.274-.164.55-.178.297v.624l.164.55v.346h-.049l-.142-.24-.743-.31h-3.267l-.603-.336-.201.336h-1.148l-.164.274h-1.552v.276h-.328v.274h-.82v.274h-.541l-.329.274h-.364l-.201.337-.255.213h-.2l-.118.197-.141-.471h-.281v-.276h-.241l-.101-.169-.164-.548-.339-.569-.165-.274-.138-.233v-.403h-.164v-.123l-.164-.55v-.571l-.165-.274v-.276l-.164-.274v-.251l-.164-.55v-.548l-.164-.55v-.274l-.162-.548v-.542l-.328-1.648v-.305l-.164-.274v-.274l-.164-.276v-1.419h.164v-.679l.164-.274v-.275l.136-.232.002-.002.19-.315v-.146h.085l.377-.63h-.726l-.426-.477-.13-.218v-.824l-.19-.316-.215-.363h-.164l-.252-.419v-.548l-.204-.344-.328-.274-.302-.505-.164-.548-.148-.251v-.679h-.028l.028-.047v-.501h-.164v-.276h-.241l-.087-.145v-.274l-.164-.276v-.274l-.164-.274v-.403h-.164v-.276h-.329v-.274h-.241l-.164-.274h-.218l-.41-.23-.154-.259-.341-.286-.537-.599h-.23v-.274h-.569l-.164-.274h-.545l-.492-.274h-.929l-.165-.276h-.087v-.274h-.277l-.256-.214-.2-.335h-.49l-.164-.275h-.329l-.164-.275h-.164l-.164-.274h-1.285l-.441.185v-.185h-.405l-.087-.145v-.405h-1.012v.276h-.492v.274h-.085l-.164.274h-.242v.275h-.492v.275h-.36l-.492.274h-.923v-.274h-.82v-.745l-.342.575-.164-.276-.317.533-.112.187h-.403v.549h-.378l-.279-.47v.746h-.328v.274h-.579l-.164.274h-.454l-.328.274h-.25v-.388l-.164-.824v-.306l-.164-.274v-.792l-.196-.985h-.132v-.396l-.169-.567-.159-.798v-.798l-.912.381-.459.256h-.547l-.049.082v-1.922h.164v-.63h-.164v-1.292h.136l-.3-.501v-.403h-.164v-.274h-.164v-2.197h-.164v-.147l-.329-.548v-.404h-.162v-.146l-.19-.315-.001-.002-.162-.272v-.001l-.164-.276-.139-.232v-.403h-.164v-.145l-.164-.276v-.403h-.164v-.597l.164-.274v-.297l.119-.398h.345l-.164-.274h.028v-.71l.174-.872-.199-.335-.139-.232v-.45l.164-.276v-.274l.179-.299-.118-.396h.026l.164-.274h.239v-.775l-.162-.276v-.26l-.328-.824v-.417h-.164v-.422l-.189-.316-.164-.274-.164-.275-.167-.28-.3-.501v-.276l-.164-.274v-.274l-.164-.274v-.55l-.188-.315-.141-.235v-.403h-.162v-.824h-.164v-.419l-.164-.274v-.679h-.164v-.274h-.164v-.047l.299-.503h-.376l-.222-.37.164-.274-.27-.454h-.087v-.047l.087-.145h.328l.216-.361.164-.276.148-.248.326-.274.13-.213h.194l.164-.55h.133l.2-.335.328-.276.128-.213h.164l.2-.335.256-.214h.441v-.276h.088l.162-.274h.164l.364-.61.584-.488h.2l.216-.36v-.001l.149-.25.255-.213h.201l.162-.274h.166l.198-.337.255-.213h.328l.495-.413-.217-.362v-.049h.164v-.822h.087l.216-.361.112-.189h.164l.241-.403v-.274l.139-.232.113-.189h.162l.164-.274h.492l.377-.63h-.464v-.274h-.164v-.421l-.135-.226.135-.226v-.571l.164-.55v-.525l.164-.274v-2.813l-.164-.824v-.435h-.328v-.145l-.164-.276v-.45l.087-.145h.164l.216-.362v-.001l.112-.187h.164l.216-.361.112-.187h.164l.216-.363.112-.187h.656l.242-.403v-.145h.164v-.276h.134v.147l.492.822v.405h.571l.328-.276h.74v.147l.342.572.265-.443h.821l.164-.276h.703v.276h.328v.274h.241l.164.274h.821l.164.274h.69l.439.369.219-.369h.706v.276h.241l.164.274h.935v-.274h.49v-.276h.164v-1.098h.164v-.274h.657v-.274h.164v-.274h.328v-.276h.326v-.548h.087l.241-.405v-.145h.328v-.274h.164v-.274h.164v-.276h.164v-.274h.165v-.274h.328v-.274h.415l.164-.276h.403v-.274h.251l.216-.361.112-.187h.241v-.276h.329v-.274h.82v-.274h.49v-.275h.492v-.275h.657v-.275h1.282v.275h1.177v-.275h.049l.164.275h1.261v-.275h1.149v-.274h.298zm2.475 2.77l.015-.025h-.03l.015.025z", clipRule: "evenodd" }),
        React__default.createElement("path", { fill: "#386193", d: "M21.5 235.52v-.546l-.163-.545v-.546l-.164-.544h-.65l-.163-.274h-.326l-.164-.273h-.162l-.326-.272h-.163l-.162-.274h-.326v-.272h-.162l-.326-.272h-.164v-.273h-.163v-.274h-.324l-.164-.272v-.272h-.489v-.274l-.162-.272-.164-.272v-.273l-.162-.274v-.544h.162l.164-.274v-.272h.651v-.273h.164l.162-.274h-.326l-.489-.272h-.326l-.162-.272h-.488V226.247H15.8v-.273l-.164-.272v-.274l-.162-.544v-.274h-.164v-.545h-.162v-.274h-.162v-.272h-.164v-.272h-.163v-.272h-.326v-.274h-.162v-.545h1.954l.488.272h.653l.162.273.164.274h.487v.272h.49l.162.272h.488l.163.272v-.272h.164v-.544h-.164l-.163-.274.163-.273.164-.272.162-.274-.162-.272v-.272l.162-.274v-.272l.326-.273h.163l.163-.272h.163v-.274h.326v-.272h.488l.163-.272.326-.274h.326v-.273h.162v-.272h.163l.164-.272v-.274h.162l.162-.272.164-.272h.162l.162-.274h.491v-.273h.324v.273h.653l.162-.273h1.139l.164.273h.651l.326.274v-.274h.326v.274-.274h.489v-.273h.65v-.272h.164-.164v-.274h.164v-.272h.325v-.272h.488v-.272h-.162.162v-.275h.164l-.164-.272h.164-.164l-.162.272v-.272h.162-.162v-.272h-.162.162v-.272.272h.162v-.272h-.162v-.274h.326v-.272h-.164.653v-.274h.326v-.273h.324v-.272h.165v-.272h.162v-.274h.162-.162.162v-.272h.49v-.272h.162v-.275h.163-.325l.162-.272h.163-.163.163l.164-.272h.65v-.274h.163v-.272h.49v-.272h.162-.162.162l.162-.273h.164v-.274h.163v-.272h-.163.163l.162-.272h-.163.163v-.272l-.163-.274v-.272h.163v-.273h-.163.163-.163v-.274h-.162.163v-.272h-.327v-.272h-.162l.162-.272v.272h.164v-.272h-.164.164v-.274h-.164v.274l-.162-.274h.162l-.162-.273h-.162v-.272h-.326v-.274h.162v-.272h.164-.326v-.546h.326-.326v-.272h-.164v-.273h.164-.489.162v-.272h.163-.163V203.61h.163v-.274H32.9v-.545h.164l.162-.274v-.272H32.9v-.272l.164-.272-.164-.274-.162-.273h-.326v-.272h.164v-.274h-.164v-.272h.326l-.162-.272v-.547l.162-.272v-.272h-.162v.272-.272h-.164v-.274h-.163.163v-.544h-.163v.272-.272h.163v-.274h-.163v.274-.274h-.162l-.164-.273-.162-.272h-.164v-.272h-.162v-.274h-.327v.274h-.65l.164-.274h-.164v.274h-.162v-.274.274h-.164v-.274h-.163.327v-.272h-.327v-.272h-.164v.272h-.324v-.272h-.164l.164-.547v-.272h.162v-.272h.162v-.546l.164-.273h.163v-.274h.49l.162-.272v-1.363h.651v-1.364h.326l.162-.273h.164v-.546l.162-.272h.327l.65-.272-.162-.274.162-.272v-.545h.163l.814-.274v-.544h.164v-.274h.163l.162-.273v-.272h.164l.162-.274h.162l.164-.272h.326v-.272h.163v-.546l.162-.273.164-.272.162-.272v-.274l.162-.272h.164v-.274l-.164-.273h-.324l-.326-.272-.326.272-.163-.272-.326-.272-.162-.274-.164.274v-.274h-.163l-.488-.272h-.65l-.49-.272h-.325v-.273H31.599l-.164-.274H30.622l-.164-.272H29.48l-.164-.272h-1.303v-.274h-.487v-.272h-.652v-.272l-.163.272-.164-.272h-.326v.272h-.651v-.272h-.326l-.162-.274h-.162v-.273h-.327v-.272h-.162v.272h-.326v-.272h-.326v-.272h-.163v.272-.272h-.326l-.162-.274h-.488v-.272h-.327l-.162-.273-.164-.274-.162-.272h-.164v-.272h-.325l-.164-.272h-1.139v-.274h-.164.164l.163-.272V176.062h.163v-.272h.163v-.274h.162v-.272h.164-.326v-.273h.162v-.272l.164-.274v-.272h.162l.162-.272v-.274h.164l.163-.272.488-.273v-.274h.326l.163-.272h.326l.162-.272h.488l.165-.272h.65v-.274h.327v-.272h.162v-.273l.164-.272h.324l.164-.274H26.222v-.272h.326l.164-.272h.489l.326-.274h.162l-.162-.273h.487v-.272h.326v-.272h.326v-.274h.326v-.272h.325l.164-.274h.651l.164-.272v.272h.162v-.272h.164l.162.272v-.272l.162.272H31.923l.164-.272.162-.273h-.162v-.272h.162v.272-.272h.163-.163v-.274h.489v-.272h.326v-.272.272h.162v-.272H34.041v.272h.162v-.272l.164.272v-.272H35.507v.272h.326v.272-.272h.162v.272h.164v-.272h.651l.164-.272.162-.273v.273h.162v-.273h.164v-.274h.489l.162-.272h.326v-.272h.162l.164-.274h.163v.274h.162v-.274h.326v.274-.274h.489v-.272.272h.162v-.272h.164v.272h.162v-.272h.326v.272h.489v.274h.488v.272h-.162.162l.162.272v-.272l.164-.272h.489v-.274h.326v-.272H43l.326-.272v-.274h.489l.324.274v-.274l.165-.273H45.117l.489.273v-.273h.162l.162-.272h.489l.164-.272h.162v-.274h.164v-2.181l.813-.273-.163-.274-.162-.272-.488-1.09-.164-.273-.325-.274-.164-.544-.326-.546-.162-.545-.326-.546-.489-.818-.162-.273-.164-.546-.325-.544-.652-1.365-.813-1.635-.652-1.091-.163-.274v-.272l-.652-1.091-.162-.272-.164-.546-.163-.272-.162-.274-.977-1.909-.326-.545-.488-.818-.163-.272-.164-.547h.327v.273l.162-.273h.162l.164.273h.326v.274h.326l.163-.274v.274h.488l.326-.274h.163l.162.274h.488l.489.272v-.546h.326v.274h.164v.272H43v.272h-.162v.274l.162.272h.162v.272h.489v.273h.488v.274l.165-.274h.326v-.273H46.094v-.272h.162l-.162-.272h.326v-.274h.651v-.272.272h.162v-.272h.489v-.272h.164l.162-.274v.274h.488v-.274h.327v-.273h.162-.162l.162.273v-.273h.488v-.272h.164l-.164-.274h-.324v-.272h.488v-.272h.327v.272-.272h.324l.164-.272v.272h.324v-.272h.489v.272-.272h.326v.272l.164-.272h-.164v-.275H52.446v.275h.326-.164 1.141v.272h.162v.544l.163.274v-.274h.326v.274h-.163.163v.272h.164v-.546h.162v-.272h.489l.162-.272v.272-.272h.652v-.272h.651l.164-.275v-.272h.162v-.272h.162v-.274h.491v-.272h.162l-.162-.272v-.273h.162v-.274h.162-.162v-.272h-.162.162v-.546h.162l.164-.272h.162l.163-.272h-.163v-.547l.163-.272.163-.272.163-.274V135.697h.162v-.546h.326v-.272l.164.272h.162v-.272h-.162l.162-.272h.163l.164-.273h.162v-.274h.326l.162-.272v-.272h-.162.162v-.272h.489v-.274h.164v-.273h.488v-.272h.163l.162.272h.326-.162v-.272h.324v.545h.164v-.273h.163l.163.273v-.273h.163l.162-.272v-.274h-.162.162v-.544h.162v.272-.272h.164v-.272h.162v-.274h.489v-.273h.326-.162v.273h.162v-.273h1.303v-.272h.326v-.274h.325v.274l.164-.274h.326l.162-.272v-.272h.163l.164.272v-.272h.326v-.274h.162v-.273h.162v.273h.163v-.273h.164l.162-.272h.326v.272l.162-.272h.164v.272l.163-.272h.326v-.272h.162v-.274h.326v-.272h.163v.272-.272h.326v-.272h.326v-.547.273l-.164-.273v-.272l-.162-.274v-.272h.162v-.272l.164-.272h.162v-.275h.326-.164v-.272h.164v-.272h.163v.272-.272h.162v-.274h.49v.274h.162v-.274h.327l.162-.272h.326v-.272h-.164.164l.162-.274h.162v-.545H75.573l.164.272v-.272h.162v.272h.489v.273h-.162.162v.274h.488v.272h.164v-.272h.163v.272l.162-.272v.272h.326v.272h.164v-.272.272-.272h.325l.162.272h.164v.274h-.326.162v.272l-.162-.272v.272h.326v.547h.162v.272l-.162-.272v.272h-.164.164-.164v.272h.326-.162l.162.272h-.162.162v.274h.164l.162.272v-.272h.326l-.162.272h.162v.273h.163v-.273h.488v.273h.326v.274h.327l.162.272v1.09h.162l.164.273h.162v.274h-.162.162l.162.272h.164v-.272h.327l.162.272h.326v.272h.162v.274h.651v.272h.164v-.272h.651-.162l.162-.274.164.274V128.879l.162-.272v-.274h.162v-.272h.164l.163-.272.162-.274h.164v-.273h.162l.164-.272.162-.274H86l.324-.544h1.141v-.272l.162-.547.164-.546v-.272h.325l.164-.272h.162v-.274h.162l.164-.273v-1.09l.162-.546V120.969l-.162-.545v-.272l-.164-.274-.162-.272h-.162l-.164-.272h-.163l-.162.272h-.326l-.162.272H86.323v-.272h-.324v-.272h-.164V118.515l.164-.274.162-.272h.162l.164-.272.162-.272h.162v-.274l.164-.273.163-.272.164-.274h.162v-.272h.162v-.272h.326v-.274h.163l.164-.272h.324v-.273h.164v-.272h.326v-.274h.651v-.272h.326v-.272l.163-.274h.162l.164-.272v-.547l.162-.272v-.272h.326v-.272h.651v.272l.164-.272h-.164.326v-.274h.162v-.273h.327l.162-.272H93v-.272H93.816v-.274h.326l.162-.272h.162v-.272h.653v-.274h.651v-.273h.488v-.272h.653l.162-.272h.326l.162-.274.164-.272h.325v-.273h.164v-.274l.162-.272.164-.272v-.274l.162-.272v-.272h.162v-.547H99.841l.164.274h.163v.273h.326v.272h.326v-.272h.324v.272h.165v-.272h.162v.272h.488v-.272h.326-.162v-.273h.651l.162-.274h.489l.164-.272h.65v.272h.164v.274h.651v.273h.326v-.273h-.164.653l.162-.274v.274h.164v-.274h.324l-.162-.272h.326v-.272h.651v-.274h.162v-.272h-.324v-.272h.162v-.275h.162v-.272h.491v-.272h-.164.164v-.272.272h.324v-.546h.164v-.272h1.139v.272h.489v.274H111.894v-.274h.489l.326-.272h.488v-.273h.165v.273h.162-.162.812v.272h.327v.274h-.163.489v.272h.162v.544h.164v.275h-.164.164v.272h-.164.326v.272h.489v.274l-.164.818.49-.274.162 1.091v.546h.815l.488.272h.651l-.162.273h.977l.652.274h.163l.488.272.326.272h.325l.49.274.324.272v-.272h.164l.163.272h.488l.162.273h.327l.326.274h.488l.327.272h.65l.162-.272.327-.274h.162v.274l.164.272.162.544.162-.272h.164l.325.272.164-.272.162-.272v-.272H127.693v.272h.162l.488.544.164.274-.164.272h.164v.273h.163v.274h-.163.163v.272h-.163v.272h-.164v.272h-.324v.274h-.164l-.162.273v.272h-.164v.546h-.325v.272h-.162v.274h.162v.272h-.162l.162.545v1.364l.162.273V117.969h.163v.272l.164.274v.545h.162l-.162.274V120.15l-.164.274H128.343v.273h2.933l.326.272h.325l.488.274H133.23l.326.272h.326l.325.272H135.184l.326.273.164.274h.162l.162.272h.327l.162.272.326.274h.162l.489.272h.326l.489.272h.164l.324.273h.326l.162.274h.164l.163.272h-.489l-.162.272-.49.274h-.162l-.163.272-.164.547-.162.272-.162.272v.546h-.164l-.162.272-.163.273-.164.274-.162.272v.546h-.162v.272h-.164v.545l-.162.274h-.651l-.164.272h-.651v.272h-.326l-.162-.272v.272h-.164l-.325-.272h-.326l-.162-.272h-.653v.544h.163v.546l.164.273h-.164v.546h-.163v.272l-.162.272V132.97l-.164.274v.272l-.162.272v.546l.162.273v1.362l-.162.274v.273h-.162v.546l.162.272v.272h-.162V138.697h-.164v.546h-.163V141.971h-.162.162v.272h.327v.272-.272.272h.324v-.272h-.162v-.272h.488v-.272h.163l.164-.275h.326v-.272h.651v-.272h.488v-.274h.162l.164.274h.163l.162-.274H135.998v-.272h.327l.162-.272h.326v.272h.162l.164.272h.325l.164.274h.324l.815.544.164.275h.162l.162.272.164.272.163.272h.162l.164.274v.272h.162v.273h.326l.163.274h.65l.327.272h.326l.162.272h.164l.162.274h.489l.326.272H144.793l.488.272h1.303l.162.547.164.272.163.272.164.546.162.273.162.274.164.272.162.272.327.818.162.273h.162v.272l.164.274v.544l.162.274V150.972l.164.272v.544l.163 1.093v.272h.162l.164.272.162.272h.162l.164.275.489.544h.324v.272l.49.274h.651v.272h.162l.653.273h.326v.274l.324.272h.327v.272h.162l.326.274h.326l.325.272.979.545.324.274.326.272h.327l.162.272.326.274h.326l.325.272.326.273h.162v.274h.326l.163.272h.164l.162.272.164.272.324.274.162.272.165.273.162.274.162.544.164.272.162.274.164.273.162.544h.163v.274h.164v.272l.162.546.162.273v1.09l.164.819v.272l.162.546v.545h.163v.546l.164.272v.274h.326v.272l.162.819V172.79l-.162.272v.545l-.164.546v.546l-.162.272.162.273v.546h.164v.272h.324l-.162.272h-.488l-.164.274h-.163l-.162.273-.164.272v.274l-.162.272h-.162l-.164.272-.163.272h-.162V179.062h-.164v.274l.164.272-.326.272h-.326l-.327.273-.162.274h-.162l-.164.272h-.162l-.326.272-.163.274-.162.272h-.164l-.651.546-.326.545h-.162l-.164.272h-.162v.274h-.327l-.324.272-.164.272h-.162l-.162.273-.327.274-.164.272h-.162l-.162.546h-.164l-.162.272-.327.273-.162.274-.162.272-.164.272h-.324l-.165.272v.274h.165l.162.272-.162.273.162.274.162.272h.164l-.164.272v.274h.164v.272h.162v.545l.162.274v.272h-.162.162v.272h.164V191.063h.163v.272l.162.274.164.272v.546l.162.273v.272l.162.274v.272l.164.272h-.164l.164.272h.163l.164.274.162.273.162.272.164.274v.544h.162v.274l.327.817v.274l.162.272v.545h-.162l-.165.274h-.162l.162.544-.162.274v.272l-.162.272v.547l.162.272.162.272-.162.819v.546h-.162l.162.272h-.162l-.164.546v.272l-.162.273v.546l-.162-.272h-.164l-.163.272H154.077v-.272h-.326l-.327.272-.324.272v.274h-.326l-.326-.546-.489-.546-.326-.545-.162-.274h-.163v-.272h-.164v-.272l-.326-.272-.162-.274v-.545h-.651v.272h-.488v.273h-.326v.274h-.489v-.274h-.326l-.162-.273h-.164l-.163-.272h-.162v-.274h-.162l-.164.274H145.445v.272l-.164.273h-.488l-.163.274h-.162l-.164.272-.162.544h-.162l-.815-.544v-.272l.162-.819h-.488l-.327-.274h-.488v.274l-.326.272-.162.273h-.163l-.164-.273h-.162l-.162-.272-.164.272h-.162l-.327.273-.162.274-.326.272-.325.272-.164-.272-.162-.272h-.162l-.164-.274h-.162l-.164-.273h-.162v-.272h-.163l-.164-.274-.162-.272h-.326l-.162-.272H136.325l-.164.272h-.163l-.162.272h-.162v.274h-.326l-.164.272h-.162v.273-.273l-.163.273h-.164v.274l-.324.272-.164.272-.162.272-.163.274v.272h-.164l-.162.273-.162.274h-.164l-.489-.274h-.326v-.819h-.162l-.326-.272-.163-.272-.488-.272-.815-.547H129.484v.273l-.326.274v.272h-.324l-.164-.272h-.163l-.162-.274h-.326v.546h-.326v-.272h-.327v.816h-.162v.274h-.326l-.651.272H124.598l-.489.273h-.65l-.489-.273H122.156V204.428l-.489.272-.162.273h-.164v.272l.164.274h-.164l-.489.272h-.326l-.324.546h-.164l-.325-.274-.49-.272v.546l-.162.545h-1.303l-.489.818-.326.272-.162.274-.327.273-.488.544-.162.274-.326.272h-.163l-.162-.272h-.326l-.489.272h-.164l-.65.272-.327.274-.488.273h-.651l-.488.272h-.164l-.162.272h-.327v.274h-.162v.272h-.164l-.162.272h-.326l-.489.275h-.488l-.489.272h-.65l-.327.272h-.164l-.162-.272h-.162l-.164-.272-.487.272h-.164v.272H105.542v-.272H104.728l-.162.272h-.653l-.487-.272h-.49l-.162.272h-.651v.274l-.326.272v.272h-.326v.273l-.162.274-.165.272h-.162v.272h-.162l-.164.274h-.162v.272h-.162v.272h-.327v.275l-.162.272v1.637h-.326l-.326.272h-.327l-.162-.272v-.274h-.326l-.325.274h-.49l-.162-.274H96.422l-.162.274h-.164v.272h-.326v.272h-.487v.274l-.164.544h-.162v.547l-.164.272h.164v.272h-.164l.164.274v.272h-.489l-.164.273h-1.139l-.164.272h-.651l-.162.274h-.652l-.163.272h-1.141l-.162.272h-.488l-.164.274h-.489l-.162.272H87.79l-.164-.272h-.162l-.162.272h-.653.164l-.164.273v-.273h-.162l.162.273h-.162l-.162.272h.162-.162l-.164.274h.164-.164v.544h.164-.164v.274h.164v.272l.162.273v.546h-.326v.272l-.162.272.162.274v.273l-.162-.273h-.164l-.163-.274h-.162v-.272l-.162.272-.164-.272h.164-.49v.272h-.163v.274h-.326l-.162-.274v.274h-.162l-.164-.274h-.163l-.162-.272h-.164v.272h-.326v-.272h-.162v.272h-.162v-.272h-.165v.272h-.162v.274h-.326l-.162.273.162.272h-.162v.274h-.162l-.165.272v.272h.165v.272h-.327v.274l-.164-.274v.274h-.162v-.274h-.488v-.272h-.163v-.272.272h-.164v-.272h-.488v.272h-.162v.272h-.327v.274l.163.273.49.546.162.544h.162v.274l.164.273h.163v.272l.162.272.164.274.162.272.162.272.164.274.162.273.163.272.164.272v.274l.162.272v.273l.164.272h.162l.162.274.165.272.324.546.164.272.162.273.164.274.162.272v.272l.163.272h.164v.274h.162v.272l.162.275.164.272v.272h.162v.272h.163v.274h.164l.162.272v.273h.164l.162.272.162.546h.163l.164.546.162.272v.273l.164.272.162.274v.272h-.162v.272h.162v.274l.162.273.326.272.327.546v.272l.162.272h.162l-.65.547-.163.272h-.326v.274h-.488l-.164.272h-.651v-.272h-.162.162v-.274h-.651v.274h-.326v-.274H83.392v-.272h-.326l-.162-.273h-.162l-.165-.274h-.65v-.272h-1.303l-.163.272H79.647l-.164.274H78.67l-.164.273H77.69v.272h-.162v-.272l-.162.272h-.653l-.324.274h-.653v.272h-.162l-.164-.272h-1.139l-.162.272h-.327v.272h-.326v.274h-.162v.273h-.49v.272h-.163l-.162.272h-.162v.274h-.164v.817l.164.546v.546l.162.544V250.248l-.162.272h-.49v.547h-.489v.272H70.526v.544H70.2l-.164-.272H67.92l-.489.272H66.29l-.162.274h-.326l-.162-.274h-.164l-.325-.272h-.326l-.164-.272h-.324l-.163-.272-.49-.274h-.162l-.326-.273h-.163l-.163-.272-.163-.274h-.162l-.488-.272v-.272h-.165v-.274h-.162l-.162-.273-.164-.272h-.162V249.43l-.162.272v.546h-.327l.163.272v.547l.164.272.162.272v.272h.162v.546l.164.273.162.274.163.272.164.272h.162l.326.274v.272h.325v.273h.163l-.163.272h-.325v.274h-.488v.272l-.165.272h-.162v.274h-.162l-.164.272h-.162v.273h-.162v.274l-.164.272v.272h-.163v.272h-.164l-.162-.272-.162-.272-.164-.272-.162-.274-.163-.273h-.164l-.162-.272v-.274h-.162l-.164-.272h-.162l-.162-.272h-.327l-.326-.274-.162.274v.544l-.164.274v.272h-.162v.273l-.163.274h-.164l-.162.272h-.164l-.324.544-.164.274-.163.273-.162.272-.164.272-.162-.272h-.326l-.162-.272-.327-.273h-.162l-.164-.274h-.162l-.327-.272v-.272h-.65l-.164-.274H52.12v.546l.163.272v.819l.164.272V259.247l-.164.274h.164v.273h.324l.162.272h.327l.326.272h.488l.327.274h.488l.162.272h.164l.163.272h.326v.275h.162v.272h.162v.272h.164V262.793h-.164V263.612h-.162l-.162.272h.162v.274h-.162v.544h.162v.274h.326l.162.273h.327l.162.272h.164l.162.272v.546h.162v.273l.164.274.163-.274v.274h.488v1.09h-.162.162v.272H57.17v.273h-.162l-.164-.273v.273l-.162-.273-.164.273H54.239l-.326.272h-1.141l-.162.274H51.307l-.162.272h-.815l-.653.272H48.7l-.162.274H47.561l-.164-.274H46.583l-.163-.272v.272h-.162v.274-.274h-.164v.274-.274h-.162v-.272h-.162v.272h-.164v-.544h-.163v.272h-.164v-.272h-.162.162-.162v-.274h-.162v.274l-.164-.274H43.814l.164.274h-.326v.272h-.327v-.272h-.488.164v-.274h-.326.162v-.272l.164-.273v-.272l.162-.272v-.274l-.162-.272h-.164l-.162-.272h-.164l.164-.274.162-.273.164-.272v-.274h.162v-.272h.163v-.272h.164v-.273h-.165v-.546l.165-.272h-.165.165l.162-.274v-.272l-.162-.272-.165-.274V261.703h.165H42.675l-.326.272v-.272h-.489v-.272l-.326-.275h-.325l-.164.275h-.162l-.164.272-.162.272v.546h-.162v.272l-.164.273v.546h-.163v.272l-.162-.272-.326-.272-.162-.274-.164-.273H38.277l-.162-.272h-.489v-.272H37.3l-.488-.546h-.489l-.326-.272-.162.272h.162l-.162.272v.274h-.165v.272h-.326l-.162-.272h-.326l-.325-.274h-.326l.162-.272-.324-.272h-.815l-.162-.275h-.653v.275h-.162v.272h.163v-.272.272h.162l-.163.272h-.326v.546h-.162v.272h.162v.273h.164v.274h-.164v-.274l-.162.274h-.164v-.274h-.162v.274h-.325l-.164.272h.164l-.164.272v.274l-.162.272h-.652.164-.489v.272l-.164-.272-.162.272h-.162v.547l.162-.273v.545h.162l.164.272h.162v.274h.163v.272h-.163v.273h-.162v.274h-.164v-.274.274h-.162.162-.324v.272h-.164v.272h-.162v-.544h-.165l-.162-.274h-.162.162-.65l-.165-.273h-.162v-.272h-.162V264.976h-.326v-.274H27.2v-.272h-.162v-.272h-.489v-.274h-.326l-.162.274h-.164v-.274h-.325v.274l-.164-.274h-.162l-.162.274h-.326l-.163.272h-.164l-.162.272v-.272h-.164l-.324-.546h-.165v-.272h-.162v-.272l.163-.274-.325-.545-.164-.272-.162-.274.326-.272.162-.272v-.275h-.162V260.338l-.164-.272v-.272h-.162.162v-.273l-.162-.274v-.272h-.162l-.164.272h-1.466l-.162-.272h-.164l-.162-.272h-.164l-.163-.274h-.488l-.162-.272H18.895l-.164-.272H17.918v-.273H16.941v-.274h.163v-.272l.162-.272h.164v-.546l-.164-.273h.164v-.274h-.326V254.885h-.651v-.274h.162v-.272h.162l-.162-.273h-.162v-.272h-.326.162l-.162-.274v-.544h.162-.162v-.274h-.164v-.273h.164v-.272h-.164l.164-.274v-.272h-.164l.164-.272H15.8v-.272h-.326l-.162-.274v-.545h-.162l.162-.274h.162v-.272l.164-.272.162-.274V247.793h-.162v-.546l-.164-.273v-.544h-.162v-.546l-.162-.272v-2.184h1.465l.162.274h.653l.162-.274h.488v-.272H19.872l.164.272h1.139l.162-.272h.327l.162-.272h.652v-.272h.489v-.274l.162-.272-.162-.273v-.274l-.162-.544-.164-.274V239.61l-.163-.272v-.546l-.162-.272V236.883h-.164v-.273l-.162-.272h-.164l-.162-.274v-.272l-.163-.272H21.5z" }),
        React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M113.02 102.518h.52v.273h.812v.272h.327v.274h.326v.272h.162v.545h.164v.546h.162v.272h.489v.47l-.092.457.378-.212.202 1.359v.381h.683l.489.273h.917l-.162.272h.7l.652.274h.173l.543.303.29.241h.306l.546.305.044.038v-.069h.444l.162.272h.488l.162.273h.29l.327.274h.488l.326.272h.485l.126-.211.399-.335h.405v.402l.15.249.053.178.006-.011h.33l.215.18.056-.094.137-.229v-.401h1.171v.272h.063l.553.616.228.381-.057.093h.027v.273h.163v.902h-.163v.272h-.164v.272h-.324v.274h-.241l-.085.144v.401h-.164v.546h-.325v.818h-.101l.101.341v1.342l.162.272v.689h.163v.401l.164.274v.416h.296l-.296.501v.817l-.028.047h.678v.272h2.82l.326.272h.306l.489.274h.832l.327.272h.326l.325.272h.976l.399.333.128.214h.162l.163.272h.326l.198.333.254.213h.144l.488.272h.326l.489.272h.182l.325.273h.363l.162.274h.164l.374.628h-.701l-.134.226-.573.32h-.107l-.1.167-.164.546-.31.521v.675h-.241l-.273.458-.164.274-.137.23v.675h-.162v.272h-.164v.415l-.239.404h-.651l-.164.272h-.574v.272h-.895l-.324-.272h-.363l-.162-.272h-.374v.188h.163v.675l.301.5h-.301v.546h-.163v.143l-.162.272v.819l-.164.274v.272l-.162.272v.448l.162.273v1.46l-.162.274v.402h-.162v.319l.162.272v.499h-.162v1.091h-.164v.546h-.163v2.644h.133v-.272h.488v-.272h.24l.164-.274h.249v-.273h.651v-.272h.488v-.274h.441l.144.24.142-.24h.738v-.272h.404l.162-.272h.605v.272h.085l.164.272h.325l.164.274h.277l.893.597.133.222h.162l.214.358v.001l.164.271v.001l.111.185h.162l.241.403v.143h.162v.273h.25l.162.274h.614l.326.272h.363l.162.272h.165l.162.274h.451l.326.272h1.61l.488.273h1.39l.194.651.152.253v.001l.174.291.164.546.151.253v.001l.162.273v.001l.164.272.169.284.327.818.103.174h.239v.401l.164.274v.545l.162.274v.817l.164.273v.58l.163 1.093v.107h.084l.216.358.001.001.11.186h.162l.207.345.424.473h.423v.346l.359.2h.782v.272h.02l.652.273h.469v.369l.211.177h.44v.272h.049l.326.274h.326l.361.303.979.545.337.284.001.001.276.23h.363l.198.333.254.213h.326l.374.314.276.231h.276v.274h.249l.163.272h.164l.213.358.001.001.148.246.325.275.177.297.165.273.173.293.162.544.152.252.001.002.162.272v.002l.175.29.131.439h.208v.274h.164v.424l.148.5.176.296v1.122l.164.818v.264l.162.546v.393h.163v.674l.164.273v.145h.326v.433l.162.818v2.794l-.162.272v.522l-.164.546v.569l-.133.224.133.223v.417h.164v.272h.46l-.375.628h-.488l-.165.274h-.161l-.111.187-.139.229v.274l-.239.401h-.163l-.112.186-.213.358h-.086v.819h-.164v.046l.217.361-.493.411h-.326l-.253.212-.198.335h-.163l-.164.272h-.199l-.253.211-.147.248-.214.359h-.2l-.578.486-.363.605h-.162l-.165.272h-.084v.274h-.44l-.252.212-.2.333h-.162l-.126.211-.327.274-.2.333h-.13l-.162.546h-.196l-.126.212-.326.272-.147.247v.001l-.162.272-.217.359h-.324l-.087.144v.046h.088l.268.451-.162.272.108.183.11.185h.378l-.301.5v.046h.164v.272h.162v.674l.162.274v.415h.164v.819h.163v.401l.136.231.001.001.189.314v.546l.162.273v.272l.162.274v.272l.301.499h-.001l.001.003.164.274h.001l.324.544v.001l.189.316v.415h.162v.418l.327.817v.259l.162.272v.772h-.24l-.164.274h-.024l.116.39-.177.299v.272l-.162.273v.448l.334.561-.172.868v.707h-.027l.163.272h-.344l-.118.394v.296l-.162.272v1.143l-.422-.708-.144.24h-1.744v-.272h-.084l-.276.23-.001.001-.26.218v.369h-.605l-.369-.618-.489-.546-.335-.56-.111-.187h-.239v-.272h-.164v-.367l-.285-.238-.203-.343v-.415h-.295v.272h-.488v.273h-.326v.274h-.845v-.274h-.249l-.163-.273h-.164l-.162-.272h-.239v-.079l-.047.079h-1.877v.144l-.241.401h-.488l-.162.274h-.163l-.101.166-.193.65h-.349l-.939-.627v-.385l.123-.623h-.336l-.326-.274h-.246v.18l-.367.306-.198.333h-.364l-.164-.273h-.163l-.062-.104-.063.104h-.198l-.253.212-.162.274-.35.291v.001l-.484.405-.271-.451-.111-.185h-.162l-.164-.274h-.162l-.164-.273h-.239v-.272h-.086l-.215-.36-.001-.001-.11-.185h-.326l-.163-.272h-.775l-.164.272h-.161l-.163.272h-.085v.274h-.404l-.164.272h-.085v.095h-.133l-.106.178h-.087v.179l-.365.306-.149.247-.161.271h-.001l-.137.232v.401h-.241l-.11.185v.001l-.214.361h-.312l-.488-.274h-.458v-.819h-.049l-.399-.333-.153-.257-.453-.252-.776-.521h-.745v.178l-.326.274v.367h-.603l-.164-.272h-.163l-.162-.274h-.047v.546h-.653v.544h-.162v.274h-.468l-.651.272h-1.619l-.488.273h-.743l-.489-.273h-.59v1.292l-.538.3-.19.318h-.087v.045l.3.501h-.432l-.488.272h-.271l-.325.546h-.33l-.361-.305-.211-.117v.27l-.207.697h-1.335l-.453.757-.326.272-.162.274-.34.284-.468.522-.169.285-.399.333h-.328l-.162-.272h-.179l-.488.272h-.175l-.593.248-.318.268-.544.303h-.65l-.489.272h-.109l-.162.272h-.25v.274h-.162v.272h-.241l-.162.272h-.381l-.488.275h-.489l-.488.272h-.633l-.326.272h-.33l-.162-.272h-.162l-.127-.211-.376.211h-.033v.272h-1.17v-.272h-.536l-.162.272h-.8l-.487-.272h-.343l-.162.272h-.574v.179l-.326.273v.366h-.326v.143l-.187.316-.001.002-.216.358h-.085v.272h-.239l-.164.274h-.085v.272h-.162v.272h-.327v.146l-.162.272v1.766h-.44l-.326.272h-.492l-.239-.401v-.145h-.083l-.324.274h-.657l-.162-.274h-.774l-.163.274h-.087v.272h-.326v.272h-.487v.122l-.21.696h-.116v.418l-.027.045h.027v.628h-.028l.028.047v.499h-.566l-.164.273h-1.14l-.163.272h-.65l-.162.274h-.653l-.162.272h-1.141l-.163.272h-.488l-.164.274h-.489l-.162.272H87.69l-.145-.239-.142.239h-.49l-.056.095.105.178h-.212l-.279.462v-.19h-.045l-.087.145v.591h.164v.402l.162.272v.773h-.326v.143l-.133.224.133.225v.967l-.442-.741h-.164l-.162-.274h-.122l-.1.169-.266-.441h-.047v.272h-.163v.274h-.93l-.163-.274h-.163l-.047-.079v.079h-.977v.274h-.403l-.056.095.268.45h-.297v.274h-.24l-.087.144v.044h.165v.628h-.327v.74l-.278-.465h-.404v-.275h-.488v-.272h-.327v-.272h-.132v.272h-.162v.272h-.327v.048l.129.215.505.563.136.455h.207v.403l.087.144h.24v.401l.136.23.165.274.324.544.164.274.325.545.189.314v.274l.162.272v.272l.087.144h.163l.213.36v.001l.164.272.324.545v.001l.165.272.162.272v.001l.164.273v.001l.187.314v.272l.086.143h.24v.274h.163v.402l.136.231.001.001.19.313v.144h.161v.272h.162v.274h.088l.239.401v.144h.087l.225.378.131.44h.162l.196.652.176.296v.271l.139.231.187.316v.818l.121.204.327.273.367.614v.272l.085.143h.55l-1.002.842-.199.333h-.249v.274h-.566l-.164.272h-.93v-.546h-.294v.274h-.682v-.274h-.815v-.272h-.25l-.161-.273h-.162l-.164-.274h-.728v-.272h-1.024l-.162.272h-.815l-.165.274h-.813l-.164.273h-.737v.272h-1.09l-.324.274h-.54v.272h-.44l-.165-.272h-.937l-.162.272h-.25v.272h-.326v.274h-.162v.273h-.49v.272h-.24l-.162.272h-.085v.274h-.164v.612l.164.547v.546l.162.545v1.439l-.239.401h-.413v.547h-.489v.272h-.813v.544H70.1l-.164-.272h-1.97l-.488.272h-1.086l-.162.274h-.53l-.162-.274h-.127l-.324-.272h-.362l-.164-.272h-.325l-.19-.318-.408-.228h-.18l-.327-.273h-.198l-.216-.358v-.001l-.111-.187h-.107l-.62-.345v-.199h-.164v-.274h-.086l-.21-.352v.497l-.161.272v.675h-.191l.027.045v.546l.139.231.187.314v.143h.162v.675l.14.231.161.274.162.271v.001l.112.185h.127l.439.369v.177h.324v.273h.302l-.379.628h-.247v.274h-.488v.144l-.242.4h-.085v.274h-.24l-.163.272h-.085v.273h-.162v.145l-.164.272v.401h-.163v.272h-.443l-.375-.63v-.001l-.164-.271-.001-.002-.162-.273v-.001l-.11-.185h-.165l-.239-.401v-.145h-.084l-.165-.272h-.162l-.162-.272h-.29l-.216-.181-.03.052v.544l-.164.275v.4h-.162v.143l-.24.404h-.163l-.163.272h-.164l-.272.457v.001l-.165.273v.001l-.324.545-.318.526-.262-.44h-.326l-.199-.333-.253-.212h-.199l-.164-.274H54.5l-.44-.367v-.177h-.573l-.164-.274h-1.023v.319l.163.272v.818l.164.272v.918l-.028.047h.028v.272h.247l.163.272h.29l.325.272h.49l.325.274h.525l.162.272h.164l.163.273h.403v.274h.162v.272h.162v.272h.164v1.174h-.164v.819h-.162v.546h-.162v.189h.162v.274h.25l.162.272h.326l.162.272h.164l.24.401v.417h.161v.352l.327-.552v.747h.488v1.718h-.977v.273h-.326v.468l-.341-.572-.063.104h-2.314l-.326.272h-1.104l-.163.274h-1.303l-.162.272h-.88l-.653.272h-.911l-.162.274h-1.18l-.164-.274h-.86v.096h-.52v-.096h-.488v-.272h-.295v.194l-.443-.74h-.562l.164.274h-.462v.272h-.682v-.272h-.31v-.178h-.015v-.096h-.148v-.178h-.016v-.322l.164-.272v-.272l.162-.272v-.176l-.085-.143h-.164l-.162-.272h-.377l.325-.544.162-.272.14-.23v-.403h.161v-.272h.163v-.962l.177-.295v-.106h.063l.086-.145v-.174l-.137-.23-.19-.316v-1.234h-.408l-.568.474v-.474h-.489v-.368l-.213-.179h-.159l-.164.275h-.162l-.112.185v.001l-.137.229v.675h-.162v.144l-.164.272v.675h-.163v.74l-.477-.801-.326-.272-.178-.3v-.001l-.112-.185h-.977l-.162-.272h-.566v-.272h-.228l-.488-.546h-.474l-.107-.09-.001.003-.137.23v.403h-.164v.272h-.606l-.162-.272h-.29l-.325-.274h-.574l.245-.411-.159-.133h-.851l-.162-.275h-.373v.191h.297l-.374.628h-.25v.735h.164v.63h-.89l-.25.416v.273l-.24.401h-.9v.735l-.326-.542v.542h.085l.164.272h.24v.274h.162v.628h-.163v.273h-.162v.274h-.488v.272h-.164v.272h-.518v-.544h-.088l-.162-.274h-.65l-.164-.273h-.24v-.272h-.162v-1.09h-.326v-.275h-.164v-.272h-.162v-.272h-.489v-.274h-.047l-.162.274h-.412v.466l-.423-.706-.142.24h-.326l-.163.272h-.164l-.44.741v-.741h-.088l-.325-.546h-.24v-.272h-.163v-.499l.133-.225-.27-.453v-.001l-.163-.271-.001-.001-.24-.405.42-.349.121-.204v-.048h-.162v-.946l-.164-.273v-.545l-.147-.249-.063.104h-1.667l-.162-.272h-.164l-.162-.272h-.165l-.162-.274h-.488l-.162-.272h-.814l-.164-.272h-.89v-.273h-.978v-.63h.162v-.143l.24-.401h.087v-.319l-.252-.418h-.075v-.816h-.65v-.63h.162v-.189h-.162v-.272h-.148v-.102l-.178-.301v-.689h-.164v-.545h-.136l.3-.501v-.045h-.301l.164-.272h-.19v-.272h-.25l-.238-.404v-.415h-.296l.372-.63h.086v-.144l.189-.313v-.001l.137-.231v-1.136h-.162v-.675l-.164-.272v-.416h-.162v-.675l-.162-.272v-2.411h1.745l.162.275h.45l.162-.275h.412v-.272h2.07l.164.272h.937l.162-.272h.327l.162-.272h.575v-.272h.489v-.145l.133-.223-.133-.224v-.297l-.149-.498-.177-.297v-1.091l-.163-.272v-.546l-.162-.272v-1.508h-.164v-.401l-.085-.144h-.165l-.238-.403v-.272l-.086-.143h-.078V235l-.162-.545v-.546l-.119-.392h-.62l-.162-.274h-.325l-.164-.273h-.127l-.326-.272h-.199l-.162-.274h-.403v-.272h-.049l-.326-.272h-.277v-.272h-.163v-.275h-.247l-.241-.4v-.144h-.488v-.403l-.137-.229v-.001l-.19-.314v-.273l-.162-.274v-.771h.24l.086-.145v-.401h.65v-.264l-.356-.199h-.38l-.163-.272h-.565v-.818h-.163v-.401l-.164-.272v-.298l-.162-.544v-.122h-.164v-.545h-.162v-.274h-.162v-.272h-.164v-.272h-.163v-.272h-.326v-.274h-.162v-.901h2.178l.488.272h.708l.214.359v.001l.112.187h.563v.272h.414l.162.272h.536v-.188h-.088l-.267-.453.216-.363.164-.271v-.002l.108-.181-.133-.224v-.37l.162-.274v-.307l.44-.367h.126l.164-.272h.085v-.274h.326v-.272h.565l.126-.211.4-.335h.212v-.272h.162v-.273h.24l.087-.143v-.403h.239l.11-.186.216-.358h.162l.162-.274h.414v-.273h.68v.273h.374l.162-.273h1.34l.165.273h.615l.083.07v-.07H28v-.273h.65v-.546h.165v-.272h.324v-.272h.326v-1.637h.326v-.094h.014v-.178h.475v-.274h.326v-.273h.324v-.272h.165v-.272h.162v-.274h.162v-.272h.49v-.191h-.135l.374-.628h.163l.164-.272h.573v-.274h.163v-.272h.49v-.272h.239l.162-.272h.087v-.275h.163v-.094h.015v-.178h.061l.086-.143v-.174l-.162-.275v-.961h-.327v-.272h-.297l.268-.451-.218-.368h-.077v-.272h-.326v-1.364h-.164v-.273h-.147v-.178h-.016v-1.186h-.326v-.901h.24l.086-.144v-.046h-.326v-.5l.135-.223-.11-.182-.11-.186h-.403v-1.174h.19l-.026-.045v-.644l.133-.224h-.133v-.094h-.164v-.724h-.163v-.368h-.084l-.216-.359-.111-.186h-.241v-.272h-1.465v-.452h.015v-.094h-.666v-.272h-.225l.225-.751v-.424h.162v-.272h.162v-.418l.242-.4h.085v-.275h.567l.085-.143v-1.492h.65v-1.364h.404l.162-.272h.087v-.418l.24-.401h.391l.43-.179-.113-.189.191-.321v-.674h.311l.666-.224v-.594h.164v-.274h.24l.085-.143v-.402h.24l.163-.274h.163l.164-.272h.249v-.272h.162v-.417l.188-.315.163-.272.137-.23v-.274l.24-.401h.086v-.047l-.086-.143h-.289l-.261-.219-.373.311-.253-.425-.327-.273-.025-.043-.341.57v-.74h-.03l-.49-.272h-.65l-.49-.272h-.456v-.273h-.9l-.164-.274h-.813l-.164-.272h-.977l-.164-.272h-1.38v-.274h-.487v-.272h-.535l-.1.168-.266-.44H26.4v.272h-1.007v-.272h-.25l-.162-.274h-.238v-.273h-.815v-.272h-.326v-.178h-.162v-.094h-.25l-.162-.274h-.565v-.272h-.25l-.214-.359-.164-.274-.11-.186h-.241v-.272h-.247l-.164-.272h-1.217v-.452h.014v-.178h.063l.085-.143v-.948h.165v-.272h.162v-.818h.162v-.144l.164-.274v-.401h.24l.084-.143v-.403h.241l.135-.227.44-.244v-.348h.402l.162-.272h.327l.162-.272h.489l.164-.272h.573v-.274h.326v-.272h.163v-.144l.241-.401h.324l.164-.274h.736v-.272h.404l.164-.272h.524l.269-.226-.191-.32h.622v-.273h.326v-.272h.326v-.274h.326v-.272h.402l.164-.274h.651l.443-.734v.462h.132v-.469l.441.741h.776l.112-.186.001-.003h-.027v-.628h.163v-.274h.488v-.272h.326v-.094h.162v-.178h.977v-.462l.279.462h1.38v.272h1.025l.112-.186.493-.827v.195h.535l.163-.273h.25v-.272h.238l.164-.274h1.063v-.094h.162v-.178h1.008v.272h.489v.274h.488v.079l.048-.079h.41v-.274h.327v-.272h.276l.213-.178v-.368h.731l.105.088.218-.361h.961l.265.148v-.148h.239l.162-.272h.489l.164-.272h.085v-.274h.164v-2.131l.725-.243-.05-.085-.167-.281-.488-1.09-.143-.238-.343-.289-.173-.574-.326-.546-.162-.545-.315-.527-.489-.818-.173-.291-.164-.547-.318-.532-.654-1.37-.002-.002-.808-1.627-.65-1.084v-.001l-.187-.316v-.272l-.627-1.048-.173-.291-.165-.547-.15-.253v-.001l-.166-.278-.977-1.909-.323-.539-.488-.819-.01-.017-.015.026v-.051l-.149-.249-.239-.797h.99l.165.273h.403v.274h.047l.442-.746v.746h.245l.327-.274h.328l.162.274h.434l.264.147v-.421h.682v.274h.164v.272h.162v.628h-.162v.047l.085.143h.24v.273h.488v.272h.623v-.272h1.465v-.273h.027l-.162-.272h.461v-.274h.651v-.094h.162v-.178h.489v-.272h.24l.442-.747v.747h.132v-.274h.327v-.046l-.136-.227h.786v-.19h-.324v-.628h.488v-.272h.728l.443-.734v.462h.783v-.274h1.17v.274h1.304v.272h.162v.544h.459v-.272h.565l.086-.143v-.129h.077l.279-.469v.469h.296v-.272h.728l.087-.146v-.401h.162v-.272h.162v-.274h.49v-.272h.028l-.027-.045v-.499h.162v-1.093h.24l.163-.272h.085v-.69l.188-.314v-.001l.163-.271.001-.001.137-.231v-1.22h.162v-.546h.326v-.734l.26.43.143-.24h.163l.164-.273h.085v-.274h.403l.085-.143v-.673h.489v-.274h.164v-.272h.488v-.273h.442l.047.08v-.08h.68v.273h.374l.085-.144v-.947h.326v-.272h.162v-.274h.489v-.273h1.63v-.272h.326v-.274h.891l.085-.143v-.401h.653v-.274h.162v-.272h.566l.162-.273h1.064v-.272h.162v-.274h.326v-.272h.489v-.272h.326v-.047l-.164-.272v-.273l-.162-.274v-.499h.162v-.144l.242-.4h.084v-.274h.162v-.273h.165v-.272h.324v-.274h1.056l.162-.272h.25v-.094h.013v-.178h.063l.162-.274h.085v-.545h2.474v.272h.489v.547h.698l.279-.469v.741h.738l.162.272h.24v1.093h.163v.945l.086.145h.702l-.162.272h.677v.273h.326v.274h.25l.239.401v.962h.085l.164.272h.24v.274h.575l.162.272h.403v.272h.162v.274h1.024l.25-.422v-1.086l.162-.272v-.403h.162v-.272h.241l.11-.185.214-.361h.088v-.273h.24l.11-.184.002-.002.213-.36h.326l.325-.544h1.064v-.12l.17-.572.156-.521v-.424h.402l.164-.272h.085v-.274h.24l.086-.144v-1.067l.162-.546v-1.039l-.162-.545v-.248l-.139-.232v-.001l-.11-.185h-.162l-.144-.239-.143.239h-.326l-.162.272h-1.258v-.272h-.324v-.272h-.165v-1.046l.19-.316.214-.359h.162l.112-.185v-.001l.214-.358h.085v-.146l.19-.314.162-.272.216-.361h.085v-.272h.162v-.272h.326v-.274h.24l.164-.272h.247v-.273h.164v-.272h.326v-.274h.651v-.272h.326v-.143l.239-.403h.163l.087-.144v-.546l.162-.272v-.401h.326v-.272h.977v-.274h.162v-.273h.403l.163-.272h.25v-.272h.814v-.274h.403l.162-.272h.085v-.272h.653v-.274h.65v-.273h.49v-.272h.728l.163-.272h.326l.11-.187v-.001l.217-.358h.247v-.272h.164v-.146l.188-.315.138-.229v-.274l.162-.272v-.401h.162v-.547h1.256l.164.274h.24v.273h1.303v.272h.132v-.272h.164v-.273h.727l.163-.274h.489l.164-.272h.929v.272h.164v.274h1.186l.3-.507-.023-.039h.047l.118-.2v.2h.296v-.272h.651v-.19h-.162v-.628h.162v-.274h.162v-.273h.491v-.366h.324v-.452h.164v-.272h1.495v.272h.489v.274h1.435v-.274h.602l.327-.272h.375v-.273zm-.246.629l-.327.272h-.375v.274h-2.147v-.274h-.489v-.272h-.783v.272h-.164v.546h-.324v.272h-.491v.272h-.162v.191h.162v.628h-.162v.274h-.651v.272h-.191l.163.272h-.46v.274h-.815v.273h-.682v-.273h-.651v-.274h-.164v-.272h-.372l-.164.272h-.487l-.163.274h-.574v.095h-.016v.178h-.148v.272h-1.821v-.272h-.326v-.273h-.085l-.165-.274h-.698v.547h-.162v.143l-.162.272v.275l-.19.313-.136.23v.404h-.164v.272h-.402l-.112.185v.001l-.213.36h-.327l-.162.272h-.576v.272h-.489v.273h-.65v.274h-.653v.272h-.239l-.162.272h-.25v.274h-.814v.272h-.403l-.162.272h-.25v.273h-.162v.274h-.24l-.442.734v-.734h-.295v.272H90.9v.143l-.162.272v.547l-.242.401h-.161l-.086.145v.401h-.326v.272h-.65v.274h-.327v.272h-.164v.273h-.402l-.164.272h-.085v.274h-.326v.272h-.162v.272h-.24l-.112.187v.001l-.162.272-.139.23v.403h-.239l-.11.185v.001l-.216.358h-.162l-.11.185v.001l-.14.232v.591h.165v.272h.324v.272h.7l.162-.272h.326l.162-.272h.364l.164.272h.163l.214.359.19.316v.296l.161.544v1.142l-.162.547v1.114l-.241.401h-.085v.274h-.24l-.164.272h-.247v.12l-.171.571-.155.521v.425h-1.218l-.324.544h-.326l-.11.187-.002.001-.216.358h-.084v.273h-.24l-.111.186v.001l-.215.359h-.087v.272h-.162v.145l-.162.272v2.232l-.341-.57-.001.002v.102h-.473v.272h-.52v-.272h-.65v-.274h-.163v-.272h-.25l-.161-.272h-.047v.272h-.444l-.162-.272h-.06v-.178h-.017v-.096h-.084l-.165-.272h-.24v-1.22l-.085-.143h-.403v-.274h-.326v-.273h-.132v.273h-.489v.196l-.279-.469h-.048l.024-.04-.138-.232h-.241v-.403l-.085-.143h-.241v-.628h.164v-.316l-.088-.147h-.239v-.546h-.488v-.272h-.21l-.278.468v-.468h-.327v-.272h-.488v-.547h-.295v.462l-.442-.734h-1.514v.545h-.238l-.086.144v.402h-.403l-.162.272h-.25v.274h-.518v-.274h-.134v.274h-.162v.094h-.163v.178h-.164v.095h-.014v.178h-.148v.274h-.24l-.086.143v.401h-.162v.045l.162.275v.271l.03.049h.134v.913l-.113-.188h-.213v.272h-.327v.094h-.162v.178h-.326v.274h-.162v.272h-.403l-.442.741v-.548l-.326.548v-.741h-.047l-.162.273h-.087v.272h-.487v.274h-.326v.734l-.342-.566-.224.376h-.326l-.443.74v-.466h-.295v.272H64.84v.273h-.815v.274h-.162v.272h-.164v.094h-.162v.595l-.24.401h-.084v.735l-.327-.542v.08h-.52v-.273h-.411l-.046-.076v.076h-.488v.273h-.164v.274h-.489v.415l-.239.401h-.25v.274h-.239l-.164.273h-.085v.544h-.652v.546h-.162v.962l-.187.316-.001.001-.164.271v.001l-.137.229v.32h.298l-.375.628h-.162l-.164.272h-.085v1.092h-.162v.046l.297.499h-.297v.272h-.49v.274h-.163v.272h-.162v.144l-.241.403h-.574v.272h-.652v.094h-.133l-.106.178h-.412v.272h-.162v.546h-.49v.2l-.519-.875v-.415h-.162v-.272h-1.303v-.275h-.207l-.608 1.009v-.64h-.326v-.094h-.133v.272h-.812v.094h-.327v.178h-.19l.326.546h-.3v.272h-.488v.741l-.28-.468h-.209v.274H47.9v.272h-.489v.272h-.813v.274h-.19l.161.272h-.297v.272h-1.465v.273h-.404l-.443.74v-.74h-.488v-.273h-.489v-.272h-.085l-.239-.401v-.689h-.134v.397l-.713-.397h-.544l-.16-.272-.324.272h-1.22v-.274h-.248l-.145-.24-.199.335.108.182.489.818.329.549.977 1.91.16.269.173.291.164.546.15.253.678 1.133v.273l.137.231v.001l.656 1.096.817 1.642.65 1.359.331.556.164.546.15.253.49.819.337.565.162.545.326.546.155.514.307.259.185.307.488 1.091.157.263.275.464-.9.302v2.231h-.164v.274h-.24l-.164.272h-.488l-.162.272h-.085v.398l-.713-.398h-.668l-.087.144v.608l-.567-.479h-.245v.179l-.44.367h-.049v.272h-.326v.274h-.566l-.087.144v.869l-.441-.741h-.061v-.178h-.016v-.094h-.488v-.274h-1.436v.096h-.326v.178h-.518v-.079l-.048.079h-.085v.272h-.403l-.162.272h-.412v.275h-.164v.272h-.402l-.164.272h-.573v.272h-.52v-.178h-.162v-.094h-.327v-.272h-.783v.734l-.278-.462h-.404v-.272h-.459v.272h-.488v.272h-.489v.19h.136l-.323.542-.216.359h-1.062v.468l-.326-.547v.079h-1.054l-.164.274h-.248v.272h-.326v.274h-.326v.272h-.326v.272h-.352l.163.273h-.411l-.326.274h-.453l-.164.272H26.4v.272h-.89l-.164.274h-.325l-.086.144v.401h-.163v.272h-.326v.274h-.728l-.164.272h-.488l-.162.272h-.326l-.162.272h-.25v.201l-.538.3-.19.318h-.087v.145l-.239.401h-.085v.143l-.164.275v.401h-.014v.094h.014v.45H20.7v.274h-.163v.272h-.164v.69l-.162.272v.047h1.062l.164.272h.402v.272h.087l.214.359.164.274.11.186h.404v.272h.412l.162.274h.565v.272h.814v.272h.327v.273h.085l.163.274h.402v.272h.295v-.272h.605l.063.104.34-.573v.741h.653v.272h.487v.274h1.225l.164.272h.977l.164.272h.814l.164.275h1.054v.272h.192l.49.272h.651l.489.272h.179l.102-.17.299.505.326.272.07.119.28-.233.392.326h.36l.241.4v.502h-.24l-.086.143v.274l-.188.315-.163.272-.137.23v.675h-.163v.272h-.403l-.164.272h-.161l-.163.274h-.087v.144l-.24.401h-.085v.274h-.164v.494l-.963.324h-.014v.416l-.133.223.213.359-.873.365h-.26l-.086.143v.676h-.24l-.163.272h-.25v1.364h-.65v1.234l-.239.401h-.413v.274h-.24l-.087.144v.675h-.162v.272h-.162v.12l-.103.343h.591v.272h.327v.272h1.139v.274h.162v.272h.087l.214.359.112.186h.402v1.092h.326v.499l-.162.273v.448l.297.499h-.297v.462h.085l.214.359v.001l.219.365-.194.321v.045h.326v.499l-.238.403h-.088v.189h.488v.63h-.162v.734h.149v.178h.014v.095h.164v.272h.148v.356h-.148v.19h.148v.178h.014v.368h.164v.273h.085l.143.239.096-.162v.195h.164v.818h.163v.546h.162v.629h-.162v.045l.162.274v.143h.135l-.135.227v.129h-.077l-.085.143v.401h-.163v.274h-.24l-.163.273h-.085v.272h-.49v.272h-.163v.274h-.728l-.164.272h-.1v.094h.015v.453h-.162v.272h-.49v.272h-.162v.274h-.162v.272h-.165v.272h-.324v.273h-.326v.274h-.489v.272h-.164v.546h-.014v.022l.315.522h-.3v.547h-.49v.272h-.324v.272h-.164v.546h-.65v.273h-.489v.096h-.326v.382l-.57-.478h-.685l-.165-.273h-.937l-.162.273h-1.467l-.162.274h-.163l-.112.185-.214.359h-.085v.146l-.242.4h-.085v.272h-.162v.273h-.44l-.253.213-.198.333h-.412v.272H20.7v.274h-.24l-.164.272h-.198l-.213.178v.237l-.162.275v.174l.191.321-.216.365v.001l-.164.272-.108.181.056.096h.24v.9h-.163v.741l-.442-.741h-.488l-.162-.272H17.9v-.272h-.41l-.216-.361-.11-.186h-.598l-.489-.272h-1.73v.189h.163v.274h.326v.272H15v.272h.165v.272h.162v.274h.162v.545h.164v.426l.162.544v.251l.164.272v.144h.162v.818h.412l.162.272h.272l.488.273h.592l-.373.63h-.087v.272h-.65v.143l-.242.403h-.085v.318l.162.274v.271l.139.23v.001l.187.314v.145h.489v.401l.086.143h.402v.275h.162v.272h.051l.326.272h.276v.272h.25l.162.274h.125l.326.272h.199l.164.273h.327l.162.274h.682l.21.696v.546l.162.545v.52l.164.275v.273l.085.144h.164l.24.402v.143h.163v1.766l.162.272v.546l.163.272v1.091l.15.251.176.59v.251l.191.322-.191.321v.403h-.489v.272h-.729l-.162.272h-.326l-.163.272h-1.34l-.165-.272h-1.513v.272h-.565l-.162.274h-.855l-.162-.274h-1.186v1.957l.162.272v.417h.162v.673l.164.272v.418h.162v1.589l-.187.316v.002l-.139.229v.401h-.162v.592l.085.145h.403v.272h.464l-.164.272h.027v.499l-.029.047h.029v1.492l.085.145h.24v.272h.086l.374.629h-.297v.19h.489v.816h.326v.63h-.027l.027.045v.774h-.241l-.085.143v.319h.814v.273h.736l.164.272h.815l.162.272h.489l.162.274h.164l.162.272h.164l.162.272h1.264l.164-.272h.44v.402l.163.274v.543l.164.273v.69h.162v.501l-.203.34-.233.195.085.142v.001l.164.272.378.635-.19.323v.046h.162v.272h.087l.324.546h.288l.162-.272h.326l.162-.274h.93v.079l.047-.079h.606v.274h.489v.272h.162v.273h.164v.274h.326v1.09h.162v.272h.085l.164.273h.652l.162.274h.535v-.096h.164v-.178h.162v-.463h-.084l-.164-.272h-.24v-.076l-.162.272v-1.37h.239l.262-.441.102.168h.939l.085-.143v-.274l.027-.045h-.164l.379-.628h.247v-.274h.326v-.545h.162v-.546h.164v-.544h.163v-.274h.931l.163.274h.778l.49.411-.08.133h.078l.325.274h.362l.162.272h.048v-.272h.164v-.145l.027-.045h-.163l.43-.721.437.365h.503l.489.546h.424v.272h.412l.162.272h.976l.217.36.147.248.253.211h.082v-.418l.164-.272v-.401h.162v-.417l.187-.314v-.001l.217-.358h.161l.165-.274h.49l.44.369v.177h.488v.07l.083-.07h.88v.178h.014v1.313l.139.233.187.314v.37l-.028.047h.003l-.162.269-.001.001-.05.086h-.002l-.087.144v.319h.165v.628h-.164v.272h-.163v.272h-.162v.146l-.189.314-.162.272-.028.046.138.231h.164l.24.401v.372l-.163.272v.273l-.164.272v.045h.164v.274h.485l-.164-.274h1.795v.274h.489v.272h.326v.272h.132v-.74l.442.74h.814l.164.274h.775l.162-.274h1.043l.652-.272h.75l.162-.272h1.302l.163-.274h1.178l.326-.272h2.242l.249-.413v-.322l.326.542v-.079h.977v-1.007h-.371l-.1.17-.344-.573v-.144h-.162v-.675l-.085-.143h-.164l-.162-.272h-.327l-.162-.272h-.403v-.275h-.162v-.818h-.135l.374-.628h.085v-.819h.164v-.462h-.164v-.272h-.162v-.272h-.162v-.275h-.25l-.162-.272h-.164l-.162-.272h-.452l-.327-.274h-.488l-.326-.272h-.363l-.162-.272h-.401v-.273h-.3l.3-.501v-.72l-.164-.272v-.819l-.163-.272v-.773h1.58l.165.274h.727v.367l.213.177h.199l.164.274h.126l.399.333.126.212h.326l.062.104.01-.017.325-.545.164-.274.376-.631h.164l.162-.272h.164l.086-.145v-.401h.162v-.144l.164-.274v-.544l.294-.496.437.367h.363l.162.272h.161l.165.272h.24v.403l.085.144h.164l.214.359.161.273.001.001.164.272.157.264v-.079h.163v-.144l.164-.272v-.402h.162v-.272h.24l.164-.273h.084v-.274h.24l.087-.143v-.401h.488v-.274h.325v-.189h-.325v-.367l-.213-.179h-.198l-.216-.358v-.001l-.163-.272v-.001l-.161-.272-.001-.002-.189-.313v-.418h-.162v-.401l-.137-.229v-.001l-.19-.314v-.547l-.297-.499h.462v-.417l.162-.272v-.948h.44l.217.359.11.186h.24v.274h.164v.345l.356.199h.218l.213.36v.002l.112.184h.126l.327.273h.143l.573.32.135.226h.324l.164.272h.29l.325.272h.2l.163.274h.123l.162-.274h1.196l.489-.272h2.263l.164.272h.047v-.544h.813v-.272h.489v-.547h.567l.085-.143v-1.29l-.162-.544v-.546l-.164-.546v-1.021h.164v-.274h.239l.162-.272h.086v-.272h.49v-.273h.162v-.274h.326v-.272h.403l.163-.272h1.34l.048.079v-.079h.766l.324-.274h.617l.44-.741v.469h.7l.163-.272h.813l.164-.275h.814l.162-.272h1.583v.272h.573l.164.275h.163l.162.272h.403v.272h1.792v.546h.372l.164-.272h.411v-.274h.403l.126-.211.45-.378-.164-.275v-.272l-.286-.478-.326-.272-.203-.341v-.145h-.162v-.628h.162v-.045l-.137-.231v-.001l-.19-.314v-.272l-.148-.249-.132-.441h-.162l-.194-.652-.1-.166h-.24v-.402l-.085-.143h-.241v-.274h-.163v-.272h-.162v-.401l-.138-.23-.001-.001-.187-.316v-.143h-.162v-.274h-.088l-.239-.401v-.272l-.137-.23-.163-.274-.162-.272-.165-.272v-.001l-.324-.545v-.001l-.164-.271v-.002l-.111-.186h-.161l-.242-.401v-.273l-.162-.272v-.273l-.139-.23-.324-.545-.164-.274-.325-.544v-.001l-.164-.274-.187-.314v-.143h-.085l-.242-.401v-.146h-.117l-.188-.633-.475-.529-.197-.329v-.501h.327v-.273h.162v-.272h.844v.178h.164v.094h.163v.273h.294v-.466l.28.466h.047v-.416l.241-.401h.085v-.274h.027l-.056-.094.268-.451h.25v-.274h.162v-.272h1.257l.163.272h.162l.047.08v-.552l.442.746h.046v-.274h.163v-.272h.668v.103l.34-.571v.74h.086l.061.105.148-.248v-.401h.326v-.319l-.162-.272v-.144h-.164v-.818h-.136l.136-.227v-.129h.077l.112-.187v-.001l.189-.316-.187-.315H87.2l.162-.272h.364l.164.272h.775l.162-.272h.489l.164-.274h.488l.162-.272h1.141l.162-.272h.653l.162-.274h.651l.164-.272h1.14l.164-.273h.41v-.045l-.25-.417h-.05l.025-.043-.024-.041h.05l.25-.416v-.674h.208l.118-.393v-.426h.487v-.272h.326v-.272h.24l.163-.274h1.18l.162.274h.323l.325-.274h.57v.403l.085.143h.16l.326-.272h.213v-1.508l.162-.272v-.403h.327v-.273h.162v-.272h.239l.164-.274h.085v-.272h.24l.111-.185.001-.001.137-.231v-.402h.326v-.177l.326-.272v-.369h.728l.162-.272h.638l.486.272h.505l.163-.272h1.093v.272h.459v-.272h.296l.596-.334.201.334h.163l.162.271.325-.271h.669l.489-.272h.488l.488-.274h.272l.162-.273h.087v-.272h.162v-.274h.404l.162-.272h.219l.488-.272h.651l.433-.242.334-.28.709-.297h.153l.489-.272h.473l.161.27.251-.209.156-.263.509-.567.312-.261.162-.274.327-.272.525-.879h1.271l.117-.393v-.822l.77.427.286.242.324-.545h.381l.411-.229-.054-.09v-.499h.241l.135-.227.439-.244v-1.438h1.039l.488.272h.558l.489-.272h1.64l.65-.273h.184v-.274h.163v-.816h.652v-.274h.606l.162.274h.161l.164.272h.046v-.177l.326-.274v-.368h1.209l.854.573.524.292.171.287.253.211h.276v.819h.195l.488.274h.016l.111-.187.214-.359h.087v-.143l.187-.316.001-.001.162-.272.18-.298.283-.238v-.369h.241l.086-.144v-.129h.076l.279-.468v.276l.048-.08h.249v-.274h.239l.162-.272h.163l.164-.272h1.179l.162.272h.326l.214.359.112.187h.239v.272h.085l.164.273h.163l.164.274h.162l.214.358.056.094.165-.138.001-.001.303-.252.162-.274.399-.334h.126l.266-.44.262.44h.162l.144.24.106-.179.286-.238v-.369h.731l.327.274h.64l-.201 1.014v.16l.67.448.127-.426.228-.377h.161l.162-.274h.489l.087-.144v-.401h2.031l.164-.274h.441v.274h.085l.163.272h.164l.162.273h.403v.274h.133v-.274h.326v-.273h.488v-.272h1.007v.674l.122.206.366.306v.177h.164v.272h.086l.213.361.318.53.489.546.283.474h.047v-.179l.388-.325v-.001l.376-.313h.569v.272h1.186l.162-.272h.25v-.145l.162-.272v-.25l.203-.677-.174-.293h.297v-.386l.153-.768-.315-.528v-.644l.162-.273v-.272l.148-.249-.208-.698h.3l.164-.274h.085v-.318l-.162-.272v-.289l-.327-.816v-.131h-.162v-.673l-.139-.232-.324-.544-.112-.188h-.162l-.379-.628h.164l-.027-.044v-.273l-.162-.274v-.272l-.162-.273v-.545l-.139-.23v-.001l-.187-.316v-.143h-.163v-.819h-.164v-.673l-.162-.274v-.416h-.162v-.272h-.164v-.501l.052-.087-.189-.317v-.001l-.216-.365.162-.271-.057-.095h-.241v-.501l.242-.401h.324l.113-.186.161-.271.178-.3.326-.273.199-.333h.132l.162-.546h.195l.127-.211.326-.274.199-.333h.162l.128-.212.397-.333h.213v-.274h.239l.164-.272h.162l.29-.484.723-.607h.128l.11-.185.178-.3.399-.333h.126l.165-.272h.161l.126-.213.399-.334h.327l.159-.133-.111-.184v-.501h.164v-.818h.239l.111-.186.216-.359h.162l.085-.143v-.275l.189-.313.214-.36h.163l.164-.274h.249v-.188h-.164v-.675l-.192-.321.192-.322v-.523l.164-.546v-.568l.162-.272v-2.661l-.162-.818v-.112h-.326v-.402l-.164-.273v-.417h-.163v-.697l-.162-.546v-.281l-.164-.818v-1.059l-.148-.25-.176-.592v-.12h-.164v-.274h-.117l-.194-.65-.152-.253-.001-.001-.161-.273-.001-.001-.175-.29-.163-.545-.15-.254-.001-.002-.163-.271-.147-.247-.324-.274-.18-.297v-.001l-.11-.185h-.165l-.162-.272h-.403v-.274h-.049l-.375-.314-.276-.231h-.326l-.399-.335-.126-.211h-.289l-.376-.314h-.001l-.311-.263-.979-.544-.287-.242h-.327l-.326-.274h-.275v-.272h-.213l-.438-.367v-.179h-.184l-.652-.273h-.305v-.272h-.519l-.622-.347v-.199h-.226l-.553-.616-.121-.203h-.162l-.214-.358v-.001l-.112-.185h-.239v-.437l-.163-1.092v-.508l-.164-.273v-.819l-.162-.274v-.544l-.164-.274v-.143h-.085l-.221-.372-.327-.818-.154-.259-.164-.272-.001-.002-.162-.273v-.001l-.173-.29-.164-.547-.151-.252-.176-.292-.131-.441h-1.216l-.489-.272H143.1l-.326-.272h-.525l-.162-.274h-.164l-.162-.272h-.29l-.326-.272h-.688l-.162-.274h-.403v-.273h-.162v-.401l-.087-.145h-.162l-.214-.358v-.001l-.164-.271v-.001l-.111-.185h-.162l-.195-.327-.737-.492h-.371l-.164-.274h-.324l-.164-.272h-.24v-.272h-.047l-.162.272h-.25v.272h-.891l-.162.274h-.365l-.047-.079v.079h-.488v.272h-.651v.272h-.403l-.165.275h-.085v.272h-.326v.544h-.68v-.272h-.326v-3.356h.162v-.546h.164v-1.091h.162v-.045l-.162-.272v-.773h.162v-.143l.162-.274v-1.265l-.162-.273v-.644l.162-.272v-.272l.164-.274v-.819l.162-.272v-.401h.163v-.546h.027l-.027-.045v-.418h-.163v-.9h.932l.162.272h.29l.246.206v-.674l.441.74h.047v-.272h.728l.164-.272h.65l.086-.145v-.674h.164v-.272h.162v-.417l.187-.314.001-.001.164-.273v-.001l.376-.631h.087v-.417l.338-.568.164-.546.225-.378h.217l.409-.228.189-.318h.112l-.112-.19h-.29l-.324-.273h-.146l-.488-.272h-.326l-.489-.272h-.181l-.399-.335-.125-.211h-.327l-.162-.272h-.162l-.2-.335-.254-.212h-.977l-.324-.272h-.326l-.327-.272h-.796l-.489-.274h-.342l-.326-.272h-3.047v-.272h-.95l.3-.502v-.816l.028-.047h-.028v-.673l-.164-.274v-.144h-.162v-.947l-.163-.272v-1.388l-.223-.749h.061v-.546h.162v-.272h.325v-.546h.164v-.143l.239-.402h.087v-.274h.324v-.272h.165v-.272h.162v-.19h-.162v-.273h-.302l.272-.45-.1-.168-.424-.472h-.261v-.272h-.459v.143l-.187.314-.272.451-.433-.363-.318.533-.271-.912-.178-.295v-.078l-.173.146-.199.333h-.816l-.326-.272h-.489l-.326-.274h-.363l-.162-.273h-.488l-.048-.079v.283l-.603-.507-.436-.243h-.342l-.363-.303-.434-.241h-.151l-.653-.274h-1.254l.162-.273h-.384l-.488-.272h-.947v-.711l-.122-.823-.603.337.237-1.18v-.078h-.489v-.272h-.148v-.178h-.014v-.369h-.164v-.544h-.162v-.272h-.311v-.178h-.015v-.096h-.327v-.272h-1.222zM30.93 196.886v-.265l-.158.265h.159z", clipRule: "evenodd" }),
        React__default.createElement("path", { fill: "#386193", d: "M146.597 223.538l.164.272.162.272v.272h.163l.162.547h.326l.326-.274h.325l.164.274h.162l.162.272v.272h.164-.326l-.162.272v.545h-.164v1.362h.164v.273l.162.272.162.274h.164l.162.272h.163l.162.272.164.272.162.273v.272h-.162l-.977.274v.544l.162.272h-.65l-.163.273v.546l.163.544-.163.273h-.652V234.437l.164.272.162.272v.274l.162.272h-.162l-.162.273-.164.272h-.162v.272h-.163v.272h-.326v.274h-.65l-.327.272-.324.273h-.651l-.49.272h-.162v-.272H143.018l-.164.272h-.651l-.162.272h-.653l-.488.272h-.162l-.163.272h-.65l-.164.274h-.325l-.162.273h-.164.164l-.652.816-.489.272h-.324v.273h-.489v.272h-.164l-.162.274h-.162l-.162.272h-.165v.272h-.324v.272h-.162v.273h-.164v.272h-.162v.274h-.163v.544l-.164.272v.545l-.162-.272h-.326v.272h-.325v-.272h-.488.162-.162v-.273h-.162v.273h-.326l-.163-.273-.164-.272h-.162v-.272h-.326l-.162-.272H131.623v.272h-.325V245.336l-.162.272-.164.272v.546h-.162v.273h-.162v.544l-.164.818.164.273-.327-.273h-.162l-.326-.274-.488-.544h-.163l-.326-.272-.324-.272-.164-.273h-.163l-.162-.272-.164-.274h-.162l-.326-.544-.325-.273-.164-.272h-.162v-.272l-.326-.274h-.162l-.325-.272v-.272l-.164-.273h-.324l-.162-.544-.327-.272-.326-.274h-.162l-.162-.272-.164-.273-.163-.272h-.162v-.272h-.326l-.162-.272-.164-.274h-.163l-.162-.272-.326-.273h-.324v-.272l-.327-.272h-.324l-.164-.272h-.162l-.327-.274-.162-.272h-.326v-.273h-.489l-.162-.272h-.162l-.164-.272h-.324l-.164-.272h-.163l-.488-.272h-.324l-.165-.274h-.324l-.162-.273h-.49l-.651-.272h-.162l-.163-.272h-.488l-.326-.272h-.162l-.489-.272-.326-.273h-.162l-.327-.274h-.324l-.164-.272h-.162l-.489-.272-.162-.272h-.326v-.272h-.325l-.326-.273-.326-.272h-.162l-.163-.274-.326-.272-.326-.272h-.324l-.163-.272h-.164l-.324-.273h-.162l-.164-.272h.164V231.167l-.164-.273.65-.272-.324-.544v-.274l-.162-.545-.327-.544.327-.272-.327-.819-.326-.272h.653-.327l-.162-.272V226.262l-.164-.545h.326l.327-.272.162-.272v-.545h.162v-.272l.162-.274.164-.272h-.326l-.324-.272h-.164l-.163.272H107.696h.326v-.272l.162-.272.164-.273h.162v-.272l-.162-.274v-.272l-.164-.272.164-.272v-.273h.325l.164-.272h.813v-.274l.162-.817-.162-1.362-.163-.273V217.544l.163-.819-.163-.272H108.673l-.163-.272.489-.817v-.546l.162-.272v-.544l.162-.545.164-.274.325-.272.162-.544.164-.273h.162l.162-.272.164-.274h.163v-.272h.162v-.272h.326l.162-.272h.164l.489-.273h.651l.488-.272.324-.274.653-.272h.162l.489-.272h.326l.162.272h.162l.326-.272.163-.272.488-.545.325-.272.164-.274.326-.272.486-.817h1.304l.162-.544v-.547l.488.275.327.272h.162l.326-.547h.324l.489-.272h.164l-.164-.272v-.272h.164l.162-.272.489-.272V203.103h.812l.489.272h.651l.488-.272h1.628l.65-.273h.326v-.272h.163v-.818h.326v.272h.326v-.544h.325l.164.272h.162l.162.272h.326v-.272l.325-.272v-.273H130.484l.814.545.489.272.162.272.326.274h.162v.817h.325l.488.272h.164l.163-.272.162-.272h.164v-.273l.162-.272.162-.274.164-.272.325-.272v-.272h.164l.162-.273v.273-.273h.162l.162-.272h.327v-.274h.162l.164-.272h.162l.162-.272H137.32l.162.272h.327l.162.272.162.274h.164v.272h.162l.163.273h.164l.162.272h.162l.164.272.162.272.325-.272.326-.272.162-.272.326-.273h.163l.164-.272.162.272h.162l.162.273h.164l.162-.273.327-.272v-.274h.488l.325.274h.488l-.162.817v.272l.813.546h.164l.162-.546.162-.272h.164l.162-.272h.489l.162-.273v-.272H147.412l.162-.274h.162v.274h.164l.163.272h.162l.164.273h.324v.272h.489v-.272h.326v-.273h.488v-.272h.651v.545l.162.272.326.272v.272h.163v.274h.162l.164.272.324.545.489.544.326.547h.326v-.275l.325-.272.326-.272h.324v.272h1.466l.162-.272h.164l.162.272v.272h.162v.275l.164.272v.272h.163v.272l.162.272.164.272.162.273.162.274v.272h.163v.272l.164.272.162.272v.273h.162v.546h-.162v.272h.162v1.361h.162v.274h.164v.272l.162.273h-.162v.272h.162v.272-.272V211.822h-.162.162v.272h-.162.162v.273h.163v.272h-.163V215.09h.163l.164-.272h.488l.489-.272.65-.272v.544l.162.819.165.544v.544h.162l.162.819v.816l.162.273v.272l.164.818V220.54h-.65l-.327.272h-1.465l-.326.274h-.651V220.268l-.162.272h-.162l-.164.272-.163-.272h-.162v.272h-.651l-.164-.272-.162.272h-.488l-.162-.272h-.165v.272h-.488v.274h-.162l-.162.272-.164.273h-.325l-.162.272H152.945l-.162.272h-.651v.272h-.164v-.272l-.162.272h.162-.813l-.164-.272H150.016l-.164.272H148.389v.274h-.326l-.163-.274h-.65l-.327.274h-.162l-.326.272.162.273v.272z" }),
        React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M136.242 199.927h1.179l.163.272h.326l.214.36.111.186h.24v.272h.085l.163.273h.164l.162.272h.161l.217.359.055.092.165-.138.303-.252.162-.273.399-.333h.126l.265-.44.263.44h.162l.143.241.107-.18.286-.238v-.369h.731l.325.274h.64l-.201 1.012v.16l.67.45.127-.427.225-.378h.164l.162-.272h.489l.085-.144v-.401h2.03l.163-.274h.441v.274h.087l.163.272h.161l.164.273h.402v.272h.133v-.272h.326v-.273h.488v-.272h1.007v.674l.122.204.366.306v.177h.163v.274h.084l.216.359h.001l.315.53.489.544.283.475h.047v-.18l.388-.325h.001l.376-.314h.566v.272h1.187l.162-.272h.366l.239.401v.143h.162v.403l.164.272v.144h.163v.401l.136.229.001.001.164.272.162.273.187.316v.143h.162v.401l.139.229v.001l.188.314v.144h.162v2.179h.162v.274h.164v.401l.298.5h-.136v1.279h.163v.628h-.163v1.902l.048-.079h.543l.457-.254.906-.38v.795l.157.793.17.561v.392h.13l.194.979v.785l.162.273v.303l.164.819v1.012h-.764l-.326.272h-1.465l-.327.274h-.893v-.546h-.046l-.265.44-.146-.244v.076h-.929l-.063-.104-.062.104h-.69l-.048-.079v.079h-.488v.274h-.239l-.11.185-.001.001-.216.358h-.324l-.162.273h-.815l-.162.272h-.574v.272h-1.255l-.164-.272h-.774l-.164.272h-1.386v.274h-.606l-.162-.274h-.484l-.327.274h-.162l-.16.134.109.184v.271l.139.231.187.314v.143h.117l.163.547h.128l.327-.274h.49l.164.274h.162l.239.401v.321h-.014v.178h-.225l-.085.143v.674h-.164v1.006h.164v.402l.137.23.111.187h.163l.163.272h.162l.214.359.164.272.187.315v.499h-.316l-.823.231v.36l.297.499h-.862l-.086.144v.471l.177.594-.254.426h-.575v1.68l.139.231.187.314v.274l.298.499h-.375l-.11.186h-.001l-.216.359h-.084v.272h-.163v.272h-.326v.274h-.764l-.276.231h-.001l-.373.314h-.67l-.49.272h-.386v-.272h-.697l-.164.272h-.65l-.162.272h-.708l-.488.272h-.107l-.163.272h-.65l-.164.274h-.285l-.156.196-.046.077h-.015l-.621.777-.56.311h-.192v.273h-.489v.272h-.24l-.163.274h-.162l-.162.272h-.088v.272h-.324v.272h-.162v.273h-.164v.272h-.162v.274h-.163v.416l-.164.272v1.141l-.441-.74h-.047v.272h-.68v-.272h-.901l-.213-.359-.112-.186h-.24v-.272h-.249l-.162-.272h-.698v.272h-.325v2.323l-.187.314v.001l-.139.23v.674h-.162v.272h-.162v.385l-.154.768.128.213-.266.228-.277-.231h-.163l-.385-.324-.444-.494h-.147l-.376-.314-.347-.291-.128-.212h-.163l-.214-.359-.112-.187h-.162l-.363-.605-.324-.272-.127-.212h-.24v-.367l-.213-.179h-.162l-.438-.367v-.306l-.086-.144h-.357l-.185-.62-.285-.238-.277-.232h-.198l-.214-.359-.164-.272-.111-.186h-.239v-.272h-.249l-.214-.359-.112-.187h-.163l-.198-.333-.254-.212h-.437v-.367l-.213-.177h-.361l-.164-.272h-.126l-.399-.335-.126-.211h-.403v-.273h-.412l-.162-.272h-.161l-.165-.272h-.324l-.164-.272h-.108l-.488-.272h-.379l-.164-.275h-.325l-.162-.272h-.425l-.651-.272h-.227l-.163-.272h-.451l-.327-.272h-.144l-.543-.303-.29-.242h-.162l-.326-.274h-.361l-.164-.272h-.108l-.57-.318-.135-.226h-.403v-.273h-.211l-.653-.544h-.199l-.198-.335-.58-.483h-.361l-.162-.273h-.127l-.325-.272h-.198l-.378-.628h.301v-.591l-.245-.406.651-.273-.244-.41v-.297l-.148-.498-.393-.656.344-.287-.262-.657-.669-.558h.504l-.027-.045v-.841l-.225-.749h.501l.253-.211.122-.204v-.674h.162v-.143l.187-.316.001-.001.001-.002h-.076l-.323-.271-.161.271h-.916v-.356h.148v-.143l.187-.315h.001l.216-.359h.084v-.045l-.162-.274v-.272l-.194-.321.194-.322v-.401h.402l.164-.272h.736v-.113l.16-.807-.155-1.297-.168-.282v-.883l.153-.768-.076-.127h-.814l-.269-.45.518-.866v-.546l.162-.272v-.521l.176-.591.191-.319.306-.257.154-.515.227-.378h.162l.111-.185.216-.361h.085v-.272h.162v-.272h.403l.162-.272h.219l.489-.273h.65l.433-.241.333-.281.71-.296h.152l.488-.272h.474l.161.27.251-.209.156-.261.508-.567.311-.261.164-.274.327-.272.522-.878h1.272l.117-.392v-.824l.768.43.287.24.325-.545h.379l.41-.228-.053-.088v-.5h.241l.135-.227.439-.244v-1.436h1.037l.488.272h.558l.489-.272h1.638l.651-.273h.184v-.272h.162v-.818h.652v-.272h.603l.164.272h.163l.162.272h.047v-.177l.325-.272v-.368h1.209l.853.571.524.292.171.287.254.213h.275v.817h.193l.489.272h.016l.325-.544h.087v-.144l.187-.313v-.001l.162-.273.001-.002.179-.297.284-.238v-.367h.241l.085-.144v-.129h.077l.279-.468v.272l.045-.076h.25v-.274h.239l.164-.272h.162l.162-.272zm-.371.9v.274h-.404l-.162.272h-.085v.095h-.133l-.106.178h-.087v.177l-.366.306-.148.246v.001l-.162.273-.137.23v.402h-.241l-.324.544h-.312l-.488-.272h-.457v-.817h-.049l-.398-.335-.154-.257-.453-.252-.775-.519h-.745v.178l-.325.272v.367h-.605l-.162-.272h-.162l-.164-.272h-.046v.544h-.652v.546h-.163v.272h-.468l-.651.273h-1.617l-.488.272h-.743l-.489-.272h-.588v1.289l-.538.3-.19.318h-.087v.045l.301.499h-.433l-.488.272h-.27l-.326.547h-.328l-.363-.303-.209-.118v.269l-.208.696h-1.334l-.451.756-.326.272-.164.274-.338.283-.468.522-.169.284-.399.333h-.328l-.162-.272h-.179l-.489.272h-.172l-.595.248-.316.267-.544.303h-.651l-.488.273h-.11l-.162.272h-.249v.272h-.162v.272h-.24l-.112.188-.214.358h-.162l-.101.167-.171.574-.342.287-.138.229-.148.499v.567l-.162.272v.547l-.459.767.056.094h.814l.249.418-.172.868v.75l.157.263.17 1.428-.164.828v.434h-.891l-.164.272h-.247v.144l-.134.223.134.222v.273l.162.274v.499h-.239l-.112.186-.137.23v.045h.209l.163-.272h.329l.325.272h.576l-.326.541v.001l-.137.231v.401h-.162v.416l-.203.34-.399.333h-.151l.102.34v.796l.086.143h.225v.356h-.173l.386.967-.309.257.26.433.176.591v.251l.404.678-.65.272.084.138v.962h.049l.324.273h.2l.163.272h.287l.726.605.126.213h.125l.653.545h.438v.272h.249l.19.318.406.226h.216l.165.272h.288l.326.274h.162l.363.303.434.242h.18l.326.272h.526l.162.272h.097l.65.272h.556l.162.273h.324l.164.274h.27l.489.272h.216l.164.272h.325l.164.272h.162l.163.272h.565v.273h.249l.199.333.253.213h.198l.164.272h.289l.44.367v.177h.21l.4.333.126.212h.162l.215.36.001.001.11.185h.403v.272h.085l.214.359.164.273.111.185h.126l.375.315.368.307.139.468h.293l.241.401v.239l.211.177h.163l.439.369v.177h.085l.2.333.325.273.29.483h.162l.216.361.111.185h.161l.201.333.301.253.277.231h.177l.533.594.267.224h.114l.132-.658v-.704h.162v-.273h.162v-.417l.189-.314.001-.001.136-.229v-2.581h.325v-.272h1.256l.162.272h.403v.272h.085l.216.359.111.186h.047v-.273h.518v.273h.945v-.144l.164-.272v-.673h.163v-.274h.162v-.272h.164v-.273h.162v-.272h.324v-.272h.241l.163-.272h.161l.163-.274h.087v-.272h.489v-.273h.456l.417-.232.606-.758v-.098h.063l.162-.273h.325l.164-.274h.65l.162-.272h.217l.489-.272h.598l.162-.272h.651l.164-.272h1.254v.237l.428-.237h.632l.275-.231.376-.314h.537v-.274h.326v-.272h.163v-.272h.239l.112-.186.189-.317-.052-.087v-.274l-.137-.229v-.001l-.189-.314v-2.134h.729l.071-.119-.148-.494v-.621l.239-.402h.439l-.027-.045v-.728l1.13-.317h.009v-.045l-.137-.23-.164-.272-.11-.186h-.163l-.162-.272h-.164l-.214-.361v-.001l-.187-.313v-.144h-.164v-1.718h.164v-.416l.239-.401h.085v-.045l-.085-.143h-.162l-.164-.274h-.159l-.326.274h-.524l-.162-.547h-.208v-.401l-.136-.229-.001-.001-.189-.314v-.272l-.215-.361.493-.411h.162l.326-.274h.817l.162.274h.047v-.274h1.541l.164-.272h1.176l.164.272h.449l.441-.74v.468h.536l.162-.272h.815l.162-.272h.325l.112-.186v-.001l.214-.358h.085v-.274h.489v-.272h.443l.162.272h.286l.263-.44.265.44h.372v-.272h.441l.062.104.063-.104h.162l.441-.741v1.287h.408l.326-.274h1.466l.326-.272h.537v-.621l-.164-.818v-.241l-.162-.273v-.848l-.13-.658h-.194v-.696l-.159-.527-.168-.844v-.295l-.394.165-.521.29h-.434l-.164.272h-.441v-4.086h-.162v-.628h.027l-.027-.046v-.143h-.164v-.274h-.162v-1.361h-.162v-.628h.162v-.19h-.162v-.402l-.137-.229v-.001l-.189-.313v-.144h-.163v-.402l-.137-.231v-.001l-.161-.271h-.001l-.164-.272v-.001l-.187-.314v-.143h-.162v-.401l-.165-.272v-.146h-.162v-.401l-.066-.111-.143.24h-1.745v-.272h-.082l-.276.231-.261.218v.369h-.605l-.369-.618-.489-.544-.332-.559h-.001l-.112-.186h-.239v-.274h-.162v-.367l-.286-.238-.203-.34v-.416h-.295v.272h-.488v.273h-.326v.272h-.845v-.272h-.247l-.164-.273h-.163l-.162-.272h-.241v-.076l-.045.076h-1.877v.143l-.239.402h-.488l-.163.272h-.164l-.099.166-.193.652h-.352l-.936-.629v-.385l.123-.621h-.337l-.324-.274h-.245v.18l-.367.306-.199.333h-.366l-.162-.273h-.162l-.062-.104-.063.104h-.198l-.254.212-.162.272-.349.291-.485.407-.268-.451-.001-.001-.112-.185h-.162l-.163-.272h-.164l-.162-.273h-.239v-.272h-.087l-.214-.361-.11-.185h-.327l-.162-.272h-.775l-.162.272h-.163l-.164.272h-.084z", clipRule: "evenodd" }),
        React__default.createElement("path", { fill: "#386193", d: "M22.969 349.825v.274-.274zm.162 0v.274-.274zm-10.1-3.272v.272-.272zm50.66-13.092l.163.273v-.273h-.162zm-2.281-11.454h.162-.162zm81.606-6h.162-.162zm-59.778-4.636v.272-.272zm62.058-1.637v.272-.272zm-54.077-1.089h.162-.162zm5.7-3.274l.163.273h.162l-.162-.273h-.162zm52.286 0h.163-.163zm-49.353-.544v.272-.272zm46.421-5.455h.162-.162zm-.651-.819h.162-.162zm10.262-31.362h.162-.162zm-112.555-5.455h.163-.163zm121.186-1.909h.163-.163zm12.38-4.09h.162-.162zm-160.768-2.728h.162-.162zm92.357-25.634h.325-.325zm-23.293-1.91h.162-.162zm24.923-13.635l-.489.272h-.488l-.488.272H108l-.327.272h-.164l-.162-.272h-.166l-.162-.272-.488.272h-.164v.272H105.552v-.272H104.737l-.162.272h-.651l-.488-.272h-.489l-.164.272h-.652v.272l-.327.273v.272h-.326v.272l-.162.272-.162.272h-.162v.273h-.163l-.162.272h-.164v.272h-.162v.272h-.326v.272l-.162.273V217.546h-.327l-.326.272h-.324l-.163-.272v-.272h-.324l-.326.272h-.489l-.162-.272H96.433l-.162.272h-.162v.272h-.326v.272h-.489v.274l-.162.545h-.162v.544l-.162.272h.162v.274h-.162l.162.272v.273h-.489l-.162.272h-1.141l-.162.272h-.651l-.164.272h-.652l-.163.272H90.246l-.163.273h-.49l-.164.272h-.488l-.163.272H87.801l-.162-.272h-.162l-.162.272h-.653.164l-.164.272v-.272H86.5l.162.272H86.5l-.164.272h.164-.164l-.162.273h.162-.162v.544h.162-.162v.272h.162v.272l.164.273v.544h-.326v.274l-.162.272.162.272v.273l-.162-.273h-.164l-.163-.272h-.162v-.272l-.162.272-.162-.272h-.327v.272h-.162v.272h-.326l-.162-.272v.272h-.162l-.163-.272h-.162l-.164-.272h-.162v.272h-.326v-.272h-.162v.272h-.165v-.272h-.162v.272h-.162v.272h-.326l-.162.273.162.272h-.162v.272h-.163l-.162.272v.272h.162v.273h-.324v.272l-.164-.272v.272h-.162v-.272h-.489v-.273h-.162v-.272.272h-.164v-.272h-.488v.272h-.163v.273h-.326v.272l.162.272.489.544.164.545h.162v.272l.162.272h.162v.272l.163.272.164.273.162.272.162.272.164.272.162.272.163.273.162.272v.272l.162.272v.272l.162.273h.164l.162.272.163.272.326.544.164.273.162.272.162.272.164.272v.272l.163.273h.162v.272h.162v.272l.162.272.164.272v.273h.162v.272h.163v.272h.164l.162.274v.272h.162l.162.272.162.545h.163l.164.544.162.272v.273l.162.272.164.272v.272h-.164v.272h.164v.273l.162.272.327.272.326.544v.272l.162.273h.162l-.652.546-.162.272h-.327v.272h-.488l-.164.272h-.649v-.544h-.651v.272h-.326v-.272H83.405v-.272h-.326l-.162-.272h-.164l-.162-.272h-.651v-.273h-1.301l-.163.273h-.812l-.165.272H78.685l-.162.272H77.708v.272h-.162v-.272l-.163.272h-.652l-.326.272h-.66v.272h-.163l-.162-.272h-1.139l-.162.272h-.326v.273h-.327v.272h-.162v.272h-.488v.272h-.164l-.162.272h-.164v.273h-.163v.818l.163.545v.544l.164.546v1.361l-.164.272h-.489v.547h-.487v.272H70.536v.544h-.327l-.162-.272H67.93l-.488.272H66.3l-.162.272h-.327l-.162-.272h-.162l-.326-.272h-.326l-.163-.272h-.326l-.162-.272-.489-.273h-.164l-.326-.272h-.164l-.162-.272-.162-.272h-.163l-.488-.272v-.273h-.162v-.272h-.162l-.164-.272-.163-.274h-.162V249.407l-.164.273v.544h-.33l.164.272v.545l.162.272.164.272v.272h.163v.545l.162.272.164.272.162.272.162.272h.162l.327.272v.273h.326v.272h.162l-.162.272h-.324v.272h-.489v.272l-.162.273h-.162v.272h-.164l-.163.272h-.162v.272h-.164v.272l-.162.273v.272h-.166v.272h-.162l-.162-.272-.163-.272-.162-.273-.162-.272-.164-.272h-.162l-.164-.272v-.272h-.162l-.163-.273h-.162l-.162-.272h-.326l-.327-.272-.164.272v.545l-.162.272v.272h-.164v.272l-.162.272h-.162l-.164.273h-.162l-.327.544-.162.272-.162.274-.164.272-.163.273-.163-.273h-.327l-.162-.272-.326-.274h-.162l-.165-.272h-.164l-.326-.272v-.272h-.652l-.164-.273H52.123v.545l.163.272v.818l.162.273V259.208l-.162.272h.162v.275h.326l.162.272h.325l.326.272h.488l.325.272h.49l.162.272h.163l.162.272h.324v.275h.164v.272h.162v.272h.164V262.751h-.164V263.567h-.162l-.164.272h.164v.272h-.164v.545h.164v.272h.326l.163.272h.324l.162.272h.162l.164.273v.544h.163v.272l.162.272.164-.272v.272h.488v1.089h-.164.164v.272H57.166v.273h-.164l-.162-.273v.273l-.162-.273-.162.273H54.236l-.326.272H52.77l-.164.272H51.303l-.164.272h-.815l-.652.272H48.695l-.162.273H47.556l-.164-.273H46.579l-.164-.272v.272h-.162v.273-.273h-.164v.273-.273h-.163v-.272h-.162v.272h-.162v-.544h-.162v.272h-.155v-.272h-.164.164-.164v-.272h-.162v.272l-.163-.272H43.82l.164.272h-.327v.272h-.324v-.272h-.326v-.272h-.162v-.272l.162-.273v-.272l.164-.272v-.272l-.164-.272h-.162l-.163-.273h-.162l.162-.272.163-.272.162-.272v-.272h.164v-.273h.162v-.272h.162v-.272h-.162v-.544l.162-.273.162-.272v-.272l-.162-.272-.162-.272v-1.361h-.651l-.326.272v-.272h-.488v-.272l-.327-.275h-.326l-.162.275h-.162l-.163.272-.163.272v.544h-.163v.273l-.162.272v.544h-.164v.272l-.162-.272-.326-.272-.163-.272-.164-.272H38.284l-.162-.273h-.488v-.272h-.327l-.488-.544h-.488l-.327-.272-.162.272h.162l-.162.272v.272h-.162v.272h-.326l-.163-.272h-.326l-.326-.272h-.326l.164-.272-.327-.272H33.236l-.162-.275h-.651v.275h-.164v.272h.326l-.162.272h-.326v.544h-.164v.273h.164v.272h.162v.272h-.162v-.272l-.164.272h-.163v-.272h-.162v.272h-.324l-.162.272h.162l-.162.272v.272l-.165.273h-.65.162-.486v.272l-.163-.272-.162.272h-.164v.544l.164-.272v.544h.162l.163.273h.162v.272h.162v.272h-.162v.272h-.162v.272h-.163v-.272.272h-.162.162-.326v.273h-.162v.272h-.164v-.545h-.162l-.163-.272h-.164.164-.652l-.162-.272h-.164v-.272h-.163v-1.089h-.324v-.272h-.164v-.272h-.162v-.273h-.489v-.272h-.324l-.162.272h-.164v-.272h-.327v.272l-.162-.272h-.162l-.164.272h-.325l-.164.273h-.162l-.164.272v-.272h-.162l-.326-.545h-.163v-.272h-.162v-.194l.163-.272-.327-.544-.164-.273-.162-.272.326-.272.162-.272v-.272h-.162V260.379l-.164-.272v-.545l-.162-.272v-.272h-.162l-.162.272H21.19l-.164-.272h-.162l-.162-.272h-.163l-.162-.272h-.488l-.162-.272H18.912l-.164-.273H17.935v-.272H16.956v-.272h.163v-.272l.162-.272h.162v-.545l-.162-.272h.162v-.272h-.324V254.935h-.649v-.272h.162v-.272h.162l-.162-.272h-.162v-.273h-.164l-.163-.272V252.758h-.164v-.273h.164v-.274h-.164l.164-.272v-.272h-.164l.164-.272h-.326v-.272h-.326l-.162-.273v-.546h-.163l.163-.272h.162v-.272l.164-.272.162-.273V247.854h-.162v-.544l-.164-.272v-.545h-.162v-.544l-.163-.272v-.272h-.164l-.162.272H13.863v-.272H11.417l-.162.272H8.817l-.165.272h-.488l-.326.272h-.162l-.163.272H6.372l-.162-.272h-.486l-.164.272v.545h-.163v.272h-.162l-.164.272v.272l-.162.273h-.162l-.164.272v.272H4.42v.272l-.164.272v.545l-.162.272V250.85h-.649l-.164-.274h-.65v.274h-.163v.273h-.164v.272h-.162v.272h-.164v.272h-.162l-.162.272h-.162v.274h-.163v.273h-.162l-.164.272-.162.272v.272H.677l-.162.272-.163.273-.162.272v.272H.028V255.48H.19v.272h.162H.19v.272H.028v.544H.19v.273l-.162.272H.19v.272h.325v.272h.162v.272H.515l.162.273.164.272h.326l-.164.272h.164l.162.272.163.272.326.272.162.273h-.162.162v.272h.326v.272h.164l-.164.272v.272l.327.273h.162v.272h.326v.272h.162v.544h.164v.273h.325v.272h-.163l.163.272h.162v.272h.162v.545h.162V264.734h.326v.272h.165v.273h.324v.272h.164v.272h.651v.544h.162-.162l.488.273-.162.272v.272l-.162.272h.65l.163.272.162.273v.272h.326l.162.272h.164l-.164.272h-.162l-.162.272h-.164v.272l.164.273h-.164l.164.272h.324l.164.272h.162l.165.272h.162l-.162.272h.162v.273h.326v.272h.162l.326.272v.272l.327.272h.488V272.9h.489-.164.164V273.717h.324l.164.272h.324l-.162.546h.327l.162.272h.164l-.164.272.164.273.326.272.164.272v.274h.162v.272l.162.272.163.273.326.272h.14v.272l.162.272.326.272.162.273v.272h.163v.272h.164l.326.544.326.274.164.273h.327v.272l.162.272.164.272v.272h.162v.275h.162l.162.272v.272l.163.272h-.163.163l.164.272h.162v.272h.164-.164l.164.273h.162l.162.272.163.272h.162l.162.272.164.272h.162l.162.273h.327l.164.272h.162l.162.272h.164l.162.274h.163l.162.272.326.272h.164l.162.273h.163l.164.272h.162l.162.272h.324l.164.274h.325v.272h.164l.162.273.326.544.163.272h.162v.272h.326v.272h.162v.273h.162l.163.272h.326v.272h-.162l-.164.272v.272h.164l.162.273h.326v.272l.162.272h.327v.544h.162v.273h.326V292.509l.162.272v.545h-1.141v.272h-.326l-.162-.272-.164.272h-.651v-.272h-.326l-.162-.272h-1.304v-.273H19.868v-.272h-1.301v-.272.272l-.162-.272-.164.272-.162-.272v.272-.272.272h-.653v.272h-.162v.273h-.162l.162-.273h-.487l-.162.273h-.164l-.162.272-.164.272h-.162l-.163.272h-.162v.272h-.326l-.162.273h-.651l-.164.272H13.36v.272h.162H12.706v-.272h-.327v.272h-.162v-.272h-1.301v.272h-.489v.272h-.326v.272H8.311v-.272H7.172l-.326.272H6.52l-.163.273h-.324v.272h-.651l-.164.272H4.57v.544l-.327.273h-.326l-.488.272-.163.272h.163-.163v.544h.163v.272h-.163v.545h.163v.272h.326v.274h-.162.162-.162v.272h-.164v.545h.164v.272h.162l-.162.272h.162l.162.272h.49v.272H7.99l.164-.272.326.272.162-.272h.162l.163.272.326-.272h.488v.272l-.162.545.162.272h.487v.544h-.162v.545h-.162v.272H8.966V304.488h-.487V305.306h-.651v.272l-.164.272-.162.273h.653l.162.272H9.13l.162.272h.326-.162V307.484h-.164v.272H9.13v.544h-.164v.545h-.163l-.162.272H7.176h.164v.544l-.164.272h-.162v.547l-.162.272v.272l.162.272v.272l.162.273.164.272h-.164.164v.544h-.164l-.162.545-.162.272h-.165v.272h-.162v.274l-.162.272-.162.272-.162.273v.272l-.327.272v.546h.489v.272h.162l.162.273.162.272h.165v.272h.162v.272h.162l.164.272h.324v.273h.653l.326.272h.325l-.163.272h.163l.326.272h.326-.162v.272h.162v.273l-.162.274h.162l.162.272h.162v-.272l.163.272h.162v.272h.164v.272h.162v.545h.162l.164.272.163.272v.272h.162v.272h.162l-.162.273v.272h.162l-.162.272v.272h.162V323.823l.162.272v.272h.162l.164.272v.547h.163v.272h-.163.163v.544h-.327v.272h.164v.273h-.164v-.273h-.162l-.162.273v.272h-.162v.544h.324v.272l.162-.272h.164v.272h.163v-.272h.164l.324.272h.811v.273h.653v.272h-.327v.272h.327l.162.272h.162v.544h-.162v.273h.324v.272h-.324.162v.546h.162-.324v.545h.486v.272l.327.272h-.327v.272h.489v.272h.162v.273h-.324.162v.272h.326v.272h-.164v.272h.164l.162.272h.163v.272h.162v.273l.162.272h-.162v.544h.162-.162V335.533h-.487v.272-.272h-1.139l-.162.272v.272l.162.272v.272h.975v.273h.326l.327.272v.272h.326V338.255l.162.272h-.162v.272h-.164l-.162.272H15.8l-.162.274-.162.272h-.164v1.089l-.162.272h-.489v.273H14.5v1.088l.162.273.162.272v.272h-.486v.272h-.162v.545h.162l.162.272.162.272h.162v.274l-.162.272-.162.272h.162v.273h-.324v.272h-.651v.272-.272h-.326v.272h-.328l-.162.272h.65v.272h-.162V347.513l.162.272v.272h.164v.273l.163.272v.272l.164.272v.272h.324l-.162.273v.274h.162l.162.272v.272h.162v.272h.163l-.163.272v.273h-.162.162v.272h.163v-.272h.164l.162-.273v-.544l.162-.272h-.162v-.272H17.104l.162-.274h1.629l.164.274h.649l.162.272h.326l.165.272h.65v.272h.327l.162-.272h.326l.162-.272h.162v-.272h.327l.162-.274v.274h.164v-.274h.649v-.273h.488v-.272h.164v-.272h.326v-.272l.163-.272h.488v.272h.489l.162-.272h.815l.326-.273h.162l.164.273h.162v.272h.162v.272h.327l.162.272h.494v.272h.652l.163.273.326.274h.488v.272h.325v.272H31.439l.488.272.488.272h1.466l.002-.001h.65l.489.272h.488l.164.274h.649l.162.272h.489l.326.272h.489l.162-.272h.65l.163.272h.488l.652.272h.651l.162-.272.164-.272v-.272h.327v-.274h.162l.162-.272h.164v-.273h.162v-.272H43.808v-.272h.164l.163.272h.65l.164-.272H45.772v-.272h.65v.272h.164v-.272h.325v-.272l.164-.273.162-.272.326-.818h.162l.163-.272v-.273l.326-.546h.162l.164-.272.162-.272.327-.547h.162l.488-.818.164-.272.162-.272.163-.273h.488l.653.273h.486l.163.272h.326l.162-.272v-.273h1.629l.163-.272.326-.272v-.272h.324l.489-.545h.162l.326-.272.162-.272h.653l.326-.274h.977l.489.274h.488l.162-.546v-.545l.162-.272v-.272l.163-.546.164-.272h.162V339.336l.162-.272v-.274h.326v-.272h.662l.162-.273h.163v-.272l.162-.272h.326v-.544l.162-.273v-.272l.162-.272.164-.272v-.272l.163-.273v-.272l.162-.272.164.272v-.272h.162v-.272l.162-.272.164-.273v-.544l.163-.272h.326l.162-.272h-.162v-.273h-.162v.273h-.164v-.273l-.163-.272-.164.272h-.324v-.272l-.164.272v-.272h-.325v.272-.272l-.164.272v-.272l-.162.272h-.326v-.272h-.324v-.272h-.325l-.164-.272v.272h-.324l-.164-.272-.163.272v-.272h-.164v-.272h-.324l-.164-.273v.273h-.162v-.273h-.162v.273h-.163v-.273h-.324v-.272h-.164V329.807h.164V329.099l.326-.545.162-.272h.163l-.163-.272h.163v-.544h.162V326.649h.164v-.544h-.164V325.288h.326l.162-.272v-.272h.164l.163-.272h.163v-.273h.163v-.272h.16v-.272l.164-.272v-.272h.162v-.273h.163v-.272h-.163v-.272h.325V321.477h.162l.162-.272v-.272h.326l.164-.272h.163v-1.089l.162-.272v-.272l.164-.273.162-.272.326-.272h.164l.164-.272h.325l.162-.272h.488l.165-.273H65.972l.324-.272h.491v-.272h.81v.272h-.162v.272h.162v-.272h.165v.272H68.736v-.272H69.55l.162-.272-.162-.272h.162v-.272.272-.272h.165v-.272h.324l.162-.273h.164l.162-.272v.272h1.464v-.272h.164v-.272H74.272v-.272h.324v-.272l.162-.273v-.272h.163v-.544h.164v-.272h-.164v-.273h.326v-.272h.326v-.272h.162v-.272h.164v.272h.163v-.272h.171v-.272h.326l.327.272H77.7l.163-.272v-.274h.162l.162-.273h.162l.162-.272h.164v-.272h.651l.164-.272h.324l.163-.272h.326v-.274h.324l.165.274h.162l.162.272h.326l.326.272h.325l.164.272h.488v.272h.651v-.272h.164l.162-.272h.489v-.272h.162v-.272h.164v-.274h.162l.162-.273h.164l.163-.272h.162l.162-.272H86v-.272h.327l.324-.272h.162v-.273H87.79v.273h.325v.272h.49l.162.272h.162l.164.272v.272h.489l.162.273h.326l.163-.273h.164l.162-.272h.326l.162-.272h.162V308.408l-.162-.272h-.162v-.272h-.164v-.272h-.162v-.545l-.162-.272v-.272h-.165v-.272h-.324v-.272h-.326v-.273h-.489l-.326-.272h-.488l-.164-.272h-.649v-.272h-.653l-.162-.274h-.162v-.272h1.627l.489-.273h1.301v-.272l.162.272h.327l.162-.272h.488l.163-.272v.272h.663l.163.272H92.847v.273l.162.272v.274H93.825l.162.272H94.802l.162-.272.164.272v.272l.162.272h.164v-.272h1.466v-.272h.162v-.272h.162v-.274h.489l.162.274h.326v.272h1.464l.162-.272H100.824v.272h.162v.272h.324l.165.272.162.273h.326l.162.272v-.272h.487v.272h.164v-.272l.162.272h.326l.162.272h.327l.162-.272v.272h.326l.162-.272v-.272h.163v-.273h1.139l.164-.272h.324l.164-.272h1.3v.272h.164v-.272h.162v.272h.162l.162.272h.179l.163.273h.162v-.273l.162-.272v-.544h.164v-.274h.162v-.272l.164-.273.162-.272h.163l.164-.272.162-.272h.162l.162-.546.162-.273v-.272h.163l.164-.272h.326l.488-.544.977-.275.651-.272h.162l.164.272v.275h.162v.272H114.672l.162.272.163.272.164.272v.273h.162v.272h.164-.164.326l.162.272h.651v.272h.488l-.326.272-.162.273-.326.272-.327.272-.162.274v1.637l.815.544v.272l.326.273h.325v.272l-.163-.272h-.162v.272h-.164l-.162.272h-.162.162v.274l.162.272h.164v.272l-.326.273.162.272.489.544v.272l.488-.272h1.303-.162l-.164.272h-.326v.273h-.653v.272l.162.544v.272l.164.273h-.164.164v.272h.163v.272h.164l.326.544v.273h.164l.162.272v.274h.162v.272h.327v1.361h.162v.272l.162.272.164.273v.544h-.164l.164.272v1.361l.162.272v.273h-.162V319.846h.162v.272h.487V320.935l.162.272v.544h.164v.273h.162v.272h.163v.272h.162v.272l.162.272.162.273h.164v.272h.325l.164.272h.162v.272h.162l.162.272h.164l.163.273.162.272.164.272h.162v.272l.326.272h.163l.162.273h.164l.162.272.162.272.164.272v.272l.162.273v.272h.163v.544h.164V329.101h.162l.162.272h.162l.164.544.327.272.488.273v.272h.324v-.272l.327-.273.162-.272v-.546h.326l.162-.272h.489l.162-.272v-.273h.164v-.544h.162l.164-.272.163-.272v.272h.324v-.272h.162l.162-.273h.327l.326-.272h.164v-.272h.324l.163-.272h.164v-.544l.162-.273h.326l.162.273h.162v.272h.325v.272h.162l.164.272h.325v.272h.164l.162.272H134.526l.164-.272h.162v-.272h.324l.327-.272h.162v-.272h.162l-.162-.272v-.273h.162v-.272l.162-.272v-.544h.162l.163-.273h.162l.164-.272.162-.272v.272h.162v-.544h.164l.162-.272h-.326V322.294l.164-.272v-.545h.162v-.272h.163v-.544h-.163v-.272h.163v-.273l.162-.272.164-.272h-.164l.164-.272.162-.274v-.272h.352v-.273h.163v-.272h.488v-.272h.162l.164.272v.272h.651l.162.273h.651v.272h.488v-.272h.164v-.273h.163v-.272h.326l.162-.272v-.272h.162l-.162-.272h.162l.162-.273h.163l.162-.272.164-.272v-.272h.162V315.487h-.162v-.272h-.164l-.326-.272h-.163v-.272H141.22l-.162-.273h-.162l-.164-.272v-.272h-.162v-.274l.162-.272h.164l-.164-.272v-.273h.164v-.272h-.164v-.544h-.162l-.326-.272h-.163v-.273h-.162v-.272l.162-.272h.163v-.272h.164v-.272h.162l.162-.272h.164v-.273h.162v-.272h.489v-.272h.162l.162.272h.651l.162-.272h.488l.163-.272h.326l.162.272h.326l.163.272h.488v.272H146.424l.164-.272h.324l.327-.272h.162v-.272h.164l.162-.272h.162v-.273h.162v-.274h.165v-.544h.162l.162-.272.162-.272h.162v-.273h.162v-1.088h.165v-.273h-.165l-.162-.272h-.324v-.544h-.162v-.272l-.162-.273h-.165v-1.088l.165-.273v-1.088h-.165v-.273h-.162l-.162-.272v-.272h-.162l.162-.272-.162-.272h-.164l-.162-.273h-.327v-.272h-.162l-.162-.272h-.164v.272h-.162v-.272l-.163-.274h-.162l-.164-.272h-.162v-.545h-.326v-.544l-.162-.272h-.163V296.1h-.162v-.272h.162l-.162-.272h-.324v-.273H142.682l-.162-.272v.272h-.162l-.162-.272h-.163v-.544h-.162.162-.162v-.272h.162l-.162-.273v-.274h-.164v-.544h-.162.162-.162v-.544h-.651v-.273h-.164l-.162.273h-.162v-.273h-.651v-.272h-.164l-.162-.272H138.454l-.162-.272-.164-.272v.272h-.163v-.272h.164v-.273h.327v-.272h.324l.162-.272h.162v-.272h.165v-.274h-.165l-.162-.272h-.162v-.273h-.162v-.272h-.162v.272h-.163v-.272h-.326v-1.089h.162v-.272h-.324v-.272h.488v-.272l-.164-.272v-.273l-.162-.274-.162-.272v.272h-.164l.164-.272h-.164l-.162-.272v-.272h-.325v-.272h-.164v-.273h-.162v.273h-.651l-.162-.273h-.65v.273h-.163l-.164-.273h-.486l-.164.273v-.273h-.163v-.272h-1.303v-.272h-.162v-.272l.162-.272v-.273h.327v-.272h.488v-.272h.162v-.272h.164v-.545l.162.273v-.545h.163V281.372h.326v-.273h-.162v-.274h.162v-.544h.162v-.272h-.162v-.545h.324v-.274h-.162v-.272h-.162V278.102h.324l.164.272.653-.545h.162l.162-.272h.162v-.272h.327l.162-.272h.164l.162-.272.651-.273.162-.272h.323v.272h.324l.162-.272h1.626l.162-.272H141.541l.164-.272h1.139v.272l.163.272v.272h.162l.164.273H144.958l.163-.273H145.935l.163-.272h1.139l.162-.272h.162v-.272h.162v-.272h.164v-.273h.489l.324.273.164.272h.327l.65-.272.489-.273-.164-.544v-.272h.164l-.164-.272V273.202l-.163-.272-.162-.545-.326-1.09-.162-.545v-.546l-.162-.272v-.272h4.575l.652.272.164.272v-.544h.162v-.272h.163V268.571h.164l.162-.272v-.272h.162v-.273h.162v-.272h.164l.163-.272h.162v-1.089h.164l.162-.272h.162v-.544h.164l-.164-.273h.164v-.272l-.164-.272v-1.661h.651l.162-.272h.651v-.272h.164v-.273l.162.273v.272h.162l.164.272h.162v.272l.163.272v.273h.164v.272h.162v.272h.162v.272h.162v.272h.162l.327-.272h.326l.164.272v.273h-.164v.272h.326v.272h.162l.163.272v-.272h.326l.162-.272h.164v-.272h.162v-.273l.163-.272h.326v-.272h.162v-.544h.164v-.543h.162v-.272h.163v-.272h.162v-.273h.162l.162-.272v-.272l.164-.272v-.274l.162-.272.163-.273h.162v-.272l.164-.272h.162v-.272l-.162-.272h-.326v-.273h-.163v-.544l-.162-.272h.653l.488.272.162-.818.164-.273v-.544h1.466l.162-.272h.488l.163-.272.488-.273h.324l.163-.272h.488l.162-.272v.272h.164V256.837l.163.272v.544h.162l.164.273v.272h.162v1.089h.162v.272h.327v-.272l.162-.273v-.272h.162v-.272h.162l.162-.272.163-.272h.164l.162-.273h2.114v.273h.162l.164-.273h.162l.163-.272h.162l.162-.272h.162l.164-.272v-.272h.162v-.273h.163l.162-.272h.652l.327-.272h.488v-.272l.162-.272.162-.273.163-.272H178.177l.327-.272v-.272h.162v-.272l.164-.545.326-.272.326-.544.163-.272.162-.275v-.272h.326l.162-.272h.163l.162-.272h.326l.162-.272h.651v-.273h.652v-.272h.163l.326-.272h.162l.162-.272v-.272h.164l.162-.272v-.273l.163-.272h.164l.162-.274h.162v-.272h.326l.163-.272.162-.273.164-.272h.324v-.272H186.153v-.272h.162l.162-.274.327-.272.164-.273v-.272h-.164l-.162-.544h-.327v-.272h-.162l-.162-.273-.164-.544-.326-.544-.163-.272-.162-.275v-.272h-.162v-.272l-.164-.544v-.545l-.162-.272v-.272l-.163-.272v-.273l-.164-.544v-.546l-.162-.545v-.272l-.162-.546v-.544l-.326-1.637v-.272l-.162-.273v-.272l-.164-.272V232.867h.164v-.544l.162-.273v-.272l.162-.272.164-.272v-.272h.162l.162-.273h-.488l-.488-.546-.163-.272V229.054l-.162-.274-.162-.272h-.162l-.162-.272-.163-.272v-.545l-.164-.272-.326-.272-.326-.544-.164-.545-.163-.272v-.546h-.162l.162-.272v-.273h-.162v-.272h-.164l-.162-.272v-.272l-.162-.272v-.273l-.162-.272v-.272h-.163v-.272h-.324v-.272h-.164l-.162-.273h-.162l-.489-.272-.164-.272-.326-.272-.489-.545h-.324v-.272h-.489l-.162-.272h-.488l-.489-.272h-.488l-.162.272v-.272h-.325l-.164-.272h-.162v-.273h-.162l-.326-.272-.163-.272h-.488l-.164-.272h-.325l-.162-.272h-.164l-.162-.273h-1.137l-.653.273v-.273h-.324l-.164-.272v-.272h-.651v.272h-.486v.272h-.163l-.162.273h-.164v.544h-.162v-.272h-.326v.272h-.163l-.162.272v-.272h-.155l-.488.272H166.471v.272h-.162v-.272h-.164v-.272H165.33v-.272l-.162.272-.162-.272-.162.272-.164.272h-.325v.545h-.488v.272l-.164-.272v.272h-.325v.272h-.65l-.163.272h-.488l-.324.272h-.491v.273h-.649l-.326.272h-1.467l-.326.272h-.653V220.34l-.162.273h-.164l-.162.272-.163-.272h-.162v.272h-.65l-.163-.272-.162.272h-.486l-.163-.272h-.164v.272h-.488v.272h-.162l-.162.272-.165.272h-.326l-.162.273h-.811l-.164.272h-.649v.272h-.162v-.272l-.162.272h.162-.815l-.162-.272H150.037l-.162.272h-1.464v.272h-.326l-.162-.272h-.653l-.326.272h-.162l-.326.272.162.273v.272l.162.272.164.272v.272h.162l.162.545h.327l.326-.272h.326l.164.272h.162l.163.272v.274h.164-.327l-.162.272v.545h-.164v1.36h.164v.273l.162.272.163.272h.164l.162.272h.164l.162.274.162.273.163.272v.272h-.163l-.977.272v.546l.163.273h-.651l-.162.272v.544l.162.545-.162.272h-.653v1.907l.162.272.165.272v.273l.162.272h-.162l-.165.272-.162.274h-.162v.272h-.162v.272h-.326v.273h-.651l-.326.272-.327.272h-.648l-.489.272h-.162v-.272H143.04l-.162.272h-.651l-.162.272h-.652l-.489.273h-.162l-.162.272h-.651l-.162.272h-.326l-.163.272h-.162.162l-.65.819-.489.272h-.326v.272h-.487v.272h-.162l-.162.272h-.164l-.162.273h-.162v.272h-.327v.272h-.162v.272h-.164v.272h-.162v.273h-.162v.544l-.163.272v.544l-.164-.272h-.324v.272h-.324v-.272h-.489.162-.162v-.272h-.162v.272h-.325l-.162-.272-.164-.272h-.162v-.272h-.324l-.163-.272H131.655v.272h-.325V245.395l-.162.273-.162.272v.544h-.162v.272h-.165v.545l-.162.818.162.272-.326-.272h-.164l-.324-.272-.489-.544h-.164l-.326-.273-.326-.272-.162-.272h-.165l-.162-.272-.162-.272h-.164l-.326-.545-.327-.272-.162-.272h-.164v-.272l-.326-.273h-.162l-.327-.272v-.272l-.162-.272h-.326l-.162-.546-.326-.273-.327-.272h-.164l-.162-.272-.164-.272-.162-.272h-.162v-.273h-.327l-.162-.272-.162-.272h-.164l-.162-.272-.325-.272h-.326v-.273l-.326-.272h-.326l-.163-.274h-.162l-.326-.272-.162-.272h-.327v-.272h-.488l-.162-.273h-.162l-.165-.272h-.326l-.162-.274h-.162l-.489-.272h-.324l-.162-.272h-.326l-.163-.272h-.488l-.653-.273h-.162l-.164-.272h-.488l-.327-.272h-.164l-.488-.274-.325-.272h-.164l-.326-.272h-.324l-.162-.273h-.163l-.488-.272-.162-.272h-.327v-.272h-.326l-.326-.272-.326-.273h-.164l-.163-.272-.326-.272-.326-.272h-.326l-.163-.272h-.164l-.326-.274h-.164l-.162-.273h.162V231.232l-.162-.272.652-.272-.326-.547v-.272l-.164-.544-.326-.547.326-.272-.326-.818-.327-.272h.327l-.162-.273V226.327l-.163-.545h.327l.326-.272.164-.274v-.544h.162v-.272l.162-.273.164-.272h-.326l-.326-.272h-.162l-.163.272h-.486v-.272l.162-.272.162-.272h.162v-.273l-.162-.272v-.272l-.162-.272.162-.272v-.273h.325l.162-.272h.815v-.272l.164-.818-.164-1.363-.163-.272V217.611l.163-.818-.163-.273H108.688l-.163-.272.489-.818v-.545l.162-.272v-.544l.162-.545.164-.272.327-.272.162-.546.162-.272h.162l.164-.273h-.365v-.059z" }),
        React__default.createElement("mask", { id: "mask0", width: "53", height: "49", x: "32", y: "163", maskUnits: "userSpaceOnUse" },
            React__default.createElement("path", { fill: "url(#pattern0)", d: "M32.417 163.702h51.94v47.383h-51.94v-47.383z" })),
        React__default.createElement("g", { mask: "url(#mask0)" },
            React__default.createElement("path", { fill: "#fff", d: "M77.749 169.17H38.795v38.953H77.75V169.17z", opacity: "0.75" }),
            React__default.createElement("path", { fill: "#386294", d: "M54.34 191.141a6.465 6.465 0 006.466-6.465 6.465 6.465 0 10-12.931 0 6.464 6.464 0 006.465 6.465z" }),
            React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M53.468 179.273a5.474 5.474 0 101.755 10.807 5.474 5.474 0 00-1.755-10.807zm-6.485 6.598a7.458 7.458 0 1114.724-2.389 7.458 7.458 0 01-14.724 2.389z", clipRule: "evenodd" })),
        React__default.createElement("mask", { id: "mask1", width: "53", height: "48", x: "179", y: "53", maskUnits: "userSpaceOnUse" },
            React__default.createElement("path", { fill: "url(#pattern1)", d: "M179.622 53.198h51.94v47.384h-51.94V53.198z" })),
        React__default.createElement("g", { mask: "url(#mask1)" },
            React__default.createElement("path", { fill: "#fff", d: "M224.954 58.666H186V97.62h38.954V58.666z", opacity: "0.75" }),
            React__default.createElement("path", { fill: "#386294", d: "M201.545 80.638a6.466 6.466 0 100-12.932 6.466 6.466 0 000 12.932z" }),
            React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M201.545 68.698a5.474 5.474 0 100 10.948 5.474 5.474 0 000-10.948zm-7.457 5.474a7.458 7.458 0 1114.915 0 7.458 7.458 0 01-14.915 0z", clipRule: "evenodd" })),
        React__default.createElement("mask", { id: "mask2", width: "52", height: "49", x: "175", y: "103", maskUnits: "userSpaceOnUse" },
            React__default.createElement("path", { fill: "url(#pattern2)", d: "M175.019 103.871h51.939v47.384h-51.939v-47.384z" })),
        React__default.createElement("g", { mask: "url(#mask2)" },
            React__default.createElement("path", { fill: "#fff", d: "M220.351 109.339h-38.954v38.954h38.954v-38.954z", opacity: "0.75" }),
            React__default.createElement("path", { fill: "#386294", d: "M196.942 131.31a6.465 6.465 0 10-6.465-6.465 6.462 6.462 0 006.465 6.465z" }),
            React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M196.942 119.371a5.474 5.474 0 100 10.949 5.474 5.474 0 000-10.949zm-7.457 5.474a7.456 7.456 0 017.457-7.457 7.456 7.456 0 017.457 7.457 7.456 7.456 0 01-7.457 7.457 7.456 7.456 0 01-7.457-7.457z", clipRule: "evenodd" })),
        React__default.createElement("mask", { id: "mask3", width: "53", height: "49", x: "182", y: "185", maskUnits: "userSpaceOnUse" },
            React__default.createElement("path", { fill: "url(#pattern3)", d: "M182.477 185.957h51.939v47.383h-51.939v-47.383z" })),
        React__default.createElement("g", { mask: "url(#mask3)" },
            React__default.createElement("path", { fill: "#fff", d: "M227.808 191.424h-38.954v38.954h38.954v-38.954z", opacity: "0.75" }),
            React__default.createElement("path", { fill: "#386294", d: "M204.399 213.398a6.465 6.465 0 100-12.932 6.467 6.467 0 000 12.932z" }),
            React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M204.399 201.457a5.473 5.473 0 100 10.947 5.473 5.473 0 000-10.947zm-7.457 5.473a7.457 7.457 0 1114.915.001 7.457 7.457 0 01-14.915-.001z", clipRule: "evenodd" })),
        React__default.createElement("mask", { id: "mask4", width: "53", height: "48", x: "247", y: "41", maskUnits: "userSpaceOnUse" },
            React__default.createElement("path", { fill: "url(#pattern4)", d: "M247.665 41.428h51.939V88.81h-51.939V41.428z" })),
        React__default.createElement("g", { mask: "url(#mask4)" },
            React__default.createElement("path", { fill: "#fff", d: "M292.997 46.895h-38.954v38.953h38.954V46.895z", opacity: "0.75" }),
            React__default.createElement("path", { fill: "#386294", d: "M269.588 68.868a6.466 6.466 0 10-6.465-6.466 6.463 6.463 0 006.465 6.466z" }),
            React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M269.588 56.929a5.474 5.474 0 100 10.948 5.474 5.474 0 000-10.948zm-7.457 5.473a7.458 7.458 0 1114.915 0 7.458 7.458 0 01-14.915 0z", clipRule: "evenodd" })),
        React__default.createElement("mask", { id: "mask5", width: "53", height: "48", x: "74", y: "266", maskUnits: "userSpaceOnUse" },
            React__default.createElement("path", { fill: "url(#pattern5)", d: "M74.781 266.093h51.94v47.383h-51.94v-47.383z" })),
        React__default.createElement("g", { mask: "url(#mask5)" },
            React__default.createElement("path", { fill: "#fff", d: "M120.114 271.56H81.161v38.953h38.953V271.56z", opacity: "0.75" }),
            React__default.createElement("path", { fill: "#386294", d: "M96.704 293.533a6.465 6.465 0 100-12.93 6.465 6.465 0 000 12.93z" }),
            React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M96.704 281.592a5.473 5.473 0 10-.002 10.946 5.473 5.473 0 00.002-10.946zm-7.458 5.473a7.457 7.457 0 1114.915 0 7.457 7.457 0 01-14.915 0z", clipRule: "evenodd" })),
        React__default.createElement("mask", { id: "mask6", width: "53", height: "49", x: "109", y: "200", maskUnits: "userSpaceOnUse" },
            React__default.createElement("path", { fill: "url(#pattern6)", d: "M109.88 200.873h51.939v47.383H109.88v-47.383z" })),
        React__default.createElement("g", { mask: "url(#mask6)" },
            React__default.createElement("path", { fill: "#fff", d: "M155.212 206.341h-38.953v38.954h38.953v-38.954z", opacity: "0.75" }),
            React__default.createElement("path", { fill: "#386294", d: "M131.802 228.312a6.465 6.465 0 100-12.932 6.465 6.465 0 000 12.932z" }),
            React__default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M131.802 216.373a5.474 5.474 0 100 10.949 5.474 5.474 0 000-10.949zm-7.458 5.474a7.458 7.458 0 1114.916 0 7.458 7.458 0 01-14.916 0z", clipRule: "evenodd" })),
        React__default.createElement("path", { fill: "#fff", d: "M117.267 165.359H58.913v16.033h58.354v-16.033z" }),
        React__default.createElement("path", { fill: "#017F34", d: "M62.478 178.27v-9.278h2.855c.816 0 1.544.184 2.186.554a3.81 3.81 0 011.51 1.568c.361.675.542 1.444.542 2.306v.427c0 .863-.179 1.629-.536 2.301a3.793 3.793 0 01-1.497 1.561c-.646.369-1.374.556-2.186.561h-2.874zm1.912-7.73v6.194h.924c.748 0 1.319-.244 1.714-.733.395-.488.597-1.187.605-2.096v-.491c0-.943-.195-1.657-.586-2.141-.39-.489-.962-.733-1.714-.733h-.943zM74.84 178.27a2.052 2.052 0 01-.184-.619c-.446.498-1.026.746-1.74.746-.675 0-1.236-.195-1.682-.586a1.89 1.89 0 01-.663-1.479c0-.73.27-1.291.81-1.682.543-.391 1.327-.588 2.35-.592h.848v-.396c0-.318-.083-.573-.248-.764-.162-.191-.419-.287-.771-.287-.31 0-.555.074-.733.223-.174.149-.261.353-.261.612h-1.842c0-.4.123-.769.37-1.109.246-.34.594-.605 1.045-.797a3.78 3.78 0 011.516-.293c.85 0 1.523.215 2.02.644.502.425.752 1.024.752 1.797v2.989c.004.654.096 1.149.274 1.484v.109h-1.86zm-1.523-1.281c.272 0 .523-.06.752-.179.23-.123.4-.286.51-.49v-1.186h-.688c-.922 0-1.413.319-1.472.956l-.006.109c0 .229.08.418.242.567.161.148.382.223.662.223zM80.32 176.02l1.281-4.645h1.925L81.2 178.27h-1.759l-2.326-6.895h1.925l1.28 4.645zM87.426 178.397c-1.011 0-1.836-.31-2.473-.93-.633-.621-.95-1.447-.95-2.479v-.179c0-.692.135-1.31.402-1.854a2.934 2.934 0 011.135-1.262c.492-.297 1.053-.446 1.682-.446.943 0 1.684.298 2.224.892.543.595.815 1.438.815 2.53v.752h-4.39c.06.451.238.812.535 1.083.302.272.682.408 1.14.408.71 0 1.265-.257 1.664-.771l.905 1.013a2.79 2.79 0 01-1.122.918 3.705 3.705 0 01-1.567.325zm-.21-5.659c-.366 0-.663.124-.893.37-.225.246-.37.599-.433 1.058h2.562v-.147c-.009-.408-.12-.722-.332-.943-.212-.225-.514-.338-.905-.338zM93.008 171.375l.057.796c.493-.616 1.154-.924 1.982-.924.73 0 1.274.215 1.631.644.357.429.54 1.071.548 1.924v4.455h-1.841v-4.41c0-.391-.085-.673-.255-.848-.17-.178-.453-.267-.848-.267-.518 0-.907.221-1.166.663v4.862h-1.841v-6.895h1.733zM100.833 169.68v1.695h1.179v1.351h-1.179v3.441c0 .255.049.437.146.548.098.11.285.165.561.165.204 0 .385-.014.542-.044v1.395a3.774 3.774 0 01-1.115.166c-1.292 0-1.95-.652-1.976-1.956v-3.715h-1.007v-1.351h1.007v-1.695h1.842zM106.912 173.102a4.999 4.999 0 00-.663-.051c-.696 0-1.153.235-1.37.707v4.512h-1.841v-6.895h1.739l.051.822c.37-.633.882-.95 1.536-.95.204 0 .395.028.574.083l-.026 1.772zM110.493 175.663l1.275-4.288h1.975l-2.772 7.965-.153.363c-.412.901-1.092 1.351-2.039 1.351-.267 0-.539-.04-.815-.121v-1.395l.28.006c.348 0 .607-.053.777-.159.174-.106.31-.283.408-.529l.217-.567-2.415-6.914h1.981l1.281 4.288z" }),
        React__default.createElement("path", { fill: "#fff", d: "M247.585 54.99H206.01v16.033h41.575V54.99z" }),
        React__default.createElement("path", { fill: "#386294", d: "M216.967 64.676c-.072.998-.442 1.784-1.109 2.358-.663.573-1.538.86-2.625.86-1.19 0-2.127-.4-2.81-1.198-.68-.803-1.02-1.903-1.02-3.3v-.568c0-.892.157-1.678.472-2.358.314-.68.762-1.2 1.344-1.561.586-.365 1.266-.548 2.039-.548 1.071 0 1.933.287 2.587.86.655.574 1.033 1.379 1.135 2.415h-1.912c-.047-.599-.215-1.032-.504-1.3-.284-.271-.72-.407-1.306-.407-.637 0-1.115.229-1.434.688-.314.454-.475 1.162-.484 2.122v.7c0 1.003.151 1.736.453 2.2.305.462.785.694 1.44.694.59 0 1.03-.134 1.319-.402.293-.272.461-.69.503-1.255h1.912zM217.814 64.255c0-.684.132-1.293.395-1.828.264-.536.642-.95 1.135-1.243.497-.293 1.072-.44 1.727-.44.93 0 1.688.285 2.274.854.591.57.92 1.343.988 2.32l.013.471c0 1.058-.295 1.908-.886 2.55-.59.636-1.383.955-2.377.955-.994 0-1.788-.319-2.383-.956-.59-.637-.886-1.504-.886-2.6v-.083zm1.842.134c0 .654.123 1.156.37 1.504.246.344.599.516 1.057.516.446 0 .795-.17 1.045-.51.251-.344.376-.892.376-1.644 0-.641-.125-1.138-.376-1.49-.25-.353-.603-.53-1.057-.53-.451 0-.799.177-1.045.53-.247.348-.37.89-.37 1.624zM229.355 62.599a5.027 5.027 0 00-.663-.051c-.697 0-1.154.235-1.37.707v4.511h-1.842v-6.894h1.74l.051.822c.369-.633.881-.95 1.536-.95.203 0 .395.028.573.083l-.025 1.772zM236.46 64.383c0 1.104-.236 1.967-.708 2.587-.471.616-1.13.924-1.975.924-.748 0-1.345-.287-1.791-.86l-.083.732h-1.656V57.98h1.841v3.51c.425-.496.984-.745 1.676-.745.841 0 1.5.31 1.976.93.48.617.72 1.485.72 2.607v.102zm-1.842-.134c0-.697-.11-1.204-.331-1.523-.221-.323-.55-.484-.988-.484-.586 0-.99.24-1.211.72v2.72c.225.485.633.727 1.224.727.594 0 .985-.293 1.172-.88.089-.28.134-.706.134-1.28zM240.098 65.16l1.275-4.288h1.975l-2.772 7.965-.153.363c-.412.9-1.092 1.351-2.039 1.351-.268 0-.539-.04-.816-.12v-1.397l.281.007c.348 0 .607-.053.777-.16.174-.106.31-.282.408-.528l.217-.567-2.415-6.914h1.981l1.281 4.288z" }),
        React__default.createElement("path", { fill: "#fff", d: "M321.413 44.736h-47.541v16.033h47.541V44.736z" }),
        React__default.createElement("path", { fill: "#386294", d: "M285.05 53.088c0 .913-.161 1.714-.484 2.402-.323.688-.786 1.22-1.39 1.593-.599.374-1.287.56-2.064.56-.769 0-1.455-.184-2.058-.554-.604-.37-1.071-.896-1.402-1.58-.332-.688-.499-1.478-.504-2.37v-.46c0-.913.164-1.715.491-2.408.331-.697.797-1.23 1.396-1.6.603-.373 1.291-.56 2.064-.56.773 0 1.459.187 2.058.56.604.37 1.069.903 1.396 1.6.331.693.497 1.493.497 2.402v.415zm-1.937-.421c0-.973-.174-1.712-.523-2.218-.348-.505-.845-.758-1.491-.758-.641 0-1.136.25-1.485.752-.348.497-.524 1.228-.529 2.192v.453c0 .947.175 1.682.523 2.204.348.523.85.784 1.504.784.641 0 1.134-.25 1.478-.752.344-.505.519-1.24.523-2.204v-.453zM290.447 56.815c-.454.553-1.083.829-1.886.829-.739 0-1.304-.213-1.695-.637-.387-.425-.584-1.048-.593-1.867V50.62h1.842v4.455c0 .718.327 1.077.981 1.077.625 0 1.054-.217 1.288-.65V50.62h1.847v6.895h-1.733l-.051-.7zM295.316 50.621l.057.797c.493-.616 1.153-.924 1.982-.924.73 0 1.274.215 1.631.644.357.429.54 1.07.548 1.924v4.454h-1.841v-4.41c0-.39-.085-.673-.255-.847-.17-.178-.453-.267-.848-.267-.518 0-.907.22-1.166.662v4.862h-1.842v-6.895h1.734zM300.649 54.018c0-1.075.24-1.93.72-2.568.485-.637 1.145-.956 1.982-.956.671 0 1.226.25 1.663.752v-3.518h1.848v9.788h-1.663l-.089-.733c-.459.574-1.049.86-1.772.86-.811 0-1.463-.318-1.956-.955-.488-.642-.733-1.532-.733-2.67zm1.842.134c0 .645.112 1.14.338 1.484.225.345.552.517.981.517.569 0 .971-.24 1.204-.72v-2.721c-.229-.48-.626-.72-1.191-.72-.888 0-1.332.72-1.332 2.16zM310.233 57.516h-1.848v-9.788h1.848v9.788zM314.93 57.644c-1.012 0-1.836-.31-2.473-.93-.633-.62-.949-1.447-.949-2.48v-.178c0-.692.133-1.31.401-1.854a2.934 2.934 0 011.134-1.262c.493-.297 1.054-.446 1.683-.446.943 0 1.684.297 2.224.892.543.595.815 1.438.815 2.53v.752h-4.39c.059.45.238.811.535 1.083.302.272.682.408 1.141.408.709 0 1.263-.257 1.663-.771l.905 1.013c-.276.391-.65.697-1.122.918a3.708 3.708 0 01-1.567.325zm-.211-5.659c-.365 0-.662.123-.892.37-.225.246-.369.599-.433 1.058h2.561v-.147c-.008-.408-.118-.722-.331-.943-.212-.225-.514-.338-.905-.338z" }),
        React__default.createElement("path", { fill: "#fff", d: "M261.008 105.7h-59.659v16.033h59.659V105.7z" }),
        React__default.createElement("path", { fill: "#386294", d: "M207.985 114.718l-.994 1.07v2.651h-1.911v-9.278h1.911v4.206l.842-1.154 2.364-3.052h2.351l-3.294 4.123 3.39 5.155h-2.275l-2.384-3.721zM216.25 118.566c-1.011 0-1.835-.31-2.472-.93-.633-.62-.95-1.446-.95-2.479v-.178c0-.693.134-1.311.402-1.854a2.928 2.928 0 011.134-1.262c.493-.298 1.054-.446 1.682-.446.943 0 1.685.297 2.224.892.544.595.816 1.438.816 2.53v.752h-4.391c.06.45.238.811.536 1.083.301.272.682.408 1.14.408.71 0 1.264-.257 1.664-.771l.904 1.013a2.79 2.79 0 01-1.121.918 3.722 3.722 0 01-1.568.324zm-.21-5.658c-.365 0-.663.123-.892.37-.225.246-.37.599-.433 1.057h2.561v-.146c-.008-.408-.119-.722-.331-.943-.213-.226-.514-.338-.905-.338zM222.342 109.849v1.695h1.179v1.351h-1.179v3.441c0 .255.049.438.147.548.097.111.284.166.561.166.203 0 .384-.015.541-.045v1.396c-.361.11-.733.165-1.115.165-1.291 0-1.95-.652-1.975-1.956v-3.715h-1.007v-1.351h1.007v-1.695h1.841zM226.752 109.849v1.695h1.179v1.351h-1.179v3.441c0 .255.049.438.146.548.098.111.285.166.561.166.204 0 .385-.015.542-.045v1.396c-.361.11-.733.165-1.115.165-1.292 0-1.95-.652-1.976-1.956v-3.715h-1.007v-1.351h1.007v-1.695h1.842zM232.13 118.566c-1.011 0-1.835-.31-2.472-.93-.633-.62-.95-1.446-.95-2.479v-.178c0-.693.134-1.311.402-1.854a2.921 2.921 0 011.134-1.262c.493-.298 1.053-.446 1.682-.446.943 0 1.685.297 2.224.892.544.595.816 1.438.816 2.53v.752h-4.391c.06.45.238.811.535 1.083.302.272.682.408 1.141.408.71 0 1.264-.257 1.663-.771l.905 1.013a2.79 2.79 0 01-1.121.918 3.722 3.722 0 01-1.568.324zm-.21-5.658c-.366 0-.663.123-.892.37-.226.246-.37.599-.434 1.057h2.562v-.146c-.009-.408-.119-.722-.331-.943-.213-.226-.514-.338-.905-.338zM239.891 113.271a4.985 4.985 0 00-.662-.051c-.697 0-1.154.236-1.37.707v4.512h-1.842v-6.895h1.74l.051.822c.369-.633.881-.949 1.535-.949.204 0 .396.027.574.083l-.026 1.771zM242.727 118.439h-1.848v-6.895h1.848v6.895zm-1.956-8.679c0-.276.091-.503.274-.682.187-.178.44-.267.758-.267.314 0 .565.089.752.267.187.179.28.406.28.682 0 .28-.095.51-.286.688-.187.179-.436.268-.746.268s-.561-.089-.752-.268a.908.908 0 01-.28-.688zM245.945 111.544l.057.797c.493-.616 1.154-.924 1.982-.924.731 0 1.275.214 1.632.643.356.429.539 1.071.548 1.925v4.454h-1.842v-4.41c0-.39-.085-.673-.255-.847-.17-.178-.452-.268-.847-.268-.519 0-.907.221-1.167.663v4.862h-1.841v-6.895h1.733zM251.298 114.941c0-1.058.25-1.91.752-2.556.505-.645 1.185-.968 2.039-.968.756 0 1.344.259 1.765.777l.076-.65h1.67v6.666c0 .603-.138 1.128-.414 1.574a2.618 2.618 0 01-1.154 1.019c-.497.234-1.079.351-1.746.351-.505 0-.998-.102-1.478-.306-.48-.2-.843-.459-1.09-.778l.816-1.121c.459.514 1.015.771 1.67.771.488 0 .868-.132 1.14-.395.272-.259.408-.629.408-1.109v-.37c-.425.48-.983.72-1.676.72-.828 0-1.499-.322-2.014-.968-.509-.65-.764-1.51-.764-2.581v-.076zm1.841.133c0 .625.126 1.116.376 1.472.251.353.595.529 1.033.529.56 0 .962-.21 1.204-.63v-2.9c-.246-.42-.644-.631-1.192-.631-.441 0-.79.181-1.045.542-.25.361-.376.901-.376 1.618z" }),
        React__default.createElement("path", { fill: "#fff", d: "M269.025 186.426h-97.692v16.033h97.692v-16.033z" }),
        React__default.createElement("path", { fill: "#386294", d: "M182.107 196.558l1.249-6.602h1.906l-2.059 9.278h-1.924l-1.51-6.206-1.511 6.206h-1.924l-2.058-9.278h1.905l1.255 6.589 1.53-6.589h1.618l1.523 6.602zM189.149 199.362c-1.011 0-1.836-.311-2.473-.931-.633-.62-.949-1.446-.949-2.479v-.178c0-.692.134-1.311.401-1.854a2.93 2.93 0 011.135-1.262c.492-.297 1.053-.446 1.682-.446.943 0 1.684.297 2.224.892.543.595.815 1.438.815 2.53v.752h-4.39c.059.45.238.811.535 1.083.302.272.682.408 1.141.408.709 0 1.264-.257 1.663-.771l.905 1.013c-.276.391-.65.697-1.122.918a3.717 3.717 0 01-1.567.325zm-.211-5.659c-.365 0-.662.123-.892.37-.225.246-.369.599-.433 1.057h2.562v-.146c-.009-.408-.119-.722-.332-.943-.212-.225-.514-.338-.905-.338zM194.979 199.234h-1.848v-9.788h1.848v9.788zM198.446 199.234h-1.848v-9.788h1.848v9.788zM201.912 199.234h-1.848v-6.895h1.848v6.895zm-1.956-8.679c0-.276.091-.503.274-.682.187-.178.44-.267.758-.267.315 0 .565.089.752.267a.903.903 0 01.281.682.9.9 0 01-.287.688c-.187.179-.435.268-.746.268-.31 0-.56-.089-.752-.268a.912.912 0 01-.28-.688zM205.13 192.339l.058.797c.493-.616 1.153-.924 1.981-.924.731 0 1.275.214 1.632.643.357.43.539 1.071.548 1.925v4.454h-1.842v-4.41c0-.39-.085-.673-.255-.847-.17-.178-.452-.268-.847-.268-.518 0-.907.221-1.166.663v4.862h-1.842v-6.895h1.733zM210.483 195.736c0-1.058.251-1.91.752-2.556.506-.645 1.185-.968 2.039-.968.756 0 1.345.259 1.765.777l.077-.65h1.669v6.666c0 .603-.138 1.128-.414 1.574a2.615 2.615 0 01-1.153 1.019c-.497.234-1.079.351-1.746.351-.506 0-.999-.102-1.479-.306-.48-.2-.843-.459-1.089-.778l.815-1.121c.459.514 1.016.771 1.67.771.488 0 .869-.132 1.14-.395.272-.259.408-.629.408-1.109v-.37c-.425.481-.983.721-1.676.721-.828 0-1.499-.323-2.013-.969-.51-.65-.765-1.51-.765-2.581v-.076zm1.842.134c0 .624.125 1.115.376 1.472.25.352.594.528 1.032.528.561 0 .962-.21 1.204-.63v-2.9c-.246-.42-.643-.631-1.191-.631-.442 0-.79.181-1.045.542-.251.361-.376.901-.376 1.619zM224.419 195.85c0 1.105-.236 1.967-.707 2.588-.472.616-1.13.924-1.975.924-.748 0-1.345-.287-1.791-.861l-.083.733h-1.657v-9.788h1.842v3.511c.425-.497.983-.745 1.676-.745.841 0 1.499.31 1.975.93.48.616.72 1.485.72 2.606v.102zm-1.841-.133c0-.697-.111-1.205-.332-1.523-.221-.323-.55-.485-.987-.485-.587 0-.99.24-1.211.72v2.721c.225.485.633.727 1.223.727.595 0 .986-.293 1.173-.88.089-.28.134-.707.134-1.28zM225.273 195.723c0-.684.132-1.294.395-1.829a2.906 2.906 0 011.134-1.242c.498-.294 1.073-.44 1.727-.44.931 0 1.689.284 2.275.854.591.569.92 1.342.988 2.319l.013.472c0 1.058-.296 1.907-.886 2.549-.591.637-1.383.956-2.377.956-.994 0-1.788-.319-2.383-.956-.591-.638-.886-1.504-.886-2.6v-.083zm1.842.134c0 .654.123 1.155.369 1.504.247.344.599.516 1.058.516.446 0 .795-.17 1.045-.51.251-.344.376-.892.376-1.644 0-.641-.125-1.139-.376-1.491-.25-.353-.603-.529-1.058-.529-.45 0-.798.176-1.045.529-.246.348-.369.89-.369 1.625zM236.813 194.066a4.985 4.985 0 00-.662-.051c-.697 0-1.154.236-1.37.708v4.511h-1.842v-6.895h1.74l.051.822c.369-.633.881-.949 1.535-.949.204 0 .395.027.574.083l-.026 1.771zM237.189 195.723c0-.684.132-1.294.395-1.829a2.902 2.902 0 011.135-1.242c.497-.294 1.072-.44 1.727-.44.93 0 1.688.284 2.274.854.591.569.92 1.342.988 2.319l.013.472c0 1.058-.295 1.907-.886 2.549-.59.637-1.383.956-2.377.956-.994 0-1.788-.319-2.383-.956-.59-.638-.886-1.504-.886-2.6v-.083zm1.842.134c0 .654.123 1.155.369 1.504.247.344.599.516 1.058.516.446 0 .795-.17 1.045-.51.251-.344.376-.892.376-1.644 0-.641-.125-1.139-.376-1.491-.25-.353-.603-.529-1.057-.529-.451 0-.799.176-1.046.529-.246.348-.369.89-.369 1.625zM248.984 198.533c-.454.552-1.083.829-1.886.829-.739 0-1.304-.213-1.695-.638-.386-.424-.584-1.047-.592-1.867v-4.518h1.841v4.455c0 .717.327 1.076.981 1.076.625 0 1.054-.216 1.288-.65v-4.881h1.848v6.895h-1.734l-.051-.701zM251.89 195.736c0-1.058.251-1.91.752-2.556.506-.645 1.185-.968 2.039-.968.756 0 1.345.259 1.765.777l.077-.65h1.669v6.666c0 .603-.138 1.128-.414 1.574a2.615 2.615 0 01-1.153 1.019c-.497.234-1.079.351-1.746.351-.506 0-.999-.102-1.479-.306-.48-.2-.843-.459-1.089-.778l.815-1.121c.459.514 1.016.771 1.67.771.488 0 .869-.132 1.141-.395.271-.259.407-.629.407-1.109v-.37c-.424.481-.983.721-1.676.721-.828 0-1.499-.323-2.013-.969-.51-.65-.765-1.51-.765-2.581v-.076zm1.842.134c0 .624.125 1.115.376 1.472.25.352.594.528 1.032.528.561 0 .962-.21 1.204-.63v-2.9c-.246-.42-.643-.631-1.191-.631-.442 0-.79.181-1.045.542-.251.361-.376.901-.376 1.619zM261.41 193.091c.489-.586 1.103-.879 1.842-.879 1.495 0 2.254.869 2.275 2.606v4.416h-1.842v-4.365c0-.395-.085-.686-.255-.873-.17-.191-.452-.287-.847-.287-.54 0-.931.209-1.173.625v4.9h-1.841v-9.788h1.841v3.645z" }),
        React__default.createElement("path", { fill: "#fff", d: "M220.179 227.442h-83.895v16.033h83.895v-16.033z" }),
        React__default.createElement("path", { fill: "#017F34", d: "M147.485 240.32h-1.911l-3.722-6.105v6.105h-1.911v-9.278h1.911l3.728 6.117v-6.117h1.905v9.278zM148.747 236.809c0-.684.132-1.294.395-1.829a2.91 2.91 0 011.135-1.243c.497-.293 1.072-.439 1.726-.439.931 0 1.689.284 2.275.854.591.569.92 1.342.988 2.319l.013.472c0 1.057-.296 1.907-.886 2.549-.591.637-1.383.955-2.377.955-.994 0-1.788-.318-2.383-.955-.591-.638-.886-1.504-.886-2.6v-.083zm1.842.134c0 .654.123 1.155.369 1.504.247.344.599.516 1.058.516.446 0 .795-.17 1.045-.51.251-.344.376-.892.376-1.644 0-.642-.125-1.139-.376-1.491-.25-.353-.603-.529-1.058-.529-.45 0-.798.176-1.045.529-.246.348-.369.89-.369 1.625zM160.287 235.152a4.985 4.985 0 00-.662-.051c-.697 0-1.154.236-1.37.707v4.512h-1.842v-6.895h1.74l.051.822c.369-.633.881-.949 1.535-.949.204 0 .395.027.574.083l-.026 1.771zM163.703 231.73v1.695h1.179v1.351h-1.179v3.441c0 .255.049.438.146.548.098.111.285.166.561.166.204 0 .385-.015.542-.045v1.396c-.361.11-.733.165-1.115.165-1.292 0-1.95-.652-1.976-1.956v-3.715h-1.007v-1.351h1.007v-1.695h1.842zM167.705 234.177c.488-.586 1.102-.879 1.841-.879 1.496 0 2.254.868 2.275 2.606v4.416h-1.841v-4.365c0-.395-.085-.686-.255-.873-.17-.191-.453-.287-.848-.287-.539 0-.93.208-1.172.625v4.9h-1.842v-9.788h1.842v3.645zM177.206 240.32a2.043 2.043 0 01-.185-.618c-.446.497-1.026.745-1.74.745-.675 0-1.236-.195-1.682-.586a1.888 1.888 0 01-.663-1.478c0-.731.27-1.292.81-1.682.543-.391 1.327-.589 2.351-.593h.847v-.395c0-.319-.082-.574-.248-.765-.161-.191-.418-.287-.771-.287-.31 0-.554.075-.733.223-.174.149-.261.353-.261.612h-1.842c0-.399.123-.769.37-1.109.246-.339.595-.605 1.045-.796.45-.196.956-.293 1.516-.293.85 0 1.523.214 2.021.643.501.425.751 1.024.751 1.797v2.989c.005.654.096 1.149.274 1.485v.108h-1.86zm-1.523-1.281c.272 0 .522-.059.752-.178.229-.123.399-.287.509-.491v-1.185h-.688c-.922 0-1.412.318-1.472.956l-.006.108a.74.74 0 00.242.567c.161.149.382.223.663.223zM181.934 233.425l.057.771c.489-.599 1.149-.898 1.982-.898.888 0 1.498.35 1.829 1.051.484-.701 1.175-1.051 2.071-1.051.748 0 1.304.219 1.669.656.366.433.548 1.088.548 1.963v4.403h-1.847v-4.397c0-.391-.077-.675-.23-.854-.153-.182-.423-.274-.809-.274-.552 0-.935.264-1.147.79l.006 4.735h-1.841v-4.391c0-.399-.079-.688-.236-.866-.157-.179-.425-.268-.803-.268-.523 0-.901.217-1.134.65v4.875h-1.842v-6.895h1.727zM197.718 236.936c0 1.062-.242 1.914-.726 2.556-.48.637-1.13.955-1.95.955-.697 0-1.26-.242-1.689-.726v3.25h-1.842v-9.546h1.708l.064.676c.446-.536 1.028-.803 1.746-.803.85 0 1.51.314 1.982.943.471.629.707 1.495.707 2.6v.095zm-1.841-.134c0-.641-.115-1.136-.345-1.484-.225-.349-.554-.523-.987-.523-.578 0-.975.221-1.192.663v2.823c.225.454.627.682 1.204.682.88 0 1.32-.72 1.32-2.161zM201.07 231.73v1.695h1.179v1.351h-1.179v3.441c0 .255.049.438.146.548.098.111.285.166.561.166.204 0 .385-.015.542-.045v1.396c-.361.11-.733.165-1.115.165-1.292 0-1.95-.652-1.976-1.956v-3.715h-1.007v-1.351h1.007v-1.695h1.842zM202.797 236.809c0-.684.131-1.294.395-1.829a2.901 2.901 0 011.134-1.243c.497-.293 1.073-.439 1.727-.439.93 0 1.689.284 2.275.854.59.569.92 1.342.988 2.319l.012.472c0 1.057-.295 1.907-.885 2.549-.591.637-1.383.955-2.377.955-.994 0-1.789-.318-2.383-.955-.591-.638-.886-1.504-.886-2.6v-.083zm1.841.134c0 .654.124 1.155.37 1.504.246.344.599.516 1.058.516.446 0 .794-.17 1.045-.51.25-.344.376-.892.376-1.644 0-.642-.126-1.139-.376-1.491-.251-.353-.603-.529-1.058-.529-.45 0-.799.176-1.045.529-.246.348-.37.89-.37 1.625zM212.158 233.425l.057.797c.493-.616 1.153-.924 1.982-.924.73 0 1.274.214 1.631.643.357.429.54 1.071.548 1.925v4.454h-1.841v-4.41c0-.39-.085-.673-.255-.847-.17-.179-.453-.268-.848-.268-.518 0-.907.221-1.166.663v4.862h-1.842v-6.895h1.734z" }),
        React__default.createElement("path", { fill: "#fff", d: "M107.759 280.016H39.524v16.034h68.235v-16.034z" }),
        React__default.createElement("path", { fill: "#017F34", d: "M50.072 285.099H47.23v7.729H45.32v-7.729h-2.804v-1.549h7.557v1.549zM49.435 289.317c0-.684.132-1.293.395-1.829a2.898 2.898 0 011.135-1.242c.497-.293 1.072-.44 1.726-.44.93 0 1.69.285 2.275.854.59.569.92 1.342.988 2.319l.013.472c0 1.058-.295 1.907-.886 2.549-.59.637-1.383.956-2.377.956-.994 0-1.788-.319-2.383-.956-.59-.637-.886-1.504-.886-2.6v-.083zm1.842.134c0 .654.123 1.155.37 1.504.246.344.598.516 1.057.516.446 0 .795-.17 1.045-.51.25-.344.376-.892.376-1.644 0-.641-.125-1.138-.376-1.491-.25-.353-.603-.529-1.058-.529-.45 0-.798.176-1.045.529-.246.348-.37.89-.37 1.625zM63.097 290.324l.905-4.391h1.778l-1.759 6.895H62.48l-1.306-4.339-1.306 4.339H58.33l-1.759-6.895h1.778l.898 4.385 1.262-4.385h1.332l1.255 4.391zM69.565 291.471c.34 0 .616-.094.829-.28.212-.187.322-.436.331-.746h1.727a2.379 2.379 0 01-.382 1.287 2.55 2.55 0 01-1.033.905 3.234 3.234 0 01-1.44.319c-.985 0-1.763-.313-2.332-.937-.57-.629-.854-1.495-.854-2.6v-.121c0-1.062.282-1.91.847-2.543.566-.633 1.34-.949 2.326-.949.863 0 1.553.246 2.071.739.523.489.788 1.141.797 1.956h-1.727c-.008-.356-.119-.645-.331-.866-.213-.225-.493-.338-.842-.338-.429 0-.754.157-.974.472-.217.31-.325.815-.325 1.516v.191c0 .71.108 1.22.325 1.53.216.31.545.465.987.465zM76.677 292.956c-1.011 0-1.836-.31-2.473-.931-.633-.62-.95-1.446-.95-2.479v-.178c0-.692.135-1.311.402-1.854a2.929 2.929 0 011.134-1.262c.493-.297 1.054-.446 1.683-.446.943 0 1.684.297 2.224.892.543.595.815 1.438.815 2.53v.752h-4.39c.06.45.238.811.535 1.083.302.272.682.408 1.14.408.71 0 1.265-.257 1.664-.771l.905 1.013c-.276.391-.65.697-1.122.918a3.72 3.72 0 01-1.567.325zm-.21-5.659c-.366 0-.663.123-.893.37-.225.246-.37.599-.433 1.057h2.562v-.146c-.009-.408-.12-.722-.332-.943-.212-.225-.514-.338-.905-.338zM84.298 290.923c0-.225-.113-.402-.338-.529-.22-.132-.578-.249-1.07-.35-1.64-.345-2.46-1.041-2.46-2.091 0-.611.253-1.121.758-1.529.51-.412 1.175-.618 1.995-.618.875 0 1.574.206 2.096.618.527.412.79.947.79 1.606h-1.841a.88.88 0 00-.255-.65c-.17-.174-.436-.261-.797-.261-.31 0-.55.07-.72.21a.664.664 0 00-.255.535c0 .204.096.37.287.497.196.123.523.232.982.325.458.089.845.191 1.16.306.972.357 1.459.975 1.459 1.854 0 .629-.27 1.139-.81 1.53-.54.386-1.236.58-2.09.58-.578 0-1.092-.102-1.542-.306a2.619 2.619 0 01-1.051-.848 1.983 1.983 0 01-.383-1.166h1.746c.017.327.138.578.364.752.225.174.526.261.904.261.353 0 .618-.066.797-.197a.63.63 0 00.274-.529zM89.485 284.238v1.695h1.179v1.351h-1.179v3.441c0 .255.049.438.147.548.097.111.284.166.56.166.204 0 .385-.015.542-.045v1.396c-.361.11-.733.166-1.115.166-1.292 0-1.95-.652-1.976-1.957v-3.715h-1.006v-1.351h1.006v-1.695h1.842zM94.863 292.956c-1.01 0-1.835-.31-2.472-.931-.633-.62-.95-1.446-.95-2.479v-.178c0-.692.134-1.311.402-1.854a2.93 2.93 0 011.134-1.262c.493-.297 1.053-.446 1.682-.446.943 0 1.685.297 2.224.892.544.595.816 1.438.816 2.53v.752h-4.39c.059.45.237.811.535 1.083.301.272.681.408 1.14.408.71 0 1.264-.257 1.663-.771l.905 1.013c-.276.391-.65.697-1.121.918a3.72 3.72 0 01-1.568.325zm-.21-5.659c-.365 0-.663.123-.892.37-.225.246-.37.599-.433 1.057h2.561v-.146c-.008-.408-.119-.722-.331-.943-.213-.225-.514-.338-.905-.338zM102.625 287.66a5.011 5.011 0 00-.663-.051c-.697 0-1.153.236-1.37.708v4.511H98.75v-6.895h1.74l.051.822c.369-.633.881-.949 1.536-.949.204 0 .395.028.573.083l-.025 1.771z" }),
        React__default.createElement("defs", null,
            React__default.createElement("pattern", { id: "pattern0", width: "1", height: "1", patternContentUnits: "objectBoundingBox" },
                React__default.createElement("use", { xlinkHref: "#image0" })),
            React__default.createElement("pattern", { id: "pattern1", width: "1", height: "1", patternContentUnits: "objectBoundingBox" },
                React__default.createElement("use", { xlinkHref: "#image0" })),
            React__default.createElement("pattern", { id: "pattern2", width: "1", height: "1", patternContentUnits: "objectBoundingBox" },
                React__default.createElement("use", { xlinkHref: "#image0" })),
            React__default.createElement("pattern", { id: "pattern3", width: "1", height: "1", patternContentUnits: "objectBoundingBox" },
                React__default.createElement("use", { xlinkHref: "#image0" })),
            React__default.createElement("pattern", { id: "pattern4", width: "1", height: "1", patternContentUnits: "objectBoundingBox" },
                React__default.createElement("use", { xlinkHref: "#image0" })),
            React__default.createElement("pattern", { id: "pattern5", width: "1", height: "1", patternContentUnits: "objectBoundingBox" },
                React__default.createElement("use", { xlinkHref: "#image0" })),
            React__default.createElement("pattern", { id: "pattern6", width: "1", height: "1", patternContentUnits: "objectBoundingBox" },
                React__default.createElement("use", { xlinkHref: "#image0" })),
            React__default.createElement("image", { id: "image0", width: "", height: "", xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAOwA7AAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA" }))));
}

var HomeUnitarySection = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Northamptonshire’s two new unitary councils" : _b, _c = _a.postcodeText, postcodeText = _c === void 0 ? "Not sure which you live in? Enter your postcode to find out" : _c, _d = _a.firstLine, firstLine = _d === void 0 ? "There are now two new unitary councils for Northamptonshire – North and West. They’ll help us provide better services and information for residents and businesses." : _d, _e = _a.westText, westText = _e === void 0 ? "Covering the local areas of Daventry, Northampton Borough and South Northamptonshire" : _e, _f = _a.northText, northText = _f === void 0 ? "Covering the local areas of Corby, East Northamptonshire, Kettering and Wellingborough" : _f;
    var themeContext = React.useContext(styled.ThemeContext);
    var northLink = themeContext.cardinal_name === "north" ? themeContext.theme_vars.council_link : themeContext.theme_vars.other_council_link;
    var westLink = themeContext.cardinal_name === "west" ? themeContext.theme_vars.council_link : themeContext.theme_vars.other_council_link;
    return (React__default.createElement(Container$g, null,
        React__default.createElement(Heading, { text: title }),
        React__default.createElement("p", null, firstLine),
        React__default.createElement(PostCodeSearch, { isUnitary: true, title: postcodeText }),
        React__default.createElement(MapSection, null,
            React__default.createElement(West, null,
                React__default.createElement(WestColouredLogo, null),
                React__default.createElement("p", null, westText),
                React__default.createElement(CouncilLink, { colour: themeContext.cardinal_name === "north" ? themeContext.theme_vars.other_council_action : themeContext.theme_vars.colours.action, href: westLink, title: "Go to the West's website" }, "westnorthants.gov.uk")),
            React__default.createElement(Map, null,
                React__default.createElement(Icon$5, null)),
            React__default.createElement(North, null,
                React__default.createElement(NorthColouredLogo, null),
                React__default.createElement("p", null, northText),
                React__default.createElement(CouncilLink, { colour: themeContext.cardinal_name === "west" ? themeContext.theme_vars.other_council_action : themeContext.theme_vars.colours.action, href: northLink, title: "Go to the North's website" }, "northnorthants.gov.uk")))));
};

var customParseFormat = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,r,i){var o=i&&i.toUpperCase();return r||n[i]||t[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,n){return e||n.slice(1)})})},n=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,i=/\d\d?/,o=/\d*[^\s\d-_:/()]+/,s={};var a=function(t){return function(e){this[t]=+e;}},f=[/[+-]\d\d:?(\d\d)?/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t);}],u=function(t){var e=s[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[o,function(t){this.afternoon=h(t,!1);}],a:[o,function(t){this.afternoon=h(t,!0);}],S:[/\d/,function(t){this.milliseconds=100*+t;}],SS:[r,function(t){this.milliseconds=10*+t;}],SSS:[/\d{3}/,function(t){this.milliseconds=+t;}],s:[i,a("seconds")],ss:[i,a("seconds")],m:[i,a("minutes")],mm:[i,a("minutes")],H:[i,a("hours")],h:[i,a("hours")],HH:[i,a("hours")],hh:[i,a("hours")],D:[i,a("day")],DD:[r,a("day")],Do:[o,function(t){var e=s.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r);}],M:[i,a("month")],MM:[r,a("month")],MMM:[o,function(t){var e=u("months"),n=(u("monthsShort")||e.map(function(t){return t.substr(0,3)})).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[o,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e;}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(t){t=+t,this.year=t+(t>68?1900:2e3);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};var c=function(t,r,i){try{var o=function(t){for(var r=(t=e(t,s&&s.formats)).match(n),i=r.length,o=0;o<i;o+=1){var a=r[o],f=d[a],u=f&&f[0],h=f&&f[1];r[o]=h?{regex:u,parser:h}:a.replace(/^\[|\]$/g,"");}return function(t){for(var e={},n=0,o=0;n<i;n+=1){var s=r[n];if("string"==typeof s)o+=s.length;else {var a=s.regex,f=s.parser,u=t.substr(o),h=a.exec(u)[0];f.call(e,h),t=t.replace(h,"");}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon;}}(e),e}}(r)(t),a=o.year,f=o.month,u=o.day,h=o.hours,c=o.minutes,m=o.seconds,l=o.milliseconds,M=o.zone,Y=new Date,v=u||(a||f?1:Y.getDate()),p=a||Y.getFullYear(),D=0;a&&!f||(D=f>0?f-1:Y.getMonth());var y=h||0,L=c||0,g=m||0,$=l||0;return M?new Date(Date.UTC(p,D,v,y,L,g,$+60*M.offset*1e3)):i?new Date(Date.UTC(p,D,v,y,L,g,$)):new Date(p,D,v,y,L,g,$)}catch(t){return new Date("")}};return function(t,e,n){n.p.customParseFormat=!0;var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=!0===o[2],u=!0===o[3],h=f||u,d=o[2];u&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=c(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!==this.format(a)&&(this.$d=new Date("")),s={};}else if(a instanceof Array)for(var m=a.length,l=1;l<=m;l+=1){o[1]=a[l-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}l===m&&(this.$d=new Date(""));}else i.call(this,t);};}});
});

var advancedFormat = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t,r){var n=t.prototype,a=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return "["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale(),n=this.$utils(),s=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return n.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return "["+t.offsetName()+"]";case"zzz":return "["+t.offsetName("long")+"]";default:return e}});return a.bind(this)(s)};}});
});

const NewsArticleDate = styled__default.p`
    color: ${props => props.theme.cardinal_name === "west" ? props.theme.theme_vars.colours.grey_darkest : props.theme.theme_vars.colours.grey_dark};
    margin-top: 15px;
    margin-bottom: 20px !important;
`;

const DisplayDate = styled__default.span`
    ${props => props.theme.fontStyles}
    color: inherit;
`;

dayjs_min.extend(customParseFormat);
dayjs_min.extend(advancedFormat);
/**
 * Form element - hint text
 */
var DisplayDate$1 = function (_a) {
    var text = _a.text, _b = _a.format, format = _b === void 0 ? 'X' : _b, _c = _a.preText, preText = _c === void 0 ? '' : _c, _d = _a.postText, postText = _d === void 0 ? '' : _d;
    if (format === 'X') {
        text = dayjs_min.unix(parseInt(text)).format('DD MMMM YYYY');
    }
    else {
        text = dayjs_min(text, format).format('DD MMMM YYYY');
    }
    return (React__default.createElement(DisplayDate, null,
        preText,
        text,
        postText));
};

dayjs_min.extend(customParseFormat);
dayjs_min.extend(advancedFormat);
/**
 * Form element - hint text
 */
var NewsArticleDate$1 = function (_a) {
    var text = _a.text, _b = _a.format, format = _b === void 0 ? 'X' : _b;
    return (React__default.createElement(NewsArticleDate, null,
        React__default.createElement(DisplayDate$1, { text: text, format: format })));
};

const Container$j = styled__default.div`
  /* margin-top: 50px; */
  /* border: 1px solid red; */

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    /* border: 1px solid green; */
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
      /* border: 1px solid blue; */
    }
`;


const ShowFiltersButton = styled__default.button`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  ${props => props.theme.linkStyles}
  font-size: 1.2em;
  margin-bottom: 5px;
  display: block;


  &:hover{
    ${props => props.theme.linkStylesHover}
    cursor: pointer;
  }
  &:focus{
    ${props => props.theme.linkStylesFocus}
  }
  &:active{
    ${props => props.theme.linkStylesActive}
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    display: none;
  }
`;

const handleFullScreen = props => {
  if(props.isFullScreen) {
    return styled.css`
     background: ${props => props.noBackground ? "transparent" : 
        props.theme.cardinal_name === "north" ?  (props.theme.theme_vars.colours.grey_light) : props.theme.theme_vars.colours.white};
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      padding: 20px;
      box-sizing: border-box;
      overflow: auto;
    `
  } 
};


const Filters = styled__default.div`
  display: ${props => props.isFullScreen ? 'block' : 'none'};

  ${handleFullScreen}
  
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    display: block;
    position: relative;
    background: transparent;
  }
`;

const FilterHeader = styled__default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 10px;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    display: block;
    margin-bottom: 0px;
    margin-top: 20px;
    padding: 0;
  }
`;


const FilterHeading = styled__default.h2`
  ${props => props.theme.theme_vars.h2}


  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    ${props => props.theme.theme_vars.h3}
  }
`;

// margin: 0;
// padding: 0;
// display: block;
// overflow: hidden;

const Container$k = styled__default.a`
    ${props => props.theme.linkStyles}
    color: ${props => props.theme.theme_vars.colours.negative} !important;
    font-weight: normal;

    &:hover {
      ${props => props.theme.linkStylesHover}
      color: ${props => props.theme.theme_vars.colours.negative} !important;
    }
    &:focus {
      ${props => props.theme.linkStylesFocus}
      color: ${props => props.theme.theme_vars.colours.black} !important;
    }
    &:active {
      ${props => props.theme.linkStylesActive}
      color: ${props => props.theme.theme_vars.colours.black} !important;
    }
`;

var RemoveAllFilters = function (_a) {
    var count = _a.count;
    var _b = React.useState([]), searchValue = _b[0], setSearchValue = _b[1];
    React.useEffect(function () {
        setSearchValue(getParamValue(NewsArticleFilterFields.search.queryParamKey));
    }, []);
    var removeAllFilters = function (e) {
        e.preventDefault();
        removeParams(__spreadArrays(NewsArticleFilterFields.removeFiltersList, ['page']));
    };
    return (React__default.createElement(Container$k, { "data-testid": "RemoveAllFilters", href: "#", onClick: removeAllFilters },
        "Clear ",
        searchValue.length > 0 && 'search term and ',
        "filters",
        count > 0 && " (" + count + ")"));
};

var NewsArticleFilterAccordion = function (_a) {
    var sections = _a.sections;
    var _b = React.useState(0), count = _b[0], setCount = _b[1];
    var _c = React.useState([]), searchValue = _c[0], setSearchValue = _c[1];
    var _d = React.useState([]), servicesValue = _d[0], setServices = _d[1];
    var _e = React.useState([]), articleTypeValue = _e[0], setArticleTypes = _e[1];
    React.useEffect(function () {
        setCount(countParams(NewsArticleFilterFields.removeFiltersList));
        setSearchValue(getParamValue(NewsArticleFilterFields.search.queryParamKey));
        setServices(getDropDownValues(NewsArticleFilterFields.services.queryParamKey));
        setArticleTypes(getCheckboxValues(NewsArticleFilterFields.articleType.queryParamKey));
    }, []);
    var _f = React.useState(false), isFullScreen = _f[0], setFullScreen = _f[1];
    var showFullscreenFilters = function (e) {
        setFullScreen(true);
        document.body.style.overflow = 'hidden';
    };
    var hideFullscreenFilters = function (e) {
        setFullScreen(false);
        document.body.style.overflow = 'visible';
    };
    // set accordions to closed by default NOR-134
    sections.map(function (section) {
        // unless the field in question is set
        // search
        // services
        // article type
        if (section.title === NewsArticleFilterFields.search.title && searchValue.length > 0) {
            section.isExpanded = true;
        }
        else if (section.title === NewsArticleFilterFields.services.title && servicesValue.length > 0) {
            section.isExpanded = true;
        }
        else if (section.title === NewsArticleFilterFields.articleType.title && articleTypeValue.length > 0) {
            section.isExpanded = true;
        }
        else {
            section.isExpanded = false;
        }
    });
    return (React__default.createElement(Container$j, { "data-testid": "NewsArticleFilterAccordion" },
        React__default.createElement(ShowFiltersButton, { onClick: showFullscreenFilters, "aria-expanded": !!isFullScreen, "aria-controls": "PageFilters" },
            "Show Search and filters",
            count > 0 && " (" + count + ")"),
        React__default.createElement(Filters, { isFullScreen: isFullScreen, id: "PageFilters", "aria-labelledby": "PageFiltersLabel" },
            React__default.createElement(FilterHeader, null,
                React__default.createElement(FilterHeading, { id: "PageFiltersLabel" }, "Search and filters"),
                React__default.createElement(ShowFiltersButton, { onClick: hideFullscreenFilters }, "Close window")),
            React__default.createElement(Accordion, { isFilter: true, sections: sections, withReadMore: false }),
            count > 0 &&
                React__default.createElement(RemoveAllFilters, { count: count }))));
};

const ImageContainer = styled__default.div`
    position: relative;
    margin-bottom: 25px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        max-width: 800px;
    }
`;

const StyledImage = styled__default.img`
    width: 100%;
    height: auto;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        max-width: 800px;
    }
`;

const Small = styled__default.small`
    text-align: center;
    color: ${props => props.theme.theme_vars.colours.gray_dark};
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.3;
    margin: 0 auto;
    display: block;
    &:hover {
        cursor: default;
    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 16px;
        font-size: 1rem;
        max-width: 800px;
        line-height: 1.4;
    }
`;

/**
 * Form element - hint text
 */
var NewsArticleImage = function (_a) {
    var image1440x810 = _a.image1440x810, image144x81 = _a.image144x81, imageAltText = _a.imageAltText, imageCaption = _a.imageCaption;
    return (React__default.createElement(ImageContainer, null,
        React__default.createElement(LazyImage, { src: image1440x810, placeholder: image144x81, visibilitySensorProps: {
                partialVisibility: true
            } }, function (src) {
            return React__default.createElement(React__default.Fragment, null,
                React__default.createElement(StyledImage, { itemprop: "image", src: src, alt: imageAltText ? imageAltText : "" }),
                imageCaption &&
                    React__default.createElement(Small, { itemprop: "copyrightHolder" }, imageCaption));
        })));
};

const imageHeightMobile = 150;

const Container$l = styled__default.div`
  ${props => props.theme.fontStyles};
  padding: 15px 0;
`;


const Title$2 = styled__default.div`
  ${props => props.theme.linkStyles};
  display: block;
  margin-bottom: 15px;
  height: fit-content;
  font-size: 1.2rem;
  line-height: 1.2;
  min-width: 100%;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
      font-size: 1.35rem;
      line-height: 1.3;
      max-width: 960px;
  }
`;


const ArticleContainer = styled__default.a`
  background: ${props => props.theme.cardinal_name === "north" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action};
  border-radius: ${props => props.theme.theme_vars.border_radius};
  overflow: hidden;
  /* display: block; */
  text-decoration: none !important;
  font-weight: normal !important;


  &:hover {
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .news-article-list__title {
      ${props => props.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .news-article-list__title {
      ${props => props.theme.linkStylesFocus};
    }
  }


  margin-bottom: 40px;


  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: flex;
  }
`;

const ArticleContent = styled__default.div`
  padding: 15px;


  ${props => props.theme.fontStyles};

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: ${props => props.withImage ? "50%" : "100%"};
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
    width: ${props => props.withImage ? "66%" : "100%"};
  }

`;

const ImageContainer$1 = styled__default.span`
  display: block;
  width: 100%;
  height: ${imageHeightMobile}px;
  overflow: hidden;
  background-image: url("${props => props.background}");
  background-size: cover;
  background-position: center;
  justify-self: center;


  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    order: 1;
    height: auto;
    min-width: 180px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: 50%;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
    width: 33%;
  }
`;

const DateContainer = styled__default.div`
  padding-top: 1em;
  margin-top: auto;
  p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }

`;


const ResultInfo = styled__default.div`
  font-weight: bold;
  margin: ${props => props.theme.theme_vars.spacingSizes.large} 0;
`;

var NewsArticleList = function (_a) {
    var results = _a.results;
    var extractLength = 140;
    if (results && results.length > 0) {
        return (React__default.createElement(Container$l, { "data-testid": "NewsArticleList" }, results.map(function (article) {
            return React__default.createElement(ArticleContainer, { href: article.url, title: article.title, key: article.id },
                article.image720x405 &&
                    React__default.createElement(LazyImage, { src: article.image720x405, placeholder: article.image72x41, visibilitySensorProps: {
                            partialVisibility: true
                        } }, function (src) {
                        return React__default.createElement(ImageContainer$1, { className: "news-article-list__image", background: src, role: "img", "aria-label": article.imageAltText ? article.imageAltText : "News article" });
                    }),
                React__default.createElement(ArticleContent, { withImage: article.image720x405 ? true : false },
                    React__default.createElement(Title$2, { className: "news-article-list__title" }, article.title),
                    (article.excerpt.length > extractLength) ? article.excerpt.substr(0, extractLength - 1).trim() + String.fromCharCode(8230) : article.excerpt,
                    React__default.createElement(DateContainer, null,
                        React__default.createElement(NewsArticleDate$1, { text: article.date.toString(), format: "X" }))));
        })));
    }
    else {
        return (React__default.createElement(Container$l, { "data-testid": "NewsArticleList" },
            React__default.createElement(ResultInfo, null, "No results found")));
    }
};

const Container$m = styled__default.div`
${props => props.theme.fontStyles};
padding-bottom: 20px;
border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey};
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 20px;
`;

const LeftCol = styled__default.div`
  display: block;
  align-self: end;
  font-weight: bold;
`;

const RightCol = styled__default.div`
  display: block;
  text-align: right;
`;

const Filters$1 = styled__default.div`
  margin-top: 20px;
  grid-column-start: span 2;
`;

const FilterRow = styled__default.div`
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey}80;

  &:last-of-type {
    border-bottom: none;
  }
`;

const FilterTitle = styled__default.div`
  font-weight: bold;
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
  font-size: 80%;
`;

var SortBy = function (_a) {
    var selected = _a.selected, options = _a.options;
    var optionPicked = function (e) {
        handleParams('news', [{ key: NewsArticleFilterFields.sortBy.queryParamKey, value: e.target.value }]);
    };
    return (
    // TODO: replace with dropdownselect component
    React__default.createElement(DropDownSelect, { label: "Sort by", id: "sort", options: options, onChange: optionPicked, selected: selected }));
};

const Wrapper$2 = styled__default.div`
    vertical-align: middle;
    margin: 5px 0;
    display: inline-block;

    @media (max-width: 40.0525em) {
            vertical-align:baseline
    }




`;

const Preposition = styled__default.div`
    display: inline-block;
    vertical-align: middle;
    text-transform: lowercase;
    margin: 0 3px;
    font-size: 80%;
`;

const Container$n = styled__default.span`
    margin: 0 5px;
    display: inline-block;
    position: relative;
    border: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-radius: 5px;
    background-color: ${props => props.theme.theme_vars.colours.grey_light};
    padding: 3px 6px 3px 17px;
    font-size: 80%;

  @media (max-width: 40.0525em) {
      /* background: none; */
      border: 2px solid ${props => props.theme.theme_vars.colours.grey_darkest};
  }
`;

const Text = styled__default.span`
  display: block;
  display: inline-block;
  margin-left: 0;
  margin-left: 5px;
`;

const Button$2 = styled__default.button`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    border-radius: 5px;
    font-weight: bold;
    font-family: "nta",arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 700;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    background: none;
    border: 0;
    display: inline-block;
    border: 1px solid transparent;
    font-size: 80%;
    line-height: 0.85;

  &:focus {
    -webkit-box-shadow: inset 0 0 0 2px;
    box-shadow: inset 0 0 0 2px;
    border: solid 1px ${props => props.theme.theme_vars.colours.grey_darkest};
    outline: 3px solid ${props => props.theme.theme_vars.colours.focus};
  }
`;

var RemovableTag = function (_a) {
    var index = _a.index, preposition = _a.preposition, label = _a.label, value = _a.value, param = _a.param, clickHandler = _a.clickHandler;
    return (React__default.createElement(Wrapper$2, { "data-testid": "RemovableTag" },
        index > 0 && preposition && React__default.createElement(Preposition, null, preposition),
        React__default.createElement(Container$n, null,
            React__default.createElement(Text, null, label),
            React__default.createElement(Button$2, { "aria-label": "Remove filter " + label, onClick: clickHandler }, "x"))));
};

var NewsArticleListHeader = function (_a) {
    var totalResults = _a.totalResults, sortBy = _a.sortBy, sortByOptions = _a.sortByOptions;
    var _b = React.useState(0), count = _b[0], setCount = _b[1];
    var _c = React.useState([]), servicesVals = _c[0], setServicesVals = _c[1];
    var _d = React.useState([]), articleTypeVals = _d[0], setArticleTypeVals = _d[1];
    var _e = React.useState([]), searchValue = _e[0], setSearchValue = _e[1];
    React.useEffect(function () {
        setCount(countParams([NewsArticleFilterFields.search.queryParamKey, NewsArticleFilterFields.services.queryParamKey, NewsArticleFilterFields.articleType.queryParamKey, NewsArticleFilterFields.sortBy.queryParamKey]));
        setSearchValue(getParamValue(NewsArticleFilterFields.search.queryParamKey));
        setServicesVals(getDropDownValues(NewsArticleFilterFields.services.queryParamKey));
        setArticleTypeVals(getCheckboxValues(NewsArticleFilterFields.articleType.queryParamKey));
    }, []);
    var removeFilterValue = function (param, value) {
        removeValueFromParam(param, value);
    };
    return (React__default.createElement(Container$m, { "data-testid": "NewsArticleListHeader" },
        React__default.createElement(LeftCol, null,
            totalResults,
            " article",
            (totalResults > 1 || totalResults === 0) && "s",
            " ",
            (servicesVals.length > 0 || articleTypeVals.length > 0) && " found",
            " ",
            searchValue.length > 0 && " for \"" + searchValue + "\""),
        React__default.createElement(RightCol, null,
            React__default.createElement(SortBy, { selected: sortBy, options: sortByOptions })),
        count > 0 &&
            React__default.createElement(Filters$1, null,
                servicesVals.length > 0 &&
                    React__default.createElement(FilterRow, null,
                        React__default.createElement(FilterTitle, null, "Related to"),
                        servicesVals.map(function (service, i) { return React__default.createElement(RemovableTag, { key: i, clickHandler: function () { return removeFilterValue(NewsArticleFilterFields.services.queryParamKey, service); }, index: i, label: deSlug(service), value: service }); })),
                articleTypeVals.length > 0 &&
                    React__default.createElement(FilterRow, null,
                        React__default.createElement(FilterTitle, null, "Article type"),
                        articleTypeVals.map(function (article, i) { return React__default.createElement(RemovableTag, { key: i, clickHandler: function () { return removeFilterValue(NewsArticleFilterFields.articleType.queryParamKey, article); }, index: i, preposition: "and", label: deSlug(article), value: article }); })))));
};

const NewsArticleOldBanner = styled__default.div`
    color: ${props => props.theme.theme_vars.colours.black};
    background: ${props => props.theme.theme_vars.colours.focus};
    padding: 5px 10px;
    padding-left: 15px;
    margin-bottom: 0px;
    width: calc(100% + 5px);
    margin-left: -15px;
    margin-bottom: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        padding: 5px 10px;
        margin-left: 0px;
        width: 100%;
        max-width: 380px;
        margin-bottom: 25px;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        max-width: 420px;
    }
`;

/**
 * Form element - hint text
 */
var NewsArticleOldBanner$1 = function (_a) {
    return (React__default.createElement(NewsArticleOldBanner, null,
        "This article is more than ",
        React__default.createElement("strong", null, "1 year old")));
};

const imageHeightMobile$1 = 150;
const imageHeightDesktop = 200;

const Container$o = styled__default.div`
  ${props => props.theme.fontStyles};
  padding: 15px 0;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
  }
`;

const H2Container = styled__default.div`
  h2 {
    margin-top: 30px;
  }
`;

const Title$3 = styled__default.p`
  ${props => props.theme.linkStyles};
  display: block;
  margin-bottom: 15px;
  height: fit-content;
  font-size: 1.2rem;
  line-height: 1.2;
  min-width: 100%;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
      font-size: 1.35rem;
      line-height: 1.3;
      max-width: 960px;
  }
`;


const ArticleContainer$1 = styled__default.a`
  background: ${props => props.theme.cardinal_name === "north" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action};
  border-radius: ${props => props.theme.theme_vars.border_radius};
  overflow: hidden;
  display: block;
  text-decoration: none !important;
  font-weight: normal !important;
  margin-bottom: 15px;

  &:hover {
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .article_title {
      ${props => props.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .article_title {
      ${props => props.theme.linkStylesFocus};
    }
  }

  &:active {
    outline: none;
    transform: translateY(3px);
    border-bottom: 5px solid transparent;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    
    .article_title {
      ${props => props.theme.linkStylesActive};
    }
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: 100%;
    margin-right: 30px;
    margin-bottom: 0px;
    display: block;
    flex: 1;
    max-width: 50%;

    &:nth-of-type(2n) {
        margin-right: 30px;
    }
    &:last-of-type {
        margin-right: 0;
    }
  }
`;


const ArticleContent$1 = styled__default.div`
  padding: 15px;
  height: calc(100% - ${imageHeightMobile$1 + 30}px);

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    height: calc(100% - ${imageHeightDesktop + 30}px);
  }
`;



const ImageContainer$2 = styled__default.span`
  display: block;
  width: 100%;
  height: ${imageHeightMobile$1}px;
  overflow: hidden;
  background-image: url("${props => props.background}");
  background-size: cover;
  background-position: center;
  justify-self: center;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    flex: 0 0 40%;  
    height: 100%;
    min-height: ${imageHeightMobile$1}px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    flex: none;
    height: ${imageHeightDesktop}px;
  }
`;

const DateContainer$1 = styled__default.div`
  margin-top: auto;
  p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
`;

const ViewAllContainer = styled__default.div`
  text-align: center;
  margin-top: 25px;
`;

var NewsArticleFeaturedBlock = function (_a) {
    var articles = _a.articles, _b = _a.withoutTitle, withoutTitle = _b === void 0 ? false : _b, _c = _a.viewAllLink, viewAllLink = _c === void 0 ? "/" : _c;
    if (articles && articles.length > 0) {
        return (React__default.createElement(React__default.Fragment, null,
            !withoutTitle &&
                React__default.createElement(Heading, { text: "News articles and press releases" }),
            React__default.createElement(Container$o, null, articles.map(function (article) {
                return React__default.createElement(ArticleContainer$1, { key: article.id, href: article.url },
                    article.image720x405 &&
                        React__default.createElement(LazyImage, { src: article.image720x405, placeholder: article.image72x41, visibilitySensorProps: {
                                partialVisibility: true
                            } }, function (src) {
                            return React__default.createElement(ImageContainer$2, { background: src, role: "img", "aria-label": article.imageAltText ? article.imageAltText : "" });
                        }),
                    React__default.createElement(ArticleContent$1, null,
                        React__default.createElement(Title$3, { className: "article_title" }, article.title),
                        React__default.createElement(DateContainer$1, null,
                            React__default.createElement(NewsArticleDate$1, { text: article.date.toString(), format: "X" }))));
            })),
            viewAllLink &&
                React__default.createElement(ViewAllContainer, null,
                    React__default.createElement(Button, { text: "View all news", primary: false, url: viewAllLink, size: "large" }))));
    }
    else {
        return (React__default.createElement(React__default.Fragment, null));
    }
};

const Container$p = styled__default.main`
    padding-top: 30px;

    a {
        ${props => props.theme.linkStyles}
        &:hover{
            ${props => props.theme.linkStylesHover}
        }
        &:focus{
            ${props => props.theme.linkStylesFocus}
        }
        &:active{
            ${props => props.theme.linkStylesActive}
        }
    }

    p {
        margin-bottom: 15px;
    }
    
    strong, bold {
        font-weight: 700;
    }
    em {
        font-style: italic;
    }

    ul, ol {
        margin: 20px 0 20px 20px;

        li {
            margin-bottom: 5px;
        }
    }
    ul li {
        padding-left: 25px;
        position: relative;
        &:before {
            content: "";
            width: 7px;
            height: 7px;
            background: ${props => props.theme.theme_vars.colours.black};
            border-radius: 100%;
            position: absolute;
            left: 0;
            top: 10px;
        }
    }
    ol {
        list-style-type: decimal;
        padding-left: 10px;
        li {
            padding-left: 10px;
        }
    }

    sub, sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -.5em;
    }
    sub {
        bottom: -.25em;
    }

    // TABLE STYLES
    .table-container {
        max-width: 100%;
        overflow-y: scroll;

        table { 
            max-width: none;
        }
    }
    table { 
        width: 100%; 
        border-collapse: collapse; 
        margin-bottom: 25px;
        max-width: 100%;
        overflow-y: scroll;

        caption {
            text-align: left;
            padding-left: 10px;
            margin-bottom: 15px;
            font-weight: bold;
        }
    }

    tr {
        border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey};
        &:hover {
            background: ${props => props.theme.theme_vars.colours.grey_light} !important; 
        }
    }

    tr:nth-of-type(even) { 
        background: ${props => props.theme.theme_vars.colours.grey_light}40; 
    }

    td, th { 
        padding: 10px; 
        text-align: left; 
    }
    th {
        font-weight: bold;
    }
    thead tr {
        border-bottom: 1px solid ${props => props.theme.theme_vars.colours.black};
        &:hover {
            background: transparent !important; 
        }
    }


    @media only screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
        table { 
            width: 100%; 
        }
    }
`;

/**
 * A container for holding the main content of a page
 */
var PageMain = function (_a) {
    var children = _a.children, classes = _a.classes, props = __rest(_a, ["children", "classes"]);
    return (React__default.createElement(Container$p, __assign({ id: "main", className: classes }, props), children));
};

const Container$q = styled__default.aside`
    padding-top: 30px;
`;

/**
 * A container for holding the main content of a page
 */
var PageSidebar = function (_a) {
    var children = _a.children;
    return (React__default.createElement(Container$q, { className: "sidebar" }, children));
};

const Container$r = styled__default.div`
    padding-top: 30px;

    h1 {
        margin-bottom: 0;
    }
`;

/**
 * A container for holding the main content of a page
 */
var PageTitle = function (_a) {
    var children = _a.children, classes = _a.classes, props = __rest(_a, ["children", "classes"]);
    return (React__default.createElement(Container$r, __assign({ "data-testid": "title", className: classes }, props), children));
};

const Container$s = styled__default.div`
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
        display: flex;
        flex-wrap: wrap;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;

        main {
            width: calc(66.66% - 30px);

            margin-right: ${props => props.sidebarLeft ? "0" : "30px"};
            margin-left: ${props => props.sidebarLeft ? "30px" : "0"};
        }
        aside {
            width: 33.33%;
        }
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){  
        main {
            width: calc(66.66% - 45px);

            margin-right: ${props => props.sidebarLeft ? "0" : "45px"};
            margin-left: ${props => props.sidebarLeft ? "45px" : "0"};
        }
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.xl}){  
        main {
            width: calc(66.66% - 60px);
            
            margin-right: ${props => props.sidebarLeft ? "0" : "60px"};
            margin-left: ${props => props.sidebarLeft ? "60px" : "0"};
        }
    }
`;

/**
 * A container for holding the main content of a page
 */
var PageWithSidebarContainer = function (_a) {
    var _b = _a.sidebarLeft, sidebarLeft = _b === void 0 ? false : _b, children = _a.children;
    return (React__default.createElement(Container$s, { sidebarLeft: sidebarLeft }, children));
};

const backgroundDecider = props => {

    const colourString = props.theme.theme_vars.colours[props.colour];
    if (props.colour){ 
      return styled.css`
      background-color: ${colourString};
      `
    }
    else {
        return styled.css`
        background-color: transparent;
        `
    }
  }; 


const Container$t = styled__default.div`
 ${backgroundDecider};
`;

var PageWrapper = function (_a) {
    var colour = _a.colour, children = _a.children;
    return (React__default.createElement(Container$t, { "data-testid": "PageWrapper", colour: colour }, children));
};

const Wrapper$3 = styled__default.div`
    background: ${props => props.isHome ? (props.theme.theme_vars.theme_name === "Memorial theme North" || props.theme.theme_vars.theme_name === "Memorial theme West" ? props.theme.theme_vars.colours.grey_dark : props.theme.theme_vars.colours.action) : "transparent"};
`;

const StyledMaxWidthContainer$4 = styled__default(MaxWidthContainer)`
    padding-top:  ${props => props.isHome ? "5px" : "10px"};
    padding-bottom: ${props => props.isHome ? "5px" : "10px"};
    border-bottom: ${props => props.isHome ? "none" : "1px solid " + props.theme.theme_vars.colours.grey + "80"};
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: left;
    margin: ${props => props.isHome ? "" : "0 auto !important"};
    color: ${props => props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black};
`;

const PhaseText = styled__default.span`
    vertical-align: middle;
    padding: 5px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){

    }
`;

const PhaseContainer = styled__default.div`
    padding: 5px 0;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        padding: 0;
    }
`;

const Phase = styled__default.div`
    font-weight: bold;
    padding: 2px 7px;
    margin-right: 5px;
    background: ${props => props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.action+"1A"};
    float: left;
    vertical-align: middle;
    color: ${props => props.theme.theme_vars.colours.black};
    border-radius: 4px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: inline-block;
        float: none;
        margin-right: 10px;
        vertical-align: sub;
    }
`;

var PhaseBanner = function (_a) {
    var _b = _a.isHome, isHome = _b === void 0 ? false : _b;
    var themeContext = React.useContext(styled.ThemeContext);
    return (React__default.createElement(Wrapper$3, { isHome: isHome },
        React__default.createElement(StyledMaxWidthContainer$4, { noPadding: true, noBackground: true, isHome: isHome },
            React__default.createElement(PhaseContainer, null,
                React__default.createElement(Phase, { isHome: isHome }, "New website")),
            React__default.createElement(PhaseText, null, "This site is new and we are improving it every day."))));
};

const Container$u = styled__default.div`
    overflow: hidden;
    margin: 40px auto;
    background: ${props => props.theme.cardinal_name === "north" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light};
    margin-left: -15px;    
    width: calc(100% + 30px);
    border-bottom: 3px solid ${props => props.theme.theme_vars.colours.action};

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin: 60px auto;
        margin-top: 40px;
        display: flex;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-left: -30px;    
        width: calc(100% + 60px);
        border-bottom: none;
    }   
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
        margin-left: 0;
        width: 100%;
        border-radius: 5px;
    }
`;
const Image$2 = styled__default.div`
    background-image: url("${props => props.img}");
    background-size: cover;
    background-position: center;
    min-height: 200px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: 50%;
        min-height: 300px;
    }

`;
const Wrapper$4 = styled__default.div`
    width: calc(100% - 30px);
    padding: 15px;

    h2 {
        margin-top: 0;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: calc(50% - 60px);
        padding: 30px;
    }
`;
const Content$1 = styled__default.div`
    
`;
const CTA = styled__default.a`
    margin-top: 10px;
    display: inline-block;
    padding: 3px 7px;
    margin-left: -7px;
`;

var PromoBanner = function (_a) {
    var title = _a.title, image1440x810 = _a.image1440x810, image144x81 = _a.image144x81, ctaText = _a.ctaText, ctaUrl = _a.ctaUrl, children = _a.children;
    return (React__default.createElement(Container$u, null,
        React__default.createElement(LazyImage, { src: image1440x810, placeholder: image144x81, visibilitySensorProps: {
                partialVisibility: true
            } }, function (src) {
            return React__default.createElement(Image$2, { img: src });
        }),
        React__default.createElement(Wrapper$4, null,
            React__default.createElement(Heading, { text: title }),
            React__default.createElement(Content$1, null, children),
            React__default.createElement(CTA, { href: ctaUrl }, ctaText))));
};

const Container$v = styled__default.div`
  ${props => props.theme.fontStyles};
`;

const ResultInfo$1 = styled__default.div`
  font-weight: bold;
  margin: ${props => props.theme.theme_vars.spacingSizes.large} 0;
`;

const Result = styled__default.div`
  margin-bottom: ${props => props.theme.theme_vars.spacingSizes.x_large};

  &:first-of-type {
    margin-top: 0;
  }
`;

const Title$4 = styled__default.a`
  ${props => props.theme.linkStyles};
  font-size: 1.2em;
  display: block;
  margin-bottom: 5px;
`;

const ServiceArea = styled__default.p`
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: ${props => props.theme.theme_vars.colours.grey_dark};
  margin-bottom: 3px !important;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const Summary = styled__default.p`
  margin-bottom: ${props => props.theme.theme_vars.spacingSizes.small};
`;

const SignpostContainer = styled__default.div`
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.3;

  p {
    margin-bottom: 10px !important;
  }

  ul {
    margin-top: 8px !important;
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.3;

    li {
      margin-bottom: 5px;
    }
  }


  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.4;

    ul {
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.4;
    }
  }
`;

const SignpostList = styled__default.ul`

    ${props => props.theme.fontStyles}
    margin: 0 !important;
    padding-left: 10px;
    margin-bottom: 20px !important;
    list-style-type: none;

    li:last-of-type {
        margin-bottom: 0;
    }
`;
const SignpostListItem = styled__default.li`
    margin-bottom: 10px;
    padding-left: 0 !important;

    &:before {
        content: none !important;
    }
`;


const SignpostLink = styled__default.a`
    ${props => props.theme.linkStyles}

    svg {
        fill: ${props => props.theme.theme_vars.colours.action};
    }

    &:hover{
        ${props => props.theme.linkStylesHover}
        svg {
            fill: ${props => props.theme.theme_vars.colours.action_darl};
        }
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
        svg {
            fill: ${props => props.theme.theme_vars.colours.black};
        }
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`;

const IconWrapper$3 = styled__default.div`
    display: inline-block;
    margin-right: 10px;
    svg {
        vertical-align: middle;
    }
`;

var LinkIcon = function (_a) {
    var colourFill = _a.colourFill;
    return (React__default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M13.0098 1.24321L12.7565 0.990436C11.437 -0.329598 9.28861 -0.329442 7.96858 0.990592L6.44943 2.50974C6.17597 2.78304 6.17597 3.22637 6.44943 3.49968C6.72274 3.77315 7.16607 3.77315 7.43938 3.49968L8.95853 1.9807C9.73288 1.20635 10.9924 1.20635 11.7669 1.9807L12.02 2.23347C12.7942 3.00782 12.7942 4.26766 12.02 5.04169L9.5893 7.47254C9.29297 7.76887 8.91839 7.96083 8.5068 8.02771C7.87665 8.13007 7.23187 7.92287 6.78154 7.47301L6.52861 7.22008C6.45441 7.14557 6.38612 7.06546 6.32499 6.98177C6.09741 6.66926 5.65984 6.60035 5.34702 6.82792C5.03436 7.0555 4.96545 7.49339 5.19318 7.80605C5.29646 7.94776 5.4122 8.08325 5.53789 8.20925L5.79144 8.46327C6.43015 9.10166 7.29783 9.45399 8.18915 9.45399C8.3696 9.45399 8.55128 9.43968 8.73188 9.41013C9.43514 9.2958 10.0737 8.9682 10.5796 8.46265L13.0098 6.03195C14.3298 4.71192 14.33 2.56402 13.0098 1.24321Z", fill: colourFill }),
        React__default.createElement("path", { d: "M6.56222 10.4996L5.04307 12.0186C4.26857 12.7929 3.0092 12.7929 2.235 12.0189L1.98176 11.7652C1.60672 11.3903 1.40014 10.8921 1.40014 10.3616C1.40014 9.83135 1.60672 9.33295 1.98161 8.95776L4.41246 6.52691C4.70848 6.23089 5.08289 6.03878 5.49465 5.97142C6.1248 5.86938 6.76988 6.07658 7.22052 6.52706L7.4733 6.77999C7.54781 6.85404 7.61579 6.93399 7.67661 7.01722C7.90418 7.33003 8.3416 7.39879 8.65458 7.17153C8.96724 6.94395 9.036 6.50622 8.80858 6.19324C8.70529 6.05169 8.58956 5.91605 8.46356 5.79005L8.21031 5.53696C7.44203 4.76837 6.34288 4.41417 5.26909 4.58948C4.56568 4.70443 3.92697 5.03203 3.42251 5.53696L0.991503 7.9675C0.352175 8.60714 0 9.4574 0 10.3618C0.000155554 11.266 0.352331 12.1163 0.991503 12.7551L1.24475 13.0087C1.90492 13.6689 2.77198 13.9988 3.63888 13.9988C4.50594 13.9988 5.373 13.6689 6.03286 13.0085L7.55216 11.4899C7.82578 11.2164 7.82578 10.7732 7.55232 10.4998C7.2787 10.2265 6.83568 10.2263 6.56222 10.4996Z", fill: colourFill })));
};

var SignpostLinksList = function (_a) {
    var signpostLinksArray = _a.signpostLinksArray;
    return (React__default.createElement(SignpostList, null, signpostLinksArray.map(function (link, i) {
        return React__default.createElement(SignpostListItem, { key: i },
            React__default.createElement(SignpostLink, { href: link.url, title: link.areaName + " (this link will take you to an external website)" },
                React__default.createElement(IconWrapper$3, null,
                    React__default.createElement(LinkIcon, null)),
                link.cta_text ?
                    link.cta_text
                    :
                        link.areaName));
    })));
};

var SearchResultsList = function (_a) {
    var searchTerm = _a.searchTerm, results = _a.results, _b = _a.totalResults, totalResults = _b === void 0 ? 0 : _b, _c = _a.pageNumber, pageNumber = _c === void 0 ? 0 : _c;
    if (totalResults === 0) {
        return (React__default.createElement(Container$v, { "data-testid": "SearchResultsList" },
            React__default.createElement(ResultInfo$1, null, "No results found")));
    }
    else {
        return (React__default.createElement(Container$v, { "data-testid": "SearchResultsList" },
            React__default.createElement(ResultInfo$1, null,
                (pageNumber) > 1 && ("Page " + (pageNumber) + " of "),
                totalResults,
                " total results for '",
                searchTerm,
                "'"),
            results.map(function (result, i) {
                return React__default.createElement(Result, { key: i },
                    result.service && React__default.createElement(ServiceArea, null, result.service),
                    React__default.createElement(Title$4, { href: result.link }, result.title),
                    React__default.createElement(Summary, null, result.summary),
                    result.signpostLinksArray &&
                        React__default.createElement(SignpostContainer, null,
                            result.signpostLinksArray.length > 1 ?
                                React__default.createElement(React__default.Fragment, null, result.TopLineText ?
                                    React__default.createElement("p", null, result.TopLineText)
                                    :
                                        React__default.createElement("p", null, "Select your local area for information:"))
                                :
                                    React__default.createElement(React__default.Fragment, null, result.TopLineText ?
                                        React__default.createElement("p", null, result.TopLineText)
                                        :
                                            React__default.createElement("p", null, "Go straight to the information:")),
                            React__default.createElement(SignpostLinksList, { signpostLinksArray: result.signpostLinksArray })));
            })));
    }
};

const Container$w = styled__default.div`
  
`;

const SectionTitle = styled__default(Heading)`
  background: ${props => props.theme.cardinal_name === "north" ? props.theme.theme_vars.colours.grey : props.theme.theme_vars.colours.grey_light};
  padding: 10px 15px;
  width: 100%;
  margin-left: -15px;
  margin-bottom: 15px;
  max-width: none !important;
  border-radius: ${props => props.theme.theme_vars.border_radius};

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    width: calc(100% - 30px);
    margin-left: 0;
    margin-bottom: 25px;
  }
`;

const LinksList = styled__default.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PagelinkBlank = styled__default.div`
  display: none;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    display: block;
    padding: 15px;
    width: calc(33.333% - 61px);
    margin-bottom: 31px;
  }
`;

const Pagelink = styled__default.a`
  color: ${props => props.theme.theme_vars.colours.black};
  text-decoration: none !important;
  display: block;
  padding: 15px;
  border-radius: ${props => props.theme.theme_vars.border_radius};
  width: 100%;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    width: calc(50% - 46px);
    margin-bottom: 31px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: calc(33.333% - 61px);
  }

  &:hover, &:focus {
    background: ${props => props.theme.cardinal_name === "north" ? (props.theme.theme_vars.colours.grey+"7a") : props.theme.theme_vars.colours.grey_light};

    p:first-of-type {
      color: ${props => props.theme.theme_vars.colours.action_dark};
      text-decoration-style: dotted;
    }
  }
  &:focus {
    outline: none;
    box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
  }
  &:active {
    transform: translate(3px);
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
  }
`;

const Title$5 = styled__default.p`
  ${props => props.theme.linkStyles}
  margin-top: 0;
  margin-bottom: 15px;

  &:hover {
    ${props => props.theme.linkStylesHover}
  }
`;

const Summary$1 = styled__default.p`
  margin: 0;
  color: ${props => props.theme.theme_vars.colours.black} !important;
  font-weight: 400;
`;

var SectionLinks = function (_a) {
    var sectionTitle = _a.sectionTitle, _b = _a.displayTitle, displayTitle = _b === void 0 ? true : _b, sectionSlug = _a.sectionSlug, pageLinksArray = _a.pageLinksArray;
    return (React__default.createElement(Container$w, { id: sectionSlug },
        displayTitle ?
            React__default.createElement(SectionTitle, { text: sectionTitle })
            :
                React__default.createElement("br", null),
        React__default.createElement(LinksList, null,
            pageLinksArray.map(function (link, i) {
                return React__default.createElement(Pagelink, { key: i, href: link.url, title: "Go to " + link.title },
                    React__default.createElement(Title$5, null, link.title),
                    React__default.createElement(Summary$1, null, link.summary));
            }),
            pageLinksArray.length > 1 && ((pageLinksArray.length + 1) % 3 === 0) &&
                React__default.createElement(PagelinkBlank, null))));
};

const Container$x = styled__default.div`
  ${props => props.theme.fontStyles}
  background-color: ${props => props.theme.theme_vars.colours.action_light}; 
  border-radius: ${props => props.theme.theme_vars.border_radius};
  margin-bottom: 25px;
  
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    background-color: transparent; 
  }
`;

const MobileTitleButton = styled__default.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  border-bottom: 2px solid ${props => props.theme.theme_vars.colours.action};
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  font-size: 1em;

  svg {
    fill: ${props => props.theme.theme_vars.colours.action};
    vertical-align: middle;
  }

  &:focus {
    outline: none;
    ${props => props.theme.linkStylesFocus}
    border-bottom: 2px solid;
    svg {
      fill: ${props => props.theme.theme_vars.colours.black};
    }
  }
  &:active{
    ${props => props.theme.linkStylesActive}
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    display: none;
  }
`;
const IconWrapper$4 = styled__default.div`
    display: inline-block;
    margin-left: 10px;
    margin-right: 5px;
    float: right;
`;

const Title$6 = styled__default.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    display: block;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.action};
    padding: ${props => props.theme.theme_vars.spacingSizes.small};
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};

    &:focus {
      outline: none;
    }
  }
`;


const Body = styled__default.div`
  &.closed {
    display: none;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    &.closed {
      display: block;
    }
  }
`;

const SectionTitle$1 = styled__default.p`
  margin: ${props => props.theme.theme_vars.spacingSizes.extra_small} 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
`;

const List$1 = styled__default.ul`
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
`;

const focusListItem = styled.css`
    color: ${props => props.theme.theme_vars.colours.black};
    background-color: ${props => props.theme.theme_vars.colours.focus};
    outline: none;
    box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
`;


const ListItem = styled__default.li`
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;

  &::before {
    display: none;
    position: relative;
  }


  &[aria-current] a {
    display: none;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
      display: block;
      background-color: ${props => props.theme.theme_vars.colours.action_light};
      color: ${props => props.theme.theme_vars.colours.black};
      border-bottom-color: transparent;

      &:focus {
        ${focusListItem}
      }
    }
  }

`;

const ListItemLink = styled__default.a`
  display: block;
  color: ${props => props.theme.theme_vars.colours.action};
  padding: 5px 10px;
  text-decoration: none;
  

  &:hover {
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
    background-color: ${props => props.theme.theme_vars.colours.action_light}80;
  }

  &:focus {
    ${focusListItem}
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    margin: ${props => props.theme.theme_vars.spacingSizes.extra_small} 0;
  }
`;

var SectionLinksSidebar = function (_a) {
    var Title = _a.Title, Sections = _a.Sections;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    return (React__default.createElement(Container$x, { "data-testid": "SectionLinksSidebar" },
        React__default.createElement(MobileTitleButton, { onClick: function () { return open ? setOpen(false) : setOpen(true); } },
            Title,
            React__default.createElement(IconWrapper$4, null,
                React__default.createElement(ChevronIcon, { direction: open ? "up" : "down" }))),
        React__default.createElement(Title$6, null, Title),
        React__default.createElement(Body, { className: !open && "closed" }, Sections.map(function (Section, index) {
            return React__default.createElement("div", { key: index },
                Section.SectionTitle &&
                    React__default.createElement(SectionTitle$1, null, Section.SectionTitle),
                React__default.createElement(List$1, null, Section.SectionLinks.map(function (link, i) {
                    return React__default.createElement(ListItem, { key: i, "aria-current": link.isCurrent ? "true" : null },
                        React__default.createElement(ListItemLink, { href: link.url, title: "View more at " + link.title + " area" }, link.title));
                })));
        }))));
};

const Container$y = styled__default.aside`
    padding-top: 20px;
    display: block;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        position: absolute;
        width: 1px;
        height: 1px;
        margin: 0;
        overflow: hidden;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        white-space: nowrap;

        &:focus-within {
            position: static;
            width: auto;
            height: auto;
            margin: inherit;
            overflow: visible;
            clip: auto;
            -webkit-clip-path: none;
            clip-path: none;
            white-space: inherit
        }
    }
`;
const Contents = styled__default.nav`
`;
const ContentsList = styled__default.ul`
    margin-top: 10px !important;
    margin-left: 0 !important;
    margin-bottom: 20px;
    list-style-type: none;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
`;
const ContentsTitle = styled__default.h2`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
`;

const ContentsItem = styled__default.li`
    position: relative;
    margin-bottom: 10px !important;
    padding-left: 25px;
    
    &:before {
        content: "—" !important;
        position: absolute !important;
        left: 0 !important;
        width: 20px !important;
        overflow: hidden !important;
        background: transparent !important;
        height: auto !important;
        width: auto !important;
        border-radius: none !important;
        top: 0 !important;
    }
`;
const InlineLink = styled__default.a`
    ${props => props.theme.linkStyles}
    font-weight: 400;

    &:hover{
        ${props => props.theme.linkStylesHover}
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
        svg {
            fill: ${props => props.theme.theme_vars.colours.black};
        }
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`;

var SectionLinksMobileContents = function (_a) {
    var sectionLinksArray = _a.sectionLinksArray;
    return (React__default.createElement(Container$y, null,
        React__default.createElement(Contents, null,
            React__default.createElement(ContentsTitle, null, "Contents"),
            React__default.createElement(ContentsList, null, sectionLinksArray.map(function (link) {
                return React__default.createElement(ContentsItem, { key: link.title },
                    React__default.createElement(InlineLink, { href: "#" + link.id, title: "Skip to \"" + link.title + "\" section" }, link.title));
            })))));
};

const Container$z = styled__default.div`
  ${props => props.theme.fontStyles}
  max-height: 385px;
  overflow: hidden;

  &.open {
    max-height: none;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    max-height: none;
    margin-top: 30px;
  }
`;

const LinksList$1 = styled__default.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;


`;

const PagelinkBlank$1 = styled__default.div`
  display: none;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    display: block;
    width: calc(33.333% - 21px);
    margin-bottom: 31px;
  }
`;
const ServiceIconLink = styled__default.a`
  
`;
const PagelinkIconContainer = styled__default.div`
  width: 65px;
  height: auto;

  svg {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    width: 96px;
    height: auto;
  }
`;
const PagelinkIcon = styled__default.div`
  vertical-align: middle;
`;
const PagelinkIconHover = styled__default.div`
  display: none;
  vertical-align: middle;
`;
const PagelinkInner = styled__default.div`
  width: 100%;
`;
const PromotedLink$1 = styled.css`
    // display: block;
    background: ${props => props.theme.theme_vars.colours.white};
    background: ${props => props.theme.theme_vars.colours.white}F2;
    border-radius: 3px;
    box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    
    padding: 20px 15px;
    // width: calc(100% - 30px);
    // margin-bottom: 15px;


    &:hover {
        background: ${props => props.theme.theme_vars.colours.white};
    }

    &:focus {
        ${props => props.theme.linkStylesFocus};
        box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    }
    &:active {
        ${props => props.theme.linkStylesActive};
        transform: translateY(3px);
        box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
      //width: calc(50% - 16px);
      //margin-bottom: 31px;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
      width: calc(33.333% - 45px);
      
    }


  `;


const PagelinkBlockOneCol = (props, other) => {
  if(props.oneCol) {
      return styled.css`
      width: 100%;
      @media screen and (min-width: ${props => `${props.theme.theme_vars.breakpointsVals.m}px`}) and (max-width: ${props => `${props.theme.theme_vars.breakpointsVals.l + 150}px`} ){
        width: 100%;
      }
      @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
        width: 100%;
      }
      `
  } else {
      return styled.css`
      @media screen and (min-width: ${props => `${props.theme.theme_vars.breakpointsVals.m}px`}) and (max-width: ${props => `${props.theme.theme_vars.breakpointsVals.l + 150}px`} ){
        width: calc(50% - 16px);
      }
      @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
        width: calc(33.333% - 45px);
      }
      `   
  }
};



const backgroundStyles = props => {
  if (props.hasBackground){ 
    return PromotedLink$1
  }
};
const PagelinkBlock = styled__default.div`
  width: 100%;
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;


  @media screen and (min-width: ${props => `${props.theme.theme_vars.breakpointsVals.m}px`}) and (max-width: ${props => `${props.theme.theme_vars.breakpointsVals.l + 150}px`} ){
    margin-bottom: 31px;

  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
    //
  }

  &:hover, &:focus-within {
    .service-icon {
      display: none;
    }
    .service-icon-hover {
      display: block !important;
    }
  }
  ${backgroundStyles}

  ${PagelinkBlockOneCol}
`;

const ServiceTitle = styled__default(Heading)`
  margin: 0;

  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.4;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    font-size: 36px;
    font-size: 1.5rem;
    line-height: 1.3;
  }
`;
const ServiceTitleLink = styled__default.a`
  display: block;
  padding: 15px 0;
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){  
    display: inline-block;
    padding: 0;
    margin-bottom: 15px;
  }

  &:hover {
    text-decoration: none;
  }
  h2 {
    ${props => props.theme.linkStyles}
  }
  &:hover {
    h2 {
      ${props => props.theme.linkStylesHover}
    }
  }
  &:focus {
    outline: none;
    text-decoration: none;
    ${props => props.theme.linkStylesFocus}
    h2 {
      text-decoration: none;
    }
  }
  &:active{
    ${props => props.theme.linkStylesActive}
  }
`;

const QuicklinkList = styled__default.ul`
  display: none;
  margin: 0 !important;
  padding: 0 !important;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: block;
    padding-left: 20px !important;
  }
`;

const QuicklinkItem = styled__default.li`
  margin-bottom: 10px;
  padding: 0 !important;
  &:before {
    background: ${props => props.theme.theme_vars.colours.grey} !important;  
    margin-left: -15px;
  }

  &:last-of-type {
    margin-bottom: 0 !important;
  }
`;

const Quicklink = styled__default.a`
  ${props => props.theme.linkStyles}
  font-weight: 400 !important;
  text-decoration: none !important;

  &:hover {
    ${props => props.theme.linkStylesHover}
    text-decoration: underline !important;
    text-decoration-style: dotted !important;
  }
  &:focus {
    ${props => props.theme.linkStylesFocus}
  }
  &:active{
    ${props => props.theme.linkStylesActive}
  }
`;
const ViewMoreButtonContainer = styled__default.div`
  text-align: center;
  margin-top: 30px;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: none;
  }
`;

const ViewMoreButton = styled__default.button`
  padding: 10px 15px;
  border: none;
  background: none;
  ${props => props.theme.linkStyles}
  
  &:hover {
    cursor: pointer;
    ${props => props.theme.linkStylesHover}
  }
  &:focus {
    outline: none;
    ${props => props.theme.linkStylesFocus}
  }
  &:active{
    ${props => props.theme.linkStylesActive}
  }
`;

const IconWrapper$5 = styled__default.span`
    display: inline-block;
    margin-right: 15px;
    padding-left: 3px;
    vertical-align: middle;
`;

const HomeTitle = styled__default.div`  
  margin-bottom: 15px;
  
  h2 {
    margin-top: 0;
  }
  
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey_dark};
    margin-bottom: 35px;
    
    h2 {
      margin-top: 30px;
    }
  }
`;


const ReorderControl = styled__default.div`
  margin-bottom: 15px;
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    text-align: right;
  }
`;
const ReorderButton = styled__default.button`
  background: transparent;
  border: 2px solid ${props => props.theme.theme_vars.colours.action};
  box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.action} inset;
  -webkit-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.action} inset;
  -moz-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.action} inset;
  border-bottom: none;
  border-radius: ${props => props.theme.theme_vars.border_radius};
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 12px;
  line-height: 1.5;
  font-size: 0.9em;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    margin-left: 10px;
    margin-right: 0px;
  }

  &:hover {
    background: ${props => props.theme.theme_vars.colours.action_light};
  }

  &.chosen {
    cursor: default;
    border: none;
    box-shadow: none;
    color: ${props => props.theme.theme_vars.colours.black};
    background: ${props => props.theme.theme_vars.colours.focus};
    border: 2px solid ${props => props.theme.theme_vars.colours.focus};
    border-bottom: none;
    &:focus {
      outline: none;
    }
  }
  &:focus:not(.chosen) {
    outline: none;
    border-color: transparent;
    background: ${props => props.theme.theme_vars.colours.focus};
    color: ${props => props.theme.theme_vars.colours.black};
    border-color: ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
  }
  &:active:not(.chosen) {
    transform: translateY(2px);
    border-color: transparent;
    background: ${props => props.theme.theme_vars.colours.focus};
    color: ${props => props.theme.theme_vars.colours.black};
    border-color: ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
  }
`;

var ServicesLinksList = function (_a) {
    var serviceLinksArray = _a.serviceLinksArray, _b = _a.hasBackground, hasBackground = _b === void 0 ? false : _b, _c = _a.hideHeader, hideHeader = _c === void 0 ? false : _c, _d = _a.oneCol, oneCol = _d === void 0 ? false : _d;
    var themeContext = React.useContext(styled.ThemeContext);
    var _e = React.useState(serviceLinksArray), arrayOrdering = _e[0], setArrayOrdering = _e[1];
    // const originalOrderedArray = serviceLinksArray;
    var orderedArray = __spreadArrays(serviceLinksArray).sort(function (a, b) { return (a.title > b.title ? 1 : -1); });
    var _f = React.useState(false), open = _f[0], setOpen = _f[1];
    var _g = useLocalStorage$1((themeContext.cardinal_name + ("-savedOrder")), 0), currentOrder = _g[0], setCurrentOrder = _g[1];
    var _h = React.useState(true), orderButtons = _h[0], setOrderButtons = _h[1];
    React.useEffect(function () {
        if (currentOrder === "0" || currentOrder === 0) {
            setArrayOrdering(serviceLinksArray);
            setOrderButtons(true);
        }
        else {
            setArrayOrdering(orderedArray);
            setOrderButtons(false);
        }
    }, [currentOrder]);
    var DynamicComponent = function (_a) {
        var name = _a.name, _b = _a.isHover, isHover = _b === void 0 ? false : _b;
        var DynamicIcon;
        if (name === "culture") {
            var newName = name + themeContext.cardinal_name;
            DynamicIcon = components[newName + (isHover ? "Hover" : "")];
        }
        else {
            DynamicIcon = components[name + (isHover ? "Hover" : "")];
        }
        return React__default.createElement(DynamicIcon, { colourFill: themeContext.theme_vars.colours.action });
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Container$z, { id: "all-services", className: open && "open" },
            !hideHeader &&
                React__default.createElement(HomeTitle, null,
                    React__default.createElement(Heading, { text: "Council services" }),
                    React__default.createElement(ReorderControl, null,
                        "Order services by",
                        React__default.createElement("br", null),
                        orderButtons ?
                            React__default.createElement(React__default.Fragment, null,
                                React__default.createElement(ReorderButton, { onClick: function () { return setCurrentOrder(0); }, tabIndex: "-1", className: "chosen", title: "Most used services selected" }, "Most used"),
                                React__default.createElement(ReorderButton, { onClick: function () { return setCurrentOrder(1); }, title: "Alphabetical services", name: 'alphabatical services' }, "Alphabetical"))
                            :
                                React__default.createElement(React__default.Fragment, null,
                                    React__default.createElement(ReorderButton, { onClick: function () { return setCurrentOrder(0); }, title: "Most used services" }, "Most used"),
                                    React__default.createElement(ReorderButton, { onClick: function () { return setCurrentOrder(1); }, tabIndex: "-1", className: "chosen", title: "Alphabetical services selected" }, "Alphabetical")))),
            React__default.createElement(LinksList$1, null,
                arrayOrdering.map(function (link, i) {
                    return React__default.createElement(PagelinkBlock, { oneCol: oneCol, key: i, hasBackground: hasBackground },
                        link.iconKey &&
                            React__default.createElement(PagelinkIconContainer, null,
                                React__default.createElement(ServiceIconLink, { href: link.url, title: "Go to " + link.title },
                                    React__default.createElement(PagelinkIcon, { className: "service-icon" },
                                        React__default.createElement(DynamicComponent, { name: link.iconKey, isHover: false })),
                                    React__default.createElement(PagelinkIconHover, { className: "service-icon-hover" },
                                        React__default.createElement(DynamicComponent, { name: link.iconKey, isHover: true })))),
                        React__default.createElement(PagelinkInner, null,
                            React__default.createElement(ServiceTitleLink, { href: link.url, title: "Go to " + link.title },
                                React__default.createElement(ServiceTitle, { text: link.title })),
                            link.quickLinksArray.length > 0 &&
                                React__default.createElement(QuicklinkList, null, link.quickLinksArray.map(function (quicklink) {
                                    return React__default.createElement(QuicklinkItem, { key: quicklink.title },
                                        React__default.createElement(Quicklink, { href: quicklink.url, title: "Go to " + quicklink.title }, quicklink.title));
                                }))));
                }),
                arrayOrdering.length > 1 && ((arrayOrdering.length + 1) % 3 === 0) &&
                    React__default.createElement(PagelinkBlank$1, null))),
        !hideHeader &&
            React__default.createElement(ViewMoreButtonContainer, null,
                React__default.createElement(ViewMoreButton, { onClick: function () { return open ? setOpen(false) : setOpen(true); } },
                    React__default.createElement(IconWrapper$5, null,
                        React__default.createElement(ChevronIcon, { direction: open ? "up" : "down", colourFill: "#000000" })),
                    "View ",
                    open ? "less" : "more",
                    " services"))));
};
function useLocalStorage$1(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = React.useState(function () {
        try {
            // Get from local storage by key
            var item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function (value) {
        try {
            // Allow value to be a function so we have same API as useState
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

const Container$A = styled__default.div`
    ${props => props.theme.fontStyles}
    max-width: 500px;
    border-radius: ${props => props.theme.theme_vars.border_radius};
    padding: 20px;
    background-color: ${props => props.theme.theme_vars.colours.grey_light};


    p:first-of-type {
        margin-top: 0;
        margin-bottom: 15px;
    }
    p:last-of-type {
        margin-bottom: 0 !important;
    }

    width: 100%;
    margin-left: -15px;
    padding: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        margin-left: 0;
        padding: 20px;
        max-width: calc(100% - 40px);
    }
`;
const Paragraph = styled__default.p`

`;
const LastParagraph = styled__default.p`
    margin-top: 25px;
    margin-bottom: 0;
`;

const SingleButtonContainer = styled__default.div`
    svg {
        fill: ${props => props.theme.theme_vars.colours.white};
        margin-right: 5px;
        vertical-align: bottom;
    }
    &:focus-within {
        svg {
            fill: ${props => props.theme.theme_vars.colours.black};
        }
    }
`;

var SignpostLinks = function (_a) {
    var signpostLinksArray = _a.signpostLinksArray, _b = _a.TopLineText, TopLineText = _b === void 0 ? "Select your local area for more information:" : _b, otherCouncilLink = _a.otherCouncilLink;
    var themeContext = React.useContext(styled.ThemeContext);
    var councilLink = otherCouncilLink ? otherCouncilLink : themeContext.theme_vars.other_council_link;
    return (React__default.createElement(React__default.Fragment, null, signpostLinksArray.length > 1 ?
        React__default.createElement(Container$A, null,
            React__default.createElement(Paragraph, null, TopLineText),
            React__default.createElement(SignpostLinksList, { signpostLinksArray: signpostLinksArray }),
            React__default.createElement(PostCodeSearch, { otherCouncilLink: councilLink, signPostLinks: signpostLinksArray }),
            (otherCouncilLink || themeContext.theme_vars.other_council_link) &&
                React__default.createElement(LastParagraph, null,
                    "If your area isn't listed, you may be a resident of\u00A0",
                    React__default.createElement(SignpostLink, { href: councilLink, title: themeContext.theme_vars.other_council_name + " (this link will take you to an external website)" }, themeContext.theme_vars.other_council_name),
                    "."))
        :
            React__default.createElement(SingleButtonContainer, null,
                React__default.createElement(Button, { url: signpostLinksArray[0].url, title: signpostLinksArray[0].areaName + " (this link will take you to an external website)" },
                    React__default.createElement(LinkIcon, null),
                    signpostLinksArray[0].cta_text ?
                        signpostLinksArray[0].cta_text
                        :
                            signpostLinksArray[0].areaName))));
};

const SkipToMainContent = styled__default.a`
  ${props => props.theme.fontStyles}

  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  display: block;
  padding: 10px 15px;
 
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: inherit;
    overflow: visible;
    clip: auto;
    -webkit-clip-path: none;
    clip-path: none;
    white-space: inherit
  }

  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.theme_vars.colours.black};
  }



  @media (min-width: 40.0625em) {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25
  }



  &:focus {
    outline: 3px solid ${props => props.theme.theme_vars.colours.focus};
    outline-offset: 0;
    background-color: ${props => props.theme.theme_vars.colours.focus};
  }




`;

var SkipToMainContent$1 = function () { return (React__default.createElement(SkipToMainContent, { "data-testid": "SkipToMainContent", href: "#main" }, "Skip to main content")); };

const breakpointsVals = {
    s: "550",
    m: "768", // tablets and larger
    l: "1160", // desktops and larger
    xl: "1440", // large desktops only
};

const gds_vars = {
    theme_name: "GDS theme",
    cardinal_name: "gds",
    full_name: "FutureGov Template",       
    breakpointsVals: {
        s: breakpointsVals.s,
        m: breakpointsVals.m, // tablets and larger
        l: breakpointsVals.l, // desktops and larger
        xl: breakpointsVals.xl, // large desktops only
    },    
    breakpoints: {
        s: `${breakpointsVals.s}px`,
        m: `${breakpointsVals.m}px`, // tablets and larger
        l: `${breakpointsVals.l}px`, // desktops and larger
        xl:`${breakpointsVals.xl}px`, // large desktops only
    },
    colours: {
        black: "#000000",
        grey_darkest: "#3C3C3B",
        grey_dark: "#757575",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#1d70b8",
        action_light: "#FAFAFA",
        action_dark: "#003078",
        positive: "#6C9A36",
        negative: "#d4351c",
    
        visited: "#4c2c92",
        focus: "#fd0"
    },
    fontstack: "GDS Transport, Helvetica, Arial, sans-serif",
    fontSizes: {
        extra_small: ".9em",
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    border_radius: "0px",
    spacingSizes: {
        extra_small: "5px",
        small: "10px",
        medium: "20px",
        large: "30px",
        x_large: "45px;"
    },
    h1: `
        font-size: 32px;
        font-size: 2rem;
        font-weight: 700;

        @media (min-width: 40.0625em) {
            font-size: 48px;
            font-size: 3rem;
        }
    `,
    h2: `
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 36px;
            font-size: 2.25rem;
        }
    `,
    h3: `
        font-size: 18px;
        font-size: 1.125rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 24px;
            font-size: 1.5rem;
        }
    `,
    h4: `
        font-size: 16px;
        font-size: 1rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 19px;
            font-size: 1.1875rem;
        }
    `
};

const breakpointsVals$1 = {
    s: "550",
    m: "768", // tablets and larger
    l: "1160", // desktops and larger
    xl: "1440", // large desktops only
};

const north_vars = {
    theme_name: "North Northants theme",
    full_name: "North Northamptonshire",
    cardinal_name: "north",
    council_link: "https://www.northnorthants.gov.uk",
    other_council_link: "https://www.westnorthants.gov.uk",
    other_council_name: "West Northamptonshire",
    other_council_action: "#386193",
    twitter_link: "https://twitter.com/NNorthantsC",
    linkedin_link: "https://www.linkedin.com/company/north-northamptonshire-council",
    facebook_link: "https://www.facebook.com/NorthNorthants",   
    breakpointsVals: {
        s: breakpointsVals$1.s,
        m: breakpointsVals$1.m, // tablets and larger
        l: breakpointsVals$1.l, // desktops and larger
        xl: breakpointsVals$1.xl, // large desktops only
    },    
    breakpoints: {
        s: `${breakpointsVals$1.s}px`,
        m: `${breakpointsVals$1.m}px`, // tablets and larger
        l: `${breakpointsVals$1.l}px`, // desktops and larger
        xl:`${breakpointsVals$1.xl}px`, // large desktops only
    },
    colours: {
        black: "#000000",
        grey_darkest: "#3C3C3B",
        grey_dark: "#757575",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#017F34",
        action_light: "#F3F9F5",
        action_dark: "#065325",
        positive: "#147DAD",
        negative: "#B73131",

        focus: "#E2CA76",

        secondary: "#1A9DD9"
    },
    fontstack: "Arial, Helvetica, sans-serif",
    fontSizes: {
        extra_small: ".9em",
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    border_radius: "3px",
    spacingSizes: {
        extra_small: "5px",
        small: "10px",
        medium: "20px",
        large: "30px",
        x_large: "45px;"
    },
    h1: `
        font-size: 32px;
        font-size: 2rem;
        font-weight: 700;

        @media (min-width: 40.0625em) {
            font-size: 48px;
            font-size: 3rem;
        }
    `,
    h2: `
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 36px;
            font-size: 2.25rem;
        }
    `,
    h3: `
        font-size: 18px;
        font-size: 1.125rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 24px;
            font-size: 1.5rem;
        }
    `,
    h4: `
        font-size: 16px;
        font-size: 1rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 19px;
            font-size: 1.1875rem;
        }
    `
};

const breakpointsVals$2 = {
    s: "550",
    m: "768", // tablets and larger
    l: "1160", // desktops and larger
    xl: "1440", // large desktops only
};

const west_vars = {
    theme_name: "West Northants theme",
    full_name: "West Northamptonshire",
    cardinal_name: "west",
    council_link: "https://www.westnorthants.gov.uk",
    other_council_link: "https://www.northnorthants.gov.uk",
    other_council_name: "North Northamptonshire",
    other_council_action: "#017F34",
    twitter_link: "https://twitter.com/WestNorthants",
    linkedin_link: "https://www.linkedin.com/company/west-northamptonshire-council",
    facebook_link: "https://www.facebook.com/WestNorthants",    
    breakpointsVals: {
        s: breakpointsVals$2.s,
        m: breakpointsVals$2.m, // tablets and larger
        l: breakpointsVals$2.l, // desktops and larger
        xl: breakpointsVals$2.xl, // large desktops only
    },    
    breakpoints: {
        s: `${breakpointsVals$2.s}px`,
        m: `${breakpointsVals$2.m}px`, // tablets and larger
        l: `${breakpointsVals$2.l}px`, // desktops and larger
        xl:`${breakpointsVals$2.xl}px`, // large desktops only
    },
    colours: {
        black: "#3C3C3B",
        grey_darkest: "#3C3C3B",
        grey_dark: "#757575",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#386193",
        action_light: "#E9EEF3",
        action_dark: "#0E335B",
        positive: "#6C9A36",
        negative: "#9D0B1D",

        focus: "#E2CA76",

        secondary: "#6CC7E1"
    },
    fontstack: "Roboto, Helvetica, Arial, sans-serif",
    fontSizes: {
        extra_small: ".9em",
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    border_radius: "3px",
    spacingSizes: {
        extra_small: "5px",
        small: "10px",
        medium: "20px",
        large: "30px",
        x_large: "45px;"
    },
    h1: `
        font-size: 32px;
        font-size: 2rem;
        font-weight: 700;

        @media (min-width: 40.0625em) {
            font-size: 48px;
            font-size: 3rem;
        }
    `,
    h2: `
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 36px;
            font-size: 2.25rem;
        }
    `,
    h3: `
        font-size: 18px;
        font-size: 1.125rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 24px;
            font-size: 1.5rem;
        }
    `,
    h4: `
        font-size: 16px;
        font-size: 1rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 19px;
            font-size: 1.1875rem;
        }
    `
};

const breakpointsVals$3 = {
    s: "550",
    m: "768", // tablets and larger
    l: "1160", // desktops and larger
    xl: "1440", // large desktops only
};

const lb_vars_north = {
    theme_name: "Memorial theme North",
    full_name: "North Northamptonshire",
    cardinal_name: "north",
    council_link: "https://www.northnorthants.gov.uk",
    other_council_link: "https://www.westnorthants.gov.uk",
    other_council_name: "West Northamptonshire",
    other_council_action: "#386193",
    twitter_link: "https://twitter.com/NNorthantsC",
    linkedin_link: "https://www.linkedin.com/company/north-northamptonshire-council",
    facebook_link: "https://www.facebook.com/NorthNorthants",    
    breakpointsVals: {
        s: breakpointsVals$3.s,
        m: breakpointsVals$3.m, // tablets and larger
        l: breakpointsVals$3.l, // desktops and larger
        xl: breakpointsVals$3.xl, // large desktops only
    },    
    breakpoints: {
        s: `${breakpointsVals$3.s}px`,
        m: `${breakpointsVals$3.m}px`, // tablets and larger
        l: `${breakpointsVals$3.l}px`, // desktops and larger
        xl:`${breakpointsVals$3.xl}px`, // large desktops only
    },
    colours: {
        black: "#000000",
        grey_darkest: "#3C3C3B",
        grey_dark: "#757575",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",
    
        action: "#000000",
        action_light: "#C6C6C6",
        action_dark: "#333333",
        positive: "#147DAD",
        negative: "#B73131",
    
        focus: "#E2CA76",

        secondary: "#1A9DD9"
    },
    fontstack: "Arial, Helvetica, sans-serif",
    fontSizes: {
        extra_small: ".9em",
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    border_radius: "3px",
    spacingSizes: {
        extra_small: "5px",
        small: "10px",
        medium: "20px",
        large: "30px",
        x_large: "45px;"
    },
    h1: `
        font-size: 32px;
        font-size: 2rem;
        font-weight: 700;

        @media (min-width: 40.0625em) {
            font-size: 48px;
            font-size: 3rem;
        }
    `,
    h2: `
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 36px;
            font-size: 2.25rem;
        }
    `,
    h3: `
        font-size: 18px;
        font-size: 1.125rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 24px;
            font-size: 1.5rem;
        }
    `,
    h4: `
        font-size: 16px;
        font-size: 1rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 19px;
            font-size: 1.1875rem;
        }
    `
};

const breakpointsVals$4 = {
    s: "550",
    m: "768", // tablets and larger
    l: "1160", // desktops and larger
    xl: "1440", // large desktops only
};

const lb_vars_west = {
    theme_name: "Memorial theme West",
    full_name: "West Northamptonshire",
    cardinal_name: "west",
    council_link: "https://www.westnorthants.gov.uk",
    other_council_link: "https://www.northnorthants.gov.uk",
    other_council_name: "North Northamptonshire",
    other_council_action: "#017F34",
    twitter_link: "https://twitter.com/WestNorthants",
    linkedin_link: "https://www.linkedin.com/company/west-northamptonshire-council",
    facebook_link: "https://www.facebook.com/WestNorthants",    
    breakpointsVals: {
        s: breakpointsVals$4.s,
        m: breakpointsVals$4.m, // tablets and larger
        l: breakpointsVals$4.l, // desktops and larger
        xl: breakpointsVals$4.xl, // large desktops only
    },    
    breakpoints: {
        s: `${breakpointsVals$4.s}px`,
        m: `${breakpointsVals$4.m}px`, // tablets and larger
        l: `${breakpointsVals$4.l}px`, // desktops and larger
        xl:`${breakpointsVals$4.xl}px`, // large desktops only
    },
    colours: {
        black: "#3C3C3B",
        grey_darkest: "#3C3C3B",
        grey_dark: "#757575",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#3C3C3B",
        action_light: "#C6C6C6",
        action_dark: "#333333",
        positive: "#6C9A36",
        negative: "#9D0B1D",

        focus: "#E2CA76",

        secondary: "#6CC7E1"
    },
    fontstack: "Roboto, Helvetica, Arial, sans-serif",
    fontSizes: {
        extra_small: ".9em",
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    border_radius: "3px",
    spacingSizes: {
        extra_small: "5px",
        small: "10px",
        medium: "20px",
        large: "30px",
        x_large: "45px;"
    },
    h1: `
        font-size: 32px;
        font-size: 2rem;
        font-weight: 700;

        @media (min-width: 40.0625em) {
            font-size: 48px;
            font-size: 3rem;
        }
    `,
    h2: `
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 36px;
            font-size: 2.25rem;
        }
    `,
    h3: `
        font-size: 18px;
        font-size: 1.125rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 24px;
            font-size: 1.5rem;
        }
    `,
    h4: `
        font-size: 16px;
        font-size: 1rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 19px;
            font-size: 1.1875rem;
        }
    `
};

const generate_theme = (theme_vars) => {
    return { 
        name: theme_vars.theme_name, 
        full_name: theme_vars.full_name, 
        cardinal_name: theme_vars.cardinal_name, 
        theme_vars, 
        fontStyles: `
            font-family: ${theme_vars.fontstack};
            color: ${theme_vars.colours.black};
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.4;
            -webkit-font-smoothing: antialiased;
        
            @media screen and (min-width: ${theme_vars.breakpoints.m}){
                font-size: 19px;
                font-size: 1.1875rem;
                line-height: 1.45;

                p, h2, h3, h4, ul, ol {
                    max-width: 750px;
                }
            }
        `,
        headingStyles: `
            h1 {
                ${theme_vars.h1}
            }
            h2 {
                ${theme_vars.h2}
            }
            h3 {
                ${theme_vars.h3}
            }
            h4 {
                ${theme_vars.h4}
            }
        `,
        linkStyles: `
            color: ${theme_vars.colours.action};
            font-weight: 700;
            text-decoration: underline;
        `,
        linkStylesHover: `
            color: ${theme_vars.colours.action_dark};
            text-decoration: underline;
            text-decoration-style: dotted;
        `,
        linkStylesFocus: styled.css`
            color: ${theme_vars.colours.black};
            background: ${theme_vars.colours.focus};
            outline: none;
            text-decoration: none !important;
            box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 3px ${theme_vars.colours.black};
            -webkit-box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 3px ${theme_vars.colours.black};
            -moz-box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 3px ${theme_vars.colours.black};
        `,
        linkStylesActive: styled.css`
            color: ${theme_vars.colours.black};
            background: ${theme_vars.colours.focus};
            outline: none;
            text-decoration: none !important;
            transform: translateY(2px);
            box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 1px ${theme_vars.colours.black};
            -webkit-box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 1px ${theme_vars.colours.black};
            -moz-box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 1px ${theme_vars.colours.black};
        `,
        elementBaseStyles: `
            border-bottom: 2px solid transparent;
        `,
        elementFocusStyles: `
            outline: none;
        `,
        visuallyHidden: `
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            clip: rect(0 0 0 0) !important;
            -webkit-clip-path: inset(50%) !important;
            clip-path: inset(50%) !important;
            border: 0 !important;
            white-space: nowrap !important;
        `
    }
};

const GDS_theme = generate_theme(gds_vars);
const west_theme = generate_theme(west_vars);
const north_theme = generate_theme(north_vars);
const lb_theme_north = generate_theme(lb_vars_north);
const lb_theme_west = generate_theme(lb_vars_west);

exports.AccessibleLinks = AccessibleLink;
exports.Accordion = Accordion;
exports.AlertBanner = AlertBanner;
exports.AlertBannerService = AlertBannerService;
exports.BlockQuote = BlockQuote;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.CallToAction = CallToAction;
exports.CheckboxListFilter = CheckboxListFilter;
exports.CookieBanner = CookieBanner;
exports.DisplayDate = DisplayDate$1;
exports.Divider = Divider$1;
exports.DownloadableFiles = DownloadableFiles;
exports.DropDownFilter = DropDownFilter;
exports.Footer = Footer;
exports.GDS_theme = GDS_theme;
exports.Header = Header;
exports.Heading = Heading;
exports.HeadingWithIcon = HeadingWithIcon;
exports.HomeHero = HomeHero;
exports.HomeUnitarySection = HomeUnitarySection;
exports.MaxWidthContainer = MaxWidthContainer;
exports.MemorialHero = MemorialHero;
exports.NewsArticleDate = NewsArticleDate$1;
exports.NewsArticleFeaturedBlock = NewsArticleFeaturedBlock;
exports.NewsArticleFilterAccordion = NewsArticleFilterAccordion;
exports.NewsArticleImage = NewsArticleImage;
exports.NewsArticleList = NewsArticleList;
exports.NewsArticleListHeader = NewsArticleListHeader;
exports.NewsArticleOldBanner = NewsArticleOldBanner$1;
exports.PageMain = PageMain;
exports.PageSidebar = PageSidebar;
exports.PageTitle = PageTitle;
exports.PageWithSidebarContainer = PageWithSidebarContainer;
exports.PageWrapper = PageWrapper;
exports.Pagination = Pagination;
exports.PhaseBanner = PhaseBanner;
exports.PromoBanner = PromoBanner;
exports.PromotedLinks = PromotedLinks$1;
exports.SearchResultsList = SearchResultsList;
exports.Searchbar = Searchbar;
exports.SectionLinks = SectionLinks;
exports.SectionLinksMobileContents = SectionLinksMobileContents;
exports.SectionLinksSidebar = SectionLinksSidebar;
exports.ServicesLinksList = ServicesLinksList;
exports.SignpostLinks = SignpostLinks;
exports.SkipToMainContent = SkipToMainContent$1;
exports.WarningText = WarningText$1;
exports.WarningTextDisclaimer = WarningTextDisclaimer;
exports.lb_theme_north = lb_theme_north;
exports.lb_theme_west = lb_theme_west;
exports.north_theme = north_theme;
exports.west_theme = west_theme;
//# sourceMappingURL=index.js.map
