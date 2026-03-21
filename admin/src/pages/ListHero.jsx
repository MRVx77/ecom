import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ListHero = ({ token }) => {
  const [heroes, setHeroes] = useState([]);

  const fetchHeroes = async () => {
    const { data } = await axios.get(backendUrl + "/api/hero/list");
    if (data.success) setHeroes(data.heroes);
  };

  const deleteHero = async (id) => {
    const { data } = await axios.post(
      backendUrl + "/api/hero/delete",
      { id },
      { headers: { token } }
    );

    if (data.success) {
      toast.success(data.message);
      fetchHeroes();
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {heroes.map((hero) => (
        <div key={hero._id} className="flex items-center gap-6 border p-4">
          <img src={hero.image} className="w-32" alt="" />
          <div className="flex-1">
            <p className="font-semibold">{hero.title}</p>
            <p>{hero.subtitle}</p>
            <p className="text-sm">{hero.buttonText}</p>
            <p className="text-sm font-semibold">Order: {hero.order}</p>
          </div>
          <button
            onClick={() => deleteHero(hero._id)}
            className="px-4 py-2 bg-red-600 text-white"
          >
            Delete
          </button>
          <input
            type="number"
            value={hero.order}
            className="w-20 px-2 py-1 border"
            onChange={async (e) => {
              const newOrder = e.target.value;
              await axios.post(
                backendUrl + "/api/hero/update-order",
                { id: hero._id, order: newOrder },
                { headers: { token } }
              );
              fetchHeroes();
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ListHero;
