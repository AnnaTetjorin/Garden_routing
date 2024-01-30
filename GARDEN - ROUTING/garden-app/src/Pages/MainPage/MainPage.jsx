import { useState } from "react";
import { CategoriesList } from "../../components/Categories/CategoriesList";
import Discount from "../../components/Discount/Discount";
import DataUserForm from "../../components/Form/DataUserForm";
import { SaleList } from "../../components/Sale/SaleList";

function MainPage() {
  const [userList, setUserList] = useState([]);

  const addUserToList = (newUser) => setUserList([...userList, newUser]);

  return (
    <div>
      <Discount />
      <CategoriesList content="main" />
      <DataUserForm addUserToList={addUserToList} />
      <SaleList />
    </div>
  );
}

export default MainPage;
