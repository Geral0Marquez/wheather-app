import React, {useState, useEffect} from 'react';




const Loading = () => {

    const [isloading, setLoading] = useState(undefined);

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
            setLoading(true);
        });
        }, 1500);
    },[])

  


    return (
        <div>
            {
                !isloading ? <div className='loader'><h4 style={{position:"relative", bottom:"15%", left:"7%", fontSize:"25px"}}>One moment, please...!!!</h4>
                <img style={{width:"200px", height:"200px",position:"relative", top:"8%", right:"9%" }} src="img/loader.gif" alt=""/></div>: ""
              
            }
        </div>
    );
};

export default Loading;