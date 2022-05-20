import styled from "styled-components"
import {IoImagesOutline} from "react-icons/io5"

export const Container = styled.div`
    /* newPost */
    background: black;
    width: 100%;
    height: 240px;
    margin: 50px 0;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 10px;
    box-shadow: 1px 0 3px rgb(0,0,0,0.2);

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
        color: #23a0ff;
        padding: 20px
        
    }

    .formPost{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
    .formPost textarea{
        height: 90px;
        background: #396a90;
        margin: 15px 0%;
        padding: 25px;
        border-radius: 10px;
        resize: none;
        outline: none;
        border: 0;

        font-weight: bold;
        font-family: 'Roboto', 'sans-serif';
        color: #ffff;
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
        font-weight: bold;
        outline: none;
        cursor: pointer;
        border: 0;
        border-radius: 10px;
        
        
    }

    .formPost .iconsAndButton button.btnSubmitForm:hover{
        background: #ffff;
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