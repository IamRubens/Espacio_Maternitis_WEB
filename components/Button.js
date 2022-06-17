import Link from "next/dist/client/link"

const Button = ({path, position, text}) => {
    return (
        <div className={`div__button ${position}`}>
            <Link className="button__component" href={path}>
                <a>{text}</a>
            </Link>
        </div>
    )
}

export default Button