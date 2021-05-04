import React, {useEffect} from 'react'
import { Button } from './Button';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';

export const Jumbotron = () => {
    const history = useHistory();

    const goToPage = (path) => {
        history.push(path)
    }

    useEffect(() => {
        gsap.from(".lg_img", {
            duration: 6,
            ease: 'power4.out',
            y: '3%'
        })
        gsap.from(".sm_img", {
            duration: 7,
            ease: 'power4.out',
            y: '3%'
        })
        gsap.from(".jumbo_header", {
            duration: 3,
            ease: 'circ.out',
            opacity: 0
        })
    }, [])

    return (
        <div className="jumbo">
            <div className="jumbo_header">
                <h1>HIGH-PERFORMANCE,
                    <br />
                    FOR EVERYONE
                </h1>
                <Button onClick={() => goToPage('/women')}>SHOP WOMENS</Button>
                <Button onClick={() => goToPage('/men')}>SHOP MENS</Button>
            </div>
            <img className="sm_img" src="https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <img className="lg_img" src="https://images.pexels.com/photos/3007759/pexels-photo-3007759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}
