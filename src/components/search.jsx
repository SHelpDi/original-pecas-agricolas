import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <>
      <div className="search">
        <form action="">
          <input type="text" name="searche" placeholder="o que procura?" />
          <IoIosSearch />
        </form>
      </div>
    </>
  );
}
