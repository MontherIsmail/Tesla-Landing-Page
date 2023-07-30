"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 2934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(4178);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: external "keen-slider/react"
const react_namespaceObject = require("keen-slider/react");
// EXTERNAL MODULE: ./node_modules/keen-slider/keen-slider.min.css
var keen_slider_min = __webpack_require__(6443);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: ./assets/commaIcons.png
/* harmony default export */ const commaIcons = ({"src":"https://cdn.mydomain.com/_next/static/media/commaIcons.52bf3d6f.png","height":144,"width":188,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAX0lEQVR42h2IMQ5AQAAEt1CIP+jFPyTUCg/wClEp1Trv0GgUHiKiFQ2ZKzTnTraY2REDlkki5eSmENa4kdP83MXI42JLzOnslUTERSVvHYdHz+KvSdjIRM1MIBGyUkofytk+COfqCxAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "@mui/material/useMediaQuery"
const useMediaQuery_namespaceObject = require("@mui/material/useMediaQuery");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./hooks/useTranslate/index.ts

const useTranslate = external_next_i18next_.useTranslation;
/* harmony default export */ const hooks_useTranslate = (useTranslate);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/AboutUsSlider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const AboutUsSlider = ()=>{
    const [currentSlide, setCurrentSlide] = (0,external_react_.useState)(0);
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    const [sliderRef, instanceRef] = (0,react_namespaceObject.useKeenSlider)({
        slideChanged (slider) {
            const relativeSlide = slider.track.details.rel;
            console.log({
                relativeSlide
            });
            setCurrentSlide(relativeSlide);
        },
        created () {
            setLoaded(true);
        },
        breakpoints: {
            "(min-width: 400px)": {
                slides: {
                    perView: 2,
                    spacing: 5
                }
            },
            "(min-width: 1000px)": {
                slides: {
                    perView: 3,
                    spacing: 0
                }
            }
        },
        slides: {
            perView: 1
        }
    });
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const { t } = hooks_useTranslate("home");
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: style_default().dynamic([
            [
                "958cd046dc053910",
                [
                    isSmallLayout ? "280px" : "240px",
                    isSmallLayout ? "220px" : "180px",
                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                    isSmallLayout ? "10" : "20",
                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                ]
            ]
        ]),
        children: [
            loaded && instanceRef.current && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: style_default().dynamic([
                    [
                        "958cd046dc053910",
                        [
                            isSmallLayout ? "280px" : "240px",
                            isSmallLayout ? "220px" : "180px",
                            locale === "ar" ? "left: 20px;" : "right: 20px;",
                            isSmallLayout ? "10" : "20",
                            locale === "ar" ? "right: 20px;" : "left: 20px;"
                        ]
                    ]
                ]) + " " + "slides-btns",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: style_default().dynamic([
                        [
                            "958cd046dc053910",
                            [
                                isSmallLayout ? "280px" : "240px",
                                isSmallLayout ? "220px" : "180px",
                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                isSmallLayout ? "10" : "20",
                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                            ]
                        ]
                    ]) + " " + "btns-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            disabled: currentSlide === instanceRef.current.track.details.slides.length - 1,
                            onClick: (e)=>e.stopPropagation() || instanceRef.current?.next(),
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "navigate-btn",
                            children: locale === "ar" ? /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowRight, {}) : /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowLeft, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            disabled: currentSlide === 0,
                            onClick: (e)=>e.stopPropagation() || instanceRef.current?.prev(),
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "navigate-btn",
                            children: locale === "ar" ? /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowLeft, {}) : /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowRight, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: sliderRef,
                className: style_default().dynamic([
                    [
                        "958cd046dc053910",
                        [
                            isSmallLayout ? "280px" : "240px",
                            isSmallLayout ? "220px" : "180px",
                            locale === "ar" ? "left: 20px;" : "right: 20px;",
                            isSmallLayout ? "10" : "20",
                            locale === "ar" ? "right: 20px;" : "left: 20px;"
                        ]
                    ]
                ]) + " " + "keen-slider",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "958cd046dc053910",
                                [
                                    isSmallLayout ? "280px" : "240px",
                                    isSmallLayout ? "220px" : "180px",
                                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                                    isSmallLayout ? "10" : "20",
                                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide1",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "slider-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "image-container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: commaIcons,
                                        width: 100,
                                        alt: "our work image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "slide-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-name",
                                            children: t("aboutUs.card.title")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-type",
                                            children: t("aboutUs.card.type")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "message-text",
                                            children: t("aboutUs.card.description")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "958cd046dc053910",
                                [
                                    isSmallLayout ? "280px" : "240px",
                                    isSmallLayout ? "220px" : "180px",
                                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                                    isSmallLayout ? "10" : "20",
                                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "slider-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "image-container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: commaIcons,
                                        width: 100,
                                        alt: "our work image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "slide-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-name",
                                            children: t("aboutUs.card.title")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-type",
                                            children: t("aboutUs.card.type")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "message-text",
                                            children: t("aboutUs.card.description")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "958cd046dc053910",
                                [
                                    isSmallLayout ? "280px" : "240px",
                                    isSmallLayout ? "220px" : "180px",
                                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                                    isSmallLayout ? "10" : "20",
                                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide3",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "slider-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "image-container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: commaIcons,
                                        width: 100,
                                        alt: "our work image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "slide-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-name",
                                            children: t("aboutUs.card.title")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-type",
                                            children: t("aboutUs.card.type")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "message-text",
                                            children: t("aboutUs.card.description")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "958cd046dc053910",
                                [
                                    isSmallLayout ? "280px" : "240px",
                                    isSmallLayout ? "220px" : "180px",
                                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                                    isSmallLayout ? "10" : "20",
                                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "slider-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "image-container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: commaIcons,
                                        width: 100,
                                        alt: "our work image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "slide-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-name",
                                            children: t("aboutUs.card.title")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-type",
                                            children: t("aboutUs.card.type")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "message-text",
                                            children: t("aboutUs.card.description")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "958cd046dc053910",
                                [
                                    isSmallLayout ? "280px" : "240px",
                                    isSmallLayout ? "220px" : "180px",
                                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                                    isSmallLayout ? "10" : "20",
                                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide5",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "slider-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "image-container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: commaIcons,
                                        width: 100,
                                        alt: "our work image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "slide-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-name",
                                            children: t("aboutUs.card.title")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-type",
                                            children: t("aboutUs.card.type")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "message-text",
                                            children: t("aboutUs.card.description")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "958cd046dc053910",
                                [
                                    isSmallLayout ? "280px" : "240px",
                                    isSmallLayout ? "220px" : "180px",
                                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                                    isSmallLayout ? "10" : "20",
                                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "958cd046dc053910",
                                    [
                                        isSmallLayout ? "280px" : "240px",
                                        isSmallLayout ? "220px" : "180px",
                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                        isSmallLayout ? "10" : "20",
                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                    ]
                                ]
                            ]) + " " + "slider-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "image-container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: commaIcons,
                                        width: 100,
                                        alt: "our work image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "958cd046dc053910",
                                            [
                                                isSmallLayout ? "280px" : "240px",
                                                isSmallLayout ? "220px" : "180px",
                                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                isSmallLayout ? "10" : "20",
                                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                                            ]
                                        ]
                                    ]) + " " + "slide-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-name",
                                            children: t("aboutUs.card.title")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "client-type",
                                            children: t("aboutUs.card.type")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "958cd046dc053910",
                                                    [
                                                        isSmallLayout ? "280px" : "240px",
                                                        isSmallLayout ? "220px" : "180px",
                                                        locale === "ar" ? "left: 20px;" : "right: 20px;",
                                                        isSmallLayout ? "10" : "20",
                                                        locale === "ar" ? "right: 20px;" : "left: 20px;"
                                                    ]
                                                ]
                                            ]) + " " + "message-text",
                                            children: t("aboutUs.card.description")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: style_default().dynamic([
                    [
                        "958cd046dc053910",
                        [
                            isSmallLayout ? "280px" : "240px",
                            isSmallLayout ? "220px" : "180px",
                            locale === "ar" ? "left: 20px;" : "right: 20px;",
                            isSmallLayout ? "10" : "20",
                            locale === "ar" ? "right: 20px;" : "left: 20px;"
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: style_default().dynamic([
                        [
                            "958cd046dc053910",
                            [
                                isSmallLayout ? "280px" : "240px",
                                isSmallLayout ? "220px" : "180px",
                                locale === "ar" ? "left: 20px;" : "right: 20px;",
                                isSmallLayout ? "10" : "20",
                                locale === "ar" ? "right: 20px;" : "left: 20px;"
                            ]
                        ]
                    ]) + " " + "slider-footer",
                    children: loaded && instanceRef.current && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "958cd046dc053910",
                                [
                                    isSmallLayout ? "280px" : "240px",
                                    isSmallLayout ? "220px" : "180px",
                                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                                    isSmallLayout ? "10" : "20",
                                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                                ]
                            ]
                        ]) + " " + "dots",
                        children: isSmallLayout ? [
                            ...Array(instanceRef.current.track.details.slides.length).keys()
                        ].map((idx)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>{
                                    instanceRef.current?.moveToIdx(idx);
                                },
                                className: style_default().dynamic([
                                    [
                                        "958cd046dc053910",
                                        [
                                            isSmallLayout ? "280px" : "240px",
                                            isSmallLayout ? "220px" : "180px",
                                            locale === "ar" ? "left: 20px;" : "right: 20px;",
                                            isSmallLayout ? "10" : "20",
                                            locale === "ar" ? "right: 20px;" : "left: 20px;"
                                        ]
                                    ]
                                ]) + " " + ("dot" + (currentSlide === idx ? " active" : "") || 0)
                            }, idx);
                        }) : [
                            ...Array(instanceRef.current.track.details.slides.length - 2).keys()
                        ].map((idx)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>{
                                    instanceRef.current?.moveToIdx(idx);
                                },
                                className: style_default().dynamic([
                                    [
                                        "958cd046dc053910",
                                        [
                                            isSmallLayout ? "280px" : "240px",
                                            isSmallLayout ? "220px" : "180px",
                                            locale === "ar" ? "left: 20px;" : "right: 20px;",
                                            isSmallLayout ? "10" : "20",
                                            locale === "ar" ? "right: 20px;" : "left: 20px;"
                                        ]
                                    ]
                                ]) + " " + ("dot" + (currentSlide === idx ? " active" : "") || 0)
                            }, idx);
                        })
                    })
                })
            }),
            jsx_runtime.jsx((style_default()), {
                id: "958cd046dc053910",
                dynamic: [
                    isSmallLayout ? "280px" : "240px",
                    isSmallLayout ? "220px" : "180px",
                    locale === "ar" ? "left: 20px;" : "right: 20px;",
                    isSmallLayout ? "10" : "20",
                    locale === "ar" ? "right: 20px;" : "left: 20px;"
                ],
                children: `[class^="number-slide"].__jsx-style-dynamic-selector,[class*=" number-slide"].__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:${isSmallLayout ? "280px" : "240px"};max-height:100vh;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.slider-item.__jsx-style-dynamic-selector{background:rgba(255,255,255,1);-webkit-box-shadow:0px 0px 30px 10px rgba(0,0,0,.1);-moz-box-shadow:0px 0px 30px 10px rgba(0,0,0,.1);box-shadow:0px 0px 30px 10px rgba(0,0,0,.1);height:${isSmallLayout ? "220px" : "180px"};margin-top:25px;padding-top:25px;width:100%;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin:0 7px;position:relative}.slides-btns.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:50px}.btns-container.__jsx-style-dynamic-selector{width:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.navigate-btn.__jsx-style-dynamic-selector{background-color:rgba(244,247,254,1);color:rgba(191,33,50,1);border:1px solid rgba(191,33,50,1);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.image-container.__jsx-style-dynamic-selector{position:absolute;top:20px;${locale === "ar" ? "left: 20px;" : "right: 20px;"}
          z-index: 1;}.slide-content.__jsx-style-dynamic-selector{position:absolute;top:${isSmallLayout ? "10" : "20"};${locale === "ar" ? "right: 20px;" : "left: 20px;"}
          z-index: 5;width:80%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.client-name.__jsx-style-dynamic-selector{color:rgba(191,33,50,1);font-size:14px}.client-type.__jsx-style-dynamic-selector{color:rgba(79,79,79,1);font-size:10px}.message-text.__jsx-style-dynamic-selector{color:rgba(0,0,0,1);font-size:12px}.client-name.__jsx-style-dynamic-selector,.client-type.__jsx-style-dynamic-selector,.message-text.__jsx-style-dynamic-selector{padding:0;margin:5px 0}.dots.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:10px 0;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.dot.__jsx-style-dynamic-selector{border:none;width:30px;padding:1.5px;max-height:5px;background:rgba(217,217,217,1);-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin:0 3px;cursor:pointer}.dot.__jsx-style-dynamic-selector:focus{outline:none}.dot.active.__jsx-style-dynamic-selector{background:rgba(191,33,50,1)}`
            })
        ]
    });
};
/* harmony default export */ const components_AboutUsSlider = (AboutUsSlider);

