import React from 'react';

import {Spinner, LockBody, ReleaseBody} from './styles/loading';
import {Picture} from '../header/styles/header';

export default function Loading({src, ...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody({children, ...restProps}) {
    return <ReleaseBody {...restProps}/>
}

// Loading.Lockbody = function LoadingLockbody({children, ...restProps}) {
//     return (
//         <LockBody {...resProps}>{children}</LockBody>
//     )
// }