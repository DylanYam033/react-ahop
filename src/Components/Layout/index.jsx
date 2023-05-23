// creamos el component layout que va a contener a los demas componenets para tener una misma estructura
// por eso recibe un children y lo dejamos listo para que reciba los componentes

function Layout({children}){
    return(
        <div className="flex flex-col mt-20 items-center">
            {children}
        </div>
    )
}

export {Layout}