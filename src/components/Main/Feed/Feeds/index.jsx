import React from 'react';
import {Li, IconHeart, IconChat, IconSocial } from "./style";


export default function Feeds(props) {
  return (
   <Li>
       <div className="infoUserPost">
           <div className="imgUserPost"></div>
            <div className="nameAndHour">
                <strong>{props.name}</strong>
                <p>{props.time}</p>
            </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi doloremque, 
            ducimus laborum voluptatum dolorum perspiciatis sapiente odit. Praesentium, 
            quisquam! Molestiae nobis et quaerat obcaecati repellat molestias distinctio 
            enim earum natus.
        </p>
        <div className="actionBtnPost">
            <button type="button" class="filesPost like"><IconHeart></IconHeart >Curtir</button>
            <button type="button" class="filesPost comment"><IconChat></IconChat >Comentar</button>
            <button type="button" class="filesPost share"><IconSocial></IconSocial >Compartilhar</button>
        </div>
       
   </Li>
  )}
