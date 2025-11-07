



    "use client";
    import React, { useEffect, useState } from "react";

    const Nametag = ({ onSelect }) => {
    const [mon, setMon] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {   
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URS}/topics`);
            const data = await res.json();
            setMon(data);
        } catch (error) {
            console.error("Error fetching topics:", error);
        }
        };

        fetchTopics();
    }, []);

    return (
        <div>
        {mon.map((chumu) => (
            <div
            key={chumu.ratings}
            onClick={() => onSelect(chumu.ratings)}
            className="flex hover:cursor-pointer mt-8 py-4 items-center container mx-auto gap-6 border rounded-xl"
            >
            <img
                className="w-[85px] h-[63px] object-cover rounded-md"
                src={chumu.image}
                alt={chumu.flavour}
            />
            <div className="flex flex-col gap-1">
                <h1 className="font-bold">{chumu.flavour}</h1>
                <p>{chumu.specs.sole}</p>
                <button className="btn w-[70px] rounded-sm btn-primary">
                {chumu.specs.width}
                </button>
            </div>
            </div>
        ))}
        </div>
    );
    };

    export default Nametag;
