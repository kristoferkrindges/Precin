import styled from "styled-components"
import {IoHeartOutline, IoChatbubbleOutline, IoShareSocialOutline} from "react-icons/io5"

export const Li = styled.li`
    margin-bottom: 50px;
    width: 100%;
    background: rgba(22, 24, 47, 1);
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 50px 70px -30px rgba(0, 0, 0, 0.8);

    .infoUserPost{
        display: flex;
        align-items: center;

    }

    .infoUserPost .imgUserPost{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #333;
    }

    .infoUserPost .nameAndHour{
        margin-left: 10px;
    }

    .infoUserPost .nameAndHour > strong{
        color: white;

    }

    .infoUserPost .nameAndHour > p{
        font-size: 12px;
        color: white;

    }

    p{
        width: 100%;
        margin: 20px 0;
        font-weight: bold;
        color: white;

    }

    .actionBtnPost{
        display: flex;
        align-items: center;
        justify-content: center;
    }
.actionBtnPost .filesPost{
        display:flex;
        align-items: center;
        justify-content: center;

        padding: 5px 20px;
        margin-right: 10px;

        border: 0;
        outline: none;
        border-radius: 10px;
        cursor: pointer;

        color: #fff;
        font-weight: bold;
        font-size: 16px;
        transition: background 0.2s;

    }

    .actionBtnPost .filesPost svg{
        margin-right: 5px;
        stroke: white;
    }

    .like{
        background: #ff6b6b;
    }

    .like:hover{
        background: rgb(248, 75, 75);
    }

    .comment{
        background: #ffc320;
    }

    .comment:hover{
        background: rgb(245, 180, 0);
    }

    .share{
        background: #23a0ff;
    }

    .share:hover{
        background: rgba(8, 141, 241);
    }
`


export const IconHeart = styled(IoHeartOutline)`
    stroke: red;
    width: 15px;
    height: 15px;
`
;

export const IconChat = styled(IoChatbubbleOutline)`
    stroke: #256ce1;
    width: 15px;
    height: 15px;
`
;

export const IconSocial = styled(IoShareSocialOutline)`
    stroke: #256ce1;
    width: 15px;
    height: 15px;
`;