import styled from "styled-components"
import { 
    IoFastFoodOutline, 
    IoCartOutline, 
    IoPricetagOutline, 
    IoLocationOutline, 
    IoImagesOutline,
    IoDuplicateOutline,
    IoArrowDownOutline,
    IoAlarmOutline,
    IoBrushOutline,
} from "react-icons/io5";

export const Container = styled.main`
    /* max-width: 1200px; */
    margin: 0 auto;
    position: fixed;
    margin-left: 18%;
       
`

export const Description = styled.div`
    display:flex;
    text-align: center;
    align-items: center;
    margin-top: 3%;
    width: 100vh;
    margin-left: 21%;
`

export const Title = styled.h1`
    display:flex;
    text-align: center;
    align-items: center;
    font-size: 2.0rem;
    font-weight: 700;
    color: ${({ theme }) => theme.title};
`
// Cards
export const Sliders = styled.div`
    display:flex;
    align-items: center;
    /* margin-top: 10%; */
    width: 130vh;
    height: 80vh;

    button.rec-dot{
        background-color: #4070F4;
       
    }

    .rec-arrow{
        background-color: #4070F4
    }
`
export const Controller = styled.div`
    /* width: 52em;
    height: 33em; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 129vh;
    height: 80vh;
    
`

export const SliderContainer = styled.div`
    max-width: 1120px;
    width: 100%;
    padding: 40px 0;
`
export const SlideContent = styled.div`
    margin: 0 40px;
    overflow: hidden;
    border-radius: 25px;
`

export const CardWrapper = styled.div`
    border-radius: 25px;
    background-color: #FFF;
    width: 100vh;
    height: 70vh;
    box-shadow: 0 50px 70px -40px rgba(0, 0, 0, 0.8);
	border: 1px solid black;
	background: ${({ theme }) => theme.navbar};
`

export const Card = styled.div`
    border-radius: 25px;
`

export const ImageContent = styled.div`
    position: relative;
    row-gap: 5px;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 14px;
`

export const Overlay = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    height: 27vh;
    width: 100%;
    background-color: #4070F4;
    border-radius: 25px 25px 0 25px;

    &::before,
    &::after{
        content: '';
        position: absolute;
        right: 0;
        bottom: -40px;
        height: 40px;
        width: 40px;
        background-color: #4070F4;
    }

    &::after{
        border-radius: 0 25px 0 0;
        background: ${({ theme }) => theme.navbar};;
    }
`

export const CardImage = styled.div`
    position: relative;
    height: 150px;
    width: 150px;
    /* border-radius: 50%;
    background: ${({ theme }) => theme.navbar}; */
    padding: 3px;

    & img{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        object-fit: cover
    }
    
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;

    & .precin{
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: 5%;
    }
`

export const NameProduct = styled.h2`
    font-size: 2.0rem;
    font-weight: 500;
    color: ${({ theme }) => theme.title};
    margin-top: 10%;
    margin-bottom: 3%;
`

export const Instruction = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.title};
    text-align: center;
    margin-top: 2%;
`
export const ContainerInput = styled.div`
    position: relative;
    height: 50px;
    width: 70vh;
    background-color: rgba(0, 0, 0, 0.2);
    margin: auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    transition: all 0.3s ease;
    margin-bottom: 10%;
`

export const InputName = styled.input`
    position: absolute;
    height: 50px;
    width: 70vh;
    border-radius: 25px;
    background: #fff;
    outline: none;
    border: none;
    padding-left: 20px;
    font-size: 18px;
    color: black;
    transition: background-color 0.5s ease-in;

    &:focus{
       background-color: rgba(0, 0, 0, 0.1);
       color: #fff;
    }
`

export const TextInput = styled.h3`
    position: absolute;
    right: -2px;
    top: 0;
    width: 50px;
    background-color: #4070F4;
    height: 100%;
    border-radius: 0 25px 25px 0;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
`
export const Writer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    /* height: 70px; */
    margin-top: 15%;
    width: 65vh;
    margin: auto;
    text-align: center;
    font-size: 4.5rem;
    font-weight: bold;
    color: #4070F4;

