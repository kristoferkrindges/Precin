import React from "react";
import {Container} from "./styles";
import Navbar from "../Header/Navbar"

export default function Header(props){
    return(
        <Container>
            <Navbar></Navbar>
        </Container>
    )
}

// export default function Header(props){
//     return(
//         <Container>
//             <div className="toolbar">
//                 <div className="">
//                     <span>Precinho</span>
//                 </div>
//                 <div className="">
//                     <button>Novo Post</button>
//                     <span>img1</span>
//                     <span>img2</span>
//                 </div>
//             </div>
//         </Container>
//     )
// }