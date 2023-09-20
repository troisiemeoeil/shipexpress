import React from 'react'
import arrowUp from "../../Assets/arrowUp.png"
import arrowDown from "../../Assets/arrowDown.png"


function Card({ShipmentNumber, image, destination, dport, arrival, aport, buyer, company}) {
    return (
        <div className=' p-4 m-4  h-auto  bg-slate-50 rounded-lg'>
            <div className='w-full flex flex-row justify-between  mb-5'>
                <div>
                    <h5 className='text-sm text-gray-300 font-semibold'>Shipment number</h5>
                    <h3 className='text-2xl font-bold'>{ShipmentNumber}</h3>
                </div>
                <img 
                 src={image} 
                 className='rounded-lg '
                 width="20%" 
                 height="auto" 
                 alt="truckImage" />
            </div>
            <div className='m-4'>    
            <div>
            <div className='w-full flex flex-row gap-3 py-2 justify-start '>
            <img 
                 src={arrowUp} 
                 className='rounded-full bg-lime-200'
                 width={"15%"} 
                 height={"5%"} 
                 alt="truckImage" />
                <div>
                <h3 className='text-l font-bold'>{destination}</h3>
                <h5 className='text-xs text-gray-300 font-semibold'>{dport}</h5>
                </div>
               
            </div>
            </div>

            <div>
            <div className='w-full flex flex-row gap-3 py-2 justify-start '>
            <img 
                 src={arrowDown} 
                 className='rounded-full bg-indigo-200'
                width={"15%"} 
                 height={"5%"} 
                 alt="truckImage" />
                <div>
                <h3 className='text-l font-bold'>{arrival}</h3>
                <h5 className='text-xs text-gray-300 font-semibold'>{aport}</h5>
                </div>
               
            </div>
            </div>
            </div>
            <div>
            <h5 className='text-sm text-gray-300 font-semibold'>Buyer</h5>
                <h3 className='text-l font-bold'>{buyer}</h3>
                <h5 className='text-xs text-gray-300 font-semibold '>{company}</h5>
                </div>

        </div>
    )
}

function Cards() {
  return (
  <div className='grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 p-2 m-4 h-auto '>
    <Card ShipmentNumber={"UA-145009BS"}
    image={"https://images.contentstack.io/v3/assets/blte891c850d5781579/bltdffe0cd7cea6ef38/how-much-does-a-semi-truck-weigh.jpg"}
    destination={"Athens, GRC "}
    dport={" Pïraeus Harbour"}
    arrival={"Tallinn, EST "}
    aport={"Hektor Container Port "}
    buyer={"Milton Hines "}
    company={"Fort Worth "}
    />
    <Card ShipmentNumber={"MK-568057HS"}
    image={"https://cdn.jdpower.com/how%20heavy%20is%20semi%20truck.jpg"}
    destination={"Yingkou, CHN "}
    dport={"Bayuquan District Yingkou "}
    arrival={"Abu Dhabi, UAE  "}
    aport={"Mina St, Zayed Port "}
    buyer={"Gary Muncy "}
    company={"Leonard Krower & Sons "}
    />
    <Card ShipmentNumber={"PL-781129GH"}
    image={"https://maafirm.com/wp-content/uploads/2022/10/How-Much-Does-a-Semi-truck-Weigh.jpg"}
    destination={"Huelva, ESP "}
    dport={"Port of Huelva "}
    arrival={"Madrid, ESP  "}
    aport={"Puerto de Madrid "}
    buyer={"Robert Williams "}
    company={"LTD Industries "}
    />
    <Card ShipmentNumber={"DA-234278XC"}
    image={"https://hyundaitrucks.com.au/images/news/2020/jul/news-070920-img01.jpg"}
    destination={"Boston, USA "}
    dport={"27 Drydock Boston "}
    arrival={"Cannes, FR "}
    aport={"Hartwell St, West Boylston "}
    buyer={"Vernon Bates  "}
    company={"Luria's "}
    />
    <Card ShipmentNumber={"ND-198754BS"}
    image={"https://images.hgmsites.net/hug/mercedes-benz-actros-hydrogen-electric-semi-prototype_100792147_h.jpg"}
    destination={"Yingkou, CHN "}
    dport={"Bayuquan District Yingkou "}
    arrival={"Abu Dhabi, UAE   "}
    aport={"Mina St, Zayed Port  "}
    buyer={"Barry Green"}
    company={"J.K. Gill Company"}
    />
    <Card ShipmentNumber={"UK-426733CC"}
    image={"https://media.wired.com/photos/59265be27034dc5f91beb230/master/w_2560%2Cc_limit/Toyota-FCHT-3-TA.jpg"}
    destination={" Malaga, ESP "}
    dport={"Port of Comuro "}
    arrival={"Abu Dhabi, UAE"}
    aport={"Mina St, Zayed Port"}
    buyer={"Robert Nocera"}
    company={"Solution Welding"}
    />

    </div>

  )
}

export default Cards