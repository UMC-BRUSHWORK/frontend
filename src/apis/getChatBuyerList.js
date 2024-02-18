import { GET } from "./api2";
import { getChatBuyer } from "./getChatBuyer";

export const getChatBuyerList = async ({productId}) => {
    let url = getChatBuyer;

    if (productId !== null) {
        url += `?productId=${productId}`;
    }

    const { data } = await GET(url);
    return data;
}