;// CONCATENATED MODULE: ./components/sections/AboutUs.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const AboutUs = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const { t } = hooks_useTranslate("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "about-us",
        className: style_default().dynamic([
            [
                "beaf6bd5df143eb0",
                [
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "margin-top: 900px;" : ""
                ]
            ]
        ]) + " " + "about-us",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: style_default().dynamic([
                    [
                        "beaf6bd5df143eb0",
                        [
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "margin-top: 900px;" : ""
                        ]
                    ]
                ]) + " " + "TitleStyle",
                children: t("aboutUs.title")
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: style_default().dynamic([
                    [
                        "beaf6bd5df143eb0",
                        [
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "margin-top: 900px;" : ""
                        ]
                    ]
                ]) + " " + "InfoTextStyle",
                children: t("aboutUs.description")
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_AboutUsSlider, {}),
            jsx_runtime.jsx((style_default()), {
                id: "beaf6bd5df143eb0",
                dynamic: [
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "margin-top: 900px;" : ""
                ],
                children: `.about-us.__jsx-style-dynamic-selector{width:100%;height:600px;padding:${isSmallLayout ? "30px" : "100px"};${isSmallLayout ? "margin-top: 900px;" : ""}
      }.TitleStyle.__jsx-style-dynamic-selector{color:#000;text-align:center;font-size:26px;font-style:normal;font-weight:700;line-height:40px}.InfoTextStyle.__jsx-style-dynamic-selector{color:rgba(79,79,79,1);text-align:center;font-size:12px;font-style:normal;font-weight:100;line-height:30px}`
            })
        ]
    });
};
/* harmony default export */ const sections_AboutUs = (AboutUs);

;// CONCATENATED MODULE: ./assets/teslaLogo.png
/* harmony default export */ const teslaLogo = ({"src":"https://cdn.mydomain.com/_next/static/media/teslaLogo.a610d23f.png","height":65,"width":296,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAN0lEQVR42mMAgecKaskvFNTynyuq8QLZGkC2NJAWA2JmmAKxFwrqkkAF/EC2AxBbArHKcwU1FgBdIxKX1xgS2AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./assets/BoschLogo.png
/* harmony default export */ const BoschLogo = ({"src":"https://cdn.mydomain.com/_next/static/media/BoschLogo.32ef3510.png","height":60,"width":191,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbElEQVR4nGPcu2dPKTM7u6iqrW2nlIMD+7/jx5mZfv78zsDAwP6fgeET464dO/4z8/AwaIWHr5B4+vTHP17eT4yfPzMDFTwFYiXG3bt2zQOaIKJub18lpaLC8+/Zs9+M376xMzIw/P3HwPALADxiJdaQwed3AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./assets/weltmeister.png
/* harmony default export */ const weltmeister = ({"src":"https://cdn.mydomain.com/_next/static/media/weltmeister.a34000b8.png","height":79,"width":150,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAV0lEQVR4nC3KMQqAQAxE0clWq4LgDWJj5QE8gge3trGysrUUtLJZf8DAg0wyluT6p8KAGhseWBSMpcAlTTCs2BGFnkNJhIwRLw7c8aDgLWHGiQYZFzosH/eeDah5CtgHAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./assets/JAC.png
/* harmony default export */ const JAC = ({"src":"https://cdn.mydomain.com/_next/static/media/JAC.ce084b8e.png","height":79,"width":150,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAATklEQVR42mPQ1tJkZAACIG0PxOFAHAHE9gwwgKRAH4idgNgeiE0YkIGWlgYrUNAZiKuAuBiIC4BYGtkUeSCOA2JPIA4G4mgglmRgYGAAAPZXEDProRL2AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./assets/ANKAI.png
/* harmony default export */ const ANKAI = ({"src":"https://cdn.mydomain.com/_next/static/media/ANKAI.b71b171a.png","height":79,"width":151,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdUlEQVR42mMAAWNJCRYZCYlQaQnxFCCOlpEQjzORkmQGYgYwUJGUkJCVlJgvLymxTk5SYiNQUZeupIQkEDMggLioDoOYiAGQNmaQEDcAYgYGQV5Ghue6BmzPdPSz3+sZFr7UNSh7pWuQ+kHPMA0olvdS14AFAHZPF2HipP21AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./assets/LEVC.png
/* harmony default export */ const LEVC = ({"src":"https://cdn.mydomain.com/_next/static/media/LEVC.f20e816f.png","height":75,"width":143,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAQklEQVR42i3BsRFAMAAAwD8TqHIGMIA5nBVMoHeHJdiACVSWkCZFBkqTf6DRCarF7bTZXR4zg88vyaJXD8HksBq1FEILCuzrowhQAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./components/sections/Agents.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const Agents = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const { t } = hooks_useTranslate("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "agents",
        className: style_default().dynamic([
            [
                "22f9a88baad16ed1",
                [
                    isSmallLayout ? "fit-content" : "352px",
                    isSmallLayout ? "center" : "space-between",
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "wrap" : "",
                    isSmallLayout ? "30px" : "",
                    isSmallLayout ? "100%" : "50%",
                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                    isSmallLayout ? "20px" : ""
                ]
            ]
        ]) + " " + "AgentsSectionStyle",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: style_default().dynamic([
                    [
                        "22f9a88baad16ed1",
                        [
                            isSmallLayout ? "fit-content" : "352px",
                            isSmallLayout ? "center" : "space-between",
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "wrap" : "",
                            isSmallLayout ? "30px" : "",
                            isSmallLayout ? "100%" : "50%",
                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                            isSmallLayout ? "20px" : ""
                        ]
                    ]
                ]) + " " + "AgentsTitleStyle",
                children: t("agents.title")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "22f9a88baad16ed1",
                        [
                            isSmallLayout ? "fit-content" : "352px",
                            isSmallLayout ? "center" : "space-between",
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "wrap" : "",
                            isSmallLayout ? "30px" : "",
                            isSmallLayout ? "100%" : "50%",
                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                            isSmallLayout ? "20px" : ""
                        ]
                    ]
                ]) + " " + "AgentsLogosStyle",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "22f9a88baad16ed1",
                                [
                                    isSmallLayout ? "fit-content" : "352px",
                                    isSmallLayout ? "center" : "space-between",
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "wrap" : "",
                                    isSmallLayout ? "30px" : "",
                                    isSmallLayout ? "100%" : "50%",
                                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                    isSmallLayout ? "20px" : ""
                                ]
                            ]
                        ]) + " " + "first-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "22f9a88baad16ed1",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "20px" : ""
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: teslaLogo,
                                    width: 200,
                                    alt: "Componey Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "22f9a88baad16ed1",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "20px" : ""
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: BoschLogo,
                                    width: 100,
                                    className: "componey-logo",
                                    alt: "Componey Logo"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "22f9a88baad16ed1",
                                [
                                    isSmallLayout ? "fit-content" : "352px",
                                    isSmallLayout ? "center" : "space-between",
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "wrap" : "",
                                    isSmallLayout ? "30px" : "",
                                    isSmallLayout ? "100%" : "50%",
                                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                    isSmallLayout ? "20px" : ""
                                ]
                            ]
                        ]) + " " + "second-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "22f9a88baad16ed1",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "20px" : ""
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: weltmeister,
                                    className: "componey-logo",
                                    alt: "Componey Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "22f9a88baad16ed1",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "20px" : ""
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: JAC,
                                    width: 100,
                                    className: "componey-logo",
                                    alt: "Componey Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "22f9a88baad16ed1",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "20px" : ""
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: ANKAI,
                                    width: 100,
                                    className: "componey-logo",
                                    alt: "Componey Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "22f9a88baad16ed1",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                                            isSmallLayout ? "20px" : ""
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: LEVC,
                                    width: 100,
                                    className: "componey-logo",
                                    alt: "Componey Logo"
                                })
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "22f9a88baad16ed1",
                dynamic: [
                    isSmallLayout ? "fit-content" : "352px",
                    isSmallLayout ? "center" : "space-between",
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "wrap" : "",
                    isSmallLayout ? "30px" : "",
                    isSmallLayout ? "100%" : "50%",
                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                    isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;",
                    isSmallLayout ? "20px" : ""
                ],
                children: `.AgentsSectionStyle.__jsx-style-dynamic-selector{background:#f4f7fe;height:${isSmallLayout ? "fit-content" : "352px"};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:${isSmallLayout ? "center" : "space-between"};-webkit-justify-content:${isSmallLayout ? "center" : "space-between"};-moz-box-pack:${isSmallLayout ? "center" : "space-between"};-ms-flex-pack:${isSmallLayout ? "center" : "space-between"};justify-content:${isSmallLayout ? "center" : "space-between"};-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:${isSmallLayout ? "30px" : "100px"};margin-bottom:70px;-webkit-flex-wrap:${isSmallLayout ? "wrap" : ""};-ms-flex-wrap:${isSmallLayout ? "wrap" : ""};flex-wrap:${isSmallLayout ? "wrap" : ""}}.AgentsTitleStyle.__jsx-style-dynamic-selector{color:#333;text-align:start;font-size:30px;font-style:normal;font-weight:400;line-height:45px;margin-bottom:${isSmallLayout ? "30px" : ""}}.AgentsLogosStyle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:${isSmallLayout ? "100%" : "50%"}}.first-row.__jsx-style-dynamic-selector{margin-bottom:50px;text-align:center;${isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;"}
        }.second-row.__jsx-style-dynamic-selector{text-align:center;${isSmallLayout ? "" : "display: flex; justify-content: space-between; align-items: center;"}
        }.componey-logo.__jsx-style-dynamic-selector{margin:${isSmallLayout ? "20px" : ""}}`
            })
        ]
    });
};
/* harmony default export */ const sections_Agents = (Agents);

