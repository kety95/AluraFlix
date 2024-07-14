import './CategoriaNome.css'

export default function CategoriaNome({ nomeCategoria, big }) {
    let cor = ''
    if (nomeCategoria === 'front end'){
        cor = '#6BD1FF'
    }else if (nomeCategoria === 'back end'){
        cor = '#00C86F'
    }else if (nomeCategoria === 'inovacao'){
        cor = '#FFBA05'
    }else if (nomeCategoria === 'gestao'){
        cor = '#DB3C53'
    }

    return (
        <span
            style={{ backgroundColor: `${cor}`}} 
            className={`container ${big ? 'big' : 'small'} `}
        >
            { nomeCategoria }
        </span>
    )
}