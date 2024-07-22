import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function SearchTab({searchTerm, setSearchTerm, users}) {
  function change(e){
    setSearchTerm(e.target.value);
  }
  return (
    <div className='flex max-w-sm m-2 gap-2'>
        <Input
            type='search'
            variant='filled'
            placeholder='Search For Archive'
            value={searchTerm}
            onChange={(e) =>change(e) }
        />
         <Button type="submit">Search</Button>
    </div>
  )
}
