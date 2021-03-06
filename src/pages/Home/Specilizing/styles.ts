import styled  from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: #5656cd;
`

export const Content = styled.section`
    max-width: 1000px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    padding: 80px 0px;
    min-height: 500px;
    align-items: center;


`

export const Title = styled.div`
    
    h2{
        color: white;
        font-size: 2rem;
    }
`
export const Spec = styled.div`
    display: flex;
    padding: 40px 0px;
    margin-top: 30px;
    justify-content: center;
    
    
    @media (max-width: 1000px)
    {
        flex-wrap: wrap;
        padding: 30px 0px;
        margin-top: 0px;
        div{
            margin: 10px 0px;
        }
        .white{
            transform: unset !important;
            margin: 10px 0px 10px 25px !important;
        }
    }
    @media (max-width: 800px)
    {
        img{
            width: 180px;
            height: 180px;
        }
    }
    @media (max-width: 720px)
    {
        flex-direction: column;
        align-items: center;

        img{
            width: 180px;
            height: 180px;
        }
        .white{
            margin: 10px 0px !important;
        }
    }




    div{
        background-color: rgba(27, 69, 17, 0.5);
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 320px;
        border-radius: 20px;
        
        img{
            width: 250px;
            height: 220px;
            border-radius: 20px;
            object-fit: cover;
        }
        h1{
            color: white;
            margin-top: 8px;
            font-size: 1.4rem;
        
        }
        p {
            font-size: 1.1rem;
            text-align: center;

            color: white;
            margin-top: 12px;
        }
        &:hover{
            filter: brightness(.8);
            cursor: pointer;
        }
    }
    div.white{
        margin: 0px 40px;
        background-color: white;
        transform: scale(1.23);
        h1{
            color: #222;
        }
        p{
            color: #222;
        }
    }
`
