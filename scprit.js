document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Mc Cabelinho', image: './img/artista-mc-cabelinho.jpeg'},
        { name: 'Central Cee', image: './img/artista-central-cee.jpeg'},
        { name: 'Felipe Ret', image: './img/artista-felipe-ret.jpeg'},
        { name: 'Oruam', image: './img/artista-oruam.jpeg'},
        { name: 'Ryu the Runner', image: './img/artista-ryu-the-runner.jpeg'},
        { name: 'Tz da Coronel', image: './img/artista-tz-da-coronel.jpeg'}
    ];
    
    const albumsData = [
        { name: 'NSSMNSB', artist:'Mc Cabelinho', image: './img/album-nssmnsb.jpeg'},
        { name: 'LITLLE LOVE DELUXE', artist:'Mc Cabelinho', image: './img/album-little-love-deluxe.jpeg'},
        { name: 'Loading', artist:'Central Cee', image: './img/album-loading.jpeg'},
        { name: 'NUME', artist:'Felipe Ret', image: './img/album-nume.jpeg'},
        { name: 'Liberdade', artist:'Oruam', image: './img/album-liberdade.jpeg'},
        { name: 'Predestinado', artist:'Oruam', image: './img/album-predestinado.jpeg'},
        { name: 'SEM RÉH', artist:'Ryu the Runeer', image: './img/album-sem-reh.jpeg'},
        { name: 'Direto da Selva Deluxe', artist:'Tz da Coronel', image: './img/album-tz.jpeg'},
    ];
    
    const artistsGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
            <h3>${artist.name}</h3>
            <p>artista</p>
            </div>
        `
        artistsGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('artist-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
            <h3>${album.name}
            <p>${album.artist}</p>
            </div>
        `
        albumsGrid.appendChild(albumCard)
    })

})


