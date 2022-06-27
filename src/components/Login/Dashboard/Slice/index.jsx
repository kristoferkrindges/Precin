import React from "react";
import { Container, Context, Ul } from "./style";
import Carrousel from "react-elastic-carousel";
import Feeds from "../../../Main/Feed/Feeds";
import Info from "../Info";
import SmallFeed from "../SmallFeed";

function Slice(props) {
	// Carrousel
	const breakPoints = [{ width: 500, itemsToShow: 1 }];
	return (
		<Container>
			<Context>
				<Carrousel breakPoints={breakPoints}>
					<SmallFeed market={"Zaffari"}></SmallFeed>
					<SmallFeed market={"Carrefour"}></SmallFeed>
					<SmallFeed market={"Nacional"}></SmallFeed>
					<SmallFeed market={"Outro"}></SmallFeed>
					<SmallFeed market={"Zaffari"}></SmallFeed>
				</Carrousel>
			</Context>
			{/* <Context>
				<Carrousel breakPoints={breakPoints}>
					<Info></Info> 
					<Feeds></Feeds>
				</Carrousel>
			</Context> */}
		</Container>
	);
}

export default Slice;
