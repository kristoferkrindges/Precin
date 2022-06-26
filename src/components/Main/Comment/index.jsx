import React, { useState, useEffect } from "react";
import { Ul } from "./style";
import Comments from "../Comment/Comments";

export default function Comment(props) {
	return (
		<Ul>
			<Comments
				key={1}
				name={"Samanta Gomez"}
				time={"1h"}
				public={"Tá no #precin"}
				precin={25}
				precao={9}
				img_url={
					"https://super.abril.com.br/wp-content/uploads/2021/07/SI_429_Oraculo_cachorrinho_SITE.png"
				}
			/>
			<Comments
				key={1}
				name={"Andressa Garcias"}
				time={"2h"}
				public={"Realmente, a publicação condiz com o seu valor."}
				precin={15}
				precao={4}
				img_url={
					"https://super.abril.com.br/wp-content/uploads/2019/04/si_cachorroinstagram_home.png"
				}
			/>

			<Comments
				key={1}
				name={"Jonathan Pereira"}
				time={"3h"}
				public={"Fui ao mercado e o produto estava realmente com esse preço."}
				precin={10}
				precao={2}
				img_url={
					"https://t.ctcdn.com.br/XY1SGrfWo0c_D9GxKrxrN0OvSns=/512x288/smart/filters:format(webp)/i558611.jpeg"
				}
			/>

			<Comments
				key={1}
				name={"Anderson Santos"}
				time={"5h"}
				public={"Show!!"}
				precin={5}
				precao={1}
				img_url={
					"https://www.hypeness.com.br/1/2020/07/Cachorros-podem-reconhecer-pessoas-n%C3%A3o-confi%C3%A1veis-foto-unsplash-3.jpg"
				}
			/>
		</Ul>
	);
}
