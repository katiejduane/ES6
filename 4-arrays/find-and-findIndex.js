const colors = [
    {
        colorCode: "rgb(220, 20, 60)",
        colorName: "Red",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Love, romance, danger, attention, warmth, comfort, energy, excitement,
        intensity, passion, fire, life, blood.`]
    },

    {
        colorCode: "rgb(218, 112, 214)",
        colorName: "Pink",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Romance, love, gentleness, calm, tenderness, kindness, sweetness, charm, 
        playfulness, calm, optimism.`]
    },

    {
        colorCode: "rgb(245, 155, 6)",
        colorName: "Orange",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Happiness, energy, excitement, enthusiasm, warmth, prosperity, determination,
        change, stimulation, youthfulness.`]
    },

    {
        colorCode: "rgb(255, 215, 0)",
        colorName: "Yellow",
        textColor: "rgb(90, 87, 122)",
        attributes: [`Happiness, laughter, cheer, warmth, positivity, hunger, intensity, cowardice,
        sunshine, summer, levity.`]
    },
]

// Array.protoype.find()
// the callback takes UP to 3 args: the first is what we are on in the loop, 2nd is the index, 
// 3rd is context if you wanted to change what 'this' meant
const firstFoundColor = colors.find(color => color.colorName === "Yellow");
console.log(firstFoundColor)

const impossibleFind = colors.find((color)=>{
    if (color.colorName === "Purple"){
        return true;
    }else{
        return false;
    }
})

console.log(impossibleFind)

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory.find(fruit => fruit.name === 'cherries');
// console.log(result) 


// Array.protoype.findIndex()
const firstFoundColorIndex = colors.findIndex((color) => {
    if(color.colorName === "Yellow"){
        return true;
    }else{
        return false;
    }
});
console.log(firstFoundColorIndex)
