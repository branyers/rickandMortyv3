import React from 'react';
import { Card } from './Card';

export const Container = ({Characters, Page}) => {
    return (
                <div className='bg-gray-800 mt-40 py-10 flex justify-center flex-wrap gap-4'>
                    {Characters && console.log(Characters[Page-1])}
                    {Characters && Characters[Page-1].map((character) => {
                        return <Card key={character.id} Characters={character}/>
                    })}
                </div> 
    );
};
