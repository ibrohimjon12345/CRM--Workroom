import React from 'react'
import Companylogo from '../img/logo.svg'
import Companyimg from '../img/vacations-img.png'

const Vacations = () => {
    return (
        <header className='py-5'>
            <div className="">
                <div className=''>
                    <a href="#">
                        <img src={Companylogo} alt="" />
                    </a>
                    <ul className=''>
                        <li><a href="">Boshqaruv paneli</a></li>
                        <li><a href="">Loyihalar</a></li>
                        <li><a href="">Taqvim</a></li>
                        <li><a href="">Ta'tillar</a></li>
                        <li><a href="">Xodimlar</a></li>
                        <li><a href="">Messendjer</a></li>
                        <li><a href="">Ma'lumot portali</a></li>
                    </ul>
                    <div className=''>
                        <img src={Companyimg} alt="" />
                        <a href="#">

                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Vacations