;// CONCATENATED MODULE: ./assets/לוגו.png
/* harmony default export */ const _ = ({"src":"https://cdn.mydomain.com/_next/static/media/לוגו.166f558b.png","height":51,"width":172,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGMMYWBg+M/AoMjIwCDAwMzAxc7D8MZIg43LzJUtVVWd5TljMAODP1CNAFABJ5DmB+IHfKKMCfLKzD+1fnNEAQAgEQoP2UwXVwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./assets/ThePhoenixHoldings.png
/* harmony default export */ const ThePhoenixHoldings = ({"src":"https://cdn.mydomain.com/_next/static/media/ThePhoenixHoldings.15ad6048.png","height":56,"width":123,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAbElEQVR42mNgMOwy7U3ILfjezRD+uk2u+nWbvA0DwznG6IAqJjefWiYGEBB2bWy812B+4v9aBhEGbKAissTlZLlvK4PEBDMLz3oPBpcmEPYC0zBwt8FCh9m1MY7RtTGeyaXRkcGlMYjBpdEdAC+CIQ48lpftAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./assets/Migdal.png
/* harmony default export */ const Migdal = ({"src":"https://cdn.mydomain.com/_next/static/media/Migdal.2587901e.png","height":79,"width":37,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAZUlEQVR42mPQUc9m0dHImgvEc7Q0MpkZQADImQ3EM2EcSZgKHc0sCQYdzewAIJ6sq5k1GUj7MuhqZMkA8QwolgJqyQ4A4q1AvA2IA0ECtUCluUA6HYiTQQLFOhpZhUDl/ToaWXMAtiYjMEW7CmkAAAAASUVORK5CYII=","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/trustInsurance.png
/* harmony default export */ const trustInsurance = ({"src":"https://cdn.mydomain.com/_next/static/media/trustInsurance.07d8f674.png","height":97,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA10lEQVR42mOYoiTFBMQM3TKSziv1ZNrW6Mu09ctLeQAxwyw1aSaGuz7yTEDMcM1dwedpqML8Z2EKC256KQQCMcMDP3kmhq81MsxAzPC9RNr1x0TRZT+niCz7XinlBcQMXxukmRn+T2dgBGKGLx2iqv83MYT93cIU+a1PUB2IGf7NZmBkYACChKhIafvQWD8Gu0Q3BulULcvgWPf4qEh5IGYAg+CIaL7YyCib5JhI75TYSIfYqCjb4PBoPiBmAIPIiFiGiIhoASCWBmK5iMhofiBmiImJYwAAxD9Ic28O+zgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./assets/pepsi.png
/* harmony default export */ const pepsi = ({"src":"https://cdn.mydomain.com/_next/static/media/pepsi.199fe374.png","height":79,"width":158,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfUlEQVR42mP4/4SBkYGBgeH2dkud3+d5H/y/ynD+/z8GAQYGBoaHu02YGCCggntWe4TFseXubXd3WDy4tMGhgoGBgeH/f4hmBufAdF4GhmJBBobJQFyvzaCRE2jgmaHAAAe2WUqyzpmuDv4ZrhHRKboabhlKDDZZ4gwMDAwAy0AjNQpxBHoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./assets/PalestineInsurance.png
/* harmony default export */ const PalestineInsurance = ({"src":"https://cdn.mydomain.com/_next/static/media/PalestineInsurance.c8d09587.png","height":66,"width":265,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGPMyS3gZ2BgYAHiH4K8TKzNbXd/Xj9mL8nK8Lb757cXe0EKbICSPED8g4mRgePn738/bAwE7/z+/sX8wUtOKwDRMRlhl0luYAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./assets/AlTakafulInsurance.png
/* harmony default export */ const AlTakafulInsurance = ({"src":"https://cdn.mydomain.com/_next/static/media/AlTakafulInsurance.496ef849.png","height":69,"width":219,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAX0lEQVR4nGNktfZkAAI+IGb4Ly3/X3jVjK8v5+4wZGBmTgcKHQAp0AEyJIH4HwM7Bz/TvvW3f87b6QhUsJ3h379QkAKQJDMDA+M/Bl5eVpYdK99+X7hHheHf/2ygmfsB57wdP2fPkdUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./assets/nationalInsuranceComponey.png
/* harmony default export */ const nationalInsuranceComponey = ({"src":"https://cdn.mydomain.com/_next/static/media/nationalInsuranceComponey.ee459ebd.png","height":81,"width":137,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmUlEQVR42mMw70piYgAC6SmJhgwzE/wZZiQEqE1MNAKJ6fVB5BhygtNYY7NTMzIj0gLT4tJiY3JTg0Hi/lXJjAwgEJOdypOakKYZVJ6SFJeVGpMan2bBAANFzum8pXYZ3KWW6byaExJNQkpShIpc0gXyfdIFCjzS+RksO5NcLTqTPOxbk53tW5PsrduTPGzak6yB4p5WHUnuAPeOK6R2YNC8AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/sections/Certified.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












const Certified = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const { t } = hooks_useTranslate("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "certified",
        className: style_default().dynamic([
            [
                "56a14344416e9099",
                [
                    isSmallLayout ? "fit-content" : "352px",
                    isSmallLayout ? "center" : "space-between",
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "wrap" : " ",
                    isSmallLayout ? "30px" : "",
                    isSmallLayout ? "100%" : "70%",
                    isSmallLayout ? "100%" : "80%",
                    isSmallLayout ? "wrap" : "",
                    isSmallLayout ? "20px" : "0"
                ]
            ]
        ]) + " " + "CertifiedSectionStyle",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: style_default().dynamic([
                    [
                        "56a14344416e9099",
                        [
                            isSmallLayout ? "fit-content" : "352px",
                            isSmallLayout ? "center" : "space-between",
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "wrap" : " ",
                            isSmallLayout ? "30px" : "",
                            isSmallLayout ? "100%" : "70%",
                            isSmallLayout ? "100%" : "80%",
                            isSmallLayout ? "wrap" : "",
                            isSmallLayout ? "20px" : "0"
                        ]
                    ]
                ]) + " " + "CertifiedTitleStyle",
                children: t("certified.title")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "56a14344416e9099",
                        [
                            isSmallLayout ? "fit-content" : "352px",
                            isSmallLayout ? "center" : "space-between",
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "wrap" : " ",
                            isSmallLayout ? "30px" : "",
                            isSmallLayout ? "100%" : "70%",
                            isSmallLayout ? "100%" : "80%",
                            isSmallLayout ? "wrap" : "",
                            isSmallLayout ? "20px" : "0"
                        ]
                    ]
                ]) + " " + "CertifiedLogosStyle",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "56a14344416e9099",
                                [
                                    isSmallLayout ? "fit-content" : "352px",
                                    isSmallLayout ? "center" : "space-between",
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "wrap" : " ",
                                    isSmallLayout ? "30px" : "",
                                    isSmallLayout ? "100%" : "70%",
                                    isSmallLayout ? "100%" : "80%",
                                    isSmallLayout ? "wrap" : "",
                                    isSmallLayout ? "20px" : "0"
                                ]
                            ]
                        ]) + " " + "first-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: _,
                                    alt: "Componey Logo",
                                    className: "logo-style",
                                    width: 100
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: ThePhoenixHoldings,
                                    alt: "Componey Logo",
                                    className: "logo-style",
                                    width: 100
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: Migdal,
                                    alt: "Componey Logo",
                                    className: "logo-style",
                                    height: 100
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "56a14344416e9099",
                                [
                                    isSmallLayout ? "fit-content" : "352px",
                                    isSmallLayout ? "center" : "space-between",
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "wrap" : " ",
                                    isSmallLayout ? "30px" : "",
                                    isSmallLayout ? "100%" : "70%",
                                    isSmallLayout ? "100%" : "80%",
                                    isSmallLayout ? "wrap" : "",
                                    isSmallLayout ? "20px" : "0"
                                ]
                            ]
                        ]) + " " + "second-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: trustInsurance,
                                    alt: "Componey Logo",
                                    className: "logo-style",
                                    width: 100
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: pepsi,
                                    alt: "Componey Logo",
                                    className: "logo-style",
                                    width: 120
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: PalestineInsurance,
                                    alt: "Componey Logo",
                                    className: "logo-style",
                                    width: 120
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: AlTakafulInsurance,
                                    alt: "Componey Logo",
                                    className: "logo-style",
                                    width: 120
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "56a14344416e9099",
                                        [
                                            isSmallLayout ? "fit-content" : "352px",
                                            isSmallLayout ? "center" : "space-between",
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "wrap" : " ",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "100%" : "70%",
                                            isSmallLayout ? "100%" : "80%",
                                            isSmallLayout ? "wrap" : "",
                                            isSmallLayout ? "20px" : "0"
                                        ]
                                    ]
                                ]) + " " + "componey-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: nationalInsuranceComponey,
                                    alt: "Componey Logo",
                                    width: 120
                                })
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "56a14344416e9099",
                dynamic: [
                    isSmallLayout ? "fit-content" : "352px",
                    isSmallLayout ? "center" : "space-between",
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "wrap" : " ",
                    isSmallLayout ? "30px" : "",
                    isSmallLayout ? "100%" : "70%",
                    isSmallLayout ? "100%" : "80%",
                    isSmallLayout ? "wrap" : "",
                    isSmallLayout ? "20px" : "0"
                ],
                children: `.CertifiedSectionStyle.__jsx-style-dynamic-selector{background:#f4f7fe;height:${isSmallLayout ? "fit-content" : "352px"};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:${isSmallLayout ? "center" : "space-between"};-webkit-justify-content:${isSmallLayout ? "center" : "space-between"};-moz-box-pack:${isSmallLayout ? "center" : "space-between"};-ms-flex-pack:${isSmallLayout ? "center" : "space-between"};justify-content:${isSmallLayout ? "center" : "space-between"};-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:${isSmallLayout ? "30px" : "100px"};margin-bottom:70px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.first-row.__jsx-style-dynamic-selector{margin-bottom:50px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:40%;-webkit-flex-wrap:${isSmallLayout ? "wrap" : " "};-ms-flex-wrap:${isSmallLayout ? "wrap" : " "};flex-wrap:${isSmallLayout ? "wrap" : " "}}.CertifiedTitleStyle.__jsx-style-dynamic-selector{color:#333;text-align:right;font-size:30px;font-style:normal;font-weight:400;line-height:45px;margin-bottom:${isSmallLayout ? "30px" : ""}}.CertifiedLogosStyle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:${isSmallLayout ? "100%" : "70%"}}.second-row.__jsx-style-dynamic-selector{text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:${isSmallLayout ? "100%" : "80%"};-webkit-flex-wrap:${isSmallLayout ? "wrap" : ""};-ms-flex-wrap:${isSmallLayout ? "wrap" : ""};flex-wrap:${isSmallLayout ? "wrap" : ""}}.componey-logo.__jsx-style-dynamic-selector{margin:${isSmallLayout ? "20px" : "0"}}`
            })
        ]
    });
};
/* harmony default export */ const sections_Certified = (Certified);

