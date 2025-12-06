import { useEffect, useState } from "react";
import { randomizerService } from "../../Services/randomizerService";
import styles from "./Randomizer.module.css";
import type { ItemState } from "./ItemState";

export const Randomizer = () => {
  const [itemConfigs, setItemConfigs] = useState<ItemState[] | undefined>(undefined)

  useEffect(() => {
    const itemConfigs = randomizerService.getItems();
    setItemConfigs(itemConfigs);
  }, [])

  const toggleItem = (item: string) => {
    const newItems = [...(itemConfigs?.map(ic => ic.item === item ? { item: item, banned: !ic.banned, selected: false } : ic) ?? [])]
    randomizerService.setItems(newItems);
    setItemConfigs(randomizerService.getItems());
  }

  const randomize = () => {
    setItemConfigs(randomizerService.getItems());
  }

  return (
    <div className={styles.randomizerContainer}>
      <h1>Mario Kart World Item Randomizer</h1>
      {itemConfigs ? (
        <>
          <div className={styles.itemList}>
            {
              itemConfigs.map(item => <Item key={item.item} item={item} toggleItem={toggleItem}></Item>)
            }
          </div>
          <button type="button" onClick={randomize}>Randomize</button>
        </>)
        : <p>Loading...</p>}
    </div>
  );
}

const Item = ({ item, toggleItem }: { item: ItemState, toggleItem: (str: string) => void }) => {
  const className = item.banned ? `${styles.item} ${styles.banned}` : item.selected ? `${styles.selected} ${styles.item}` : styles.item;
  return (<div className={styles.itemContainer}><img className={className} src={`/icons/${item.item}`} alt={item.item} onClick={() => toggleItem(item.item)} /></div>);
}