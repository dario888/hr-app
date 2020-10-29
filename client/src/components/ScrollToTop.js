import React, {useState, useEffect}  from 'react'



const ScrollToTop = ({scrollPos}) => {
 
    const [visible, setVisible] = useState(false);
    // console.log(scrollPos);

    //Movveing scroll to the top
    const scrollToTopHendler = () => window.scrollTo({top: 0, behavior: 'smooth'});
    

    useEffect(() => {
        if(scrollPos > 500){
            setVisible(true)
        } else {
            setVisible(false);
        }

        //eslint-disable-next-line  
    }, [scrollPos])

    if (!visible)return null;
    


    return (
        <div className="scrollToTop" onClick={scrollToTopHendler}>
            <i className="icon fas fa-chevron-up" ></i>
        </div>
    )
}

export default ScrollToTop
