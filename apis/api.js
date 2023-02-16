import axios from 'axios';
import { useState, useEffect } from 'react';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'edd3a500-7d10-4519-bb14-81d6fdce1aaa'
    }
};

const getAssets = async (index) => {
    try {
        const response = await axios.get("https://api.nftport.xyz/v0/solana/nfts/okay-bears-3fb117dd?page_number=1&page_size=50&include=metadata&refresh_metadata=false", options);
        const response2 = await axios.get("https://api.nftport.xyz/v0/solana/accounts/collections/Gni7iXunhUnKgb3aewouPmkmBL6qZKD9avEfnncFjCwi?type=owns_collections_nfts&page_size=50", options);

        let data = response.data
        let data2 = response2.data

        let img = data.nfts[index].metadata.image
        let text = data.nfts[index].metadata.name

        let img2 = data.nfts[index + 3].metadata.image
        let text2 = data.nfts[index + 3].metadata.name

        let img3 = data.nfts[index + 5].metadata.image
        let text3 = data.nfts[index + 5].metadata.name
        console.log(img3, text3);

        let nameActor = data2.collections[index].name.substring(0, 10);

        return { image: img, name: text, nameActor: nameActor, image2: img2, name2: text2, image3: img3, name3: text3 };
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default getAssets;