;// CONCATENATED MODULE: ./assets/contactUsBackground.png
/* harmony default export */ const contactUsBackground = ({"src":"https://cdn.mydomain.com/_next/static/media/contactUsBackground.8e420740.png","height":972,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEAgMAAADOo5ZjAAAADFBMVEU4NDQ3MzM2MjI1MTHgPTR1AAAAFElEQVR42mN4586wU57hSx7Dxd8AHMYFPJ+0p8UAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./pages/api/search.ts
const baseURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit= 5&q=";
const search = async (carNumber)=>{
    try {
        const response = await fetch(`${baseURL}${carNumber}`);
        const data = await response.json();
        const { result } = data;
        const { records } = result;
        const { kinuy_mishari, shnat_yitzur, tozeret_nm } = records[0];
        return {
            carNumber,
            kinuy_mishari,
            shnat_yitzur,
            tozeret_nm
        };
    } catch (error) {
        console.log(error);
    }
};

;// CONCATENATED MODULE: external "react-bootstrap/Row"
const Row_namespaceObject = require("react-bootstrap/Row");
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Toast"
const Toast_namespaceObject = require("react-bootstrap/Toast");
var Toast_default = /*#__PURE__*/__webpack_require__.n(Toast_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/ToastContainer"
const ToastContainer_namespaceObject = require("react-bootstrap/ToastContainer");
var ToastContainer_default = /*#__PURE__*/__webpack_require__.n(ToastContainer_namespaceObject);
;// CONCATENATED MODULE: ./components/Toast.jsx
/* eslint-disable @next/next/no-img-element */ 




function Toasts({ title, body, color, bodyColor }) {
    const [showA, setShowA] = (0,external_react_.useState)(true);
    const toggleShowA = ()=>setShowA(!showA);
    return /*#__PURE__*/ jsx_runtime.jsx((Row_default()), {
        children: /*#__PURE__*/ jsx_runtime.jsx((ToastContainer_default()), {
            md: 6,
            bg: bodyColor.toLowerCase(),
            className: "mb-2",
            position: "top-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Toast_default()), {
                show: showA,
                onClose: toggleShowA,
                className: "m-2 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Toast_default()).Header, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "holder.js/20x20?text=%20",
                                className: "rounded me-2",
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                className: "me-auto w-100",
                                style: {
                                    color
                                },
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Toast_default()).Body, {
                        children: body
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Toast = (Toasts);

;// CONCATENATED MODULE: ./components/sections/ContactUs.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const ContactUs = ()=>{
    const [carNumber, setCarNumber] = (0,external_react_.useState)("");
    const [showToasts, setShowToasts] = (0,external_react_.useState)(false);
    const [carDetails, setCarDetails] = (0,external_react_.useState)({});
    const submitSearch = async ()=>{
        try {
            setShowToasts(false);
            const data = await search(carNumber);
            if (data) {
                setCarDetails(data);
            } else {
                setCarDetails({});
                setShowToasts(true);
            }
        } catch (error) {
            setShowToasts(true);
        }
    };
    const { t } = hooks_useTranslate("home");
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "contact-us",
        className: style_default().dynamic([
            [
                "ad9bdf511e62d88",
                [
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "100%" : "50%",
                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                    isSmallLayout ? "100%" : "50%",
                    carDetails.carNumber ? "" : "100px",
                    isSmallLayout ? "100%" : "50%",
                    isSmallLayout ? "100%" : "100%"
                ]
            ]
        ]) + " " + "contact-us",
        children: [
            showToasts && /*#__PURE__*/ jsx_runtime.jsx(Toast, {
                title: "Error",
                color: "#000",
                bodyColor: "red",
                body: "Car Not Found"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: style_default().dynamic([
                    [
                        "ad9bdf511e62d88",
                        [
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "100%" : "50%",
                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                            isSmallLayout ? "100%" : "50%",
                            carDetails.carNumber ? "" : "100px",
                            isSmallLayout ? "100%" : "50%",
                            isSmallLayout ? "100%" : "100%"
                        ]
                    ]
                ]) + " " + "image-container",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: contactUsBackground,
                    alt: "background",
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    className: "contactUs-background"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "ad9bdf511e62d88",
                        [
                            isSmallLayout ? "30px" : "100px",
                            isSmallLayout ? "100%" : "50%",
                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                            isSmallLayout ? "100%" : "50%",
                            carDetails.carNumber ? "" : "100px",
                            isSmallLayout ? "100%" : "50%",
                            isSmallLayout ? "100%" : "100%"
                        ]
                    ]
                ]) + " " + "contact-us-form",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: style_default().dynamic([
                            [
                                "ad9bdf511e62d88",
                                [
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                    isSmallLayout ? "100%" : "50%",
                                    carDetails.carNumber ? "" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    isSmallLayout ? "100%" : "100%"
                                ]
                            ]
                        ]) + " " + "TitleStyle",
                        children: t("contactUs.title")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: style_default().dynamic([
                            [
                                "ad9bdf511e62d88",
                                [
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                    isSmallLayout ? "100%" : "50%",
                                    carDetails.carNumber ? "" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    isSmallLayout ? "100%" : "100%"
                                ]
                            ]
                        ]) + " " + "InfoTextStyle",
                        children: t("contactUs.description")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "ad9bdf511e62d88",
                                [
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                    isSmallLayout ? "100%" : "50%",
                                    carDetails.carNumber ? "" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    isSmallLayout ? "100%" : "100%"
                                ]
                            ]
                        ]) + " " + "car-num-button",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: style_default().dynamic([
                                    [
                                        "ad9bdf511e62d88",
                                        [
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                            isSmallLayout ? "100%" : "50%",
                                            carDetails.carNumber ? "" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "100%" : "100%"
                                        ]
                                    ]
                                ]) + " " + "car-number-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        htmlFor: "car-number",
                                        className: style_default().dynamic([
                                            [
                                                "ad9bdf511e62d88",
                                                [
                                                    isSmallLayout ? "30px" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                    isSmallLayout ? "100%" : "50%",
                                                    carDetails.carNumber ? "" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    isSmallLayout ? "100%" : "100%"
                                                ]
                                            ]
                                        ]),
                                        children: t("contactUs.searchlabel")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "tel",
                                        id: "car-number",
                                        name: "car-number",
                                        value: carNumber,
                                        onChange: (e)=>setCarNumber(e.target.value),
                                        placeholder: t("contactUs.searchPlaceholder"),
                                        className: style_default().dynamic([
                                            [
                                                "ad9bdf511e62d88",
                                                [
                                                    isSmallLayout ? "30px" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                    isSmallLayout ? "100%" : "50%",
                                                    carDetails.carNumber ? "" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    isSmallLayout ? "100%" : "100%"
                                                ]
                                            ]
                                        ]) + " " + "gray-input car-number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: submitSearch,
                                disabled: carNumber === "",
                                className: style_default().dynamic([
                                    [
                                        "ad9bdf511e62d88",
                                        [
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                            isSmallLayout ? "100%" : "50%",
                                            carDetails.carNumber ? "" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "100%" : "100%"
                                        ]
                                    ]
                                ]) + " " + "search-btn",
                                children: t("contactUs.searchBtn")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "ad9bdf511e62d88",
                                [
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                    isSmallLayout ? "100%" : "50%",
                                    carDetails.carNumber ? "" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    isSmallLayout ? "100%" : "100%"
                                ]
                            ]
                        ]) + " " + "write-container",
                        children: [
                            carDetails.carNumber && carNumber && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: style_default().dynamic([
                                    [
                                        "ad9bdf511e62d88",
                                        [
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                            isSmallLayout ? "100%" : "50%",
                                            carDetails.carNumber ? "" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "100%" : "100%"
                                        ]
                                    ]
                                ]) + " " + "result-car-details",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: style_default().dynamic([
                                            [
                                                "ad9bdf511e62d88",
                                                [
                                                    isSmallLayout ? "30px" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                    isSmallLayout ? "100%" : "50%",
                                                    carDetails.carNumber ? "" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    isSmallLayout ? "100%" : "100%"
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]) + " " + "detaile-title",
                                                children: t("contactUs.carNumber")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]),
                                                children: carDetails.carNumber
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: style_default().dynamic([
                                            [
                                                "ad9bdf511e62d88",
                                                [
                                                    isSmallLayout ? "30px" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                    isSmallLayout ? "100%" : "50%",
                                                    carDetails.carNumber ? "" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    isSmallLayout ? "100%" : "100%"
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]) + " " + "detaile-title",
                                                children: t("contactUs.carName")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]),
                                                children: carDetails.kinuy_mishari
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: style_default().dynamic([
                                            [
                                                "ad9bdf511e62d88",
                                                [
                                                    isSmallLayout ? "30px" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                    isSmallLayout ? "100%" : "50%",
                                                    carDetails.carNumber ? "" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    isSmallLayout ? "100%" : "100%"
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]) + " " + "detaile-title",
                                                children: t("contactUs.tradeName")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]),
                                                children: carDetails.shnat_yitzur
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: style_default().dynamic([
                                            [
                                                "ad9bdf511e62d88",
                                                [
                                                    isSmallLayout ? "30px" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                    isSmallLayout ? "100%" : "50%",
                                                    carDetails.carNumber ? "" : "100px",
                                                    isSmallLayout ? "100%" : "50%",
                                                    isSmallLayout ? "100%" : "100%"
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]) + " " + "detaile-title",
                                                children: t("contactUs.carModal")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: style_default().dynamic([
                                                    [
                                                        "ad9bdf511e62d88",
                                                        [
                                                            isSmallLayout ? "30px" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                                            isSmallLayout ? "100%" : "50%",
                                                            carDetails.carNumber ? "" : "100px",
                                                            isSmallLayout ? "100%" : "50%",
                                                            isSmallLayout ? "100%" : "100%"
                                                        ]
                                                    ]
                                                ]),
                                                children: carDetails.tozeret_nm
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                style: {
                                    marginTop: "30px"
                                },
                                htmlFor: "write",
                                className: style_default().dynamic([
                                    [
                                        "ad9bdf511e62d88",
                                        [
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                            isSmallLayout ? "100%" : "50%",
                                            carDetails.carNumber ? "" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "100%" : "100%"
                                        ]
                                    ]
                                ]),
                                children: t("contactUs.writeLabel")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                id: "write",
                                name: "write",
                                placeholder: t("contactUs.writePlaceholder"),
                                style: {
                                    width: "100%"
                                },
                                className: style_default().dynamic([
                                    [
                                        "ad9bdf511e62d88",
                                        [
                                            isSmallLayout ? "30px" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            locale === "ar" ? "left: 3px;" : "right: 3px;",
                                            isSmallLayout ? "100%" : "50%",
                                            carDetails.carNumber ? "" : "100px",
                                            isSmallLayout ? "100%" : "50%",
                                            isSmallLayout ? "100%" : "100%"
                                        ]
                                    ]
                                ]) + " " + "gray-input write"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: style_default().dynamic([
                            [
                                "ad9bdf511e62d88",
                                [
                                    isSmallLayout ? "30px" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                                    isSmallLayout ? "100%" : "50%",
                                    carDetails.carNumber ? "" : "100px",
                                    isSmallLayout ? "100%" : "50%",
                                    isSmallLayout ? "100%" : "100%"
                                ]
                            ]
                        ]) + " " + "send-btn",
                        children: t("contactUs.sendBtn")
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "ad9bdf511e62d88",
                dynamic: [
                    isSmallLayout ? "30px" : "100px",
                    isSmallLayout ? "100%" : "50%",
                    locale === "ar" ? "left: 3px;" : "right: 3px;",
                    isSmallLayout ? "100%" : "50%",
                    carDetails.carNumber ? "" : "100px",
                    isSmallLayout ? "100%" : "50%",
                    isSmallLayout ? "100%" : "100%"
                ],
                children: `.contact-us.__jsx-style-dynamic-selector{width:100%;height:720px;position:relative;margin-top:120px}.image-container.__jsx-style-dynamic-selector{width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.contact-us-form.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:${isSmallLayout ? "30px" : "100px"}}.TitleStyle.__jsx-style-dynamic-selector{color:#fff;text-align:center;font-size:26px;font-style:normal;font-weight:700;line-height:40px}.InfoTextStyle.__jsx-style-dynamic-selector{color:rgba(242,242,242,1);text-align:center;font-size:12px;font-style:normal;font-weight:100;line-height:30px;margin-bottom:30px}label.__jsx-style-dynamic-selector{color:rgba(242,242,242,1);font-size:12px;text-align:start;margin-bottom:10px}.gray-input.__jsx-style-dynamic-selector{border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background-color:rgba(94,91,91,1);color:#fff;padding:0 22px;width:100%}.car-num-button.__jsx-style-dynamic-selector{width:${isSmallLayout ? "100%" : "50%"};text-align:start;position:relative}.car-number-container.__jsx-style-dynamic-selector{width:100%;position:absolute;top:0;left:0;z-index:1}.search-btn.__jsx-style-dynamic-selector{position:absolute;top:34px;${locale === "ar" ? "left: 3px;" : "right: 3px;"}
          z-index: 1;height:41px;width:120px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:1px solid rgba(255,255,255,1);background-color:rgba(126,124,124,1);color:rgba(255,255,255,1);font-size:14px}.search-btn.__jsx-style-dynamic-selector:disabled,.search-btn[disabled].__jsx-style-dynamic-selector{color:#fff}.car-number.__jsx-style-dynamic-selector{height:45px}.write-container.__jsx-style-dynamic-selector{width:${isSmallLayout ? "100%" : "50%"};margin-top:72px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:${carDetails.carNumber ? "" : "100px"}}.write.__jsx-style-dynamic-selector{height:200px;padding:10px 22px}.send-btn.__jsx-style-dynamic-selector{width:${isSmallLayout ? "100%" : "50%"};height:45px;margin-top:20px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:none;background-color:rgba(191,33,50,1);color:rgba(255,255,255,1);font-size:14px}.result-car-details.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-bottom-right-radius:8px;-moz-border-radius-bottomright:8px;border-bottom-right-radius:8px;-webkit-border-bottom-left-radius:8px;-moz-border-radius-bottomleft:8px;border-bottom-left-radius:8px;background-color:rgba(94,91,91,1);width:${isSmallLayout ? "100%" : "100%"};color:#fff;padding:10px 22px;margin-bottom:50px}.result-car-details.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:14px;margin:5px}.detaile-title.__jsx-style-dynamic-selector{color:rgba(189,189,189,1)}`
            })
        ]
    });
};
/* harmony default export */ const sections_ContactUs = (ContactUs);

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./assets/logo.png
/* harmony default export */ const logo = ({"src":"https://cdn.mydomain.com/_next/static/media/logo.1b2f3c76.png","height":51,"width":157,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZ0lEQVR4nGM819hyiltO1vjDixfTzCvLJ1lraYsdv3HjGwME/Ge8MW/BHR4ZGeV3jx4t1EtJmmuhqyd66urVH0BJNiBmZdzDJLPk/7/X2v8YeBa6i3xY7vKGkXk/0//f/xkYOIEKmADv8Sa+mmTXiQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/sections/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Footer = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const { t } = hooks_useTranslate("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: style_default().dynamic([
            [
                "4d71c4dc966b0e9d",
                [
                    isSmallLayout ? "fit-content" : "450px",
                    isSmallLayout ? "fit-content" : "410px",
                    isSmallLayout ? "30px" : "55px 100px",
                    isSmallLayout ? "flex-wrap: wrap" : "",
                    isSmallLayout ? "100%" : "31%",
                    isSmallLayout ? "20px" : "100px",
                    isSmallLayout ? "20px" : "",
                    isSmallLayout ? "20px" : "100px",
                    isSmallLayout ? "" : "15%",
                    isSmallLayout ? "20px" : "",
                    isSmallLayout ? "20px" : "100px",
                    isSmallLayout ? "" : "15%",
                    isSmallLayout ? "20px" : "",
                    isSmallLayout ? "20px" : "100px"
                ]
            ]
        ]) + " " + "footer-style",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "4d71c4dc966b0e9d",
                        [
                            isSmallLayout ? "fit-content" : "450px",
                            isSmallLayout ? "fit-content" : "410px",
                            isSmallLayout ? "30px" : "55px 100px",
                            isSmallLayout ? "flex-wrap: wrap" : "",
                            isSmallLayout ? "100%" : "31%",
                            isSmallLayout ? "20px" : "100px",
                            isSmallLayout ? "20px" : "",
                            isSmallLayout ? "20px" : "100px",
                            isSmallLayout ? "" : "15%",
                            isSmallLayout ? "20px" : "",
                            isSmallLayout ? "20px" : "100px",
                            isSmallLayout ? "" : "15%",
                            isSmallLayout ? "20px" : "",
                            isSmallLayout ? "20px" : "100px"
                        ]
                    ]
                ]) + " " + "footer-body",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "4d71c4dc966b0e9d",
                                [
                                    isSmallLayout ? "fit-content" : "450px",
                                    isSmallLayout ? "fit-content" : "410px",
                                    isSmallLayout ? "30px" : "55px 100px",
                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                    isSmallLayout ? "100%" : "31%",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px"
                                ]
                            ]
                        ]) + " " + "part-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: logo,
                                alt: "logo",
                                width: 150
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]),
                                children: t("footer.description")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "4d71c4dc966b0e9d",
                                [
                                    isSmallLayout ? "fit-content" : "450px",
                                    isSmallLayout ? "fit-content" : "410px",
                                    isSmallLayout ? "30px" : "55px 100px",
                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                    isSmallLayout ? "100%" : "31%",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px"
                                ]
                            ]
                        ]) + " " + "part-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "contact-info-title",
                                children: t("footer.services.title")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "p",
                                children: t("footer.services.text1")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "p",
                                children: t("footer.services.text2")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "p",
                                children: t("footer.services.text3")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "p",
                                children: t("footer.services.text4")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "p",
                                children: t("footer.services.text5")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "4d71c4dc966b0e9d",
                                [
                                    isSmallLayout ? "fit-content" : "450px",
                                    isSmallLayout ? "fit-content" : "410px",
                                    isSmallLayout ? "30px" : "55px 100px",
                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                    isSmallLayout ? "100%" : "31%",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px"
                                ]
                            ]
                        ]) + " " + "part-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]),
                                children: t("footer.contactUs.title")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "contact-info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "contact-info-title",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(hi_namespaceObject.HiOutlineLocationMarker, {}),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: style_default().dynamic([
                                                    [
                                                        "4d71c4dc966b0e9d",
                                                        [
                                                            isSmallLayout ? "fit-content" : "450px",
                                                            isSmallLayout ? "fit-content" : "410px",
                                                            isSmallLayout ? "30px" : "55px 100px",
                                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                                            isSmallLayout ? "100%" : "31%",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px"
                                                        ]
                                                    ]
                                                ]),
                                                children: t("footer.contactUs.subTitle1")
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "p-content",
                                        children: t("footer.contactUs.text1")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "contact-info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "contact-info-title",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(hi_namespaceObject.HiOutlineLocationMarker, {}),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: style_default().dynamic([
                                                    [
                                                        "4d71c4dc966b0e9d",
                                                        [
                                                            isSmallLayout ? "fit-content" : "450px",
                                                            isSmallLayout ? "fit-content" : "410px",
                                                            isSmallLayout ? "30px" : "55px 100px",
                                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                                            isSmallLayout ? "100%" : "31%",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px"
                                                        ]
                                                    ]
                                                ]),
                                                children: t("footer.contactUs.subTitle2")
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "p-content",
                                        children: t("footer.contactUs.text2")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "contact-info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "contact-info-title",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(hi_namespaceObject.HiOutlineLocationMarker, {}),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: style_default().dynamic([
                                                    [
                                                        "4d71c4dc966b0e9d",
                                                        [
                                                            isSmallLayout ? "fit-content" : "450px",
                                                            isSmallLayout ? "fit-content" : "410px",
                                                            isSmallLayout ? "30px" : "55px 100px",
                                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                                            isSmallLayout ? "100%" : "31%",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px"
                                                        ]
                                                    ]
                                                ]),
                                                children: t("footer.contactUs.subTitle3")
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "p-content",
                                        children: t("footer.contactUs.text3")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "4d71c4dc966b0e9d",
                                [
                                    isSmallLayout ? "fit-content" : "450px",
                                    isSmallLayout ? "fit-content" : "410px",
                                    isSmallLayout ? "30px" : "55px 100px",
                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                    isSmallLayout ? "100%" : "31%",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px",
                                    isSmallLayout ? "" : "15%",
                                    isSmallLayout ? "20px" : "",
                                    isSmallLayout ? "20px" : "100px"
                                ]
                            ]
                        ]) + " " + "part-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "contact-info-title",
                                children: t("footer.timeOfwork.title")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: style_default().dynamic([
                                    [
                                        "4d71c4dc966b0e9d",
                                        [
                                            isSmallLayout ? "fit-content" : "450px",
                                            isSmallLayout ? "fit-content" : "410px",
                                            isSmallLayout ? "30px" : "55px 100px",
                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                            isSmallLayout ? "100%" : "31%",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px",
                                            isSmallLayout ? "" : "15%",
                                            isSmallLayout ? "20px" : "",
                                            isSmallLayout ? "20px" : "100px"
                                        ]
                                    ]
                                ]) + " " + "contact-info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "contact-info-title",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(ai_namespaceObject.AiOutlineClockCircle, {}),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: style_default().dynamic([
                                                    [
                                                        "4d71c4dc966b0e9d",
                                                        [
                                                            isSmallLayout ? "fit-content" : "450px",
                                                            isSmallLayout ? "fit-content" : "410px",
                                                            isSmallLayout ? "30px" : "55px 100px",
                                                            isSmallLayout ? "flex-wrap: wrap" : "",
                                                            isSmallLayout ? "100%" : "31%",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px",
                                                            isSmallLayout ? "" : "15%",
                                                            isSmallLayout ? "20px" : "",
                                                            isSmallLayout ? "20px" : "100px"
                                                        ]
                                                    ]
                                                ]),
                                                children: t("footer.timeOfwork.subTitle")
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: style_default().dynamic([
                                            [
                                                "4d71c4dc966b0e9d",
                                                [
                                                    isSmallLayout ? "fit-content" : "450px",
                                                    isSmallLayout ? "fit-content" : "410px",
                                                    isSmallLayout ? "30px" : "55px 100px",
                                                    isSmallLayout ? "flex-wrap: wrap" : "",
                                                    isSmallLayout ? "100%" : "31%",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px",
                                                    isSmallLayout ? "" : "15%",
                                                    isSmallLayout ? "20px" : "",
                                                    isSmallLayout ? "20px" : "100px"
                                                ]
                                            ]
                                        ]) + " " + "p-content",
                                        children: t("footer.timeOfwork.text")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: style_default().dynamic([
                    [
                        "4d71c4dc966b0e9d",
                        [
                            isSmallLayout ? "fit-content" : "450px",
                            isSmallLayout ? "fit-content" : "410px",
                            isSmallLayout ? "30px" : "55px 100px",
                            isSmallLayout ? "flex-wrap: wrap" : "",
                            isSmallLayout ? "100%" : "31%",
                            isSmallLayout ? "20px" : "100px",
                            isSmallLayout ? "20px" : "",
                            isSmallLayout ? "20px" : "100px",
                            isSmallLayout ? "" : "15%",
                            isSmallLayout ? "20px" : "",
                            isSmallLayout ? "20px" : "100px",
                            isSmallLayout ? "" : "15%",
                            isSmallLayout ? "20px" : "",
                            isSmallLayout ? "20px" : "100px"
                        ]
                    ]
                ]) + " " + "footer-c",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    className: style_default().dynamic([
                        [
                            "4d71c4dc966b0e9d",
                            [
                                isSmallLayout ? "fit-content" : "450px",
                                isSmallLayout ? "fit-content" : "410px",
                                isSmallLayout ? "30px" : "55px 100px",
                                isSmallLayout ? "flex-wrap: wrap" : "",
                                isSmallLayout ? "100%" : "31%",
                                isSmallLayout ? "20px" : "100px",
                                isSmallLayout ? "20px" : "",
                                isSmallLayout ? "20px" : "100px",
                                isSmallLayout ? "" : "15%",
                                isSmallLayout ? "20px" : "",
                                isSmallLayout ? "20px" : "100px",
                                isSmallLayout ? "" : "15%",
                                isSmallLayout ? "20px" : "",
                                isSmallLayout ? "20px" : "100px"
                            ]
                        ]
                    ]),
                    children: [
                        t("footer.copyright.title1"),
                        /*#__PURE__*/ jsx_runtime.jsx(fa_namespaceObject.FaRegCopyright, {}),
                        " ",
                        t("footer.copyright.title2")
                    ]
                })
            }),
            jsx_runtime.jsx((style_default()), {
                id: "4d71c4dc966b0e9d",
                dynamic: [
                    isSmallLayout ? "fit-content" : "450px",
                    isSmallLayout ? "fit-content" : "410px",
                    isSmallLayout ? "30px" : "55px 100px",
                    isSmallLayout ? "flex-wrap: wrap" : "",
                    isSmallLayout ? "100%" : "31%",
                    isSmallLayout ? "20px" : "100px",
                    isSmallLayout ? "20px" : "",
                    isSmallLayout ? "20px" : "100px",
                    isSmallLayout ? "" : "15%",
                    isSmallLayout ? "20px" : "",
                    isSmallLayout ? "20px" : "100px",
                    isSmallLayout ? "" : "15%",
                    isSmallLayout ? "20px" : "",
                    isSmallLayout ? "20px" : "100px"
                ],
                children: `.footer-style.__jsx-style-dynamic-selector{width:100%;height:${isSmallLayout ? "fit-content" : "450px"}}.footer-body.__jsx-style-dynamic-selector{background-color:rgba(244,247,254,1);height:${isSmallLayout ? "fit-content" : "410px"};padding:${isSmallLayout ? "30px" : "55px 100px"};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;${isSmallLayout ? "flex-wrap: wrap" : ""}
        }.footer-c.__jsx-style-dynamic-selector{width:100%;height:40px;background-color:rgba(191,33,50,1);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.footer-c.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#fff;padding:0;margin:0;font-size:14px}.part-1.__jsx-style-dynamic-selector{text-align:start;width:${isSmallLayout ? "100%" : "31%"};margin-left:${isSmallLayout ? "20px" : "100px"};margin-bottom:${isSmallLayout ? "20px" : ""}}.part-1.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin-top:28px;line-height:30px;font-size:14px;color:rgba(79,79,79,1)}.part-2.__jsx-style-dynamic-selector{margin-left:${isSmallLayout ? "20px" : "100px"};width:${isSmallLayout ? "" : "15%"};margin-bottom:${isSmallLayout ? "20px" : ""}}.part-2.__jsx-style-dynamic-selector .p.__jsx-style-dynamic-selector{margin-top:20px;font-size:14px;color:rgba(79,79,79,1)}.part-3.__jsx-style-dynamic-selector{margin-left:${isSmallLayout ? "20px" : "100px"};width:${isSmallLayout ? "" : "15%"};margin-bottom:${isSmallLayout ? "20px" : ""}}.part-4.__jsx-style-dynamic-selector{margin-left:${isSmallLayout ? "20px" : "100px"}}.contact-info.__jsx-style-dynamic-selector{margin-top:12px}.contact-info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.contact-info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-right:5px;font-size:16px}.contact-info-title.__jsx-style-dynamic-selector{color:#000;font-weight:500;font-size:18px;margin-bottom:5px}.p-content.__jsx-style-dynamic-selector{color:rgba(79,79,79,1);font-size:14px}`
            })
        ]
    });
};
/* harmony default export */ const sections_Footer = (Footer);

