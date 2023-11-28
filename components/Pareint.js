import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faShop } from '@fortawesome/free-solid-svg-icons' // Corrected typo in icon name

function Parent({ children }) { // Destructure children from props
    return (
        <div>
            <div>
                <aside className="p-6">
                    <div className="flex flex-row space-x-3 place-items-center">
                        <FontAwesomeIcon
                            style={{
                                height: 40,
                                width: 40
                            }}
                            icon={faHome} // Corrected icon name
                            size='xs'
                            color="white"
                        />
                        <a>Home</a>
                    </div>
                    <div className="flex flex-row space-x-3 place-items-center">
                        <FontAwesomeIcon
                            style={{
                                height: 40,
                                width: 40
                            }}
                            icon={faBars} // Corrected icon name
                            size='xs'
                            color="white"
                        />
                        <a>POS</a>
                    </div>
                    <div className="flex flex-row space-x-3 place-items-center">
                        <FontAwesomeIcon
                            style={{
                                height: 40,
                                width: 40
                            }}
                            icon={faShop} // Corrected icon name
                            size='xs'
                            color="white"
                        />
                        <a>Stock</a>
                    </div>
                    
                </aside>
            </div>
            <div className="ml-72 p-12 pt-16">
                {children} {/* Render children passed to Parent */}
            </div>
        </div>
    )
}

export default Parent; // Corrected export name
