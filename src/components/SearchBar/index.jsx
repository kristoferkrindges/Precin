import React, { useState } from "react";
import {
	NavSearchBar,
	SearchInputs,
	InputName,
	TextInput,
	DataResult,
	Result,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data }) {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			return value.product.toLowerCase().includes(searchWord.toLowerCase());
		});
		console.log(newFilter);

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered("");
	};
	return (
		<NavSearchBar>
			<SearchInputs>
				<InputName
					type="text"
					placeholder={placeholder}
					value={wordEntered}
					onChange={handleFilter}
				/>
				<TextInput>
					{filteredData.length === 0 ? (
						<SearchIcon />
					) : (
						<CloseIcon id="clearBtn" onClick={clearInput} />
					)}
				</TextInput>
			</SearchInputs>

			{filteredData.length !== 0 && (
				<DataResult>
					{filteredData.slice(0, 5).map((value, key) => {
						return (
							<Link className="dataItem" to={`/search_result/${value.product}`}>
								<Result> {value.product} </Result>
							</Link>
						);
					})}
				</DataResult>
			)}
		</NavSearchBar>
	);
}

export default SearchBar;
