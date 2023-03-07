import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import styles from "@/styles/Search.module.css";

function useSearch() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?search=${search}`);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return { search, onSubmit, onChange };
}

export function Search() {
  const { search, onSubmit, onChange } = useSearch();

  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <input value={search} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
}
