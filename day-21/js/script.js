import { emojis } from "./emojis-data.js";

const emojiBtn = document.querySelector("#emoji-btn");
const content = document.querySelector("#content");
const emojiName = document.querySelector("#emoji-name");

// const emojis = [
//     { code: 128512, name: "Grinning Face" },
//     { code: 128513, name: "Beaming Face with Smiling Eyes" },
//     { code: 128514, name: "Face with Tears of Joy" },
//     { code: 128515, name: "Smiling Face with Open Mouth" },
//     { code: 128516, name: "Grinning Face with Smiling Eyes" },
//     { code: 128517, name: "Grinning Face with Sweat" },
//     { code: 128518, name: "Rolling on the Floor Laughing" },
//     { code: 128519, name: "Smiling Face with Halo" },
//     { code: 128520, name: "Smirking Face" },
//     { code: 128521, name: "Winking Face" },
//     { code: 128522, name: "Smiling Face with Smiling Eyes" },
//     { code: 128523, name: "Face Savoring Food" },
//     { code: 128524, name: "Relieved Face" },
//     { code: 128525, name: "Smiling Face with Heart-Eyes" },
//     { code: 128526, name: "Face with Sunglasses" },
//     { code: 128527, name: "Smirking Face" },
//     { code: 128528, name: "Neutral Face" },
//     { code: 128529, name: "Expressionless Face" },
//     { code: 128530, name: "Confused Face" },
//     { code: 128531, name: "Kissing Face" },
//     { code: 128532, name: "Kissing Face with Closed Eyes" },
//     { code: 128533, name: "Kissing Face with Smiling Eyes" },
//     { code: 128534, name: "Face with Tongue" },
//     { code: 128535, name: "Face with Tongue and Winking Eye" },
//     { code: 128536, name: "Face with Tongue and Tightly-Closed Eyes" },
//     { code: 128537, name: "Disappointed Face" },
//     { code: 128538, name: "Worried Face" },
//     { code: 128539, name: "Angry Face" },
//     { code: 128540, name: "Pouting Face" },
//     { code: 128541, name: "Crying Face" },
//     { code: 128542, name: "Loudly Crying Face" },
//     { code: 128543, name: "Face with Look of Triumph" },
//     { code: 128544, name: "Disappointed but Relieved Face" },
//     { code: 128545, name: "Frowning Face with Open Mouth" },
//     { code: 128546, name: "Anguished Face" },
//     { code: 128547, name: "Fearful Face" },
//     { code: 128548, name: "Weary Face" },
//     { code: 128549, name: "Sleeping Face" },
//     { code: 128550, name: "Face with Medical Mask" },
//     { code: 128551, name: "Face with Thermometer" },
//     { code: 128552, name: "Face with Head-Bandage" },
//     { code: 128553, name: "Nauseated Face" },
//     { code: 128554, name: "Face Vomiting" },
//     { code: 128555, name: "Sneezing Face" },
//     { code: 128556, name: "Hot Face" },
//     { code: 128557, name: "Cold Face" },
//     { code: 128558, name: "Woozy Face" },
//     { code: 128559, name: "Dizzy Face" },
//     { code: 128560, name: "Exploding Head" },
//     { code: 128561, name: "Cowboy Hat Face" },
//     { code: 128562, name: "Partying Face" },
//     { code: 128563, name: "Smiling Face with Hearts" },
//     { code: 128564, name: "Yawning Face" },
//     { code: 128565, name: "Shushing Face" },
//     { code: 128566, name: "Face with Hand Over Mouth" },
//     { code: 128567, name: "Face with Monocle" },
//     { code: 9989, name: "White Heavy Check Mark" },
//     { code: 9994, name: "Raised Fist" },
//     { code: 9995, name: "Raised Hand" },
//     { code: 9996, name: "Victory Hand" },
//     { code: 127877, name: "Santa Claus" },
//     { code: 127873, name: "Wrapped Gift" },
//     { code: 127880, name: "Balloon" },
//     { code: 127752, name: "Sun Behind Cloud" },
//     { code: 127765, name: "Full Moon Face" },
//     { code: 127757, name: "Earth Globe Americas" },
//     { code: 127758, name: "Earth Globe Europe-Africa" },
//     { code: 127759, name: "Earth Globe Asia-Australia" },
//     { code: 127760, name: "Globe with Meridians" },
//     { code: 127761, name: "New Moon" },
//     { code: 127762, name: "Waxing Crescent Moon" },
//     { code: 127763, name: "First Quarter Moon" },
//     { code: 127764, name: "Waxing Gibbous Moon" },
//     { code: 127794, name: "Seedling" },
//     { code: 127795, name: "Evergreen Tree" },
//     { code: 127796, name: "Deciduous Tree" },
//     { code: 127797, name: "Palm Tree" },
//     { code: 127798, name: "Cactus" },
//     { code: 127799, name: "Tulip" },
//     { code: 127800, name: "Cherry Blossom" },
//     { code: 127801, name: "Rose" },
//     { code: 127802, name: "Hibiscus" },
//     { code: 127803, name: "Sunflower" },
//     { code: 127804, name: "Blossom" },
//     { code: 127805, name: "Ear of Corn" },
//     { code: 127806, name: "Sheaf of Rice" },
//     { code: 127807, name: "Herb" },
//     { code: 127808, name: "Four Leaf Clover" },
//     { code: 127809, name: "Maple Leaf" },
//     { code: 127810, name: "Fallen Leaf" },
//     { code: 127811, name: "Leaf Fluttering in Wind" },
//     { code: 127812, name: "Grapes" },
//     { code: 127813, name: "Melon" },
//     { code: 127814, name: "Watermelon" },
//     { code: 127815, name: "Tangerine" },
//     { code: 127816, name: "Lemon" },
//     { code: 127817, name: "Banana" },
//     { code: 127818, name: "Pineapple" },
//     { code: 127819, name: "Red Apple" },
//     { code: 127820, name: "Green Apple" },
//     { code: 127821, name: "Pear" },
//     { code: 127822, name: "Peach" },
//     { code: 127823, name: "Cherries" },
//     { code: 127824, name: "Strawberry" },
//     { code: 127825, name: "Kiwi Fruit" },
//     { code: 127826, name: "Tomato" },
//     { code: 127827, name: "Coconut" }
// ];

const showEmojiAndName = (htmlcode, name) => {
    content.innerHTML = htmlcode;
    emojiName.textContent = name;
}

const getRandomNumber = () => Math.floor(Math.random() * emojis.length);

const getEmoji = () => {
    const rNum = getRandomNumber();
    const htmlcode = emojis[rNum].emoji;
    const name = emojis[rNum].name;
    showEmojiAndName(htmlcode, name);
}

emojiBtn.addEventListener("click", () => {
    content.classList.remove("regular-fs");
    content.innerHTML = "";
    getEmoji();
});