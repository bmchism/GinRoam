import type { LearnArticle } from "../types";
export const articles: LearnArticle[] = [
  {slug:"what-is-gin",title:"What Is Gin?",subtitle:"Juniper, botanicals, and centuries of craft.",kicker:"Gin 101",sections:[
    {heading:"The essential definition",body:"Gin is a neutral spirit flavored with juniper berries and other botanicals. Juniper must be the dominant flavor — beyond that, distillers have enormous freedom to express creativity through dozens of possible botanicals."},
    {heading:"The main styles",body:"London Dry: juniper-forward, no sweeteners added after distillation. Plymouth: softer, earthier (geographically protected). Old Tom: lightly sweetened, the bridge to genever. Navy Strength: minimum 57% ABV. Contemporary/New Western: juniper balanced with or sometimes behind other botanicals."},
    {heading:"Botanicals",body:"Beyond juniper, common botanicals include coriander seed, angelica root, citrus peel, orris root, cassia bark, cardamom, and licorice. Modern gins add everything from cucumber and rose to seaweed and ant larvae."},
  ]},
  {slug:"gin-styles",title:"The Gin Styles",subtitle:"From London Dry to Genever — know what you are pouring.",kicker:"Gin 101",sections:[
    {heading:"London Dry",body:"Not a geographical designation — can be made anywhere. Must be naturally distilled, juniper-dominant, with no sweeteners or colorings added after distillation. The benchmark style."},
    {heading:"Plymouth",body:"Geographically protected to Plymouth, England. Slightly sweeter, earthier, and more aromatic than London Dry. Only one distillery makes it."},
    {heading:"Old Tom",body:"A lightly sweetened gin popular in the 18th-19th century. The bridge between malty genever and dry London gin. Essential for a proper Tom Collins or Martinez."},
    {heading:"Navy Strength",body:"Minimum 57% ABV (100 British proof). At this strength, if gin spilled on gunpowder, the powder would still ignite — the Navy\'s quality test."},
    {heading:"Contemporary / New Western",body:"Juniper present but not dominant. Emphasizes other botanicals — florals, fruits, spices. Hendrick\'s, Aviation, and Monkey 47 pioneered this movement."},
    {heading:"Genever",body:"The Dutch/Belgian ancestor of gin. Made with malt wine (like unaged whisky) plus juniper. Richer, maltier, sippable neat. Two styles: oude (old, maltier) and jonge (young, lighter)."},
  ]},
  {slug:"how-to-taste-gin",title:"How to Taste Gin",subtitle:"Neat first, then with tonic — discover the botanicals.",kicker:"Do a tasting",sections:[
    {heading:"Set up",body:"Pour 15-20ml neat in a copa glass or Glencairn. Have quality tonic water and garnishes ready for the second pass. Taste lighter gins first, navy strength last."},
    {heading:"Nose neat",body:"Swirl gently and nose with mouth open. Look for: juniper (piney, resinous), citrus (lemon, orange, grapefruit), spice (coriander, cardamom, pepper), floral (lavender, rose, chamomile), earthy (angelica, orris root)."},
    {heading:"Taste neat",body:"Small sip, let it coat your tongue. Notice how botanicals arrive in waves — juniper first? Citrus? Spice on the finish? How oily or dry is the texture?"},
    {heading:"With tonic",body:"Mix 1:2 or 1:3 with premium tonic (Fever-Tree, East Imperial). The tonic reveals different botanical layers. Garnish to complement the gin\'s character (citrus for dry, cucumber for floral, rosemary for herbal)."},
    {heading:"Score it",body:"Rate clarity of botanicals, balance, complexity, and finish. A great gin has distinct character whether neat or in a G&T."},
  ]},
];
export const articleBySlug=(slug:string)=>articles.find(a=>a.slug===slug);
export interface StyleGuide{wineType:string;description:string;profile:string;accent:string;}
export const wineTypeGuides:StyleGuide[]=[
  {wineType:"London Dry",description:"Juniper-dominant, no post-distillation sweeteners",profile:"Bold, dry, classic — the backbone of a perfect G&T.",accent:"#2E8B57"},
  {wineType:"Plymouth",description:"Softer and earthier, geographically protected",profile:"Earthy, aromatic, subtly sweet — one distillery, one style.",accent:"#4682B4"},
  {wineType:"Old Tom",description:"Lightly sweetened, historical bridge to genever",profile:"Round, slightly sweet — perfect for a Tom Collins.",accent:"#DAA520"},
  {wineType:"Navy Strength",description:"Minimum 57% ABV — gunpowder proof",profile:"Intense, bold, warming — handles dilution beautifully in cocktails.",accent:"#1C2951"},
  {wineType:"Contemporary",description:"Juniper balanced with or behind other botanicals",profile:"Creative, diverse — cucumber, lavender, yuzu, and beyond.",accent:"#7B68EE"},
  {wineType:"Barrel-Aged",description:"Rested in oak casks after distillation",profile:"Warm, vanilla, spice — gin meets whisky influence.",accent:"#A0522D"},
  {wineType:"Genever",description:"Dutch/Belgian ancestor — malt wine base + juniper",profile:"Rich, malty, sippable — gin\'s original form.",accent:"#6B8E23"},
  {wineType:"Sloe Gin",description:"Sloe berries macerated in gin — a liqueur",profile:"Sweet, berry, warming — the autumn classic.",accent:"#8B008B"},
];
