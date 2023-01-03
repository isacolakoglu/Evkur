const firebase = require("firebase-admin");


const resolvers = {
    Query: {
        async hello(_, { name }) {
            return `Hello ${name || "World"}`;
        },

        async getUrunler() {
            const db = firebase.firestore();
            const urunler = await db.collection("urunler").get();
            return urunler.docs.map((doc) => doc.data());
        },
    },

    Mutation: {
        async addUrun(_, { statu, name, marka, model, image }) {
            const db = firebase.firestore();
            const ref = db.collection("urunler").doc();
            await ref.set({ statu, name, marka, model, image });
            return ref.id;
        },

    },
};

module.exports = resolvers;