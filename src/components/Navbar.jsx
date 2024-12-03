export default function Navbar() {
    return (
    <div className="px-4 py-3 border-b grid sm:grid-cols-[max-content_auto_max-content] grid-cols-[auto_max-content] gap-4">
            <div className="hidden sm:flex items-center">StayX</div>
            <div className="max-w-[400px] w-full flex justify-between sm:hidden text-sm border py-3 border-[#aaa] text-[#727f7f] rounded-full px-6 hover:bg-slate-50 cursor-pointer">
                <div className="text-[13px]">Location</div>
                <div>|</div>
                <div className="text-[13px]">Check in</div>
                <div>|</div>
                <div className="text-[13px]">Check out</div>
                <div>|</div>
                <div className="text-[13px]">Guest</div>
            </div>
            <div className="hidden w-full sm:grid grid-cols-[3fr_2fr_2fr_3fr] gap-3 max-w-[768px] mx-auto text-sm font-medium">
                <div className="border px-3 py-2 border-[#aaa] text-[#71717a] rounded-md hover:bg-slate-50 cursor-pointer">Location</div>
                <div className="border px-3 py-2 border-[#aaa] text-[#71717a] rounded-md hover:bg-slate-50 cursor-pointer">Check in</div>
                <div className="border px-3 py-2 border-[#aaa] text-[#71717a] rounded-md hover:bg-slate-50 cursor-pointer">Check out</div>
                <div className="border px-3 py-2 border-[#aaa] text-[#71717a] rounded-md hover:bg-slate-50 cursor-pointer">Guest</div>
            </div>
            <div className="flex items-center">User</div>
        </div>
    )
}