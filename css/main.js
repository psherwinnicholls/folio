import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    ":root": {
        "BgColor": "#F7786B",
        "TextColor": "rgba(255, 255, 255, 1)",
        "LinkHoverColor": "#000",
        "LineHeight": 1.2,
        "Xs": 0.8,
        "S": 1,
        "M": 1.3,
        "L": 1.999,
        "Xl": 2.827,
        "Xxl": 3.998
    },
    "body": {
        "fontFamily": "'Work Sans', sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 20,
        "lineHeight": "var(--line-height)",
        "color": "var(--text-color)",
        "background": "var(--bg-color)",
        "textRendering": "optimizeLegibility",
        "WebkitFontSmoothing": "antialiased",
        "fontVariantLigatures": "common-ligatures",
        "WebkitFontVariantLigatures": "common-ligatures",
        "cursor": "url('pencil.svg'),auto"
    },
    "main": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-around",
        "height": "100%",
        "width": "100%",
        "position": "absolute",
        "textAlign": "center",
        "pointerEvents": "none"
    },
    "wrapper": {
        "pointerEvents": "none",
        "color": "#FFF",
        "textAlign": "center",
        "height": "auto",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "container": {
        "position": "fixed",
        "zIndex": -300,
        "maxWidth": "100%",
        "maxHeight": "100%",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0
    },
    "sketch": {
        "position": "fixed",
        "maxHeight": "100%",
        "maxWidth": "100%"
    },
    "h1": {
        "fontSize": "var(--xxl)"
    },
    "h2": {
        "fontSize": "var(--xl)",
        "fontWeight": "700",
        "pointerEvents": "none",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "h3": {
        "fontSize": "var(--l)",
        "marginBottom": 0
    },
    "h4": {
        "fontSize": "var(--m)"
    },
    "p": {
        "fontSize": "var(--s)",
        "fontWeight": "400",
        "marginTop": 0,
        "width": "60%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "divider": {
        "width": "100%",
        "display": "block",
        "marginTop": "var(--s)",
        "marginRight": 0,
        "marginBottom": "var(--s)",
        "marginLeft": 0
    },
    "bigdivider": {
        "width": "100%",
        "display": "block",
        "marginTop": "var(--l)",
        "marginRight": 0,
        "marginBottom": "var(--l)",
        "marginLeft": 0
    },
    "strong": {
        "fontWeight": "700"
    },
    "small": {
        "fontWeight": "300",
        "letterSpacing": 0.15,
        "opacity": 0.8,
        "fontSize": "var(--xs)"
    },
    "aheader": {
        "WebkitMarginBefore": "var(--s)",
        "WebkitMarginAfter": "var(--s)",
        "marginTop": "var(--s)"
    },
    "a": {
        "color": "var(--text-color)",
        "backgroundImage": "linear-gradient( 180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 85%, #fff 85%, #fff 90%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0))",
        "textDecoration": "none",
        "pointerEvents": "all",
        "cursor": "url('pointer.svg'),auto"
    }
});