import React from 'react'
import './ScheduledPayments.css'
import Company from './Company'

function CompanyList() {

    const companyData = [
        { id: 1, rate: "3.99", img: "https://1000logos.net/wp-content/uploads/2017/05/youtube-symbol.jpg", company: "Youtube" },
        { id: 2, rate: "5.99", img: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png", company: "Netflix" },
        { id: 3, rate: "2.99", img: "https://www.4kshooters.net/wp-content/uploads/2017/02/Vimeo.png", company: "Vimeo" },
        { id: 4, rate: "15.00", img: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png", company: "Spotify" }
    ]
    return (
        companyData.map((company) => <Company rate={company.rate} img={company.img} company={company.company} />)
    )
}

export default CompanyList