;// CONCATENATED MODULE: ./components/BookButton.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const BookButton = ({ title, dimensions })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    const BookButtonStyle = {
        width: dimensions[1],
        height: dimensions[0],
        backgroundColor: "#bf2132",
        color: "#ffff",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        style: BookButtonStyle,
        className: "jsx-4e9feedb9743af4e",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "jsx-4e9feedb9743af4e",
                children: title
            }),
            " ",
            locale === "ar" ? /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowLeftCircle, {}) : /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowRightCircle, {}),
            jsx_runtime.jsx((style_default()), {
                id: "4e9feedb9743af4e",
                children: "span.jsx-4e9feedb9743af4e{margin-left:10px;margin-right:10px}"
            })
        ]
    });
};
/* harmony default export */ const components_BookButton = (BookButton);

;// CONCATENATED MODULE: ./assets/car1.png
/* harmony default export */ const car1 = ({"src":"https://cdn.mydomain.com/_next/static/media/car1.735de0fb.png","height":347,"width":875,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AfDy8lGrq6pk5uXmJgkJCf0CAwK6LC0ttA8QEM319PXtAaaoqP8pKSkABAUFAP7+/gDS0dEAHx8fAAIDA/T6+/q+AQAAAFJ8f34mJCQlGvj5+B5oZGUtgYODFh8gHwzn5+fJmSMqkgKHDfAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/CarsSlider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const CarsSlider = ()=>{
    const [sliderRef] = (0,react_namespaceObject.useKeenSlider)({
        loop: true
    }, [
        (slider)=>{
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
                clearTimeout(timeout);
            }
            function nextTimeout() {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(()=>{
                    slider.next();
                }, 3000);
            }
            slider.on("created", ()=>{
                slider.container.addEventListener("mouseover", ()=>{
                    mouseOver = true;
                    clearNextTimeout();
                });
                slider.container.addEventListener("mouseout", ()=>{
                    mouseOver = false;
                    nextTimeout();
                });
                nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        }
    ]);
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            ref: sliderRef,
            className: "jsx-1a6d212d34a50b64" + " " + "keen-slider",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-1a6d212d34a50b64" + " " + "keen-slider__slide number-slide1",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: car1,
                        alt: "car",
                        width: isSmallLayout ? 450 : 550
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-1a6d212d34a50b64" + " " + "keen-slider__slide number-slide2",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: car1,
                        alt: "car",
                        width: isSmallLayout ? 450 : 550
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-1a6d212d34a50b64" + " " + "keen-slider__slide number-slide3",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: car1,
                        alt: "car",
                        width: isSmallLayout ? 450 : 550
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-1a6d212d34a50b64" + " " + "keen-slider__slide number-slide4",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: car1,
                        alt: "car",
                        width: isSmallLayout ? 450 : 550
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-1a6d212d34a50b64" + " " + "keen-slider__slide number-slide5",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: car1,
                        alt: "car",
                        width: isSmallLayout ? 450 : 550
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-1a6d212d34a50b64" + " " + "keen-slider__slide number-slide6",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: car1,
                        alt: "car",
                        width: isSmallLayout ? 450 : 550
                    })
                }),
                jsx_runtime.jsx((style_default()), {
                    id: "1a6d212d34a50b64",
                    children: '[class^="number-slide"].jsx-1a6d212d34a50b64,[class*=" number-slide"].jsx-1a6d212d34a50b64{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:50px;color:#fff;font-weight:500;height:300px;max-height:100vh}'
                })
            ]
        })
    });
};
/* harmony default export */ const components_CarsSlider = (CarsSlider);

