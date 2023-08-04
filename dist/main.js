require("./main.css");
var $VjlY2$reactjsxruntime = require("react/jsx-runtime");
var $VjlY2$reactdomclient = require("react-dom/client");
var $VjlY2$classnames = require("classnames");
var $VjlY2$react = require("react");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




var $a5335a6e96cae823$exports = {};
$a5335a6e96cae823$exports = new URL("logo.81042df7.svg", "file:" + __filename).toString();




var $80bb45bc14292829$exports = {};
$80bb45bc14292829$exports = new URL("icon-menu.720da62c.svg", "file:" + __filename).toString();


var $863c8137c85f0e07$exports = {};
$863c8137c85f0e07$exports = new URL("icon-menu-close.83f04481.svg", "file:" + __filename).toString();



const $67eeb774f53bdaec$export$42cfbb80f7861e77 = ()=>{
    const [active, setActive] = (0, $VjlY2$react.useState)(true);
    const menu = (0, ($parcel$interopDefault($VjlY2$classnames)))("absolute", "sm:static", "w-[255px]", "z-20", "flex", "flex-col", "justify-center", "items-start", "bg-OffWhite", "right-0", " top-0", "bottom-0 ", "sm:flex", "sm:flex-row", "sm:text-[16px]", "font-inter", "sm:w-[438px]", "sm:place-content-around", "sm:items-center", {
        "right-[-255px]": active,
        "right-0": !active
    });
    const handleToggle = ()=>{
        setActive(!active);
        console.log(active);
    };
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)((0, $VjlY2$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("ul", {
                className: menu,
                children: [
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("li", {
                        className: "hover:text-SoftOrange pl-4 pb-4 ",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("a", {
                                href: "",
                                children: "Home"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("li", {
                        className: "hover:text-SoftOrange pl-4 pb-4 ",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("a", {
                                href: "",
                                children: "New"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("li", {
                        className: "hover:text-SoftOrange pl-4 pb-4 ",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("a", {
                                href: "",
                                children: "Popular"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("li", {
                        className: "hover:text-SoftOrange pl-4 pb-4 ",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("a", {
                                href: "",
                                children: "Trending"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("li", {
                        className: "hover:text-SoftOrange pl-4 pb-4 ",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("a", {
                                href: "",
                                children: "Categories"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("li", {
                        className: "absolute top-0 right-0 pt-8 pr-4 sm:hidden cursor-pointer",
                        onClick: handleToggle,
                        children: /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($863c8137c85f0e07$exports)))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("img", {
                className: " w-10 h-4  cursor-pointer sm:hidden ",
                onClick: handleToggle,
                src: (0, (/*@__PURE__*/$parcel$interopDefault($80bb45bc14292829$exports)))
            })
        ]
    });
};


const $dab0016196d00d98$export$8b251419efc915eb = ()=>{
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("header", {
        className: " flex place-content-between items-center overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("img", {
                src: (0, (/*@__PURE__*/$parcel$interopDefault($a5335a6e96cae823$exports)))
            }),
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $67eeb774f53bdaec$export$42cfbb80f7861e77), {})
        ]
    });
};



var $728860c89d7051d3$exports = {};
$728860c89d7051d3$exports = new URL("image-web-3-mobile.d4dc8d64.jpg", "file:" + __filename).toString();


var $c06f1658f31f5009$exports = {};
$c06f1658f31f5009$exports = new URL("image-web-3-desktop.5fe31a42.jpg", "file:" + __filename).toString();



const $4bf9bf6c9965969a$export$cde7357445fb45f9 = ({ data: data })=>{
    console.log({
        data: data
    });
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("article", {
        className: "h-[170px] lg:h-[130px] border-b-2 border-GrayishBlue pt-4 last:border-none ",
        children: [
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("h2", {
                className: " text-OffWhite  font-bold text-[20px] hover:text-SoftOrange cursor-pointer ",
                children: data.title
            }),
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("p", {
                className: "text-GrayishBlue text-[15px] ",
                children: data.description
            })
        ]
    });
};


const $fa42fbc92fccf8bc$export$f60a2ab8c83631f0 = ()=>{
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("section", {
        className: "mb-12 sm:mb-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("picture", {
                children: [
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("source", {
                        media: "(max-width:640px)",
                        srcSet: (0, (/*@__PURE__*/$parcel$interopDefault($728860c89d7051d3$exports)))
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("source", {
                        media: "(min-width:641px)",
                        srcSet: (0, (/*@__PURE__*/$parcel$interopDefault($c06f1658f31f5009$exports)))
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("img", {
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($728860c89d7051d3$exports))),
                        alt: "articulo principal "
                    })
                ]
            }),
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("div", {
                className: "sm:flex",
                children: [
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("div", {
                        className: "flex-1 py-6",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("h2", {
                                className: "text-[40px] font-bold  sm:text-[58] leading-none ",
                                children: "The Bright Future of Web 3.0?"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("div", {
                        className: "flex-1  pt-9",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("p", {
                                className: "text-[13px] mb-10 sm:text-[15px]",
                                children: " We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
                            }),
                            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("button", {
                                className: " bg-SoftRed  w-[157px] h-[40px] uppercase  text-OffWhite  hover:bg-VerydarkBlue ",
                                children: "Read more"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};



const $5d164a3cee152fa1$export$b9fde6c411c336c6 = [
    {
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        title: "The Downsides of AI Artistry",
        description: "  What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        title: " Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means"
    }
];



const $70098cfd46291b9a$export$f71218916a74b1ad = ()=>{
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("aside", {
        className: "bg-VerydarkBlue text-OffWhite lg:w-[800px] h-auto py-[8px] px-[20px]",
        children: [
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("h2", {
                className: "font-bold text-SoftOrange text-[40px] ",
                children: "New"
            }),
            (0, $5d164a3cee152fa1$export$b9fde6c411c336c6).map((el)=>/*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $4bf9bf6c9965969a$export$cde7357445fb45f9), {
                    data: el
                }))
        ]
    });
};




const $960cb38ab0a7dc68$export$6bbbca8e8fda0dea = ({ data: data })=>{
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("article", {
        className: "w-[260px] h-[120px] flex   ",
        children: [
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("div", {
                children: /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("img", {
                    className: "w-[90px] h-[120px]",
                    src: data.img
                })
            }),
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("div", {
                className: "w-auto h-[120px] pl-5",
                children: /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("div", {
                    className: "w-full h-full bg-red-400",
                    children: [
                        /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("h2", {
                            className: "font-bold text-GrayishBlue text-[30px]",
                            children: data.id
                        }),
                        /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("h3", {
                            className: "font-bold text-VerydarkBlue  text-[15px] ",
                            children: data.title
                        }),
                        /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("p", {
                            className: "text-[13px]  py-2 ",
                            children: data.description
                        })
                    ]
                })
            })
        ]
    });
};


var $19760d37130eed0d$exports = {};
$19760d37130eed0d$exports = new URL("image-gaming-growth.d7b072e7.jpg", "file:" + __filename).toString();


var $09aa9eb74840ceb8$exports = {};
$09aa9eb74840ceb8$exports = new URL("image-retro-pcs.1a95770e.jpg", "file:" + __filename).toString();


var $4be5761aadbb53f1$exports = {};
$4be5761aadbb53f1$exports = new URL("image-top-laptops.5a0d7251.jpg", "file:" + __filename).toString();


const $5e92234e8462dc94$export$b5738e83c092973d = [
    {
        id: "01",
        title: "Reviving Retro PCs",
        description: "What happens when old PCs are given modern upgrades?",
        img: (0, (/*@__PURE__*/$parcel$interopDefault($09aa9eb74840ceb8$exports)))
    },
    {
        id: "02",
        title: "Top 10 Laptops of 2022",
        description: "Our best picks for various needs and budgets.",
        img: (0, (/*@__PURE__*/$parcel$interopDefault($4be5761aadbb53f1$exports)))
    },
    {
        id: "03",
        title: "The Growth of Gaming",
        description: "How the pandemic has sparked fresh opportunities.",
        img: (0, (/*@__PURE__*/$parcel$interopDefault($19760d37130eed0d$exports)))
    }
];


const $5df2e976c66d7d99$export$542292e457dba1b9 = ()=>{
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)("section", {
        className: " flex  sm:justify-between sm:flex-row  flex-col  gap-1 ",
        children: (0, $5e92234e8462dc94$export$b5738e83c092973d).map((el)=>/*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $960cb38ab0a7dc68$export$6bbbca8e8fda0dea), {
                data: el
            }))
    });
};


const $f908b397b41552a3$export$86fbec116b87613f = ()=>{
    return /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("main", {
        className: " px-4  sm:px-14 pt-6 pb-6 overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $dab0016196d00d98$export$8b251419efc915eb), {}),
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsxs)("div", {
                className: "sm:flex pt-4 sm:gap-8 h-auto overflow-hidden mb-12",
                children: [
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $fa42fbc92fccf8bc$export$f60a2ab8c83631f0), {}),
                    /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $70098cfd46291b9a$export$f71218916a74b1ad), {})
                ]
            }),
            /*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $5df2e976c66d7d99$export$542292e457dba1b9), {})
        ]
    });
};



const $366f189997649a4c$var$root = (0, $VjlY2$reactdomclient.createRoot)(document.getElementById("root"));
$366f189997649a4c$var$root.render(/*#__PURE__*/ (0, $VjlY2$reactjsxruntime.jsx)((0, $f908b397b41552a3$export$86fbec116b87613f), {}));


//# sourceMappingURL=main.js.map
