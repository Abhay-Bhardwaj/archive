import React from 'react'
import { Card, CardContent } from './ui/card'
import { User2 } from 'lucide-react'

export default function ArchiveCard({data}) {
  return (
    <Card className='items-center m-2 p-1 cursor-pointer shadow-md'>
        <CardContent>
            <div>
                <div className='relative flex flex-col justify-center items-center m-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                    <h2 className='absolute bottom-0 font-semibold text-lg m-2'>{data.title}</h2>
                    <img className='rounded-md' height={250} width={250} src={data.photos.data[0].url} alt={data.photos.data[0].title} />
                </div>
                <div className='flex items-center'><User2 className='h-4'/> <span>{data.user.name}</span></div>
            </div>
            
        </CardContent>
    </Card>
  )
}
