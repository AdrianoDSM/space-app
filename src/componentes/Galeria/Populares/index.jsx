import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ImagemEstilizada = styled.img`
    max-width: 212px;
    border-radius: 10px;
`

const Botao = styled.button`
    width: 100%;
    border-radius: 10px;
    border: 2px solid;
    padding: 12px 20px;
    font-size: 20px;
    border-color: #C98CF1;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    margin-top: 16px;
;
`

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento='center'>Populares</Titulo>
            <ColunaFotos>
                {fotos.map(foto=> <ImagemEstilizada
                    key={foto.id}
                    src={foto.path}
                    alt={foto.alt}
                />)}
            </ColunaFotos>
            <Botao>Ver Mais</Botao>
        </section>
    )
}

export default Populares