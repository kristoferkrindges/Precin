import React, {useState, useEffect} from 'react';
import {Container, ImgIcon} from "./style";

export default function Post(props) {
  
    const [text, setText] = useState('')
    const handleChange = event => setText(event.target.value)

    const handleSubmit = event =>{}
  
    return (
    // newPost
    <Container>
        <div className="infoUser">
            <div className="imgUser">
                <strong>{props.name}</strong>
            </div>
        </div>
        {/* Form de publicação */}
        <form className="formPost" addFeed={props.addFeed}>
            <textarea name="textarea" placeholder='Boas Novas?' value={text} onChange={handleChange}></textarea>
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
