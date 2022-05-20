import React from 'react';
import {Container, ImgIcon} from "./style";

export default function Post(props) {
  return (
    // newPost
    <Container>
        <div className="infoUser">
            <div className="imgUser">
                <strong>{props.name}</strong>
            </div>
        </div>
        {/* Form de publicação */}
        <form className="formPost">
            <textarea name="textarea" placeholder='Qual o melhor precin do momento?'></textarea>
            <div className="iconsAndButton">
                <div className="icons">
                    <button className="btnFileForme"><ImgIcon></ImgIcon></button>
                </div>
                <button className="btnSubmitForm">Publicar</button>
            </div>
        </form>
        
    </Container>
  )
}
