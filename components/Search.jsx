"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ pageName, section }) => {
  const search = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(search ? search.get("search") : null);
  const router = useRouter();

  const onSearch = (e) => {
    e.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery || '');

    router.push(`/finance/${section}/${pageName}/?&search=${encodedSearchQuery}`);
  };

  return (
    <>
      <form className="flex w-[50%] my-4 mx-[15rem]" onSubmit={onSearch}>
        <input type="search"
          value={searchQuery || ''}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control" placeholder="جستجو" />
        <button type="submit" className="btn btn-outline-success mx-2"><FaSearch className="bg-transparent" /></button>
      </form>
    </>
  )
}

export default Search;