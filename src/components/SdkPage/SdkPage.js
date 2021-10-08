import React from 'react'
import sdks from '../../sdks'
import Sdk from './Sdk/Sdk'
import '../../css/custom.css'

const SdkPage = () => {
    return (
        <div>
            <p className="sdk-page-title">Get up and running fast with Aserto SDKs.</p>

            <div className="sdks-div">
                {sdks.map((s) => 
                    <Sdk
                        key={s.title}
                        title={s.title}
                        icon={s.icon}
                        github={s.github}
                        docs={s.docs}
                    />
                )}
            </div>
        </div>    
    )
}

export default SdkPage