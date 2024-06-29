import React from "react";

export default function Banner() {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const adress = process.env.NEXT_PUBLIC_ADRESS;

    const hours = [
        { title: 'Vardag', hours: process.env.NEXT_PUBLIC_OPEN_NORMAL },
        { title: 'Lördag', hours: process.env.NEXT_PUBLIC_OPEN_SATURDAY },
        { title: 'Söndag', hours: process.env.NEXT_PUBLIC_OPEN_SUNDAY },
    ]
    return(
        <div className="z-20 sticky top-0 bg-primary border-b-[1px] border-b-tertiary">
            <div className="main-width py-3 flex items-center gap-1 flex-col md:flex-row md:justify-between bg-primary text-primary text-sm">
                <div className="flex gap-2">
                    <a 
                        href={`tel:${phoneNumber}`}
                        className="hover:underline"
                    >
                        {phoneNumber}
                    </a>
                    <span>
                        ·
                    </span>
                    <a 
                        className="hover:underline"
                        href={process.env.NEXT_PUBLIC_MAPS_LINK}
                        target="_blank"
                    >
                        {adress}
                    </a>
                </div>
                <div className="flex gap-2">
                    {hours.map((hour, index) => (
                        <React.Fragment key={index}>
                            {index !== 0 && (
                                <span>
                                    ·
                                </span>
                            )}
                            <span>
                                {hour.title}
                                {' '}
                                {hour.hours}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}