`

export const SelectMarket = styled.select`
    height: 50px;
    width: 70vh;
    border: 1px solid black;
    border-radius: 25px;
    padding: 0.25em 0.5em;
    /* margin-top: 5%; */
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: ${({ theme }) => theme.title};
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    text-align-last: center;
    z-index: 10;
`
// Select Dinamic
export const SelectMenu = styled.div`
    /* width: 380px; */
    /* margin: 140px auto; */
`

export const SelectBtn = styled.div`
    display: flex;
    height: 50px;
    width: 50vh;
    background: #fff;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border: 1px solid black;
`

export const BtnText = styled.span`
    color: black;
`
export const Options = styled.ul`
    position: relative;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    z-index: 15;
    /* display: none; */
    
`
export const Option = styled.li`
    display: flex;
    height: 55px;
    cursor: pointer;
    padding: 0 16px;
    border-radius: 8px;
    align-items: center;
    background: #fff;

    & img{
        width: 40px;
        height: 40px;
    }

    &:hover{
        background: #F2F2F2;
    }
`

export const OptionText = styled.span`
    font-size: 18px;
    color: black;
`
export const IoArrowDown = styled(IoArrowDownOutline)`
	stroke: black;
    font-size: 1.5rem;
    transition: 0.3s;
    
	/* height: 100%;
    width: 25%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #4070F4; */
`;

// export const Option = styled.option`

// `
export const InputImage = styled.input`
    display: none;
`
export const LabelImage = styled.label`
    color: ${({ theme }) => theme.title};
    background-color: #4070F4;
    height: 50px;
    width: 10vh;
    /* text-align: center; */
    border: 1px solid var(--select-border);
    border-radius: 25px;
    padding: 0.25em 0.5em;
    font-size: 1.5rem;
    cursor: pointer;
    /* line-height: 1.1; */
    margin: 0;
    /* position: absolute; */
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8%;

    &svg{
        margin-left: 5%;
    }

`
export const Ul = styled.ul`
    margin-top: 6%;
`
export const Result = styled.h2`
    color: ${({ theme }) => theme.title};
    font-size: 2.0rem;
    font-weight: 900;
    white-space: nowrap;
    margin-top: 10%;
    margin-right: 25px;
`

export const Button = styled.button`
    height: 50px;
    width: 30vh;
    border: none;
    font-size: 2.0rem;
    font-weight: 700;
    color: white;
    padding: 8px 16px;
    background-color: #4070F4;
    border-radius: 25px;
    margin: 0;
    margin-top: 2%;
    cursor: pointer;
    transition: all 0.3s ease;
    display:flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background: #265DF2;
    }
`

export const IconProduct = styled(IoFastFoodOutline)`
	stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover;
    /* border-radius: 50%;
    border: 4px solid #4070F4; */
`;

export const IconProduct2 = styled(IoFastFoodOutline)`
	/* stroke: #fff;
	height: 100%;
    width: 25%;
    object-fit: cover; */
    /* border-radius: 50%;
    border: 4px solid #4070F4; */
`;

export const IoCart = styled(IoCartOutline)`
    stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const IoCart2 = styled(IoCartOutline)`
    stroke: green;
    font-size: 1.5rem;
    margin-right: 12px;
	/* height: 100%;
    width: 100%;
    object-fit: cover; */
`;
export const IoPrice = styled(IoPricetagOutline)`
    stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const IoPrice2 = styled(IoPricetagOutline)`
    /* stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover; */
`;

export const IoEarth = styled(IoLocationOutline)`
    stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const IoEarth2 = styled(IoLocationOutline)`
    /* stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover; */
`;

export const IoImage = styled(IoImagesOutline)`
    stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const IoImage2 = styled(IoDuplicateOutline)`
    stroke: white;
	/* height: 100%;
    width: 100%;
    object-fit: cover; */
`;
export const IoAlarm = styled(IoAlarmOutline)`
    stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const IoBrush = styled(IoBrushOutline)`
    stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover;
`;