;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: ./components/sections/Info.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const Info = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const isMobileLayout = useMediaQuery_default()("(max-width:817px)");
    const isBigScreenLayout = useMediaQuery_default()("(min-width:1700px)");
    const { t } = hooks_useTranslate("home");
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "home",
        className: style_default().dynamic([
            [
                "fb870aa0f1fd5e2b",
                [
                    isMobileLayout ? "0" : "220px",
                    locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                    isBigScreenLayout ? "30%" : "20%"
                ]
            ]
        ]) + " " + ((isSmallLayout ? "SmallInfoSectionStyle" : "InfoSectionStyle") || ""),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "fb870aa0f1fd5e2b",
                        [
                            isMobileLayout ? "0" : "220px",
                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                            isBigScreenLayout ? "30%" : "20%"
                        ]
                    ]
                ]) + " " + ((isSmallLayout ? "SmallSliderAndContent" : "SliderAndContent") || ""),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "fb870aa0f1fd5e2b",
                                [
                                    isMobileLayout ? "0" : "220px",
                                    locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                    isBigScreenLayout ? "30%" : "20%"
                                ]
                            ]
                        ]) + " " + ((isSmallLayout ? "SmallContentStyle" : "ContentStyle") || ""),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: style_default().dynamic([
                                    [
                                        "fb870aa0f1fd5e2b",
                                        [
                                            isMobileLayout ? "0" : "220px",
                                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                            isBigScreenLayout ? "30%" : "20%"
                                        ]
                                    ]
                                ]) + " " + "TitleStyle",
                                children: t("info.title")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                style: {
                                    marginBottom: "15px"
                                },
                                className: style_default().dynamic([
                                    [
                                        "fb870aa0f1fd5e2b",
                                        [
                                            isMobileLayout ? "0" : "220px",
                                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                            isBigScreenLayout ? "30%" : "20%"
                                        ]
                                    ]
                                ]) + " " + "TitleStyle",
                                children: [
                                    t("info.subtitle"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        style: {
                                            color: "#BF2132"
                                        },
                                        className: style_default().dynamic([
                                            [
                                                "fb870aa0f1fd5e2b",
                                                [
                                                    isMobileLayout ? "0" : "220px",
                                                    locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                    isBigScreenLayout ? "30%" : "20%"
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            " ",
                                            t("info.secSubtitle")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                style: {
                                    marginBottom: "10px"
                                },
                                className: style_default().dynamic([
                                    [
                                        "fb870aa0f1fd5e2b",
                                        [
                                            isMobileLayout ? "0" : "220px",
                                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                            isBigScreenLayout ? "30%" : "20%"
                                        ]
                                    ]
                                ]) + " " + "TextStyle",
                                children: t("info.description")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                style: {
                                    marginBottom: "30px"
                                },
                                className: style_default().dynamic([
                                    [
                                        "fb870aa0f1fd5e2b",
                                        [
                                            isMobileLayout ? "0" : "220px",
                                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                            isBigScreenLayout ? "30%" : "20%"
                                        ]
                                    ]
                                ]) + " " + "TextStyle",
                                children: t("info.secDescription")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(components_BookButton, {
                                title: t("info.buttonText"),
                                dimensions: [
                                    "48px",
                                    "190px"
                                ]
                            })
                        ]
                    }),
                    isMobileLayout ? "" : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "fb870aa0f1fd5e2b",
                                [
                                    isMobileLayout ? "0" : "220px",
                                    locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                    isBigScreenLayout ? "30%" : "20%"
                                ]
                            ]
                        ]) + " " + ((isSmallLayout ? "smallCarSliderAndbackground" : "carSliderAndbackground") || ""),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "fb870aa0f1fd5e2b",
                                        [
                                            isMobileLayout ? "0" : "220px",
                                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                            isBigScreenLayout ? "30%" : "20%"
                                        ]
                                    ]
                                ]) + " " + ((isSmallLayout ? "smaill-parallelogram-background" : "parallelogram-background") || "")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: style_default().dynamic([
                                    [
                                        "fb870aa0f1fd5e2b",
                                        [
                                            isMobileLayout ? "0" : "220px",
                                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                            isBigScreenLayout ? "30%" : "20%"
                                        ]
                                    ]
                                ]) + " " + "carSliderContainer",
                                children: /*#__PURE__*/ jsx_runtime.jsx(components_CarsSlider, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: style_default().dynamic([
                    [
                        "fb870aa0f1fd5e2b",
                        [
                            isMobileLayout ? "0" : "220px",
                            locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                            isBigScreenLayout ? "30%" : "20%"
                        ]
                    ]
                ]) + " " + ((isSmallLayout ? "smallParallelogram" : "parallelogram") || ""),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: style_default().dynamic([
                        [
                            "fb870aa0f1fd5e2b",
                            [
                                isMobileLayout ? "0" : "220px",
                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                isBigScreenLayout ? "30%" : "20%"
                            ]
                        ]
                    ]) + " " + ((isSmallLayout ? "small-parallelogram-content" : "parallelogram-content") || ""),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "fb870aa0f1fd5e2b",
                                    [
                                        isMobileLayout ? "0" : "220px",
                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                        isBigScreenLayout ? "30%" : "20%"
                                    ]
                                ]
                            ]) + " " + ((isSmallLayout ? "smallPart" : "part part-border") || ""),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(ai_namespaceObject.AiOutlineClockCircle, {}),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: style_default().dynamic([
                                                [
                                                    "fb870aa0f1fd5e2b",
                                                    [
                                                        isMobileLayout ? "0" : "220px",
                                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                        isBigScreenLayout ? "30%" : "20%"
                                                    ]
                                                ]
                                            ]),
                                            children: t("info.workTime")
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-text",
                                    children: t("info.time")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "fb870aa0f1fd5e2b",
                                    [
                                        isMobileLayout ? "0" : "220px",
                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                        isBigScreenLayout ? "30%" : "20%"
                                    ]
                                ]
                            ]) + " " + ((isSmallLayout ? "smallPart" : "part part-border") || ""),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(hi_namespaceObject.HiOutlineLocationMarker, {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: style_default().dynamic([
                                                [
                                                    "fb870aa0f1fd5e2b",
                                                    [
                                                        isMobileLayout ? "0" : "220px",
                                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                        isBigScreenLayout ? "30%" : "20%"
                                                    ]
                                                ]
                                            ]),
                                            children: t("info.location")
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-text",
                                    children: t("info.locationDetails")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "fb870aa0f1fd5e2b",
                                    [
                                        isMobileLayout ? "0" : "220px",
                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                        isBigScreenLayout ? "30%" : "20%"
                                    ]
                                ]
                            ]) + " " + ((isSmallLayout ? "smallPart" : "part part-border") || ""),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(hi_namespaceObject.HiOutlineMail, {}),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: style_default().dynamic([
                                                [
                                                    "fb870aa0f1fd5e2b",
                                                    [
                                                        isMobileLayout ? "0" : "220px",
                                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                        isBigScreenLayout ? "30%" : "20%"
                                                    ]
                                                ]
                                            ]),
                                            children: t("info.email")
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-text",
                                    children: t("info.emailDetails")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "fb870aa0f1fd5e2b",
                                    [
                                        isMobileLayout ? "0" : "220px",
                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                        isBigScreenLayout ? "30%" : "20%"
                                    ]
                                ]
                            ]) + " " + ((isSmallLayout ? "smallPart" : "part") || ""),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(bi_namespaceObject.BiPhone, {}),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: style_default().dynamic([
                                                [
                                                    "fb870aa0f1fd5e2b",
                                                    [
                                                        isMobileLayout ? "0" : "220px",
                                                        locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                        isBigScreenLayout ? "30%" : "20%"
                                                    ]
                                                ]
                                            ]),
                                            children: t("info.phoneNumbertitle")
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: style_default().dynamic([
                                        [
                                            "fb870aa0f1fd5e2b",
                                            [
                                                isMobileLayout ? "0" : "220px",
                                                locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                                                isBigScreenLayout ? "30%" : "20%"
                                            ]
                                        ]
                                    ]) + " " + "parallelogram-text",
                                    children: t("info.phoneNumber")
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime.jsx((style_default()), {
                id: "fb870aa0f1fd5e2b",
                dynamic: [
                    isMobileLayout ? "0" : "220px",
                    locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);",
                    isBigScreenLayout ? "30%" : "20%"
                ],
                children: `.InfoSectionStyle.__jsx-style-dynamic-selector{height:550px;background-color:#fbfbfb;padding-right:100px;padding-left:100px}.SmallInfoSectionStyle.__jsx-style-dynamic-selector{height:410px;background-color:#fbfbfb;padding-right:30px;padding-left:30px}.SliderAndContent.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.SmallSliderAndContent.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ContentStyle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:40%}.SmallContentStyle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;margin-bottom:50px}.TitleStyle.__jsx-style-dynamic-selector{color:#000;text-align:right;font-size:38px;font-style:normal;font-weight:700;line-height:65px;margin:0;padding:0}.TextStyle.__jsx-style-dynamic-selector{color:#676767;text-align:right;font-size:14px;font-style:normal;font-weight:400}.parallelogram.__jsx-style-dynamic-selector{width:100%;height:80px;-webkit-transform:skew(15deg);-moz-transform:skew(15deg);-ms-transform:skew(15deg);-o-transform:skew(15deg);transform:skew(15deg);background:#fff;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;-webkit-box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);-moz-box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1)}.smallParallelogram.__jsx-style-dynamic-selector{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#fff;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;-webkit-box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);-moz-box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);margin-top:${isMobileLayout ? "0" : "220px"}}.mobileParallelogram.__jsx-style-dynamic-selector{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#fff;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;-webkit-box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);-moz-box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);box-shadow:-5px 0px 50px 0px rgba(0,0,0,.1);margin-top:0}.parallelogram-content.__jsx-style-dynamic-selector{color:#000;width:96%;margin-right:1%;margin-left:1%;-webkit-transform:skew(-15deg);-moz-transform:skew(-15deg);-ms-transform:skew(-15deg);-o-transform:skew(-15deg);transform:skew(-15deg);height:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.small-parallelogram-content.__jsx-style-dynamic-selector{color:#000;width:96%;margin-right:1%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 10px 10px 10px}.part.__jsx-style-dynamic-selector{width:25%;height:80px;padding-top:18px;margin-right:35px;margin-left:35px}.smallPart.__jsx-style-dynamic-selector{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding-top:18px;margin-right:35px}.part-border.__jsx-style-dynamic-selector{${locale === "ar" ? "border-left: solid 1px rgba(240, 240, 240, 1);" : "border-right: solid 1px rgba(240, 240, 240, 1);"}
        }.parallelogram-title.__jsx-style-dynamic-selector{margin:0;padding:0}.parallelogram-title.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-size:14px;margin-right:5px}.parallelogram-text.__jsx-style-dynamic-selector{font-size:12px;margin-top:5px;color:#000}.parallelogram-background.__jsx-style-dynamic-selector{width:300px;height:470px;-webkit-transform:skew(28deg);-moz-transform:skew(28deg);-ms-transform:skew(28deg);-o-transform:skew(28deg);transform:skew(28deg);background:rgba(191,33,50,1);position:absolute;top:0;left:${isBigScreenLayout ? "30%" : "20%"};z-index:1}.smaill-parallelogram-background.__jsx-style-dynamic-selector{width:80%;height:470px;-webkit-transform:skew(28deg);-moz-transform:skew(28deg);-ms-transform:skew(28deg);-o-transform:skew(28deg);transform:skew(28deg);background:rgba(191,33,50,1);position:absolute;top:0;right:30px;z-index:1}.carSliderContainer.__jsx-style-dynamic-selector{position:absolute;top:20%;left:0;z-index:2;width:100%}.carSliderAndbackground.__jsx-style-dynamic-selector{width:65%;height:470px;position:relative}.smallCarSliderAndbackground.__jsx-style-dynamic-selector{width:60%;height:250px;position:relative;margin-right:15%}`
            })
        ]
    });
};
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common',
//         'footer',
//       ])), 
//       // Will be passed to the page component as props
//     },
//   }
// }
/* harmony default export */ const sections_Info = (Info);

