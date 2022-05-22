import styled from "styled-components"
import {IoImagesOutline} from "react-icons/io5"

export const Container = styled.div`
    /* newPost */
    background: rgba(22, 24, 47, 1);
    width: 100%;
    height: 240px;
    margin: 50px 0;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 10px;
    box-shadow: 0 50px 70px -30px rgba(0, 0, 0, 0.8);

                .infoUser{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .infoUser .imgUser{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #333;
    }

    .infoUser .imgUser strong{
        font-size: 16px;
        margin-left: 30px;
        color: white;
        padding: 20px
        
    }

    .formPost{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
    .formPost textarea{
        height: 100px;
        background-color: white;
        margin: 15px 0%;
        padding: 25px;
        border-radius: 10px;
        resize: none;
        outline: none;
        border: 0;
        font-size: 18px;
        font-weight: 600;
    }

    .formPost ::placeholder{
        color: rgba(22, 24, 47, 1);
    }

    .formPost .iconsAndButton{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .formPost .iconsAndButton .icons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100px;
        
    }


    .formPost .iconsAndButton .icons button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        cursor: pointer;
        background: none;
        border: 0;
        outline: none;
        
    }

    .formPost .iconsAndButton button.btnSubmitForm{
        background: #256ce1;
        padding: 10px 50px;
        color: #ffff;
        font-weight: 500;
        outline: none;
        cursor: pointer;
        border: 0;
        border-radius: 5px;
        
        &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;

    }
        
    }

    .formPost .iconsAndButton button.btnSubmitForm:hover{
        background: white;
        color: black;  
    }
    
    .formPost .iconsAndButton button.btnFileForme svg:hover{
        stroke: white;    
    }

`
export const ImgIcon = styled(IoImagesOutline)`
	stroke: #256ce1;
	width: 15px;
	height: 15px;

`;