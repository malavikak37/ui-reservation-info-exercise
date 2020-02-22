const getHotelData = async () => {
    const res = await fetch("./data/data.json");
    const jsonRes = await res.json();
    return jsonRes;
}

export default getHotelData;