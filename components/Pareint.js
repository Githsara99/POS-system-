import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons' // Corrected typo in icon name

function Parent({ children }) { // Destructure children from props
    return (
        <div>
            <div>
                <aside>
                    <div className="flex flex-row place-items-center">
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
                    <div className="flex flex-row place-items-center">
                        <FontAwesomeIcon
                            style={{
                                height: 40,
                                width: 40
                            }}
                            icon={faHome} // Corrected icon name
                            size='xs'
                            color="white"
                        />
                        <a>POS</a>
                    </div>
                    <div className="flex flex-row place-items-center">
                        <FontAwesomeIcon
                            style={{
                                height: 40,
                                width: 40
                            }}
                            icon={faHome} // Corrected icon name
                            size='xs'
                            color="white"
                        />
                        <a>Stock</a>
                    </div>
                    <div className="flex flex-row place-items-center">
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
                    <div className="flex flex-row place-items-center">
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

                </aside>
            </div>
            <div>
                {children} {/* Render children passed to Parent */}
            </div>
        </div>
    )
}

export default Parent; // Corrected export name
