import oakproffessor from "../assets/img/oakproffessor.png"


const PokeHome = () => {
    
    return (
        <>
            <main className="framed ">
                
                <div className="imgContainer"> 
                    <img src={oakproffessor} alt="profesor pokemon" className="imfProfessor"/>
                    </div>

                <h1 className="framed"> Entrenador, Bienvenido.</h1>
            </main>
        </>
    );
};

export default PokeHome;