
export const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=5rwXNFPSGmRzYOrRG6Uf2HJrnHYc813g`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }

    })
    return gifts;
};