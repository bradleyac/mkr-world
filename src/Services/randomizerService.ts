import { Items, type ItemConfig } from "../Components/Randomizer/ItemState";

export const randomizerService = {
  getItems: () => {
    const configJson = localStorage.getItem("mkr-world-items");
    let itemConfigs: ItemConfig[];

    if (configJson) {
      itemConfigs = JSON.parse(configJson);
    }
    else {
      itemConfigs = Items.map(item => { return { item: item, banned: false } })
      localStorage.setItem("mkr-world-items", JSON.stringify(itemConfigs))
    }

    const states = itemConfigs.map(ic => ({ ...ic, selected: Math.random() > .5 }));

    return states;
  },
  setItems: (items: ItemConfig[]) => {
    localStorage.setItem("mkr-world-items", JSON.stringify(items.map(item => ({ item: item.item, banned: item.banned }))));
  }
}