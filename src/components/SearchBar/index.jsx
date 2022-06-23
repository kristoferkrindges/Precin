import React, { useState } from "react";
import { NavSearchBar } from "./style";
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
			return value.public.toLowerCase().includes(searchWord.toLowerCase());
		});

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
			<div className="searchInputs">
				<input
					className="searchBar"
					type="text"
					placeholder={placeholder}
					value={wordEntered}
					onChange={handleFilter}
				/>
				<label className="searchIcon">
					{filteredData.length === 0 ? (
						<SearchIcon />
					) : (
						<CloseIcon id="clearBtn" onClick={clearInput} />
					)}
				</label>
			</div>
			{filteredData.length !== 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 5).map((value, key) => {
						return (
							<Link className="dataItem" to="/search_result">
								<p> {value.public} </p>
							</Link>
						);
					})}
				</div>
			)}
		</NavSearchBar>
	);
}

export default SearchBar;
