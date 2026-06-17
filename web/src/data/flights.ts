import type { Bottle } from "../types";
import { bottleById } from "./bottles";
export interface Flight {id:string;title:string;subtitle:string;bottleIds:string[];curated:boolean;}
export const curatedFlights: Flight[] = [
  {id:"gin-101",title:"Gin 101",subtitle:"Classic to contemporary — the essential intro flight.",bottleIds:["tanqueray","beefeater","hendricks","botanist"],curated:true},
  {id:"london-dry-classics",title:"London Dry Classics",subtitle:"Juniper-forward, bone-dry, built for a proper G&T.",bottleIds:["tanqueray","beefeater","sipsmith","fords"],curated:true},
  {id:"contemporary-craft",title:"Contemporary & Craft",subtitle:"New-wave gins pushing botanical boundaries.",bottleIds:["hendricks","monkey-47","botanist","aviation"],curated:true},
  {id:"around-the-world",title:"Around the World in Gin",subtitle:"London, Plymouth, Black Forest, Islay, Kyoto, Portland.",bottleIds:["beefeater","plymouth","monkey-47","botanist","ki-no-bi","aviation"],curated:true},
  {id:"japanese-gin",title:"Japanese Precision",subtitle:"Yuzu, cherry blossom, and green tea meet juniper.",bottleIds:["ki-no-bi","roku"],curated:true},
  {id:"navy-and-barrel",title:"High Proof & Barrel-Aged",subtitle:"Intense navy strength and oak-aged complexity.",bottleIds:["navy-strength-plymouth","tanqueray-no-ten","monkey-47"],curated:true},
];
export const bottlesForFlight = (f:Flight):Bottle[] => f.bottleIds.map(id=>bottleById(id)).filter((b):b is Bottle=>Boolean(b));
const CURRENT="gin.customFlight";
export function saveCustomFlight(f:Flight){localStorage.setItem(CURRENT,JSON.stringify(f));}
export function loadCustomFlight():Flight|null{try{const r=localStorage.getItem(CURRENT);return r?JSON.parse(r):null;}catch{return null;}}
const LIB="gin.flightLibrary";
export function loadLibrary():Flight[]{try{return JSON.parse(localStorage.getItem(LIB)||"[]");}catch{return[];}}
export function saveToLibrary(f:Flight){const lib=loadLibrary().filter(x=>x.id!==f.id);lib.unshift(f);localStorage.setItem(LIB,JSON.stringify(lib));}
export const flightById=(id:string):Flight|undefined=>curatedFlights.find(f=>f.id===id)||loadLibrary().find(f=>f.id===id)||(id==="custom"?loadCustomFlight()??undefined:undefined);
