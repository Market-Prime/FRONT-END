import { openDB } from "idb";

const offCartObjectStore = "offCarts";

const initDB = async () => {
    return await openDB("mp", 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(offCartObjectStore)) {
                db.createObjectStore(offCartObjectStore, {
                    keyPath: "product_item",
                });
            }
        },
    });
};

export const getOffCarts = async () => {
    const db = await initDB();

    return await db.getAll(offCartObjectStore);
};

export const setOffCartItem = async (payload) => {
    const db = await initDB();
    if (Array.isArray(payload)) {
        payload.forEach((item) => {
            db.put(offCartObjectStore, item);
        });
    } else {
        db.put(offCartObjectStore, payload);
    }
};

export const getCartCount = async () => {
    const db = await initDB();
    return await db.count(offCartObjectStore);
};

export const clearOffCarts = async () => {
    const db = await initDB();
    await db.clear(offCartObjectStore);
};
