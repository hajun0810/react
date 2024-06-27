import { atom } from "recoil";

export const mainsidebarShowAtom = atom({
    key: "mainsidebarShowState", //key, 사용할 일은 거의 없다. 형식상 걸어둔 것.
    default: false               //value
});
