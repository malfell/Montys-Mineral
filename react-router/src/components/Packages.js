
// pass props to show packages
export default function Packages(props) {  
    // use maps to go through the packages
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
                
            </div>
        </div>
    )
}