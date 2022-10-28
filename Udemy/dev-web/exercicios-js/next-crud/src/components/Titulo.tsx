export default function Titulo(props) {
    return (
        <div className="fle flex-col justify-center">
            <h1 className="px-5 py-2">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500 bg-purple-500" />
        </div>
    )
}