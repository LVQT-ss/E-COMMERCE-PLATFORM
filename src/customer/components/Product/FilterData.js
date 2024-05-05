export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
]
export const filters    = [
    {
        id: "color", 
        name: "Color", 
        options: [
            { value: "white", label: "White" },
             { value: "beige", label: "Beige" }, 
             { value: "blue", label: "Blue" }, 
             { value: "brown", label: "Brown" },
              { value: "green", label: "Green" }, 
              { value: "purple", label: "Purple" },
              { value: "yellow", label: "Yellow" },
]},
    {
        id:"size",
        name:"Size",
        options : [
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
        ]
    }

]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export const singleFilter    = [
    {
        id:"price",
        name:"Price",
        options : [
            {value:"159 - 399 ", label:"150 to 399"},
            {value:"159 - 399 ", label:"150 to 399"},
            {value:"159 - 399 ", label:"150 to 399"},
            {value:"159 - 399 ", label:"150 to 399"},
        ],
    },
    {
        id:"discount",
    name:"Discount Range",
    options : [
        {value:"70 ", label:"70% and above"},
        {value:"80 ", label:"80% and above"},
        {value:"90 ", label:"90% and above"},
    ],
    },
    {
            id:"stock",
            name:"Available stock",
            options : [
                {value:"in_stock", label:"còn hàng"},
                {value:"out_of stock ", label:"hết hàng"},
            ],
    }
]


export const sortOptions = [
{name :"price : low to high" , query    : "price_low", current :false},
{name :"price : high to low" , query    : "price_high", current :false},
]