;// CONCATENATED MODULE: ./assets/ourWork1.png
/* harmony default export */ const ourWork1 = ({"src":"https://cdn.mydomain.com/_next/static/media/ourWork1.3ba63c97.png","height":326,"width":325,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42h3FPS9DURzA4d+5L1q9SaWlt0S6tIZGQxHi64nEJAaLBbPJIt5isRjEB2DUhiauuHop6bmnx/0Tw5NHXZ0fZ8VSVS2vrCGSAQprLQp4iWJxi+Xahk6F6WpIHPdJ+gme61IIAqLXN+U1nUemCiGXF0f4foAxluZ8i6X2KqN0iEOtxUO3g+PDl/7Ez8PJ2Sl3N9f8jDROfXGducYMrhKcP7kctBdmsZ5HUK7hmKHlqReTy/uUSuPoVNPpPKO1QRRwcLgvlRCBMQEEN/x/a2dPbu974jXqFdnd3lSDwQfGGGwG30mX8uQE0buRXy4eZWYAm/VLAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/ourWork2.png
/* harmony default export */ const ourWork2 = ({"src":"https://cdn.mydomain.com/_next/static/media/ourWork2.55fe26f1.png","height":332,"width":332,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42h3Kyy4DUQCA4f/MOdVL2tGhJdFFxaVEK61O4xZrTyCReBleQjyEsLCwldSmTYciukIaRWIxNgbN6Jgj6bf+RPPsJHz5/hJPz+8QBhSLy4DgzrkiV29p+RNJHYiRFNmJKQwVxTITeJ8u9ZsHwuy4EKsrNV2ya0gpUcogacZIJRMoIWncdjB293bYXK+ijICZ/CR2xabV8Dg6bGJFLYy5whIRBsOUy09zenxOtx2QlSYbtQqGlRkllIrHbo8P12Vty+b+dcB17w0zk0a0Ly+0HEvj9/ugNaEGx+kAf9jVEnI7YF8tzotINM6v7+N5HguFWcrlErFYXP8DRLlS50hbH+oAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/ourWork3.png
/* harmony default export */ const ourWork3 = ({"src":"https://cdn.mydomain.com/_next/static/media/ourWork3.d5a828ee.png","height":332,"width":332,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR4nA3KPUsCYQDA8f+Dl5eZKSnmcE6BXAnmEEVTQWuj0GJ9g6QI+jBFBCH0MrU5BFpDRA5BRA6mJpSDpOV5eCTe3ZP7T9yenrt3zbZYTscJB+C1Ukcd9HF8AdSbBykKF3nZtx2eqzWs/hdeNYCuRZme0xi1u4jDowM5n0jSqLxg8Uet1UKxDDbXNyg3mohi4UoGwxGktOn+9Bg5NsFQiO/OL0bPQnx+VKXH42KaBq50xkDw+FQmEo0R1zTEe/FaeiI6A1RMo0OjWSe7s0tufw9FnUCc5LLSiiVZSK8y6VMo3ZfIX56RyWyTWkohjle23Le1RTG0h/i8CqHZGXQ9gRbX8E/55T9lb2v54R2qIgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/WorksSlider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











const WorksSlider = ()=>{
    const [currentSlide, setCurrentSlide] = (0,external_react_.useState)(0);
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    const [sliderRef, instanceRef] = (0,react_namespaceObject.useKeenSlider)({
        slideChanged (slider) {
            const relativeSlide = slider.track.details.rel;
            console.log({
                relativeSlide
            });
            setCurrentSlide(relativeSlide);
        },
        created () {
            setLoaded(true);
        },
        breakpoints: {
            "(min-width: 400px)": {
                slides: {
                    perView: 2,
                    spacing: 5
                }
            },
            "(min-width: 1000px)": {
                slides: {
                    perView: 3,
                    spacing: 10
                }
            }
        },
        slides: {
            perView: 1
        }
    });
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: style_default().dynamic([
            [
                "ca2578c49fe148db",
                [
                    isSmallLayout ? "300px" : "220px"
                ]
            ]
        ]),
        children: [
            loaded && instanceRef.current && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: style_default().dynamic([
                    [
                        "ca2578c49fe148db",
                        [
                            isSmallLayout ? "300px" : "220px"
                        ]
                    ]
                ]) + " " + "slides-btns",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: style_default().dynamic([
                        [
                            "ca2578c49fe148db",
                            [
                                isSmallLayout ? "300px" : "220px"
                            ]
                        ]
                    ]) + " " + "btns-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            disabled: currentSlide === instanceRef.current.track.details.slides.length - 1,
                            onClick: (e)=>e.stopPropagation() || instanceRef.current?.next(),
                            className: style_default().dynamic([
                                [
                                    "ca2578c49fe148db",
                                    [
                                        isSmallLayout ? "300px" : "220px"
                                    ]
                                ]
                            ]) + " " + "navigate-btn",
                            children: locale === "ar" ? /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowRight, {}) : /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowLeft, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            disabled: currentSlide === 0,
                            onClick: (e)=>e.stopPropagation() || instanceRef.current?.prev(),
                            className: style_default().dynamic([
                                [
                                    "ca2578c49fe148db",
                                    [
                                        isSmallLayout ? "300px" : "220px"
                                    ]
                                ]
                            ]) + " " + "navigate-btn",
                            children: locale === "ar" ? /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowLeft, {}) : /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsArrowRight, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: sliderRef,
                className: style_default().dynamic([
                    [
                        "ca2578c49fe148db",
                        [
                            isSmallLayout ? "300px" : "220px"
                        ]
                    ]
                ]) + " " + "keen-slider",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "ca2578c49fe148db",
                                [
                                    isSmallLayout ? "300px" : "220px"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide1",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: ourWork1,
                            width: isSmallLayout ? 380 : 222,
                            alt: "our work image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "ca2578c49fe148db",
                                [
                                    isSmallLayout ? "300px" : "220px"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide2",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: ourWork2,
                            width: isSmallLayout ? 380 : 222,
                            alt: "our work image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "ca2578c49fe148db",
                                [
                                    isSmallLayout ? "300px" : "220px"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide3",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: ourWork3,
                            width: isSmallLayout ? 380 : 222,
                            alt: "our work image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "ca2578c49fe148db",
                                [
                                    isSmallLayout ? "300px" : "220px"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide4",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: ourWork1,
                            width: isSmallLayout ? 380 : 222,
                            alt: "our work image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "ca2578c49fe148db",
                                [
                                    isSmallLayout ? "300px" : "220px"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide5",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: ourWork2,
                            width: isSmallLayout ? 380 : 222,
                            alt: "our work image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "ca2578c49fe148db",
                                [
                                    isSmallLayout ? "300px" : "220px"
                                ]
                            ]
                        ]) + " " + "keen-slider__slide number-slide6",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: ourWork3,
                            width: isSmallLayout ? 380 : 222,
                            alt: "our work image"
                        })
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "ca2578c49fe148db",
                dynamic: [
                    isSmallLayout ? "300px" : "220px"
                ],
                children: `[class^="number-slide"].__jsx-style-dynamic-selector,[class*=" number-slide"].__jsx-style-dynamic-selector{background:grey;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:50px;color:#fff;font-weight:500;height:${isSmallLayout ? "300px" : "220px"};max-height:100vh;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.slides-btns.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100px}.btns-container.__jsx-style-dynamic-selector{width:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.navigate-btn.__jsx-style-dynamic-selector{background:none;color:#fff;border:1px solid#fff;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}`
            })
        ]
    });
};
/* harmony default export */ const components_WorksSlider = (WorksSlider);

;// CONCATENATED MODULE: ./assets/ourWorksBackground.png
/* harmony default export */ const ourWorksBackground = ({"src":"https://cdn.mydomain.com/_next/static/media/ourWorksBackground.3f7e6635.png","height":607,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADAgMAAADTpqbbAAAADFBMVEU4NDQ3MzM2MjI1MTHgPTR1AAAAEUlEQVR42mN4G82wQ4/h6W4AEMMDzx/n1CcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/sections/OurWorks.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const OurWorks = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const { t } = hooks_useTranslate("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "our-works",
        className: style_default().dynamic([
            [
                "6325d7fc5e76ce2c",
                [
                    isSmallLayout ? "fit-content" : "400px",
                    isSmallLayout ? "fit-content" : "100%",
                    isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                    isSmallLayout ? "50px 30px" : "50px 100px",
                    isSmallLayout ? "90%" : "38%",
                    isSmallLayout ? "0 30px" : "",
                    isSmallLayout ? "30px" : "",
                    isSmallLayout ? "90%" : "60%",
                    isSmallLayout ? "0 20px 0 20px" : "",
                    isSmallLayout ? " " : "670px"
                ]
            ]
        ]) + " " + "ourWorksSection",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: style_default().dynamic([
                    [
                        "6325d7fc5e76ce2c",
                        [
                            isSmallLayout ? "fit-content" : "400px",
                            isSmallLayout ? "fit-content" : "100%",
                            isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                            isSmallLayout ? "50px 30px" : "50px 100px",
                            isSmallLayout ? "90%" : "38%",
                            isSmallLayout ? "0 30px" : "",
                            isSmallLayout ? "30px" : "",
                            isSmallLayout ? "90%" : "60%",
                            isSmallLayout ? "0 20px 0 20px" : "",
                            isSmallLayout ? " " : "670px"
                        ]
                    ]
                ]) + " " + "ourWorks-background",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: ourWorksBackground,
                    style: {
                        width: "100%",
                        height: isSmallLayout ? "800px" : "400px"
                    },
                    alt: "background"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "6325d7fc5e76ce2c",
                        [
                            isSmallLayout ? "fit-content" : "400px",
                            isSmallLayout ? "fit-content" : "100%",
                            isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                            isSmallLayout ? "50px 30px" : "50px 100px",
                            isSmallLayout ? "90%" : "38%",
                            isSmallLayout ? "0 30px" : "",
                            isSmallLayout ? "30px" : "",
                            isSmallLayout ? "90%" : "60%",
                            isSmallLayout ? "0 20px 0 20px" : "",
                            isSmallLayout ? " " : "670px"
                        ]
                    ]
                ]) + " " + "our-works-content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "6325d7fc5e76ce2c",
                                [
                                    isSmallLayout ? "fit-content" : "400px",
                                    isSmallLayout ? "fit-content" : "100%",
                                    isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                                    isSmallLayout ? "50px 30px" : "50px 100px",
                                    isSmallLayout ? "90%" : "38%",
                                    isSmallLayout ? "0 30px" : "",
                                    isSmallLayout ? "30px" : "",
                                    isSmallLayout ? "90%" : "60%",
                                    isSmallLayout ? "0 20px 0 20px" : "",
                                    isSmallLayout ? " " : "670px"
                                ]
                            ]
                        ]) + " " + "our-works-info",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: style_default().dynamic([
                                    [
                                        "6325d7fc5e76ce2c",
                                        [
                                            isSmallLayout ? "fit-content" : "400px",
                                            isSmallLayout ? "fit-content" : "100%",
                                            isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                                            isSmallLayout ? "50px 30px" : "50px 100px",
                                            isSmallLayout ? "90%" : "38%",
                                            isSmallLayout ? "0 30px" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "90%" : "60%",
                                            isSmallLayout ? "0 20px 0 20px" : "",
                                            isSmallLayout ? " " : "670px"
                                        ]
                                    ]
                                ]) + " " + "TitleStyle",
                                children: t("ourWorks.title")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: style_default().dynamic([
                                    [
                                        "6325d7fc5e76ce2c",
                                        [
                                            isSmallLayout ? "fit-content" : "400px",
                                            isSmallLayout ? "fit-content" : "100%",
                                            isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                                            isSmallLayout ? "50px 30px" : "50px 100px",
                                            isSmallLayout ? "90%" : "38%",
                                            isSmallLayout ? "0 30px" : "",
                                            isSmallLayout ? "30px" : "",
                                            isSmallLayout ? "90%" : "60%",
                                            isSmallLayout ? "0 20px 0 20px" : "",
                                            isSmallLayout ? " " : "670px"
                                        ]
                                    ]
                                ]) + " " + "InfoTextStyle",
                                children: t("ourWorks.description")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "6325d7fc5e76ce2c",
                                [
                                    isSmallLayout ? "fit-content" : "400px",
                                    isSmallLayout ? "fit-content" : "100%",
                                    isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                                    isSmallLayout ? "50px 30px" : "50px 100px",
                                    isSmallLayout ? "90%" : "38%",
                                    isSmallLayout ? "0 30px" : "",
                                    isSmallLayout ? "30px" : "",
                                    isSmallLayout ? "90%" : "60%",
                                    isSmallLayout ? "0 20px 0 20px" : "",
                                    isSmallLayout ? " " : "670px"
                                ]
                            ]
                        ]) + " " + "slider-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_WorksSlider, {})
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "6325d7fc5e76ce2c",
                dynamic: [
                    isSmallLayout ? "fit-content" : "400px",
                    isSmallLayout ? "fit-content" : "100%",
                    isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;",
                    isSmallLayout ? "50px 30px" : "50px 100px",
                    isSmallLayout ? "90%" : "38%",
                    isSmallLayout ? "0 30px" : "",
                    isSmallLayout ? "30px" : "",
                    isSmallLayout ? "90%" : "60%",
                    isSmallLayout ? "0 20px 0 20px" : "",
                    isSmallLayout ? " " : "670px"
                ],
                children: `.ourWorksSection.__jsx-style-dynamic-selector{width:100%;height:${isSmallLayout ? "fit-content" : "400px"};position:relative}.ourWorks-background.__jsx-style-dynamic-selector{width:100%;height:${isSmallLayout ? "fit-content" : "100%"};position:absolute;top:0;left:0;z-index:1}.our-works-content.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;${isSmallLayout ? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;"}
          padding: ${isSmallLayout ? "50px 30px" : "50px 100px"};}.our-works-info.__jsx-style-dynamic-selector{width:${isSmallLayout ? "90%" : "38%"};margin:${isSmallLayout ? "0 30px" : ""}}.TitleStyle.__jsx-style-dynamic-selector{color:#fff;text-align:start;font-size:26px;font-style:normal;font-weight:700;line-height:40px;margin-top:${isSmallLayout ? "30px" : ""}}.InfoTextStyle.__jsx-style-dynamic-selector{color:rgba(242,242,242,1);text-align:start;font-size:12px;font-style:normal;font-weight:100;line-height:30px}.slider-container.__jsx-style-dynamic-selector{width:${isSmallLayout ? "90%" : "60%"};margin:${isSmallLayout ? "0 20px 0 20px" : ""};max-width:${isSmallLayout ? " " : "670px"}}`
            })
        ]
    });
};
/* harmony default export */ const sections_OurWorks = (OurWorks);

