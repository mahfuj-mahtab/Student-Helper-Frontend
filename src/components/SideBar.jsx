import Link from 'next/link'
import React from 'react'

function SideBar({options}) {
    return (
        <div> <aside id="default-sidebar" className="fixed bg-slate-900 top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
                <ul className="space-y-2 font-medium">
                    <li className='border-b-1 h-20 flex items-center justify-center'>
                        <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                            <svg className="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>
                    {options?.map((option)=>(

                    <li>
                        <Link href={option.url} className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                            <svg className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /></svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">{option.name}</span>
                            <span className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm border-green-600">New</span>
                        </Link>
                    </li>
                    ))}
               
                </ul>
            </div>
        </aside></div>
    )
}

export default SideBar