import React from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
export const Container = ({ Characters, Page , itemsPerPage, handleClickSeleted }) => {

const Pages = Math.ceil(Page?.count / itemsPerPage);
    
  return (
    <>
      <div className="bg-gray-800 mt-40 py-10 flex justify-center flex-wrap gap-4">
        {Characters &&
          Characters.map((character) => {
            return <Card key={character.id} Characters={character} />;
          })}

        <Pagination Handleclick={handleClickSeleted} Pages={Pages} />
      </div>
    </>
  );
};