;// CONCATENATED MODULE: ./components/ServiceCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ServiceCard = ({ image, title, content })=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-914f3f601505cd18 " + style_default().dynamic([
            [
                "e8baf2db4d75e83d",
                [
                    isSmallLayout ? "margin-top: 20px;" : ""
                ]
            ]
        ]) + " " + "ServiceCardStyle",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: image,
                className: "service-img",
                width: 50,
                alt: "Service Image"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                className: "jsx-914f3f601505cd18 " + style_default().dynamic([
                    [
                        "e8baf2db4d75e83d",
                        [
                            isSmallLayout ? "margin-top: 20px;" : ""
                        ]
                    ]
                ]) + " " + "TitleStyle",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "jsx-914f3f601505cd18 " + style_default().dynamic([
                    [
                        "e8baf2db4d75e83d",
                        [
                            isSmallLayout ? "margin-top: 20px;" : ""
                        ]
                    ]
                ]) + " " + "ContentStyle",
                children: content
            }),
            jsx_runtime.jsx((style_default()), {
                id: "914f3f601505cd18",
                children: ".service-img.jsx-914f3f601505cd18{alin-self:center;margin-bottom:21px}"
            }),
            jsx_runtime.jsx((style_default()), {
                id: "e8baf2db4d75e83d",
                dynamic: [
                    isSmallLayout ? "margin-top: 20px;" : ""
                ],
                children: `.ServiceCardStyle.__jsx-style-dynamic-selector{width:210px;height:230px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;-webkit-box-shadow:0px 0px 20px 4px rgba(0,0,0,.07);-moz-box-shadow:0px 0px 20px 4px rgba(0,0,0,.07);box-shadow:0px 0px 20px 4px rgba(0,0,0,.07);padding:28px;margin-left:15px;text-align:center;${isSmallLayout ? "margin-top: 20px;" : ""}
        }.TitleStyle.__jsx-style-dynamic-selector{color:#333;text-align:center;font-size:14px;font-style:normal;font-weight:700;line-height:45px;margin:0;padding:0}.ContentStyle.__jsx-style-dynamic-selector{color:#4f4f4f;text-align:center;font-size:10px;font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0}`
            })
        ]
    });
};
/* harmony default export */ const components_ServiceCard = (ServiceCard);

;// CONCATENATED MODULE: ./assets/fix.png
/* harmony default export */ const fix = ({"src":"https://cdn.mydomain.com/_next/static/media/fix.32001a3c.png","height":83,"width":83,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAk0lEQVR42m2NwQqCQBRFx3AtEbho92YXSeVrEUQ7Fy0qoQ9okeha8Adnfs0zoCLiwOEO917uM06uiRP9wQ1is3yYfy96RxUOzuoTPQ3ZxnirJWaObinWmG9Ip0KYhSOllsI+rECxdqqAM0sp2kHGPw5BRD4uPTAblnb8L/CaFyx8IAOlqOh3OuElH4sRYYlWTjTpARRTPM+kee/MAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/Gears.png
/* harmony default export */ const Gears = ({"src":"https://cdn.mydomain.com/_next/static/media/Gears.6dd31482.png","height":83,"width":83,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEW/ITK/ITG+ITG/IDG+IDK+IDG+ITG+IDG+IDG+IDK+IDG/IDG/ITG+IDG+IDG+ITG/IDG+IDG+IDG/IDG+IDG+IDG+IDG+IDG/ITG+IDG+IDG+IDG+IDG+IDG+IDG+IDG+IDG+IDG+IDG+IDG+IDG+IDFEluWDAAAAJnRSTlMAAAAAAAABAQQHBxwhKS4vMDE7P0tSU1RZWlteYmRlaHF7fX6Ehc+UMwIAAABGSURBVHjaBUABEkAgEFxxhIpSQqHC/79oAOK1iNeCriEW3vsE65Us+YuY3FG2JwisOukiWQVvctoVcVhjtBuIMFrvZtbWP6HgBGNJf7vYAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/buttery.png
/* harmony default export */ const buttery = ({"src":"https://cdn.mydomain.com/_next/static/media/buttery.ca63d583.png","height":67,"width":87,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAhElEQVR42i3OTQrCMBCG4aG68QaCCJkbmNSF+LOV+rNwL6jgticQupT2Us1cre9AFs98YT4SIjnEB/riiAMG/HETRoclFqhxzmEzJ9fohPG0kGak4IvWtK7GkCqjE8a1lHd80EKzJsHFi8Y0erofF1ZGWTS+fLE8ZY07f4XllvOe9A+/J7SrPniispQzAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./assets/condation.png
/* harmony default export */ const condation = ({"src":"https://cdn.mydomain.com/_next/static/media/condation.4422bc21.png","height":68,"width":77,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAhklEQVR42jXOsQqCUBTG8fMCjS0FcR2kKeg21hJYFA0NLkHoLjgK3klcRH0mB301/wfu/eAHh8MH54hmjmw8G3vFiAE3xKJhMEjRYvIapDhoIUGPLT54YYcODy04/PDGHl88kaPSwhkl/shwR4ICl/CHWyJ7ZAxPn+AkZDF242/WXqc7EZEVrX1CmzZPjbkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./assets/carIcon.png
/* harmony default export */ const carIcon = ({"src":"https://cdn.mydomain.com/_next/static/media/carIcon.2eb72429.png","height":63,"width":97,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAbUlEQVR42g3JsQpBYQAG0PPnWsRGMRg8gpEHMdt4RossBp6BRZJIGQw36nO3U6dsJ9NhYq54o4+ZeOCEQ5VY4YULOmKPmsYsKxzRpaQUm8hIjPBFu8KviWuSgVjjgx7uaFV4JhY4Y1eowxhT3P64libE0ZQ2FQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/sections/Services.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const Services = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const isMobileLayout = useMediaQuery_default()("(max-width:817px)");
    const { t } = hooks_useTranslate("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "services",
        className: style_default().dynamic([
            [
                "7884850416b65e10",
                [
                    isSmallLayout ? "100px 30px" : "100px",
                    isMobileLayout ? "margin-top: 120px" : "",
                    isSmallLayout && !isMobileLayout ? "margin-top: 410px" : "",
                    isSmallLayout ? "100%" : "60%",
                    isSmallLayout ? "flex-wrap: wrap" : ""
                ]
            ]
        ]) + " " + "ServicesStyle",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: style_default().dynamic([
                    [
                        "7884850416b65e10",
                        [
                            isSmallLayout ? "100px 30px" : "100px",
                            isMobileLayout ? "margin-top: 120px" : "",
                            isSmallLayout && !isMobileLayout ? "margin-top: 410px" : "",
                            isSmallLayout ? "100%" : "60%",
                            isSmallLayout ? "flex-wrap: wrap" : ""
                        ]
                    ]
                ]) + " " + "TitleStyle",
                children: t("services.title")
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: style_default().dynamic([
                    [
                        "7884850416b65e10",
                        [
                            isSmallLayout ? "100px 30px" : "100px",
                            isMobileLayout ? "margin-top: 120px" : "",
                            isSmallLayout && !isMobileLayout ? "margin-top: 410px" : "",
                            isSmallLayout ? "100%" : "60%",
                            isSmallLayout ? "flex-wrap: wrap" : ""
                        ]
                    ]
                ]) + " " + "InfoTextStyle",
                children: t("services.description")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "7884850416b65e10",
                        [
                            isSmallLayout ? "100px 30px" : "100px",
                            isMobileLayout ? "margin-top: 120px" : "",
                            isSmallLayout && !isMobileLayout ? "margin-top: 410px" : "",
                            isSmallLayout ? "100%" : "60%",
                            isSmallLayout ? "flex-wrap: wrap" : ""
                        ]
                    ]
                ]) + " " + "CardsContainerStyle",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_ServiceCard, {
                        title: t("services.cards.card1.title"),
                        image: fix,
                        content: t("services.cards.card1.description")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_ServiceCard, {
                        title: t("services.cards.card2.title"),
                        image: Gears,
                        content: t("services.cards.card2.description")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_ServiceCard, {
                        title: t("services.cards.card3.title"),
                        image: buttery,
                        content: t("services.cards.card3.description")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_ServiceCard, {
                        title: t("services.cards.card4.title"),
                        image: condation,
                        content: t("services.cards.card4.description")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_ServiceCard, {
                        title: t("services.cards.card5.title"),
                        image: carIcon,
                        content: t("services.cards.card5.description")
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "7884850416b65e10",
                dynamic: [
                    isSmallLayout ? "100px 30px" : "100px",
                    isMobileLayout ? "margin-top: 120px" : "",
                    isSmallLayout && !isMobileLayout ? "margin-top: 410px" : "",
                    isSmallLayout ? "100%" : "60%",
                    isSmallLayout ? "flex-wrap: wrap" : ""
                ],
                children: `.ServicesStyle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:${isSmallLayout ? "100px 30px" : "100px"};${isMobileLayout ? "margin-top: 120px" : ""}
        }.TitleStyle.__jsx-style-dynamic-selector{color:#333;text-align:right;font-size:38px;font-style:normal;font-weight:700;line-height:45px;${isSmallLayout && !isMobileLayout ? "margin-top: 410px" : ""}
        }.InfoTextStyle.__jsx-style-dynamic-selector{color:#4f4f4f;text-align:center;font-size:14px;font-style:normal;font-weight:400;line-height:38px;width:${isSmallLayout ? "100%" : "60%"}}.CardsContainerStyle.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:60px;${isSmallLayout ? "flex-wrap: wrap" : ""}
        }`
            })
        ]
    });
};
/* harmony default export */ const sections_Services = (Services);

;// CONCATENATED MODULE: ./components/sections/index.tsx










;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NavBar.tsx











const NavBar = ()=>{
    const isSmallLayout = useMediaQuery_default()("(max-width:1020px)");
    const { t } = hooks_useTranslate("home");
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    const SmallNavStyle = {
        height: "80px",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)"
    };
    const DisktopNavStyle = {
        height: "80px",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        paddingLeft: "100px !important",
        paddingRight: "100px !important"
    };
    const NavLinkStyle = isSmallLayout ? {
        margin: "10px 50px"
    } : {
        marginLeft: "20px"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Navbar_default()), {
        expand: "lg",
        style: isSmallLayout ? SmallNavStyle : DisktopNavStyle,
        className: "bg-body-tertiary",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Navbar_default()).Brand, {
                href: "#home",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: isSmallLayout ? {
                        marginRight: "10px",
                        marginLeft: "10px"
                    } : {},
                    className: "jsx-1ea60b7caec97da3",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: logo,
                        alt: "Logo"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: isSmallLayout ? {
                    marginLeft: "20px",
                    marginRight: "20px"
                } : {},
                className: "jsx-1ea60b7caec97da3",
                children: /*#__PURE__*/ jsx_runtime.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Navbar_default()).Collapse, {
                style: isSmallLayout ? {
                    backgroundColor: "#A1A0AE",
                    zIndex: "10"
                } : {},
                id: "basic-navbar-nav",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Nav_default()), {
                        className: "me-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Nav_default()).Link, {
                                style: NavLinkStyle,
                                href: "#services",
                                children: t("navbar.services")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Nav_default()).Link, {
                                style: NavLinkStyle,
                                href: "#agents",
                                children: t("navbar.Agents")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Nav_default()).Link, {
                                style: NavLinkStyle,
                                href: "#certified",
                                children: t("navbar.certified")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Nav_default()).Link, {
                                style: NavLinkStyle,
                                href: "#our-works",
                                children: t("navbar.ourWorks")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Nav_default()).Link, {
                                style: NavLinkStyle,
                                href: "#about-us",
                                children: t("navbar.testimonials")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Nav_default()).Link, {
                                style: isSmallLayout ? {
                                    margin: "10px 50px"
                                } : {},
                                href: "#contact-us",
                                children: t("navbar.contactUs")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-1ea60b7caec97da3" + " " + "lan-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/ar",
                                locale: "ar",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "jsx-1ea60b7caec97da3",
                                    children: "العربية"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/en",
                                locale: "en",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "jsx-1ea60b7caec97da3",
                                    children: "English"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Nav_default()), {
                        className: locale === "ar" ? "me-auto" : "english-margin",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            style: isSmallLayout ? {
                                margin: "20px"
                            } : {},
                            className: "jsx-1ea60b7caec97da3",
                            children: /*#__PURE__*/ jsx_runtime.jsx(components_BookButton, {
                                title: t("info.buttonText"),
                                dimensions: [
                                    "40px",
                                    "190px"
                                ]
                            })
                        })
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "1ea60b7caec97da3",
                children: ".english-margin.jsx-1ea60b7caec97da3{margin:0 100px}.lan-container.jsx-1ea60b7caec97da3{margin:0 50px}.lan-container.jsx-1ea60b7caec97da3 button.jsx-1ea60b7caec97da3{border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-color:#bf2132;color:#fff;padding:7px;font-size:14px;margin:0 4px}"
            })
        ]
    });
};
/* harmony default export */ const components_NavBar = (NavBar);

;// CONCATENATED MODULE: ./components/index.tsx








;// CONCATENATED MODULE: ./pages/index.tsx






const Home = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        dir: locale === "ar" ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_NavBar, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_Info, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_Services, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_Agents, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_Certified, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_OurWorks, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_AboutUs, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_ContactUs, {}),
            /*#__PURE__*/ jsx_runtime.jsx(sections_Footer, {})
        ]
    });
};
async function getStaticProps({ locale = "en" }) {
    return {
        props: {
            ...await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale, [
                "home",
                "common"
            ])
        }
    };
}
/* harmony default export */ const pages = (Home);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: pages_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,82,636,215,178], () => (__webpack_exec__(2934)));
module.exports = __webpack_exports__;

})();